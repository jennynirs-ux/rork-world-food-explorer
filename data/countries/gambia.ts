import { Country } from '@/types';

export const gambia: Country = {
  id: 'gambia',
  name: 'Gambia',
  code: 'GM',
  continent: 'Africa',
  flag: '🇬🇲',
  landscapeImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
  description: 'Gambia is the smallest country in mainland Africa, a narrow strip along the Gambia River surrounded by Senegal, known for beaches and birdwatching.',
  quickFacts: [
    { label: 'Capital', value: 'Banjul' },
    { label: 'Population', value: '2.5 million' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'Gambian Dalasi' },
    { label: 'Area', value: '11,295 km²' },
  ],
  facts: [
    'The smallest country in mainland Africa',
    'Surrounded by Senegal except for the Atlantic coast',
    'The Gambia River runs through the entire country',
    'Popular destination for birdwatching with over 500 species',
  ],
  foodCulture: 'Gambian cuisine features rice, fish, peanuts, and vegetables with West African spices.',
  history: [
    {
      year: '1783',
      title: 'British Colony',
      description: 'The Gambia became a British colony, centered around the river trade route.'
    },
    {
      year: '1965',
      title: 'Independence',
      description: 'The Gambia gained independence from Britain, becoming a constitutional monarchy.'
    },
    {
      year: '1970',
      title: 'Republic',
      description: 'The Gambia became a republic within the Commonwealth.'
    },
  ],
  mustVisit: [
    { name: 'Kachikally Crocodile Pool', description: 'Sacred pool where visitors can touch crocodiles believed to bring fertility.' },
    { name: 'Abuko Nature Reserve', description: 'Small but diverse reserve with monkeys, birds, and crocodiles.' },
    { name: 'James Island', description: 'UNESCO World Heritage Site, former slave trading post with ruins of fort.' },
    { name: 'Banjul Market', description: 'Vibrant market showcasing local crafts, fabrics, and fresh produce.' },
    { name: 'River Gambia National Park', description: 'Boat safaris to see hippos, chimpanzees, and diverse birdlife.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'November-May for dry season and best birdwatching.' },
    { item: 'Visa', description: 'Available on arrival for most nationalities or apply in advance.' },
    { item: 'Yellow fever vaccination', description: 'Recommended, proof may be required.' },
    { item: 'Insect repellent', description: 'Malaria prevention important in rainy season.' },
  ],
  mainDish: {
    id: 'gambia-main',
    name: 'Domoda',
    description: 'Peanut butter stew with meat and vegetables',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Beef or lamb', amount: 600, unit: 'g' },
      { name: 'Peanut butter', amount: 300, unit: 'g' },
      { name: 'Sweet potatoes', amount: 2, unit: 'whole' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Cabbage', amount: 300, unit: 'g' },
    ],
    steps: [
      'Brown meat with onions',
      'Add tomatoes and water',
      'Stir in peanut butter',
      'Add sweet potatoes and cabbage',
      'Simmer until meat is tender',
      'Serve over rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600',
  },
  dessert: {
    id: 'gambia-dessert',
    name: 'Chakery',
    description: 'Sweet couscous dessert with yogurt and fruit',
    cookingTime: 40,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Couscous', amount: 300, unit: 'g' },
      { name: 'Plain yogurt', amount: 400, unit: 'ml' },
      { name: 'Sweetened condensed milk', amount: 200, unit: 'ml' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'Nutmeg', amount: 0.5, unit: 'tsp' },
      { name: 'Raisins', amount: 100, unit: 'g' },
      { name: 'Pineapple chunks', amount: 200, unit: 'g' },
    ],
    steps: [
      'Cook couscous according to package directions, let cool',
      'Mix yogurt with condensed milk and vanilla',
      'Add cooled couscous to yogurt mixture',
      'Add raisins and pineapple chunks',
      'Sprinkle with nutmeg',
      'Refrigerate for at least 2 hours',
      'Serve chilled as a refreshing dessert',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600',
  },
  drinks: {
    alcoholic: 'Palm wine, Julbrew beer',
    nonAlcoholic: 'Wonjo (hibiscus drink), Baobab juice, Attaya (green tea)',
  },
  music: [
    'Kora music',
    'Mbalax',
    'Traditional Mandinka songs',
  ],
  decorationIdeas: [
    'Red, blue, green and white flag colors',
    'River and mangrove imagery',
    'Traditional kora instruments',
    'Bird watching themes',
  ],
  conversationStarters: [
    'Have you heard kora music?',
    'What do you know about West African rivers?',
    'Do you enjoy birdwatching?',
  ],
  innovations: [
    {
      name: 'Kora Music Tradition',
      year: 'Ancient',
      description: 'The kora, a 21-string bridge-harp, is central to West African griot tradition',
    },
    {
      name: 'River Navigation',
      year: 'Traditional',
      description: 'Developed sophisticated boat and navigation techniques on the Gambia River',
    },
    {
      name: 'Ecotourism Development',
      year: '2000s',
      description: 'Created sustainable birdwatching tourism supporting over 500 species',
    },
  ],
  quiz: [
    {
      id: 'gambia-q1',
      question: 'What is the capital of Gambia?',
      options: ['Dakar', 'Banjul', 'Freetown', 'Conakry'],
      correctAnswer: 1,
    },
    {
      id: 'gambia-q2',
      question: 'What is unique about Gambia\'s geography?',
      options: ['Largest in Africa', 'Smallest in mainland Africa', 'No coastline', 'Island nation'],
      correctAnswer: 1,
    },
    {
      id: 'gambia-q3',
      question: 'Which country surrounds Gambia?',
      options: ['Mali', 'Senegal', 'Guinea', 'Ghana'],
      correctAnswer: 1,
    },
    {
      id: 'gambia-q4',
      question: 'What is Domoda?',
      options: ['A dance', 'Peanut butter stew', 'A river', 'A bird'],
      correctAnswer: 1,
    },
    {
      id: 'gambia-q5',
      question: 'How many bird species are in Gambia?',
      options: ['100', '250', '500+', '1000'],
      correctAnswer: 2,
    },
    {
      id: 'gambia-q6',
      question: 'What is a kora?',
      options: ['A boat', 'A musical instrument', 'A fruit', 'A dance'],
      correctAnswer: 1,
    },
    {
      id: 'gambia-q7',
      question: 'What river runs through Gambia?',
      options: ['Nile', 'Congo', 'Gambia River', 'Niger'],
      correctAnswer: 2,
    },
    {
      id: 'gambia-q8',
      question: 'What is the official language?',
      options: ['French', 'English', 'Portuguese', 'Arabic'],
      correctAnswer: 1,
    },
    {
      id: 'gambia-q9',
      question: 'What is wonjo?',
      options: ['Bread', 'Hibiscus drink', 'Fish', 'Rice dish'],
      correctAnswer: 1,
    },
    {
      id: 'gambia-q10',
      question: 'What is Gambia popular for?',
      options: ['Skiing', 'Birdwatching', 'Mountain climbing', 'Desert safaris'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 44, y: 26 },
};
