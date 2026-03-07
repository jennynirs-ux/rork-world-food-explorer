import { Country } from '@/types';

export const palau: Country = {
  id: 'palau',
  name: 'Palau',
  code: 'PW',
  continent: 'Oceania',
  flag: '🇵🇼',
  landscapeImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
  description: 'Palau is a Pacific island nation known for pristine diving, Jellyfish Lake, Rock Islands, and strong environmental protection.',
  quickFacts: [
    { label: 'Capital', value: 'Ngerulmud' },
    { label: 'Population', value: '18,000' },
    { label: 'Official Languages', value: 'Palauan, English' },
    { label: 'Currency', value: 'US Dollar' },
    { label: 'Area', value: '459 km²' },
  ],
  facts: [
    'Home to the famous Jellyfish Lake',
    'First country to ban reef-toxic sunscreen',
    'Has over 500 islands, only 9 inhabited',
    'World-class diving destination',
  ],
  foodCulture: 'Palauan cuisine features fish, taro, cassava, and tropical fruits.',
  history: [
    {
      year: '1947',
      title: 'UN Trust Territory',
      description: 'Became part of UN Trust Territory of Pacific Islands under US administration.'
    },
    {
      year: '1994',
      title: 'Independence',
      description: 'Palau became independent under Compact of Free Association with the US.'
    },
  ],
  innovations: [
    {
      name: 'Marine Sanctuary',
      year: '2009',
      description: 'Created one of the world\'s first shark sanctuaries.',
    },
    {
      name: 'Sunscreen Ban',
      year: '2018',
      description: 'First country to ban reef-toxic sunscreen to protect coral.',
    },
    {
      name: 'Ocean Conservation',
      year: '2015',
      description: 'Designated 80% of territorial waters as marine sanctuary.',
    },
  ],
  mustVisit: [
    { name: 'Jellyfish Lake', description: 'Unique lake filled with millions of harmless jellyfish.' },
    { name: 'Rock Islands', description: 'UNESCO site with 300+ limestone islands covered in jungle.' },
    { name: 'Blue Corner', description: 'World-class dive site with sharks and large fish.' },
    { name: 'Milky Way', description: 'White mud lake with mineral-rich healing properties.' },
    { name: 'Ngardmau Waterfall', description: 'Highest waterfall in Palau.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'November-April for drier weather and best diving.' },
    { item: 'Visa', description: 'Visa-free for most nationalities for 30-90 days.' },
    { item: 'Reef-safe sunscreen', description: 'Required! Bring approved sunscreen or buy locally.' },
    { item: 'Diving certification', description: 'Helpful for accessing world-class dive sites.' },
  ],
  dessert: {
    id: 'palau-dessert',
    name: 'Tama',
    description: 'Sweet cassava and coconut cake wrapped in leaves',
    cookingTime: 90,
    servings: 8,
    dietType: 'vegan',
    ingredients: [
      { name: 'Grated cassava', amount: 500, unit: 'g' },
      { name: 'Coconut milk', amount: 400, unit: 'ml' },
      { name: 'Sugar', amount: 150, unit: 'g' },
      { name: 'Banana leaves', amount: 4, unit: 'large' },
    ],
    steps: [
      'Mix grated cassava with coconut milk and sugar',
      'Soften banana leaves over flame',
      'Place mixture on leaves',
      'Wrap tightly and secure',
      'Steam for 60 minutes',
      'Cool before unwrapping',
      'Slice and serve',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
  },
  mainDish: {
    id: 'palau-main',
    name: 'Fruit Bat Soup',
    description: 'Traditional soup with fruit bat and vegetables',
    cookingTime: 90,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Fruit bat', amount: 1, unit: 'whole' },
      { name: 'Coconut milk', amount: 400, unit: 'ml' },
      { name: 'Ginger', amount: 30, unit: 'g' },
      { name: 'Onions', amount: 1, unit: 'whole' },
      { name: 'Taro leaves', amount: 100, unit: 'g' },
    ],
    steps: [
      'Clean and prepare bat',
      'Boil with ginger and onions',
      'Add coconut milk',
      'Simmer until tender',
      'Add taro leaves at end',
      'Serve with rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Local beer, Fermented beverages',
    nonAlcoholic: 'Coconut water, Fresh juice',
  },
  music: [
    'Traditional Palauan chants',
    'Pacific island songs',
  ],
  decorationIdeas: [
    'Light blue and yellow flag colors',
    'Ocean and coral reef themes',
    'Rock Islands imagery',
    'Marine life decorations',
  ],
  conversationStarters: [
    'Have you been diving in Palau?',
    'What do you know about coral conservation?',
  ],
  quiz: [
    {
      id: 'palau-q1',
      question: 'What is Palau famous for protecting?',
      options: ['Deserts', 'Coral reefs', 'Mountains', 'Forests'],
      correctAnswer: 1,
    },
    {
      id: 'palau-q2',
      question: 'What is the capital of Palau?',
      options: ['Koror', 'Ngerulmud', 'Airai', 'Melekeok'],
      correctAnswer: 1,
    },
    {
      id: 'palau-q3',
      question: 'What unique lake is filled with jellyfish in Palau?',
      options: ['Blue Lake', 'Jellyfish Lake', 'Crystal Lake', 'Golden Lake'],
      correctAnswer: 1,
    },
    {
      id: 'palau-q4',
      question: 'In which year did Palau gain independence?',
      options: ['1980', '1990', '1994', '2000'],
      correctAnswer: 2,
    },
    {
      id: 'palau-q5',
      question: 'What currency does Palau use?',
      options: ['Palauan Dollar', 'US Dollar', 'Australian Dollar', 'Yen'],
      correctAnswer: 1,
    },
    {
      id: 'palau-q6',
      question: 'What did Palau ban in 2018 to protect reefs?',
      options: ['Plastic bags', 'Reef-toxic sunscreen', 'Fishing', 'Tourism'],
      correctAnswer: 1,
    },
    {
      id: 'palau-q7',
      question: 'What percentage of Palau\'s waters are protected as marine sanctuary?',
      options: ['20%', '50%', '80%', '100%'],
      correctAnswer: 2,
    },
    {
      id: 'palau-q8',
      question: 'What are the official languages of Palau?',
      options: ['English only', 'Palauan only', 'Palauan and English', 'Japanese and English'],
      correctAnswer: 2,
    },
    {
      id: 'palau-q9',
      question: 'What UNESCO site features 300+ limestone islands?',
      options: ['Great Barrier Reef', 'Rock Islands', 'Galapagos', 'Maldives'],
      correctAnswer: 1,
    },
    {
      id: 'palau-q10',
      question: 'What world-class activity is Palau famous for?',
      options: ['Skiing', 'Diving', 'Hiking', 'Desert safari'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 84, y: 22 },
};
