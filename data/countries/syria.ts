import { Country } from '@/types';

export const syria: Country = {
  id: 'syria',
  name: 'Syria',
  code: 'SY',
  continent: 'Asia',
  flag: '🇸🇾',
  landscapeImage: 'https://images.unsplash.com/photo-1578070181910-f1e514afdd08?w=800',
  description: 'Syria is an ancient Middle Eastern country with a rich history dating back millennia, known for Damascus, Aleppo, and diverse cultural heritage.',
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
  foodCulture: 'Syrian cuisine is rich and varied with influences from Ottoman, Persian, and Mediterranean traditions.',
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
      'Soak bulgur in water',
      'Mix bulgur with half the meat and spices',
      'Make filling with remaining meat and pine nuts',
      'Form into oval shapes with filling inside',
      'Deep fry until golden brown',
      'Serve with yogurt and salad',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600',
  },
  drinks: {
    alcoholic: 'Arak (anise-flavored)',
    nonAlcoholic: 'Arabic coffee, Mint tea, Jallab (date syrup drink)',
  },
  music: [
    'Traditional Dabke',
    'Arabic classical music',
    'Levantine folk songs',
  ],
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
      question: 'What is the capital of Syria?',
      options: ['Aleppo', 'Damascus', 'Beirut', 'Amman'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 55, y: 37 },
};
