import { Country } from '@/types';

export const eritrea: Country = {
  id: 'eritrea',
  name: 'Eritrea',
  code: 'ER',
  continent: 'Africa',
  flag: '🇪🇷',
  landscapeImage: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800',
  description: 'Eritrea is a Horn of Africa country on the Red Sea, known for Italian colonial architecture, diverse ethnic groups, and unique coffee culture.',
  quickFacts: [
    { label: 'Capital', value: 'Asmara' },
    { label: 'Population', value: '3.6 million' },
    { label: 'Official Languages', value: 'Tigrinya, Arabic, English' },
    { label: 'Currency', value: 'Eritrean Nakfa' },
    { label: 'Area', value: '117,600 km²' },
  ],
  facts: [
    'Asmara has the world\'s best-preserved Italian Art Deco architecture',
    'Coffee ceremony is an important cultural tradition',
    'Home to the Dahlak Archipelago with pristine diving',
    'Gained independence from Ethiopia in 1993',
  ],
  foodCulture: 'Eritrean cuisine features injera flatbread with spicy stews, influenced by Ethiopian, Italian, and Middle Eastern flavors.',
  history: [
    {
      year: '1890',
      title: 'Italian Colony',
      description: 'Italy established Eritrea as its first colony, leaving lasting architectural influence.'
    },
    {
      year: '1941-1952',
      title: 'British Administration',
      description: 'British forces liberated Eritrea from Italy during WWII.'
    },
    {
      year: '1952-1991',
      title: 'Ethiopian Federation',
      description: 'Eritrea was federated with Ethiopia, later leading to 30-year independence war.'
    },
    {
      year: '1993',
      title: 'Independence',
      description: 'Eritrea gained independence after referendum with 99.8% voting for independence.'
    },
  ],
  mustVisit: [
    { name: 'Asmara\'s Art Deco District', description: 'UNESCO World Heritage Site with 1930s Italian modernist architecture.' },
    { name: 'Massawa Old Town', description: 'Historic Red Sea port with Ottoman and Italian architecture.' },
    { name: 'Dahlak Archipelago', description: 'Over 200 islands with pristine diving and marine life.' },
    { name: 'Qohaito Archaeological Site', description: 'Ancient pre-Aksumite ruins.' },
    { name: 'Eritrean Railway', description: 'Historic narrow-gauge railway from Italian colonial era.' }
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Required for most nationalities. Apply in advance.' },
    { item: 'Best time to visit', description: 'October-March for cooler weather.' },
    { item: 'Travel permits', description: 'Required for travel outside Asmara.' },
    { item: 'Cash', description: 'Credit cards rarely accepted. Bring sufficient nakfa or USD.' },
  ],
  mainDish: {
    id: 'eritrea-main',
    name: 'Zigni',
    description: 'Spicy beef stew served with injera',
    cookingTime: 120,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Beef chunks', amount: 800, unit: 'g' },
      { name: 'Berbere spice', amount: 3, unit: 'tbsp' },
      { name: 'Tomatoes', amount: 4, unit: 'whole' },
      { name: 'Onions', amount: 3, unit: 'whole' },
      { name: 'Garlic', amount: 5, unit: 'cloves' },
      { name: 'Injera bread', amount: 6, unit: 'pieces' },
    ],
    steps: [
      'Dry-roast onions until soft',
      'Add berbere spice and tomatoes',
      'Add beef and water',
      'Simmer for 2 hours until tender',
      'Adjust seasoning',
      'Serve on injera bread',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600',
  },
  dessert: {
    id: 'eritrea-dessert',
    name: 'Himbasha',
    description: 'Sweet cardamom bread, often served during celebrations',
    cookingTime: 90,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Flour', amount: 500, unit: 'g' },
      { name: 'Sugar', amount: 100, unit: 'g' },
      { name: 'Butter', amount: 150, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'large' },
      { name: 'Cardamom', amount: 2, unit: 'tsp' },
      { name: 'Yeast', amount: 10, unit: 'g' },
      { name: 'Milk', amount: 200, unit: 'ml' },
    ],
    steps: [
      'Activate yeast in warm milk',
      'Mix flour, sugar, and cardamom',
      'Add butter, eggs, and yeast mixture',
      'Knead until smooth dough forms',
      'Let rise for 1 hour',
      'Shape into round loaf with decorative patterns',
      'Bake at 180°C for 35 minutes until golden',
      'Serve with butter and coffee',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600',
  },
  drinks: {
    alcoholic: 'Mies (honey wine), Suwa (beer)',
    nonAlcoholic: 'Eritrean coffee, Spris (yogurt drink)',
  },
  music: [
    'Traditional Tigrinya music',
    'Guayla dance music',
    'Red Sea rhythms',
  ],
  decorationIdeas: [
    'Green, red and blue flag colors',
    'Art Deco architectural elements',
    'Coffee ceremony items',
    'Red Sea coastal themes',
  ],
  conversationStarters: [
    'Have you experienced a traditional coffee ceremony?',
    'What do you know about Italian colonial architecture?',
  ],
  innovations: [
    {
      name: 'Coffee Ceremony Tradition',
      year: 'Ancient',
      description: 'Elaborate coffee preparation ritual that takes hours and brings communities together',
    },
    {
      name: 'Dahlak Marine Conservation',
      year: '2000s',
      description: 'Protecting pristine Red Sea coral reefs and marine ecosystems',
    },
    {
      name: 'Art Deco Preservation',
      year: '2017',
      description: 'Asmara became UNESCO World Heritage Site for Italian modernist architecture',
    },
  ],
  quiz: [
    {
      id: 'eritrea-q1',
      question: 'What is the capital of Eritrea?',
      options: ['Addis Ababa', 'Asmara', 'Khartoum', 'Djibouti'],
      correctAnswer: 1,
    },
    {
      id: 'eritrea-q2',
      question: 'When did Eritrea gain independence?',
      options: ['1960', '1975', '1993', '2000'],
      correctAnswer: 2,
    },
    {
      id: 'eritrea-q3',
      question: 'What architectural style is Asmara famous for?',
      options: ['Gothic', 'Art Deco', 'Baroque', 'Brutalist'],
      correctAnswer: 1,
    },
    {
      id: 'eritrea-q4',
      question: 'What is the traditional spicy stew called?',
      options: ['Curry', 'Zigni', 'Tagine', 'Goulash'],
      correctAnswer: 1,
    },
    {
      id: 'eritrea-q5',
      question: 'What sea borders Eritrea?',
      options: ['Mediterranean', 'Red Sea', 'Arabian Sea', 'Black Sea'],
      correctAnswer: 1,
    },
    {
      id: 'eritrea-q6',
      question: 'What is the currency of Eritrea?',
      options: ['Birr', 'Nakfa', 'Shilling', 'Dinar'],
      correctAnswer: 1,
    },
    {
      id: 'eritrea-q7',
      question: 'What bread is served with zigni?',
      options: ['Naan', 'Pita', 'Injera', 'Baguette'],
      correctAnswer: 2,
    },
    {
      id: 'eritrea-q8',
      question: 'Which country did Eritrea gain independence from?',
      options: ['Italy', 'Ethiopia', 'Britain', 'France'],
      correctAnswer: 1,
    },
    {
      id: 'eritrea-q9',
      question: 'What is an important cultural tradition in Eritrea?',
      options: ['Tea ceremony', 'Coffee ceremony', 'Wine tasting', 'Beer festival'],
      correctAnswer: 1,
    },
    {
      id: 'eritrea-q10',
      question: 'What is the Dahlak Archipelago known for?',
      options: ['Mountains', 'Deserts', 'Diving', 'Skiing'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 56, y: 26 },
};
