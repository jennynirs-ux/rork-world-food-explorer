import { Country } from '@/types';

export const republicCongo: Country = {
  id: 'republic-congo',
  name: 'Republic of the Congo',
  code: 'CG',
  continent: 'Africa',
  flag: '🇨🇬',
  landscapeImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
  description: 'The Republic of the Congo is a Central African country with equatorial rainforests, wildlife reserves, and the Congo River forming its eastern border.',
  quickFacts: [
    { label: 'Capital', value: 'Brazzaville' },
    { label: 'Population', value: '5.5 million' },
    { label: 'Official Language', value: 'French' },
    { label: 'Currency', value: 'Central African CFA Franc' },
    { label: 'Area', value: '342,000 km²' },
  ],
  facts: [
    'Brazzaville and Kinshasa are the world\'s closest capitals',
    'Home to lowland gorillas and forest elephants',
    'Rich in oil and timber resources',
    'Traditional Sapeurs fashion culture originated here',
  ],
  foodCulture: 'Congolese cuisine features cassava, plantains, peanuts, and river fish with French colonial influences.',
  mainDish: {
    id: 'congo-main',
    name: 'Poulet Moambe',
    description: 'Chicken in palm butter sauce with rice',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken', amount: 1, unit: 'kg' },
      { name: 'Palm butter', amount: 400, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Garlic', amount: 3, unit: 'cloves' },
      { name: 'Pili-pili pepper', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Season and brown chicken',
      'Sauté onions, tomatoes, and garlic',
      'Add palm butter and water',
      'Add chicken and simmer 60 minutes',
      'Season with pili-pili',
      'Serve with rice or fufu',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600',
  },
  drinks: {
    alcoholic: 'Ngok (palm wine), Local beer',
    nonAlcoholic: 'Ginger juice, Bissap',
  },
  music: [
    'Soukous',
    'Rumba Congolaise',
    'Traditional rhythms',
  ],
  decorationIdeas: [
    'Green, yellow and red flag colors',
    'Sapeur fashion imagery',
    'Rainforest themes',
    'Congo River scenes',
  ],
  conversationStarters: [
    'Have you heard of the Sapeurs?',
    'What do you know about Central African music?',
  ],
  quiz: [
    {
      id: 'congo-q1',
      question: 'What is the capital of Republic of the Congo?',
      options: ['Kinshasa', 'Brazzaville', 'Pointe-Noire', 'Dolisie'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 50, y: 18 },
};
