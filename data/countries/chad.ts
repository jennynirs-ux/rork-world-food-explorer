import { Country } from '@/types';

export const chad: Country = {
  id: 'chad',
  name: 'Chad',
  code: 'TD',
  continent: 'Africa',
  flag: '🇹🇩',
  landscapeImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
  description: 'Chad is a landlocked country in north-central Africa featuring the Sahara Desert, Lake Chad, and diverse ethnic groups.',
  quickFacts: [
    { label: 'Capital', value: 'N\'Djamena' },
    { label: 'Population', value: '17 million' },
    { label: 'Official Languages', value: 'French, Arabic' },
    { label: 'Currency', value: 'Central African CFA Franc' },
    { label: 'Area', value: '1,284,000 km²' },
  ],
  facts: [
    'Lake Chad has shrunk dramatically in recent decades',
    'Home to the Ennedi Plateau with ancient rock art',
    'Chad has over 200 ethnic groups',
    'The Tibesti Mountains contain Africa\'s highest volcano',
  ],
  foodCulture: 'Chadian cuisine varies between the Arab north and African south, featuring millet, sorghum, and dried fish.',
  mainDish: {
    id: 'chad-main',
    name: 'Boule',
    description: 'Millet or sorghum porridge served with sauce',
    cookingTime: 45,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Millet or sorghum flour', amount: 500, unit: 'g' },
      { name: 'Dried fish or meat', amount: 200, unit: 'g' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Okra', amount: 200, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Palm oil', amount: 3, unit: 'tbsp' },
    ],
    steps: [
      'Boil water in large pot',
      'Gradually add flour while stirring',
      'Cook until thick porridge forms',
      'Make sauce with fish, tomatoes, and okra',
      'Simmer sauce until thick',
      'Serve boule with sauce on side',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600',
  },
  drinks: {
    alcoholic: 'Bili-bili (millet beer)',
    nonAlcoholic: 'Karkanji (hibiscus tea), Fresh milk',
  },
  music: [
    'Traditional Sai music',
    'Arabic influences',
    'Saharan rhythms',
  ],
  decorationIdeas: [
    'Blue, yellow and red flag colors',
    'Desert landscapes',
    'Traditional patterns',
    'Lake Chad imagery',
  ],
  conversationStarters: [
    'What do you know about the Sahara Desert?',
    'Have you explored Saharan cuisine?',
  ],
  quiz: [
    {
      id: 'chad-q1',
      question: 'What is the capital of Chad?',
      options: ['N\'Djamena', 'Bangui', 'Khartoum', 'Niamey'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 50, y: 28 },
};
