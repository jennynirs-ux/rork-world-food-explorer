import { Country } from '@/types';

export const armenia: Country = {
  id: 'armenia',
  name: 'Armenia',
  code: 'AM',
  continent: 'Asia',
  flag: '🇦🇲',
  landscapeImage: 'https://images.unsplash.com/photo-1565711561500-49678a10a63f?w=800&q=80',
  description: 'Armenia is one of the world\'s oldest civilizations and the first nation to adopt Christianity as a state religion. Known for ancient monasteries, Mount Ararat views, and rich cultural heritage.',
  quickFacts: [
    { label: 'Capital', value: 'Yerevan' },
    { label: 'Population', value: '3 million' },
    { label: 'Official Language', value: 'Armenian' },
    { label: 'Currency', value: 'Armenian Dram' },
    { label: 'Area', value: '29,743 km²' },
  ],
  facts: [
    'Armenia was the first country to adopt Christianity in 301 AD',
    'The Armenian alphabet was invented in 405 AD',
    'Chess is mandatory in Armenian schools',
    'Mount Ararat, a national symbol, is actually in Turkey',
    'Armenia has three UNESCO World Heritage Sites',
    'The duduk, an ancient Armenian woodwind instrument, is recognized by UNESCO',
    'Armenia produces world-renowned cognac, even praised by Winston Churchill',
    'Lake Sevan is one of the largest high-altitude lakes in Eurasia',
  ],
  foodCulture: 'Armenian cuisine features grilled meats, fresh herbs, and lavash bread. Meals are social gatherings with multiple courses. Cognac is highly regarded. Fresh vegetables, walnuts, pomegranates, and apricots feature prominently.',
  history: [
    {
      year: '782 BC',
      title: 'Kingdom of Urartu',
      description:
        'The ancient kingdom of Urartu, centered around Lake Van, was a powerful state that influenced later Armenian culture.',
    },
    {
      year: '301 AD',
      title: 'First Christian Nation',
      description:
        'Armenia became the first country to officially adopt Christianity as the state religion under King Tiridates III.',
    },
    {
      year: '405 AD',
      title: 'Armenian Alphabet Created',
      description:
        'Mesrop Mashtots invented the Armenian alphabet, enabling the translation of the Bible and preservation of Armenian identity.',
    },
    {
      year: '1915-1923',
      title: 'Armenian Genocide',
      description:
        'The systematic deportation and massacre of Armenians by the Ottoman Empire resulted in the deaths of 1.5 million people.',
    },
    {
      year: '1991',
      title: 'Independence',
      description:
        'Armenia regained independence following the collapse of the Soviet Union, becoming a democratic republic.',
    },
  ],
  innovations: [
    {
      name: 'Armenian Alphabet',
      year: '405 AD',
      description:
        'Mesrop Mashtots created a unique 36-letter alphabet that preserved Armenian language and culture for over 1,600 years.',
    },
    {
      name: 'Cognac Production',
      year: '1887',
      description:
        'The Yerevan Brandy Company pioneered Armenian cognac production, creating spirits that rival French cognac.',
    },
    {
      name: 'Khachkar Stone Carving',
      year: 'Medieval',
      description:
        'Unique Armenian cross-stone monuments featuring intricate carvings, recognized as UNESCO Intangible Cultural Heritage.',
    },
    {
      name: 'Color Television',
      year: '1908',
      description:
        'Hovhannes Adamian was a pioneer in color television technology, patenting a two-color system.',
    },
  ],
  mustVisit: [
    { name: 'Tatev Monastery', description: 'Medieval monastery complex perched on a cliff, accessible by the world\'s longest reversible cable car.' },
    { name: 'Geghard Monastery', description: 'UNESCO World Heritage Site partially carved into mountain, with exceptional medieval architecture.' },
    { name: 'Lake Sevan', description: 'One of the largest high-altitude freshwater lakes in the world with stunning blue waters.' },
    { name: 'Garni Temple', description: 'The only surviving Greco-Roman temple in the former Soviet Union, dating to the 1st century AD.' },
    { name: 'Yerevan Cascade', description: 'Giant stairway with fountains, sculptures, and art galleries offering panoramic city views.' },
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'May-June and September-October for pleasant weather; avoid harsh winters.' },
    { item: 'Currency', description: 'Armenian Dram (AMD); credit cards accepted in cities, cash needed in rural areas.' },
    { item: 'Language', description: 'Armenian; Russian widely spoken; English in tourist areas and younger generation.' },
    { item: 'Modest dress', description: 'Cover shoulders and knees when visiting churches and monasteries.' },
    { item: 'Hiking gear', description: 'Comfortable shoes for exploring monasteries and mountain trails.' },
    { item: 'Try local cognac', description: 'Visit the Ararat Brandy Factory for tastings of world-class Armenian cognac.' },
  ],
  mainDish: {
    id: 'armenia-main',
    name: 'Khorovats',
    description: 'Armenian-style grilled meat skewers with vegetables',
    cookingTime: 60,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Pork or lamb', amount: 1, unit: 'kg' },
      { name: 'Onions', amount: 3, unit: 'whole' },
      { name: 'Bell peppers', amount: 3, unit: 'whole' },
      { name: 'Tomatoes', amount: 4, unit: 'whole' },
      { name: 'Red wine', amount: 100, unit: 'ml' },
      { name: 'Pomegranate juice', amount: 50, unit: 'ml' },
    ],
    steps: [
      'Cut meat into chunks, marinate with wine and onions',
      'Refrigerate for 2-4 hours',
      'Thread meat and vegetables on skewers',
      'Grill over charcoal until cooked',
      'Baste with pomegranate juice while grilling',
      'Serve with lavash bread and fresh herbs',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
  },
  dessert: {
    id: 'armenia-dessert',
    name: 'Gata',
    description: 'Traditional Armenian pastry with sweet filling, often enjoyed with coffee',
    cookingTime: 60,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'All-purpose flour', amount: 500, unit: 'g' },
      { name: 'Butter, softened', amount: 250, unit: 'g' },
      { name: 'Sour cream', amount: 200, unit: 'g' },
      { name: 'Egg', amount: 1, unit: 'large' },
      { name: 'Baking powder', amount: 1, unit: 'tsp' },
      { name: 'Sugar (for filling)', amount: 150, unit: 'g' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'Egg yolk for brushing', amount: 1, unit: 'piece' },
    ],
    steps: [
      'Mix flour with baking powder in a bowl.',
      'Cut in 150g butter until mixture resembles breadcrumbs.',
      'Add sour cream and egg, knead into smooth dough.',
      'Refrigerate dough for 30 minutes.',
      'For filling: cream remaining 100g butter with sugar and vanilla.',
      'Roll dough into rectangle about 1cm thick.',
      'Spread filling evenly over dough.',
      'Roll up like a log and shape into spiral or cut into pieces.',
      'Brush with egg yolk and make decorative cuts on top.',
      'Bake at 180°C for 35-40 minutes until golden brown.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Armenian cognac, Wine, Ararat brandy',
    nonAlcoholic: 'Tan (yogurt drink), Armenian coffee, Apricot juice',
  },
  music: [
    'Traditional duduk melodies',
    'Armenian folk songs',
    'Djivan Gasparyan performances',
  ],
  decorationIdeas: [
    'Red, blue, and orange flag colors',
    'Pomegranate motifs',
    'Ancient Armenian script',
    'Mount Ararat imagery',
  ],
  conversationStarters: [
    'Have you tried Armenian cognac?',
    'What do you know about ancient Christianity?',
    'Do you enjoy grilled meats?',
  ],
  quiz: [
    {
      id: 'armenia-q1',
      question: 'What is the capital of Armenia?',
      options: ['Tbilisi', 'Yerevan', 'Baku', 'Tehran'],
      correctAnswer: 1,
    },
    {
      id: 'armenia-q2',
      question: 'In what year did Armenia adopt Christianity?',
      options: ['301 AD', '500 AD', '100 AD', '800 AD'],
      correctAnswer: 0,
    },
    {
      id: 'armenia-q3',
      question: 'When was the Armenian alphabet invented?',
      options: ['301 AD', '405 AD', '500 AD', '600 AD'],
      correctAnswer: 1,
    },
    {
      id: 'armenia-q4',
      question: 'What is Armenia\'s famous grilled meat dish called?',
      options: ['Kebab', 'Khorovats', 'Shashlik', 'Souvlaki'],
      correctAnswer: 1,
    },
    {
      id: 'armenia-q5',
      question: 'Which mountain is a national symbol of Armenia?',
      options: ['Mount Elbrus', 'Mount Ararat', 'Mount Kazbek', 'Mount Aragats'],
      correctAnswer: 1,
    },
    {
      id: 'armenia-q6',
      question: 'What school subject is mandatory in Armenia?',
      options: ['Ballet', 'Chess', 'Astronomy', 'Music'],
      correctAnswer: 1,
    },
    {
      id: 'armenia-q7',
      question: 'What is the traditional Armenian wind instrument?',
      options: ['Flute', 'Duduk', 'Clarinet', 'Oboe'],
      correctAnswer: 1,
    },
    {
      id: 'armenia-q8',
      question: 'Which monastery is accessible by the world\'s longest cable car?',
      options: ['Geghard', 'Tatev', 'Khor Virap', 'Sevanavank'],
      correctAnswer: 1,
    },
    {
      id: 'armenia-q9',
      question: 'What is the name of Armenia\'s famous spirit?',
      options: ['Vodka', 'Cognac', 'Whiskey', 'Rum'],
      correctAnswer: 1,
    },
    {
      id: 'armenia-q10',
      question: 'When did Armenia regain independence from the Soviet Union?',
      options: ['1989', '1990', '1991', '1992'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 57, y: 42 },
};
