import { Recipe, NutritionInfo } from '@/types';

/**
 * Approximate nutrition database keyed by lowercase English ingredient keyword.
 * Values are per 100g: { calories, protein, carbs, fat, fiber }.
 */
const NUTRITION_DB: Record<string, { cal: number; p: number; c: number; f: number; fi?: number }> = {
  // Proteins
  beef: { cal: 250, p: 26, c: 0, f: 15 },
  pork: { cal: 242, p: 27, c: 0, f: 14 },
  chicken: { cal: 165, p: 31, c: 0, f: 3.6 },
  lamb: { cal: 294, p: 25, c: 0, f: 21 },
  turkey: { cal: 135, p: 30, c: 0, f: 1 },
  duck: { cal: 337, p: 19, c: 0, f: 28 },
  fish: { cal: 136, p: 20, c: 0, f: 6 },
  salmon: { cal: 208, p: 20, c: 0, f: 13 },
  tuna: { cal: 130, p: 29, c: 0, f: 1 },
  shrimp: { cal: 99, p: 24, c: 0, f: 0.3 },
  prawn: { cal: 99, p: 24, c: 0, f: 0.3 },
  cod: { cal: 82, p: 18, c: 0, f: 0.7 },
  tofu: { cal: 76, p: 8, c: 1.9, f: 4.8 },
  egg: { cal: 155, p: 13, c: 1.1, f: 11 },
  sausage: { cal: 301, p: 12, c: 2, f: 27 },

  // Grains & starches
  rice: { cal: 130, p: 2.7, c: 28, f: 0.3, fi: 0.4 },
  pasta: { cal: 131, p: 5, c: 25, f: 1.1, fi: 1.8 },
  noodle: { cal: 138, p: 4.5, c: 25, f: 2.1 },
  bread: { cal: 265, p: 9, c: 49, f: 3.2, fi: 2.7 },
  flour: { cal: 364, p: 10, c: 76, f: 1, fi: 2.7 },
  potato: { cal: 77, p: 2, c: 17, f: 0.1, fi: 2.2 },
  corn: { cal: 86, p: 3.3, c: 19, f: 1.2, fi: 2.7 },
  couscous: { cal: 112, p: 3.8, c: 23, f: 0.2, fi: 1.4 },
  quinoa: { cal: 120, p: 4.4, c: 21, f: 1.9, fi: 2.8 },
  tortilla: { cal: 312, p: 8, c: 52, f: 8.5 },
  plantain: { cal: 122, p: 1.3, c: 32, f: 0.4, fi: 2.3 },
  cassava: { cal: 160, p: 1.4, c: 38, f: 0.3, fi: 1.8 },
  yam: { cal: 118, p: 1.5, c: 28, f: 0.2, fi: 4.1 },
  oat: { cal: 389, p: 17, c: 66, f: 7, fi: 10.6 },

  // Vegetables
  onion: { cal: 40, p: 1.1, c: 9, f: 0.1, fi: 1.7 },
  garlic: { cal: 149, p: 6.4, c: 33, f: 0.5 },
  tomato: { cal: 18, p: 0.9, c: 3.9, f: 0.2, fi: 1.2 },
  carrot: { cal: 41, p: 0.9, c: 10, f: 0.2, fi: 2.8 },
  pepper: { cal: 31, p: 1, c: 6, f: 0.3, fi: 2.1 },
  spinach: { cal: 23, p: 2.9, c: 3.6, f: 0.4, fi: 2.2 },
  cabbage: { cal: 25, p: 1.3, c: 6, f: 0.1, fi: 2.5 },
  bean: { cal: 347, p: 21, c: 63, f: 1.2, fi: 15.2 },
  lentil: { cal: 116, p: 9, c: 20, f: 0.4, fi: 7.9 },
  chickpea: { cal: 164, p: 8.9, c: 27, f: 2.6, fi: 7.6 },
  pea: { cal: 81, p: 5.4, c: 14, f: 0.4, fi: 5.1 },
  mushroom: { cal: 22, p: 3.1, c: 3.3, f: 0.3, fi: 1 },
  eggplant: { cal: 25, p: 1, c: 6, f: 0.2, fi: 3 },
  zucchini: { cal: 17, p: 1.2, c: 3.1, f: 0.3, fi: 1 },
  cucumber: { cal: 15, p: 0.7, c: 3.6, f: 0.1, fi: 0.5 },
  celery: { cal: 14, p: 0.7, c: 3, f: 0.2, fi: 1.6 },
  lettuce: { cal: 15, p: 1.4, c: 2.9, f: 0.2, fi: 1.3 },
  broccoli: { cal: 34, p: 2.8, c: 7, f: 0.4, fi: 2.6 },
  cauliflower: { cal: 25, p: 1.9, c: 5, f: 0.3, fi: 2 },
  okra: { cal: 33, p: 1.9, c: 7, f: 0.2, fi: 3.2 },
  squash: { cal: 45, p: 1, c: 12, f: 0.1, fi: 2 },
  pumpkin: { cal: 26, p: 1, c: 7, f: 0.1, fi: 0.5 },
  avocado: { cal: 160, p: 2, c: 9, f: 15, fi: 6.7 },

  // Dairy & fats
  butter: { cal: 717, p: 0.9, c: 0.1, f: 81 },
  cream: { cal: 340, p: 2.1, c: 2.8, f: 36 },
  milk: { cal: 42, p: 3.4, c: 5, f: 1 },
  cheese: { cal: 402, p: 25, c: 1.3, f: 33 },
  yogurt: { cal: 59, p: 10, c: 3.6, f: 0.7 },
  oil: { cal: 884, p: 0, c: 0, f: 100 },
  coconut: { cal: 354, p: 3.3, c: 15, f: 33 },

  // Fruits
  banana: { cal: 89, p: 1.1, c: 23, f: 0.3, fi: 2.6 },
  apple: { cal: 52, p: 0.3, c: 14, f: 0.2, fi: 2.4 },
  lemon: { cal: 29, p: 1.1, c: 9, f: 0.3, fi: 2.8 },
  lime: { cal: 30, p: 0.7, c: 11, f: 0.2, fi: 2.8 },
  mango: { cal: 60, p: 0.8, c: 15, f: 0.4, fi: 1.6 },
  pineapple: { cal: 50, p: 0.5, c: 13, f: 0.1, fi: 1.4 },
  orange: { cal: 47, p: 0.9, c: 12, f: 0.1, fi: 2.4 },
  berry: { cal: 57, p: 0.7, c: 14, f: 0.3, fi: 2.4 },
  date: { cal: 277, p: 1.8, c: 75, f: 0.2, fi: 6.7 },
  raisin: { cal: 299, p: 3.1, c: 79, f: 0.5, fi: 3.7 },
  lingonberry: { cal: 50, p: 0.3, c: 12, f: 0.5, fi: 3 },

  // Nuts & seeds
  peanut: { cal: 567, p: 26, c: 16, f: 49, fi: 8.5 },
  groundnut: { cal: 567, p: 26, c: 16, f: 49, fi: 8.5 },
  almond: { cal: 579, p: 21, c: 22, f: 50, fi: 12.5 },
  cashew: { cal: 553, p: 18, c: 30, f: 44, fi: 3.3 },
  walnut: { cal: 654, p: 15, c: 14, f: 65, fi: 6.7 },
  sesame: { cal: 573, p: 18, c: 23, f: 50 },
  pistachio: { cal: 560, p: 20, c: 28, f: 45, fi: 10 },

  // Spices & condiments (small amounts, low impact)
  salt: { cal: 0, p: 0, c: 0, f: 0 },
  'black pepper': { cal: 0, p: 0, c: 0, f: 0 },
  sugar: { cal: 387, p: 0, c: 100, f: 0 },
  honey: { cal: 304, p: 0.3, c: 82, f: 0 },
  soy: { cal: 53, p: 8, c: 5, f: 0.6 },
  vinegar: { cal: 18, p: 0, c: 0.04, f: 0 },
  cumin: { cal: 375, p: 18, c: 44, f: 22 },
  cinnamon: { cal: 247, p: 4, c: 81, f: 1.2, fi: 53 },
  ginger: { cal: 80, p: 1.8, c: 18, f: 0.8, fi: 2 },
  turmeric: { cal: 354, p: 8, c: 65, f: 10 },
  paprika: { cal: 282, p: 14, c: 54, f: 13 },
  chili: { cal: 40, p: 1.9, c: 9, f: 0.4 },
  curry: { cal: 325, p: 14, c: 58, f: 14 },
  coriander: { cal: 23, p: 2.1, c: 3.7, f: 0.5, fi: 2.8 },
  parsley: { cal: 36, p: 3, c: 6.3, f: 0.8, fi: 3.3 },
  basil: { cal: 23, p: 3.2, c: 2.7, f: 0.6, fi: 1.6 },
  thyme: { cal: 101, p: 5.6, c: 24, f: 1.7, fi: 14 },
  oregano: { cal: 265, p: 9, c: 69, f: 4.3, fi: 42.5 },
};

