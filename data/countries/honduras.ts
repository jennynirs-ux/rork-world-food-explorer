import { Country } from '@/types';

export const honduras: Country = {
  id: 'honduras',
  name: 'Honduras',
  code: 'HN',
  continent: 'North America',
  flag: '🇭🇳',
  landscapeImage: 'https://images.unsplash.com/photo-1564082979121-85b2e787881f?w=800',
  description: 'Honduras is a Central American country known for Mayan ruins, Caribbean beaches, diving in the Bay Islands, and coffee production.',
  quickFacts: [
    { label: 'Capital', value: 'Tegucigalpa' },
    { label: 'Population', value: '10 million' },
    { label: 'Official Language', value: 'Spanish' },
    { label: 'Currency', value: 'Honduran Lempira' },
    { label: 'Area', value: '112,492 km²' },
  ],
  facts: [
    'Home to Copán, one of the most important Mayan sites',
    'The Bay Islands offer world-class diving and snorkeling',
    'Major coffee exporter',
    'Name means "depths" referring to deep waters off the coast',
  ],
  foodCulture: 'Honduran cuisine features corn-based dishes, beans, plantains, and fresh seafood along the coast.',
  mainDish: {
    id: 'honduras-main',
    name: 'Baleadas',
    description: 'Flour tortillas filled with beans, cheese, and cream',
    cookingTime: 30,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Flour tortillas', amount: 12, unit: 'pieces' },
      { name: 'Refried beans', amount: 400, unit: 'g' },
      { name: 'Queso fresco', amount: 200, unit: 'g' },
      { name: 'Honduran crema', amount: 200, unit: 'ml' },
      { name: 'Avocado', amount: 2, unit: 'whole' },
      { name: 'Eggs (optional)', amount: 6, unit: 'whole' },
    ],
    steps: [
      'Warm tortillas on griddle',
      'Spread refried beans on tortilla',
      'Add crumbled cheese',
      'Drizzle with crema',
      'Add sliced avocado',
      'Fold and serve immediately',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1615937722923-67beab1f0a0b?w=600',
  },
  drinks: {
    alcoholic: 'Port Royal beer, Aguardiente',
    nonAlcoholic: 'Horchata, Tamarind juice, Coffee',
  },
  music: [
    'Punta music',
    'Garifuna drums',
    'Latin pop',
  ],
  decorationIdeas: [
    'Blue and white flag colors',
    'Mayan symbols',
    'Caribbean beach themes',
    'Coffee plant imagery',
  ],
  conversationStarters: [
    'Have you been diving in the Caribbean?',
    'What do you know about Mayan civilization?',
    'Do you enjoy Central American coffee?',
  ],
  quiz: [
    {
      id: 'honduras-q1',
      question: 'What is the capital of Honduras?',
      options: ['Tegucigalpa', 'San Pedro Sula', 'Managua', 'San Salvador'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 18, y: 26 },
};
