import { Country } from '@/types';

export const azerbaijan: Country = {
  id: 'azerbaijan',
  name: 'Azerbaijan',
  code: 'AZ',
  continent: 'Asia',
  flag: '🇦🇿',
  landscapeImage: 'https://images.unsplash.com/photo-1573625256494-d14f97f5f89c?w=800',
  description: 'Azerbaijan is a nation in the South Caucasus region, situated at the crossroads of Southwest Asia and Southeastern Europe. Known as the "Land of Fire" due to its natural gas fires, it blends ancient history with modern architecture in its capital, Baku.',
  quickFacts: [
    { label: 'Capital', value: 'Baku' },
    { label: 'Population', value: '10.1 million' },
    { label: 'Official Language', value: 'Azerbaijani' },
    { label: 'Currency', value: 'Azerbaijani Manat (₼)' },
    { label: 'Area', value: '86,600 km²' },
  ],
  facts: [
    'Azerbaijan is known as the "Land of Fire" because of natural gas fires on hillsides',
    'The country has mud volcanoes - half of the world\'s mud volcanoes are in Azerbaijan',
    'Baku\'s Flame Towers are the tallest buildings in the South Caucasus',
    'Azerbaijan was the first Muslim-majority country to have operas and theater plays',
    'The country is one of the birthplaces of oil industry',
    'Azerbaijani carpet weaving is recognized by UNESCO as intangible cultural heritage',
    'The Old City of Baku is a UNESCO World Heritage Site',
    'Chess is extremely popular - it\'s taught in schools as a mandatory subject',
  ],
  foodCulture: 'Azerbaijani cuisine is rich and diverse, influenced by Persian, Turkish, and Russian traditions. Food is central to Azerbaijani hospitality, with meals often featuring multiple courses. Tea culture is particularly important - tea is served throughout the day from samovars.',
  history: [
    {
      year: '6th century BC',
      title: 'Ancient Kingdoms',
      description: 'The territory was home to ancient kingdoms including Caucasian Albania and later became part of the Persian Empire.'
    },
    {
      year: '7th-11th centuries',
      title: 'Islamic Influence',
      description: 'Islam spread throughout the region, profoundly influencing Azerbaijani culture and society.'
    },
    {
      year: '1813-1828',
      title: 'Russian Empire',
      description: 'Azerbaijan was divided between the Russian and Persian empires through the treaties of Gulistan and Turkmenchay.'
    },
    {
      year: '1918',
      title: 'First Republic',
      description: 'Azerbaijan Democratic Republic was established, becoming the first democratic and secular republic in the Muslim world.'
    },
    {
      year: '1920',
      title: 'Soviet Era',
      description: 'Azerbaijan became part of the Soviet Union, undergoing rapid industrialization and modernization.'
    },
    {
      year: '1991',
      title: 'Independence',
      description: 'Azerbaijan regained independence following the dissolution of the Soviet Union.'
    },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'E-visa available for many nationalities. Some countries have visa-free access.' },
    { item: 'Best time to visit', description: 'April to June and September to November for pleasant weather' },
    { item: 'Transportation', description: 'Metro in Baku, buses, and taxis. Domestic flights available for longer distances.' },
    { item: 'Language', description: 'Azerbaijani is official. Russian is widely spoken. English in tourist areas.' },
    { item: 'Safety', description: 'Generally safe for tourists. Exercise caution near disputed borders.' },
  ],
  mainDish: {
    id: 'azerbaijan-plov',
    name: 'Plov (Azerbaijani Pilaf)',
    description: 'Azerbaijan\'s national dish - aromatic saffron rice served with meat, dried fruits, and chestnuts. Each region has its own variation, with Shah Plov being the most festive version wrapped in lavash bread.',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Basmati rice', amount: 500, unit: 'g' },
      { name: 'Lamb or chicken', amount: 600, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'pieces' },
      { name: 'Butter', amount: 100, unit: 'g' },
      { name: 'Saffron threads', amount: 1, unit: 'tsp' },
      { name: 'Dried apricots', amount: 100, unit: 'g' },
      { name: 'Chestnuts', amount: 100, unit: 'g' },
      { name: 'Salt', amount: 2, unit: 'tsp' },
    ],
    steps: [
      'Soak rice in salted water for 2 hours, then rinse',
      'Brown meat with onions in butter until golden',
      'Add dried fruits and chestnuts to meat, set aside',
      'Boil rice until half-cooked, drain',
      'Steep saffron in hot water',
      'Layer rice and meat mixture in pot, pour saffron water and butter over',
      'Cover with cloth and lid, steam on very low heat for 45 minutes',
      'Serve with crispy bottom (qazmaq) on top',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600',
  },
  drinks: {
    alcoholic: 'Azerbaijani wine, Cognac',
    nonAlcoholic: 'Black tea (always served), Sherbet (fruit drink), Ayran',
  },
  music: ['Mugham (traditional music)', 'Tar (traditional instrument)', 'Ashiq music', 'Folk dances'],
  decorationIdeas: [
    'Traditional Azerbaijani carpets',
    'Fire-themed elements (red, orange, gold)',
    'Copper samovars',
    'Blue and red color scheme',
    'Pomegranate motifs',
    'Oriental lanterns',
  ],
  conversationStarters: [
    'Have you heard about the eternal flames that burn naturally in Azerbaijan?',
    'Would you explore Baku\'s modern architecture or ancient Old City first?',
    'What do you know about Azerbaijani carpet weaving traditions?',
    'Have you ever tried plov? How does it compare to other rice dishes you know?',
  ],
  quiz: [
    {
      id: 'azerbaijan-q1',
      question: 'What is Azerbaijan\'s capital city?',
      options: ['Tbilisi', 'Yerevan', 'Baku', 'Tehran'],
      correctAnswer: 2,
    },
    {
      id: 'azerbaijan-q2',
      question: 'Why is Azerbaijan called the "Land of Fire"?',
      options: ['Hot climate', 'Natural gas fires', 'Spicy food', 'Desert landscape'],
      correctAnswer: 1,
    },
    {
      id: 'azerbaijan-q3',
      question: 'What is Azerbaijan\'s national dish?',
      options: ['Dolma', 'Plov', 'Kebab', 'Lahmacun'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 58, y: 42 },
};
