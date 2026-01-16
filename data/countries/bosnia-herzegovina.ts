import { Country } from '@/types';

export const bosniaHerzegovina: Country = {
  id: 'bosnia-herzegovina',
  name: 'Bosnia and Herzegovina',
  code: 'BA',
  continent: 'Europe',
  flag: '🇧🇦',
  landscapeImage: 'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800',
  description: 'Bosnia and Herzegovina is a country in the Balkans known for its medieval villages, diverse culture, and scenic mountains.',
  quickFacts: [
    { label: 'Capital', value: 'Sarajevo' },
    { label: 'Population', value: '3.3 million' },
    { label: 'Official Languages', value: 'Bosnian, Croatian, Serbian' },
    { label: 'Currency', value: 'Convertible Mark' },
    { label: 'Area', value: '51,209 km²' },
  ],
  facts: [
    'Sarajevo hosted the 1984 Winter Olympics',
    'The Stari Most (Old Bridge) in Mostar is a UNESCO site',
    'Bosnia produces some of Europe\'s best traditional coffee',
    'The country has three official languages',
  ],
  foodCulture: 'Bosnian cuisine blends Ottoman, Mediterranean, and Central European influences. Grilled meats and pastries are specialties.',
  mainDish: {
    id: 'bosnia-main',
    name: 'Ćevapi',
    description: 'Grilled minced meat sausages served with flatbread',
    cookingTime: 40,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Ground beef', amount: 500, unit: 'g' },
      { name: 'Ground lamb', amount: 300, unit: 'g' },
      { name: 'Garlic', amount: 4, unit: 'cloves' },
      { name: 'Paprika', amount: 1, unit: 'tsp' },
      { name: 'Somun bread', amount: 4, unit: 'pieces' },
      { name: 'Kajmak cream', amount: 200, unit: 'g' },
    ],
    steps: [
      'Mix ground meats with minced garlic and spices',
      'Form into small sausage shapes',
      'Refrigerate for 2 hours',
      'Grill over charcoal until cooked',
      'Serve in somun bread with kajmak and onions',
      'Add ajvar sauce on the side',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600',
  },
  drinks: {
    alcoholic: 'Rakija (fruit brandy), Bosnian beer',
    nonAlcoholic: 'Bosnian coffee, Boza (fermented drink), Turkish tea',
  },
  music: [
    'Sevdah traditional songs',
    'Balkan folk music',
    'Bosnian pop',
  ],
  decorationIdeas: [
    'Blue and yellow flag colors',
    'Ottoman-inspired patterns',
    'Copper coffee sets',
    'Bridge imagery',
  ],
  conversationStarters: [
    'Have you tried Bosnian coffee?',
    'What do you know about Balkan cuisine?',
    'Do you enjoy grilled meats?',
  ],
  quiz: [
    {
      id: 'bosnia-q1',
      question: 'What is the capital of Bosnia and Herzegovina?',
      options: ['Zagreb', 'Sarajevo', 'Belgrade', 'Skopje'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 50, y: 44 },
};
