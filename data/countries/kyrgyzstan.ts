import { Country } from '@/types';

export const kyrgyzstan: Country = {
  id: 'kyrgyzstan',
  name: 'Kyrgyzstan',
  code: 'KG',
  continent: 'Asia',
  flag: '🇰🇬',
  landscapeImage: 'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800',
  description: 'Kyrgyzstan is a Central Asian country known for dramatic mountain landscapes, nomadic traditions, and yurt culture.',
  quickFacts: [
    { label: 'Capital', value: 'Bishkek' },
    { label: 'Population', value: '6.7 million' },
    { label: 'Official Languages', value: 'Kyrgyz, Russian' },
    { label: 'Currency', value: 'Kyrgyzstani Som' },
    { label: 'Area', value: '199,951 km²' },
  ],
  facts: [
    'Over 90% of the country is mountainous',
    'Lake Issyk-Kul is one of the largest alpine lakes',
    'Nomadic traditions are still practiced',
    'Known for its epic oral poem, the Manas',
  ],
  foodCulture: 'Kyrgyz cuisine features meat, dairy products, and bread with Central Asian influences.',
  mainDish: {
    id: 'kyrgyzstan-main',
    name: 'Beshbarmak',
    description: 'Boiled meat with noodles and onions',
    cookingTime: 180,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Lamb or horse meat', amount: 1, unit: 'kg' },
      { name: 'Fresh noodles', amount: 500, unit: 'g' },
      { name: 'Onions', amount: 3, unit: 'whole' },
      { name: 'Bay leaves', amount: 2, unit: 'whole' },
      { name: 'Black pepper', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Boil meat until very tender',
      'Cook noodles in meat broth',
      'Slice meat thinly',
      'Layer noodles on platter',
      'Top with meat and raw onions',
      'Pour broth over and serve',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600',
  },
  drinks: {
    alcoholic: 'Kumis (fermented mare\'s milk), Vodka',
    nonAlcoholic: 'Black tea, Maksym (barley drink)',
  },
  music: [
    'Traditional komuz music',
    'Epic Manas recitations',
    'Kyrgyz folk songs',
  ],
  decorationIdeas: [
    'Red and yellow flag colors',
    'Mountain landscapes',
    'Traditional yurts',
    'Felt crafts',
  ],
  conversationStarters: [
    'Have you been to Central Asian mountains?',
    'What do you know about nomadic cultures?',
  ],
  quiz: [
    {
      id: 'kyrgyzstan-q1',
      question: 'What is the capital of Kyrgyzstan?',
      options: ['Bishkek', 'Tashkent', 'Almaty', 'Dushanbe'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 66, y: 42 },
};
