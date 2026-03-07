import { Country } from '@/types';

export const palestine: Country = {
  id: 'palestine',
  name: 'Palestine',
  code: 'PS',
  continent: 'Asia',
  flag: '🇵🇸',
  landscapeImage: 'https://images.unsplash.com/photo-1597211684565-dca64d72c5ac?w=800&q=80',
  description: 'Palestine is a region in the Middle East with deep historical and religious significance, known for ancient cities and ongoing political complexity.',
  quickFacts: [
    { label: 'Capital', value: 'Ramallah (de facto)' },
    { label: 'Population', value: '5.2 million' },
    { label: 'Official Language', value: 'Arabic' },
    { label: 'Currency', value: 'Israeli Shekel, Jordanian Dinar' },
    { label: 'Area', value: '6,020 km²' },
  ],
  facts: [
    'Bethlehem is the birthplace of Jesus',
    'Jericho is one of the world\'s oldest cities',
    'Rich in olive groves and cultivation',
    'Home to important religious sites',
  ],
  foodCulture: 'Palestinian cuisine features Levantine dishes with olive oil, za\'atar, and fresh vegetables.',
  history: [
    {
      year: 'Ancient',
      title: 'Biblical Times',
      description: 'Region has been continuously inhabited for thousands of years with immense religious significance.'
    },
    {
      year: '1917',
      title: 'British Mandate',
      description: 'Palestine came under British administration after Ottoman rule.'
    },
    {
      year: '1988',
      title: 'Declaration of Independence',
      description: 'Palestine declared independence, recognized by many countries.'
    },
  ],
  innovations: [
    {
      name: 'Olive Oil Production',
      year: 'Ancient',
      description: 'Traditional olive cultivation and oil production methods for millennia.',
    },
    {
      name: 'Traditional Embroidery',
      year: 'Traditional',
      description: 'Distinctive Palestinian cross-stitch embroidery patterns.',
    },
  ],
  mustVisit: [
    { name: 'Bethlehem', description: 'Birthplace of Jesus with Church of the Nativity.' },
    { name: 'Jericho', description: 'One of the world\'s oldest continuously inhabited cities.' },
    { name: 'Hebron', description: 'Ancient city with Cave of the Patriarchs.' },
    { name: 'Ramallah', description: 'Cultural center with cafes, galleries, and markets.' },
    { name: 'Nablus', description: 'Historic city famous for kanafeh dessert and olive oil soap.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'March-May and September-November for pleasant weather.' },
    { item: 'Visa', description: 'Complex entry requirements; check current regulations.' },
    { item: 'Modest clothing', description: 'Dress conservatively, especially in religious sites.' },
    { item: 'Political awareness', description: 'Be aware of current political situation.' },
  ],
  dessert: {
    id: 'palestine-dessert',
    name: 'Kanafeh Nabulsi',
    description: 'Nablus-style kanafeh with cheese and sugar syrup',
    cookingTime: 45,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Kataifi pastry', amount: 500, unit: 'g' },
      { name: 'Nabulsi cheese', amount: 500, unit: 'g' },
      { name: 'Butter', amount: 200, unit: 'g' },
      { name: 'Sugar for syrup', amount: 300, unit: 'g' },
      { name: 'Water', amount: 200, unit: 'ml' },
      { name: 'Lemon juice', amount: 1, unit: 'tbsp' },
      { name: 'Orange blossom water', amount: 2, unit: 'tbsp' },
      { name: 'Pistachios', amount: 50, unit: 'g' },
    ],
    steps: [
      'Make syrup: boil sugar and water with lemon juice',
      'Add orange blossom water, cool syrup',
      'Mix shredded kataifi with melted butter',
      'Press half into round pan',
      'Layer cheese evenly',
      'Top with remaining kataifi',
      'Bake at 350°F until golden (30 minutes)',
      'Pour cold syrup over hot kanafeh',
      'Sprinkle with pistachios and serve warm',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=700&q=80',
  },
  mainDish: {
    id: 'palestine-main',
    name: 'Musakhan',
    description: 'Roasted chicken with sumac and onions on taboon bread',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken', amount: 1, unit: 'kg' },
      { name: 'Onions', amount: 4, unit: 'whole' },
      { name: 'Sumac', amount: 4, unit: 'tbsp' },
      { name: 'Taboon bread', amount: 3, unit: 'pieces' },
      { name: 'Olive oil', amount: 100, unit: 'ml' },
      { name: 'Pine nuts', amount: 50, unit: 'g' },
    ],
    steps: [
      'Roast chicken with sumac and olive oil',
      'Caramelize onions slowly',
      'Toast pine nuts',
      'Layer bread on platter',
      'Top with onions and chicken',
      'Garnish with pine nuts and sumac',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=650&q=80',
  },
  drinks: {
    alcoholic: 'Arak, Palestinian wine',
    nonAlcoholic: 'Arabic coffee, Mint tea, Tamarind juice',
  },
  music: [
    'Traditional Dabke',
    'Arabic folk songs',
    'Oud music',
  ],
  decorationIdeas: [
    'Black, white, red and green flag colors',
    'Olive tree motifs',
    'Traditional embroidery',
    'Historical sites imagery',
  ],
  conversationStarters: [
    'Have you tried Palestinian olive oil?',
    'What do you know about Levantine cuisine?',
  ],
  quiz: [
    {
      id: 'palestine-q1',
      question: 'Which city is considered the birthplace of Jesus?',
      options: ['Jerusalem', 'Bethlehem', 'Nazareth', 'Jericho'],
      correctAnswer: 1,
    },
    {
      id: 'palestine-q2',
      question: 'What is one of the world\'s oldest continuously inhabited cities in Palestine?',
      options: ['Ramallah', 'Hebron', 'Jericho', 'Nablus'],
      correctAnswer: 2,
    },
    {
      id: 'palestine-q3',
      question: 'What is the de facto capital of Palestine?',
      options: ['Jerusalem', 'Ramallah', 'Bethlehem', 'Gaza'],
      correctAnswer: 1,
    },
    {
      id: 'palestine-q4',
      question: 'What is Palestine\'s official language?',
      options: ['Hebrew', 'Arabic', 'English', 'Aramaic'],
      correctAnswer: 1,
    },
    {
      id: 'palestine-q5',
      question: 'What Palestinian dish features chicken with sumac on bread?',
      options: ['Shawarma', 'Falafel', 'Musakhan', 'Kebab'],
      correctAnswer: 2,
    },
    {
      id: 'palestine-q6',
      question: 'Which city is famous for its kanafeh dessert?',
      options: ['Ramallah', 'Bethlehem', 'Nablus', 'Hebron'],
      correctAnswer: 2,
    },
    {
      id: 'palestine-q7',
      question: 'What is Palestine famous for producing?',
      options: ['Coffee', 'Olive oil', 'Wine', 'Tea'],
      correctAnswer: 1,
    },
    {
      id: 'palestine-q8',
      question: 'What spice blend is common in Palestinian cuisine?',
      options: ['Curry powder', 'Za\'atar', 'Five spice', 'Garam masala'],
      correctAnswer: 1,
    },
    {
      id: 'palestine-q9',
      question: 'What currencies are used in Palestine?',
      options: ['Palestinian Pound', 'Israeli Shekel and Jordanian Dinar', 'US Dollar', 'Euro'],
      correctAnswer: 1,
    },
    {
      id: 'palestine-q10',
      question: 'What traditional craft is Palestine known for?',
      options: ['Pottery', 'Embroidery', 'Woodcarving', 'Metalwork'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 54, y: 36 },
};
