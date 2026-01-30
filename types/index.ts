import { LucideIcon } from 'lucide-react-native';

export type DietType = 'meat' | 'fish' | 'vegetarian' | 'vegan';

export type Recipe = {
  id: string;
  name: string;
  description: string;
  cookingTime: number;
  servings: number;
  dietType: DietType;
  difficulty?: 'easy' | 'medium' | 'hard';
  ingredients: {
    name: string;
    amount: number;
    unit: string;
  }[];
  steps: string[];
  imageUrl?: string;
};

export type Drink = {
  alcoholic: string;
  nonAlcoholic: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
};

export type HistoryEvent = {
  year: string;
  title: string;
  description: string;
};

export type Innovation = {
  name: string;
  year: string;
  description: string;
};

export type MustVisit = {
  name: string;
  description: string;
  imageUrl?: string;
};

export type TravelEssential = {
  item: string;
  description: string;
};

export type QuickFact = {
  label: string;
  value: string;
};

export type Country = {
  id: string;
  name: string;
  code: string;
  continent: string;
  flag: string;
  landscapeImage?: string;
  description: string;
  quickFacts?: QuickFact[];
  facts: string[];
  foodCulture: string;
  history?: HistoryEvent[];
  innovations?: Innovation[];
  mustVisit?: MustVisit[];
  travelEssentials?: TravelEssential[];
  mainDish: Recipe;
  dessert?: Recipe;
  drinks: Drink;
  music: string[];
  decorationIdeas: string[];
  conversationStarters: string[];
  quiz: QuizQuestion[];
  coordinates?: { x: number; y: number };
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
