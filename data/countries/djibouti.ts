import { Country } from '@/types';

export const djibouti: Country = {
  id: 'djibouti',
  name: 'Djibouti',
  code: 'DJ',
  continent: 'Africa',
  flag: '🇩🇯',
  landscapeImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
  description: 'Djibouti is a small country on the Horn of Africa, known for its strategic location on the Red Sea, volcanic landscapes, and Lake Assal.',
  quickFacts: [
    { label: 'Capital', value: 'Djibouti City' },
    { label: 'Population', value: '1 million' },
    { label: 'Official Languages', value: 'French, Arabic' },
    { label: 'Currency', value: 'Djiboutian Franc' },
    { label: 'Area', value: '23,200 km²' },
  ],
  facts: [
    'Lake Assal is the lowest point in Africa',
    'One of the hottest inhabited places on Earth',
    'Strategic location with several foreign military bases',
    'Gateway to the Red Sea and Suez Canal',
  ],
  foodCulture: 'Djiboutian cuisine blends Somali, Afar, Yemeni, and French influences with seafood, goat meat, and spiced rice.',
  mainDish: {
    id: 'djibouti-main',
    name: 'Skoudehkaris',
    description: 'Spiced lamb and rice dish',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Lamb or goat', amount: 800, unit: 'g' },
      { name: 'Basmati rice', amount: 500, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Cardamom', amount: 5, unit: 'pods' },
      { name: 'Cinnamon', amount: 2, unit: 'sticks' },
      { name: 'Raisins', amount: 100, unit: 'g' },
    ],
    steps: [
      'Brown meat with onions and spices',
      'Add water and simmer until tender',
      'Cook rice separately with meat broth',
      'Layer rice and meat',
      'Garnish with raisins and fried onions',
      'Serve with banana and salad',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600',
  },
  drinks: {
    alcoholic: 'Limited availability',
    nonAlcoholic: 'Spiced tea, Coffee, Fresh juice',
  },
  music: [
    'Traditional Somali music',
    'Afar folk songs',
    'Red Sea coastal rhythms',
  ],
  decorationIdeas: [
    'Light blue, green and white flag colors',
    'Red Sea imagery',
    'Volcanic landscapes',
    'Desert themes',
  ],
  conversationStarters: [
    'Have you been to the Red Sea?',
    'What do you know about the Horn of Africa?',
  ],
  quiz: [
    {
      id: 'djibouti-q1',
      question: 'What is the capital of Djibouti?',
      options: ['Djibouti City', 'Addis Ababa', 'Mogadishu', 'Asmara'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 57, y: 24 },
};
