import { Country } from '@/types';

export const germany: Country = {
  id: 'germany',
  name: 'Germany',
  code: 'DE',
  continent: 'Europe',
  flag: '🇩🇪',
  landscapeImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80',
  description: 'Germany is a country of diverse landscapes, from the Alps to the North Sea. Known for precision engineering, beer culture, fairy-tale castles, and a complex but fascinating history.',
  quickFacts: [
    { label: 'Capital', value: 'Berlin' },
    { label: 'Population', value: '83.2 million' },
    { label: 'Official Language', value: 'German' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '357,022 km²' },
  ],
  facts: [
    'Germany has over 1,500 different types of beer and 7,000 varieties of bread',
    'The first printed book, the Gutenberg Bible, was created in Germany in 1455',
    'Germany is the largest economy in Europe',
    'Berlin has more bridges than Venice',
    'The German Autobahn has stretches with no speed limit',
    'Germany is home to Neuschwanstein, the fairy-tale castle that inspired Disney',
    'Christmas markets (Weihnachtsmärkte) originated in Germany',
    'Germans are the second-largest beer consumers in Europe',
  ],
  foodCulture: 'German cuisine is hearty and varies by region. Meals are structured, with a large lunch and lighter dinner. Bread plays a central role, with each region having its specialties. Beer purity laws date back to 1516.',
  history: [
    {
      year: '1871',
      title: 'German Unification',
      description: 'Otto von Bismarck unified German states into a single empire under Prussian leadership.'
    },
    {
      year: '1939-1945',
      title: 'World War II',
      description: 'Nazi Germany\'s aggression led to the most devastating war in human history.'
    },
    {
      year: '1961-1989',
      title: 'Berlin Wall',
      description: 'The wall divided East and West Berlin, symbolizing the Cold War division of Europe.'
    },
    {
      year: '1990',
      title: 'Reunification',
      description: 'East and West Germany reunited after the fall of the Berlin Wall, becoming one nation again.'
    },
  ],
  innovations: [
    {
      name: 'Printing Press',
      year: '1440',
      description: 'Johannes Gutenberg invented movable type printing, revolutionizing information distribution.'
    },
    {
      name: 'Automobile',
      year: '1886',
      description: 'Karl Benz created the first gasoline-powered automobile, the Benz Patent-Motorwagen.'
    },
    {
      name: 'MP3 Format',
      year: '1982',
      description: 'German engineers at Fraunhofer Institute developed the MP3 audio compression format.'
    },
    {
      name: 'Aspirin',
      year: '1897',
      description: 'Bayer chemist Felix Hoffmann synthesized aspirin, one of the world\'s most used medicines.'
    },
  ],
  mustVisit: [
    { name: 'Neuschwanstein Castle', description: 'Fairy-tale castle in Bavaria that inspired Disney\'s Sleeping Beauty castle.' },
    { name: 'Brandenburg Gate', description: 'Iconic 18th-century monument in Berlin, symbol of reunification.' },
    { name: 'Cologne Cathedral', description: 'Gothic masterpiece and UNESCO World Heritage site, took 632 years to complete.' },
    { name: 'Black Forest', description: 'Dense, mountainous forest region famous for cuckoo clocks and Black Forest cake.' },
    { name: 'Romantic Road', description: 'Scenic route through Bavaria with medieval towns, castles, and vineyards.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'May-September for warm weather, or December for magical Christmas markets.' },
    { item: 'Rail pass', description: 'Germany has an excellent train system connecting all major cities.' },
    { item: 'Cash', description: 'Many places still prefer cash over cards, especially smaller establishments.' },
    { item: 'Power adapter', description: 'Germany uses Type C and F plugs with 230V.' },
    { item: 'Comfortable shoes', description: 'German cities are very walkable with cobblestone streets.' },
    { item: 'German phrasebook', description: 'While many speak English, locals appreciate efforts to speak German.' }
  ],
  mainDish: {
    id: 'germany-main',
    name: 'Sauerbraten',
    description: 'Traditional German pot roast, marinated in vinegar and spices, served with red cabbage',
    cookingTime: 240,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Beef roast', amount: 1500, unit: 'g' },
      { name: 'Red wine vinegar', amount: 500, unit: 'ml' },
      { name: 'Red wine', amount: 250, unit: 'ml' },
      { name: 'Onions', amount: 2, unit: 'large' },
      { name: 'Carrots', amount: 2, unit: 'medium' },
      { name: 'Bay leaves', amount: 3, unit: 'leaves' },
      { name: 'Juniper berries', amount: 10, unit: 'berries' },
      { name: 'Gingersnap cookies', amount: 100, unit: 'g' },
      { name: 'Beef broth', amount: 500, unit: 'ml' },
    ],
    steps: [
      'Combine vinegar, wine, sliced onions, carrots, bay leaves, and juniper berries',
      'Place beef in marinade, refrigerate for 2-3 days, turning daily',
      'Remove beef from marinade, pat dry, season with salt and pepper',
      'Brown beef on all sides in a Dutch oven',
      'Add strained marinade and beef broth',
      'Cover and simmer for 3-4 hours until meat is tender',
      'Remove meat, keep warm',
      'Strain sauce, add crumbled gingersnap cookies to thicken',
      'Slice meat, serve with sauce, red cabbage, and dumplings',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80',
  },
  dessert: {
    id: 'germany-dessert',
    name: 'Black Forest Cake (Schwarzwälder Kirschtorte)',
    description: 'Chocolate sponge cake layered with whipped cream and cherries, soaked in kirsch',
    cookingTime: 90,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Dark chocolate', amount: 200, unit: 'g' },
      { name: 'Flour', amount: 200, unit: 'g' },
      { name: 'Sugar', amount: 200, unit: 'g' },
      { name: 'Eggs', amount: 6, unit: 'large' },
      { name: 'Heavy cream', amount: 600, unit: 'ml' },
      { name: 'Sour cherries', amount: 500, unit: 'g' },
      { name: 'Kirsch (cherry brandy)', amount: 100, unit: 'ml' },
      { name: 'Cocoa powder', amount: 50, unit: 'g' },
    ],
    steps: [
      'Bake chocolate sponge cake, let cool completely',
      'Cut cake horizontally into 3 layers',
      'Drain cherries, reserve juice, mix juice with kirsch',
      'Whip heavy cream with sugar until stiff peaks form',
      'Brush cake layers with kirsch syrup',
      'Layer cake with whipped cream and cherries',
      'Cover entire cake with remaining whipped cream',
      'Garnish with chocolate shavings and fresh cherries',
      'Refrigerate for at least 4 hours before serving',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
  },
  drinks: {
    alcoholic: 'German beer (Pilsner, Weizen, Dunkel), Riesling wine, Jägermeister, Schnapps',
    nonAlcoholic: 'Apfelschorle (apple juice with sparkling water), Spezi (cola-orange mix), Mineral water',
  },
  music: [
    'Symphony No. 9 - Ludwig van Beethoven',
    'Ride of the Valkyries - Richard Wagner',
    'Air on the G String - Johann Sebastian Bach',
    '99 Luftballons - Nena',
    'Du Hast - Rammstein',
  ],
  decorationIdeas: [
    'Black, red, and gold colors from German flag',
    'Beer steins and pretzels',
    'Bavarian blue and white checkered pattern',
    'Cuckoo clocks',
    'German Christmas decorations and nutcrackers',
  ],
  conversationStarters: [
    'Have you ever been to Oktoberfest?',
    'What\'s your favorite German beer style?',
    'Have you visited any German castles?',
    'What do you think about German cars?',
    'Do you prefer Berlin or Munich?',
  ],
  quiz: [
    {
      id: 'germany-q1',
      question: 'What is the capital of Germany?',
      options: ['Munich', 'Frankfurt', 'Berlin', 'Hamburg'],
      correctAnswer: 2,
    },
    {
      id: 'germany-q2',
      question: 'When did the Berlin Wall fall?',
      options: ['1987', '1989', '1991', '1993'],
      correctAnswer: 1,
    },
    {
      id: 'germany-q3',
      question: 'What is the German beer purity law called?',
      options: ['Reinheitsgebot', 'Biergarten', 'Weissbier', 'Dunkel'],
      correctAnswer: 0,
    },
    {
      id: 'germany-q4',
      question: 'Which castle inspired Disney\'s Sleeping Beauty castle?',
      options: ['Heidelberg', 'Neuschwanstein', 'Hohenzollern', 'Eltz'],
      correctAnswer: 1,
    },
    {
      id: 'germany-q5',
      question: 'Who invented the printing press?',
      options: ['Martin Luther', 'Albert Einstein', 'Johannes Gutenberg', 'Karl Benz'],
      correctAnswer: 2,
    },
    {
      id: 'germany-q6',
      question: 'How many types of bread does Germany have approximately?',
      options: ['1,000', '3,000', '7,000', '10,000'],
      correctAnswer: 2,
    },
    {
      id: 'germany-q7',
      question: 'When did Germany reunify after the Cold War?',
      options: ['1989', '1990', '1991', '1992'],
      correctAnswer: 1,
    },
    {
      id: 'germany-q8',
      question: 'What is Germany\'s traditional pot roast called?',
      options: ['Schnitzel', 'Sauerbraten', 'Bratwurst', 'Rouladen'],
      correctAnswer: 1,
    },
    {
      id: 'germany-q9',
      question: 'Who invented the automobile?',
      options: ['Henry Ford', 'Karl Benz', 'Ferdinand Porsche', 'Gottlieb Daimler'],
      correctAnswer: 1,
    },
    {
      id: 'germany-q10',
      question: 'What famous chocolate cake comes from the Black Forest region?',
      options: ['Sacher Torte', 'Black Forest Cake', 'Stollen', 'Baumkuchen'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 49, y: 51 },
};
