import { Country } from '@/types';

export const marshallIslands: Country = {
  id: 'marshall-islands',
  name: 'Marshall Islands',
  code: 'MH',
  continent: 'Oceania',
  flag: '🇲🇭',
  landscapeImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
  description: 'The Marshall Islands is a Pacific island nation known for pristine atolls, WWII history, and traditional navigation techniques.',
  quickFacts: [
    { label: 'Capital', value: 'Majuro' },
    { label: 'Population', value: '59,000' },
    { label: 'Official Languages', value: 'Marshallese, English' },
    { label: 'Currency', value: 'US Dollar' },
    { label: 'Area', value: '181 km²' },
  ],
  facts: [
    'Bikini Atoll was a nuclear test site',
    'Traditional stick chart navigation is unique',
    'Has some of the best diving in the Pacific',
    'Consists of 29 atolls and 5 islands',
  ],
  foodCulture: 'Marshallese cuisine features fish, breadfruit, taro, and coconut.',
  history: [
    {
      year: '1946',
      title: 'Nuclear Testing',
      description: 'The US conducted nuclear tests at Bikini Atoll, displacing residents.'
    },
    {
      year: '1986',
      title: 'Independence',
      description: 'Marshall Islands gained independence from US trust territory.'
    },
  ],
  innovations: [
    {
      name: 'Stick Chart Navigation',
      year: 'Traditional',
      description: 'Unique wave navigation charts made from sticks showing ocean swells.',
    },
    {
      name: 'Outrigger Canoe Design',
      year: 'Traditional',
      description: 'Advanced canoe designs for long-distance ocean voyaging.',
    },
  ],
  mustVisit: [
    { name: 'Bikini Atoll', description: 'UNESCO site, former nuclear test site now a dive destination.' },
    { name: 'Majuro', description: 'Capital atoll with museums and local markets.' },
    { name: 'Arno Atoll', description: 'Traditional Marshallese culture and pristine beaches.' },
    { name: 'Alele Museum', description: 'Showcases Marshallese history and culture.' },
    { name: 'Laura Beach', description: 'Beautiful beach on Majuro with calm waters.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'December-April for drier weather; May-November is wetter.' },
    { item: 'Visa', description: 'US citizens visa-free; others check requirements.' },
    { item: 'Cash', description: 'US dollars used; ATMs limited outside Majuro.' },
    { item: 'Sun protection', description: 'Strong equatorial sun requires maximum protection.' },
  ],
  dessert: {
    id: 'marshall-islands-dessert',
    name: 'Coconut Candy',
    description: 'Sweet coconut treats, a Marshallese favorite',
    cookingTime: 30,
    servings: 20,
    dietType: 'vegan',
    ingredients: [
      { name: 'Fresh coconut, grated', amount: 400, unit: 'g' },
      { name: 'Sugar', amount: 200, unit: 'g' },
      { name: 'Water', amount: 100, unit: 'ml' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Cook sugar and water until syrupy',
      'Add grated coconut and vanilla',
      'Stir until mixture thickens',
      'Drop spoonfuls onto greased surface',
      'Let cool and harden',
      'Store in airtight container',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=900',
  },
  mainDish: {
    id: 'marshall-islands-main',
    name: 'Barramundi Ko',
    description: 'Baked coconut fish with rice',
    cookingTime: 45,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'White fish', amount: 600, unit: 'g' },
      { name: 'Coconut cream', amount: 400, unit: 'ml' },
      { name: 'Rice', amount: 300, unit: 'g' },
      { name: 'Onions', amount: 1, unit: 'whole' },
      { name: 'Lime', amount: 2, unit: 'whole' },
    ],
    steps: [
      'Marinate fish in lime juice',
      'Layer rice in baking dish',
      'Place fish on rice',
      'Pour coconut cream over',
      'Bake at 350°F for 30 minutes',
      'Serve with fresh vegetables',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=900',
  },
  drinks: {
    alcoholic: 'Toddy (palm wine)',
    nonAlcoholic: 'Coconut water, Fresh juice',
  },
  music: [
    'Traditional chants',
    'Pacific island rhythms',
    'Contemporary Marshallese pop',
  ],
  decorationIdeas: [
    'Orange, white and blue flag colors',
    'Ocean and atoll imagery',
    'Traditional stick charts',
    'Tropical themes',
  ],
  conversationStarters: [
    'What do you know about Pacific atolls?',
    'Have you heard of traditional navigation?',
  ],
  quiz: [
    {
      id: 'marshall-islands-q1',
      question: 'What is the capital of Marshall Islands?',
      options: ['Majuro', 'Ebeye', 'Bikini', 'Jaluit'],
      correctAnswer: 0,
    },
    {
      id: 'marshall-islands-q2',
      question: 'What famous atoll was used for nuclear testing?',
      options: ['Majuro', 'Kwajalein', 'Bikini Atoll', 'Enewetak'],
      correctAnswer: 2,
    },
    {
      id: 'marshall-islands-q3',
      question: 'In which year did Marshall Islands gain independence?',
      options: ['1975', '1980', '1986', '1990'],
      correctAnswer: 2,
    },
    {
      id: 'marshall-islands-q4',
      question: 'What traditional navigation tool did Marshallese people use?',
      options: ['Compass', 'Stick charts', 'Maps', 'GPS'],
      correctAnswer: 1,
    },
    {
      id: 'marshall-islands-q5',
      question: 'What currency does Marshall Islands use?',
      options: ['Marshall Dollar', 'US Dollar', 'Australian Dollar', 'Yen'],
      correctAnswer: 1,
    },
    {
      id: 'marshall-islands-q6',
      question: 'How many atolls and islands make up Marshall Islands?',
      options: ['10 atolls', '29 atolls and 5 islands', '50 atolls', '100 atolls'],
      correctAnswer: 1,
    },
    {
      id: 'marshall-islands-q7',
      question: 'What are the official languages of Marshall Islands?',
      options: ['English only', 'Marshallese only', 'Marshallese and English', 'French and English'],
      correctAnswer: 2,
    },
    {
      id: 'marshall-islands-q8',
      question: 'What type of boat is traditional in Marshall Islands?',
      options: ['Junk', 'Dhow', 'Outrigger canoe', 'Kayak'],
      correctAnswer: 2,
    },
    {
      id: 'marshall-islands-q9',
      question: 'What ocean activity is Marshall Islands famous for?',
      options: ['Surfing', 'Wreck diving', 'Sailing', 'Fishing'],
      correctAnswer: 1,
    },
    {
      id: 'marshall-islands-q10',
      question: 'What lagoon in Marshall Islands has the world\'s best wreck diving?',
      options: ['Majuro Lagoon', 'Chuuk Lagoon', 'Bikini Lagoon', 'Arno Lagoon'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 90, y: 22 },
};
