import { LucideIcon } from 'lucide-react-native';

export type DietType = 'meat' | 'fish' | 'vegetarian' | 'vegan';
export type TranslatedDietType = DietType | { en: string; sv?: string; es?: string; fr?: string; de?: string };

export type Recipe = {
  id: string;
  name: TranslatedString;
  description: TranslatedString;
  cookingTime: number;
  servings: number;
  dietType: TranslatedDietType;
  difficulty?: 'easy' | 'medium' | 'hard';
  ingredients: {
    name: TranslatedString;
    amount: number;
    unit: TranslatedString;
  }[];
  steps: TranslatedString[];
  imageUrl?: string;
};

export type Drink = {
  alcoholic: TranslatedString;
  nonAlcoholic: TranslatedString;
};

export type QuizQuestion = {
  id: string;
  question: TranslatedString;
  options: TranslatedString[];
  correctAnswer: number;
};

export type HistoryEvent = {
  year: TranslatedString;
  title: TranslatedString;
  description: TranslatedString;
};

export type Innovation = {
  name: TranslatedString;
  year: TranslatedString;
  description: TranslatedString;
};

export type MustVisit = {
  name: TranslatedString;
  description: TranslatedString;
  imageUrl?: string;
};

export type TravelEssential = {
  item: TranslatedString;
  description: TranslatedString;
};

export type QuickFact = {
  label: TranslatedString;
  value: TranslatedString;
};

export type TranslatedString = string | { en: string; sv?: string; es?: string; fr?: string; de?: string; it?: string; pl?: string; nl?: string; pt?: string };

export type Country = {
  id: string;
  name: TranslatedString;
  code: string;
  continent: TranslatedString;
  flag: string;
  landscapeImage?: string;
  description: TranslatedString;
  quickFacts?: QuickFact[];
  facts: TranslatedString[];
  foodCulture: TranslatedString;
  history?: HistoryEvent[];
  innovations?: Innovation[];
  mustVisit?: MustVisit[];
  travelEssentials?: TravelEssential[];
  mainDish: Recipe;
  dessert?: Recipe;
  drinks: Drink;
  music: TranslatedString[];
  decorationIdeas: TranslatedString[];
  conversationStarters: TranslatedString[];
  quiz: QuizQuestion[];
  coordinates?: { x: number; y: number };
  isUnlockedByDefault?: boolean;
};

export type CountryProgress = {
  visited: boolean;
  mainDishCooked: boolean;
  dessertCooked: boolean;
  quizCompleted: boolean;
  quizScore?: number;
  fullyCompleted: boolean;
  visitedDate?: string;
  completedDate?: string;
  mainDishRating?: number;
  dessertRating?: number;
};

export type Badge = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  earned: boolean;
  earnedDate?: string;
};

export type ShoppingListItem = {
  id: string;
  name: string;
  amount: number;
  unit: string;
  checked: boolean;
  countryId: string;
  countryName: string;
};

export type FavoriteRecipe = {
  recipeId: string;
  recipeName: string;
  countryId: string;
  countryName: string;
  countryFlag: string;
  isDessert: boolean;
  savedDate: string;
};

export type SubscriptionTier = 'free' | 'basic' | 'premium';

export type SubscriptionInfo = {
  tier: SubscriptionTier;
  isActive: boolean;
  expirationDate?: string;
  productId?: string;
  willRenew?: boolean;
};

export type UserProfile = {
  name: string;
  avatar?: string;
  totalPoints: number;
  createdDate: string;
  completedOnboarding: boolean;
  language?: string;
  dietaryPreferences?: DietType[];
  useMetric?: boolean;
  isSubscribed?: boolean;
  subscriptionDate?: string;
  currentStreak?: number;
  longestStreak?: number;
  lastActiveDate?: string;
  subscription?: SubscriptionInfo;
  favoriteCountries?: string[];
  referralCode?: string;
  referredBy?: string;
  referralCount?: number;
  freeMonthsEarned?: number;
  purchasedProducts?: string[];
};

export type CookingNote = {
  id: string;
  countryId: string;
  recipeId: string;
  note: string;
  rating?: number;
  createdDate: string;
};

export type MealPlan = {
  id: string;
  date: string;
  countryId: string;
  recipeId: string;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'dessert';
};

export type Referral = {
  id: string;
  referrerCode: string;
  refereeCode: string;
  status: 'pending' | 'completed';
  createdDate: string;
  completedDate?: string;
};

export type MonetizationProduct = {
  id: string;
  name: string;
  description: string;
  price: string;
  continent?: string;
};

export type ContinentPack = 'Europe' | 'Asia' | 'Africa' | 'North America' | 'South America' | 'Oceania';
