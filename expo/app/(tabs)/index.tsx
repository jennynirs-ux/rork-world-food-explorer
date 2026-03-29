import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import Paywall from '@/components/Paywall';
import { Globe2, List, Shuffle, Search, Circle, UtensilsCrossed, CheckCircle2, Heart, Lock, BookOpen, ChefHat } from 'lucide-react-native';
import Globe3D from '@/components/Globe3D';
import { FoodImage } from '@/components/FoodImage';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { isCountryAccessible } from '@/lib/access-control';
import { preloadImages } from '@/lib/image-utils'
import { Country } from '@/types';
import { translateContent } from '@/lib/translate-content';
import { CountryListSkeleton } from '@/components/SkeletonLoader';
import { hapticLight, hapticMedium } from '@/lib/haptics';
import colors from '@/constants/colors';
import { COUNTRY_COORDINATES } from '@/data/country-coordinates';

export default function ExploreScreen() {
  const { countryProgress, countries, userProfile, purchaseProduct, countriesError, refetchCountries, isLoading } = useApp();
  const { t } = useTranslation();
  const purchasedProducts = useMemo(() => userProfile.purchasedProducts || [], [userProfile.purchasedProducts]);
  const router = useRouter();
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [showPaywall, setShowPaywall] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const getCountryStatus = (countryId: string) => {
    const progress = countryProgress[countryId];
    if (!progress || !progress.visited) return 'to do';
    if (progress.fullyCompleted) return 'done';
    return 'cooking';
  };

  const getCountryColor = (countryId: string) => {
    const progress = countryProgress[countryId];
    if (!progress || !progress.visited) return '#D1D5DB';
    if (progress.fullyCompleted) return '#10B981';
    if (progress.mainDishCooked) return '#F59E0B';
    return '#F59E0B';
  };

  const countryPins = useMemo(() => countries
    .filter(country => {
      const coords = COUNTRY_COORDINATES[country.code];
      return !!coords;
    })
    .map(country => {
      const coords = COUNTRY_COORDINATES[country.code];
      const accessible = isCountryAccessible(country, purchasedProducts);

      return {
        id: country.id,
        name: translateContent(country.name),
        flag: country.flag,
        code: country.code,
        lat: coords.lat,
        lng: coords.lng,
        color: accessible ? getCountryColor(country.id) : '#C0C0C0',
        status: accessible ? getCountryStatus(country.id) : 'locked',
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- getCountryColor/getCountryStatus depend on countryProgress which is in deps
    }), [countries, purchasedProducts, countryProgress]);

  const handleCountryPress = useCallback((countryId: string) => {
    const country = countries.find(c => c.id === countryId);
    if (!country) return;

    // Always navigate — the country detail page handles its own lock/paywall
    router.push({ pathname: '/country/[id]' as any, params: { id: countryId } });
  }, [countries, router]);

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await refetchCountries();
      const urls = countries.slice(0, 20).map(c => c.landscapeImage).filter((u): u is string => !!u);
      await preloadImages(urls);
    } catch {
      // Refresh failed silently — cached data still shown
    } finally {
      setRefreshing(false);
    }
  }, [countries, refetchCountries]);

  const handleRandomCountry = () => {
    hapticMedium();
    const accessibleCountries = countries.filter(c => isCountryAccessible(c, purchasedProducts));
    if (accessibleCountries.length === 0) {
      setShowPaywall(true);
      return;
    }
    const randomIndex = Math.floor(Math.random() * accessibleCountries.length);
    const randomCountry = accessibleCountries[randomIndex];
    router.push({ pathname: '/country/[id]' as any, params: { id: randomCountry.id } });
  };

  const filteredCountries = countries.filter(country => {
    const name = translateContent(country.name);
    const matchesSearch = name.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;

    if (!filterStatus) return true;
    if (filterStatus === 'favorites') {
      return (userProfile.favoriteCountries || []).includes(country.id);
    }
    // Locked countries always show (greyed out) regardless of filter, except in favorites view
    const accessible = isCountryAccessible(country, purchasedProducts);
    if (!accessible && filterStatus !== 'favorites') return true;
    const status = getCountryStatus(country.id);
    return status === filterStatus;
  }).sort((a, b) => {
    // Sort unlocked countries first, then locked
    const aAccessible = isCountryAccessible(a, purchasedProducts);
    const bAccessible = isCountryAccessible(b, purchasedProducts);
    if (aAccessible && !bAccessible) return -1;
    if (!aAccessible && bAccessible) return 1;
    return translateContent(a.name).localeCompare(translateContent(b.name));
  });

  const inProgressCountries = useMemo(() =>
    countries.filter(country => {
      const progress = countryProgress[country.id];
      return progress && progress.visited && !progress.fullyCompleted;
    }),
    [countries, countryProgress]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      const urls = filteredCountries.slice(0, 20).map(c => c.landscapeImage).filter((u): u is string => !!u);
      void preloadImages(urls);
    }, 500);
    return () => clearTimeout(timer);
  }, [filteredCountries]);

  const getInProgressPercentage = (countryId: string) => {
    const progress = countryProgress[countryId];
    if (!progress) return 0;
    if (progress.fullyCompleted) return 100;
    return (progress.mainDishCooked ? 50 : 0) + (progress.quizCompleted ? 50 : 0);
  };

  const renderCountryCard = useCallback((country: Country) => {
    const progress = countryProgress[country.id];
    const completionPercentage = !progress ? 0 : progress.fullyCompleted ? 100 :
      (progress.mainDishCooked ? 50 : 0) + (progress.quizCompleted ? 50 : 0);
    const isAccessible = isCountryAccessible(country, purchasedProducts);

    return (
      <TouchableOpacity
        key={country.id}
        style={[styles.countryCard, !isAccessible && styles.countryCardLocked]}
        onPress={() => handleCountryPress(country.id)}
        accessibilityLabel={`Explore ${translateContent(country.name)}, ${translateContent(country.continent)}${!isAccessible ? ', locked' : ''}`}
        accessibilityRole="button"
        activeOpacity={0.7}
      >
        <View style={!isAccessible ? styles.cardThumbnailLocked : undefined}>
          <FoodImage
            uri={country.landscapeImage}
            alt={translateContent(country.name)}
            type="landscape"
            width={80}
            style={styles.cardThumbnail}
          />
        </View>
        <View style={styles.flagButton}>
          <Text style={[styles.flag, !isAccessible && styles.flagLocked]}>{country.flag}</Text>
          {!isAccessible && (
            <View style={styles.lockBadge}>
              <Lock size={12} color="#FFF" />
            </View>
          )}
        </View>
        <View style={styles.countryInfo}>
          <View style={styles.countryNameRow}>
            <Text style={styles.countryName}>{translateContent(country.name)}</Text>
            {!isAccessible && (
              <View style={styles.lockIcon}>
                <Lock size={16} color="#9CA3AF" />
              </View>
            )}
          </View>
          <Text style={styles.continent}>{translateContent(country.continent)}</Text>
          {isAccessible && (
            <View style={styles.progressContainer}>
              <View style={styles.progressRow}>
                <View style={styles.progressBar}>
                  <View style={[styles.progressFill, { width: `${completionPercentage}%` }]} />
                </View>
                <Text style={styles.progressLabel}>{completionPercentage}%</Text>
              </View>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  }, [countryProgress, purchasedProducts, handleCountryPress]);

  const renderFilterBar = () => (
    <View style={styles.filterContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterScrollContent}>
        <TouchableOpacity
          style={[styles.filterButton, filterStatus === null && styles.filterButtonActive]}
          onPress={() => { hapticLight(); setFilterStatus(null); }}
          accessibilityLabel={`Filter: All${filterStatus === null ? ', selected' : ''}`}
          accessibilityRole="button"
        >
          <Circle size={10} color={filterStatus === null ? '#FFF' : colors.gray300} fill={filterStatus === null ? '#FFF' : colors.gray300} />
          <Text style={[styles.filterText, filterStatus === null && styles.filterTextActive]}>{t.explore.all}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filterStatus === 'favorites' && styles.filterButtonActive]}
          onPress={() => { hapticLight(); setFilterStatus('favorites'); }}
          accessibilityLabel={`Filter: Favorites${filterStatus === 'favorites' ? ', selected' : ''}`}
          accessibilityRole="button"
        >
          <Heart size={14} color={filterStatus === 'favorites' ? '#FFF' : '#EF4444'} fill={filterStatus === 'favorites' ? '#FFF' : 'transparent'} />
          <Text style={[styles.filterText, filterStatus === 'favorites' && styles.filterTextActive]}>{t.explore.favsView}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filterStatus === 'to do' && styles.filterButtonActive]}
          onPress={() => { hapticLight(); setFilterStatus('to do'); }}
          accessibilityLabel={`Filter: To do${filterStatus === 'to do' ? ', selected' : ''}`}
          accessibilityRole="button"
        >
          <Circle size={10} color={filterStatus === 'to do' ? '#FFF' : colors.gray300} fill={filterStatus === 'to do' ? '#FFF' : colors.gray300} />
          <Text style={[styles.filterText, filterStatus === 'to do' && styles.filterTextActive]}>{t.explore.toDo}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filterStatus === 'cooking' && styles.filterButtonActive]}
          onPress={() => { hapticLight(); setFilterStatus('cooking'); }}
          accessibilityLabel={`Filter: Cooking${filterStatus === 'cooking' ? ', selected' : ''}`}
          accessibilityRole="button"
        >
          <UtensilsCrossed size={14} color={filterStatus === 'cooking' ? '#FFF' : colors.warningYellow} />
          <Text style={[styles.filterText, filterStatus === 'cooking' && styles.filterTextActive]}>{t.explore.cooking}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filterStatus === 'done' && styles.filterButtonActive]}
          onPress={() => { hapticLight(); setFilterStatus('done'); }}
          accessibilityLabel={`Filter: Done${filterStatus === 'done' ? ', selected' : ''}`}
          accessibilityRole="button"
        >
          <CheckCircle2 size={14} color={filterStatus === 'done' ? '#FFF' : colors.successGreen} />
          <Text style={[styles.filterText, filterStatus === 'done' && styles.filterTextActive]}>{t.explore.done}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );

  const renderInProgressStrip = () => {
    if (inProgressCountries.length === 0) return null;
    return (
      <View style={styles.inProgressSection}>
        <Text style={styles.inProgressTitle}>In Progress</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.inProgressScroll}>
          {inProgressCountries.map(country => (
            <TouchableOpacity
              key={country.id}
              style={styles.inProgressCard}
              onPress={() => handleCountryPress(country.id)}
              accessibilityLabel={`Continue ${translateContent(country.name)}, ${getInProgressPercentage(country.id)}% complete`}
              accessibilityRole="button"
            >
              <Text style={styles.inProgressFlag}>{country.flag}</Text>
              <Text style={styles.inProgressName} numberOfLines={1}>{translateContent(country.name)}</Text>
              <Text style={styles.inProgressPercent}>{getInProgressPercentage(country.id)}%</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {countriesError && (
        <View style={styles.errorBanner}>
          <Text style={styles.errorBannerText}>Offline — showing cached data</Text>
        </View>
      )}
      <View style={styles.header}>
        <Text style={styles.title}>{t.explore.title}</Text>
        <View style={styles.viewToggle}>
          <TouchableOpacity
            style={[styles.toggleButton, viewMode === 'map' && styles.toggleButtonActive]}
            onPress={() => { hapticLight(); setViewMode('map'); }}
            accessibilityLabel={`Map view${viewMode === 'map' ? ', selected' : ''}`}
            accessibilityRole="button"
          >
            <Globe2 size={18} color={viewMode === 'map' ? '#FFF' : colors.gray500} />
            <Text style={[styles.toggleLabel, viewMode === 'map' && styles.toggleLabelActive]}>{t.explore.mapView}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, viewMode === 'list' && styles.toggleButtonActive]}
            onPress={() => { hapticLight(); setViewMode('list'); }}
            accessibilityLabel={`List view${viewMode === 'list' ? ', selected' : ''}`}
            accessibilityRole="button"
          >
            <List size={18} color={viewMode === 'list' ? '#FFF' : colors.gray500} />
            <Text style={[styles.toggleLabel, viewMode === 'list' && styles.toggleLabelActive]}>{t.explore.listView}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {viewMode === 'map' ? (
        <View style={styles.mapViewContainer}>
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor={colors.brand} />}>
            {renderFilterBar()}
            {renderInProgressStrip()}

            <View style={styles.section}>
              <View style={styles.globeWrapper}>
                <Globe3D pins={countryPins} onCountryPress={handleCountryPress} filterStatus={filterStatus} accessibilityExploreHint={t.globe?.exploreHint} />
              </View>
            </View>

            <View style={styles.quickActions}>
              <TouchableOpacity
                style={[styles.quickActionButton, styles.quickActionCook]}
                onPress={() => { hapticLight(); router.push('/ingredient-match'); }}
                accessibilityLabel="What can I cook"
                accessibilityRole="button"
              >
                <ChefHat size={18} color="#E8590C" />
                <View style={styles.quickActionTextContainer}>
                  <Text style={styles.quickActionText}>{t.explore.whatCanICook}</Text>
                  <Text style={styles.quickActionSubtitle}>Match your ingredients</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.quickActionButton, styles.quickActionCollections]}
                onPress={() => { hapticLight(); router.push('/collections'); }}
                accessibilityLabel="Collections"
                accessibilityRole="button"
              >
                <BookOpen size={18} color="#16A34A" />
                <View style={styles.quickActionTextContainer}>
                  <Text style={styles.quickActionText}>{t.explore.collections}</Text>
                  <Text style={styles.quickActionSubtitle}>Browse curated sets</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{ height: 20 }} />
          </ScrollView>

          <TouchableOpacity
            style={styles.fab}
            onPress={handleRandomCountry}
            accessibilityLabel="Pick a random country"
            accessibilityRole="button"
          >
            <Shuffle size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.listContainer}>
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <Search size={20} color="#9CA3AF" />
              <TextInput
                style={styles.searchInput}
                placeholder={t.explore.searchCountries}
                placeholderTextColor="#9CA3AF"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>
          </View>

          {renderFilterBar()}
          {renderInProgressStrip()}

          <ScrollView
            style={styles.list}
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor={colors.brand} />}
          >
            {isLoading && countries.length === 0 ? (
              <CountryListSkeleton count={6} />
            ) : filteredCountries.length === 0 ? (
              <View style={styles.emptyListState}>
                {filterStatus === 'favorites' ? (
                  <>
                    <Heart size={48} color={colors.gray300} />
                    <Text style={styles.emptyListText}>{t.explore.noFavorites}</Text>
                    <Text style={styles.emptyListSubtext}>{t.explore.noFavoritesDesc}</Text>
                  </>
                ) : (
                  <>
                    <Search size={48} color={colors.gray300} />
                    <Text style={styles.emptyListText}>No countries match your search</Text>
                  </>
                )}
              </View>
            ) : (
              filteredCountries.map(renderCountryCard)
            )}
            <View style={{ height: 20 }} />
          </ScrollView>

          <View style={styles.quickActions}>
            <TouchableOpacity
              style={[styles.quickActionButton, styles.quickActionCook]}
              onPress={() => { hapticLight(); router.push('/ingredient-match'); }}
              accessibilityLabel="What can I cook"
              accessibilityRole="button"
            >
              <ChefHat size={18} color="#E8590C" />
              <View style={styles.quickActionTextContainer}>
                <Text style={styles.quickActionText}>{t.explore.whatCanICook}</Text>
                <Text style={styles.quickActionSubtitle}>Match your ingredients</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.quickActionButton, styles.quickActionCollections]}
              onPress={() => { hapticLight(); router.push('/collections'); }}
              accessibilityLabel="Collections"
              accessibilityRole="button"
            >
              <BookOpen size={18} color="#16A34A" />
              <View style={styles.quickActionTextContainer}>
                <Text style={styles.quickActionText}>{t.explore.collections}</Text>
                <Text style={styles.quickActionSubtitle}>Browse curated sets</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <Paywall
        visible={showPaywall}
        onClose={() => {
          setShowPaywall(false);
          setSelectedCountry(null);
        }}
        country={selectedCountry ? countries.find(c => c.id === selectedCountry) : undefined}
        countries={countries}
        onPurchase={(productId) => {
          void purchaseProduct(productId);
          setShowPaywall(false);
          setSelectedCountry(null);
        }}
        purchasedProducts={purchasedProducts}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  errorBanner: {
    backgroundColor: '#FEF3C7',
    paddingVertical: 6,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  errorBannerText: {
    color: '#92400E',
    fontSize: 13,
    fontWeight: '500',
  },
  emptyListState: {
    alignItems: 'center',
    paddingVertical: 60,
    gap: 12,
  },
  emptyListText: {
    color: colors.gray400,
    fontSize: 16,
  },
  emptyListSubtext: {
    color: colors.gray400,
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 32,
    lineHeight: 20,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '700' as const,
    color: colors.text,
    marginBottom: 12,
  },
  quickActions: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 8,
  },
  quickActionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
    borderWidth: 1,
  },
  quickActionCook: {
    backgroundColor: '#FFF3ED',
    borderColor: '#FDDCC8',
  },
  quickActionCollections: {
    backgroundColor: '#F0FDF4',
    borderColor: '#D1FAE5',
  },
  quickActionTextContainer: {
    flexShrink: 1,
  },
  quickActionText: {
    fontSize: 13,
    fontWeight: '600' as const,
    color: colors.text,
  },
  quickActionSubtitle: {
    fontSize: 11,
    color: colors.gray400,
    marginTop: 1,
  },
  viewToggle: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 4,
    gap: 4,
  },
  toggleButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    gap: 6,
  },
  toggleLabel: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: colors.gray500,
  },
  toggleLabelActive: {
    color: '#FFF',
  },
  toggleButtonActive: {
    backgroundColor: colors.brand,
  },
  mapViewContainer: {
    flex: 1,
  },
  section: {
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  globeWrapper: {
    backgroundColor: colors.surface,
    borderRadius: 24,
    paddingVertical: 20,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 80,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.brand,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    boxShadow: '0px 4px 12px rgba(255, 107, 53, 0.4)',
  },
  filterContainer: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  filterScrollContent: {
    gap: 8,
    paddingVertical: 4,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: colors.gray100,
  },
  filterButtonActive: {
    backgroundColor: colors.gray500,
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: colors.gray500,
  },
  filterTextActive: {
    color: '#FFF',
  },
  inProgressSection: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  inProgressTitle: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  inProgressScroll: {
    gap: 10,
  },
  inProgressCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: 'center',
    gap: 4,
    minWidth: 80,
    borderWidth: 1,
    borderColor: colors.border,
  },
  inProgressFlag: {
    fontSize: 24,
  },
  inProgressName: {
    fontSize: 12,
    fontWeight: '600' as const,
    color: colors.text,
    maxWidth: 70,
    textAlign: 'center',
  },
  inProgressPercent: {
    fontSize: 11,
    fontWeight: '500' as const,
    color: colors.warningYellow,
  },
  listContainer: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
  },
  list: {
    flex: 1,
    paddingHorizontal: 16,
  },
  countryCard: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    gap: 12,
    alignItems: 'center',
  },
  cardThumbnail: {
    width: 80,
    height: 56,
    borderRadius: 8,
  },
  flagButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flag: {
    fontSize: 40,
  },
  countryInfo: {
    flex: 1,
    gap: 4,
  },
  countryName: {
    fontSize: 18,
    fontWeight: '600' as const,
    color: colors.text,
  },
  continent: {
    fontSize: 14,
    color: colors.gray500,
  },
  progressContainer: {
    marginTop: 4,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  progressLabel: {
    fontSize: 11,
    fontWeight: '500' as const,
    color: colors.gray400,
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: colors.sand,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.successGreen,
    borderRadius: 3,
  },
  countryListSection: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.text,
    marginBottom: 16,
  },
  countryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  countryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    gap: 8,
    minWidth: '47%',
    maxWidth: '47%',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
    elevation: 1,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  countryChipFlag: {
    fontSize: 20,
  },
  countryChipName: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600' as const,
    color: colors.text,
  },
  emptyFavorites: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingTop: 80,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.text,
    marginTop: 24,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 16,
    color: colors.gray500,
    textAlign: 'center',
    lineHeight: 24,
  },
  countryNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  lockIcon: {
    opacity: 0.6,
  },
  lockBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    backgroundColor: colors.brand,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.surface,
  },
  flagLocked: {
    opacity: 0.5,
  },
  countryCardLocked: {
    backgroundColor: '#F3F2EF',
    opacity: 0.75,
  },
  cardThumbnailLocked: {
    opacity: 0.5,
    borderRadius: 8,
    overflow: 'hidden',
  },
})
