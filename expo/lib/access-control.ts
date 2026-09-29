import { Country } from '@/types';
import { PRODUCT_IDS, CONTINENT_TO_PRODUCT_MAP } from '@/constants/monetization';
import { translateContent } from '@/lib/translate-content';

/**
 * Legacy 30-day unlock from the old share-code system. New codes can no
 * longer be redeemed; this only honours unlocks that haven't expired yet.
 */
export const LEGACY_CODE_UNLOCK = 'code_unlock_all';

/**
 * Continent packs that unlock a country. Transcontinental countries
 * ("Europe/Asia") are unlocked by either pack.
 */
export function getProductsForCountry(country: Country): string[] {
  const continents = translateContent(country.continent, 'en').split('/').map(c => c.trim());
  const products = continents
    .map(c => CONTINENT_TO_PRODUCT_MAP[c])
    .filter((p): p is string => !!p);
  return [...new Set(products)];
}

export function isCountryAccessible(
  country: Country,
  purchasedProducts: string[]
): boolean {
  if (country.isUnlockedByDefault) {
    return true;
  }

  if (purchasedProducts.includes(PRODUCT_IDS.WORLD_UNLOCK_ALL)) {
    return true;
  }

  if (purchasedProducts.includes(LEGACY_CODE_UNLOCK)) {
    return true;
  }

  return getProductsForCountry(country).some(p => purchasedProducts.includes(p));
}

export function getRequiredProductForCountry(country: Country): string | null {
  if (country.isUnlockedByDefault) {
    return null;
  }
  return getProductsForCountry(country)[0] ?? null;
}

export function getLockedCountriesCount(
  countries: Country[],
  purchasedProducts: string[]
): number {
  return countries.filter(country => !isCountryAccessible(country, purchasedProducts)).length;
}

export function getAccessibleCountriesCount(
  countries: Country[],
  purchasedProducts: string[]
): number {
  return countries.filter(country => isCountryAccessible(country, purchasedProducts)).length;
}

/**
 * Countries a continent pack unlocks, including transcontinental ones.
 */
export function getCountriesByContinent(
  countries: Country[],
  continent: string
): Country[] {
  const product = continent === 'Americas'
    ? PRODUCT_IDS.UNLOCK_AMERICAS
    : CONTINENT_TO_PRODUCT_MAP[continent];
  if (!product) return [];
  return countries.filter(c => getProductsForCountry(c).includes(product));
}
