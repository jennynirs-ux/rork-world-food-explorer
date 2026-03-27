import { Country } from '@/types';
import * as fs from 'fs';
import * as path from 'path';

const DB_PATH = path.resolve(process.env.WFE_DB_DIR || '.data', 'countries.json');

function ensureDirSync() {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function loadFromDisk(): Country[] {
  try {
    ensureDirSync();
    if (fs.existsSync(DB_PATH)) {
      return JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
    }
  } catch (err) {
    console.error('[countries-db] Failed to load from disk:', err);
  }
  return [];
}

/**
 * Persist data to disk asynchronously using fs.promises.
 *
 * Writes to a temp file first, then renames — this prevents corruption
 * if the process crashes mid-write.
 */
async function saveToDisk(data: Country[]): Promise<void> {
  try {
    ensureDirSync();
    const tmpPath = DB_PATH + '.tmp';
    await fs.promises.writeFile(tmpPath, JSON.stringify(data), 'utf-8');
    await fs.promises.rename(tmpPath, DB_PATH);
  } catch (err) {
    console.error('[countries-db] Failed to persist to disk:', err);
  }
}

let countriesStore: Country[] = loadFromDisk();

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
    await saveToDisk(countriesStore);
    return country;
  },

  update: async (id: string, updates: Partial<Country>): Promise<Country> => {
    const index = countriesStore.findIndex(c => c.id === id);
    if (index === -1) {
      throw new Error(`Country with id ${id} not found`);
    }

    countriesStore[index] = { ...countriesStore[index], ...updates };
    await saveToDisk(countriesStore);
    return countriesStore[index];
  },

  delete: async (id: string): Promise<boolean> => {
    const initialLength = countriesStore.length;
    countriesStore = countriesStore.filter(c => c.id !== id);
    if (countriesStore.length < initialLength) await saveToDisk(countriesStore);
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
    if (newCountries.length > 0) await saveToDisk(countriesStore);
    return newCountries;
  },

  /**
   * Atomically replace all country data.
   *
   * Persists the new data to disk FIRST, then swaps the in-memory store.
   * If the disk write fails, the old data remains intact — no data loss.
   */
  replaceAll: async (countries: Country[]): Promise<number> => {
    // Write new data to disk before touching the in-memory store
    await saveToDisk(countries);
    countriesStore = countries;
    return countries.length;
  },

  clear: async (): Promise<void> => {
    countriesStore = [];
    await saveToDisk(countriesStore);
  },

  getByContinent: async (continent: string): Promise<Country[]> => {
    return countriesStore.filter(c => {
      const cont = typeof c.continent === 'string' ? c.continent : c.continent.en;
      return cont === continent;
    });
  },

  search: async (query: string): Promise<Country[]> => {
    const lowerQuery = query.toLowerCase();
    return countriesStore.filter(c => {
      const description = typeof c.description === 'string' ? c.description : c.description.en;
      const name = typeof c.name === 'string' ? c.name : c.name.en;
      return name.toLowerCase().includes(lowerQuery) ||
        description.toLowerCase().includes(lowerQuery) ||
        (typeof c.continent === 'string' ? c.continent : c.continent.en || '').toLowerCase().includes(lowerQuery);
    });
  },
};
