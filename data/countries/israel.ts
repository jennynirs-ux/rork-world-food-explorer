import { Country } from '@/types';

export const israel: Country = {
  id: 'israel',
  name: 'Israel',
  code: 'IL',
  continent: 'Asia',
  flag: '🇮🇱',
  landscapeImage: 'https://images.unsplash.com/photo-1552889762-908906041956?w=800',
  description: 'Israel is a Middle Eastern country on the Mediterranean, known for religious significance, high-tech industry, and diverse culture.',
  quickFacts: [
    { label: 'Capital', value: 'Jerusalem (disputed)' },
    { label: 'Population', value: '9.5 million' },
    { label: 'Official Languages', value: 'Hebrew, Arabic' },
    { label: 'Currency', value: 'Israeli Shekel' },
    { label: 'Area', value: '22,072 km²' },
  ],
  facts: [
    'Home to holy sites for Judaism, Christianity, and Islam',
    'Has more museums per capita than any other country',
    'The Dead Sea is the lowest point on Earth',
    'Leader in technology and innovation',
  ],
  foodCulture: 'Israeli cuisine blends Middle Eastern, Mediterranean, and Jewish diaspora influences with fresh ingredients.',
  mainDish: {
    id: 'israel-main',
    name: 'Shakshuka',
    description: 'Eggs poached in spiced tomato sauce',
    cookingTime: 30,
    servings: 4,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Eggs', amount: 6, unit: 'whole' },
      { name: 'Tomatoes', amount: 800, unit: 'g' },
      { name: 'Bell peppers', amount: 2, unit: 'whole' },
      { name: 'Onions', amount: 1, unit: 'whole' },
      { name: 'Cumin', amount: 1, unit: 'tsp' },
      { name: 'Paprika', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Sauté onions and peppers',
      'Add tomatoes and spices',
      'Simmer until thick sauce forms',
      'Make wells and crack eggs in',
      'Cover and cook until eggs are set',
      'Serve with challah or pita bread',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1587334206607-93c1b2c7ec6d?w=600',
  },
  drinks: {
    alcoholic: 'Israeli wine, Goldstar beer, Arak',
    nonAlcoholic: 'Limonana (mint lemonade), Turkish coffee, Fresh juice',
  },
  music: [
    'Mizrahi music',
    'Israeli pop',
    'Traditional Jewish songs',
  ],
  decorationIdeas: [
    'Blue and white flag colors',
    'Star of David',
    'Mediterranean themes',
    'Ancient Jerusalem imagery',
  ],
  conversationStarters: [
    'Have you visited historical religious sites?',
    'What do you know about Middle Eastern cuisine?',
  ],
  quiz: [
    {
      id: 'israel-q1',
      question: 'What is the official language of Israel?',
      options: ['Arabic only', 'Hebrew only', 'Hebrew and Arabic', 'English'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 54, y: 36 },
};
