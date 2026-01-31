import { Country } from '@/types';

export const dominica: Country = {
  id: 'dominica',
  name: 'Dominica',
  code: 'DM',
  continent: 'North America',
  flag: '🇩🇲',
  landscapeImage: 'https://images.unsplash.com/photo-1606150498605-cace41df26a7?w=800&q=80',
  description: 'Dominica is the "Nature Island of the Caribbean," known for lush rainforests, hot springs, waterfalls, and the boiling lake.',
  quickFacts: [
    { label: 'Capital', value: 'Roseau' },
    { label: 'Population', value: '72,000' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'East Caribbean Dollar' },
    { label: 'Area', value: '751 km²' },
  ],
  facts: [
    'Has 365 rivers, one for each day of the year',
    'Home to the world\'s second-largest boiling lake',
    'The only Caribbean island with a large Kalinago population',
    'Filming location for Pirates of the Caribbean',
  ],
  foodCulture: 'Dominican cuisine features provisions (root vegetables), fresh seafood, and Creole-style cooking.',
  history: [
    {
      year: '1493',
      title: 'Columbus Arrival',
      description: 'Christopher Columbus sighted the island on a Sunday (Dominica means "Sunday" in Latin).'
    },
    {
      year: '1763',
      title: 'British Control',
      description: 'Britain took control after years of being passed between France and Britain.'
    },
    {
      year: '1978',
      title: 'Independence',
      description: 'Dominica gained independence from the United Kingdom.'
    },
  ],
  mustVisit: [
    { name: 'Boiling Lake', description: 'Second-largest hot spring in the world, surrounded by volcanic landscape.' },
    { name: 'Morne Trois Pitons National Park', description: 'UNESCO World Heritage Site with waterfalls, hot springs, and lush rainforest.' },
    { name: 'Trafalgar Falls', description: 'Twin waterfalls cascading into mineral-rich pools.' },
    { name: 'Champagne Reef', description: 'Unique snorkeling spot with volcanic bubbles rising through the water.' },
    { name: 'Kalinago Territory', description: 'Indigenous reserve showcasing Kalinago culture and traditions.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'December-May for dry season. June-November is hurricane season.' },
    { item: 'Hiking gear', description: 'Sturdy boots and rain gear for rainforest trails.' },
    { item: 'Cash', description: 'East Caribbean Dollars. Many places don\'t accept cards.' },
    { item: 'Insect repellent', description: 'Essential for rainforest exploration.' },
  ],
  mainDish: {
    id: 'dominica-main',
    name: 'Callaloo Soup',
    description: 'Traditional soup with dasheen leaves and crab',
    cookingTime: 60,
    servings: 6,
    dietType: 'fish',
    ingredients: [
      { name: 'Dasheen leaves', amount: 500, unit: 'g' },
      { name: 'Crab meat', amount: 300, unit: 'g' },
      { name: 'Coconut milk', amount: 400, unit: 'ml' },
      { name: 'Okra', amount: 200, unit: 'g' },
      { name: 'Pumpkin', amount: 200, unit: 'g' },
      { name: 'Garlic', amount: 3, unit: 'cloves' },
    ],
    steps: [
      'Boil dasheen leaves until tender',
      'Blend with coconut milk',
      'Add crab, okra, and pumpkin',
      'Simmer until vegetables are soft',
      'Season with garlic and pepper',
      'Serve hot with dumplings',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600',
  },
  dessert: {
    id: 'dominica-dessert',
    name: 'Coconut Drops',
    description: 'Sweet coconut candies with ginger and spices',
    cookingTime: 45,
    servings: 20,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Grated coconut', amount: 400, unit: 'g' },
      { name: 'Brown sugar', amount: 300, unit: 'g' },
      { name: 'Fresh ginger', amount: 30, unit: 'g' },
      { name: 'Water', amount: 100, unit: 'ml' },
      { name: 'Cinnamon', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Boil sugar and water until syrup forms',
      'Add grated coconut and grated ginger',
      'Add cinnamon',
      'Cook stirring until mixture thickens',
      'Drop spoonfuls onto greased tray',
      'Let cool and harden',
      'Store in airtight container',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600',
  },
  drinks: {
    alcoholic: 'Rum, Bay rum, Local beer',
    nonAlcoholic: 'Coconut water, Sorrel, Fresh juice',
  },
  music: [
    'Cadence-lypso',
    'Bouyon',
    'Jing ping',
    'Reggae',
  ],
  decorationIdeas: [
    'Green, yellow, black, white and red flag colors',
    'Tropical rainforest themes',
    'Waterfall imagery',
    'Kalinago crafts',
  ],
  conversationStarters: [
    'Have you experienced Caribbean nature?',
    'Do you enjoy rainforest hiking?',
  ],
  innovations: [
    {
      name: 'Geothermal Energy',
      year: '2020s',
      description: 'Developing geothermal power from volcanic activity to become the first climate-resilient nation',
    },
    {
      name: 'Citizenship by Investment',
      year: '1993',
      description: 'One of the Caribbean\'s first economic citizenship programs',
    },
    {
      name: 'Eco-Tourism Model',
      year: '2000s',
      description: 'Pioneering sustainable tourism focused on nature preservation',
    },
  ],
  quiz: [
    {
      id: 'dominica-q1',
      question: 'What is the capital of Dominica?',
      options: ['Roseau', 'Bridgetown', 'Castries', 'St. George\'s'],
      correctAnswer: 0,
    },
    {
      id: 'dominica-q2',
      question: 'What is Dominica nicknamed?',
      options: ['Spice Island', 'Nature Island', 'Pearl of Caribbean', 'Emerald Isle'],
      correctAnswer: 1,
    },
    {
      id: 'dominica-q3',
      question: 'How many rivers does Dominica have?',
      options: ['100', '200', '365', '500'],
      correctAnswer: 2,
    },
    {
      id: 'dominica-q4',
      question: 'What is the traditional soup of Dominica?',
      options: ['Tomato soup', 'Callaloo soup', 'Pumpkin soup', 'Fish soup'],
      correctAnswer: 1,
    },
    {
      id: 'dominica-q5',
      question: 'Which indigenous people live in Dominica?',
      options: ['Aztec', 'Maya', 'Kalinago', 'Inca'],
      correctAnswer: 2,
    },
    {
      id: 'dominica-q6',
      question: 'What movie was filmed in Dominica?',
      options: ['Titanic', 'Pirates of the Caribbean', 'Jurassic Park', 'Avatar'],
      correctAnswer: 1,
    },
    {
      id: 'dominica-q7',
      question: 'What is the official language of Dominica?',
      options: ['French', 'Spanish', 'English', 'Creole'],
      correctAnswer: 2,
    },
    {
      id: 'dominica-q8',
      question: 'What is the currency of Dominica?',
      options: ['US Dollar', 'Euro', 'East Caribbean Dollar', 'Pound Sterling'],
      correctAnswer: 2,
    },
    {
      id: 'dominica-q9',
      question: 'What music genre originated in Dominica?',
      options: ['Reggae', 'Salsa', 'Bouyon', 'Calypso'],
      correctAnswer: 2,
    },
    {
      id: 'dominica-q10',
      question: 'What geological feature is Dominica famous for?',
      options: ['Desert', 'Glaciers', 'Boiling lake', 'Caves'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 26, y: 26 },
};
