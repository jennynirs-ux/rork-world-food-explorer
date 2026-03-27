import { z } from 'zod';
import { adminProcedure } from '../../../create-context';
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

export default adminProcedure
  .input(z.object({
    id: z.string(),
    updates: z.object({
      name: z.string().optional(),
      description: z.string().optional(),
      facts: z.array(z.string()).optional(),
      foodCulture: z.string().optional(),
      mainDish: recipeSchema.optional(),
      dessert: recipeSchema.optional(),
      drinks: z.object({
        alcoholic: z.string(),
        nonAlcoholic: z.string(),
      }).optional(),
      music: z.array(z.string()).optional(),
      decorationIdeas: z.array(z.string()).optional(),
      conversationStarters: z.array(z.string()).optional(),
      quiz: z.array(z.object({
        id: z.string(),
        question: z.string(),
        options: z.array(z.string()),
        correctAnswer: z.number(),
      })).optional(),
      landscapeImage: z.string().optional(),
    }),
  }))
  .mutation(async ({ input }) => {
    const country = await countriesDB.update(input.id, input.updates);
    return country;
  });
