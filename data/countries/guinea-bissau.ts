import { Country } from '@/types';

export const guineaBissau: Country = {
  id: 'guinea-bissau',
  name: 'Guinea-Bissau',
  code: 'GW',
  continent: 'Africa',
  flag: '🇬🇼',
  landscapeImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
  description: 'Guinea-Bissau is a small West African country known for its tropical forests, Atlantic coastline, and the Bijagós Archipelago.',
  quickFacts: [
    { label: 'Capital', value: 'Bissau' },
    { label: 'Population', value: '2 million' },
    { label: 'Official Language', value: 'Portuguese' },
    { label: 'Currency', value: 'West African CFA Franc' },
    { label: 'Area', value: '36,125 km²' },
  ],
  facts: [
    'The Bijagós Archipelago is a UNESCO Biosphere Reserve',
    'One of the world\'s top cashew producers',
    'Home to diverse wildlife including hippos and manatees',
    'Rich in traditional animist cultures',
  ],
  foodCulture: 'Cuisine features rice, fish, palm oil, and cashews with Portuguese and African influences.',
  history: [
    {
      year: '1446',
      title: 'Portuguese Arrival',
      description: 'Portuguese explorers arrived, establishing trading posts along the coast.'
    },
    {
      year: '1974',
      title: 'Independence',
      description: 'Guinea-Bissau gained independence from Portugal after a prolonged armed struggle.'
    },
  ],
  innovations: [
    {
      name: 'Cashew Processing',
      year: 'Traditional',
      description: 'Developed efficient traditional methods for processing cashews, now a major export.'
    },
    {
      name: 'Bijagós Matriarchal Society',
      year: 'Traditional',
      description: 'Unique matriarchal social structure where women hold significant power and property rights.'
    },
    {
      name: 'Sustainable Fishing',
      year: 'Traditional',
      description: 'Traditional fishing methods in the Bijagós Archipelago preserving marine ecosystems.'
    },
  ],
  mustVisit: [
    { name: 'Bijagós Archipelago', description: 'UNESCO Biosphere Reserve with pristine islands, unique wildlife, and traditional culture.' },
    { name: 'Orango National Park', description: 'Island park home to saltwater hippos and sea turtles.' },
    { name: 'Bissau Velho', description: 'Old colonial quarter with Portuguese architecture and historic fort.' },
    { name: 'Cacheu', description: 'Historic town with colonial fort and slave trade history.' },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Required for most nationalities. Available on arrival at airport.' },
    { item: 'Best time to visit', description: 'November-May for dry season.' },
    { item: 'Yellow fever vaccination', description: 'Mandatory with certificate required.' },
    { item: 'Portuguese language', description: 'Helpful as English is rarely spoken. Creole widely used.' },
  ],
  mainDish: {
    id: 'guinea-bissau-main',
    name: 'Caldo de Mancarra',
    description: 'Peanut stew with chicken or fish',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken or fish', amount: 800, unit: 'g' },
      { name: 'Peanut butter', amount: 300, unit: 'g' },
      { name: 'Sweet potatoes', amount: 2, unit: 'whole' },
      { name: 'Okra', amount: 200, unit: 'g' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Palm oil', amount: 3, unit: 'tbsp' },
    ],
    steps: [
      'Brown meat in palm oil',
      'Add tomatoes and water',
      'Stir in peanut butter',
      'Add sweet potatoes and okra',
      'Simmer until thick',
      'Serve over rice',
    ],
    imageUrl: 'https://images.pexels.com/photos/32334856/pexels-photo-32334856.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  dessert: {
    id: 'guinea-bissau-dessert',
    name: 'Bolacha de Caju',
    description: 'Cashew cookies made with local cashew nuts',
    cookingTime: 40,
    servings: 20,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Cashew nuts chopped', amount: 200, unit: 'g' },
      { name: 'Flour', amount: 300, unit: 'g' },
      { name: 'Sugar', amount: 150, unit: 'g' },
      { name: 'Butter', amount: 150, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'large' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Cream butter and sugar together',
      'Beat in eggs and vanilla',
      'Mix in flour and chopped cashews',
      'Form into small balls',
      'Flatten slightly on baking sheet',
      'Bake at 180°C for 15-18 minutes',
      'Cool on wire rack',
      'Serve with cashew juice or tea',
    ],
    imageUrl: 'https://images.pexels.com/photos/33626299/pexels-photo-33626299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  drinks: {
    alcoholic: 'Caju (cashew wine), Palm wine',
    nonAlcoholic: 'Bissap, Fresh coconut water',
  },
  music: [
    'Gumbé music',
    'Traditional balanta rhythms',
    'Portuguese-influenced songs',
  ],
  decorationIdeas: [
    'Red, yellow, green and black flag colors',
    'Cashew motifs',
    'Island and coastal themes',
    'Traditional masks',
  ],
  conversationStarters: [
    'Have you tried cashew fruit?',
    'What do you know about African island culture?',
  ],
  quiz: [
    {
      id: 'guinea-bissau-q1',
      question: 'What is the capital of Guinea-Bissau?',
      options: ['Conakry', 'Bissau', 'Banjul', 'Dakar'],
      correctAnswer: 1,
    },
    {
      id: 'guinea-bissau-q2',
      question: 'What is Guinea-Bissau known for producing?',
      options: ['Coffee', 'Cashews', 'Diamonds', 'Oil'],
      correctAnswer: 1,
    },
    {
      id: 'guinea-bissau-q3',
      question: 'What is the Bijagós Archipelago?',
      options: ['A mountain range', 'UNESCO Biosphere Reserve', 'A river', 'A desert'],
      correctAnswer: 1,
    },
    {
      id: 'guinea-bissau-q4',
      question: 'What is the official language?',
      options: ['English', 'French', 'Portuguese', 'Spanish'],
      correctAnswer: 2,
    },
    {
      id: 'guinea-bissau-q5',
      question: 'When did Guinea-Bissau gain independence?',
      options: ['1960', '1974', '1980', '1990'],
      correctAnswer: 1,
    },
    {
      id: 'guinea-bissau-q6',
      question: 'What unique animal lives in Orango National Park?',
      options: ['Polar bears', 'Saltwater hippos', 'Penguins', 'Kangaroos'],
      correctAnswer: 1,
    },
    {
      id: 'guinea-bissau-q7',
      question: 'What is Caldo de Mancarra?',
      options: ['A dance', 'Peanut stew', 'A festival', 'A river'],
      correctAnswer: 1,
    },
    {
      id: 'guinea-bissau-q8',
      question: 'Which European country colonized Guinea-Bissau?',
      options: ['Spain', 'France', 'Portugal', 'Britain'],
      correctAnswer: 2,
    },
    {
      id: 'guinea-bissau-q9',
      question: 'What is caju?',
      options: ['Cashew wine', 'Palm wine', 'Beer', 'Rum'],
      correctAnswer: 0,
    },
    {
      id: 'guinea-bissau-q10',
      question: 'What continent is Guinea-Bissau in?',
      options: ['South America', 'Asia', 'Africa', 'Europe'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 44, y: 24 },
};
