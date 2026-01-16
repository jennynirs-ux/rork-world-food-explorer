import { Country } from '@/types';

export const saoTomeAndPrincipe: Country = {
  id: 'sao-tome-and-principe',
  name: 'São Tomé and Príncipe',
  code: 'ST',
  continent: 'Africa',
  flag: '🇸🇹',
  landscapeImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
  description: 'São Tomé and Príncipe is a small African island nation in the Gulf of Guinea, known for biodiversity, cocoa, and Portuguese colonial heritage.',
  quickFacts: [
    { label: 'Capital', value: 'São Tomé' },
    { label: 'Population', value: '220,000' },
    { label: 'Official Language', value: 'Portuguese' },
    { label: 'Currency', value: 'São Tomé and Príncipe Dobra' },
    { label: 'Area', value: '1,001 km²' },
  ],
  facts: [
    'Second smallest African country',
    'Known for high-quality cocoa production',
    'Rich biodiversity with endemic species',
    'Volcanic islands with lush rainforests',
  ],
  foodCulture: 'Santomean cuisine blends African and Portuguese influences with fresh fish, tropical fruits, and palm oil.',
  mainDish: {
    id: 'sao-tome-main',
    name: 'Calulu',
    description: 'Fish or meat stew with vegetables and palm oil',
    cookingTime: 90,
    servings: 6,
    dietType: 'fish',
    ingredients: [
      { name: 'Smoked fish', amount: 600, unit: 'g' },
      { name: 'Sweet potato leaves', amount: 300, unit: 'g' },
      { name: 'Okra', amount: 200, unit: 'g' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Palm oil', amount: 100, unit: 'ml' },
      { name: 'Onions', amount: 2, unit: 'whole' },
    ],
    steps: [
      'Sauté onions in palm oil',
      'Add tomatoes and okra',
      'Add smoked fish',
      'Stir in sweet potato leaves',
      'Simmer until thick',
      'Serve with funge (cassava porridge)',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600',
  },
  drinks: {
    alcoholic: 'Palm wine, Local beer',
    nonAlcoholic: 'Coffee, Fresh coconut water, Tropical juice',
  },
  music: [
    'Traditional ússua and socopé',
    'Portuguese-influenced music',
    'African rhythms',
  ],
  decorationIdeas: [
    'Green, yellow, red and black flag colors',
    'Cocoa plant imagery',
    'Tropical island themes',
    'Portuguese colonial architecture',
  ],
  conversationStarters: [
    'Have you tried São Tomé chocolate?',
    'What do you know about African islands?',
  ],
  quiz: [
    {
      id: 'sao-tome-q1',
      question: 'What is São Tomé and Príncipe famous for producing?',
      options: ['Coffee', 'Cocoa', 'Tea', 'Sugar'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 48, y: 16 },
};
