import { Country } from '@/types';

export const bahrain: Country = {
  id: 'bahrain',
  name: 'Bahrain',
  code: 'BH',
  continent: 'Asia',
  flag: '🇧🇭',
  landscapeImage: 'https://images.unsplash.com/photo-1591608971362-f08b2a75731a?w=800',
  description: 'Bahrain is an island nation in the Persian Gulf, known for modern architecture, pearl diving heritage, and the Formula 1 Grand Prix.',
  quickFacts: [
    { label: 'Capital', value: 'Manama' },
    { label: 'Population', value: '1.7 million' },
    { label: 'Official Language', value: 'Arabic' },
    { label: 'Currency', value: 'Bahraini Dinar' },
    { label: 'Area', value: '765 km²' },
  ],
  facts: [
    'Bahrain was once the center of the ancient Dilmun civilization',
    'The country has been a pearl diving center for thousands of years',
    'Bahrain hosts the Formula 1 Grand Prix',
    'The Tree of Life is a 400-year-old mesquite tree in the desert',
  ],
  foodCulture: 'Bahraini cuisine blends Arab, Persian, and Indian influences. Fresh seafood, rice dishes, and dates are staples.',
  mainDish: {
    id: 'bahrain-main',
    name: 'Machboos',
    description: 'Spiced rice with chicken or lamb, Bahraini national dish',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken or lamb', amount: 1, unit: 'kg' },
      { name: 'Basmati rice', amount: 500, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Baharat spice mix', amount: 2, unit: 'tbsp' },
      { name: 'Dried limes', amount: 3, unit: 'whole' },
    ],
    steps: [
      'Brown meat with onions',
      'Add spices, tomatoes, and water',
      'Simmer until meat is tender',
      'Cook rice separately with dried limes',
      'Layer rice over meat and steam together',
      'Serve with fried onions and nuts on top',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600',
  },
  drinks: {
    alcoholic: 'Limited availability',
    nonAlcoholic: 'Arabic coffee, Cardamom tea, Fresh juice',
  },
  music: [
    'Traditional Fidjeri sea music',
    'Arabic pop',
    'Pearl diving songs',
  ],
  decorationIdeas: [
    'Red and white flag colors',
    'Pearl diving heritage elements',
    'Modern architecture imagery',
    'Arabian patterns',
  ],
  conversationStarters: [
    'Have you been to a Formula 1 race?',
    'What do you know about pearl diving?',
    'Do you enjoy Middle Eastern cuisine?',
  ],
  quiz: [
    {
      id: 'bahrain-q1',
      question: 'What is the capital of Bahrain?',
      options: ['Dubai', 'Manama', 'Doha', 'Riyadh'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 59, y: 35 },
};
