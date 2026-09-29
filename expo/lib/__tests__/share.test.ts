import { fill, pickStrings } from '@/lib/strings';
import { pluralCategory, selectPlural, shareStrings, type PluralForms } from '@/lib/strings/share';
import {
  APP_LINK,
  badgeTranslationKey,
  buildAppInviteMessage,
  buildBadgeMessage,
  buildCookedMessage,
  buildProgressMessage,
  buildRecipeMessage,
  countCookedCountries,
  localizeBadge,
  selectPassportFlags,
} from '@/lib/share';
import type { Country, CountryProgress, Recipe } from '@/types';

// lib/strings pulls in useTranslation -> AppContext; the pure helpers under test don't need it.
// (babel-jest hoists this above the imports.)
jest.mock('@/lib/i18n', () => ({ useTranslation: () => ({ t: {}, language: 'en' }) }));

const LANGS = ['en', 'sv', 'de', 'fr', 'es', 'it', 'pl', 'nl', 'pt'] as const;

const placeholders = (value: string | PluralForms): string[] => {
  const text = typeof value === 'string' ? value : Object.values(value).join(' ');
  return [...new Set(text.match(/\{\w+\}/g) ?? [])].sort();
};

describe('shareStrings', () => {
  const en = shareStrings.en;

  it.each(LANGS)('%s has every key, non-empty, with the same placeholders as English', lang => {
    const table = shareStrings[lang];
    expect(Object.keys(table).sort()).toEqual(Object.keys(en).sort());
    for (const key of Object.keys(en) as (keyof typeof en)[]) {
      const value = table[key];
      const forms = typeof value === 'string' ? [value] : Object.values(value);
      forms.forEach(form => expect(form.trim()).not.toBe(''));
      expect({ key, placeholders: placeholders(value) }).toEqual({ key, placeholders: placeholders(en[key]) });
    }
  });

  it('gives Polish plural tables all four forms', () => {
    const pl = shareStrings.pl;
    for (const forms of [pl.progressHeadline, pl.recipeServings, pl.pointsEarned]) {
      expect(forms.few).toBeDefined();
      expect(forms.many).toBeDefined();
    }
  });

  it('falls back to English for unknown languages', () => {
    expect(pickStrings(shareStrings, 'xx')).toBe(shareStrings.en);
  });
});

describe('pluralCategory / selectPlural', () => {
  it.each([
    ['pl', 1, 'one'],
    ['pl', 2, 'few'],
    ['pl', 4, 'few'],
    ['pl', 5, 'many'],
    ['pl', 12, 'many'],
    ['pl', 14, 'many'],
    ['pl', 22, 'few'],
    ['pl', 25, 'many'],
    ['pl', 112, 'many'],
    ['fr', 0, 'one'],
    ['fr', 1, 'one'],
    ['fr', 2, 'other'],
    ['en', 0, 'other'],
    ['en', 1, 'one'],
    ['sv', 3, 'other'],
  ] as const)('%s %p → %s', (lang, n, expected) => {
    expect(pluralCategory(n, lang)).toBe(expected);
  });

  it('uses "other" when a language has no few/many form', () => {
    expect(selectPlural({ one: 'a', other: 'b' }, 3, 'pl')).toBe('b');
  });

  it('fills Polish points correctly', () => {
    const forms = shareStrings.pl.pointsEarned;
    expect(fill(selectPlural(forms, 1, 'pl'), { n: 1 })).toBe('+1 punkt');
    expect(fill(selectPlural(forms, 3, 'pl'), { n: 3 })).toBe('+3 punkty');
    expect(fill(selectPlural(forms, 50, 'pl'), { n: 50 })).toBe('+50 punktów');
  });
});

