import { Country } from '@/types';

export const northMacedonia: Country = {
  id: 'north-macedonia',
  name: 'North Macedonia',
  code: 'MK',
  continent: 'Europe',
  flag: '🇲🇰',
  landscapeImage: 'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800',
  description: 'North Macedonia is a Balkan country known for Lake Ohrid, ancient history, and diverse cultural heritage.',
  quickFacts: [
    { label: 'Capital', value: 'Skopje' },
    { label: 'Population', value: '2.1 million' },
    { label: 'Official Language', value: 'Macedonian' },
    { label: 'Currency', value: 'Macedonian Denar' },
    { label: 'Area', value: '25,713 km²' },
  ],
  facts: [
    'Lake Ohrid is one of Europe\'s oldest and deepest lakes',
    'Birthplace of Mother Teresa',
    'Changed name from Macedonia to North Macedonia in 2019',
    'Rich in ancient Greek and Roman heritage',
  ],
  foodCulture: 'North Macedonian cuisine blends Balkan, Mediterranean, and Turkish influences.',
  mainDish: {
    id: 'north-macedonia-main',
    name: 'Tavče Gravče',
    description: 'Baked beans in earthenware pot',
    cookingTime: 90,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'White beans', amount: 500, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Red peppers', amount: 2, unit: 'whole' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Paprika', amount: 2, unit: 'tsp' },
      { name: 'Vegetable oil', amount: 100, unit: 'ml' },
    ],
    steps: [
      'Soak beans overnight',
      'Cook beans until tender',
      'Sauté onions and peppers',
      'Add tomatoes and paprika',
      'Mix with beans in clay pot',
      'Bake at 350°F for 30 minutes',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1568158879083-c42860933ed7?w=600',
  },
  drinks: {
    alcoholic: 'Rakija, Macedonian wine, Skopsko beer',
    nonAlcoholic: 'Boza, Turkish coffee, Salep',
  },
  music: [
    'Traditional folk music',
    'Macedonian brass bands',
    'Balkan beats',
  ],
  decorationIdeas: [
    'Red and yellow flag colors',
    'Lake Ohrid imagery',
    'Ancient ruins themes',
    'Balkan patterns',
  ],
  conversationStarters: [
    'Have you visited Lake Ohrid?',
    'What do you know about Balkan cuisine?',
  ],
  quiz: [
    {
      id: 'north-macedonia-q1',
      question: 'What is the capital of North Macedonia?',
      options: ['Skopje', 'Ohrid', 'Bitola', 'Tetovo'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 51, y: 42 },
};
