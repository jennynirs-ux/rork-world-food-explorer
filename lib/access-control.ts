import { Country } from '@/types';
import { PRODUCT_IDS, CONTINENT_TO_PRODUCT_MAP } from '@/constants/monetization';
import { translateContent } from '@/lib/translate-content';

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

  const continent = translateContent(country.continent, 'en');
  const continentProduct = CONTINENT_TO_PRODUCT_MAP[continent];
  if (continentProduct && purchasedProducts.includes(continentProduct)) {
    return true;
  }

  return false;
}

export function getRequiredProductForCountry(country: Country): string | null {
  if (country.isUnlockedByDefault) {
    return null;
  }

  const continent = translateContent(country.continent, 'en');
  const continentProduct = CONTINENT_TO_PRODUCT_MAP[continent];
  return continentProduct || null;
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

export function getCountriesByContinent(
  countries: Country[],
  continent: string
): Country[] {
  if (continent === 'Americas') {
    return countries.filter(
      c => translateContent(c.continent, 'en') === 'North America' || translateContent(c.continent, 'en') === 'South America'
    );
  }
  return countries.filter(c => translateContent(c.continent, 'en') === continent);
}
