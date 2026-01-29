import { Country } from '@/types';

export const togo: Country = {
  id: 'togo',
  name: 'Togo',
  code: 'TG',
  continent: 'Africa',
  flag: '🇹🇬',
  landscapeImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
  description:
    'Togo is a narrow West African country known for palm-lined beaches, hilltop villages, and the Vodun religion.',
  quickFacts: [
    { label: 'Capital', value: 'Lomé' },
    { label: 'Population', value: '8.5 million' },
    { label: 'Official Language', value: 'French' },
    { label: 'Currency', value: 'West African CFA Franc' },
    { label: 'Area', value: '56,785 km²' },
  ],
  facts: [
    'Only 56 km of coastline',
    'Home to diverse ethnic groups',
    'Vodun religion is widely practiced',
    'Major phosphate producer',
  ],
  foodCulture:
    'Togolese cuisine features corn, yams, cassava, and spicy sauces with West African flavors.',
  mainDish: {
    id: 'togo-main',
    name: 'Fufu with Light Soup',
    description: 'Pounded cassava or yam with spicy soup',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Cassava or yam', amount: 1, unit: 'kg' },
      { name: 'Goat or chicken', amount: 500, unit: 'g' },
      { name: 'Tomatoes', amount: 4, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Chili peppers', amount: 3, unit: 'whole' },
      { name: 'Palm oil', amount: 50, unit: 'ml' },
    ],
    steps: [
      'Boil cassava or yam until soft',
      'Pound in mortar until smooth',
      'Make soup with meat, tomatoes, and spices',
      'Simmer until meat is tender',
      'Serve fufu with soup on side',
      'Eat by dipping fufu in soup',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600',
  },
  drinks: {
    alcoholic: 'Palm wine, Tchoukoutou (millet beer)',
    nonAlcoholic: 'Bissap, Ginger juice',
  },
  music: [
    'Traditional Agbadja dance',
    'Afrobeat',
    'Highlife',
  ],
  decorationIdeas: [
    'Green, yellow and red flag colors',
    'Traditional masks',
    'Vodun symbols',
    'West African textiles',
  ],
  conversationStarters: [
    'What do you know about West African spiritual traditions?',
    'Have you tried fufu?',
  ],
  quiz: [
    {
      id: 'togo-q1',
      question: 'What is the capital of Togo?',
      options: ['Lomé', 'Accra', 'Cotonou', 'Ouagadougou'],
      correctAnswer: 0,
    },
    {
      id: 'togo-q2',
      question: 'Which continent is Togo located in?',
      options: ['Asia', 'South America', 'Africa', 'Europe'],
      correctAnswer: 2,
    },
    {
      id: 'togo-q3',
      question: 'What is the official language of Togo?',
      options: ['English', 'Portuguese', 'French', 'Arabic'],
      correctAnswer: 2,
    },
    {
      id: 'togo-q4',
      question: 'Which traditional religion is widely practiced in Togo?',
      options: ['Islam', 'Christianity', 'Vodun', 'Hinduism'],
      correctAnswer: 2,
    },
    {
      id: 'togo-q5',
      question: 'Which ocean borders Togo?',
      options: ['Indian Ocean', 'Atlantic Ocean', 'Pacific Ocean', 'Mediterranean Sea'],
      correctAnswer: 1,
    },
    {
      id: 'togo-q6',
      question: 'Togo is especially known for producing which mineral?',
      options: ['Gold', 'Diamonds', 'Phosphate', 'Copper'],
      correctAnswer: 2,
    },
    {
      id: 'togo-q7',
      question: 'What is fufu primarily made from?',
      options: ['Rice', 'Corn', 'Cassava or yam', 'Wheat'],
      correctAnswer: 2,
    },
    {
      id: 'togo-q8',
      question: 'Which African region does Togo belong to?',
      options: ['North Africa', 'East Africa', 'West Africa', 'Southern Africa'],
      correctAnswer: 2,
    },
    {
      id: 'togo-q9',
      question: 'How long is Togo’s coastline approximately?',
      options: ['15 km', '56 km', '120 km', '300 km'],
      correctAnswer: 1,
    },
    {
      id: 'togo-q10',
      question: 'Which traditional drink is commonly consumed in Togo?',
      options: ['Palm wine', 'Sake', 'Mate', 'Kvass'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 47, y: 18 },
};
