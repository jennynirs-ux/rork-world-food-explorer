import { useState, useEffect, useMemo, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createContextHook from '@nkzw/create-context-hook';
import { CountryProgress, UserProfile, ShoppingListItem, Badge, FavoriteRecipe } from '@/types';
import { countries as localCountries } from '@/data/countries';
import { allBadges } from '@/data/badges';
import { trpc } from '@/lib/trpc';
import { translateContent } from '@/lib/translate-content';
import { configurePurchases, getCustomerInfo } from '@/lib/purchases';
import { filterValidCountries } from '@/lib/validate-country';
import { initializeNotifications } from '@/lib/notifications';

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
  const [countries, setCountries] = useState(localCountries);
  const [isLoading, setIsLoading] = useState(true);

  const countriesQuery = trpc.countries.getAll.useQuery(undefined, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const [hasInitialized, setHasInitialized] = useState(false);
  const [userId, setUserId] = useState<string>('');
  const [referralStats, setReferralStats] = useState({ referralCount: 0, completedCount: 0, freeMonthsEarned: 0 });

  const referralCodeQuery = trpc.referrals.getCode.useQuery(
    { userId },
    { enabled: !!userId, refetchOnWindowFocus: false, refetchOnMount: false }
  );

  const referralStatsQuery = trpc.referrals.getStats.useQuery(
    { userId },
    { enabled: !!userId, refetchOnWindowFocus: false, refetchOnMount: false }
  );

  const bulkUpdateMutation = trpc.countries.bulkUpdate.useMutation();

  useEffect(() => {
    if (countriesQuery.data && countriesQuery.data.length > 0) {
      setCountries(filterValidCountries(countriesQuery.data));
    }
  }, [countriesQuery.data]);

  useEffect(() => {
    const initUser = async () => {
      try {
        let storedUserId = await AsyncStorage.getItem('@world_cooking_user_id');
        if (!storedUserId) {
          storedUserId = `user-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
          await AsyncStorage.setItem('@world_cooking_user_id', storedUserId);
        }
        setUserId(storedUserId);

        // Initialize RevenueCat and sync any existing entitlements
        await configurePurchases(storedUserId);
        const activeEntitlements = await getCustomerInfo();
        if (activeEntitlements.length > 0) {
          setUserProfile(prev => {
            const currentProducts = prev.purchasedProducts || [];
            const merged = [...new Set([...currentProducts, ...activeEntitlements])];
            if (merged.length !== currentProducts.length) {
              const updated = { ...prev, purchasedProducts: merged };
              void AsyncStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(updated));
              return updated;
            }
            return prev;
          });
        }
      } catch (error) {
        if (__DEV__) console.error('Error initializing user ID:', error);
      }
    };
    const loadData = async () => {
      try {
        const [profileData, progressData, shoppingData, badgesData, favoritesData] = await Promise.all([
          AsyncStorage.getItem(STORAGE_KEYS.USER_PROFILE),
          AsyncStorage.getItem(STORAGE_KEYS.COUNTRY_PROGRESS),
          AsyncStorage.getItem(STORAGE_KEYS.SHOPPING_LIST),
          AsyncStorage.getItem(STORAGE_KEYS.BADGES),
          AsyncStorage.getItem(STORAGE_KEYS.FAVORITE_RECIPES),
        ]);

        if (profileData) {
          const profile = JSON.parse(profileData);
          setUserProfile(profile);
        }
        if (progressData) setCountryProgress(JSON.parse(progressData));
        if (shoppingData) setShoppingList(JSON.parse(shoppingData));
        if (favoritesData) setFavoriteRecipes(JSON.parse(favoritesData));
        if (badgesData) {
          const loadedBadges = JSON.parse(badgesData);
          const badgesWithIcons = loadedBadges.map((savedBadge: Badge) => {
            const originalBadge = allBadges.find(b => b.id === savedBadge.id);
            return {
              ...savedBadge,
              icon: originalBadge?.icon || savedBadge.icon,
            };
          });
          setBadges(badgesWithIcons);
        }
      } catch (error) {
        if (__DEV__) console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    void initUser();
    void loadData();
    void initializeNotifications();
  }, []);

  useEffect(() => {
    if (countriesQuery.data !== undefined && !hasInitialized) {
      setHasInitialized(true);
      const syncCountries = async () => {
        try {
          await bulkUpdateMutation.mutateAsync({ countries: localCountries });
          await countriesQuery.refetch();
        } catch (error) {
          if (__DEV__) console.error('Error syncing countries:', error);
        }
      };
      void syncCountries();
    }
  }, [countriesQuery.data, hasInitialized, bulkUpdateMutation, countriesQuery]);

  const updateUserProfile = useCallback(async (updates: Partial<UserProfile>) => {
    setUserProfile(prev => {
      const updatedProfile = { ...prev, ...updates };
      void AsyncStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(updatedProfile));
      return updatedProfile;
    });
  }, []);

  useEffect(() => {
    if (referralCodeQuery.data?.code && userProfile.referralCode !== referralCodeQuery.data.code) {
      void updateUserProfile({ referralCode: referralCodeQuery.data.code });
    }
  }, [referralCodeQuery.data?.code, userProfile.referralCode, updateUserProfile]);

  useEffect(() => {
    if (referralStatsQuery.data) {
      setReferralStats(referralStatsQuery.data);
      if (userProfile.referralCount !== referralStatsQuery.data.referralCount ||
          userProfile.freeMonthsEarned !== referralStatsQuery.data.freeMonthsEarned) {
        void updateUserProfile({
          referralCount: referralStatsQuery.data.referralCount,
          freeMonthsEarned: referralStatsQuery.data.freeMonthsEarned,
        });
      }
    }
  }, [referralStatsQuery.data, userProfile.referralCount, userProfile.freeMonthsEarned, updateUserProfile]);

  const completeOnboarding = useCallback(async (name: string, language?: string, avatar?: string, referralCode?: string) => {
    const updatedProfile: UserProfile = {
      ...userProfile,
      name,
      language: language || 'en',
      avatar,
      completedOnboarding: true,
      referredBy: referralCode,
    };
    setUserProfile(updatedProfile);
    await AsyncStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(updatedProfile));
  }, [userProfile]);

  const updateCountryProgress = useCallback(async (
    countryId: string,
    updates: Partial<CountryProgress>,
    pointsToAdd: number
  ) => {
    setCountryProgress(prev => {
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
      void AsyncStorage.setItem(STORAGE_KEYS.COUNTRY_PROGRESS, JSON.stringify(newProgress));

      if (finalPoints > 0) {
        setUserProfile(prevProfile => {
          const today = new Date().toISOString().split('T')[0];
          const lastActive = prevProfile.lastActiveDate?.split('T')[0];
          let currentStreak = prevProfile.currentStreak || 0;
          let longestStreak = prevProfile.longestStreak || 0;

          if (lastActive) {
            const lastDate = new Date(lastActive);
            const todayDate = new Date(today);
            const daysDiff = Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
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
          void AsyncStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(updatedProfile));
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
        const perfectQuizzes = Object.values(newProgress).filter(
          p => p.quizScore !== undefined && p.quizScore === 5
        ).length;

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
          void AsyncStorage.setItem(STORAGE_KEYS.BADGES, JSON.stringify(updatedBadges));
          return updatedBadges;
        }
        return prevBadges;
      });

      return newProgress;
    });
  }, [countries]);

  const addToShoppingList = useCallback(async (
    ingredients: { name: string; amount: number; unit: string }[],
    countryId: string,
    countryName: string
  ) => {
    setShoppingList(prev => {
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

      void AsyncStorage.setItem(STORAGE_KEYS.SHOPPING_LIST, JSON.stringify(combinedList));
      return combinedList;
    });
  }, []);

  const toggleShoppingItem = useCallback(async (itemId: string) => {
    setShoppingList(prev => {
      const updatedList = prev.map(item =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      );
      void AsyncStorage.setItem(STORAGE_KEYS.SHOPPING_LIST, JSON.stringify(updatedList));
      return updatedList;
    });
  }, []);

  const removeShoppingItem = useCallback(async (itemId: string) => {
    setShoppingList(prev => {
      const updatedList = prev.filter(item => item.id !== itemId);
      void AsyncStorage.setItem(STORAGE_KEYS.SHOPPING_LIST, JSON.stringify(updatedList));
      return updatedList;
    });
  }, []);

  const clearShoppingList = useCallback(async () => {
    setShoppingList([]);
    await AsyncStorage.setItem(STORAGE_KEYS.SHOPPING_LIST, JSON.stringify([]));
  }, []);

  const resetProgress = useCallback(async () => {
    await AsyncStorage.multiRemove([
      STORAGE_KEYS.COUNTRY_PROGRESS,
      STORAGE_KEYS.SHOPPING_LIST,
      STORAGE_KEYS.BADGES,
    ]);
    setCountryProgress({});
    setShoppingList([]);
    setBadges(allBadges.map(b => ({ ...b, earned: false })));
    setUserProfile(prev => {
      const resetProfile = { ...prev, totalPoints: 0 };
      void AsyncStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(resetProfile));
      return resetProfile;
    });
  }, []);

  const stats = useMemo(() => {
    const progressArray = Object.values(countryProgress);
    return {
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
  }, [countryProgress, badges, countries.length]);

  const addFavoriteRecipe = useCallback(async (
    recipeId: string,
    recipeName: string,
    countryId: string,
    countryName: string,
    countryFlag: string,
    isDessert: boolean
  ) => {
    setFavoriteRecipes(prev => {
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
      void AsyncStorage.setItem(STORAGE_KEYS.FAVORITE_RECIPES, JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  }, []);

  const removeFavoriteRecipe = useCallback(async (recipeId: string) => {
    setFavoriteRecipes(prev => {
      const updatedFavorites = prev.filter(fav => fav.recipeId !== recipeId);
      void AsyncStorage.setItem(STORAGE_KEYS.FAVORITE_RECIPES, JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  }, []);

  const isRecipeFavorite = useCallback((recipeId: string): boolean => {
    return favoriteRecipes.some(fav => fav.recipeId === recipeId);
  }, [favoriteRecipes]);

  const toggleFavoriteCountry = useCallback(async (countryId: string) => {
    setUserProfile(prev => {
      const favoriteCountries = prev.favoriteCountries || [];
      const isFavorite = favoriteCountries.includes(countryId);
      const updatedFavorites = isFavorite
        ? favoriteCountries.filter(id => id !== countryId)
        : [...favoriteCountries, countryId];
      const updated = { ...prev, favoriteCountries: updatedFavorites };
      void AsyncStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const isFavoriteCountry = useCallback((countryId: string): boolean => {
    return (userProfile.favoriteCountries || []).includes(countryId);
  }, [userProfile.favoriteCountries]);

  const updateRecipeRating = useCallback(async (
    countryId: string,
    isDessert: boolean,
    rating: number
  ) => {
    const field = isDessert ? 'dessertRating' : 'mainDishRating';
    setCountryProgress(prev => {
      const current = prev[countryId] || {
        visited: false,
        mainDishCooked: false,
        dessertCooked: false,
        quizCompleted: false,
        fullyCompleted: false,
      };
      const updated = { ...current, [field]: rating };
      const newProgress = { ...prev, [countryId]: updated };
      void AsyncStorage.setItem(STORAGE_KEYS.COUNTRY_PROGRESS, JSON.stringify(newProgress));
      return newProgress;
    });
  }, []);

  const refreshReferralStats = useCallback(() => {
    void referralStatsQuery.refetch();
  }, [referralStatsQuery]);

  const purchaseProduct = useCallback(async (productId: string) => {
    setUserProfile(prev => {
      const currentProducts = prev.purchasedProducts || [];
      if (!currentProducts.includes(productId)) {
        const updated = { 
          ...prev,
          purchasedProducts: [...currentProducts, productId] 
        };
        void AsyncStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(updated));
        return updated;
      }
      return prev;
    });
  }, []);

  const hasPurchasedProduct = useCallback((productId: string): boolean => {
    return (userProfile.purchasedProducts || []).includes(productId);
  }, [userProfile.purchasedProducts]);

  return useMemo(() => ({
    userProfile,
    countryProgress,
    shoppingList,
    badges,
    favoriteRecipes,
    countries,
    stats,
    isLoading: isLoading || countriesQuery.isLoading,
    countriesError: countriesQuery.error ? String(countriesQuery.error.message) : null,
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
    referralStats,
    refreshReferralStats,
    purchaseProduct,
    hasPurchasedProduct,
  }), [
    userProfile,
    countryProgress,
    shoppingList,
    badges,
    favoriteRecipes,
    countries,
    stats,
    isLoading,
    countriesQuery.isLoading,
    countriesQuery.error,
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
    referralStats,
    refreshReferralStats,
    purchaseProduct,
    hasPurchasedProduct,
  ]);
});
