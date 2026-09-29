import { Country, Recipe, TranslatedString } from '@/types';
import { translateContent } from '@/lib/translate-content';

export type RecipeMatch = {
  countryId: string;
  /** Country name in the requested language. */
  countryName: string;
  countryFlag: string;
  recipe: Recipe;
  isDessert: boolean;
  /** Matched ingredient names, in the requested language. */
  matchedIngredients: string[];
  /** Ingredients that count towards the match (pantry staples excluded). */
  totalIngredients: number;
  matchPercent: number;
};

// ── Language data ─────────────────────────────────────────────────
// All words below are in folded form (lowercase, no diacritics).

const OR_WORDS: Record<string, string[]> = {
  en: ['or'], sv: ['eller'], de: ['oder'], es: ['o', 'u'], fr: ['ou'],
  it: ['o', 'oppure'], pl: ['lub', 'albo'], nl: ['of'], pt: ['ou'],
};

/** Words that start a usage note: "oil for frying", "salt to taste", "olja för stekning". */
const PURPOSE_WORDS: Record<string, string[]> = {
  en: ['for', 'to'], sv: ['for', 'till', 'att'], de: ['fur', 'zum', 'zur', 'zu'], es: ['para'],
  fr: ['pour'], it: ['per'], pl: ['do'], nl: ['voor', 'om'], pt: ['para'],
};

