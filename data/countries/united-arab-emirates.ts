import { Country } from '@/types';

export const unitedArabEmirates: Country = {
  id: 'united-arab-emirates',
  name: 'United Arab Emirates',
  code: 'AE',
  continent: 'Asia',
  flag: '🇦🇪',
  landscapeImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
  description: 'The UAE is a federation of seven emirates known for ultramodern architecture, luxury shopping, and a thriving business hub.',
  quickFacts: [
    { label: 'Capital', value: 'Abu Dhabi' },
    { label: 'Population', value: '10 million' },
    { label: 'Official Language', value: 'Arabic' },
    { label: 'Currency', value: 'UAE Dirham' },
    { label: 'Area', value: '83,600 km²' },
  ],
  facts: [
    'Home to the world\'s tallest building, Burj Khalifa',
    'Formed in 1971 from seven emirates',
    'Major global business and tourism hub',
    'Over 200 nationalities live in the UAE',
  ],
  foodCulture: 'Emirati cuisine blends Arab, Persian, and Indian influences with dates, rice, and lamb.',
  mainDish: {
    id: 'uae-main',
    name: 'Al Harees',
    description: 'Slow-cooked wheat and meat dish',
    cookingTime: 240,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Wheat', amount: 500, unit: 'g' },
      { name: 'Lamb or chicken', amount: 800, unit: 'g' },
      { name: 'Salt', amount: 2, unit: 'tsp' },
      { name: 'Ghee', amount: 100, unit: 'g' },
    ],
    steps: [
      'Soak wheat overnight',
      'Cook wheat and meat together',
      'Simmer for 4 hours until porridge-like',
      'Beat mixture until smooth',
      'Top with ghee',
      'Serve with dates',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600',
  },
  drinks: {
    alcoholic: 'Limited (available in hotels and restaurants)',
    nonAlcoholic: 'Arabic coffee, Karak chai, Fresh juice',
  },
  music: [
    'Traditional Emirati folk',
    'Yowla dance music',
    'Modern Arabic pop',
  ],
  decorationIdeas: [
    'Red, green, white and black flag colors',
    'Burj Khalifa imagery',
    'Desert and modern city themes',
    'Gold and luxury elements',
  ],
  conversationStarters: [
    'Have you visited Dubai or Abu Dhabi?',
    'What do you know about modern Arabian architecture?',
  ],
  quiz: [
    {
      id: 'uae-q1',
      question: 'What is the capital of the UAE?',
      options: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 59, y: 33 },
};
