import { Country } from '@/types';

export const turkmenistan: Country = {
  id: 'turkmenistan',
  name: 'Turkmenistan',
  code: 'TM',
  continent: 'Asia',
  flag: '🇹🇲',
  landscapeImage: 'https://images.unsplash.com/photo-1565108781004-2a3ad8396bdb?w=800&q=80',
  description:
    'Turkmenistan is a Central Asian country known for the vast Karakum Desert, ancient Silk Road cities, rich natural gas reserves, and striking white-marble architecture in its capital, Ashgabat.',
  quickFacts: [
    { label: 'Capital', value: 'Ashgabat' },
    { label: 'Population', value: '6.3 million' },
    { label: 'Official Language', value: 'Turkmen' },
    { label: 'Currency', value: 'Turkmenistan Manat' },
    { label: 'Area', value: '488,100 km²' },
  ],

  facts: [
    'Around 80% of Turkmenistan is covered by the Karakum Desert',
    'The Darvaza gas crater is known as the “Door to Hell”',
    'Ashgabat holds world records for white-marble buildings',
    'Turkmenistan has some of the world’s largest natural gas reserves',
    'The Akhal-Teke horse is a national symbol',
    'The country was a key region along the ancient Silk Road',
  ],

  foodCulture:
    'Turkmen cuisine is based on lamb, rice, bread, and dairy products. Meals are hearty and influenced by nomadic Central Asian traditions, often accompanied by green tea. Hospitality plays an important role in daily life.',

  history: [
    {
      year: '3rd Century BC',
      title: 'Silk Road Era',
      description:
        'Cities like Merv became major centers of trade, culture, and learning along the Silk Road.',
    },
    {
      year: '11th Century',
      title: 'Seljuk Empire',
      description:
        'The Seljuks ruled much of the region, spreading Turkic culture and Islamic scholarship.',
    },
    {
      year: '1881',
      title: 'Russian Conquest',
      description:
        'The region was absorbed into the Russian Empire after the Battle of Geok Tepe.',
    },
    {
      year: '1991',
      title: 'Independence',
      description:
        'Turkmenistan gained independence following the collapse of the Soviet Union.',
    },
  ],

  innovations: [
    {
      name: 'Turkmen Carpets',
      year: 'Ancient',
      description:
        'Handwoven carpets are a national symbol and are recognized by UNESCO as intangible cultural heritage.',
    },
    {
      name: 'Desert Irrigation Systems',
      year: '20th Century',
      description:
        'Large-scale irrigation projects transformed arid land for agriculture, especially cotton.',
    },
    {
      name: 'White Marble Urban Design',
      year: 'Modern Era',
      description:
        'Ashgabat’s architecture features extensive use of white marble, earning world records.',
    },
  ],

  mustVisit: [
    {
      name: 'Darvaza Gas Crater',
      description:
        'A massive burning natural gas crater in the Karakum Desert, nicknamed the “Door to Hell.”',
    },
    {
      name: 'Ashgabat',
      description:
        'The capital city known for monumental white-marble buildings and wide boulevards.',
    },
    {
      name: 'Ancient Merv',
      description:
        'A UNESCO World Heritage Site and one of the most important Silk Road cities.',
    },
    {
      name: 'Kunya-Urgench',
      description:
        'Historic ruins of a medieval capital with mausoleums and minarets.',
    },
    {
      name: 'Karakum Desert',
      description:
        'One of the largest sand deserts in the world, covering most of the country.',
    },
  ],

  travelEssentials: [
    {
      item: 'Visa requirements',
      description:
        'Most visitors require a visa and official invitation; travel planning is essential.',
    },
    {
      item: 'Best time to visit',
      description:
        'Spring (April–May) and autumn (September–October) offer the most comfortable weather.',
    },
    {
      item: 'Getting around',
      description:
        'Travel is controlled; guided tours are common for foreign visitors.',
    },
    {
      item: 'Currency',
      description:
        'Cash is important; international cards are rarely accepted.',
    },
    {
      item: 'Cultural respect',
      description:
        'Modest clothing and respectful behavior are expected, especially outside cities.',
    },
  ],

  mainDish: {
    id: 'turkmenistan-main',
    name: 'Plov',
    description:
      'Traditional rice pilaf cooked with lamb, carrots, and spices',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Lamb', amount: 600, unit: 'g' },
      { name: 'Rice', amount: 500, unit: 'g' },
      { name: 'Carrots', amount: 3, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Cumin', amount: 1, unit: 'tsp' },
      { name: 'Vegetable oil', amount: 100, unit: 'ml' },
      { name: 'Salt', amount: 1.5, unit: 'tsp' },
    ],
    steps: [
      'Heat oil in a large heavy-bottomed pot',
      'Brown lamb pieces until well colored',
      'Add sliced onions and cook until soft',
      'Stir in julienned carrots and cumin',
      'Add water to cover meat and simmer for 30 minutes',
      'Spread rinsed rice evenly on top without stirring',
      'Cover and steam until rice is tender and liquid absorbed',
      'Fluff gently before serving',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=700&q=80',
  },

  dessert: {
    id: 'turkmenistan-dessert',
    name: 'Chak-Chak',
    description:
      'A traditional Central Asian dessert made from fried dough pieces bound together with honey syrup.',
    cookingTime: 40,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'All-purpose flour', amount: 300, unit: 'g' },
      { name: 'Eggs', amount: 3, unit: 'large' },
      { name: 'Honey', amount: 200, unit: 'g' },
      { name: 'Sugar', amount: 50, unit: 'g' },
      { name: 'Vegetable oil (for frying)', amount: 500, unit: 'ml' },
    ],
    steps: [
      'Mix flour and eggs into a firm dough',
      'Roll dough thin and cut into small strips or balls',
      'Deep-fry until golden and crisp',
      'Heat honey and sugar until smooth',
      'Pour syrup over fried dough and mix well',
      'Shape into a mound and let cool before serving',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=850&q=80',
  },

  drinks: {
    alcoholic: 'Vodka',
    nonAlcoholic: 'Chal (fermented camel milk), Green tea',
  },

  music: [
    'Traditional dutar string music',
    'Turkmen folk songs',
    'Epic oral poetry performances',
  ],

  decorationIdeas: [
    'Green and red flag colors',
    'Turkmen carpet patterns',
    'Desert and oasis imagery',
    'Akhal-Teke horse motifs',
  ],

  conversationStarters: [
    'Have you heard about the Door to Hell crater?',
    'What do you know about Silk Road cultures?',
    'Would you visit a desert country like Turkmenistan?',
  ],

  quiz: [
    {
      id: 'turkmenistan-q1',
      question: 'What is the capital of Turkmenistan?',
      options: ['Ashgabat', 'Tashkent', 'Bishkek', 'Dushanbe'],
      correctAnswer: 0,
    },
    {
      id: 'turkmenistan-q2',
      question: 'Which desert covers most of Turkmenistan?',
      options: ['Gobi', 'Karakum', 'Taklamakan', 'Sahara'],
      correctAnswer: 1,
    },
    {
      id: 'turkmenistan-q3',
      question: 'What natural gas site is nicknamed the “Door to Hell”?',
      options: ['Kyzylkum', 'Darvaza crater', 'Ustyurt Plateau', 'Kopet Dag'],
      correctAnswer: 1,
    },
    {
      id: 'turkmenistan-q4',
      question: 'Which animal is a national symbol of Turkmenistan?',
      options: ['Camel', 'Horse', 'Eagle', 'Wolf'],
      correctAnswer: 1,
    },
    {
      id: 'turkmenistan-q5',
      question: 'What is the official language of Turkmenistan?',
      options: ['Russian', 'Uzbek', 'Turkmen', 'Kazakh'],
      correctAnswer: 2,
    },
    {
      id: 'turkmenistan-q6',
      question: 'Which material dominates Ashgabat’s architecture?',
      options: ['Granite', 'Concrete', 'White marble', 'Sandstone'],
      correctAnswer: 2,
    },
    {
      id: 'turkmenistan-q7',
      question: 'Turkmenistan is especially rich in which natural resource?',
      options: ['Oil', 'Coal', 'Natural gas', 'Uranium'],
      correctAnswer: 2,
    },
    {
      id: 'turkmenistan-q8',
      question: 'Plov is mainly made from which ingredient?',
      options: ['Wheat', 'Rice', 'Millet', 'Corn'],
      correctAnswer: 1,
    },
    {
      id: 'turkmenistan-q9',
      question: 'What ancient trade route passed through Turkmenistan?',
      options: ['Amber Road', 'Spice Route', 'Silk Road', 'Royal Road'],
      correctAnswer: 2,
    },
    {
      id: 'turkmenistan-q10',
      question: 'Which region best describes Turkmenistan?',
      options: ['Middle East', 'Eastern Europe', 'Central Asia', 'South Asia'],
      correctAnswer: 2,
    },
  ],

  coordinates: { x: 62, y: 42 },
};
