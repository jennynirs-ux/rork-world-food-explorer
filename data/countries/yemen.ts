import { Country } from '@/types';

export const yemen: Country = {
  id: 'yemen',
  name: 'Yemen',
  code: 'YE',
  continent: 'Asia',
  flag: '🇾🇪',
  landscapeImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80',
  description:
    'Yemen is an ancient country on the southern Arabian Peninsula, known for its historic cities, coffee heritage, and dramatic landscapes ranging from mountains and deserts to tropical islands.',
  quickFacts: [
    { label: 'Capital', value: "Sana'a" },
    { label: 'Population', value: '30 million' },
    { label: 'Official Language', value: 'Arabic' },
    { label: 'Currency', value: 'Yemeni Rial' },
    { label: 'Area', value: '527,968 km²' },
  ],
  facts: [
    "Sana'a is one of the world’s oldest continuously inhabited cities",
    'Yemen is considered the birthplace of coffee (Mocha coffee)',
    'Socotra Island is home to unique plant species found nowhere else on Earth',
    'Traditional tower houses are built from mud brick and stone',
    'Yemen has a history stretching back over 3,000 years',
    'The ancient Kingdom of Saba (Sheba) was located in Yemen',
    'Coffee beans were first exported globally from the port of Mocha',
  ],
  foodCulture:
    'Yemeni cuisine is hearty and communal, centered around stews, flatbreads, and spiced meats. Meals are often eaten by hand and shared from a single dish. Fenugreek, chili, and aromatic spices are common.',
  innovations: [
    { name: 'Coffee Cultivation', year: '6th Century', description: 'Yemen pioneered coffee cultivation and trade, with Mocha port giving name to coffee variety' },
    { name: 'Tower House Architecture', year: 'Medieval', description: 'Distinctive multi-story mud-brick buildings, pioneering vertical living in Old Sana\'a' },
    { name: 'Ancient Dam Engineering', year: '8th Century BC', description: 'Marib Dam was one of ancient world\'s greatest engineering achievements, irrigating vast areas' },
    { name: 'Frankincense Trade Routes', year: 'Ancient', description: 'Established global trade networks for frankincense and myrrh, connecting civilizations' },
  ],
  history: [
    {
      year: '1000 BC',
      title: 'Kingdom of Saba',
      description:
        'An ancient civilization famous for trade, engineering, and the legendary Queen of Sheba.',
    },
    {
      year: '7th century',
      title: 'Spread of Islam',
      description:
        'Yemen became one of the earliest regions to embrace Islam.',
    },
    {
      year: '16th–19th century',
      title: 'Coffee Trade Era',
      description:
        'Mocha became the world’s most important coffee export hub.',
    },
    {
      year: '1990',
      title: 'Modern Yemen',
      description:
        'North and South Yemen unified into a single country.',
    },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Visa requirements vary; check current travel advisories before planning.' },
    { item: 'Best time to visit', description: 'March to May and September to November for moderate temperatures.' },
    { item: 'Safety', description: 'Check current travel advisories. Some areas require caution.' },
    { item: 'Language', description: 'Arabic is essential. Limited English in urban areas.' },
    { item: 'Dress code', description: 'Modest clothing is important, especially for women.' },
  ],
  mustVisit: [
    { name: 'Old City of Sana\'a', description: 'UNESCO World Heritage site with over 6,000 tower houses and centuries-old architecture.' },
    { name: 'Socotra Island', description: 'Alien-like landscape with Dragon\'s Blood Trees and unique endemic species found nowhere else.' },
    { name: 'Shibam', description: '"Manhattan of the Desert" with 16th-century mud-brick skyscrapers reaching 30 meters high.' },
    { name: 'Old Walled City of Shibam', description: 'Ancient city with impressive tower houses, a UNESCO World Heritage site.' },
    { name: 'Marib Dam', description: 'Ruins of ancient engineering marvel from the Kingdom of Saba, once irrigating vast lands.' },
  ],
  mainDish: {
    id: 'yemen-main',
    name: 'Saltah',
    description:
      'National dish of Yemen: a bubbling stew topped with whipped fenugreek foam (hulbah), served sizzling hot.',
    cookingTime: 90,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Lamb or chicken', amount: 500, unit: 'g' },
      { name: 'Fenugreek seeds', amount: 100, unit: 'g' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Potatoes', amount: 2, unit: 'whole' },
      { name: 'Zhug (chili sauce)', amount: 2, unit: 'tbsp' },
      { name: 'Garlic', amount: 3, unit: 'cloves' },
      { name: 'Cumin', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Soak fenugreek seeds overnight, then whip with water into a thick foam',
      'Cook meat with onions, garlic, potatoes, and spices until tender',
      'Add chopped tomatoes and simmer until thick',
      'Top stew with zhug and fenugreek foam',
      'Heat until bubbling in a stone pot',
      'Serve immediately with flatbread',
    ],
    imageUrl: 'https://images.pexels.com/photos/5836649/pexels-photo-5836649.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  dessert: {
    id: 'yemen-dessert',
    name: 'Bint Al-Sahn',
    description:
      'Traditional Yemeni honey cake made with thin layers of buttery dough and drizzled with honey.',
    cookingTime: 60,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'All-purpose flour', amount: 500, unit: 'g' },
      { name: 'Butter (melted)', amount: 150, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'pieces' },
      { name: 'Honey', amount: 150, unit: 'ml' },
      { name: 'Yeast', amount: 7, unit: 'g' },
      { name: 'Water', amount: 200, unit: 'ml' },
      { name: 'Salt', amount: 0.5, unit: 'tsp' },
    ],
    steps: [
      'Mix yeast with warm water and let activate',
      'Combine flour, eggs, butter, salt, and yeast mixture',
      'Knead into a soft dough and let rise 45 minutes',
      'Stretch dough into thin layers in a round pan',
      'Bake at 180°C until golden',
      'Drizzle generously with honey before serving',
    ],
    imageUrl: 'https://images.pexels.com/photos/6163263/pexels-photo-6163263.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  drinks: {
    alcoholic: 'Not common',
    nonAlcoholic: 'Qishr (coffee husk tea), Yemeni coffee, Shai (tea)',
  },
  music: [
    'Al-Ghina al-San’ani',
    'Traditional oud music',
    'Folk poetry chants',
  ],
  decorationIdeas: [
    'Red, white, and black flag colors',
    'Mud-brick tower house motifs',
    'Coffee plant imagery',
    'Geometric Islamic patterns',
  ],
  conversationStarters: [
    'Have you heard about Yemen’s coffee history?',
    'Would you like to visit the old city of Sana’a?',
    'Have you tried Middle Eastern flatbreads?',
  ],
  quiz: [
    {
      id: 'yemen-q1',
      question: 'What is the capital of Yemen?',
      options: ['Aden', "Sana'a", 'Taiz', 'Hodeidah'],
      correctAnswer: 1,
    },
    {
      id: 'yemen-q2',
      question: 'Yemen is considered the birthplace of which global drink?',
      options: ['Tea', 'Coffee', 'Cocoa', 'Wine'],
      correctAnswer: 1,
    },
    {
      id: 'yemen-q3',
      question: 'What is the traditional Yemeni stew called?',
      options: ['Mandi', 'Saltah', 'Kabsa', 'Harees'],
      correctAnswer: 1,
    },
    {
      id: 'yemen-q4',
      question: 'Which island is famous for unique plants like the Dragon Blood Tree?',
      options: ['Bahrain', 'Socotra', 'Zanzibar', 'Maldives'],
      correctAnswer: 1,
    },
    {
      id: 'yemen-q5',
      question: 'What ancient kingdom is associated with the Queen of Sheba?',
      options: ['Saba', 'Assyria', 'Babylon', 'Persia'],
      correctAnswer: 0,
    },
    {
      id: 'yemen-q6',
      question: 'What foam tops Yemen’s national dish?',
      options: ['Yogurt', 'Fenugreek', 'Egg white', 'Cream'],
      correctAnswer: 1,
    },
    {
      id: 'yemen-q7',
      question: 'What port gave its name to mocha coffee?',
      options: ['Aden', 'Mocha', 'Salalah', 'Jeddah'],
      correctAnswer: 1,
    },
    {
      id: 'yemen-q8',
      question: 'Which language is officially spoken in Yemen?',
      options: ['Arabic', 'English', 'Amharic', 'Persian'],
      correctAnswer: 0,
    },
    {
      id: 'yemen-q9',
      question: 'What type of houses is Yemen famous for?',
      options: ['Glass towers', 'Mud-brick tower houses', 'Stone huts', 'Wood cabins'],
      correctAnswer: 1,
    },
    {
      id: 'yemen-q10',
      question: 'Which continent is Yemen part of?',
      options: ['Africa', 'Asia', 'Europe', 'South America'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 58, y: 27 },
};
