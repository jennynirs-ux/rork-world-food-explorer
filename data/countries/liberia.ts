import { Country } from '@/types';

export const liberia: Country = {
  id: 'liberia',
  name: 'Liberia',
  code: 'LR',
  continent: 'Africa',
  flag: '🇱🇷',
  landscapeImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
  description: 'Liberia is a West African country founded by freed American slaves, known for its unique history, tropical forests, and surf beaches.',
  quickFacts: [
    { label: 'Capital', value: 'Monrovia' },
    { label: 'Population', value: '5.2 million' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'Liberian Dollar' },
    { label: 'Area', value: '111,369 km²' },
  ],
  facts: [
    'Founded by freed American slaves in 1847',
    'Africa\'s first republic',
    'Has a flag similar to the United States',
    'Rich in rubber, timber, and iron ore',
  ],
  foodCulture: 'Liberian cuisine blends African and American Southern influences with rice, cassava, and palm oil.',
  mainDish: {
    id: 'liberia-main',
    name: 'Jollof Rice',
    description: 'Spiced rice with tomatoes and vegetables',
    cookingTime: 60,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Rice', amount: 500, unit: 'g' },
      { name: 'Tomato paste', amount: 200, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Bell peppers', amount: 2, unit: 'whole' },
      { name: 'Scotch bonnet pepper', amount: 1, unit: 'whole' },
      { name: 'Palm oil', amount: 3, unit: 'tbsp' },
    ],
    steps: [
      'Sauté onions and peppers in palm oil',
      'Add tomato paste and spices',
      'Add rice and water',
      'Cover and simmer until rice absorbs liquid',
      'Fluff with fork',
      'Serve with fried plantains',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600',
  },
  drinks: {
    alcoholic: 'Palm wine, Club Beer',
    nonAlcoholic: 'Ginger beer, Fresh coconut water',
  },
  music: [
    'Hipco (Liberian hip-hop)',
    'Traditional drum music',
    'Gospel music',
  ],
  decorationIdeas: [
    'Red, white and blue flag colors',
    'Palm tree imagery',
    'Coastal themes',
    'Traditional masks',
  ],
  conversationStarters: [
    'What do you know about Liberia\'s unique history?',
    'Have you explored West African beaches?',
  ],
  quiz: [
    {
      id: 'liberia-q1',
      question: 'What is the capital of Liberia?',
      options: ['Monrovia', 'Freetown', 'Conakry', 'Accra'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 45, y: 18 },
};
