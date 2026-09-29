import { TranslatedString, IngredientSubstitution } from '@/types';

type Sub = IngredientSubstitution;

type SubstitutionEntry = {
  /** English keywords/phrases (singular, lowercase, space separated). */
  keys: string[];
  /** Suggestions. An empty list means "known ingredient, no sensible substitute". */
  subs: Sub[];
  /** Only applies when one of these words appears anywhere in the ingredient text. */
  requires?: string[];
  /** Never applies when one of these words appears anywhere in the ingredient text. */
  skipIf?: string[];
};

// ── Reusable suggestions ──────────────────────────────────────────
const VEGETABLE_STOCK: Sub = { name: { en: 'Vegetable stock', sv: 'Grönsaksbuljong', es: 'Caldo de verduras', fr: 'Bouillon de légumes', de: 'Gemüsebrühe' }, ratio: 1, note: { en: 'Vegetarian option', sv: 'Vegetariskt alternativ' } };
const MUSHROOM_STOCK: Sub = { name: { en: 'Mushroom stock', sv: 'Svampbuljong', es: 'Caldo de champiñones', fr: 'Bouillon de champignons', de: 'Pilzbrühe' }, ratio: 1, note: { en: 'Deeper, savory flavor', sv: 'Djupare, fylligare smak' } };
const TOFU: Sub = { name: { en: 'Tofu', sv: 'Tofu', es: 'Tofu', fr: 'Tofu', de: 'Tofu' }, ratio: 1, note: { en: 'Vegetarian option', sv: 'Vegetariskt alternativ' } };
const POTATOES: Sub = { name: { en: 'Potatoes', sv: 'Potatis', es: 'Papas', fr: 'Pommes de terre', de: 'Kartoffeln' }, ratio: 1, note: { en: 'More widely available' } };
const SWEET_POTATO: Sub = { name: { en: 'Sweet potato', sv: 'Sötpotatis', es: 'Batata', fr: 'Patate douce', de: 'Süßkartoffel' }, ratio: 1, note: { en: 'Similar texture and flavor' } };
const GREEK_YOGURT: Sub = { name: { en: 'Greek yogurt', sv: 'Grekisk yoghurt', es: 'Yogur griego', fr: 'Yaourt grec', de: 'Griechischer Joghurt' }, ratio: 1, note: { en: 'Stir in off the heat so it does not split', sv: 'Rör ner utanför värmen så att den inte skär sig' } };
const CASHEW_CREAM: Sub = { name: { en: 'Cashew cream', sv: 'Cashewgrädde', es: 'Crema de anacardos', fr: 'Crème de cajou', de: 'Cashewcreme' }, ratio: 1, note: { en: 'Vegan option', sv: 'Veganskt alternativ' } };
const COCONUT_MILK: Sub = { name: { en: 'Coconut milk', sv: 'Kokosmjölk', es: 'Leche de coco', fr: 'Lait de coco', de: 'Kokosmilch' }, ratio: 1, note: { en: 'Dairy-free option', sv: 'Mejerifritt alternativ' } };
const RICE_NOODLES: Sub = { name: { en: 'Rice noodles', sv: 'Risnudlar', es: 'Fideos de arroz', fr: 'Nouilles de riz', de: 'Reisnudeln' }, ratio: 1, note: { en: 'Gluten-free option' } };
const RICOTTA: Sub = { name: { en: 'Ricotta', sv: 'Ricotta', es: 'Ricotta', fr: 'Ricotta', de: 'Ricotta' }, ratio: 1, note: { en: 'Mild and creamy' } };
const CREAM_CHEESE: Sub = { name: { en: 'Cream cheese', sv: 'Färskost', es: 'Queso crema', fr: 'Fromage frais', de: 'Frischkäse' }, ratio: 1, note: { en: 'Richer and smoother' } };
const BROWN_SUGAR: Sub = { name: { en: 'Brown sugar', sv: 'Farinsocker', es: 'Azúcar moreno', fr: 'Sucre roux', de: 'Brauner Zucker' }, ratio: 1, note: { en: 'Similar caramel notes' } };
const MAPLE_SYRUP: Sub = { name: { en: 'Maple syrup', sv: 'Lönnsirap', es: 'Jarabe de arce', fr: "Sirop d'érable", de: 'Ahornsirup' }, ratio: 0.75, note: { en: 'Vegan natural sweetener' } };

