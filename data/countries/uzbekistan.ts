import { Country } from '@/types';

export const uzbekistan: Country = {
  id: 'uzbekistan',
  name: 'Uzbekistan',
  code: 'UZ',
  continent: 'Asia',
  flag: '🇺🇿',
  landscapeImage: 'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800',
  description: 'Uzbekistan is a Central Asian country on the ancient Silk Road, known for stunning Islamic architecture, bazaars, and historic cities.',
  quickFacts: [
    { label: 'Capital', value: 'Tashkent' },
    { label: 'Population', value: '34 million' },
    { label: 'Official Language', value: 'Uzbek' },
    { label: 'Currency', value: 'Uzbekistani Som' },
    { label: 'Area', value: '448,978 km²' },
  ],
  facts: [
    'Home to Samarkand, Bukhara, and Khiva - Silk Road cities',
    'One of only two doubly landlocked countries',
    'Major cotton producer',
    'Rich in Islamic architecture and tilework',
  ],
  foodCulture: 'Uzbek cuisine features rice, lamb, bread, and dried fruits with Central Asian and Persian influences.',
  mainDish: {
    id: 'uzbekistan-main',
    name: 'Plov (Osh)',
    description: 'National rice pilaf with meat and vegetables',
    cookingTime: 120,
    servings: 8,
    dietType: 'meat',
    ingredients: [
      { name: 'Lamb', amount: 800, unit: 'g' },
      { name: 'Rice', amount: 600, unit: 'g' },
      { name: 'Carrots', amount: 500, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Cumin', amount: 1, unit: 'tbsp' },
      { name: 'Vegetable oil', amount: 150, unit: 'ml' },
    ],
    steps: [
      'Heat oil in kazan (large pot)',
      'Brown lamb with onions',
      'Add julienned carrots',
      'Add spices and water',
      'Layer rice on top without stirring',
      'Steam until rice absorbs liquid',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600',
  },
  drinks: {
    alcoholic: 'Vodka',
    nonAlcoholic: 'Green tea, Fresh pomegranate juice',
  },
  music: [
    'Traditional Shashmaqam',
    'Dutar music',
    'Uzbek folk songs',
  ],
  decorationIdeas: [
    'Blue, white and green flag colors',
    'Islamic tilework patterns',
    'Silk Road imagery',
    'Blue domes of mosques',
  ],
  conversationStarters: [
    'Have you visited the Silk Road cities?',
    'What do you know about Islamic architecture?',
  ],
  quiz: [
    {
      id: 'uzbekistan-q1',
      question: 'What is the capital of Uzbekistan?',
      options: ['Samarkand', 'Tashkent', 'Bukhara', 'Khiva'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 64, y: 42 },
};
