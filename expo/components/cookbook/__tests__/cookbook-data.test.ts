import { countries } from '@/data/countries';
import { DEFAULT_UNLOCKED_COUNTRIES, PRODUCT_IDS } from '@/constants/monetization';
import { translateContent } from '@/lib/translate-content';
import { cookbookStrings, shoppingStrings } from '@/lib/strings/cookbook';
import type { CountryProgress, FavoriteRecipe } from '@/types';
import { buildCookedEntries, buildSavedEntries } from '../cookbook-data';

const byId = (id: string) => {
  const c = countries.find(x => x.id === id);
  if (!c) throw new Error(`missing country ${id}`);
  return c;
};

const italy = byId('italy');
const free = byId(DEFAULT_UNLOCKED_COUNTRIES[0]);

const fav = (recipeId: string, countryId: string, savedDate: string, extra: Partial<FavoriteRecipe> = {}): FavoriteRecipe => ({
  recipeId,
  recipeName: 'stored name',
  countryId,
  countryName: 'stored country',
  countryFlag: '🏳️',
  isDessert: false,
  savedDate,
  ...extra,
});

const progress = (p: Partial<CountryProgress>): CountryProgress => ({
  visited: true,
  mainDishCooked: false,
  dessertCooked: false,
  quizCompleted: false,
  fullyCompleted: false,
  ...p,
});

describe('buildSavedEntries', () => {
  it('lists newest first, once per recipe, with names from the data in the current language', () => {
    const entries = buildSavedEntries(
      [
        fav(italy.mainDish.id, 'italy', '2026-01-01T10:00:00Z'),
        fav(free.mainDish.id, free.id, '2026-03-01T10:00:00Z'),
        fav(italy.mainDish.id, 'italy', '2026-02-01T10:00:00Z'),
      ],
      countries,
      'sv',
      [],
    );

    expect(entries.map(e => e.recipeId)).toEqual([free.mainDish.id, italy.mainDish.id]);
    expect(entries[1].dishName).toBe(translateContent(italy.mainDish.name, 'sv'));
    expect(entries[1].countryName).toBe(translateContent(italy.name, 'sv'));
    expect(entries[1].imageUrl).toBe(italy.mainDish.imageUrl);
    expect(entries[1].cookingTime).toBe(italy.mainDish.cookingTime);
  });

  it('marks locked countries and respects purchases', () => {
    const favorites = [fav(italy.mainDish.id, 'italy', '2026-01-01T10:00:00Z')];
    expect(buildSavedEntries(favorites, countries, 'en', [])[0].locked).toBe(true);
    expect(buildSavedEntries(favorites, countries, 'en', [PRODUCT_IDS.UNLOCK_EUROPE])[0].locked).toBe(false);
  });

  it('keeps favorites whose recipe no longer exists so they can be removed', () => {
    const [entry] = buildSavedEntries(
      [fav('gone-main', 'gone', '2026-01-01T10:00:00Z', { recipeName: 'Old dish', countryName: 'Old land' })],
      countries,
      'en',
      [],
    );
    expect(entry).toMatchObject({ recipeId: 'gone-main', dishName: 'Old dish', countryName: 'Old land', available: false });
  });
});

describe('buildCookedEntries', () => {
  it('lists cooked main dishes and desserts, highest rated first, with ratings', () => {
    if (!italy.dessert) throw new Error('italy needs a dessert for this test');
    const entries = buildCookedEntries(
      {
        italy: progress({ mainDishCooked: true, dessertCooked: true, dessertRating: 5 }),
        [free.id]: progress({ mainDishCooked: true, mainDishRating: 3 }),
      },
      countries,
      'en',
      [],
    );

    expect(entries.map(e => [e.recipeId, e.rating])).toEqual([
      [italy.dessert.id, 5],
      [free.mainDish.id, 3],
      [italy.mainDish.id, undefined],
    ]);
    expect(entries[0].isDessert).toBe(true);
  });

  it('ignores uncooked progress and out-of-range ratings', () => {
    const entries = buildCookedEntries(
      { italy: progress({ mainDishCooked: true, mainDishRating: 0 }), [free.id]: progress({}) },
      countries,
      'en',
      [],
    );
    expect(entries).toHaveLength(1);
    expect(entries[0].rating).toBeUndefined();
  });
});

describe('cookbook strings', () => {
  const placeholders = (value: string) => (value.match(/\{\w+\}/g) ?? []).sort();

  it.each([
    ['cookbookStrings', cookbookStrings],
    ['shoppingStrings', shoppingStrings],
  ] as const)('%s has every key in every language with the same placeholders', (_, table) => {
    const en = table.en as Record<string, string>;
    for (const [lang, strings] of Object.entries(table)) {
      const s = strings as Record<string, string>;
      expect(Object.keys(s).sort()).toEqual(Object.keys(en).sort());
      for (const key of Object.keys(en)) {
        expect(`${lang}.${key}: ${s[key].trim().length > 0}`).toBe(`${lang}.${key}: true`);
        expect(placeholders(s[key])).toEqual(placeholders(en[key]));
      }
    }
  });
});
