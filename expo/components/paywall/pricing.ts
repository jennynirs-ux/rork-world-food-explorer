import type { PurchasesPackage } from 'react-native-purchases';
import { MONETIZATION_PRODUCTS, PRODUCT_IDS } from '@/constants/monetization';
import { getCountriesByContinent, getProductsForCountry, isCountryAccessible } from '@/lib/access-control';
import type { Country } from '@/types';

export type PriceInfo = {
  /** Localised, store-formatted price, e.g. "29,00 kr". */
  priceString: string;
  /** Numeric price in the storefront currency, when known. */
  price: number | null;
};

export const WORLD_PRODUCT_ID: string = PRODUCT_IDS.WORLD_UNLOCK_ALL;

/** The five continent packs, in display order. */
export const PACK_PRODUCT_IDS: string[] = MONETIZATION_PRODUCTS
  .filter((p) => p.id !== WORLD_PRODUCT_ID)
  .map((p) => p.id);

/**
 * Price for a product from the store packages. The hard-coded catalogue price
 * is only used when `devFallback` is set (mock purchases in a dev bundle) —
 * a release build shows store prices or nothing.
 */
export function resolvePrice(
  productId: string,
  packages: PurchasesPackage[],
  devFallback: boolean,
): PriceInfo | null {
  const pkg = packages.find((p) => p.product.identifier === productId);
  if (pkg?.product.priceString) {
    const n = pkg.product.price;
    return {
      priceString: pkg.product.priceString,
      price: typeof n === 'number' && Number.isFinite(n) ? n : null,
    };
  }
  if (!devFallback) return null;
  const fallback = MONETIZATION_PRODUCTS.find((p) => p.id === productId)?.price;
  if (!fallback) return null;
  const n = parseFloat(fallback.replace(',', '.'));
  return { priceString: fallback, price: Number.isFinite(n) ? n : null };
}

/**
 * Whole-percent saving of the world unlock vs buying the given packs
 * separately. Rounded down so we never overstate it; null when any price is
 * unknown or the world unlock isn't actually cheaper.
 */
export function worldSavingsPercent(
  packPrices: (number | null | undefined)[],
  worldPrice: number | null | undefined,
): number | null {
  if (worldPrice == null || packPrices.length === 0) return null;
  let sum = 0;
  for (const p of packPrices) {
    if (p == null) return null;
    sum += p;
  }
  if (!(sum > worldPrice)) return null;
  const pct = Math.floor(((sum - worldPrice) / sum) * 100);
  return pct >= 1 ? pct : null;
}

/** Countries a product unlocks that the user can't open yet. */
export function lockedCountriesForProduct(
  productId: string,
  countries: Country[],
  purchasedProducts: string[],
): Country[] {
  const continent = MONETIZATION_PRODUCTS.find((p) => p.id === productId)?.continent;
  const pool = continent ? getCountriesByContinent(countries, continent) : countries;
  return pool.filter((c) => !isCountryAccessible(c, purchasedProducts));
}

export type CountryUnlockOffer = {
  productId: string;
  /** Other locked countries the same pack opens. */
  moreCount: number;
  price: PriceInfo | null;
};

/**
 * The cheapest pack that unlocks `country` (transcontinental countries have
 * two), with how many other locked countries it opens and its price.
 */
export function cheapestUnlockForCountry(
  country: Country,
  countries: Country[],
  purchasedProducts: string[],
  priceOf: (productId: string) => PriceInfo | null,
): CountryUnlockOffer | null {
  const options = getProductsForCountry(country).map((id) => ({ id, price: priceOf(id) }));
  if (options.length === 0) return null;
  let best = options[0];
  for (const option of options) {
    const a = option.price?.price;
    const b = best.price?.price;
    if (a != null && (b == null || a < b)) best = option;
  }
  const moreCount = lockedCountriesForProduct(best.id, countries, purchasedProducts)
    .filter((c) => c.id !== country.id).length;
  return { productId: best.id, moreCount, price: best.price };
}
