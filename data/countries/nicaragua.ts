import { Country } from '@/types';

export const nicaragua: Country = {
  id: 'nicaragua',
  name: 'Nicaragua',
  code: 'NI',
  continent: 'North America',
  flag: '🇳🇮',
  landscapeImage: 'https://images.unsplash.com/photo-1564082979121-85b2e787881f?w=800',
  description: 'Nicaragua is the largest Central American country, known for dramatic Pacific and Caribbean coasts, volcanoes, and colonial cities.',
  quickFacts: [
    { label: 'Capital', value: 'Managua' },
    { label: 'Population', value: '6.9 million' },
    { label: 'Official Language', value: 'Spanish' },
    { label: 'Currency', value: 'Nicaraguan Córdoba' },
    { label: 'Area', value: '130,373 km²' },
  ],
  facts: [
    'Has 19 active volcanoes',
    'Lake Nicaragua is Central America\'s largest lake',
    'Granada is one of the oldest colonial cities',
    'Major coffee and tobacco producer',
  ],
  foodCulture: 'Nicaraguan cuisine features corn, beans, plantains, and fresh seafood with Spanish and indigenous influences.',
  mainDish: {
    id: 'nicaragua-main',
    name: 'Gallo Pinto',
    description: 'Traditional rice and beans dish',
    cookingTime: 30,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Cooked rice', amount: 500, unit: 'g' },
      { name: 'Red beans', amount: 400, unit: 'g' },
      { name: 'Onions', amount: 1, unit: 'whole' },
      { name: 'Bell peppers', amount: 1, unit: 'whole' },
      { name: 'Garlic', amount: 3, unit: 'cloves' },
      { name: 'Vegetable oil', amount: 3, unit: 'tbsp' },
    ],
    steps: [
      'Sauté onions, peppers, and garlic',
      'Add cooked beans with liquid',
      'Stir in rice',
      'Mix until beans slightly mash',
      'Season with salt and pepper',
      'Serve with fried eggs and tortillas',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600',
  },
  drinks: {
    alcoholic: 'Flor de Caña rum, Toña beer',
    nonAlcoholic: 'Pinolillo (corn and cacao drink), Tiste, Fresh fruit juice',
  },
  music: [
    'Palo de Mayo',
    'Marimba music',
    'Latin pop',
  ],
  decorationIdeas: [
    'Blue and white flag colors',
    'Volcanic landscapes',
    'Colonial architecture',
    'Lake and ocean themes',
  ],
  conversationStarters: [
    'Have you visited Central American volcanoes?',
    'What do you know about colonial cities?',
  ],
  quiz: [
    {
      id: 'nicaragua-q1',
      question: 'What is the capital of Nicaragua?',
      options: ['Managua', 'Granada', 'León', 'Masaya'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 18, y: 25 },
};
