import type { Country, CountryProgress, FavoriteRecipe, Recipe } from '@/types';
import { translateContent, type TranslatableContent } from '@/lib/translate-content';
import { isCountryAccessible } from '@/lib/access-control';

export type CookbookEntry = {
  /** Unique within its section. */
  key: string;
  recipeId: string;
  countryId: string;
  dishName: string;
  countryName: string;
  flag: string;
  imageUrl?: string;
  cookingTime?: number;
  isDessert: boolean;
  /** Country isn't unlocked for this user. */
  locked: boolean;
  /** The user's 1–5 star rating, when they gave one. */
  rating?: number;
  /** False when the recipe no longer exists in the bundled data. */
  available: boolean;
};

type RecipeRef = { country: Country; recipe: Recipe; isDessert: boolean };

function indexRecipes(countries: Country[]): Map<string, RecipeRef> {
  const index = new Map<string, RecipeRef>();
  for (const country of countries) {
    if (country.mainDish) index.set(country.mainDish.id, { country, recipe: country.mainDish, isDessert: false });
    if (country.dessert) index.set(country.dessert.id, { country, recipe: country.dessert, isDessert: true });
  }
  return index;
}

function toEntry(
  ref: RecipeRef,
  language: string,
  purchasedProducts: string[],
  rating?: number,
): CookbookEntry {
  const { country, recipe, isDessert } = ref;
  return {
    key: recipe.id,
    recipeId: recipe.id,
    countryId: country.id,
    dishName: translateContent(recipe.name, language),
    countryName: translateContent(country.name, language),
    flag: country.flag,
    imageUrl: recipe.imageUrl,
    cookingTime: recipe.cookingTime,
    isDessert,
    locked: !isCountryAccessible(country, purchasedProducts),
    rating: normalizeRating(rating),
    available: true,
  };
}

function normalizeRating(rating: unknown): number | undefined {
  if (typeof rating !== 'number' || !Number.isFinite(rating)) return undefined;
  const rounded = Math.round(rating);
  return rounded >= 1 ? Math.min(rounded, 5) : undefined;
}

function timeOf(date: string | undefined): number {
  const ms = date ? Date.parse(date) : NaN;
  return Number.isNaN(ms) ? 0 : ms;
}

/**
 * Saved recipes, newest first, one row per recipe. Names come from the
 * bundled data in the current language — the stored names were captured in
 * whatever language the app used when the recipe was saved.
 */
export function buildSavedEntries(
  favorites: FavoriteRecipe[],
  countries: Country[],
  language: string,
  purchasedProducts: string[],
): CookbookEntry[] {
  const newestByRecipe = new Map<string, FavoriteRecipe>();
  for (const fav of favorites) {
    const existing = newestByRecipe.get(fav.recipeId);
    if (!existing || timeOf(fav.savedDate) > timeOf(existing.savedDate)) {
      newestByRecipe.set(fav.recipeId, fav);
    }
  }

  const index = indexRecipes(countries);
  return [...newestByRecipe.values()]
    .sort((a, b) => timeOf(b.savedDate) - timeOf(a.savedDate))
    .map(fav => {
      const ref = index.get(fav.recipeId);
      if (ref) return toEntry(ref, language, purchasedProducts);
      // Recipe was removed from the data: keep the row so it can still be
      // un-saved, using whatever was stored at save time.
      return {
        key: fav.recipeId,
        recipeId: fav.recipeId,
        countryId: fav.countryId,
        dishName: translateContent(fav.recipeName as TranslatableContent, language),
        countryName: translateContent(fav.countryName as TranslatableContent, language),
        flag: fav.countryFlag,
        isDessert: fav.isDessert,
        locked: false,
        available: false,
      };
    });
}

/**
 * Dishes marked as cooked. Highest-rated first, then alphabetical, so the
 * user's best dishes are at the top.
 */
export function buildCookedEntries(
  progress: Record<string, CountryProgress | undefined>,
  countries: Country[],
  language: string,
  purchasedProducts: string[],
): CookbookEntry[] {
  const entries: CookbookEntry[] = [];
  for (const country of countries) {
    const p = progress[country.id];
    if (!p) continue;
    if (p.mainDishCooked && country.mainDish) {
      entries.push(toEntry({ country, recipe: country.mainDish, isDessert: false }, language, purchasedProducts, p.mainDishRating));
    }
    if (p.dessertCooked && country.dessert) {
      entries.push(toEntry({ country, recipe: country.dessert, isDessert: true }, language, purchasedProducts, p.dessertRating));
    }
  }
  return entries.sort(
    (a, b) => (b.rating ?? 0) - (a.rating ?? 0) || a.dishName.localeCompare(b.dishName, language),
  );
}
