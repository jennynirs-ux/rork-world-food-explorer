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
import { useState, useEffect, useMemo } from 'react';
import { useApp } from '@/contexts/AppContext';
import { isCountryAccessible } from '@/lib/access-control';
import { hapticSuccess, hapticError, hapticMedium, hapticSelection, hapticLight } from '@/lib/haptics';
import { shareRecipe, shareCookedIt } from '@/lib/share';
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
    trackDifficultyCooked
  } = useApp();
  
  const lang = userProfile.language || 'en';
  
  const [activeTab, setActiveTab] = useState<'about' | 'recipes' | 'quiz'>('about');
  const [mainDishServings, setMainDishServings] = useState(4);
  const [dessertServings, setDessertServings] = useState(4);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [showMainDishRating, setShowMainDishRating] = useState(false);
  const [showDessertRating, setShowDessertRating] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [cookingMode, setCookingMode] = useState<{ steps: string[]; name: string; isDessert: boolean } | null>(null);

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

  useEffect(() => {
    if (country && progress && !progress.visited) {
      void updateCountryProgress(country.id, { visited: true, visitedDate: new Date().toISOString() }, 0);
    }
    if (country) {
      void trackEvent(EVENTS.COUNTRY_VIEWED, { countryId: country.id });
    }
  }, [country, progress, updateCountryProgress]);

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
  }, [tab]);

  if (!country || !progress) {
    return (
      <SafeAreaView style={styles.container}>
        <CountryDetailSkeleton />
      </SafeAreaView>
    );
  }

  const purchasedProducts = userProfile.purchasedProducts || [];
  const isAccessible = countryData ? isCountryAccessible(countryData, purchasedProducts) : false;

  if (!isAccessible) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.lockedContainer}>
          <TouchableOpacity onPress={() => router.back()} style={styles.lockedBackButton}>
            <ArrowLeft size={24} color={colors.text} />
          </TouchableOpacity>
          
          <View style={styles.lockedContent}>
            <Text style={styles.lockedFlag}>{country.flag}</Text>
            <Text style={styles.lockedCountryName}>{country.name}</Text>
            <Lock size={64} color={colors.terracotta} />
            <Text style={styles.lockedMessage}>{t.country.lockedCountry}</Text>
            <Text style={styles.lockedSubMessage}>{t.country.unlockMessage.replace('{continent}', country.continent)}</Text>
            
            <TouchableOpacity 
              style={styles.unlockButton}
              onPress={() => setShowPaywall(true)}
            >
              <Text style={styles.unlockButtonText}>{t.country.viewUnlockOptions}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Paywall
          visible={showPaywall}
          onClose={() => setShowPaywall(false)}
          country={countryData}
          countries={countries}
          onPurchase={purchaseProduct}
          purchasedProducts={purchasedProducts}
        />
      </SafeAreaView>
    );
  }

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
    
    Alert.alert(
      t.country.greatJob,
      t.country.earnedPoints.replace('{points}', points.toString()).replace('{dish}', dishName)
    );
  };

  const handleAddToShoppingList = (isDessert: boolean) => {
    const recipe = isDessert ? country.dessert : country.mainDish;
    if (!recipe) return;
    const servings = isDessert ? dessertServings : mainDishServings;

    const scaledIngredients = recipe.ingredients.map(ing => ({
      name: ing.name,
      amount: (ing.amount / recipe.servings) * servings,
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

  const handleNextCountry = () => {
    if (currentCountryIndex === -1) return;
    
    let nextIndex = (currentCountryIndex + 1) % countries.length;
    let attempts = 0;
    
    while (attempts < countries.length) {
      const nextCountry = countries[nextIndex];
      if (isCountryAccessible(nextCountry, purchasedProducts)) {
        router.replace({ pathname: '/country/[id]' as any, params: { id: nextCountry.id } });
        return;
      }
      nextIndex = (nextIndex + 1) % countries.length;
      attempts++;
    }
    
    Alert.alert(t.country.noAccessibleCountries, t.country.unlockMoreCountries);
  };

  const handlePreviousCountry = () => {
    if (currentCountryIndex === -1) return;
    
    let prevIndex = currentCountryIndex === 0 ? countries.length - 1 : currentCountryIndex - 1;
    let attempts = 0;
    
    while (attempts < countries.length) {
      const prevCountry = countries[prevIndex];
      if (isCountryAccessible(prevCountry, purchasedProducts)) {
        router.replace({ pathname: '/country/[id]' as any, params: { id: prevCountry.id } });
        return;
      }
      prevIndex = prevIndex === 0 ? countries.length - 1 : prevIndex - 1;
      attempts++;
    }
    
    Alert.alert(t.country.noAccessibleCountries, t.country.unlockMoreCountries);
  };

  const handleSubmitQuiz = () => {
    if (quizAnswers.length !== country.quiz.length) {
      hapticError();
      Alert.alert(t.country.incomplete, t.country.answerAllQuestions);
      return;
    }

    const correctCount = country.quiz.filter(
      (q, idx) => q.correctAnswer === quizAnswers[idx]
    ).length;

    const score = correctCount;
    const points = Math.round((correctCount / country.quiz.length) * 20);

    if (correctCount === country.quiz.length) {
      hapticSuccess();
    } else {
      hapticMedium();
    }

    void updateCountryProgress(
      country.id,
      { quizCompleted: true, quizScore: score },
      points
    );
    void trackPositiveAction();

    setTimeout(() => {
      Alert.alert(
        t.country.quizComplete,
        t.country.quizResult.replace('{correct}', correctCount.toString()).replace('{total}', country.quiz.length.toString()).replace('{points}', points.toString())
      );
    }, 500);
  };

  const mainServingsMultiplier = mainDishServings / country.mainDish.servings;
  const dessertServingsMultiplier = country.dessert ? dessertServings / country.dessert.servings : 1;



  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.bannerContainer}>
          <FoodImage
            uri={country.landscapeImage}
            alt={`${country.name} landscape`}
            style={styles.bannerImage}
            type="landscape"
          />
          <View style={styles.bannerOverlay} />
          
          <View style={styles.headerButtons}>
            <View style={styles.leftButtons}>
              <TouchableOpacity
                onPress={() => router.back()}
                style={styles.backButton}
              >
                <ArrowLeft size={24} color="#FFF" />
              </TouchableOpacity>
              
              <TouchableOpacity 
                onPress={handleToggleFavoriteCountry} 
                style={styles.favoriteCountryButton}
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
                onPress={handlePreviousCountry} 
                style={styles.navButton}
              >
                <SkipBack size={24} color="#FFF" />
              </TouchableOpacity>
              
              <TouchableOpacity 
                onPress={handleNextCountry} 
                style={styles.navButton}
              >
                <SkipForward size={24} color="#FFF" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.bannerInfo}>
            <Text style={styles.bannerFlag}>{country.flag}</Text>
            <Text style={styles.bannerCountryName}>{country.name}</Text>
          </View>
        </View>

        <View style={styles.tabsContainer}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'about' && styles.tabActive]}
            onPress={() => setActiveTab('about')}
          >
            <Info size={20} color={activeTab === 'about' ? colors.terracotta : colors.textTertiary} />
            <Text style={[styles.tabText, activeTab === 'about' && styles.tabTextActive]}>{t.country.about}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'recipes' && styles.tabActive]}
            onPress={() => setActiveTab('recipes')}
          >
            <Utensils size={20} color={activeTab === 'recipes' ? colors.terracotta : colors.textTertiary} />
            <Text style={[styles.tabText, activeTab === 'recipes' && styles.tabTextActive]}>{t.country.recipes}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'quiz' && styles.tabActive]}
            onPress={() => setActiveTab('quiz')}
          >
            <HelpCircle size={20} color={activeTab === 'quiz' ? colors.terracotta : colors.textTertiary} />
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
            onCountryPress={(cId) => router.push(`/(tabs)/country/${cId}`)}
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
          />
        )}

        <View style={{ height: 100 }} />
      </ScrollView>
      
      <Paywall
        visible={showPaywall}
        onClose={() => setShowPaywall(false)}
        country={countryData}
        countries={countries}
        onPurchase={purchaseProduct}
        purchasedProducts={purchasedProducts}
      />

      {cookingMode && (
        <CookingMode
          visible={true}
          onClose={() => setCookingMode(null)}
          steps={cookingMode.steps}
          recipeName={cookingMode.name}
          onComplete={() => {
            if (!cookingMode.isDessert && !progress.mainDishCooked) {
              handleMarkDishCooked(false);
            } else if (cookingMode.isDessert && !progress.dessertCooked) {
              handleMarkDishCooked(true);
            }
          }}
        />
      )}
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  bannerFlag: {
    fontSize: 48,
  },
  bannerCountryName: {
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
  tabContent: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700' as const,
    color: colors.text,
    marginBottom: 16,
  },
  sectionTitleLarge: {
    fontSize: 24,
    fontWeight: '700' as const,
    color: colors.text,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  infoCardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  infoCard: {
    width: '48%',
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
    elevation: 2,
  },
  fullWidthCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 20,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
    elevation: 2,
  },
  infoCardWide: {
    width: '100%',
  },
  infoCardLabel: {
    fontSize: 11,
    fontWeight: '600' as const,
    color: colors.textLabel,
    marginTop: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  infoCardValue: {
    fontSize: 18,
    fontWeight: '600' as const,
    color: colors.text,
    marginTop: 6,
    textAlign: 'center',
  },
  funFactsCard: {
    backgroundColor: '#E8F4E5',
    borderRadius: 20,
    padding: 24,
  },
  funFactsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  funFactsTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.text,
  },
  funFactText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 24,
    marginBottom: 8,
  },
  historyCard: {
    backgroundColor: '#F5E6D3',
    borderRadius: 20,
    padding: 24,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
    elevation: 2,
  },
  historySectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.text,
  },
  historyContent: {
    borderLeftWidth: 4,
    borderLeftColor: '#6B7280',
    paddingLeft: 16,
  },
  historyText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  historyTimelineContainer: {
    gap: 24,
  },
  historyTimelineItem: {
    flexDirection: 'row',
    gap: 16,
  },
  timelineDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.terracotta,
    marginTop: 4,
    borderWidth: 3,
    borderColor: colors.sand,
  },
  timelineContent: {
    flex: 1,
    paddingBottom: 8,
  },
  timelineYear: {
    fontSize: 14,
    fontWeight: '700' as const,
    color: colors.terracotta,
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  timelineTitle: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: colors.text,
    marginBottom: 6,
  },
  timelineDescription: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  foodCultureCard: {
    backgroundColor: '#F9E5DD',
    borderRadius: 20,
    padding: 24,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
    elevation: 2,
  },
  foodCultureHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  foodCultureTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.text,
  },
  foodCultureContent: {
    borderLeftWidth: 4,
    borderLeftColor: '#F39C6B',
    paddingLeft: 16,
  },
  foodCultureText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 24,
    fontStyle: 'italic',
  },
  mustVisitCard: {
    backgroundColor: '#E8F0F2',
    borderRadius: 20,
    padding: 24,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
    elevation: 2,
  },
  mustVisitHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  mustVisitTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.text,
  },
  mustVisitList: {
    gap: 16,
  },
  mustVisitItem: {
    flexDirection: 'row',
    gap: 12,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  mustVisitIconWrapper: {
    marginTop: 2,
  },
  mustVisitContent: {
    flex: 1,
  },
  mustVisitName: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: colors.text,
    marginBottom: 4,
  },
  mustVisitDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  travelEssentialsCard: {
    backgroundColor: '#EDE7DD',
    borderRadius: 20,
    padding: 24,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
    elevation: 2,
  },
  travelEssentialsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  travelEssentialsTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.text,
  },
  travelEssentialsList: {
    gap: 16,
  },
  travelEssentialItem: {
    flexDirection: 'row',
    gap: 12,
    paddingBottom: 12,
  },
  travelEssentialBullet: {
    marginTop: 2,
  },
  travelEssentialContent: {
    flex: 1,
  },
  travelEssentialItemText: {
    fontSize: 15,
    fontWeight: '600' as const,
    color: colors.text,
    marginBottom: 4,
  },
  travelEssentialDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  recipeCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 20,
    overflow: 'hidden',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
    elevation: 2,
  },
  dishImage: {
    height: 180,
    borderRadius: 12,
    marginBottom: 16,
    marginHorizontal: -20,
    marginTop: -20,
  },
  recipeName: {
    fontSize: 22,
    fontWeight: '700' as const,
    color: colors.text,
    marginBottom: 8,
  },
  recipeDescription: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 22,
    marginBottom: 16,
  },
  recipeInfo: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  recipeInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  recipeInfoText: {
    fontSize: 14,
    color: '#6B7280',
  },
  servingsSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
    padding: 12,
    backgroundColor: colors.surfaceAlt,
    borderRadius: 12,
  },
  servingsLabel: {
    fontSize: 16,
    color: '#6B7280',
  },
  servingsButton: {
    width: 32,
    height: 32,
    backgroundColor: colors.terracotta,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  servingsButtonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700' as const,
  },
  servingsValue: {
    fontSize: 18,
    fontWeight: '600' as const,
    color: colors.text,
    minWidth: 30,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 18,
    fontWeight: '600' as const,
    color: colors.text,
    marginTop: 16,
    marginBottom: 12,
  },
  instructionsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 12,
  },
  startCookingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#FF6B35',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  startCookingText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
  ingredientText: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 24,
    marginBottom: 6,
  },
  stepText: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 24,
    marginBottom: 12,
  },
  recipeActions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.terracotta,
    paddingVertical: 14,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  actionButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600' as const,
  },
  actionButtonDone: {
    backgroundColor: '#D1FAE5',
  },
  actionButtonTextDone: {
    color: colors.success,
    fontSize: 16,
    fontWeight: '600' as const,
  },
  actionButtonSecondary: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.surfaceAlt,
    paddingVertical: 14,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    borderWidth: 2,
    borderColor: colors.terracotta,
  },
  actionButtonSecondaryText: {
    color: colors.terracotta,
    fontSize: 16,
    fontWeight: '600' as const,
  },
  drinkSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 12,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: colors.text,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22,
    marginBottom: 8,
  },
  musicText: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22,
    marginBottom: 4,
  },
  ideaText: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 24,
    marginBottom: 8,
  },
  conversationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 12,
  },
  conversationText: {
    flex: 1,
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 24,
  },
  quizCompleted: {
    backgroundColor: '#D1FAE5',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    marginBottom: 24,
  },
  quizCompletedText: {
    fontSize: 24,
    fontWeight: '700' as const,
    color: colors.success,
    marginTop: 16,
  },
  quizScoreText: {
    fontSize: 18,
    color: colors.success,
    marginTop: 8,
  },
  quizContainer: {
    gap: 16,
  },
  questionCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
  },
  questionText: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: colors.text,
    marginBottom: 12,
  },
  optionButton: {
    backgroundColor: colors.surfaceAlt,
    padding: 14,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: colors.sand,
  },
  optionButtonSelected: {
    borderColor: colors.primary,
    backgroundColor: '#EFF6FF',
  },
  optionButtonCorrect: {
    borderColor: colors.success,
    backgroundColor: '#D1FAE5',
  },
  optionButtonWrong: {
    borderColor: '#EF4444',
    backgroundColor: '#FEE2E2',
  },
  optionText: {
    fontSize: 15,
    color: '#4B5563',
  },
  optionTextSelected: {
    color: colors.primary,
    fontWeight: '600' as const,
  },
  optionTextCorrect: {
    color: colors.success,
    fontWeight: '600' as const,
  },
  submitQuizButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  submitQuizButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600' as const,
  },
  favoriteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 12,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    backgroundColor: colors.surface,
  },
  favoriteButtonActive: {
    borderColor: '#FF6B35',
    backgroundColor: '#FFF5F2',
  },
  favoriteButtonText: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: '#9CA3AF',
  },
  favoriteButtonTextActive: {
    color: '#FF6B35',
  },
  ratingSection: {
    marginTop: 16,
    padding: 16,
    backgroundColor: colors.surfaceAlt,
    borderRadius: 12,
  },
  ratingContainer: {
    alignItems: 'center',
  },
  ratingTitle: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: colors.text,
    marginBottom: 12,
  },
  ratingDisplay: {
    alignItems: 'center',
  },
  ratingLabel: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  starsRow: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
  },
  starButton: {
    padding: 4,
  },
  starText: {
    fontSize: 24,
  },
  starTextLarge: {
    fontSize: 32,
  },
  innovationsCard: {
    backgroundColor: '#FFF4E6',
    borderRadius: 20,
    padding: 24,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
    elevation: 2,
  },
  innovationsSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  innovationsTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.text,
  },
  innovationsContainer: {
    gap: 20,
  },
  innovationItem: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  innovationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  innovationName: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: colors.text,
    flex: 1,
  },
  innovationYear: {
    fontSize: 14,
    fontWeight: '700' as const,
    color: colors.orange,
    marginLeft: 12,
  },
  innovationDescription: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  innovationPlaceholder: {
    fontSize: 15,
    color: colors.textTertiary,
    lineHeight: 22,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingVertical: 12,
  },
  quickFactsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  quickFactCard: {
    width: '48%',
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
    elevation: 2,
  },
  quickFactIcon: {
    marginBottom: 8,
  },
  quickFactLabel: {
    fontSize: 12,
    fontWeight: '600' as const,
    color: colors.textTertiary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    textAlign: 'center',
    marginBottom: 6,
  },
  quickFactValue: {
    fontSize: 16,
    fontWeight: '700' as const,
    color: colors.text,
    textAlign: 'center',
  },
  quickFactCardFullWidth: {
    width: '100%',
  },
  lockedOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  lockIconLarge: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: colors.sand,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  lockedTitle: {
    fontSize: 28,
    fontWeight: '700' as const,
    color: '#FFF',
    marginBottom: 12,
    textAlign: 'center',
  },
  lockedDescription: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  unlockButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: colors.terracotta,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 16,
    boxShadow: '0px 4px 12px rgba(198, 93, 59, 0.4)',
    elevation: 4,
  },
  unlockButtonText: {
    fontSize: 18,
    fontWeight: '600' as const,
    color: '#FFF',
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
  lockedFlag: {
    fontSize: 80,
    marginBottom: 16,
  },
  lockedCountryName: {
    fontSize: 32,
    fontWeight: '700' as const,
    color: colors.text,
    marginBottom: 32,
    textAlign: 'center',
  },
  lockedMessage: {
    fontSize: 20,
    fontWeight: '600' as const,
    color: colors.text,
    marginTop: 24,
    marginBottom: 8,
    textAlign: 'center',
  },
  lockedSubMessage: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 10,
    marginTop: 8,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  shareButtonText: {
    fontSize: 15,
    fontWeight: '500' as const,
    color: colors.terracotta,
  },
});
