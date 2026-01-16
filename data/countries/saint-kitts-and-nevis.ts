import { Country } from '@/types';

export const saintKittsAndNevis: Country = {
  id: 'saint-kitts-and-nevis',
  name: 'Saint Kitts and Nevis',
  code: 'KN',
  continent: 'North America',
  flag: '🇰🇳',
  landscapeImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
  description: 'Saint Kitts and Nevis is a dual-island Caribbean nation known for cloud-shrouded mountains, beaches, and colonial history.',
  quickFacts: [
    { label: 'Capital', value: 'Basseterre' },
    { label: 'Population', value: '53,000' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'East Caribbean Dollar' },
    { label: 'Area', value: '261 km²' },
  ],
  facts: [
    'The smallest country in the Western Hemisphere',
    'First Caribbean islands to be colonized by Europeans',
    'Known for Brimstone Hill Fortress UNESCO site',
    'Popular citizenship by investment program',
  ],
  foodCulture: 'Kittitian cuisine blends African, British, and Creole influences with seafood and tropical produce.',
  mainDish: {
    id: 'saint-kitts-main',
    name: 'Stewed Saltfish',
    description: 'Salted cod with peppers and tomatoes',
    cookingTime: 45,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'Salted codfish', amount: 500, unit: 'g' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Bell peppers', amount: 2, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Scotch bonnet pepper', amount: 1, unit: 'whole' },
      { name: 'Thyme', amount: 3, unit: 'sprigs' },
    ],
    steps: [
      'Soak saltfish overnight to remove salt',
      'Boil and flake fish',
      'Sauté onions, peppers, and tomatoes',
      'Add flaked fish',
      'Season with thyme and pepper',
      'Serve with Johnny cakes or bread',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559737558-2f5a2f7e8c59?w=600',
  },
  drinks: {
    alcoholic: 'CSR (Cane Spirit Rothschild), Carib beer',
    nonAlcoholic: 'Mauby, Sorrel, Fresh juice',
  },
  music: [
    'Calypso',
    'Soca',
    'Reggae',
  ],
  decorationIdeas: [
    'Green, yellow, red and black flag colors',
    'Beach and mountain themes',
    'Colonial fortress imagery',
    'Sugar cane motifs',
  ],
  conversationStarters: [
    'Have you been to the Caribbean?',
    'What do you know about colonial history?',
  ],
  quiz: [
    {
      id: 'saint-kitts-q1',
      question: 'What is the capital of Saint Kitts and Nevis?',
      options: ['Basseterre', 'Charlestown', 'Bridgetown', 'Castries'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 26, y: 27 },
};
