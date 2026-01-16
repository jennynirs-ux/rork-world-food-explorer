import { Country } from '@/types';

export const centralAfricanRepublic: Country = {
  id: 'central-african-republic',
  name: 'Central African Republic',
  code: 'CF',
  continent: 'Africa',
  flag: '🇨🇫',
  landscapeImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
  description: 'The Central African Republic is a landlocked country known for its diverse wildlife, tropical forests, and rich mineral resources.',
  quickFacts: [
    { label: 'Capital', value: 'Bangui' },
    { label: 'Population', value: '5 million' },
    { label: 'Official Languages', value: 'French, Sango' },
    { label: 'Currency', value: 'Central African CFA Franc' },
    { label: 'Area', value: '622,984 km²' },
  ],
  facts: [
    'Home to the rare forest elephant',
    'Rich in diamonds, gold, and uranium',
    'The country has vast rainforests',
    'Sango is a unique lingua franca developed for trade',
  ],
  foodCulture: 'Central African cuisine features cassava, plantains, peanuts, and bushmeat. French influence is evident in urban areas.',
  mainDish: {
    id: 'central-african-main',
    name: 'Fufu with Peanut Sauce',
    description: 'Starchy dough served with rich peanut-based sauce',
    cookingTime: 60,
    servings: 4,
    dietType: 'vegan',
    ingredients: [
      { name: 'Cassava flour', amount: 400, unit: 'g' },
      { name: 'Peanut butter', amount: 200, unit: 'g' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Spinach', amount: 300, unit: 'g' },
      { name: 'Palm oil', amount: 3, unit: 'tbsp' },
    ],
    steps: [
      'Boil water and gradually add cassava flour',
      'Stir vigorously to form smooth dough',
      'Sauté onions and tomatoes',
      'Add peanut butter and water to make sauce',
      'Add spinach and simmer',
      'Serve fufu with peanut sauce',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600',
  },
  drinks: {
    alcoholic: 'Palm wine, Local beer',
    nonAlcoholic: 'Ginger juice, Hibiscus tea',
  },
  music: [
    'Traditional Pygmy music',
    'Sango folk songs',
    'Central African rhythms',
  ],
  decorationIdeas: [
    'Blue, white, green, yellow and red flag colors',
    'Tropical forest imagery',
    'Traditional crafts',
  ],
  conversationStarters: [
    'What do you know about Central African wildlife?',
    'Have you tried West African cuisine?',
  ],
  quiz: [
    {
      id: 'central-african-q1',
      question: 'What is the capital of Central African Republic?',
      options: ['Bangui', 'Libreville', 'Brazzaville', 'Kinshasa'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 52, y: 18 },
};
