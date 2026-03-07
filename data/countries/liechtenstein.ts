import { Country } from '@/types';

export const liechtenstein: Country = {
  id: 'liechtenstein',
  name: 'Liechtenstein',
  code: 'LI',
  continent: 'Europe',
  flag: '🇱🇮',
  landscapeImage: 'https://images.unsplash.com/photo-1573155993874-d5d48af862ba?w=800&q=80',
  description: 'Liechtenstein is a tiny Alpine principality between Switzerland and Austria, known for medieval castles, mountain trails, and banking.',
  quickFacts: [
    { label: 'Capital', value: 'Vaduz' },
    { label: 'Population', value: '39,000' },
    { label: 'Official Language', value: 'German' },
    { label: 'Currency', value: 'Swiss Franc' },
    { label: 'Area', value: '160 km²' },
  ],
  facts: [
    'One of the world\'s smallest countries',
    'The only country entirely in the Alps',
    'Has more registered companies than citizens',
    'One of the richest countries per capita',
  ],
  foodCulture: 'Liechtenstein cuisine is similar to Swiss and Austrian with cheese, meat, and pastries.',
  history: [
    {
      year: '1719',
      title: 'Principality Founded',
      description: 'The Holy Roman Emperor combined two lordships to create Liechtenstein.'
    },
    {
      year: '1866',
      title: 'Independence',
      description: 'Liechtenstein gained full independence and dissolved its military.'
    },
    {
      year: '1984',
      title: 'Women\'s Suffrage',
      description: 'Liechtenstein was one of the last European countries to grant women voting rights.'
    },
  ],
  innovations: [
    {
      name: 'Banking System',
      year: '1920s',
      description: 'Development of a sophisticated banking and financial services sector.',
    },
    {
      name: 'Precision Manufacturing',
      year: 'Modern',
      description: 'High-tech manufacturing of precision instruments and dental products.',
    },
  ],
  mustVisit: [
    { name: 'Vaduz Castle', description: 'Official residence of the Prince, overlooking the capital.' },
    { name: 'Kunstmuseum', description: 'Modern art museum with international collections.' },
    { name: 'Malbun', description: 'Alpine ski resort with family-friendly slopes.' },
    { name: 'Gutenberg Castle', description: 'Medieval castle in Balzers with panoramic views.' },
    { name: 'Liechtenstein Trail', description: '75km hiking trail through all 11 municipalities.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'June-September for hiking; December-March for skiing.' },
    { item: 'Visa', description: 'Same visa requirements as Switzerland (Schengen).' },
    { item: 'Currency', description: 'Swiss Franc is used; cards widely accepted.' },
    { item: 'Language', description: 'German is official; English often spoken in tourist areas.' },
  ],
  dessert: {
    id: 'liechtenstein-dessert',
    name: 'Apfelstrudel',
    description: 'Traditional apple strudel pastry',
    cookingTime: 90,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Phyllo dough', amount: 300, unit: 'g' },
      { name: 'Apples', amount: 800, unit: 'g' },
      { name: 'Sugar', amount: 100, unit: 'g' },
      { name: 'Raisins', amount: 100, unit: 'g' },
      { name: 'Cinnamon', amount: 2, unit: 'tsp' },
      { name: 'Breadcrumbs', amount: 50, unit: 'g' },
      { name: 'Butter', amount: 100, unit: 'g' },
    ],
    steps: [
      'Peel and slice apples thinly',
      'Mix apples with sugar, raisins, and cinnamon',
      'Lay out phyllo dough and brush with melted butter',
      'Sprinkle breadcrumbs over phyllo',
      'Spread apple mixture along one edge',
      'Roll up carefully, tucking in sides',
      'Brush top with butter',
      'Bake at 375°F for 45 minutes until golden',
      'Dust with powdered sugar, serve warm with cream',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80',
  },
  mainDish: {
    id: 'liechtenstein-main',
    name: 'Käsknöpfle',
    description: 'Cheese noodles with fried onions',
    cookingTime: 45,
    servings: 4,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Egg noodles', amount: 400, unit: 'g' },
      { name: 'Cheese (Emmentaler)', amount: 300, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Butter', amount: 100, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'whole' },
    ],
    steps: [
      'Cook noodles in salted water',
      'Layer hot noodles with grated cheese',
      'Repeat layers until cheese melts',
      'Fry onions in butter until crispy',
      'Top noodles with fried onions',
      'Serve with applesauce',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Local wines, Schnapps',
    nonAlcoholic: 'Apple juice, Mountain spring water',
  },
  music: [
    'Traditional Alpine folk',
    'Classical music',
    'Yodeling',
  ],
  decorationIdeas: [
    'Blue and red flag colors',
    'Castle imagery',
    'Alpine mountain themes',
    'Swiss-style decor',
  ],
  conversationStarters: [
    'Have you visited any micro-nations?',
    'Do you enjoy Alpine skiing?',
  ],
  quiz: [
    {
      id: 'liechtenstein-q1',
      question: 'What is the capital of Liechtenstein?',
      options: ['Vaduz', 'Bern', 'Zurich', 'Innsbruck'],
      correctAnswer: 0,
    },
    {
      id: 'liechtenstein-q2',
      question: 'Which two countries border Liechtenstein?',
      options: ['Germany and Austria', 'Switzerland and Austria', 'France and Switzerland', 'Italy and Austria'],
      correctAnswer: 1,
    },
    {
      id: 'liechtenstein-q3',
      question: 'What currency does Liechtenstein use?',
      options: ['Euro', 'Liechtenstein Franc', 'Swiss Franc', 'Austrian Schilling'],
      correctAnswer: 2,
    },
    {
      id: 'liechtenstein-q4',
      question: 'What is Liechtenstein\'s form of government?',
      options: ['Republic', 'Constitutional monarchy', 'Principality', 'Democracy'],
      correctAnswer: 2,
    },
    {
      id: 'liechtenstein-q5',
      question: 'What is Liechtenstein\'s approximate area?',
      options: ['160 km²', '500 km²', '1000 km²', '2000 km²'],
      correctAnswer: 0,
    },
    {
      id: 'liechtenstein-q6',
      question: 'In which year was Liechtenstein founded as a principality?',
      options: ['1500', '1719', '1850', '1900'],
      correctAnswer: 1,
    },
    {
      id: 'liechtenstein-q7',
      question: 'What is unique about Liechtenstein among European countries?',
      options: ['Has no mountains', 'Entirely in the Alps', 'Island nation', 'Has no capital'],
      correctAnswer: 1,
    },
    {
      id: 'liechtenstein-q8',
      question: 'When did Liechtenstein grant women the right to vote?',
      options: ['1920', '1945', '1984', '2000'],
      correctAnswer: 2,
    },
    {
      id: 'liechtenstein-q9',
      question: 'What is Liechtenstein\'s primary economic strength?',
      options: ['Agriculture', 'Tourism only', 'Banking and finance', 'Mining'],
      correctAnswer: 2,
    },
    {
      id: 'liechtenstein-q10',
      question: 'What is the official language of Liechtenstein?',
      options: ['French', 'German', 'Italian', 'English'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 48, y: 47 },
};
