import { Country } from '@/types';

export const guinea: Country = {
  id: 'guinea',
  name: 'Guinea',
  code: 'GN',
  continent: 'Africa',
  flag: '🇬🇳',
  landscapeImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
  description: 'Guinea is a West African country known as the "water tower of West Africa" for its rivers, rich mineral resources, and diverse ethnic groups.',
  quickFacts: [
    { label: 'Capital', value: 'Conakry' },
    { label: 'Population', value: '13.5 million' },
    { label: 'Official Language', value: 'French' },
    { label: 'Currency', value: 'Guinean Franc' },
    { label: 'Area', value: '245,857 km²' },
  ],
  facts: [
    'Guinea has over one-third of the world\'s bauxite reserves',
    'Source of major West African rivers including Niger and Gambia',
    'Home to Mount Nimba, a UNESCO World Heritage Site',
    'Rich in traditional music and dance',
  ],
  foodCulture: 'Guinean cuisine features rice, cassava, and peanut-based sauces with French colonial influences.',
  mainDish: {
    id: 'guinea-main',
    name: 'Poulet Yassa',
    description: 'Marinated chicken with onions and lemon',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken pieces', amount: 1, unit: 'kg' },
      { name: 'Onions', amount: 4, unit: 'whole' },
      { name: 'Lemons', amount: 3, unit: 'whole' },
      { name: 'Dijon mustard', amount: 2, unit: 'tbsp' },
      { name: 'Garlic', amount: 4, unit: 'cloves' },
      { name: 'Habanero pepper', amount: 1, unit: 'whole' },
    ],
    steps: [
      'Marinate chicken with lemon, mustard, and garlic',
      'Refrigerate for 2 hours',
      'Grill or bake chicken',
      'Sauté sliced onions until caramelized',
      'Add marinade and simmer',
      'Serve chicken with onion sauce over rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600',
  },
  drinks: {
    alcoholic: 'Palm wine, Local beer',
    nonAlcoholic: 'Ginger juice, Bissap, Fresh juice',
  },
  music: [
    'Traditional Djembe drumming',
    'Mande music',
    'Guinean folk songs',
  ],
  decorationIdeas: [
    'Red, yellow and green flag colors',
    'Traditional drums',
    'River and waterfall imagery',
    'West African textiles',
  ],
  conversationStarters: [
    'Have you heard djembe drumming?',
    'What do you know about West African rivers?',
  ],
  quiz: [
    {
      id: 'guinea-q1',
      question: 'What is the capital of Guinea?',
      options: ['Conakry', 'Bissau', 'Freetown', 'Monrovia'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 44, y: 22 },
};
