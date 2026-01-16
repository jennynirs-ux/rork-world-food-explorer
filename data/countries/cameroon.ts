import { Country } from '@/types';

export const cameroon: Country = {
  id: 'cameroon',
  name: 'Cameroon',
  code: 'CM',
  continent: 'Africa',
  flag: '🇨🇲',
  landscapeImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
  description: 'Cameroon is known as "Africa in Miniature" for its geological and cultural diversity, featuring beaches, deserts, mountains, rainforests, and savannas.',
  quickFacts: [
    { label: 'Capital', value: 'Yaoundé' },
    { label: 'Population', value: '27 million' },
    { label: 'Official Languages', value: 'French, English' },
    { label: 'Currency', value: 'Central African CFA Franc' },
    { label: 'Area', value: '475,442 km²' },
  ],
  facts: [
    'Cameroon is called "Africa in Miniature" due to its diversity',
    'Mount Cameroon is an active volcano and highest peak in West Africa',
    'The country is bilingual with French and English',
    'Cameroon has won the Africa Cup of Nations five times',
  ],
  foodCulture: 'Cameroonian cuisine varies by region with influences from French and English colonialism. Staples include cassava, plantains, and groundnuts.',
  mainDish: {
    id: 'cameroon-main',
    name: 'Ndolé',
    description: 'National dish with bitter leaves, peanuts, and meat or fish',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Ndolé leaves or spinach', amount: 500, unit: 'g' },
      { name: 'Beef or fish', amount: 500, unit: 'g' },
      { name: 'Peanut paste', amount: 200, unit: 'g' },
      { name: 'Crayfish powder', amount: 2, unit: 'tbsp' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Garlic', amount: 3, unit: 'cloves' },
    ],
    steps: [
      'Blanch and squeeze ndolé leaves to reduce bitterness',
      'Cook meat or fish with onions and garlic',
      'Add peanut paste and crayfish powder',
      'Stir in ndolé leaves',
      'Simmer until thick',
      'Serve with plantains or rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600',
  },
  drinks: {
    alcoholic: 'Palm wine, 33 Export beer, Guinness',
    nonAlcoholic: 'Bissap (hibiscus), Ginger beer, Fresh coconut water',
  },
  music: [
    'Makossa',
    'Bikutsi',
    'Afrobeats',
  ],
  decorationIdeas: [
    'Green, red and yellow flag colors',
    'Traditional masks',
    'African textiles',
    'Wildlife imagery',
  ],
  conversationStarters: [
    'Have you explored Central African cuisine?',
    'What do you know about African wildlife?',
    'Do you follow African football?',
  ],
  quiz: [
    {
      id: 'cameroon-q1',
      question: 'What is the capital of Cameroon?',
      options: ['Douala', 'Yaoundé', 'Bamenda', 'Garoua'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 49, y: 18 },
};
