import { Country } from '@/types';

export const tuvalu: Country = {
  id: 'tuvalu',
  name: 'Tuvalu',
  code: 'TV',
  continent: 'Oceania',
  flag: '🇹🇻',
  landscapeImage: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80',
  description:
    "Tuvalu is one of the world’s smallest and most remote countries, a low-lying Pacific island nation made up of coral atolls and extremely vulnerable to climate change and sea level rise.",
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
    'No significant natural resources or large-scale industry',
    'The .tv internet domain provides important national revenue',
    'Tuvalu is made up of low-lying coral atolls with very limited elevation',
    'Community life is centered around family, churches, and shared traditions',
  ],

  foodCulture:
    'Tuvaluan cuisine is based on fish, coconut, pulaka (swamp taro), breadfruit, and simple island ingredients, often cooked in earth ovens. Meals are practical, local, and community-oriented.',

  history: [
    {
      year: 'Pre-1800s',
      title: 'Polynesian Settlement',
      description:
        'Tuvalu’s islands were settled by Polynesian navigators, with traditions shaped by ocean travel, fishing, and communal island life.',
    },
    {
      year: '1892',
      title: 'British Protectorate',
      description:
        'Tuvalu (then part of the Ellice Islands) became a British protectorate, later administered together with the Gilbert Islands.',
    },
    {
      year: '1978',
      title: 'Independence',
      description:
        'Tuvalu became an independent nation and joined the Commonwealth, establishing its own government and national identity.',
    },
    {
      year: '1990s–Present',
      title: 'Climate Advocacy',
      description:
        'Tuvalu has become globally recognized for climate advocacy, highlighting the risks low-lying island nations face from sea level rise.',
    },
  ],

  innovations: [
    {
      name: '.tv Internet Domain',
      year: '1990s',
      description:
        'Tuvalu’s “.tv” country domain became a notable source of revenue and international visibility.',
    },
    {
      name: 'Traditional Navigation & Community Systems',
      year: 'Ancient',
      description:
        'Local knowledge of the ocean, weather patterns, and community cooperation remains a core “technology” sustaining island life.',
    },
    {
      name: 'Climate Adaptation Initiatives',
      year: 'Modern Era',
      description:
        'Tuvalu participates in coastal protection, water security, and resilience initiatives to adapt to climate change impacts.',
    },
  ],

  mustVisit: [
    {
      name: 'Funafuti Lagoon',
      description:
        'A beautiful lagoon surrounding the capital atoll, known for calm waters, marine life, and iconic atoll scenery.',
    },
    {
      name: 'Funafuti Conservation Area',
      description:
        'A protected area with rich biodiversity, including coral reefs, tropical fish, seabirds, and small islets.',
    },
    {
      name: 'Local Community Events',
      description:
        'Traditional dancing (fatele), singing, and communal feasts offer a real window into Tuvaluan culture.',
    },
    {
      name: 'Atoll Island Life',
      description:
        'Explore the narrow strips of land, coconut palms, and village life that define Tuvalu’s unique geography and rhythm.',
    },
  ],

  travelEssentials: [
    {
      item: 'Remote logistics',
      description:
        'Tuvalu is very remote with limited flights and services—plan ahead for transport, accommodation, and supplies.',
    },
    {
      item: 'Respect local culture',
      description:
        'Dress modestly, especially in villages; Sunday is often quiet due to church and family traditions.',
    },
    {
      item: 'Cash & connectivity',
      description:
        'Card payments may be limited; mobile/internet can be slower—download essentials in advance.',
    },
    {
      item: 'Heat & sun protection',
      description:
        'It’s hot and sunny—bring reef-safe sunscreen, hydration, and lightweight clothing.',
    },
    {
      item: 'Environmental care',
      description:
        'Reefs and coastlines are fragile—avoid damaging coral and follow local conservation guidance.',
    },
  ],

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
    imageUrl: 'https://images.pexels.com/photos/34985106/pexels-photo-34985106.jpeg?auto=compress&cs=tinysrgb&h=350',
  },

  dessert: {
    id: 'tuvalu-dessert',
    name: 'Coconut Breadfruit Pudding',
    description:
      'A simple island-style dessert made by baking breadfruit with coconut cream and a touch of sweetness until soft and custardy.',
    cookingTime: 50,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Breadfruit (ripe)', amount: 600, unit: 'g' },
      { name: 'Coconut cream', amount: 400, unit: 'ml' },
      { name: 'Sugar (or coconut sugar)', amount: 80, unit: 'g' },
      { name: 'Vanilla (optional)', amount: 1, unit: 'tsp' },
      { name: 'Salt', amount: 0.25, unit: 'tsp' },
    ],
    steps: [
      'Preheat oven to 180°C and grease a baking dish',
      'Cut breadfruit into small chunks and place in dish',
      'Mix coconut cream, sugar, salt, and vanilla (optional)',
      'Pour coconut mixture over breadfruit and stir gently',
      'Bake 40–50 minutes until tender and lightly golden on top',
      'Cool slightly and serve warm or chilled',
    ],
    imageUrl: 'https://images.pexels.com/photos/11633654/pexels-photo-11633654.jpeg?auto=compress&cs=tinysrgb&h=350',
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
