import { Country } from '@/types';

export const malta: Country = {
  id: 'malta',
  name: 'Malta',
  code: 'MT',
  continent: 'Europe',
  flag: '🇲🇹',
  landscapeImage: 'https://images.unsplash.com/photo-1565867244968-b499c6f910b8?w=800',
  description: 'Malta is a small Mediterranean island nation with a rich history spanning thousands of years, stunning baroque architecture, crystal-clear waters, and a unique blend of European and North African influences.',
  quickFacts: [
    { label: 'Capital', value: 'Valletta' },
    { label: 'Population', value: '520,000' },
    { label: 'Official Languages', value: 'Maltese, English' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '316 km²' },
  ],
  facts: [
    'Malta is one of the smallest and most densely populated countries in the world',
    'The Maltese language is the only Semitic language written in Latin script',
    'Malta has been inhabited since approximately 5900 BC',
    'The megalithic temples of Malta are among the oldest free-standing structures on Earth',
    'Malta was awarded the George Cross for bravery during World War II',
    'There are more than 300 days of sunshine per year',
    'Malta has three UNESCO World Heritage Sites',
    'The country consists of an archipelago with Malta, Gozo, and Comino as main islands',
  ],
  foodCulture: 'Maltese cuisine is a unique blend of Sicilian and Middle Eastern flavors, featuring fresh seafood, rabbit, and pastizzi. The cuisine reflects centuries of trade and conquest, with influences from Italy, North Africa, and Britain.',
  history: [
    {
      year: '3600 BC',
      title: 'Megalithic Temples',
      description: 'Ancient inhabitants built massive stone temples, predating Stonehenge and the Egyptian pyramids.'
    },
    {
      year: '1530',
      title: 'Knights of Malta',
      description: 'The Knights Hospitaller made Malta their home, building fortifications and Valletta.'
    },
    {
      year: '1565',
      title: 'Great Siege',
      description: 'Malta withstood a massive Ottoman siege, one of the most famous battles in history.'
    },
    {
      year: '1800-1964',
      title: 'British Rule',
      description: 'Malta became a British colony and played a crucial role in WWII.'
    },
    {
      year: '1964',
      title: 'Independence',
      description: 'Malta gained independence from Britain while remaining in the Commonwealth.'
    },
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'April-June and September-November for pleasant weather' },
    { item: 'Visa', description: 'EU member. Schengen visa rules apply.' },
    { item: 'Transportation', description: 'Buses connect the islands. Ferries to Gozo and Comino.' },
    { item: 'Language', description: 'Maltese and English. English widely spoken everywhere.' },
    { item: 'Safety', description: 'Very safe. Watch for strong sun and heat in summer.' },
  ],
  mainDish: {
    id: 'malta-stuffat-tal-fenek',
    name: 'Stuffat tal-Fenek',
    description: 'Traditional Maltese rabbit stew, considered the national dish, slow-cooked in red wine and garlic',
    cookingTime: 120,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Rabbit (cut into pieces)', amount: 1, unit: 'kg' },
      { name: 'Red wine', amount: 300, unit: 'ml' },
      { name: 'Tomato paste', amount: 3, unit: 'tbsp' },
      { name: 'Garlic cloves', amount: 6, unit: 'pieces' },
      { name: 'Onions', amount: 2, unit: 'large' },
      { name: 'Bay leaves', amount: 3, unit: 'pieces' },
      { name: 'Peas', amount: 200, unit: 'g' },
      { name: 'Olive oil', amount: 4, unit: 'tbsp' },
      { name: 'Salt and pepper', amount: 1, unit: 'to taste' },
    ],
    steps: [
      'Marinate rabbit pieces in red wine with garlic for 2 hours',
      'Heat olive oil in a large pot, brown rabbit pieces',
      'Add chopped onions and sauté until soft',
      'Add tomato paste and stir well',
      'Pour in the wine marinade and add bay leaves',
      'Add water to cover, bring to boil then simmer',
      'Cook covered for 1.5 hours until rabbit is tender',
      'Add peas in the last 15 minutes',
      'Season with salt and pepper',
      'Serve with crusty bread or pasta',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600',
  },
  drinks: {
    alcoholic: 'Cisk beer, Maltese wines, Kinnie (local soft drink with bitter oranges)',
    nonAlcoholic: 'Kinnie, Fresh orange juice, Coffee',
  },
  music: ['Ghana (Maltese folk music)', 'Traditional festa band music', 'Mediterranean folk'],
  decorationIdeas: [
    'Red and white (Maltese flag colors)',
    'Maltese cross designs',
    'Blue shutters and doors (traditional architecture)',
    'Mediterranean blue and white',
    'Lace doilies (traditional Maltese lace)',
    'Limestone and honey-colored accents',
  ],
  conversationStarters: [
    'Have you visited Malta\'s ancient megalithic temples?',
    'Valletta is one of Europe\'s smallest capitals - so charming!',
    'Would you try rabbit stew? It\'s Malta\'s national dish!',
    'The Blue Lagoon in Comino is stunning - have you seen it?',
  ],
  quiz: [
    {
      id: 'malta-q1',
      question: 'What is Malta\'s capital city?',
      options: ['Mdina', 'Valletta', 'Gozo', 'Sliema'],
      correctAnswer: 1,
    },
    {
      id: 'malta-q2',
      question: 'What is the national dish of Malta?',
      options: ['Pasta', 'Pizza', 'Rabbit stew', 'Fish'],
      correctAnswer: 2,
    },
    {
      id: 'malta-q3',
      question: 'Which honor was Malta awarded during WWII?',
      options: ['Victoria Cross', 'George Cross', 'Iron Cross', 'Purple Heart'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 50, y: 36 },
};
