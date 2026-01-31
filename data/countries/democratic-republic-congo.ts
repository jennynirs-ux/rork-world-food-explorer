import { Country } from '@/types';

export const democraticRepublicCongo: Country = {
  id: 'democratic-republic-congo',
  name: 'Democratic Republic of the Congo',
  code: 'CD',
  continent: 'Africa',
  flag: '🇨🇩',
  landscapeImage: 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb0?w=800&q=80',
  description: 'The DRC is the second-largest country in Africa, featuring the Congo River, vast rainforests, and incredible biodiversity.',
  quickFacts: [
    { label: 'Capital', value: 'Kinshasa' },
    { label: 'Population', value: '95 million' },
    { label: 'Official Language', value: 'French' },
    { label: 'Currency', value: 'Congolese Franc' },
    { label: 'Area', value: '2,344,858 km²' },
  ],
  facts: [
    'Home to the Congo Rainforest, second only to the Amazon',
    'The Congo River is the world\'s deepest river',
    'Rich in minerals including cobalt, copper, and diamonds',
    'Mountain gorillas inhabit the Virunga National Park',
  ],
  foodCulture: 'Congolese cuisine features cassava, plantains, beans, and fish. Fufu and grilled fish are staples.',
  history: [
    {
      year: '1885',
      title: 'Congo Free State',
      description: 'King Leopold II of Belgium established control, leading to one of history\'s most brutal colonial periods.'
    },
    {
      year: '1960',
      title: 'Independence',
      description: 'The DRC gained independence from Belgium, beginning a tumultuous post-colonial era.'
    },
  ],
  innovations: [
    {
      name: 'Soukous Music',
      year: '1940s-1960s',
      description: 'Congolese musicians pioneered Soukous/Rumba, influencing African music across the continent with its distinctive guitar style.'
    },
    {
      name: 'Sustainable Forestry Practices',
      year: 'Traditional',
      description: 'Indigenous communities developed sustainable forest management techniques now studied globally for rainforest conservation.'
    },
    {
      name: 'Traditional Medicine',
      year: 'Ancient',
      description: 'Congo\'s biodiversity led to extensive botanical medicine knowledge, with many modern pharmaceuticals derived from these plants.'
    },
  ],
  mustVisit: [
    { name: 'Virunga National Park', description: 'UNESCO site home to mountain gorillas and diverse wildlife.' },
    { name: 'Congo River', description: 'The world\'s deepest river with stunning landscapes and traditional river life.' },
    { name: 'Lola ya Bonobo', description: 'Sanctuary for endangered bonobos near Kinshasa.' },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Required for most nationalities; arrange in advance.' },
    { item: 'Vaccinations', description: 'Yellow fever, malaria prophylaxis recommended.' },
    { item: 'Safety', description: 'Check current advisories; some regions unstable.' },
  ],
  mainDish: {
    id: 'drc-main',
    name: 'Moambe Chicken',
    description: 'Chicken in rich palm nut sauce',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken pieces', amount: 1, unit: 'kg' },
      { name: 'Palm nut cream', amount: 400, unit: 'ml' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Garlic', amount: 4, unit: 'cloves' },
      { name: 'Chili peppers', amount: 2, unit: 'whole' },
    ],
    steps: [
      'Brown chicken pieces in oil',
      'Add onions, tomatoes, and garlic',
      'Pour in palm nut cream',
      'Add chili peppers and simmer',
      'Cook until chicken is tender and sauce thickens',
      'Serve with fufu or rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600',
  },
  dessert: {
    id: 'drc-dessert',
    name: 'Mikate',
    description: 'Sweet fried dough balls, Congolese donuts often enjoyed with coffee',
    cookingTime: 45,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'All-purpose flour', amount: 500, unit: 'g' },
      { name: 'Sugar', amount: 100, unit: 'g' },
      { name: 'Yeast', amount: 2, unit: 'tsp' },
      { name: 'Warm water', amount: 300, unit: 'ml' },
      { name: 'Salt', amount: 0.5, unit: 'tsp' },
      { name: 'Vegetable oil for frying', amount: 500, unit: 'ml' },
    ],
    steps: [
      'Dissolve yeast in warm water with 1 tbsp sugar.',
      'Let sit for 10 minutes until foamy.',
      'Mix flour, remaining sugar, and salt in bowl.',
      'Add yeast mixture and knead into soft dough.',
      'Cover and let rise for 1 hour until doubled.',
      'Heat oil to 350°F.',
      'Form small balls of dough.',
      'Fry until golden brown on all sides.',
      'Drain on paper towels.',
      'Serve warm, optionally dusted with powdered sugar.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600',
  },
  drinks: {
    alcoholic: 'Primus beer, Turbo King, Palm wine',
    nonAlcoholic: 'Ginger beer, Bissap, Fresh juice',
  },
  music: [
    'Soukous/Rumba',
    'Ndombolo',
    'Papa Wemba classics',
  ],
  decorationIdeas: [
    'Blue, yellow and red flag colors',
    'Rainforest imagery',
    'Traditional masks',
    'Congo River scenes',
  ],
  conversationStarters: [
    'What do you know about African rainforests?',
    'Have you heard Congolese rumba music?',
    'Do you follow African wildlife conservation?',
  ],
  quiz: [
    {
      id: 'drc-q1',
      question: 'What is the capital of the DRC?',
      options: ['Brazzaville', 'Kinshasa', 'Lubumbashi', 'Goma'],
      correctAnswer: 1,
    },
    {
      id: 'drc-q2',
      question: 'Which rainforest is second largest after the Amazon?',
      options: ['Borneo Rainforest', 'Congo Rainforest', 'Daintree Rainforest', 'Valdivian Rainforest'],
      correctAnswer: 1,
    },
    {
      id: 'drc-q3',
      question: 'What is the DRC rich in?',
      options: ['Oil only', 'Cobalt, copper, and diamonds', 'Gold only', 'Silver and platinum'],
      correctAnswer: 1,
    },
    {
      id: 'drc-q4',
      question: 'Which river flows through the DRC?',
      options: ['Niger River', 'Nile River', 'Congo River', 'Zambezi River'],
      correctAnswer: 2,
    },
    {
      id: 'drc-q5',
      question: 'What endangered animal lives in Virunga National Park?',
      options: ['Black rhino', 'Mountain gorillas', 'Bengal tiger', 'Giant panda'],
      correctAnswer: 1,
    },
    {
      id: 'drc-q6',
      question: 'What is the traditional Congolese staple made from cassava?',
      options: ['Couscous', 'Fufu', 'Polenta', 'Grits'],
      correctAnswer: 1,
    },
    {
      id: 'drc-q7',
      question: 'When did the DRC gain independence?',
      options: ['1950', '1960', '1970', '1980'],
      correctAnswer: 1,
    },
    {
      id: 'drc-q8',
      question: 'What music genre originated in the Congo?',
      options: ['Jazz', 'Soukous/Rumba', 'Blues', 'Reggae'],
      correctAnswer: 1,
    },
    {
      id: 'drc-q9',
      question: 'What is the DRC\'s ranking in Africa by size?',
      options: ['Largest', 'Second-largest', 'Third-largest', 'Fourth-largest'],
      correctAnswer: 1,
    },
    {
      id: 'drc-q10',
      question: 'What is Moambe Chicken made with?',
      options: ['Coconut cream', 'Palm nut sauce', 'Peanut butter', 'Tomato sauce'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 52, y: 15 },
};
