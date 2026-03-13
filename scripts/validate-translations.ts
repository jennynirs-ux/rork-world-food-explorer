/**
 * Translation Validation Script (I18N-001)
 *
 * Scans all 195 country data files and reports:
 * - Missing translations (empty or undefined sv/es/fr/de fields)
 * - Suspiciously identical translations (sv === en, likely not translated)
 * - Extremely short translations (< 10 chars for descriptions)
 * - Placeholder text patterns (lorem, TODO, TBD, ???)
 *
 * Run: bunx ts-node scripts/validate-translations.ts
 */

import { countries } from '../data/countries';

const SUPPORTED_LANGS = ['en', 'sv', 'es', 'fr', 'de'] as const;
type Lang = typeof SUPPORTED_LANGS[number];

interface TranslationIssue {
  countryId: string;
  field: string;
  lang: Lang;
  issue: 'missing' | 'identical_to_en' | 'too_short' | 'placeholder';
  value?: string;
}

function isTranslatedString(obj: any): obj is Record<Lang, string> {
  return obj && typeof obj === 'object' && 'en' in obj;
}

function checkField(
  countryId: string,
  fieldPath: string,
  value: any,
  issues: TranslationIssue[]
) {
  if (!isTranslatedString(value)) return;

  const enValue = value.en;

  for (const lang of SUPPORTED_LANGS) {
    if (lang === 'en') continue;

    const translation = value[lang];

    // Missing translation
    if (!translation || translation.trim() === '') {
      issues.push({ countryId, field: fieldPath, lang, issue: 'missing' });
      continue;
    }

    // Identical to English (likely untranslated)
    if (translation === enValue && enValue.length > 3) {
      issues.push({
        countryId,
        field: fieldPath,
        lang,
        issue: 'identical_to_en',
        value: translation.substring(0, 50),
      });
    }

    // Placeholder patterns
    const lower = translation.toLowerCase();
    if (
      lower.includes('todo') ||
      lower.includes('tbd') ||
      lower.includes('???') ||
      lower.includes('lorem ipsum')
    ) {
      issues.push({
        countryId,
        field: fieldPath,
        lang,
        issue: 'placeholder',
        value: translation.substring(0, 50),
      });
    }

    // Too short for description fields
    if (
      fieldPath.includes('description') &&
      translation.length < 10 &&
      enValue.length > 20
    ) {
      issues.push({
        countryId,
        field: fieldPath,
        lang,
        issue: 'too_short',
        value: translation,
      });
    }
  }
}

function validateCountry(country: any, issues: TranslationIssue[]) {
  const id = country.id;

  // Top-level translated fields
  checkField(id, 'name', country.name, issues);
  checkField(id, 'continent', country.continent, issues);
  checkField(id, 'description', country.description, issues);

  // Dishes
  if (Array.isArray(country.dishes)) {
    country.dishes.forEach((dish: any, i: number) => {
      checkField(id, 'dishes[' + i + '].name', dish.name, issues);
      checkField(id, 'dishes[' + i + '].description', dish.description, issues);
      checkField(id, 'dishes[' + i + '].recipe', dish.recipe, issues);

      // Ingredients
      if (Array.isArray(dish.ingredients)) {
        dish.ingredients.forEach((ing: any, j: number) => {
          checkField(id, 'dishes[' + i + '].ingredients[' + j + ']', ing, issues);
        });
      }

      // Instructions
      if (Array.isArray(dish.instructions)) {
        dish.instructions.forEach((inst: any, j: number) => {
          checkField(id, 'dishes[' + i + '].instructions[' + j + ']', inst, issues);
        });
      }
    });
  }

  // Fun facts
  if (Array.isArray(country.funFacts)) {
    country.funFacts.forEach((fact: any, i: number) => {
      checkField(id, 'funFacts[' + i + ']', fact, issues);
    });
  }
}

// --- Main ---
const issues: TranslationIssue[] = [];

for (const country of countries) {
  validateCountry(country, issues);
}

// Group by issue type
const byType = {
  missing: issues.filter((i) => i.issue === 'missing'),
  identical_to_en: issues.filter((i) => i.issue === 'identical_to_en'),
  too_short: issues.filter((i) => i.issue === 'too_short'),
  placeholder: issues.filter((i) => i.issue === 'placeholder'),
};

// Group by language
const byLang: Record<string, number> = {};
for (const issue of issues) {
  byLang[issue.lang] = (byLang[issue.lang] || 0) + 1;
}

console.log('\n=== Translation Validation Report (I18N-001) ===\n');
console.log('Total countries scanned:', countries.length);
console.log('Total issues found:', issues.length);
console.log('');
console.log('Issues by type:');
console.log('  Missing translations:', byType.missing.length);
console.log('  Identical to English:', byType.identical_to_en.length);
console.log('  Too short:', byType.too_short.length);
console.log('  Placeholder text:', byType.placeholder.length);
console.log('');
console.log('Issues by language:');
for (const [lang, count] of Object.entries(byLang)) {
  console.log('  ' + lang + ':', count);
}
console.log('');

// Print Swedish issues specifically (priority for I18N-001)
const svIssues = issues.filter((i) => i.lang === 'sv');
if (svIssues.length > 0) {
  console.log('=== Swedish (sv) Issues (Priority) ===\n');
  for (const issue of svIssues.slice(0, 50)) {
    console.log(
      '  [' + issue.issue.toUpperCase() + '] ' +
        issue.countryId +
        ' > ' +
        issue.field +
        (issue.value ? ' : "' + issue.value + '"' : '')
    );
  }
  if (svIssues.length > 50) {
    console.log('  ... and ' + (svIssues.length - 50) + ' more');
  }
} else {
  console.log('No Swedish translation issues found!');
}

// Print first 20 identical-to-en issues for all languages
if (byType.identical_to_en.length > 0) {
  console.log('\n=== Sample Identical-to-English Issues ===\n');
  for (const issue of byType.identical_to_en.slice(0, 20)) {
    console.log(
      '  ' + issue.lang + ' | ' + issue.countryId + ' > ' + issue.field +
      ' : "' + (issue.value || '') + '"'
    );
  }
}

console.log('\n=== End of Report ===\n');
