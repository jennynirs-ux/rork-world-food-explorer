import { Country } from '@/types';

export const palestine: Country = {
  id: 'palestine',
  name: 'Palestine',
  code: 'PS',
  continent: 'Asia',
  flag: '🇵🇸',
  landscapeImage: 'https://images.unsplash.com/photo-1552889762-908906041956?w=800',
  description: 'Palestine is a region in the Middle East with deep historical and religious significance, known for ancient cities and ongoing political complexity.',
  quickFacts: [
    { label: 'Capital', value: 'Ramallah (de facto)' },
    { label: 'Population', value: '5.2 million' },
    { label: 'Official Language', value: 'Arabic' },
    { label: 'Currency', value: 'Israeli Shekel, Jordanian Dinar' },
    { label: 'Area', value: '6,020 km²' },
  ],
  facts: [
    'Bethlehem is the birthplace of Jesus',
    'Jericho is one of the world\'s oldest cities',
    'Rich in olive groves and cultivation',
    'Home to important religious sites',
  ],
  foodCulture: 'Palestinian cuisine features Levantine dishes with olive oil, za\'atar, and fresh vegetables.',
  mainDish: {
    id: 'palestine-main',
    name: 'Musakhan',
    description: 'Roasted chicken with sumac and onions on taboon bread',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken', amount: 1, unit: 'kg' },
      { name: 'Onions', amount: 4, unit: 'whole' },
      { name: 'Sumac', amount: 4, unit: 'tbsp' },
      { name: 'Taboon bread', amount: 3, unit: 'pieces' },
      { name: 'Olive oil', amount: 100, unit: 'ml' },
      { name: 'Pine nuts', amount: 50, unit: 'g' },
    ],
    steps: [
      'Roast chicken with sumac and olive oil',
      'Caramelize onions slowly',
      'Toast pine nuts',
      'Layer bread on platter',
      'Top with onions and chicken',
      'Garnish with pine nuts and sumac',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600',
  },
  drinks: {
    alcoholic: 'Arak, Palestinian wine',
    nonAlcoholic: 'Arabic coffee, Mint tea, Tamarind juice',
  },
  music: [
    'Traditional Dabke',
    'Arabic folk songs',
    'Oud music',
  ],
  decorationIdeas: [
    'Black, white, red and green flag colors',
    'Olive tree motifs',
    'Traditional embroidery',
    'Historical sites imagery',
  ],
  conversationStarters: [
    'Have you tried Palestinian olive oil?',
    'What do you know about Levantine cuisine?',
  ],
  quiz: [
    {
      id: 'palestine-q1',
      question: 'Which city is considered the birthplace of Jesus?',
      options: ['Jerusalem', 'Bethlehem', 'Nazareth', 'Jericho'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 54, y: 36 },
};
