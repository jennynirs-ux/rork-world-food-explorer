import { Country } from '@/types';

export const monaco: Country = {
  id: 'monaco',
  name: 'Monaco',
  code: 'MC',
  continent: 'Europe',
  flag: '🇲🇨',
  landscapeImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
  description: 'Monaco is a tiny city-state on the French Riviera, known for luxury, casinos, the Grand Prix, and being a billionaire\'s playground.',
  quickFacts: [
    { label: 'Capital', value: 'Monaco' },
    { label: 'Population', value: '39,000' },
    { label: 'Official Language', value: 'French' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '2.02 km²' },
  ],
  facts: [
    'The world\'s second smallest country',
    'Has the highest number of millionaires per capita',
    'No income tax for residents',
    'Home to the Monaco Grand Prix',
  ],
  foodCulture: 'Monégasque cuisine is similar to French and Italian Mediterranean cooking.',
  mainDish: {
    id: 'monaco-main',
    name: 'Barbajuan',
    description: 'Fried pastry filled with Swiss chard and ricotta',
    cookingTime: 60,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Pastry dough', amount: 400, unit: 'g' },
      { name: 'Swiss chard', amount: 300, unit: 'g' },
      { name: 'Ricotta cheese', amount: 200, unit: 'g' },
      { name: 'Parmesan', amount: 50, unit: 'g' },
      { name: 'Onions', amount: 1, unit: 'whole' },
      { name: 'Olive oil', amount: 100, unit: 'ml' },
    ],
    steps: [
      'Sauté onions and chard',
      'Mix with cheeses',
      'Roll out pastry dough',
      'Fill with chard mixture',
      'Fold into half-moons and seal',
      'Deep fry until golden',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1555507313-f8b87c3ed7ac?w=600',
  },
  drinks: {
    alcoholic: 'Champagne, French wines, Cocktails',
    nonAlcoholic: 'Espresso, French mineral water',
  },
  music: [
    'Classical concerts',
    'Opera',
    'Jazz festivals',
  ],
  decorationIdeas: [
    'Red and white flag colors',
    'Luxury yacht imagery',
    'Casino themes',
    'Formula 1 elements',
  ],
  conversationStarters: [
    'Have you been to Monte Carlo?',
    'What do you know about Formula 1?',
  ],
  quiz: [
    {
      id: 'monaco-q1',
      question: 'What famous race is held in Monaco?',
      options: ['Le Mans 24', 'Monaco Grand Prix', 'Tour de France', 'Dakar Rally'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 48, y: 44 },
};
