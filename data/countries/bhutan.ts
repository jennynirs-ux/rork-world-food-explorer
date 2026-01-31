import { Country } from '@/types';

export const bhutan: Country = {
  id: 'bhutan',
  name: 'Bhutan',
  code: 'BT',
  continent: 'Asia',
  flag: '🇧🇹',
  landscapeImage: 'https://images.unsplash.com/photo-1545436913-2d6550e1f44f?w=800&q=80',
  description: 'Bhutan, the Land of the Thunder Dragon, measures prosperity through Gross National Happiness. A Buddhist kingdom in the Himalayas with stunning monasteries and pristine nature.',
  quickFacts: [
    { label: 'Capital', value: 'Thimphu' },
    { label: 'Population', value: '780,000' },
    { label: 'Official Language', value: 'Dzongkha' },
    { label: 'Currency', value: 'Ngultrum' },
    { label: 'Area', value: '38,394 km²' },
  ],
  facts: [
    'Bhutan is the only carbon-negative country in the world',
    'Gross National Happiness is more important than GDP',
    'Television was only introduced in 1999',
    'Smoking is banned in all public places',
    'The Tiger\'s Nest monastery clings to a cliff 3,000m high',
    'Bhutan requires all tourists to pay a daily fee (except Indian citizens)',
    'The national animal is the Takin, a unique goat-antelope',
    'Traditional dress (Gho for men, Kira for women) is required in government buildings',
  ],
  foodCulture: 'Bhutanese cuisine is known for its use of chili peppers, not just as spice but as a main vegetable. Red rice, cheese, and yak meat are staples. Ema Datshi (chili cheese) is the national dish. Butter tea (suja) is served throughout the day as a sign of hospitality.',
  history: [
    {
      year: '7th Century',
      title: 'Buddhism Introduction',
      description: 'Guru Rinpoche brought Buddhism to Bhutan, establishing monasteries and converting the region.'
    },
    {
      year: '1616',
      title: 'Unification',
      description: 'Ngawang Namgyal unified Bhutan as a nation-state and established the dual system of government combining religious and civil administration.'
    },
    {
      year: '1907',
      title: 'Monarchy Established',
      description: 'The Wangchuck dynasty was established, creating the hereditary monarchy that continues today.'
    },
    {
      year: '1972',
      title: 'Gross National Happiness',
      description: 'King Jigme Singye Wangchuck introduced the concept of Gross National Happiness as a development philosophy.'
    },
    {
      year: '2008',
      title: 'Democratic Constitution',
      description: 'Bhutan transitioned from absolute monarchy to constitutional democracy while maintaining the monarchy.'
    },
  ],
  innovations: [
    {
      name: 'Gross National Happiness',
      year: '1972',
      description: 'Bhutan pioneered measuring prosperity through well-being rather than economic output, influencing global development thinking.'
    },
    {
      name: 'Carbon-Negative Achievement',
      year: '2015',
      description: 'Bhutan became the first carbon-negative country, absorbing more CO2 than it produces through forest conservation.'
    },
    {
      name: 'Constitutional Environmental Protection',
      year: '2008',
      description: 'Bhutan\'s constitution mandates that 60% of the country must remain forested for all time, a unique legal protection.'
    },
    {
      name: 'High-Value, Low-Impact Tourism',
      year: '1974',
      description: 'Bhutan pioneered sustainable tourism by requiring daily fees, preserving culture and environment while limiting tourist numbers.'
    },
  ],
  mustVisit: [
    { name: 'Paro Taktsang (Tiger\'s Nest)', description: 'Iconic monastery clinging to a cliff face 900m above Paro valley, requiring a scenic 2-3 hour hike.' },
    { name: 'Punakha Dzong', description: 'Stunning fortress-monastery at the confluence of two rivers, considered Bhutan\'s most beautiful dzong.' },
    { name: 'Dochula Pass', description: 'Mountain pass with 108 memorial chortens and panoramic views of the Himalayan peaks.' },
    { name: 'Phobjikha Valley', description: 'Glacial valley where rare black-necked cranes migrate in winter, with pristine nature and traditional villages.' },
    { name: 'Buddha Dordenma Statue', description: 'Massive 51-meter golden Buddha statue overlooking Thimphu valley, containing 125,000 smaller Buddha statues.' }
  ],
  travelEssentials: [
    { item: 'Visa and daily fee', description: 'Pre-arranged tour required for most nationalities. Daily Sustainable Development Fee applies.' },
    { item: 'Best time to visit', description: 'March-May and September-November for clear skies and festivals.' },
    { item: 'Altitude preparation', description: 'Most areas are 2,000-3,000m elevation. Acclimatize and stay hydrated.' },
    { item: 'Modest clothing', description: 'Cover shoulders and knees when visiting religious sites. Remove shoes and hats.' },
    { item: 'Cash', description: 'Indian rupees widely accepted alongside Ngultrum. Credit cards limited outside Thimphu and Paro.' },
    { item: 'Layers', description: 'Mountain weather changes quickly. Bring warm clothing even in summer.' }
  ],
  mainDish: {
    id: 'bhutan-main',
    name: 'Ema Datshi',
    description: 'National dish of chili peppers cooked in cheese sauce',
    cookingTime: 30,
    servings: 4,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Green chili peppers', amount: 300, unit: 'g' },
      { name: 'Bhutanese cheese (or feta)', amount: 200, unit: 'g' },
      { name: 'Onion', amount: 1, unit: 'whole' },
      { name: 'Tomatoes', amount: 2, unit: 'whole' },
      { name: 'Garlic', amount: 3, unit: 'cloves' },
      { name: 'Butter', amount: 2, unit: 'tbsp' },
      { name: 'Water', amount: 200, unit: 'ml' },
    ],
    steps: [
      'Slice chilies lengthwise and remove seeds if preferred',
      'Sauté onions and garlic in butter',
      'Add chilies and tomatoes, cook 5 minutes',
      'Add water and simmer until chilies are tender',
      'Crumble cheese into the mixture',
      'Stir until cheese melts into creamy sauce',
      'Season with salt',
      'Serve hot with red rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600',
  },
  dessert: {
    id: 'bhutan-dessert',
    name: 'Khapse',
    description: 'Traditional Bhutanese deep-fried biscuits, often made during Losar (New Year)',
    cookingTime: 60,
    servings: 30,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'All-purpose flour', amount: 500, unit: 'g' },
      { name: 'Butter, melted', amount: 100, unit: 'g' },
      { name: 'Sugar', amount: 100, unit: 'g' },
      { name: 'Milk', amount: 200, unit: 'ml' },
      { name: 'Egg', amount: 1, unit: 'large' },
      { name: 'Baking powder', amount: 1, unit: 'tsp' },
      { name: 'Cardamom powder', amount: 1, unit: 'tsp' },
      { name: 'Vegetable oil for frying', amount: 500, unit: 'ml' },
    ],
    steps: [
      'Mix flour, sugar, baking powder, and cardamom.',
      'Add melted butter, egg, and milk.',
      'Knead into smooth, firm dough.',
      'Let rest for 20 minutes.',
      'Roll out dough to 5mm thickness.',
      'Cut into decorative shapes or strips.',
      'Heat oil to 180°C.',
      'Fry khapse until golden and crispy, about 2-3 minutes per side.',
      'Drain on paper towels.',
      'Store in airtight container, stays crispy for weeks.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600',
  },
  drinks: {
    alcoholic: 'Ara (rice wine), Chang (barley beer)',
    nonAlcoholic: 'Butter tea (suja), Sweet milk tea, Fresh apple juice',
  },
  music: [
    'Traditional Zhungdra',
    'Boedra folk songs',
    'Monastic chants',
    'Contemporary Bhutanese pop',
  ],
  decorationIdeas: [
    'Orange and yellow dragon flag',
    'Prayer flags',
    'Buddhist symbols',
    'Himalayan mountain imagery',
    'Traditional thangka paintings',
  ],
  conversationStarters: [
    'What do you think about measuring happiness instead of GDP?',
    'Have you visited any Himalayan countries?',
    'How spicy do you like your food?',
    'What does sustainability mean to you?',
  ],
  quiz: [
    {
      id: 'bhutan-q1',
      question: 'What does Bhutan measure instead of GDP?',
      options: ['National Wealth', 'Gross National Happiness', 'Economic Growth', 'Population Health'],
      correctAnswer: 1,
    },
    {
      id: 'bhutan-q2',
      question: 'What is Bhutan\'s national dish?',
      options: ['Momos', 'Ema Datshi', 'Thukpa', 'Dal Bhat'],
      correctAnswer: 1,
    },
    {
      id: 'bhutan-q3',
      question: 'When was television introduced in Bhutan?',
      options: ['1975', '1985', '1999', '2005'],
      correctAnswer: 2,
    },
    {
      id: 'bhutan-q4',
      question: 'What is the capital of Bhutan?',
      options: ['Paro', 'Thimphu', 'Punakha', 'Phuentsholing'],
      correctAnswer: 1,
    },
    {
      id: 'bhutan-q5',
      question: 'What is unique about Bhutan\'s carbon footprint?',
      options: ['Carbon neutral', 'Carbon-negative', 'Carbon positive', 'Carbon free'],
      correctAnswer: 1,
    },
    {
      id: 'bhutan-q6',
      question: 'What percentage of Bhutan must remain forested by constitutional law?',
      options: ['40%', '50%', '60%', '70%'],
      correctAnswer: 2,
    },
    {
      id: 'bhutan-q7',
      question: 'What is the famous cliff-side monastery called?',
      options: ['Dragon\'s Nest', 'Tiger\'s Nest', 'Eagle\'s Nest', 'Lion\'s Nest'],
      correctAnswer: 1,
    },
    {
      id: 'bhutan-q8',
      question: 'When did Bhutan transition to constitutional democracy?',
      options: ['1998', '2003', '2008', '2013'],
      correctAnswer: 2,
    },
    {
      id: 'bhutan-q9',
      question: 'What is Bhutan\'s national animal?',
      options: ['Snow Leopard', 'Red Panda', 'Takin', 'Yak'],
      correctAnswer: 2,
    },
    {
      id: 'bhutan-q10',
      question: 'What is the main ingredient in Ema Datshi?',
      options: ['Rice', 'Chili peppers', 'Yak meat', 'Noodles'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 74, y: 36 },
};
