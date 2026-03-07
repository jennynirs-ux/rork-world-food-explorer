import { Country } from '@/types';

export const belgium: Country = {
  id: 'belgium',
  name: 'Belgium',
  code: 'BE',
  continent: 'Europe',
  flag: '🇧🇪',
  landscapeImage: 'https://images.unsplash.com/photo-1559113202-c916b8e44373?w=800&q=80',
  description:
    'Belgium is a small European country famous for chocolate, beer, waffles, and medieval towns. Home to the EU headquarters in Brussels, Belgium uniquely blends French and Flemish cultures.',
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
  foodCulture:
    'Belgian cuisine is renowned for its quality ingredients and unique combinations. Famous for chocolate, waffles, fries (which originated here), and beer, Belgium offers hearty stews, seafood from the North Sea, and world-class dining.',
  history: [
    {
      year: '1830',
      title: 'Independence',
      description:
        'Belgium gained independence from the Netherlands after the Belgian Revolution.',
    },
    {
      year: '1957',
      title: 'EU Founding',
      description:
        'Belgium was a founding member of the European Economic Community, precursor to the EU.',
    },
    {
      year: '1993',
      title: 'Federal State',
      description:
        'Belgium became a federal state to accommodate its linguistic and cultural diversity.',
    },
  ],
  innovations: [
    {
      name: 'Saxophone',
      year: '1846',
      description: 'Adolphe Sax invented the saxophone in Brussels.',
    },
    {
      name: 'Praline',
      year: '1912',
      description:
        'Belgian chocolatier Jean Neuhaus invented the filled chocolate praline.',
    },
  ],
  mustVisit: [
    {
      name: 'Grand Place, Brussels',
      description:
        'Stunning medieval square, UNESCO World Heritage site with gilded facades.',
    },
    {
      name: 'Bruges',
      description:
        'Fairy-tale medieval city with canals, cobblestone streets, and historic architecture.',
    },
    {
      name: 'Ghent',
      description:
        'Vibrant university city with medieval architecture and lively cultural scene.',
    },
    {
      name: 'Atomium',
      description:
        'Iconic Brussels landmark representing an iron crystal magnified 165 billion times.',
    },
    {
      name: 'Ardennes',
      description:
        'Scenic forested region with castles, caves, and outdoor activities.',
    },
  ],
  travelEssentials: [
    {
      item: 'Best time to visit',
      description: 'April-September for pleasant weather and festivals.',
    },
    {
      item: 'Public transport card',
      description: 'Efficient trains and buses connect all major cities.',
    },
    { item: 'Weather gear', description: 'Rain is common, bring umbrella and layers.' },
    {
      item: 'Walking shoes',
      description: 'Cobblestone streets require comfortable footwear.',
    },
  ],

  // Upgraded: more specific measurements + clearer technique (incl. fries timing)
  mainDish: {
    id: 'belgium-main',
    name: 'Moules-frites',
    description:
      'Mussels steamed with white wine and herbs, served with classic double-fried Belgian fries and mayonnaise.',
    cookingTime: 60,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'Fresh mussels', amount: 2000, unit: 'g' },
      { name: 'Shallots, finely sliced', amount: 120, unit: 'g' },
      { name: 'Celery (stalks), finely sliced', amount: 80, unit: 'g' },
      { name: 'Garlic cloves, minced', amount: 4, unit: 'cloves' },
      { name: 'Unsalted butter', amount: 50, unit: 'g' },
      { name: 'Dry white wine', amount: 300, unit: 'ml' },
      { name: 'Fresh parsley, chopped', amount: 20, unit: 'g' },
      { name: 'Bay leaf (optional)', amount: 1, unit: 'piece' },
      { name: 'Black pepper', amount: 0.5, unit: 'tsp' },
      { name: 'Potatoes (for fries, floury variety)', amount: 1200, unit: 'g' },
      { name: 'Neutral frying oil (sunflower/canola)', amount: 1500, unit: 'ml' },
      { name: 'Salt (for fries)', amount: 1, unit: 'tsp' },
      { name: 'Mayonnaise (to serve)', amount: 150, unit: 'g' },
    ],
    steps: [
      'FRIES (prep): Peel potatoes and cut into sticks ~10mm thick. Rinse in cold water until water runs clearer.',
      'Soak fries in cold water for 20 minutes, then drain and pat completely dry with towels (very important for crispness).',
      'Heat oil to 150°C in a deep pot. Fry potatoes in batches for 6–8 minutes (they should be pale and soft, not browned).',
      'Remove fries to a tray and cool 10–15 minutes. Raise oil temperature to 180°C for the second fry.',
      'MUSSELS (clean): Rinse mussels under cold running water. Scrub shells if needed. Pull off beards. Discard any cracked mussels or any that stay open when tapped.',
      'MUSSELS (base): In a large pot with a tight lid, melt butter over medium heat. Add shallots and celery; cook 4–5 minutes until softened (no browning).',
      'Add garlic and black pepper (and bay leaf if using). Stir 30 seconds until fragrant.',
      'Pour in white wine and bring to a strong simmer (about 1 minute).',
      'Add mussels, cover with lid, and steam 5–7 minutes, shaking the pot once or twice, until most shells open.',
      'Turn off heat. Discard any mussels that did not open. Stir in parsley.',
      'FRIES (second fry): Fry the cooled fries at 180°C for 2–3 minutes until deep golden and crisp. Drain, then salt immediately.',
      'Serve mussels hot in deep bowls with the cooking broth. Add fries on the side and mayonnaise for dipping.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=800&q=80',
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
    "What's your favorite Belgian beer?",
    'Have you tried authentic Belgian waffles?',
    'What do you know about Belgian chocolate?',
    'Have you visited Brussels or Bruges?',
  ],

  // Fixed: expanded to EXACTLY 10 questions
  quiz: [
    {
      id: 'belgium-q1',
      question: 'What food item is often claimed to have originated in Belgium?',
      options: ['Croissant', 'French fries', 'Pizza', 'Hamburger'],
      correctAnswer: 1,
    },
    {
      id: 'belgium-q2',
      question: 'Which musical instrument was invented by Belgian Adolphe Sax?',
      options: ['Saxophone', 'Piano', 'Guitar', 'Violin'],
      correctAnswer: 0,
    },
    {
      id: 'belgium-q3',
      question: 'How many official languages does Belgium have?',
      options: ['One', 'Two', 'Three', 'Four'],
      correctAnswer: 2,
    },
    {
      id: 'belgium-q4',
      question: 'What is the capital of Belgium?',
      options: ['Antwerp', 'Brussels', 'Bruges', 'Ghent'],
      correctAnswer: 1,
    },
    {
      id: 'belgium-q5',
      question: 'Which famous Brussels landmark is shaped like an iron crystal unit cell?',
      options: ['Manneken Pis', 'Atomium', 'Belfry of Bruges', 'Cinquantenaire Arch'],
      correctAnswer: 1,
    },
    {
      id: 'belgium-q6',
      question: 'Which Belgian city is famous for canals and is often called a “fairy-tale” medieval town?',
      options: ['Liège', 'Namur', 'Bruges', 'Charleroi'],
      correctAnswer: 2,
    },
    {
      id: 'belgium-q7',
      question: 'What is Moules-frites?',
      options: [
        'Waffles with chocolate sauce',
        'Mussels served with fries',
        'A beef stew with beer',
        'A cheese tart',
      ],
      correctAnswer: 1,
    },
    {
      id: 'belgium-q8',
      question: 'Which international institution has major headquarters in Brussels?',
      options: ['ASEAN', 'European Union', 'OPEC', 'MERCOSUR'],
      correctAnswer: 1,
    },
    {
      id: 'belgium-q9',
      question: 'What is a classic spirit associated with Belgium and the Netherlands, sometimes called Dutch gin?',
      options: ['Tequila', 'Jenever', 'Sake', 'Cachaça'],
      correctAnswer: 1,
    },
    {
      id: 'belgium-q10',
      question: 'In what year did Belgium become independent from the Netherlands?',
      options: ['1815', '1830', '1914', '1957'],
      correctAnswer: 1,
    },
  ],

  coordinates: { x: 48, y: 51 },
};
