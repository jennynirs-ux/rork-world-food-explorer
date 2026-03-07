import { Country } from '@/types';

export const saudiArabia: Country = {
  id: 'saudi-arabia',
  name: 'Saudi Arabia',
  code: 'SA',
  continent: 'Asia',
  flag: '🇸🇦',
  landscapeImage: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=800&q=80',
  description:
    'Saudi Arabia is the birthplace of Islam and home to Makkah and Madinah. It is known for vast desert landscapes, Red Sea coastlines, major oil resources, and rapid modernization under Vision 2030.',
  quickFacts: [
    { label: 'Capital', value: 'Riyadh' },
    { label: 'Population', value: '35 million' },
    { label: 'Official Language', value: 'Arabic' },
    { label: 'Currency', value: 'Saudi Riyal (SAR)' },
    { label: 'Area', value: '2,149,690 km²' },
  ],
  facts: [
    'Home to Islam\'s two holiest cities: Makkah (Mecca) and Madinah (Medina)',
    'Contains one of the world\'s largest sand deserts, including parts of the Rub\' al Khali (Empty Quarter)',
    'The Red Sea coastline is known for coral reefs and diving',
    'Riyadh is the political and administrative capital, while Jeddah is a major coastal gateway city',
    'Dates are a staple food and a symbol of hospitality',
    'Arabic coffee (qahwa) is traditionally served with dates',
    'The country has no permanent rivers; water comes from aquifers, desalination, and seasonal wadis',
    'Vision 2030 aims to diversify the economy beyond oil',
  ],
  foodCulture:
    'Saudi cuisine features fragrant rice dishes, grilled meats, wheat-based breads, dates, and aromatic spices like cardamom, cinnamon, cloves, and black lime. Hospitality is central, with coffee, tea, and shared platters served to guests.',

  history: [
    {
      year: '610',
      title: 'Beginning of Islam',
      description:
        'The Prophet Muhammad began receiving revelations in Makkah, marking the start of Islam.',
    },
    {
      year: '622',
      title: 'Hijrah to Madinah',
      description:
        'The migration to Madinah became a foundational moment in Islamic history and the start of the Islamic calendar.',
    },
    {
      year: '1744',
      title: 'Alliance in Diriyah',
      description:
        'A political-religious alliance in Diriyah helped shape the rise of the Saudi state in central Arabia.',
    },
    {
      year: '1932',
      title: 'Kingdom Founded',
      description:
        'The modern Kingdom of Saudi Arabia was unified and proclaimed under King Abdulaziz.',
    },
    {
      year: '1938',
      title: 'Oil Discovery',
      description:
        'Commercial oil was discovered, transforming the economy and accelerating modern development.',
    },
    {
      year: '2016',
      title: 'Vision 2030',
      description:
        'A national program launched to diversify the economy, expand tourism, and modernize key sectors.',
    },
  ],

  innovations: [
    {
      name: 'Large-Scale Desalination',
      year: 'Modern',
      description:
        'Saudi Arabia is a global leader in desalination capacity, supplying fresh water to major cities through coastal plants.',
    },
    {
      name: 'Hajj and Umrah Logistics',
      year: 'Modern',
      description:
        'Advanced transport, crowd management, and services support millions of pilgrims visiting holy sites annually.',
    },
    {
      name: 'Mega-Projects and Smart City Planning',
      year: 'Modern',
      description:
        'Major development programs focus on urban innovation, tourism infrastructure, and new economic zones.',
    },
  ],

  mustVisit: [
    {
      name: 'AlUla and Hegra (Madain Salih)',
      description:
        'Spectacular desert landscapes and ancient Nabataean tombs, with Hegra recognized as a UNESCO World Heritage site.',
    },
    {
      name: 'Diriyah (At-Turaif District)',
      description:
        'Historic mud-brick architecture and the roots of the Saudi state, near Riyadh.',
    },
    {
      name: 'Jeddah Corniche',
      description:
        'Red Sea waterfront with promenades, public art, and sea views in one of the kingdom\'s most vibrant cities.',
    },
    {
      name: 'Edge of the World',
      description:
        'Dramatic escarpment and viewpoints near Riyadh, popular for hiking and sunsets.',
    },
    {
      name: 'Asir Mountains (Abha region)',
      description:
        'Cooler highlands with green terraces, cultural villages, and scenic mountain roads.',
    },
  ],

  travelEssentials: [
    {
      item: 'Best time to visit',
      description:
        'October to March for cooler temperatures; summer can be extremely hot in many regions.',
    },
    {
      item: 'Respectful clothing',
      description:
        'Dress modestly in public spaces; follow local guidance for cultural sites and religious areas.',
    },
    {
      item: 'Language',
      description:
        'Arabic is official; English is common in major cities, hotels, and tourist areas.',
    },
    {
      item: 'Local transport',
      description:
        'Ride-hailing apps and domestic flights are widely used; plan distances as the country is large.',
    },
    {
      item: 'Friday-Saturday weekend',
      description:
        'Many businesses operate on a Friday-Saturday weekend schedule.',
    },
    {
      item: 'Pilgrimage areas',
      description:
        'Access to Makkah is restricted to Muslims; check rules for religious sites and travel requirements.',
    },
  ],

  mainDish: {
    id: 'saudi-arabia-main',
    name: 'Kabsa',
    description:
      'Saudi Arabia\'s most iconic rice dish: long-grain rice cooked with aromatic spices and served with chicken or lamb.',
    cookingTime: 120,
    servings: 8,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken pieces (or lamb)', amount: 1.5, unit: 'kg' },
      { name: 'Basmati rice', amount: 600, unit: 'g' },
      { name: 'Onions, sliced', amount: 2, unit: 'whole' },
      { name: 'Tomatoes, chopped', amount: 4, unit: 'whole' },
      { name: 'Garlic cloves, minced', amount: 5, unit: 'cloves' },
      { name: 'Kabsa spice mix', amount: 3, unit: 'tbsp' },
      { name: 'Dried limes (loomi)', amount: 2, unit: 'whole' },
      { name: 'Tomato paste', amount: 2, unit: 'tbsp' },
      { name: 'Vegetable oil or ghee', amount: 3, unit: 'tbsp' },
      { name: 'Raisins (optional)', amount: 60, unit: 'g' },
      { name: 'Slivered almonds (optional)', amount: 50, unit: 'g' },
      { name: 'Salt', amount: 2, unit: 'tsp' },
    ],
    steps: [
      'Rinse basmati rice until water runs mostly clear; soak 20 minutes, then drain.',
      'Heat oil or ghee in a large pot. Saute onions 8-10 minutes until golden.',
      'Add garlic and cook 30 seconds. Stir in kabsa spice mix and tomato paste for 30 seconds.',
      'Add chicken (or lamb) and brown on all sides.',
      'Add chopped tomatoes, dried limes, 1.6 L water, and salt. Bring to a boil, then simmer until meat is tender (about 45-60 minutes for chicken, longer for lamb).',
      'Remove meat to a tray. Strain or scoop broth if needed and measure about 1.2 L broth for rice.',
      'Add drained rice to the pot with broth. Bring to a gentle boil, then reduce to low, cover tightly, and cook 18-20 minutes until rice is tender.',
      'Optional: toast almonds and raisins in a small pan with a little oil until fragrant.',
      'Serve rice on a platter and top with the meat. Garnish with toasted almonds and raisins if using.',
      'Serve with a simple salad or yogurt sauce on the side.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=850&q=80',
  },

  dessert: {
    id: 'saudi-arabia-dessert',
    name: 'Date Maamoul',
    description:
      'Traditional shortbread-style cookies filled with date paste, often served with Arabic coffee.',
    cookingTime: 75,
    servings: 18,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Semolina', amount: 300, unit: 'g' },
      { name: 'All-purpose flour', amount: 120, unit: 'g' },
      { name: 'Butter, melted', amount: 180, unit: 'g' },
      { name: 'Milk', amount: 120, unit: 'ml' },
      { name: 'Sugar', amount: 40, unit: 'g' },
      { name: 'Baking powder', amount: 1, unit: 'tsp' },
      { name: 'Date paste', amount: 300, unit: 'g' },
      { name: 'Ground cardamom', amount: 0.5, unit: 'tsp' },
      { name: 'Powdered sugar (optional)', amount: 2, unit: 'tbsp' },
    ],
    steps: [
      'Mix semolina, flour, sugar, and baking powder in a bowl.',
      'Stir in melted butter until sandy. Add milk gradually and knead into a soft dough.',
      'Cover and rest 20 minutes.',
      'Mix date paste with cardamom and shape into small logs or balls.',
      'Take a piece of dough, flatten, place date filling inside, and seal.',
      'Shape in a maamoul mold or form a small dome and press lightly with a fork.',
      'Bake at 180C for 18-22 minutes until lightly golden (not dark).',
      'Cool completely. Dust with powdered sugar if desired.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=650&q=80',
  },

  drinks: {
    alcoholic: 'Not available (prohibited)',
    nonAlcoholic: 'Arabic coffee (qahwa), Mint tea, Saudi-style fruit cocktails, Fresh date drinks',
  },

  music: [
    'Ardah (traditional sword dance music)',
    'Najdi folk music',
    'Khaleeji (Gulf) pop',
    'Modern Arabic pop',
  ],

  decorationIdeas: [
    'Green and white accents inspired by the flag',
    'Desert tones with sand and palm elements',
    'Geometric Islamic patterns',
    'Lantern-style lighting',
    'Date palm and oasis motifs',
  ],

  conversationStarters: [
    'Would you rather explore desert dunes or the Red Sea coast?',
    'Have you tried Arabic coffee with dates?',
    'What Middle Eastern dish do you enjoy most?',
    'What do you know about the Hajj pilgrimage?',
    'Would you visit AlUla\'s desert landscapes?',
  ],

  quiz: [
    {
      id: 'saudi-arabia-q1',
      question: 'What is the capital of Saudi Arabia?',
      options: ['Jeddah', 'Riyadh', 'Dammam', 'Medina'],
      correctAnswer: 1,
    },
    {
      id: 'saudi-arabia-q2',
      question: 'Which two cities in Saudi Arabia are Islam\'s holiest?',
      options: ['Riyadh and Jeddah', 'Mecca and Medina', 'Abha and Taif', 'Tabuk and AlUla'],
      correctAnswer: 1,
    },
    {
      id: 'saudi-arabia-q3',
      question: 'What is the official language of Saudi Arabia?',
      options: ['English', 'Arabic', 'Persian', 'Turkish'],
      correctAnswer: 1,
    },
    {
      id: 'saudi-arabia-q4',
      question: 'What currency is used in Saudi Arabia?',
      options: ['Dirham', 'Dinar', 'Riyal', 'Pound'],
      correctAnswer: 2,
    },
    {
      id: 'saudi-arabia-q5',
      question: 'Which massive desert region is associated with Saudi Arabia?',
      options: ['Gobi', 'Rub\' al Khali (Empty Quarter)', 'Kalahari', 'Atacama'],
      correctAnswer: 1,
    },
    {
      id: 'saudi-arabia-q6',
      question: 'Saudi Arabia borders which sea on the west?',
      options: ['Black Sea', 'Red Sea', 'Caspian Sea', 'Baltic Sea'],
      correctAnswer: 1,
    },
    {
      id: 'saudi-arabia-q7',
      question: 'What is Kabsa?',
      options: ['A dessert cookie', 'A spiced rice dish', 'A type of tea', 'A mountain range'],
      correctAnswer: 1,
    },
    {
      id: 'saudi-arabia-q8',
      question: 'Which product has historically been a major part of Saudi Arabia\'s economy?',
      options: ['Coffee', 'Olive oil', 'Oil', 'Wool'],
      correctAnswer: 2,
    },
    {
      id: 'saudi-arabia-q9',
      question: 'Vision 2030 is primarily focused on:',
      options: ['Building castles', 'Economic diversification and modernization', 'Moving the capital', 'Ending tourism'],
      correctAnswer: 1,
    },
    {
      id: 'saudi-arabia-q10',
      question: 'Which ingredient is strongly tied to Saudi hospitality?',
      options: ['Maple syrup', 'Dates', 'Soy sauce', 'Cheddar cheese'],
      correctAnswer: 1,
    },
  ],

  coordinates: { x: 58, y: 32 },
};
