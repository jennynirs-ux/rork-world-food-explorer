import { MonetizationProduct } from '@/types';

export const PRODUCT_IDS = {
  UNLOCK_EUROPE: 'unlock_europe',
  UNLOCK_ASIA: 'unlock_asia',
  UNLOCK_AFRICA: 'unlock_africa',
  UNLOCK_AMERICAS: 'unlock_americas',
  WORLD_UNLOCK_ALL: 'world_unlock_all',
} as const;

export const MONETIZATION_PRODUCTS: MonetizationProduct[] = [
  {
    id: PRODUCT_IDS.UNLOCK_EUROPE,
    name: 'Europe Pack',
    description: 'Unlock all European countries',
    price: '19 SEK',
    continent: 'Europe',
  },
  {
    id: PRODUCT_IDS.UNLOCK_ASIA,
    name: 'Asia Pack',
    description: 'Unlock all Asian countries',
    price: '29 SEK',
    continent: 'Asia',
  },
  {
    id: PRODUCT_IDS.UNLOCK_AFRICA,
    name: 'Africa Pack',
    description: 'Unlock all African countries',
    price: '29 SEK',
    continent: 'Africa',
  },
  {
    id: PRODUCT_IDS.UNLOCK_AMERICAS,
    name: 'Americas Pack',
    description: 'Unlock all countries in North and South America',
    price: '29 SEK',
    continent: 'Americas',
  },
  {
    id: PRODUCT_IDS.WORLD_UNLOCK_ALL,
    name: 'Unlock the World',
    description: 'Unlock all countries globally',
    price: '99 SEK',
  },
];

export const DEFAULT_UNLOCKED_COUNTRIES = ['sweden', 'japan', 'mexico', 'morocco', 'new-zealand'];

export const CONTINENT_TO_PRODUCT_MAP: Record<string, string> = {
  'Europe': PRODUCT_IDS.UNLOCK_EUROPE,
  'Asia': PRODUCT_IDS.UNLOCK_ASIA,
  'Africa': PRODUCT_IDS.UNLOCK_AFRICA,
  'North America': PRODUCT_IDS.UNLOCK_AMERICAS,
  'South America': PRODUCT_IDS.UNLOCK_AMERICAS,
  'Oceania': PRODUCT_IDS.UNLOCK_ASIA,
};
