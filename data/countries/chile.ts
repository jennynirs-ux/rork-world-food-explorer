import { Country } from '@/types';

export const chile: Country = {
  id: 'chile',
  name: 'Chile',
  code: 'CL',
  continent: 'South America',
  flag: '🇨🇱',
  landscapeImage: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800',
  description: 'Chile is a long, narrow country stretching along South America\'s western edge, offering incredibly diverse landscapes from the driest desert in the world to glaciers, fjords, and wine valleys. It\'s known for its natural beauty, wines, and vibrant culture.',
  quickFacts: [
    { label: 'Capital', value: 'Santiago' },
    { label: 'Population', value: '19.5 million' },
    { label: 'Official Language', value: 'Spanish' },
    { label: 'Currency', value: 'Chilean Peso (CLP)' },
    { label: 'Area', value: '756,102 km²' },
  ],
  facts: [
    'Chile is the longest north-south country in the world at 4,300 km',
    'The Atacama Desert is the driest place on Earth',
    'Easter Island (Rapa Nui) with its famous moai statues belongs to Chile',
    'Chile produces some of the world\'s best wines',
    'The country has over 2,000 volcanoes, 90 of which are active',
    'Chile is the world\'s largest copper producer',
    'Torres del Paine National Park is one of the most spectacular in the world',
    'The country spans from desert to Antarctic territory',
  ],
  foodCulture: 'Chilean cuisine features fresh seafood from its long coastline, grilled meats, and hearty stews. The country\'s diverse geography provides varied ingredients. Meals are typically accompanied by excellent Chilean wine. Afternoon tea (once) is a beloved tradition with bread, cheese, and avocado.',
  history: [
    {
      year: '12,000 BC',
      title: 'Indigenous Peoples',
      description: 'Various indigenous groups including the Mapuche inhabited the region for thousands of years.'
    },
    {
      year: '1540',
      title: 'Spanish Conquest',
      description: 'Spanish conquistadors led by Pedro de Valdivia began colonization, founding Santiago in 1541.'
    },
    {
      year: '1810-1818',
      title: 'Independence',
      description: 'Chile fought for and gained independence from Spain, led by Bernardo O\'Higgins and José de San Martín.'
    },
    {
      year: '1879-1884',
      title: 'War of the Pacific',
      description: 'Chile defeated Peru and Bolivia, gaining significant northern territory rich in natural resources.'
    },
    {
      year: '1973-1990',
      title: 'Military Dictatorship',
      description: 'General Pinochet\'s military regime controlled Chile, a dark period that ended with return to democracy.'
    },
    {
      year: '2010',
      title: 'Modern Era',
      description: 'Chile joined the OECD and continued developing as one of South America\'s most stable economies.'
    },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Many nationalities can visit visa-free for tourism up to 90 days.' },
    { item: 'Best time to visit', description: 'December to February (summer) for most regions; June-September for skiing' },
    { item: 'Transportation', description: 'Domestic flights, long-distance buses, metro in Santiago.' },
    { item: 'Language', description: 'Spanish with unique Chilean slang. English in tourist areas.' },
    { item: 'Safety', description: 'Very safe by South American standards. Standard precautions in cities.' },
  ],
  mainDish: {
    id: 'chile-pastel-de-choclo',
    name: 'Pastel de Choclo',
    description: 'Chile\'s comfort food - a hearty casserole with a savory ground beef filling (pino) topped with a sweet corn cough. The contrast between the sweet corn topping and savory meat is what makes this dish special. Traditionally baked in clay dishes.',
    cookingTime: 60,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Ground beef', amount: 600, unit: 'g' },
      { name: 'Onions, chopped', amount: 2, unit: 'pieces' },
      { name: 'Fresh corn kernels', amount: 6, unit: 'cups' },
      { name: 'Hard-boiled eggs', amount: 3, unit: 'pieces' },
      { name: 'Black olives', amount: 12, unit: 'pieces' },
      { name: 'Raisins', amount: 100, unit: 'g' },
      { name: 'Cooked chicken pieces', amount: 300, unit: 'g' },
      { name: 'Cumin, paprika', amount: 2, unit: 'tsp' },
      { name: 'Basil, fresh', amount: 10, unit: 'leaves' },
    ],
    steps: [
      'Sauté onions until soft, add ground beef and spices, cook until browned',
      'Add raisins and basil, set aside to cool',
      'Blend corn kernels until smooth, cook with butter and basil until thick',
      'In baking dish, layer the meat mixture',
      'Add sliced hard-boiled eggs, chicken pieces, and olives',
      'Cover completely with corn mixture',
      'Sprinkle with sugar on top',
      'Bake at 200°C for 30-40 minutes until golden',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1626266061368-46ab8e248e6b?w=600',
  },
  drinks: {
    alcoholic: 'Chilean wine (Carmenere, Cabernet), Pisco Sour, Terremoto cocktail',
    nonAlcoholic: 'Mote con huesillos (wheat and peach drink), Fresh fruit juices',
  },
  music: ['Cueca (national dance)', 'Nueva Canción', 'Andean folk music', 'Modern Chilean pop/rock'],
  decorationIdeas: [
    'Red, white, and blue (flag colors)',
    'Copper elements',
    'Wine-themed decor',
    'Andean textiles',
    'Coastal/nautical elements',
    'Mountain and desert imagery',
  ],
  conversationStarters: [
    'Would you explore the Atacama Desert or the glaciers of Patagonia?',
    'Have you tried Chilean wine? What\'s your favorite variety?',
    'What do you know about Easter Island and its mysterious moai statues?',
    'Would you prefer skiing in the Andes or surfing on the coast?',
  ],
  quiz: [
    {
      id: 'chile-q1',
      question: 'What is Chile\'s capital city?',
      options: ['Buenos Aires', 'Santiago', 'Lima', 'Valparaíso'],
      correctAnswer: 1,
    },
    {
      id: 'chile-q2',
      question: 'What desert, the driest on Earth, is located in Chile?',
      options: ['Sahara', 'Gobi', 'Atacama', 'Mojave'],
      correctAnswer: 2,
    },
    {
      id: 'chile-q3',
      question: 'What is Chile\'s most famous grape variety?',
      options: ['Merlot', 'Carmenere', 'Pinot Noir', 'Chardonnay'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 23, y: 8 },
};
