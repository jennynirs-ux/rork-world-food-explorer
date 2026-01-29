import { Country } from '@/types';

export const montenegro: Country = {
  id: 'montenegro',
  name: 'Montenegro',
  code: 'ME',
  continent: 'Europe',
  flag: '🇲🇪',
  landscapeImage: 'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800',
  description: 'Montenegro is a Balkan country on the Adriatic coast, known for dramatic mountains, medieval villages, and stunning bay of Kotor.',
  quickFacts: [
    { label: 'Capital', value: 'Podgorica' },
    { label: 'Population', value: '620,000' },
    { label: 'Official Language', value: 'Montenegrin' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '13,812 km²' },
  ],
  facts: [
    'Gained independence from Serbia in 2006',
    'The Bay of Kotor is a UNESCO World Heritage Site',
    'Name means "Black Mountain"',
    'Has some of Europe\'s deepest canyons',
  ],
  foodCulture: 'Montenegrin cuisine blends Mediterranean and Balkan influences with fresh seafood, grilled meats, and cheese.',
  history: [
    {
      year: '1042',
      title: 'Medieval Kingdom',
      description: 'The region emerged as a distinct territory in medieval times.'
    },
    {
      year: '1918',
      title: 'Kingdom of Serbs, Croats and Slovenes',
      description: 'Montenegro joined to form Yugoslavia.'
    },
    {
      year: '2006',
      title: 'Independence',
      description: 'Montenegro peacefully gained independence from Serbia.'
    },
  ],
  innovations: [
    {
      name: 'Njeguški Pršut',
      year: 'Traditional',
      description: 'Unique dry-cured ham made using traditional methods in mountain villages.',
    },
    {
      name: 'Sustainable Tourism',
      year: 'Modern',
      description: 'Developing eco-tourism while preserving natural beauty.',
    },
  ],
  mustVisit: [
    { name: 'Bay of Kotor', description: 'UNESCO World Heritage Site with dramatic fjord-like bay and medieval towns.' },
    { name: 'Durmitor National Park', description: 'UNESCO site with mountains, canyons, and glacial lakes.' },
    { name: 'Budva Old Town', description: 'Ancient walled city on the Adriatic coast.' },
    { name: 'Sveti Stefan', description: 'Iconic island resort connected by causeway.' },
    { name: 'Lovćen National Park', description: 'Mountain park with Njegoš Mausoleum offering panoramic views.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'May-September for warm weather; July-August for beach season.' },
    { item: 'Visa', description: 'Visa-free for many nationalities for 90 days.' },
    { item: 'Currency', description: 'Euro used though not in EU.' },
    { item: 'Transportation', description: 'Buses connect cities; car rental good for exploring.' },
  ],
  dessert: {
    id: 'montenegro-dessert',
    name: 'Priganice',
    description: 'Fried dough balls served with honey and cheese',
    cookingTime: 45,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Flour', amount: 500, unit: 'g' },
      { name: 'Yogurt', amount: 200, unit: 'ml' },
      { name: 'Eggs', amount: 2, unit: 'large' },
      { name: 'Yeast', amount: 7, unit: 'g' },
      { name: 'Sugar', amount: 2, unit: 'tbsp' },
      { name: 'Oil for frying', amount: 500, unit: 'ml' },
      { name: 'Honey', amount: 200, unit: 'g' },
      { name: 'Cheese (kajmak)', amount: 200, unit: 'g' },
    ],
    steps: [
      'Activate yeast in warm water with sugar',
      'Mix flour, eggs, yogurt, and yeast',
      'Knead into soft dough, let rise 1 hour',
      'Heat oil to 350°F',
      'Drop spoonfuls of dough into hot oil',
      'Fry until golden and puffed',
      'Drain and serve hot with honey and cheese',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1626197881825-9e0feef5ad90?w=600',
  },
  mainDish: {
    id: 'montenegro-main',
    name: 'Njeguški Pršut',
    description: 'Smoked ham from Njeguši village',
    cookingTime: 180,
    servings: 8,
    dietType: 'meat',
    ingredients: [
      { name: 'Pork leg', amount: 5, unit: 'kg' },
      { name: 'Sea salt', amount: 500, unit: 'g' },
      { name: 'Bay leaves', amount: 10, unit: 'whole' },
      { name: 'Black pepper', amount: 50, unit: 'g' },
    ],
    steps: [
      'Rub pork with salt and spices',
      'Hang in cool place for 3 weeks',
      'Cold smoke with beech wood',
      'Age for several months',
      'Slice thinly to serve',
      'Pair with cheese and olives',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600',
  },
  drinks: {
    alcoholic: 'Rakija, Vranac wine, Nikšićko beer',
    nonAlcoholic: 'Turkish coffee, Mountain spring water',
  },
  music: [
    'Traditional folk songs',
    'Gusle epic poetry',
    'Balkan beats',
  ],
  decorationIdeas: [
    'Red and gold flag colors',
    'Adriatic coastal themes',
    'Mountain landscapes',
    'Medieval architecture',
  ],
  conversationStarters: [
    'Have you visited the Bay of Kotor?',
    'What do you know about Balkan cuisine?',
  ],
  quiz: [
    {
      id: 'montenegro-q1',
      question: 'What does Montenegro mean?',
      options: ['Black Sea', 'Black Mountain', 'Red Mountain', 'White Sea'],
      correctAnswer: 1,
    },
    {
      id: 'montenegro-q2',
      question: 'What is the capital of Montenegro?',
      options: ['Podgorica', 'Kotor', 'Budva', 'Cetinje'],
      correctAnswer: 0,
    },
    {
      id: 'montenegro-q3',
      question: 'In which year did Montenegro gain independence from Serbia?',
      options: ['2000', '2003', '2006', '2010'],
      correctAnswer: 2,
    },
    {
      id: 'montenegro-q4',
      question: 'What UNESCO World Heritage Site is Montenegro famous for?',
      options: ['Dubrovnik', 'Bay of Kotor', 'Plitvice Lakes', 'Split'],
      correctAnswer: 1,
    },
    {
      id: 'montenegro-q5',
      question: 'What currency does Montenegro use?',
      options: ['Dinar', 'Kuna', 'Euro', 'Lev'],
      correctAnswer: 2,
    },
    {
      id: 'montenegro-q6',
      question: 'What is Montenegro\'s traditional smoked ham called?',
      options: ['Prosciutto', 'Jamón', 'Njeguški Pršut', 'Speck'],
      correctAnswer: 2,
    },
    {
      id: 'montenegro-q7',
      question: 'What is the official language of Montenegro?',
      options: ['Serbian', 'Croatian', 'Montenegrin', 'Bosnian'],
      correctAnswer: 2,
    },
    {
      id: 'montenegro-q8',
      question: 'Which iconic island resort is connected by a causeway?',
      options: ['Sveti Stefan', 'Lokrum', 'Brač', 'Hvar'],
      correctAnswer: 0,
    },
    {
      id: 'montenegro-q9',
      question: 'What type of alcoholic drink is Rakija?',
      options: ['Wine', 'Beer', 'Brandy/Spirit', 'Liqueur'],
      correctAnswer: 2,
    },
    {
      id: 'montenegro-q10',
      question: 'Which sea does Montenegro border?',
      options: ['Black Sea', 'Adriatic Sea', 'Aegean Sea', 'Ionian Sea'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 50, y: 43 },
};
