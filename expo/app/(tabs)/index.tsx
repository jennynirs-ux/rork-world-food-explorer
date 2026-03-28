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

export default function ExploreScreen() {
  const { countryProgress, countries, userProfile, purchaseProduct, countriesError, refetchCountries, isLoading } = useApp();
  const { t } = useTranslation();
  const purchasedProducts = useMemo(() => userProfile.purchasedProducts || [], [userProfile.purchasedProducts]);
  const router = useRouter();
  const [viewMode, setViewMode] = useState<'map' | 'list' | 'favorites'>('map');
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

  // Pixel coordinates are on an 800x450 equirectangular map image
  const MAP_WIDTH = 800;
  const MAP_HEIGHT = 450;

  const countryPins = countries
    .filter(country => country.coordinates && country.coordinates.x != null && country.coordinates.y != null && isCountryAccessible(country, purchasedProducts))
    .map(country => {
      const lng = (country.coordinates!.x / MAP_WIDTH) * 360 - 180;
      const lat = 90 - (country.coordinates!.y / MAP_HEIGHT) * 180;
      
      return {
        id: country.id,
        name: translateContent(country.name),
        flag: country.flag,
        code: country.code,
        lat,
        lng,
        color: getCountryColor(country.id),
        status: getCountryStatus(country.id),
      };
    });

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
    const status = getCountryStatus(country.id);
    return status === filterStatus;
  }).sort((a, b) => translateContent(a.name).localeCompare(translateContent(b.name)));

  const favoriteCountries = useMemo(() =>
    filteredCountries.filter(country => (userProfile.favoriteCountries || []).includes(country.id)),
    [filteredCountries, userProfile.favoriteCountries]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      const urls = filteredCountries.slice(0, 20).map(c => c.landscapeImage).filter((u): u is string => !!u);
      void preloadImages(urls);
    }, 500);
    return () => clearTimeout(timer);
  }, [filteredCountries]);

  const renderCountryCard = useCallback((country: Country) => {
    const progress = countryProgress[country.id];
    const completionPercentage = !progress ? 0 : progress.fullyCompleted ? 100 :
      (progress.mainDishCooked ? 50 : 0) + (progress.quizCompleted ? 50 : 0);
    const isAccessible = isCountryAccessible(country, purchasedProducts);

    return (
      <View key={country.id} style={styles.countryCard}>
        <TouchableOpacity
          onPress={() => handleCountryPress(country.id)}
          accessibilityLabel={`${translateContent(country.name)} image`}
          accessibilityRole="button"
        >
          <FoodImage
            uri={country.landscapeImage}
            alt={translateContent(country.name)}
            type="landscape"
            width={80}
            style={styles.cardThumbnail}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.flagButton}
          onPress={() => handleCountryPress(country.id)}
          accessibilityLabel={`${translateContent(country.name)} flag${!isAccessible ? ', locked' : ''}`}
          accessibilityRole="button"
        >
          <Text style={[styles.flag, !isAccessible && styles.flagLocked]}>{country.flag}</Text>
          {!isAccessible && (
            <View style={styles.lockBadge}>
              <Lock size={12} color="#FFF" />
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.countryInfo}
          onPress={() => handleCountryPress(country.id)}
          accessibilityLabel={`Explore ${translateContent(country.name)}, ${translateContent(country.continent)}${!isAccessible ? ', locked' : ''}`}
          accessibilityRole="button"
        >
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
        </TouchableOpacity>
      </View>
    );
  }, [countryProgress, purchasedProducts, handleCountryPress]);

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
            <Globe2 size={18} color={viewMode === 'map' ? '#FFF' : '#6B7280'} />
            <Text style={[styles.toggleLabel, viewMode === 'map' && styles.toggleLabelActive]}>{t.explore.mapView}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, viewMode === 'list' && styles.toggleButtonActive]}
            onPress={() => { hapticLight(); setViewMode('list'); }}
            accessibilityLabel={`List view${viewMode === 'list' ? ', selected' : ''}`}
            accessibilityRole="button"
          >
            <List size={18} color={viewMode === 'list' ? '#FFF' : '#6B7280'} />
            <Text style={[styles.toggleLabel, viewMode === 'list' && styles.toggleLabelActive]}>{t.explore.listView}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, viewMode === 'favorites' && styles.toggleButtonActive]}
            onPress={() => { hapticLight(); setViewMode('favorites'); }}
            accessibilityLabel={`Favorites view${viewMode === 'favorites' ? ', selected' : ''}`}
            accessibilityRole="button"
          >
            <Heart size={18} color={viewMode === 'favorites' ? '#FFF' : '#6B7280'} fill={viewMode === 'favorites' ? '#FFF' : 'transparent'} />
            <Text style={[styles.toggleLabel, viewMode === 'favorites' && styles.toggleLabelActive]}>{t.explore.favsView}</Text>
          </TouchableOpacity>
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

      {viewMode === 'favorites' ? (
        <View style={styles.listContainer}>
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <Search size={20} color="#9CA3AF" />
              <TextInput
                style={styles.searchInput}
                placeholder={t.explore.searchFavorites}
                placeholderTextColor="#9CA3AF"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>
          </View>
          
          <ScrollView
            style={styles.list}
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor="#FF6B35" />}
          >
            {isLoading && countries.length === 0 ? (
              <CountryListSkeleton count={4} />
            ) : (
              favoriteCountries.map(renderCountryCard)
            )}
            {!isLoading && favoriteCountries.length === 0 && (
              <View style={styles.emptyFavorites}>
                <Heart size={64} color="#D1D5DB" />
                <Text style={styles.emptyTitle}>{t.explore.noFavorites}</Text>
                <Text style={styles.emptyText}>{t.explore.noFavoritesDesc}</Text>
              </View>
            )}
            <View style={{ height: 20 }} />
          </ScrollView>
        </View>
      ) : viewMode === 'map' ? (
        <View style={styles.mapViewContainer}>
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
            <View style={styles.section}>
              <View style={styles.globeWrapper}>
                <Globe3D pins={countryPins} onCountryPress={handleCountryPress} filterStatus={filterStatus} accessibilityExploreHint={t.globe?.exploreHint} />
              </View>
              
              <TouchableOpacity
                style={styles.randomButton}
                onPress={handleRandomCountry}
                accessibilityLabel="Pick a random country"
                accessibilityRole="button"
              >
                <Shuffle size={20} color="#FFF" />
                <Text style={styles.randomButtonText}>{t.explore.pickRandom}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.countryListSection}>
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
              <Text style={styles.sectionTitle}>
                {filterStatus === 'to do' ? t.explore.toDoCountries : filterStatus === 'cooking' ? t.explore.cookingCountries : filterStatus === 'done' ? t.explore.doneCountries : t.explore.allCountries} ({filteredCountries.length})
              </Text>
              <View style={styles.countryGrid}>
                {filteredCountries.map(country => {
                  const status = getCountryStatus(country.id);
                  const statusColor = status === 'done' ? '#10B981' : status === 'cooking' ? '#F59E0B' : '#D1D5DB';
                  const isAccessible = isCountryAccessible(country, purchasedProducts);
                  
                  return (
                    <TouchableOpacity
                      key={country.id}
                      style={styles.countryChip}
                      onPress={() => handleCountryPress(country.id)}
                      accessibilityLabel={`${translateContent(country.name)}, ${status}${!isAccessible ? ', locked' : ''}`}
                      accessibilityRole="button"
                    >
                      {isAccessible ? (
                        <View style={[styles.statusDot, { backgroundColor: statusColor }]} />
                      ) : (
                        <Lock size={10} color="#9CA3AF" />
                      )}
                      <Text style={[styles.countryChipFlag, !isAccessible && styles.flagLocked]}>{country.flag}</Text>
                      <Text style={styles.countryChipName} numberOfLines={1}>{translateContent(country.name)}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            <View style={{ height: 20 }} />
          </ScrollView>

          <View style={styles.filterContainer}>
            <TouchableOpacity
              style={[styles.filterButton, filterStatus === null && styles.filterButtonActive]}
              onPress={() => { hapticLight(); setFilterStatus(null); }}
              accessibilityLabel={`Filter: All${filterStatus === null ? ', selected' : ''}`}
              accessibilityRole="button"
            >
              <Circle size={10} color={filterStatus === null ? '#FFF' : '#D1D5DB'} fill={filterStatus === null ? '#FFF' : '#D1D5DB'} />
              <Text style={[styles.filterText, filterStatus === null && styles.filterTextActive]}>{t.explore.all}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.filterButton, filterStatus === 'to do' && styles.filterButtonActive]}
              onPress={() => { hapticLight(); setFilterStatus('to do'); }}
              accessibilityLabel={`Filter: To do${filterStatus === 'to do' ? ', selected' : ''}`}
              accessibilityRole="button"
            >
              <Circle size={10} color={filterStatus === 'to do' ? '#FFF' : '#D1D5DB'} fill={filterStatus === 'to do' ? '#FFF' : '#D1D5DB'} />
              <Text style={[styles.filterText, filterStatus === 'to do' && styles.filterTextActive]}>{t.explore.toDo}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.filterButton, filterStatus === 'cooking' && styles.filterButtonActive]}
              onPress={() => { hapticLight(); setFilterStatus('cooking'); }}
              accessibilityLabel={`Filter: Cooking${filterStatus === 'cooking' ? ', selected' : ''}`}
              accessibilityRole="button"
            >
              <UtensilsCrossed size={14} color={filterStatus === 'cooking' ? '#FFF' : '#F59E0B'} />
              <Text style={[styles.filterText, filterStatus === 'cooking' && styles.filterTextActive]}>{t.explore.cooking}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.filterButton, filterStatus === 'done' && styles.filterButtonActive]}
              onPress={() => { hapticLight(); setFilterStatus('done'); }}
              accessibilityLabel={`Filter: Done${filterStatus === 'done' ? ', selected' : ''}`}
              accessibilityRole="button"
            >
              <CheckCircle2 size={14} color={filterStatus === 'done' ? '#FFF' : '#10B981'} />
              <Text style={[styles.filterText, filterStatus === 'done' && styles.filterTextActive]}>{t.explore.done}</Text>
            </TouchableOpacity>
          </View>
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
          
          <ScrollView
            style={styles.list}
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor="#FF6B35" />}
          >
            {isLoading && countries.length === 0 ? (
              <CountryListSkeleton count={6} />
            ) : filteredCountries.length === 0 ? (
              <View style={styles.emptyListState}>
                <Search size={48} color="#D1D5DB" />
                <Text style={styles.emptyListText}>No countries match your search</Text>
              </View>
            ) : (
              filteredCountries.map(renderCountryCard)
            )}
            <View style={{ height: 20 }} />
          </ScrollView>
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
    color: '#9CA3AF',
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '700' as const,
    color: '#2D1B00',
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
    color: '#9CA3AF',
    marginTop: 1,
  },
  viewToggle: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 4,
    gap: 4,
  },
  toggleButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    alignItems: 'center',
    gap: 2,
  },
  toggleLabel: {
    fontSize: 10,
    fontWeight: '600' as const,
    color: '#6B7280',
  },
  toggleLabelActive: {
    color: '#FFF',
  },
  toggleButtonActive: {
    backgroundColor: '#FF6B35',
  },
  mapViewContainer: {
    flex: 1,
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  globeWrapper: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    overflow: 'hidden',
    paddingVertical: 20,
  },
  randomButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6B35',
    paddingVertical: 16,
    borderRadius: 16,
    marginTop: 16,
    gap: 8,
    boxShadow: '0px 4px 8px rgba(255, 107, 53, 0.3)',
    elevation: 4,
  },
  randomButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600' as const,
  },
  filterContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    gap: 8,
    boxShadow: '0px -4px 8px rgba(0, 0, 0, 0.1)',
    elevation: 8,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
  },
  filterButtonActive: {
    backgroundColor: '#6B7280',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: '#6B7280',
  },
  filterTextActive: {
    color: '#FFF',
  },
  listContainer: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#2D1B00',
  },
  list: {
    flex: 1,
    paddingHorizontal: 16,
  },
  countryCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
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
    color: '#2D1B00',
  },
  continent: {
    fontSize: 14,
    color: '#6B7280',
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
    color: '#9CA3AF',
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: '#E8D5C4',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#10B981',
    borderRadius: 3,
  },
  countryListSection: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: '#2D1B00',
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
    backgroundColor: '#FFF',
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
    color: '#2D1B00',
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
    color: '#2D1B00',
    marginTop: 24,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 16,
    color: '#6B7280',
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
    backgroundColor: '#FF6B35',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  flagLocked: {
    opacity: 0.5,
  },
})
