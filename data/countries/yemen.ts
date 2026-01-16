import { Country } from '@/types';

export const yemen: Country = {
  id: 'yemen',
  name: 'Yemen',
  code: 'YE',
  continent: 'Asia',
  flag: '🇾🇪',
  landscapeImage: 'https://images.unsplash.com/photo-1578070181910-f1e514afdd08?w=800',
  description: 'Yemen is an ancient Arabian Peninsula country known for historic architecture, coffee heritage, and diverse landscapes from mountains to desert.',
  quickFacts: [
    { label: 'Capital', value: 'Sana\'a' },
    { label: 'Population', value: '30 million' },
    { label: 'Official Language', value: 'Arabic' },
    { label: 'Currency', value: 'Yemeni Rial' },
    { label: 'Area', value: '527,968 km²' },
  ],
  facts: [
    'Sana\'a is one of the world\'s oldest continuously inhabited cities',
    'Birthplace of coffee (Mocha coffee)',
    'Socotra Island has unique flora and fauna',
    'Known for distinctive mud-brick tower houses',
  ],
  foodCulture: 'Yemeni cuisine features saltah, mandi, and bread with Middle Eastern and African influences.',
  mainDish: {
    id: 'yemen-main',
    name: 'Saltah',
    description: 'Traditional stew with fenugreek froth',
    cookingTime: 90,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Lamb or chicken', amount: 500, unit: 'g' },
      { name: 'Fenugreek seeds', amount: 100, unit: 'g' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Potatoes', amount: 2, unit: 'whole' },
      { name: 'Zhug (hot sauce)', amount: 2, unit: 'tbsp' },
    ],
    steps: [
      'Soak fenugreek overnight and whip to froth',
      'Cook meat with vegetables',
      'Add tomatoes and spices',
      'Top with fenugreek froth',
      'Heat until bubbling',
      'Serve with flatbread',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600',
  },
  drinks: {
    alcoholic: 'Not common (Islamic country)',
    nonAlcoholic: 'Qishr (coffee husk tea), Yemeni coffee, Shai (tea)',
  },
  music: [
    'Traditional al-Ghina al-San\'ani',
    'Yemeni oud music',
    'Folk songs',
  ],
  decorationIdeas: [
    'Red, white and black flag colors',
    'Tower house architecture',
    'Coffee plant imagery',
    'Yemeni daggers (jambiya)',
  ],
  conversationStarters: [
    'Have you tried Yemeni coffee?',
    'What do you know about ancient Arabian architecture?',
  ],
  quiz: [
    {
      id: 'yemen-q1',
      question: 'What is Yemen famous for producing?',
      options: ['Tea', 'Coffee', 'Chocolate', 'Spices'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 58, y: 27 },
};
