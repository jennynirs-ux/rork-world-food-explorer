import { Country } from '@/types';

export const northMacedonia: Country = {
  id: 'north-macedonia',
  name: 'North Macedonia',
  code: 'MK',
  continent: 'Europe',
  flag: '🇲🇰',
  landscapeImage: 'https://images.unsplash.com/photo-1605358260241-0d565d6c2a5d?w=800&q=80',
  description: 'North Macedonia is a Balkan country known for Lake Ohrid, ancient history, and diverse cultural heritage.',
  quickFacts: [
    { label: 'Capital', value: 'Skopje' },
    { label: 'Population', value: '2.1 million' },
    { label: 'Official Language', value: 'Macedonian' },
    { label: 'Currency', value: 'Macedonian Denar' },
    { label: 'Area', value: '25,713 km²' },
  ],
  facts: [
    'Lake Ohrid is one of Europe\'s oldest and deepest lakes',
    'Birthplace of Mother Teresa',
    'Changed name from Macedonia to North Macedonia in 2019',
    'Rich in ancient Greek and Roman heritage',
  ],
  foodCulture: 'North Macedonian cuisine blends Balkan, Mediterranean, and Turkish influences.',
  history: [
    {
      year: 'Ancient',
      title: 'Kingdom of Macedon',
      description: 'Ancient kingdom of Alexander the Great flourished in this region.'
    },
    {
      year: '1991',
      title: 'Independence',
      description: 'Gained independence from Yugoslavia peacefully.'
    },
    {
      year: '2019',
      title: 'Name Change',
      description: 'Changed official name from Macedonia to North Macedonia.'
    },
  ],
  innovations: [
    {
      name: 'Cyrillic Alphabet Development',
      year: '9th Century',
      description: 'Saints Cyril and Methodius from region created Cyrillic script.',
    },
    {
      name: 'Lake Ohrid Ecosystem',
      year: 'Ancient',
      description: 'Unique endemic species in one of Europe\'s oldest lakes.',
    },
  ],
  mustVisit: [
    { name: 'Lake Ohrid', description: 'UNESCO site, one of Europe\'s oldest and deepest lakes.' },
    { name: 'Skopje Old Bazaar', description: 'Historic Ottoman-era market, one of the largest in the Balkans.' },
    { name: 'Ohrid Old Town', description: 'Ancient town with churches and fortifications.' },
    { name: 'Matka Canyon', description: 'Stunning canyon with medieval monasteries.' },
    { name: 'Bitola', description: 'City with Ottoman heritage and ancient Heraclea ruins.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'May-September for warm weather and lake activities.' },
    { item: 'Visa', description: 'Visa-free for many nationalities for 90 days.' },
    { item: 'Currency', description: 'Macedonian Denar; euros sometimes accepted.' },
    { item: 'Language', description: 'Macedonian; English in tourist areas.' },
  ],
  dessert: {
    id: 'north-macedonia-dessert',
    name: 'Tulumba',
    description: 'Fried dough soaked in syrup, popular Balkan sweet',
    cookingTime: 45,
    servings: 20,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Flour', amount: 300, unit: 'g' },
      { name: 'Butter', amount: 100, unit: 'g' },
      { name: 'Water', amount: 400, unit: 'ml' },
      { name: 'Eggs', amount: 4, unit: 'large' },
      { name: 'Sugar for syrup', amount: 400, unit: 'g' },
      { name: 'Lemon juice', amount: 2, unit: 'tbsp' },
      { name: 'Oil for frying', amount: 500, unit: 'ml' },
    ],
    steps: [
      'Boil water with butter',
      'Add flour all at once, stir vigorously',
      'Cool slightly, beat in eggs one at a time',
      'Pipe dough into hot oil in ridged shapes',
      'Fry until golden',
      'Make syrup with sugar, water, lemon juice',
      'Soak fried dough in warm syrup',
      'Let drain and serve',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600',
  },
  mainDish: {
    id: 'north-macedonia-main',
    name: 'Tavče Gravče',
    description: 'Baked beans in earthenware pot',
    cookingTime: 90,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'White beans', amount: 500, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Red peppers', amount: 2, unit: 'whole' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Paprika', amount: 2, unit: 'tsp' },
      { name: 'Vegetable oil', amount: 100, unit: 'ml' },
    ],
    steps: [
      'Soak beans overnight',
      'Cook beans until tender',
      'Sauté onions and peppers',
      'Add tomatoes and paprika',
      'Mix with beans in clay pot',
      'Bake at 350°F for 30 minutes',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600',
  },
  drinks: {
    alcoholic: 'Rakija, Macedonian wine, Skopsko beer',
    nonAlcoholic: 'Boza, Turkish coffee, Salep',
  },
  music: [
    'Traditional folk music',
    'Macedonian brass bands',
    'Balkan beats',
  ],
  decorationIdeas: [
    'Red and yellow flag colors',
    'Lake Ohrid imagery',
    'Ancient ruins themes',
    'Balkan patterns',
  ],
  conversationStarters: [
    'Have you visited Lake Ohrid?',
    'What do you know about Balkan cuisine?',
  ],
  quiz: [
    {
      id: 'north-macedonia-q1',
      question: 'What is the capital of North Macedonia?',
      options: ['Skopje', 'Ohrid', 'Bitola', 'Tetovo'],
      correctAnswer: 0,
    },
    {
      id: 'north-macedonia-q2',
      question: 'What is one of Europe\'s oldest and deepest lakes in North Macedonia?',
      options: ['Lake Geneva', 'Lake Como', 'Lake Ohrid', 'Lake Bled'],
      correctAnswer: 2,
    },
    {
      id: 'north-macedonia-q3',
      question: 'In which year did North Macedonia gain independence?',
      options: ['1985', '1991', '1995', '2000'],
      correctAnswer: 1,
    },
    {
      id: 'north-macedonia-q4',
      question: 'Which famous humanitarian was born in Skopje?',
      options: ['Mother Teresa', 'Princess Diana', 'Florence Nightingale', 'Marie Curie'],
      correctAnswer: 0,
    },
    {
      id: 'north-macedonia-q5',
      question: 'What was the country\'s name before 2019?',
      options: ['Yugoslavia', 'Macedonia', 'Macedon', 'FYROM'],
      correctAnswer: 1,
    },
    {
      id: 'north-macedonia-q6',
      question: 'What is North Macedonia\'s currency?',
      options: ['Euro', 'Dinar', 'Denar', 'Lev'],
      correctAnswer: 2,
    },
    {
      id: 'north-macedonia-q7',
      question: 'Which ancient conqueror came from the region?',
      options: ['Julius Caesar', 'Alexander the Great', 'Hannibal', 'Genghis Khan'],
      correctAnswer: 1,
    },
    {
      id: 'north-macedonia-q8',
      question: 'What is the official language of North Macedonia?',
      options: ['Bulgarian', 'Serbian', 'Macedonian', 'Albanian'],
      correctAnswer: 2,
    },
    {
      id: 'north-macedonia-q9',
      question: 'Which alphabet did Saints from this region help create?',
      options: ['Latin', 'Greek', 'Cyrillic', 'Arabic'],
      correctAnswer: 2,
    },
    {
      id: 'north-macedonia-q10',
      question: 'What is North Macedonia\'s traditional bean dish called?',
      options: ['Fava beans', 'Tav\u010de Grav\u010de', 'Baked beans', 'Cassoulet'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 51, y: 42 },
};
