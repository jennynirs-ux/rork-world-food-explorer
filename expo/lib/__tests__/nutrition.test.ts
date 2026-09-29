import { Recipe } from '@/types';
import { estimateNutrition } from '../nutrition';

const recipeWith = (ingredients: [string, number, string][]): Recipe => ({
  id: 'test',
  name: 'Test',
  description: '',
  cookingTime: 10,
  servings: 1,
  dietType: 'vegetarian',
  steps: [],
  ingredients: ingredients.map(([name, amount, unit]) => ({ name, amount, unit })),
});

describe('estimateNutrition', () => {
  it('matches whole words only', () => {
    // 100 g eggplant is ~25 kcal; the old substring match used egg (155 kcal).
    expect(estimateNutrition(recipeWith([['Eggplant', 100, 'g']])).caloriesPerServing).toBe(25);
    // "boiling water" is not oil, "goat" is not oat.
    expect(estimateNutrition(recipeWith([['Boiling water', 1, 'cup']])).caloriesPerServing).toBe(0);
    expect(estimateNutrition(recipeWith([['Goat meat', 100, 'g']])).caloriesPerServing).toBe(0);
  });

  it('prefers the most specific key and handles plurals', () => {
    expect(estimateNutrition(recipeWith([['Black pepper', 1, 'tsp']])).caloriesPerServing).toBe(0);
    expect(estimateNutrition(recipeWith([['Eggs', 100, 'g']])).caloriesPerServing).toBe(155);
    expect(estimateNutrition(recipeWith([['Coconut milk', 100, 'ml']])).caloriesPerServing).toBe(197);
    expect(estimateNutrition(recipeWith([['Chicken stock', 100, 'ml']])).caloriesPerServing).toBe(7);
    expect(estimateNutrition(recipeWith([['Unsalted butter', 100, 'g']])).caloriesPerServing).toBe(717);
  });
});
