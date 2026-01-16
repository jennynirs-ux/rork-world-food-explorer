import { Country } from '@/types';

export const belarus: Country = {
  id: 'belarus',
  name: 'Belarus',
  code: 'BY',
  continent: 'Europe',
  flag: '🇧🇾',
  landscapeImage: 'https://images.unsplash.com/photo-1597933534414-18662a97c3db?w=800',
  description: 'Belarus is a landlocked country in Eastern Europe known for vast forests, Soviet-era architecture, and rich folk traditions.',
  quickFacts: [
    { label: 'Capital', value: 'Minsk' },
    { label: 'Population', value: '9.4 million' },
    { label: 'Official Languages', value: 'Belarusian, Russian' },
    { label: 'Currency', value: 'Belarusian Ruble' },
    { label: 'Area', value: '207,600 km²' },
  ],
  facts: [
    'About 40% of Belarus is covered by forests',
    'The Białowieża Forest is one of Europe\'s last primeval forests',
    'Belarus has four UNESCO World Heritage Sites',
    'The country is known as the "lungs of Europe"',
  ],
  foodCulture: 'Belarusian cuisine features hearty dishes with potatoes, meat, and mushrooms. Traditional recipes have been preserved for centuries.',
  mainDish: {
    id: 'belarus-main',
    name: 'Draniki',
    description: 'Traditional potato pancakes served with sour cream',
    cookingTime: 30,
    servings: 4,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Potatoes', amount: 1, unit: 'kg' },
      { name: 'Onion', amount: 1, unit: 'whole' },
      { name: 'Eggs', amount: 2, unit: 'whole' },
      { name: 'Flour', amount: 3, unit: 'tbsp' },
      { name: 'Sour cream', amount: 200, unit: 'ml' },
      { name: 'Vegetable oil', amount: 100, unit: 'ml' },
    ],
    steps: [
      'Grate potatoes and onion',
      'Squeeze out excess liquid',
      'Mix with eggs, flour, salt and pepper',
      'Form into pancakes',
      'Fry in oil until golden brown',
      'Serve hot with sour cream',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=600',
  },
  drinks: {
    alcoholic: 'Vodka, Krambambula (honey liqueur), Kvass',
    nonAlcoholic: 'Kvass, Kisel (berry drink), Black tea',
  },
  music: [
    'Traditional folk songs',
    'Belarusian polkas',
    'Modern Belarusian pop',
  ],
  decorationIdeas: [
    'Red and green flag colors',
    'Traditional woven patterns',
    'Forest and nature themes',
    'Folk art elements',
  ],
  conversationStarters: [
    'Have you explored Eastern European cuisine?',
    'What do you know about primeval forests?',
    'Do you enjoy hearty comfort food?',
  ],
  quiz: [
    {
      id: 'belarus-q1',
      question: 'What is the capital of Belarus?',
      options: ['Kiev', 'Minsk', 'Warsaw', 'Vilnius'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 52, y: 54 },
};
