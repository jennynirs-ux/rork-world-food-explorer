import { Country } from '@/types';

export const lesotho: Country = {
  id: 'lesotho',
  name: 'Lesotho',
  code: 'LS',
  continent: 'Africa',
  flag: '🇱🇸',
  landscapeImage: 'https://images.unsplash.com/photo-1607234279747-12f3d4ca3c2e?w=800&q=80',
  description: 'Lesotho is an enclaved country entirely surrounded by South Africa, known as the "Kingdom in the Sky" for its high altitude.',
  quickFacts: [
    { label: 'Capital', value: 'Maseru' },
    { label: 'Population', value: '2.1 million' },
    { label: 'Official Languages', value: 'Sesotho, English' },
    { label: 'Currency', value: 'Lesotho Loti' },
    { label: 'Area', value: '30,355 km²' },
  ],
  facts: [
    'The only country entirely above 1,000 meters elevation',
    'Known for traditional Basotho blankets and hats',
    'Has snow in winter despite being in Africa',
    'Rich in diamonds and water resources',
  ],
  foodCulture: 'Basotho cuisine features maize, sorghum, and vegetables with Southern African influences.',
  history: [
    {
      year: '1822',
      title: 'Kingdom Founded',
      description: 'King Moshoeshoe I founded the Basotho nation, uniting various clans in the mountains.'
    },
    {
      year: '1966',
      title: 'Independence',
      description: 'Lesotho gained independence from British colonial rule.'
    },
  ],
  innovations: [
    {
      name: 'Basotho Blanket',
      year: 'Traditional',
      description: 'Distinctive blankets that became a cultural symbol and part of national identity.',
    },
    {
      name: 'Mountain Agriculture',
      year: 'Traditional',
      description: 'Techniques for farming in high-altitude mountainous terrain.',
    },
  ],
  mustVisit: [
    { name: 'Sani Pass', description: 'Dramatic mountain pass connecting Lesotho and South Africa.' },
    { name: 'Maletsunyane Falls', description: 'One of the highest single-drop waterfalls in Africa.' },
    { name: 'Thaba Bosiu', description: 'Historic mountain fortress of King Moshoeshoe I.' },
    { name: 'Katse Dam', description: 'Africa\'s second-largest dam with spectacular views.' },
    { name: 'Sehlabathebe National Park', description: 'Remote park with stunning landscapes and ancient rock art.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'October-April for warmer weather; May-September can have snow.' },
    { item: 'Warm clothing', description: 'Temperatures drop significantly, especially at night and in winter.' },
    { item: 'South African visa', description: 'You\'ll likely enter via South Africa, check visa requirements.' },
    { item: 'Cash', description: 'Both Lesotho Loti and South African Rand are accepted.' },
  ],
  dessert: {
    id: 'lesotho-dessert',
    name: 'Makoenva',
    description: 'Sweet dough fritters, a Basotho treat',
    cookingTime: 30,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Flour', amount: 400, unit: 'g' },
      { name: 'Sugar', amount: 100, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'large' },
      { name: 'Milk', amount: 200, unit: 'ml' },
      { name: 'Baking powder', amount: 2, unit: 'tsp' },
      { name: 'Oil for frying', amount: 500, unit: 'ml' },
    ],
    steps: [
      'Mix flour, sugar, and baking powder',
      'Beat in eggs and milk to form batter',
      'Heat oil to 350°F',
      'Drop spoonfuls of batter into hot oil',
      'Fry until golden brown on both sides',
      'Drain on paper towels',
      'Dust with sugar and serve warm',
    ],
    imageUrl: 'https://images.pexels.com/photos/35287413/pexels-photo-35287413.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  mainDish: {
    id: 'lesotho-main',
    name: 'Papa and Moroho',
    description: 'Maize porridge with wild spinach',
    cookingTime: 45,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Maize meal', amount: 500, unit: 'g' },
      { name: 'Wild spinach', amount: 400, unit: 'g' },
      { name: 'Tomatoes', amount: 2, unit: 'whole' },
      { name: 'Onions', amount: 1, unit: 'whole' },
      { name: 'Peanut butter', amount: 100, unit: 'g' },
    ],
    steps: [
      'Boil water and add maize meal gradually',
      'Stir to form thick porridge',
      'Sauté onions and tomatoes',
      'Add spinach and peanut butter',
      'Cook until spinach is tender',
      'Serve porridge with spinach stew',
    ],
    imageUrl: 'https://images.pexels.com/photos/28448378/pexels-photo-28448378.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  drinks: {
    alcoholic: 'Joala (traditional beer)',
    nonAlcoholic: 'Rooibos tea, Fresh milk',
  },
  music: [
    'Traditional Famo music',
    'Basotho folk songs',
    'Accordion music',
  ],
  decorationIdeas: [
    'Blue, white and green flag colors',
    'Mountain landscapes',
    'Traditional Basotho blankets',
    'Mokorotlo hat imagery',
  ],
  conversationStarters: [
    'Have you been to a country within a country?',
    'What do you know about African kingdoms?',
  ],
  quiz: [
    {
      id: 'lesotho-q1',
      question: 'What is unique about Lesotho\'s location?',
      options: ['Island nation', 'Entirely surrounded by South Africa', 'On the equator', 'Has no mountains'],
      correctAnswer: 1,
    },
    {
      id: 'lesotho-q2',
      question: 'What is the capital of Lesotho?',
      options: ['Pretoria', 'Maseru', 'Durban', 'Johannesburg'],
      correctAnswer: 1,
    },
    {
      id: 'lesotho-q3',
      question: 'What is Lesotho\'s nickname?',
      options: ['The Mountain Kingdom', 'Kingdom in the Sky', 'Highland Nation', 'The High Country'],
      correctAnswer: 1,
    },
    {
      id: 'lesotho-q4',
      question: 'What is unique about Lesotho\'s elevation?',
      options: ['Lowest point in Africa', 'Only country entirely above 1,000 meters', 'At sea level', 'Below sea level'],
      correctAnswer: 1,
    },
    {
      id: 'lesotho-q5',
      question: 'In which year did Lesotho gain independence?',
      options: ['1960', '1966', '1970', '1975'],
      correctAnswer: 1,
    },
    {
      id: 'lesotho-q6',
      question: 'What are the official languages of Lesotho?',
      options: ['English only', 'Sesotho only', 'Sesotho and English', 'Afrikaans and English'],
      correctAnswer: 2,
    },
    {
      id: 'lesotho-q7',
      question: 'What traditional item is Lesotho famous for?',
      options: ['Masks', 'Basotho Blankets', 'Drums', 'Pottery'],
      correctAnswer: 1,
    },
    {
      id: 'lesotho-q8',
      question: 'Does Lesotho experience snow?',
      options: ['Never', 'Yes, in winter', 'Only on mountain peaks', 'All year round'],
      correctAnswer: 1,
    },
    {
      id: 'lesotho-q9',
      question: 'What is Lesotho\'s currency?',
      options: ['Rand', 'Loti', 'Dollar', 'Pound'],
      correctAnswer: 1,
    },
    {
      id: 'lesotho-q10',
      question: 'Who founded the Basotho nation in 1822?',
      options: ['King Moshoeshoe I', 'King Shaka', 'King Cetshwayo', 'King Sobhuza'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 53, y: 9 },
};
