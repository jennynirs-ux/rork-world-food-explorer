import { Country } from '@/types';

export const guineaBissau: Country = {
  id: 'guinea-bissau',
  name: 'Guinea-Bissau',
  code: 'GW',
  continent: 'Africa',
  flag: '🇬🇼',
  landscapeImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
  description: 'Guinea-Bissau is a small West African country known for its tropical forests, Atlantic coastline, and the Bijagós Archipelago.',
  quickFacts: [
    { label: 'Capital', value: 'Bissau' },
    { label: 'Population', value: '2 million' },
    { label: 'Official Language', value: 'Portuguese' },
    { label: 'Currency', value: 'West African CFA Franc' },
    { label: 'Area', value: '36,125 km²' },
  ],
  facts: [
    'The Bijagós Archipelago is a UNESCO Biosphere Reserve',
    'One of the world\'s top cashew producers',
    'Home to diverse wildlife including hippos and manatees',
    'Rich in traditional animist cultures',
  ],
  foodCulture: 'Cuisine features rice, fish, palm oil, and cashews with Portuguese and African influences.',
  mainDish: {
    id: 'guinea-bissau-main',
    name: 'Caldo de Mancarra',
    description: 'Peanut stew with chicken or fish',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken or fish', amount: 800, unit: 'g' },
      { name: 'Peanut butter', amount: 300, unit: 'g' },
      { name: 'Sweet potatoes', amount: 2, unit: 'whole' },
      { name: 'Okra', amount: 200, unit: 'g' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Palm oil', amount: 3, unit: 'tbsp' },
    ],
    steps: [
      'Brown meat in palm oil',
      'Add tomatoes and water',
      'Stir in peanut butter',
      'Add sweet potatoes and okra',
      'Simmer until thick',
      'Serve over rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600',
  },
  drinks: {
    alcoholic: 'Caju (cashew wine), Palm wine',
    nonAlcoholic: 'Bissap, Fresh coconut water',
  },
  music: [
    'Gumbé music',
    'Traditional balanta rhythms',
    'Portuguese-influenced songs',
  ],
  decorationIdeas: [
    'Red, yellow, green and black flag colors',
    'Cashew motifs',
    'Island and coastal themes',
    'Traditional masks',
  ],
  conversationStarters: [
    'Have you tried cashew fruit?',
    'What do you know about African island culture?',
  ],
  quiz: [
    {
      id: 'guinea-bissau-q1',
      question: 'What is the capital of Guinea-Bissau?',
      options: ['Conakry', 'Bissau', 'Banjul', 'Dakar'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 44, y: 24 },
};
