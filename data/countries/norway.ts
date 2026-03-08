import { Country } from '@/types';

export const norway: Country = {
  id: 'norway',
  name: 'Norway',
  code: 'NO',
  continent: 'Europe',
  flag: '🇳🇴',
  landscapeImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80',
  description: 'Norway is famous for breathtaking fjords, Northern Lights, midnight sun, and Viking heritage. With stunning natural beauty and high quality of life, Norway offers a unique blend of outdoor adventure and modern Scandinavian culture.',
  quickFacts: [
    { label: 'Capital', value: 'Oslo' },
    { label: 'Population', value: '5.5 million' },
    { label: 'Official Language', value: 'Norwegian' },
    { label: 'Currency', value: 'Norwegian Krone (NOK)' },
    { label: 'Area', value: '385,207 km²' },
  ],
  facts: [
    'Norway consistently ranks as one of the world\'s happiest countries',
    'The country has over 1,000 fjords along its coastline',
    'Norway was the birthplace of skiing as a sport',
    'The Nobel Peace Prize is awarded in Oslo',
    'Norway has one of the world\'s largest sovereign wealth funds',
    'Midnight sun in summer and polar nights in winter in the north',
  ],
  foodCulture: 'Norwegian cuisine emphasizes fresh seafood, game meats, and dairy products. Traditional preservation methods like smoking, curing, and drying are still used. Simple preparation highlights quality ingredients.',
  history: [
    {
      year: '793-1066',
      title: 'Viking Age',
      description: 'Norwegian Vikings explored, traded, and settled across Europe and beyond.'
    },
    {
      year: '1905',
      title: 'Independence',
      description: 'Norway peacefully gained independence from Sweden after centuries of union.'
    },
    {
      year: '1970s',
      title: 'Oil Discovery',
      description: 'Discovery of North Sea oil transformed Norway into one of the world\'s wealthiest nations.'
    },
  ],
  innovations: [
    {
      name: 'Cheese Slicer',
      year: '1925',
      description: 'Thor Bjørklund invented the cheese slicer, now found in kitchens worldwide.'
    },
    {
      name: 'Aerosol Spray Can',
      year: '1927',
      description: 'Erik Rotheim invented the first aerosol spray can.'
    },
  ],
  mustVisit: [
    { name: 'Geirangerfjord', description: 'UNESCO fjord with stunning waterfalls and mountain scenery.' },
    { name: 'Northern Lights', description: 'Aurora borealis visible in northern Norway from autumn to spring.' },
    { name: 'Bergen', description: 'Colorful Hanseatic wharf and gateway to the fjords.' },
    { name: 'Lofoten Islands', description: 'Dramatic Arctic archipelago with fishing villages and beaches.' },
    { name: 'Viking Ship Museum', description: 'Oslo museum with remarkably preserved Viking ships.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'June-August for midnight sun, September-March for Northern Lights.' },
    { item: 'Warm layers', description: 'Weather can be cold even in summer, especially in the north.' },
    { item: 'Budget planning', description: 'Norway is expensive, plan accordingly.' },
    { item: 'Outdoor gear', description: 'Hiking boots and rain gear for outdoor activities.' },
  ],
  mainDish: {
    id: 'norway-main',
    name: 'Fårikål',
    description: 'Traditional lamb and cabbage stew, Norway\'s national dish',
    cookingTime: 180,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Lamb shoulder', amount: 1500, unit: 'g' },
      { name: 'White cabbage', amount: 1500, unit: 'g' },
      { name: 'Whole black peppercorns', amount: 3, unit: 'tbsp' },
      { name: 'Flour', amount: 3, unit: 'tbsp' },
      { name: 'Salt', amount: 2, unit: 'tsp' },
      { name: 'Water or stock', amount: 500, unit: 'ml' },
    ],
    steps: [
      'Cut lamb into large chunks with bone',
      'Cut cabbage into large pieces',
      'Layer lamb and cabbage in large pot',
      'Sprinkle flour, salt, and peppercorns between layers',
      'Add water or stock',
      'Bring to boil, then simmer covered for 2-3 hours',
      'Serve with boiled potatoes',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=800',
  },
  dessert: {
    id: 'norway-dessert',
    name: 'Kvæfjordkake',
    description: 'World\'s best cake with meringue, custard, and almond layers',
    cookingTime: 60,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Butter', amount: 150, unit: 'g' },
      { name: 'Sugar', amount: 200, unit: 'g' },
      { name: 'Egg yolks', amount: 4, unit: 'pieces' },
      { name: 'Egg whites', amount: 4, unit: 'pieces' },
      { name: 'Flour', amount: 150, unit: 'g' },
      { name: 'Milk', amount: 150, unit: 'ml' },
      { name: 'Sliced almonds', amount: 100, unit: 'g' },
      { name: 'Vanilla custard', amount: 500, unit: 'ml' },
    ],
    steps: [
      'Beat butter and half the sugar, add egg yolks',
      'Mix in flour and milk to form batter',
      'Spread in greased pan',
      'Beat egg whites to stiff peaks with remaining sugar',
      'Spread meringue over batter, sprinkle with almonds',
      'Bake at 180°C for 30 minutes until golden',
      'Cool, slice horizontally, fill with vanilla custard',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=850',
  },
  drinks: {
    alcoholic: 'Aquavit (traditional spirit), Norwegian craft beer, Gløgg (mulled wine)',
    nonAlcoholic: 'Coffee (Norwegians drink most coffee per capita), Apple juice, Mineral water',
  },
  music: [
    'Edvard Grieg - classical composer',
    'A-ha - Take On Me',
    'Traditional folk music',
    'Modern Norwegian pop and metal',
  ],
  decorationIdeas: [
    'Norwegian flag colors (red, white, blue)',
    'Viking-inspired elements',
    'Rosemaling (folk art patterns)',
    'Natural wood and white',
    'Scandinavian minimalist style',
  ],
  conversationStarters: [
    'Have you seen the Northern Lights?',
    'What do you know about Viking history?',
    'Have you been to a fjord?',
    'What\'s your favorite Scandinavian country?',
  ],
  quiz: [
    {
      id: 'norway-q1',
      question: 'What natural phenomenon is Norway famous for?',
      options: ['Tornadoes', 'Northern Lights', 'Earthquakes', 'Hurricanes'],
      correctAnswer: 1,
    },
    {
      id: 'norway-q2',
      question: 'What is Norway\'s national dish?',
      options: ['Meatballs', 'Fårikål', 'Salmon', 'Lutefisk'],
      correctAnswer: 1,
    },
    {
      id: 'norway-q3',
      question: 'Where is the Nobel Peace Prize awarded?',
      options: ['Stockholm', 'Oslo', 'Copenhagen', 'Helsinki'],
      correctAnswer: 1,
    },
    {
      id: 'norway-q4',
      question: 'What is the capital of Norway?',
      options: ['Bergen', 'Oslo', 'Trondheim', 'Stavanger'],
      correctAnswer: 1,
    },
    {
      id: 'norway-q5',
      question: 'How many fjords does Norway have approximately?',
      options: ['100', '500', '1,000+', '5,000'],
      correctAnswer: 2,
    },
    {
      id: 'norway-q6',
      question: 'In which year did Norway gain independence from Sweden?',
      options: ['1850', '1905', '1945', '1960'],
      correctAnswer: 1,
    },
    {
      id: 'norway-q7',
      question: 'What is Norway\'s currency?',
      options: ['Euro', 'Krone', 'Krona', 'Kuna'],
      correctAnswer: 1,
    },
    {
      id: 'norway-q8',
      question: 'Which historical period is Norway famous for?',
      options: ['Roman Empire', 'Viking Age', 'Renaissance', 'Industrial Revolution'],
      correctAnswer: 1,
    },
    {
      id: 'norway-q9',
      question: 'What winter sport was Norway the birthplace of?',
      options: ['Ice hockey', 'Skiing', 'Snowboarding', 'Curling'],
      correctAnswer: 1,
    },
    {
      id: 'norway-q10',
      question: 'What resource discovery transformed Norway in the 1970s?',
      options: ['Gold', 'Coal', 'North Sea oil', 'Natural gas only'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 49, y: 65 },
};