/**
 * Common ingredient substitution database, matched against the English
 * ingredient name. The most specific (longest) matching key wins, so
 * "peanut butter" beats "butter" and "chicken stock" beats "chicken".
 */
const SUBSTITUTION_DB: SubstitutionEntry[] = [
  // Dairy
  { keys: ['butter'], subs: [
    { name: { en: 'Coconut oil', sv: 'Kokosolja', es: 'Aceite de coco', fr: 'Huile de coco', de: 'Kokosöl' }, ratio: 1, note: { en: 'Dairy-free option', sv: 'Mejerifritt alternativ' } },
    { name: { en: 'Olive oil', sv: 'Olivolja', es: 'Aceite de oliva', fr: "Huile d'olive", de: 'Olivenöl' }, ratio: 0.75, note: { en: 'For cooking, not baking', sv: 'För matlagning, inte bakning' } },
  ] },
  { keys: ['cream', 'heavy cream', 'whipping cream', 'double cream', 'whipped cream'], subs: [
    { name: { en: 'Coconut cream', sv: 'Kokosgrädde', es: 'Crema de coco', fr: 'Crème de coco', de: 'Kokoscreme' }, ratio: 1, note: { en: 'Dairy-free option', sv: 'Mejerifritt alternativ' } },
    CASHEW_CREAM,
  ] },
  { keys: ['sour cream', 'creme fraiche'], subs: [
    { ...GREEK_YOGURT, note: { en: 'Lighter, similar tang', sv: 'Lättare, liknande syrlighet' } },
  ] },
  { keys: ['coconut cream'], subs: [
    { name: { en: 'Heavy cream', sv: 'Vispgrädde', es: 'Nata para montar', fr: 'Crème entière', de: 'Schlagsahne' }, ratio: 1, note: { en: 'Not dairy-free', sv: 'Inte mejerifritt' } },
    CASHEW_CREAM,
  ] },
  { keys: ['coconut milk'], subs: [
    { name: { en: 'Cashew milk', sv: 'Cashewmjölk', es: 'Leche de anacardos', fr: 'Lait de cajou', de: 'Cashewmilch' }, ratio: 1, note: { en: 'Vegan, similar richness', sv: 'Veganskt, liknande fyllighet' } },
    GREEK_YOGURT,
  ] },
  { keys: ['milk'], subs: [
    { name: { en: 'Oat milk', sv: 'Havremjölk', es: 'Leche de avena', fr: "Lait d'avoine", de: 'Hafermilch' }, ratio: 1, note: { en: 'Dairy-free option', sv: 'Mejerifritt alternativ' } },
    { ...COCONUT_MILK, note: { en: 'Adds richness', sv: 'Ger fylligare smak' } },
  ] },
  { keys: ['buttermilk'], subs: [
    { name: { en: 'Milk + 1 tbsp lemon juice per cup', sv: 'Mjölk + 1 msk citronsaft per 2,5 dl', es: 'Leche + 1 cda de jugo de limón por taza', fr: 'Lait + 1 c. à s. de jus de citron par tasse', de: 'Milch + 1 EL Zitronensaft pro Tasse' }, ratio: 1, note: { en: 'Let it stand for 5 minutes', sv: 'Låt stå i 5 minuter' } },
  ] },
  { keys: ['condensed milk', 'sweetened condensed milk'], subs: [
    { name: { en: 'Coconut condensed milk', sv: 'Kondenserad kokosmjölk', es: 'Leche condensada de coco', fr: 'Lait concentré de coco', de: 'Kokos-Kondensmilch' }, ratio: 1, note: { en: 'Dairy-free option', sv: 'Mejerifritt alternativ' } },
  ] },
  { keys: ['evaporated milk'], subs: [COCONUT_MILK] },
  { keys: ['cheese'], subs: [
    { name: { en: 'Nutritional yeast', sv: 'Näringsjäst', es: 'Levadura nutricional', fr: 'Levure nutritionnelle', de: 'Hefeflocken' }, ratio: 0.3, note: { en: 'For cheesy flavor', sv: 'För ostsmak' } },
  ] },
  { keys: ['cottage cheese', 'farmer cheese', 'ricotta', 'ricotta cheese', 'mascarpone', 'mascarpone cheese', 'quark'], subs: [RICOTTA, CREAM_CHEESE] },
  { keys: ['cream cheese'], subs: [
    RICOTTA,
    { name: { en: 'Cashew cream cheese', sv: 'Cashewfärskost', es: 'Queso crema de anacardos', fr: 'Fromage frais de cajou', de: 'Cashew-Frischkäse' }, ratio: 1, note: { en: 'Vegan option', sv: 'Veganskt alternativ' } },
  ] },
  { keys: ['yogurt', 'yoghurt'], subs: [
    { name: { en: 'Coconut yogurt', sv: 'Kokosyoghurt', es: 'Yogur de coco', fr: 'Yaourt de coco', de: 'Kokosjoghurt' }, ratio: 1, note: { en: 'Dairy-free option' } },
    { name: { en: 'Sour cream', sv: 'Gräddfil', es: 'Crema agria', fr: 'Crème aigre', de: 'Saure Sahne' }, ratio: 1, note: { en: 'Similar tanginess' } },
  ] },

  // Proteins
  { keys: ['beef'], subs: [
    { name: { en: 'Mushrooms', sv: 'Svamp', es: 'Champiñones', fr: 'Champignons', de: 'Pilze' }, ratio: 1, note: { en: 'Vegetarian option, similar umami', sv: 'Vegetariskt alternativ' } },
    { name: { en: 'Lentils', sv: 'Linser', es: 'Lentejas', fr: 'Lentilles', de: 'Linsen' }, ratio: 0.8, note: { en: 'Plant-based protein', sv: 'Växtbaserat protein' } },
  ] },
  { keys: ['chicken'], subs: [
    TOFU,
    { name: { en: 'Chickpeas', sv: 'Kikärtor', es: 'Garbanzos', fr: 'Pois chiches', de: 'Kichererbsen' }, ratio: 1, note: { en: 'Plant-based option' } },
  ] },
  { keys: ['pork'], subs: [
    { name: { en: 'Turkey', sv: 'Kalkon', es: 'Pavo', fr: 'Dinde', de: 'Truthahn' }, ratio: 1, note: { en: 'Leaner alternative' } },
    { name: { en: 'Jackfruit', sv: 'Jackfrukt', es: 'Jaca', fr: 'Jacquier', de: 'Jackfrucht' }, ratio: 1, note: { en: 'Vegan option, similar texture' } },
  ] },
  { keys: ['lamb'], subs: [
    { name: { en: 'Beef', sv: 'Nötkött', es: 'Carne de res', fr: 'Bœuf', de: 'Rindfleisch' }, ratio: 1, note: { en: 'More widely available' } },
  ] },
  { keys: ['fish'], subs: [TOFU] },
  { keys: ['shrimp', 'prawn'], subs: [
    { name: { en: 'King oyster mushrooms', sv: 'Kungsmusseron', es: 'Seta de ostra', fr: 'Pleurote du panicaut', de: 'Kräuterseitling' }, ratio: 1, note: { en: 'Similar texture when sliced' } },
  ] },
  // Egg used as a glaze: brushing with milk works, a flax egg does not.
  { keys: ['egg', 'egg yolk'], requires: ['brushing', 'wash', 'glaze', 'glazing'], subs: [
    { name: { en: 'Milk or plant milk', sv: 'Mjölk eller växtbaserad mjölk', es: 'Leche o bebida vegetal', fr: 'Lait ou lait végétal', de: 'Milch oder Pflanzendrink' }, ratio: 1, note: { en: 'For brushing', sv: 'För pensling' } },
  ] },
  { keys: ['egg'], skipIf: ['brushing', 'wash', 'glaze', 'glazing', 'boiled'], subs: [
    { name: { en: 'Flax egg (1 tbsp ground flax + 3 tbsp water)', sv: 'Linfrö-ägg (1 msk malet linfrö + 3 msk vatten)', es: 'Huevo de lino', fr: 'Œuf de lin', de: 'Leinsamen-Ei' }, ratio: 1, note: { en: 'Vegan baking substitute' } },
  ] },
  { keys: ['egg white'], subs: [
    { name: { en: 'Aquafaba (3 tbsp chickpea liquid per egg white)', sv: 'Aquafaba (3 msk kikärtsspad per äggvita)', es: 'Aquafaba (líquido de garbanzos)', fr: 'Aquafaba (jus de pois chiches)', de: 'Aquafaba (Kichererbsenwasser)' }, ratio: 1, note: { en: 'Vegan, whips like egg whites', sv: 'Veganskt, går att vispa som äggvita' } },
  ] },
  { keys: ['egg noodle'], subs: [{ ...RICE_NOODLES, note: { en: 'Egg-free option' } }] },

  // Grains & starches
  { keys: ['rice'], subs: [
    { name: { en: 'Cauliflower rice', sv: 'Blomkålsris', es: 'Arroz de coliflor', fr: 'Riz de chou-fleur', de: 'Blumenkohlreis' }, ratio: 1, note: { en: 'Low-carb option', sv: 'Lågkolhydratalternativ' } },
    { name: { en: 'Quinoa', sv: 'Quinoa', es: 'Quinoa', fr: 'Quinoa', de: 'Quinoa' }, ratio: 1, note: { en: 'Higher protein', sv: 'Mer protein' } },
  ] },
  { keys: ['rice vinegar'], subs: [
    { name: { en: 'Apple cider vinegar', sv: 'Äppelcidervinäger', es: 'Vinagre de manzana', fr: 'Vinaigre de cidre', de: 'Apfelessig' }, ratio: 0.75, note: { en: 'Slightly sharper, use a little less' } },
  ] },
  { keys: ['rice wine'], subs: [
    { name: { en: 'Dry sherry', sv: 'Torr sherry', es: 'Jerez seco', fr: 'Xérès sec', de: 'Trockener Sherry' }, ratio: 1, note: { en: 'Closest flavor' } },
  ] },
  { keys: ['pasta'], subs: [
    RICE_NOODLES,
    { name: { en: 'Zucchini noodles', sv: 'Zucchininudlar', es: 'Espaguetis de calabacín', fr: 'Nouilles de courgette', de: 'Zucchininudeln' }, ratio: 1, note: { en: 'Low-carb option' } },
  ] },
  { keys: ['flour'], subs: [
    { name: { en: 'Almond flour', sv: 'Mandelmjöl', es: 'Harina de almendras', fr: "Farine d'amande", de: 'Mandelmehl' }, ratio: 1, note: { en: 'Gluten-free, works for many recipes' } },
    { name: { en: 'Oat flour', sv: 'Havremjöl', es: 'Harina de avena', fr: "Farine d'avoine", de: 'Hafermehl' }, ratio: 1, note: { en: 'Gluten-free option' } },
  ] },
  { keys: ['flour tortilla'], subs: [
    { name: { en: 'Corn tortillas', sv: 'Majstortillas', es: 'Tortillas de maíz', fr: 'Tortillas de maïs', de: 'Maistortillas' }, ratio: 1, note: { en: 'Gluten-free option' } },
  ] },
  { keys: ['potato'], subs: [
    { ...SWEET_POTATO, note: { en: 'More nutritious alternative' } },
    { name: { en: 'Cauliflower', sv: 'Blomkål', es: 'Coliflor', fr: 'Chou-fleur', de: 'Blumenkohl' }, ratio: 1, note: { en: 'Low-carb option' } },
  ] },
  { keys: ['sweet potato', 'kumara'], subs: [
    { name: { en: 'Butternut squash', sv: 'Butternutpumpa', es: 'Calabaza moscada', fr: 'Courge butternut', de: 'Butternusskürbis' }, ratio: 1, note: { en: 'Similar sweetness and texture' } },
    { ...POTATOES, note: { en: 'Less sweet' } },
  ] },
  { keys: ['potato starch'], subs: [
    { name: { en: 'Cornstarch', sv: 'Majsstärkelse', es: 'Maicena', fr: 'Fécule de maïs', de: 'Maisstärke' }, ratio: 1, note: { en: 'Same thickening power' } },
  ] },

  // Stocks
  { keys: ['stock', 'broth', 'chicken stock', 'chicken broth', 'beef stock', 'beef broth', 'lamb stock', 'fish stock', 'meat stock', 'bone broth'], subs: [VEGETABLE_STOCK, MUSHROOM_STOCK] },
  { keys: ['vegetable stock', 'vegetable broth'], subs: [MUSHROOM_STOCK] },

  // Condiments & sauces
  { keys: ['soy sauce'], subs: [
    { name: { en: 'Coconut aminos', sv: 'Kokosaminos', es: 'Aminos de coco', fr: 'Aminos de noix de coco', de: 'Kokos-Aminos' }, ratio: 1, note: { en: 'Soy-free, lower sodium' } },
    { name: { en: 'Tamari', sv: 'Tamari', es: 'Tamari', fr: 'Tamari', de: 'Tamari' }, ratio: 1, note: { en: 'Gluten-free soy sauce' } },
  ] },
  { keys: ['fish sauce'], subs: [
    { name: { en: 'Soy sauce + a squeeze of lime', sv: 'Sojasås + en skvätt lime', es: 'Salsa de soja + unas gotas de lima', fr: 'Sauce soja + un filet de citron vert', de: 'Sojasauce + ein Spritzer Limette' }, ratio: 1, note: { en: 'Vegetarian option', sv: 'Vegetariskt alternativ' } },
  ] },
  { keys: ['shrimp paste'], subs: [
    { name: { en: 'White miso paste', sv: 'Ljus misopasta', es: 'Pasta de miso blanco', fr: 'Pâte de miso blanc', de: 'Helle Misopaste' }, ratio: 1, note: { en: 'Vegan, similar umami' } },
  ] },
  { keys: ['sugar'], subs: [
    { name: { en: 'Honey', sv: 'Honung', es: 'Miel', fr: 'Miel', de: 'Honig' }, ratio: 0.75, note: { en: 'Natural sweetener' } },
    MAPLE_SYRUP,
  ] },
  { keys: ['palm sugar', 'coconut sugar', 'jaggery'], subs: [BROWN_SUGAR] },
  { keys: ['honey'], subs: [
    { ...MAPLE_SYRUP, ratio: 1, note: { en: 'Vegan option' } },
    { name: { en: 'Agave syrup', sv: 'Agavesirap', es: 'Jarabe de agave', fr: "Sirop d'agave", de: 'Agavensirup' }, ratio: 1, note: { en: 'Vegan option' } },
  ] },

  // Nuts
  { keys: ['peanut', 'groundnut'], subs: [
    { name: { en: 'Cashews', sv: 'Cashewnötter', es: 'Anacardos', fr: 'Noix de cajou', de: 'Cashewnüsse' }, ratio: 1, note: { en: 'Similar crunch' } },
    { name: { en: 'Sunflower seeds', sv: 'Solrosfrön', es: 'Semillas de girasol', fr: 'Graines de tournesol', de: 'Sonnenblumenkerne' }, ratio: 1, note: { en: 'Nut-free option' } },
  ] },
  { keys: ['peanut butter', 'peanut paste'], subs: [
    { name: { en: 'Sunflower seed butter', sv: 'Solrosfrössmör', es: 'Mantequilla de girasol', fr: 'Beurre de tournesol', de: 'Sonnenblumenkernbutter' }, ratio: 1, note: { en: 'Nut-free option' } },
    { name: { en: 'Almond butter', sv: 'Mandelsmör', es: 'Mantequilla de almendras', fr: "Purée d'amande", de: 'Mandelmus' }, ratio: 1, note: { en: 'Similar texture' } },
  ] },
  { keys: ['almond'], subs: [
    { name: { en: 'Cashews', sv: 'Cashewnötter', es: 'Anacardos', fr: 'Noix de cajou', de: 'Cashewnüsse' }, ratio: 1, note: { en: 'Similar texture' } },
  ] },

  // Common vegetables
  { keys: ['onion'], subs: [
    { name: { en: 'Shallots', sv: 'Schalottenlök', es: 'Chalotes', fr: 'Échalotes', de: 'Schalotten' }, ratio: 0.75, note: { en: 'Milder flavor' } },
  ] },
  { keys: ['spring onion', 'green onion', 'scallion'], subs: [
    { name: { en: 'Chives', sv: 'Gräslök', es: 'Cebollino', fr: 'Ciboulette', de: 'Schnittlauch' }, ratio: 1, note: { en: 'Milder, best as garnish' } },
  ] },
  { keys: ['tomato'], subs: [
    { name: { en: 'Canned tomatoes', sv: 'Tomater på burk', es: 'Tomate en lata', fr: 'Tomates en conserve', de: 'Dosentomaten' }, ratio: 1, note: { en: 'For cooked dishes' } },
    { name: { en: 'Red bell pepper', sv: 'Röd paprika', es: 'Pimiento rojo', fr: 'Poivron rouge', de: 'Rote Paprika' }, ratio: 1, note: { en: 'For fresh tomato in salads' } },
  ] },
  { keys: ['plantain'], subs: [POTATOES] },
  { keys: ['cassava', 'manioc', 'yuca'], subs: [{ ...POTATOES, note: { en: 'Similar starchy texture' } }] },
  { keys: ['cassava leaf', 'cassava leaves'], subs: [
    { name: { en: 'Spinach', sv: 'Spenat', es: 'Espinacas', fr: 'Épinards', de: 'Spinat' }, ratio: 1, note: { en: 'Milder, cooks faster' } },
    { name: { en: 'Kale', sv: 'Grönkål', es: 'Col rizada', fr: 'Chou kale', de: 'Grünkohl' }, ratio: 1, note: { en: 'Similar hearty texture' } },
  ] },
  { keys: ['yam'], subs: [SWEET_POTATO] },
  { keys: ['okra'], subs: [
    { name: { en: 'Green beans', sv: 'Haricots verts', es: 'Judías verdes', fr: 'Haricots verts', de: 'Grüne Bohnen' }, ratio: 1, note: { en: 'Without the sliminess' } },
  ] },

  // Known ingredients that merely contain a keyword above, with no good swap.
  { keys: ['irish cream', 'yogurt starter', 'pasta sheet', 'hard boiled egg', 'egg yolk', 'pearl sugar'], subs: [] },
];

