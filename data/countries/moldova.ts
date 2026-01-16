import { Country } from '@/types';

export const moldova: Country = {
  id: 'moldova',
  name: 'Moldova',
  code: 'MD',
  continent: 'Europe',
  flag: '🇲🇩',
  landscapeImage: 'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800',
  description: 'Moldova is a landlocked country in Eastern Europe, known for wine production, monasteries, and rolling countryside.',
  quickFacts: [
    { label: 'Capital', value: 'Chișinău' },
    { label: 'Population', value: '2.6 million' },
    { label: 'Official Language', value: 'Romanian' },
    { label: 'Currency', value: 'Moldovan Leu' },
    { label: 'Area', value: '33,846 km²' },
  ],
  facts: [
    'Has the world\'s largest wine cellar',
    'Known for high-quality wines',
    'One of Europe\'s least visited countries',
    'Rich in agricultural production',
  ],
  foodCulture: 'Moldovan cuisine blends Romanian, Russian, and Ukrainian influences with hearty meat dishes and fresh vegetables.',
  mainDish: {
    id: 'moldova-main',
    name: 'Mămăligă with Brânză',
    description: 'Cornmeal porridge with cheese and sour cream',
    cookingTime: 45,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Cornmeal', amount: 500, unit: 'g' },
      { name: 'Brânză cheese', amount: 300, unit: 'g' },
      { name: 'Sour cream', amount: 200, unit: 'ml' },
      { name: 'Butter', amount: 50, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'whole' },
    ],
    steps: [
      'Boil salted water',
      'Gradually add cornmeal while stirring',
      'Cook until thick porridge forms',
      'Turn out onto board and slice',
      'Top with crumbled cheese',
      'Serve with sour cream',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600',
  },
  drinks: {
    alcoholic: 'Moldovan wine, Divin (brandy), Beer',
    nonAlcoholic: 'Compot (fruit drink), Kvass',
  },
  music: [
    'Traditional folk music',
    'Moldovan hora dance',
    'Contemporary pop',
  ],
  decorationIdeas: [
    'Blue, yellow and red flag colors',
    'Vineyard imagery',
    'Traditional patterns',
    'Wine cellar themes',
  ],
  conversationStarters: [
    'Have you tried Moldovan wine?',
    'What do you know about Eastern European cuisine?',
  ],
  quiz: [
    {
      id: 'moldova-q1',
      question: 'What is the capital of Moldova?',
      options: ['Bucharest', 'Chișinău', 'Kiev', 'Sofia'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 53, y: 47 },
};
