import { Country, TranslatedString } from '@/types';

/**
 * Lightweight runtime validation for country data.
 * Returns an array of error messages (empty = valid).
 */
export function validateCountry(c: unknown): string[] {
  const errors: string[] = [];

  if (!c || typeof c !== 'object') {
    return ['Country data is not an object'];
  }

  const country = c as Record<string, unknown>;

  // Required string fields
  if (!country.id || typeof country.id !== 'string') {
    errors.push('Missing or invalid id');
  }
  if (!isTranslatedString(country.name)) {
    errors.push('Missing or invalid name');
  }
  if (!country.code || typeof country.code !== 'string') {
    errors.push('Missing or invalid code');
  }
  if (!isTranslatedString(country.continent)) {
    errors.push('Missing or invalid continent');
  }
  if (!country.flag || typeof country.flag !== 'string') {
    errors.push('Missing or invalid flag');
  }
  if (!isTranslatedString(country.description)) {
    errors.push('Missing or invalid description');
  }
  if (!isTranslatedString(country.foodCulture)) {
    errors.push('Missing or invalid foodCulture');
  }

  // Required arrays
  if (!Array.isArray(country.facts) || country.facts.length === 0) {
    errors.push('Missing or empty facts array');
  }
  if (!Array.isArray(country.quiz) || country.quiz.length === 0) {
    errors.push('Missing or empty quiz array');
  }

  // Required nested object
  if (!country.mainDish || typeof country.mainDish !== 'object') {
    errors.push('Missing mainDish');
  } else {
    const dish = country.mainDish as Record<string, unknown>;
    if (!dish.id || !isTranslatedString(dish.name)) {
      errors.push('mainDish missing id or name');
    }
    if (!Array.isArray(dish.ingredients) || dish.ingredients.length === 0) {
      errors.push('mainDish has no ingredients');
    }
  }

  return errors;
}

function isTranslatedString(value: unknown): value is TranslatedString {
  if (typeof value === 'string') return value.length > 0;
  if (value && typeof value === 'object' && 'en' in value) {
    return typeof (value as Record<string, unknown>).en === 'string' && (value as Record<string, unknown>).en !== '';
  }
  return false;
}

/**
 * Filters a country array, dropping entries that fail basic validation.
 * Logs warnings in __DEV__ mode for any dropped entries.
 */
export function filterValidCountries(countries: Country[]): Country[] {
  return countries.filter((c) => {
    const errors = validateCountry(c);
    if (errors.length > 0) {
      if (__DEV__) {
        console.warn(`[validate] Dropping country "${c.id || '???'}":`, errors);
      }
      return false;
    }
    return true;
  });
}