/**
 * A keyword followed by one of these words names a different product
 * ("rice flour", "onion powder", "cream of tartar", "butter beans").
 */
const DIFFERENT_PRODUCT_AFTER = new Set([
  'of', 'oil', 'flour', 'meal', 'vinegar', 'wine', 'milk', 'cream', 'butter', 'cheese',
  'powder', 'paste', 'sauce', 'stock', 'broth', 'bouillon', 'cube', 'extract', 'essence',
  'syrup', 'noodle', 'water', 'leaf', 'leaves', 'starch', 'jam', 'juice', 'zest', 'seed',
  'liqueur', 'chutney', 'puree', 'gel', 'flake', 'bean', 'bone', 'starter', 'sheet',
  'tortilla', 'wrapper', 'paper', 'skin', 'sugar',
]);

/**
 * A keyword preceded by one of these words names a different product
 * ("coconut milk", "peanut butter", "sweet potato", "ice cream", "palm sugar").
 */
const DIFFERENT_PRODUCT_BEFORE = new Set([
  'coconut', 'peanut', 'almond', 'cashew', 'hazelnut', 'nut', 'palm', 'cocoa', 'shea',
  'soy', 'oat', 'rice', 'sweet', 'sour', 'ice', 'cream', 'powdered', 'icing', 'confectioner',
  'condensed', 'evaporated', 'sweetened', 'cauliflower', 'zucchini', 'flax', 'sticky', 'glutinous',
  // gluten-free flours ("cassava flour", "maize flour") need no flour swap
  'maize', 'corn', 'cassava', 'sorghum', 'millet', 'tapioca', 'chickpea', 'gram', 'teff',
  'buckwheat', 'banana', 'plantain', 'potato',
]);

