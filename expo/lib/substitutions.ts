import { TranslatedString, IngredientSubstitution } from '@/types';

/**
 * Common ingredient substitution database.
 * Keyed by lowercase English ingredient keyword.
 * Each entry is an array of possible substitutions.
 */
const SUBSTITUTION_DB: Record<string, IngredientSubstitution[]> = {
  // Dairy
  butter: [
    { name: { en: 'Coconut oil', sv: 'Kokosolja', es: 'Aceite de coco', fr: 'Huile de coco', de: 'Kokosöl' }, ratio: 1, note: { en: 'Dairy-free option', sv: 'Mejerifritt alternativ' } },
    { name: { en: 'Olive oil', sv: 'Olivolja', es: 'Aceite de oliva', fr: "Huile d'olive", de: 'Olivenöl' }, ratio: 0.75, note: { en: 'For cooking, not baking', sv: 'För matlagning, inte bakning' } },
  ],
  cream: [
    { name: { en: 'Coconut cream', sv: 'Kokosgrädde', es: 'Crema de coco', fr: 'Crème de coco', de: 'Kokoscreme' }, ratio: 1, note: { en: 'Dairy-free option', sv: 'Mejerifritt alternativ' } },
    { name: { en: 'Cashew cream', sv: 'Cashewgrädde', es: 'Crema de anacardos', fr: 'Crème de cajou', de: 'Cashewcreme' }, ratio: 1, note: { en: 'Vegan option', sv: 'Veganskt alternativ' } },
  ],
  milk: [
    { name: { en: 'Oat milk', sv: 'Havremjölk', es: 'Leche de avena', fr: "Lait d'avoine", de: 'Hafermilch' }, ratio: 1, note: { en: 'Dairy-free option', sv: 'Mejerifritt alternativ' } },
    { name: { en: 'Coconut milk', sv: 'Kokosmjölk', es: 'Leche de coco', fr: 'Lait de coco', de: 'Kokosmilch' }, ratio: 1, note: { en: 'Adds richness', sv: 'Ger fylligare smak' } },
  ],
  cheese: [
    { name: { en: 'Nutritional yeast', sv: 'Näringsjäst', es: 'Levadura nutricional', fr: 'Levure nutritionnelle', de: 'Hefeflocken' }, ratio: 0.3, note: { en: 'For cheesy flavor', sv: 'För ostsmak' } },
  ],
  yogurt: [
    { name: { en: 'Coconut yogurt', sv: 'Kokosyoghurt', es: 'Yogur de coco', fr: 'Yaourt de coco', de: 'Kokosjoghurt' }, ratio: 1, note: { en: 'Dairy-free option' } },
    { name: { en: 'Sour cream', sv: 'Gräddfil', es: 'Crema agria', fr: 'Crème aigre', de: 'Saure Sahne' }, ratio: 1, note: { en: 'Similar tanginess' } },
  ],

  // Proteins
  beef: [
    { name: { en: 'Mushrooms', sv: 'Svamp', es: 'Champiñones', fr: 'Champignons', de: 'Pilze' }, ratio: 1, note: { en: 'Vegetarian option, similar umami', sv: 'Vegetariskt alternativ' } },
    { name: { en: 'Lentils', sv: 'Linser', es: 'Lentejas', fr: 'Lentilles', de: 'Linsen' }, ratio: 0.8, note: { en: 'Plant-based protein', sv: 'Växtbaserat protein' } },
  ],
  chicken: [
    { name: { en: 'Tofu', sv: 'Tofu', es: 'Tofu', fr: 'Tofu', de: 'Tofu' }, ratio: 1, note: { en: 'Vegetarian option', sv: 'Vegetariskt alternativ' } },
    { name: { en: 'Chickpeas', sv: 'Kikärtor', es: 'Garbanzos', fr: 'Pois chiches', de: 'Kichererbsen' }, ratio: 1, note: { en: 'Plant-based option' } },
  ],
  pork: [
    { name: { en: 'Turkey', sv: 'Kalkon', es: 'Pavo', fr: 'Dinde', de: 'Truthahn' }, ratio: 1, note: { en: 'Leaner alternative' } },
    { name: { en: 'Jackfruit', sv: 'Jackfrukt', es: 'Jaca', fr: 'Jacquier', de: 'Jackfrucht' }, ratio: 1, note: { en: 'Vegan option, similar texture' } },
  ],
  lamb: [
    { name: { en: 'Beef', sv: 'Nötkött', es: 'Carne de res', fr: 'Bœuf', de: 'Rindfleisch' }, ratio: 1, note: { en: 'More widely available' } },
  ],
  fish: [
    { name: { en: 'Tofu', sv: 'Tofu', es: 'Tofu', fr: 'Tofu', de: 'Tofu' }, ratio: 1, note: { en: 'Vegetarian option' } },
  ],
  shrimp: [
    { name: { en: 'King oyster mushrooms', sv: 'Kungsmusseron', es: 'Seta de ostra', fr: 'Pleurote du panicaut', de: 'Kräuterseitling' }, ratio: 1, note: { en: 'Similar texture when sliced' } },
  ],
  egg: [
    { name: { en: 'Flax egg (1 tbsp ground flax + 3 tbsp water)', sv: 'Linfrö-ägg (1 msk malet linfrö + 3 msk vatten)', es: 'Huevo de lino', fr: 'Œuf de lin', de: 'Leinsamen-Ei' }, ratio: 1, note: { en: 'Vegan baking substitute' } },
  ],

  // Grains & starches
  rice: [
    { name: { en: 'Cauliflower rice', sv: 'Blomkålsris', es: 'Arroz de coliflor', fr: 'Riz de chou-fleur', de: 'Blumenkohlreis' }, ratio: 1, note: { en: 'Low-carb option', sv: 'Lågkolhydratalternativ' } },
    { name: { en: 'Quinoa', sv: 'Quinoa', es: 'Quinoa', fr: 'Quinoa', de: 'Quinoa' }, ratio: 1, note: { en: 'Higher protein', sv: 'Mer protein' } },
  ],
  pasta: [
    { name: { en: 'Rice noodles', sv: 'Risnudlar', es: 'Fideos de arroz', fr: 'Nouilles de riz', de: 'Reisnudeln' }, ratio: 1, note: { en: 'Gluten-free option' } },
    { name: { en: 'Zucchini noodles', sv: 'Zucchininudlar', es: 'Espaguetis de calabacín', fr: 'Nouilles de courgette', de: 'Zucchininudeln' }, ratio: 1, note: { en: 'Low-carb option' } },
  ],
  flour: [
    { name: { en: 'Almond flour', sv: 'Mandelmjöl', es: 'Harina de almendras', fr: "Farine d'amande", de: 'Mandelmehl' }, ratio: 1, note: { en: 'Gluten-free, works for many recipes' } },
    { name: { en: 'Oat flour', sv: 'Havremjöl', es: 'Harina de avena', fr: "Farine d'avoine", de: 'Hafermehl' }, ratio: 1, note: { en: 'Gluten-free option' } },
  ],
  potato: [
    { name: { en: 'Sweet potato', sv: 'Sötpotatis', es: 'Batata', fr: 'Patate douce', de: 'Süßkartoffel' }, ratio: 1, note: { en: 'More nutritious alternative' } },
    { name: { en: 'Cauliflower', sv: 'Blomkål', es: 'Coliflor', fr: 'Chou-fleur', de: 'Blumenkohl' }, ratio: 1, note: { en: 'Low-carb option' } },
  ],

  // Condiments & sauces
  'soy sauce': [
    { name: { en: 'Coconut aminos', sv: 'Kokosaminos', es: 'Aminos de coco', fr: 'Aminos de noix de coco', de: 'Kokos-Aminos' }, ratio: 1, note: { en: 'Soy-free, lower sodium' } },
    { name: { en: 'Tamari', sv: 'Tamari', es: 'Tamari', fr: 'Tamari', de: 'Tamari' }, ratio: 1, note: { en: 'Gluten-free soy sauce' } },
  ],
  sugar: [
    { name: { en: 'Honey', sv: 'Honung', es: 'Miel', fr: 'Miel', de: 'Honig' }, ratio: 0.75, note: { en: 'Natural sweetener' } },
    { name: { en: 'Maple syrup', sv: 'Lönnsirap', es: 'Jarabe de arce', fr: "Sirop d'érable", de: 'Ahornsirup' }, ratio: 0.75, note: { en: 'Vegan natural sweetener' } },
  ],
  honey: [
    { name: { en: 'Maple syrup', sv: 'Lönnsirap', es: 'Jarabe de arce', fr: "Sirop d'érable", de: 'Ahornsirup' }, ratio: 1, note: { en: 'Vegan option' } },
    { name: { en: 'Agave syrup', sv: 'Agavesirap', es: 'Jarabe de agave', fr: "Sirop d'agave", de: 'Agavensirup' }, ratio: 1, note: { en: 'Vegan option' } },
  ],

  // Nuts
  peanut: [
    { name: { en: 'Sunflower seed butter', sv: 'Solrosfrössmör', es: 'Mantequilla de girasol', fr: 'Beurre de tournesol', de: 'Sonnenblumenkernbutter' }, ratio: 1, note: { en: 'Nut-free option' } },
  ],
  almond: [
    { name: { en: 'Cashews', sv: 'Cashewnötter', es: 'Anacardos', fr: 'Noix de cajou', de: 'Cashewnüsse' }, ratio: 1, note: { en: 'Similar texture' } },
  ],
  coconut: [
    { name: { en: 'Greek yogurt', sv: 'Grekisk yoghurt', es: 'Yogur griego', fr: 'Yaourt grec', de: 'Griechischer Joghurt' }, ratio: 1, note: { en: 'For coconut cream/milk in curries' } },
  ],

  // Common vegetables
  onion: [
    { name: { en: 'Shallots', sv: 'Schalottenlök', es: 'Chalotes', fr: 'Échalotes', de: 'Schalotten' }, ratio: 0.75, note: { en: 'Milder flavor' } },
  ],
  tomato: [
    { name: { en: 'Red bell pepper', sv: 'Röd paprika', es: 'Pimiento rojo', fr: 'Poivron rouge', de: 'Rote Paprika' }, ratio: 1, note: { en: 'For fresh tomato in salads' } },
  ],
  plantain: [
    { name: { en: 'Potatoes', sv: 'Potatis', es: 'Papas', fr: 'Pommes de terre', de: 'Kartoffeln' }, ratio: 1, note: { en: 'More widely available' } },
  ],
  cassava: [
    { name: { en: 'Potatoes', sv: 'Potatis', es: 'Papas', fr: 'Pommes de terre', de: 'Kartoffeln' }, ratio: 1, note: { en: 'Similar starchy texture' } },
  ],
  yam: [
    { name: { en: 'Sweet potato', sv: 'Sötpotatis', es: 'Batata', fr: 'Patate douce', de: 'Süßkartoffel' }, ratio: 1, note: { en: 'Similar texture and flavor' } },
  ],
  okra: [
    { name: { en: 'Green beans', sv: 'Haricots verts', es: 'Judías verdes', fr: 'Haricots verts', de: 'Grüne Bohnen' }, ratio: 1, note: { en: 'Without the sliminess' } },
  ],
};

/**
 * Look up substitutions for a given ingredient name.
 * Matches against English name keywords.
 */
export function getSubstitutions(ingredientName: string): IngredientSubstitution[] {
  const lower = typeof ingredientName === 'string'
    ? ingredientName.toLowerCase()
    : (ingredientName as { en: string }).en.toLowerCase();

  // Try exact multi-word keys first (e.g. "soy sauce")
  for (const key of Object.keys(SUBSTITUTION_DB)) {
    if (key.includes(' ') && lower.includes(key)) {
      return SUBSTITUTION_DB[key];
    }
  }

  // Then single-word keys
  for (const key of Object.keys(SUBSTITUTION_DB)) {
    if (!key.includes(' ') && lower.includes(key)) {
      return SUBSTITUTION_DB[key];
    }
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

    const engName = typeof ing.name === 'string' ? ing.name : ing.name.en;
    const subs = getSubstitutions(engName);

    if (subs.length > 0) {
      return { ...ing, substitutions: subs };
    }

    return ing;
  });
}
