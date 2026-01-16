import { Country } from '@/types';

export const gambia: Country = {
  id: 'gambia',
  name: 'Gambia',
  code: 'GM',
  continent: 'Africa',
  flag: '🇬🇲',
  landscapeImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
  description: 'Gambia is the smallest country in mainland Africa, a narrow strip along the Gambia River surrounded by Senegal, known for beaches and birdwatching.',
  quickFacts: [
    { label: 'Capital', value: 'Banjul' },
    { label: 'Population', value: '2.5 million' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'Gambian Dalasi' },
    { label: 'Area', value: '11,295 km²' },
  ],
  facts: [
    'The smallest country in mainland Africa',
    'Surrounded by Senegal except for the Atlantic coast',
    'The Gambia River runs through the entire country',
    'Popular destination for birdwatching with over 500 species',
  ],
  foodCulture: 'Gambian cuisine features rice, fish, peanuts, and vegetables with West African spices.',
  mainDish: {
    id: 'gambia-main',
    name: 'Domoda',
    description: 'Peanut butter stew with meat and vegetables',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Beef or lamb', amount: 600, unit: 'g' },
      { name: 'Peanut butter', amount: 300, unit: 'g' },
      { name: 'Sweet potatoes', amount: 2, unit: 'whole' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Cabbage', amount: 300, unit: 'g' },
    ],
    steps: [
      'Brown meat with onions',
      'Add tomatoes and water',
      'Stir in peanut butter',
      'Add sweet potatoes and cabbage',
      'Simmer until meat is tender',
      'Serve over rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600',
  },
  drinks: {
    alcoholic: 'Palm wine, Julbrew beer',
    nonAlcoholic: 'Wonjo (hibiscus drink), Baobab juice, Attaya (green tea)',
  },
  music: [
    'Kora music',
    'Mbalax',
    'Traditional Mandinka songs',
  ],
  decorationIdeas: [
    'Red, blue, green and white flag colors',
    'River and mangrove imagery',
    'Traditional kora instruments',
    'Bird watching themes',
  ],
  conversationStarters: [
    'Have you heard kora music?',
    'What do you know about West African rivers?',
    'Do you enjoy birdwatching?',
  ],
  quiz: [
    {
      id: 'gambia-q1',
      question: 'What is the capital of Gambia?',
      options: ['Dakar', 'Banjul', 'Freetown', 'Conakry'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 44, y: 26 },
};
