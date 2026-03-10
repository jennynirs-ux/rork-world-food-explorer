import { Country } from '@/types';

export const sweden: Country = {
  id: 'sweden',
  name: 'Sweden',
  code: 'SE',
  continent: 'Europe',
  flag: '🇸🇪',
  landscapeImage: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&q=80',
  description:
    'Sweden is a Scandinavian nation known for its stunning natural beauty, innovative design, and high quality of life. From the Northern Lights to IKEA, Sweden offers a perfect blend of nature and modernity.',
  quickFacts: [
    { label: 'Capital', value: 'Stockholm' },
    { label: 'Population', value: '10.4 million' },
    { label: 'Official Language', value: 'Swedish' },
    { label: 'Currency', value: 'Swedish Krona (kr)' },
    { label: 'Area', value: '450,295 km²' },
  ],
  facts: [
    'Sweden has more than 100,000 lakes',
    'The country is one of the world’s most gender-equal societies',
    'Sweden has not been at war since 1814',
    'Swedes consume more coffee per capita than almost any other country',
    'The midnight sun can be seen in northern Sweden during summer',
    'Sweden gave the world IKEA, Spotify, and H&M',
    'Most Swedes speak excellent English',
  ],
  foodCulture:
    'Swedish cuisine emphasizes fresh, local ingredients and simple preparations. Traditional dishes often feature fish, potatoes, and berries. "Fika" (coffee break with pastries) is an important social tradition.',
  history: [
    {
      year: '800–1050',
      title: 'Viking Age',
      description:
        'Swedish Vikings explored and traded across Europe, reaching as far as Constantinople and Baghdad.',
    },
    {
      year: '1523',
      title: 'Kingdom of Sweden',
      description:
        'Gustav Vasa became king, establishing Sweden as an independent nation.',
    },
    {
      year: '17th century',
      title: 'Swedish Empire',
      description:
        'Sweden became a major European power controlling territories around the Baltic Sea.',
    },
    {
      year: '1814–Present',
      title: 'Neutrality',
      description:
        'Sweden adopted neutrality and developed its modern welfare state.',
    },
  ],
  innovations: [
    {
      name: 'Dynamite',
      year: '1867',
      description:
        'Alfred Nobel invented dynamite, later founding the Nobel Prizes.',
    },
    {
      name: 'Three-point seatbelt',
      year: '1959',
      description:
        'Invented at Volvo, saving millions of lives worldwide.',
    },
    {
      name: 'Spotify',
      year: '2006',
      description:
        'Revolutionized global music streaming.',
    },
  ],
  mustVisit: [
    {
      name: 'Stockholm Archipelago',
      description: 'Thousands of islands with stunning nature.',
    },
    {
      name: 'Icehotel',
      description: 'A hotel built entirely from ice each winter.',
    },
    {
      name: 'Gamla Stan',
      description: 'Stockholm’s medieval old town.',
    },
    {
      name: 'Abisko National Park',
      description: 'One of the best places to see the Northern Lights.',
    },
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'June–August or winter for Northern Lights.' },
    { item: 'Payments', description: 'Almost completely cashless society.' },
    { item: 'Clothing', description: 'Layered clothing recommended year-round.' },
  ],
  mainDish: {
    id: 'sweden-main',
    name: 'Swedish Meatballs (Köttbullar)',
    description:
      'Tender meatballs in creamy gravy served with lingonberry sauce and mashed potatoes',
    cookingTime: 45,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Ground beef', amount: 300, unit: 'g' },
      { name: 'Ground pork', amount: 200, unit: 'g' },
      { name: 'Breadcrumbs', amount: 100, unit: 'g' },
      { name: 'Milk', amount: 100, unit: 'ml' },
      { name: 'Egg', amount: 1, unit: 'piece' },
      { name: 'Onion (finely chopped)', amount: 1, unit: 'small' },
      { name: 'Allspice', amount: 0.5, unit: 'tsp' },
      { name: 'Butter', amount: 50, unit: 'g' },
      { name: 'Beef stock', amount: 300, unit: 'ml' },
      { name: 'Cream', amount: 150, unit: 'ml' },
    ],
    steps: [
      'Soak breadcrumbs in milk',
      'Mix with meat, egg, onion, and spices',
      'Form small meatballs',
      'Brown meatballs in butter',
      'Remove meatballs and make gravy in same pan',
      'Add stock and cream',
      'Return meatballs and simmer 10 minutes',
      'Serve with mashed potatoes and lingonberries',
    ],
    imageUrl: 'https://images.pexels.com/photos/30335664/pexels-photo-30335664.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  dessert: {
    id: 'sweden-dessert',
    name: 'Swedish Cinnamon Buns (Kanelbullar)',
    description:
      'Soft yeast buns flavored with cinnamon, cardamom, butter, and sugar – a classic Swedish fika favorite.',
    cookingTime: 120,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Milk', amount: 250, unit: 'ml' },
      { name: 'Butter', amount: 75, unit: 'g' },
      { name: 'Dry yeast', amount: 7, unit: 'g' },
      { name: 'Sugar', amount: 75, unit: 'g' },
      { name: 'Ground cardamom', amount: 1.5, unit: 'tsp' },
      { name: 'Salt', amount: 0.5, unit: 'tsp' },
      { name: 'Flour', amount: 550, unit: 'g' },
      { name: 'Butter (filling)', amount: 75, unit: 'g' },
      { name: 'Brown sugar', amount: 75, unit: 'g' },
      { name: 'Cinnamon', amount: 2, unit: 'tbsp' },
      { name: 'Egg (for brushing)', amount: 1, unit: 'piece' },
      { name: 'Pearl sugar', amount: 3, unit: 'tbsp' },
    ],
    steps: [
      'Heat milk and butter until melted, let cool to lukewarm',
      'Dissolve yeast in milk mixture',
      'Add sugar, cardamom, salt, and flour',
      'Knead into soft dough and let rise 45 minutes',
      'Roll dough into rectangle',
      'Spread butter, sugar, and cinnamon',
      'Roll tightly and slice into buns',
      'Let rise 30 minutes',
      'Brush with egg and sprinkle pearl sugar',
      'Bake at 200°C for 10–12 minutes',
    ],
    imageUrl: 'https://images.pexels.com/photos/14576630/pexels-photo-14576630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  drinks: {
    alcoholic: 'Aquavit, Swedish beer, Glögg',
    nonAlcoholic: 'Coffee, Lingonberry juice, Elderflower cordial',
  },
  music: [
    'ABBA',
    'Avicii',
    'Traditional Swedish folk music',
  ],
  decorationIdeas: [
    'Blue and yellow colors',
    'Dala horses',
    'Minimal Scandinavian design',
    'Candles and natural wood',
  ],
  conversationStarters: [
    'Have you experienced Swedish fika?',
    'Would you like to see the Northern Lights?',
    'Have you tried Swedish cinnamon buns?',
  ],