/** Descriptive words that don't identify the ingredient. */
const STOP_WORDS: Record<string, string[]> = {
  en: ['fresh', 'freshly', 'dried', 'ground', 'chopped', 'minced', 'sliced', 'diced', 'large', 'small',
    'medium', 'whole', 'raw', 'cooked', 'frozen', 'canned', 'ripe', 'green', 'red', 'white', 'black',
    'yellow', 'hot', 'cold', 'warm', 'thin', 'thick', 'finely', 'roughly', 'boneless', 'skinless',
    'organic', 'unsalted', 'salted', 'grated', 'crushed', 'peeled', 'optional', 'extra', 'plain',
    'the', 'of', 'and', 'with', 'into', 'about'],
  sv: ['farsk', 'farska', 'torkad', 'torkade', 'malen', 'malet', 'mald', 'malda', 'hackad', 'hackade',
    'finhackad', 'finhackade', 'skivad', 'skivade', 'tarnad', 'tarnade', 'stor', 'stora', 'liten',
    'sma', 'medelstor', 'medelstora', 'hel', 'hela', 'ra', 'kokt', 'kokta', 'fryst', 'frysta', 'mogen',
    'mogna', 'riven', 'rivna', 'krossad', 'krossade', 'skalad', 'skalade', 'valfritt', 'extra', 'av',
    'och', 'med', 'rod', 'rott', 'roda', 'gul', 'gula', 'gron', 'gront', 'grona', 'vit', 'vitt',
    'vita', 'svart', 'svarta', 'osaltat', 'osaltad', 'saltad', 'saltat'],
  de: ['frisch', 'frische', 'frischer', 'getrocknet', 'getrocknete', 'gemahlen', 'gemahlener',
    'gemahlene', 'gehackt', 'gehackte', 'fein', 'gewurfelt', 'geschnitten', 'gross', 'grosse', 'klein',
    'kleine', 'ganz', 'ganze', 'gekocht', 'gekochte', 'gekochter', 'gefroren', 'reif', 'reife',
    'gerieben', 'geschalt', 'optional', 'und', 'mit', 'rot', 'rote', 'roter', 'grun', 'grune',
    'gruner', 'weiss', 'weisse', 'weisser', 'schwarz', 'schwarzer', 'gelb', 'gelbe', 'vom', 'von',
    'der', 'die', 'das', 'in', 'scheiben', 'ungesalzene', 'ungesalzen'],
  es: ['fresco', 'fresca', 'frescos', 'frescas', 'seco', 'seca', 'secos', 'molido', 'molida', 'picado',
    'picada', 'picados', 'picadas', 'finamente', 'grande', 'grandes', 'pequeno', 'pequena', 'entero',
    'entera', 'cocido', 'cocida', 'congelado', 'maduro', 'madura', 'rallado', 'rallada', 'pelado',
    'pelada', 'opcional', 'de', 'del', 'la', 'el', 'los', 'las', 'con', 'en', 'rojo', 'roja', 'rojos',
    'verde', 'verdes', 'blanco', 'blanca', 'negro', 'negra', 'amarillo'],
  fr: ['frais', 'fraiche', 'sec', 'seche', 'seches', 'moulu', 'moulue', 'hache', 'hachee', 'emince',
    'grand', 'grande', 'petit', 'petite', 'entier', 'entiere', 'cuit', 'cuite', 'surgele', 'mur',
    'mure', 'rape', 'rapee', 'pele', 'facultatif', 'de', 'du', 'des', 'la', 'le', 'les', 'et', 'avec',
    'en', 'rouge', 'rouges', 'vert', 'verte', 'blanc', 'blanche', 'noir', 'noire', 'jaune'],
  it: ['fresco', 'fresca', 'freschi', 'secco', 'secca', 'macinato', 'tritato', 'tritata', 'grande',
    'piccolo', 'intero', 'cotto', 'surgelato', 'maturo', 'grattugiato', 'opzionale', 'di', 'del',
    'della', 'con', 'rosso', 'rossa', 'verde', 'bianco', 'bianca', 'nero'],
  nl: ['vers', 'verse', 'gedroogd', 'gemalen', 'gehakt', 'fijngehakt', 'groot', 'grote', 'klein',
    'kleine', 'heel', 'hele', 'gekookt', 'bevroren', 'rijp', 'geraspt', 'geschild', 'optioneel', 'en',
    'met', 'van', 'de', 'het', 'rood', 'rode', 'groen', 'groene', 'wit', 'witte', 'zwart', 'zwarte',
    'geel', 'gele'],
  pl: ['swiezy', 'swieza', 'swieze', 'suszony', 'mielony', 'mielone', 'posiekany', 'duzy', 'duze',
    'maly', 'male', 'caly', 'gotowany', 'gotowane', 'mrozony', 'dojrzaly', 'tarty', 'obrany',
    'opcjonalnie', 'czerwony', 'czerwona', 'zielony', 'bialy', 'biala', 'czarny', 'czarna'],
  pt: ['fresco', 'fresca', 'seco', 'seca', 'moido', 'moida', 'picado', 'picada', 'grande', 'pequeno',
    'inteiro', 'cozido', 'cozida', 'congelado', 'maduro', 'ralado', 'descascado', 'opcional', 'de',
    'do', 'da', 'dos', 'das', 'com', 'em', 'vermelho', 'vermelha', 'verde', 'branco', 'branca', 'preto',
    'preta'],
};

/** Plural/inflection endings, tried as alternative word forms (tomater -> tomat, eggs -> egg). */
const SUFFIXES: Record<string, string[]> = {
  en: ['es', 's'],
  sv: ['arna', 'orna', 'erna', 'ar', 'or', 'er', 'na', 'en', 'n', 'a'],
  de: ['en', 'er', 'n', 'e', 's'],
  nl: ['en', 's'],
  es: ['es', 's'],
  pt: ['es', 's'],
  fr: ['es', 's', 'x'],
  it: ['e', 'i', 'a', 'o'],
  pl: ['ami', 'ach', 'ow', 'y', 'i', 'e', 'a'],
};

/** English words after an ingredient that make it a different product ("chicken stock", "rice flour"). */
const DERIVED_HEADS = new Set([
  'stock', 'broth', 'bouillon', 'powder', 'flour', 'vinegar', 'wine', 'noodle', 'starch', 'paste',
  'oil', 'milk', 'cream', 'butter', 'cheese', 'syrup', 'extract', 'sauce', 'cube', 'jam', 'liqueur',
  'essence', 'gel', 'leaf', 'leave', 'water', 'sugar', 'chip',
]);

