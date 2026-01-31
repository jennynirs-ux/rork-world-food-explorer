import { Country } from '@/types';

export const ukraine: Country = {
  id: 'ukraine',
  name: 'Ukraine',
  code: 'UA',
  continent: 'Europe',
  flag: '🇺🇦',
  landscapeImage: 'https://images.unsplash.com/photo-1565123209285-8910b7e4353b?w=800&q=80',
  description:
    "Ukraine is a large country in Eastern Europe known for its Orthodox churches, Black Sea coastline, and forested mountains. Its capital, Kyiv, features the gold-domed St. Sophia's Cathedral, with its stunning 11th-century mosaics and frescoes.",
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
    'The Carpathian Mountains offer some of Europe’s best unspoiled nature',
    'Ukrainian is written in Cyrillic script',
    'Pysanky (decorated Easter eggs) are a traditional Ukrainian art form',
    'The country has more than 20,000 castles and historic sites',
  ],
  foodCulture:
    'Ukrainian cuisine is hearty and deeply rooted in agriculture. Bread holds special cultural significance, and traditional meals often feature wheat, vegetables, meats, and dairy products. Food plays a central role in hospitality and celebrations.',
  history: [
    {
      year: '9th century',
      title: 'Kievan Rus',
      description:
        'Kyiv became the center of Kievan Rus, the first East Slavic state, laying the foundation for Ukrainian identity.',
    },
    {
      year: '1240',
      title: 'Mongol Invasion',
      description:
        'Mongol forces conquered much of Ukraine, leading to centuries of foreign domination.',
    },
    {
      year: '1648',
      title: 'Cossack Hetmanate',
      description:
        'Ukrainian Cossacks formed a semi-autonomous state and cultural golden age.',
    },
    {
      year: '1917–1921',
      title: 'Struggle for Independence',
      description:
        'Ukraine briefly gained independence after World War I before becoming part of the Soviet Union.',
    },
    {
      year: '1991',
      title: 'Modern Independence',
      description:
        'Ukraine became an independent nation following the collapse of the Soviet Union.',
    },
  ],
  innovations: [
    {
      name: 'Aerospace Engineering',
      year: '20th Century',
      description:
        'Ukraine has a strong aerospace legacy, including aircraft and rocket engineering, with major industrial hubs developing advanced designs and manufacturing.',
    },
    {
      name: 'Folk Art Traditions',
      year: 'Centuries',
      description:
        'Textile arts, embroidery patterns, and pysanky techniques have been refined across regions and passed down through generations.',
    },
    {
      name: 'Choral and Bandura Music',
      year: '19th–20th Century',
      description:
        'Ukraine’s musical heritage includes rich choral traditions and the bandura, helping preserve language, poetry, and identity.',
    },
  ],
  mustVisit: [
    {
      name: 'Kyiv (Kyiv Pechersk Lavra)',
      description:
        'A historic monastery complex with catacombs and iconic golden domes, central to Ukrainian religious heritage.',
    },
    {
      name: "St. Sophia's Cathedral",
      description:
        'A landmark of medieval Kyiv featuring historic mosaics and frescoes, and one of the city’s most famous sights.',
    },
    {
      name: 'Lviv Old Town',
      description:
        'A charming UNESCO-listed historic center with Central European architecture, cafés, and vibrant cultural life.',
    },
    {
      name: 'Carpathian Mountains',
      description:
        'A scenic region for hiking, winter sports, wooden churches, and traditional village culture.',
    },
    {
      name: 'Odesa & the Black Sea Coast',
      description:
        'A coastal city known for beaches, promenades, and grand architecture with a lively summer atmosphere.',
    },
  ],
  travelEssentials: [
    {
      item: 'Visa',
      description:
        'Many nationalities can visit visa-free for up to 90 days. Check current requirements.',
    },
    {
      item: 'Best time to visit',
      description:
        'May–September for warm weather; December–January for winter charm.',
    },
    {
      item: 'Transportation',
      description:
        'Metro in Kyiv, extensive train network, buses and marshrutkas.',
    },
    {
      item: 'Language',
      description:
        'Ukrainian is official. Russian widely understood. English in major cities.',
    },
    {
      item: 'Safety',
      description:
        'Check current travel advisories. People are generally friendly and welcoming.',
    },
  ],
  mainDish: {
    id: 'ukraine-varenyky',
    name: 'Varenyky (Ukrainian Dumplings)',
    description:
      'Traditional Ukrainian dumplings filled with potato, cheese, cabbage, or fruit. Served with sour cream and fried onions.',
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
      'Mix flour, eggs, water, and salt into a smooth dough',
      'Cover and let rest for 30 minutes',
      'Boil and mash potatoes, mix with cottage cheese and seasoning',
      'Fry onions in butter until golden',
      'Roll dough thin and cut into circles',
      'Fill, fold, and pinch edges tightly',
      'Boil in salted water until dumplings float (5–7 minutes)',
      'Drain and toss with butter and onions',
      'Serve hot with sour cream',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600',
  },
  dessert: {
    id: 'ukraine-dessert',
    name: 'Syrnyky',
    description:
      'Pan-fried Ukrainian cottage cheese pancakes, lightly sweet and often served with sour cream, jam, or honey.',
    cookingTime: 30,
    servings: 4,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Cottage cheese (tvorog)', amount: 500, unit: 'g' },
      { name: 'Egg', amount: 1, unit: 'large' },
      { name: 'Sugar', amount: 40, unit: 'g' },
      { name: 'Vanilla extract (optional)', amount: 1, unit: 'tsp' },
      { name: 'All-purpose flour', amount: 80, unit: 'g' },
      { name: 'Salt', amount: 0.25, unit: 'tsp' },
      { name: 'Butter or oil (for frying)', amount: 2, unit: 'tbsp' },
      { name: 'Sour cream (to serve)', amount: 150, unit: 'g' },
      { name: 'Jam or honey (to serve)', amount: 4, unit: 'tbsp' },
    ],
    steps: [
      'Press cottage cheese through a sieve (or mash well) for a smooth texture',
      'Mix cottage cheese with egg, sugar, salt, and vanilla',
      'Add flour and mix gently until a soft dough forms',
      'Dust hands with flour and shape small patties (about 2 cm thick)',
      'Heat butter/oil in a pan over medium heat',
      'Fry syrnyky 3–4 minutes per side until golden',
      'Serve warm with sour cream and jam or honey',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600',
  },
  drinks: {
    alcoholic: 'Horilka (Ukrainian vodka), Ukrainian wine, Medovukha (honey drink)',
    nonAlcoholic: 'Uzvar (dried fruit drink), Compote, Kvass, Herbal tea',
  },
  music: [
    'Ukrainian folk songs',
    'Bandura music',
    'Hopak dance music',
    'Modern Ukrainian pop',
  ],
  decorationIdeas: [
    'Blue and yellow flag colors',
    'Sunflower motifs',
    'Embroidered rushnyk textiles',
    'Pysanky eggs',
    'Wheat sheaves',
  ],
  conversationStarters: [
    'Have you ever tried making varenyky?',
    'What do you know about Ukrainian embroidery?',
    'Would you visit the Carpathian Mountains or the Black Sea?',
    'Have you seen traditional Ukrainian pysanky?',
  ],
  quiz: [
    {
      id: 'ukraine-q1',
      question: 'What is the capital of Ukraine?',
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
      question: 'Why is Ukraine called the “breadbasket of Europe”?',
      options: ['Large bakeries', 'Fertile soil', 'Exports bread', 'Flat landscape'],
      correctAnswer: 1,
    },
    {
      id: 'ukraine-q4',
      question: 'Which script is used for the Ukrainian language?',
      options: ['Latin', 'Greek', 'Cyrillic', 'Arabic'],
      correctAnswer: 2,
    },
    {
      id: 'ukraine-q5',
      question: 'What traditional art involves decorated Easter eggs?',
      options: ['Icon painting', 'Pysanky', 'Embroidery', 'Mosaics'],
      correctAnswer: 1,
    },
    {
      id: 'ukraine-q6',
      question: 'Which mountain range runs through western Ukraine?',
      options: ['Alps', 'Carpathians', 'Pyrenees', 'Balkans'],
      correctAnswer: 1,
    },
    {
      id: 'ukraine-q7',
      question: 'What sea borders southern Ukraine?',
      options: ['Baltic Sea', 'Caspian Sea', 'Black Sea', 'Adriatic Sea'],
      correctAnswer: 2,
    },
    {
      id: 'ukraine-q8',
      question: 'What is the name of the traditional Ukrainian string instrument?',
      options: ['Balalaika', 'Bandura', 'Sitar', 'Mandolin'],
      correctAnswer: 1,
    },
    {
      id: 'ukraine-q9',
      question: 'In which year did Ukraine gain independence from the Soviet Union?',
      options: ['1989', '1991', '1993', '1995'],
      correctAnswer: 1,
    },
    {
      id: 'ukraine-q10',
      question: 'What flower is a national symbol of Ukraine?',
      options: ['Rose', 'Tulip', 'Sunflower', 'Lily'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 54, y: 50 },
};
