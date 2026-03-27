import { Country, Recipe } from '@/types';

export type RecipeMatch = {
  countryId: string;
  countryName: string;
  countryFlag: string;
  recipe: Recipe;
  isDessert: boolean;
  matchedIngredients: string[];
  totalIngredients: number;
  matchPercent: number;
};

/**
 * Normalize an ingredient name for matching.
 * Strips common modifiers and returns lowercase keywords.
 */
function normalize(name: string): string[] {
  const lower = name.toLowerCase()
    .replace(/\(.*?\)/g, '')       // remove parentheticals
    .replace(/,.*$/, '')           // remove comma-separated alternatives
    .trim();

  // Common words to strip
  const stopWords = [
    'fresh', 'dried', 'ground', 'chopped', 'minced', 'sliced', 'diced',
    'large', 'small', 'medium', 'whole', 'raw', 'cooked', 'frozen',
    'canned', 'ripe', 'green', 'red', 'white', 'black', 'yellow',
    'hot', 'cold', 'warm', 'thin', 'thick', 'finely', 'roughly',
    'boneless', 'skinless', 'organic', 'unsalted', 'salted',
  ];

  return lower
    .split(/\s+/)
    .filter(w => w.length > 2 && !stopWords.includes(w));
}

/**
 * Check if a user ingredient matches a recipe ingredient.
 */
function ingredientMatches(userIngredient: string, recipeIngredient: string): boolean {
  const userWords = normalize(userIngredient);
  const recipeWords = normalize(recipeIngredient);

  // Any keyword overlap counts as a match
  return userWords.some(uw =>
    recipeWords.some(rw => rw.includes(uw) || uw.includes(rw)),
  );
}

/**
 * Find recipes that match a set of user-provided ingredients.
 * Returns matches sorted by match percentage (best first).
 */
export function findMatchingRecipes(
  userIngredients: string[],
  countries: Country[],
  minMatchPercent = 30,
): RecipeMatch[] {
  const matches: RecipeMatch[] = [];

  for (const country of countries) {
    const countryName = typeof country.name === 'string' ? country.name : country.name.en;

    // Check main dish
    const mainMatch = matchRecipe(userIngredients, country.mainDish);
    if (mainMatch.matchPercent >= minMatchPercent) {
      matches.push({
        countryId: country.id,
        countryName,
        countryFlag: country.flag,
        recipe: country.mainDish,
        isDessert: false,
        ...mainMatch,
      });
    }

    // Check dessert
    if (country.dessert) {
      const dessertMatch = matchRecipe(userIngredients, country.dessert);
      if (dessertMatch.matchPercent >= minMatchPercent) {
        matches.push({
          countryId: country.id,
          countryName,
          countryFlag: country.flag,
          recipe: country.dessert,
          isDessert: true,
          ...dessertMatch,
        });
      }
    }
  }

  // Sort by match percentage descending
  return matches.sort((a, b) => b.matchPercent - a.matchPercent);
}

function matchRecipe(
  userIngredients: string[],
  recipe: Recipe,
): { matchedIngredients: string[]; totalIngredients: number; matchPercent: number } {
  const matched: string[] = [];

  for (const ing of recipe.ingredients) {
    const engName = typeof ing.name === 'string' ? ing.name : ing.name.en;

    for (const userIng of userIngredients) {
      if (ingredientMatches(userIng, engName)) {
        matched.push(engName);
        break;
      }
    }
  }

  const total = recipe.ingredients.length;
  const percent = total > 0 ? Math.round((matched.length / total) * 100) : 0;

  return {
    matchedIngredients: matched,
    totalIngredients: total,
    matchPercent: percent,
  };
}

/**
 * Get commonly searched ingredient suggestions.
 */
export const COMMON_INGREDIENTS = [
  'chicken', 'beef', 'pork', 'fish', 'tofu', 'eggs',
  'rice', 'pasta', 'potato', 'bread', 'flour', 'noodles',
  'onion', 'garlic', 'tomato', 'carrot', 'pepper', 'mushroom',
  'butter', 'cream', 'cheese', 'milk', 'yogurt',
  'lemon', 'coconut', 'ginger', 'cumin', 'chili',
  'beans', 'lentils', 'chickpeas', 'spinach', 'cabbage',
];
