import { Country } from '@/types';

export const northKorea: Country = {
  id: 'north-korea',
  name: 'North Korea',
  code: 'KP',
  continent: 'Asia',
  flag: '🇰🇵',
  landscapeImage: 'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800',
  description: 'North Korea is a secretive East Asian country known for its isolation, mountain landscapes, and unique political system.',
  quickFacts: [
    { label: 'Capital', value: 'Pyongyang' },
    { label: 'Population', value: '26 million' },
    { label: 'Official Language', value: 'Korean' },
    { label: 'Currency', value: 'North Korean Won' },
    { label: 'Area', value: '120,540 km²' },
  ],
  facts: [
    'One of the world\'s most isolated countries',
    'Has a unique political ideology called Juche',
    'The Korean Peninsula was divided after WWII',
    'Mountainous terrain covers 80% of the country',
  ],
  foodCulture: 'North Korean cuisine features rice, kimchi, and noodles with Korean traditions.',
  mainDish: {
    id: 'north-korea-main',
    name: 'Naengmyeon',
    description: 'Cold buckwheat noodles in broth',
    cookingTime: 60,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Buckwheat noodles', amount: 400, unit: 'g' },
      { name: 'Beef brisket', amount: 300, unit: 'g' },
      { name: 'Korean pear', amount: 1, unit: 'whole' },
      { name: 'Cucumber', amount: 1, unit: 'whole' },
      { name: 'Hard-boiled eggs', amount: 2, unit: 'whole' },
      { name: 'Vinegar', amount: 3, unit: 'tbsp' },
    ],
    steps: [
      'Make cold beef broth',
      'Cook noodles and rinse in cold water',
      'Slice pear, cucumber, and egg',
      'Place noodles in bowl',
      'Pour cold broth over',
      'Top with vegetables and egg',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600',
  },
  drinks: {
    alcoholic: 'Soju, Taedonggang beer',
    nonAlcoholic: 'Barley tea, Corn tea',
  },
  music: [
    'Traditional Korean music',
    'Revolutionary songs',
  ],
  decorationIdeas: [
    'Red, white and blue flag colors',
    'Mountain landscapes',
    'Traditional Korean patterns',
  ],
  conversationStarters: [
    'What do you know about Korean culture?',
    'Have you tried Korean noodles?',
  ],
  quiz: [
    {
      id: 'north-korea-q1',
      question: 'What is the capital of North Korea?',
      options: ['Seoul', 'Pyongyang', 'Busan', 'Incheon'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 82, y: 42 },
};
