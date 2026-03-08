import { Country } from '@/types';

export const elSalvador: Country = {
  id: 'el-salvador',
  name: 'El Salvador',
  code: 'SV',
  continent: 'North America',
  flag: '🇸🇻',
  landscapeImage: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&q=80',
  description: 'El Salvador is the smallest Central American country, known for volcanic landscapes, Pacific beaches, and pupusas.',
  quickFacts: [
    { label: 'Capital', value: 'San Salvador' },
    { label: 'Population', value: '6.5 million' },
    { label: 'Official Language', value: 'Spanish' },
    { label: 'Currency', value: 'US Dollar' },
    { label: 'Area', value: '21,041 km²' },
  ],
  facts: [
    'Known as the "Land of Volcanoes" with over 20 volcanoes',
    'The pupusa is the national dish',
    'Smallest and most densely populated Central American country',
    'Major coffee producer',
  ],
  foodCulture: 'Salvadoran cuisine features corn-based dishes, beans, and tropical fruits with indigenous and Spanish influences.',
  history: [
    {
      year: '1821',
      title: 'Independence from Spain',
      description: 'El Salvador gained independence, initially joining the Federal Republic of Central America.'
    },
    {
      year: '1841',
      title: 'Full Independence',
      description: 'Became fully independent after the dissolution of the Central American Federation.'
    },
    {
      year: '1980-1992',
      title: 'Civil War',
      description: 'Devastating civil war ended with peace accords and democratic reforms.'
    },
  ],
  mustVisit: [
    { name: 'Ruta de las Flores', description: 'Scenic route through colorful colonial towns and coffee plantations.' },
    { name: 'El Boquerón Volcano', description: 'Active volcano with crater views near San Salvador.' },
    { name: 'Joya de Cerén', description: 'UNESCO site, the "Pompeii of the Americas" - preserved Mayan village.' },
    { name: 'Lake Coatepeque', description: 'Stunning volcanic crater lake with clear blue waters.' },
    { name: 'El Tunco Beach', description: 'Popular surf spot with black sand beaches and vibrant nightlife.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'November-April for dry season. May-October is rainy season.' },
    { item: 'US Dollars', description: 'Bring cash as official currency.' },
    { item: 'Sun protection', description: 'Strong sun at beaches and volcanic areas.' },
    { item: 'Spanish language', description: 'English is limited outside tourist areas.' },
  ],
  mainDish: {
    id: 'el-salvador-main',
    name: 'Pupusas',
    description: 'Thick corn tortillas filled with cheese, beans, or meat',
    cookingTime: 45,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Masa harina', amount: 500, unit: 'g' },
      { name: 'Cheese', amount: 300, unit: 'g' },
      { name: 'Refried beans', amount: 200, unit: 'g' },
      { name: 'Loroco flowers', amount: 100, unit: 'g' },
      { name: 'Cabbage for curtido', amount: 300, unit: 'g' },
      { name: 'Tomato sauce', amount: 200, unit: 'ml' },
    ],
    steps: [
      'Mix masa harina with water to form dough',
      'Form balls and flatten',
      'Add cheese and bean filling',
      'Seal edges and flatten into thick tortillas',
      'Cook on griddle until golden',
      'Serve with curtido and tomato sauce',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
  },
  dessert: {
    id: 'el-salvador-dessert',
    name: 'Quesadilla Salvadoreña',
    description: 'Sweet cheese pound cake, not to be confused with Mexican quesadilla',
    cookingTime: 60,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Parmesan cheese', amount: 200, unit: 'g' },
      { name: 'Flour', amount: 300, unit: 'g' },
      { name: 'Sugar', amount: 250, unit: 'g' },
      { name: 'Eggs', amount: 4, unit: 'large' },
      { name: 'Butter', amount: 150, unit: 'g' },
      { name: 'Sour cream', amount: 200, unit: 'g' },
      { name: 'Sesame seeds', amount: 3, unit: 'tbsp' },
    ],
    steps: [
      'Cream butter and sugar until fluffy',
      'Beat in eggs one at a time',
      'Add grated Parmesan cheese',
      'Fold in flour and sour cream',
      'Pour into greased pan',
      'Sprinkle sesame seeds on top',
      'Bake at 175°C for 45 minutes until golden',
      'Cool before slicing',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517433670467-9e50d2b7dea3?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Pilsener beer, Aguardiente',
    nonAlcoholic: 'Horchata, Kolashampan, Tamarind juice',
  },
  music: [
    'Cumbia',
    'Salsa',
    'Traditional folk music',
  ],
  decorationIdeas: [
    'Blue and white flag colors',
    'Volcanic landscapes',
    'Coffee plant imagery',
    'Traditional textiles',
  ],
  conversationStarters: [
    'Have you tried pupusas?',
    'Do you enjoy volcanic landscapes?',
    'What do you know about Central American coffee?',
  ],
  innovations: [
    {
      name: 'Pupusa',
      year: 'Pre-Columbian',
      description: 'Created the iconic pupusa, now a beloved Central American dish',
    },
    {
      name: 'Indigo Dye Production',
      year: 'Colonial Era',
      description: 'Became a major producer of indigo dye for textiles worldwide',
    },
    {
      name: 'Bitcoin Adoption',
      year: '2021',
      description: 'First country to adopt Bitcoin as legal tender alongside the US dollar',
    },
  ],
  quiz: [
    {
      id: 'el-salvador-q1',
      question: 'What is the capital of El Salvador?',
      options: ['San Salvador', 'Tegucigalpa', 'Managua', 'Guatemala City'],
      correctAnswer: 0,
    },
    {
      id: 'el-salvador-q2',
      question: 'What is the national dish of El Salvador?',
      options: ['Tacos', 'Pupusas', 'Burritos', 'Empanadas'],
      correctAnswer: 1,
    },
    {
      id: 'el-salvador-q3',
      question: 'What is El Salvador known as?',
      options: ['Land of Lakes', 'Land of Volcanoes', 'Land of Rivers', 'Land of Mountains'],
      correctAnswer: 1,
    },
    {
      id: 'el-salvador-q4',
      question: 'What currency does El Salvador use?',
      options: ['Peso', 'US Dollar', 'Colón', 'Euro'],
      correctAnswer: 1,
    },
    {
      id: 'el-salvador-q5',
      question: 'How many volcanoes does El Salvador have?',
      options: ['5', '10', '20+', '50'],
      correctAnswer: 2,
    },
    {
      id: 'el-salvador-q6',
      question: 'What is El Salvador\'s main agricultural export?',
      options: ['Bananas', 'Coffee', 'Sugar', 'Cotton'],
      correctAnswer: 1,
    },
    {
      id: 'el-salvador-q7',
      question: 'Which cryptocurrency did El Salvador adopt?',
      options: ['Ethereum', 'Bitcoin', 'Dogecoin', 'Litecoin'],
      correctAnswer: 1,
    },
    {
      id: 'el-salvador-q8',
      question: 'What ocean borders El Salvador?',
      options: ['Atlantic', 'Pacific', 'Indian', 'Arctic'],
      correctAnswer: 1,
    },
    {
      id: 'el-salvador-q9',
      question: 'What is the official language?',
      options: ['English', 'Portuguese', 'Spanish', 'French'],
      correctAnswer: 2,
    },
    {
      id: 'el-salvador-q10',
      question: 'What is curtido?',
      options: ['A dance', 'Cabbage slaw', 'A festival', 'A volcano'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 17, y: 25 },
};
