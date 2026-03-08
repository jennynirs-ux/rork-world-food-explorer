import { Country } from '@/types';

export const lebanon: Country = {
  id: 'lebanon',
  name: 'Lebanon',
  code: 'LB',
  continent: 'Asia',
  flag: '🇱🇧',
  landscapeImage: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80',
  description: 'Lebanon is a small Mediterranean country with a rich history dating back thousands of years. Known for ancient Phoenician heritage, diverse culture, and world-renowned cuisine, Lebanon is often called the "Paris of the Middle East."',
  quickFacts: [
    { label: 'Capital', value: 'Beirut' },
    { label: 'Population', value: '6.8 million' },
    { label: 'Official Language', value: 'Arabic' },
    { label: 'Currency', value: 'Lebanese Pound (LBP)' },
    { label: 'Area', value: '10,452 km²' },
  ],
  facts: [
    'Lebanon is home to the ancient Phoenicians who invented the alphabet',
    'The country has 5 UNESCO World Heritage Sites',
    'Cedar trees on the flag have been symbols for thousands of years',
    'Lebanon is one of the most religiously diverse countries in the Middle East',
    'Beirut was rebuilt 7 times throughout history',
    'Lebanese cuisine is recognized as one of the world\'s healthiest',
  ],
  foodCulture: 'Lebanese cuisine is celebrated worldwide for its fresh ingredients, bold flavors, and healthy Mediterranean diet. Mezze (small plates) culture encourages sharing, with dishes like hummus, tabbouleh, and falafel. Olive oil, garlic, lemon, and herbs are essential.',
  history: [
    {
      year: '1200 BC',
      title: 'Phoenician Civilization',
      description: 'The Phoenicians established major trading cities and invented the alphabet that influenced Western writing systems.'
    },
    {
      year: '1943',
      title: 'Independence',
      description: 'Lebanon gained independence from French mandate, establishing a unique multi-religious political system.'
    },
    {
      year: '2005',
      title: 'Cedar Revolution',
      description: 'Mass demonstrations led to the withdrawal of Syrian forces from Lebanon.'
    },
  ],
  innovations: [
    {
      name: 'Alphabet',
      year: '1200 BC',
      description: 'Phoenicians developed the first alphabet, foundation of modern Western alphabets.'
    },
    {
      name: 'Purple Dye',
      year: 'Ancient',
      description: 'Phoenicians created royal purple dye from sea snails, worth more than gold.'
    },
  ],
  mustVisit: [
    { name: 'Baalbek', description: 'Ancient Roman temple complex with massive stone structures.' },
    { name: 'Jeita Grotto', description: 'Spectacular limestone caves with underground river.' },
    { name: 'Byblos', description: 'One of the oldest continuously inhabited cities in the world.' },
    { name: 'Cedars of God', description: 'Ancient cedar forest, UNESCO Heritage site.' },
    { name: 'Beirut', description: 'Vibrant capital with historic sites, nightlife, and Mediterranean coastline.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'April-June and September-November for pleasant weather.' },
    { item: 'Visa', description: 'Available on arrival for many nationalities.' },
    { item: 'Cash', description: 'US dollars widely accepted, bring cash due to banking situation.' },
    { item: 'Modest clothing', description: 'Respectful dress for religious sites.' },
  ],
  mainDish: {
    id: 'lebanon-main',
    name: 'Kibbeh',
    description: 'National dish of bulgur wheat and minced meat, served baked or fried',
    cookingTime: 90,
    servings: 8,
    dietType: 'meat',
    ingredients: [
      { name: 'Fine bulgur wheat', amount: 400, unit: 'g' },
      { name: 'Ground lamb', amount: 600, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'large' },
      { name: 'Pine nuts', amount: 100, unit: 'g' },
      { name: 'Allspice', amount: 2, unit: 'tsp' },
      { name: 'Cinnamon', amount: 1, unit: 'tsp' },
      { name: 'Fresh mint', amount: 3, unit: 'tbsp' },
      { name: 'Butter', amount: 50, unit: 'g' },
    ],
    steps: [
      'Soak bulgur in cold water for 20 minutes, drain well',
      'Mix bulgur with half the meat, one onion, spices in food processor',
      'Make filling: sauté remaining onion, meat, pine nuts',
      'Press half the bulgur mixture into greased baking dish',
      'Spread filling evenly, top with remaining bulgur mixture',
      'Cut into diamond shapes, brush with melted butter',
      'Bake at 180°C for 40 minutes until golden',
      'Serve with yogurt and cucumber salad',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541518763-27a56b59c8f1?w=800&q=80',
  },
  dessert: {
    id: 'lebanon-dessert',
    name: 'Baklava',
    description: 'Sweet pastry made of phyllo layers filled with nuts and honey',
    cookingTime: 60,
    servings: 24,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Phyllo pastry', amount: 500, unit: 'g' },
      { name: 'Pistachios', amount: 300, unit: 'g' },
      { name: 'Walnuts', amount: 200, unit: 'g' },
      { name: 'Butter', amount: 250, unit: 'g' },
      { name: 'Sugar', amount: 400, unit: 'g' },
      { name: 'Water', amount: 300, unit: 'ml' },
      { name: 'Honey', amount: 100, unit: 'g' },
      { name: 'Lemon juice', amount: 2, unit: 'tbsp' },
      { name: 'Orange blossom water', amount: 1, unit: 'tbsp' },
    ],
    steps: [
      'Chop nuts finely and mix together',
      'Layer phyllo sheets in buttered pan, brushing each with butter',
      'After 10 sheets, spread layer of nuts',
      'Continue layering phyllo and nuts, ending with phyllo',
      'Cut into diamond shapes before baking',
      'Bake at 160°C for 45 minutes until golden',
      'Make syrup: boil sugar, water, honey, lemon juice',
      'Pour cold syrup over hot baklava, add orange blossom water',
    ],
    imageUrl: 'https://images.pexels.com/photos/35552985/pexels-photo-35552985.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  drinks: {
    alcoholic: 'Arak (anise-flavored spirit), Lebanese wine, Almaza beer',
    nonAlcoholic: 'Arabic coffee, Jallab (date syrup drink), Fresh lemonade with mint, Ayran (yogurt drink)',
  },
  music: [
    'Fairuz - legendary Lebanese singer',
    'Dabke - traditional folk dance music',
    'Marcel Khalife - oud player',
    'Nancy Ajram - modern pop',
  ],
  decorationIdeas: [
    'Cedar tree motifs',
    'Lebanese flag colors (red and white)',
    'Phoenician-inspired patterns',
    'Mediterranean blue and white',
    'Brass coffee pots and decorations',
  ],
  conversationStarters: [
    'Have you tried authentic Lebanese food?',
    'What do you know about Phoenician history?',
    'Do you enjoy Mediterranean cuisine?',
    'Have you heard traditional Arabic music?',
  ],
  quiz: [
    {
      id: 'lebanon-q1',
      question: 'What ancient civilization originated in Lebanon?',
      options: ['Romans', 'Phoenicians', 'Greeks', 'Persians'],
      correctAnswer: 1,
    },
    {
      id: 'lebanon-q2',
      question: 'What is Lebanon\'s national dish?',
      options: ['Hummus', 'Falafel', 'Kibbeh', 'Shawarma'],
      correctAnswer: 2,
    },
    {
      id: 'lebanon-q3',
      question: 'What tree is featured on Lebanon\'s flag?',
      options: ['Oak', 'Cedar', 'Olive', 'Pine'],
      correctAnswer: 1,
    },
    {
      id: 'lebanon-q4',
      question: 'What is the capital of Lebanon?',
      options: ['Damascus', 'Beirut', 'Amman', 'Jerusalem'],
      correctAnswer: 1,
    },
    {
      id: 'lebanon-q5',
      question: 'What did the ancient Phoenicians invent?',
      options: ['The wheel', 'The alphabet', 'Paper', 'Gunpowder'],
      correctAnswer: 1,
    },
    {
      id: 'lebanon-q6',
      question: 'In which year did Lebanon gain independence?',
      options: ['1920', '1943', '1960', '1975'],
      correctAnswer: 1,
    },
    {
      id: 'lebanon-q7',
      question: 'What is Lebanon\'s traditional anise-flavored spirit called?',
      options: ['Ouzo', 'Raki', 'Arak', 'Sambuca'],
      correctAnswer: 2,
    },
    {
      id: 'lebanon-q8',
      question: 'How many UNESCO World Heritage Sites does Lebanon have?',
      options: ['2', '5', '8', '12'],
      correctAnswer: 1,
    },
    {
      id: 'lebanon-q9',
      question: 'What ancient Roman temple complex is located in Lebanon?',
      options: ['Palmyra', 'Baalbek', 'Jerash', 'Petra'],
      correctAnswer: 1,
    },
    {
      id: 'lebanon-q10',
      question: 'Which Lebanese singer is considered a legend in Arab music?',
      options: ['Umm Kulthum', 'Fairuz', 'Amr Diab', 'Nancy Ajram'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 53, y: 38 },
};
