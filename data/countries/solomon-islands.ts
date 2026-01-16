import { Country } from '@/types';

export const solomonIslands: Country = {
  id: 'solomon-islands',
  name: 'Solomon Islands',
  code: 'SB',
  continent: 'Oceania',
  flag: '🇸🇧',
  landscapeImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
  description: 'Solomon Islands is a Pacific nation of nearly 1,000 islands, known for WWII history, diving, and traditional Melanesian culture.',
  quickFacts: [
    { label: 'Capital', value: 'Honiara' },
    { label: 'Population', value: '700,000' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'Solomon Islands Dollar' },
    { label: 'Area', value: '28,896 km²' },
  ],
  facts: [
    'Site of major WWII Pacific battles',
    'Over 900 islands',
    'World-class diving with WWII wrecks',
    'Rich in traditional shell money culture',
  ],
  foodCulture: 'Solomon Islander cuisine features fish, taro, sweet potato, and coconut.',
  mainDish: {
    id: 'solomon-islands-main',
    name: 'Poi',
    description: 'Pudding made from fermented taro and banana',
    cookingTime: 120,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Taro', amount: 1, unit: 'kg' },
      { name: 'Bananas', amount: 6, unit: 'whole' },
      { name: 'Coconut cream', amount: 400, unit: 'ml' },
      { name: 'Sugar', amount: 100, unit: 'g' },
    ],
    steps: [
      'Boil taro until soft',
      'Mash taro and bananas together',
      'Mix with coconut cream',
      'Add sugar to taste',
      'Allow to ferment slightly',
      'Serve chilled or warm',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600',
  },
  drinks: {
    alcoholic: 'Kava, Local beer',
    nonAlcoholic: 'Coconut water, Fresh juice',
  },
  music: [
    'Traditional panpipe music',
    'Melanesian chants',
    'Contemporary Pacific pop',
  ],
  decorationIdeas: [
    'Blue, green and yellow flag colors',
    'Ocean and island themes',
    'WWII historical elements',
    'Shell money decorations',
  ],
  conversationStarters: [
    'What do you know about WWII in the Pacific?',
    'Have you been diving?',
  ],
  quiz: [
    {
      id: 'solomon-islands-q1',
      question: 'What is the capital of Solomon Islands?',
      options: ['Honiara', 'Suva', 'Port Vila', 'Apia'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 90, y: 15 },
};