/** English words before an ingredient that make it a different product ("coconut milk", "sweet potato"). */
const DIFFERENT_PRODUCT_BEFORE = new Set([
  'coconut', 'peanut', 'almond', 'cashew', 'hazelnut', 'soy', 'oat', 'rice', 'sweet', 'palm',
  'sesame', 'corn', 'cocoa', 'ice', 'sour', 'condensed', 'evaporated', 'powdered', 'icing',
  'chickpea', 'cassava', 'maize', 'sorghum', 'millet', 'tapioca', 'buckwheat', 'fish', 'tomato',
  'garlic', 'onion', 'curry', 'baking', 'vanilla', 'rose',
]);

/**
 * Pantry staples (salt, water, pepper, oil, sugar) don't count against the
 * match: nobody types them in, and everyone has them.
 */
const STAPLE_HEADS = new Set(['salt', 'water', 'pepper', 'peppercorn', 'oil', 'sugar']);
const STAPLE_MODIFIERS = new Set([
  'sea', 'coarse', 'fine', 'kosher', 'table', 'flaky', 'pinch', 'black', 'white', 'ground', 'freshly',
  'cracked', 'whole', 'vegetable', 'cooking', 'neutral', 'frying', 'olive', 'sunflower', 'canola',
  'rapeseed', 'extra', 'virgin', 'light', 'granulated', 'caster', 'boiling', 'warm', 'cold',
  'lukewarm', 'hot', 'iced', 'ice', 'tap', 'plain', 'and', 'of', 'a', 'some', 'optional', 'more',
  'additional',
]);

// ── Text helpers ──────────────────────────────────────────────────

