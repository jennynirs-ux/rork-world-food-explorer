import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, FlatList, type ListRenderItem } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect, useRouter } from 'expo-router';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import Paywall from '@/components/Paywall';
import { Globe2, List, Shuffle, Search, Circle, UtensilsCrossed, CheckCircle2, Heart } from 'lucide-react-native';
import Globe3D from '@/components/Globe3D';
import CountryListRow, { getCountryThumbnailUrl } from '@/components/explore/CountryListRow';
import DishOfTheDayCard from '@/components/explore/DishOfTheDayCard';
import StreakChip from '@/components/explore/StreakChip';
import UnlockWorldBanner from '@/components/explore/UnlockWorldBanner';
import QuickActions from '@/components/explore/QuickActions';
import { STATUS_COLORS, type CountryStatus } from '@/components/explore/palette';
import { useLocalDayNumber } from '@/components/explore/useLocalDay';
import { getDishForDay } from '@/lib/daily';
import { useStrings } from '@/lib/strings';
import { exploreStrings } from '@/lib/strings/explore';
import { PRODUCT_IDS } from '@/constants/monetization';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { isCountryAccessible } from '@/lib/access-control';
import { preloadImages } from '@/lib/image-utils';
import type { Country, CountryProgress } from '@/types';
import { translateContent } from '@/lib/translate-content';
import { CountryListSkeleton } from '@/components/SkeletonLoader';
import { hapticLight, hapticMedium } from '@/lib/haptics';
import colors from '@/constants/colors';
import { COUNTRY_COORDINATES } from '@/data/country-coordinates';

const EMPTY_IDS: string[] = [];
const EMPTY_COUNTRIES: Country[] = [];
const INITIAL_LIST_ROWS = 10;
const PREFETCH_LIST_THUMBNAILS = 8;
const PREFETCH_IN_PROGRESS = 5;

type LocalizedCountry = {
  name: string;
  continent: string;
  /** Normalized localized + English names, for search. */
  searchNames: string[];
};

function getCountryStatus(progress: CountryProgress | undefined): Exclude<CountryStatus, 'locked'> {
  if (!progress || !progress.visited) return 'to do';
  if (progress.fullyCompleted) return 'done';
  return 'cooking';
}

function getCompletionPercentage(progress: CountryProgress | undefined) {
  if (!progress) return 0;
  if (progress.fullyCompleted) return 100;
  return (progress.mainDishCooked ? 50 : 0) + (progress.quizCompleted ? 50 : 0);
}

/** Lowercase and strip diacritics so "suede" matches "Suède". */
function normalizeForSearch(value: string) {
  const lower = value.toLowerCase().trim();
  return typeof lower.normalize === 'function'
    ? lower.normalize('NFD').replace(/[̀-ͯ]/g, '')
    : lower;
}

const countryKeyExtractor = (country: Country) => country.id;

