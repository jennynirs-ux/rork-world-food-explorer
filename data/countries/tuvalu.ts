import { Country } from '@/types';

export const tuvalu: Country = {
  id: 'tuvalu',
  name: 'Tuvalu',
  code: 'TV',
  continent: 'Oceania',
  flag: '🇹🇻',
  landscapeImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
  description: 'Tuvalu is one of the world\'s smallest and most remote countries, a Pacific island nation extremely vulnerable to climate change.',
  quickFacts: [
    { label: 'Capital', value: 'Funafuti' },
    { label: 'Population', value: '12,000' },
    { label: 'Official Languages', value: 'Tuvaluan, English' },
    { label: 'Currency', value: 'Australian Dollar' },
    { label: 'Area', value: '26 km²' },
  ],
  facts: [
    'Fourth smallest country in the world',
    'Most vulnerable to sea level rise',
    'No natural resources or industry',
    'The .tv internet domain brings significant revenue',
  ],
  foodCulture: 'Tuvaluan cuisine features fish, coconut, pulaka (swamp taro), and breadfruit.',
  mainDish: {
    id: 'tuvalu-main',
    name: 'Palusami',
    description: 'Coconut cream with taro leaves',
    cookingTime: 90,
    servings: 4,
    dietType: 'vegan',
    ingredients: [
      { name: 'Taro leaves', amount: 400, unit: 'g' },
      { name: 'Coconut cream', amount: 400, unit: 'ml' },
      { name: 'Onions', amount: 1, unit: 'whole' },
      { name: 'Salt', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Wash taro leaves',
      'Mix coconut cream with onions',
      'Wrap leaves with coconut mixture',
      'Bake in earth oven or regular oven',
      'Cook for 90 minutes',
      'Serve with fish',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600',
  },
  drinks: {
    alcoholic: 'Toddy (palm wine)',
    nonAlcoholic: 'Coconut water, Fresh juice',
  },
  music: [
    'Traditional fatele dance songs',
    'Pacific island chants',
  ],
  decorationIdeas: [
    'Light blue and yellow flag colors',
    'Ocean and atoll themes',
    'Stars from flag',
    'Climate awareness themes',
  ],
  conversationStarters: [
    'What do you know about climate change impacts?',
    'Have you been to remote Pacific islands?',
  ],
  quiz: [
    {
      id: 'tuvalu-q1',
      question: 'What makes Tuvalu vulnerable?',
      options: ['Earthquakes', 'Sea level rise', 'Volcanoes', 'Hurricanes'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 92, y: 16 },
};
