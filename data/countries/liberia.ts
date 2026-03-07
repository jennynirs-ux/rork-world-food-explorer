import { Country } from '@/types';

export const liberia: Country = {
  id: 'liberia',
  name: 'Liberia',
  code: 'LR',
  continent: 'Africa',
  flag: '🇱🇷',
  landscapeImage: 'https://images.unsplash.com/photo-1585662018872-068b7fb6f9f2?w=800&q=80',
  description: 'Liberia is a West African country founded by freed American slaves, known for its unique history, tropical forests, and surf beaches.',
  quickFacts: [
    { label: 'Capital', value: 'Monrovia' },
    { label: 'Population', value: '5.2 million' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'Liberian Dollar' },
    { label: 'Area', value: '111,369 km²' },
  ],
  facts: [
    'Founded by freed American slaves in 1847',
    'Africa\'s first republic',
    'Has a flag similar to the United States',
    'Rich in rubber, timber, and iron ore',
  ],
  foodCulture: 'Liberian cuisine blends African and American Southern influences with rice, cassava, and palm oil.',
  history: [
    {
      year: '1822',
      title: 'Founding',
      description: 'Freed American slaves began settling in Liberia under the American Colonization Society.'
    },
    {
      year: '1847',
      title: 'Independence',
      description: 'Liberia declared independence, becoming Africa\'s first republic.'
    },
  ],
  innovations: [
    {
      name: 'First African Republic',
      year: '1847',
      description: 'Liberia became the first republic in Africa, pioneering self-governance.',
    },
    {
      name: 'Rubber Industry',
      year: '1920s',
      description: 'Developed one of Africa\'s largest rubber industries.',
    },
  ],
  mustVisit: [
    { name: 'Sapo National Park', description: 'Liberia\'s largest protected area with rainforest and wildlife.' },
    { name: 'Providence Island', description: 'Historic site where freed slaves first settled.' },
    { name: 'Robertsport', description: 'Coastal town with world-class surfing beaches.' },
    { name: 'Monrovia', description: 'Capital city named after US President James Monroe.' },
    { name: 'Kpatawee Waterfall', description: 'Beautiful waterfall in lush tropical forest.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'November-April for dry season; rainy season is May-October.' },
    { item: 'Yellow fever vaccination', description: 'Required for entry into Liberia.' },
    { item: 'Visa', description: 'Most visitors need a visa arranged in advance.' },
    { item: 'Cash', description: 'US dollars widely used; bring cash as ATMs are limited.' },
  ],
  dessert: {
    id: 'liberia-dessert',
    name: 'Kanya',
    description: 'Sweet peanut candy, a Liberian favorite',
    cookingTime: 30,
    servings: 16,
    dietType: 'vegan',
    ingredients: [
      { name: 'Roasted peanuts', amount: 500, unit: 'g' },
      { name: 'Sugar', amount: 200, unit: 'g' },
      { name: 'Water', amount: 100, unit: 'ml' },
      { name: 'Ginger powder', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Grind roasted peanuts coarsely',
      'Boil sugar and water until it reaches soft ball stage',
      'Mix in ground peanuts and ginger',
      'Stir until well combined',
      'Pour onto greased surface',
      'Let cool and cut into squares',
      'Store in airtight container',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1566740933430-b5e70b06d2d6?w=900&q=80',
  },
  mainDish: {
    id: 'liberia-main',
    name: 'Jollof Rice',
    description: 'Spiced rice with tomatoes and vegetables',
    cookingTime: 60,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Rice', amount: 500, unit: 'g' },
      { name: 'Tomato paste', amount: 200, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Bell peppers', amount: 2, unit: 'whole' },
      { name: 'Scotch bonnet pepper', amount: 1, unit: 'whole' },
      { name: 'Palm oil', amount: 3, unit: 'tbsp' },
    ],
    steps: [
      'Sauté onions and peppers in palm oil',
      'Add tomato paste and spices',
      'Add rice and water',
      'Cover and simmer until rice absorbs liquid',
      'Fluff with fork',
      'Serve with fried plantains',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=700&q=80',
  },
  drinks: {
    alcoholic: 'Palm wine, Club Beer',
    nonAlcoholic: 'Ginger beer, Fresh coconut water',
  },
  music: [
    'Hipco (Liberian hip-hop)',
    'Traditional drum music',
    'Gospel music',
  ],
  decorationIdeas: [
    'Red, white and blue flag colors',
    'Palm tree imagery',
    'Coastal themes',
    'Traditional masks',
  ],
  conversationStarters: [
    'What do you know about Liberia\'s unique history?',
    'Have you explored West African beaches?',
  ],
  quiz: [
    {
      id: 'liberia-q1',
      question: 'What is the capital of Liberia?',
      options: ['Monrovia', 'Freetown', 'Conakry', 'Accra'],
      correctAnswer: 0,
    },
    {
      id: 'liberia-q2',
      question: 'Who founded Liberia?',
      options: ['British colonists', 'Freed American slaves', 'Portuguese traders', 'French settlers'],
      correctAnswer: 1,
    },
    {
      id: 'liberia-q3',
      question: 'In which year did Liberia become independent?',
      options: ['1822', '1847', '1900', '1960'],
      correctAnswer: 1,
    },
    {
      id: 'liberia-q4',
      question: 'What is Liberia\'s position in African history?',
      options: ['First colony', 'First monarchy', 'First republic', 'First democracy'],
      correctAnswer: 2,
    },
    {
      id: 'liberia-q5',
      question: 'What is the official language of Liberia?',
      options: ['French', 'English', 'Portuguese', 'Arabic'],
      correctAnswer: 1,
    },
    {
      id: 'liberia-q6',
      question: 'What major industry did Liberia develop in the 1920s?',
      options: ['Diamond mining', 'Rubber', 'Oil', 'Coffee'],
      correctAnswer: 1,
    },
    {
      id: 'liberia-q7',
      question: 'Which US President is Monrovia named after?',
      options: ['George Washington', 'Thomas Jefferson', 'James Monroe', 'Abraham Lincoln'],
      correctAnswer: 2,
    },
    {
      id: 'liberia-q8',
      question: 'What currency is widely used in Liberia?',
      options: ['Euro', 'British Pound', 'US Dollar', 'CFA Franc'],
      correctAnswer: 2,
    },
    {
      id: 'liberia-q9',
      question: 'Which coastal activity is Robertsport famous for?',
      options: ['Diving', 'Surfing', 'Fishing', 'Sailing'],
      correctAnswer: 1,
    },
    {
      id: 'liberia-q10',
      question: 'What type of flag does Liberia have?',
      options: ['Green and white', 'Similar to the United States', 'All red', 'Blue and yellow'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 45, y: 18 },
};
