import { Country } from '@/types';

export const luxembourg: Country = {
  id: 'luxembourg',
  name: 'Luxembourg',
  code: 'LU',
  continent: 'Europe',
  flag: '🇱🇺',
  landscapeImage: 'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800',
  description: 'Luxembourg is a small European country known for its medieval old town, EU institutions, multicultural population, and high living standards.',
  quickFacts: [
    { label: 'Capital', value: 'Luxembourg City' },
    { label: 'Population', value: '640,000' },
    { label: 'Official Languages', value: 'Luxembourgish, French, German' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '2,586 km²' },
  ],
  facts: [
    'One of the founding members of the EU',
    'Highest minimum wage in the EU',
    'Over 170 nationalities represented',
    'The old town is a UNESCO World Heritage Site',
  ],
  foodCulture: 'Luxembourg cuisine blends French and German influences with hearty meat dishes and pastries.',
  mainDish: {
    id: 'luxembourg-main',
    name: 'Judd mat Gaardebounen',
    description: 'Smoked pork collar with broad beans',
    cookingTime: 120,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Smoked pork collar', amount: 1, unit: 'kg' },
      { name: 'Broad beans', amount: 500, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Potatoes', amount: 6, unit: 'whole' },
      { name: 'Cream', amount: 200, unit: 'ml' },
      { name: 'Bay leaves', amount: 2, unit: 'whole' },
    ],
    steps: [
      'Soak pork overnight to reduce saltiness',
      'Boil pork with bay leaves until tender',
      'Cook broad beans separately',
      'Sauté onions and add cream',
      'Mix beans with creamy onions',
      'Serve pork slices with beans and boiled potatoes',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600',
  },
  drinks: {
    alcoholic: 'Moselle wine, Bofferding beer, Crémant sparkling wine',
    nonAlcoholic: 'Apple juice, Mineral water',
  },
  music: [
    'Traditional folk music',
    'Classical concerts',
    'European pop',
  ],
  decorationIdeas: [
    'Red, white and blue flag colors',
    'Castle and fortress imagery',
    'European architectural elements',
    'Wine region themes',
  ],
  conversationStarters: [
    'Have you visited Luxembourg\'s old town?',
    'What do you know about EU institutions?',
  ],
  quiz: [
    {
      id: 'luxembourg-q1',
      question: 'How many official languages does Luxembourg have?',
      options: ['1', '2', '3', '4'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 48, y: 50 },
};
