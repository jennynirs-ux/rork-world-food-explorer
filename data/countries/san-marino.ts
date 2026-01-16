import { Country } from '@/types';

export const sanMarino: Country = {
  id: 'san-marino',
  name: 'San Marino',
  code: 'SM',
  continent: 'Europe',
  flag: '🇸🇲',
  landscapeImage: 'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800',
  description: 'San Marino is one of the world\'s oldest republics, a microstate within Italy known for medieval architecture and mountain setting.',
  quickFacts: [
    { label: 'Capital', value: 'City of San Marino' },
    { label: 'Population', value: '34,000' },
    { label: 'Official Language', value: 'Italian' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '61 km²' },
  ],
  facts: [
    'Founded in 301 AD, one of the world\'s oldest republics',
    'Completely surrounded by Italy',
    'UNESCO World Heritage historic center',
    'Has its own Olympic team',
  ],
  foodCulture: 'Sammarinese cuisine is similar to Italian with local specialties.',
  mainDish: {
    id: 'san-marino-main',
    name: 'Torta Tre Monti',
    description: 'Traditional layered wafer cake with chocolate',
    cookingTime: 60,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Wafer sheets', amount: 15, unit: 'pieces' },
      { name: 'Hazelnut cream', amount: 300, unit: 'g' },
      { name: 'Chocolate', amount: 200, unit: 'g' },
      { name: 'Cocoa powder', amount: 50, unit: 'g' },
      { name: 'Sugar', amount: 100, unit: 'g' },
    ],
    steps: [
      'Layer wafers with hazelnut cream',
      'Build five layers',
      'Melt chocolate for coating',
      'Cover entire cake with chocolate',
      'Dust with cocoa powder',
      'Chill before serving',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600',
  },
  drinks: {
    alcoholic: 'Sangiovese wine, Grappa',
    nonAlcoholic: 'Espresso, Italian soda',
  },
  music: [
    'Classical Italian',
    'Traditional folk',
  ],
  decorationIdeas: [
    'White and blue flag colors',
    'Three towers imagery',
    'Medieval architecture',
    'Mountain themes',
  ],
  conversationStarters: [
    'Have you visited any microstates?',
    'What do you know about ancient republics?',
  ],
  quiz: [
    {
      id: 'san-marino-q1',
      question: 'When was San Marino founded?',
      options: ['301 AD', '1000 AD', '1500 AD', '1800 AD'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 49, y: 44 },
};
