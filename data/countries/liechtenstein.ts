import { Country } from '@/types';

export const liechtenstein: Country = {
  id: 'liechtenstein',
  name: 'Liechtenstein',
  code: 'LI',
  continent: 'Europe',
  flag: '🇱🇮',
  landscapeImage: 'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800',
  description: 'Liechtenstein is a tiny Alpine principality between Switzerland and Austria, known for medieval castles, mountain trails, and banking.',
  quickFacts: [
    { label: 'Capital', value: 'Vaduz' },
    { label: 'Population', value: '39,000' },
    { label: 'Official Language', value: 'German' },
    { label: 'Currency', value: 'Swiss Franc' },
    { label: 'Area', value: '160 km²' },
  ],
  facts: [
    'One of the world\'s smallest countries',
    'The only country entirely in the Alps',
    'Has more registered companies than citizens',
    'One of the richest countries per capita',
  ],
  foodCulture: 'Liechtenstein cuisine is similar to Swiss and Austrian with cheese, meat, and pastries.',
  mainDish: {
    id: 'liechtenstein-main',
    name: 'Käsknöpfle',
    description: 'Cheese noodles with fried onions',
    cookingTime: 45,
    servings: 4,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Egg noodles', amount: 400, unit: 'g' },
      { name: 'Cheese (Emmentaler)', amount: 300, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Butter', amount: 100, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'whole' },
    ],
    steps: [
      'Cook noodles in salted water',
      'Layer hot noodles with grated cheese',
      'Repeat layers until cheese melts',
      'Fry onions in butter until crispy',
      'Top noodles with fried onions',
      'Serve with applesauce',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600',
  },
  drinks: {
    alcoholic: 'Local wines, Schnapps',
    nonAlcoholic: 'Apple juice, Mountain spring water',
  },
  music: [
    'Traditional Alpine folk',
    'Classical music',
    'Yodeling',
  ],
  decorationIdeas: [
    'Blue and red flag colors',
    'Castle imagery',
    'Alpine mountain themes',
    'Swiss-style decor',
  ],
  conversationStarters: [
    'Have you visited any micro-nations?',
    'Do you enjoy Alpine skiing?',
  ],
  quiz: [
    {
      id: 'liechtenstein-q1',
      question: 'What is the capital of Liechtenstein?',
      options: ['Vaduz', 'Bern', 'Zurich', 'Innsbruck'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 48, y: 47 },
};
