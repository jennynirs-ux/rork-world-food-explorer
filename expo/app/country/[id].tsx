import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Alert
} from 'react-native';
import { FoodImage } from '@/components/FoodImage';
import { preloadImages } from '@/lib/image-utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useApp } from '@/contexts/AppContext';
import { isCountryAccessible } from '@/lib/access-control';
import { hapticSuccess, hapticError, hapticMedium, hapticSelection, hapticLight } from '@/lib/haptics';
import { shareRecipe, shareCookedIt, shareBadge, shareProgress, localizeBadge, selectPassportFlags, countCookedCountries } from '@/lib/share';
import CelebrationSheet from '@/components/celebration/CelebrationSheet';
import { PASSPORT_MAX_FLAGS, useShareCard } from '@/components/share/ShareCard';
import { areNotificationsEnabled, enableNotifications } from '@/lib/notifications';
import type { Badge } from '@/types';
import { trackPositiveAction } from '@/lib/rating';
import Paywall from '@/components/Paywall';
import CookingMode from '@/components/CookingMode';
import { regionalVariations } from '@/data/regional-variations';
import { trackEvent, EVENTS } from '@/lib/analytics';
import { useTranslation } from '@/lib/i18n';
import { useTranslatedCountry } from '@/lib/use-translated-country';
import colors from '@/constants/colors';
import { CountryDetailSkeleton } from '@/components/SkeletonLoader';
import AboutTab from '@/components/country/AboutTab';
import RecipesTab from '@/components/country/RecipesTab';
import QuizTab from '@/components/country/QuizTab';
import { roundAmount } from '@/lib/format-amount';
import UnlockBar, { UNLOCK_BAR_HEIGHT } from '@/components/country/UnlockBar';
import { useOfferings } from '@/components/paywall/useOfferings';
import { cheapestUnlockForCountry, resolvePrice } from '@/components/paywall/pricing';
import { isPurchasesConfigured, canMakePurchases } from '@/lib/purchases';
import { useStrings, fill } from '@/lib/strings';
import { paywallStrings } from '@/lib/strings/paywall';
import {
  ArrowLeft,
  Info,
  Utensils,
  HelpCircle,
  Heart,
  SkipForward,
  SkipBack,
  Lock,
} from 'lucide-react-native';

