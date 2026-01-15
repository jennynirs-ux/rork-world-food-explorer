import { Country } from '@/types';

export const belgium: Country = {
  id: 'belgium',
  name: 'Belgium',
  code: 'BE',
  continent: 'Europe',
  flag: '🇧🇪',
  landscapeImage: 'https://images.unsplash.com/photo-1559564484-e48bb8e08122?w=800',
  description: 'Belgium is a small European country famous for chocolate, beer, waffles, and medieval towns. Home to the EU headquarters in Brussels, Belgium uniquely blends French and Flemish cultures.',
  quickFacts: [
    { label: 'Capital', value: 'Brussels' },
    { label: 'Population', value: '11.6 million' },
    { label: 'Official Language', value: 'Dutch, French, German' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '30,689 km²' },
  ],
  facts: [
    'Belgium produces over 220,000 tons of chocolate per year',
    'There are over 1,500 varieties of Belgian beer',
    'Belgium has three official languages: Dutch, French, and German',
    'Brussels is the de facto capital of the European Union',
    'The saxophone was invented by Belgian Adolphe Sax',
    'Belgium has the highest density of comic book authors in the world',
  ],
  foodCulture: 'Belgian cuisine is renowned for its quality ingredients and unique combinations. Famous for chocolate, waffles, fries (which originated here), and beer, Belgium offers hearty stews, seafood from the North Sea, and world-class dining.',
  history: [
    {
      year: '1830',
      title: 'Independence',
      description: 'Belgium gained independence from the Netherlands after the Belgian Revolution.'
    },
    {
      year: '1957',
      title: 'EU Founding',
      description: 'Belgium was a founding member of the European Economic Community, precursor to the EU.'
    },
    {
      year: '1993',
      title: 'Federal State',
      description: 'Belgium became a federal state to accommodate its linguistic and cultural diversity.'
    },
  ],
  innovations: [
    {
      name: 'Saxophone',
      year: '1846',
      description: 'Adolphe Sax invented the saxophone in Brussels.'
    },
    {
      name: 'Praline',
      year: '1912',
      description: 'Belgian chocolatier Jean Neuhaus invented the filled chocolate praline.'
    },
  ],
  mustVisit: [
    { name: 'Grand Place, Brussels', description: 'Stunning medieval square, UNESCO World Heritage site with gilded facades.' },
    { name: 'Bruges', description: 'Fairy-tale medieval city with canals, cobblestone streets, and historic architecture.' },
    { name: 'Ghent', description: 'Vibrant university city with medieval architecture and lively cultural scene.' },
    { name: 'Atomium', description: 'Iconic Brussels landmark representing an iron crystal magnified 165 billion times.' },
    { name: 'Ardennes', description: 'Scenic forested region with castles, caves, and outdoor activities.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'April-September for pleasant weather and festivals.' },
    { item: 'Public transport card', description: 'Efficient trains and buses connect all major cities.' },
    { item: 'Weather gear', description: 'Rain is common, bring umbrella and layers.' },
    { item: 'Walking shoes', description: 'Cobblestone streets require comfortable footwear.' },
  ],
  mainDish: {
    id: 'belgium-main',
    name: 'Moules-frites',
    description: 'Mussels steamed with white wine and herbs, served with crispy fries',
    cookingTime: 30,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'Fresh mussels', amount: 2000, unit: 'g' },
      { name: 'White wine', amount: 300, unit: 'ml' },
      { name: 'Shallots', amount: 3, unit: 'pieces' },
      { name: 'Garlic', amount: 4, unit: 'cloves' },
      { name: 'Butter', amount: 50, unit: 'g' },
      { name: 'Parsley', amount: 50, unit: 'g' },
      { name: 'Celery', amount: 2, unit: 'stalks' },
      { name: 'Potatoes for fries', amount: 1000, unit: 'g' },
    ],
    steps: [
      'Clean and debeard mussels, discard any that don\'t close',
      'Sauté shallots, garlic, and celery in butter',
      'Add white wine and bring to boil',
      'Add mussels, cover and steam for 5-7 minutes until opened',
      'Discard any mussels that didn\'t open',
      'Garnish with fresh parsley',
      'Serve with double-fried Belgian fries and mayonnaise',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1623268543907-5e5a8b2c9b56?w=600',
  },
  dessert: {
    id: 'belgium-dessert',
    name: 'Belgian Waffles',
    description: 'Light, crispy waffles topped with whipped cream, fruit, or chocolate',
    cookingTime: 30,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Flour', amount: 300, unit: 'g' },
      { name: 'Milk', amount: 400, unit: 'ml' },
      { name: 'Eggs', amount: 3, unit: 'large' },
      { name: 'Butter', amount: 100, unit: 'g' },
      { name: 'Sugar', amount: 50, unit: 'g' },
      { name: 'Yeast', amount: 7, unit: 'g' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'Pearl sugar', amount: 100, unit: 'g' },
    ],
    steps: [
      'Warm milk, dissolve yeast and sugar',
      'Mix in flour, eggs, melted butter, and vanilla',
      'Let batter rest for 1 hour until doubled',
      'Fold in pearl sugar',
      'Cook in preheated Belgian waffle iron until golden',
      'Serve with whipped cream, fresh berries, or chocolate sauce',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600',
  },
  drinks: {
    alcoholic: 'Belgian beer (Trappist, Lambic, Abbey), Jenever (gin)',
    nonAlcoholic: 'Belgian hot chocolate, Coffee, Apple juice',
  },
  music: [
    'Jacques Brel - legendary chansonnier',
    'Stromae - modern electronic/hip-hop',
    'Techno/Electronic music scene',
    'Classical music tradition',
  ],
  decorationIdeas: [
    'Belgian flag colors (black, yellow, red)',
    'Lace tablecloths and decorations',
    'Comic book art (Tintin, Smurfs)',
    'Chocolate-themed decor',
    'Medieval guild house inspired elements',
  ],
  conversationStarters: [
    'What\'s your favorite Belgian beer?',
    'Have you tried authentic Belgian waffles?',
    'What do you know about Belgian chocolate?',
    'Have you visited Brussels or Bruges?',
  ],
  quiz: [
    {
      id: 'belgium-q1',
      question: 'What food item did Belgium invent?',
      options: ['Croissant', 'French fries', 'Pizza', 'Hamburger'],
      correctAnswer: 1,
    },
    {
      id: 'belgium-q2',
      question: 'Which instrument was invented in Belgium?',
      options: ['Saxophone', 'Piano', 'Guitar', 'Violin'],
      correctAnswer: 0,
    },
    {
      id: 'belgium-q3',
      question: 'How many official languages does Belgium have?',
      options: ['One', 'Two', 'Three', 'Four'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 48, y: 51 },
};