/**
 * Convert an amount from its unit to approximate grams.
 */
function toGrams(amount: number, unit: string): number {
  const u = unit.toLowerCase().trim();

  // Already grams
  if (u === 'g' || u === 'grams' || u === 'gram') return amount;
  if (u === 'kg' || u === 'kilogram') return amount * 1000;

  // Volume-based (rough conversion assuming water-like density)
  if (u === 'ml' || u === 'milliliter') return amount;
  if (u === 'l' || u === 'liter' || u === 'litre') return amount * 1000;
  if (u === 'cup' || u === 'cups') return amount * 240;
  if (u === 'tbsp' || u === 'tablespoon' || u === 'tablespoons') return amount * 15;
  if (u === 'tsp' || u === 'teaspoon' || u === 'teaspoons') return amount * 5;

  // Count-based (rough averages)
  if (u === 'piece' || u === 'pieces' || u === 'pcs' || u === 'whole') return amount * 100;
  if (u === 'clove' || u === 'cloves') return amount * 5;
  if (u === 'slice' || u === 'slices') return amount * 30;
  if (u === 'bunch' || u === 'bunches') return amount * 50;
  if (u === 'can' || u === 'cans') return amount * 400;
  if (u === 'handful') return amount * 30;
  if (u === 'pinch') return amount * 1;
  if (u === 'dash') return amount * 1;
  if (u === 'lb' || u === 'pound' || u === 'pounds') return amount * 454;
  if (u === 'oz' || u === 'ounce' || u === 'ounces') return amount * 28;
  if (u === 'stalk' || u === 'stalks') return amount * 60;
  if (u === 'sprig' || u === 'sprigs') return amount * 2;
  if (u === 'leaf' || u === 'leaves') return amount * 2;
  if (u === 'stick' || u === 'sticks') return amount * 113; // butter stick

  // Default: treat as grams
  return amount;
}

