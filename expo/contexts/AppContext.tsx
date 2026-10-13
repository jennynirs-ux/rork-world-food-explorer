import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createContextHook from '@nkzw/create-context-hook';
import { CountryProgress, UserProfile, ShoppingListItem, Badge, FavoriteRecipe, MealPlan } from '@/types';
import { countries } from '@/data/countries';
import { allBadges } from '@/data/badges';
import { translateContent } from '@/lib/translate-content';
import { configurePurchases, ensureAnonymousUser, completeAnonymousMigration, getCustomerInfo, addOwnedProductsListener } from '@/lib/purchases';
import { initializeNotifications, refreshStreakReminder } from '@/lib/notifications';
import { getPlannedRecipe } from '@/lib/grocery-export';
import { cache } from '@/lib/cache';
import { calculateSkillLevel } from '@/lib/nutrition';
import { hasActiveLegacyCodeUnlock } from '@/lib/legacy-code-unlock';
import { LEGACY_CODE_UNLOCK } from '@/lib/access-control';
import { PRODUCT_IDS } from '@/constants/monetization';
import { trackPositiveAction } from '@/lib/rating';

const STORAGE_KEYS = {
  USER_PROFILE: '@world_cooking_user_profile',
  COUNTRY_PROGRESS: '@world_cooking_country_progress',
  SHOPPING_LIST: '@world_cooking_shopping_list',
  BADGES: '@world_cooking_badges',
  COOKING_NOTES: '@world_cooking_cooking_notes',
  MEAL_PLANS: '@world_cooking_meal_plans',
  FAVORITE_RECIPES: '@world_cooking_favorite_recipes',
};

type ProgressState = Record<string, CountryProgress>;

const STORE_PRODUCT_IDS = Object.values(PRODUCT_IDS) as string[];

/** Parse one stored value; a corrupt key falls back instead of wiping the rest. */
function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

/** Calendar day number in the user's local time zone. */
function localDayNumber(date: Date): number {
  return Math.floor((date.getTime() - date.getTimezoneOffset() * 60000) / 86400000);
}

function sameSet(a: string[], b: string[]): boolean {
  return a.length === b.length && a.every(x => b.includes(x));
}