describe('message builders', () => {
  const stats = {
    visitedCountries: 12,
    totalCountries: 195,
    dishesCooked: 9,
    quizzesDone: 4,
    totalPoints: 820,
    dayStreak: 6,
  };

  it('builds the English progress message', () => {
    const message = buildProgressMessage(stats, 'en');
    expect(message).toContain('🗺 Countries explored: 12/195 (6%)');
    expect(message).toContain('🍳 Dishes cooked: 9');
    expect(message).toContain('🔥 Day streak: 6');
    expect(message.endsWith(APP_LINK)).toBe(true);
  });

  it('localizes the progress message and handles zero totals', () => {
    const message = buildProgressMessage({ ...stats, totalCountries: 0 }, 'sv');
    expect(message).toContain('Utforskade länder: 12/0 (0 %)');
    expect(message).toContain('Häng med på World Food Journey!');
  });

  it('builds the cooked message without declining the country name', () => {
    expect(buildCookedMessage({ flag: '🇯🇵', dishName: 'Ramen', countryName: 'Japan' }, 'de')).toMatch(
      /^🇯🇵 Gerade selbst gekocht: Ramen \(Japan\)!/,
    );
    expect(buildCookedMessage({ flag: '🇯🇵', dishName: 'Ramen', countryName: 'Japan' }, 'en')).toMatch(
      /^🇯🇵 I just cooked Ramen from Japan!/,
    );
  });

  it('uses language-specific quotes in the badge message', () => {
    const fr = buildBadgeMessage({ name: 'Explorateur', description: 'Terminez 5 pays' }, 'fr');
    expect(fr).toContain('« Explorateur »');
    expect(fr).toContain('Terminez 5 pays');
    const de = buildBadgeMessage({ name: 'Entdecker' }, 'de');
    expect(de.split('\n')[0]).toBe('🏅 Ich habe in World Food Journey das Abzeichen „Entdecker“ freigeschaltet!');
  });

  it('ends the app invite with the store link', () => {
    expect(buildAppInviteMessage('it').endsWith(`\n\n${APP_LINK}`)).toBe(true);
  });

  it('builds a localized recipe message with plural servings', () => {
    const recipe = {
      id: 'r1',
      name: { en: 'Pierogi', pl: 'Pierogi ruskie' },
      description: 'Dumplings',
      cookingTime: 45,
      servings: 4,
      dietType: 'vegetarian',
      ingredients: [{ name: { en: 'Flour', pl: 'Mąka' }, amount: 500, unit: 'g' }],
      steps: [{ en: 'Make the dough', pl: 'Zagnieć ciasto' }],
    } as unknown as Recipe;
    const country = { id: 'poland', name: { en: 'Poland', pl: 'Polska' }, flag: '🇵🇱' } as unknown as Country;

    const pl = buildRecipeMessage(country, recipe, false, 'pl');
    expect(pl.split('\n')[0]).toBe('🇵🇱 Pierogi ruskie — Danie główne (Polska)');
    expect(pl).toContain('⏱ 45 min · 👥 4 porcje');
    expect(pl).toContain('  • 500 g Mąka');
    expect(pl).toContain('  1. Zagnieć ciasto');

    const en = buildRecipeMessage(country, { ...recipe, servings: 1 }, true, 'en');
    expect(en.split('\n')[0]).toBe('🇵🇱 Pierogi — Dessert from Poland');
    expect(en).toContain('👥 1 serving');
  });
});

describe('card data helpers', () => {
  const countries = [
    { id: 'a', flag: '🇦🇷' },
    { id: 'b', flag: '🇧🇷' },
    { id: 'c', flag: '🇨🇦' },
    { id: 'd', flag: '🇩🇪' },
    { id: 'e', flag: '🇪🇸' },
  ];
  const progress = (p: Partial<CountryProgress>): CountryProgress => ({
    visited: true,
    mainDishCooked: false,
    dessertCooked: false,
    quizCompleted: false,
    fullyCompleted: false,
    ...p,
  });
  const countryProgress: Record<string, CountryProgress> = {
    a: progress({ visitedDate: '2026-03-01' }),
    b: progress({ fullyCompleted: true, mainDishCooked: true, completedDate: '2026-02-01' }),
    c: progress({ dessertCooked: true, visitedDate: '2026-01-01' }),
    d: progress({ fullyCompleted: true, mainDishCooked: true, completedDate: '2026-01-15' }),
    e: progress({ visited: false }),
  };

  it('lists completed countries first, each group by date', () => {
    expect(selectPassportFlags(countries, countryProgress)).toEqual({
      flags: ['🇩🇪', '🇧🇷', '🇨🇦', '🇦🇷'],
      more: 0,
    });
  });

  it('caps the flags and reports how many were left out', () => {
    expect(selectPassportFlags(countries, countryProgress, 3)).toEqual({ flags: ['🇩🇪', '🇧🇷', '🇨🇦'], more: 1 });
    expect(selectPassportFlags(countries, countryProgress, 0)).toEqual({ flags: [], more: 4 });
  });

  it('counts countries with at least one cooked dish', () => {
    expect(countCookedCountries(countryProgress)).toBe(3);
    expect(countCookedCountries({})).toBe(0);
  });

  it('localizes badges by camel-cased id with English fallback', () => {
    expect(badgeTranslationKey('first-country')).toBe('firstCountry');
    const texts = { firstCountry: { name: 'Första stegen', description: 'Klara ditt första land' } };
    expect(localizeBadge(texts, { id: 'first-country', name: 'First Steps', description: 'Complete your first country' }))
      .toEqual({ name: 'Första stegen', description: 'Klara ditt första land' });
    expect(localizeBadge(texts, { id: 'ambassador', name: 'Ambassador', description: 'Invite a friend' }))
      .toEqual({ name: 'Ambassador', description: 'Invite a friend' });
  });
});