const SPLIT_RE = /[\s,.;:!?()[\]{}"'`´’‘“”«»\-–—_+&*%#@|<>=~^$0-9½¼¾⅓⅔]+/;

const PLAIN_WORD = /^[a-z0-9]*$/;

const LETTER_MAP: Record<string, string> = {};
for (const [base, accented] of [
  ['a', 'àáâãäåāăą'], ['c', 'çćč'], ['d', 'ďđ'], ['e', 'èéêëēėęě'], ['g', 'ğ'], ['i', 'ìíîïīı'],
  ['l', 'ł'], ['n', 'ñńň'], ['o', 'òóôõöøōő'], ['r', 'ř'], ['s', 'śšș'], ['t', 'ťț'],
  ['u', 'ùúûüūůű'], ['y', 'ýÿ'], ['z', 'źżž'], ['ss', 'ß'], ['ae', 'æ'], ['oe', 'œ'],
] as const) {
  for (const ch of accented) LETTER_MAP[ch] = base;
}

function foldWord(word: string): string {
  if (PLAIN_WORD.test(word)) return word;
  let out = '';
  for (const ch of word) {
    if ((ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9')) out += ch;
    else if (LETTER_MAP[ch]) out += LETTER_MAP[ch];
    else if (typeof ch.normalize === 'function') {
      out += ch.normalize('NFD').replace(/[^a-z0-9]/g, '');
    }
  }
  return out;
}

/** Lowercase, strip diacritics and punctuation. Exported for tests/UI. */
export function foldText(text: string): string {
  return text.toLowerCase().split(SPLIT_RE).map(foldWord).filter(Boolean).join(' ');
}

function langOf(language: string): string {
  return OR_WORDS[language] ? language : 'en';
}

function wordForms(word: string, lang: string): string[] {
  const forms = [word];
  for (const suffix of SUFFIXES[lang] || SUFFIXES.en) {
    if (word.length - suffix.length >= 2 && word.endsWith(suffix)) {
      forms.push(word.slice(0, -suffix.length));
    }
  }
  return forms;
}

function singularEn(word: string): string {
  if (word.endsWith('ies') && word.length > 4) return `${word.slice(0, -3)}y`;
  if (word.endsWith('oes') && word.length > 4) return word.slice(0, -2);
  if (word.endsWith('s') && !word.endsWith('ss') && word.length > 3) return word.slice(0, -1);
  return word;
}

/** One way of naming an ingredient ("lamb or chicken" has two). */
type Alt = {
  /** Folded words before stop-word removal (used for staple detection). */
  raw: string[];
  /** Folded identifying words. */
  words: string[];
  /** Display words (lowercase, diacritics kept), parallel to `words`. */
  display: string[];
  /** Accepted forms of each word, parallel to `words`. */
  forms: string[][];
};

const STOP_SETS: Record<string, Set<string>> = Object.fromEntries(
  Object.entries(STOP_WORDS).map(([lang, list]) => [lang, new Set(list)]),
);

function makeAlt(rawWords: { folded: string; display: string }[], lang: string): Alt | null {
  const stop = STOP_SETS[lang] || STOP_SETS.en;
  const kept = rawWords.filter(w => w.folded.length >= 2 && !stop.has(w.folded));
  if (kept.length === 0) return null;
  return {
    raw: rawWords.map(w => w.folded),
    words: kept.map(w => w.folded),
    display: kept.map(w => w.display),
    forms: kept.map(w => wordForms(w.folded, lang)),
  };
}

function tokenize(text: string): { folded: string; display: string }[] {
  return text.toLowerCase().split(SPLIT_RE)
    .map(display => ({ folded: foldWord(display), display }))
    .filter(w => w.folded.length > 0);
}

/** Split word list on "or" into alternatives. */
function splitOnOr(words: { folded: string; display: string }[], lang: string) {
  const orWords = OR_WORDS[lang] || OR_WORDS.en;
  const groups: { folded: string; display: string }[][] = [[]];
  for (const w of words) {
    if (orWords.includes(w.folded)) groups.push([]);
    else groups[groups.length - 1].push(w);
  }
  return groups.filter(g => g.length > 0);
}

/**
 * Parse a recipe ingredient name into its alternatives.
 * "Butter, melted (or neutral oil)" -> [butter], [neutral oil]
 * "Chicken or beef stock"           -> [chicken stock], [beef stock]
 * "For syrup: sugar"                -> [sugar]
 * "Salt (for pasta water)"          -> [salt]
 */
function parseName(name: string, language: string): Alt[] {
  const lang = langOf(language);
  const orWords = OR_WORDS[lang];
  const purpose = PURPOSE_WORDS[lang];
  let text = name.toLowerCase();
  const colon = text.lastIndexOf(':');
  if (colon >= 0) text = text.slice(colon + 1);

  // Parenthetical "(or X)" is an alternative; any other note is dropped.
  const extra: { folded: string; display: string }[][] = [];
  text = text.replace(/\(([^)]*)\)/g, (_m, inner: string) => {
    const words = tokenize(inner);
    if (words.length > 1 && orWords.includes(words[0].folded)) {
      extra.push(...splitOnOr(words.slice(1), lang));
    }
    return ' ';
  });

  // Text after a comma is preparation ("onions, finely chopped"); "a/b" means "a or b".
  const main = text.split(',')[0].replace(/\//g, ` ${orWords[0]} `);
  let words = tokenize(main);
  const cut = words.findIndex((w, i) => i > 0 && purpose.includes(w.folded));
  if (cut > 0) words = words.slice(0, cut);

  const groups = splitOnOr(words, lang);
  // "chicken or beef stock": the head noun applies to every alternative.
  if (lang === 'en' && groups.length > 1) {
    const last = groups[groups.length - 1];
    const head = last[last.length - 1];
    if (last.length > 1 && DERIVED_HEADS.has(singularEn(head.folded))) {
      for (let i = 0; i < groups.length - 1; i++) {
        if (groups[i].length === 1) groups[i] = [...groups[i], head];
      }
    }
  }

  return [...groups, ...extra]
    .map(g => makeAlt(g, lang))
    .filter((a): a is Alt => a !== null);
}

function wordMatches(userForms: string[], targetForms: string[]): boolean {
  return targetForms.some(f => userForms.includes(f));
}

/**
 * Does the user's phrase name this English alternative? Every user word must
 * appear, and a match that is really a different product ("chicken" in
 * "chicken stock", "milk" in "coconut milk") is rejected.
 */
function altMatches(user: Alt, target: Alt): boolean {
  const positions: number[] = [];
  for (const forms of user.forms) {
    const idx = target.forms.findIndex(tf => wordMatches(forms, tf));
    if (idx < 0) return false;
    positions.push(idx);
  }
  const first = Math.min(...positions);
  const last = Math.max(...positions);
  const next = target.words[last + 1];
  if (next && DERIVED_HEADS.has(singularEn(next))) return false;
  const prev = target.words[first - 1];
  if (prev && DIFFERENT_PRODUCT_BEFORE.has(singularEn(prev))) return false;
  return true;
}

/** Languages that write compounds as one word ("kycklinglår", "Hähnchenbrust"). */
const COMPOUNDING = new Set(['sv', 'de', 'nl']);

/** English name that is a different product than its first word ("chicken stock", "coconut milk"). */
function isDerivedProduct(alt: Alt): boolean {
  const last = alt.words[alt.words.length - 1];
  return alt.words.length > 1 && (
    DERIVED_HEADS.has(singularEn(last)) || DIFFERENT_PRODUCT_BEFORE.has(singularEn(alt.words[0]))
  );
}

/**
 * Compare the user's phrase with a translated name. Every user word must be a
 * word of the name, or (in compounding languages) the start of one:
 * "hähnchen" matches "Hähnchenbrust", "morot" matches "Morötter".
 * A compound match is rejected when the English name shows it is another
 * product ("Kycklingfond" is chicken stock).
 */
function localAltMatches(user: Alt, target: Alt, lang: string, targetEn: Alt | undefined): boolean {
  let compound = false;
  for (let i = 0; i < user.words.length; i++) {
    if (target.forms.some(tf => wordMatches(user.forms[i], tf))) continue;
    const word = user.words[i];
    if (COMPOUNDING.has(lang) && word.length >= 4 && target.words.some(w => w.length > word.length && w.startsWith(word))) {
      compound = true;
      continue;
    }
    return false;
  }
  return !(compound && targetEn && isDerivedProduct(targetEn));
}

function isStapleAlt(alt: Alt): boolean {
  const words = alt.raw.map(singularEn);
  return words.some(w => STAPLE_HEADS.has(w)) &&
    words.every(w => STAPLE_HEADS.has(w) || STAPLE_MODIFIERS.has(w));
}

// ── Index (built once per country list + language) ────────────────

type IndexedIngredient = {
  en: Alt[];
  local: Alt[];
  /** The English alternative for each local one, when they line up. */
  localEn: (Alt | undefined)[];
  staple: boolean;
  displayName: string;
};

type IndexedRecipe = { recipe: Recipe; isDessert: boolean; ingredients: IndexedIngredient[] };

type Index = {
  lang: string;
  countries: { country: Country; name: string; recipes: IndexedRecipe[] }[];
  /**
   * Local ingredient name (by word form) -> English names it was paired with in
   * the recipe data, with how often ("kyckling" -> chicken x12, chicken stock x1).
   */
  dictionary: Map<string, Map<string, { alt: Alt; count: number }>>;
};

const indexCache = new WeakMap<Country[], Map<string, Index>>();

function nameIn(name: TranslatedString, lang: string): string | null {
  if (typeof name === 'string') return lang === 'en' ? name : null;
  return lang === 'en' ? name.en : (name as Record<string, string | undefined>)[lang] || null;
}

function dictionaryKeys(alt: Alt): string[] {
  const head = alt.words.slice(0, -1).join(' ');
  return alt.forms[alt.forms.length - 1].map(f => (head ? `${head} ${f}` : f));
}

function buildIndex(countries: Country[], language: string): Index {
  const lang = langOf(language);
  const dictionary: Index['dictionary'] = new Map();
  const addToDictionary = (local: Alt, en: Alt) => {
    const enKey = en.words.join(' ');
    for (const key of dictionaryKeys(local)) {
      const entries = dictionary.get(key) || new Map();
      const entry = entries.get(enKey);
      if (entry) entry.count += 1;
      else entries.set(enKey, { alt: en, count: 1 });
      dictionary.set(key, entries);
    }
  };

  const indexed = countries.map(country => {
    const recipes: IndexedRecipe[] = [];
    for (const [recipe, isDessert] of [[country.mainDish, false], [country.dessert, true]] as const) {
      if (!recipe) continue;
      const ingredients = recipe.ingredients.map(ing => {
        const enName = nameIn(ing.name, 'en') || '';
        const en = parseName(enName, 'en');
        const localName = lang === 'en' ? null : nameIn(ing.name, lang);
        const local = localName ? parseName(localName, lang) : [];
        // Pair alternatives by position ("lamm eller kyckling" <-> "lamb or chicken").
        if (local.length > 0 && local.length === en.length) {
          local.forEach((alt, i) => addToDictionary(alt, en[i]));
        }
        return {
          en,
          local,
          localEn: local.map((_, i) => (local.length === en.length ? en[i] : undefined)),
          staple: en.some(isStapleAlt),
          displayName: translateContent(ing.name, lang),
        };
      });
      recipes.push({ recipe, isDessert, ingredients });
    }
    return { country, name: translateContent(country.name, lang), recipes };
  });

  return { lang, countries: indexed, dictionary };
}

function getIndex(countries: Country[], language: string): Index {
  const lang = langOf(language);
  let byLang = indexCache.get(countries);
  if (!byLang) {
    byLang = new Map();
    indexCache.set(countries, byLang);
  }
  let index = byLang.get(lang);
  if (!index) {
    index = buildIndex(countries, lang);
    byLang.set(lang, index);
  }
  return index;
}

// ── Matching ──────────────────────────────────────────────────────

type Query = {
  /** The phrase read as English (English users, or words the recipe data doesn't know). */
  en: Alt | null;
  /** The phrase read in the user's language, compared with translated names directly. */
  local: Alt | null;
  /** English names the phrase translates to, learned from the recipe data. */
  translations: Alt[];
};

function translate(local: Alt, index: Index): Alt[] {
  const found = new Map<string, { alt: Alt; count: number }>();
  for (const key of dictionaryKeys(local)) {
    for (const [enKey, entry] of index.dictionary.get(key) || []) {
      const prev = found.get(enKey);
      found.set(enKey, { alt: entry.alt, count: (prev?.count || 0) + entry.count });
    }
  }
  if (found.size === 0) return [];
  // Ignore rare pairings, which come from compound names or odd translations.
  const top = Math.max(...[...found.values()].map(e => e.count));
  return [...found.values()].filter(e => e.count * 4 >= top).map(e => e.alt);
}

function buildQuery(phrase: string, index: Index): Query | null {
  const words = tokenize(phrase);
  const en = makeAlt(words, 'en');
  if (index.lang === 'en') return en ? { en, local: null, translations: [] } : null;

  const local = makeAlt(words, index.lang);
  const translations = local ? translate(local, index) : [];
  if (translations.length > 0) return { en: null, local: null, translations };
  // Not a known ingredient name in the user's language: try it as English
  // and against the translated names directly.
  if (!en && !local) return null;
  return { en, local, translations };
}

function queryMatches(query: Query, ing: IndexedIngredient, lang: string): boolean {
  for (const target of ing.en) {
    if (query.en && altMatches(query.en, target)) return true;
    for (const t of query.translations) {
      if (altMatches(t, target)) return true;
    }
  }
  if (query.local) {
    const local = query.local;
    if (ing.local.some((target, i) => localAltMatches(local, target, lang, ing.localEn[i]))) return true;
  }
  return false;
}

/** Split free text like "kyckling, ris, lök" into separate ingredients. */
export function splitIngredientInput(text: string): string[] {
  return text
    .split(/[,;\n]+/)
    .map(s => s.trim().toLowerCase())
    .filter(Boolean);
}

/**
 * Find recipes that match a set of user-provided ingredients.
 * Ingredients are matched against the recipe's ingredient names in `language`
 * and in English (case, diacritics and simple plurals ignored). Pantry staples
 * (salt, water, pepper, oil, sugar) don't count towards the percentage.
 * Returns matches sorted by match percentage (best first).
 */
export function findMatchingRecipes(
  userIngredients: string[],
  countries: Country[],
  minMatchPercent = 30,
  language = 'en',
): RecipeMatch[] {
  const index = getIndex(countries, language);
  const queries = userIngredients
    .flatMap(splitIngredientInput)
    .map(p => buildQuery(p, index))
    .filter((q): q is Query => q !== null);
  if (queries.length === 0) return [];

  const matches: RecipeMatch[] = [];
  for (const { country, name, recipes } of index.countries) {
    for (const { recipe, isDessert, ingredients } of recipes) {
      const counted = ingredients.filter(i => !i.staple);
      if (counted.length === 0) continue;
      const matched = counted.filter(ing => queries.some(q => queryMatches(q, ing, index.lang)));
      const matchPercent = Math.round((matched.length / counted.length) * 100);
      if (matched.length === 0 || matchPercent < minMatchPercent) continue;
      matches.push({
        countryId: country.id,
        countryName: name,
        countryFlag: country.flag,
        recipe,
        isDessert,
        matchedIngredients: matched.map(i => i.displayName),
        totalIngredients: counted.length,
        matchPercent,
      });
    }
  }

  return matches.sort((a, b) =>
    b.matchPercent - a.matchPercent ||
    b.matchedIngredients.length - a.matchedIngredients.length ||
    a.countryName.localeCompare(b.countryName),
  );
}

/**
 * Get commonly searched ingredient suggestions.
 */
export const COMMON_INGREDIENTS = [
  'chicken', 'beef', 'pork', 'fish', 'tofu', 'eggs',
  'rice', 'pasta', 'potato', 'bread', 'flour', 'noodles',
  'onion', 'garlic', 'tomato', 'carrot', 'pepper', 'mushroom',
  'butter', 'cream', 'cheese', 'milk', 'yogurt',
  'lemon', 'coconut', 'ginger', 'cumin', 'chili',
  'beans', 'lentils', 'chickpeas', 'spinach', 'cabbage',
];

/**
 * COMMON_INGREDIENTS in the user's language, using the most common translation
 * found in the recipe data (falls back to English).
 */
export function getIngredientSuggestions(countries: Country[], language = 'en'): string[] {
  const index = getIndex(countries, language);
  if (index.lang === 'en') return COMMON_INGREDIENTS;

  const counts = new Map<string, Map<string, number>>();
  for (const { recipes } of index.countries) {
    for (const { ingredients } of recipes) {
      for (const ing of ingredients) {
        if (ing.en.length !== 1 || ing.local.length !== 1 || ing.en[0].words.length !== 1) continue;
        const enWord = ing.en[0];
        const common = COMMON_INGREDIENTS.find(c => wordMatches(wordForms(c, 'en'), enWord.forms[0]));
        if (!common) continue;
        const localName = ing.local[0].display.join(' ');
        const byName = counts.get(common) || new Map<string, number>();
        byName.set(localName, (byName.get(localName) || 0) + 1);
        counts.set(common, byName);
      }
    }
  }

  const result: string[] = [];
  for (const common of COMMON_INGREDIENTS) {
    const byName = counts.get(common);
    const best = byName
      ? [...byName.entries()].sort((a, b) => b[1] - a[1])[0][0]
      : common;
    if (!result.includes(best)) result.push(best);
  }
  return result;
}
