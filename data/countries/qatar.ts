import { Country } from '@/types';

export const qatar: Country = {
  id: 'qatar',
  name: 'Qatar',
  code: 'QA',
  continent: 'Asia',
  flag: '🇶🇦',
  landscapeImage: 'https://images.unsplash.com/photo-1578070181910-f1e514afdd08?w=800',
  description: 'Qatar is a wealthy Gulf state known for modern architecture, hosting the 2022 FIFA World Cup, and vast natural gas reserves.',
  quickFacts: [
    { label: 'Capital', value: 'Doha' },
    { label: 'Population', value: '2.9 million' },
    { label: 'Official Language', value: 'Arabic' },
    { label: 'Currency', value: 'Qatari Riyal' },
    { label: 'Area', value: '11,586 km²' },
  ],
  facts: [
    'Hosted the 2022 FIFA World Cup',
    'One of the world\'s richest countries per capita',
    'Home to Al Jazeera news network',
    'Has the world\'s third-largest natural gas reserves',
  ],
  foodCulture: 'Qatari cuisine blends Arab, Persian, and Indian influences with rice, lamb, and seafood.',
  mainDish: {
    id: 'qatar-main',
    name: 'Machbous',
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
      'Brown meat with spices',
      'Add onions and tomatoes',
      'Simmer until tender',
      'Cook rice with broth and dried limes',
      'Layer meat and rice',
      'Garnish with nuts and raisins',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600',
  },
  drinks: {
    alcoholic: 'Not available (prohibited)',
    nonAlcoholic: 'Arabic coffee, Karak tea, Fresh juice',
  },
  music: [
    'Traditional Ardah',
    'Gulf music',
    'Arabic pop',
  ],
  decorationIdeas: [
    'Maroon and white flag colors',
    'Modern skyline imagery',
    'Desert themes',
    'Islamic architecture',
  ],
  conversationStarters: [
    'Did you watch the 2022 World Cup?',
    'What do you know about Gulf architecture?',
  ],
  quiz: [
    {
      id: 'qatar-q1',
      question: 'What is the capital of Qatar?',
      options: ['Dubai', 'Doha', 'Abu Dhabi', 'Muscat'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 59, y: 34 },
};
