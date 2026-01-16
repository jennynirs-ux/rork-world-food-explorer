import { Country } from '@/types';

export const fiji: Country = {
  id: 'fiji',
  name: 'Fiji',
  code: 'FJ',
  continent: 'Oceania',
  flag: '🇫🇯',
  landscapeImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
  description: 'Fiji is an island nation in the South Pacific known for pristine beaches, coral reefs, friendly locals, and the greeting "Bula!"',
  quickFacts: [
    { label: 'Capital', value: 'Suva' },
    { label: 'Population', value: '900,000' },
    { label: 'Official Languages', value: 'English, Fijian, Hindi' },
    { label: 'Currency', value: 'Fijian Dollar' },
    { label: 'Area', value: '18,274 km²' },
  ],
  facts: [
    'Fiji consists of over 300 islands, 110 permanently inhabited',
    'Home to some of the world\'s best soft coral reefs',
    'Firewalking originated in Fiji',
    'Rugby is the national sport',
  ],
  foodCulture: 'Fijian cuisine blends indigenous, Indian, and Chinese influences. Fresh seafood, root vegetables, and coconut are staples.',
  mainDish: {
    id: 'fiji-main',
    name: 'Kokoda',
    description: 'Fijian ceviche with fish marinated in coconut cream and lime',
    cookingTime: 30,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'Fresh white fish', amount: 500, unit: 'g' },
      { name: 'Coconut cream', amount: 400, unit: 'ml' },
      { name: 'Limes', amount: 6, unit: 'whole' },
      { name: 'Tomatoes', amount: 2, unit: 'whole' },
      { name: 'Onions', amount: 1, unit: 'whole' },
      { name: 'Chili peppers', amount: 1, unit: 'whole' },
    ],
    steps: [
      'Dice fish into small cubes',
      'Marinate fish in lime juice for 2 hours',
      'Drain lime juice',
      'Add coconut cream, diced tomatoes, and onions',
      'Add chopped chili to taste',
      'Serve chilled',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559737558-2f5a2f7e8c59?w=600',
  },
  drinks: {
    alcoholic: 'Kava (traditional ceremony drink), Fiji Bitter beer',
    nonAlcoholic: 'Fresh coconut water, Tropical fruit juice',
  },
  music: [
    'Traditional Fijian meke',
    'Pacific reggae',
    'Contemporary Fijian pop',
  ],
  decorationIdeas: [
    'Light blue, white and red flag colors',
    'Tropical flowers and leis',
    'Traditional tapa cloth',
    'Ocean and palm themes',
  ],
  conversationStarters: [
    'Have you been to a Pacific island?',
    'What do you know about kava ceremonies?',
    'Do you enjoy snorkeling or diving?',
  ],
  quiz: [
    {
      id: 'fiji-q1',
      question: 'What is the capital of Fiji?',
      options: ['Nadi', 'Suva', 'Lautoka', 'Labasa'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 92, y: 12 },
};
