import { Country } from '@/types';

export const georgia: Country = {
  id: 'georgia',
  name: 'Georgia',
  code: 'GE',
  continent: 'Europe',
  flag: '🇬🇪',
  landscapeImage: 'https://images.unsplash.com/photo-1563455027-c5799b2c2839?w=800',
  description: 'Georgia is a country at the crossroads of Europe and Asia, known for its ancient wine culture, stunning mountains, and warm hospitality.',
  quickFacts: [
    { label: 'Capital', value: 'Tbilisi' },
    { label: 'Population', value: '3.7 million' },
    { label: 'Official Language', value: 'Georgian' },
    { label: 'Currency', value: 'Georgian Lari' },
    { label: 'Area', value: '69,700 km²' },
  ],
  facts: [
    'Georgia is the birthplace of wine with 8,000 years of winemaking',
    'Has its own unique alphabet',
    'The Caucasus Mountains offer world-class skiing',
    'Georgian polyphonic singing is UNESCO-recognized',
  ],
  foodCulture: 'Georgian cuisine is diverse and flavorful with unique dishes like khachapuri and khinkali. Wine accompanies most meals.',
  mainDish: {
    id: 'georgia-main',
    name: 'Khachapuri',
    description: 'Cheese-filled bread boat topped with egg and butter',
    cookingTime: 60,
    servings: 4,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Bread dough', amount: 500, unit: 'g' },
      { name: 'Sulguni cheese', amount: 400, unit: 'g' },
      { name: 'Feta cheese', amount: 200, unit: 'g' },
      { name: 'Eggs', amount: 4, unit: 'whole' },
      { name: 'Butter', amount: 100, unit: 'g' },
      { name: 'Milk', amount: 100, unit: 'ml' },
    ],
    steps: [
      'Mix cheeses together',
      'Roll dough into boat shape',
      'Fill with cheese mixture',
      'Bake at 450°F for 15 minutes',
      'Crack egg on top and bake 5 more minutes',
      'Top with butter and serve hot',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600',
  },
  drinks: {
    alcoholic: 'Georgian wine (Saperavi, Rkatsiteli), Chacha (grape vodka)',
    nonAlcoholic: 'Borjomi mineral water, Tarragon lemonade',
  },
  music: [
    'Georgian polyphonic singing',
    'Traditional folk dances',
    'Contemporary Georgian pop',
  ],
  decorationIdeas: [
    'White and red flag colors',
    'Wine and grape themes',
    'Caucasus mountain imagery',
    'Traditional Georgian patterns',
  ],
  conversationStarters: [
    'Have you tried Georgian wine?',
    'What do you know about ancient winemaking?',
    'Do you enjoy mountain destinations?',
  ],
  quiz: [
    {
      id: 'georgia-q1',
      question: 'What is the capital of Georgia?',
      options: ['Yerevan', 'Baku', 'Tbilisi', 'Batumi'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 58, y: 43 },
};
