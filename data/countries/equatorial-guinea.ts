import { Country } from '@/types';

export const equatorialGuinea: Country = {
  id: 'equatorial-guinea',
  name: 'Equatorial Guinea',
  code: 'GQ',
  continent: 'Africa',
  flag: '🇬🇶',
  landscapeImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
  description: 'Equatorial Guinea is a Central African country with a mainland region and islands, known for oil production and Spanish colonial heritage.',
  quickFacts: [
    { label: 'Capital', value: 'Malabo' },
    { label: 'Population', value: '1.5 million' },
    { label: 'Official Languages', value: 'Spanish, French, Portuguese' },
    { label: 'Currency', value: 'Central African CFA Franc' },
    { label: 'Area', value: '28,051 km²' },
  ],
  facts: [
    'The only Spanish-speaking country in Africa',
    'Malabo is located on Bioko Island',
    'Rich in oil and natural gas',
    'One of Africa\'s wealthiest countries per capita',
  ],
  foodCulture: 'Cuisine blends African and Spanish influences with fish, plantains, and yams as staples.',
  mainDish: {
    id: 'equatorial-guinea-main',
    name: 'Succotash',
    description: 'Traditional stew with beans, corn, and fish',
    cookingTime: 60,
    servings: 6,
    dietType: 'fish',
    ingredients: [
      { name: 'Black-eyed peas', amount: 300, unit: 'g' },
      { name: 'Corn kernels', amount: 200, unit: 'g' },
      { name: 'Smoked fish', amount: 400, unit: 'g' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Palm oil', amount: 3, unit: 'tbsp' },
    ],
    steps: [
      'Soak beans overnight',
      'Cook beans until tender',
      'Add corn and smoked fish',
      'Sauté tomatoes and onions',
      'Combine all ingredients',
      'Simmer until flavors blend',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600',
  },
  drinks: {
    alcoholic: 'Palm wine, Local beer',
    nonAlcoholic: 'Malamba (sugarcane juice), Fresh juice',
  },
  music: [
    'Traditional Fang music',
    'Spanish-influenced songs',
    'African rhythms',
  ],
  decorationIdeas: [
    'Green, white, red and blue flag colors',
    'Spanish colonial elements',
    'Tropical themes',
    'Ocean imagery',
  ],
  conversationStarters: [
    'Did you know Spanish is spoken in Africa?',
    'What do you know about Central African islands?',
  ],
  quiz: [
    {
      id: 'equatorial-guinea-q1',
      question: 'What is the capital of Equatorial Guinea?',
      options: ['Malabo', 'Bata', 'Libreville', 'Yaoundé'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 49, y: 19 },
};
