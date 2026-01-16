import { Country } from '@/types';

export const comoros: Country = {
  id: 'comoros',
  name: 'Comoros',
  code: 'KM',
  continent: 'Africa',
  flag: '🇰🇲',
  landscapeImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
  description: 'Comoros is a volcanic archipelago off Africa\'s east coast, known as the "Perfume Islands" for its ylang-ylang, vanilla, and clove production.',
  quickFacts: [
    { label: 'Capital', value: 'Moroni' },
    { label: 'Population', value: '870,000' },
    { label: 'Official Languages', value: 'Comorian, Arabic, French' },
    { label: 'Currency', value: 'Comorian Franc' },
    { label: 'Area', value: '1,862 km²' },
  ],
  facts: [
    'Comoros is one of the world\'s largest producers of ylang-ylang',
    'The islands are volcanic with active Mount Karthala',
    'Comoros is one of the world\'s poorest countries',
    'The coelacanth, a "living fossil" fish, was rediscovered here',
  ],
  foodCulture: 'Comorian cuisine blends African, Arab, and French influences with seafood, rice, and aromatic spices.',
  mainDish: {
    id: 'comoros-main',
    name: 'Langouste à la Vanille',
    description: 'Lobster in vanilla sauce, a Comorian specialty',
    cookingTime: 45,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'Lobster tails', amount: 4, unit: 'pieces' },
      { name: 'Vanilla beans', amount: 2, unit: 'whole' },
      { name: 'Coconut milk', amount: 400, unit: 'ml' },
      { name: 'Garlic', amount: 3, unit: 'cloves' },
      { name: 'Butter', amount: 50, unit: 'g' },
      { name: 'White wine', amount: 100, unit: 'ml' },
    ],
    steps: [
      'Split vanilla beans and scrape out seeds',
      'Sauté lobster in butter with garlic',
      'Add white wine and vanilla',
      'Pour in coconut milk',
      'Simmer until lobster is cooked',
      'Serve with fragrant rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559737558-2f5a2f7e8c59?w=600',
  },
  drinks: {
    alcoholic: 'Local rum',
    nonAlcoholic: 'Coconut water, Vanilla tea, Fresh juice',
  },
  music: [
    'Twarab music',
    'Traditional Comorian songs',
    'African-Arab fusion',
  ],
  decorationIdeas: [
    'Green, white, red and yellow flag colors',
    'Vanilla and ylang-ylang flowers',
    'Ocean and volcanic imagery',
    'Arabic calligraphy',
  ],
  conversationStarters: [
    'Have you used ylang-ylang essential oil?',
    'What do you know about volcanic islands?',
    'Do you enjoy exotic seafood?',
  ],
  quiz: [
    {
      id: 'comoros-q1',
      question: 'What is the capital of Comoros?',
      options: ['Moroni', 'Mamoudzou', 'Mutsamudu', 'Fomboni'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 58, y: 14 },
};
