import { Country } from '@/types';

export const czechRepublic: Country = {
  id: 'czech-republic',
  name: 'Czech Republic',
  code: 'CZ',
  continent: 'Europe',
  flag: '🇨🇿',
  landscapeImage: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800',
  description: 'The Czech Republic, also known as Czechia, is a Central European country famous for its stunning medieval castles, historic Prague, world-renowned beer culture, and rich artistic heritage. It seamlessly blends Gothic, Renaissance, and Baroque architecture with modern culture.',
  quickFacts: [
    { label: 'Capital', value: 'Prague' },
    { label: 'Population', value: '10.5 million' },
    { label: 'Official Language', value: 'Czech' },
    { label: 'Currency', value: 'Czech Koruna (CZK)' },
    { label: 'Area', value: '78,871 km²' },
  ],
  facts: [
    'Czechs drink more beer per capita than any other nation',
    'Prague Castle is the largest ancient castle complex in the world',
    'The country has 12 UNESCO World Heritage Sites',
    'Pilsner beer was invented in Plzeň (Pilsen) in 1842',
    'The word "robot" was coined by Czech writer Karel Čapek',
    'Czech Republic is one of the most atheist countries in the world',
    'The country produces the most famous crystal in the world - Bohemian crystal',
    'Czechs consume the most meat per capita in Europe',
  ],
  foodCulture: 'Czech cuisine is hearty and filling, featuring pork, beef, dumplings, and sauerkraut. Meals are substantial and traditionally served with beer. Influenced by Austrian and German cuisines, dishes are rich and savory, perfect for the Central European climate.',
  history: [
    {
      year: '9th century',
      title: 'Great Moravia',
      description: 'The Slavic Great Moravian Empire flourished, bringing Christianity and establishing early Czech identity.'
    },
    {
      year: '1348',
      title: 'Charles University',
      description: 'Charles IV founded Charles University in Prague, the oldest university in Central Europe.'
    },
    {
      year: '1918',
      title: 'Czechoslovakia Founded',
      description: 'After WWI, Czechoslovakia was established as an independent nation combining Czech lands and Slovakia.'
    },
    {
      year: '1989',
      title: 'Velvet Revolution',
      description: 'A peaceful transition from communist rule to democracy, led by playwright Václav Havel.'
    },
    {
      year: '1993',
      title: 'Peaceful Separation',
      description: 'The "Velvet Divorce" peacefully divided Czechoslovakia into the Czech Republic and Slovakia.'
    },
    {
      year: '2004',
      title: 'EU Membership',
      description: 'The Czech Republic joined the European Union, strengthening its ties with Western Europe.'
    },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Schengen visa rules apply. Many nationalities can visit visa-free for up to 90 days.' },
    { item: 'Best time to visit', description: 'May to September for warm weather; December for Christmas markets' },
    { item: 'Transportation', description: 'Excellent public transport including trams, metro, and trains.' },
    { item: 'Language', description: 'Czech is official. English spoken in tourist areas, especially Prague.' },
    { item: 'Safety', description: 'Very safe. Watch for pickpockets in tourist areas.' },
  ],
  mainDish: {
    id: 'czech-republic-svickova',
    name: 'Svíčková (Marinated Sirloin)',
    description: 'The Czech Republic\'s beloved national dish - tender beef sirloin in a creamy vegetable sauce, served with bread dumplings, cranberry sauce, and a slice of lemon. It\'s comfort food at its finest and a must-try in any Czech restaurant.',
    cookingTime: 150,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Beef sirloin', amount: 1, unit: 'kg' },
      { name: 'Root vegetables (carrots, celery, parsnip)', amount: 500, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'pieces' },
      { name: 'Heavy cream', amount: 200, unit: 'ml' },
      { name: 'Lemon juice', amount: 2, unit: 'tbsp' },
      { name: 'Sugar', amount: 1, unit: 'tbsp' },
      { name: 'Bay leaves, allspice', amount: 3, unit: 'pieces' },
      { name: 'Bread dumplings', amount: 6, unit: 'slices' },
    ],
    steps: [
      'Marinate beef overnight with vegetables, spices, and vinegar',
      'Remove beef, pat dry, and sear on all sides',
      'Roast marinated vegetables until caramelized',
      'Simmer beef with vegetables and broth for 1.5 hours until tender',
      'Remove beef and blend vegetables with cream into smooth sauce',
      'Add lemon juice and sugar to sauce, adjust seasoning',
      'Slice beef thinly and serve with sauce',
      'Garnish with cranberry sauce, whipped cream, and lemon slice',
      'Serve with warm bread dumplings',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1625937710197-8196b34e4c77?w=600',
  },
  drinks: {
    alcoholic: 'Pilsner Urquell, Budweiser Budvar, Becherovka (herbal liqueur), Moravian wine',
    nonAlcoholic: 'Kofola (Czech cola), Lemonade, Mineral water',
  },
  music: ['Classical music (Dvořák, Smetana)', 'Folk music', 'Modern Czech rock and pop'],
  decorationIdeas: [
    'Bohemian crystal glassware',
    'Red, white, and blue (flag colors)',
    'Gothic and Baroque architectural elements',
    'Hops and beer-themed decorations',
    'Wooden folk art',
    'Medieval castle motifs',
  ],
  conversationStarters: [
    'Have you been to Prague? What did you think of the architecture?',
    'Which Czech beer is your favorite: Pilsner Urquell or Budvar?',
    'Would you explore medieval castles or enjoy spa towns like Karlovy Vary?',
    'What do you know about the Velvet Revolution?',
  ],
  quiz: [
    {
      id: 'czech-republic-q1',
      question: 'What is the capital of the Czech Republic?',
      options: ['Budapest', 'Prague', 'Vienna', 'Bratislava'],
      correctAnswer: 1,
    },
    {
      id: 'czech-republic-q2',
      question: 'Where was Pilsner beer invented?',
      options: ['Prague', 'Brno', 'Plzeň', 'Ostrava'],
      correctAnswer: 2,
    },
    {
      id: 'czech-republic-q3',
      question: 'What is the Czech Republic\'s traditional beef dish called?',
      options: ['Goulash', 'Svíčková', 'Schnitzel', 'Koláče'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 50, y: 50 },
};
