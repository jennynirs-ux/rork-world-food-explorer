import { Country } from '@/types';

export const turkmenistan: Country = {
  id: 'turkmenistan',
  name: 'Turkmenistan',
  code: 'TM',
  continent: 'Asia',
  flag: '🇹🇲',
  landscapeImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
  description: 'Turkmenistan is a Central Asian country known for the Karakum Desert, ancient Silk Road cities, and unique marble architecture.',
  quickFacts: [
    { label: 'Capital', value: 'Ashgabat' },
    { label: 'Population', value: '6.3 million' },
    { label: 'Official Language', value: 'Turkmen' },
    { label: 'Currency', value: 'Turkmenistan Manat' },
    { label: 'Area', value: '488,100 km²' },
  ],
  facts: [
    'About 80% is Karakum Desert',
    'Home to the Darvaza gas crater "Door to Hell"',
    'Ashgabat has a Guinness record for white marble buildings',
    'Rich in natural gas reserves',
  ],
  foodCulture: 'Turkmen cuisine features lamb, rice, bread, and dairy with Central Asian traditions.',
  mainDish: {
    id: 'turkmenistan-main',
    name: 'Plov',
    description: 'Rice pilaf with lamb and vegetables',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Lamb', amount: 600, unit: 'g' },
      { name: 'Rice', amount: 500, unit: 'g' },
      { name: 'Carrots', amount: 3, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Cumin', amount: 1, unit: 'tsp' },
      { name: 'Vegetable oil', amount: 100, unit: 'ml' },
    ],
    steps: [
      'Heat oil in kazan (large pot)',
      'Brown lamb and onions',
      'Add julienned carrots',
      'Add spices and water',
      'Layer rice on top',
      'Steam until rice is tender',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600',
  },
  drinks: {
    alcoholic: 'Vodka',
    nonAlcoholic: 'Chal (camel milk), Green tea',
  },
  music: [
    'Traditional dutar music',
    'Turkmen folk songs',
    'Epic poetry recitations',
  ],
  decorationIdeas: [
    'Green and red flag colors',
    'Desert landscapes',
    'Carpet patterns',
    'Akhal-Teke horse imagery',
  ],
  conversationStarters: [
    'Have you heard of the Door to Hell?',
    'What do you know about Central Asian deserts?',
  ],
  quiz: [
    {
      id: 'turkmenistan-q1',
      question: 'What is the capital of Turkmenistan?',
      options: ['Ashgabat', 'Tashkent', 'Bishkek', 'Dushanbe'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 62, y: 42 },
};
