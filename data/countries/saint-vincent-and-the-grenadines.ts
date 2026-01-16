import { Country } from '@/types';

export const saintVincentAndTheGrenadines: Country = {
  id: 'saint-vincent-and-the-grenadines',
  name: 'Saint Vincent and the Grenadines',
  code: 'VC',
  continent: 'North America',
  flag: '🇻🇨',
  landscapeImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
  description: 'Saint Vincent and the Grenadines is a Caribbean nation of islands known for yacht charters, diving, and pristine beaches.',
  quickFacts: [
    { label: 'Capital', value: 'Kingstown' },
    { label: 'Population', value: '111,000' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'East Caribbean Dollar' },
    { label: 'Area', value: '389 km²' },
  ],
  facts: [
    'Consists of 32 islands and cays',
    'Tobago Cays are a marine paradise',
    'Major yacht charter destination',
    'La Soufrière volcano is still active',
  ],
  foodCulture: 'Vincentian cuisine features seafood, breadfruit, and Creole flavors.',
  mainDish: {
    id: 'svg-main',
    name: 'Roasted Breadfruit and Fried Jackfish',
    description: 'Traditional dish with roasted breadfruit and fish',
    cookingTime: 60,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'Breadfruit', amount: 1, unit: 'whole' },
      { name: 'Jackfish', amount: 4, unit: 'pieces' },
      { name: 'Seasoning blend', amount: 2, unit: 'tbsp' },
      { name: 'Lime', amount: 2, unit: 'whole' },
      { name: 'Oil for frying', amount: 200, unit: 'ml' },
    ],
    steps: [
      'Roast breadfruit in oven or over fire',
      'Season fish with lime and spices',
      'Fry fish until crispy',
      'Peel and slice roasted breadfruit',
      'Serve fish with breadfruit',
      'Add hot pepper sauce',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559737558-2f5a2f7e8c59?w=600',
  },
  drinks: {
    alcoholic: 'Hairoun beer, Sunset rum, Rum punch',
    nonAlcoholic: 'Seamoss, Sorrel, Fresh juice',
  },
  music: [
    'Calypso',
    'Soca',
    'Reggae',
  ],
  decorationIdeas: [
    'Blue, yellow and green flag colors',
    'Yacht and sailing themes',
    'Tropical island imagery',
    'Marine life decorations',
  ],
  conversationStarters: [
    'Have you been sailing in the Caribbean?',
    'What do you know about volcanic islands?',
  ],
  quiz: [
    {
      id: 'svg-q1',
      question: 'What is the capital of Saint Vincent and the Grenadines?',
      options: ['Kingstown', 'Georgetown', 'Bridgetown', 'Castries'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 26, y: 25 },
};
