import { Country } from '@/types';
import { PRODUCT_IDS, CONTINENT_TO_PRODUCT_MAP } from '@/constants/monetization';

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

  const continentProduct = CONTINENT_TO_PRODUCT_MAP[country.continent];
  if (continentProduct && purchasedProducts.includes(continentProduct)) {
    return true;
  }

  return false;
}

export function getRequiredProductForCountry(country: Country): string | null {
  if (country.isUnlockedByDefault) {
    return null;
  }

  const continentProduct = CONTINENT_TO_PRODUCT_MAP[country.continent];
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
      c => c.continent === 'North America' || c.continent === 'South America'
    );
  }
  return countries.filter(c => c.continent === continent);
}
