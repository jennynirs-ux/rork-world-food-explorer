import { Country } from '@/types';

export const bolivia: Country = {
  id: 'bolivia',
  name: 'Bolivia',
  code: 'BO',
  continent: 'South America',
  flag: '🇧🇴',
  landscapeImage: 'https://images.unsplash.com/photo-1558799401-1dcba79834c2?w=800&q=80',
  description: 'Bolivia is a landlocked country in South America known for its stunning landscapes, from the otherworldly Uyuni Salt Flats to the heights of the Andes. It has a rich indigenous heritage and is one of the most biodiverse countries in the world.',
  quickFacts: [
    { label: 'Capital', value: 'Sucre (constitutional), La Paz (administrative)' },
    { label: 'Population', value: '11.8 million' },
    { label: 'Official Languages', value: 'Spanish, Quechua, Aymara, and 34 others' },
    { label: 'Currency', value: 'Boliviano (BOB)' },
    { label: 'Area', value: '1,098,581 km²' },
  ],
  facts: [
    'The Salar de Uyuni is the world\'s largest salt flat',
    'Bolivia has two capital cities - La Paz and Sucre',
    'La Paz is the world\'s highest administrative capital at 3,650 meters',
    'The country has 37 official languages',
    'Bolivia is named after Simón Bolívar, the liberator',
    'Lake Titicaca is the highest navigable lake in the world',
    'The country has the largest butterfly sanctuary in the world',
    'Bolivia is one of only two landlocked countries in South America',
  ],
  foodCulture: 'Bolivian cuisine reflects its diverse geography and indigenous heritage, with influences from Spanish, Aymara, and Quechua cultures. Food varies greatly by region - potatoes and quinoa dominate in the highlands, while tropical fruits and yuca are common in lowlands. Meals are hearty and flavorful.',
  history: [
    {
      year: '1200 BC - 1000 AD',
      title: 'Tiwanaku Empire',
      description: 'The powerful Tiwanaku civilization flourished near Lake Titicaca, leaving behind impressive architectural ruins.'
    },
    {
      year: '1438-1533',
      title: 'Inca Empire',
      description: 'The region became part of the vast Inca Empire, which brought Quechua language and culture.'
    },
    {
      year: '1545',
      title: 'Spanish Colonial Period',
      description: 'Rich silver deposits at Potosí made Bolivia one of the wealthiest regions in the Spanish Empire.'
    },
    {
      year: '1825',
      title: 'Independence',
      description: 'Bolivia gained independence from Spain and was named after liberator Simón Bolívar.'
    },
    {
      year: '1879-1884',
      title: 'War of the Pacific',
      description: 'Bolivia lost its coastal territory to Chile, becoming landlocked.'
    },
    {
      year: '2009',
      title: 'Plurinational State',
      description: 'A new constitution was adopted, recognizing Bolivia as a plurinational state with 37 official languages.'
    },
  ],
  innovations: [
    {
      name: 'Ancient Agricultural Terraces',
      year: 'Pre-Columbian',
      description: 'Tiwanaku and Inca civilizations developed sophisticated terrace farming systems in the Andes, allowing agriculture at extreme altitudes.'
    },
    {
      name: 'Quinoa Domestication',
      year: 'Ancient',
      description: 'Indigenous Andean peoples domesticated quinoa thousands of years ago, creating a protein-rich superfood now popular worldwide.'
    },
    {
      name: 'Indigenous Rights Recognition',
      year: '2009',
      description: 'Bolivia\'s plurinational constitution recognized indigenous peoples\' rights and made 37 indigenous languages official, setting a global precedent.'
    },
    {
      name: 'Cable Car Urban Transport',
      year: '2014',
      description: 'La Paz built the world\'s highest and longest urban cable car network (Mi Teleférico), revolutionizing transport in mountainous cities.'
    },
  ],
  mustVisit: [
    { name: 'Salar de Uyuni', description: 'The world\'s largest salt flat at 10,582 km², creating mirror-like reflections during rainy season and endless white landscapes.' },
    { name: 'Lake Titicaca', description: 'The highest navigable lake in the world at 3,812m, with floating Uros islands and ancient ruins on Isla del Sol.' },
    { name: 'Death Road (Yungas Road)', description: 'Thrilling mountain biking route descending from La Paz through cloud forests, once the world\'s most dangerous road.' },
    { name: 'Tiwanaku Ruins', description: 'UNESCO World Heritage Site with pre-Incan ruins dating back to 400 BC, featuring the Gateway of the Sun.' },
    { name: 'Madidi National Park', description: 'One of the most biodiverse places on Earth, with Amazon rainforest and Andean cloud forests.' }
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Visa requirements vary by nationality. Many countries require visa on arrival.' },
    { item: 'Best time to visit', description: 'May to October for dry season (winter)' },
    { item: 'Transportation', description: 'Buses are the main form of transport. Domestic flights for long distances. Cable cars in La Paz.' },
    { item: 'Language', description: 'Spanish is widely spoken. Indigenous languages in rural areas.' },
    { item: 'Safety', description: 'Generally safe but altitude sickness is a concern. Exercise caution in cities.' },
  ],
  mainDish: {
    id: 'bolivia-salteñas',
    name: 'Salteñas',
    description: 'Bolivia\'s beloved savory pastry - a juicy, slightly sweet baked empanada filled with meat, potatoes, peas, and a flavorful sauce. The secret is the soupy filling that should be eaten carefully to avoid spills. Traditionally eaten mid-morning.',
    cookingTime: 90,
    servings: 12,
    dietType: 'meat',
    ingredients: [
      { name: 'All-purpose flour', amount: 500, unit: 'g' },
      { name: 'Beef or chicken', amount: 400, unit: 'g' },
      { name: 'Potatoes, diced', amount: 300, unit: 'g' },
      { name: 'Peas', amount: 100, unit: 'g' },
      { name: 'Hard-boiled eggs', amount: 3, unit: 'pieces' },
      { name: 'Onions', amount: 2, unit: 'pieces' },
      { name: 'Gelatin powder', amount: 2, unit: 'tbsp' },
      { name: 'Cumin, paprika', amount: 2, unit: 'tsp' },
      { name: 'Sugar', amount: 2, unit: 'tbsp' },
    ],
    steps: [
      'Prepare dough with flour, butter, sugar, and water; let rest',
      'Cook meat with onions, spices, and gelatin dissolved in broth',
      'Add diced potatoes and peas; let cool completely (filling should gel)',
      'Roll out dough and cut into circles',
      'Place filling and chopped egg in center of each circle',
      'Fold and seal edges with decorative crimps',
      'Brush with egg wash and sprinkle with sugar',
      'Bake at 200°C for 25-30 minutes until golden',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=600',
  },
  dessert: {
    id: 'bolivia-dessert',
    name: 'Sopaipillas Bolivianas',
    description: 'Sweet fried pastries served with syrup, a beloved Bolivian treat',
    cookingTime: 45,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'All-purpose flour', amount: 500, unit: 'g' },
      { name: 'Butter', amount: 50, unit: 'g' },
      { name: 'Sugar', amount: 50, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'large' },
      { name: 'Baking powder', amount: 1, unit: 'tsp' },
      { name: 'Anise seeds', amount: 1, unit: 'tsp' },
      { name: 'Vegetable oil for frying', amount: 500, unit: 'ml' },
      { name: 'Brown sugar syrup', amount: 300, unit: 'ml' },
    ],
    steps: [
      'Mix flour, baking powder, anise seeds, sugar, and butter.',
      'Add eggs and knead into smooth dough.',
      'Let rest for 30 minutes.',
      'Roll out thin and cut into rectangles.',
      'Heat oil to 180°C.',
      'Fry until puffed and golden, about 2 minutes per side.',
      'Drain on paper towels.',
      'Make syrup: boil brown sugar with water and cinnamon.',
      'Drizzle warm syrup over sopaipillas.',
      'Serve warm or at room temperature.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=600',
  },
  drinks: {
    alcoholic: 'Singani (grape brandy), Chicha (corn beer), Cerveza Paceña',
    nonAlcoholic: 'Mocochinchi (dried peach drink), Api (hot corn drink), Coca tea',
  },
  music: ['Andean folk music', 'Chacarera', 'Tinku', 'Saya', 'Morenada'],
  decorationIdeas: [
    'Colorful Andean textiles',
    'Aguayo (traditional woven cloth)',
    'Red, yellow, and green (flag colors)',
    'Llama and alpaca motifs',
    'Clay pottery',
    'Mountain and salt flat imagery',
  ],
  conversationStarters: [
    'Would you visit the surreal Uyuni Salt Flats or explore the Amazon rainforest?',
    'Have you ever experienced high altitude? How would you prepare for La Paz?',
    'What do you know about indigenous Bolivian cultures?',
    'Would you try coca tea to help with altitude sickness?',
  ],
  quiz: [
    {
      id: 'bolivia-q1',
      question: 'What is the world\'s largest salt flat located in Bolivia?',
      options: ['Atacama', 'Salar de Uyuni', 'Death Valley', 'Makgadikgadi'],
      correctAnswer: 1,
    },
    {
      id: 'bolivia-q2',
      question: 'How many official languages does Bolivia have?',
      options: ['1', '3', '12', '37'],
      correctAnswer: 3,
    },
    {
      id: 'bolivia-q3',
      question: 'What is Bolivia\'s traditional baked pastry called?',
      options: ['Empanada', 'Salteña', 'Arepa', 'Tamale'],
      correctAnswer: 1,
    },
    {
      id: 'bolivia-q4',
      question: 'Which two cities are the capitals of Bolivia?',
      options: ['La Paz and Cochabamba', 'Sucre and Santa Cruz', 'Sucre and La Paz', 'Potosí and Oruro'],
      correctAnswer: 2,
    },
    {
      id: 'bolivia-q5',
      question: 'What is the highest navigable lake in the world?',
      options: ['Lake Baikal', 'Lake Titicaca', 'Lake Victoria', 'Lake Tanganyika'],
      correctAnswer: 1,
    },
    {
      id: 'bolivia-q6',
      question: 'After whom is Bolivia named?',
      options: ['Simón Bolívar', 'Christopher Columbus', 'Hernán Cortés', 'Francisco Pizarro'],
      correctAnswer: 0,
    },
    {
      id: 'bolivia-q7',
      question: 'Which ancient civilization flourished near Lake Titicaca?',
      options: ['Maya', 'Aztec', 'Tiwanaku', 'Moche'],
      correctAnswer: 2,
    },
    {
      id: 'bolivia-q8',
      question: 'When did Bolivia adopt its plurinational constitution?',
      options: ['1999', '2004', '2009', '2014'],
      correctAnswer: 2,
    },
    {
      id: 'bolivia-q9',
      question: 'What caused Bolivia to become landlocked?',
      options: ['Treaty with Peru', 'War of the Pacific with Chile', 'Spanish colonization', 'Natural geography'],
      correctAnswer: 1,
    },
    {
      id: 'bolivia-q10',
      question: 'What is the world\'s highest urban cable car network located in Bolivia?',
      options: ['Teleférico Sucre', 'Mi Teleférico (La Paz)', 'Cable Potosí', 'Uyuni Lift'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 24, y: 13 },
};
