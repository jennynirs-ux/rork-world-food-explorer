import { countries } from '@/data/countries';
import { COUNTRY_COORDINATES } from '@/data/country-coordinates';
import { validateCountry } from '../validate-country';
import { translateContent } from '../translate-content';

const LANGS = ['en', 'sv', 'es', 'fr', 'de', 'it', 'pl', 'nl', 'pt'];

describe('country data integrity', () => {
  it('has 195 countries with unique ids', () => {
    const ids = countries.map((c) => c.id);
    expect(ids.length).toBe(195);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every country passes validation', () => {
    const invalid = countries.filter((c) => validateCountry(c).length > 0).map((c) => `${c.id}: ${validateCountry(c).join(", ")}`);
    expect(invalid).toEqual([]);
  });

  it('every quiz answer index points at an existing option', () => {
    const broken: string[] = [];
    for (const c of countries) {
      for (const q of c.quiz) {
        if (q.correctAnswer < 0 || q.correctAnswer >= q.options.length) broken.push(`${c.id}:${q.id}`);
      }
    }
    expect(broken).toEqual([]);
  });

  it('every country has globe coordinates', () => {
    const missing = countries.filter((c) => !COUNTRY_COORDINATES[c.code]).map((c) => c.id);
    expect(missing).toEqual([]);
  });

  it('quiz options stay distinct in every language', () => {
    const duplicates: string[] = [];
    for (const c of countries) {
      for (const q of c.quiz) {
        for (const lang of LANGS) {
          const options = q.options.map((o) => translateContent(o, lang).trim().toLowerCase());
          if (new Set(options).size !== options.length) duplicates.push(`${q.id}:${lang}`);
        }
      }
    }
    expect(duplicates).toEqual([]);
  });

  it('has a name in every supported language', () => {
    const missing: string[] = [];
    for (const c of countries) {
      for (const lang of LANGS) {
        if (!translateContent(c.name, lang).trim()) missing.push(`${c.id}:${lang}`);
      }
    }
    expect(missing).toEqual([]);
  });
});
