import { countries } from '@/data/countries';
import { PRODUCT_IDS, DEFAULT_UNLOCKED_COUNTRIES } from '@/constants/monetization';
import {
  isCountryAccessible,
  getProductsForCountry,
  getCountriesByContinent,
  LEGACY_CODE_UNLOCK,
} from '../access-control';

const byId = (id: string) => {
  const c = countries.find((x) => x.id === id);
  if (!c) throw new Error(`missing country ${id}`);
  return c;
};

describe('access-control', () => {
  it('keeps the free countries open without purchases', () => {
    for (const id of DEFAULT_UNLOCKED_COUNTRIES) {
      expect(isCountryAccessible(byId(id), [])).toBe(true);
    }
  });

  it('locks a paid country without purchases', () => {
    expect(isCountryAccessible(byId('italy'), [])).toBe(false);
  });

  it('unlocks a country with its continent pack or the world unlock', () => {
    expect(isCountryAccessible(byId('italy'), [PRODUCT_IDS.UNLOCK_EUROPE])).toBe(true);
    expect(isCountryAccessible(byId('italy'), [PRODUCT_IDS.UNLOCK_ASIA])).toBe(false);
    expect(isCountryAccessible(byId('italy'), [PRODUCT_IDS.WORLD_UNLOCK_ALL])).toBe(true);
  });

  it('unlocks transcontinental countries with either pack', () => {
    for (const id of ['turkey', 'russia']) {
      expect(getProductsForCountry(byId(id)).sort()).toEqual(
        [PRODUCT_IDS.UNLOCK_ASIA, PRODUCT_IDS.UNLOCK_EUROPE].sort(),
      );
      expect(isCountryAccessible(byId(id), [PRODUCT_IDS.UNLOCK_EUROPE])).toBe(true);
      expect(isCountryAccessible(byId(id), [PRODUCT_IDS.UNLOCK_ASIA])).toBe(true);
    }
  });

  it('every paid country is covered by at least one continent pack', () => {
    const uncovered = countries.filter((c) => !c.isUnlockedByDefault && getProductsForCountry(c).length === 0);
    expect(uncovered.map((c) => c.id)).toEqual([]);
  });

  it('counts both Americas in the Americas pack', () => {
    const americas = getCountriesByContinent(countries, 'Americas');
    expect(americas.some((c) => c.id === 'mexico')).toBe(true);
    expect(americas.some((c) => c.id === 'brazil')).toBe(true);
  });

  it('honours an active legacy code unlock', () => {
    expect(isCountryAccessible(byId('italy'), [LEGACY_CODE_UNLOCK])).toBe(true);
  });
});