function stripDiacritics(s: string): string {
  const decomposed = typeof s.normalize === 'function' ? s.normalize('NFD') : s;
  return decomposed.replace(/[̀-ͯ]/g, '');
}

/** Lowercase, strip diacritics and punctuation, collapse whitespace. */
function normalizeText(s: string): string {
  return stripDiacritics(s.toLowerCase())
    .replace(/œ/g, 'oe')
    .replace(/æ/g, 'ae')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function words(s: string): string[] {
  const n = normalizeText(s);
  return n ? n.split(' ') : [];
}

/**
 * The part of an English ingredient name that names the ingredient:
 * "For syrup: sugar" -> "sugar", "Butter, melted (or neutral oil)" -> "butter",
 * "Vegetable oil for frying" -> "vegetable oil".
 */
function coreWords(name: string): string[] {
  let s = name.toLowerCase();
  const colon = s.lastIndexOf(':');
  if (colon >= 0) s = s.slice(colon + 1);
  s = s.replace(/\([^)]*\)/g, ' ').split(',')[0];
  const w = words(s);
  const cut = w.findIndex((x, i) => i > 0 && (x === 'for' || x === 'to'));
  return cut > 0 ? w.slice(0, cut) : w;
}

/** Word equality that tolerates simple English plurals (egg/eggs, potato/potatoes). */
function wordMatches(text: string, key: string): boolean {
  return text === key || text === `${key}s` || text === `${key}es` ||
    (key.endsWith('f') && text === `${key.slice(0, -1)}ves`) ||
    (key.endsWith('y') && text === `${key.slice(0, -1)}ies`);
}

