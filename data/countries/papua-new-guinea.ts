import { Country } from '@/types';

export const papuaNewGuinea: Country = {
  id: 'papua-new-guinea',
  name: 'Papua New Guinea',
  code: 'PG',
  continent: 'Oceania',
  flag: '🇵🇬',
  landscapeImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
  description: 'Papua New Guinea is a Pacific nation known for incredible biodiversity, tribal cultures, and being one of the world\'s most linguistically diverse countries.',
  quickFacts: [
    { label: 'Capital', value: 'Port Moresby' },
    { label: 'Population', value: '9.1 million' },
    { label: 'Official Languages', value: 'English, Tok Pisin, Hiri Motu' },
    { label: 'Currency', value: 'Papua New Guinean Kina' },
    { label: 'Area', value: '462,840 km²' },
  ],
  facts: [
    'Over 800 languages spoken - most diverse in the world',
    'Home to the Bird of Paradise',
    'Traditional tribal cultures still thrive',
    'Covers the eastern half of New Guinea island',
  ],
  foodCulture: 'Papua New Guinean cuisine features sago, taro, sweet potato, and tropical fruits with Melanesian traditions.',
  mainDish: {
    id: 'papua-new-guinea-main',
    name: 'Mumu',
    description: 'Traditional earth oven feast with pork and vegetables',
    cookingTime: 180,
    servings: 10,
    dietType: 'meat',
    ingredients: [
      { name: 'Pork', amount: 2, unit: 'kg' },
      { name: 'Sweet potato', amount: 1, unit: 'kg' },
      { name: 'Taro', amount: 1, unit: 'kg' },
      { name: 'Banana leaves', amount: 20, unit: 'pieces' },
      { name: 'Greens', amount: 500, unit: 'g' },
      { name: 'Hot stones', amount: 15, unit: 'pieces' },
    ],
    steps: [
      'Dig pit and heat stones in fire',
      'Line pit with banana leaves',
      'Layer meat and vegetables',
      'Add hot stones between layers',
      'Cover with leaves and earth',
      'Cook for 3 hours then uncover',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600',
  },
  drinks: {
    alcoholic: 'SP beer, Bush beer (fermented)',
    nonAlcoholic: 'Coconut water, Fresh tropical juice',
  },
  music: [
    'Traditional kundu drumming',
    'Melanesian chants',
    'Contemporary PNG pop',
  ],
  decorationIdeas: [
    'Red, black and yellow flag colors',
    'Bird of Paradise imagery',
    'Tribal masks and carvings',
    'Rainforest themes',
  ],
  conversationStarters: [
    'What do you know about linguistic diversity?',
    'Have you seen Birds of Paradise?',
  ],
  quiz: [
    {
      id: 'papua-new-guinea-q1',
      question: 'How many languages are spoken in PNG?',
      options: ['80', '200', '400', 'Over 800'],
      correctAnswer: 3,
    },
  ],
  coordinates: { x: 87, y: 15 },
};
