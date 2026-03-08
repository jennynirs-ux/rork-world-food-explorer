import { Country } from '@/types';

export const kyrgyzstan: Country = {
  id: 'kyrgyzstan',
  name: 'Kyrgyzstan',
  code: 'KG',
  continent: 'Asia',
  flag: '🇰🇬',
  landscapeImage: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80',
  description: 'Kyrgyzstan is a Central Asian country known for dramatic mountain landscapes, nomadic traditions, and yurt culture.',
  quickFacts: [
    { label: 'Capital', value: 'Bishkek' },
    { label: 'Population', value: '6.7 million' },
    { label: 'Official Languages', value: 'Kyrgyz, Russian' },
    { label: 'Currency', value: 'Kyrgyzstani Som' },
    { label: 'Area', value: '199,951 km²' },
  ],
  facts: [
    'Over 90% of the country is mountainous',
    'Lake Issyk-Kul is one of the largest alpine lakes',
    'Nomadic traditions are still practiced',
    'Known for its epic oral poem, the Manas',
  ],
  foodCulture: 'Kyrgyz cuisine features meat, dairy products, and bread with Central Asian influences.',
  history: [
    {
      year: 'Ancient',
      title: 'Silk Road Trade',
      description: 'Kyrgyzstan was a key location along the historic Silk Road trade routes.'
    },
    {
      year: '1876',
      title: 'Russian Empire',
      description: 'The region became part of the Russian Empire.'
    },
    {
      year: '1991',
      title: 'Independence',
      description: 'Kyrgyzstan gained independence from the Soviet Union.'
    },
  ],
  innovations: [
    {
      name: 'Epic of Manas',
      year: 'Traditional',
      description: 'One of the world\'s longest epic poems, passed down orally for centuries.',
    },
    {
      name: 'Yurt Construction',
      year: 'Traditional',
      description: 'Portable dwelling design perfected by Kyrgyz nomads.',
    },
    {
      name: 'Felt Craftsmanship',
      year: 'Traditional',
      description: 'Traditional felt-making techniques used for clothing, carpets, and yurt decorations.',
    },
  ],
  mustVisit: [
    { name: 'Lake Issyk-Kul', description: 'Second-largest alpine lake in the world, surrounded by mountains.' },
    { name: 'Ala-Archa National Park', description: 'Stunning gorge near Bishkek with hiking and climbing.' },
    { name: 'Burana Tower', description: 'Ancient minaret from the 11th century on the Silk Road.' },
    { name: 'Song-Kol Lake', description: 'High-altitude lake where nomads graze livestock in summer.' },
    { name: 'Osh Bazaar', description: 'Vibrant traditional market in Bishkek with local goods.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'June-September for mountain activities; winter for skiing.' },
    { item: 'Warm layers', description: 'Mountains can be cold even in summer; bring layers.' },
    { item: 'Visa', description: 'Many nationalities can enter visa-free for short stays.' },
    { item: 'Russian phrases', description: 'Russian is widely spoken alongside Kyrgyz.' },
  ],
  dessert: {
    id: 'kyrgyzstan-dessert',
    name: 'Chak-Chak',
    description: 'Honey-coated fried dough dessert, popular in Central Asia',
    cookingTime: 60,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Flour', amount: 400, unit: 'g' },
      { name: 'Eggs', amount: 4, unit: 'large' },
      { name: 'Butter', amount: 50, unit: 'g' },
      { name: 'Honey', amount: 300, unit: 'g' },
      { name: 'Sugar', amount: 100, unit: 'g' },
      { name: 'Oil for frying', amount: 500, unit: 'ml' },
    ],
    steps: [
      'Mix flour, eggs, and melted butter into dough',
      'Roll out thin and cut into thin strips',
      'Deep fry strips until golden',
      'Heat honey and sugar until combined',
      'Mix fried strips with honey mixture',
      'Press into mound shape',
      'Let cool and set before serving',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=900',
  },
  mainDish: {
    id: 'kyrgyzstan-main',
    name: 'Beshbarmak',
    description: 'Boiled meat with noodles and onions',
    cookingTime: 180,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Lamb or horse meat', amount: 1, unit: 'kg' },
      { name: 'Fresh noodles', amount: 500, unit: 'g' },
      { name: 'Onions', amount: 3, unit: 'whole' },
      { name: 'Bay leaves', amount: 2, unit: 'whole' },
      { name: 'Black pepper', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Boil meat until very tender',
      'Cook noodles in meat broth',
      'Slice meat thinly',
      'Layer noodles on platter',
      'Top with meat and raw onions',
      'Pour broth over and serve',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=700',
  },
  drinks: {
    alcoholic: 'Kumis (fermented mare\'s milk), Vodka',
    nonAlcoholic: 'Black tea, Maksym (barley drink)',
  },
  music: [
    'Traditional komuz music',
    'Epic Manas recitations',
    'Kyrgyz folk songs',
  ],
  decorationIdeas: [
    'Red and yellow flag colors',
    'Mountain landscapes',
    'Traditional yurts',
    'Felt crafts',
  ],
  conversationStarters: [
    'Have you been to Central Asian mountains?',
    'What do you know about nomadic cultures?',
  ],
  quiz: [
    {
      id: 'kyrgyzstan-q1',
      question: 'What is the capital of Kyrgyzstan?',
      options: ['Bishkek', 'Tashkent', 'Almaty', 'Dushanbe'],
      correctAnswer: 0,
    },
    {
      id: 'kyrgyzstan-q2',
      question: 'What percentage of Kyrgyzstan is mountainous?',
      options: ['50%', '70%', '90%', '100%'],
      correctAnswer: 2,
    },
    {
      id: 'kyrgyzstan-q3',
      question: 'What is the name of one of the world\'s largest alpine lakes in Kyrgyzstan?',
      options: ['Lake Baikal', 'Lake Issyk-Kul', 'Lake Titicaca', 'Lake Geneva'],
      correctAnswer: 1,
    },
    {
      id: 'kyrgyzstan-q4',
      question: 'What is Kyrgyzstan\'s traditional portable dwelling called?',
      options: ['Teepee', 'Yurt', 'Igloo', 'Hut'],
      correctAnswer: 1,
    },
    {
      id: 'kyrgyzstan-q5',
      question: 'In which year did Kyrgyzstan gain independence?',
      options: ['1985', '1991', '1995', '2000'],
      correctAnswer: 1,
    },
    {
      id: 'kyrgyzstan-q6',
      question: 'What are the official languages of Kyrgyzstan?',
      options: ['Kyrgyz only', 'Russian only', 'Kyrgyz and Russian', 'Kyrgyz and English'],
      correctAnswer: 2,
    },
    {
      id: 'kyrgyzstan-q7',
      question: 'What is the name of the epic oral poem central to Kyrgyz culture?',
      options: ['The Iliad', 'Manas', 'Beowulf', 'Shahnameh'],
      correctAnswer: 1,
    },
    {
      id: 'kyrgyzstan-q8',
      question: 'What fermented drink made from mare\'s milk is popular in Kyrgyzstan?',
      options: ['Kefir', 'Kumis', 'Ayran', 'Lassi'],
      correctAnswer: 1,
    },
    {
      id: 'kyrgyzstan-q9',
      question: 'What ancient trade route passed through Kyrgyzstan?',
      options: ['Spice Route', 'Silk Road', 'Amber Road', 'Incense Route'],
      correctAnswer: 1,
    },
    {
      id: 'kyrgyzstan-q10',
      question: 'What is Kyrgyzstan\'s currency?',
      options: ['Som', 'Tenge', 'Ruble', 'Dram'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 66, y: 42 },
};
