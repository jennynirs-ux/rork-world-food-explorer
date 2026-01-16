import { Country } from '@/types';

export const mauritania: Country = {
  id: 'mauritania',
  name: 'Mauritania',
  code: 'MR',
  continent: 'Africa',
  flag: '🇲🇷',
  landscapeImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
  description: 'Mauritania is a vast Saharan country in Northwest Africa, known for ancient caravan routes, desert landscapes, and nomadic culture.',
  quickFacts: [
    { label: 'Capital', value: 'Nouakchott' },
    { label: 'Population', value: '4.7 million' },
    { label: 'Official Language', value: 'Arabic' },
    { label: 'Currency', value: 'Mauritanian Ouguiya' },
    { label: 'Area', value: '1,030,700 km²' },
  ],
  facts: [
    'About 90% of the country is Sahara Desert',
    'Ancient cities like Chinguetti are UNESCO sites',
    'Rich in iron ore',
    'Traditional nomadic lifestyle still practiced',
  ],
  foodCulture: 'Mauritanian cuisine features couscous, dates, camel meat, and mint tea with Arab and Berber influences.',
  mainDish: {
    id: 'mauritania-main',
    name: 'Thieboudienne',
    description: 'Fish and rice with vegetables',
    cookingTime: 90,
    servings: 6,
    dietType: 'fish',
    ingredients: [
      { name: 'White fish', amount: 800, unit: 'g' },
      { name: 'Rice', amount: 500, unit: 'g' },
      { name: 'Tomato paste', amount: 3, unit: 'tbsp' },
      { name: 'Cabbage', amount: 300, unit: 'g' },
      { name: 'Carrots', amount: 3, unit: 'whole' },
      { name: 'Eggplant', amount: 1, unit: 'whole' },
    ],
    steps: [
      'Stuff fish with herbs and fry',
      'Remove fish and cook vegetables in oil',
      'Add tomato paste and water',
      'Add rice and cook until tender',
      'Return fish to pot',
      'Serve rice with fish and vegetables',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600',
  },
  drinks: {
    alcoholic: 'Not common (Islamic country)',
    nonAlcoholic: 'Mint tea (very sweet), Zrig (camel milk), Fresh dates',
  },
  music: [
    'Traditional Moorish music',
    'Tidinit lute music',
    'Desert blues',
  ],
  decorationIdeas: [
    'Green and yellow flag colors',
    'Desert dune imagery',
    'Crescent moon and star',
    'Camel themes',
  ],
  conversationStarters: [
    'Have you experienced Saharan culture?',
    'What do you know about desert nomads?',
  ],
  quiz: [
    {
      id: 'mauritania-q1',
      question: 'What percentage of Mauritania is desert?',
      options: ['50%', '70%', '90%', '100%'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 45, y: 32 },
};
