/**
 * Server-side access control for country content.
 *
 * Mirrors the client-side logic in `lib/access-control.ts` and
 * `constants/monetization.ts`, but runs on the backend to strip
 * paid content from API responses so that direct API access cannot
 * bypass the paywall.
 */

import { Country } from '@/types';

// ── Product IDs (keep in sync with constants/monetization.ts) ──
export const PRODUCT_IDS = {
  UNLOCK_EUROPE: 'unlock_europe',
  UNLOCK_ASIA: 'unlock_asia',
  UNLOCK_AFRICA: 'unlock_africa',
  UNLOCK_AMERICAS: 'unlock_americas',
  UNLOCK_OCEANIA: 'unlock_oceania',
  WORLD_UNLOCK_ALL: 'world_unlock_all',
} as const;

export const CONTINENT_TO_PRODUCT: Record<string, string> = {
  Europe: PRODUCT_IDS.UNLOCK_EUROPE,
  Asia: PRODUCT_IDS.UNLOCK_ASIA,
  Africa: PRODUCT_IDS.UNLOCK_AFRICA,
  'North America': PRODUCT_IDS.UNLOCK_AMERICAS,
  'South America': PRODUCT_IDS.UNLOCK_AMERICAS,
  Oceania: PRODUCT_IDS.UNLOCK_OCEANIA,
};

// ── Helpers ────────────────────────────────────────────────────

function resolveString(value: string | { en: string }): string {
  return typeof value === 'string' ? value : value.en;
}

/**
 * Check whether a country is accessible given the user's active products.
 */
export function isCountryAccessible(
  country: Country,
  activeProducts: string[]
): boolean {
  if (country.isUnlockedByDefault) return true;
  if (activeProducts.includes(PRODUCT_IDS.WORLD_UNLOCK_ALL)) return true;

  const continent = resolveString(country.continent);
  const required = CONTINENT_TO_PRODUCT[continent];
  return !!required && activeProducts.includes(required);
}

/**
 * Strip paid / premium content from a locked country.
 *
 * Returns a "preview" version that keeps metadata (name, flag, continent,
 * description, landscape image, coordinates) but removes the actual valuable
 * content: full recipes (ingredients + steps), quiz answers, and deep cultural
 * details.
 *
 * The client can still show the country card and a "locked" overlay, but
 * cannot render the full recipe or cheat the quiz.
 */
export function stripLockedContent(country: Country): Country {
  return {
    ...country,
    // Remove recipe details — keep just name + description as a teaser
    mainDish: {
      ...country.mainDish,
      ingredients: [],
      steps: [],
      richSteps: undefined,
    },
    dessert: country.dessert
      ? {
          ...country.dessert,
          ingredients: [],
          steps: [],
          richSteps: undefined,
        }
      : undefined,
    // Remove quiz correct answers so users can't cheat
    quiz: country.quiz.map((q) => ({
      ...q,
      correctAnswer: -1, // hidden
    })),
    // Remove detailed cultural content
    decorationIdeas: [],
    conversationStarters: [],
    music: [],
  };
}

/**
 * Process an array of countries, stripping content from locked ones.
 *
 * @param gateContent  When false, all content is returned unmodified.
 *                     Set to false in dev mode or when verification failed
 *                     and you want a graceful degradation.
 */
export function gateCountries(
  countries: Country[],
  activeProducts: string[],
  gateContent: boolean
): Country[] {
  if (!gateContent) return countries;

  return countries.map((country) =>
    isCountryAccessible(country, activeProducts)
      ? country
      : stripLockedContent(country)
  );
}
