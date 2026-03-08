import { Country } from '@/types';

export const northKorea: Country = {
  id: 'north-korea',
  name: 'North Korea',
  code: 'KP',
  continent: 'Asia',
  flag: '🇰🇵',
  landscapeImage: 'https://images.unsplash.com/photo-1584592487914-a44e1bce4e03?w=800&q=80',
  description: 'North Korea is a secretive East Asian country known for its isolation, mountain landscapes, and unique political system.',
  quickFacts: [
    { label: 'Capital', value: 'Pyongyang' },
    { label: 'Population', value: '26 million' },
    { label: 'Official Language', value: 'Korean' },
    { label: 'Currency', value: 'North Korean Won' },
    { label: 'Area', value: '120,540 km²' },
  ],
  facts: [
    'One of the world\'s most isolated countries',
    'Has a unique political ideology called Juche',
    'The Korean Peninsula was divided after WWII',
    'Mountainous terrain covers 80% of the country',
  ],
  foodCulture: 'North Korean cuisine features rice, kimchi, and noodles with Korean traditions.',
  history: [
    {
      year: '1945',
      title: 'Division of Korea',
      description: 'Korea was divided along the 38th parallel after WWII.'
    },
    {
      year: '1950-1953',
      title: 'Korean War',
      description: 'War between North and South Korea ended in armistice, not peace treaty.'
    },
    {
      year: '1948',
      title: 'DPRK Founded',
      description: 'Democratic People\'s Republic of Korea established under Kim Il-sung.'
    },
  ],
  innovations: [
    {
      name: 'Juche Ideology',
      year: '1955',
      description: 'Development of unique political philosophy emphasizing self-reliance.',
    },
    {
      name: 'Mass Games',
      year: '1946',
      description: 'Spectacular synchronized performances involving thousands of participants.',
    },
  ],
  mustVisit: [
    { name: 'Kumsusan Palace', description: 'Mausoleum of Kim Il-sung and Kim Jong-il.' },
    { name: 'Mount Paektu', description: 'Sacred mountain with crater lake on Chinese border.' },
    { name: 'DMZ', description: 'Demilitarized Zone separating North and South Korea.' },
    { name: 'Pyongyang Metro', description: 'One of the world\'s deepest metro systems with ornate stations.' },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Special visa required; tours must be arranged through authorized agencies.' },
    { item: 'Best time to visit', description: 'April-June and September-October for moderate weather.' },
    { item: 'Guided tours only', description: 'Independent travel not permitted; must be with official guides.' },
    { item: 'Photography restrictions', description: 'Many areas have photography restrictions.' },
  ],
  dessert: {
    id: 'north-korea-dessert',
    name: 'Yakgwa',
    description: 'Honey cookies, traditional Korean sweet',
    cookingTime: 60,
    servings: 20,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Flour', amount: 300, unit: 'g' },
      { name: 'Honey', amount: 150, unit: 'g' },
      { name: 'Sesame oil', amount: 100, unit: 'ml' },
      { name: 'Ginger juice', amount: 2, unit: 'tbsp' },
      { name: 'Rice wine', amount: 2, unit: 'tbsp' },
      { name: 'Oil for frying', amount: 500, unit: 'ml' },
      { name: 'Pine nuts', amount: 50, unit: 'g' },
    ],
    steps: [
      'Mix flour with sesame oil, ginger juice, and rice wine',
      'Knead into smooth dough',
      'Roll out and cut into shapes',
      'Press pine nut in center of each',
      'Deep fry until golden',
      'Soak in honey syrup',
      'Let cool and serve',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800&q=80',
  },
  mainDish: {
    id: 'north-korea-main',
    name: 'Naengmyeon',
    description: 'Cold buckwheat noodles in broth',
    cookingTime: 60,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Buckwheat noodles', amount: 400, unit: 'g' },
      { name: 'Beef brisket', amount: 300, unit: 'g' },
      { name: 'Korean pear', amount: 1, unit: 'whole' },
      { name: 'Cucumber', amount: 1, unit: 'whole' },
      { name: 'Hard-boiled eggs', amount: 2, unit: 'whole' },
      { name: 'Vinegar', amount: 3, unit: 'tbsp' },
    ],
    steps: [
      'Make cold beef broth',
      'Cook noodles and rinse in cold water',
      'Slice pear, cucumber, and egg',
      'Place noodles in bowl',
      'Pour cold broth over',
      'Top with vegetables and egg',
    ],
    imageUrl: 'https://images.pexels.com/photos/8995154/pexels-photo-8995154.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  drinks: {
    alcoholic: 'Soju, Taedonggang beer',
    nonAlcoholic: 'Barley tea, Corn tea',
  },
  music: [
    'Traditional Korean music',
    'Revolutionary songs',
  ],
  decorationIdeas: [
    'Red, white and blue flag colors',
    'Mountain landscapes',
    'Traditional Korean patterns',
  ],
  conversationStarters: [
    'What do you know about Korean culture?',
    'Have you tried Korean noodles?',
  ],
  quiz: [
    {
      id: 'north-korea-q1',
      question: 'What is the capital of North Korea?',
      options: ['Seoul', 'Pyongyang', 'Busan', 'Incheon'],
      correctAnswer: 1,
    },
    {
      id: 'north-korea-q2',
      question: 'What is North Korea\'s political ideology called?',
      options: ['Communism', 'Juche', 'Socialism', 'Democracy'],
      correctAnswer: 1,
    },
    {
      id: 'north-korea-q3',
      question: 'When was North Korea founded?',
      options: ['1945', '1948', '1950', '1953'],
      correctAnswer: 1,
    },
    {
      id: 'north-korea-q4',
      question: 'What is the sacred mountain on the Chinese border?',
      options: ['Mount Fuji', 'Mount Paektu', 'Mount Everest', 'Mount Tai'],
      correctAnswer: 1,
    },
    {
      id: 'north-korea-q5',
      question: 'What percentage of North Korea is mountainous?',
      options: ['40%', '60%', '80%', '95%'],
      correctAnswer: 2,
    },
    {
      id: 'north-korea-q6',
      question: 'What is the official language of North Korea?',
      options: ['Chinese', 'Korean', 'Japanese', 'Russian'],
      correctAnswer: 1,
    },
    {
      id: 'north-korea-q7',
      question: 'What separates North and South Korea?',
      options: ['Berlin Wall', 'DMZ (Demilitarized Zone)', 'Great Wall', '38th Parallel only'],
      correctAnswer: 1,
    },
    {
      id: 'north-korea-q8',
      question: 'When did the Korean War end?',
      options: ['1945', '1950', '1953 (armistice)', '1960'],
      correctAnswer: 2,
    },
    {
      id: 'north-korea-q9',
      question: 'What is North Korea\'s currency?',
      options: ['Yen', 'Won', 'Yuan', 'Rupee'],
      correctAnswer: 1,
    },
    {
      id: 'north-korea-q10',
      question: 'What is North Korea\'s traditional cold noodle dish?',
      options: ['Ramen', 'Udon', 'Naengmyeon', 'Soba'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 82, y: 42 },
};
