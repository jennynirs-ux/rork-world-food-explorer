import { Country } from '@/types';

export const tajikistan: Country = {
  id: 'tajikistan',
  name: 'Tajikistan',
  code: 'TJ',
  continent: 'Asia',
  flag: '🇹🇯',
  landscapeImage: 'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800',
  description: 'Tajikistan is a mountainous Central Asian country, known as the "Roof of the World" with the Pamir Mountains and Silk Road heritage.',
  quickFacts: [
    { label: 'Capital', value: 'Dushanbe' },
    { label: 'Population', value: '9.8 million' },
    { label: 'Official Language', value: 'Tajik' },
    { label: 'Currency', value: 'Tajikistani Somoni' },
    { label: 'Area', value: '143,100 km²' },
  ],
  facts: [
    'Over 90% of the country is mountainous',
    'Home to some of the world\'s highest peaks',
    'Part of the ancient Silk Road',
    'The Pamir Highway is one of the highest roads',
  ],
  foodCulture: 'Tajik cuisine features rice, meat, bread, and dairy with Central Asian and Persian influences.',
  mainDish: {
    id: 'tajikistan-main',
    name: 'Osh',
    description: 'Pilaf with rice, meat, and vegetables',
    cookingTime: 120,
    servings: 8,
    dietType: 'meat',
    ingredients: [
      { name: 'Lamb or beef', amount: 800, unit: 'g' },
      { name: 'Rice', amount: 600, unit: 'g' },
      { name: 'Carrots', amount: 4, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Cumin', amount: 1, unit: 'tbsp' },
      { name: 'Vegetable oil', amount: 150, unit: 'ml' },
    ],
    steps: [
      'Heat oil in large pot',
      'Brown meat and onions',
      'Add julienned carrots',
      'Add spices and water',
      'Layer rice on top',
      'Steam until rice is cooked',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600',
  },
  drinks: {
    alcoholic: 'Vodka',
    nonAlcoholic: 'Green tea, Kumis (fermented milk)',
  },
  music: [
    'Traditional Shashmaqam',
    'Folk music with daf drum',
    'Persian-influenced melodies',
  ],
  decorationIdeas: [
    'Red, white and green flag colors',
    'Mountain landscapes',
    'Pamir Highway imagery',
    'Silk Road themes',
  ],
  conversationStarters: [
    'Have you explored Central Asian mountains?',
    'What do you know about the Silk Road?',
  ],
  quiz: [
    {
      id: 'tajikistan-q1',
      question: 'What is the capital of Tajikistan?',
      options: ['Dushanbe', 'Bishkek', 'Tashkent', 'Ashgabat'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 67, y: 40 },
};
