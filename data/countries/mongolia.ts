import { Country } from '@/types';

export const mongolia: Country = {
  id: 'mongolia',
  name: 'Mongolia',
  code: 'MN',
  continent: 'Asia',
  flag: '🇲🇳',
  landscapeImage: 'https://images.unsplash.com/photo-1584894247808-7e99eb4f8e32?w=800&q=80',
  description: 'Mongolia is a vast landlocked country known for nomadic culture, the Gobi Desert, steppes, and the legacy of Genghis Khan.',
  quickFacts: [
    { label: 'Capital', value: 'Ulaanbaatar' },
    { label: 'Population', value: '3.3 million' },
    { label: 'Official Language', value: 'Mongolian' },
    { label: 'Currency', value: 'Mongolian Tögrög' },
    { label: 'Area', value: '1,564,116 km²' },
  ],
  facts: [
    'One of the least densely populated countries in the world',
    'Home to the Mongol Empire, once the largest contiguous empire',
    'Traditional nomadic lifestyle is still practiced',
    'The Gobi Desert spans southern Mongolia',
  ],
  foodCulture: 'Mongolian cuisine centers on meat and dairy with limited vegetables due to the harsh climate.',
  history: [
    {
      year: '1206',
      title: 'Mongol Empire Founded',
      description: 'Genghis Khan united the Mongol tribes and created the largest contiguous empire.'
    },
    {
      year: '1368',
      title: 'Yuan Dynasty Falls',
      description: 'Mongols lost control of China and retreated to Mongolia.'
    },
    {
      year: '1921',
      title: 'Independence',
      description: 'Mongolia gained independence from China with Soviet support.'
    },
    {
      year: '1990',
      title: 'Democratic Revolution',
      description: 'Peaceful transition from communism to democracy.'
    },
  ],
  innovations: [
    {
      name: 'Mongol Empire Organization',
      year: '13th Century',
      description: 'Created efficient communication systems and trade routes across Eurasia.',
    },
    {
      name: 'Mongolian Script',
      year: '1204',
      description: 'Adapted and developed unique vertical writing system.',
    },
    {
      name: 'Ger (Yurt) Design',
      year: 'Traditional',
      description: 'Perfected portable dwelling ideal for nomadic lifestyle.',
    },
    {
      name: 'Horse Archery',
      year: 'Ancient',
      description: 'Mastered mounted archery techniques that dominated medieval warfare.',
    },
  ],
  mustVisit: [
    { name: 'Gobi Desert', description: 'Vast desert with dinosaur fossils and dramatic landscapes.' },
    { name: 'Genghis Khan Statue', description: 'World\'s largest equestrian statue, 40 meters tall.' },
    { name: 'Khuvsgul Lake', description: 'Pristine mountain lake, "Blue Pearl of Mongolia."' },
    { name: 'Erdene Zuu Monastery', description: 'Mongolia\'s oldest Buddhist monastery from 1585.' },
    { name: 'Terelj National Park', description: 'Scenic park with rock formations near Ulaanbaatar.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'June-September for warm weather; winter is extremely cold (-40°C).' },
    { item: 'Visa', description: 'Many nationalities visa-free for 30 days.' },
    { item: 'Warm clothing', description: 'Essential for winter; nights can be cold even in summer.' },
    { item: 'Cash', description: 'Bring cash for countryside; cards work in Ulaanbaatar.' },
  ],
  dessert: {
    id: 'mongolia-dessert',
    name: 'Boortsog',
    description: 'Deep-fried dough cookies, traditional Mongolian treat',
    cookingTime: 45,
    servings: 20,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Flour', amount: 500, unit: 'g' },
      { name: 'Milk', amount: 250, unit: 'ml' },
      { name: 'Butter', amount: 50, unit: 'g' },
      { name: 'Sugar', amount: 50, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'large' },
      { name: 'Baking powder', amount: 1, unit: 'tsp' },
      { name: 'Oil for frying', amount: 500, unit: 'ml' },
    ],
    steps: [
      'Mix flour, sugar, and baking powder',
      'Add eggs, melted butter, and milk',
      'Knead into smooth dough',
      'Let rest for 30 minutes',
      'Roll out and cut into diamond shapes',
      'Make slit in center of each piece',
      'Deep fry until golden brown',
      'Drain and serve with tea',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Dishes_of_Mongolian_cuisine.jpg/800px-Dishes_of_Mongolian_cuisine.jpg',
  },
  mainDish: {
    id: 'mongolia-main',
    name: 'Khorkhog',
    description: 'Traditional barbecue with mutton and hot stones',
    cookingTime: 120,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Mutton', amount: 2, unit: 'kg' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Carrots', amount: 3, unit: 'whole' },
      { name: 'Potatoes', amount: 4, unit: 'whole' },
      { name: 'Hot stones', amount: 10, unit: 'pieces' },
      { name: 'Salt', amount: 2, unit: 'tbsp' },
    ],
    steps: [
      'Heat stones in fire until very hot',
      'Layer meat and vegetables in pot',
      'Add hot stones between layers',
      'Seal pot and cook for 90 minutes',
      'Open carefully to release steam',
      'Serve with the tender, smoky meat',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Khorkhog.JPG/800px-Khorkhog.JPG',
  },
  drinks: {
    alcoholic: 'Airag (fermented mare\'s milk), Vodka',
    nonAlcoholic: 'Suutei tsai (milk tea), Kumis',
  },
  music: [
    'Throat singing (Khoomei)',
    'Morin khuur (horsehead fiddle)',
    'Traditional long songs',
  ],
  decorationIdeas: [
    'Blue, red and yellow flag colors',
    'Traditional gers (yurts)',
    'Steppe landscapes',
    'Horse imagery',
  ],
  conversationStarters: [
    'Have you heard Mongolian throat singing?',
    'What do you know about nomadic life?',
    'Do you enjoy horseback riding?',
  ],
  quiz: [
    {
      id: 'mongolia-q1',
      question: 'What is the capital of Mongolia?',
      options: ['Ulaanbaatar', 'Bishkek', 'Astana', 'Beijing'],
      correctAnswer: 0,
    },
    {
      id: 'mongolia-q2',
      question: 'Who founded the Mongol Empire in 1206?',
      options: ['Kublai Khan', 'Genghis Khan', 'Attila', 'Tamerlane'],
      correctAnswer: 1,
    },
    {
      id: 'mongolia-q3',
      question: 'What is Mongolia\'s population density like?',
      options: ['Very high', 'High', 'Medium', 'One of the lowest in the world'],
      correctAnswer: 3,
    },
    {
      id: 'mongolia-q4',
      question: 'What desert spans southern Mongolia?',
      options: ['Sahara', 'Gobi', 'Kalahari', 'Atacama'],
      correctAnswer: 1,
    },
    {
      id: 'mongolia-q5',
      question: 'What is Mongolia\'s traditional portable dwelling called?',
      options: ['Teepee', 'Ger (Yurt)', 'Igloo', 'Hut'],
      correctAnswer: 1,
    },
    {
      id: 'mongolia-q6',
      question: 'What unique vocal style is traditional in Mongolia?',
      options: ['Yodeling', 'Throat singing', 'Falsetto', 'Chanting'],
      correctAnswer: 1,
    },
    {
      id: 'mongolia-q7',
      question: 'What is Mongolia\'s currency?',
      options: ['Yuan', 'Tögrög', 'Ruble', 'Won'],
      correctAnswer: 1,
    },
    {
      id: 'mongolia-q8',
      question: 'What fermented drink is traditional in Mongolia?',
      options: ['Wine', 'Beer', 'Airag (fermented mare\'s milk)', 'Sake'],
      correctAnswer: 2,
    },
    {
      id: 'mongolia-q9',
      question: 'What is the official language of Mongolia?',
      options: ['Chinese', 'Russian', 'Mongolian', 'Kazakh'],
      correctAnswer: 2,
    },
    {
      id: 'mongolia-q10',
      question: 'What traditional instrument has a horse head carved on top?',
      options: ['Guitar', 'Morin khuur', 'Violin', 'Banjo'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 78, y: 48 },
};
