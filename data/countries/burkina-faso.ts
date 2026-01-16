import { Country } from '@/types';

export const burkinaFaso: Country = {
  id: 'burkina-faso',
  name: 'Burkina Faso',
  code: 'BF',
  continent: 'Africa',
  flag: '🇧🇫',
  landscapeImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
  description: 'Burkina Faso is a landlocked country in West Africa known for its vibrant music scene, traditional masks, and the biennial FESPACO film festival.',
  quickFacts: [
    { label: 'Capital', value: 'Ouagadougou' },
    { label: 'Population', value: '21 million' },
    { label: 'Official Language', value: 'French' },
    { label: 'Currency', value: 'West African CFA Franc' },
    { label: 'Area', value: '274,200 km²' },
  ],
  facts: [
    'Burkina Faso means "Land of Honest People"',
    'Hosts Africa\'s largest film festival, FESPACO',
    'Known for elaborate traditional masks',
    'The country has no coastline',
  ],
  foodCulture: 'Burkinabé cuisine features millet, sorghum, rice, and local vegetables with peanut-based sauces.',
  mainDish: {
    id: 'burkina-main',
    name: 'Riz Gras',
    description: 'Rich rice cooked with meat and vegetables',
    cookingTime: 60,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Rice', amount: 500, unit: 'g' },
      { name: 'Beef or lamb', amount: 500, unit: 'g' },
      { name: 'Tomatoes', amount: 4, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Tomato paste', amount: 3, unit: 'tbsp' },
      { name: 'Vegetables', amount: 300, unit: 'g' },
    ],
    steps: [
      'Brown meat with onions',
      'Add tomatoes and tomato paste',
      'Add water and simmer until meat is tender',
      'Add rice and vegetables',
      'Cook until rice absorbs all liquid',
      'Serve hot with extra sauce',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600',
  },
  drinks: {
    alcoholic: 'Dolo (millet beer), Palm wine',
    nonAlcoholic: 'Bissap (hibiscus tea), Ginger juice, Baobab juice',
  },
  music: [
    'Balafon traditional music',
    'Afrobeat',
    'Traditional drum ensembles',
  ],
  decorationIdeas: [
    'Red, green and yellow flag colors',
    'Traditional masks',
    'Woven baskets',
    'African textiles',
  ],
  conversationStarters: [
    'Have you seen any African films?',
    'What do you know about West African art?',
    'Do you enjoy traditional music?',
  ],
  quiz: [
    {
      id: 'burkina-q1',
      question: 'What is the capital of Burkina Faso?',
      options: ['Bamako', 'Ouagadougou', 'Niamey', 'Abidjan'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 46, y: 25 },
};
