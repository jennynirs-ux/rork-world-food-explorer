import { Country } from '@/types';

export const niger: Country = {
  id: 'niger',
  name: 'Niger',
  code: 'NE',
  continent: 'Africa',
  flag: '🇳🇪',
  landscapeImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
  description: 'Niger is a landlocked Saharan country in West Africa, known for ancient caravan routes, the Niger River, and diverse ethnic groups.',
  quickFacts: [
    { label: 'Capital', value: 'Niamey' },
    { label: 'Population', value: '25 million' },
    { label: 'Official Language', value: 'French' },
    { label: 'Currency', value: 'West African CFA Franc' },
    { label: 'Area', value: '1,267,000 km²' },
  ],
  facts: [
    'Over 80% of the country is Sahara Desert',
    'Home to the ancient city of Agadez',
    'Rich in uranium deposits',
    'The Niger River flows through the southwest',
  ],
  foodCulture: 'Nigerien cuisine features millet, sorghum, rice, and mutton with West African and Saharan influences.',
  mainDish: {
    id: 'niger-main',
    name: 'Dambou',
    description: 'Steamed millet couscous with vegetables',
    cookingTime: 60,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Millet', amount: 500, unit: 'g' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Okra', amount: 200, unit: 'g' },
      { name: 'Peanut paste', amount: 100, unit: 'g' },
      { name: 'Baobab leaves', amount: 100, unit: 'g' },
    ],
    steps: [
      'Steam millet until fluffy',
      'Make sauce with tomatoes and onions',
      'Add okra and baobab leaves',
      'Stir in peanut paste',
      'Simmer until thick',
      'Serve couscous with sauce',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600',
  },
  drinks: {
    alcoholic: 'Bili-bili (millet beer)',
    nonAlcoholic: 'Fura (millet drink), Hibiscus tea, Ginger juice',
  },
  music: [
    'Tuareg guitar music',
    'Traditional Hausa songs',
    'Desert blues',
  ],
  decorationIdeas: [
    'Orange, white and green flag colors',
    'Desert dune imagery',
    'Camel caravans',
    'Tuareg symbols',
  ],
  conversationStarters: [
    'What do you know about Saharan trade routes?',
    'Have you heard Tuareg music?',
  ],
  quiz: [
    {
      id: 'niger-q1',
      question: 'What is the capital of Niger?',
      options: ['Niamey', 'Agadez', 'Zinder', 'Maradi'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 48, y: 28 },
};
