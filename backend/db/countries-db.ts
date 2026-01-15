import { Country } from '@/types';

let countriesStore: Country[] = [];

export const countriesDB = {
  getAll: async (): Promise<Country[]> => {
    return countriesStore;
  },

  getById: async (id: string): Promise<Country | undefined> => {
    return countriesStore.find(c => c.id === id);
  },

  create: async (country: Country): Promise<Country> => {
    const exists = countriesStore.find(c => c.id === country.id);
    if (exists) {
      throw new Error(`Country with id ${country.id} already exists`);
    }
    countriesStore.push(country);
    return country;
  },

  update: async (id: string, updates: Partial<Country>): Promise<Country> => {
    const index = countriesStore.findIndex(c => c.id === id);
    if (index === -1) {
      throw new Error(`Country with id ${id} not found`);
    }
    
    countriesStore[index] = { ...countriesStore[index], ...updates };
    return countriesStore[index];
  },

  delete: async (id: string): Promise<boolean> => {
    const initialLength = countriesStore.length;
    countriesStore = countriesStore.filter(c => c.id !== id);
    return countriesStore.length < initialLength;
  },

  bulkCreate: async (countries: Country[]): Promise<Country[]> => {
    const newCountries: Country[] = [];
    for (const country of countries) {
      const exists = countriesStore.find(c => c.id === country.id);
      if (!exists) {
        countriesStore.push(country);
        newCountries.push(country);
      }
    }
    return newCountries;
  },

  clear: async (): Promise<void> => {
    countriesStore = [];
  },

  getByContinent: async (continent: string): Promise<Country[]> => {
    return countriesStore.filter(c => c.continent === continent);
  },

  search: async (query: string): Promise<Country[]> => {
    const lowerQuery = query.toLowerCase();
    return countriesStore.filter(c => 
      c.name.toLowerCase().includes(lowerQuery) ||
      c.description.toLowerCase().includes(lowerQuery) ||
      c.continent.toLowerCase().includes(lowerQuery)
    );
  },
};
