import { Country } from '@/types';

export const vaticanCity: Country = {
  id: 'vatican-city',
  name: 'Vatican City',
  code: 'VA',
  continent: 'Europe',
  flag: '🇻🇦',
  landscapeImage: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800',
  description: 'Vatican City is the world\'s smallest country, headquarters of the Roman Catholic Church, known for St. Peter\'s Basilica and the Sistine Chapel.',
  quickFacts: [
    { label: 'Capital', value: 'Vatican City' },
    { label: 'Population', value: '800' },
    { label: 'Official Languages', value: 'Italian, Latin' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '0.44 km²' },
  ],
  facts: [
    'The world\'s smallest country by area and population',
    'Entirely within Rome, Italy',
    'Home to the Pope and center of Catholic Church',
    'Contains priceless Renaissance art and architecture',
  ],
  foodCulture: 'Vatican cuisine is essentially Italian with a focus on traditional Roman dishes.',
  mainDish: {
    id: 'vatican-main',
    name: 'Cacio e Pepe',
    description: 'Roman pasta with cheese and black pepper',
    cookingTime: 20,
    servings: 4,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Pasta (spaghetti or tonnarelli)', amount: 400, unit: 'g' },
      { name: 'Pecorino Romano cheese', amount: 200, unit: 'g' },
      { name: 'Black pepper', amount: 2, unit: 'tsp' },
      { name: 'Pasta water', amount: 200, unit: 'ml' },
    ],
    steps: [
      'Cook pasta until al dente',
      'Toast black pepper in pan',
      'Add pasta water to pepper',
      'Mix in grated cheese to make sauce',
      'Toss pasta in sauce',
      'Serve immediately',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600',
  },
  drinks: {
    alcoholic: 'Italian wine, Communion wine',
    nonAlcoholic: 'Espresso, Italian soda',
  },
  music: [
    'Gregorian chant',
    'Classical sacred music',
    'Papal choir performances',
  ],
  decorationIdeas: [
    'Gold and white papal colors',
    'St. Peter\'s Basilica imagery',
    'Sistine Chapel art',
    'Papal symbols',
  ],
  conversationStarters: [
    'Have you visited the Sistine Chapel?',
    'What do you know about Renaissance art?',
  ],
  quiz: [
    {
      id: 'vatican-q1',
      question: 'What is the smallest country in the world?',
      options: ['Monaco', 'Vatican City', 'San Marino', 'Liechtenstein'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 49, y: 42 },
};
