import { Country } from '@/types';

export const romania: Country = {
  id: 'romania',
  name: 'Romania',
  code: 'RO',
  continent: 'Europe',
  flag: '🇷🇴',
  landscapeImage: 'https://images.unsplash.com/photo-1606768666853-403c90a981ad?w=800',
  description: 'Romania is a Southeastern European country known for its medieval castles, forested region of Transylvania, and the Carpathian Mountains. The country blends Latin heritage with Slavic and Ottoman influences.',
  quickFacts: [
    { label: 'Capital', value: 'Bucharest' },
    { label: 'Population', value: '19 million' },
    { label: 'Official Language', value: 'Romanian' },
    { label: 'Currency', value: 'Romanian Leu (lei)' },
    { label: 'Area', value: '238,397 km²' },
  ],
  facts: [
    'Romania is home to Bran Castle, often associated with Dracula legend',
    'The Romanian language is a Romance language, most similar to Italian',
    'The Danube Delta in Romania is Europe\'s best preserved delta',
    'Romania has the second largest building in the world - the Palace of Parliament',
    'The country has over 400 species of mammals, including bears, wolves, and lynx',
    'Romanian folklore is rich with vampires, werewolves, and magical creatures',
    'The painted monasteries of Bucovina are UNESCO World Heritage Sites',
    'Romania is one of the largest wine producers in Europe',
  ],
  foodCulture: 'Romanian cuisine is a hearty mix of Balkan, Turkish, and Hungarian influences. Pork, poultry, and lamb are the main meats, often grilled or stewed. Polenta (mămăligă) is a staple, and meals are often accompanied by pickled vegetables and strong plum brandy.',
  history: [
    {
      year: '106 AD',
      title: 'Roman Dacia',
      description: 'The Romans conquered Dacia, bringing Latin language and culture that would form the basis of Romanian identity.'
    },
    {
      year: '14th century',
      title: 'Principalities Formed',
      description: 'Wallachia and Moldavia emerged as independent principalities, resisting Ottoman expansion.'
    },
    {
      year: '1456',
      title: 'Vlad the Impaler',
      description: 'Vlad III ruled Wallachia, becoming the inspiration for Bram Stoker\'s Dracula legend.'
    },
    {
      year: '1859',
      title: 'United Principalities',
      description: 'Wallachia and Moldavia united, forming the basis of modern Romania.'
    },
    {
      year: '1918',
      title: 'Greater Romania',
      description: 'After World War I, Romania achieved its greatest territorial extent, uniting all Romanian-speaking regions.'
    },
    {
      year: '1989',
      title: 'Fall of Communism',
      description: 'Romanian Revolution ended communist rule, leading to democratic reforms.'
    },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'EU citizens visa-free. Many others can visit up to 90 days without visa.' },
    { item: 'Best time to visit', description: 'May to September for hiking; December to March for skiing' },
    { item: 'Transportation', description: 'Trains connect major cities, buses for rural areas, metro in Bucharest' },
    { item: 'Language', description: 'Romanian official. English common in cities, French also understood.' },
    { item: 'Safety', description: 'Generally safe. Watch for pickpockets in tourist areas.' },
  ],
  mainDish: {
    id: 'romania-sarmale',
    name: 'Sarmale',
    description: 'Traditional Romanian cabbage rolls stuffed with a mixture of ground meat and rice, slow-cooked in tomato sauce. A festive dish served at celebrations and holidays.',
    cookingTime: 180,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Sauerkraut leaves', amount: 1, unit: 'jar' },
      { name: 'Ground pork and beef', amount: 600, unit: 'g' },
      { name: 'Rice', amount: 150, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'pieces' },
      { name: 'Tomato paste', amount: 3, unit: 'tbsp' },
      { name: 'Smoked bacon', amount: 200, unit: 'g' },
      { name: 'Bay leaves', amount: 3, unit: 'pieces' },
      { name: 'Paprika', amount: 2, unit: 'tsp' },
      { name: 'Thyme', amount: 1, unit: 'tsp' },
      { name: 'Sour cream', amount: 200, unit: 'ml' },
    ],
    steps: [
      'Soak rice in water for 20 minutes',
      'Finely chop onions and sauté until soft',
      'Mix ground meat with rice, onions, paprika, and salt',
      'Separate sauerkraut leaves carefully',
      'Place meat mixture on each leaf, fold and roll tightly',
      'Line pot bottom with bacon and extra cabbage leaves',
      'Layer sarmale tightly in pot',
      'Mix tomato paste with water and pour over sarmale',
      'Add bay leaves and thyme',
      'Cover and simmer on low heat for 2.5-3 hours',
      'Serve hot with sour cream and mămăligă (polenta)',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600',
  },
  drinks: {
    alcoholic: 'Țuică (plum brandy), Romanian wine, Beer',
    nonAlcoholic: 'Socată (elderflower drink), Turkish coffee, Fruit compote',
  },
  music: ['Traditional Romanian folk music', 'Doina (melancholic songs)', 'Lăutari music', 'Pan flute melodies'],
  decorationIdeas: [
    'Red, yellow, and blue (Romanian flag colors)',
    'Traditional woven textiles',
    'Wooden carved items',
    'Sunflower arrangements',
    'Castle and medieval motifs',
    'Folk art patterns',
  ],
  conversationStarters: [
    'Have you read Dracula? Would you visit Bran Castle?',
    'What do you know about Romanian traditions and folklore?',
    'Would you explore the Carpathian Mountains or visit medieval towns?',
    'Have you tried Romanian wine? The country has a long winemaking tradition!',
  ],
  quiz: [
    {
      id: 'romania-q1',
      question: 'What is Romania\'s capital city?',
      options: ['Budapest', 'Bucharest', 'Sofia', 'Belgrade'],
      correctAnswer: 1,
    },
    {
      id: 'romania-q2',
      question: 'Which famous castle in Romania is associated with Dracula?',
      options: ['Peleș Castle', 'Corvin Castle', 'Bran Castle', 'Hunyad Castle'],
      correctAnswer: 2,
    },
    {
      id: 'romania-q3',
      question: 'What are traditional Romanian cabbage rolls called?',
      options: ['Mămăligă', 'Mici', 'Sarmale', 'Cozonac'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 53, y: 46 },
};
