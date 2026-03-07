import { Country } from '@/types';

export const denmark: Country = {
  id: 'denmark',
  name: 'Denmark',
  code: 'DK',
  continent: 'Europe',
  flag: '🇩🇰',
  landscapeImage: 'https://images.unsplash.com/photo-1513622790541-eaa84d356909?w=800&q=80',
  description: 'Denmark, the happiest country in the world, is known for hygge culture, fairy tales, design, and cycling. With charming medieval towns, modern architecture, and a high quality of life, Denmark offers a perfect blend of old and new.',
  quickFacts: [
    { label: 'Capital', value: 'Copenhagen' },
    { label: 'Population', value: '5.9 million' },
    { label: 'Official Language', value: 'Danish' },
    { label: 'Currency', value: 'Danish Krone (DKK)' },
    { label: 'Area', value: '42,952 km²' },
  ],
  facts: [
    'Denmark consistently ranks as the world\'s happiest country',
    'The Danish concept of "hygge" has gained worldwide popularity',
    'Denmark is the birthplace of LEGO',
    'Hans Christian Andersen, author of The Little Mermaid, was Danish',
    'Denmark has more bicycles than cars',
    'The world\'s oldest monarchy is in Denmark',
  ],
  foodCulture: 'Danish cuisine emphasizes fresh, seasonal ingredients with New Nordic influences. Open-faced sandwiches (smørrebrød), pastries, and seafood are staples. Denmark has numerous Michelin-starred restaurants.',
  history: [
    {
      year: '8th-11th Century',
      title: 'Viking Age',
      description: 'Danish Vikings were powerful seafarers who influenced much of Northern Europe.'
    },
    {
      year: '1849',
      title: 'Constitutional Monarchy',
      description: 'Denmark became a constitutional monarchy with a new democratic constitution.'
    },
    {
      year: '1973',
      title: 'EU Membership',
      description: 'Denmark joined the European Economic Community, now the European Union.'
    },
  ],
  innovations: [
    {
      name: 'LEGO',
      year: '1932',
      description: 'Ole Kirk Christiansen founded LEGO, now the world\'s largest toy company and cultural icon.'
    },
    {
      name: 'Loudspeaker',
      year: '1915',
      description: 'Peter L. Jensen co-invented the modern loudspeaker, revolutionizing audio technology.'
    },
    {
      name: 'Insulin Pen',
      year: '1985',
      description: 'Novo Nordisk developed the first insulin pen, making diabetes management easier for millions.'
    },
    {
      name: 'Wind Turbine Technology',
      year: '1970s-present',
      description: 'Denmark pioneered modern wind turbine design and became a world leader in wind energy technology.'
    },
  ],
  mustVisit: [
    { name: 'Tivoli Gardens', description: 'Historic amusement park in Copenhagen, one of the world\'s oldest.' },
    { name: 'Nyhavn', description: 'Colorful 17th-century waterfront with restaurants and boats.' },
    { name: 'The Little Mermaid', description: 'Iconic bronze statue inspired by Hans Christian Andersen\'s fairy tale.' },
    { name: 'Kronborg Castle', description: 'UNESCO site, setting of Shakespeare\'s Hamlet.' },
    { name: 'Aarhus', description: 'Vibrant cultural city with ARoS art museum and old town.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'May-September for warmest weather and long days.' },
    { item: 'Bicycle', description: 'Rent a bike to explore like a local.' },
    { item: 'Copenhagen Card', description: 'Free public transport and museum entry.' },
    { item: 'Weather layers', description: 'Weather can change quickly, dress in layers.' },
  ],
  mainDish: {
    id: 'denmark-main',
    name: 'Smørrebrød',
    description: 'Traditional open-faced sandwiches with various toppings',
    cookingTime: 30,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'Rye bread', amount: 8, unit: 'slices' },
      { name: 'Butter', amount: 100, unit: 'g' },
      { name: 'Smoked salmon', amount: 200, unit: 'g' },
      { name: 'Pickled herring', amount: 200, unit: 'g' },
      { name: 'Roast beef', amount: 200, unit: 'g' },
      { name: 'Hard-boiled eggs', amount: 4, unit: 'pieces' },
      { name: 'Dill', amount: 50, unit: 'g' },
      { name: 'Capers', amount: 2, unit: 'tbsp' },
      { name: 'Red onion', amount: 1, unit: 'piece' },
    ],
    steps: [
      'Butter each slice of rye bread generously',
      'For salmon: top with smoked salmon, dill, lemon',
      'For herring: add pickled herring, onion rings, capers',
      'For beef: layer roast beef, remoulade, crispy onions',
      'For egg: top with sliced eggs, shrimp, mayo',
      'Arrange beautifully on plates',
      'Serve with cold beer or schnapps',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=80',
  },
  dessert: {
    id: 'denmark-dessert',
    name: 'Æbleskiver',
    description: 'Round Danish pancakes, traditionally served at Christmas',
    cookingTime: 40,
    servings: 20,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Flour', amount: 250, unit: 'g' },
      { name: 'Buttermilk', amount: 500, unit: 'ml' },
      { name: 'Eggs', amount: 3, unit: 'large' },
      { name: 'Sugar', amount: 3, unit: 'tbsp' },
      { name: 'Baking powder', amount: 1, unit: 'tsp' },
      { name: 'Cardamom', amount: 1, unit: 'tsp' },
      { name: 'Butter for pan', amount: 100, unit: 'g' },
      { name: 'Powdered sugar', amount: 50, unit: 'g' },
    ],
    steps: [
      'Separate eggs, beat whites to stiff peaks',
      'Mix flour, baking powder, cardamom, sugar',
      'Whisk in buttermilk and egg yolks',
      'Fold in beaten egg whites',
      'Heat æbleskiver pan, add butter to each hole',
      'Pour batter into holes, turn with skewer when half-cooked',
      'Cook until golden all around',
      'Serve with powdered sugar and jam',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Carlsberg beer, Tuborg, Aquavit, Gløgg (Christmas)',
    nonAlcoholic: 'Coffee, Hot chocolate, Apple juice, Hyldeblomstsaft (elderflower cordial)',
  },
  music: [
    'Aqua - Barbie Girl',
    'Lukas Graham - 7 Years',
    'Traditional folk music',
    'Modern Danish pop',
  ],
  decorationIdeas: [
    'Danish flag (Dannebrog) colors - red and white',
    'Hygge-inspired cozy elements',
    'Scandinavian minimalist design',
    'Candles and warm lighting',
    'LEGO decorations',
  ],
  conversationStarters: [
    'What does "hygge" mean to you?',
    'Have you been to Copenhagen?',
    'Do you remember playing with LEGO?',
    'What\'s your favorite Hans Christian Andersen tale?',
  ],
  quiz: [
    {
      id: 'denmark-q1',
      question: 'What toy company was founded in Denmark?',
      options: ['Mattel', 'Hasbro', 'LEGO', 'Fisher-Price'],
      correctAnswer: 2,
    },
    {
      id: 'denmark-q2',
      question: 'What Danish concept means cozy contentment?',
      options: ['Lagom', 'Hygge', 'Fika', 'Sisu'],
      correctAnswer: 1,
    },
    {
      id: 'denmark-q3',
      question: 'Who wrote The Little Mermaid?',
      options: ['Brothers Grimm', 'Hans Christian Andersen', 'Charles Perrault', 'J.K. Rowling'],
      correctAnswer: 1,
    },
    {
      id: 'denmark-q4',
      question: 'What is Denmark\'s capital city?',
      options: ['Stockholm', 'Oslo', 'Copenhagen', 'Helsinki'],
      correctAnswer: 2,
    },
    {
      id: 'denmark-q5',
      question: 'What are Danish open-faced sandwiches called?',
      options: ['Bruschetta', 'Smørrebrød', 'Tartine', 'Crostini'],
      correctAnswer: 1,
    },
    {
      id: 'denmark-q6',
      question: 'When did Denmark join the EU?',
      options: ['1967', '1973', '1981', '1995'],
      correctAnswer: 1,
    },
    {
      id: 'denmark-q7',
      question: 'What is the name of Copenhagen\'s famous amusement park?',
      options: ['Disneyland', 'Tivoli Gardens', 'Liseberg', 'Bakken'],
      correctAnswer: 1,
    },
    {
      id: 'denmark-q8',
      question: 'Denmark is consistently ranked as what?',
      options: ['Richest country', 'Happiest country', 'Largest country', 'Coldest country'],
      correctAnswer: 1,
    },
    {
      id: 'denmark-q9',
      question: 'What Danish company makes insulin pens?',
      options: ['Pfizer', 'Novo Nordisk', 'Roche', 'Bayer'],
      correctAnswer: 1,
    },
    {
      id: 'denmark-q10',
      question: 'Which castle is the setting for Shakespeare\'s Hamlet?',
      options: ['Frederiksborg', 'Rosenborg', 'Kronborg', 'Amalienborg'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 49, y: 56 },
};