export const [AppProvider, useApp] = createContextHook(() => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: '',
    totalPoints: 0,
    createdDate: new Date().toISOString(),
    completedOnboarding: false,
    purchasedProducts: [],
  });
  
  const [countryProgress, setCountryProgress] = useState<ProgressState>({});
  const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>([]);
  const [badges, setBadges] = useState<Badge[]>(
    allBadges.map(b => ({ ...b, earned: false }))
  );
  const [favoriteRecipes, setFavoriteRecipes] = useState<FavoriteRecipe[]>([]);
  const [mealPlans, setMealPlans] = useState<MealPlan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState<string>('');

  // Nothing may be written before the saved data has been read back: a write
  // built on the empty defaults (e.g. a cold-start deep link marking a country
  // visited) would replace everything the user has saved under that key.
  //   'loading' - mutations are queued and replayed on top of the loaded data
  //   'ready'   - normal operation
  //   'failed'  - the read failed: mutations only change memory, so the
  //               defaults never overwrite what is on disk
  const loadStateRef = useRef<'loading' | 'ready' | 'failed'>('loading');
  const pendingMutationsRef = useRef<(() => void)[]>([]);

  const persist = useCallback((key: string, value: unknown) => {
    if (loadStateRef.current !== 'ready') return;
    void AsyncStorage.setItem(key, JSON.stringify(value));
  }, []);

  const afterLoad = useCallback((mutation: () => void) => {
    if (loadStateRef.current === 'loading') pendingMutationsRef.current.push(mutation);
    else mutation();
  }, []);

  // Counts ownership updates, so an older RevenueCat answer can tell it is out of date.
  const ownedUpdatesRef = useRef(0);

  /**
   * Update the store-purchased products on the profile.
   * 'replace' makes RevenueCat the source of truth (refunds revoke access);
   * 'merge' only adds (purchase just completed, offer code redeemed).
   * Non-store entries such as the legacy code unlock are left alone.
   */
  const applyOwnedProducts = useCallback((owned: string[], mode: 'replace' | 'merge') => {
    ownedUpdatesRef.current += 1;
    afterLoad(() => setUserProfile(prev => {
      const current = prev.purchasedProducts || [];
      const nonStore = current.filter(p => !STORE_PRODUCT_IDS.includes(p));
      const currentStore = current.filter(p => STORE_PRODUCT_IDS.includes(p));
      const nextStore = mode === 'replace'
        ? owned
        : [...new Set([...currentStore, ...owned])];
      const next = [...nonStore, ...nextStore];
      if (sameSet(current, next)) return prev;
      const updated = { ...prev, purchasedProducts: next };
      persist(STORAGE_KEYS.USER_PROFILE, updated);
      return updated;
    }));
  }, [afterLoad, persist]);

  useEffect(() => {
    let removeListener: () => void = () => {};

    // Resolves to the store products saved on the profile, or null when the
    // saved data couldn't be read.
    const loadData = async (): Promise<string[] | null> => {
      let cachedStoreProducts: string[] | null = null;
      try {
        const [profileData, progressData, shoppingData, badgesData, favoritesData, mealPlanData] = await Promise.all([
          AsyncStorage.getItem(STORAGE_KEYS.USER_PROFILE),
          AsyncStorage.getItem(STORAGE_KEYS.COUNTRY_PROGRESS),
          AsyncStorage.getItem(STORAGE_KEYS.SHOPPING_LIST),
          AsyncStorage.getItem(STORAGE_KEYS.BADGES),
          AsyncStorage.getItem(STORAGE_KEYS.FAVORITE_RECIPES),
          AsyncStorage.getItem(STORAGE_KEYS.MEAL_PLANS),
        ]);

        const profile = safeParse<UserProfile | null>(profileData, null);
        if (profile) setUserProfile(profile);
        cachedStoreProducts = (profile?.purchasedProducts || []).filter(p => STORE_PRODUCT_IDS.includes(p));
        setCountryProgress(safeParse<ProgressState>(progressData, {}));
        setShoppingList(safeParse<ShoppingListItem[]>(shoppingData, []));
        setFavoriteRecipes(safeParse<FavoriteRecipe[]>(favoritesData, []));
        setMealPlans(safeParse<MealPlan[]>(mealPlanData, []));

        // Merge by id so badges added in later app versions show up and can be earned.
        const savedBadges = safeParse<Badge[]>(badgesData, []);
        setBadges(allBadges.map(b => {
          const saved = savedBadges.find(s => s.id === b.id);
          return { ...b, earned: saved?.earned ?? false, earnedDate: saved?.earnedDate };
        }));
        loadStateRef.current = 'ready';
      } catch (error) {
        if (__DEV__) console.error('Error loading data:', error);
        // Don't let the defaults be saved over data we just failed to read.
        loadStateRef.current = 'failed';
      } finally {
        // Replay changes made while loading on top of the loaded state; React
        // batches them into the same render as the loaded values.
        const pending = pendingMutationsRef.current;
        pendingMutationsRef.current = [];
        pending.forEach(mutation => mutation());
        setIsLoading(false);
      }
      return cachedStoreProducts;
    };

    const initPurchases = async (cachedStoreProducts: string[] | null) => {
      try {
        // Local install id only. RevenueCat gets no custom App User ID any
        // more (see configurePurchases), it uses its own anonymous one.
        let storedUserId = await AsyncStorage.getItem('@world_cooking_user_id');
        if (!storedUserId) {
          storedUserId = `user-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
          await AsyncStorage.setItem('@world_cooking_user_id', storedUserId);
        }
        setUserId(storedUserId);

        // Legacy share-code unlock: keep until it expires, then revoke.
        const legacyActive = await hasActiveLegacyCodeUnlock();
        setUserProfile(prev => {
          const products = prev.purchasedProducts || [];
          const hasLegacy = products.includes(LEGACY_CODE_UNLOCK);
          if (legacyActive === hasLegacy) return prev;
          const updated = {
            ...prev,
            purchasedProducts: legacyActive
              ? [...products, LEGACY_CODE_UNLOCK]
              : products.filter(p => p !== LEGACY_CODE_UNLOCK),
          };
          persist(STORAGE_KEYS.USER_PROFILE, updated);
          return updated;
        });

        await configurePurchases();
        const updatesBefore = ownedUpdatesRef.current;
        const migrated = await ensureAnonymousUser();
        // While a legacy install's purchases are still on their way to its
        // anonymous ID, each answer is checked for them; the next launch
        // after they have arrived may revoke.
        const checkMigration = (o: string[]) => {
          if (!migrated && cachedStoreProducts) void completeAnonymousMigration(o, cachedStoreProducts);
        };
        const owned = await getCustomerInfo();
        // null = unknown (offline / store error): keep the cached purchases.
        // RevenueCat may only revoke (refunds) once a previous launch has
        // seen this install's purchases on its anonymous ID, and only if
        // nothing was bought or restored while we were waiting for this answer.
        if (owned) {
          const canRevoke = migrated && ownedUpdatesRef.current === updatesBefore;
          applyOwnedProducts(owned, canRevoke ? 'replace' : 'merge');
          checkMigration(owned);
        }
        removeListener = addOwnedProductsListener(o => {
          applyOwnedProducts(o, 'merge');
          checkMigration(o);
        });
      } catch (error) {
        if (__DEV__) console.error('Error initializing purchases:', error);
      }
    };

    // Profile must be loaded before purchases touch it, or the default
    // (empty) profile would be written over the saved one.
    void loadData().then(initPurchases);
    void initializeNotifications();
    // Server-synced country data was dropped; free the old 11 MB cache entry.
    void cache.remove('countries');

    return () => removeListener();
  }, [applyOwnedProducts, persist]);

  // Keep the 19:00 streak reminder in line with the actual streak (and the
  // scheduled notifications in the app language).
  useEffect(() => {
    if (isLoading) return;
    void refreshStreakReminder({
      currentStreak: userProfile.currentStreak,
      lastActiveDate: userProfile.lastActiveDate,
    }, userProfile.language || 'en');
  }, [isLoading, userProfile.currentStreak, userProfile.lastActiveDate, userProfile.language]);

  const updateUserProfile = useCallback(async (updates: Partial<UserProfile>) => {
    afterLoad(() => setUserProfile(prev => {
      const updatedProfile = { ...prev, ...updates };
      persist(STORAGE_KEYS.USER_PROFILE, updatedProfile);
      return updatedProfile;
    }));
  }, [afterLoad, persist]);

  const completeOnboarding = useCallback(async (name: string, language?: string, avatar?: string) => {
    afterLoad(() => setUserProfile(prev => {
      const updatedProfile: UserProfile = {
        ...prev,
        name,
        language: language || 'en',
        avatar,
        completedOnboarding: true,
      };
      persist(STORAGE_KEYS.USER_PROFILE, updatedProfile);
      return updatedProfile;
    }));
  }, [afterLoad, persist]);

  const updateCountryProgress = useCallback(async (
    countryId: string,
    updates: Partial<CountryProgress>,
    pointsToAdd: number
  ) => {
    afterLoad(() => setCountryProgress(prev => {
      const current = prev[countryId] || {
        visited: false,
        mainDishCooked: false,
        dessertCooked: false,
        quizCompleted: false,
        fullyCompleted: false,
      };

      const updated = { ...current, ...updates };
      let finalPoints = pointsToAdd;

      if (
        updated.mainDishCooked &&
        updated.quizCompleted &&
        !updated.fullyCompleted
      ) {
        updated.fullyCompleted = true;
        updated.completedDate = new Date().toISOString();
        finalPoints += 50;
      }

      const newProgress = { ...prev, [countryId]: updated };
      persist(STORAGE_KEYS.COUNTRY_PROGRESS, newProgress);

      if (finalPoints > 0) {
        setUserProfile(prevProfile => {
          let currentStreak = prevProfile.currentStreak || 0;
          let longestStreak = prevProfile.longestStreak || 0;

          if (prevProfile.lastActiveDate) {
            const daysDiff = localDayNumber(new Date()) - localDayNumber(new Date(prevProfile.lastActiveDate));
            if (daysDiff === 1) {
              currentStreak += 1;
            } else if (daysDiff !== 0) {
              currentStreak = 1;
            }
          } else {
            currentStreak = 1;
          }

          if (currentStreak > longestStreak) {
            longestStreak = currentStreak;
          }

          const updatedProfile = {
            ...prevProfile,
            totalPoints: prevProfile.totalPoints + finalPoints,
            currentStreak,
            longestStreak,
            lastActiveDate: new Date().toISOString(),
          };
          persist(STORAGE_KEYS.USER_PROFILE, updatedProfile);
          return updatedProfile;
        });
      }

      setBadges(prevBadges => {
        const updatedBadges = [...prevBadges];
        let hasChanges = false;

        const completedCountries = Object.values(newProgress).filter(p => p.fullyCompleted).length;
        const completedQuizzes = Object.values(newProgress).filter(p => p.quizCompleted).length;
        const cookedMainDishes = Object.values(newProgress).filter(p => p.mainDishCooked).length;
        const cookedDesserts = Object.values(newProgress).filter(p => p.dessertCooked).length;
        const perfectQuizzes = Object.entries(newProgress).filter(([cId, p]) => {
          const quizLength = countries.find(cn => cn.id === cId)?.quiz.length ?? 0;
          return quizLength > 0 && p.quizScore === quizLength;
        }).length;

        const visitedContinents = new Set(
          Object.entries(newProgress)
            .filter(([_, p]) => p.visited)
            .map(([cId]) => {
              const c = countries.find(cn => cn.id === cId);
              return c ? translateContent(c.continent, 'en') : undefined;
            })
            .filter(Boolean)
        );

        // F-02: Check continent completion for badges
        const continentCompletion = (continentName: string) => {
          const continentCountries = countries.filter(
            c => translateContent(c.continent, 'en') === continentName
          );
          if (continentCountries.length === 0) return false;
          return continentCountries.every(c => newProgress[c.id]?.fullyCompleted);
        };

        const americasComplete = continentCompletion('North America') && continentCompletion('South America');

        const badgesToCheck = [
          { id: 'first-country', condition: completedCountries >= 1 },
          { id: 'five-countries', condition: completedCountries >= 5 },
          { id: 'ten-countries', condition: completedCountries >= 10 },
          { id: 'all-continents', condition: visitedContinents.size >= 6 },
          { id: 'first-quiz', condition: completedQuizzes >= 1 },
          { id: 'ten-quizzes', condition: completedQuizzes >= 10 },
          { id: 'perfect-quiz', condition: perfectQuizzes >= 1 },
          { id: 'first-dish', condition: cookedMainDishes >= 1 },
          { id: 'ten-dishes', condition: cookedMainDishes >= 10 },
          { id: 'dessert-lover', condition: cookedDesserts >= 5 },
          { id: 'europe-complete', condition: continentCompletion('Europe') },
          { id: 'asia-complete', condition: continentCompletion('Asia') },
          { id: 'africa-complete', condition: continentCompletion('Africa') },
          { id: 'americas-complete', condition: americasComplete },
          { id: 'oceania-complete', condition: continentCompletion('Oceania') },
        ];

        badgesToCheck.forEach(({ id, condition }) => {
          const badgeIndex = updatedBadges.findIndex(b => b.id === id);
          if (badgeIndex !== -1 && !updatedBadges[badgeIndex].earned && condition) {
            updatedBadges[badgeIndex] = {
              ...updatedBadges[badgeIndex],
              earned: true,
              earnedDate: new Date().toISOString(),
            };
            hasChanges = true;
          }
        });

        if (hasChanges) {
          persist(STORAGE_KEYS.BADGES, updatedBadges);
          // Earning a badge is a strong engagement signal for the review prompt
          setTimeout(() => void trackPositiveAction(), 2500);
          return updatedBadges;
        }
        return prevBadges;
      });

      return newProgress;
    }));
  }, [afterLoad, persist]);

  const addToShoppingList = useCallback(async (
    ingredients: { name: string; amount: number; unit: string }[],
    countryId: string,
    countryName: string
  ) => {
    afterLoad(() => setShoppingList(prev => {
      const newItems = ingredients.map(ingredient => {
        const existingItem = prev.find(
          item => item.name.toLowerCase() === ingredient.name.toLowerCase() && item.unit === ingredient.unit
        );
        if (existingItem) return null;

        return {
          id: `${countryId}-${ingredient.name}-${Date.now()}`,
          name: ingredient.name,
          amount: ingredient.amount,
          unit: ingredient.unit,
          checked: false,
          countryId,
          countryName,
        };
      }).filter((item): item is ShoppingListItem => item !== null);

      const combinedList = [...prev];
      newItems.forEach(newItem => {
        const existingIndex = combinedList.findIndex(
          item => item.name.toLowerCase() === newItem.name.toLowerCase() && item.unit === newItem.unit
        );
        if (existingIndex >= 0) {
          combinedList[existingIndex] = {
            ...combinedList[existingIndex],
            amount: combinedList[existingIndex].amount + newItem.amount,
          };
        } else {
          combinedList.push(newItem);
        }
      });

      persist(STORAGE_KEYS.SHOPPING_LIST, combinedList);
      return combinedList;
    }));
  }, [afterLoad, persist]);

  const toggleShoppingItem = useCallback(async (itemId: string) => {
    afterLoad(() => setShoppingList(prev => {
      const updatedList = prev.map(item =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      );
      persist(STORAGE_KEYS.SHOPPING_LIST, updatedList);
      return updatedList;
    }));
  }, [afterLoad, persist]);

  const removeShoppingItem = useCallback(async (itemId: string) => {
    afterLoad(() => setShoppingList(prev => {
      const updatedList = prev.filter(item => item.id !== itemId);
      persist(STORAGE_KEYS.SHOPPING_LIST, updatedList);
      return updatedList;
    }));
  }, [afterLoad, persist]);

  const clearShoppingList = useCallback(async () => {
    afterLoad(() => {
      setShoppingList([]);
      persist(STORAGE_KEYS.SHOPPING_LIST, []);
    });
  }, [afterLoad, persist]);

  const resetProgress = useCallback(async () => {
    afterLoad(async () => {
      if (loadStateRef.current === 'ready') {
        await AsyncStorage.multiRemove([
          STORAGE_KEYS.COUNTRY_PROGRESS,
          STORAGE_KEYS.SHOPPING_LIST,
          STORAGE_KEYS.BADGES,
        ]);
      }
      setCountryProgress({});
      setShoppingList([]);
      setBadges(allBadges.map(b => ({ ...b, earned: false })));
      setUserProfile(prev => {
        const resetProfile = { ...prev, totalPoints: 0 };
        persist(STORAGE_KEYS.USER_PROFILE, resetProfile);
        return resetProfile;
      });
    });
  }, [afterLoad, persist]);

  const stats = useMemo(() => {
    const progressArray = Object.values(countryProgress);
    // A streak only counts if the last activity was today or yesterday.
    const daysSinceActive = userProfile.lastActiveDate
      ? localDayNumber(new Date()) - localDayNumber(new Date(userProfile.lastActiveDate))
      : Infinity;
    return {
      currentStreak: daysSinceActive <= 1 ? (userProfile.currentStreak || 0) : 0,
      totalCountries: countries.length,
      visitedCountries: progressArray.filter(p => p.visited).length,
      completedCountries: progressArray.filter(p => p.fullyCompleted).length,
      inProgressCountries: progressArray.filter(
        p => p.visited && !p.fullyCompleted
      ).length,
      completedQuizzes: progressArray.filter(p => p.quizCompleted).length,
      cookedDishes: progressArray.filter(p => p.mainDishCooked).length,
      earnedBadges: badges.filter(b => b.earned).length,
    };
  }, [countryProgress, badges, userProfile.lastActiveDate, userProfile.currentStreak]);

  const addFavoriteRecipe = useCallback(async (
    recipeId: string,
    recipeName: string,
    countryId: string,
    countryName: string,
    countryFlag: string,
    isDessert: boolean
  ) => {
    afterLoad(() => setFavoriteRecipes(prev => {
      const newFavorite: FavoriteRecipe = {
        recipeId,
        recipeName,
        countryId,
        countryName,
        countryFlag,
        isDessert,
        savedDate: new Date().toISOString(),
      };
      const updatedFavorites = [...prev, newFavorite];
      persist(STORAGE_KEYS.FAVORITE_RECIPES, updatedFavorites);
      return updatedFavorites;
    }));
  }, [afterLoad, persist]);

  const removeFavoriteRecipe = useCallback(async (recipeId: string) => {
    afterLoad(() => setFavoriteRecipes(prev => {
      const updatedFavorites = prev.filter(fav => fav.recipeId !== recipeId);
      persist(STORAGE_KEYS.FAVORITE_RECIPES, updatedFavorites);
      return updatedFavorites;
    }));
  }, [afterLoad, persist]);

  const isRecipeFavorite = useCallback((recipeId: string): boolean => {
    return favoriteRecipes.some(fav => fav.recipeId === recipeId);
  }, [favoriteRecipes]);

  const toggleFavoriteCountry = useCallback(async (countryId: string) => {
    afterLoad(() => setUserProfile(prev => {
      const favoriteCountries = prev.favoriteCountries || [];
      const isFavorite = favoriteCountries.includes(countryId);
      const updatedFavorites = isFavorite
        ? favoriteCountries.filter(id => id !== countryId)
        : [...favoriteCountries, countryId];
      const updated = { ...prev, favoriteCountries: updatedFavorites };
      persist(STORAGE_KEYS.USER_PROFILE, updated);
      return updated;
    }));
  }, [afterLoad, persist]);

  const isFavoriteCountry = useCallback((countryId: string): boolean => {
    return (userProfile.favoriteCountries || []).includes(countryId);
  }, [userProfile.favoriteCountries]);

  const updateRecipeRating = useCallback(async (
    countryId: string,
    isDessert: boolean,
    rating: number
  ) => {
    const field = isDessert ? 'dessertRating' : 'mainDishRating';
    afterLoad(() => setCountryProgress(prev => {
      const current = prev[countryId] || {
        visited: false,
        mainDishCooked: false,
        dessertCooked: false,
        quizCompleted: false,
        fullyCompleted: false,
      };
      const updated = { ...current, [field]: rating };
      const newProgress = { ...prev, [countryId]: updated };
      persist(STORAGE_KEYS.COUNTRY_PROGRESS, newProgress);
      return newProgress;
    }));
  }, [afterLoad, persist]);

  /** Award a badge that isn't tied to country progress (e.g. inviting a friend). */
  const awardBadge = useCallback((badgeId: string) => {
    afterLoad(() => setBadges(prev => {
      const index = prev.findIndex(b => b.id === badgeId);
      if (index === -1 || prev[index].earned) return prev;
      const updated = [...prev];
      updated[index] = { ...updated[index], earned: true, earnedDate: new Date().toISOString() };
      persist(STORAGE_KEYS.BADGES, updated);
      return updated;
    }));
  }, [afterLoad, persist]);

  const purchaseProduct = useCallback(async (productId: string) => {
    applyOwnedProducts([productId], 'merge');
  }, [applyOwnedProducts]);

  const hasPurchasedProduct = useCallback((productId: string): boolean => {
    return (userProfile.purchasedProducts || []).includes(productId);
  }, [userProfile.purchasedProducts]);

  const addMealPlan = useCallback((plan: MealPlan) => {
    afterLoad(() => setMealPlans(prev => {
      // Replace if same date + mealType already exists
      const filtered = prev.filter(
        p => !(p.date === plan.date && p.mealType === plan.mealType),
      );
      const updated = [...filtered, plan];
      persist(STORAGE_KEYS.MEAL_PLANS, updated);
      return updated;
    }));
  }, [afterLoad, persist]);

  const removeMealPlan = useCallback((planId: string) => {
    afterLoad(() => setMealPlans(prev => {
      const updated = prev.filter(p => p.id !== planId);
      persist(STORAGE_KEYS.MEAL_PLANS, updated);
      return updated;
    }));
  }, [afterLoad, persist]);

  const getMealPlansForDate = useCallback((date: string): MealPlan[] => {
    return mealPlans.filter(p => p.date === date);
  }, [mealPlans]);

  const addMealPlanToShoppingList = useCallback((plan: MealPlan) => {
    const c = countries.find(cn => cn.id === plan.countryId);
    if (!c) return;
    const recipe = getPlannedRecipe(c, plan);
    if (!recipe) return;

    const lang = userProfile.language || 'en';
    const scaledIngredients = recipe.ingredients.map(ing => ({
      name: translateContent(ing.name, lang),
      amount: ing.amount,
      unit: translateContent(ing.unit, lang),
    }));

    addToShoppingList(scaledIngredients, c.id, translateContent(c.name, lang));
  }, [addToShoppingList, userProfile.language]);

  const trackDifficultyCooked = useCallback((difficulty: 'easy' | 'medium' | 'hard') => {
    afterLoad(() => setUserProfile(prev => {
      const current = prev.recipesCompletedByDifficulty || { easy: 0, medium: 0, hard: 0 };
      const updated = { ...current, [difficulty]: current[difficulty] + 1 };
      const newSkill = calculateSkillLevel(updated);
      const updatedProfile = {
        ...prev,
        recipesCompletedByDifficulty: updated,
        skillLevel: newSkill,
      };
      persist(STORAGE_KEYS.USER_PROFILE, updatedProfile);
      return updatedProfile;
    }));
  }, [afterLoad, persist]);

  return useMemo(() => ({
    userProfile,
    countryProgress,
    shoppingList,
    badges,
    favoriteRecipes,
    countries,
    stats,
    isLoading,
    completeOnboarding,
    updateCountryProgress,
    addToShoppingList,
    toggleShoppingItem,
    removeShoppingItem,
    clearShoppingList,
    resetProgress,
    updateUserProfile,
    addFavoriteRecipe,
    removeFavoriteRecipe,
    isRecipeFavorite,
    toggleFavoriteCountry,
    isFavoriteCountry,
    updateRecipeRating,
    userId,
    purchaseProduct,
    applyOwnedProducts,
    awardBadge,
    hasPurchasedProduct,
    trackDifficultyCooked,
    mealPlans,
    addMealPlan,
    removeMealPlan,
    getMealPlansForDate,
    addMealPlanToShoppingList,
  }), [
    userProfile,
    countryProgress,
    shoppingList,
    badges,
    favoriteRecipes,
    mealPlans,
    stats,
    isLoading,
    completeOnboarding,
    updateCountryProgress,
    addToShoppingList,
    toggleShoppingItem,
    removeShoppingItem,
    clearShoppingList,
    resetProgress,
    updateUserProfile,
    addFavoriteRecipe,
    removeFavoriteRecipe,
    isRecipeFavorite,
    toggleFavoriteCountry,
    isFavoriteCountry,
    updateRecipeRating,
    userId,
    purchaseProduct,
    applyOwnedProducts,
    awardBadge,
    hasPurchasedProduct,
    trackDifficultyCooked,
    addMealPlan,
    removeMealPlan,
    getMealPlansForDate,
    addMealPlanToShoppingList,
  ]);
});
