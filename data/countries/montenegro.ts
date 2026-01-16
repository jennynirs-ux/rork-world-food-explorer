import { Country } from '@/types';

export const montenegro: Country = {
  id: 'montenegro',
  name: 'Montenegro',
  code: 'ME',
  continent: 'Europe',
  flag: '🇲🇪',
  landscapeImage: 'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800',
  description: 'Montenegro is a Balkan country on the Adriatic coast, known for dramatic mountains, medieval villages, and stunning bay of Kotor.',
  quickFacts: [
    { label: 'Capital', value: 'Podgorica' },
    { label: 'Population', value: '620,000' },
    { label: 'Official Language', value: 'Montenegrin' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '13,812 km²' },
  ],
  facts: [
    'Gained independence from Serbia in 2006',
    'The Bay of Kotor is a UNESCO World Heritage Site',
    'Name means "Black Mountain"',
    'Has some of Europe\'s deepest canyons',
  ],
  foodCulture: 'Montenegrin cuisine blends Mediterranean and Balkan influences with fresh seafood, grilled meats, and cheese.',
  mainDish: {
    id: 'montenegro-main',
    name: 'Njeguški Pršut',
    description: 'Smoked ham from Njeguši village',
    cookingTime: 180,
    servings: 8,
    dietType: 'meat',
    ingredients: [
      { name: 'Pork leg', amount: 5, unit: 'kg' },
      { name: 'Sea salt', amount: 500, unit: 'g' },
      { name: 'Bay leaves', amount: 10, unit: 'whole' },
      { name: 'Black pepper', amount: 50, unit: 'g' },
    ],
    steps: [
      'Rub pork with salt and spices',
      'Hang in cool place for 3 weeks',
      'Cold smoke with beech wood',
      'Age for several months',
      'Slice thinly to serve',
      'Pair with cheese and olives',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600',
  },
  drinks: {
    alcoholic: 'Rakija, Vranac wine, Nikšićko beer',
    nonAlcoholic: 'Turkish coffee, Mountain spring water',
  },
  music: [
    'Traditional folk songs',
    'Gusle epic poetry',
    'Balkan beats',
  ],
  decorationIdeas: [
    'Red and gold flag colors',
    'Adriatic coastal themes',
    'Mountain landscapes',
    'Medieval architecture',
  ],
  conversationStarters: [
    'Have you visited the Bay of Kotor?',
    'What do you know about Balkan cuisine?',
  ],
  quiz: [
    {
      id: 'montenegro-q1',
      question: 'What does Montenegro mean?',
      options: ['Black Sea', 'Black Mountain', 'Red Mountain', 'White Sea'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 50, y: 43 },
};
