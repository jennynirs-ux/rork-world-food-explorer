import { useState, useEffect, useMemo, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createContextHook from '@nkzw/create-context-hook';
import { CountryProgress, UserProfile, ShoppingListItem, Badge, FavoriteRecipe, Country } from '@/types';
import { countries as localCountries } from '@/data/countries';
import { allBadges } from '@/data/badges';
import { trpc } from '@/lib/trpc';

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
  const [countries, setCountries] = useState<Country[]>(localCountries);
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
      setCountries(countriesQuery.data);
    }
  }, [countriesQuery.data]);

  useEffect(() => {
    const initUser = async () => {
      let storedUserId = await AsyncStorage.getItem('@world_cooking_user_id');
      if (!storedUserId) {
        storedUserId = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        await AsyncStorage.setItem('@world_cooking_user_id', storedUserId);
      }
      setUserId(storedUserId);
    };
    initUser();
    loadData();
  }, []);

  useEffect(() => {
    if (countriesQuery.data !== undefined && !hasInitialized) {
      setHasInitialized(true);
      const syncCountries = async () => {
        try {
          console.log('Syncing all countries with landscape images...');
          console.log(`Local countries count: ${localCountries.length}`);
          console.log(`Backend countries count: ${countriesQuery.data?.length || 0}`);
          
          await bulkUpdateMutation.mutateAsync({ countries: localCountries });
          console.log('Countries synced successfully!');
          
          const refreshedData = await countriesQuery.refetch();
          console.log(`After sync - Backend countries: ${refreshedData.data?.length || 0}`);
          
          const sampleCountry = refreshedData.data?.find(c => c.id === 'armenia');
          if (sampleCountry) {
            console.log('Armenia landscape check:', {
              hasLandscape: !!sampleCountry.landscapeImage,
              url: sampleCountry.landscapeImage?.substring(0, 50) + '...'
            });
          }
        } catch (error) {
          console.error('Error syncing countries:', error);
          console.error('Error details:', JSON.stringify(error, null, 2));
        }
      };
      syncCountries();
    }
  }, [countriesQuery.data, hasInitialized, bulkUpdateMutation, countriesQuery]);

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
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveUserProfile = async (profile: UserProfile) => {
    setUserProfile(profile);
    await AsyncStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
  };

  const saveCountryProgress = async (progress: ProgressState) => {
    setCountryProgress(progress);
    await AsyncStorage.setItem(STORAGE_KEYS.COUNTRY_PROGRESS, JSON.stringify(progress));
  };

  const saveShoppingList = async (list: ShoppingListItem[]) => {
    setShoppingList(list);
    await AsyncStorage.setItem(STORAGE_KEYS.SHOPPING_LIST, JSON.stringify(list));
  };

  const saveBadges = async (updatedBadges: Badge[]) => {
    setBadges(updatedBadges);
    await AsyncStorage.setItem(STORAGE_KEYS.BADGES, JSON.stringify(updatedBadges));
  };

  const updateUserProfile = useCallback(async (updates: Partial<UserProfile>) => {
    const updatedProfile = { ...userProfile, ...updates };
    await saveUserProfile(updatedProfile);
  }, [userProfile]);

  useEffect(() => {
    if (referralCodeQuery.data?.code && userProfile.referralCode !== referralCodeQuery.data.code) {
      updateUserProfile({ referralCode: referralCodeQuery.data.code });
    }
  }, [referralCodeQuery.data, userProfile.referralCode]);

  useEffect(() => {
    if (referralStatsQuery.data) {
      setReferralStats(referralStatsQuery.data);
      if (userProfile.referralCount !== referralStatsQuery.data.referralCount ||
          userProfile.freeMonthsEarned !== referralStatsQuery.data.freeMonthsEarned) {
        updateUserProfile({
          referralCount: referralStatsQuery.data.referralCount,
          freeMonthsEarned: referralStatsQuery.data.freeMonthsEarned,
        });
      }
    }
  }, [referralStatsQuery.data]);

  const completeOnboarding = async (name: string, avatar?: string, referralCode?: string) => {
    const updatedProfile = {
      ...userProfile,
      name,
      avatar,
      completedOnboarding: true,
      referredBy: referralCode,
    };
    await saveUserProfile(updatedProfile);
  };

  const addPoints = (points: number) => {
    const today = new Date().toISOString().split('T')[0];
    const lastActive = userProfile.lastActiveDate?.split('T')[0];
    
    let currentStreak = userProfile.currentStreak || 0;
    let longestStreak = userProfile.longestStreak || 0;

    if (lastActive) {
      const lastDate = new Date(lastActive);
      const todayDate = new Date(today);
      const daysDiff = Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));

      if (daysDiff === 1) {
        currentStreak += 1;
      } else if (daysDiff === 0) {
        
      } else {
        currentStreak = 1;
      }
    } else {
      currentStreak = 1;
    }

    if (currentStreak > longestStreak) {
      longestStreak = currentStreak;
    }

    const updatedProfile = {
      ...userProfile,
      totalPoints: userProfile.totalPoints + points,
      currentStreak,
      longestStreak,
      lastActiveDate: new Date().toISOString(),
    };
    saveUserProfile(updatedProfile);
  };

  const updateCountryProgress = async (
    countryId: string,
    updates: Partial<CountryProgress>,
    pointsToAdd: number
  ) => {
    const current = countryProgress[countryId] || {
      visited: false,
      mainDishCooked: false,
      dessertCooked: false,
      quizCompleted: false,
      fullyCompleted: false,
    };

    const updated = { ...current, ...updates };

    if (
      updated.mainDishCooked &&
      updated.quizCompleted &&
      !updated.fullyCompleted
    ) {
      updated.fullyCompleted = true;
      updated.completedDate = new Date().toISOString();
      pointsToAdd += 50;
    }

    const newProgress = { ...countryProgress, [countryId]: updated };
    await saveCountryProgress(newProgress);
    
    if (pointsToAdd > 0) {
      addPoints(pointsToAdd);
    }

    checkAndAwardBadges(newProgress);
  };

  const checkAndAwardBadges = async (progress: ProgressState) => {
    const updatedBadges = [...badges];
    let hasChanges = false;

    const completedCountries = Object.values(progress).filter(p => p.fullyCompleted).length;
    const completedQuizzes = Object.values(progress).filter(p => p.quizCompleted).length;
    const cookedMainDishes = Object.values(progress).filter(p => p.mainDishCooked).length;
    const cookedDesserts = Object.values(progress).filter(p => p.dessertCooked).length;
    const perfectQuizzes = Object.values(progress).filter(
      p => p.quizScore !== undefined && p.quizScore === 5
    ).length;

    const visitedContinents = new Set(
      Object.entries(progress)
        .filter(([_, p]) => p.visited)
        .map(([countryId]) => countries.find(c => c.id === countryId)?.continent)
        .filter(Boolean)
    );

    const badges_to_check = [
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
    ];

    badges_to_check.forEach(({ id, condition }) => {
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
      await saveBadges(updatedBadges);
    }
  };

  const addToShoppingList = async (
    ingredients: { name: string; amount: number; unit: string }[],
    countryId: string,
    countryName: string
  ) => {
    const newItems = ingredients.map(ingredient => {
      const existingItem = shoppingList.find(
        item => item.name.toLowerCase() === ingredient.name.toLowerCase() && item.unit === ingredient.unit
      );

      if (existingItem) {
        return null;
      }

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

    const combinedList = [...shoppingList];
    
    newItems.forEach(newItem => {
      const existingIndex = combinedList.findIndex(
        item => item.name.toLowerCase() === newItem.name.toLowerCase() && item.unit === newItem.unit
      );
      
      if (existingIndex >= 0) {
        combinedList[existingIndex].amount += newItem.amount;
      } else {
        combinedList.push(newItem);
      }
    });

    await saveShoppingList(combinedList);
  };

  const toggleShoppingItem = async (itemId: string) => {
    const updatedList = shoppingList.map(item =>
      item.id === itemId ? { ...item, checked: !item.checked } : item
    );
    await saveShoppingList(updatedList);
  };

  const removeShoppingItem = async (itemId: string) => {
    const updatedList = shoppingList.filter(item => item.id !== itemId);
    await saveShoppingList(updatedList);
  };

  const clearShoppingList = async () => {
    await saveShoppingList([]);
  };

  const resetProgress = async () => {
    await AsyncStorage.multiRemove([
      STORAGE_KEYS.COUNTRY_PROGRESS,
      STORAGE_KEYS.SHOPPING_LIST,
      STORAGE_KEYS.BADGES,
    ]);
    setCountryProgress({});
    setShoppingList([]);
    setBadges(allBadges.map(b => ({ ...b, earned: false })));
    const resetProfile = {
      ...userProfile,
      totalPoints: 0,
    };
    await saveUserProfile(resetProfile);
  };

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

  const saveFavoriteRecipes = async (recipes: FavoriteRecipe[]) => {
    setFavoriteRecipes(recipes);
    await AsyncStorage.setItem(STORAGE_KEYS.FAVORITE_RECIPES, JSON.stringify(recipes));
  };

  const addFavoriteRecipe = async (
    recipeId: string,
    recipeName: string,
    countryId: string,
    countryName: string,
    countryFlag: string,
    isDessert: boolean
  ) => {
    const newFavorite: FavoriteRecipe = {
      recipeId,
      recipeName,
      countryId,
      countryName,
      countryFlag,
      isDessert,
      savedDate: new Date().toISOString(),
    };
    const updatedFavorites = [...favoriteRecipes, newFavorite];
    await saveFavoriteRecipes(updatedFavorites);
  };

  const removeFavoriteRecipe = async (recipeId: string) => {
    const updatedFavorites = favoriteRecipes.filter(fav => fav.recipeId !== recipeId);
    await saveFavoriteRecipes(updatedFavorites);
  };

  const isRecipeFavorite = (recipeId: string): boolean => {
    return favoriteRecipes.some(fav => fav.recipeId === recipeId);
  };

  const toggleFavoriteCountry = async (countryId: string) => {
    const favoriteCountries = userProfile.favoriteCountries || [];
    const isFavorite = favoriteCountries.includes(countryId);
    
    const updatedFavorites = isFavorite
      ? favoriteCountries.filter(id => id !== countryId)
      : [...favoriteCountries, countryId];
    
    await updateUserProfile({ favoriteCountries: updatedFavorites });
  };

  const isFavoriteCountry = (countryId: string): boolean => {
    return (userProfile.favoriteCountries || []).includes(countryId);
  };

  const updateRecipeRating = async (
    countryId: string,
    isDessert: boolean,
    rating: number
  ) => {
    const field = isDessert ? 'dessertRating' : 'mainDishRating';
    const updates = { [field]: rating };
    
    const current = countryProgress[countryId] || {
      visited: false,
      mainDishCooked: false,
      dessertCooked: false,
      quizCompleted: false,
      fullyCompleted: false,
    };

    const updated = { ...current, ...updates };
    const newProgress = { ...countryProgress, [countryId]: updated };
    await saveCountryProgress(newProgress);
  };

  const refreshReferralStats = useCallback(() => {
    referralStatsQuery.refetch();
  }, [referralStatsQuery]);

  const purchaseProduct = useCallback(async (productId: string) => {
    const currentProducts = userProfile.purchasedProducts || [];
    if (!currentProducts.includes(productId)) {
      await updateUserProfile({ 
        purchasedProducts: [...currentProducts, productId] 
      });
    }
  }, [userProfile.purchasedProducts, updateUserProfile]);

  const hasPurchasedProduct = useCallback((productId: string): boolean => {
    return (userProfile.purchasedProducts || []).includes(productId);
  }, [userProfile.purchasedProducts]);

  return {
    userProfile,
    countryProgress,
    shoppingList,
    badges,
    favoriteRecipes,
    countries,
    stats,
    isLoading: isLoading || countriesQuery.isLoading,
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
    simulatePurchase: purchaseProduct,
    hasPurchasedProduct,
  };
});