function singular(word: string): string {
  if (word.endsWith('ies') && word.length > 4) return `${word.slice(0, -3)}y`;
  if (word.endsWith('oes') && word.length > 4) return word.slice(0, -2);
  if (word.endsWith('s') && !word.endsWith('ss') && word.length > 3) return word.slice(0, -1);
  return word;
}

/** All start indexes where the key's words appear consecutively in `text`. */
function findPhrase(text: string[], key: string[]): number[] {
  const hits: number[] = [];
  for (let i = 0; i + key.length <= text.length; i++) {
    if (key.every((k, j) => wordMatches(text[i + j], k))) hits.push(i);
  }
  return hits;
}

function containsPhrase(text: string[], phrase: string[]): boolean {
  return phrase.length > 0 && findPhrase(text, phrase).length > 0;
}

export type KeyMatch<T> = {
  value: T;
  /** Index of the first matched word. */
  start: number;
  /** Number of words matched. */
  wordCount: number;
  /** Specificity: character length of the matched key. */
  length: number;
  order: number;
};

/**
 * Find whole-word/phrase occurrences of `keys` in `nameWords`, most specific
 * first: longer keys win, then earlier position, then declaration order.
 * A key directly preceded or followed by a word that turns it into a different
 * product ("coconut milk", "rice flour") does not count.
 */
