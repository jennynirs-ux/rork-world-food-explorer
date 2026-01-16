import { Country } from '@/types';

export const southSudan: Country = {
  id: 'south-sudan',
  name: 'South Sudan',
  code: 'SS',
  continent: 'Africa',
  flag: '🇸🇸',
  landscapeImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
  description: 'South Sudan is the world\'s youngest country, gaining independence in 2011, known for the Sudd wetlands and diverse tribal cultures.',
  quickFacts: [
    { label: 'Capital', value: 'Juba' },
    { label: 'Population', value: '11 million' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'South Sudanese Pound' },
    { label: 'Area', value: '619,745 km²' },
  ],
  facts: [
    'World\'s youngest country (independent since 2011)',
    'The Sudd is one of the world\'s largest wetlands',
    'Over 60 different ethnic groups',
    'Rich in oil resources',
  ],
  foodCulture: 'South Sudanese cuisine features sorghum, cassava, peanuts, and grilled meats.',
  mainDish: {
    id: 'south-sudan-main',
    name: 'Kisra with Mullah',
    description: 'Fermented sorghum pancakes with okra stew',
    cookingTime: 90,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Sorghum flour', amount: 500, unit: 'g' },
      { name: 'Okra', amount: 400, unit: 'g' },
      { name: 'Peanut butter', amount: 200, unit: 'g' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
    ],
    steps: [
      'Ferment sorghum flour overnight',
      'Make thin pancakes (kisra)',
      'Make stew with okra, tomatoes, and peanut butter',
      'Simmer until thick',
      'Serve stew with kisra',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600',
  },
  drinks: {
    alcoholic: 'Marisa (sorghum beer)',
    nonAlcoholic: 'Karkade (hibiscus tea), Fresh juice',
  },
  music: [
    'Traditional tribal music',
    'Sudanese rhythms',
    'East African beats',
  ],
  decorationIdeas: [
    'Black, red, green, white, blue and yellow flag colors',
    'Wetland imagery',
    'Traditional crafts',
  ],
  conversationStarters: [
    'What do you know about Africa\'s youngest country?',
    'Have you heard about the Sudd wetlands?',
  ],
  quiz: [
    {
      id: 'south-sudan-q1',
      question: 'When did South Sudan gain independence?',
      options: ['2000', '2005', '2011', '2015'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 54, y: 20 },
};
