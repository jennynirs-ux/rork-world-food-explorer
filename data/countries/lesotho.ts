import { Country } from '@/types';

export const lesotho: Country = {
  id: 'lesotho',
  name: 'Lesotho',
  code: 'LS',
  continent: 'Africa',
  flag: '🇱🇸',
  landscapeImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
  description: 'Lesotho is an enclaved country entirely surrounded by South Africa, known as the "Kingdom in the Sky" for its high altitude.',
  quickFacts: [
    { label: 'Capital', value: 'Maseru' },
    { label: 'Population', value: '2.1 million' },
    { label: 'Official Languages', value: 'Sesotho, English' },
    { label: 'Currency', value: 'Lesotho Loti' },
    { label: 'Area', value: '30,355 km²' },
  ],
  facts: [
    'The only country entirely above 1,000 meters elevation',
    'Known for traditional Basotho blankets and hats',
    'Has snow in winter despite being in Africa',
    'Rich in diamonds and water resources',
  ],
  foodCulture: 'Basotho cuisine features maize, sorghum, and vegetables with Southern African influences.',
  mainDish: {
    id: 'lesotho-main',
    name: 'Papa and Moroho',
    description: 'Maize porridge with wild spinach',
    cookingTime: 45,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Maize meal', amount: 500, unit: 'g' },
      { name: 'Wild spinach', amount: 400, unit: 'g' },
      { name: 'Tomatoes', amount: 2, unit: 'whole' },
      { name: 'Onions', amount: 1, unit: 'whole' },
      { name: 'Peanut butter', amount: 100, unit: 'g' },
    ],
    steps: [
      'Boil water and add maize meal gradually',
      'Stir to form thick porridge',
      'Sauté onions and tomatoes',
      'Add spinach and peanut butter',
      'Cook until spinach is tender',
      'Serve porridge with spinach stew',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600',
  },
  drinks: {
    alcoholic: 'Joala (traditional beer)',
    nonAlcoholic: 'Rooibos tea, Fresh milk',
  },
  music: [
    'Traditional Famo music',
    'Basotho folk songs',
    'Accordion music',
  ],
  decorationIdeas: [
    'Blue, white and green flag colors',
    'Mountain landscapes',
    'Traditional Basotho blankets',
    'Mokorotlo hat imagery',
  ],
  conversationStarters: [
    'Have you been to a country within a country?',
    'What do you know about African kingdoms?',
  ],
  quiz: [
    {
      id: 'lesotho-q1',
      question: 'What is unique about Lesotho\'s location?',
      options: ['Island nation', 'Entirely surrounded by South Africa', 'On the equator', 'Has no mountains'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 53, y: 9 },
};
