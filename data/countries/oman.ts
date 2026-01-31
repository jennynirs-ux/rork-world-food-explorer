import { Country } from '@/types';

export const oman: Country = {
  id: 'oman',
  name: 'Oman',
  code: 'OM',
  continent: 'Asia',
  flag: '🇴🇲',
  landscapeImage: 'https://images.unsplash.com/photo-1591608971362-f08b2a75731a?w=800&q=80',
  description: 'Oman is an Arabian Peninsula country known for diverse landscapes from deserts to mountains, ancient forts, and traditional culture.',
  quickFacts: [
    { label: 'Capital', value: 'Muscat' },
    { label: 'Population', value: '5.2 million' },
    { label: 'Official Language', value: 'Arabic' },
    { label: 'Currency', value: 'Omani Rial' },
    { label: 'Area', value: '309,500 km²' },
  ],
  facts: [
    'One of the oldest independent states in the Arab world',
    'Known for frankincense trade since ancient times',
    'Has dramatic Wahiba Sands desert',
    'Rich in traditional dhow boat building',
  ],
  foodCulture: 'Omani cuisine blends Arab, Indian, and East African influences with rice, meat, and aromatic spices.',
  history: [
    {
      year: '751',
      title: 'Ibadi Imamate',
      description: 'Oman became one of the oldest independent states in the Arab world.'
    },
    {
      year: '1650-1850',
      title: 'Maritime Empire',
      description: 'Oman controlled extensive trade routes and territories including Zanzibar.'
    },
    {
      year: '1970',
      title: 'Modern Oman',
      description: 'Sultan Qaboos began modernization while preserving culture.'
    },
  ],
  innovations: [
    {
      name: 'Frankincense Trade',
      year: 'Ancient',
      description: 'Controlled frankincense trade routes for thousands of years.',
    },
    {
      name: 'Dhow Building',
      year: 'Traditional',
      description: 'Traditional wooden boat building techniques passed down generations.',
    },
    {
      name: 'Falaj Irrigation',
      year: 'Ancient',
      description: 'Traditional irrigation system, UNESCO World Heritage.',
    },
  ],
  mustVisit: [
    { name: 'Sultan Qaboos Grand Mosque', description: 'Stunning mosque with world\'s second-largest carpet.' },
    { name: 'Wahiba Sands', description: 'Dramatic desert with red and white sand dunes.' },
    { name: 'Nizwa Fort', description: 'Historic 17th-century fort with traditional souq.' },
    { name: 'Wadi Shab', description: 'Beautiful canyon with pools and waterfalls.' },
    { name: 'Muscat Old Town', description: 'Traditional architecture and historic forts.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'October-March for pleasant weather; summer is extremely hot.' },
    { item: 'Visa', description: 'E-visa available for most nationalities.' },
    { item: 'Modest clothing', description: 'Dress conservatively, especially away from tourist areas.' },
    { item: 'Rental car', description: 'Best way to explore; roads are excellent.' },
  ],
  dessert: {
    id: 'oman-dessert',
    name: 'Halwa',
    description: 'Traditional Omani sweet made with rosewater and saffron',
    cookingTime: 120,
    servings: 16,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Cornstarch', amount: 200, unit: 'g' },
      { name: 'Sugar', amount: 400, unit: 'g' },
      { name: 'Ghee', amount: 200, unit: 'g' },
      { name: 'Rose water', amount: 3, unit: 'tbsp' },
      { name: 'Saffron', amount: 1, unit: 'tsp' },
      { name: 'Cardamom', amount: 1, unit: 'tsp' },
      { name: 'Water', amount: 1000, unit: 'ml' },
      { name: 'Nuts (almonds, pistachios)', amount: 100, unit: 'g' },
    ],
    steps: [
      'Mix cornstarch with cold water',
      'Boil remaining water with sugar',
      'Add cornstarch mixture, stir constantly',
      'Add ghee gradually while stirring',
      'Cook on low heat for 1 hour, stirring frequently',
      'Add saffron, rose water, and cardamom',
      'Continue cooking until mixture leaves sides of pan',
      'Pour into greased dish, top with nuts',
      'Cool and cut into squares',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1571070703346-9307e0d50b0c?w=600',
  },
  mainDish: {
    id: 'oman-main',
    name: 'Shuwa',
    description: 'Slow-roasted spiced lamb wrapped in banana leaves',
    cookingTime: 1440,
    servings: 10,
    dietType: 'meat',
    ingredients: [
      { name: 'Whole lamb', amount: 5, unit: 'kg' },
      { name: 'Omani spice mix', amount: 100, unit: 'g' },
      { name: 'Banana leaves', amount: 10, unit: 'pieces' },
      { name: 'Garlic', amount: 10, unit: 'cloves' },
      { name: 'Ginger', amount: 50, unit: 'g' },
    ],
    steps: [
      'Marinate lamb with spices overnight',
      'Wrap in banana leaves',
      'Place in underground sand oven',
      'Cook for 24-48 hours',
      'Unwrap and shred meat',
      'Serve with rice and dates',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600',
  },
  drinks: {
    alcoholic: 'Not common (Islamic country)',
    nonAlcoholic: 'Qahwa (Omani coffee with cardamom), Laban, Fresh dates',
  },
  music: [
    'Traditional Omani folk',
    'Liwa music',
    'Bedouin songs',
  ],
  decorationIdeas: [
    'Red, white and green flag colors',
    'Fort and castle imagery',
    'Desert landscapes',
    'Frankincense themes',
  ],
  conversationStarters: [
    'Have you tried frankincense?',
    'What do you know about Arabian deserts?',
  ],
  quiz: [
    {
      id: 'oman-q1',
      question: 'What is the capital of Oman?',
      options: ['Dubai', 'Muscat', 'Doha', 'Abu Dhabi'],
      correctAnswer: 1,
    },
    {
      id: 'oman-q2',
      question: 'What aromatic resin has Oman traded since ancient times?',
      options: ['Myrrh', 'Frankincense', 'Amber', 'Copal'],
      correctAnswer: 1,
    },
    {
      id: 'oman-q3',
      question: 'What is Oman\'s traditional slow-roasted lamb dish?',
      options: ['Kebab', 'Shuwa', 'Shawarma', 'Mansaf'],
      correctAnswer: 1,
    },
    {
      id: 'oman-q4',
      question: 'What is Oman\'s currency?',
      options: ['Dirham', 'Dinar', 'Rial', 'Riyal'],
      correctAnswer: 2,
    },
    {
      id: 'oman-q5',
      question: 'What type of traditional boat is Oman known for?',
      options: ['Junk', 'Dhow', 'Sampan', 'Catamaran'],
      correctAnswer: 1,
    },
    {
      id: 'oman-q6',
      question: 'What is the official language of Oman?',
      options: ['English', 'Urdu', 'Arabic', 'Hindi'],
      correctAnswer: 2,
    },
    {
      id: 'oman-q7',
      question: 'What African island did Oman once control?',
      options: ['Madagascar', 'Zanzibar', 'Mauritius', 'Seychelles'],
      correctAnswer: 1,
    },
    {
      id: 'oman-q8',
      question: 'What is the traditional irrigation system in Oman called?',
      options: ['Qanat', 'Falaj', 'Acequia', 'Karez'],
      correctAnswer: 1,
    },
    {
      id: 'oman-q9',
      question: 'What desert region is in Oman?',
      options: ['Rub al Khali', 'Sahara', 'Wahiba Sands', 'Gobi'],
      correctAnswer: 2,
    },
    {
      id: 'oman-q10',
      question: 'What grand mosque in Muscat has the world\'s second-largest carpet?',
      options: ['Blue Mosque', 'Sultan Qaboos Grand Mosque', 'Sheikh Zayed Mosque', 'Hassan II Mosque'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 61, y: 30 },
};