export default function CountryDetailScreen() {
  const { id, tab, recipe } = useLocalSearchParams<{ id: string; tab?: string; recipe?: string }>();
  const router = useRouter();
  const { t } = useTranslation();
  const s = useStrings(paywallStrings);
  const { 
    countries,
    countryProgress, 
    updateCountryProgress, 
    addToShoppingList,
    addFavoriteRecipe,
    removeFavoriteRecipe,
    isRecipeFavorite,
    toggleFavoriteCountry,
    isFavoriteCountry,
    updateRecipeRating,
    userProfile,
    purchaseProduct,
    trackDifficultyCooked,
    badges,
    stats,
  } = useApp();
  
  const lang = userProfile.language || 'en';

  const goBack = useCallback(() => {
    if (router.canGoBack()) router.back();
    else router.replace('/(tabs)');
  }, [router]);
  
  const scrollViewRef = useRef<ScrollView>(null);
  const [activeTab, setActiveTab] = useState<'about' | 'recipes' | 'quiz'>('about');
  const [mainDishServings, setMainDishServings] = useState(4);
  const [dessertServings, setDessertServings] = useState(4);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [showMainDishRating, setShowMainDishRating] = useState(false);
  const [showDessertRating, setShowDessertRating] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [cookingMode, setCookingMode] = useState<{ steps: string[]; name: string; isDessert: boolean } | null>(null);
  const [celebration, setCelebration] = useState<{
    kind: 'dish' | 'quiz';
    subtitle: string;
    points: number;
    isDessert?: boolean;
    showReminder: boolean;
  } | null>(null);
  const [newBadge, setNewBadge] = useState<Badge | null>(null);
  const [remindersOn, setRemindersOn] = useState(true);
  const { shareCard, shareCardHost, isSharing } = useShareCard();

  useEffect(() => {
    areNotificationsEnabled().then(setRemindersOn).catch(() => {});
  }, []);

  // Surface a badge earned by the action being celebrated.
  const earnedBadgeIds = useRef<Set<string> | null>(null);
  useEffect(() => {
    const earned = new Set(badges.filter(b => b.earned).map(b => b.id));
    const previous = earnedBadgeIds.current;
    if (previous && celebration) {
      const fresh = badges.find(b => b.earned && !previous.has(b.id));
      if (fresh) setNewBadge(fresh);
    }
    earnedBadgeIds.current = earned;
  }, [badges, celebration]);

  // Scroll to top and reset tab when navigating to a new country
  useEffect(() => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: false });
    setActiveTab('about');
    setQuizAnswers([]);
  }, [id]);

  const countryData = countries.find(c => c.id === id);
  const country = useTranslatedCountry(countryData, lang);
  const currentCountryIndex = countries.findIndex(c => c.id === id);

  const progress = useMemo(() => {
    if (!country) return null;
    return countryProgress[country.id] || {
      visited: false,
      mainDishCooked: false,
      dessertCooked: false,
      quizCompleted: false,
      fullyCompleted: false,
    };
  }, [country, countryProgress]);

  const countryVariations = useMemo(() => {
    if (!country) return [];
    return regionalVariations.filter(v =>
      v.countries.some(vc => vc.countryId === country.id),
    );
  }, [country]);

  // Initialize servings from recipe defaults
  useEffect(() => {
    if (countryData?.mainDish?.servings) {
      setMainDishServings(countryData.mainDish.servings);
    }
    if (countryData?.dessert?.servings) {
      setDessertServings(countryData.dessert.servings);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only re-init servings when country changes, not on every servings property change
  }, [countryData?.id]);

  // Only count a visit once the user can actually see the country — peeking
  // at a locked country must not earn progress or badges.
  const canViewCountry = countryData
    ? isCountryAccessible(countryData, userProfile.purchasedProducts || [])
    : false;
  useEffect(() => {
    if (!countryData) return;
    if (!canViewCountry) {
      // Locked countries are a preview only — no visit, no points.
      void trackEvent('country_previewed', { countryId: countryData.id });
      return;
    }
    if (!countryProgress[countryData.id]?.visited) {
      void updateCountryProgress(countryData.id, { visited: true, visitedDate: new Date().toISOString() }, 0);
    }
    void trackEvent(EVENTS.COUNTRY_VIEWED, { countryId: countryData.id });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- once per opened country
  }, [countryData?.id, canViewCountry]);

  // Store prices for the "from {price}" teaser on locked countries.
  const { packages: storePackages } = useOfferings(!!countryData && !canViewCountry);

  useEffect(() => {
    if (country) {
      const urls = [country.landscapeImage, country.mainDish?.imageUrl, country.dessert?.imageUrl].filter(Boolean) as string[];
      void preloadImages(urls);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country?.id]);

  // Handle deep-link params from ingredient-match
  useEffect(() => {
    if (tab === 'recipes') {
      setActiveTab('recipes');
    }
  }, [tab, id]);

  if (!countryData) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.lockedContainer}>
          <TouchableOpacity onPress={goBack} style={styles.lockedBackButton} accessibilityRole="button" accessibilityLabel={t.common.back}>
            <ArrowLeft size={24} color={colors.text} />
          </TouchableOpacity>
          <View style={styles.lockedContent}>
            <Text style={styles.lockedMessage}>{t.country.notFound}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  if (!country || !progress) {
    return (
      <SafeAreaView style={styles.container}>
        <CountryDetailSkeleton />
      </SafeAreaView>
    );
  }

  const purchasedProducts = userProfile.purchasedProducts || [];
  const isAccessible = countryData ? isCountryAccessible(countryData, purchasedProducts) : false;

  const isLocked = !isAccessible;
  const openPaywall = () => {
    hapticLight();
    setShowPaywall(true);
  };

  // "+45 more countries · from 29 kr" — the cheapest pack that opens this country.
  const unlockOffer = isLocked
    ? cheapestUnlockForCountry(countryData, countries, purchasedProducts, (productId) =>
        resolvePrice(productId, storePackages, !isPurchasesConfigured() && canMakePurchases()),
      )
    : null;
  const unlockDetail = unlockOffer
    ? [
        unlockOffer.moreCount > 0 ? s.moreCountries(unlockOffer.moreCount) : null,
        unlockOffer.price ? fill(s.fromPrice, { price: unlockOffer.price.priceString }) : null,
      ]
        .filter(Boolean)
        .join(' · ')
    : '';

  const handleMarkDishCooked = (isDessert: boolean) => {
    hapticSuccess();
    const field = isDessert ? 'dessertCooked' : 'mainDishCooked';
    const points = isDessert ? 15 : 30;

    void trackEvent(EVENTS.RECIPE_COOKED, { countryId: country.id, isDessert });

    // Track difficulty for skill progression
    const recipe = isDessert ? countryData?.dessert : countryData?.mainDish;
    if (recipe) {
      trackDifficultyCooked(recipe.difficulty || 'medium');
    }

    void updateCountryProgress(country.id, { [field]: true }, points);
    void trackPositiveAction();

    const dishName = isDessert
      ? (country.dessert?.name || '')
      : country.mainDish.name;

    // First dish ever is the moment to offer streak reminders.
    const firstDishEver = !Object.values(countryProgress).some(p => p.mainDishCooked || p.dessertCooked);
    setNewBadge(null);
    setCelebration({ kind: 'dish', subtitle: dishName, points, isDessert, showReminder: firstDishEver && !remindersOn });
  };

  const handleAddToShoppingList = (isDessert: boolean) => {
    const recipe = isDessert ? country.dessert : country.mainDish;
    if (!recipe) return;
    const servings = isDessert ? dessertServings : mainDishServings;

    const scaledIngredients = recipe.ingredients.map(ing => ({
      name: ing.name,
      amount: roundAmount((ing.amount / recipe.servings) * servings),
      unit: ing.unit,
    }));

    void addToShoppingList(scaledIngredients, country.id, country.name);
    Alert.alert(t.country.added, t.country.ingredientsAdded);
  };

  const handleToggleFavorite = (isDessert: boolean) => {
    hapticMedium();
    const recipe = isDessert ? country.dessert : country.mainDish;
    if (!recipe) return;

    const isFavorite = isRecipeFavorite(recipe.id);
    const recipeName = recipe.name;
    
    if (isFavorite) {
      void removeFavoriteRecipe(recipe.id);
      Alert.alert(t.country.removed, t.country.recipeRemoved);
    } else {
      void addFavoriteRecipe(
        recipe.id,
        recipeName,
        country.id,
        country.name,
        country.flag,
        isDessert
      );
      Alert.alert(t.country.added, t.country.recipeAdded);
    }
  };

  const handleToggleFavoriteCountry = () => {
    hapticMedium();
    const wasFavorite = isFavoriteCountry(country.id);
    void toggleFavoriteCountry(country.id);
    Alert.alert(
      wasFavorite ? t.country.removed : t.country.added,
      wasFavorite ? t.country.countryRemoved : t.country.countryAdded
    );
  };

  const handleRateRecipe = (isDessert: boolean, rating: number) => {
    hapticSelection();
    void updateRecipeRating(country.id, isDessert, rating);
    if (isDessert) {
      setShowDessertRating(false);
    } else {
      setShowMainDishRating(false);
    }
    Alert.alert(t.country.ratingSaved, t.country.ratedStars.replace('{rating}', rating.toString()));
  };

  const handleShareRecipe = (isDessert: boolean) => {
    hapticLight();
    const recipe = isDessert ? countryData?.dessert : countryData?.mainDish;
    if (!recipe || !countryData) return;
    void shareRecipe(countryData, recipe, isDessert, lang);
  };

  const handleShareCookedPhoto = (recipeName: string, photoUri?: string) => {
    hapticLight();
    if (!countryData) return;
    void shareCookedIt(countryData, recipeName, photoUri, lang);
  };

  // Locked countries open as a preview, so the arrows can visit every country.
  const goToAdjacentCountry = (offset: 1 | -1) => {
    if (currentCountryIndex === -1 || countries.length === 0) return;
    hapticSelection();
    const next = countries[(currentCountryIndex + offset + countries.length) % countries.length];
    router.replace({ pathname: '/country/[id]' as any, params: { id: next.id } });
  };

  const handleSubmitQuiz = () => {
    if (quizAnswers.filter(a => a !== undefined).length !== country.quiz.length) {
      hapticError();
      Alert.alert(t.country.incomplete, t.country.answerAllQuestions);
      return;
    }

    const correctCount = country.quiz.filter(
      (q, idx) => q.correctAnswer === quizAnswers[idx]
    ).length;

    const score = correctCount;
    // Points only for beating your best score, so retaking a quiz can't farm points.
    const previousBest = progress.quizBestScore ?? (progress.quizCompleted ? progress.quizScore ?? 0 : 0);
    const points = Math.round((Math.max(0, correctCount - previousBest) / country.quiz.length) * 20);

    if (correctCount === country.quiz.length) {
      hapticSuccess();
    } else {
      hapticMedium();
    }

    void updateCountryProgress(
      country.id,
      { quizCompleted: true, quizScore: score, quizBestScore: Math.max(score, previousBest) },
      points
    );
    void trackPositiveAction();

    setNewBadge(null);
    setCelebration({
      kind: 'quiz',
      subtitle: t.country.quizResult
        .replace('{correct}', correctCount.toString())
        .replace('{total}', country.quiz.length.toString())
        .replace('{points}', points.toString()),
      points,
      showReminder: false,
    });
  };

  const handleShareCelebration = () => {
    if (!celebration || !countryData) return;
    if (newBadge) {
      const text = localizeBadge(t.badges, newBadge);
      void shareCard(
        { variant: 'badge', name: text.name, description: text.description, icon: newBadge.icon, earnedDate: newBadge.earnedDate },
        () => shareBadge(text, lang),
      );
      return;
    }
    if (celebration.kind === 'dish') {
      const recipe = celebration.isDessert ? countryData.dessert : countryData.mainDish;
      void shareCard(
        { variant: 'cooked', dishName: celebration.subtitle, countryName: country.name, flag: countryData.flag, imageUri: recipe?.imageUrl },
        () => shareCookedIt(countryData, celebration.subtitle, undefined, lang),
      );
      return;
    }
    const { flags, more } = selectPassportFlags(countries, countryProgress, PASSPORT_MAX_FLAGS);
    void shareCard(
      {
        variant: 'progress',
        cookedCountries: countCookedCountries(countryProgress),
        visitedCountries: stats.visitedCountries,
        completedCountries: stats.completedCountries,
        totalCountries: stats.totalCountries,
        dishesCooked: stats.cookedDishes,
        streak: stats.currentStreak,
        flags,
        moreFlags: more,
      },
      () => shareProgress({
        visitedCountries: stats.visitedCountries,
        totalCountries: stats.totalCountries,
        dishesCooked: stats.cookedDishes,
        quizzesDone: stats.completedQuizzes,
        totalPoints: userProfile.totalPoints,
        dayStreak: stats.currentStreak,
      }, lang),
    );
  };

  const handleEnableReminders = async () => {
    const ok = await enableNotifications({
      currentStreak: userProfile.currentStreak,
      lastActiveDate: userProfile.lastActiveDate,
    });
    setRemindersOn(ok);
    return ok;
  };

  const mainServingsMultiplier = mainDishServings / (country.mainDish?.servings || 1);
  const dessertServingsMultiplier = country.dessert ? dessertServings / (country.dessert.servings || 1) : 1;



  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView ref={scrollViewRef} style={styles.scrollView} showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.bannerContainer}>
          <FoodImage
            uri={country.landscapeImage}
            alt={country.name}
            style={styles.bannerImage}
            type="landscape"
          />
          <View style={styles.bannerOverlay} />
          
          <View style={styles.headerButtons}>
            <View style={styles.leftButtons}>
              <TouchableOpacity
                onPress={() => goBack()}
                style={styles.backButton}
                accessibilityRole="button"
                accessibilityLabel={t.common.back}
              >
                <ArrowLeft size={24} color="#FFF" />
              </TouchableOpacity>
              
              <TouchableOpacity 
                onPress={handleToggleFavoriteCountry} 
                style={styles.favoriteCountryButton}
                accessibilityRole="button"
                accessibilityLabel={s.favoriteLabel}
                aria-selected={isFavoriteCountry(country.id)}
              >
                <Heart 
                  size={24} 
                  color="#FFF"
                  fill={isFavoriteCountry(country.id) ? '#FF6B35' : 'transparent'}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.navigationButtons}>
              <TouchableOpacity 
                onPress={() => goToAdjacentCountry(-1)} 
                style={styles.navButton}
                accessibilityRole="button"
                accessibilityLabel={t.common.previous}
              >
                <SkipBack size={24} color="#FFF" />
              </TouchableOpacity>
              
              <TouchableOpacity 
                onPress={() => goToAdjacentCountry(1)} 
                style={styles.navButton}
                accessibilityRole="button"
                accessibilityLabel={t.common.next}
              >
                <SkipForward size={24} color="#FFF" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.bannerInfo}>
            {isLocked && (
              <View style={styles.previewPill}>
                <Lock size={12} color="#FFF" />
                <Text style={styles.previewPillText}>{s.preview}</Text>
              </View>
            )}
            <View style={styles.bannerTitleRow}>
              <Text style={styles.bannerFlag}>{country.flag}</Text>
              <Text style={styles.bannerCountryName} accessibilityRole="header">{country.name}</Text>
            </View>
          </View>
        </View>

        <View style={styles.tabsContainer}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'about' && styles.tabActive]}
            onPress={() => setActiveTab('about')}
            accessibilityRole="tab"
            aria-selected={activeTab === 'about'}
          >
            <Info size={20} color={activeTab === 'about' ? colors.terracotta : colors.textTertiary} />
            <Text style={[styles.tabText, activeTab === 'about' && styles.tabTextActive]}>{t.country.about}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'recipes' && styles.tabActive]}
            onPress={() => setActiveTab('recipes')}
            accessibilityRole="tab"
            aria-selected={activeTab === 'recipes'}
          >
            <Utensils size={20} color={activeTab === 'recipes' ? colors.terracotta : colors.textTertiary} />
            <Text style={[styles.tabText, activeTab === 'recipes' && styles.tabTextActive]}>{t.country.recipes}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'quiz' && styles.tabActive]}
            onPress={() => setActiveTab('quiz')}
            accessibilityRole="tab"
            aria-selected={activeTab === 'quiz'}
            accessibilityLabel={isLocked ? `${t.country.quiz}, ${t.ui.lockedLabel}` : undefined}
          >
            {isLocked ? (
              <Lock size={18} color={activeTab === 'quiz' ? colors.terracotta : colors.textTertiary} />
            ) : (
              <HelpCircle size={20} color={activeTab === 'quiz' ? colors.terracotta : colors.textTertiary} />
            )}
            <Text style={[styles.tabText, activeTab === 'quiz' && styles.tabTextActive]}>{t.country.quiz}</Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'about' && (
          <AboutTab
            country={country}
            countryData={countryData}
            countryVariations={countryVariations}
            countries={countries}
            lang={lang}
            onCountryPress={(cId) => router.push({ pathname: '/country/[id]' as any, params: { id: cId } })}
          />
        )}

        {activeTab === 'recipes' && (
          <RecipesTab
            country={country}
            countryData={countryData}
            progress={progress}
            lang={lang}
            mainDishServings={mainDishServings}
            setMainDishServings={setMainDishServings}
            mainServingsMultiplier={mainServingsMultiplier}
            dessertServings={dessertServings}
            setDessertServings={setDessertServings}
            dessertServingsMultiplier={dessertServingsMultiplier}
            initialExpandedDish={recipe === 'dessert' ? 'dessert' : recipe === 'main' ? 'main' : undefined}
            showMainDishRating={showMainDishRating}
            setShowMainDishRating={setShowMainDishRating}
            showDessertRating={showDessertRating}
            setShowDessertRating={setShowDessertRating}
            onMarkDishCooked={handleMarkDishCooked}
            onAddToShoppingList={handleAddToShoppingList}
            onToggleFavorite={handleToggleFavorite}
            onRateRecipe={handleRateRecipe}
            onShareRecipe={handleShareRecipe}
            onShareCookedPhoto={handleShareCookedPhoto}
            onStartCookingMode={(steps, name, isDessert) => setCookingMode({ steps, name, isDessert })}
            isRecipeFavorite={isRecipeFavorite}
            locked={isLocked}
            onUnlockPress={openPaywall}
          />
        )}

        {activeTab === 'quiz' && (
          <QuizTab
            country={country}
            progress={progress}
            quizAnswers={quizAnswers}
            setQuizAnswers={setQuizAnswers}
            onSubmitQuiz={handleSubmitQuiz}
            onResetQuiz={() => {
              setQuizAnswers([]);
              void updateCountryProgress(country.id, { quizCompleted: false, quizScore: 0 }, 0);
            }}
            locked={isLocked}
            onUnlockPress={openPaywall}
          />
        )}

        <View style={{ height: isLocked ? UNLOCK_BAR_HEIGHT + 40 : 100 }} />
      </ScrollView>

      {isLocked && (
        <UnlockBar
          title={fill(s.unlockCountry, { country: country.name })}
          detail={unlockDetail}
          onPress={openPaywall}
        />
      )}
      
      <Paywall
        visible={showPaywall}
        onClose={() => setShowPaywall(false)}
        country={countryData}
        countries={countries}
        onPurchase={purchaseProduct}
        purchasedProducts={purchasedProducts}
      />

      <CookingMode
        visible={cookingMode !== null}
        onClose={() => setCookingMode(null)}
        steps={cookingMode?.steps ?? []}
        recipeName={cookingMode?.name ?? ''}
        onComplete={() => {
          if (cookingMode && !cookingMode.isDessert && !progress.mainDishCooked) {
            handleMarkDishCooked(false);
          } else if (cookingMode && cookingMode.isDessert && !progress.dessertCooked) {
            handleMarkDishCooked(true);
          }
        }}
      />

      <CelebrationSheet
        visible={celebration !== null}
        kind={newBadge ? 'badge' : celebration?.kind ?? 'dish'}
        subtitle={newBadge ? localizeBadge(t.badges, newBadge).name : celebration?.subtitle}
        points={celebration?.points}
        badge={newBadge ? { ...localizeBadge(t.badges, newBadge), icon: newBadge.icon } : null}
        sharing={isSharing}
        onShare={handleShareCelebration}
        onContinue={() => { setCelebration(null); setNewBadge(null); }}
        showReminderPrompt={celebration?.showReminder}
        onEnableReminders={handleEnableReminders}
      >
        {shareCardHost}
      </CelebrationSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  bannerContainer: {
    height: 240,
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  headerButtons: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteCountryButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  navButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerInfo: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'flex-start',
    gap: 8,
  },
  bannerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  previewPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: 'rgba(198, 93, 59, 0.9)',
  },
  previewPillText: {
    fontSize: 12,
    fontWeight: '700' as const,
    color: '#FFF',
    letterSpacing: 0.3,
  },
  bannerFlag: {
    fontSize: 48,
  },
  bannerCountryName: {
    flexShrink: 1,
    fontSize: 36,
    fontWeight: '700' as const,
    color: '#FFF',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 16,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  tabActive: {
    borderBottomColor: colors.terracotta,
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500' as const,
    color: colors.textTertiary,
  },
  tabTextActive: {
    color: colors.terracotta,
    fontWeight: '600' as const,
  },
  scrollView: {
    flex: 1,
  },
  lockedContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  lockedBackButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 10,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.01)',
    elevation: 2,
  },
  lockedContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  lockedMessage: {
    fontSize: 20,
    fontWeight: '600' as const,
    color: colors.text,
    marginTop: 24,
    marginBottom: 8,
    textAlign: 'center',
  },
});
