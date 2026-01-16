import { Country } from '@/types';

export const jordan: Country = {
  id: 'jordan',
  name: 'Jordan',
  code: 'JO',
  continent: 'Asia',
  flag: '🇯🇴',
  landscapeImage: 'https://images.unsplash.com/photo-1578070181910-f1e514afdd08?w=800',
  description: 'Jordan is a Middle Eastern country known for the ancient city of Petra, desert landscapes, the Dead Sea, and warm hospitality.',
  quickFacts: [
    { label: 'Capital', value: 'Amman' },
    { label: 'Population', value: '10.3 million' },
    { label: 'Official Language', value: 'Arabic' },
    { label: 'Currency', value: 'Jordanian Dinar' },
    { label: 'Area', value: '89,342 km²' },
  ],
  facts: [
    'Petra is one of the New Seven Wonders of the World',
    'Home to Wadi Rum desert, filming location for many movies',
    'The Dead Sea is the lowest point on Earth',
    'Jordan has excellent archaeological sites',
  ],
  foodCulture: 'Jordanian cuisine features mezze, grilled meats, rice dishes, and aromatic spices with Levantine influences.',
  mainDish: {
    id: 'jordan-main',
    name: 'Mansaf',
    description: 'National dish with lamb cooked in fermented yogurt sauce',
    cookingTime: 120,
    servings: 8,
    dietType: 'meat',
    ingredients: [
      { name: 'Lamb', amount: 1.5, unit: 'kg' },
      { name: 'Jameed (dried yogurt)', amount: 500, unit: 'g' },
      { name: 'Rice', amount: 500, unit: 'g' },
      { name: 'Pine nuts', amount: 100, unit: 'g' },
      { name: 'Almonds', amount: 100, unit: 'g' },
      { name: 'Turmeric', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Cook lamb until very tender',
      'Prepare jameed sauce with yogurt',
      'Cook rice with turmeric',
      'Toast pine nuts and almonds',
      'Layer rice on large platter',
      'Top with lamb, sauce, and nuts',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600',
  },
  drinks: {
    alcoholic: 'Arak (limited)',
    nonAlcoholic: 'Arabic coffee, Mint tea, Tamarind juice',
  },
  music: [
    'Traditional Bedouin music',
    'Arabic classical',
    'Levantine folk songs',
  ],
  decorationIdeas: [
    'Black, white, red and green flag colors',
    'Petra imagery',
    'Desert landscapes',
    'Mosaic patterns',
  ],
  conversationStarters: [
    'Have you seen Petra?',
    'What do you know about desert cultures?',
    'Do you enjoy Middle Eastern hospitality?',
  ],
  quiz: [
    {
      id: 'jordan-q1',
      question: 'What is the capital of Jordan?',
      options: ['Amman', 'Petra', 'Aqaba', 'Jerash'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 54, y: 35 },
};
