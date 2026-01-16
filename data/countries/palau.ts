import { Country } from '@/types';

export const palau: Country = {
  id: 'palau',
  name: 'Palau',
  code: 'PW',
  continent: 'Oceania',
  flag: '🇵🇼',
  landscapeImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
  description: 'Palau is a Pacific island nation known for pristine diving, Jellyfish Lake, Rock Islands, and strong environmental protection.',
  quickFacts: [
    { label: 'Capital', value: 'Ngerulmud' },
    { label: 'Population', value: '18,000' },
    { label: 'Official Languages', value: 'Palauan, English' },
    { label: 'Currency', value: 'US Dollar' },
    { label: 'Area', value: '459 km²' },
  ],
  facts: [
    'Home to the famous Jellyfish Lake',
    'First country to ban reef-toxic sunscreen',
    'Has over 500 islands, only 9 inhabited',
    'World-class diving destination',
  ],
  foodCulture: 'Palauan cuisine features fish, taro, cassava, and tropical fruits.',
  mainDish: {
    id: 'palau-main',
    name: 'Fruit Bat Soup',
    description: 'Traditional soup with fruit bat and vegetables',
    cookingTime: 90,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Fruit bat', amount: 1, unit: 'whole' },
      { name: 'Coconut milk', amount: 400, unit: 'ml' },
      { name: 'Ginger', amount: 30, unit: 'g' },
      { name: 'Onions', amount: 1, unit: 'whole' },
      { name: 'Taro leaves', amount: 100, unit: 'g' },
    ],
    steps: [
      'Clean and prepare bat',
      'Boil with ginger and onions',
      'Add coconut milk',
      'Simmer until tender',
      'Add taro leaves at end',
      'Serve with rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600',
  },
  drinks: {
    alcoholic: 'Local beer, Fermented beverages',
    nonAlcoholic: 'Coconut water, Fresh juice',
  },
  music: [
    'Traditional Palauan chants',
    'Pacific island songs',
  ],
  decorationIdeas: [
    'Light blue and yellow flag colors',
    'Ocean and coral reef themes',
    'Rock Islands imagery',
    'Marine life decorations',
  ],
  conversationStarters: [
    'Have you been diving in Palau?',
    'What do you know about coral conservation?',
  ],
  quiz: [
    {
      id: 'palau-q1',
      question: 'What is Palau famous for protecting?',
      options: ['Deserts', 'Coral reefs', 'Mountains', 'Forests'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 84, y: 22 },
};