/**
 * Match an ingredient name to our nutrition DB.
 * Returns null if no match found.
 */
function matchIngredient(name: string): { cal: number; p: number; c: number; f: number; fi?: number } | null {
  const lower = name.toLowerCase();

  // Direct key match
  for (const key of Object.keys(NUTRITION_DB)) {
    if (lower.includes(key)) {
      return NUTRITION_DB[key];
    }
  }

  return null;
}

/**
 * Estimate nutrition info for a recipe based on its ingredients.
 * Returns approximate values per serving.
 */
export function estimateNutrition(recipe: Recipe): NutritionInfo {
  // If recipe already has nutrition data, use it
  if (recipe.nutrition) return recipe.nutrition;

  let totalCal = 0;
  let totalProtein = 0;
  let totalCarbs = 0;
  let totalFat = 0;
  let totalFiber = 0;

  for (const ing of recipe.ingredients) {
    const engName = typeof ing.name === 'string' ? ing.name : ing.name.en;
    const engUnit = typeof ing.unit === 'string' ? ing.unit : ing.unit.en;

    const match = matchIngredient(engName);
    if (!match) continue;

    const grams = toGrams(ing.amount, engUnit);
    const factor = grams / 100; // nutrition DB is per 100g

    totalCal += match.cal * factor;
    totalProtein += match.p * factor;
    totalCarbs += match.c * factor;
    totalFat += match.f * factor;
    if (match.fi) totalFiber += match.fi * factor;
  }

  const servings = recipe.servings || 1;

  return {
    caloriesPerServing: Math.round(totalCal / servings),
    protein: Math.round(totalProtein / servings),
    carbs: Math.round(totalCarbs / servings),
    fat: Math.round(totalFat / servings),
    fiber: totalFiber > 0 ? Math.round(totalFiber / servings) : undefined,
  };
}

/**
 * Get difficulty label with color for display.
 */
export function getDifficultyInfo(difficulty?: 'easy' | 'medium' | 'hard'): {
  label: string;
  color: string;
  bgColor: string;
} {
  switch (difficulty) {
    case 'easy':
      return { label: 'Easy', color: '#16A34A', bgColor: '#DCFCE7' };
    case 'medium':
      return { label: 'Medium', color: '#CA8A04', bgColor: '#FEF9C3' };
    case 'hard':
      return { label: 'Hard', color: '#DC2626', bgColor: '#FEE2E2' };
    default:
      return { label: 'Medium', color: '#CA8A04', bgColor: '#FEF9C3' };
  }
}

/**
 * Calculate user skill level from their cooking history.
 */
export function calculateSkillLevel(
  recipesCompleted: { easy: number; medium: number; hard: number },
): 'beginner' | 'intermediate' | 'advanced' {
  const total = recipesCompleted.easy + recipesCompleted.medium + recipesCompleted.hard;
  const mediumPlus = recipesCompleted.medium + recipesCompleted.hard;

  if (total >= 15 && mediumPlus >= 5) return 'advanced';
  if (total >= 5) return 'intermediate';
  return 'beginner';
}
