import { useMemo } from 'react';
import { Country, Recipe } from '@/types';
import { translateContent, translateArray } from './translate-content';

type TranslatedRecipe = Omit<Recipe, 'name' | 'description' | 'ingredients' | 'steps'> & {
  name: string;
  description: string;
  ingredients: { name: string; amount: number; unit: string; }[];
  steps: string[];
};

type TranslatedCountry = Omit<Country, 'name' | 'description' | 'facts' | 'foodCulture' | 'history' | 'innovations' | 'mustVisit' | 'travelEssentials' | 'mainDish' | 'dessert' | 'drinks' | 'decorationIdeas' | 'conversationStarters' | 'quiz'> & {
  name: string;
  description: string;
  facts: string[];
  foodCulture: string;
  history?: { year: string; title: string; description: string; }[];
  innovations?: { name: string; year: string; description: string; }[];
  mustVisit?: { name: string; description: string; imageUrl?: string; }[];
  travelEssentials?: { item: string; description: string; }[];
  mainDish: TranslatedRecipe;
  dessert?: TranslatedRecipe;
  drinks: { alcoholic: string; nonAlcoholic: string; };
  decorationIdeas: string[];
  conversationStarters: string[];
  quiz: { id: string; question: string; options: string[]; correctAnswer: number; }[];
};

export function useTranslatedCountry(country: Country | undefined, language: string): TranslatedCountry | undefined {
  return useMemo(() => {
    if (!country) return undefined;

    const translateRecipe = (recipe: Recipe | undefined): TranslatedRecipe | undefined => {
      if (!recipe) return undefined;
      return {
        ...recipe,
        name: translateContent(recipe.name, language),
        description: translateContent(recipe.description, language),
        ingredients: recipe.ingredients.map(ing => ({
          name: translateContent(ing.name, language),
          amount: ing.amount,
          unit: ing.unit,
        })),
        steps: recipe.steps.map(step => translateContent(step, language)),
      };
    };

    return {
      ...country,
      name: translateContent(country.name, language),
      description: translateContent(country.description, language),
      facts: translateArray(country.facts, language),
      foodCulture: translateContent(country.foodCulture, language),
      history: country.history?.map(event => ({
        year: event.year,
        title: translateContent(event.title, language),
        description: translateContent(event.description, language),
      })),
      innovations: country.innovations?.map(innovation => ({
        name: translateContent(innovation.name, language),
        year: innovation.year,
        description: translateContent(innovation.description, language),
      })),
      mustVisit: country.mustVisit?.map(place => ({
        name: translateContent(place.name, language),
        description: translateContent(place.description, language),
        imageUrl: place.imageUrl,
      })),
      travelEssentials: country.travelEssentials?.map(essential => ({
        item: translateContent(essential.item, language),
        description: translateContent(essential.description, language),
      })),
      mainDish: translateRecipe(country.mainDish)!,
      dessert: translateRecipe(country.dessert),
      drinks: {
        alcoholic: translateContent(country.drinks.alcoholic, language),
        nonAlcoholic: translateContent(country.drinks.nonAlcoholic, language),
      },
      decorationIdeas: translateArray(country.decorationIdeas, language),
      conversationStarters: translateArray(country.conversationStarters, language),
      quiz: country.quiz.map(q => ({
        id: q.id,
        question: translateContent(q.question, language),
        options: q.options.map(opt => translateContent(opt, language)),
        correctAnswer: q.correctAnswer,
      })),
    };
  }, [country, language]);
}