export type ProductRules = { before: Set<string>; after: Set<string> };

export function findKeyMatches<T>(
  nameWords: string[],
  keys: { key: string; value: T }[],
  rules: ProductRules = { before: DIFFERENT_PRODUCT_BEFORE, after: DIFFERENT_PRODUCT_AFTER },
): KeyMatch<T>[] {
  const matches: KeyMatch<T>[] = [];
  keys.forEach(({ key, value }, order) => {
    const keyWords = key.split(' ');
    for (const start of findPhrase(nameWords, keyWords)) {
      const before = nameWords[start - 1];
      const after = nameWords[start + keyWords.length];
      if (before && rules.before.has(singular(before))) continue;
      if (after && rules.after.has(singular(after))) continue;
      matches.push({ value, start, wordCount: keyWords.length, length: key.length, order });
    }
  });
  return matches.sort((a, b) => b.length - a.length || a.start - b.start || a.order - b.order);
}

const DB_KEYS = SUBSTITUTION_DB.flatMap(entry =>
  entry.keys.map(key => ({ key: normalizeText(key), value: entry })),
);

/**
 * Look up substitutions for a given ingredient name (matched on the English name).
 * The most specific matching keyword wins, and a suggestion that is the
 * ingredient itself (or an alternative the recipe already lists) is never returned.
 */
