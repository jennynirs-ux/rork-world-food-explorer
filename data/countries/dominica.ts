import { Country } from '@/types';

export const dominica: Country = {
  id: 'dominica',
  name: 'Dominica',
  code: 'DM',
  continent: 'North America',
  flag: '🇩🇲',
  landscapeImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
  description: 'Dominica is the "Nature Island of the Caribbean," known for lush rainforests, hot springs, waterfalls, and the boiling lake.',
  quickFacts: [
    { label: 'Capital', value: 'Roseau' },
    { label: 'Population', value: '72,000' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'East Caribbean Dollar' },
    { label: 'Area', value: '751 km²' },
  ],
  facts: [
    'Has 365 rivers, one for each day of the year',
    'Home to the world\'s second-largest boiling lake',
    'The only Caribbean island with a large Kalinago population',
    'Filming location for Pirates of the Caribbean',
  ],
  foodCulture: 'Dominican cuisine features provisions (root vegetables), fresh seafood, and Creole-style cooking.',
  mainDish: {
    id: 'dominica-main',
    name: 'Callaloo Soup',
    description: 'Traditional soup with dasheen leaves and crab',
    cookingTime: 60,
    servings: 6,
    dietType: 'fish',
    ingredients: [
      { name: 'Dasheen leaves', amount: 500, unit: 'g' },
      { name: 'Crab meat', amount: 300, unit: 'g' },
      { name: 'Coconut milk', amount: 400, unit: 'ml' },
      { name: 'Okra', amount: 200, unit: 'g' },
      { name: 'Pumpkin', amount: 200, unit: 'g' },
      { name: 'Garlic', amount: 3, unit: 'cloves' },
    ],
    steps: [
      'Boil dasheen leaves until tender',
      'Blend with coconut milk',
      'Add crab, okra, and pumpkin',
      'Simmer until vegetables are soft',
      'Season with garlic and pepper',
      'Serve hot with dumplings',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600',
  },
  drinks: {
    alcoholic: 'Rum, Bay rum, Local beer',
    nonAlcoholic: 'Coconut water, Sorrel, Fresh juice',
  },
  music: [
    'Cadence-lypso',
    'Bouyon',
    'Jing ping',
    'Reggae',
  ],
  decorationIdeas: [
    'Green, yellow, black, white and red flag colors',
    'Tropical rainforest themes',
    'Waterfall imagery',
    'Kalinago crafts',
  ],
  conversationStarters: [
    'Have you experienced Caribbean nature?',
    'Do you enjoy rainforest hiking?',
  ],
  quiz: [
    {
      id: 'dominica-q1',
      question: 'What is the capital of Dominica?',
      options: ['Roseau', 'Bridgetown', 'Castries', 'St. George\'s'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 26, y: 26 },
};
