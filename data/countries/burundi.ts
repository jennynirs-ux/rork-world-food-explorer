import { Country } from '@/types';

export const burundi: Country = {
  id: 'burundi',
  name: 'Burundi',
  code: 'BI',
  continent: 'Africa',
  flag: '🇧🇮',
  landscapeImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
  description: 'Burundi is a small East African country known for its mountainous terrain, Lake Tanganyika shoreline, and traditional drumming culture.',
  quickFacts: [
    { label: 'Capital', value: 'Gitega' },
    { label: 'Population', value: '12 million' },
    { label: 'Official Languages', value: 'Kirundi, French' },
    { label: 'Currency', value: 'Burundian Franc' },
    { label: 'Area', value: '27,834 km²' },
  ],
  facts: [
    'Burundi has some of the world\'s best coffee',
    'The Royal Drummers of Burundi are world-famous',
    'Lake Tanganyika is the world\'s second deepest lake',
    'Burundi is one of the most densely populated countries in Africa',
  ],
  foodCulture: 'Burundian cuisine is simple with beans, corn, sweet potatoes, and cassava as staples. Fish from Lake Tanganyika is popular.',
  mainDish: {
    id: 'burundi-main',
    name: 'Beans and Plantains',
    description: 'Traditional dish with stewed beans and fried plantains',
    cookingTime: 90,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Red beans', amount: 500, unit: 'g' },
      { name: 'Plantains', amount: 4, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Palm oil', amount: 3, unit: 'tbsp' },
      { name: 'Garlic', amount: 3, unit: 'cloves' },
    ],
    steps: [
      'Soak beans overnight',
      'Cook beans until tender',
      'Sauté onions and tomatoes',
      'Add beans and simmer together',
      'Slice and fry plantains until golden',
      'Serve beans with fried plantains',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1568158879083-c42860933ed7?w=600',
  },
  drinks: {
    alcoholic: 'Urwarwa (banana beer), Impeke (sorghum beer)',
    nonAlcoholic: 'Ikivuguto (fermented milk), Fresh juice',
  },
  music: [
    'Royal drum performances',
    'Traditional Kirundi songs',
    'African rhythms',
  ],
  decorationIdeas: [
    'Red, white and green flag colors',
    'Traditional drums',
    'Lake imagery',
    'Coffee plant decorations',
  ],
  conversationStarters: [
    'Have you tried African coffee?',
    'What do you know about traditional drumming?',
    'Do you enjoy lakeside destinations?',
  ],
  quiz: [
    {
      id: 'burundi-q1',
      question: 'What is the capital of Burundi?',
      options: ['Bujumbura', 'Gitega', 'Kigali', 'Kampala'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 54, y: 16 },
};
