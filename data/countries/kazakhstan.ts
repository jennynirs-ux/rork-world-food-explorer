import { Country } from '@/types';

export const kazakhstan: Country = {
  id: 'kazakhstan',
  name: 'Kazakhstan',
  code: 'KZ',
  continent: 'Asia',
  flag: '🇰🇿',
  landscapeImage: 'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800',
  description: 'Kazakhstan is the world\'s largest landlocked country, known for vast steppes, space program heritage, and nomadic traditions.',
  quickFacts: [
    { label: 'Capital', value: 'Astana' },
    { label: 'Population', value: '19 million' },
    { label: 'Official Languages', value: 'Kazakh, Russian' },
    { label: 'Currency', value: 'Kazakhstani Tenge' },
    { label: 'Area', value: '2,724,900 km²' },
  ],
  facts: [
    'The world\'s largest landlocked country',
    'Home to the Baikonur Cosmodrome',
    'Rich in oil, gas, and minerals',
    'Traditional eagle hunting is still practiced',
  ],
  foodCulture: 'Kazakh cuisine features meat, dairy, and bread with Central Asian and Russian influences.',
  mainDish: {
    id: 'kazakhstan-main',
    name: 'Beshbarmak',
    description: 'Traditional dish with boiled meat and noodles',
    cookingTime: 180,
    servings: 8,
    dietType: 'meat',
    ingredients: [
      { name: 'Horse meat or lamb', amount: 1.5, unit: 'kg' },
      { name: 'Fresh pasta sheets', amount: 500, unit: 'g' },
      { name: 'Onions', amount: 3, unit: 'whole' },
      { name: 'Bay leaves', amount: 3, unit: 'whole' },
      { name: 'Black pepper', amount: 1, unit: 'tsp' },
      { name: 'Dill', amount: 50, unit: 'g' },
    ],
    steps: [
      'Boil meat with bay leaves until very tender',
      'Cut pasta into squares and boil in broth',
      'Slice meat thinly',
      'Layer noodles on large platter',
      'Top with meat and raw onions',
      'Pour broth over and garnish with dill',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600',
  },
  drinks: {
    alcoholic: 'Kumis (fermented mare\'s milk), Vodka',
    nonAlcoholic: 'Shubat (camel milk), Black tea',
  },
  music: [
    'Traditional dombra music',
    'Kazakh folk songs',
    'Modern Kazakh pop',
  ],
  decorationIdeas: [
    'Blue and yellow flag colors',
    'Steppe landscapes',
    'Traditional yurts',
    'Eagle imagery',
  ],
  conversationStarters: [
    'What do you know about Central Asian culture?',
    'Have you heard of the Silk Road?',
  ],
  quiz: [
    {
      id: 'kazakhstan-q1',
      question: 'What is the capital of Kazakhstan?',
      options: ['Almaty', 'Astana', 'Nur-Sultan', 'Shymkent'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 65, y: 48 },
};
