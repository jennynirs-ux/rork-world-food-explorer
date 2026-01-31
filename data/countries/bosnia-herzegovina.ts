import { Country } from '@/types';

export const bosniaHerzegovina: Country = {
  id: 'bosnia-herzegovina',
  name: 'Bosnia and Herzegovina',
  code: 'BA',
  continent: 'Europe',
  flag: '🇧🇦',
  landscapeImage: 'https://images.unsplash.com/photo-1591289009723-aef4eb4c4e47?w=800&q=80',
  description: 'Bosnia and Herzegovina is a country in the Balkans known for its medieval villages, diverse culture, and scenic mountains.',
  quickFacts: [
    { label: 'Capital', value: 'Sarajevo' },
    { label: 'Population', value: '3.3 million' },
    { label: 'Official Languages', value: 'Bosnian, Croatian, Serbian' },
    { label: 'Currency', value: 'Convertible Mark' },
    { label: 'Area', value: '51,209 km²' },
  ],
  facts: [
    'Sarajevo hosted the 1984 Winter Olympics',
    'The Stari Most (Old Bridge) in Mostar is a UNESCO site',
    'Bosnia produces some of Europe\'s best traditional coffee',
    'The country has three official languages',
    'Sarajevo was the site of the assassination that sparked WWI',
    'Bosnia has a complex political structure with two entities',
    'The country has a mix of Muslim, Orthodox, and Catholic populations',
    'Bosnian pyramid debate attracts archaeologists worldwide',
  ],
  foodCulture: 'Bosnian cuisine blends Ottoman, Mediterranean, and Central European influences. Grilled meats like ćevapi and pljeskavica are specialties. Burek pastry, ajvar pepper spread, and thick Bosnian coffee are staples. Meals reflect centuries of cultural exchange.',
  history: [
    {
      year: 'Medieval Period',
      title: 'Kingdom of Bosnia',
      description: 'Bosnia emerged as an independent medieval kingdom, developing its own Christian church and culture before Ottoman arrival.'
    },
    {
      year: '1463-1878',
      title: 'Ottoman Rule',
      description: 'The Ottoman Empire conquered Bosnia, bringing Islam, new architecture, and cultural influences that still shape the region.'
    },
    {
      year: '1878-1918',
      title: 'Austro-Hungarian Period',
      description: 'Bosnia came under Austro-Hungarian control, leading to modernization and the 1914 assassination that triggered WWI.'
    },
    {
      year: '1918-1992',
      title: 'Yugoslav Era',
      description: 'Bosnia became part of Yugoslavia, experiencing socialist modernization and hosting the 1984 Winter Olympics.'
    },
    {
      year: '1992-1995',
      title: 'Bosnian War',
      description: 'A devastating conflict followed Yugoslavia\'s breakup, resulting in massive casualties and the Dayton Peace Agreement.'
    },
    {
      year: '1995-Present',
      title: 'Post-War Recovery',
      description: 'Bosnia and Herzegovina emerged as an independent state, working toward reconciliation and European integration.'
    },
  ],
  innovations: [
    {
      name: 'Stari Most Bridge Engineering',
      year: '1566',
      description: 'Ottoman architect Mimar Hayruddin built the iconic arch bridge in Mostar, a masterpiece of medieval engineering destroyed in war but faithfully reconstructed.'
    },
    {
      name: 'Baščaršija Marketplace',
      year: '15th Century',
      description: 'Sarajevo\'s old bazaar became a model of Ottoman urban planning and multicultural commerce in the Balkans.'
    },
    {
      name: 'Bosnian Coffee Tradition',
      year: 'Traditional',
      description: 'Bosnia developed unique coffee preparation and serving customs, becoming an integral part of social life and hospitality.'
    },
    {
      name: 'Post-Conflict Reconciliation Models',
      year: '1990s-2000s',
      description: 'Bosnia\'s experience with post-war reconciliation and transitional justice has informed international peacebuilding efforts.'
    },
  ],
  mustVisit: [
    { name: 'Stari Most (Mostar)', description: 'Iconic 16th-century Ottoman bridge over the Neretva River, UNESCO World Heritage Site famous for bridge diving.' },
    { name: 'Baščaršija (Sarajevo)', description: 'Historic old bazaar district with Ottoman architecture, traditional crafts, and authentic Bosnian coffee houses.' },
    { name: 'Kravica Waterfalls', description: 'Stunning 25-meter tuff waterfalls on the Trebižat River, perfect for swimming in summer months.' },
    { name: 'Blagaj Tekke', description: 'Sufi monastery built into a cliff beside the Buna River spring, a serene spiritual site.' },
    { name: 'Jahorina & Bjelašnica', description: 'Olympic ski mountains with excellent slopes, remnants of the 1984 Winter Olympics facilities.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'May-September for warm weather; December-March for skiing.' },
    { item: 'Visa', description: 'Many nationalities can enter visa-free for up to 90 days.' },
    { item: 'Currency', description: 'Convertible Mark (BAM). Euros sometimes accepted but at poor rates.' },
    { item: 'Language', description: 'Bosnian, Croatian, Serbian are mutually intelligible. English spoken in tourist areas.' },
    { item: 'Safety', description: 'Generally safe for tourists. Avoid landmine-marked areas off main paths.' },
    { item: 'Cash', description: 'ATMs widely available in cities. Small towns prefer cash.' }
  ],
  mainDish: {
    id: 'bosnia-main',
    name: 'Ćevapi',
    description: 'Grilled minced meat sausages served with flatbread',
    cookingTime: 40,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Ground beef', amount: 500, unit: 'g' },
      { name: 'Ground lamb', amount: 300, unit: 'g' },
      { name: 'Garlic', amount: 4, unit: 'cloves' },
      { name: 'Paprika', amount: 1, unit: 'tsp' },
      { name: 'Somun bread', amount: 4, unit: 'pieces' },
      { name: 'Kajmak cream', amount: 200, unit: 'g' },
    ],
    steps: [
      'Mix ground meats with minced garlic and spices',
      'Form into small sausage shapes',
      'Refrigerate for 2 hours',
      'Grill over charcoal until cooked',
      'Serve in somun bread with kajmak and onions',
      'Add ajvar sauce on the side',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600',
  },
  dessert: {
    id: 'bosnia-dessert',
    name: 'Tufahije',
    description: 'Poached apples stuffed with walnuts, served with whipped cream',
    cookingTime: 60,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Large apples', amount: 6, unit: 'whole' },
      { name: 'Walnuts, ground', amount: 150, unit: 'g' },
      { name: 'Sugar', amount: 400, unit: 'g' },
      { name: 'Water', amount: 1000, unit: 'ml' },
      { name: 'Lemon juice', amount: 2, unit: 'tbsp' },
      { name: 'Whipping cream', amount: 200, unit: 'ml' },
      { name: 'Powdered sugar', amount: 50, unit: 'g' },
    ],
    steps: [
      'Peel apples and carefully core them, leaving bottom intact.',
      'Mix ground walnuts with 3 tbsp sugar.',
      'Stuff apples with walnut mixture.',
      'Boil remaining sugar with water and lemon juice.',
      'Place apples in syrup, simmer 20-25 minutes until tender.',
      'Let cool in syrup, refrigerate.',
      'Whip cream with powdered sugar.',
      'Serve chilled apples with syrup.',
      'Top with whipped cream.',
      'Optional: garnish with walnut pieces.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=600',
  },
  drinks: {
    alcoholic: 'Rakija (fruit brandy), Bosnian beer',
    nonAlcoholic: 'Bosnian coffee, Boza (fermented drink), Turkish tea',
  },
  music: [
    'Sevdah traditional songs',
    'Balkan folk music',
    'Bosnian pop',
  ],
  decorationIdeas: [
    'Blue and yellow flag colors',
    'Ottoman-inspired patterns',
    'Copper coffee sets',
    'Bridge imagery',
  ],
  conversationStarters: [
    'Have you tried Bosnian coffee?',
    'What do you know about Balkan cuisine?',
    'Do you enjoy grilled meats?',
  ],
  quiz: [
    {
      id: 'bosnia-q1',
      question: 'What is the capital of Bosnia and Herzegovina?',
      options: ['Zagreb', 'Sarajevo', 'Belgrade', 'Skopje'],
      correctAnswer: 1,
    },
    {
      id: 'bosnia-q2',
      question: 'Which famous bridge is a UNESCO World Heritage Site in Mostar?',
      options: ['New Bridge', 'Stari Most (Old Bridge)', 'Stone Bridge', 'Ottoman Bridge'],
      correctAnswer: 1,
    },
    {
      id: 'bosnia-q3',
      question: 'When did Sarajevo host the Winter Olympics?',
      options: ['1976', '1980', '1984', '1988'],
      correctAnswer: 2,
    },
    {
      id: 'bosnia-q4',
      question: 'What is the traditional Bosnian grilled meat called?',
      options: ['Kebab', 'Ćevapi', 'Souvlaki', 'Köfte'],
      correctAnswer: 1,
    },
    {
      id: 'bosnia-q5',
      question: 'How many official languages does Bosnia and Herzegovina have?',
      options: ['1', '2', '3', '4'],
      correctAnswer: 2,
    },
    {
      id: 'bosnia-q6',
      question: 'Which empire ruled Bosnia from 1463 to 1878?',
      options: ['Roman Empire', 'Ottoman Empire', 'Byzantine Empire', 'Habsburg Empire'],
      correctAnswer: 1,
    },
    {
      id: 'bosnia-q7',
      question: 'What historical event in Sarajevo triggered World War I?',
      options: ['A battle', 'An assassination', 'A treaty signing', 'A revolution'],
      correctAnswer: 1,
    },
    {
      id: 'bosnia-q8',
      question: 'What is the old bazaar district in Sarajevo called?',
      options: ['Grand Bazaar', 'Baščaršija', 'Souk', 'Merkato'],
      correctAnswer: 1,
    },
    {
      id: 'bosnia-q9',
      question: 'When did the Bosnian War end?',
      options: ['1992', '1995', '1998', '2001'],
      correctAnswer: 1,
    },
    {
      id: 'bosnia-q10',
      question: 'What is the currency of Bosnia and Herzegovina?',
      options: ['Euro', 'Dinar', 'Convertible Mark', 'Kuna'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 50, y: 44 },
};
