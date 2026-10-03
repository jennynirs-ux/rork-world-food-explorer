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

  it('recipe text and quiz questions are translated in every language', () => {
    // A sentence left identical to English means the translation was skipped.
    const untranslated: string[] = [];
    const check = (where: string, text: Parameters<typeof translateContent>[0]) => {
      const en = translateContent(text, 'en');
      if (en.split(/\s+/).length < 4) return;
      for (const lang of LANGS.slice(1)) {
        if (translateContent(text, lang) === en) untranslated.push(`${where}:${lang}`);
      }
    };
    for (const c of countries) {
      for (const [kind, recipe] of [['main', c.mainDish], ['dessert', c.dessert]] as const) {
        if (!recipe) continue;
        check(`${c.id}:${kind}:description`, recipe.description);
        recipe.steps.forEach((step, i) => check(`${c.id}:${kind}:step${i + 1}`, step));
      }
      for (const q of c.quiz) check(`${c.id}:${q.id}`, q.question);
    }
    expect(untranslated).toEqual([]);
  });

  it('units and drinks carry translations instead of plain English', () => {
    // Plain strings render identically in every language, so only metric symbols may stay strings.
    const plain: string[] = [];
    for (const c of countries) {
      for (const recipe of [c.mainDish, c.dessert]) {
        for (const ing of recipe?.ingredients ?? []) {
          if (typeof ing.unit === 'string' && !['g', 'kg', 'ml', 'l'].includes(ing.unit)) {
            plain.push(`${c.id}:unit:${ing.unit}`);
          }
        }
      }
      if (typeof c.drinks.alcoholic === 'string') plain.push(`${c.id}:drinks.alcoholic`);
      if (typeof c.drinks.nonAlcoholic === 'string') plain.push(`${c.id}:drinks.nonAlcoholic`);
    }
    expect(plain).toEqual([]);
  });

  it('garlic clove units are never translated as the spice', () => {
    const spice = /kryddnejlik|nelke|girofle|clavo|garofano|goździk|kruidnagel|cravo/i;
    const wrong: string[] = [];
    for (const c of countries) {
      for (const recipe of [c.mainDish, c.dessert]) {
        for (const ing of recipe?.ingredients ?? []) {
          if (!/^cloves?$/.test(translateContent(ing.unit, 'en'))) continue;
          for (const lang of LANGS.slice(1)) {
            if (spice.test(translateContent(ing.unit, lang))) wrong.push(`${c.id}:${lang}`);
          }
        }
      }
    }
    expect(wrong).toEqual([]);
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
