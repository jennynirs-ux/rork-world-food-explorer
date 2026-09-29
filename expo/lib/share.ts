import { Share, Platform } from 'react-native';
import type { Country, CountryProgress, Recipe } from '@/types';
import { translateContent } from '@/lib/translate-content';
import { fill, pickStrings } from '@/lib/strings';
import { selectPlural, shareStrings } from '@/lib/strings/share';

export const APP_NAME = 'World Food Journey';

export const APP_STORE_URL = 'https://apps.apple.com/app/id6762470683';
export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=app.rork.world_food_explorer';

/** Store listing for the sharer's platform — the friend most likely has the same kind of phone. */
export const APP_LINK = Platform.OS === 'android' ? PLAY_STORE_URL : APP_STORE_URL;

/** APP_LINK without the protocol, for printing on image cards. */
export const APP_LINK_LABEL = APP_LINK.replace(/^https?:\/\//, '');

/** "Download on the App Store" / "Get it on Google Play" in the given language. */
export function storeLine(lang = 'en'): string {
  const s = pickStrings(shareStrings, lang);
  return Platform.OS === 'android' ? s.storeAndroid : s.storeIos;
}

// ---------------------------------------------------------------------------
// Message builders (pure — covered by lib/__tests__/share.test.ts)
// ---------------------------------------------------------------------------

export type ProgressShareStats = {
  visitedCountries: number;
  totalCountries: number;
  dishesCooked: number;
  quizzesDone: number;
  totalPoints: number;
  dayStreak: number;
};

export function buildAppInviteMessage(lang = 'en'): string {
  const s = pickStrings(shareStrings, lang);
  return `${s.appInvite}\n\n${APP_LINK}`;
}

export function buildRecipeMessage(
  country: Country,
  recipe: Recipe,
  isDessert: boolean,
  lang = 'en',
): string {
  const s = pickStrings(shareStrings, lang);
  const name = translateContent(recipe.name, lang);
  const countryName = translateContent(country.name, lang);

  const ingredients = recipe.ingredients
    .map(ing => `  • ${ing.amount} ${translateContent(ing.unit, lang)} ${translateContent(ing.name, lang)}`)
    .join('\n');

  const steps = recipe.steps
    .map((step, i) => `  ${i + 1}. ${translateContent(step, lang)}`)
    .join('\n');

  const header = fill(s.recipeHeader, {
    flag: country.flag,
    name,
    type: isDessert ? s.recipeDessert : s.recipeMain,
    country: countryName,
  });
  const time = fill(s.recipeTime, { minutes: recipe.cookingTime });
  const servings = fill(selectPlural(s.recipeServings, recipe.servings, lang), { n: recipe.servings });

  return [
    header,
    '',
    `${time} · ${servings}`,
    '',
    s.ingredients,
    ingredients,
    '',
    s.instructions,
    steps,
    '',
    s.exploreMore,
    APP_LINK,
  ].join('\n');
}

export function buildCookedMessage(
  dish: { flag: string; dishName: string; countryName: string },
  lang = 'en',
): string {
  const s = pickStrings(shareStrings, lang);
  return [
    fill(s.cookedMessage, { flag: dish.flag, dish: dish.dishName, country: dish.countryName }),
    '',
    s.cookedTagline,
    APP_LINK,
  ].join('\n');
}

export function buildProgressMessage(stats: ProgressShareStats, lang = 'en'): string {
  const s = pickStrings(shareStrings, lang);
  const pct = stats.totalCountries > 0
    ? Math.round((stats.visitedCountries / stats.totalCountries) * 100)
    : 0;

  return [
    s.progressTitle,
    '',
    fill(s.progressExplored, { visited: stats.visitedCountries, total: stats.totalCountries, pct }),
    fill(s.progressDishes, { n: stats.dishesCooked }),
    fill(s.progressQuizzes, { n: stats.quizzesDone }),
    fill(s.progressPoints, { n: stats.totalPoints }),
    fill(s.progressStreak, { n: stats.dayStreak }),
    '',
    s.progressJoin,
    APP_LINK,
  ].join('\n');
}

export function buildBadgeMessage(
  badge: { name: string; description?: string },
  lang = 'en',
): string {
  const s = pickStrings(shareStrings, lang);
  const line = fill(s.badgeMessage, { badge: badge.name, description: badge.description ?? '' }).trim();
  return [line, '', APP_LINK].join('\n');
}

// ---------------------------------------------------------------------------
// Card data helpers (pure)
// ---------------------------------------------------------------------------

/** Badge ids are kebab-case; their i18n keys (t.badges.*) are camelCase. */
export function badgeTranslationKey(id: string): string {
  return id.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
}

/**
 * Localized badge name/description: `localizeBadge(t.badges, badge)`.
 * Falls back to the English text stored on the badge.
 */
export function localizeBadge(
  badgeTexts: object,
  badge: { id: string; name: string; description: string },
): { name: string; description: string } {
  const entry = (badgeTexts as Record<string, { name?: string; description?: string } | undefined>)[
    badgeTranslationKey(badge.id)
  ];
  return {
    name: entry?.name || badge.name,
    description: entry?.description || badge.description,
  };
}

type ProgressMap = Record<string, CountryProgress | undefined>;

/** Countries where at least one dish has been cooked — the "cooked my way through N countries" number. */
export function countCookedCountries(countryProgress: ProgressMap): number {
  return Object.values(countryProgress).filter(p => p && (p.mainDishCooked || p.dessertCooked)).length;
}

function dateValue(date?: string): number {
  const time = date ? new Date(date).getTime() : NaN;
  return Number.isNaN(time) ? Number.MAX_SAFE_INTEGER : time;
}

/**
 * Flags for the "passport stamps" row: completed countries first, then
 * visited ones, each in the order they happened. At most `max` flags are
 * returned; `more` is how many were left out (shown as "+N").
 */
export function selectPassportFlags(
  countries: Pick<Country, 'id' | 'flag'>[],
  countryProgress: ProgressMap,
  max = 24,
): { flags: string[]; more: number } {
  const completed: { flag: string; at: number }[] = [];
  const visited: { flag: string; at: number }[] = [];
  for (const country of countries) {
    const progress = countryProgress[country.id];
    if (!progress) continue;
    if (progress.fullyCompleted) {
      completed.push({ flag: country.flag, at: dateValue(progress.completedDate) });
    } else if (progress.visited) {
      visited.push({ flag: country.flag, at: dateValue(progress.visitedDate) });
    }
  }
  const byDate = (a: { at: number }, b: { at: number }) => a.at - b.at;
  const all = [...completed.sort(byDate), ...visited.sort(byDate)].map(c => c.flag);
  const shown = all.slice(0, Math.max(0, max));
  return { flags: shown, more: all.length - shown.length };
}

// ---------------------------------------------------------------------------
// Plain-text sharing (also the fallback for image cards on web / on failure)
// ---------------------------------------------------------------------------

/**
 * Invite a friend to the app.
 */
export async function shareApp(lang = 'en'): Promise<boolean> {
  const result = await Share.share({
    message: buildAppInviteMessage(lang),
    title: APP_NAME,
    url: APP_LINK,
  });
  return result.action === Share.sharedAction;
}

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
  await Share.share({
    message: buildRecipeMessage(country, recipe, isDessert, lang),
    title: `${name} — ${countryName}`,
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
  const s = pickStrings(shareStrings, lang);
  const message = buildCookedMessage(
    { flag: country.flag, dishName: recipeName, countryName: translateContent(country.name, lang) },
    lang,
  );
  const title = fill(s.cookedTitle, { dish: recipeName });

  // On iOS/Android we can share the photo URI directly
  await Share.share({
    message,
    title,
    url: photoUri && Platform.OS !== 'web' ? photoUri : APP_LINK,
  });
}

/**
 * Share cooking progress / stats.
 */
export async function shareProgress(stats: ProgressShareStats, lang = 'en'): Promise<void> {
  const s = pickStrings(shareStrings, lang);
  await Share.share({
    message: buildProgressMessage(stats, lang),
    title: s.progressShareTitle,
    url: APP_LINK,
  });
}

/**
 * Share an unlocked badge. Pass the already-localized badge name/description.
 */
export async function shareBadge(
  badge: { name: string; description?: string },
  lang = 'en',
): Promise<void> {
  const s = pickStrings(shareStrings, lang);
  await Share.share({
    message: buildBadgeMessage(badge, lang),
    title: fill(s.badgeShareTitle, { badge: badge.name }),
    url: APP_LINK,
  });
}
