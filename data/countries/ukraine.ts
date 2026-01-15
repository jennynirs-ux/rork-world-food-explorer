import { Country } from '@/types';

export const ukraine: Country = {
  id: 'ukraine',
  name: 'Ukraine',
  code: 'UA',
  continent: 'Europe',
  flag: '🇺🇦',
  landscapeImage: 'https://images.unsplash.com/photo-1565630916779-e303be97fbe8?w=800',
  description: 'Ukraine is a large country in Eastern Europe known for its Orthodox churches, Black Sea coastline, and forested mountains. Its capital, Kyiv, features the gold-domed St. Sophia\'s Cathedral, with its stunning 11th-century mosaics and frescoes.',
  quickFacts: [
    { label: 'Capital', value: 'Kyiv' },
    { label: 'Population', value: '41 million' },
    { label: 'Official Language', value: 'Ukrainian' },
    { label: 'Currency', value: 'Ukrainian Hryvnia (₴)' },
    { label: 'Area', value: '603,628 km²' },
  ],
  facts: [
    'Ukraine is the largest country entirely within Europe',
    'The country is known as the "breadbasket of Europe" due to its fertile soil',
    'Kyiv is one of the oldest cities in Eastern Europe, founded in the 5th century',
    'Ukraine has seven UNESCO World Heritage Sites',
    'The Carpathian Mountains offer some of Europe\'s best unspoiled nature',
    'Ukrainian is written in Cyrillic script',
    'Pysanky (decorated Easter eggs) is a traditional Ukrainian art form',
    'The country has more than 20,000 castles and historic sites',
  ],
  foodCulture: 'Ukrainian cuisine is diverse and hearty, reflecting the country\'s agricultural heritage. Bread holds special significance in Ukrainian culture, and traditional meals often feature wheat, vegetables, meats, and dairy products. Food is central to Ukrainian hospitality and celebrations.',
  history: [
    {
      year: '9th century',
      title: 'Kievan Rus',
      description: 'Kyiv became the center of Kievan Rus, the first East Slavic state, laying the foundation for Ukrainian identity.'
    },
    {
      year: '1240',
      title: 'Mongol Invasion',
      description: 'Mongols conquered much of Ukraine, leading to centuries of foreign rule and struggle for independence.'
    },
    {
      year: '1648',
      title: 'Cossack Hetmanate',
      description: 'Ukrainian Cossacks established a semi-autonomous state, a golden age of Ukrainian culture and self-rule.'
    },
    {
      year: '1917-1921',
      title: 'Ukrainian Independence',
      description: 'Ukraine briefly gained independence after World War I, before becoming part of the Soviet Union.'
    },
    {
      year: '1991',
      title: 'Modern Independence',
      description: 'Ukraine gained independence following the dissolution of the Soviet Union, becoming a sovereign nation.'
    },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Many nationalities can visit visa-free for up to 90 days. Check current requirements.' },
    { item: 'Best time to visit', description: 'May to September for warm weather; December to January for winter charm' },
    { item: 'Transportation', description: 'Metro in Kyiv, trains between cities, buses and marshrutkas (minibuses)' },
    { item: 'Language', description: 'Ukrainian official. Russian widely understood. English in major cities.' },
    { item: 'Safety', description: 'Check current travel advisories. Generally friendly and welcoming people.' },
  ],
  mainDish: {
    id: 'ukraine-varenyky',
    name: 'Varenyky (Ukrainian Dumplings)',
    description: 'Traditional Ukrainian dumplings filled with various ingredients like potato, cheese, cabbage, or cherries. Often served with sour cream and fried onions.',
    cookingTime: 90,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'All-purpose flour', amount: 500, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'pieces' },
      { name: 'Water', amount: 200, unit: 'ml' },
      { name: 'Potatoes', amount: 600, unit: 'g' },
      { name: 'Cottage cheese', amount: 200, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'pieces' },
      { name: 'Butter', amount: 100, unit: 'g' },
      { name: 'Sour cream', amount: 200, unit: 'ml' },
      { name: 'Salt', amount: 2, unit: 'tsp' },
      { name: 'Black pepper', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Make dough: combine flour, eggs, water, and pinch of salt. Knead until smooth',
      'Cover dough and let rest for 30 minutes',
      'Prepare filling: boil and mash potatoes, mix with cottage cheese, salt, and pepper',
      'Fry finely chopped onions in butter until golden',
      'Roll out dough thinly, cut circles with glass or cutter',
      'Place spoonful of filling on each circle, fold and pinch edges to seal',
      'Boil varenyky in salted water until they float (5-7 minutes)',
      'Drain and toss with butter and fried onions',
      'Serve hot with sour cream',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600',
  },
  drinks: {
    alcoholic: 'Horilka (Ukrainian vodka), Ukrainian wine, Medovukha (honey drink)',
    nonAlcoholic: 'Uzvar (dried fruit drink), Compote, Kvass, Ukrainian tea with herbs',
  },
  music: ['Ukrainian folk songs', 'Bandura music (traditional instrument)', 'Hopak dance music', 'Contemporary Ukrainian pop'],
  decorationIdeas: [
    'Blue and yellow (Ukrainian flag colors)',
    'Embroidered rushnyk (ritual cloth)',
    'Pysanky (decorated eggs)',
    'Sunflower motifs',
    'Traditional pottery and ceramics',
    'Wheat sheaves',
  ],
  conversationStarters: [
    'Have you ever tried making varenyky? What\'s your favorite filling?',
    'What do you know about Ukrainian embroidery traditions?',
    'Would you visit the Carpathian Mountains or the Black Sea coast?',
    'Have you seen Ukrainian pysanky (decorated eggs)? They\'re incredible!',
  ],
  quiz: [
    {
      id: 'ukraine-q1',
      question: 'What is Ukraine\'s capital city?',
      options: ['Lviv', 'Odesa', 'Kyiv', 'Kharkiv'],
      correctAnswer: 2,
    },
    {
      id: 'ukraine-q2',
      question: 'What are traditional Ukrainian dumplings called?',
      options: ['Pelmeni', 'Pierogi', 'Varenyky', 'Khinkali'],
      correctAnswer: 2,
    },
    {
      id: 'ukraine-q3',
      question: 'What is Ukraine known as due to its fertile soil?',
      options: ['Land of Mountains', 'Breadbasket of Europe', 'Pearl of the Black Sea', 'Heart of Europe'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 54, y: 50 },
};
