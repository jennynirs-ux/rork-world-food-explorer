import { Country } from '@/types';

export const syria: Country = {
  id: 'syria',
  name: 'Syria',
  code: 'SY',
  continent: 'Asia',
  flag: '🇸🇾',
  landscapeImage: 'https://images.unsplash.com/photo-1578070181910-f1e514afdd08?w=800',
  description:
    "Syria is an ancient Middle Eastern country with a rich history dating back millennia, known for Damascus, Aleppo, and diverse cultural heritage.",
  quickFacts: [
    { label: 'Capital', value: 'Damascus' },
    { label: 'Population', value: '18 million' },
    { label: 'Official Language', value: 'Arabic' },
    { label: 'Currency', value: 'Syrian Pound' },
    { label: 'Area', value: '185,180 km²' },
  ],
  facts: [
    'Damascus is one of the oldest continuously inhabited cities',
    'Home to six UNESCO World Heritage Sites',
    'Birthplace of many ancient civilizations',
    'Known for historic souqs and architecture',
  ],
  foodCulture:
    'Syrian cuisine is rich and varied with influences from Ottoman, Persian, and Mediterranean traditions.',
  mainDish: {
    id: 'syria-main',
    name: 'Kibbeh',
    description: 'Bulgur and meat croquettes, national dish',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Ground lamb', amount: 500, unit: 'g' },
      { name: 'Fine bulgur', amount: 300, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Pine nuts', amount: 100, unit: 'g' },
      { name: 'Allspice', amount: 1, unit: 'tsp' },
      { name: 'Cinnamon', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Soak bulgur in water for 15 minutes and drain well',
      'Mix bulgur with half the meat, grated onion, and spices',
      'Prepare filling by cooking remaining meat with pine nuts and spices',
      'Form oval shells and fill with meat mixture',
      'Seal carefully and shape into torpedoes',
      'Deep fry until golden brown',
      'Drain on paper towels and serve warm',
      'Serve with yogurt and fresh salad',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600',
  },

  dessert: {
    id: 'syria-dessert',
    name: 'Ma’amoul',
    description:
      'Traditional Syrian semolina cookies filled with dates or nuts, commonly prepared for religious holidays.',
    cookingTime: 60,
    servings: 24,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Semolina', amount: 500, unit: 'g' },
      { name: 'Butter (melted)', amount: 250, unit: 'g' },
      { name: 'Milk', amount: 120, unit: 'ml' },
      { name: 'Sugar', amount: 50, unit: 'g' },
      { name: 'Date paste', amount: 300, unit: 'g' },
      { name: 'Orange blossom water', amount: 2, unit: 'tbsp' },
      { name: 'Rose water', amount: 1, unit: 'tbsp' },
      { name: 'Powdered sugar (optional)', amount: 50, unit: 'g' },
    ],
    steps: [
      'Mix semolina with melted butter and let rest 30 minutes',
      'Add milk, sugar, orange blossom water, and rose water',
      'Knead gently into a soft dough',
      'Take small portions and flatten in your palm',
      'Fill with date paste and seal into balls',
      'Press into decorative molds if available',
      'Place on baking tray and bake at 180°C for 15–18 minutes',
      'Let cool completely',
      'Dust lightly with powdered sugar if desired',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1604908554168-6a77b90c2c88?w=600',
  },

  drinks: {
    alcoholic: 'Arak (anise-flavored)',
    nonAlcoholic: 'Arabic coffee, Mint tea, Jallab (date syrup drink)',
  },
  music: ['Traditional Dabke', 'Arabic classical music', 'Levantine folk songs'],
  decorationIdeas: [
    'Red, white, black and green flag colors',
    'Damascus rose patterns',
    'Historic architecture imagery',
    'Arabic calligraphy',
  ],
  conversationStarters: [
    'What do you know about ancient Middle Eastern history?',
    'Have you tried Levantine cuisine?',
  ],
  quiz: [
    {
      id: 'syria-q1',
      question: "What is Syria's capital city?",
      options: ['Aleppo', 'Damascus', 'Beirut', 'Amman'],
      correctAnswer: 1,
    },
    {
      id: 'syria-q2',
      question:
        'Which famous ancient city in Syria was a major Silk Road oasis and has UNESCO-listed ruins?',
      options: ['Palmyra', 'Petra', 'Persepolis', 'Byblos'],
      correctAnswer: 0,
    },
    {
      id: 'syria-q3',
      question: 'Which sea borders Syria to the west?',
      options: ['Red Sea', 'Mediterranean Sea', 'Black Sea', 'Caspian Sea'],
      correctAnswer: 1,
    },
    {
      id: 'syria-q4',
      question: 'What is the primary official language of Syria?',
      options: ['Persian', 'Turkish', 'Arabic', 'Hebrew'],
      correctAnswer: 2,
    },
    {
      id: 'syria-q5',
      question: 'Kibbeh is most commonly made with bulgur and what?',
      options: ['Fish', 'Meat', 'Cheese', 'Chickpeas'],
      correctAnswer: 1,
    },
    {
      id: 'syria-q6',
      question: 'Which dance is widely associated with Levantine celebrations?',
      options: ['Dabke', 'Flamenco', 'Tango', 'Samba'],
      correctAnswer: 0,
    },
    {
      id: 'syria-q7',
      question:
        'Which two historic Syrian cities are often mentioned as major cultural centers?',
      options: [
        'Damascus and Aleppo',
        'Basra and Baghdad',
        'Jerusalem and Jaffa',
        'Mecca and Medina',
      ],
      correctAnswer: 0,
    },
    {
      id: 'syria-q8',
      question: 'Syria is part of which broader region?',
      options: ['Scandinavia', 'Levant / Middle East', 'Central America', 'Oceania'],
      correctAnswer: 1,
    },
    {
      id: 'syria-q9',
      question: "What is Syria's currency called?",
      options: ['Syrian Pound', 'Syrian Dinar', 'Syrian Rial', 'Syrian Lira (Euro)'],
      correctAnswer: 0,
    },
    {
      id: 'syria-q10',
      question: 'Which of these is a common non-alcoholic drink in Syrian culture?',
      options: ['Matcha latte', 'Arabic coffee', 'Root beer float', 'Bubble tea'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 55, y: 37 },
};
