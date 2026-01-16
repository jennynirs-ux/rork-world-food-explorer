import { Country } from '@/types';

export const haiti: Country = {
  id: 'haiti',
  name: 'Haiti',
  code: 'HT',
  continent: 'North America',
  flag: '🇭🇹',
  landscapeImage: 'https://images.unsplash.com/photo-1544989164-fb88fbafbe7a?w=800',
  description: 'Haiti shares Hispaniola island with the Dominican Republic, known as the first Black republic, vibrant art scene, and resilient culture.',
  quickFacts: [
    { label: 'Capital', value: 'Port-au-Prince' },
    { label: 'Population', value: '11.5 million' },
    { label: 'Official Languages', value: 'French, Haitian Creole' },
    { label: 'Currency', value: 'Haitian Gourde' },
    { label: 'Area', value: '27,750 km²' },
  ],
  facts: [
    'First independent Black republic in the world (1804)',
    'Only country where a slave revolt led to independence',
    'Known for vibrant folk art and tap-tap buses',
    'Birthplace of Vodou religion',
  ],
  foodCulture: 'Haitian cuisine blends African, French, and Taíno influences with rice, beans, and spicy sauces.',
  mainDish: {
    id: 'haiti-main',
    name: 'Griot with Pikliz',
    description: 'Fried pork with spicy pickled vegetables',
    cookingTime: 120,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Pork shoulder', amount: 1, unit: 'kg' },
      { name: 'Sour orange juice', amount: 200, unit: 'ml' },
      { name: 'Scotch bonnet peppers', amount: 2, unit: 'whole' },
      { name: 'Cabbage for pikliz', amount: 300, unit: 'g' },
      { name: 'Carrots', amount: 2, unit: 'whole' },
      { name: 'Garlic', amount: 5, unit: 'cloves' },
    ],
    steps: [
      'Marinate pork in citrus and spices overnight',
      'Boil pork until tender',
      'Deep fry until crispy',
      'Make pikliz with shredded vegetables and peppers',
      'Let pikliz ferment for 24 hours',
      'Serve griot with pikliz and rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600',
  },
  drinks: {
    alcoholic: 'Rhum Barbancourt, Prestige beer',
    nonAlcoholic: 'Akasan (corn drink), Coconut water, Fresh juice',
  },
  music: [
    'Kompa',
    'Rara',
    'Mizik rasin',
  ],
  decorationIdeas: [
    'Blue and red flag colors',
    'Vibrant folk art',
    'Tap-tap bus designs',
    'Vodou symbols',
  ],
  conversationStarters: [
    'What do you know about Haitian independence?',
    'Have you seen Haitian folk art?',
    'Do you enjoy Caribbean rhythms?',
  ],
  quiz: [
    {
      id: 'haiti-q1',
      question: 'What is the capital of Haiti?',
      options: ['Port-au-Prince', 'Cap-Haïtien', 'Santo Domingo', 'Kingston'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 23, y: 29 },
};
