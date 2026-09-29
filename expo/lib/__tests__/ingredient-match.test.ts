import { countries } from '@/data/countries';
import { Country, Recipe, RecipeIngredient } from '@/types';
import {
  findMatchingRecipes,
  getIngredientSuggestions,
  splitIngredientInput,
} from '../ingredient-match';

const ing = (en: string, sv: string): RecipeIngredient => ({ name: { en, sv }, amount: 1, unit: 'pcs' });

const recipe = (id: string, ingredients: RecipeIngredient[]): Recipe => ({
  id,
  name: { en: id, sv: id },
  description: '',
  cookingTime: 30,
  servings: 4,
  dietType: 'meat',
  ingredients,
  steps: [],
});

const country = (id: string, mainDish: Recipe, dessert?: Recipe): Country => ({
  id,
  name: { en: `${id}-en`, sv: `${id}-sv` },
  code: id.slice(0, 2).toUpperCase(),
  continent: 'Europe',
  flag: '🏳️',
  description: '',
  facts: [],
  foodCulture: '',
  mainDish,
  dessert,
  drinks: { alcoholic: '', nonAlcoholic: '' },
  music: [],
  decorationIdeas: [],
  conversationStarters: [],
  quiz: [],
});

const fixtures: Country[] = [
  country('alpha', recipe('alpha-main', [
    ing('Chicken thighs', 'Kycklinglår'),
    ing('Basmati rice', 'Basmatiris'),
    ing('Onions, finely chopped', 'Lök, finhackad'),
    ing('Garlic cloves', 'Vitlöksklyftor'),
    ing('Salt', 'Salt'),
    ing('Water', 'Vatten'),
    ing('Vegetable oil', 'Vegetabilisk olja'),
    ing('Black pepper', 'Svartpeppar'),
  ]), recipe('alpha-klepon', [
    ing('Glutinous rice flour', 'Glutinöst rismjöl'),
    ing('Palm sugar', 'Palmsocker'),
    ing('Sugar', 'Socker'),
  ])),
  country('beta', recipe('beta-main', [
    ing('Chicken stock', 'Kycklingfond'),
    ing('Eggplant', 'Aubergine'),
    ing('Rice vinegar', 'Risvinäger'),
    ing('Onion powder', 'Lökpulver'),
  ])),
];

describe('findMatchingRecipes', () => {
  it('matches Swedish ingredient names (kyckling, ris, lök) on real data', () => {
    const matches = findMatchingRecipes(['kyckling', 'ris', 'lök'], countries, 25, 'sv');
    expect(matches.length).toBeGreaterThan(10);
    const best = matches[0];
    expect(best.matchedIngredients.length).toBeGreaterThanOrEqual(3);
    // Names come back in Swedish
    expect(matches.some(m => m.countryName === 'Dominikanska republiken')).toBe(true);
    expect(best.matchedIngredients.join(' ')).toMatch(/[Kk]yckling/);
  });

  it('matches English ingredient names on real data', () => {
    const matches = findMatchingRecipes(['chicken', 'rice', 'onion'], countries, 25, 'en');
    expect(matches.length).toBeGreaterThan(10);
    expect(matches[0].matchedIngredients.join(' ')).toMatch(/[Cc]hicken/);
    // Same query in either language finds the same recipes.
    const sv = findMatchingRecipes(['kyckling', 'ris', 'lök'], countries, 25, 'sv');
    expect(sv.map(m => `${m.countryId}:${m.isDessert}`).sort())
      .toEqual(matches.map(m => `${m.countryId}:${m.isDessert}`).sort());
  });

  it('accepts a comma separated list and ignores case and diacritics', () => {
    const ids = (ms: { countryId: string; isDessert: boolean; matchPercent: number }[]) =>
      ms.map(m => `${m.countryId}:${m.isDessert}:${m.matchPercent}`);
    expect(ids(findMatchingRecipes(['Kyckling, RIS, lok'], countries, 25, 'sv')))
      .toEqual(ids(findMatchingRecipes(['kyckling', 'ris', 'lök'], countries, 25, 'sv')));
    expect(splitIngredientInput('kyckling, ris;lök')).toEqual(['kyckling', 'ris', 'lök']);
  });

  it('matches Swedish compound words, but not compounds naming another product', () => {
    const matches = findMatchingRecipes(['kyckling'], fixtures, 0, 'sv');
    // "Kycklinglår" (chicken thighs) counts, "Kycklingfond" (chicken stock) does not.
    expect(matches.map(m => m.recipe.id)).toEqual(['alpha-main']);
    expect(matches[0].matchedIngredients).toEqual(['Kycklinglår']);
  });

  it('does not count pantry staples (salt, water, oil, pepper, sugar)', () => {
    const [match] = findMatchingRecipes(['chicken', 'rice', 'onions', 'garlic'], fixtures, 0, 'en');
    expect(match.recipe.id).toBe('alpha-main');
    expect(match.totalIngredients).toBe(4);
    expect(match.matchPercent).toBe(100);
  });

  it('understands English words for a Swedish user', () => {
    const matches = findMatchingRecipes(['chicken'], fixtures, 0, 'sv');
    expect(matches.map(m => m.recipe.id)).toEqual(['alpha-main']);
    expect(matches[0].countryName).toBe('alpha-sv');
  });

  it('does not match a different product that contains the word', () => {
    // chicken stock, eggplant, rice vinegar, onion powder
    expect(findMatchingRecipes(['chicken', 'egg', 'rice', 'onion'], fixtures, 0, 'en')
      .map(m => m.recipe.id)).not.toContain('beta-main');
    expect(findMatchingRecipes(['rice'], fixtures, 0, 'en')
      .map(m => m.recipe.id)).not.toContain('alpha-klepon');
  });

  it('flags desserts by the recipe slot, not the id', () => {
    const matches = findMatchingRecipes(['palm sugar'], fixtures, 0, 'en');
    expect(matches).toHaveLength(1);
    expect(matches[0].recipe.id).toBe('alpha-klepon');
    expect(matches[0].isDessert).toBe(true);
  });
});

describe('getIngredientSuggestions', () => {
  it('translates common ingredients from the recipe data', () => {
    const sv = getIngredientSuggestions(countries, 'sv');
    expect(sv).toEqual(expect.arrayContaining(['kyckling', 'ris', 'lök', 'ägg']));
    expect(getIngredientSuggestions(countries, 'en')).toContain('chicken');
  });
});
