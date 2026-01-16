import { Country } from '@/types';

export const nauru: Country = {
  id: 'nauru',
  name: 'Nauru',
  code: 'NR',
  continent: 'Oceania',
  flag: '🇳🇷',
  landscapeImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
  description: 'Nauru is the world\'s smallest island nation, known for phosphate mining history and unique challenges.',
  quickFacts: [
    { label: 'Capital', value: 'Yaren (de facto)' },
    { label: 'Population', value: '12,000' },
    { label: 'Official Languages', value: 'Nauruan, English' },
    { label: 'Currency', value: 'Australian Dollar' },
    { label: 'Area', value: '21 km²' },
  ],
  facts: [
    'The world\'s smallest island nation',
    'Has no official capital city',
    'Was once one of the richest countries due to phosphate',
    'Environmental damage from mining',
  ],
  foodCulture: 'Nauruan cuisine features fish, coconut, and imported foods.',
  mainDish: {
    id: 'nauru-main',
    name: 'Ika Mata',
    description: 'Raw fish marinated in coconut cream',
    cookingTime: 30,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'Fresh tuna', amount: 500, unit: 'g' },
      { name: 'Coconut cream', amount: 400, unit: 'ml' },
      { name: 'Limes', amount: 4, unit: 'whole' },
      { name: 'Tomatoes', amount: 2, unit: 'whole' },
      { name: 'Onions', amount: 1, unit: 'whole' },
    ],
    steps: [
      'Dice fish into cubes',
      'Marinate in lime juice for 20 minutes',
      'Drain excess lime juice',
      'Add coconut cream',
      'Mix in diced tomatoes and onions',
      'Serve chilled',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559737558-2f5a2f7e8c59?w=600',
  },
  drinks: {
    alcoholic: 'Beer',
    nonAlcoholic: 'Coconut water, Fresh juice',
  },
  music: [
    'Pacific island songs',
    'Traditional chants',
  ],
  decorationIdeas: [
    'Blue and yellow flag colors',
    'Ocean themes',
    'Tropical imagery',
  ],
  conversationStarters: [
    'What do you know about small island nations?',
    'Have you heard of phosphate mining?',
  ],
  quiz: [
    {
      id: 'nauru-q1',
      question: 'What is unique about Nauru\'s size?',
      options: ['Largest island', 'Smallest island nation', 'Highest peak', 'Longest beach'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 91, y: 19 },
};
