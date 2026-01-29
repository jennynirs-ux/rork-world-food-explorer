import { Country } from '@/types';

export const vanuatu: Country = {
  id: 'vanuatu',
  name: 'Vanuatu',
  code: 'VU',
  continent: 'Oceania',
  flag: '🇻🇺',
  landscapeImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
  description:
    'Vanuatu is a Pacific island nation known for active volcanoes, world-class diving, the land diving tradition, and rich Melanesian culture.',
  quickFacts: [
    { label: 'Capital', value: 'Port Vila' },
    { label: 'Population', value: '320,000' },
    { label: 'Official Languages', value: 'Bislama, English, French' },
    { label: 'Currency', value: 'Vanuatu Vatu' },
    { label: 'Area', value: '12,189 km²' },
  ],
  facts: [
    'Home to several active volcanoes including Mount Yasur',
    'Land diving is the inspiration for modern bungee jumping',
    'Over 100 indigenous languages are spoken',
    'Ranked highly on the Happy Planet Index',
  ],
  foodCulture:
    'Ni-Vanuatu cuisine features root vegetables, coconut, seafood, and dishes cooked in earth ovens. Lap lap is considered the national dish.',
  mainDish: {
    id: 'vanuatu-main',
    name: 'Lap Lap',
    description: 'Traditional dish made from grated root vegetables and coconut milk, wrapped and cooked slowly',
    cookingTime: 120,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Yam or taro', amount: 1000, unit: 'g' },
      { name: 'Manioc (cassava)', amount: 500, unit: 'g' },
      { name: 'Coconut milk', amount: 400, unit: 'ml' },
      { name: 'Cabbage or banana leaves', amount: 200, unit: 'g' },
    ],
    steps: [
      'Peel and finely grate yam, taro, and manioc',
      'Mix grated vegetables with coconut milk until thick',
      'Line a baking dish with cabbage or banana leaves',
      'Spread mixture evenly and wrap tightly with leaves',
      'Bake or steam at low heat for 2 hours',
      'Allow to rest 10 minutes before slicing',
      'Serve warm as a main dish or side',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600',
  },
  drinks: {
    alcoholic: 'Kava, Tusker beer',
    nonAlcoholic: 'Coconut water, Fresh tropical juice',
  },
  music: [
    'Traditional string band music',
    'Melanesian chants',
    'Island reggae',
  ],
  decorationIdeas: [
    'Red, yellow, green and black flag colors',
    'Volcano and island imagery',
    'Traditional masks and carvings',
    'Ocean and reef themes',
  ],
  conversationStarters: [
    'Have you ever seen an active volcano?',
    'What do you know about traditional land diving?',
    'Would you visit a remote Pacific island?',
  ],
  quiz: [
    {
      id: 'vanuatu-q1',
      question: 'What is the capital of Vanuatu?',
      options: ['Port Vila', 'Suva', 'Honiara', 'Nadi'],
      correctAnswer: 0,
    },
    {
      id: 'vanuatu-q2',
      question: 'Which tradition inspired modern bungee jumping?',
      options: ['Surfing', 'Land diving', 'Cliff jumping', 'Fire dancing'],
      correctAnswer: 1,
    },
    {
      id: 'vanuatu-q3',
      question: 'Which ocean surrounds Vanuatu?',
      options: ['Indian Ocean', 'Atlantic Ocean', 'Pacific Ocean', 'Southern Ocean'],
      correctAnswer: 2,
    },
    {
      id: 'vanuatu-q4',
      question: 'What is the national dish of Vanuatu?',
      options: ['Lap lap', 'Poi', 'Hangi', 'Ceviche'],
      correctAnswer: 0,
    },
    {
      id: 'vanuatu-q5',
      question: 'How many official languages does Vanuatu have?',
      options: ['1', '2', '3', '4'],
      correctAnswer: 2,
    },
    {
      id: 'vanuatu-q6',
      question: 'Which active volcano is one of Vanuatu’s most famous?',
      options: ['Mount Yasur', 'Mount Fuji', 'Mount Etna', 'Mount Agung'],
      correctAnswer: 0,
    },
    {
      id: 'vanuatu-q7',
      question: 'Vanuatu belongs to which cultural region?',
      options: ['Polynesia', 'Micronesia', 'Melanesia', 'Australasia'],
      correctAnswer: 2,
    },
    {
      id: 'vanuatu-q8',
      question: 'What is the local currency of Vanuatu?',
      options: ['Dollar', 'Vatu', 'Franc', 'Peso'],
      correctAnswer: 1,
    },
    {
      id: 'vanuatu-q9',
      question: 'Which drink is traditionally consumed in ceremonies?',
      options: ['Rum', 'Wine', 'Kava', 'Beer'],
      correctAnswer: 2,
    },
    {
      id: 'vanuatu-q10',
      question: 'What makes Vanuatu linguistically unique?',
      options: [
        'One official dialect',
        'Over 100 indigenous languages',
        'Only European languages',
        'No written language',
      ],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 91, y: 12 },
};
