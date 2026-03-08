import { Country } from '@/types';

export const thailand: Country = {
  id: 'thailand',
  name: 'Thailand',
  code: 'TH',
  continent: 'Asia',
  flag: '🇹🇭',
  landscapeImage: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80',
  description:
    'Thailand, the "Land of Smiles," is known for tropical beaches, ornate Buddhist temples, vibrant street food culture, and warm hospitality. A perfect blend of ancient traditions and modern city life.',
  quickFacts: [
    { label: 'Capital', value: 'Bangkok' },
    { label: 'Population', value: '69.8 million' },
    { label: 'Official Language', value: 'Thai' },
    { label: 'Currency', value: 'Thai Baht (฿)' },
    { label: 'Area', value: '513,120 km²' },
  ],

  facts: [
    'Thailand is the only Southeast Asian country never colonized by Europeans',
    "Bangkok's ceremonial full name is famously one of the longest city names in the world",
    'Thailand has over 1,430 islands',
    "The country is among the world's largest exporters of rice",
    'White elephants are considered sacred and royal in Thailand',
    'Many people celebrate New Year in different ways (Western New Year, Chinese New Year, and Songkran)',
    'Thailand has tens of thousands of Buddhist temples',
    'Red Bull was inspired by a Thai energy drink called Krating Daeng',
    'Thai massage (Nuad Thai) is a renowned traditional practice',
  ],

  foodCulture:
    'Thai cuisine balances five fundamental flavors: sweet, spicy, sour, bitter, and salty. Street food is a way of life, with vendors offering fresh, flavorful dishes at all hours. Meals are meant to be shared, and rice accompanies almost every dish.',

  history: [
    {
      year: '1238',
      title: 'Sukhothai Kingdom',
      description:
        'Often considered the first major Thai kingdom, shaping early Thai language, art, and governance.',
    },
    {
      year: '1351–1767',
      title: 'Ayutthaya Era',
      description:
        'Ayutthaya grew into a powerful trading and diplomatic hub until it fell in 1767.',
    },
    {
      year: '1767–1782',
      title: 'Thonburi Period',
      description:
        'A transitional era after Ayutthaya’s fall, consolidating territories and rebuilding.',
    },
    {
      year: '1782–Present',
      title: 'Rattanakosin Era (Bangkok)',
      description:
        'Bangkok became the capital; the era includes major modernization and cultural continuity.',
    },
    {
      year: '1932',
      title: 'Constitutional Monarchy',
      description:
        'A pivotal shift from absolute monarchy to a constitutional system.',
    },
  ],

  innovations: [
    {
      name: 'Krating Daeng (Red Bull Inspiration)',
      year: '1970s',
      description:
        'A Thai energy drink that later inspired the globally known Red Bull brand.',
    },
    {
      name: 'Nuad Thai (Traditional Thai Massage)',
      year: 'Centuries-old',
      description:
        'A traditional therapeutic practice combining acupressure, assisted stretching, and energy-line work.',
    },
    {
      name: 'Thai Street Food Culture',
      year: 'Modern era',
      description:
        'A highly developed urban food culture that shaped how cities eat—fast, fresh, and flavor-packed.',
    },
  ],

  mustVisit: [
    {
      name: 'Bangkok',
      description:
        'Temples, markets, canals, and rooftop views—plus incredible street food.',
    },
    {
      name: 'Chiang Mai',
      description:
        'Northern culture, night markets, and access to mountain scenery and temples.',
    },
    {
      name: 'Ayutthaya',
      description:
        'Historic ruins of the former capital—an easy cultural day trip from Bangkok.',
    },
    {
      name: 'Krabi (Railay / Ao Nang)',
      description:
        'Dramatic limestone cliffs, beaches, and island-hopping routes.',
    },
    {
      name: 'Phuket / Phi Phi Islands',
      description:
        'Famous beaches and boat trips; great for classic tropical scenery.',
    },
  ],

  travelEssentials: [
    { item: 'Visa', description: 'Visa rules vary by nationality; check before travel.' },
    {
      item: 'Best time to visit',
      description:
        'Generally November–February is cooler and drier; islands vary by coast and monsoon patterns.',
    },
    {
      item: 'Transport',
      description:
        'Domestic flights, trains, and buses are common; in cities, use trusted taxi/ride apps where available.',
    },
    {
      item: 'Money',
      description:
        'Cards are common in cities, but cash is handy for markets and street food.',
    },
    {
      item: 'Etiquette',
      description:
        'Dress respectfully in temples; remove shoes where required; be mindful around sacred spaces.',
    },
    {
      item: 'Food',
      description:
        'Street food is a highlight—start with busy stalls and freshly cooked dishes.',
    },
  ],

  mainDish: {
    id: 'thailand-main',
    name: 'Pad Thai',
    description:
      "Thailand's famous stir-fried rice noodles with shrimp, tofu, peanuts, and tamarind",
    cookingTime: 30,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'Rice noodles', amount: 400, unit: 'g' },
      { name: 'Shrimp', amount: 300, unit: 'g' },
      { name: 'Firm tofu', amount: 200, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'large' },
      { name: 'Bean sprouts', amount: 150, unit: 'g' },
      { name: 'Garlic chives', amount: 100, unit: 'g' },
      { name: 'Tamarind paste', amount: 3, unit: 'tbsp' },
      { name: 'Fish sauce', amount: 3, unit: 'tbsp' },
      { name: 'Palm sugar', amount: 2, unit: 'tbsp' },
      { name: 'Crushed peanuts', amount: 50, unit: 'g' },
    ],
    steps: [
      'Soak rice noodles in warm water for 30 minutes',
      'Mix tamarind paste, fish sauce, and palm sugar for sauce',
      'Heat wok with oil over high heat',
      'Fry tofu until golden, remove',
      'Cook shrimp until pink, remove',
      'Scramble eggs in wok, push to side',
      'Add drained noodles and sauce, toss quickly',
      'Add shrimp, tofu, and garlic chives',
      'Toss for 2–3 minutes until noodles are tender',
      'Serve topped with bean sprouts, peanuts, lime wedge, and chilies',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&q=80',
  },

  dessert: {
    id: 'thailand-dessert',
    name: 'Mango Sticky Rice',
    description: 'Sweet coconut sticky rice served with fresh ripe mango',
    cookingTime: 45,
    servings: 4,
    dietType: 'vegan',
    ingredients: [
      { name: 'Sticky rice', amount: 300, unit: 'g' },
      { name: 'Coconut milk', amount: 400, unit: 'ml' },
      { name: 'Sugar', amount: 100, unit: 'g' },
      { name: 'Salt', amount: 0.5, unit: 'tsp' },
      { name: 'Ripe mangoes', amount: 3, unit: 'large' },
      { name: 'Sesame seeds', amount: 1, unit: 'tbsp' },
    ],
    steps: [
      'Soak sticky rice in water for at least 4 hours',
      'Steam rice for 25–30 minutes',
      'Heat coconut milk with sugar and salt',
      'Mix most of coconut milk into hot rice',
      'Let absorb for 20 minutes',
      'Slice mangoes',
      'Serve rice with mango slices',
      'Drizzle remaining coconut milk on top',
      'Sprinkle with sesame seeds',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Mango_sticy_rice_%283859549574%29.jpg/800px-Mango_sticy_rice_%283859549574%29.jpg',
  },

  drinks: {
    alcoholic: 'Singha beer, Chang beer, Mekhong whiskey',
    nonAlcoholic: 'Thai iced tea, Coconut water, Nam manao (lime soda)',
  },

  music: [
    'Mor Lam (Isan folk)',
    'Luk Thung (Thai country)',
    'Piphat classical ensemble',
    'Thai pop and contemporary hip-hop',
  ],

  decorationIdeas: [
    'Red, white, and blue (flag colors)',
    'Gold accents inspired by temple decor',
    'Orchid flowers and tropical greenery',
    'Lanterns and night-market vibes',
    'Elephant motifs (tasteful and minimal)',
  ],

  conversationStarters: [
    'Which Thai dish do you love most—Pad Thai, green curry, or som tam?',
    'Would you rather explore temples in Bangkok or beaches in Krabi?',
    'Have you ever tried Thai iced tea?',
    'Sweet, spicy, sour—what flavor do you chase most?',
  ],

  quiz: [
    {
      id: 'thailand-q1',
      question: 'What is the capital of Thailand?',
      options: ['Phuket', 'Chiang Mai', 'Bangkok', 'Pattaya'],
      correctAnswer: 2,
    },
    {
      id: 'thailand-q2',
      question: "What is Thailand's traditional martial art called?",
      options: ['Karate', 'Muay Thai', 'Taekwondo', 'Kung Fu'],
      correctAnswer: 1,
    },
    {
      id: 'thailand-q3',
      question: 'What was Thailand called before 1939?',
      options: ['Burma', 'Siam', 'Khmer', 'Indochina'],
      correctAnswer: 1,
    },
    {
      id: 'thailand-q4',
      question: 'What is the main religion in Thailand?',
      options: ['Hinduism', 'Islam', 'Buddhism', 'Christianity'],
      correctAnswer: 2,
    },
    {
      id: 'thailand-q5',
      question: 'What does "Pad Thai" refer to?',
      options: ['Spicy noodles', 'Thai-style stir fry', 'Rice soup', 'Street market'],
      correctAnswer: 1,
    },
    {
      id: 'thailand-q6',
      question: 'Which animal is considered sacred in Thailand?',
      options: ['Tiger', 'Elephant', 'Monkey', 'Snake'],
      correctAnswer: 1,
    },
    {
      id: 'thailand-q7',
      question: 'What Thai festival celebrates the New Year with water?',
      options: ['Loy Krathong', 'Songkran', 'Yi Peng', 'Visakha Bucha'],
      correctAnswer: 1,
    },
    {
      id: 'thailand-q8',
      question: 'Which ingredient gives Pad Thai its sour flavor?',
      options: ['Lime', 'Vinegar', 'Tamarind', 'Fish sauce'],
      correctAnswer: 2,
    },
    {
      id: 'thailand-q9',
      question: 'Which Thai island group is famous for limestone cliffs?',
      options: ['Koh Samui', 'Phi Phi Islands', 'Koh Chang', 'Koh Tao'],
      correctAnswer: 1,
    },
    {
      id: 'thailand-q10',
      question: 'Why is Thailand called "The Land of Smiles"?',
      options: [
        'Because of tourism slogans',
        'Because smiling is part of Thai culture and etiquette',
        'Because of climate',
        'Because of festivals',
      ],
      correctAnswer: 1,
    },
  ],

  coordinates: { x: 75, y: 25 },
};
