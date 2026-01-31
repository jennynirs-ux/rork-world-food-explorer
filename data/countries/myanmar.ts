import { Country } from '@/types';

export const myanmar: Country = {
  id: 'myanmar',
  name: 'Myanmar',
  code: 'MM',
  continent: 'Asia',
  flag: '🇲🇲',
  landscapeImage: 'https://images.unsplash.com/photo-1551634979-1d8b69bfe73f?w=800&q=80',
  description: 'Myanmar (Burma) is home to thousands of golden pagodas, ancient temples, and diverse ethnic groups. A land of stunning Buddhist heritage and natural beauty.',
  quickFacts: [
    { label: 'Capital', value: 'Naypyidaw' },
    { label: 'Population', value: '54 million' },
    { label: 'Official Language', value: 'Burmese' },
    { label: 'Currency', value: 'Kyat' },
    { label: 'Area', value: '676,578 km²' },
  ],
  facts: [
    'Bagan has over 2,000 ancient Buddhist temples and pagodas',
    'Myanmar has over 135 distinct ethnic groups',
    'The country was isolated from the world for decades',
    'Shwedagon Pagoda is covered in gold',
    'Myanmar is the world\'s second-largest jade producer',
  ],
  foodCulture: 'Burmese cuisine blends influences from India, China, and Thailand. Tea leaf salad is a unique specialty. Curries, noodles, and rice are staples.',
  history: [
    {
      year: '1057',
      title: 'Bagan Kingdom',
      description: 'King Anawrahta unified Burma and built thousands of Buddhist temples.'
    },
    {
      year: '1885',
      title: 'British Rule',
      description: 'Burma became part of British India after three Anglo-Burmese wars.'
    },
    {
      year: '1948',
      title: 'Independence',
      description: 'Burma gained independence from British rule.'
    },
    {
      year: '1989',
      title: 'Name Change',
      description: 'The military government changed the name from Burma to Myanmar.'
    },
  ],
  innovations: [
    {
      name: 'Lacquerware',
      year: 'Traditional',
      description: 'Intricate lacquerware craftsmanship passed down for centuries in Bagan.',
    },
    {
      name: 'Tea Leaf Salad',
      year: 'Traditional',
      description: 'Unique fermented tea leaf dish (laphet) found nowhere else.',
    },
    {
      name: 'Temple Architecture',
      year: '11th Century',
      description: 'Distinctive Buddhist temple and pagoda architectural styles.',
    },
  ],
  mustVisit: [
    { name: 'Bagan', description: 'Ancient city with over 2,000 Buddhist temples and pagodas.' },
    { name: 'Shwedagon Pagoda', description: 'Gold-covered pagoda in Yangon, Myanmar\'s most sacred site.' },
    { name: 'Inle Lake', description: 'Scenic lake with floating gardens and leg-rowing fishermen.' },
    { name: 'Mandalay', description: 'Cultural heart with monasteries, royal palace, and U Bein Bridge.' },
    { name: 'Ngapali Beach', description: 'Pristine white sand beach on the Bay of Bengal.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'November-February for cool, dry weather.' },
    { item: 'Visa', description: 'E-visa available for many nationalities.' },
    { item: 'Cash', description: 'Bring US dollars; ATMs can be unreliable.' },
    { item: 'Modest clothing', description: 'Cover shoulders and knees for temples and pagodas.' },
  ],
  dessert: {
    id: 'myanmar-dessert',
    name: 'Mont Lone Yay Paw',
    description: 'Sweet snack balls made with rice flour and jaggery',
    cookingTime: 40,
    servings: 20,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Glutinous rice flour', amount: 300, unit: 'g' },
      { name: 'Palm sugar (jaggery)', amount: 200, unit: 'g' },
      { name: 'Coconut, grated', amount: 200, unit: 'g' },
      { name: 'Water', amount: 200, unit: 'ml' },
      { name: 'Salt', amount: 0.5, unit: 'tsp' },
    ],
    steps: [
      'Mix rice flour with water and salt into dough',
      'Form small balls around chunks of palm sugar',
      'Boil water and cook balls until they float',
      'Remove and drain',
      'Roll in grated coconut',
      'Serve at room temperature',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600',
  },
  mainDish: {
    id: 'myanmar-main',
    name: 'Mohinga',
    description: 'National breakfast dish of rice noodles in fish soup',
    cookingTime: 60,
    servings: 6,
    dietType: 'fish',
    ingredients: [
      { name: 'Rice noodles', amount: 400, unit: 'g' },
      { name: 'Catfish', amount: 500, unit: 'g' },
      { name: 'Chickpea flour', amount: 100, unit: 'g' },
      { name: 'Lemongrass', amount: 2, unit: 'stalks' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Garlic', amount: 4, unit: 'cloves' },
      { name: 'Ginger', amount: 30, unit: 'g' },
      { name: 'Fish sauce', amount: 3, unit: 'tbsp' },
      { name: 'Hard-boiled eggs', amount: 4, unit: 'whole' },
    ],
    steps: [
      'Boil catfish with lemongrass until cooked',
      'Remove fish, flake meat, and discard bones',
      'Blend onions, garlic, and ginger into paste',
      'Fry paste until fragrant',
      'Add chickpea flour mixed with water',
      'Add fish broth and flaked fish',
      'Simmer until thickened',
      'Serve over rice noodles with eggs and garnishes',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600',
  },
  drinks: {
    alcoholic: 'Myanmar beer, Palm wine, Rice wine',
    nonAlcoholic: 'Laphet yay (green tea), Toddy palm juice, Coconut water',
  },
  music: [
    'Traditional Burmese classical music',
    'Saing waing ensemble',
    'Contemporary Myanmar pop',
    'Buddhist chants',
  ],
  decorationIdeas: [
    'Gold and red colors',
    'Pagoda imagery',
    'Traditional puppets',
    'Lotus flowers',
    'Buddhist symbols',
  ],
  conversationStarters: [
    'Have you seen photos of Bagan\'s temples?',
    'What do you know about Buddhist culture?',
    'Have you tried tea leaf salad?',
    'What ancient sites interest you?',
  ],
  quiz: [
    {
      id: 'myanmar-q1',
      question: 'What is Myanmar\'s national breakfast dish?',
      options: ['Pho', 'Mohinga', 'Pad Thai', 'Laksa'],
      correctAnswer: 1,
    },
    {
      id: 'myanmar-q2',
      question: 'How many ancient temples are in Bagan?',
      options: ['500', '1,000', '2,000+', '5,000'],
      correctAnswer: 2,
    },
    {
      id: 'myanmar-q3',
      question: 'What was Myanmar previously called?',
      options: ['Siam', 'Burma', 'Ceylon', 'Indochina'],
      correctAnswer: 1,
    },
    {
      id: 'myanmar-q4',
      question: 'What is the capital of Myanmar?',
      options: ['Yangon', 'Naypyidaw', 'Mandalay', 'Bagan'],
      correctAnswer: 1,
    },
    {
      id: 'myanmar-q5',
      question: 'What is the famous gold-covered pagoda in Yangon?',
      options: ['Shwedagon Pagoda', 'Golden Temple', 'Wat Phra Kaew', 'Angkor Wat'],
      correctAnswer: 0,
    },
    {
      id: 'myanmar-q6',
      question: 'How many ethnic groups does Myanmar have?',
      options: ['10', '50', '135+', '200'],
      correctAnswer: 2,
    },
    {
      id: 'myanmar-q7',
      question: 'What is Myanmar\'s currency?',
      options: ['Baht', 'Kyat', 'Dong', 'Rupee'],
      correctAnswer: 1,
    },
    {
      id: 'myanmar-q8',
      question: 'What unique salad is Myanmar famous for?',
      options: ['Caesar salad', 'Greek salad', 'Tea leaf salad', 'Coleslaw'],
      correctAnswer: 2,
    },
    {
      id: 'myanmar-q9',
      question: 'In which year did Myanmar gain independence?',
      options: ['1945', '1948', '1960', '1975'],
      correctAnswer: 1,
    },
    {
      id: 'myanmar-q10',
      question: 'What is Myanmar the world\'s second-largest producer of?',
      options: ['Gold', 'Jade', 'Diamonds', 'Silver'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 75, y: 30 },
};