quiz: [
  {
    id: 'sweden-q1',
    question: 'What is the capital of Sweden?',
    options: ['Oslo', 'Stockholm', 'Copenhagen', 'Helsinki'],
    correctAnswer: 1,
  },
  {
    id: 'sweden-q2',
    question: 'What is the Swedish coffee break tradition called?',
    options: ['Lagom', 'Fika', 'Hygge', 'Smörgåsbord'],
    correctAnswer: 1,
  },
  {
    id: 'sweden-q3',
    question: 'Who founded the Nobel Prizes?',
    options: ['Alfred Nobel', 'Gustav Vasa', 'Ingvar Kamprad', 'Anders Celsius'],
    correctAnswer: 0,
  },
  {
    id: 'sweden-q4',
    question: 'What pastry is most closely associated with Swedish fika?',
    options: ['Croissant', 'Cinnamon bun', 'Pretzel', 'Donut'],
    correctAnswer: 1,
  },
  {
    id: 'sweden-q5',
    question: 'Which global music streaming company was founded in Sweden?',
    options: ['Spotify', 'Apple Music', 'SoundCloud', 'Deezer'],
    correctAnswer: 0,
  },
  {
    id: 'sweden-q6',
    question: 'Which Swedish company invented the three-point seatbelt?',
    options: ['Saab', 'Volvo', 'Scania', 'Koenigsegg'],
    correctAnswer: 1,
  },
  {
    id: 'sweden-q7',
    question: 'What natural phenomenon can be seen in northern Sweden during winter?',
    options: ['Midnight sun', 'Northern Lights', 'Polar night eclipse', 'Aurora Australis'],
    correctAnswer: 1,
  },
  {
    id: 'sweden-q8',
    question: 'What colors are on the Swedish flag?',
    options: [
      'Blue and yellow',
      'Red and white',
      'Blue and white',
      'Green and yellow',
    ],
    correctAnswer: 0,
  },
  {
    id: 'sweden-q9',
    question: 'What is the traditional Swedish horse symbol called?',
    options: ['Viking horse', 'Nordic steed', 'Dala horse', 'Skane pony'],
    correctAnswer: 2,
  },
  {
    id: 'sweden-q10',
    question: 'What is the Swedish concept meaning “just enough” and balance in life?',
    options: ['Hygge', 'Fika', 'Lagom', 'Koselig'],
    correctAnswer: 2,
  },
],
  coordinates: { x: 50, y: 62 },
  isUnlockedByDefault: true,
};
