import { Country } from '@/types';

export const kuwait: Country = {
  id: 'kuwait',
  name: 'Kuwait',
  code: 'KW',
  continent: 'Asia',
  flag: '🇰🇼',
  landscapeImage: 'https://images.unsplash.com/photo-1578070181910-f1e514afdd08?w=800',
  description: 'Kuwait is a small oil-rich country on the Persian Gulf, known for modern architecture, high living standards, and pearl diving heritage.',
  quickFacts: [
    { label: 'Capital', value: 'Kuwait City' },
    { label: 'Population', value: '4.3 million' },
    { label: 'Official Language', value: 'Arabic' },
    { label: 'Currency', value: 'Kuwaiti Dinar' },
    { label: 'Area', value: '17,818 km²' },
  ],
  facts: [
    'Has one of the world\'s highest-valued currencies',
    'Major oil exporter since 1930s',
    'Home to the Kuwait Towers landmark',
    'Historical pearl diving center',
  ],
  foodCulture: 'Kuwaiti cuisine blends Arab, Persian, Indian, and Mediterranean influences with rice, meat, and seafood.',
  mainDish: {
    id: 'kuwait-main',
    name: 'Machboos',
    description: 'Spiced rice with meat or fish',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken or lamb', amount: 1, unit: 'kg' },
      { name: 'Basmati rice', amount: 500, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Baharat spice', amount: 2, unit: 'tbsp' },
      { name: 'Dried limes', amount: 3, unit: 'whole' },
    ],
    steps: [
      'Brown meat with onions',
      'Add spices and tomatoes',
      'Simmer until meat is tender',
      'Cook rice with meat broth and dried limes',
      'Layer meat and rice',
      'Garnish with fried onions and nuts',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600',
  },
  drinks: {
    alcoholic: 'Not available (prohibited)',
    nonAlcoholic: 'Arabic coffee, Laban (buttermilk), Fresh juice',
  },
  music: [
    'Traditional Sawt music',
    'Arabic pop',
    'Pearl diving songs',
  ],
  decorationIdeas: [
    'Green, white, red and black flag colors',
    'Kuwait Towers imagery',
    'Desert and sea themes',
    'Modern architecture',
  ],
  conversationStarters: [
    'What do you know about Gulf culture?',
    'Have you tried Middle Eastern spices?',
  ],
  quiz: [
    {
      id: 'kuwait-q1',
      question: 'What is the capital of Kuwait?',
      options: ['Kuwait City', 'Doha', 'Dubai', 'Manama'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 58, y: 35 },
};
