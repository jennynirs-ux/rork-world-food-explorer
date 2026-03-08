import { Country } from '@/types';

export const grenada: Country = {
  id: 'grenada',
  name: 'Grenada',
  code: 'GD',
  continent: 'North America',
  flag: '🇬🇩',
  landscapeImage: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
  description: 'Grenada is the "Spice Isle" of the Caribbean, famous for nutmeg production, beautiful beaches, and the underwater sculpture park.',
  quickFacts: [
    { label: 'Capital', value: 'St. George\'s' },
    { label: 'Population', value: '113,000' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'East Caribbean Dollar' },
    { label: 'Area', value: '348.5 km²' },
  ],
  facts: [
    'Produces one-third of the world\'s nutmeg',
    'Home to the world\'s first underwater sculpture park',
    'Has pristine rainforests and waterfalls',
    'Known for its aromatic spices',
  ],
  foodCulture: 'Grenadian cuisine features fresh seafood, ground provisions, and abundant use of local spices.',
  history: [
    {
      year: '1498',
      title: 'Columbus Sighting',
      description: 'Christopher Columbus sighted Grenada during his third voyage but did not land.'
    },
    {
      year: '1974',
      title: 'Independence',
      description: 'Grenada gained independence from the United Kingdom.'
    },
  ],
  innovations: [
    {
      name: 'Underwater Sculpture Park',
      year: '2006',
      description: 'Created the world\'s first underwater sculpture park, combining art with marine conservation and coral reef regeneration.'
    },
    {
      name: 'Nutmeg Processing',
      year: 'Traditional',
      description: 'Developed efficient methods for processing and grading nutmeg, becoming a global leader in spice quality standards.'
    },
    {
      name: 'Chocolate Heritage',
      year: '2000s',
      description: 'Pioneered tree-to-bar chocolate production in the Caribbean, preserving traditional cacao varieties and processing methods.'
    },
  ],
  mustVisit: [
    { name: 'Underwater Sculpture Park', description: 'Snorkel among 65+ sculptures while marine life thrives on the art.' },
    { name: 'Grand Etang National Park', description: 'Volcanic crater lake surrounded by lush rainforest and hiking trails.' },
    { name: 'Belmont Estate', description: 'Working plantation showcasing cocoa, nutmeg, and traditional Caribbean agriculture.' },
  ],
  travelEssentials: [
    { item: 'Best time', description: 'January-May for dry season; avoid hurricane season September-November.' },
    { item: 'Currency', description: 'East Caribbean Dollar; US dollars widely accepted.' },
    { item: 'Water activities', description: 'Bring snorkel gear for underwater sculpture park and coral reefs.' },
  ],
  mainDish: {
    id: 'grenada-main',
    name: 'Oil Down',
    description: 'National dish with breadfruit, salted meat, and coconut milk',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Breadfruit', amount: 1, unit: 'whole' },
      { name: 'Salted pigtail', amount: 300, unit: 'g' },
      { name: 'Chicken', amount: 500, unit: 'g' },
      { name: 'Coconut milk', amount: 800, unit: 'ml' },
      { name: 'Callaloo leaves', amount: 200, unit: 'g' },
      { name: 'Turmeric', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Layer breadfruit at bottom of pot',
      'Add meat and coconut milk',
      'Season with turmeric and spices',
      'Add callaloo leaves on top',
      'Simmer until liquid is absorbed',
      'Serve when "oil down" to bottom',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Cooking_oil_down_03.jpg/800px-Cooking_oil_down_03.jpg',
  },
  dessert: {
    id: 'grenada-dessert',
    name: 'Nutmeg Ice Cream',
    description: 'Creamy ice cream infused with fresh Grenadian nutmeg',
    cookingTime: 30,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Heavy cream', amount: 500, unit: 'ml' },
      { name: 'Whole milk', amount: 250, unit: 'ml' },
      { name: 'Sugar', amount: 150, unit: 'g' },
      { name: 'Egg yolks', amount: 5, unit: 'large' },
      { name: 'Fresh nutmeg, grated', amount: 2, unit: 'tsp' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Heat cream and milk with nutmeg until warm.',
      'Whisk egg yolks with sugar until pale.',
      'Slowly add warm cream to eggs, whisking constantly.',
      'Return to pan and cook until thickened (coats spoon).',
      'Strain through fine mesh sieve.',
      'Add vanilla extract.',
      'Chill completely in refrigerator.',
      'Churn in ice cream maker according to instructions.',
      'Freeze for 2 hours before serving.',
      'Garnish with fresh grated nutmeg.',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Magnum_ice_cream.jpg/800px-Magnum_ice_cream.jpg',
  },
  drinks: {
    alcoholic: 'Rum punch, Carib beer, River Antoine rum',
    nonAlcoholic: 'Sorrel, Mauby, Nutmeg juice',
  },
  music: [
    'Calypso',
    'Soca',
    'Reggae',
    'Steelpan music',
  ],
  decorationIdeas: [
    'Red, yellow and green flag colors',
    'Nutmeg and spice imagery',
    'Tropical beach themes',
    'Underwater sculpture elements',
  ],
  conversationStarters: [
    'Have you seen underwater sculptures?',
    'Do you cook with fresh nutmeg?',
    'What\'s your favorite Caribbean island?',
  ],
  quiz: [
    {
      id: 'grenada-q1',
      question: 'What is the capital of Grenada?',
      options: ['Bridgetown', 'St. George\'s', 'Roseau', 'Castries'],
      correctAnswer: 1,
    },
    {
      id: 'grenada-q2',
      question: 'What spice is Grenada famous for producing?',
      options: ['Cinnamon', 'Nutmeg', 'Saffron', 'Vanilla'],
      correctAnswer: 1,
    },
    {
      id: 'grenada-q3',
      question: 'What unique attraction did Grenada create first in the world?',
      options: ['Floating hotel', 'Underwater sculpture park', 'Sky bridge', 'Ice hotel'],
      correctAnswer: 1,
    },
    {
      id: 'grenada-q4',
      question: 'When did Grenada gain independence?',
      options: ['1966', '1974', '1981', '1990'],
      correctAnswer: 1,
    },
    {
      id: 'grenada-q5',
      question: 'What is Grenada\'s national dish?',
      options: ['Jerk chicken', 'Oil Down', 'Roti', 'Curry goat'],
      correctAnswer: 1,
    },
    {
      id: 'grenada-q6',
      question: 'What percentage of the world\'s nutmeg does Grenada produce?',
      options: ['One-tenth', 'One-quarter', 'One-third', 'One-half'],
      correctAnswer: 2,
    },
    {
      id: 'grenada-q7',
      question: 'What is the currency of Grenada?',
      options: ['Grenadian Dollar', 'East Caribbean Dollar', 'US Dollar', 'Caribbean Peso'],
      correctAnswer: 1,
    },
    {
      id: 'grenada-q8',
      question: 'What natural feature is found at Grand Etang?',
      options: ['Beach', 'Volcano', 'Crater lake', 'Cave system'],
      correctAnswer: 2,
    },
    {
      id: 'grenada-q9',
      question: 'What is the main ingredient in Oil Down besides breadfruit?',
      options: ['Fish', 'Salted meat and coconut milk', 'Rice', 'Beans'],
      correctAnswer: 1,
    },
    {
      id: 'grenada-q10',
      question: 'Grenada is known as the "___ Isle"',
      options: ['Sugar', 'Spice', 'Pearl', 'Emerald'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 26, y: 24 },
};
