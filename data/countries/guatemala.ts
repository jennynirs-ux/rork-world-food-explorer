import { Country } from '@/types';

export const guatemala: Country = {
  id: 'guatemala',
  name: 'Guatemala',
  code: 'GT',
  continent: 'North America',
  flag: '🇬🇹',
  landscapeImage: 'https://images.unsplash.com/photo-1564082979121-85b2e787881f?w=800',
  description: 'Guatemala is a Central American country with Mayan heritage, volcanic landscapes, colonial cities, and vibrant indigenous culture.',
  quickFacts: [
    { label: 'Capital', value: 'Guatemala City' },
    { label: 'Population', value: '18 million' },
    { label: 'Official Language', value: 'Spanish' },
    { label: 'Currency', value: 'Guatemalan Quetzal' },
    { label: 'Area', value: '108,889 km²' },
  ],
  facts: [
    'Home to Tikal, one of the largest Mayan cities',
    'Has 33 volcanoes, three of which are active',
    'Antigua Guatemala is a UNESCO World Heritage Site',
    'Over 20 indigenous languages are spoken',
  ],
  foodCulture: 'Guatemalan cuisine blends Mayan and Spanish influences with corn, beans, and chilies as staples.',
  mainDish: {
    id: 'guatemala-main',
    name: 'Pepián',
    description: 'Traditional Mayan stew with chicken and roasted vegetables',
    cookingTime: 120,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken pieces', amount: 1, unit: 'kg' },
      { name: 'Tomatoes', amount: 4, unit: 'whole' },
      { name: 'Pumpkin seeds', amount: 100, unit: 'g' },
      { name: 'Sesame seeds', amount: 50, unit: 'g' },
      { name: 'Dried chilies', amount: 3, unit: 'whole' },
      { name: 'Potatoes', amount: 3, unit: 'whole' },
    ],
    steps: [
      'Roast tomatoes, chilies, and seeds',
      'Blend into thick sauce',
      'Brown chicken pieces',
      'Add sauce and water, simmer 90 minutes',
      'Add potatoes in last 30 minutes',
      'Serve with rice and tortillas',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600',
  },
  drinks: {
    alcoholic: 'Quetzalteca (aguardiente), Gallo beer',
    nonAlcoholic: 'Horchata, Atol de elote, Rosa de Jamaica',
  },
  music: [
    'Marimba music',
    'Traditional Mayan songs',
    'Latin pop',
  ],
  decorationIdeas: [
    'Blue and white flag colors',
    'Traditional weavings',
    'Mayan symbols',
    'Volcanic landscapes',
  ],
  conversationStarters: [
    'Have you visited Mayan ruins?',
    'What do you know about indigenous textiles?',
    'Do you enjoy volcano hiking?',
  ],
  quiz: [
    {
      id: 'guatemala-q1',
      question: 'What is the capital of Guatemala?',
      options: ['Antigua', 'Guatemala City', 'Quetzaltenango', 'Tikal'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 17, y: 26 },
};
