import { Country } from '@/types';

export const nepal: Country = {
  id: 'nepal',
  name: 'Nepal',
  code: 'NP',
  continent: 'Asia',
  flag: '🇳🇵',
  landscapeImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800',
  description: 'Nepal is home to the world\'s highest mountains including Mount Everest, ancient temples, vibrant culture, and the birthplace of Buddha. It\'s a land of spiritual depth and natural beauty.',
  quickFacts: [
    { label: 'Capital', value: 'Kathmandu' },
    { label: 'Population', value: '30 million' },
    { label: 'Official Language', value: 'Nepali' },
    { label: 'Currency', value: 'Nepalese Rupee (NPR)' },
    { label: 'Area', value: '147,516 km²' },
  ],
  facts: [
    'Nepal is home to 8 of the world\'s 14 highest mountains over 8,000m',
    'The Nepali flag is the only non-rectangular national flag',
    'Lumbini is the birthplace of Gautama Buddha',
    'Nepal has never been colonized by any foreign power',
    'The country has over 125 ethnic groups speaking 123 languages',
    'Nepal\'s time zone is UTC+5:45, one of only three with 45-minute offsets',
    'The Kumari is a living goddess tradition unique to Nepal',
    'Sherpas are famous for their mountaineering skills',
  ],
  foodCulture: 'Nepali cuisine blends influences from India, Tibet, and China. Dal Bhat (lentils and rice) is the staple eaten twice daily. Momos (dumplings) are incredibly popular, and food often includes aromatic spices.',
  history: [
    {
      year: '563 BC',
      title: 'Birth of Buddha',
      description: 'Siddhartha Gautama (Buddha) was born in Lumbini, Nepal.'
    },
    {
      year: '1768',
      title: 'Unification',
      description: 'Prithvi Narayan Shah unified various kingdoms to create modern Nepal.'
    },
    {
      year: '1814-1816',
      title: 'Anglo-Nepalese War',
      description: 'Nepal fought against British expansion, maintaining independence.'
    },
    {
      year: '1951',
      title: 'End of Rana Rule',
      description: 'The Rana oligarchy ended and Nepal began modernization.'
    },
    {
      year: '2008',
      title: 'Republic Established',
      description: 'Nepal abolished its 240-year-old monarchy and became a federal republic.'
    },
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'October-November and March-May for trekking and clear mountain views' },
    { item: 'Visa', description: 'Visa on arrival available for most nationalities at entry points.' },
    { item: 'Transportation', description: 'Domestic flights for mountains, buses for cities, trekking on foot.' },
    { item: 'Language', description: 'Nepali. English spoken in tourist areas.' },
    { item: 'Safety', description: 'Generally safe. Prepare properly for high altitude treks.' },
  ],
  mainDish: {
    id: 'nepal-dal-bhat',
    name: 'Dal Bhat',
    description: 'Nepal\'s national dish - lentil soup served with rice, vegetables, and pickles, eaten twice daily',
    cookingTime: 60,
    servings: 4,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Basmati rice', amount: 600, unit: 'g' },
      { name: 'Red lentils', amount: 300, unit: 'g' },
      { name: 'Turmeric', amount: 1, unit: 'tsp' },
      { name: 'Cumin seeds', amount: 1, unit: 'tsp' },
      { name: 'Onion', amount: 1, unit: 'large' },
      { name: 'Tomatoes', amount: 2, unit: 'pieces' },
      { name: 'Garlic', amount: 4, unit: 'cloves' },
      { name: 'Ginger', amount: 2, unit: 'cm piece' },
      { name: 'Mixed vegetables', amount: 400, unit: 'g' },
      { name: 'Mango pickle', amount: 100, unit: 'g' },
    ],
    steps: [
      'Cook rice separately and keep warm',
      'Wash lentils and boil with turmeric until soft',
      'Temper with cumin seeds, garlic, and ginger in hot oil',
      'Add chopped onions and tomatoes, cook until soft',
      'Mix with cooked lentils and simmer',
      'Prepare vegetable curry with seasonal vegetables',
      'Arrange rice in center of plate',
      'Pour dal (lentils) over rice',
      'Serve with vegetable curry on the side',
      'Add mango pickle and papad for complete meal',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600',
  },
  drinks: {
    alcoholic: 'Raksi (traditional rice spirit), Tongba (millet beer), Chyang',
    nonAlcoholic: 'Butter tea (po cha), Masala chai, Lassi',
  },
  music: ['Traditional Nepali folk music', 'Madal drumming', 'Sarangi (string instrument)', 'Modern Nepali pop'],
  decorationIdeas: [
    'Red and blue (Nepali flag colors)',
    'Prayer flags in multiple colors',
    'Mandala designs',
    'Himalayan motifs',
    'Buddhist and Hindu symbols',
    'Rhododendron flowers (national flower)',
  ],
  conversationStarters: [
    'Have you ever wanted to trek to Everest Base Camp?',
    'Dal Bhat power - have you tried this Nepali staple?',
    'The view of the Himalayas must be incredible from Nepal!',
    'Nepali momos are so delicious - do you like dumplings?',
  ],
  quiz: [
    {
      id: 'nepal-q1',
      question: 'What is Nepal\'s capital city?',
      options: ['Pokhara', 'Kathmandu', 'Lumbini', 'Patan'],
      correctAnswer: 1,
    },
    {
      id: 'nepal-q2',
      question: 'What is unique about Nepal\'s national flag?',
      options: ['It has a dragon', 'It\'s non-rectangular', 'It\'s the largest', 'It has 5 colors'],
      correctAnswer: 1,
    },
    {
      id: 'nepal-q3',
      question: 'How many 8,000m+ peaks does Nepal have?',
      options: ['5', '8', '10', '14'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 72, y: 35 },
};
