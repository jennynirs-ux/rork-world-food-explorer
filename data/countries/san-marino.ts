import { Country } from '@/types';

export const sanMarino: Country = {
  id: 'san-marino',
  name: 'San Marino',
  code: 'SM',
  continent: 'Europe',
  flag: '🇸🇲',
  landscapeImage: 'https://images.unsplash.com/photo-1605359911985-f6a9af9d3a91?w=800&q=80',
  description:
    'San Marino is one of the world’s oldest republics, a microstate completely surrounded by Italy. It is known for medieval fortresses, mountain views, and a strong tradition of independence.',
  quickFacts: [
    { label: 'Capital', value: 'City of San Marino' },
    { label: 'Population', value: '34,000' },
    { label: 'Official Language', value: 'Italian' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '61 km²' },
  ],
  facts: [
    'Founded in 301 AD, making it one of the oldest republics in the world',
    'Completely surrounded by Italy',
    'Never officially part of unified Italy',
    'Has its own constitution dating back to 1600',
    'UNESCO-listed historic center and Mount Titano',
    'Has no national debt',
    'Issues its own euro coins with unique designs',
    'Maintains its own Olympic team',
  ],
  foodCulture:
    'Sammarinese cuisine closely resembles central Italian cooking, with pasta, meats, cheeses, and desserts. Local recipes emphasize simplicity, seasonal ingredients, and traditional techniques passed down through generations.',

  history: [
    {
      year: '301 AD',
      title: 'Foundation of San Marino',
      description:
        'According to tradition, the stonemason Marinus founded a small Christian community on Mount Titano.',
    },
    {
      year: 'Middle Ages',
      title: 'Medieval Independence',
      description:
        'San Marino developed self-governing institutions while surrounding regions fell under feudal control.',
    },
    {
      year: '1600',
      title: 'Written Constitution',
      description:
        'San Marino adopted a written constitution that is still partially in force today.',
    },
    {
      year: '1800s',
      title: 'Italian Unification',
      description:
        'San Marino retained independence during the unification of Italy.',
    },
    {
      year: '1944',
      title: 'World War II Neutrality',
      description:
        'The republic declared neutrality but briefly experienced occupation.',
    },
    {
      year: 'Modern Era',
      title: 'Tourism and Stability',
      description:
        'Today San Marino is a peaceful republic focused on tourism, finance, and heritage preservation.',
    },
  ],

  innovations: [
    {
      name: 'Republican Governance',
      year: '301 AD',
      description:
        'One of the earliest continuous republican systems of government in the world.',
    },
    {
      name: 'Dual Heads of State',
      year: '1243',
      description:
        'San Marino pioneered the system of two Captains Regent ruling jointly to prevent concentration of power.',
    },
    {
      name: 'Historic Constitution',
      year: '1600',
      description:
        'One of the oldest surviving written constitutions still influencing governance today.',
    },
  ],

  mustVisit: [
    {
      name: 'Mount Titano',
      description:
        'UNESCO World Heritage mountain offering panoramic views over Italy and the Adriatic.',
    },
    {
      name: 'Guaita Tower',
      description:
        'The oldest and most iconic of San Marino’s three fortress towers.',
    },
    {
      name: 'Cesta Tower',
      description:
        'A medieval fortress housing the Museum of Ancient Weapons.',
    },
    {
      name: 'Historic Centre',
      description:
        'Cobblestone streets, medieval buildings, and city walls.',
    },
    {
      name: 'Basilica of San Marino',
      description:
        'Neoclassical church dedicated to the republic’s founder.',
    },
  ],

  travelEssentials: [
    {
      item: 'Best time to visit',
      description:
        'April to October for mild weather and clear views.',
    },
    {
      item: 'Getting there',
      description:
        'Accessible via Italy, typically from Rimini.',
    },
    {
      item: 'Walking terrain',
      description:
        'Steep streets and stairs; comfortable shoes recommended.',
    },
    {
      item: 'Currency',
      description:
        'Euro is used; San Marino mints collectible euro coins.',
    },
    {
      item: 'Passports',
      description:
        'Optional souvenir passport stamps available for visitors.',
    },
  ],

  mainDish: {
    id: 'san-marino-main',
    name: 'Nidi di Rondine',
    description:
      'Baked pasta rolls filled with ham, cheese, and béchamel sauce.',
    cookingTime: 75,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Lasagna sheets', amount: 250, unit: 'g' },
      { name: 'Cooked ham', amount: 150, unit: 'g' },
      { name: 'Mozzarella', amount: 200, unit: 'g' },
      { name: 'Parmesan cheese', amount: 60, unit: 'g' },
      { name: 'Butter', amount: 50, unit: 'g' },
      { name: 'Flour', amount: 40, unit: 'g' },
      { name: 'Milk', amount: 500, unit: 'ml' },
      { name: 'Nutmeg', amount: 0.5, unit: 'tsp' },
      { name: 'Salt', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Prepare béchamel: melt butter, add flour, cook 1 minute.',
      'Whisk in milk gradually and cook until thick.',
      'Season with salt and nutmeg.',
      'Boil lasagna sheets briefly and lay flat.',
      'Top with ham, mozzarella, and béchamel.',
      'Roll tightly and slice into nests.',
      'Place in baking dish, cover with béchamel and parmesan.',
      'Bake at 180C for 30–35 minutes until golden.',
    ],
    imageUrl: 'https://source.unsplash.com/featured/?baked-pasta,italian,lasagna&w=600',
  },

  dessert: {
    id: 'san-marino-dessert',
    name: 'Torta Tre Monti',
    description:
      'Layered wafer cake with chocolate and hazelnut cream inspired by the Three Towers.',
    cookingTime: 60,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Wafer sheets', amount: 15, unit: 'pieces' },
      { name: 'Hazelnut cream', amount: 300, unit: 'g' },
      { name: 'Dark chocolate', amount: 200, unit: 'g' },
      { name: 'Butter', amount: 40, unit: 'g' },
    ],
    steps: [
      'Layer wafers with hazelnut cream.',
      'Repeat until all wafers are used.',
      'Melt chocolate with butter.',
      'Coat entire cake evenly.',
      'Chill 30 minutes before slicing.',
    ],
    imageUrl: 'https://source.unsplash.com/featured/?chocolate-cake,wafer-cake,dessert&w=600',
  },

  drinks: {
    alcoholic: 'Sangiovese wine, Grappa',
    nonAlcoholic: 'Espresso, Cappuccino, Sparkling water',
  },

  music: [
    'Classical Italian',
    'Medieval folk music',
    'Choral music',
  ],

  decorationIdeas: [
    'White and blue flag colors',
    'Stone textures and medieval motifs',
    'Three Towers symbolism',
    'Mountain silhouettes',
  ],

  conversationStarters: [
    'Have you ever visited a microstate?',
    'Would you live in a country smaller than a city?',
    'What do you think makes a nation independent?',
    'Do you enjoy medieval towns?',
    'Have you collected passport stamps?',
  ],

  quiz: [
    {
      id: 'san-marino-q1',
      question: 'When was San Marino founded?',
      options: ['301 AD', '1000 AD', '1500 AD', '1800 AD'],
      correctAnswer: 0,
    },
    {
      id: 'san-marino-q2',
      question: 'Which country surrounds San Marino?',
      options: ['France', 'Italy', 'Switzerland', 'Austria'],
      correctAnswer: 1,
    },
    {
      id: 'san-marino-q3',
      question: 'What mountain is San Marino built on?',
      options: ['Mount Titano', 'Mount Etna', 'Mont Blanc', 'Mount Vesuvius'],
      correctAnswer: 0,
    },
    {
      id: 'san-marino-q4',
      question: 'How many heads of state rule San Marino at the same time?',
      options: ['One', 'Two', 'Three', 'Four'],
      correctAnswer: 1,
    },
    {
      id: 'san-marino-q5',
      question: 'What is the official language of San Marino?',
      options: ['Latin', 'Italian', 'French', 'English'],
      correctAnswer: 1,
    },
    {
      id: 'san-marino-q6',
      question: 'What UNESCO site is located in San Marino?',
      options: ['Historic Centre and Mount Titano', 'Colosseum', 'Vatican Museums', 'Pompeii'],
      correctAnswer: 0,
    },
    {
      id: 'san-marino-q7',
      question: 'What currency does San Marino use?',
      options: ['Lira', 'Euro', 'Franc', 'Dollar'],
      correctAnswer: 1,
    },
    {
      id: 'san-marino-q8',
      question: 'Which dessert is San Marino famous for?',
      options: ['Tiramisu', 'Gelato', 'Torta Tre Monti', 'Cannoli'],
      correctAnswer: 2,
    },
    {
      id: 'san-marino-q9',
      question: 'Is San Marino part of the European Union?',
      options: ['Yes', 'No'],
      correctAnswer: 1,
    },
    {
      id: 'san-marino-q10',
      question: 'San Marino is best described as a:',
      options: ['Island nation', 'Microstate republic', 'Federal state', 'Kingdom'],
      correctAnswer: 1,
    },
  ],

  coordinates: { x: 49, y: 44 },
};
