import { Country } from '@/types';

export const china: Country = {
  id: 'china',
  name: 'China',
  code: 'CN',
  continent: 'Asia',
  flag: '🇨🇳',
  landscapeImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80',
  description: 'China, officially the People\'s Republic of China, is a vast East Asian country with diverse landscapes and one of the world\'s oldest civilizations, known for the Great Wall and rich cultural heritage.',
  quickFacts: [
    { label: 'Capital', value: 'Beijing' },
    { label: 'Population', value: '1.4 billion' },
    { label: 'Official Language', value: 'Mandarin Chinese' },
    { label: 'Currency', value: 'Yuan (¥)' },
    { label: 'Area', value: '9,596,961 km²' },
  ],
  facts: [
    'The Great Wall of China is over 21,000 km long',
    'China invented paper, gunpowder, printing, and the compass',
    'Chinese New Year is the most important holiday, lasting 15 days',
    'There are over 200 Chinese dialects',
    'China has the world\'s largest population',
    'The Forbidden City has 9,999 rooms',
    'Giant pandas are native only to China',
    'Chinese is the most spoken language in the world',
  ],
  foodCulture: 'Chinese cuisine varies dramatically by region: Cantonese, Sichuan, Hunan, and more. Meals emphasize balance of flavors, colors, and textures. Food is deeply connected to health, philosophy, and social bonding.',
  history: [
    {
      year: '221 BC',
      title: 'First Dynasty United',
      description: 'Emperor Qin Shi Huang unified China, standardized writing, and began the Great Wall.'
    },
    {
      year: '206 BC - 220 AD',
      title: 'Han Dynasty',
      description: 'Golden age of Chinese culture, establishing the Silk Road and Confucian governance.'
    },
    {
      year: '1368-1644',
      title: 'Ming Dynasty',
      description: 'Built the Forbidden City and much of the Great Wall we see today. Era of exploration and cultural flourishing.'
    },
    {
      year: '1949',
      title: 'People\'s Republic Founded',
      description: 'The Communist Party established the People\'s Republic of China under Mao Zedong.'
    },
  ],
  innovations: [
    {
      name: 'Paper',
      year: '105 AD',
      description: 'Invented by Cai Lun during the Han Dynasty, revolutionizing communication and record-keeping.'
    },
    {
      name: 'Gunpowder',
      year: '9th century',
      description: 'Initially created by alchemists, later used in warfare and changed military history.'
    },
    {
      name: 'Printing',
      year: '11th century',
      description: 'Movable type printing invented, enabling mass production of books.'
    },
    {
      name: 'Compass',
      year: '11th century',
      description: 'Magnetic compass for navigation, crucial for exploration and trade.'
    },
  ],
  mustVisit: [
    { name: 'The Great Wall', description: 'Ancient defensive fortification stretching thousands of kilometers across northern China.' },
    { name: 'The Forbidden City', description: 'Imperial palace complex in Beijing, home to emperors for 500 years.' },
    { name: 'Terracotta Army', description: 'Thousands of life-sized clay soldiers buried with Emperor Qin Shi Huang in Xi\'an.' },
    { name: 'Li River Karst Mountains', description: 'Stunning limestone peaks in Guilin, inspiration for traditional Chinese paintings.' },
    { name: 'Shanghai Bund', description: 'Historic waterfront showcasing colonial architecture and modern skyline.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'April-May and September-October for pleasant weather nationwide.' },
    { item: 'VPN service', description: 'Essential for accessing blocked websites and apps like Google and Facebook.' },
    { item: 'WeChat & Alipay', description: 'Mobile payment apps necessary for most transactions in modern China.' },
    { item: 'Translation app', description: 'Very few signs in English outside major cities.' },
    { item: 'Adapter (Type A/C/I)', description: 'China uses multiple plug types with 220V.' },
    { item: 'Comfortable shoes', description: 'Expect extensive walking at historical sites and cities.' }
  ],
  mainDish: {
    id: 'china-main',
    name: 'Kung Pao Chicken',
    description: 'Spicy Sichuan stir-fry with chicken, peanuts, vegetables, and chili peppers',
    cookingTime: 30,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken breast', amount: 500, unit: 'g' },
      { name: 'Peanuts', amount: 100, unit: 'g' },
      { name: 'Dried red chilies', amount: 10, unit: 'pieces' },
      { name: 'Sichuan peppercorns', amount: 1, unit: 'tsp' },
      { name: 'Soy sauce', amount: 3, unit: 'tbsp' },
      { name: 'Rice vinegar', amount: 2, unit: 'tbsp' },
      { name: 'Sugar', amount: 2, unit: 'tsp' },
      { name: 'Cornstarch', amount: 2, unit: 'tsp' },
      { name: 'Garlic and ginger', amount: 2, unit: 'tbsp' },
      { name: 'Bell pepper', amount: 1, unit: 'piece' },
    ],
    steps: [
      'Cut chicken into small cubes, marinate with soy sauce and cornstarch',
      'Mix sauce: soy sauce, vinegar, sugar, and cornstarch',
      'Heat wok with oil on high heat',
      'Stir-fry Sichuan peppercorns and chilies until fragrant',
      'Add chicken, cook until browned',
      'Add garlic, ginger, and bell pepper',
      'Pour in sauce, stir until thickened',
      'Add peanuts, toss everything together',
      'Serve hot with steamed rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=80',
  },
  dessert: {
    id: 'china-dessert',
    name: 'Mango Pudding',
    description: 'Silky smooth dessert made with fresh mango puree and coconut milk',
    cookingTime: 20,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Ripe mangoes', amount: 3, unit: 'large' },
      { name: 'Coconut milk', amount: 200, unit: 'ml' },
      { name: 'Condensed milk', amount: 100, unit: 'ml' },
      { name: 'Gelatin powder', amount: 15, unit: 'g' },
      { name: 'Water', amount: 100, unit: 'ml' },
      { name: 'Sugar', amount: 50, unit: 'g' },
    ],
    steps: [
      'Peel and dice mangoes, set aside some for topping',
      'Blend majority of mango with coconut milk until smooth',
      'Dissolve gelatin in warm water',
      'Heat mango puree gently, add condensed milk and sugar',
      'Mix in dissolved gelatin thoroughly',
      'Pour into serving bowls or molds',
      'Refrigerate for at least 4 hours until set',
      'Top with fresh mango pieces before serving',
    ],
    imageUrl: 'https://images.pexels.com/photos/25189334/pexels-photo-25189334.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  drinks: {
    alcoholic: 'Baijiu, Tsingtao beer, Chinese rice wine',
    nonAlcoholic: 'Green tea, Jasmine tea, Bubble tea, Soy milk',
  },
  music: [
    'Traditional Guzheng music',
    'The Moon Represents My Heart - Teresa Teng',
    'Beijing Opera classics',
    'Modern C-pop',
  ],
  decorationIdeas: [
    'Red and gold colors (luck and prosperity)',
    'Chinese lanterns',
    'Calligraphy scrolls',
    'Cherry blossom branches',
    'Dragon and phoenix motifs',
  ],
  conversationStarters: [
    'Have you visited the Great Wall of China?',
    'What\'s your favorite Chinese dish?',
    'Can you use chopsticks?',
    'Have you tried authentic Sichuan food?',
    'Which Chinese city would you most like to explore?',
  ],
  quiz: [
    {
      id: 'china-q1',
      question: 'What is the capital of China?',
      options: ['Shanghai', 'Hong Kong', 'Beijing', 'Guangzhou'],
      correctAnswer: 2,
    },
    {
      id: 'china-q2',
      question: 'How long is the Great Wall of China?',
      options: ['5,000 km', '10,000 km', '21,000 km', '50,000 km'],
      correctAnswer: 2,
    },
    {
      id: 'china-q3',
      question: 'What are the Four Great Inventions of Ancient China?',
      options: ['Silk, tea, porcelain, rice', 'Paper, gunpowder, printing, compass', 'Wall, army, palace, temple', 'Medicine, acupuncture, martial arts, calligraphy'],
      correctAnswer: 1,
    },
    {
      id: 'china-q4',
      question: 'What animal is native only to China?',
      options: ['Tiger', 'Giant Panda', 'Elephant', 'Koala'],
      correctAnswer: 1,
    },
    {
      id: 'china-q5',
      question: 'What is the most spoken language in China?',
      options: ['Cantonese', 'Mandarin', 'Wu', 'Min'],
      correctAnswer: 1,
    },
    {
      id: 'china-q6',
      question: 'When was the People\'s Republic of China founded?',
      options: ['1945', '1949', '1950', '1955'],
      correctAnswer: 1,
    },
    {
      id: 'china-q7',
      question: 'How many rooms does the Forbidden City have?',
      options: ['999', '5,555', '9,999', '10,000'],
      correctAnswer: 2,
    },
    {
      id: 'china-q8',
      question: 'What is China\'s most important holiday?',
      options: ['Mid-Autumn Festival', 'Dragon Boat Festival', 'Chinese New Year', 'National Day'],
      correctAnswer: 2,
    },
    {
      id: 'china-q9',
      question: 'Which dynasty built much of the Great Wall we see today?',
      options: ['Han Dynasty', 'Tang Dynasty', 'Ming Dynasty', 'Qing Dynasty'],
      correctAnswer: 2,
    },
    {
      id: 'china-q10',
      question: 'Where are the Terracotta Warriors located?',
      options: ['Beijing', 'Shanghai', 'Xi\'an', 'Guangzhou'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 78, y: 38 },
};