export function getSubstitutions(ingredientName: TranslatedString): IngredientSubstitution[] {
  const name = typeof ingredientName === 'string' ? ingredientName : ingredientName?.en;
  if (!name) return [];

  const core = coreWords(name);
  const all = words(name);
  const candidates = findKeyMatches(core, DB_KEYS).filter(({ value }) =>
    (!value.requires || value.requires.some(w => all.includes(w))) &&
    !(value.skipIf || []).some(w => all.includes(w)),
  );

  const taken: [number, number][] = [];
  for (const c of candidates) {
    const span: [number, number] = [c.start, c.start + c.wordCount];
    if (taken.some(([s, e]) => span[0] < e && s < span[1])) continue;
    if (c.value.subs.length === 0) return [];

    const subs = c.value.subs.filter(sub => {
      const subName = typeof sub.name === 'string' ? sub.name : sub.name.en;
      return !containsPhrase(all, coreWords(subName));
    });
    if (subs.length > 0) return subs;
    // Every suggestion is already in the recipe ("lamb or beef" -> beef):
    // fall back to another ingredient named in the text.
    taken.push(span);
  }

  return [];
}

/**
 * Enrich recipe ingredients with substitution data from the database.
 * Returns the same ingredients array but with substitutions populated.
 */
export function enrichWithSubstitutions(
  ingredients: { name: TranslatedString; amount: number; unit: TranslatedString; substitutions?: IngredientSubstitution[] }[],
): typeof ingredients {
  return ingredients.map(ing => {
    // If already has substitutions from data, keep them
    if (ing.substitutions && ing.substitutions.length > 0) return ing;

    const subs = getSubstitutions(ing.name);

    if (subs.length > 0) {
      return { ...ing, substitutions: subs };
    }

    return ing;
  });
}

/** Helpers shared with other English-name matchers (e.g. nutrition). */
export { normalizeText as normalizeIngredientText, coreWords as ingredientCoreWords };
