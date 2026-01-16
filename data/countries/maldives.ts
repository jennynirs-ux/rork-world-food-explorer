import { Country } from '@/types';

export const maldives: Country = {
  id: 'maldives',
  name: 'Maldives',
  code: 'MV',
  continent: 'Asia',
  flag: '🇲🇻',
  landscapeImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
  description: 'The Maldives is a tropical paradise of 1,190 coral islands, known for luxury resorts, crystal-clear waters, and marine biodiversity.',
  quickFacts: [
    { label: 'Capital', value: 'Malé' },
    { label: 'Population', value: '540,000' },
    { label: 'Official Language', value: 'Dhivehi' },
    { label: 'Currency', value: 'Maldivian Rufiyaa' },
    { label: 'Area', value: '298 km²' },
  ],
  facts: [
    'The lowest country in the world (average 1.5m above sea level)',
    'Consists of 26 atolls',
    'Over 99% of the country is water',
    'Most vulnerable to climate change and rising seas',
  ],
  foodCulture: 'Maldivian cuisine centers on fish, coconut, and starches with Indian and Sri Lankan influences.',
  mainDish: {
    id: 'maldives-main',
    name: 'Garudhiya',
    description: 'Traditional fish soup served with rice',
    cookingTime: 45,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'Tuna', amount: 500, unit: 'g' },
      { name: 'Onions', amount: 1, unit: 'whole' },
      { name: 'Curry leaves', amount: 10, unit: 'leaves' },
      { name: 'Lime', amount: 2, unit: 'whole' },
      { name: 'Chili peppers', amount: 2, unit: 'whole' },
      { name: 'Rice', amount: 300, unit: 'g' },
    ],
    steps: [
      'Boil tuna chunks with curry leaves',
      'Remove fish, keep broth',
      'Flake fish and set aside',
      'Season broth with lime and chili',
      'Serve broth over rice',
      'Top with flaked fish and onions',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559737558-2f5a2f7e8c59?w=600',
  },
  drinks: {
    alcoholic: 'Limited (only in resorts)',
    nonAlcoholic: 'Raa (palm toddy), Fresh coconut water, Black tea',
  },
  music: [
    'Boduberu traditional drumming',
    'Maldivian folk songs',
    'South Asian influences',
  ],
  decorationIdeas: [
    'Red, green and white flag colors',
    'Ocean and beach themes',
    'Tropical flowers',
    'Coral and shell decorations',
  ],
  conversationStarters: [
    'Have you been to a tropical island paradise?',
    'What concerns you about rising sea levels?',
  ],
  quiz: [
    {
      id: 'maldives-q1',
      question: 'What is unique about the Maldives elevation?',
      options: ['Highest peaks', 'Lowest country', 'No elevation', 'Underground cities'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 70, y: 19 },
};
