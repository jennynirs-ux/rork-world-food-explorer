import { Country } from '@/types';

export const guatemala: Country = {
  id: 'guatemala',
  name: 'Guatemala',
  code: 'GT',
  continent: 'North America',
  flag: '🇬🇹',
  landscapeImage: 'https://images.unsplash.com/photo-1608236415053-3691dcbb37f1?w=800&q=80',
  description: 'Guatemala is a Central American country with Mayan heritage, volcanic landscapes, colonial cities, and vibrant indigenous culture.',
  quickFacts: [
    { label: 'Capital', value: 'Guatemala City' },
    { label: 'Population', value: '18 million' },
    { label: 'Official Language', value: 'Spanish' },
    { label: 'Currency', value: 'Guatemalan Quetzal' },
    { label: 'Area', value: '108,889 km²' },
  ],
  facts: [
    'Home to Tikal, one of the largest Mayan cities',
    'Has 33 volcanoes, three of which are active',
    'Antigua Guatemala is a UNESCO World Heritage Site',
    'Over 20 indigenous languages are spoken',
  ],
  foodCulture: 'Guatemalan cuisine blends Mayan and Spanish influences with corn, beans, and chilies as staples.',
  history: [
    {
      year: '250-900 AD',
      title: 'Mayan Civilization',
      description: 'The Mayan civilization flourished in Guatemala, building great cities like Tikal and developing advanced mathematics and astronomy.'
    },
    {
      year: '1524',
      title: 'Spanish Conquest',
      description: 'Pedro de Alvarado conquered Guatemala for Spain, beginning centuries of colonial rule.'
    },
    {
      year: '1821',
      title: 'Independence',
      description: 'Guatemala gained independence from Spain as part of the Federal Republic of Central America.'
    },
  ],
  innovations: [
    {
      name: 'Mayan Calendar',
      year: 'Ancient',
      description: 'The Maya developed one of the most accurate calendar systems in ancient history, still studied today.'
    },
    {
      name: 'Cacao Processing',
      year: 'Ancient',
      description: 'Guatemala was a center for cacao cultivation and chocolate preparation, traditions that continue today.'
    },
    {
      name: 'Textile Arts',
      year: 'Traditional',
      description: 'Indigenous Guatemalans perfected backstrap weaving techniques creating intricate huipil textiles recognized globally.'
    },
    {
      name: 'Mayan Mathematics',
      year: 'Ancient',
      description: 'The Maya independently developed the concept of zero and a sophisticated vigesimal (base-20) number system.'
    },
  ],
  mustVisit: [
    { name: 'Tikal National Park', description: 'UNESCO site with towering Mayan pyramids rising above jungle canopy.' },
    { name: 'Antigua Guatemala', description: 'Colonial city with baroque architecture and cobblestone streets.' },
    { name: 'Lake Atitlán', description: 'Stunning volcanic lake surrounded by traditional Mayan villages.' },
    { name: 'Semuc Champey', description: 'Natural limestone pools with turquoise waters in the jungle.' },
  ],
  travelEssentials: [
    { item: 'Best time', description: 'November-April for dry season; rainy season May-October.' },
    { item: 'Currency', description: 'Guatemalan Quetzal; US dollars often accepted.' },
    { item: 'Language', description: 'Spanish essential; indigenous languages in rural areas.' },
  ],
  mainDish: {
    id: 'guatemala-main',
    name: 'Pepián',
    description: 'Traditional Mayan stew with chicken and roasted vegetables',
    cookingTime: 120,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken pieces', amount: 1, unit: 'kg' },
      { name: 'Tomatoes', amount: 4, unit: 'whole' },
      { name: 'Pumpkin seeds', amount: 100, unit: 'g' },
      { name: 'Sesame seeds', amount: 50, unit: 'g' },
      { name: 'Dried chilies', amount: 3, unit: 'whole' },
      { name: 'Potatoes', amount: 3, unit: 'whole' },
    ],
    steps: [
      'Roast tomatoes, chilies, and seeds',
      'Blend into thick sauce',
      'Brown chicken pieces',
      'Add sauce and water, simmer 90 minutes',
      'Add potatoes in last 30 minutes',
      'Serve with rice and tortillas',
    ],
    imageUrl: 'https://images.pexels.com/photos/20718417/pexels-photo-20718417.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  dessert: {
    id: 'guatemala-dessert',
    name: 'Rellenitos de Plátano',
    description: 'Sweet plantain patties filled with sweetened black beans',
    cookingTime: 45,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Ripe plantains', amount: 4, unit: 'whole' },
      { name: 'Black beans, cooked', amount: 200, unit: 'g' },
      { name: 'Brown sugar', amount: 100, unit: 'g' },
      { name: 'Cinnamon', amount: 1, unit: 'tsp' },
      { name: 'Vegetable oil for frying', amount: 300, unit: 'ml' },
      { name: 'Powdered sugar for dusting', amount: 50, unit: 'g' },
    ],
    steps: [
      'Boil plantains until very soft, about 20 minutes.',
      'Mash beans with sugar and cinnamon until smooth paste.',
      'Mash plantains until smooth.',
      'Form plantain into small balls, flatten into discs.',
      'Place spoonful of bean mixture in center.',
      'Fold plantain over filling and seal edges.',
      'Heat oil to 350°F.',
      'Fry patties until golden brown, 3-4 minutes per side.',
      'Drain on paper towels.',
      'Dust with powdered sugar before serving.',
    ],
    imageUrl: 'https://images.pexels.com/photos/20413466/pexels-photo-20413466.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  drinks: {
    alcoholic: 'Quetzalteca (aguardiente), Gallo beer',
    nonAlcoholic: 'Horchata, Atol de elote, Rosa de Jamaica',
  },
  music: [
    'Marimba music',
    'Traditional Mayan songs',
    'Latin pop',
  ],
  decorationIdeas: [
    'Blue and white flag colors',
    'Traditional weavings',
    'Mayan symbols',
    'Volcanic landscapes',
  ],
  conversationStarters: [
    'Have you visited Mayan ruins?',
    'What do you know about indigenous textiles?',
    'Do you enjoy volcano hiking?',
  ],
  quiz: [
    {
      id: 'guatemala-q1',
      question: 'What is the capital of Guatemala?',
      options: ['Antigua', 'Guatemala City', 'Quetzaltenango', 'Tikal'],
      correctAnswer: 1,
    },
    {
      id: 'guatemala-q2',
      question: 'How many volcanoes does Guatemala have?',
      options: ['10', '20', '33', '50'],
      correctAnswer: 2,
    },
    {
      id: 'guatemala-q3',
      question: 'What ancient civilization built Tikal?',
      options: ['Aztec', 'Inca', 'Maya', 'Olmec'],
      correctAnswer: 2,
    },
    {
      id: 'guatemala-q4',
      question: 'When did Guatemala gain independence?',
      options: ['1776', '1821', '1898', '1950'],
      correctAnswer: 1,
    },
    {
      id: 'guatemala-q5',
      question: 'What is Guatemala\'s traditional stew called?',
      options: ['Mole', 'Pepián', 'Pozole', 'Ceviche'],
      correctAnswer: 1,
    },
    {
      id: 'guatemala-q6',
      question: 'Which UNESCO World Heritage Site is in Guatemala?',
      options: ['Chichen Itza', 'Machu Picchu', 'Antigua Guatemala', 'Teotihuacan'],
      correctAnswer: 2,
    },
    {
      id: 'guatemala-q7',
      question: 'What is the currency of Guatemala?',
      options: ['Peso', 'Quetzal', 'Dollar', 'Córdoba'],
      correctAnswer: 1,
    },
    {
      id: 'guatemala-q8',
      question: 'Which major mathematical concept did the Maya develop?',
      options: ['Algebra', 'The concept of zero', 'Calculus', 'Geometry'],
      correctAnswer: 1,
    },
    {
      id: 'guatemala-q9',
      question: 'What is Rellenitos de Plátano filled with?',
      options: ['Chocolate', 'Cheese', 'Sweetened black beans', 'Custard'],
      correctAnswer: 2,
    },
    {
      id: 'guatemala-q10',
      question: 'What stunning volcanic lake is surrounded by Mayan villages?',
      options: ['Lake Titicaca', 'Lake Atitlán', 'Lake Nicaragua', 'Lake Managua'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 17, y: 26 },
};
