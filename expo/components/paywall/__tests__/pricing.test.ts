import type { PurchasesPackage } from 'react-native-purchases';
import { countries } from '@/data/countries';
import { PRODUCT_IDS } from '@/constants/monetization';
import { paywallStrings } from '@/lib/strings/paywall';
import { getCountriesByContinent } from '@/lib/access-control';
import {
  cheapestUnlockForCountry,
  resolvePrice,
  worldSavingsPercent,
  type PriceInfo,
} from '../pricing';

const byId = (id: string) => {
  const c = countries.find((x) => x.id === id);
  if (!c) throw new Error(`missing country ${id}`);
  return c;
};

const pkg = (identifier: string, price: number, priceString: string) =>
  ({ product: { identifier, price, priceString } }) as unknown as PurchasesPackage;

describe('resolvePrice', () => {
  const packages = [pkg(PRODUCT_IDS.UNLOCK_ASIA, 29, '29,00 kr')];

  it('uses the store price when the package is loaded', () => {
    expect(resolvePrice(PRODUCT_IDS.UNLOCK_ASIA, packages, false)).toEqual({ priceString: '29,00 kr', price: 29 });
  });

  it('returns null for an unknown price outside dev mock mode', () => {
    expect(resolvePrice(PRODUCT_IDS.UNLOCK_EUROPE, packages, false)).toBeNull();
  });

  it('falls back to the catalogue price only in dev mock mode', () => {
    expect(resolvePrice(PRODUCT_IDS.UNLOCK_EUROPE, [], true)).toEqual({ priceString: '39 SEK', price: 39 });
  });
});

describe('worldSavingsPercent', () => {
  it('rounds the saving down', () => {
    // 19 + 29 + 29 + 29 + 19 = 125 vs 99 → 20.8 %
    expect(worldSavingsPercent([19, 29, 29, 29, 19], 99)).toBe(20);
  });

  it('is null when any price is unknown', () => {
    expect(worldSavingsPercent([19, null, 29, 29, 19], 99)).toBeNull();
    expect(worldSavingsPercent([19, 29, 29, 29, 19], null)).toBeNull();
  });

  it('is null when the world unlock is not cheaper', () => {
    expect(worldSavingsPercent([19, 29], 99)).toBeNull();
    expect(worldSavingsPercent([50, 49], 99)).toBeNull();
  });
});

describe('cheapestUnlockForCountry', () => {
  const prices: Record<string, PriceInfo> = {
    [PRODUCT_IDS.UNLOCK_EUROPE]: { priceString: '19 kr', price: 19 },
    [PRODUCT_IDS.UNLOCK_ASIA]: { priceString: '29 kr', price: 29 },
  };
  const priceOf = (id: string) => prices[id] ?? null;

  it('counts the other locked countries in the pack', () => {
    const offer = cheapestUnlockForCountry(byId('china'), countries, [], priceOf);
    expect(offer?.productId).toBe(PRODUCT_IDS.UNLOCK_ASIA);
    expect(offer?.price?.priceString).toBe('29 kr');
    // Every country in the Asia pack except the free ones and China itself.
    const asia = getCountriesByContinent(countries, 'Asia');
    expect(offer?.moreCount).toBe(asia.filter((c) => !c.isUnlockedByDefault && c.id !== 'china').length);
    expect(offer?.moreCount).toBeGreaterThan(30);
  });

  it('picks the cheaper pack for transcontinental countries', () => {
    const offer = cheapestUnlockForCountry(byId('turkey'), countries, [], priceOf);
    expect(offer?.productId).toBe(PRODUCT_IDS.UNLOCK_EUROPE);
  });

  it('skips countries that are already open through another pack', () => {
    const withoutAsia = cheapestUnlockForCountry(byId('italy'), countries, [], priceOf)!;
    const withAsia = cheapestUnlockForCountry(byId('italy'), countries, [PRODUCT_IDS.UNLOCK_ASIA], priceOf)!;
    // Turkey and Russia are already open with the Asia pack.
    expect(withoutAsia.moreCount - withAsia.moreCount).toBe(2);
  });

  it('has no price when the store price is unknown', () => {
    expect(cheapestUnlockForCountry(byId('kenya'), countries, [], () => null)?.price).toBeNull();
  });
});

describe('paywall strings', () => {
  it('pluralises Polish counts', () => {
    const pl = paywallStrings.pl;
    expect(pl.moreCountries(1)).toBe('+1 kolejny kraj');
    expect(pl.moreCountries(3)).toBe('+3 kolejne kraje');
    expect(pl.moreCountries(12)).toBe('+12 kolejnych krajów');
    expect(pl.moreCountries(45)).toBe('+45 kolejnych krajów');
  });
});
