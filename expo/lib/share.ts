import { Share, Platform } from 'react-native';
import { Country, Recipe } from '@/types';
import { translateContent } from '@/lib/translate-content';

const APP_LINK = 'https://worldfoodexplorer.app';

/**
 * Share a recipe with ingredients and steps.
 */
export async function shareRecipe(
  country: Country,
  recipe: Recipe,
  isDessert: boolean,
  lang = 'en',
): Promise<void> {
  const name = translateContent(recipe.name, lang);
  const countryName = translateContent(country.name, lang);
  const flag = country.flag;

  const ingredients = recipe.ingredients
    .map(ing => `  • ${ing.amount} ${translateContent(ing.unit, lang)} ${translateContent(ing.name, lang)}`)
    .join('\n');

  const steps = recipe.steps
    .map((s, i) => `  ${i + 1}. ${translateContent(s, lang)}`)
    .join('\n');

  const type = isDessert ? 'Dessert' : 'Main Dish';
  const message = [
    `${flag} ${name} — ${type} from ${countryName}`,
    '',
    `⏱ ${recipe.cookingTime} min · 👥 ${recipe.servings} servings`,
    '',
    '🧾 Ingredients:',
    ingredients,
    '',
    '👩‍🍳 Instructions:',
    steps,
    '',
    `🌍 Explore more recipes on World Food Journey`,
    APP_LINK,
  ].join('\n');

  await Share.share({
    message,
    title: `${name} from ${countryName}`,
    url: APP_LINK,
  });
}

/**
 * Share a "cooked it" achievement with optional photo URI.
 */
export async function shareCookedIt(
  country: Country,
  recipeName: string,
  photoUri?: string,
  lang = 'en',
): Promise<void> {
  const countryName = translateContent(country.name, lang);
  const flag = country.flag;

  const message = [
    `${flag} I just cooked ${recipeName} from ${countryName}!`,
    '',
    `🍽 Made with World Food Journey — explore cuisines from around the world!`,
    APP_LINK,
  ].join('\n');

  // On iOS/Android we can share the photo URI directly
  if (photoUri && Platform.OS !== 'web') {
    await Share.share({
      message,
      title: `I cooked ${recipeName}!`,
      url: photoUri,
    });
  } else {
    await Share.share({
      message,
      title: `I cooked ${recipeName}!`,
      url: APP_LINK,
    });
  }
}

/**
 * Share cooking progress / stats.
 */
export async function shareProgress(
  stats: {
    visitedCountries: number;
    totalCountries: number;
    dishesCooked: number;
    quizzesDone: number;
    totalPoints: number;
    dayStreak: number;
  },
): Promise<void> {
  const pct = stats.totalCountries > 0
    ? Math.round((stats.visitedCountries / stats.totalCountries) * 100)
    : 0;

  const message = [
    '🌍 My World Food Journey',
    '',
    `🗺 ${stats.visitedCountries}/${stats.totalCountries} countries explored (${pct}%)`,
    `🍳 ${stats.dishesCooked} dishes cooked`,
    `🧠 ${stats.quizzesDone} quizzes completed`,
    `⭐ ${stats.totalPoints} points earned`,
    `🔥 ${stats.dayStreak} day streak`,
    '',
    `Join me on World Food Journey!`,
    APP_LINK,
  ].join('\n');

  await Share.share({
    message,
    title: 'My World Food Journey Stats',
    url: APP_LINK,
  });
}
