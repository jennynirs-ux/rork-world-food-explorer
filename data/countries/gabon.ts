import { Country } from '@/types';

export const gabon: Country = {
  id: 'gabon',
  name: 'Gabon',
  code: 'GA',
  continent: 'Africa',
  flag: '🇬🇦',
  landscapeImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
  description: 'Gabon is a Central African country on the Atlantic coast, known for pristine rainforests, diverse wildlife, and oil wealth.',
  quickFacts: [
    { label: 'Capital', value: 'Libreville' },
    { label: 'Population', value: '2.3 million' },
    { label: 'Official Language', value: 'French' },
    { label: 'Currency', value: 'Central African CFA Franc' },
    { label: 'Area', value: '267,668 km²' },
  ],
  facts: [
    'About 88% of Gabon is covered by rainforest',
    'Has 13 national parks protecting wildlife',
    'One of Africa\'s wealthiest countries due to oil',
    'Home to forest elephants and lowland gorillas',
  ],
  foodCulture: 'Gabonese cuisine features cassava, plantains, fish, and bushmeat with French colonial influences.',
  mainDish: {
    id: 'gabon-main',
    name: 'Poulet Nyembwe',
    description: 'Chicken in palm butter sauce',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken pieces', amount: 1, unit: 'kg' },
      { name: 'Palm butter', amount: 400, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Garlic', amount: 4, unit: 'cloves' },
      { name: 'Habanero pepper', amount: 1, unit: 'whole' },
    ],
    steps: [
      'Brown chicken pieces',
      'Sauté onions, tomatoes, and garlic',
      'Add palm butter and water',
      'Add chicken and simmer 60 minutes',
      'Add habanero for heat',
      'Serve with rice or plantains',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600',
  },
  drinks: {
    alcoholic: 'Palm wine, Regab beer',
    nonAlcoholic: 'Ginger juice, Fresh fruit juice',
  },
  music: [
    'Traditional Bwiti music',
    'Congolese rumba influence',
    'Modern African pop',
  ],
  decorationIdeas: [
    'Green, yellow and blue flag colors',
    'Rainforest themes',
    'Wildlife imagery',
    'Atlantic coast scenes',
  ],
  conversationStarters: [
    'What do you know about African rainforests?',
    'Have you seen forest elephants?',
  ],
  quiz: [
    {
      id: 'gabon-q1',
      question: 'What is the capital of Gabon?',
      options: ['Libreville', 'Port-Gentil', 'Franceville', 'Oyem'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 49, y: 16 },
};
