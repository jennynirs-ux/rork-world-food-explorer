import { Country } from '@/types';

export const tuvalu: Country = {
  id: 'tuvalu',
  name: 'Tuvalu',
  code: 'TV',
  continent: 'Oceania',
  flag: '🇹🇻',
  landscapeImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
  description:
    'Tuvalu is one of the world\'s smallest and most remote countries, a Pacific island nation extremely vulnerable to climate change.',
  quickFacts: [
    { label: 'Capital', value: 'Funafuti' },
    { label: 'Population', value: '12,000' },
    { label: 'Official Languages', value: 'Tuvaluan, English' },
    { label: 'Currency', value: 'Australian Dollar' },
    { label: 'Area', value: '26 km²' },
  ],
  facts: [
    'Fourth smallest country in the world',
    'Extremely vulnerable to sea level rise',
    'No significant natural resources or industry',
    'The .tv internet domain provides important national revenue',
  ],
  foodCulture:
    'Tuvaluan cuisine is based on fish, coconut, pulaka (swamp taro), breadfruit, and simple island ingredients, often cooked in earth ovens.',
  mainDish: {
    id: 'tuvalu-main',
    name: 'Palusami',
    description: 'Taro leaves baked with coconut cream',
    cookingTime: 90,
    servings: 4,
    dietType: 'vegan',
    ingredients: [
      { name: 'Taro leaves', amount: 400, unit: 'g' },
      { name: 'Coconut cream', amount: 400, unit: 'ml' },
      { name: 'Onions', amount: 1, unit: 'whole' },
      { name: 'Salt', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Wash taro leaves thoroughly',
      'Mix coconut cream with finely chopped onion and salt',
      'Place coconut mixture in the center of taro leaves',
      'Wrap leaves tightly into parcels',
      'Bake in an earth oven or regular oven at low heat',
      'Cook for about 90 minutes until tender',
      'Serve as a side dish, often with fish',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600',
  },
  drinks: {
    alcoholic: 'Toddy (palm wine)',
    nonAlcoholic: 'Coconut water, Fresh fruit juice',
  },
  music: [
    'Traditional fatele dance music',
    'Pacific island chants',
    'Community drumming and singing',
  ],
  decorationIdeas: [
    'Light blue and yellow flag colors',
    'Ocean and atoll imagery',
    'Star motifs from the flag',
    'Climate awareness themes',
  ],
  conversationStarters: [
    'What do you know about climate change and island nations?',
    'Would you like to visit a remote Pacific island?',
    'How do you think rising sea levels affect daily life?',
  ],
  quiz: [
    {
      id: 'tuvalu-q1',
      question: 'What is the capital of Tuvalu?',
      options: ['Funafuti', 'Tarawa', 'Apia', 'Nukuʻalofa'],
      correctAnswer: 0,
    },
    {
      id: 'tuvalu-q2',
      question: 'Why is Tuvalu especially vulnerable to climate change?',
      options: ['Earthquakes', 'Sea level rise', 'Volcanic eruptions', 'Glaciers'],
      correctAnswer: 1,
    },
    {
      id: 'tuvalu-q3',
      question: 'Which ocean is Tuvalu located in?',
      options: ['Indian Ocean', 'Atlantic Ocean', 'Pacific Ocean', 'Southern Ocean'],
      correctAnswer: 2,
    },
    {
      id: 'tuvalu-q4',
      question: 'How many square kilometers is Tuvalu approximately?',
      options: ['26 km²', '260 km²', '2,600 km²', '26,000 km²'],
      correctAnswer: 0,
    },
    {
      id: 'tuvalu-q5',
      question: 'Which currency is used in Tuvalu?',
      options: ['US Dollar', 'Tuvalu Dollar', 'Australian Dollar', 'New Zealand Dollar'],
      correctAnswer: 2,
    },
    {
      id: 'tuvalu-q6',
      question: 'What does the .tv domain represent for Tuvalu?',
      options: [
        'A television station',
        'A tourism board',
        'An important source of national income',
        'A climate initiative',
      ],
      correctAnswer: 2,
    },
    {
      id: 'tuvalu-q7',
      question: 'Tuvalu consists mainly of what type of landform?',
      options: ['Mountains', 'Atolls', 'Volcanoes', 'Plateaus'],
      correctAnswer: 1,
    },
    {
      id: 'tuvalu-q8',
      question: 'Which traditional ingredient is common in Tuvaluan food?',
      options: ['Wheat', 'Rice', 'Coconut', 'Cheese'],
      correctAnswer: 2,
    },
    {
      id: 'tuvalu-q9',
      question: 'Approximately how many people live in Tuvalu?',
      options: ['1,200', '12,000', '120,000', '1.2 million'],
      correctAnswer: 1,
    },
    {
      id: 'tuvalu-q10',
      question: 'Tuvalu is part of which region?',
      options: ['Micronesia', 'Melanesia', 'Polynesia', 'Southeast Asia'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 92, y: 16 },
};
