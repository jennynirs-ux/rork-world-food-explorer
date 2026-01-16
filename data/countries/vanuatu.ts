import { Country } from '@/types';

export const vanuatu: Country = {
  id: 'vanuatu',
  name: 'Vanuatu',
  code: 'VU',
  continent: 'Oceania',
  flag: '🇻🇺',
  landscapeImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
  description: 'Vanuatu is a Pacific island nation known for active volcanoes, world-class diving, land diving tradition, and Melanesian culture.',
  quickFacts: [
    { label: 'Capital', value: 'Port Vila' },
    { label: 'Population', value: '320,000' },
    { label: 'Official Languages', value: 'Bislama, English, French' },
    { label: 'Currency', value: 'Vanuatu Vatu' },
    { label: 'Area', value: '12,189 km²' },
  ],
  facts: [
    'Home to several active volcanoes including Mount Yasur',
    'Land diving is the inspiration for bungee jumping',
    'Over 100 indigenous languages spoken',
    'Named "Happiest Country" by the Happy Planet Index',
  ],
  foodCulture: 'Ni-Vanuatu cuisine features root vegetables, coconut, seafood, and lap lap.',
  mainDish: {
    id: 'vanuatu-main',
    name: 'Lap Lap',
    description: 'Traditional dish with grated root vegetables and coconut',
    cookingTime: 120,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Yam or taro', amount: 1, unit: 'kg' },
      { name: 'Manioc', amount: 500, unit: 'g' },
      { name: 'Coconut milk', amount: 400, unit: 'ml' },
      { name: 'Cabbage leaves', amount: 200, unit: 'g' },
    ],
    steps: [
      'Grate root vegetables',
      'Mix with coconut milk',
      'Wrap in banana or cabbage leaves',
      'Cook in earth oven or steam',
      'Cook for 2 hours',
      'Serve with fish or meat',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600',
  },
  drinks: {
    alcoholic: 'Kava, Tusker beer',
    nonAlcoholic: 'Coconut water, Fresh juice',
  },
  music: [
    'Traditional string band music',
    'Melanesian chants',
    'Island reggae',
  ],
  decorationIdeas: [
    'Red, yellow, green and black flag colors',
    'Volcano imagery',
    'Traditional masks',
    'Ocean themes',
  ],
  conversationStarters: [
    'Have you seen an active volcano?',
    'What do you know about land diving?',
  ],
  quiz: [
    {
      id: 'vanuatu-q1',
      question: 'What activity inspired bungee jumping?',
      options: ['Surfing', 'Land diving', 'Cliff jumping', 'Zip-lining'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 91, y: 12 },
};
