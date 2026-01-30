import { z } from 'zod';
import { publicProcedure } from '../../../create-context';
import { countriesDB } from '@/backend/db/countries-db';

const recipeSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  cookingTime: z.number(),
  servings: z.number(),
  dietType: z.enum(['meat', 'fish', 'vegetarian', 'vegan']),
  difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
  ingredients: z.array(z.object({
    name: z.string(),
    amount: z.number(),
    unit: z.string(),
  })),
  steps: z.array(z.string()),
  imageUrl: z.string().optional(),
});

const countrySchema = z.object({
  id: z.string(),
  name: z.string(),
  code: z.string(),
  continent: z.string(),
  flag: z.string(),
  landscapeImage: z.string().optional(),
  description: z.string(),
  facts: z.array(z.string()),
  foodCulture: z.string(),
  mainDish: recipeSchema,
  dessert: recipeSchema.optional(),
  drinks: z.object({
    alcoholic: z.string(),
    nonAlcoholic: z.string(),
  }),
  music: z.array(z.string()),
  decorationIdeas: z.array(z.string()),
  conversationStarters: z.array(z.string()),
  quiz: z.array(z.object({
    id: z.string(),
    question: z.string(),
    options: z.array(z.string()),
    correctAnswer: z.number(),
  })),
  coordinates: z.object({
    x: z.number(),
    y: z.number(),
  }).optional(),
});

export default publicProcedure
  .input(z.object({
    countries: z.array(countrySchema),
  }))
  .mutation(async ({ input }) => {
    const created = await countriesDB.bulkCreate(input.countries);
    return { created: created.length, total: input.countries.length };
  });
