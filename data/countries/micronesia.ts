import { Country } from '@/types';

export const micronesia: Country = {
  id: 'micronesia',
  name: 'Micronesia',
  code: 'FM',
  continent: 'Oceania',
  flag: '🇫🇲',
  landscapeImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
  description: 'The Federated States of Micronesia is a Pacific island nation known for WWII wrecks, pristine diving, and traditional culture.',
  quickFacts: [
    { label: 'Capital', value: 'Palikir' },
    { label: 'Population', value: '115,000' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'US Dollar' },
    { label: 'Area', value: '702 km²' },
  ],
  facts: [
    'Consists of over 600 islands',
    'Chuuk Lagoon has the world\'s best wreck diving',
    'Ancient stone money (Rai stones) on Yap',
    'Part of the larger Micronesia region',
  ],
  foodCulture: 'Micronesian cuisine features fish, taro, breadfruit, and coconut.',
  mainDish: {
    id: 'micronesia-main',
    name: 'Kelaguen',
    description: 'Grilled fish or chicken with lemon and coconut',
    cookingTime: 30,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'Fresh fish or chicken', amount: 500, unit: 'g' },
      { name: 'Lemons', amount: 4, unit: 'whole' },
      { name: 'Grated coconut', amount: 200, unit: 'g' },
      { name: 'Green onions', amount: 3, unit: 'whole' },
      { name: 'Hot peppers', amount: 2, unit: 'whole' },
    ],
    steps: [
      'Grill fish or chicken',
      'Chop into small pieces',
      'Mix with lemon juice',
      'Add grated coconut',
      'Add chopped onions and peppers',
      'Serve with rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559737558-2f5a2f7e8c59?w=600',
  },
  drinks: {
    alcoholic: 'Sakau (kava)',
    nonAlcoholic: 'Coconut water, Fresh fruit juice',
  },
  music: [
    'Traditional chants',
    'Pacific island songs',
    'Bamboo band music',
  ],
  decorationIdeas: [
    'Light blue and white flag colors',
    'Ocean themes',
    'Traditional outrigger canoes',
    'Stone money imagery',
  ],
  conversationStarters: [
    'Have you been wreck diving?',
    'What do you know about Pacific islands?',
  ],
  quiz: [
    {
      id: 'micronesia-q1',
      question: 'What is unique about Yap island?',
      options: ['Active volcano', 'Stone money', 'No beaches', 'Ice caps'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 87, y: 22 },
};
