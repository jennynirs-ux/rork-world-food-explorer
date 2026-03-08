import { Country } from '@/types';

export const turkey: Country = {
  id: 'turkey',
  name: 'Turkey',
  code: 'TR',
  continent: 'Asia/Europe',
  flag: '🇹🇷',
  landscapeImage: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80',
  description:
    'Turkey is a transcontinental country bridging Europe and Asia, with a rich history spanning ancient civilizations. Known for its Byzantine and Ottoman heritage, stunning landscapes, and delicious cuisine.',
  quickFacts: [
    { label: 'Capital', value: 'Ankara' },
    { label: 'Population', value: '85 million' },
    { label: 'Official Language', value: 'Turkish' },
    { label: 'Currency', value: 'Turkish Lira (₺)' },
    { label: 'Area', value: '783,562 km²' },
  ],
  facts: [
    'Istanbul is the only city in the world located on two continents',
    'Turkey is home to the ancient city of Troy',
    'Turkish coffee fortune telling is a cultural tradition',
    'The country has 18 UNESCO World Heritage Sites',
    'Tulips originally came from Turkey, not the Netherlands',
    'Santa Claus was born in Turkey (ancient Myra)',
    'The Grand Bazaar in Istanbul is one of the oldest covered markets in the world',
    "Turkey is the world's largest producer of hazelnuts",
  ],
  foodCulture:
    'Turkish cuisine is one of the world’s most diverse, influenced by Ottoman palace kitchens and regional traditions. Mezze, kebabs, and baklava are iconic. Meals are social affairs, often accompanied by Turkish tea or coffee.',

  history: [
    {
      year: '330 AD',
      title: 'Constantinople Founded',
      description:
        'Emperor Constantine established Constantinople (modern Istanbul) as the capital of the Byzantine Empire.',
    },
    {
      year: '1299',
      title: 'Ottoman Empire Begins',
      description:
        'Osman I founded the Ottoman Empire, which grew to control vast territories across three continents.',
    },
    {
      year: '1453',
      title: 'Fall of Constantinople',
      description:
        'Ottoman Sultan Mehmed II conquered Constantinople, ending the Byzantine Empire.',
    },
    {
      year: '1923',
      title: 'Republic Founded',
      description:
        'Mustafa Kemal Atatürk established the modern Republic of Turkey.',
    },
  ],

  innovations: [
    {
      name: 'Architectural Mastery (Sinan)',
      year: '16th Century',
      description:
        'Ottoman architect Mimar Sinan shaped Istanbul’s skyline and influenced global mosque architecture with landmark designs.',
    },
    {
      name: 'Iznik Ceramics',
      year: '15th–17th Century',
      description:
        'Iznik tilework became famous for vivid colors and intricate patterns, used in mosques and palaces across the empire.',
    },
    {
      name: 'Early Urban Megaprojects',
      year: 'Byzantine–Ottoman Era',
      description:
        'Monumental cisterns, bridges, and aqueducts (like those around Istanbul) supported dense cities with advanced water systems.',
    },
    {
      name: 'Hazelnut & Agricultural Production',
      year: 'Modern Era',
      description:
        'Turkey developed large-scale, globally important hazelnut cultivation and supply chains, dominating world production.',
    },
  ],

  mustVisit: [
    {
      name: 'Istanbul (Hagia Sophia & Blue Mosque)',
      description:
        'A city spanning Europe and Asia with iconic Byzantine and Ottoman monuments and vibrant bazaars.',
    },
    {
      name: 'Cappadocia',
      description:
        'Fairy chimneys, cave churches, and sunrise hot-air balloons over dramatic volcanic landscapes.',
    },
    {
      name: 'Ephesus',
      description:
        'One of the best-preserved ancient cities in the Mediterranean world, famous for Roman ruins and grand streets.',
    },
    {
      name: 'Pamukkale & Hierapolis',
      description:
        'White travertine terraces and nearby ancient ruins, a unique mix of nature and history.',
    },
    {
      name: 'Antalya & the Turquoise Coast',
      description:
        'Mediterranean beaches, coastal hikes, and historic harbor towns with crystal-clear water.',
    },
  ],

  travelEssentials: [
    {
      item: 'Best time to visit',
      description:
        'Spring (April–May) and autumn (September–October) are ideal for cities and coast; winter is great for skiing and hammams.',
    },
    {
      item: 'Getting around',
      description:
        'Domestic flights are common; intercity buses are extensive; Istanbul public transport is efficient (metro, tram, ferries).',
    },
    {
      item: 'Cash & cards',
      description:
        'Cards are widely accepted in cities; keep cash for markets, taxis, and smaller towns.',
    },
    {
      item: 'Etiquette',
      description:
        'Dress modestly in mosques, remove shoes, and be respectful during calls to prayer and religious holidays.',
    },
    {
      item: 'Food tip',
      description:
        'Try regional specialties: Gaziantep for baklava and pistachios, the Black Sea for anchovy dishes, and Aegean for olive-oil mezze.',
    },
  ],

  mainDish: {
    id: 'turkey-main',
    name: 'İskender Kebab',
    description:
      'Thinly sliced döner kebab over pita bread, topped with tomato sauce, melted butter, and yogurt',
    cookingTime: 90,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Lamb or beef', amount: 800, unit: 'g' },
      { name: 'Yogurt', amount: 400, unit: 'g' },
      { name: 'Pita bread', amount: 4, unit: 'pieces' },
      { name: 'Tomatoes', amount: 4, unit: 'large' },
      { name: 'Butter', amount: 100, unit: 'g' },
      { name: 'Garlic', amount: 3, unit: 'cloves' },
      { name: 'Paprika', amount: 2, unit: 'tsp' },
      { name: 'Cumin', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Marinate meat with spices and garlic for 2 hours',
      'Grill or pan-fry meat and slice thinly',
      'Cook blended tomatoes with garlic into a thick sauce',
      'Cut pita bread into pieces and place on plates',
      'Top bread with meat and tomato sauce',
      'Melt butter with paprika and drizzle on top',
      'Serve with yogurt on the side',
    ],
    imageUrl: 'https://images.pexels.com/photos/36295529/pexels-photo-36295529.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },

  dessert: {
    id: 'turkey-dessert',
    name: 'Baklava',
    description:
      'Layers of flaky phyllo pastry filled with nuts and soaked in sweet syrup',
    cookingTime: 75,
    servings: 24,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Phyllo dough', amount: 500, unit: 'g' },
      { name: 'Pistachios or walnuts', amount: 400, unit: 'g' },
      { name: 'Butter', amount: 250, unit: 'g' },
      { name: 'Sugar', amount: 300, unit: 'g' },
      { name: 'Water', amount: 250, unit: 'ml' },
      { name: 'Honey', amount: 100, unit: 'g' },
      { name: 'Lemon juice', amount: 2, unit: 'tbsp' },
    ],
    steps: [
      'Layer phyllo sheets with butter in a baking tray',
      'Add chopped nuts between layers',
      'Cut into diamonds before baking',
      'Bake at 180°C for 45 minutes',
      'Boil sugar, water, honey, and lemon into syrup',
      'Pour hot syrup over baked baklava',
      'Let cool fully before serving',
    ],
    imageUrl: 'https://images.pexels.com/photos/31472815/pexels-photo-31472815.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },

  drinks: {
    alcoholic: 'Rakı, Efes beer, Turkish wine',
    nonAlcoholic: 'Turkish tea (çay), Turkish coffee, Ayran (yogurt drink)',
  },

  music: [
    'Traditional Turkish folk music',
    'Ottoman classical music',
    'Tarkan (Turkish pop)',
    'Whirling Dervish ceremonial music',
  ],

  decorationIdeas: [
    'Turkish lanterns',
    'Red and white flag colors',
    'İznik tiles',
    'Turkish carpets',
    'Nazar (evil eye) charms',
  ],

  conversationStarters: [
    'Have you visited Istanbul?',
    'What is your favorite Turkish dish?',
    'Would you try a Turkish hamam?',
    'Have you seen Cappadocia’s balloons?',
  ],

  quiz: [
    {
      id: 'turkey-q1',
      question: 'What is the capital of Turkey?',
      options: ['Istanbul', 'Ankara', 'Izmir', 'Antalya'],
      correctAnswer: 1,
    },
    {
      id: 'turkey-q2',
      question: 'Which city lies on two continents?',
      options: ['Ankara', 'Athens', 'Istanbul', 'Rome'],
      correctAnswer: 2,
    },
    {
      id: 'turkey-q3',
      question: 'What ancient city is linked to the Trojan War?',
      options: ['Ephesus', 'Pergamon', 'Troy', 'Byzantium'],
      correctAnswer: 2,
    },
    {
      id: 'turkey-q4',
      question: 'What is the traditional anise-flavored drink?',
      options: ['Ouzo', 'Rakı', 'Arak', 'Pastis'],
      correctAnswer: 1,
    },
    {
      id: 'turkey-q5',
      question: 'Which flower originated in Turkey?',
      options: ['Rose', 'Tulip', 'Lily', 'Orchid'],
      correctAnswer: 1,
    },
    {
      id: 'turkey-q6',
      question: 'What empire ruled Turkey before the republic?',
      options: ['Roman', 'Ottoman', 'Persian', 'Mongol'],
      correctAnswer: 1,
    },
    {
      id: 'turkey-q7',
      question: 'Who founded modern Turkey?',
      options: ['Mehmed II', 'Osman I', 'Atatürk', 'Suleiman'],
      correctAnswer: 2,
    },
    {
      id: 'turkey-q8',
      question: 'What is baklava mainly made of?',
      options: ['Bread and honey', 'Rice and milk', 'Phyllo and nuts', 'Semolina and syrup'],
      correctAnswer: 2,
    },
    {
      id: 'turkey-q9',
      question: 'Which market is one of the oldest in the world?',
      options: ['Spice Bazaar', 'Grand Bazaar', 'Souq Waqif', 'Khan el-Khalili'],
      correctAnswer: 1,
    },
    {
      id: 'turkey-q10',
      question: 'Santa Claus is associated with which place in Turkey?',
      options: ['Istanbul', 'Antalya', 'Myra', 'Ankara'],
      correctAnswer: 2,
    },
  ],

  coordinates: { x: 54, y: 42 },
};
