import { validateCountry, filterValidCountries } from '../validate-country';

const validCountry = {
  id: 'sweden',
  name: { en: 'Sweden', sv: 'Sverige' },
  code: 'SE',
  continent: { en: 'Europe' },
  flag: '🇸🇪',
  description: { en: 'A Nordic country.' },
  foodCulture: { en: 'Swedish food culture.' },
  facts: [{ en: 'Fact one' }],
  quiz: [{ question: 'Q?', options: ['A', 'B'], correctAnswer: 0 }],
  mainDish: {
    id: 'meatballs',
    name: { en: 'Swedish Meatballs' },
    ingredients: [{ name: 'Meat', amount: 500, unit: 'g' }],
    servings: 4,
  },
  drinks: { name: 'Glögg' },
  music: [],
  decorationIdeas: [],
  conversationStarters: [],
};

describe('validateCountry', () => {
  it('returns no errors for a valid country', () => {
    expect(validateCountry(validCountry)).toEqual([]);
  });

  it('rejects null/undefined', () => {
    expect(validateCountry(null)).toContain('Country data is not an object');
    expect(validateCountry(undefined)).toContain('Country data is not an object');
  });

  it('detects missing id', () => {
    const bad = { ...validCountry, id: '' };
    expect(validateCountry(bad)).toContain('Missing or invalid id');
  });

  it('detects missing name', () => {
    const bad = { ...validCountry, name: '' };
    expect(validateCountry(bad)).toContain('Missing or invalid name');
  });

  it('detects missing quiz array', () => {
    const bad = { ...validCountry, quiz: [] };
    expect(validateCountry(bad)).toContain('Missing or empty quiz array');
  });

  it('detects missing mainDish', () => {
    const bad = { ...validCountry, mainDish: null };
    expect(validateCountry(bad)).toContain('Missing mainDish');
  });

  it('detects mainDish without ingredients', () => {
    const bad = {
      ...validCountry,
      mainDish: { ...validCountry.mainDish, ingredients: [] },
    };
    expect(validateCountry(bad)).toContain('mainDish has no ingredients');
  });

  it('accepts plain string TranslatedString', () => {
    const c = { ...validCountry, name: 'Sweden' };
    expect(validateCountry(c)).toEqual([]);
  });
});

describe('filterValidCountries', () => {
  it('keeps valid countries', () => {
    const result = filterValidCountries([validCountry as any]);
    expect(result).toHaveLength(1);
  });

  it('drops invalid countries', () => {
    const invalid = { ...validCountry, id: '', name: '' };
    const result = filterValidCountries([validCountry as any, invalid as any]);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('sweden');
  });
});
