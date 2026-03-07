import { Country } from '@/types';

export const croatia: Country = {
  id: 'croatia',
  name: 'Croatia',
  code: 'HR',
  continent: 'Europe',
  flag: '🇭🇷',
  landscapeImage: 'https://images.unsplash.com/photo-1565073182887-6bcefbe225b1?w=800&q=80',
  description: 'Croatia is a stunning Mediterranean country known for its crystal-clear Adriatic coastline, historic walled cities, beautiful islands, and rich cultural heritage. From ancient Roman ruins to medieval fortresses, it offers a perfect blend of history and natural beauty.',
  quickFacts: [
    { label: 'Capital', value: 'Zagreb' },
    { label: 'Population', value: '3.9 million' },
    { label: 'Official Language', value: 'Croatian' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '56,594 km²' },
  ],
  facts: [
    'Dubrovnik\'s Old Town served as the filming location for King\'s Landing in Game of Thrones',
    'Croatia has 8 UNESCO World Heritage Sites',
    'The country has over 1,200 islands, though only 50 are inhabited',
    'The necktie (cravat) originated in Croatia',
    'Plitvice Lakes National Park has 16 interconnected lakes',
    'Croatia has one of the sunniest coastlines in Europe',
    'The Dalmatian dog breed originates from Croatia',
    'Croatia is home to the world\'s smallest town (Hum) with only 30 residents',
  ],
  foodCulture: 'Croatian cuisine varies by region - Mediterranean along the coast with seafood, olive oil, and wine, while inland areas feature heartier Central European dishes with meat, stews, and pastries. Italian influence is strong along the coast, while Central European flavors dominate inland.',
  history: [
    {
      year: '7th century',
      title: 'Croat Settlement',
      description: 'Croat tribes arrived in the region, establishing settlements that would become the foundation of Croatian identity.'
    },
    {
      year: '925 AD',
      title: 'Kingdom of Croatia',
      description: 'The Kingdom of Croatia was established, lasting until 1102 when it entered a union with Hungary.'
    },
    {
      year: '1918',
      title: 'Kingdom of Yugoslavia',
      description: 'After WWI, Croatia became part of the Kingdom of Serbs, Croats, and Slovenes, later renamed Yugoslavia.'
    },
    {
      year: '1991',
      title: 'Independence',
      description: 'Croatia declared independence from Yugoslavia, followed by the Croatian War of Independence.'
    },
    {
      year: '2013',
      title: 'EU Membership',
      description: 'Croatia joined the European Union, opening new opportunities for economic development and tourism.'
    },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Schengen visa rules apply. Many nationalities can visit visa-free for up to 90 days.' },
    { item: 'Best time to visit', description: 'May to September for beach weather; April-May and September-October for fewer crowds' },
    { item: 'Transportation', description: 'Buses along the coast, ferries between islands, rental cars, domestic flights.' },
    { item: 'Language', description: 'Croatian is official. English widely spoken in tourist areas.' },
    { item: 'Safety', description: 'Very safe for tourists. Standard precautions in crowded areas.' },
  ],
  mustVisit: [
    { name: 'Dubrovnik Old Town', description: 'UNESCO World Heritage site with medieval walls, marble streets, and Game of Thrones filming locations.' },
    { name: 'Plitvice Lakes National Park', description: '16 terraced lakes connected by waterfalls, surrounded by lush forests and wooden walkways.' },
    { name: 'Hvar Island', description: 'Stunning Adriatic island known for lavender fields, crystal-clear waters, and vibrant nightlife.' },
    { name: 'Split and Diocletian\'s Palace', description: 'Ancient Roman palace complex that forms the heart of Split\'s old town, a living UNESCO site.' },
    { name: 'Rovinj', description: 'Picturesque coastal town with colorful houses, narrow cobbled streets, and Italian charm.' },
  ],
  mainDish: {
    id: 'croatia-peka',
    name: 'Peka',
    description: 'A traditional Croatian dish where meat (usually lamb or octopus) and vegetables are slow-cooked under a bell-shaped lid covered with hot coals. The result is incredibly tender, flavorful meat. A true taste of Dalmatia.',
    cookingTime: 180,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Lamb or veal chunks', amount: 1.5, unit: 'kg' },
      { name: 'Potatoes, quartered', amount: 1, unit: 'kg' },
      { name: 'Onions, quartered', amount: 3, unit: 'pieces' },
      { name: 'Bell peppers', amount: 3, unit: 'pieces' },
      { name: 'Tomatoes, halved', amount: 4, unit: 'pieces' },
      { name: 'Garlic cloves', amount: 6, unit: 'pieces' },
      { name: 'Olive oil', amount: 100, unit: 'ml' },
      { name: 'White wine', amount: 200, unit: 'ml' },
      { name: 'Rosemary, thyme', amount: 3, unit: 'sprigs' },
    ],
    steps: [
      'In a large baking dish, arrange meat at the bottom',
      'Season generously with salt, pepper, and herbs',
      'Arrange vegetables around and on top of meat',
      'Drizzle with olive oil and wine',
      'Cover tightly with a lid or heavy foil',
      'If using peka method: cover with bell lid and place coals on top',
      'For oven: bake at 160°C for 2.5-3 hours until meat is tender',
      'Let rest for 10 minutes before serving',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Plavac Mali wine, Rakija (fruit brandy), Croatian beer, Prošek (dessert wine)',
    nonAlcoholic: 'Cedevita (vitamin drink), Croatian coffee, Freshly squeezed orange juice',
  },
  music: ['Klapa singing', 'Traditional tamburitza music', 'Modern Croatian pop'],
  decorationIdeas: [
    'Red, white, and blue checkered pattern',
    'Adriatic blue and white color scheme',
    'Lavender from Hvar',
    'Olive branches',
    'Mediterranean nautical elements',
    'Stone and terracotta accents',
  ],
  conversationStarters: [
    'Have you watched Game of Thrones? Did you recognize Dubrovnik?',
    'Would you prefer island-hopping or exploring historic cities?',
    'What Croatian island would you most like to visit: Hvar, Brač, or Korčula?',
    'Have you tried Croatian wine? What do you think of Plavac Mali?',
  ],
  quiz: [
    {
      id: 'croatia-q1',
      question: 'What is Croatia\'s capital city?',
      options: ['Split', 'Zagreb', 'Dubrovnik', 'Rijeka'],
      correctAnswer: 1,
    },
    {
      id: 'croatia-q2',
      question: 'Which TV series was filmed in Dubrovnik\'s Old Town?',
      options: ['Vikings', 'The Witcher', 'Game of Thrones', 'The Crown'],
      correctAnswer: 2,
    },
    {
      id: 'croatia-q3',
      question: 'What fashion accessory originated in Croatia?',
      options: ['The bow tie', 'The necktie', 'The scarf', 'The beret'],
      correctAnswer: 1,
    },
    {
      id: 'croatia-q4',
      question: 'How many islands does Croatia have?',
      options: ['Over 500', 'Over 800', 'Over 1,200', 'Over 2,000'],
      correctAnswer: 2,
    },
    {
      id: 'croatia-q5',
      question: 'When did Croatia gain independence?',
      options: ['1989', '1991', '1995', '2000'],
      correctAnswer: 1,
    },
    {
      id: 'croatia-q6',
      question: 'What dog breed originates from Croatia?',
      options: ['Poodle', 'Dalmatian', 'Beagle', 'Husky'],
      correctAnswer: 1,
    },
    {
      id: 'croatia-q7',
      question: 'When did Croatia join the European Union?',
      options: ['2004', '2007', '2013', '2018'],
      correctAnswer: 2,
    },
    {
      id: 'croatia-q8',
      question: 'How many UNESCO World Heritage Sites does Croatia have?',
      options: ['4', '6', '8', '10'],
      correctAnswer: 2,
    },
    {
      id: 'croatia-q9',
      question: 'What is the traditional Croatian singing style called?',
      options: ['Klapa', 'Fado', 'Flamenco', 'Yodeling'],
      correctAnswer: 0,
    },
    {
      id: 'croatia-q10',
      question: 'What is the name of Croatia\'s famous lakes national park?',
      options: ['Krka', 'Plitvice Lakes', 'Mljet', 'Kornati'],
      correctAnswer: 1,
    },
  ],
  innovations: [
    {
      name: 'Necktie (Cravat)',
      year: '17th century',
      description: 'Croatian mercenaries introduced the cravat to France, which evolved into the modern necktie worn worldwide.'
    },
    {
      name: 'Mechanical Pencil',
      year: '1906',
      description: 'Slavoljub Eduard Penkala invented the first solid-ink mechanical pencil and fountain pen, revolutionizing writing instruments.'
    },
    {
      name: 'Parachute',
      year: '1617',
      description: 'Faust Vrančić designed and tested an early parachute, documented in his work "Machinae Novae."'
    },
    {
      name: 'AC Electric Motor',
      year: '1880s',
      description: 'Nikola Tesla, born in Croatia, invented the AC induction motor and polyphase electrical system, powering the modern world.'
    },
  ],
  dessert: {
    id: 'croatia-dessert',
    name: 'Kremšnita',
    description: 'Creamy custard slice - layers of puff pastry with vanilla custard cream, a beloved Croatian dessert',
    cookingTime: 90,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Puff pastry sheets', amount: 500, unit: 'g' },
      { name: 'Whole milk', amount: 1000, unit: 'ml' },
      { name: 'Egg yolks', amount: 6, unit: 'large' },
      { name: 'Sugar', amount: 200, unit: 'g' },
      { name: 'Vanilla pudding powder', amount: 80, unit: 'g' },
      { name: 'Butter', amount: 100, unit: 'g' },
      { name: 'Heavy cream', amount: 300, unit: 'ml' },
      { name: 'Powdered sugar for dusting', amount: 50, unit: 'g' },
    ],
    steps: [
      'Bake puff pastry sheets at 200°C until golden and crispy.',
      'Heat milk with half the sugar.',
      'Whisk egg yolks with remaining sugar and pudding powder.',
      'Temper eggs with hot milk, return to pot.',
      'Cook until thick, stirring constantly.',
      'Remove from heat, add butter, stir until smooth.',
      'Let cool slightly.',
      'Whip heavy cream to stiff peaks, fold into custard.',
      'Place one pastry layer in pan, spread custard, top with second layer.',
      'Refrigerate for 4 hours, dust with powdered sugar before serving.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&q=80',
  },
  coordinates: { x: 50, y: 45 },
};
