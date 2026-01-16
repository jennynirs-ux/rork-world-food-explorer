import { Country } from '@/types';

export const marshallIslands: Country = {
  id: 'marshall-islands',
  name: 'Marshall Islands',
  code: 'MH',
  continent: 'Oceania',
  flag: '🇲🇭',
  landscapeImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
  description: 'The Marshall Islands is a Pacific island nation known for pristine atolls, WWII history, and traditional navigation techniques.',
  quickFacts: [
    { label: 'Capital', value: 'Majuro' },
    { label: 'Population', value: '59,000' },
    { label: 'Official Languages', value: 'Marshallese, English' },
    { label: 'Currency', value: 'US Dollar' },
    { label: 'Area', value: '181 km²' },
  ],
  facts: [
    'Bikini Atoll was a nuclear test site',
    'Traditional stick chart navigation is unique',
    'Has some of the best diving in the Pacific',
    'Consists of 29 atolls and 5 islands',
  ],
  foodCulture: 'Marshallese cuisine features fish, breadfruit, taro, and coconut.',
  mainDish: {
    id: 'marshall-islands-main',
    name: 'Barramundi Ko',
    description: 'Baked coconut fish with rice',
    cookingTime: 45,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'White fish', amount: 600, unit: 'g' },
      { name: 'Coconut cream', amount: 400, unit: 'ml' },
      { name: 'Rice', amount: 300, unit: 'g' },
      { name: 'Onions', amount: 1, unit: 'whole' },
      { name: 'Lime', amount: 2, unit: 'whole' },
    ],
    steps: [
      'Marinate fish in lime juice',
      'Layer rice in baking dish',
      'Place fish on rice',
      'Pour coconut cream over',
      'Bake at 350°F for 30 minutes',
      'Serve with fresh vegetables',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559737558-2f5a2f7e8c59?w=600',
  },
  drinks: {
    alcoholic: 'Toddy (palm wine)',
    nonAlcoholic: 'Coconut water, Fresh juice',
  },
  music: [
    'Traditional chants',
    'Pacific island rhythms',
    'Contemporary Marshallese pop',
  ],
  decorationIdeas: [
    'Orange, white and blue flag colors',
    'Ocean and atoll imagery',
    'Traditional stick charts',
    'Tropical themes',
  ],
  conversationStarters: [
    'What do you know about Pacific atolls?',
    'Have you heard of traditional navigation?',
  ],
  quiz: [
    {
      id: 'marshall-islands-q1',
      question: 'What is the capital of Marshall Islands?',
      options: ['Majuro', 'Ebeye', 'Bikini', 'Jaluit'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 90, y: 22 },
};
