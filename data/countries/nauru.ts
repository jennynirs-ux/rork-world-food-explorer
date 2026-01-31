import { Country } from '@/types';

export const nauru: Country = {
  id: 'nauru',
  name: 'Nauru',
  code: 'NR',
  continent: 'Oceania',
  flag: '🇳🇷',
  landscapeImage: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=800&q=80',
  description: 'Nauru is the world\'s smallest island nation, known for phosphate mining history and unique challenges.',
  quickFacts: [
    { label: 'Capital', value: 'Yaren (de facto)' },
    { label: 'Population', value: '12,000' },
    { label: 'Official Languages', value: 'Nauruan, English' },
    { label: 'Currency', value: 'Australian Dollar' },
    { label: 'Area', value: '21 km²' },
  ],
  facts: [
    'The world\'s smallest island nation',
    'Has no official capital city',
    'Was once one of the richest countries due to phosphate',
    'Environmental damage from mining',
  ],
  foodCulture: 'Nauruan cuisine features fish, coconut, and imported foods.',
  history: [
    {
      year: '1798',
      title: 'European Discovery',
      description: 'British Captain John Fearn was the first European to visit Nauru.'
    },
    {
      year: '1968',
      title: 'Independence',
      description: 'Nauru gained independence, becoming the world\'s smallest republic.'
    },
    {
      year: '1970s-1980s',
      title: 'Phosphate Wealth',
      description: 'Nauru had one of the highest per capita incomes from phosphate mining.'
    },
  ],
  innovations: [
    {
      name: 'Phosphate Mining',
      year: '1907',
      description: 'Discovered massive phosphate deposits that brought temporary wealth.',
    },
    {
      name: 'Island Rehabilitation',
      year: 'Modern',
      description: 'Efforts to restore mined land and environment.',
    },
  ],
  mustVisit: [
    { name: 'Anibare Bay', description: 'Beautiful beach with white sand and clear waters.' },
    { name: 'Buada Lagoon', description: 'Freshwater lagoon surrounded by coconut palms.' },
    { name: 'Command Ridge', description: 'WWII Japanese command post with coastal views.' },
    { name: 'Moqua Well', description: 'Underground freshwater cave with historical significance.' },
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'Year-round tropical climate; November-February slightly wetter.' },
    { item: 'Visa', description: 'Visa on arrival for most nationalities.' },
    { item: 'Limited facilities', description: 'Very limited tourism infrastructure; plan accordingly.' },
    { item: 'Cash', description: 'Australian dollars used; one bank with limited hours.' },
  ],
  dessert: {
    id: 'nauru-dessert',
    name: 'Coconut Pie',
    description: 'Sweet coconut custard pie',
    cookingTime: 60,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Pie crust', amount: 1, unit: 'whole' },
      { name: 'Grated coconut', amount: 300, unit: 'g' },
      { name: 'Coconut milk', amount: 400, unit: 'ml' },
      { name: 'Sugar', amount: 200, unit: 'g' },
      { name: 'Eggs', amount: 4, unit: 'large' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Press pie crust into pan',
      'Mix coconut, coconut milk, sugar, and eggs',
      'Add vanilla and stir well',
      'Pour into crust',
      'Bake at 350°F for 45 minutes',
      'Cool completely before slicing',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600',
  },
  mainDish: {
    id: 'nauru-main',
    name: 'Ika Mata',
    description: 'Raw fish marinated in coconut cream',
    cookingTime: 30,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'Fresh tuna', amount: 500, unit: 'g' },
      { name: 'Coconut cream', amount: 400, unit: 'ml' },
      { name: 'Limes', amount: 4, unit: 'whole' },
      { name: 'Tomatoes', amount: 2, unit: 'whole' },
      { name: 'Onions', amount: 1, unit: 'whole' },
    ],
    steps: [
      'Dice fish into cubes',
      'Marinate in lime juice for 20 minutes',
      'Drain excess lime juice',
      'Add coconut cream',
      'Mix in diced tomatoes and onions',
      'Serve chilled',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559737558-2f5a2f7e8c59?w=600',
  },
  drinks: {
    alcoholic: 'Beer',
    nonAlcoholic: 'Coconut water, Fresh juice',
  },
  music: [
    'Pacific island songs',
    'Traditional chants',
  ],
  decorationIdeas: [
    'Blue and yellow flag colors',
    'Ocean themes',
    'Tropical imagery',
  ],
  conversationStarters: [
    'What do you know about small island nations?',
    'Have you heard of phosphate mining?',
  ],
  quiz: [
    {
      id: 'nauru-q1',
      question: 'What is unique about Nauru\'s size?',
      options: ['Largest island', 'Smallest island nation', 'Highest peak', 'Longest beach'],
      correctAnswer: 1,
    },
    {
      id: 'nauru-q2',
      question: 'What mineral brought wealth to Nauru?',
      options: ['Gold', 'Diamonds', 'Phosphate', 'Oil'],
      correctAnswer: 2,
    },
    {
      id: 'nauru-q3',
      question: 'What currency does Nauru use?',
      options: ['US Dollar', 'Australian Dollar', 'Nauruan Dollar', 'New Zealand Dollar'],
      correctAnswer: 1,
    },
    {
      id: 'nauru-q4',
      question: 'In which year did Nauru gain independence?',
      options: ['1960', '1968', '1975', '1980'],
      correctAnswer: 1,
    },
    {
      id: 'nauru-q5',
      question: 'What is Nauru\'s approximate area?',
      options: ['21 km²', '100 km²', '500 km²', '1000 km²'],
      correctAnswer: 0,
    },
    {
      id: 'nauru-q6',
      question: 'Does Nauru have an official capital city?',
      options: ['Yes, Yaren', 'No official capital', 'Yes, Anibare', 'Yes, Buada'],
      correctAnswer: 1,
    },
    {
      id: 'nauru-q7',
      question: 'What are the official languages of Nauru?',
      options: ['English only', 'Nauruan only', 'Nauruan and English', 'French and English'],
      correctAnswer: 2,
    },
    {
      id: 'nauru-q8',
      question: 'What type of government does Nauru have?',
      options: ['Monarchy', 'Republic', 'Territory', 'Protectorate'],
      correctAnswer: 1,
    },
    {
      id: 'nauru-q9',
      question: 'What environmental issue does Nauru face from past mining?',
      options: ['Flooding', 'Land degradation', 'Earthquakes', 'Tsunamis'],
      correctAnswer: 1,
    },
    {
      id: 'nauru-q10',
      question: 'What is the de facto capital of Nauru?',
      options: ['Yaren', 'Anibare', 'Buada', 'Meneng'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 91, y: 19 },
};
