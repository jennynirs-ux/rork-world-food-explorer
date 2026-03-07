import { Country } from '@/types';

export const portugal: Country = {
  id: 'portugal',
  name: 'Portugal',
  code: 'PT',
  continent: 'Europe',
  flag: '🇵🇹',
  landscapeImage: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80',
  description: 'Portugal is a southern European country on the Iberian Peninsula, bordering Spain. Its location on the Atlantic Ocean has influenced many aspects of its culture: salt cod and grilled sardines are national dishes, the Algarve\'s beaches are a major destination, and much of the nation\'s architecture dates to the 1500s–1800s, when Portugal had a powerful maritime empire.',
  quickFacts: [
    { label: 'Capital', value: 'Lisbon' },
    { label: 'Population', value: '10.3 million' },
    { label: 'Official Language', value: 'Portuguese' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '92,212 km²' },
  ],
  facts: [
    'Portugal is the oldest nation-state in Europe, with its borders established in 1139',
    'Portuguese is spoken by over 250 million people worldwide',
    'Portugal is one of the world\'s top cork producers',
    'The country has 17 UNESCO World Heritage Sites',
    'Port wine originated in Portugal\'s Douro Valley',
    'Portugal decriminalized all drugs in 2001',
    'The Vasco da Gama Bridge in Lisbon is Europe\'s longest bridge',
    'Half of the "New World" was once Portuguese territory',
  ],
  foodCulture: 'Portuguese cuisine is characterized by rich, filling dishes, often featuring seafood, olive oil, garlic, and herbs. Bacalhau (salt cod) is a national obsession with supposedly 365 ways to prepare it. Pastel de nata, the famous custard tart, is a beloved pastry.',
  history: [
    {
      year: '1139',
      title: 'Kingdom Founded',
      description: 'Portugal became an independent kingdom under King Afonso I, making it one of Europe\'s oldest nation-states.'
    },
    {
      year: '1415-1600s',
      title: 'Age of Discoveries',
      description: 'Portugal led global exploration, establishing trading routes to Asia, Africa, and the Americas.'
    },
    {
      year: '1755',
      title: 'Great Earthquake',
      description: 'Devastating earthquake destroyed much of Lisbon, leading to modern urban planning under Marquis of Pombal.'
    },
    {
      year: '1974',
      title: 'Carnation Revolution',
      description: 'Peaceful revolution ended decades of dictatorship, establishing democracy in Portugal.'
    },
  ],
  innovations: [
    {
      name: 'Caravel Ship',
      year: '15th century',
      description: 'Revolutionary ship design that enabled long-distance ocean exploration.'
    },
    {
      name: 'Maritime Navigation',
      year: '1400s',
      description: 'Advanced techniques in navigation and cartography that made global exploration possible.'
    },
    {
      name: 'Piri Piri Sauce',
      year: '1500s',
      description: 'Spicy sauce created from African bird\'s eye chili peppers brought back by explorers.'
    },
  ],
  mustVisit: [
    { name: 'Belém Tower', description: 'Iconic 16th-century fortified tower in Lisbon, symbol of Portugal\'s Age of Discovery.' },
    { name: 'Douro Valley', description: 'Stunning wine region with terraced vineyards producing world-famous Port wine.' },
    { name: 'Sintra Palaces', description: 'Romantic hilltop town with colorful palaces and castles, including Pena Palace.' },
    { name: 'Porto Ribeira', description: 'Historic riverside district with colorful buildings, wine cellars, and Dom Luís I Bridge.' },
    { name: 'Algarve Beaches', description: 'Breathtaking coastline with golden cliffs, hidden coves, and pristine beaches.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'March-May and September-October for pleasant weather. Summer is hot and crowded.' },
    { item: 'Comfortable walking shoes', description: 'Portugal\'s cities have steep hills and cobblestone streets.' },
    { item: 'Light layers', description: 'Weather can vary, especially near the coast.' },
    { item: 'Cash for small purchases', description: 'Some traditional spots prefer cash over cards.' },
    { item: 'Sunscreen', description: 'Strong sun, especially in summer months.' },
    { item: 'Portuguese phrasebook', description: 'English is less common outside tourist areas.' }
  ],
  mainDish: {
    id: 'portugal-main',
    name: 'Bacalhau à Brás',
    description: 'Traditional Portuguese dish with shredded salt cod, crispy potatoes, onions, and eggs',
    cookingTime: 45,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'Salt cod (bacalhau)', amount: 500, unit: 'g' },
      { name: 'Potatoes', amount: 4, unit: 'large' },
      { name: 'Onions', amount: 2, unit: 'large' },
      { name: 'Garlic cloves', amount: 4, unit: 'pieces' },
      { name: 'Eggs', amount: 6, unit: 'large' },
      { name: 'Olive oil', amount: 100, unit: 'ml' },
      { name: 'Black olives', amount: 100, unit: 'g' },
      { name: 'Fresh parsley', amount: 3, unit: 'tbsp' },
      { name: 'Salt and pepper', amount: 1, unit: 'to taste' },
    ],
    steps: [
      'Soak salt cod in cold water for 24-48 hours, changing water several times',
      'Boil cod for 10 minutes, then shred into small pieces',
      'Cut potatoes into thin matchsticks and fry until golden and crispy',
      'Thinly slice onions and sauté with garlic in olive oil until soft',
      'Add shredded cod to onions, cook for 5 minutes',
      'Add crispy potatoes and mix well',
      'Beat eggs and pour over mixture, stirring gently until creamy',
      'Garnish with black olives and fresh parsley',
      'Serve immediately',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800&q=80',
  },
  dessert: {
    id: 'portugal-dessert',
    name: 'Pastel de Nata',
    description: 'Iconic Portuguese custard tart with flaky pastry and creamy egg custard filling',
    cookingTime: 60,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Puff pastry', amount: 500, unit: 'g' },
      { name: 'Egg yolks', amount: 6, unit: 'pieces' },
      { name: 'Sugar', amount: 200, unit: 'g' },
      { name: 'Milk', amount: 300, unit: 'ml' },
      { name: 'Heavy cream', amount: 100, unit: 'ml' },
      { name: 'Cornstarch', amount: 2, unit: 'tbsp' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'Cinnamon', amount: 1, unit: 'stick' },
    ],
    steps: [
      'Roll puff pastry and cut into circles to fit muffin tins',
      'Press pastry into greased muffin tins',
      'Make custard: heat milk, cream, sugar, and cinnamon stick until boiling',
      'Mix cornstarch with a little cold milk, then add to hot mixture',
      'Stir until thickened, remove from heat',
      'Whisk egg yolks, slowly add hot custard while whisking',
      'Strain custard and add vanilla',
      'Fill pastry cases 3/4 full with custard',
      'Bake at 250°C for 15-20 minutes until tops are caramelized with dark spots',
      'Cool and dust with cinnamon and powdered sugar',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Port wine, Vinho Verde, Ginjinha (cherry liqueur), Super Bock beer',
    nonAlcoholic: 'Bica (espresso), Galão (latte), Fresh orange juice, Sumol soda',
  },
  music: [
    'Fado music (traditional Portuguese genre)',
    'Amália Rodrigues - Fado classics',
    'Mariza - modern Fado',
    'Portuguese guitar melodies',
  ],
  decorationIdeas: [
    'Azulejo tiles (blue and white Portuguese tiles)',
    'Red, green, and white colors (Portuguese flag)',
    'Cork decorations',
    'Sardine motifs',
    'Fishing nets and nautical themes',
  ],
  conversationStarters: [
    'Have you tried authentic pastel de nata?',
    'What\'s your favorite Portuguese destination?',
    'Have you listened to Fado music?',
    'Would you like to explore the Douro Valley?',
    'What do you know about Portugal\'s Age of Discovery?',
  ],
  quiz: [
    {
      id: 'portugal-q1',
      question: 'What is the capital of Portugal?',
      options: ['Porto', 'Lisbon', 'Faro', 'Coimbra'],
      correctAnswer: 1,
    },
    {
      id: 'portugal-q2',
      question: 'What is Portugal famous for producing?',
      options: ['Champagne', 'Port Wine', 'Whiskey', 'Sake'],
      correctAnswer: 1,
    },
    {
      id: 'portugal-q3',
      question: 'What is the traditional Portuguese custard tart called?',
      options: ['Croissant', 'Cannoli', 'Pastel de Nata', 'Éclair'],
      correctAnswer: 2,
    },
    {
      id: 'portugal-q4',
      question: 'What traditional music genre is Portugal known for?',
      options: ['Flamenco', 'Fado', 'Samba', 'Tango'],
      correctAnswer: 1,
    },
    {
      id: 'portugal-q5',
      question: 'What is bacalhau?',
      options: ['A type of cheese', 'Salt cod', 'Grilled chicken', 'A dessert'],
      correctAnswer: 1,
    },
    {
      id: 'portugal-q6',
      question: 'When did Portugal have its Carnation Revolution?',
      options: ['1950', '1968', '1974', '1989'],
      correctAnswer: 2,
    },
    {
      id: 'portugal-q7',
      question: 'What is Portugal\'s currency?',
      options: ['Escudo', 'Euro', 'Peseta', 'Real'],
      correctAnswer: 1,
    },
    {
      id: 'portugal-q8',
      question: 'What is the oldest nation-state in Europe?',
      options: ['France', 'Spain', 'Portugal', 'England'],
      correctAnswer: 2,
    },
    {
      id: 'portugal-q9',
      question: 'How many UNESCO World Heritage Sites does Portugal have?',
      options: ['5', '10', '17', '25'],
      correctAnswer: 2,
    },
    {
      id: 'portugal-q10',
      question: 'What revolutionary ship design enabled Portuguese exploration?',
      options: ['Galleon', 'Caravel', 'Frigate', 'Clipper'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 44, y: 42 },
};