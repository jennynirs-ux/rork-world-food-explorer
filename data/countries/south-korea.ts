import { Country } from '@/types';

export const southKorea: Country = {
  id: 'south-korea',
  name: 'South Korea',
  code: 'KR',
  continent: 'Asia',
  flag: '🇰🇷',
  landscapeImage: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800',
  description: 'South Korea is a dynamic East Asian nation blending ancient traditions with cutting-edge technology. Known for K-pop, kimchi, and stunning mountain temples.',
  quickFacts: [
    { label: 'Capital', value: 'Seoul' },
    { label: 'Population', value: '51.7 million' },
    { label: 'Official Language', value: 'Korean' },
    { label: 'Currency', value: 'Korean Won (₩)' },
    { label: 'Area', value: '100,210 km²' },
  ],
  facts: [
    'South Korea has one of the fastest internet speeds in the world',
    'K-pop is a global cultural phenomenon with billions of fans worldwide',
    'Koreans consider the entire country as one large interconnected city',
    'South Korea is one of the world\'s most technologically advanced countries',
    'Kimchi, fermented vegetables, is served with almost every meal',
    'The Korean alphabet (Hangul) was invented in the 15th century',
    'South Korea has mandatory military service for men',
    'Korea is home to the world\'s busiest cosmetics market',
  ],
  foodCulture: 'Korean cuisine emphasizes balance, with meals featuring multiple side dishes (banchan) alongside rice and soup. Fermentation is key, with kimchi being the most iconic example. Eating is often communal, with dishes shared among diners.',
  history: [
    {
      year: '1392-1897',
      title: 'Joseon Dynasty',
      description: 'The longest-ruling Korean dynasty, which established Confucian principles and created Hangul.'
    },
    {
      year: '1950-1953',
      title: 'Korean War',
      description: 'The Korean peninsula was divided into North and South Korea following the devastating war.'
    },
    {
      year: '1960s-1990s',
      title: 'Economic Miracle',
      description: 'South Korea transformed from a poor nation to one of the world\'s leading economies.'
    },
    {
      year: '2000s-Present',
      title: 'Hallyu Wave',
      description: 'Korean pop culture, including K-pop, K-dramas, and films, became a global phenomenon.'
    },
  ],
  innovations: [
    {
      name: 'Hangul Alphabet',
      year: '1443',
      description: 'King Sejong created one of the most scientific and efficient writing systems in the world.'
    },
    {
      name: 'Metal Movable Type',
      year: '1377',
      description: 'Korea printed the world\'s oldest book using metal movable type, predating Gutenberg by 78 years.'
    },
    {
      name: 'Samsung Electronics',
      year: '1969',
      description: 'Became a global leader in smartphones, semiconductors, and consumer electronics.'
    },
  ],
  mustVisit: [
    { name: 'Gyeongbokgung Palace', description: 'Stunning royal palace in Seoul, showcasing traditional Korean architecture.' },
    { name: 'Jeju Island', description: 'Volcanic island paradise with unique culture, beautiful beaches, and natural wonders.' },
    { name: 'Bukchon Hanok Village', description: 'Traditional Korean houses preserved in the heart of modern Seoul.' },
    { name: 'DMZ', description: 'The Demilitarized Zone between North and South Korea, a unique historical site.' },
    { name: 'Busan Beaches', description: 'Beautiful coastal city with stunning beaches, temples, and seafood markets.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'Spring (April-May) for cherry blossoms or Fall (September-November) for foliage.' },
    { item: 'T-money card', description: 'Rechargeable transit card for subways, buses, and even taxis.' },
    { item: 'Cash', description: 'While cards are widely accepted, some small vendors prefer cash.' },
    { item: 'Translation app', description: 'English signage is limited outside major tourist areas.' },
    { item: 'Power adapter', description: 'South Korea uses Type C and F plugs with 220V.' },
    { item: 'Comfortable shoes', description: 'Seoul involves lots of walking, stairs, and hiking opportunities.' }
  ],
  mainDish: {
    id: 'south-korea-main',
    name: 'Bibimbap',
    description: 'Mixed rice bowl with vegetables, beef, egg, and spicy gochujang sauce',
    cookingTime: 45,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Short-grain rice', amount: 400, unit: 'g' },
      { name: 'Beef sirloin', amount: 200, unit: 'g' },
      { name: 'Spinach', amount: 200, unit: 'g' },
      { name: 'Bean sprouts', amount: 150, unit: 'g' },
      { name: 'Carrots', amount: 1, unit: 'large' },
      { name: 'Zucchini', amount: 1, unit: 'medium' },
      { name: 'Eggs', amount: 4, unit: 'large' },
      { name: 'Gochujang (Korean chili paste)', amount: 4, unit: 'tbsp' },
      { name: 'Sesame oil', amount: 3, unit: 'tbsp' },
      { name: 'Soy sauce', amount: 2, unit: 'tbsp' },
    ],
    steps: [
      'Cook rice according to package directions',
      'Marinate sliced beef in soy sauce, sesame oil, and garlic',
      'Blanch spinach and bean sprouts separately, season with sesame oil and salt',
      'Julienne carrots and zucchini, sauté separately until tender',
      'Cook marinated beef until browned',
      'Fry eggs sunny-side up',
      'Divide rice among bowls, arrange vegetables and beef in sections on top',
      'Place fried egg in center, add dollop of gochujang',
      'Mix everything together before eating',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=600',
  },
  dessert: {
    id: 'south-korea-dessert',
    name: 'Bingsu',
    description: 'Shaved ice dessert topped with sweet red beans, fruit, and condensed milk',
    cookingTime: 20,
    servings: 4,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Ice cubes', amount: 500, unit: 'g' },
      { name: 'Sweetened red beans', amount: 200, unit: 'g' },
      { name: 'Condensed milk', amount: 100, unit: 'ml' },
      { name: 'Fresh strawberries', amount: 200, unit: 'g' },
      { name: 'Mochi pieces', amount: 100, unit: 'g' },
      { name: 'Cornflakes', amount: 50, unit: 'g' },
      { name: 'Ice cream', amount: 4, unit: 'scoops' },
    ],
    steps: [
      'Freeze milk in ice cube trays for smoother texture (optional)',
      'Blend ice cubes in a blender or use shaved ice machine',
      'Pile shaved ice high in serving bowls',
      'Top with sweetened red beans',
      'Add fresh sliced strawberries',
      'Place a scoop of ice cream on top',
      'Drizzle generously with condensed milk',
      'Garnish with mochi pieces and cornflakes',
      'Serve immediately with a long spoon',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600',
  },
  drinks: {
    alcoholic: 'Soju, Makgeolli (rice wine), Korean beer',
    nonAlcoholic: 'Barley tea, Banana milk, Korean citron tea (Yujacha)',
  },
  music: [
    'Gangnam Style - PSY',
    'Dynamite - BTS',
    'DDU-DU DDU-DU - BLACKPINK',
    'Arirang (traditional folk song)',
    'Love Scenario - iKON',
  ],
  decorationIdeas: [
    'Red and blue colors from Korean flag',
    'Traditional hanbok patterns',
    'Cherry blossom branches',
    'Korean paper lanterns (chochin)',
    'K-pop posters and album covers',
  ],
  conversationStarters: [
    'What\'s your favorite K-drama or K-pop group?',
    'Have you tried kimchi? How spicy can you handle?',
    'Would you want to visit the DMZ?',
    'What do you think of Korean skincare products?',
    'Have you seen any Korean films like Parasite or Squid Game?',
  ],
  quiz: [
    {
      id: 'south-korea-q1',
      question: 'What is the capital of South Korea?',
      options: ['Busan', 'Seoul', 'Incheon', 'Daegu'],
      correctAnswer: 1,
    },
    {
      id: 'south-korea-q2',
      question: 'What is kimchi?',
      options: ['A soup', 'Fermented vegetables', 'A rice dish', 'A noodle dish'],
      correctAnswer: 1,
    },
    {
      id: 'south-korea-q3',
      question: 'What is the Korean alphabet called?',
      options: ['Kanji', 'Hangul', 'Hiragana', 'Hanzi'],
      correctAnswer: 1,
    },
    {
      id: 'south-korea-q4',
      question: 'Which popular drink is unique to Korea?',
      options: ['Sake', 'Soju', 'Shochu', 'Baijiu'],
      correctAnswer: 1,
    },
    {
      id: 'south-korea-q5',
      question: 'What does "Hallyu" refer to?',
      options: ['Korean food', 'Korean Wave (cultural phenomenon)', 'Korean language', 'Korean currency'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 82, y: 40 },
};
