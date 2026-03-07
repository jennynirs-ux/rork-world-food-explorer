import { Country } from '@/types';

export const iran: Country = {
  id: 'iran',
  name: 'Iran',
  code: 'IR',
  continent: 'Asia',
  flag: '🇮🇷',
  landscapeImage: 'https://images.unsplash.com/photo-1565711561500-49678a10a63f?w=800&q=80',
  description: 'Iran, formerly known as Persia, is home to one of the world\'s oldest continuous civilizations. With stunning architecture, rich poetry tradition, and diverse landscapes from deserts to snow-capped mountains, Iran offers a unique cultural experience.',
  quickFacts: [
    { label: 'Capital', value: 'Tehran' },
    { label: 'Population', value: '88 million' },
    { label: 'Official Language', value: 'Persian (Farsi)' },
    { label: 'Currency', value: 'Iranian Rial (IRR)' },
    { label: 'Area', value: '1,648,195 km²' },
  ],
  facts: [
    'Iran has 26 UNESCO World Heritage Sites',
    'Persian carpets are considered among the finest in the world',
    'The Persian Empire was one of the largest empires in history',
    'Iran is home to one of the oldest civilizations, dating back 7,000 years',
    'Poetry holds a special place in Iranian culture, with poets like Rumi and Hafez',
    'Iran has four distinct seasons and diverse climates',
  ],
  foodCulture: 'Iranian cuisine is sophisticated and aromatic, featuring rice dishes, grilled meats, stews, and fresh herbs. Saffron, barberries, and pomegranate are signature ingredients. Meals often include yogurt, fresh herbs, and flatbread.',
  history: [
    {
      year: '550 BC',
      title: 'Persian Empire',
      description: 'Cyrus the Great founded the Achaemenid Empire, one of the largest empires in ancient history.'
    },
    {
      year: '1501',
      title: 'Safavid Dynasty',
      description: 'The Safavid dynasty established Shi\'a Islam as the state religion and created stunning architectural masterpieces.'
    },
    {
      year: '1979',
      title: 'Islamic Revolution',
      description: 'The monarchy was overthrown, establishing the Islamic Republic of Iran.'
    },
  ],
  innovations: [
    {
      name: 'Algebra',
      year: '9th Century',
      description: 'Persian mathematician Al-Khwarizmi is known as the father of algebra.'
    },
    {
      name: 'Windmill',
      year: '7th Century',
      description: 'The first windmills for grinding grain were built in ancient Persia.'
    },
    {
      name: 'Ice Cream',
      year: 'Ancient',
      description: 'Ancient Persians were among the first to create frozen desserts using ice from mountains.'
    },
  ],
  mustVisit: [
    { name: 'Persepolis', description: 'Ancient ceremonial capital of the Persian Empire, UNESCO site.' },
    { name: 'Naqsh-e Jahan Square', description: 'Stunning Isfahan square with magnificent mosques and palaces.' },
    { name: 'Nasir al-Mulk Mosque', description: 'The "Pink Mosque" famous for colorful stained glass windows.' },
    { name: 'Golestan Palace', description: 'Former royal Qajar complex in Tehran with beautiful tilework.' },
    { name: 'Yazd Old City', description: 'Ancient desert city with unique wind towers and Zoroastrian sites.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'April-May and September-October for comfortable weather.' },
    { item: 'Visa', description: 'Visa on arrival available for many nationalities.' },
    { item: 'Modest clothing', description: 'Headscarves required for women, modest dress for all.' },
    { item: 'Cash', description: 'Credit cards don\'t work, bring euros or dollars to exchange.' },
  ],
  mainDish: {
    id: 'iran-main',
    name: 'Ghormeh Sabzi',
    description: 'Herb stew with kidney beans and lamb, Iran\'s national dish',
    cookingTime: 180,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Lamb or beef chunks', amount: 800, unit: 'g' },
      { name: 'Fresh parsley', amount: 200, unit: 'g' },
      { name: 'Fresh cilantro', amount: 100, unit: 'g' },
      { name: 'Fresh fenugreek leaves', amount: 100, unit: 'g' },
      { name: 'Kidney beans', amount: 200, unit: 'g' },
      { name: 'Dried limes', amount: 4, unit: 'pieces' },
      { name: 'Onions', amount: 2, unit: 'large' },
      { name: 'Turmeric', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Finely chop all herbs and sauté until dark green',
      'Brown meat with onions and turmeric',
      'Add sautéed herbs to meat',
      'Add water, cover and simmer for 2 hours',
      'Add cooked kidney beans and pierced dried limes',
      'Simmer for 30 more minutes',
      'Serve over saffron rice (chelow)',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80',
  },
  dessert: {
    id: 'iran-dessert',
    name: 'Saffron Ice Cream (Bastani)',
    description: 'Traditional Persian ice cream with saffron, rose water, and pistachios',
    cookingTime: 480,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Heavy cream', amount: 600, unit: 'ml' },
      { name: 'Milk', amount: 400, unit: 'ml' },
      { name: 'Sugar', amount: 200, unit: 'g' },
      { name: 'Saffron threads', amount: 1, unit: 'tsp' },
      { name: 'Rose water', amount: 3, unit: 'tbsp' },
      { name: 'Pistachios', amount: 100, unit: 'g' },
      { name: 'Egg yolks', amount: 4, unit: 'large' },
    ],
    steps: [
      'Steep saffron in 2 tbsp hot water',
      'Heat milk and cream to simmer',
      'Whisk egg yolks with sugar until pale',
      'Temper eggs with hot milk, return to heat',
      'Cook until thick custard forms',
      'Add saffron water and rose water',
      'Chill completely, then churn in ice cream maker',
      'Fold in chopped pistachios, freeze until firm',
      'Serve between two wafers (traditional style)',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Not available (alcohol prohibited)',
    nonAlcoholic: 'Doogh (yogurt drink), Persian tea, Sharbat (fruit syrup), Fresh pomegranate juice',
  },
  music: [
    'Traditional Persian classical music',
    'Dastgah - Persian musical system',
    'Tar and Setar - traditional instruments',
    'Googoosh - famous Persian singer',
  ],
  decorationIdeas: [
    'Persian carpets and textiles',
    'Turquoise and gold colors',
    'Persian calligraphy art',
    'Miniature paintings',
    'Decorative tiles and mosaics',
  ],
  conversationStarters: [
    'Have you read poetry by Rumi or Hafez?',
    'What do you know about Persian history?',
    'Have you seen Persian carpets?',
    'What interests you about Iranian culture?',
  ],
  quiz: [
    {
      id: 'iran-q1',
      question: 'What was Iran formerly known as?',
      options: ['Mesopotamia', 'Persia', 'Babylonia', 'Assyria'],
      correctAnswer: 1,
    },
    {
      id: 'iran-q2',
      question: 'What is Iran\'s national dish?',
      options: ['Kebab', 'Ghormeh Sabzi', 'Tahdig', 'Fesenjan'],
      correctAnswer: 1,
    },
    {
      id: 'iran-q3',
      question: 'Which ancient site is located in Iran?',
      options: ['Petra', 'Persepolis', 'Machu Picchu', 'Angkor Wat'],
      correctAnswer: 1,
    },
    {
      id: 'iran-q4',
      question: 'What is Iran\'s capital city?',
      options: ['Isfahan', 'Shiraz', 'Tehran', 'Mashhad'],
      correctAnswer: 2,
    },
    {
      id: 'iran-q5',
      question: 'How many UNESCO World Heritage Sites does Iran have?',
      options: ['10', '15', '26', '35'],
      correctAnswer: 2,
    },
    {
      id: 'iran-q6',
      question: 'Which Persian mathematician is known as the father of algebra?',
      options: ['Avicenna', 'Al-Khwarizmi', 'Omar Khayyam', 'Rumi'],
      correctAnswer: 1,
    },
    {
      id: 'iran-q7',
      question: 'What is the official language of Iran?',
      options: ['Arabic', 'Turkish', 'Persian (Farsi)', 'Kurdish'],
      correctAnswer: 2,
    },
    {
      id: 'iran-q8',
      question: 'Which mosque in Iran is famous for its colorful stained glass windows?',
      options: ['Blue Mosque', 'Nasir al-Mulk Mosque', 'Shah Mosque', 'Imam Mosque'],
      correctAnswer: 1,
    },
    {
      id: 'iran-q9',
      question: 'What ancient innovation did Persians create in the 7th century?',
      options: ['Paper', 'Windmill', 'Compass', 'Gunpowder'],
      correctAnswer: 1,
    },
    {
      id: 'iran-q10',
      question: 'What is Iran\'s currency?',
      options: ['Dinar', 'Dirham', 'Rial', 'Toman'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 62, y: 37 },
};
