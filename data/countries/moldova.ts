import { Country } from '@/types';

export const moldova: Country = {
  id: 'moldova',
  name: 'Moldova',
  code: 'MD',
  continent: 'Europe',
  flag: '🇲🇩',
  landscapeImage: 'https://images.unsplash.com/photo-1621522767402-2c5bcde2c0f4?w=800&q=80',
  description: 'Moldova is a landlocked country in Eastern Europe, known for wine production, monasteries, and rolling countryside.',
  quickFacts: [
    { label: 'Capital', value: 'Chișinău' },
    { label: 'Population', value: '2.6 million' },
    { label: 'Official Language', value: 'Romanian' },
    { label: 'Currency', value: 'Moldovan Leu' },
    { label: 'Area', value: '33,846 km²' },
  ],
  facts: [
    'Has the world\'s largest wine cellar',
    'Known for high-quality wines',
    'One of Europe\'s least visited countries',
    'Rich in agricultural production',
  ],
  foodCulture: 'Moldovan cuisine blends Romanian, Russian, and Ukrainian influences with hearty meat dishes and fresh vegetables.',
  history: [
    {
      year: '1359',
      title: 'Principality of Moldavia',
      description: 'Moldova emerged as a principality in medieval times.'
    },
    {
      year: '1812',
      title: 'Russian Control',
      description: 'Eastern Moldova (Bessarabia) became part of the Russian Empire.'
    },
    {
      year: '1991',
      title: 'Independence',
      description: 'Moldova gained independence from the Soviet Union.'
    },
  ],
  innovations: [
    {
      name: 'Wine Industry',
      year: 'Ancient',
      description: 'Moldova has been producing wine for over 5,000 years.',
    },
    {
      name: 'Mileștii Mici Wine Cellar',
      year: '1969',
      description: 'World\'s largest wine collection in underground tunnels, Guinness World Record.',
    },
  ],
  mustVisit: [
    { name: 'Mileștii Mici', description: 'World\'s largest wine cellar with 200km of underground tunnels.' },
    { name: 'Cricova Winery', description: 'Underground wine city with streets named after wine varieties.' },
    { name: 'Orheiul Vechi', description: 'Archaeological complex with cave monastery carved into cliffs.' },
    { name: 'Chișinău', description: 'Capital with Soviet-era architecture and parks.' },
    { name: 'Soroca Fort', description: 'Medieval fortress on the Dniester River.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'April-October for pleasant weather; winter can be cold.' },
    { item: 'Visa', description: 'Visa-free for many nationalities for 90 days.' },
    { item: 'Language', description: 'Romanian official; Russian widely spoken.' },
    { item: 'Cash', description: 'Bring cash; cards less common outside Chișinău.' },
  ],
  dessert: {
    id: 'moldova-dessert',
    name: 'Plăcinte',
    description: 'Traditional pastries filled with cheese, pumpkin, or apples',
    cookingTime: 60,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Phyllo dough', amount: 500, unit: 'g' },
      { name: 'Cottage cheese or pumpkin', amount: 500, unit: 'g' },
      { name: 'Sugar', amount: 100, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'large' },
      { name: 'Butter, melted', amount: 100, unit: 'g' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Mix filling: cheese or pumpkin with sugar, eggs, vanilla',
      'Brush phyllo sheets with melted butter',
      'Layer 3-4 sheets, place filling on one end',
      'Roll up and tuck in sides',
      'Brush with more butter',
      'Bake at 350°F for 30 minutes until golden',
      'Dust with powdered sugar and serve',
    ],
    imageUrl: 'https://images.pexels.com/photos/31653133/pexels-photo-31653133.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  mainDish: {
    id: 'moldova-main',
    name: 'Mămăligă with Brânză',
    description: 'Cornmeal porridge with cheese and sour cream',
    cookingTime: 45,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Cornmeal', amount: 500, unit: 'g' },
      { name: 'Brânză cheese', amount: 300, unit: 'g' },
      { name: 'Sour cream', amount: 200, unit: 'ml' },
      { name: 'Butter', amount: 50, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'whole' },
    ],
    steps: [
      'Boil salted water',
      'Gradually add cornmeal while stirring',
      'Cook until thick porridge forms',
      'Turn out onto board and slice',
      'Top with crumbled cheese',
      'Serve with sour cream',
    ],
    imageUrl: 'https://images.pexels.com/photos/10508207/pexels-photo-10508207.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  drinks: {
    alcoholic: 'Moldovan wine, Divin (brandy), Beer',
    nonAlcoholic: 'Compot (fruit drink), Kvass',
  },
  music: [
    'Traditional folk music',
    'Moldovan hora dance',
    'Contemporary pop',
  ],
  decorationIdeas: [
    'Blue, yellow and red flag colors',
    'Vineyard imagery',
    'Traditional patterns',
    'Wine cellar themes',
  ],
  conversationStarters: [
    'Have you tried Moldovan wine?',
    'What do you know about Eastern European cuisine?',
  ],
  quiz: [
    {
      id: 'moldova-q1',
      question: 'What is the capital of Moldova?',
      options: ['Bucharest', 'Chișinău', 'Kiev', 'Sofia'],
      correctAnswer: 1,
    },
    {
      id: 'moldova-q2',
      question: 'What is Moldova most famous for producing?',
      options: ['Vodka', 'Wine', 'Beer', 'Whiskey'],
      correctAnswer: 1,
    },
    {
      id: 'moldova-q3',
      question: 'What world record does Mileștii Mici hold?',
      options: ['Largest brewery', 'Largest wine cellar', 'Tallest building', 'Longest tunnel'],
      correctAnswer: 1,
    },
    {
      id: 'moldova-q4',
      question: 'In which year did Moldova gain independence?',
      options: ['1985', '1991', '1995', '2000'],
      correctAnswer: 1,
    },
    {
      id: 'moldova-q5',
      question: 'What is Moldova\'s official language?',
      options: ['Russian', 'Romanian', 'Moldovan', 'Ukrainian'],
      correctAnswer: 1,
    },
    {
      id: 'moldova-q6',
      question: 'What is Moldova\'s currency?',
      options: ['Euro', 'Leu', 'Ruble', 'Dinar'],
      correctAnswer: 1,
    },
    {
      id: 'moldova-q7',
      question: 'What is the traditional cornmeal dish of Moldova?',
      options: ['Polenta', 'Mămăligă', 'Grits', 'Porridge'],
      correctAnswer: 1,
    },
    {
      id: 'moldova-q8',
      question: 'How long are the underground wine tunnels at Mileștii Mici?',
      options: ['50 km', '100 km', '200 km', '500 km'],
      correctAnswer: 2,
    },
    {
      id: 'moldova-q9',
      question: 'What archaeological site features a cave monastery?',
      options: ['Orheiul Vechi', 'Soroca', 'Cricova', 'Tiraspol'],
      correctAnswer: 0,
    },
    {
      id: 'moldova-q10',
      question: 'How long has Moldova been producing wine?',
      options: ['500 years', '1,000 years', '2,000 years', '5,000+ years'],
      correctAnswer: 3,
    },
  ],
  coordinates: { x: 53, y: 47 },
};
