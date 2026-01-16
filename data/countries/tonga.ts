import { Country } from '@/types';

export const tonga: Country = {
  id: 'tonga',
  name: 'Tonga',
  code: 'TO',
  continent: 'Oceania',
  flag: '🇹🇴',
  landscapeImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
  description: 'Tonga is a Polynesian kingdom in the South Pacific, known for whale watching, pristine beaches, and strong cultural traditions.',
  quickFacts: [
    { label: 'Capital', value: 'Nuku\'alofa' },
    { label: 'Population', value: '106,000' },
    { label: 'Official Languages', value: 'Tongan, English' },
    { label: 'Currency', value: 'Tongan Paʻanga' },
    { label: 'Area', value: '747 km²' },
  ],
  facts: [
    'Never colonized by European powers',
    'One of the few remaining Polynesian monarchies',
    'World-class humpback whale watching',
    'Consists of 169 islands',
  ],
  foodCulture: 'Tongan cuisine features root vegetables, coconut, seafood, and food cooked in earth ovens.',
  mainDish: {
    id: 'tonga-main',
    name: 'Lu Pulu',
    description: 'Corned beef with taro leaves and coconut cream',
    cookingTime: 120,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Corned beef', amount: 500, unit: 'g' },
      { name: 'Taro leaves', amount: 400, unit: 'g' },
      { name: 'Coconut cream', amount: 400, unit: 'ml' },
      { name: 'Onions', amount: 2, unit: 'whole' },
    ],
    steps: [
      'Wrap taro leaves around corned beef',
      'Add onions and coconut cream',
      'Wrap in foil',
      'Bake in earth oven or regular oven',
      'Cook for 2 hours at 350°F',
      'Serve with yams or taro',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600',
  },
  drinks: {
    alcoholic: 'Kava',
    nonAlcoholic: 'Coconut water, Fresh juice',
  },
  music: [
    'Traditional log drum music',
    'Tongan choir singing',
    'Pacific island rhythms',
  ],
  decorationIdeas: [
    'Red and white flag colors',
    'Royal crest imagery',
    'Tropical flowers',
    'Whale motifs',
  ],
  conversationStarters: [
    'Have you been whale watching?',
    'What do you know about Pacific monarchies?',
  ],
  quiz: [
    {
      id: 'tonga-q1',
      question: 'What is unique about Tonga\'s history?',
      options: ['First to gain independence', 'Never colonized', 'Largest island', 'No monarchy'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 94, y: 10 },
};
