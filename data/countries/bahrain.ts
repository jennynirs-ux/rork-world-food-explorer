import { Country } from '@/types';

export const bahrain: Country = {
  id: 'bahrain',
  name: 'Bahrain',
  code: 'BH',
  continent: 'Asia',
  flag: '🇧🇭',
  landscapeImage: 'https://images.unsplash.com/photo-1590320011151-88b21aac7bb7?w=800&q=80',
  description: 'Bahrain is an island nation in the Persian Gulf, known for modern architecture, pearl diving heritage, and the Formula 1 Grand Prix.',
  quickFacts: [
    { label: 'Capital', value: 'Manama' },
    { label: 'Population', value: '1.7 million' },
    { label: 'Official Language', value: 'Arabic' },
    { label: 'Currency', value: 'Bahraini Dinar' },
    { label: 'Area', value: '765 km²' },
  ],
  facts: [
    'Bahrain was once the center of the ancient Dilmun civilization',
    'The country has been a pearl diving center for thousands of years',
    'Bahrain hosts the Formula 1 Grand Prix',
    'The Tree of Life is a 400-year-old mesquite tree in the desert',
    'Bahrain was the first Gulf state to discover oil in 1932',
    'The Bahrain Fort is a UNESCO World Heritage Site',
    'Bahrain means "two seas" in Arabic',
    'The country consists of 33 natural islands',
  ],
  foodCulture: 'Bahraini cuisine blends Arab, Persian, and Indian influences. Fresh seafood, rice dishes, and dates are staples. Meals emphasize hospitality, with generous portions and communal dining traditions.',
  history: [
    {
      year: '3000 BC',
      title: 'Dilmun Civilization',
      description: 'Bahrain was the center of the ancient Dilmun trading civilization, a prosperous hub connecting Mesopotamia with the Indus Valley.'
    },
    {
      year: '1521',
      title: 'Portuguese Occupation',
      description: 'Portugal captured Bahrain to control trade routes in the Persian Gulf region.'
    },
    {
      year: '1783',
      title: 'Al Khalifa Dynasty',
      description: 'The Al Khalifa family captured Bahrain from the Persians, establishing the ruling dynasty that continues today.'
    },
    {
      year: '1932',
      title: 'Oil Discovery',
      description: 'Bahrain became the first Gulf state to discover oil, transforming its economy from pearls to petroleum.'
    },
    {
      year: '1971',
      title: 'Independence',
      description: 'Bahrain gained independence from British protection and became a sovereign state.'
    },
    {
      year: '2002',
      title: 'Kingdom Declared',
      description: 'Bahrain transformed from an emirate to a kingdom under King Hamad bin Isa Al Khalifa.'
    },
  ],
  innovations: [
    {
      name: 'Pearl Diving Techniques',
      year: 'Ancient',
      description: 'Bahrain developed sophisticated pearl diving methods and quality grading systems that influenced the global pearl trade for millennia.'
    },
    {
      name: 'Gulf Banking Hub',
      year: '1975',
      description: 'Established the first Islamic bank in the region and pioneered Islamic finance principles, becoming the financial center of the Gulf.'
    },
    {
      name: 'Formula 1 Desert Circuit',
      year: '2004',
      description: 'Built the first Formula 1 circuit in the Middle East, pioneering motorsport infrastructure in desert conditions.'
    },
    {
      name: 'Offshore Oil Refining',
      year: '1930s',
      description: 'Pioneered oil refining techniques in the Gulf region, establishing models for petroleum processing across the Middle East.'
    },
  ],
  mustVisit: [
    { name: 'Bahrain Fort (Qal\'at al-Bahrain)', description: 'UNESCO World Heritage Site, ancient fort revealing 4,000 years of history from the Dilmun civilization to Portuguese occupation.' },
    { name: 'Tree of Life', description: 'Mysterious 400-year-old mesquite tree thriving alone in the desert with no apparent water source, symbol of resilience.' },
    { name: 'Bahrain International Circuit', description: 'World-class Formula 1 race track hosting the Bahrain Grand Prix, offering driving experiences and tours.' },
    { name: 'Manama Souq', description: 'Traditional market showcasing Bahraini culture with gold, spices, textiles, and authentic local atmosphere.' },
    { name: 'Al Areen Wildlife Park', description: 'Desert and wetland sanctuary protecting Arabian wildlife including oryx, gazelles, and rare bird species.' }
  ],
  travelEssentials: [
    { item: 'Visa', description: 'eVisa available for most nationalities. Visa on arrival for many countries.' },
    { item: 'Best time to visit', description: 'November to March for mild weather. Avoid summer (May-September) with extreme heat.' },
    { item: 'Transportation', description: 'Rental cars recommended. Taxis and ride-sharing apps available. Connected to Saudi Arabia by causeway.' },
    { item: 'Language', description: 'Arabic is official. English widely spoken in business and tourism sectors.' },
    { item: 'Currency', description: 'Bahraini Dinar (BHD) - one of the highest-valued currencies. Credit cards widely accepted.' },
    { item: 'Dress code', description: 'Modest dress recommended. Conservative attire required for religious sites.' },
  ],
  mainDish: {
    id: 'bahrain-main',
    name: 'Machboos',
    description: 'Spiced rice with chicken or lamb, Bahraini national dish',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken or lamb', amount: 1, unit: 'kg' },
      { name: 'Basmati rice', amount: 500, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Baharat spice mix', amount: 2, unit: 'tbsp' },
      { name: 'Dried limes', amount: 3, unit: 'whole' },
    ],
    steps: [
      'Brown meat with onions',
      'Add spices, tomatoes, and water',
      'Simmer until meat is tender',
      'Cook rice separately with dried limes',
      'Layer rice over meat and steam together',
      'Serve with fried onions and nuts on top',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600',
  },
  dessert: {
    id: 'bahrain-dessert',
    name: 'Halwa Bahraini',
    description: 'Traditional Bahraini sweet made with cornstarch, saffron, cardamom, and rose water',
    cookingTime: 45,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Cornstarch', amount: 200, unit: 'g' },
      { name: 'Sugar', amount: 300, unit: 'g' },
      { name: 'Vegetable oil', amount: 150, unit: 'ml' },
      { name: 'Water', amount: 600, unit: 'ml' },
      { name: 'Saffron threads', amount: 1, unit: 'tsp' },
      { name: 'Cardamom powder', amount: 1, unit: 'tsp' },
      { name: 'Rose water', amount: 2, unit: 'tbsp' },
      { name: 'Pistachios, chopped', amount: 50, unit: 'g' },
      { name: 'Almonds, slivered', amount: 50, unit: 'g' },
    ],
    steps: [
      'Steep saffron in 2 tbsp warm water for 10 minutes.',
      'Mix cornstarch with 200ml cold water until smooth.',
      'In a heavy pot, bring remaining water and sugar to boil.',
      'Add oil and saffron water, stir well.',
      'Slowly add cornstarch mixture, stirring constantly.',
      'Cook over low heat, stirring continuously for 25-30 minutes.',
      'Add cardamom and rose water, stir for 5 more minutes.',
      'Pour into greased dish, smooth top.',
      'Garnish with pistachios and almonds.',
      'Cool completely before cutting into diamond shapes.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1606313564016-c4f48f2f6e8c?w=600',
  },
  drinks: {
    alcoholic: 'Limited availability',
    nonAlcoholic: 'Arabic coffee, Cardamom tea, Fresh juice',
  },
  music: [
    'Traditional Fidjeri sea music',
    'Arabic pop',
    'Pearl diving songs',
  ],
  decorationIdeas: [
    'Red and white flag colors',
    'Pearl diving heritage elements',
    'Modern architecture imagery',
    'Arabian patterns',
  ],
  conversationStarters: [
    'Have you been to a Formula 1 race?',
    'What do you know about pearl diving?',
    'Do you enjoy Middle Eastern cuisine?',
  ],
  quiz: [
    {
      id: 'bahrain-q1',
      question: 'What is the capital of Bahrain?',
      options: ['Dubai', 'Manama', 'Doha', 'Riyadh'],
      correctAnswer: 1,
    },
    {
      id: 'bahrain-q2',
      question: 'What does "Bahrain" mean in Arabic?',
      options: ['Two seas', 'Pearl island', 'Desert land', 'Trading port'],
      correctAnswer: 0,
    },
    {
      id: 'bahrain-q3',
      question: 'In which year did Bahrain discover oil?',
      options: ['1922', '1932', '1942', '1952'],
      correctAnswer: 1,
    },
    {
      id: 'bahrain-q4',
      question: 'What is the national dish of Bahrain?',
      options: ['Shawarma', 'Hummus', 'Machboos', 'Falafel'],
      correctAnswer: 2,
    },
    {
      id: 'bahrain-q5',
      question: 'What ancient civilization was centered in Bahrain?',
      options: ['Sumerian', 'Dilmun', 'Phoenician', 'Babylonian'],
      correctAnswer: 1,
    },
    {
      id: 'bahrain-q6',
      question: 'When did Bahrain gain independence?',
      options: ['1961', '1966', '1971', '1976'],
      correctAnswer: 2,
    },
    {
      id: 'bahrain-q7',
      question: 'What is Bahrain historically famous for producing?',
      options: ['Silk', 'Pearls', 'Spices', 'Pottery'],
      correctAnswer: 1,
    },
    {
      id: 'bahrain-q8',
      question: 'When did Bahrain host its first Formula 1 Grand Prix?',
      options: ['2000', '2004', '2008', '2012'],
      correctAnswer: 1,
    },
    {
      id: 'bahrain-q9',
      question: 'What is the mysterious tree surviving in the Bahraini desert called?',
      options: ['Desert Oak', 'Tree of Life', 'Miracle Tree', 'Sacred Mesquite'],
      correctAnswer: 1,
    },
    {
      id: 'bahrain-q10',
      question: 'When did Bahrain become a kingdom?',
      options: ['1971', '1990', '2002', '2010'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 59, y: 35 },
};
