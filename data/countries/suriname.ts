import { Country } from '@/types';

export const suriname: Country = {
  id: 'suriname',
  name: 'Suriname',
  code: 'SR',
  continent: 'South America',
  flag: '🇸🇷',
  landscapeImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
  description: 'Suriname is a small South American country on the Atlantic coast, known for Dutch colonial heritage, rainforests, and diverse culture.',
  quickFacts: [
    { label: 'Capital', value: 'Paramaribo' },
    { label: 'Population', value: '600,000' },
    { label: 'Official Language', value: 'Dutch' },
    { label: 'Currency', value: 'Surinamese Dollar' },
    { label: 'Area', value: '163,820 km²' },
  ],
  facts: [
    'The only Dutch-speaking country in South America',
    'Over 90% covered by rainforest',
    'Incredibly diverse population with many ethnicities',
    'Historic inner city of Paramaribo is a UNESCO site',
  ],
  foodCulture: 'Surinamese cuisine blends Javanese, Indian, Chinese, Creole, and Dutch influences.',
  mainDish: {
    id: 'suriname-main',
    name: 'Pom',
    description: 'Baked casserole with chicken and taro root',
    cookingTime: 120,
    servings: 8,
    dietType: 'meat',
    ingredients: [
      { name: 'Pomtajer (taro root)', amount: 1, unit: 'kg' },
      { name: 'Chicken', amount: 1, unit: 'kg' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Citrus juice', amount: 100, unit: 'ml' },
      { name: 'Nutmeg', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Grate taro root and soak in citrus juice',
      'Season and bake chicken',
      'Layer taro and chicken in baking dish',
      'Pour citrus mixture over',
      'Bake at 350°F for 90 minutes',
      'Serve with rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600',
  },
  drinks: {
    alcoholic: 'Parbo beer, Rum',
    nonAlcoholic: 'Dawet, Ginger beer',
  },
  music: [
    'Kaseko',
    'Kawina',
    'Indo-Caribbean chutney',
  ],
  decorationIdeas: [
    'Green, white, red and yellow flag colors',
    'Rainforest themes',
    'Dutch colonial architecture',
    'Multi-cultural elements',
  ],
  conversationStarters: [
    'Have you been to a Dutch-speaking country outside Europe?',
    'What do you know about Surinamese culture?',
  ],
  quiz: [
    {
      id: 'suriname-q1',
      question: 'What is the official language of Suriname?',
      options: ['Spanish', 'Portuguese', 'Dutch', 'English'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 27, y: 20 },
};