export default function ExploreScreen() {
  const { countryProgress, countries, userProfile, purchaseProduct, isLoading, stats } = useApp();
  const { t, language } = useTranslation();
  const s = useStrings(exploreStrings);
  const purchasedProducts = useMemo(() => userProfile.purchasedProducts || [], [userProfile.purchasedProducts]);
  const favoriteCountryIds = userProfile.favoriteCountries ?? EMPTY_IDS;
  const router = useRouter();
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [showPaywall, setShowPaywall] = useState(false);
  // Disables the map ScrollView while the user is rotating the globe.
  const [isGlobeDragging, setIsGlobeDragging] = useState(false);
  // The globe only animates (idle spin, pulsing rings) while this tab is visible.
  const [isScreenFocused, setIsScreenFocused] = useState(true);
  useFocusEffect(useCallback(() => {
    setIsScreenFocused(true);
    return () => setIsScreenFocused(false);
  }, []));

  const accessibleIds = useMemo(
    () => new Set(countries.filter(c => isCountryAccessible(c, purchasedProducts)).map(c => c.id)),
    [countries, purchasedProducts]
  );

  const ownsWorld = purchasedProducts.includes(PRODUCT_IDS.WORLD_UNLOCK_ALL);
  const showUnlockBanner = !ownsWorld && countries.length > 0 && accessibleIds.size < countries.length;

  const today = useLocalDayNumber();
  const dishOfTheDay = useMemo(() => getDishForDay(countries, today), [countries, today]);

  // Names/continents in the user's language (search also matches English).
  const localizedCountries = useMemo(() => {
    const map = new Map<string, LocalizedCountry>();
    for (const country of countries) {
      const name = translateContent(country.name, language);
      const englishName = translateContent(country.name, 'en');
      const searchNames = [normalizeForSearch(name)];
      if (englishName !== name) searchNames.push(normalizeForSearch(englishName));
      map.set(country.id, {
        name,
        continent: translateContent(country.continent, language),
        searchNames,
      });
    }
    return map;
  }, [countries, language]);

  const getLocalizedName = useCallback(
    (country: Country) => localizedCountries.get(country.id)?.name ?? translateContent(country.name, language),
    [localizedCountries, language]
  );

  const countryPins = useMemo(() => countries
    .filter(country => !!COUNTRY_COORDINATES[country.code])
    .map(country => {
      const coords = COUNTRY_COORDINATES[country.code];
      const accessible = accessibleIds.has(country.id);
      const progress = countryProgress[country.id];

      return {
        id: country.id,
        name: getLocalizedName(country),
        flag: country.flag,
        code: country.code,
        lat: coords.lat,
        lng: coords.lng,
        color: STATUS_COLORS[accessible ? getCountryStatus(progress) : 'locked'],
        status: accessible ? getCountryStatus(progress) : 'locked',
      };
    }), [countries, accessibleIds, countryProgress, getLocalizedName]);

  const handleCountryPress = useCallback((countryId: string) => {
    const country = countries.find(c => c.id === countryId);
    if (!country) return;

    // Always navigate — the country detail page handles its own lock/paywall
    router.push({ pathname: '/country/[id]' as any, params: { id: countryId } });
  }, [countries, router]);

  // Locked countries open too: the country page shows a teaser.
  const handleDishPress = useCallback(() => {
    if (!dishOfTheDay) return;
    hapticLight();
    router.push({
      pathname: '/country/[id]' as any,
      params: { id: dishOfTheDay.country.id, tab: 'recipes', recipe: dishOfTheDay.kind },
    });
  }, [dishOfTheDay, router]);

  const handleOpenPaywall = useCallback(() => {
    hapticLight();
    setShowPaywall(true);
  }, []);

  const handleRandomCountry = () => {
    hapticMedium();
    const accessibleCountries = countries.filter(c => accessibleIds.has(c.id));
    if (accessibleCountries.length === 0) {
      setShowPaywall(true);
      return;
    }
    const randomIndex = Math.floor(Math.random() * accessibleCountries.length);
    const randomCountry = accessibleCountries[randomIndex];
    router.push({ pathname: '/country/[id]' as any, params: { id: randomCountry.id } });
  };

  // Unlocked countries first, then locked; alphabetical by localized name.
  const sortedCountries = useMemo(() => [...countries].sort((a, b) => {
    const aAccessible = accessibleIds.has(a.id);
    const bAccessible = accessibleIds.has(b.id);
    if (aAccessible && !bAccessible) return -1;
    if (!aAccessible && bAccessible) return 1;
    return getLocalizedName(a).localeCompare(getLocalizedName(b), language);
  }), [countries, accessibleIds, getLocalizedName, language]);

  const filteredCountries = useMemo(() => {
    const query = normalizeForSearch(searchQuery);
    return sortedCountries.filter(country => {
      if (query) {
        const searchNames = localizedCountries.get(country.id)?.searchNames ?? [];
        if (!searchNames.some(name => name.includes(query))) return false;
      }

      if (!filterStatus) return true;
      if (filterStatus === 'favorites') {
        return favoriteCountryIds.includes(country.id);
      }
      // Locked countries always show (greyed out) regardless of filter, except in favorites view
      if (!accessibleIds.has(country.id)) return true;
      return getCountryStatus(countryProgress[country.id]) === filterStatus;
    });
  }, [sortedCountries, searchQuery, filterStatus, favoriteCountryIds, accessibleIds, countryProgress, localizedCountries]);

  const inProgressCountries = useMemo(() =>
    countries.filter(country => {
      const progress = countryProgress[country.id];
      return progress && progress.visited && !progress.fullyCompleted;
    }),
    [countries, countryProgress]
  );

  // One-time, low-priority prefetch: the first list thumbnails (same resized
  // URL FoodImage requests) and the banners of in-progress countries.
  const hasPrefetchedRef = useRef(false);
  useEffect(() => {
    if (hasPrefetchedRef.current || sortedCountries.length === 0) return;
    const timer = setTimeout(() => {
      hasPrefetchedRef.current = true;
      const thumbnailUrls = sortedCountries
        .slice(0, PREFETCH_LIST_THUMBNAILS)
        .map(c => c.landscapeImage)
        .filter((u): u is string => !!u)
        .map(getCountryThumbnailUrl);
      const inProgressUrls = inProgressCountries
        .slice(0, PREFETCH_IN_PROGRESS)
        .map(c => c.landscapeImage)
        .filter((u): u is string => !!u);
      void preloadImages(Array.from(new Set([...thumbnailUrls, ...inProgressUrls])));
    }, 500);
    return () => clearTimeout(timer);
  }, [sortedCountries, inProgressCountries]);

  const renderCountryItem = useCallback<ListRenderItem<Country>>(({ item: country }) => {
    const localized = localizedCountries.get(country.id);
    return (
      <CountryListRow
        countryId={country.id}
        name={localized?.name ?? translateContent(country.name, language)}
        continent={localized?.continent ?? translateContent(country.continent, language)}
        flag={country.flag}
        imageUri={country.landscapeImage}
        isAccessible={accessibleIds.has(country.id)}
        completionPercentage={getCompletionPercentage(countryProgress[country.id])}
        onPress={handleCountryPress}
        lockedLabel={t.ui.lockedLabel}
      />
    );
  }, [localizedCountries, language, accessibleIds, countryProgress, handleCountryPress, t.ui.lockedLabel]);

  const renderFilterBar = () => (
    <View style={styles.filterContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterScrollContent}>
        <TouchableOpacity
          style={[styles.filterButton, filterStatus === null && styles.filterButtonActive]}
          onPress={() => { hapticLight(); setFilterStatus(null); }}
          accessibilityLabel={t.explore.all}
          accessibilityState={{ selected: filterStatus === null }}
          accessibilityRole="button"
        >
          <Circle size={10} color={filterStatus === null ? '#FFF' : colors.gray300} fill={filterStatus === null ? '#FFF' : colors.gray300} />
          <Text style={[styles.filterText, filterStatus === null && styles.filterTextActive]}>{t.explore.all}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filterStatus === 'favorites' && styles.filterButtonActive]}
          onPress={() => { hapticLight(); setFilterStatus('favorites'); }}
          accessibilityLabel={t.explore.favsView}
          accessibilityState={{ selected: filterStatus === 'favorites' }}
          accessibilityRole="button"
        >
          <Heart size={14} color={filterStatus === 'favorites' ? '#FFF' : '#EF4444'} fill={filterStatus === 'favorites' ? '#FFF' : 'transparent'} />
          <Text style={[styles.filterText, filterStatus === 'favorites' && styles.filterTextActive]}>{t.explore.favsView}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filterStatus === 'to do' && styles.filterButtonActive]}
          onPress={() => { hapticLight(); setFilterStatus('to do'); }}
          accessibilityLabel={t.explore.toDo}
          accessibilityState={{ selected: filterStatus === 'to do' }}
          accessibilityRole="button"
        >
          <Circle size={10} color={filterStatus === 'to do' ? '#FFF' : STATUS_COLORS['to do']} fill={filterStatus === 'to do' ? '#FFF' : STATUS_COLORS['to do']} />
          <Text style={[styles.filterText, filterStatus === 'to do' && styles.filterTextActive]}>{t.explore.toDo}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filterStatus === 'cooking' && styles.filterButtonActive]}
          onPress={() => { hapticLight(); setFilterStatus('cooking'); }}
          accessibilityLabel={t.explore.cooking}
          accessibilityState={{ selected: filterStatus === 'cooking' }}
          accessibilityRole="button"
        >
          <UtensilsCrossed size={14} color={filterStatus === 'cooking' ? '#FFF' : colors.warningYellow} />
          <Text style={[styles.filterText, filterStatus === 'cooking' && styles.filterTextActive]}>{t.explore.cooking}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filterStatus === 'done' && styles.filterButtonActive]}
          onPress={() => { hapticLight(); setFilterStatus('done'); }}
          accessibilityLabel={t.explore.done}
          accessibilityState={{ selected: filterStatus === 'done' }}
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
        <Text style={styles.inProgressTitle}>{t.progress.inProgress}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.inProgressScroll}>
          {inProgressCountries.map(country => {
            const name = getLocalizedName(country);
            const percentage = getCompletionPercentage(countryProgress[country.id]);
            return (
              <TouchableOpacity
                key={country.id}
                style={styles.inProgressCard}
                onPress={() => handleCountryPress(country.id)}
                accessibilityLabel={`${name}, ${percentage}%`}
                accessibilityRole="button"
              >
                <Text style={styles.inProgressFlag}>{country.flag}</Text>
                <Text style={styles.inProgressName} numberOfLines={1}>{name}</Text>
                <Text style={styles.inProgressPercent}>{percentage}%</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  const renderListEmpty = () => {
    if (isLoading && countries.length === 0) {
      return <CountryListSkeleton count={6} />;
    }
    return (
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
            <Text style={styles.emptyListText}>{s.noResults}</Text>
          </>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{t.explore.title}</Text>
          {stats.currentStreak > 0 && <StreakChip count={stats.currentStreak} />}
        </View>
        <View style={styles.viewToggle}>
          <TouchableOpacity
            style={[styles.toggleButton, viewMode === 'map' && styles.toggleButtonActive]}
            onPress={() => { hapticLight(); setViewMode('map'); }}
            accessibilityLabel={t.explore.mapView}
            accessibilityState={{ selected: viewMode === 'map' }}
            accessibilityRole="button"
          >
            <Globe2 size={18} color={viewMode === 'map' ? '#FFF' : colors.gray500} />
            <Text style={[styles.toggleLabel, viewMode === 'map' && styles.toggleLabelActive]}>{t.explore.mapView}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, viewMode === 'list' && styles.toggleButtonActive]}
            onPress={() => { hapticLight(); setViewMode('list'); }}
            accessibilityLabel={t.explore.listView}
            accessibilityState={{ selected: viewMode === 'list' }}
            accessibilityRole="button"
          >
            <List size={18} color={viewMode === 'list' ? '#FFF' : colors.gray500} />
            <Text style={[styles.toggleLabel, viewMode === 'list' && styles.toggleLabelActive]}>{t.explore.listView}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {viewMode === 'map' ? (
        <View style={styles.mapViewContainer}>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
            scrollEnabled={!isGlobeDragging}
          >
            {dishOfTheDay && (
              <DishOfTheDayCard
                dishName={translateContent(dishOfTheDay.recipe.name, language)}
                countryName={getLocalizedName(dishOfTheDay.country)}
                flag={dishOfTheDay.country.flag}
                imageUrl={dishOfTheDay.recipe.imageUrl}
                cookingTime={dishOfTheDay.recipe.cookingTime}
                kind={dishOfTheDay.kind}
                isLocked={!accessibleIds.has(dishOfTheDay.country.id)}
                onPress={handleDishPress}
              />
            )}

            {renderFilterBar()}
            {renderInProgressStrip()}

            <View style={styles.section}>
              <View style={styles.globeWrapper}>
                <Globe3D
                  pins={countryPins}
                  onCountryPress={handleCountryPress}
                  filterStatus={filterStatus}
                  favoriteCountryIds={favoriteCountryIds}
                  onDragStateChange={setIsGlobeDragging}
                  accessibilityExploreHint={t.globe?.exploreHint}
                  animate={isScreenFocused}
                />
              </View>
            </View>

            {showUnlockBanner && (
              <View style={styles.bannerContainer}>
                <UnlockWorldBanner
                  unlocked={accessibleIds.size}
                  total={countries.length}
                  onPress={handleOpenPaywall}
                />
              </View>
            )}

            <QuickActions />

            <View style={{ height: 20 }} />
          </ScrollView>

          <TouchableOpacity
            style={styles.fab}
            onPress={handleRandomCountry}
            accessibilityLabel={t.explore.pickRandom}
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

          {/* Rows vary in height (long names wrap, locked rows have no progress bar), so no getItemLayout. */}
          <FlatList
            style={styles.list}
            data={isLoading && countries.length === 0 ? EMPTY_COUNTRIES : filteredCountries}
            keyExtractor={countryKeyExtractor}
            renderItem={renderCountryItem}
            ListHeaderComponent={showUnlockBanner && !searchQuery ? (
              <View style={styles.listBanner}>
                <UnlockWorldBanner
                  unlocked={accessibleIds.size}
                  total={countries.length}
                  onPress={handleOpenPaywall}
                />
              </View>
            ) : null}
            ListEmptyComponent={renderListEmpty()}
            ListFooterComponent={<View style={styles.listFooter} />}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            initialNumToRender={INITIAL_LIST_ROWS}
            maxToRenderPerBatch={INITIAL_LIST_ROWS}
            windowSize={7}
          />

        </View>
      )}

      <Paywall
        visible={showPaywall}
        onClose={() => setShowPaywall(false)}
        countries={countries}
        onPurchase={(productId) => {
          void purchaseProduct(productId);
          setShowPaywall(false);
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
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '700' as const,
    color: colors.text,
  },
  bannerContainer: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  listBanner: {
    marginBottom: 12,
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
    fontSize: 13,
    fontWeight: '600' as const,
    color: colors.textSecondary,
    marginBottom: 6,
  },
  inProgressScroll: {
    gap: 8,
  },
  inProgressCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.surface,
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  inProgressFlag: {
    fontSize: 16,
  },
  inProgressName: {
    fontSize: 13,
    fontWeight: '600' as const,
    color: colors.text,
    maxWidth: 120,
  },
  inProgressPercent: {
    fontSize: 12,
    fontWeight: '600' as const,
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
  listFooter: {
    height: 20,
  },
});
