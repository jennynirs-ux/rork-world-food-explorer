import { Country } from '@/types';

export const austria: Country = {
  id: 'austria',
  name: 'Austria',
  code: 'AT',
  continent: 'Europe',
  flag: '🇦🇹',
  landscapeImage: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=80',
  description: 'Austria is a landlocked country in Central Europe known for its mountain villages, baroque architecture, Imperial history, and rugged Alpine terrain. Vienna, its capital, is home to grand palaces and a rich musical heritage.',
  quickFacts: [
    { label: 'Capital', value: 'Vienna' },
    { label: 'Population', value: '9 million' },
    { label: 'Official Language', value: 'German' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '83,879 km²' },
  ],
  facts: [
    'Austria is known as the "Land of Music" - home to Mozart, Beethoven, and Strauss',
    'Vienna has been ranked the world\'s most liveable city multiple times',
    'The Alps cover 62% of Austria\'s total area',
    'Austria has more than 400 registered types of cheese',
    'The Vienna Opera Ball is one of the most prestigious events in the world',
    'Austria is one of the richest countries in the world by GDP per capita',
    'The country has nine UNESCO World Heritage Sites',
    'Austrian coffeehouse culture is recognized by UNESCO as intangible cultural heritage',
  ],
  foodCulture: 'Austrian cuisine is influenced by the cuisines of the Austro-Hungarian Empire, combining flavors from across Central and Eastern Europe. It\'s known for its hearty meat dishes, delicate pastries, and sophisticated coffeehouse culture. Vienna is famous for its elegant café traditions where people gather for coffee and cakes.',
  innovations: [
    {
      name: 'Psychoanalysis',
      year: '1896',
      description: 'Sigmund Freud founded psychoanalysis in Vienna, revolutionizing psychology and psychiatry.'
    },
    {
      name: 'Doppler Effect',
      year: '1842',
      description: 'Christian Doppler discovered the Doppler effect, fundamental to physics and astronomy.'
    },
    {
      name: 'Blood Groups',
      year: '1900',
      description: 'Karl Landsteiner discovered the ABO blood group system, enabling safe blood transfusions.'
    },
    {
      name: 'Sewing Machine',
      year: '1830s',
      description: 'Josef Madersperger contributed to early sewing machine development in Austria.'
    },
  ],
  mustVisit: [
    { name: 'Schönbrunn Palace', description: 'Former imperial summer residence with baroque gardens and glorious halls.' },
    { name: 'Hallstatt', description: 'Picturesque lakeside village in the Alps, one of Austria\'s most photographed locations.' },
    { name: 'Salzburg Old Town', description: 'UNESCO World Heritage Site, Mozart\'s birthplace with fortress and baroque architecture.' },
    { name: 'Grossglockner High Alpine Road', description: 'Spectacular mountain road with breathtaking views of Austria\'s highest peak.' },
    { name: 'Hofburg Palace', description: 'Former imperial palace in Vienna, now home to museums and the Spanish Riding School.' },
  ],
  history: [
    {
      year: '996 AD',
      title: 'First Mention',
      description: 'Austria was first mentioned in historical records as "Ostarrîchi", marking the beginning of Austrian identity.'
    },
    {
      year: '1278',
      title: 'Habsburg Rule Begins',
      description: 'The Habsburg dynasty began its rule over Austria, which would last for over 640 years until 1918.'
    },
    {
      year: '1867',
      title: 'Austro-Hungarian Empire',
      description: 'The Austrian Empire transformed into the dual monarchy of Austria-Hungary, becoming one of Europe\'s great powers.'
    },
    {
      year: '1918',
      title: 'Republic Established',
      description: 'After World War I, the Habsburg monarchy ended and Austria became a republic.'
    },
    {
      year: '1955',
      title: 'Independence and Neutrality',
      description: 'Austria regained full independence and declared permanent neutrality after World War II occupation ended.'
    },
    {
      year: '1995',
      title: 'EU Membership',
      description: 'Austria joined the European Union, strengthening its ties with Western Europe.'
    },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Schengen visa rules apply. Many nationalities can visit visa-free for up to 90 days.' },
    { item: 'Best time to visit', description: 'May to September for hiking and sightseeing; December to March for skiing' },
    { item: 'Transportation', description: 'Excellent public transport including trains, trams, and buses. Vienna has an efficient metro system.' },
    { item: 'Language', description: 'German is the official language. English is widely spoken in tourist areas.' },
    { item: 'Safety', description: 'Very safe country with low crime rates. Standard precautions in tourist areas.' },
  ],
  mainDish: {
    id: 'austria-wiener-schnitzel',
    name: 'Wiener Schnitzel',
    description: 'Austria\'s national dish - a thin, breaded, and pan-fried veal cutlet. Traditionally served with potato salad, cucumber salad, or parsley potatoes and a slice of lemon.',
    cookingTime: 30,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Veal cutlets', amount: 4, unit: 'pieces' },
      { name: 'All-purpose flour', amount: 100, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'pieces' },
      { name: 'Breadcrumbs', amount: 150, unit: 'g' },
      { name: 'Butter or lard', amount: 100, unit: 'g' },
      { name: 'Salt', amount: 1, unit: 'tsp' },
      { name: 'Pepper', amount: 0.5, unit: 'tsp' },
      { name: 'Lemon wedges', amount: 4, unit: 'pieces' },
    ],
    steps: [
      'Pound the veal cutlets until very thin (about 3-4mm thick)',
      'Season both sides with salt and pepper',
      'Set up three shallow dishes: one with flour, one with beaten eggs, one with breadcrumbs',
      'Coat each cutlet in flour, then egg, then breadcrumbs, pressing gently to adhere',
      'Heat butter/lard in a large pan over medium-high heat until foaming',
      'Fry schnitzels for 2-3 minutes per side until golden brown',
      'Drain on paper towels and serve immediately with lemon wedges',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=800&q=80',
  },
  dessert: {
    id: 'austria-dessert',
    name: 'Sachertorte',
    description: 'Famous Viennese chocolate cake with apricot jam filling, glazed with dark chocolate',
    cookingTime: 90,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Dark chocolate', amount: 200, unit: 'g' },
      { name: 'Butter', amount: 150, unit: 'g' },
      { name: 'Sugar', amount: 150, unit: 'g' },
      { name: 'Eggs', amount: 6, unit: 'large' },
      { name: 'All-purpose flour', amount: 140, unit: 'g' },
      { name: 'Apricot jam', amount: 200, unit: 'g' },
      { name: 'Dark chocolate for glaze', amount: 200, unit: 'g' },
      { name: 'Heavy cream', amount: 100, unit: 'ml' },
    ],
    steps: [
      'Melt 200g chocolate with butter, let cool slightly.',
      'Separate eggs. Beat yolks with half the sugar until pale.',
      'Mix melted chocolate into yolk mixture.',
      'Beat egg whites with remaining sugar to stiff peaks.',
      'Fold flour into chocolate mixture, then fold in egg whites.',
      'Pour into greased pan, bake at 170°C for 50-60 minutes.',
      'Cool completely, slice horizontally into two layers.',
      'Heat apricot jam until liquid, spread between layers and over top.',
      'Make glaze: heat cream, pour over 200g chocolate, stir until smooth.',
      'Pour glaze over cake, smooth with spatula. Let set before serving.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1602351447937-745cb720612f?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Austrian wines (Grüner Veltliner, Riesling), Beer, Schnapps',
    nonAlcoholic: 'Almdudler (herbal lemonade), Viennese coffee, Apple juice',
  },
  music: ['Classical music (Mozart, Strauss waltzes)', 'Traditional Alpine folk music', 'Vienna Boys\' Choir'],
  decorationIdeas: [
    'Elegant white and gold color scheme',
    'Crystal chandeliers and ornate mirrors',
    'Fresh edelweiss flowers',
    'Classical music decor elements',
    'Baroque-style candelabras',
    'Red and white (Austrian flag colors)',
  ],
  conversationStarters: [
    'Have you ever been to a Viennese Ball? What would you wear?',
    'Which classical composer is your favorite: Mozart, Beethoven, or Strauss?',
    'Would you prefer skiing in the Alps or exploring Vienna\'s palaces?',
    'What\'s your favorite Austrian pastry: Sachertorte or Apple Strudel?',
  ],
  quiz: [
    {
      id: 'austria-q1',
      question: 'What is Austria\'s capital city?',
      options: ['Salzburg', 'Vienna', 'Innsbruck', 'Graz'],
      correctAnswer: 1,
    },
    {
      id: 'austria-q2',
      question: 'Which famous composer was born in Salzburg, Austria?',
      options: ['Beethoven', 'Bach', 'Mozart', 'Chopin'],
      correctAnswer: 2,
    },
    {
      id: 'austria-q3',
      question: 'What is the traditional Austrian breaded cutlet called?',
      options: ['Bratwurst', 'Wiener Schnitzel', 'Goulash', 'Kaiserschmarrn'],
      correctAnswer: 1,
    },
    {
      id: 'austria-q4',
      question: 'Which famous composer was born in Austria and wrote "The Magic Flute"?',
      options: ['Beethoven', 'Mozart', 'Bach', 'Handel'],
      correctAnswer: 1,
    },
    {
      id: 'austria-q5',
      question: 'What percentage of Austria is covered by the Alps?',
      options: ['25%', '40%', '62%', '80%'],
      correctAnswer: 2,
    },
    {
      id: 'austria-q6',
      question: 'What is the famous Viennese chocolate cake called?',
      options: ['Black Forest Cake', 'Sachertorte', 'Tiramisu', 'Strudel'],
      correctAnswer: 1,
    },
    {
      id: 'austria-q7',
      question: 'Which dynasty ruled Austria for over 640 years?',
      options: ['Bourbon', 'Habsburg', 'Romanov', 'Tudor'],
      correctAnswer: 1,
    },
    {
      id: 'austria-q8',
      question: 'When did Austria join the European Union?',
      options: ['1985', '1990', '1995', '2000'],
      correctAnswer: 2,
    },
    {
      id: 'austria-q9',
      question: 'Which scientist from Austria discovered blood groups?',
      options: ['Sigmund Freud', 'Karl Landsteiner', 'Erwin Schrödinger', 'Christian Doppler'],
      correctAnswer: 1,
    },
    {
      id: 'austria-q10',
      question: 'What is the UNESCO-recognized Austrian cultural tradition?',
      options: ['Beer brewing', 'Coffeehouse culture', 'Wine making', 'Cheese production'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 50, y: 48 },
};
