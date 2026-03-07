import { Country } from '@/types';

export const singapore: Country = {
  id: 'singapore',
  name: 'Singapore',
  code: 'SG',
  continent: 'Asia',
  flag: '🇸🇬',
  landscapeImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80',
  description:
    'Singapore is a modern city-state and island nation known for its efficiency, cleanliness, multicultural society, world-class hawker food, and iconic skyline. It blends Chinese, Malay, Indian, and Western influences into a uniquely Singaporean identity.',
  quickFacts: [
    { label: 'Capital', value: 'Singapore' },
    { label: 'Population', value: '5.9 million' },
    { label: 'Official Languages', value: 'English, Malay, Mandarin, Tamil' },
    { label: 'Currency', value: 'Singapore Dollar (SGD)' },
    { label: 'Area', value: '728 km²' },
  ],
  facts: [
    'Singapore is one of the few surviving city-states in the world',
    'Chewing gum sales are restricted (with limited exceptions)',
    'Singapore is only slightly larger than New York City in land area',
    'Changi Airport is regularly ranked among the world’s best airports',
    'Singapore has no major natural resources and relies heavily on imports',
    'Hawker centres are central to daily life and food culture',
    'The city is known for safety, strict laws, and efficient public transport',
    'A large share of the country is covered by parks, trees, and green corridors',
  ],
  foodCulture:
    'Singaporean cuisine is a melting pot of Chinese, Malay, Indian, and Peranakan flavors. Hawker centres are the heart of the food scene, serving iconic dishes like chicken rice, laksa, satay, and chili crab. Eating out is a national pastime.',

  history: [
    {
      year: '1819',
      title: 'British Trading Port',
      description:
        'Stamford Raffles established Singapore as a British trading post, accelerating migration and commerce.',
    },
    {
      year: '1942–1945',
      title: 'Japanese Occupation',
      description:
        'Singapore fell to Japan during World War II and endured a difficult occupation period.',
    },
    {
      year: '1959',
      title: 'Self-Government',
      description:
        'Singapore gained internal self-government, laying groundwork for full sovereignty.',
    },
    {
      year: '1963',
      title: 'Joined Malaysia',
      description:
        'Singapore became part of the Federation of Malaysia for a short period.',
    },
    {
      year: '1965',
      title: 'Independence',
      description:
        'Singapore separated from Malaysia and became an independent nation.',
    },
    {
      year: '1965–1990s',
      title: 'Rapid Economic Transformation',
      description:
        'Singapore grew into a major global hub for trade, finance, and manufacturing, supported by strong institutions and infrastructure.',
    },
  ],

  innovations: [
    {
      name: 'Newater (Water Reuse)',
      year: '2003',
      description:
        'Singapore pioneered large-scale water recycling, producing high-grade reclaimed water to strengthen water security.',
    },
    {
      name: 'Urban Greening & Vertical Gardens',
      year: 'Modern',
      description:
        'The “City in a Garden” approach integrates parks, green corridors, and vertical greenery into dense urban planning.',
    },
    {
      name: 'World-Class Container Port Operations',
      year: 'Modern',
      description:
        'Singapore became a logistics powerhouse through highly optimized port operations and global shipping connectivity.',
    },
    {
      name: 'Smart Nation Initiatives',
      year: '2014',
      description:
        'Digital public services and smart infrastructure have shaped Singapore’s reputation as a tech-forward city-state.',
    },
  ],

  mustVisit: [
    { name: 'Gardens by the Bay', description: 'Futuristic gardens with Supertree Grove and climate-controlled conservatories.' },
    { name: 'Marina Bay', description: 'Iconic skyline views, waterfront promenades, and night light shows.' },
    { name: 'Chinatown', description: 'Heritage streets, temples, markets, and classic local eats.' },
    { name: 'Little India', description: 'Colorful culture, temples, spice shops, and South Asian cuisine.' },
    { name: 'Sentosa', description: 'Beach escapes, attractions, and resort-style fun close to the city.' },
  ],

  travelEssentials: [
    { item: 'Best time to visit', description: 'Year-round destination; February–April is often slightly less rainy.' },
    { item: 'Transportation', description: 'MRT and buses are fast, clean, and easy; contactless payment is common.' },
    { item: 'Language', description: 'English is widely spoken; you will also hear Singlish in daily conversation.' },
    { item: 'Etiquette', description: 'Queueing, cleanliness, and public rules are taken seriously.' },
    { item: 'Weather', description: 'Hot and humid—pack breathable clothes and plan indoor breaks.' },
  ],

  mainDish: {
    id: 'singapore-main',
    name: 'Hainanese Chicken Rice',
    description:
      'Singapore’s most iconic comfort food: poached chicken served with fragrant rice, chili sauce, and ginger-scallion dip.',
    cookingTime: 70,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Whole chicken', amount: 1.5, unit: 'kg' },
      { name: 'Jasmine rice', amount: 350, unit: 'g' },
      { name: 'Chicken stock (from poaching)', amount: 650, unit: 'ml' },
      { name: 'Ginger', amount: 30, unit: 'g' },
      { name: 'Garlic cloves', amount: 6, unit: 'cloves' },
      { name: 'Spring onions', amount: 3, unit: 'stalks' },
      { name: 'Sesame oil', amount: 1, unit: 'tbsp' },
      { name: 'Soy sauce', amount: 2, unit: 'tbsp' },
      { name: 'Cucumber', amount: 1, unit: 'whole' },
      { name: 'Red chili', amount: 1, unit: 'whole' },
      { name: 'Lime', amount: 1, unit: 'whole' },
      { name: 'Salt', amount: 2, unit: 'tsp' },
    ],
    steps: [
      'Rub chicken with salt, then rinse (this helps clean the skin).',
      'Poach chicken: place in a pot, cover with water, add sliced ginger and 1 tsp salt. Bring to a gentle simmer and cook 35–40 minutes (avoid hard boiling).',
      'Ice bath: remove chicken and plunge into ice water for 5 minutes to set the skin. Drain and rest.',
      'Make rice base: finely mince 3 cloves garlic and 10 g ginger. Sauté in 1 tbsp oil until fragrant.',
      'Add washed rice and stir 1 minute. Add 650 ml chicken stock and cook rice until done.',
      'Chili sauce: blend chili, a bit of ginger, lime juice, and a pinch of salt (add a splash of stock if needed).',
      'Ginger-scallion dip: finely chop spring onions + ginger, heat sesame oil and pour over, add a pinch of salt.',
      'Slice chicken and drizzle with soy sauce (or light + dark soy mix if you use both).',
      'Serve with cucumber slices and the sauces on the side.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1519624213443-5f3e0886f1e0?w=800&q=80',
  },

  dessert: {
    id: 'singapore-dessert',
    name: 'Kaya Toast Set (Sweet Kaya Toast)',
    description:
      'A classic Singaporean sweet bite: toasted bread with kaya (coconut-egg jam) and butter, often served with coffee or tea.',
    cookingTime: 15,
    servings: 2,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'White bread slices', amount: 4, unit: 'slices' },
      { name: 'Kaya (coconut jam)', amount: 4, unit: 'tbsp' },
      { name: 'Butter', amount: 40, unit: 'g' },
    ],
    steps: [
      'Toast bread until crisp and golden.',
      'Spread kaya on two slices.',
      'Add butter slices, then sandwich with remaining toast.',
      'Cut into triangles and serve warm.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1562945431-ce2b63d5a7fe?w=800&q=80',
  },

  drinks: {
    alcoholic: 'Singapore Sling, Tiger beer, Local craft beers',
    nonAlcoholic: 'Kopi (local coffee), Teh Tarik, Sugarcane juice, Fresh fruit juices',
  },

  music: [
    'Modern Singaporean pop',
    'Getai (street opera)',
    'Mandopop and Malay pop influences',
    'International music scene',
  ],

  decorationIdeas: [
    'Red and white accents (flag colors)',
    'Merlion imagery (national symbol)',
    'Orchids (national flower)',
    'Sleek modern skyline elements',
    'Multicultural motifs (Chinese, Malay, Indian)',
  ],

  conversationStarters: [
    'Which hawker dish would you try first: chicken rice, laksa, satay, or chili crab?',
    'Would you visit Gardens by the Bay at night for the Supertree light show?',
    'Singapore is famous for being super organized—does that sound relaxing or intense to you?',
    'Have you ever tried kopi or teh tarik?',
  ],

  quiz: [
    {
      id: 'singapore-q1',
      question: 'What year did Singapore become independent?',
      options: ['1959', '1963', '1965', '1971'],
      correctAnswer: 2,
    },
    {
      id: 'singapore-q2',
      question: 'What is the capital of Singapore?',
      options: ['Singapore', 'Kuala Lumpur', 'Jakarta', 'Bangkok'],
      correctAnswer: 0,
    },
    {
      id: 'singapore-q3',
      question: 'Which currency is used in Singapore?',
      options: ['Ringgit', 'Singapore Dollar', 'Baht', 'Yen'],
      correctAnswer: 1,
    },
    {
      id: 'singapore-q4',
      question: 'Which place is famous for affordable local food stalls?',
      options: ['Hawker centre', 'Ski lodge', 'Tea plantation', 'Vineyard'],
      correctAnswer: 0,
    },
    {
      id: 'singapore-q5',
      question: 'What is the Merlion?',
      options: ['A mountain', 'A national symbol/statue', 'A river', 'A dessert'],
      correctAnswer: 1,
    },
    {
      id: 'singapore-q6',
      question: 'Which dish is strongly associated with Singapore?',
      options: ['Hainanese chicken rice', 'Pierogi', 'Fondue', 'Borscht'],
      correctAnswer: 0,
    },
    {
      id: 'singapore-q7',
      question: 'Which of these is one of Singapore’s official languages?',
      options: ['Thai', 'Tamil', 'Korean', 'Spanish'],
      correctAnswer: 1,
    },
    {
      id: 'singapore-q8',
      question: 'What is Newater best described as?',
      options: ['A mountain lake', 'Recycled reclaimed water', 'A train system', 'A festival'],
      correctAnswer: 1,
    },
    {
      id: 'singapore-q9',
      question: 'Which iconic attraction features “Supertrees”?',
      options: ['Gardens by the Bay', 'Sentosa Beach', 'Chinatown', 'Little India'],
      correctAnswer: 0,
    },
    {
      id: 'singapore-q10',
      question: 'Singapore is best described as a…',
      options: ['Landlocked country', 'Island city-state', 'Desert kingdom', 'Arctic nation'],
      correctAnswer: 1,
    },
  ],

  coordinates: { x: 77, y: 19 },
};
