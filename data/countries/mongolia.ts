import { Country } from '@/types';

export const mongolia: Country = {
  id: 'mongolia',
  name: 'Mongolia',
  code: 'MN',
  continent: 'Asia',
  flag: '🇲🇳',
  landscapeImage: 'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800',
  description: 'Mongolia is a vast landlocked country known for nomadic culture, the Gobi Desert, steppes, and the legacy of Genghis Khan.',
  quickFacts: [
    { label: 'Capital', value: 'Ulaanbaatar' },
    { label: 'Population', value: '3.3 million' },
    { label: 'Official Language', value: 'Mongolian' },
    { label: 'Currency', value: 'Mongolian Tögrög' },
    { label: 'Area', value: '1,564,116 km²' },
  ],
  facts: [
    'One of the least densely populated countries in the world',
    'Home to the Mongol Empire, once the largest contiguous empire',
    'Traditional nomadic lifestyle is still practiced',
    'The Gobi Desert spans southern Mongolia',
  ],
  foodCulture: 'Mongolian cuisine centers on meat and dairy with limited vegetables due to the harsh climate.',
  mainDish: {
    id: 'mongolia-main',
    name: 'Khorkhog',
    description: 'Traditional barbecue with mutton and hot stones',
    cookingTime: 120,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Mutton', amount: 2, unit: 'kg' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Carrots', amount: 3, unit: 'whole' },
      { name: 'Potatoes', amount: 4, unit: 'whole' },
      { name: 'Hot stones', amount: 10, unit: 'pieces' },
      { name: 'Salt', amount: 2, unit: 'tbsp' },
    ],
    steps: [
      'Heat stones in fire until very hot',
      'Layer meat and vegetables in pot',
      'Add hot stones between layers',
      'Seal pot and cook for 90 minutes',
      'Open carefully to release steam',
      'Serve with the tender, smoky meat',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600',
  },
  drinks: {
    alcoholic: 'Airag (fermented mare\'s milk), Vodka',
    nonAlcoholic: 'Suutei tsai (milk tea), Kumis',
  },
  music: [
    'Throat singing (Khoomei)',
    'Morin khuur (horsehead fiddle)',
    'Traditional long songs',
  ],
  decorationIdeas: [
    'Blue, red and yellow flag colors',
    'Traditional gers (yurts)',
    'Steppe landscapes',
    'Horse imagery',
  ],
  conversationStarters: [
    'Have you heard Mongolian throat singing?',
    'What do you know about nomadic life?',
    'Do you enjoy horseback riding?',
  ],
  quiz: [
    {
      id: 'mongolia-q1',
      question: 'What is the capital of Mongolia?',
      options: ['Ulaanbaatar', 'Bishkek', 'Astana', 'Beijing'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 78, y: 48 },
};
