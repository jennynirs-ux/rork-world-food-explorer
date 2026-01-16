import { Country } from '@/types';

export const samoa: Country = {
  id: 'samoa',
  name: 'Samoa',
  code: 'WS',
  continent: 'Oceania',
  flag: '🇼🇸',
  landscapeImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
  description: 'Samoa is a Polynesian island nation known for traditional fa\'a Samoa culture, pristine beaches, and warm hospitality.',
  quickFacts: [
    { label: 'Capital', value: 'Apia' },
    { label: 'Population', value: '200,000' },
    { label: 'Official Languages', value: 'Samoan, English' },
    { label: 'Currency', value: 'Samoan Tala' },
    { label: 'Area', value: '2,842 km²' },
  ],
  facts: [
    'First country to see the sunrise each day',
    'Traditional fa\'a Samoa way of life is strong',
    'Home to Robert Louis Stevenson\'s final residence',
    'Rugby is the national sport',
  ],
  foodCulture: 'Samoan cuisine features taro, coconut, breadfruit, and seafood cooked in earth ovens.',
  mainDish: {
    id: 'samoa-main',
    name: 'Palusami',
    description: 'Taro leaves in coconut cream',
    cookingTime: 90,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Taro leaves', amount: 500, unit: 'g' },
      { name: 'Coconut cream', amount: 400, unit: 'ml' },
      { name: 'Onions', amount: 1, unit: 'whole' },
      { name: 'Salt', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Wash taro leaves thoroughly',
      'Layer leaves in bundles',
      'Pour coconut cream over leaves',
      'Add diced onions',
      'Wrap in foil or banana leaves',
      'Bake or steam for 90 minutes',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600',
  },
  drinks: {
    alcoholic: 'Kava, Vailima beer',
    nonAlcoholic: 'Coconut water, Fresh tropical juice',
  },
  music: [
    'Traditional Samoan songs',
    'Siva dance music',
    'Contemporary Polynesian pop',
  ],
  decorationIdeas: [
    'Red, white and blue flag colors',
    'Polynesian patterns',
    'Tropical flowers',
    'Ocean and palm themes',
  ],
  conversationStarters: [
    'Have you experienced Polynesian culture?',
    'What do you know about Pacific islands?',
  ],
  quiz: [
    {
      id: 'samoa-q1',
      question: 'What is the capital of Samoa?',
      options: ['Apia', 'Pago Pago', 'Suva', 'Nuku\'alofa'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 95, y: 14 },
};
