import { Country } from '@/types';

export const oman: Country = {
  id: 'oman',
  name: 'Oman',
  code: 'OM',
  continent: 'Asia',
  flag: '🇴🇲',
  landscapeImage: 'https://images.unsplash.com/photo-1578070181910-f1e514afdd08?w=800',
  description: 'Oman is an Arabian Peninsula country known for diverse landscapes from deserts to mountains, ancient forts, and traditional culture.',
  quickFacts: [
    { label: 'Capital', value: 'Muscat' },
    { label: 'Population', value: '5.2 million' },
    { label: 'Official Language', value: 'Arabic' },
    { label: 'Currency', value: 'Omani Rial' },
    { label: 'Area', value: '309,500 km²' },
  ],
  facts: [
    'One of the oldest independent states in the Arab world',
    'Known for frankincense trade since ancient times',
    'Has dramatic Wahiba Sands desert',
    'Rich in traditional dhow boat building',
  ],
  foodCulture: 'Omani cuisine blends Arab, Indian, and East African influences with rice, meat, and aromatic spices.',
  mainDish: {
    id: 'oman-main',
    name: 'Shuwa',
    description: 'Slow-roasted spiced lamb wrapped in banana leaves',
    cookingTime: 1440,
    servings: 10,
    dietType: 'meat',
    ingredients: [
      { name: 'Whole lamb', amount: 5, unit: 'kg' },
      { name: 'Omani spice mix', amount: 100, unit: 'g' },
      { name: 'Banana leaves', amount: 10, unit: 'pieces' },
      { name: 'Garlic', amount: 10, unit: 'cloves' },
      { name: 'Ginger', amount: 50, unit: 'g' },
    ],
    steps: [
      'Marinate lamb with spices overnight',
      'Wrap in banana leaves',
      'Place in underground sand oven',
      'Cook for 24-48 hours',
      'Unwrap and shred meat',
      'Serve with rice and dates',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600',
  },
  drinks: {
    alcoholic: 'Not common (Islamic country)',
    nonAlcoholic: 'Qahwa (Omani coffee with cardamom), Laban, Fresh dates',
  },
  music: [
    'Traditional Omani folk',
    'Liwa music',
    'Bedouin songs',
  ],
  decorationIdeas: [
    'Red, white and green flag colors',
    'Fort and castle imagery',
    'Desert landscapes',
    'Frankincense themes',
  ],
  conversationStarters: [
    'Have you tried frankincense?',
    'What do you know about Arabian deserts?',
  ],
  quiz: [
    {
      id: 'oman-q1',
      question: 'What is the capital of Oman?',
      options: ['Dubai', 'Muscat', 'Doha', 'Abu Dhabi'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 61, y: 30 },
};
