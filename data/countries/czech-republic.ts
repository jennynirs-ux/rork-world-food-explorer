import { Country } from '@/types';

export const czechRepublic: Country = {
  id: 'czech-republic',
  name: 'Czech Republic',
  code: 'CZ',
  continent: 'Europe',
  flag: '🇨🇿',
  landscapeImage: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&q=80',
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
  innovations: [
    {
      name: 'Contact Lenses',
      year: '1961',
      description: 'Otto Wichterle invented soft contact lenses, revolutionizing vision correction for millions worldwide.'
    },
    {
      name: 'Word "Robot"',
      year: '1920',
      description: 'Karel Čapek coined the word "robot" in his play R.U.R., introducing the concept to global culture.'
    },
    {
      name: 'Pilsner Beer',
      year: '1842',
      description: 'Invented the Pilsner style of beer in Plzeň, now the most popular beer style worldwide.'
    },
    {
      name: 'Semtex',
      year: '1966',
      description: 'Developed this powerful plastic explosive, widely used in commercial and military applications.'
    },
  ],
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
  mustVisit: [
    { name: 'Prague Castle', description: 'The largest ancient castle complex in the world, overlooking the stunning city of Prague.' },
    { name: 'Charles Bridge', description: 'Iconic 14th-century bridge adorned with baroque statues, connecting Old Town and Lesser Town.' },
    { name: 'Český Krumlov', description: 'Fairy-tale medieval town with a stunning castle, winding river, and Renaissance architecture.' },
    { name: 'Karlovy Vary', description: 'Famous spa town with hot springs, elegant colonnades, and the International Film Festival.' },
    { name: 'Bone Church (Kutná Hora)', description: 'Sedlec Ossuary decorated with bones of 40,000 people, a unique and eerie UNESCO site.' },
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
    imageUrl: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80',
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
    {
      id: 'czech-republic-q4',
      question: 'Czechs consume the most what per capita in the world?',
      options: ['Wine', 'Beer', 'Coffee', 'Bread'],
      correctAnswer: 1,
    },
    {
      id: 'czech-republic-q5',
      question: 'Who invented soft contact lenses?',
      options: ['Otto Wichterle', 'Karel Čapek', 'Václav Havel', 'Gregor Mendel'],
      correctAnswer: 0,
    },
    {
      id: 'czech-republic-q6',
      question: 'What peaceful revolution occurred in 1989?',
      options: ['Orange Revolution', 'Velvet Revolution', 'Rose Revolution', 'Cedar Revolution'],
      correctAnswer: 1,
    },
    {
      id: 'czech-republic-q7',
      question: 'When did the Czech Republic join the EU?',
      options: ['1999', '2004', '2007', '2013'],
      correctAnswer: 1,
    },
    {
      id: 'czech-republic-q8',
      question: 'What writer coined the word "robot"?',
      options: ['Franz Kafka', 'Karel Čapek', 'Milan Kundera', 'Václav Havel'],
      correctAnswer: 1,
    },
    {
      id: 'czech-republic-q9',
      question: 'What is the famous Czech crystal called?',
      options: ['Venetian crystal', 'Bohemian crystal', 'Irish crystal', 'Swedish crystal'],
      correctAnswer: 1,
    },
    {
      id: 'czech-republic-q10',
      question: 'When was Czechoslovakia peacefully divided?',
      options: ['1989', '1991', '1993', '1995'],
      correctAnswer: 2,
    },
  ],
  dessert: {
    id: 'czech-republic-dessert',
    name: 'Trdelník',
    description: 'Sweet pastry rolled in cinnamon sugar, grilled over open flame',
    cookingTime: 45,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'All-purpose flour', amount: 500, unit: 'g' },
      { name: 'Milk, warm', amount: 250, unit: 'ml' },
      { name: 'Butter', amount: 80, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'large' },
      { name: 'Yeast', amount: 2, unit: 'tsp' },
      { name: 'Sugar', amount: 100, unit: 'g' },
      { name: 'Cinnamon', amount: 3, unit: 'tbsp' },
      { name: 'Walnuts, ground', amount: 100, unit: 'g' },
    ],
    steps: [
      'Dissolve yeast in warm milk with 1 tbsp sugar.',
      'Mix flour, remaining sugar, melted butter, eggs, and yeast mixture.',
      'Knead into smooth dough, let rise 1 hour.',
      'Roll dough into long strips.',
      'Wrap strips around wooden rolling pins.',
      'Mix cinnamon, sugar, and ground walnuts.',
      'Roll dough in cinnamon mixture.',
      'Grill over open flame or bake at 200°C, turning until golden.',
      'Slide off pins while warm.',
      'Serve immediately.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1432139509613-5c4255a1d197?w=700&q=80',
  },
  coordinates: { x: 50, y: 50 },
};
