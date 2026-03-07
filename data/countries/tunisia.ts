import { Country } from '@/types';

export const tunisia: Country = {
  id: 'tunisia',
  name: 'Tunisia',
  code: 'TN',
  continent: 'Africa',
  flag: '🇹🇳',
  landscapeImage: 'https://images.unsplash.com/photo-1590071089561-25785860ae2d?w=800&q=80',
  description:
    'Tunisia is a North African country combining Arab and Berber cultures with Mediterranean influences. Known for ancient ruins, beautiful beaches, and diverse landscapes from the Sahara to the coast.',

  quickFacts: [
    { label: 'Capital', value: 'Tunis' },
    { label: 'Population', value: '12 million' },
    { label: 'Official Language', value: 'Arabic' },
    { label: 'Currency', value: 'Tunisian Dinar (TND)' },
    { label: 'Area', value: '163,610 km²' },
  ],

  facts: [
    "Tunisia was the site of ancient Carthage, once Rome's greatest rival",
    "The Star Wars films were partially filmed in Tunisia's desert",
    'Tunisia has seven UNESCO World Heritage Sites',
    "It is the smallest country in North Africa",
    'Tunisia was the birthplace of the Arab Spring in 2010',
    'Olive oil production is among the largest in the world',
    'The Sahara Desert covers the southern part of the country',
  ],

  foodCulture:
    'Tunisian cuisine blends Berber, Arab, Ottoman, and Mediterranean influences. Harissa (spicy chili paste), olive oil, seafood, couscous, and slow-cooked stews are central to everyday meals.',

  history: [
    {
      year: '814 BC',
      title: 'Founding of Carthage',
      description:
        'The Phoenicians founded Carthage, which became a major Mediterranean power and Rome’s greatest rival.',
    },
    {
      year: '146 BC',
      title: 'Roman Rule',
      description:
        'Carthage was destroyed by Rome and Tunisia became a key Roman province.',
    },
    {
      year: '7th Century',
      title: 'Arab Conquest',
      description:
        'Islam and Arabic culture spread across the region, shaping modern Tunisia.',
    },
    {
      year: '1881–1956',
      title: 'French Protectorate',
      description:
        'Tunisia was under French rule until independence in 1956.',
    },
    {
      year: '2010',
      title: 'Arab Spring',
      description:
        'Popular protests in Tunisia sparked democratic movements across the Arab world.',
    },
  ],

  innovations: [
    {
      name: 'Carthaginian Maritime Trade',
      year: 'Ancient Era',
      description:
        'Carthage was a naval and commercial powerhouse, pioneering Mediterranean trade routes.',
    },
    {
      name: 'Roman Infrastructure',
      year: '1st–3rd Century',
      description:
        'Tunisia preserves some of the best Roman roads, aqueducts, and amphitheaters in the world.',
    },
    {
      name: 'Olive Oil Production',
      year: 'Ancient–Modern',
      description:
        'Tunisia has been a major olive oil producer since Roman times and remains one today.',
    },
  ],

  mustVisit: [
    {
      name: 'Carthage',
      description:
        'Ruins of the ancient Phoenician and Roman city overlooking the Mediterranean.',
    },
    {
      name: 'Amphitheatre of El Djem',
      description:
        'One of the largest Roman amphitheaters ever built and a UNESCO World Heritage Site.',
    },
    {
      name: 'Sahara Desert (Douz & Tozeur)',
      description:
        'Gateway towns for desert adventures, oases, and Star Wars filming locations.',
    },
    {
      name: 'Sidi Bou Said',
      description:
        'Iconic blue-and-white coastal village near Tunis.',
    },
    {
      name: 'Kairouan',
      description:
        'One of Islam’s holiest cities and home to the Great Mosque of Kairouan.',
    },
  ],

  travelEssentials: [
    {
      item: 'Best time to visit',
      description:
        'Spring (April–May) and autumn (September–October) offer pleasant temperatures.',
    },
    {
      item: 'Dress code',
      description:
        'Modest clothing recommended, especially in religious or rural areas.',
    },
    {
      item: 'Money',
      description:
        'The Tunisian Dinar is not freely convertible; exchange locally.',
    },
    {
      item: 'Transport',
      description:
        'Louages (shared taxis) and trains are common and affordable.',
    },
    {
      item: 'Food tip',
      description:
        'Harissa is often spicy—ask for “little” or “no harissa” if sensitive to heat.',
    },
  ],

  mainDish: {
    id: 'tunisia-main',
    name: 'Couscous Tunisien',
    description:
      'Traditional Tunisian couscous with lamb, vegetables, chickpeas, and harissa',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Lamb chunks', amount: 600, unit: 'g' },
      { name: 'Couscous semolina', amount: 500, unit: 'g' },
      { name: 'Cooked chickpeas', amount: 200, unit: 'g' },
      { name: 'Carrots', amount: 3, unit: 'whole' },
      { name: 'Zucchini', amount: 2, unit: 'whole' },
      { name: 'Turnips', amount: 2, unit: 'whole' },
      { name: 'Harissa paste', amount: 2, unit: 'tbsp' },
      { name: 'Tomato paste', amount: 2, unit: 'tbsp' },
      { name: 'Cumin', amount: 1, unit: 'tsp' },
      { name: 'Olive oil', amount: 3, unit: 'tbsp' },
    ],
    steps: [
      'Brown lamb in olive oil with cumin and salt',
      'Add water, tomato paste, and harissa; simmer 30 minutes',
      'Add chickpeas and vegetables and cook until tender',
      'Prepare couscous according to package instructions',
      'Steam couscous briefly over the stew',
      'Fluff couscous with olive oil',
      'Serve couscous topped with meat and vegetables',
      'Ladle broth over and add extra harissa if desired',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1558303035-8d0d4c0da71b?w=850&q=80',
  },

  dessert: {
    id: 'tunisia-dessert',
    name: 'Bambalouni',
    description:
      'Traditional Tunisian fried doughnuts, crispy outside and fluffy inside, often eaten hot with sugar.',
    cookingTime: 40,
    servings: 10,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'All-purpose flour', amount: 500, unit: 'g' },
      { name: 'Dry yeast', amount: 7, unit: 'g' },
      { name: 'Sugar', amount: 50, unit: 'g' },
      { name: 'Salt', amount: 1, unit: 'tsp' },
      { name: 'Warm water', amount: 300, unit: 'ml' },
      { name: 'Vegetable oil (for frying)', amount: 600, unit: 'ml' },
      { name: 'Powdered sugar (for serving)', amount: 50, unit: 'g' },
    ],
    steps: [
      'Mix yeast, sugar, and warm water; rest 10 minutes',
      'Add flour and salt and mix into sticky dough',
      'Cover and let rise 1 hour until doubled',
      'Heat oil to 180°C',
      'Stretch dough into rings with floured hands',
      'Fry until golden on both sides',
      'Drain on paper towels',
      'Dust generously with powdered sugar',
      'Serve hot',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=900&q=80',
  },

  drinks: {
    alcoholic: 'Boukha (fig brandy), Tunisian wine',
    nonAlcoholic: 'Mint tea, Turkish coffee, Lemon-mint juice',
  },

  music: [
    'Tunisian Malouf',
    'Traditional Mezwed',
    'Saber Rebaï',
    'Latifa classics',
  ],

  decorationIdeas: [
    'Blue and white Mediterranean colors',
    'Ceramic tiles and pottery',
    'Brass lanterns',
    'Woven baskets',
    'Olive branches',
  ],

  conversationStarters: [
    'Have you ever visited ancient ruins like Carthage?',
    'Do you enjoy spicy food like harissa?',
    'Would you visit the Sahara Desert?',
    'Have you watched Star Wars filmed in real desert locations?',
  ],

  quiz: [
    {
      id: 'tunisia-q1',
      question: 'What is the capital of Tunisia?',
      options: ['Sfax', 'Tunis', 'Sousse', 'Carthage'],
      correctAnswer: 1,
    },
    {
      id: 'tunisia-q2',
      question: 'Which ancient civilization was based in Tunisia?',
      options: ['Phoenicians/Carthage', 'Aztecs', 'Vikings', 'Incas'],
      correctAnswer: 0,
    },
    {
      id: 'tunisia-q3',
      question: 'What is harissa?',
      options: ['A dance', 'A spicy chili paste', 'A musical instrument', 'A type of bread'],
      correctAnswer: 1,
    },
    {
      id: 'tunisia-q4',
      question: 'Which famous film series used Tunisia’s desert locations?',
      options: ['Star Wars', 'Harry Potter', 'The Lord of the Rings', 'Pirates of the Caribbean'],
      correctAnswer: 0,
    },
    {
      id: 'tunisia-q5',
      question: 'Ancient Carthage was a rival of which empire?',
      options: ['Roman Empire', 'Mongol Empire', 'British Empire', 'Ottoman Empire'],
      correctAnswer: 0,
    },
    {
      id: 'tunisia-q6',
      question: 'Which staple dish is especially important in Tunisia?',
      options: ['Couscous', 'Sushi', 'Pierogi', 'Tacos'],
      correctAnswer: 0,
    },
    {
      id: 'tunisia-q7',
      question: 'Tunisia is located on which sea?',
      options: ['Mediterranean Sea', 'Baltic Sea', 'Black Sea', 'Red Sea'],
      correctAnswer: 0,
    },
    {
      id: 'tunisia-q8',
      question: 'Tunisia is the smallest country in which region?',
      options: ['North Africa', 'West Africa', 'Southern Africa', 'East Africa'],
      correctAnswer: 0,
    },
    {
      id: 'tunisia-q9',
      question: 'Which event began in Tunisia in 2010?',
      options: ['Arab Spring', 'Industrial Revolution', 'French Revolution', 'Space Race'],
      correctAnswer: 0,
    },
    {
      id: 'tunisia-q10',
      question: 'What is a popular Tunisian fried dessert?',
      options: ['Baklava', 'Bambalouni', 'Churros', 'Loukoumades'],
      correctAnswer: 1,
    },
  ],

  coordinates: { x: 49, y: 36 },
};
