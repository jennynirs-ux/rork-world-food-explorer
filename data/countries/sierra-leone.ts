import { Country } from '@/types';

export const sierraLeone: Country = {
  id: 'sierra-leone',
  name: 'Sierra Leone',
  code: 'SL',
  continent: 'Africa',
  flag: '🇸🇱',
  landscapeImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
  description: 'Sierra Leone is a West African country known for beautiful beaches, diamond mines, and diverse wildlife.',
  quickFacts: [
    { label: 'Capital', value: 'Freetown' },
    { label: 'Population', value: '8.3 million' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'Sierra Leonean Leone' },
    { label: 'Area', value: '71,740 km²' },
  ],
  facts: [
    'Named by Portuguese explorers meaning "Lion Mountains"',
    'Rich in diamonds and other minerals',
    'Has some of West Africa\'s best beaches',
    'Home to unique cotton tree in Freetown',
  ],
  foodCulture: 'Sierra Leonean cuisine features rice, cassava, fish, and palm oil with West African flavors.',
  mainDish: {
    id: 'sierra-leone-main',
    name: 'Jollof Rice',
    description: 'Spiced rice with tomatoes and vegetables',
    cookingTime: 60,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Rice', amount: 500, unit: 'g' },
      { name: 'Tomato paste', amount: 200, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Bell peppers', amount: 2, unit: 'whole' },
      { name: 'Scotch bonnet pepper', amount: 1, unit: 'whole' },
      { name: 'Palm oil', amount: 100, unit: 'ml' },
    ],
    steps: [
      'Sauté onions and peppers in palm oil',
      'Add tomato paste and spices',
      'Add rice and water',
      'Cover and simmer until rice absorbs liquid',
      'Fluff with fork',
      'Serve with fried plantains',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600',
  },
  drinks: {
    alcoholic: 'Star beer, Palm wine, Poyo',
    nonAlcoholic: 'Ginger beer, Fresh coconut water',
  },
  music: [
    'Palm wine music',
    'Bubu music',
    'Afrobeat',
  ],
  decorationIdeas: [
    'Green, white and blue flag colors',
    'Beach and ocean themes',
    'Traditional masks',
    'Diamond imagery',
  ],
  conversationStarters: [
    'Have you explored West African beaches?',
    'What do you know about Sierra Leone\'s history?',
  ],
  quiz: [
    {
      id: 'sierra-leone-q1',
      question: 'What is the capital of Sierra Leone?',
      options: ['Freetown', 'Monrovia', 'Conakry', 'Accra'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 44, y: 20 },
};
