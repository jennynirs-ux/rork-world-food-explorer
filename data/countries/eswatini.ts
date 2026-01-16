import { Country } from '@/types';

export const eswatini: Country = {
  id: 'eswatini',
  name: 'Eswatini',
  code: 'SZ',
  continent: 'Africa',
  flag: '🇸🇿',
  landscapeImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
  description: 'Eswatini (formerly Swaziland) is a small, landlocked kingdom in Southern Africa known for its wildlife reserves, cultural festivals, and traditional ceremonies.',
  quickFacts: [
    { label: 'Capital', value: 'Mbabane (administrative), Lobamba (royal)' },
    { label: 'Population', value: '1.2 million' },
    { label: 'Official Languages', value: 'Swazi, English' },
    { label: 'Currency', value: 'Swazi Lilangeni' },
    { label: 'Area', value: '17,364 km²' },
  ],
  facts: [
    'One of the world\'s last absolute monarchies',
    'Home to the Umhlanga (Reed Dance) ceremony',
    'Changed name from Swaziland to Eswatini in 2018',
    'Has excellent wildlife reserves and conservation areas',
  ],
  foodCulture: 'Swazi cuisine features maize porridge, grilled meats, and indigenous vegetables with Southern African influences.',
  mainDish: {
    id: 'eswatini-main',
    name: 'Sishwala and Sidvudvu',
    description: 'Maize porridge with pumpkin and peanut stew',
    cookingTime: 60,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Maize meal', amount: 500, unit: 'g' },
      { name: 'Pumpkin', amount: 500, unit: 'g' },
      { name: 'Peanut butter', amount: 200, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Spinach', amount: 300, unit: 'g' },
    ],
    steps: [
      'Cook maize meal with water to make thick porridge',
      'Boil pumpkin until soft',
      'Sauté onions and tomatoes',
      'Add peanut butter and spinach',
      'Simmer pumpkin stew until thick',
      'Serve porridge with stew',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600',
  },
  drinks: {
    alcoholic: 'Umcombotsi (traditional beer), Buganu (marula fruit beer)',
    nonAlcoholic: 'Mahewu (fermented porridge drink), Rooibos tea',
  },
  music: [
    'Traditional Swazi songs',
    'Sibhaca dance music',
    'Marabi jazz',
  ],
  decorationIdeas: [
    'Blue, yellow and red flag colors',
    'Traditional shields and spears',
    'Beadwork patterns',
    'Wildlife imagery',
  ],
  conversationStarters: [
    'What do you know about African monarchies?',
    'Have you experienced traditional African ceremonies?',
  ],
  quiz: [
    {
      id: 'eswatini-q1',
      question: 'What was Eswatini formerly called?',
      options: ['Swaziland', 'Basutoland', 'Bechuanaland', 'Rhodesia'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 55, y: 10 },
};
