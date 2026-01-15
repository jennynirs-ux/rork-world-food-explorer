import { Country } from '@/types';

export const slovakia: Country = {
  id: 'slovakia',
  name: 'Slovakia',
  code: 'SK',
  continent: 'Europe',
  flag: '🇸🇰',
  landscapeImage: 'https://images.unsplash.com/photo-1581032793097-38f300d4e0dc?w=800',
  description: 'Slovakia is a landlocked country in Central Europe known for its dramatic natural landscape, medieval castles, and folk traditions. The Tatra Mountains offer spectacular hiking and skiing opportunities.',
  quickFacts: [
    { label: 'Capital', value: 'Bratislava' },
    { label: 'Population', value: '5.5 million' },
    { label: 'Official Language', value: 'Slovak' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '49,035 km²' },
  ],
  facts: [
    'Slovakia has more than 180 castles and 425 chateaux',
    'The geographical center of Europe is in Slovakia',
    'Slovakia has the highest number of castles per capita in the world',
    'The Demänovská Cave of Liberty is one of Europe\'s most beautiful caves',
    'Slovakia is the world\'s largest per-capita producer of cars',
    'The Tatra Mountains are the smallest alpine mountain range in the world',
    'Slovakia has 9 national parks and 14 protected landscape areas',
    'Traditional Slovak folk music is recognized by UNESCO',
  ],
  foodCulture: 'Slovak cuisine is hearty and filling, designed for cold mountain climates. Potato, cheese, and sheep products feature heavily. The food reflects a mix of Slavic, Austrian, and Hungarian influences, with unique Slovak twists.',
  history: [
    {
      year: '5th century',
      title: 'Slavic Settlement',
      description: 'Slavic tribes settled in the region, forming the basis of Slovak ethnic identity.'
    },
    {
      year: '9th century',
      title: 'Great Moravia',
      description: 'Slovakia was part of the Great Moravian Empire, an important early Slavic state.'
    },
    {
      year: '1000-1918',
      title: 'Kingdom of Hungary',
      description: 'For nearly a millennium, Slovakia was part of the Kingdom of Hungary and later Austria-Hungary.'
    },
    {
      year: '1918',
      title: 'Czechoslovakia Formed',
      description: 'After World War I, Slovakia joined with Czech lands to form Czechoslovakia.'
    },
    {
      year: '1993',
      title: 'Independence',
      description: 'Slovakia peacefully separated from Czech Republic in the "Velvet Divorce," becoming an independent nation.'
    },
    {
      year: '2004',
      title: 'EU Membership',
      description: 'Slovakia joined the European Union and later adopted the Euro in 2009.'
    },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Schengen visa rules apply. EU citizens and many others can visit visa-free.' },
    { item: 'Best time to visit', description: 'June to September for hiking; December to March for skiing' },
    { item: 'Transportation', description: 'Good train connections between cities. Buses reach remote areas.' },
    { item: 'Language', description: 'Slovak. English spoken in Bratislava and tourist areas.' },
    { item: 'Safety', description: 'Very safe country with low crime rates. Friendly people.' },
  ],
  mainDish: {
    id: 'slovakia-bryndzove-halusky',
    name: 'Bryndzové Halušky',
    description: 'Slovak national dish - small potato dumplings with sheep cheese (bryndza) and topped with crispy bacon. A hearty mountain meal beloved by all Slovaks.',
    cookingTime: 45,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Potatoes', amount: 800, unit: 'g' },
      { name: 'All-purpose flour', amount: 200, unit: 'g' },
      { name: 'Egg', amount: 1, unit: 'piece' },
      { name: 'Bryndza cheese (sheep cheese)', amount: 300, unit: 'g' },
      { name: 'Bacon', amount: 200, unit: 'g' },
      { name: 'Salt', amount: 1, unit: 'tsp' },
      { name: 'Sour cream (for serving)', amount: 100, unit: 'ml' },
    ],
    steps: [
      'Peel and grate potatoes finely',
      'Mix grated potatoes with flour, egg, and salt to form dough',
      'Bring large pot of salted water to boil',
      'Push dough through halušky maker or grater into boiling water',
      'Cook until dumplings float to surface (2-3 minutes)',
      'Remove with slotted spoon and drain',
      'Cut bacon into small pieces and fry until crispy',
      'Mix hot halušky with crumbled bryndza cheese',
      'Top with crispy bacon and rendered fat',
      'Serve immediately, optionally with sour cream',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600',
  },
  drinks: {
    alcoholic: 'Borovička (juniper brandy), Slovak wine, Tatratea (herbal liqueur)',
    nonAlcoholic: 'Kofola (Slovak cola), Vinea (grape drink), Herbal teas',
  },
  music: ['Slovak folk music', 'Fujara (traditional flute)', 'Shepherd songs', 'Contemporary Slovak pop'],
  decorationIdeas: [
    'White, blue, and red (Slovak flag colors)',
    'Traditional folk patterns and embroidery',
    'Mountain and castle themes',
    'Painted Easter eggs',
    'Wooden carved items',
    'Traditional ceramics',
  ],
  conversationStarters: [
    'Have you heard of bryndzové halušky? It\'s Slovakia\'s national dish!',
    'Would you explore Slovak castles or hike the Tatra Mountains?',
    'Did you know Slovakia has the most castles per capita in the world?',
    'Slovakia and Czech Republic split peacefully - ever heard of the Velvet Divorce?',
  ],
  quiz: [
    {
      id: 'slovakia-q1',
      question: 'What is Slovakia\'s capital city?',
      options: ['Prague', 'Budapest', 'Bratislava', 'Vienna'],
      correctAnswer: 2,
    },
    {
      id: 'slovakia-q2',
      question: 'What is Slovakia\'s national dish?',
      options: ['Goulash', 'Bryndzové Halušky', 'Schnitzel', 'Pierogi'],
      correctAnswer: 1,
    },
    {
      id: 'slovakia-q3',
      question: 'When did Slovakia become independent?',
      options: ['1918', '1945', '1989', '1993'],
      correctAnswer: 3,
    },
  ],
  coordinates: { x: 52, y: 49 },
};
