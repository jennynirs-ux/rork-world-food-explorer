import { Country } from '@/types';

export const iraq: Country = {
  id: 'iraq',
  name: 'Iraq',
  code: 'IQ',
  continent: 'Asia',
  flag: '🇮🇶',
  landscapeImage: 'https://images.unsplash.com/photo-1578070181910-f1e514afdd08?w=800',
  description: 'Iraq is the cradle of civilization, home to ancient Mesopotamia, the Tigris and Euphrates rivers, and rich historical heritage.',
  quickFacts: [
    { label: 'Capital', value: 'Baghdad' },
    { label: 'Population', value: '41 million' },
    { label: 'Official Languages', value: 'Arabic, Kurdish' },
    { label: 'Currency', value: 'Iraqi Dinar' },
    { label: 'Area', value: '438,317 km²' },
  ],
  facts: [
    'Home to ancient Mesopotamia and the earliest civilizations',
    'Birthplace of writing, mathematics, and the wheel',
    'The Tigris and Euphrates rivers flow through Iraq',
    'Babylon was one of the world\'s first great cities',
  ],
  foodCulture: 'Iraqi cuisine features rice, lamb, flatbreads, and aromatic spices with Persian, Turkish, and Arab influences.',
  mainDish: {
    id: 'iraq-main',
    name: 'Masgouf',
    description: 'Traditional grilled fish seasoned with tamarind',
    cookingTime: 60,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'Large carp or similar fish', amount: 2, unit: 'whole' },
      { name: 'Tamarind paste', amount: 3, unit: 'tbsp' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Turmeric', amount: 1, unit: 'tsp' },
      { name: 'Curry powder', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Butterfly fish and remove bones',
      'Marinate with spices and tamarind',
      'Grill fish slowly over wood fire',
      'Grill tomatoes and onions separately',
      'Serve fish with grilled vegetables',
      'Accompany with flatbread and pickles',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559737558-2f5a2f7e8c59?w=600',
  },
  drinks: {
    alcoholic: 'Arak (limited availability)',
    nonAlcoholic: 'Chai (tea), Turkish coffee, Iced rose water',
  },
  music: [
    'Iraqi Maqam',
    'Traditional oud music',
    'Arabic classical',
  ],
  decorationIdeas: [
    'Red, white and black flag colors',
    'Ancient Mesopotamian symbols',
    'Tigris-Euphrates imagery',
    'Arabic calligraphy',
  ],
  conversationStarters: [
    'What do you know about ancient Mesopotamia?',
    'Have you tried Middle Eastern cuisine?',
  ],
  quiz: [
    {
      id: 'iraq-q1',
      question: 'What is the capital of Iraq?',
      options: ['Baghdad', 'Basra', 'Mosul', 'Erbil'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 58, y: 36 },
};
