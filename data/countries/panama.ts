import { Country } from '@/types';

export const panama: Country = {
  id: 'panama',
  name: 'Panama',
  code: 'PA',
  continent: 'North America',
  flag: '🇵🇦',
  landscapeImage: 'https://images.unsplash.com/photo-1564082979121-85b2e787881f?w=800',
  description: 'Panama is a Central American country known for the Panama Canal, connecting the Atlantic and Pacific oceans, and diverse ecosystems.',
  quickFacts: [
    { label: 'Capital', value: 'Panama City' },
    { label: 'Population', value: '4.4 million' },
    { label: 'Official Language', value: 'Spanish' },
    { label: 'Currency', value: 'US Dollar, Panamanian Balboa' },
    { label: 'Area', value: '75,417 km²' },
  ],
  facts: [
    'The Panama Canal revolutionized global shipping',
    'Bridge between North and South America',
    'Home to indigenous communities like the Guna',
    'Uses the US dollar as currency',
  ],
  foodCulture: 'Panamanian cuisine blends Spanish, African, and indigenous influences with fresh seafood and tropical fruits.',
  mainDish: {
    id: 'panama-main',
    name: 'Sancocho',
    description: 'Traditional chicken soup with yuca and culantro',
    cookingTime: 120,
    servings: 8,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken', amount: 1, unit: 'kg' },
      { name: 'Yuca', amount: 500, unit: 'g' },
      { name: 'Corn', amount: 2, unit: 'pieces' },
      { name: 'Culantro', amount: 5, unit: 'leaves' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Garlic', amount: 4, unit: 'cloves' },
    ],
    steps: [
      'Boil chicken with aromatics',
      'Add yuca and corn',
      'Simmer until vegetables are tender',
      'Add culantro at the end',
      'Season with salt and pepper',
      'Serve with white rice and hot sauce',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600',
  },
  drinks: {
    alcoholic: 'Seco (sugarcane spirit), Balboa beer, Panamanian rum',
    nonAlcoholic: 'Chicheme, Raspao (shaved ice), Fresh coconut water',
  },
  music: [
    'Típico (accordion music)',
    'Reggaeton',
    'Salsa',
    'Afro-Caribbean rhythms',
  ],
  decorationIdeas: [
    'Red, white and blue flag colors',
    'Panama Canal imagery',
    'Tropical rainforest themes',
    'Indigenous mola textiles',
  ],
  conversationStarters: [
    'Have you been through the Panama Canal?',
    'What do you know about connecting oceans?',
  ],
  quiz: [
    {
      id: 'panama-q1',
      question: 'What connects the Atlantic and Pacific oceans?',
      options: ['Suez Canal', 'Panama Canal', 'Erie Canal', 'Grand Canal'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 19, y: 21 },
};
