import { Country } from '@/types';

export const qatar: Country = {
  id: 'qatar',
  name: 'Qatar',
  code: 'QA',
  continent: 'Asia',
  flag: '🇶🇦',
  landscapeImage: 'https://images.unsplash.com/photo-1572816703439-d1f4d66e6b28?w=800&q=80',
  description: 'Qatar is a wealthy Gulf state known for modern architecture, hosting the 2022 FIFA World Cup, and vast natural gas reserves.',
  quickFacts: [
    { label: 'Capital', value: 'Doha' },
    { label: 'Population', value: '2.9 million' },
    { label: 'Official Language', value: 'Arabic' },
    { label: 'Currency', value: 'Qatari Riyal' },
    { label: 'Area', value: '11,586 km²' },
  ],
  facts: [
    'Hosted the 2022 FIFA World Cup',
    'One of the world\'s richest countries per capita',
    'Home to Al Jazeera news network',
    'Has the world\'s third-largest natural gas reserves',
  ],
  foodCulture: 'Qatari cuisine blends Arab, Persian, and Indian influences with rice, lamb, and seafood.',
  history: [
    {
      year: 'Ancient',
      title: 'Pearl Diving',
      description: 'Qatar was known for its pearl diving industry for centuries.'
    },
    {
      year: '1971',
      title: 'Independence',
      description: 'Qatar gained independence from British protection.'
    },
    {
      year: '2022',
      title: 'FIFA World Cup',
      description: 'First Middle Eastern country to host the FIFA World Cup.'
    },
  ],
  innovations: [
    {
      name: 'Al Jazeera',
      year: '1996',
      description: 'Launched influential Arabic news network that changed global media.',
    },
    {
      name: 'World Cup Infrastructure',
      year: '2022',
      description: 'Built innovative stadiums and infrastructure for World Cup.',
    },
  ],
  mustVisit: [
    { name: 'Museum of Islamic Art', description: 'Stunning museum designed by I.M. Pei with world-class collection.' },
    { name: 'Souq Waqif', description: 'Traditional market with spices, textiles, and local food.' },
    { name: 'The Pearl-Qatar', description: 'Artificial island with luxury shopping and dining.' },
    { name: 'Katara Cultural Village', description: 'Cultural center with galleries, theaters, and beach.' },
    { name: 'Inland Sea (Khor Al Adaid)', description: 'UNESCO site, desert meeting sea accessible only by 4x4.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'November-April for pleasant weather; summer is extremely hot.' },
    { item: 'Visa', description: 'Visa-free or visa on arrival for many nationalities.' },
    { item: 'Modest clothing', description: 'Dress conservatively in public, shoulders and knees covered.' },
    { item: 'Currency', description: 'Qatari Riyal; credit cards widely accepted.' },
  ],
  dessert: {
    id: 'qatar-dessert',
    name: 'Um Ali',
    description: 'Traditional bread pudding with nuts and cream',
    cookingTime: 45,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Puff pastry', amount: 400, unit: 'g' },
      { name: 'Milk', amount: 1000, unit: 'ml' },
      { name: 'Heavy cream', amount: 200, unit: 'ml' },
      { name: 'Sugar', amount: 150, unit: 'g' },
      { name: 'Mixed nuts', amount: 200, unit: 'g' },
      { name: 'Raisins', amount: 100, unit: 'g' },
      { name: 'Cardamom', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Bake puff pastry until golden, break into pieces',
      'Layer pastry pieces in baking dish',
      'Add nuts and raisins',
      'Heat milk, cream, sugar, and cardamom',
      'Pour hot milk mixture over pastry',
      'Bake at 350°F for 25 minutes until golden',
      'Serve warm',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=700',
  },
  mainDish: {
    id: 'qatar-main',
    name: 'Machbous',
    description: 'Spiced rice with meat or fish',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken or lamb', amount: 1, unit: 'kg' },
      { name: 'Basmati rice', amount: 500, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Baharat spice', amount: 2, unit: 'tbsp' },
      { name: 'Dried limes', amount: 3, unit: 'whole' },
    ],
    steps: [
      'Brown meat with spices',
      'Add onions and tomatoes',
      'Simmer until tender',
      'Cook rice with broth and dried limes',
      'Layer meat and rice',
      'Garnish with nuts and raisins',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800',
  },
  drinks: {
    alcoholic: 'Not available (prohibited)',
    nonAlcoholic: 'Arabic coffee, Karak tea, Fresh juice',
  },
  music: [
    'Traditional Ardah',
    'Gulf music',
    'Arabic pop',
  ],
  decorationIdeas: [
    'Maroon and white flag colors',
    'Modern skyline imagery',
    'Desert themes',
    'Islamic architecture',
  ],
  conversationStarters: [
    'Did you watch the 2022 World Cup?',
    'What do you know about Gulf architecture?',
  ],
  quiz: [
    {
      id: 'qatar-q1',
      question: 'What is the capital of Qatar?',
      options: ['Dubai', 'Doha', 'Abu Dhabi', 'Muscat'],
      correctAnswer: 1,
    },
    {
      id: 'qatar-q2',
      question: 'Which major sporting event did Qatar host in 2022?',
      options: ['Olympics', 'FIFA World Cup', 'Super Bowl', 'Commonwealth Games'],
      correctAnswer: 1,
    },
    {
      id: 'qatar-q3',
      question: 'What news network is based in Qatar?',
      options: ['CNN', 'BBC', 'Al Jazeera', 'Sky News'],
      correctAnswer: 2,
    },
    {
      id: 'qatar-q4',
      question: 'What is Qatar\'s currency?',
      options: ['Dinar', 'Dirham', 'Riyal', 'Pound'],
      correctAnswer: 2,
    },
    {
      id: 'qatar-q5',
      question: 'In which year did Qatar gain independence?',
      options: ['1960', '1971', '1980', '1990'],
      correctAnswer: 1,
    },
    {
      id: 'qatar-q6',
      question: 'What is Qatar rich in?',
      options: ['Gold', 'Diamonds', 'Natural gas', 'Coal'],
      correctAnswer: 2,
    },
    {
      id: 'qatar-q7',
      question: 'Is alcohol available in Qatar?',
      options: ['Yes, freely', 'Yes, in hotels only', 'No, prohibited', 'Only for tourists'],
      correctAnswer: 1,
    },
    {
      id: 'qatar-q8',
      question: 'What was Qatar historically known for?',
      options: ['Pearl diving', 'Silk trading', 'Spice trading', 'Gold mining'],
      correctAnswer: 0,
    },
    {
      id: 'qatar-q9',
      question: 'What is the traditional market in Doha called?',
      options: ['Grand Bazaar', 'Souq Waqif', 'Khan el-Khalili', 'Spice Market'],
      correctAnswer: 1,
    },
    {
      id: 'qatar-q10',
      question: 'What UNESCO site features desert meeting sea?',
      options: ['Desert Beach', 'Inland Sea (Khor Al Adaid)', 'Sand Bay', 'Dune Coast'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 59, y: 34 },
};
