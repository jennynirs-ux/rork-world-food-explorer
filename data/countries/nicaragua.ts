import { Country } from '@/types';

export const nicaragua: Country = {
  id: 'nicaragua',
  name: 'Nicaragua',
  code: 'NI',
  continent: 'North America',
  flag: '🇳🇮',
  landscapeImage: 'https://images.unsplash.com/photo-1564082979121-85b2e787881f?w=800',
  description: 'Nicaragua is the largest Central American country, known for dramatic Pacific and Caribbean coasts, volcanoes, and colonial cities.',
  quickFacts: [
    { label: 'Capital', value: 'Managua' },
    { label: 'Population', value: '6.9 million' },
    { label: 'Official Language', value: 'Spanish' },
    { label: 'Currency', value: 'Nicaraguan Córdoba' },
    { label: 'Area', value: '130,373 km²' },
  ],
  facts: [
    'Has 19 active volcanoes',
    'Lake Nicaragua is Central America\'s largest lake',
    'Granada is one of the oldest colonial cities',
    'Major coffee and tobacco producer',
  ],
  foodCulture: 'Nicaraguan cuisine features corn, beans, plantains, and fresh seafood with Spanish and indigenous influences.',
  history: [
    {
      year: '1502',
      title: 'Spanish Conquest',
      description: 'Christopher Columbus reached Nicaragua during his fourth voyage.'
    },
    {
      year: '1821',
      title: 'Independence',
      description: 'Nicaragua gained independence from Spain.'
    },
    {
      year: '1979',
      title: 'Sandinista Revolution',
      description: 'Revolution overthrew the Somoza dictatorship.'
    },
  ],
  innovations: [
    {
      name: 'Colonial Architecture',
      year: '16th Century',
      description: 'Granada and León showcase well-preserved Spanish colonial architecture.',
    },
    {
      name: 'Coffee Production',
      year: '19th Century',
      description: 'Development of high-quality coffee growing in volcanic highlands.',
    },
  ],
  mustVisit: [
    { name: 'Granada', description: 'Colonial gem with colorful buildings and nearby volcano.' },
    { name: 'Ometepe Island', description: 'Twin-volcano island in Lake Nicaragua.' },
    { name: 'León', description: 'Colonial city with largest cathedral in Central America.' },
    { name: 'Masaya Volcano', description: 'Active volcano you can peer into the lava lake.' },
    { name: 'Corn Islands', description: 'Caribbean islands with pristine beaches and diving.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'December-April for dry season; rainy season May-November.' },
    { item: 'Visa', description: 'Visa-free for many nationalities for 90 days.' },
    { item: 'Cash', description: 'US dollars widely accepted; bring cash for rural areas.' },
    { item: 'Spanish', description: 'Helpful to know; English limited outside tourist areas.' },
  ],
  dessert: {
    id: 'nicaragua-dessert',
    name: 'Tres Leches',
    description: 'Three-milk cake, sponge soaked in milk mixture',
    cookingTime: 240,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Flour', amount: 200, unit: 'g' },
      { name: 'Sugar', amount: 200, unit: 'g' },
      { name: 'Eggs', amount: 5, unit: 'large' },
      { name: 'Evaporated milk', amount: 400, unit: 'ml' },
      { name: 'Condensed milk', amount: 400, unit: 'ml' },
      { name: 'Heavy cream', amount: 300, unit: 'ml' },
      { name: 'Vanilla extract', amount: 2, unit: 'tsp' },
    ],
    steps: [
      'Beat eggs and sugar until fluffy',
      'Fold in flour and vanilla',
      'Bake at 350°F for 30 minutes',
      'Cool cake and poke holes all over',
      'Mix three milks together',
      'Pour milk mixture over cake slowly',
      'Refrigerate for at least 3 hours',
      'Top with whipped cream before serving',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600',
  },
  mainDish: {
    id: 'nicaragua-main',
    name: 'Gallo Pinto',
    description: 'Traditional rice and beans dish',
    cookingTime: 30,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Cooked rice', amount: 500, unit: 'g' },
      { name: 'Red beans', amount: 400, unit: 'g' },
      { name: 'Onions', amount: 1, unit: 'whole' },
      { name: 'Bell peppers', amount: 1, unit: 'whole' },
      { name: 'Garlic', amount: 3, unit: 'cloves' },
      { name: 'Vegetable oil', amount: 3, unit: 'tbsp' },
    ],
    steps: [
      'Sauté onions, peppers, and garlic',
      'Add cooked beans with liquid',
      'Stir in rice',
      'Mix until beans slightly mash',
      'Season with salt and pepper',
      'Serve with fried eggs and tortillas',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600',
  },
  drinks: {
    alcoholic: 'Flor de Caña rum, Toña beer',
    nonAlcoholic: 'Pinolillo (corn and cacao drink), Tiste, Fresh fruit juice',
  },
  music: [
    'Palo de Mayo',
    'Marimba music',
    'Latin pop',
  ],
  decorationIdeas: [
    'Blue and white flag colors',
    'Volcanic landscapes',
    'Colonial architecture',
    'Lake and ocean themes',
  ],
  conversationStarters: [
    'Have you visited Central American volcanoes?',
    'What do you know about colonial cities?',
  ],
  quiz: [
    {
      id: 'nicaragua-q1',
      question: 'What is the capital of Nicaragua?',
      options: ['Managua', 'Granada', 'León', 'Masaya'],
      correctAnswer: 0,
    },
    {
      id: 'nicaragua-q2',
      question: 'How many active volcanoes does Nicaragua have?',
      options: ['5', '10', '19', '30'],
      correctAnswer: 2,
    },
    {
      id: 'nicaragua-q3',
      question: 'What is Nicaragua\'s traditional rice and beans dish?',
      options: ['Pinto Beans', 'Gallo Pinto', 'Frijoles', 'Casamiento'],
      correctAnswer: 1,
    },
    {
      id: 'nicaragua-q4',
      question: 'What is the largest lake in Central America?',
      options: ['Lake Atitlán', 'Lake Nicaragua', 'Lake Titicaca', 'Lake Managua'],
      correctAnswer: 1,
    },
    {
      id: 'nicaragua-q5',
      question: 'Which colonial city is one of the oldest in Nicaragua?',
      options: ['Managua', 'Granada', 'Rivas', 'Estelí'],
      correctAnswer: 1,
    },
    {
      id: 'nicaragua-q6',
      question: 'What is Nicaragua\'s currency?',
      options: ['Peso', 'Córdoba', 'Colón', 'Quetzal'],
      correctAnswer: 1,
    },
    {
      id: 'nicaragua-q7',
      question: 'In which year did Nicaragua gain independence?',
      options: ['1810', '1821', '1850', '1900'],
      correctAnswer: 1,
    },
    {
      id: 'nicaragua-q8',
      question: 'What rum brand is famous from Nicaragua?',
      options: ['Bacardi', 'Captain Morgan', 'Flor de Caña', 'Havana Club'],
      correctAnswer: 2,
    },
    {
      id: 'nicaragua-q9',
      question: 'What Caribbean islands belong to Nicaragua?',
      options: ['Bay Islands', 'Corn Islands', 'Cayman Islands', 'Virgin Islands'],
      correctAnswer: 1,
    },
    {
      id: 'nicaragua-q10',
      question: 'Which volcano in Nicaragua has a visible lava lake?',
      options: ['Momotombo', 'Masaya', 'Concepción', 'San Cristóbal'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 18, y: 25 },
};
