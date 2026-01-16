import { Country } from '@/types';

export const democraticRepublicCongo: Country = {
  id: 'democratic-republic-congo',
  name: 'Democratic Republic of the Congo',
  code: 'CD',
  continent: 'Africa',
  flag: '🇨🇩',
  landscapeImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
  description: 'The DRC is the second-largest country in Africa, featuring the Congo River, vast rainforests, and incredible biodiversity.',
  quickFacts: [
    { label: 'Capital', value: 'Kinshasa' },
    { label: 'Population', value: '95 million' },
    { label: 'Official Language', value: 'French' },
    { label: 'Currency', value: 'Congolese Franc' },
    { label: 'Area', value: '2,344,858 km²' },
  ],
  facts: [
    'Home to the Congo Rainforest, second only to the Amazon',
    'The Congo River is the world\'s deepest river',
    'Rich in minerals including cobalt, copper, and diamonds',
    'Mountain gorillas inhabit the Virunga National Park',
  ],
  foodCulture: 'Congolese cuisine features cassava, plantains, beans, and fish. Fufu and grilled fish are staples.',
  mainDish: {
    id: 'drc-main',
    name: 'Moambe Chicken',
    description: 'Chicken in rich palm nut sauce',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken pieces', amount: 1, unit: 'kg' },
      { name: 'Palm nut cream', amount: 400, unit: 'ml' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Garlic', amount: 4, unit: 'cloves' },
      { name: 'Chili peppers', amount: 2, unit: 'whole' },
    ],
    steps: [
      'Brown chicken pieces in oil',
      'Add onions, tomatoes, and garlic',
      'Pour in palm nut cream',
      'Add chili peppers and simmer',
      'Cook until chicken is tender and sauce thickens',
      'Serve with fufu or rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600',
  },
  drinks: {
    alcoholic: 'Primus beer, Turbo King, Palm wine',
    nonAlcoholic: 'Ginger beer, Bissap, Fresh juice',
  },
  music: [
    'Soukous/Rumba',
    'Ndombolo',
    'Papa Wemba classics',
  ],
  decorationIdeas: [
    'Blue, yellow and red flag colors',
    'Rainforest imagery',
    'Traditional masks',
    'Congo River scenes',
  ],
  conversationStarters: [
    'What do you know about African rainforests?',
    'Have you heard Congolese rumba music?',
    'Do you follow African wildlife conservation?',
  ],
  quiz: [
    {
      id: 'drc-q1',
      question: 'What is the capital of the DRC?',
      options: ['Brazzaville', 'Kinshasa', 'Lubumbashi', 'Goma'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 52, y: 15 },
};
