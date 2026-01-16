import { Country } from '@/types';

export const guyana: Country = {
  id: 'guyana',
  name: 'Guyana',
  code: 'GY',
  continent: 'South America',
  flag: '🇬🇾',
  landscapeImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
  description: 'Guyana is the only English-speaking country in South America, known for pristine rainforests, Kaieteur Falls, and diverse culture.',
  quickFacts: [
    { label: 'Capital', value: 'Georgetown' },
    { label: 'Population', value: '790,000' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'Guyanese Dollar' },
    { label: 'Area', value: '214,969 km²' },
  ],
  facts: [
    'Home to Kaieteur Falls, one of the world\'s tallest waterfalls',
    'Over 80% covered by rainforest',
    'The only South American country in the Commonwealth',
    'Rich in gold and oil reserves',
  ],
  foodCulture: 'Guyanese cuisine blends Caribbean, Indian, African, and Chinese influences.',
  mainDish: {
    id: 'guyana-main',
    name: 'Pepperpot',
    description: 'Traditional Amerindian stew with cassareep',
    cookingTime: 180,
    servings: 8,
    dietType: 'meat',
    ingredients: [
      { name: 'Beef and pork', amount: 1, unit: 'kg' },
      { name: 'Cassareep', amount: 200, unit: 'ml' },
      { name: 'Cinnamon', amount: 2, unit: 'sticks' },
      { name: 'Brown sugar', amount: 2, unit: 'tbsp' },
      { name: 'Hot peppers', amount: 2, unit: 'whole' },
      { name: 'Thyme', amount: 4, unit: 'sprigs' },
    ],
    steps: [
      'Cut meat into chunks',
      'Combine all ingredients in pot',
      'Bring to boil then simmer 3 hours',
      'Stir occasionally, add water as needed',
      'Cook until meat is very tender',
      'Serve with bread or rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600',
  },
  drinks: {
    alcoholic: 'El Dorado rum, Banks beer',
    nonAlcoholic: 'Mauby, Sorrel, Coconut water',
  },
  music: [
    'Chutney music',
    'Soca',
    'Reggae',
  ],
  decorationIdeas: [
    'Green, yellow, red and black flag colors',
    'Rainforest themes',
    'Waterfall imagery',
    'Caribbean-Indian fusion',
  ],
  conversationStarters: [
    'Have you been to a rainforest?',
    'What do you know about Caribbean culture?',
  ],
  quiz: [
    {
      id: 'guyana-q1',
      question: 'What is the capital of Guyana?',
      options: ['Georgetown', 'Paramaribo', 'Cayenne', 'Port of Spain'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 26, y: 20 },
};
