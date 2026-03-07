import { Country } from '@/types';

export const ireland: Country = {
  id: 'ireland',
  name: 'Ireland',
  code: 'IE',
  continent: 'Europe',
  flag: '🇮🇪',
  landscapeImage: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800&q=80',
  description: 'Ireland, the "Emerald Isle," is known for stunning landscapes, rich literary tradition, lively pub culture, and warm hospitality. From dramatic coastal cliffs to medieval castles, Ireland offers timeless beauty and vibrant culture.',
  quickFacts: [
    { label: 'Capital', value: 'Dublin' },
    { label: 'Population', value: '5.1 million' },
    { label: 'Official Language', value: 'Irish, English' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '70,273 km²' },
  ],
  facts: [
    'Ireland has won the Eurovision Song Contest 7 times, more than any other country',
    'Halloween originated from the ancient Irish festival of Samhain',
    'Ireland has produced four Nobel Prize winners in literature',
    'The shamrock is Ireland\'s national symbol',
    'St. Patrick\'s Day is celebrated worldwide on March 17th',
    'Ireland is home to the oldest pub in Europe, opened in 900 AD',
  ],
  foodCulture: 'Irish cuisine emphasizes fresh, simple ingredients: potatoes, lamb, seafood, and dairy. Traditional dishes are hearty and comforting, perfect for the cool climate. The pub culture is central to Irish social life.',
  history: [
    {
      year: '432 AD',
      title: 'St. Patrick Arrives',
      description: 'St. Patrick brought Christianity to Ireland, becoming the country\'s patron saint.'
    },
    {
      year: '1845-1852',
      title: 'Great Famine',
      description: 'Potato blight caused widespread starvation and emigration, reducing Ireland\'s population by 25%.'
    },
    {
      year: '1922',
      title: 'Independence',
      description: 'The Irish Free State was established, leading to the Republic of Ireland in 1949.'
    },
  ],
  innovations: [
    {
      name: 'Color Photography',
      year: '1850s',
      description: 'John Joly invented a method of color photography using screens.'
    },
    {
      name: 'Guided Torpedo',
      year: '1866',
      description: 'Irish engineer Louis Brennan invented the world\'s first guided torpedo.'
    },
  ],
  mustVisit: [
    { name: 'Cliffs of Moher', description: 'Dramatic coastal cliffs rising 214 meters above the Atlantic Ocean.' },
    { name: 'Ring of Kerry', description: 'Scenic 179km circular route with mountains, lakes, and coastal views.' },
    { name: 'Trinity College Dublin', description: 'Historic university home to the ancient Book of Kells.' },
    { name: 'Giant\'s Causeway', description: 'Natural rock formation of hexagonal basalt columns.' },
    { name: 'Killarney National Park', description: 'Beautiful park with lakes, mountains, and Muckross House.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'May-September for warmest weather and longest days.' },
    { item: 'Rain gear', description: 'Essential! Ireland has frequent rain showers.' },
    { item: 'Layers', description: 'Weather changes quickly, dress in layers.' },
    { item: 'Car rental', description: 'Best way to explore the countryside and scenic routes.' },
  ],
  mainDish: {
    id: 'ireland-main',
    name: 'Irish Stew',
    description: 'Traditional lamb and vegetable stew, hearty and comforting',
    cookingTime: 150,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Lamb shoulder chunks', amount: 1000, unit: 'g' },
      { name: 'Potatoes', amount: 800, unit: 'g' },
      { name: 'Carrots', amount: 400, unit: 'g' },
      { name: 'Onions', amount: 3, unit: 'large' },
      { name: 'Leeks', amount: 2, unit: 'large' },
      { name: 'Thyme', amount: 3, unit: 'sprigs' },
      { name: 'Bay leaves', amount: 2, unit: 'pieces' },
      { name: 'Lamb or beef stock', amount: 1000, unit: 'ml' },
    ],
    steps: [
      'Brown lamb pieces in large pot',
      'Layer onions, carrots, potatoes, and lamb in pot',
      'Add thyme, bay leaves, salt, and pepper',
      'Pour stock over everything',
      'Bring to boil, then simmer covered for 2 hours',
      'Check seasoning, adjust if needed',
      'Serve with crusty soda bread',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=800&q=80',
  },
  dessert: {
    id: 'ireland-dessert',
    name: 'Baileys Irish Cream Cheesecake',
    description: 'Creamy cheesecake with Irish cream liqueur',
    cookingTime: 360,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Cream cheese', amount: 600, unit: 'g' },
      { name: 'Sugar', amount: 200, unit: 'g' },
      { name: 'Baileys Irish Cream', amount: 150, unit: 'ml' },
      { name: 'Heavy cream', amount: 200, unit: 'ml' },
      { name: 'Eggs', amount: 3, unit: 'large' },
      { name: 'Chocolate cookies for crust', amount: 300, unit: 'g' },
      { name: 'Butter', amount: 100, unit: 'g' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Crush cookies, mix with melted butter, press into pan',
      'Beat cream cheese and sugar until smooth',
      'Add eggs one at a time, then Baileys and vanilla',
      'Pour over crust, bake at 160°C for 50 minutes',
      'Cool in oven with door ajar for 1 hour',
      'Refrigerate for at least 4 hours',
      'Top with whipped cream and chocolate shavings',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Guinness, Irish whiskey (Jameson, Bushmills), Baileys Irish Cream, Irish coffee',
    nonAlcoholic: 'Barry\'s tea, Cidona (apple drink), Hot chocolate, Mineral water',
  },
  music: [
    'Danny Boy - traditional',
    'The Pogues - Irish punk',
    'U2 - rock band',
    'Enya - Celtic music',
    'Traditional Irish folk music',
  ],
  decorationIdeas: [
    'Irish flag colors (green, white, orange)',
    'Shamrock motifs',
    'Celtic knot patterns',
    'Emerald green accents',
    'Claddagh symbols',
  ],
  conversationStarters: [
    'Have you been to an Irish pub?',
    'What\'s your favorite Irish song?',
    'Do you celebrate St. Patrick\'s Day?',
    'Have you tried Guinness?',
  ],
  quiz: [
    {
      id: 'ireland-q1',
      question: 'What is Ireland\'s nickname?',
      options: ['The Green Island', 'The Emerald Isle', 'The Celtic Land', 'The Rainy Island'],
      correctAnswer: 1,
    },
    {
      id: 'ireland-q2',
      question: 'What holiday originated in Ireland?',
      options: ['Christmas', 'Halloween', 'Easter', 'Valentine\'s Day'],
      correctAnswer: 1,
    },
    {
      id: 'ireland-q3',
      question: 'What is Ireland\'s most famous beer?',
      options: ['Heineken', 'Guinness', 'Budweiser', 'Corona'],
      correctAnswer: 1,
    },
    {
      id: 'ireland-q4',
      question: 'What is the capital of Ireland?',
      options: ['Cork', 'Galway', 'Dublin', 'Limerick'],
      correctAnswer: 2,
    },
    {
      id: 'ireland-q5',
      question: 'What is Ireland\'s national symbol?',
      options: ['Rose', 'Thistle', 'Shamrock', 'Oak leaf'],
      correctAnswer: 2,
    },
    {
      id: 'ireland-q6',
      question: 'When is St. Patrick\'s Day celebrated?',
      options: ['March 1st', 'March 17th', 'April 1st', 'May 1st'],
      correctAnswer: 1,
    },
    {
      id: 'ireland-q7',
      question: 'How many times has Ireland won the Eurovision Song Contest?',
      options: ['3 times', '5 times', '7 times', '10 times'],
      correctAnswer: 2,
    },
    {
      id: 'ireland-q8',
      question: 'What natural wonder features cliffs rising 214 meters above the Atlantic?',
      options: ['White Cliffs of Dover', 'Cliffs of Moher', 'Beachy Head', 'Étretat Cliffs'],
      correctAnswer: 1,
    },
    {
      id: 'ireland-q9',
      question: 'What historic event occurred in Ireland between 1845-1852?',
      options: ['Industrial Revolution', 'Great Famine', 'Civil War', 'Viking Invasion'],
      correctAnswer: 1,
    },
    {
      id: 'ireland-q10',
      question: 'What currency does Ireland use?',
      options: ['British Pound', 'Irish Pound', 'Euro', 'Dollar'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 44, y: 53 },
};
