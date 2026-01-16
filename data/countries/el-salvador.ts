import { Country } from '@/types';

export const elSalvador: Country = {
  id: 'el-salvador',
  name: 'El Salvador',
  code: 'SV',
  continent: 'North America',
  flag: '🇸🇻',
  landscapeImage: 'https://images.unsplash.com/photo-1564082979121-85b2e787881f?w=800',
  description: 'El Salvador is the smallest Central American country, known for volcanic landscapes, Pacific beaches, and pupusas.',
  quickFacts: [
    { label: 'Capital', value: 'San Salvador' },
    { label: 'Population', value: '6.5 million' },
    { label: 'Official Language', value: 'Spanish' },
    { label: 'Currency', value: 'US Dollar' },
    { label: 'Area', value: '21,041 km²' },
  ],
  facts: [
    'Known as the "Land of Volcanoes" with over 20 volcanoes',
    'The pupusa is the national dish',
    'Smallest and most densely populated Central American country',
    'Major coffee producer',
  ],
  foodCulture: 'Salvadoran cuisine features corn-based dishes, beans, and tropical fruits with indigenous and Spanish influences.',
  mainDish: {
    id: 'el-salvador-main',
    name: 'Pupusas',
    description: 'Thick corn tortillas filled with cheese, beans, or meat',
    cookingTime: 45,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Masa harina', amount: 500, unit: 'g' },
      { name: 'Cheese', amount: 300, unit: 'g' },
      { name: 'Refried beans', amount: 200, unit: 'g' },
      { name: 'Loroco flowers', amount: 100, unit: 'g' },
      { name: 'Cabbage for curtido', amount: 300, unit: 'g' },
      { name: 'Tomato sauce', amount: 200, unit: 'ml' },
    ],
    steps: [
      'Mix masa harina with water to form dough',
      'Form balls and flatten',
      'Add cheese and bean filling',
      'Seal edges and flatten into thick tortillas',
      'Cook on griddle until golden',
      'Serve with curtido and tomato sauce',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1615937722923-67beab1f0a0b?w=600',
  },
  drinks: {
    alcoholic: 'Pilsener beer, Aguardiente',
    nonAlcoholic: 'Horchata, Kolashampan, Tamarind juice',
  },
  music: [
    'Cumbia',
    'Salsa',
    'Traditional folk music',
  ],
  decorationIdeas: [
    'Blue and white flag colors',
    'Volcanic landscapes',
    'Coffee plant imagery',
    'Traditional textiles',
  ],
  conversationStarters: [
    'Have you tried pupusas?',
    'Do you enjoy volcanic landscapes?',
    'What do you know about Central American coffee?',
  ],
  quiz: [
    {
      id: 'el-salvador-q1',
      question: 'What is the capital of El Salvador?',
      options: ['San Salvador', 'Tegucigalpa', 'Managua', 'Guatemala City'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 17, y: 25 },
};
