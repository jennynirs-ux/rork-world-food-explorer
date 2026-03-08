import { Country } from '@/types';

export const kuwait: Country = {
  id: 'kuwait',
  name: 'Kuwait',
  code: 'KW',
  continent: 'Asia',
  flag: '🇰🇼',
  landscapeImage: 'https://images.unsplash.com/photo-1583203580674-37318bcb3718?w=800&q=80',
  description: 'Kuwait is a small oil-rich country on the Persian Gulf, known for modern architecture, high living standards, and pearl diving heritage.',
  quickFacts: [
    { label: 'Capital', value: 'Kuwait City' },
    { label: 'Population', value: '4.3 million' },
    { label: 'Official Language', value: 'Arabic' },
    { label: 'Currency', value: 'Kuwaiti Dinar' },
    { label: 'Area', value: '17,818 km²' },
  ],
  facts: [
    'Has one of the world\'s highest-valued currencies',
    'Major oil exporter since 1930s',
    'Home to the Kuwait Towers landmark',
    'Historical pearl diving center',
  ],
  foodCulture: 'Kuwaiti cuisine blends Arab, Persian, Indian, and Mediterranean influences with rice, meat, and seafood.',
  history: [
    {
      year: '1613',
      title: 'Founding',
      description: 'Kuwait was founded as a small fishing and trading village on the Persian Gulf.'
    },
    {
      year: '1938',
      title: 'Oil Discovery',
      description: 'Discovery of oil transformed Kuwait into one of the world\'s wealthiest nations.'
    },
    {
      year: '1961',
      title: 'Independence',
      description: 'Kuwait gained independence from British protection.'
    },
  ],
  innovations: [
    {
      name: 'Seawater Desalination',
      year: '1950s',
      description: 'Kuwait pioneered large-scale seawater desalination in the Gulf region.',
    },
    {
      name: 'Pearl Diving Techniques',
      year: 'Traditional',
      description: 'Historical expertise in pearl diving made Kuwait a major trading center.',
    },
  ],
  mustVisit: [
    { name: 'Kuwait Towers', description: 'Iconic landmark with observation deck and revolving restaurant.' },
    { name: 'Grand Mosque', description: 'Largest mosque in Kuwait with beautiful Islamic architecture.' },
    { name: 'Kuwait National Museum', description: 'Showcases Kuwait\'s history from ancient to modern times.' },
    { name: 'The Avenues Mall', description: 'One of the largest shopping malls in the Middle East.' },
    { name: 'Failaka Island', description: 'Historical island with Bronze Age and Greek archaeological sites.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'November-March for cooler weather; summers are extremely hot.' },
    { item: 'Modest clothing', description: 'Dress conservatively, especially in public places.' },
    { item: 'Visa', description: 'E-visa available for many nationalities.' },
    { item: 'Cash and cards', description: 'Credit cards widely accepted, ATMs available.' },
  ],
  dessert: {
    id: 'kuwait-dessert',
    name: 'Gers Ogaily',
    description: 'Traditional Kuwaiti sponge cake flavored with saffron and cardamom',
    cookingTime: 45,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Flour', amount: 300, unit: 'g' },
      { name: 'Sugar', amount: 200, unit: 'g' },
      { name: 'Eggs', amount: 4, unit: 'large' },
      { name: 'Butter, melted', amount: 150, unit: 'g' },
      { name: 'Saffron threads', amount: 0.5, unit: 'tsp' },
      { name: 'Cardamom powder', amount: 1, unit: 'tsp' },
      { name: 'Baking powder', amount: 2, unit: 'tsp' },
      { name: 'Rose water', amount: 2, unit: 'tbsp' },
    ],
    steps: [
      'Steep saffron in 2 tbsp warm water',
      'Beat eggs and sugar until fluffy',
      'Add melted butter and mix well',
      'Add saffron water, cardamom, and rose water',
      'Fold in flour and baking powder',
      'Pour into greased square pan',
      'Bake at 350°F for 25-30 minutes',
      'Cool and cut into diamond shapes',
    ],
    imageUrl: 'https://images.pexels.com/photos/8250368/pexels-photo-8250368.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  mainDish: {
    id: 'kuwait-main',
    name: 'Machboos',
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
      'Brown meat with onions',
      'Add spices and tomatoes',
      'Simmer until meat is tender',
      'Cook rice with meat broth and dried limes',
      'Layer meat and rice',
      'Garnish with fried onions and nuts',
    ],
    imageUrl: 'https://images.pexels.com/photos/12739828/pexels-photo-12739828.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  drinks: {
    alcoholic: 'Not available (prohibited)',
    nonAlcoholic: 'Arabic coffee, Laban (buttermilk), Fresh juice',
  },
  music: [
    'Traditional Sawt music',
    'Arabic pop',
    'Pearl diving songs',
  ],
  decorationIdeas: [
    'Green, white, red and black flag colors',
    'Kuwait Towers imagery',
    'Desert and sea themes',
    'Modern architecture',
  ],
  conversationStarters: [
    'What do you know about Gulf culture?',
    'Have you tried Middle Eastern spices?',
  ],
  quiz: [
    {
      id: 'kuwait-q1',
      question: 'What is the capital of Kuwait?',
      options: ['Kuwait City', 'Doha', 'Dubai', 'Manama'],
      correctAnswer: 0,
    },
    {
      id: 'kuwait-q2',
      question: 'What major resource was discovered in Kuwait in 1938?',
      options: ['Gold', 'Oil', 'Natural gas', 'Diamonds'],
      correctAnswer: 1,
    },
    {
      id: 'kuwait-q3',
      question: 'What is Kuwait\'s currency known as one of the world\'s highest-valued?',
      options: ['Kuwaiti Dirham', 'Kuwaiti Rial', 'Kuwaiti Dinar', 'Kuwaiti Pound'],
      correctAnswer: 2,
    },
    {
      id: 'kuwait-q4',
      question: 'What is the iconic landmark of Kuwait?',
      options: ['Burj Khalifa', 'Kuwait Towers', 'Petronas Towers', 'CN Tower'],
      correctAnswer: 1,
    },
    {
      id: 'kuwait-q5',
      question: 'In which year did Kuwait gain independence?',
      options: ['1950', '1961', '1970', '1980'],
      correctAnswer: 1,
    },
    {
      id: 'kuwait-q6',
      question: 'What is Kuwait\'s traditional spiced rice dish called?',
      options: ['Biryani', 'Kabsa', 'Machboos', 'Mandi'],
      correctAnswer: 2,
    },
    {
      id: 'kuwait-q7',
      question: 'What was Kuwait historically famous for?',
      options: ['Silk trading', 'Pearl diving', 'Spice trading', 'Gold mining'],
      correctAnswer: 1,
    },
    {
      id: 'kuwait-q8',
      question: 'Is alcohol available in Kuwait?',
      options: ['Yes, freely', 'Yes, in hotels only', 'No, it is prohibited', 'Only for tourists'],
      correctAnswer: 2,
    },
    {
      id: 'kuwait-q9',
      question: 'Which technology did Kuwait pioneer in the 1950s?',
      options: ['Solar power', 'Wind energy', 'Seawater desalination', 'Hydroelectric power'],
      correctAnswer: 2,
    },
    {
      id: 'kuwait-q10',
      question: 'What body of water does Kuwait border?',
      options: ['Red Sea', 'Arabian Sea', 'Persian Gulf', 'Mediterranean Sea'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 58, y: 35 },
};
