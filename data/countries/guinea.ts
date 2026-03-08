import { Country } from '@/types';

export const guinea: Country = {
  id: 'guinea',
  name: 'Guinea',
  code: 'GN',
  continent: 'Africa',
  flag: '🇬🇳',
  landscapeImage: 'https://images.unsplash.com/photo-1504870712474-3568a662c4d0?w=800&q=80',
  description: 'Guinea is a West African country known as the "water tower of West Africa" for its rivers, rich mineral resources, and diverse ethnic groups.',
  quickFacts: [
    { label: 'Capital', value: 'Conakry' },
    { label: 'Population', value: '13.5 million' },
    { label: 'Official Language', value: 'French' },
    { label: 'Currency', value: 'Guinean Franc' },
    { label: 'Area', value: '245,857 km²' },
  ],
  facts: [
    'Guinea has over one-third of the world\'s bauxite reserves',
    'Source of major West African rivers including Niger and Gambia',
    'Home to Mount Nimba, a UNESCO World Heritage Site',
    'Rich in traditional music and dance',
  ],
  foodCulture: 'Guinean cuisine features rice, cassava, and peanut-based sauces with French colonial influences.',
  history: [
    {
      year: '1890s',
      title: 'French Colonization',
      description: 'France established colonial control as part of French West Africa.'
    },
    {
      year: '1958',
      title: 'Independence',
      description: 'Guinea became the first French colony in Africa to gain independence, led by Ahmed Sékou Touré.'
    },
  ],
  innovations: [
    {
      name: 'Djembe Drum',
      year: 'Traditional',
      description: 'The djembe drum originated in Guinea, becoming one of the most recognized African instruments worldwide.'
    },
    {
      name: 'Bauxite Mining Techniques',
      year: '1950s',
      description: 'Developed efficient bauxite extraction methods, becoming a world leader in aluminum ore production.'
    },
    {
      name: 'Mande Musical Tradition',
      year: 'Ancient',
      description: 'Preserved and developed the griot tradition of oral history and music that influenced West African culture.'
    },
  ],
  mustVisit: [
    { name: 'Fouta Djallon Highlands', description: 'Mountainous region with waterfalls and source of major West African rivers.' },
    { name: 'Mount Nimba Reserve', description: 'UNESCO World Heritage Site with unique biodiversity.' },
    { name: 'Îles de Los', description: 'Island group near Conakry with beaches and colonial history.' },
    { name: 'Conakry Grand Mosque', description: 'Impressive modern mosque overlooking the Atlantic.' },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Required for most nationalities. Apply in advance.' },
    { item: 'Best time to visit', description: 'November-April for dry season.' },
    { item: 'Yellow fever vaccination', description: 'Mandatory with certificate required.' },
    { item: 'French language', description: 'Essential as English is rarely spoken.' },
  ],
  mainDish: {
    id: 'guinea-main',
    name: 'Poulet Yassa',
    description: 'Marinated chicken with onions and lemon',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken pieces', amount: 1, unit: 'kg' },
      { name: 'Onions', amount: 4, unit: 'whole' },
      { name: 'Lemons', amount: 3, unit: 'whole' },
      { name: 'Dijon mustard', amount: 2, unit: 'tbsp' },
      { name: 'Garlic', amount: 4, unit: 'cloves' },
      { name: 'Habanero pepper', amount: 1, unit: 'whole' },
    ],
    steps: [
      'Marinate chicken with lemon, mustard, and garlic',
      'Refrigerate for 2 hours',
      'Grill or bake chicken',
      'Sauté sliced onions until caramelized',
      'Add marinade and simmer',
      'Serve chicken with onion sauce over rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=900',
  },
  dessert: {
    id: 'guinea-dessert',
    name: 'Tapalapa Bread Pudding',
    description: 'Sweet bread pudding made with local tapalapa bread and coconut',
    cookingTime: 60,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Tapalapa bread or baguette', amount: 400, unit: 'g' },
      { name: 'Coconut milk', amount: 400, unit: 'ml' },
      { name: 'Regular milk', amount: 200, unit: 'ml' },
      { name: 'Sugar', amount: 150, unit: 'g' },
      { name: 'Eggs', amount: 3, unit: 'large' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'Raisins', amount: 100, unit: 'g' },
      { name: 'Cinnamon', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Cut bread into cubes',
      'Mix coconut milk, regular milk, eggs, sugar, vanilla',
      'Pour over bread cubes and let soak 30 minutes',
      'Add raisins and cinnamon',
      'Pour into greased baking dish',
      'Bake at 180°C for 45 minutes until golden',
      'Serve warm or cold',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=700',
  },
  drinks: {
    alcoholic: 'Palm wine, Local beer',
    nonAlcoholic: 'Ginger juice, Bissap, Fresh juice',
  },
  music: [
    'Traditional Djembe drumming',
    'Mande music',
    'Guinean folk songs',
  ],
  decorationIdeas: [
    'Red, yellow and green flag colors',
    'Traditional drums',
    'River and waterfall imagery',
    'West African textiles',
  ],
  conversationStarters: [
    'Have you heard djembe drumming?',
    'What do you know about West African rivers?',
  ],
  quiz: [
    {
      id: 'guinea-q1',
      question: 'What is the capital of Guinea?',
      options: ['Conakry', 'Bissau', 'Freetown', 'Monrovia'],
      correctAnswer: 0,
    },
    {
      id: 'guinea-q2',
      question: 'What mineral is Guinea rich in?',
      options: ['Gold', 'Bauxite', 'Diamonds', 'Copper'],
      correctAnswer: 1,
    },
    {
      id: 'guinea-q3',
      question: 'What traditional drum originated in Guinea?',
      options: ['Bongo', 'Djembe', 'Conga', 'Tabla'],
      correctAnswer: 1,
    },
    {
      id: 'guinea-q4',
      question: 'Why is Guinea called the "water tower of West Africa"?',
      options: ['It has lakes', 'Source of major rivers', 'It rains a lot', 'Has waterfalls'],
      correctAnswer: 1,
    },
    {
      id: 'guinea-q5',
      question: 'What is the official language of Guinea?',
      options: ['English', 'Portuguese', 'French', 'Arabic'],
      correctAnswer: 2,
    },
    {
      id: 'guinea-q6',
      question: 'When did Guinea gain independence?',
      options: ['1950', '1958', '1965', '1970'],
      correctAnswer: 1,
    },
    {
      id: 'guinea-q7',
      question: 'What is Poulet Yassa?',
      options: ['A dance', 'Marinated chicken dish', 'A river', 'A mountain'],
      correctAnswer: 1,
    },
    {
      id: 'guinea-q8',
      question: 'What UNESCO site is in Guinea?',
      options: ['Mount Kenya', 'Mount Nimba', 'Mount Kilimanjaro', 'Mount Atlas'],
      correctAnswer: 1,
    },
    {
      id: 'guinea-q9',
      question: 'Which European country colonized Guinea?',
      options: ['Britain', 'France', 'Portugal', 'Spain'],
      correctAnswer: 1,
    },
    {
      id: 'guinea-q10',
      question: 'What is the Fouta Djallon?',
      options: ['A desert', 'Highland region', 'A city', 'A lake'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 44, y: 22 },
};
