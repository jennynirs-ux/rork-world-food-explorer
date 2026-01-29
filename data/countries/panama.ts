import { Country } from '@/types';

export const panama: Country = {
  id: 'panama',
  name: 'Panama',
  code: 'PA',
  continent: 'North America',
  flag: '🇵🇦',
  landscapeImage: 'https://images.unsplash.com/photo-1564082979121-85b2e787881f?w=800',
  description: 'Panama is a Central American country known for the Panama Canal, connecting the Atlantic and Pacific oceans, and diverse ecosystems.',
  quickFacts: [
    { label: 'Capital', value: 'Panama City' },
    { label: 'Population', value: '4.4 million' },
    { label: 'Official Language', value: 'Spanish' },
    { label: 'Currency', value: 'US Dollar, Panamanian Balboa' },
    { label: 'Area', value: '75,417 km²' },
  ],
  facts: [
    'The Panama Canal revolutionized global shipping',
    'Bridge between North and South America',
    'Home to indigenous communities like the Guna',
    'Uses the US dollar as currency',
  ],
  foodCulture: 'Panamanian cuisine blends Spanish, African, and indigenous influences with fresh seafood and tropical fruits.',
  history: [
    {
      year: '1501',
      title: 'Spanish Colonization',
      description: 'Spanish explorers arrived, establishing Panama as a key trade route between oceans.'
    },
    {
      year: '1821',
      title: 'Independence from Spain',
      description: 'Panama gained independence from Spain and joined Gran Colombia.'
    },
    {
      year: '1903',
      title: 'Independence from Colombia',
      description: 'Panama separated from Colombia with US support.'
    },
    {
      year: '1914',
      title: 'Panama Canal Opens',
      description: 'The canal revolutionized global shipping and trade.'
    },
  ],
  innovations: [
    {
      name: 'Panama Canal',
      year: '1914',
      description: 'Engineering marvel connecting Atlantic and Pacific oceans.',
    },
    {
      name: 'Panama Hat',
      year: '19th Century',
      description: 'Ironically, Panama hats actually originated in Ecuador but shipped through Panama.',
    },
  ],
  mustVisit: [
    { name: 'Panama Canal', description: 'Watch ships navigate locks at Miraflores or Gatun.' },
    { name: 'Casco Viejo', description: 'Historic colonial district in Panama City, UNESCO site.' },
    { name: 'San Blas Islands', description: 'Pristine Caribbean islands controlled by Guna indigenous people.' },
    { name: 'Bocas del Toro', description: 'Caribbean archipelago with beaches, diving, and wildlife.' },
    { name: 'Boquete', description: 'Mountain town famous for coffee plantations and hiking.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'December-April for dry season; May-November is rainy.' },
    { item: 'Visa', description: 'Visa-free for many nationalities for 180 days.' },
    { item: 'Currency', description: 'US dollar used; local balboa coins same value as US coins.' },
    { item: 'Spanish basics', description: 'English spoken in tourist areas, Spanish elsewhere.' },
  ],
  dessert: {
    id: 'panama-dessert',
    name: 'Tres Leches Cake',
    description: 'Sponge cake soaked in three types of milk',
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
      'Cool and poke holes all over',
      'Mix three milks together',
      'Pour over cake slowly',
      'Refrigerate 3+ hours',
      'Top with whipped cream',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600',
  },
  mainDish: {
    id: 'panama-main',
    name: 'Sancocho',
    description: 'Traditional chicken soup with yuca and culantro',
    cookingTime: 120,
    servings: 8,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken', amount: 1, unit: 'kg' },
      { name: 'Yuca', amount: 500, unit: 'g' },
      { name: 'Corn', amount: 2, unit: 'pieces' },
      { name: 'Culantro', amount: 5, unit: 'leaves' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Garlic', amount: 4, unit: 'cloves' },
    ],
    steps: [
      'Boil chicken with aromatics',
      'Add yuca and corn',
      'Simmer until vegetables are tender',
      'Add culantro at the end',
      'Season with salt and pepper',
      'Serve with white rice and hot sauce',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600',
  },
  drinks: {
    alcoholic: 'Seco (sugarcane spirit), Balboa beer, Panamanian rum',
    nonAlcoholic: 'Chicheme, Raspao (shaved ice), Fresh coconut water',
  },
  music: [
    'Típico (accordion music)',
    'Reggaeton',
    'Salsa',
    'Afro-Caribbean rhythms',
  ],
  decorationIdeas: [
    'Red, white and blue flag colors',
    'Panama Canal imagery',
    'Tropical rainforest themes',
    'Indigenous mola textiles',
  ],
  conversationStarters: [
    'Have you been through the Panama Canal?',
    'What do you know about connecting oceans?',
  ],
  quiz: [
    {
      id: 'panama-q1',
      question: 'What connects the Atlantic and Pacific oceans?',
      options: ['Suez Canal', 'Panama Canal', 'Erie Canal', 'Grand Canal'],
      correctAnswer: 1,
    },
    {
      id: 'panama-q2',
      question: 'What is the capital of Panama?',
      options: ['Panama City', 'Colón', 'David', 'Santiago'],
      correctAnswer: 0,
    },
    {
      id: 'panama-q3',
      question: 'In which year did the Panama Canal open?',
      options: ['1900', '1914', '1925', '1950'],
      correctAnswer: 1,
    },
    {
      id: 'panama-q4',
      question: 'What currency does Panama use?',
      options: ['Peso', 'US Dollar and Balboa', 'Córdoba', 'Sol'],
      correctAnswer: 1,
    },
    {
      id: 'panama-q5',
      question: 'What is the official language of Panama?',
      options: ['English', 'Portuguese', 'Spanish', 'French'],
      correctAnswer: 2,
    },
    {
      id: 'panama-q6',
      question: 'What indigenous people control the San Blas Islands?',
      options: ['Maya', 'Guna', 'Aztec', 'Inca'],
      correctAnswer: 1,
    },
    {
      id: 'panama-q7',
      question: 'In which year did Panama gain independence from Colombia?',
      options: ['1821', '1903', '1914', '1950'],
      correctAnswer: 1,
    },
    {
      id: 'panama-q8',
      question: 'What is Panama\'s traditional chicken soup called?',
      options: ['Caldo', 'Sancocho', 'Sopa', 'Pozole'],
      correctAnswer: 1,
    },
    {
      id: 'panama-q9',
      question: 'Which mountain town is famous for coffee in Panama?',
      options: ['David', 'Boquete', 'Chitré', 'Las Tablas'],
      correctAnswer: 1,
    },
    {
      id: 'panama-q10',
      question: 'What connects North and South America?',
      options: ['Mexico', 'Panama (land bridge)', 'Costa Rica', 'Nicaragua'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 19, y: 21 },
};
