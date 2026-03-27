import { z } from 'zod';
import { adminProcedure } from '../../../create-context';
import { countriesDB } from '@/backend/db/countries-db';

// TranslatedString: either a plain string or an object with language keys
const translatedStringSchema = z.union([
  z.string(),
  z.object({
    en: z.string(),
    sv: z.string().optional(),
    es: z.string().optional(),
    fr: z.string().optional(),
    de: z.string().optional(),
    it: z.string().optional(),
    pl: z.string().optional(),
    nl: z.string().optional(),
    pt: z.string().optional(),
  }),
]);

const translatedDietTypeSchema = z.union([
  z.enum(['meat', 'fish', 'vegetarian', 'vegan']),
  z.object({
    en: z.string(),
    sv: z.string().optional(),
    es: z.string().optional(),
    fr: z.string().optional(),
    de: z.string().optional(),
    it: z.string().optional(),
    pl: z.string().optional(),
    nl: z.string().optional(),
    pt: z.string().optional(),
  }),
]);

const recipeSchema = z.object({
  id: z.string(),
  name: translatedStringSchema,
  description: translatedStringSchema,
  cookingTime: z.number(),
  servings: z.number(),
  dietType: translatedDietTypeSchema,
  difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
  ingredients: z.array(z.object({
    name: translatedStringSchema,
    amount: z.number(),
    unit: translatedStringSchema,
  })),
  steps: z.array(translatedStringSchema),
  imageUrl: z.string().optional(),
});

const countrySchema = z.object({
  id: z.string(),
  name: translatedStringSchema,
  code: z.string(),
  continent: translatedStringSchema,
  flag: z.string(),
  landscapeImage: z.string().optional(),
  description: translatedStringSchema,
  quickFacts: z.array(z.object({
    label: translatedStringSchema,
    value: translatedStringSchema,
  })).optional(),
  facts: z.array(translatedStringSchema),
  foodCulture: translatedStringSchema,
  history: z.array(z.object({
    year: translatedStringSchema,
    title: translatedStringSchema,
    description: translatedStringSchema,
  })).optional(),
  innovations: z.array(z.object({
    name: translatedStringSchema,
    year: translatedStringSchema,
    description: translatedStringSchema,
  })).optional(),
  mustVisit: z.array(z.object({
    name: translatedStringSchema,
    description: translatedStringSchema,
    imageUrl: z.string().optional(),
  })).optional(),
  travelEssentials: z.array(z.object({
    item: translatedStringSchema,
    description: translatedStringSchema,
  })).optional(),
  mainDish: recipeSchema,
  dessert: recipeSchema.optional(),
  drinks: z.object({
    alcoholic: translatedStringSchema,
    nonAlcoholic: translatedStringSchema,
  }),
  music: z.array(translatedStringSchema),
  decorationIdeas: z.array(translatedStringSchema),
  conversationStarters: z.array(translatedStringSchema),
  quiz: z.array(z.object({
    id: z.string(),
    question: translatedStringSchema,
    options: z.array(translatedStringSchema),
    correctAnswer: z.number(),
  })),
  coordinates: z.object({
    x: z.number(),
    y: z.number(),
  }).optional(),
  isUnlockedByDefault: z.boolean().optional(),
});

export default adminProcedure
  .input(z.object({
    countries: z.array(countrySchema),
  }))
  .mutation(async ({ input }) => {
    // Atomic replace: writes to disk first, then swaps in-memory.
    // If the disk write fails, old data is preserved — no data loss.
    const count = await countriesDB.replaceAll(input.countries);
    return { updated: count, total: input.countries.length };
  });
