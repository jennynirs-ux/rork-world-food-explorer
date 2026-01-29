import { Country } from '@/types';

export const dominicanRepublic: Country = {
  id: 'dominican-republic',
  name: 'Dominican Republic',
  code: 'DO',
  continent: 'North America',
  flag: '🇩🇴',
  landscapeImage: 'https://images.unsplash.com/photo-1544989164-fb88fbafbe7a?w=800',
  description: 'The Dominican Republic shares Hispaniola island with Haiti, known for beautiful beaches, merengue music, baseball, and colonial history.',
  quickFacts: [
    { label: 'Capital', value: 'Santo Domingo' },
    { label: 'Population', value: '11 million' },
    { label: 'Official Language', value: 'Spanish' },
    { label: 'Currency', value: 'Dominican Peso' },
    { label: 'Area', value: '48,671 km²' },
  ],
  facts: [
    'Santo Domingo is the oldest European city in the Americas',
    'Produces some of the world\'s finest cigars and rum',
    'Baseball is the national sport',
    'Home to the Caribbean\'s highest peak, Pico Duarte',
  ],
  foodCulture: 'Dominican cuisine blends Spanish, African, and Taíno influences. Rice, beans, and plantains are staples.',
  history: [
    {
      year: '1492',
      title: 'Columbus Arrival',
      description: 'Christopher Columbus landed on Hispaniola, establishing the first European settlement in the Americas.'
    },
    {
      year: '1496',
      title: 'Santo Domingo Founded',
      description: 'Santo Domingo became the oldest continuously inhabited European city in the Americas.'
    },
    {
      year: '1844',
      title: 'Independence',
      description: 'The Dominican Republic gained independence from Haiti after 22 years of Haitian rule.'
    },
    {
      year: '1916-1924',
      title: 'US Occupation',
      description: 'United States occupied the country, influencing its political and economic development.'
    },
  ],
  mustVisit: [
    { name: 'Colonial Zone Santo Domingo', description: 'UNESCO World Heritage Site with first cathedral and cobblestone streets.' },
    { name: 'Punta Cana Beaches', description: 'World-famous white sand beaches and crystal-clear Caribbean waters.' },
    { name: 'Los Haitises National Park', description: 'Mangrove forests, caves with Taíno petroglyphs, and diverse wildlife.' },
    { name: 'Samaná Peninsula', description: 'Whale watching destination and stunning beaches like Playa Rincón.' },
    { name: '27 Waterfalls of Damajagua', description: 'Adventure site for jumping and sliding down natural waterfall pools.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'December-April for dry season. August-October is hurricane season.' },
    { item: 'Tourist card', description: 'Available on arrival at airports for most nationalities.' },
    { item: 'Spanish basics', description: 'English is limited outside tourist areas.' },
    { item: 'Sun protection', description: 'Strong Caribbean sun requires high SPF.' },
  ],
  mainDish: {
    id: 'dominican-main',
    name: 'La Bandera',
    description: 'The national dish with rice, beans, and meat',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'White rice', amount: 500, unit: 'g' },
      { name: 'Red beans', amount: 400, unit: 'g' },
      { name: 'Chicken or beef', amount: 600, unit: 'g' },
      { name: 'Plantains', amount: 3, unit: 'whole' },
      { name: 'Avocado', amount: 2, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
    ],
    steps: [
      'Cook beans with onions and peppers',
      'Stew meat with tomatoes and spices',
      'Cook rice separately',
      'Fry plantains until golden',
      'Plate rice, beans, and meat together',
      'Serve with fried plantains and avocado salad',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600',
  },
  dessert: {
    id: 'dominican-dessert',
    name: 'Tres Leches Cake',
    description: 'Sponge cake soaked in three types of milk',
    cookingTime: 90,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Eggs', amount: 6, unit: 'large' },
      { name: 'Sugar', amount: 200, unit: 'g' },
      { name: 'Flour', amount: 200, unit: 'g' },
      { name: 'Evaporated milk', amount: 300, unit: 'ml' },
      { name: 'Condensed milk', amount: 300, unit: 'ml' },
      { name: 'Heavy cream', amount: 300, unit: 'ml' },
      { name: 'Vanilla extract', amount: 2, unit: 'tsp' },
      { name: 'Whipped cream for topping', amount: 400, unit: 'ml' },
    ],
    steps: [
      'Beat eggs and sugar until fluffy',
      'Fold in flour gently',
      'Bake in greased pan at 180°C for 30 minutes',
      'Let cake cool completely',
      'Mix three milks together with vanilla',
      'Poke holes in cake with fork',
      'Pour milk mixture over cake slowly',
      'Refrigerate overnight',
      'Top with whipped cream before serving',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600',
  },
  drinks: {
    alcoholic: 'Mamajuana, Brugal rum, Presidente beer',
    nonAlcoholic: 'Morir Soñando, Fresh coconut water, Jugo de chinola',
  },
  music: [
    'Merengue',
    'Bachata',
    'Juan Luis Guerra',
    'Romeo Santos',
  ],
  decorationIdeas: [
    'Red, white and blue flag colors',
    'Beach and palm tree themes',
    'Baseball elements',
    'Carnival masks',
  ],
  conversationStarters: [
    'Have you tried dancing merengue or bachata?',
    'Do you enjoy Caribbean beaches?',
    'Have you tasted Dominican rum?',
  ],
  innovations: [
    {
      name: 'Merengue Music',
      year: '19th Century',
      description: 'Created the iconic merengue dance and music style that spread worldwide',
    },
    {
      name: 'Bachata',
      year: '1960s',
      description: 'Developed bachata music genre that became globally popular',
    },
    {
      name: 'Baseball Excellence',
      year: '20th Century',
      description: 'Produces more MLB players per capita than any other country',
    },
    {
      name: 'Premium Cigar Production',
      year: '1960s',
      description: 'Became world leader in hand-rolled premium cigars',
    },
  ],
  quiz: [
    {
      id: 'dominican-q1',
      question: 'What is the capital of Dominican Republic?',
      options: ['Santo Domingo', 'San Juan', 'Port-au-Prince', 'Havana'],
      correctAnswer: 0,
    },
    {
      id: 'dominican-q2',
      question: 'What is the national dish of Dominican Republic?',
      options: ['Tacos', 'La Bandera', 'Paella', 'Ceviche'],
      correctAnswer: 1,
    },
    {
      id: 'dominican-q3',
      question: 'What is the national sport of Dominican Republic?',
      options: ['Soccer', 'Basketball', 'Baseball', 'Volleyball'],
      correctAnswer: 2,
    },
    {
      id: 'dominican-q4',
      question: 'Which music genre originated in Dominican Republic?',
      options: ['Salsa', 'Merengue', 'Samba', 'Reggae'],
      correctAnswer: 1,
    },
    {
      id: 'dominican-q5',
      question: 'What island does Dominican Republic share with Haiti?',
      options: ['Jamaica', 'Hispaniola', 'Cuba', 'Puerto Rico'],
      correctAnswer: 1,
    },
    {
      id: 'dominican-q6',
      question: 'What is Dominican Republic famous for producing?',
      options: ['Coffee', 'Cigars', 'Chocolate', 'Wine'],
      correctAnswer: 1,
    },
    {
      id: 'dominican-q7',
      question: 'What is the highest peak in the Caribbean?',
      options: ['Blue Mountain', 'Pico Duarte', 'El Yunque', 'Mount Scenery'],
      correctAnswer: 1,
    },
    {
      id: 'dominican-q8',
      question: 'What is the currency of Dominican Republic?',
      options: ['US Dollar', 'Dominican Peso', 'Euro', 'Caribbean Dollar'],
      correctAnswer: 1,
    },
    {
      id: 'dominican-q9',
      question: 'What is the official language?',
      options: ['English', 'French', 'Spanish', 'Portuguese'],
      correctAnswer: 2,
    },
    {
      id: 'dominican-q10',
      question: 'What is Mamajuana?',
      options: ['A dance', 'A drink', 'A dish', 'A festival'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 24, y: 29 },
};
