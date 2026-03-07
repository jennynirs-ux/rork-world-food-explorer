import { Country } from '@/types';

export const greece: Country = {
  id: 'greece',
  name: 'Greece',
  code: 'GR',
  continent: 'Europe',
  flag: '🇬🇷',
  landscapeImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80',
  description: 'Greece is the cradle of Western civilization, birthplace of democracy, philosophy, and the Olympic Games. With stunning islands, ancient ruins, and Mediterranean cuisine, it offers timeless beauty.',
  quickFacts: [
    { label: 'Capital', value: 'Athens' },
    { label: 'Population', value: '10.7 million' },
    { label: 'Official Language', value: 'Greek' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '131,957 km²' },
  ],
  facts: [
    'Greece has over 6,000 islands, but only 227 are inhabited',
    'No point in Greece is more than 137 km from water',
    'Greece is the 3rd largest producer of olives in the world',
    'Greek is one of the oldest written languages, still used today',
    'Athens is one of the world\'s oldest cities, inhabited for over 7,000 years',
    'Greece has more archaeological museums than any other country',
    'The Greek national anthem has 158 verses, making it the longest in the world',
    'Throwing rice at weddings originated in ancient Greece',
  ],
  foodCulture: 'Greek cuisine is based on the Mediterranean diet, emphasizing fresh vegetables, olive oil, fish, and grains. Meals are social events meant for sharing. Greeks take pride in using local, seasonal ingredients and simple preparation methods that highlight natural flavors.',
  history: [
    {
      year: '800-500 BC',
      title: 'Classical Greece',
      description: 'The golden age of Greek culture, producing philosophy, democracy, theater, and architectural marvels.'
    },
    {
      year: '336-323 BC',
      title: 'Alexander the Great',
      description: 'Macedonian conquest spread Greek culture across the known world, creating the Hellenistic period.'
    },
    {
      year: '146 BC-1453 AD',
      title: 'Roman and Byzantine Era',
      description: 'Greece became part of the Roman Empire, then the Byzantine Empire, preserving Greek Orthodox traditions.'
    },
    {
      year: '1821-Present',
      title: 'Modern Greece',
      description: 'After 400 years of Ottoman rule, Greece gained independence and eventually became a democratic republic.'
    },
  ],
  innovations: [
    {
      name: 'Democracy',
      year: '508 BC',
      description: 'Ancient Athens developed the first democratic system of government, influencing modern political systems.'
    },
    {
      name: 'Olympics',
      year: '776 BC',
      description: 'The ancient Olympic Games began in Olympia, creating a tradition that continues today.'
    },
    {
      name: 'Theater',
      year: '6th Century BC',
      description: 'Greeks invented theatrical drama with tragedies and comedies, establishing the foundation of modern theater.'
    },
    {
      name: 'Geometry',
      year: '300 BC',
      description: 'Euclid\'s Elements laid the foundation for geometry and mathematical thinking.'
    },
  ],
  mustVisit: [
    { name: 'Acropolis of Athens', description: 'Ancient citadel with the iconic Parthenon temple, symbol of classical Greece.' },
    { name: 'Santorini', description: 'Stunning volcanic island with white-washed buildings, blue domes, and spectacular sunsets.' },
    { name: 'Delphi', description: 'Ancient sanctuary and oracle site, once considered the center of the world.' },
    { name: 'Meteora', description: 'Monasteries dramatically perched on top of towering rock pillars.' },
    { name: 'Mykonos', description: 'Charming island with pristine beaches, windmills, and vibrant nightlife.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'May-June and September-October for warm weather without extreme heat or crowds.' },
    { item: 'Modest clothing for monasteries', description: 'Shoulders and knees must be covered at religious sites.' },
    { item: 'Sunscreen and hat', description: 'Greek sun is very strong, especially on islands.' },
    { item: 'Comfortable sandals', description: 'Ancient sites involve uneven terrain and marble steps.' },
    { item: 'Cash', description: 'Smaller islands and tavernas may not accept cards.' },
    { item: 'Greek phrase book', description: 'Basic Greek like "Kalimera" (good morning) is appreciated.' }
  ],
  mainDish: {
    id: 'greece-main',
    name: 'Moussaka',
    description: 'Layered casserole with eggplant, spiced meat sauce, and creamy béchamel topping',
    cookingTime: 90,
    servings: 8,
    dietType: 'meat',
    ingredients: [
      { name: 'Eggplants', amount: 3, unit: 'large' },
      { name: 'Ground lamb or beef', amount: 500, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'large' },
      { name: 'Tomatoes', amount: 400, unit: 'g' },
      { name: 'Red wine', amount: 125, unit: 'ml' },
      { name: 'Cinnamon', amount: 1, unit: 'tsp' },
      { name: 'Butter', amount: 75, unit: 'g' },
      { name: 'Flour', amount: 75, unit: 'g' },
      { name: 'Milk', amount: 750, unit: 'ml' },
      { name: 'Parmesan cheese', amount: 100, unit: 'g' },
    ],
    steps: [
      'Slice eggplants, salt them, and let sit 30 minutes to remove bitterness',
      'Rinse and pat dry, brush with oil and bake at 400°F until tender',
      'Sauté onions, add meat and brown, then add tomatoes, wine, and cinnamon',
      'Simmer meat sauce for 20 minutes until thick',
      'For béchamel: melt butter, add flour, cook 2 minutes',
      'Gradually whisk in milk, cook until thick and creamy',
      'Layer half the eggplant in a baking dish',
      'Add all the meat sauce, then remaining eggplant',
      'Pour béchamel over top and sprinkle with cheese',
      'Bake at 350°F for 45 minutes until golden brown',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=850&q=80',
  },
  dessert: {
    id: 'greece-dessert',
    name: 'Baklava',
    description: 'Sweet pastry made of layers of phyllo filled with chopped nuts and honey',
    cookingTime: 60,
    servings: 24,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Phyllo dough', amount: 450, unit: 'g' },
      { name: 'Walnuts, chopped', amount: 400, unit: 'g' },
      { name: 'Butter, melted', amount: 200, unit: 'g' },
      { name: 'Cinnamon', amount: 1, unit: 'tsp' },
      { name: 'Sugar', amount: 300, unit: 'g' },
      { name: 'Water', amount: 250, unit: 'ml' },
      { name: 'Honey', amount: 150, unit: 'g' },
      { name: 'Lemon juice', amount: 1, unit: 'tbsp' },
    ],
    steps: [
      'Mix walnuts with cinnamon and set aside',
      'Brush baking pan with butter',
      'Layer 8 sheets of phyllo, brushing each with butter',
      'Spread a thin layer of nut mixture',
      'Add 4 more phyllo sheets (buttered), then nuts',
      'Repeat layering, finishing with 8 phyllo sheets on top',
      'Cut into diamond shapes before baking',
      'Bake at 350°F for 45-50 minutes until golden',
      'Meanwhile, boil sugar, water, honey, and lemon for 10 minutes',
      'Pour hot syrup over baked baklava and let absorb for several hours',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=650&q=80',
  },
  drinks: {
    alcoholic: 'Ouzo, Retsina wine, Metaxa brandy, Greek beer',
    nonAlcoholic: 'Greek coffee, Frappé, Mountain tea, Fresh lemonade',
  },
  music: [
    'Zorba\'s Dance (Sirtaki)',
    'Ta Paidia Tou Pirea - Melina Mercouri',
    'Traditional Bouzouki music',
    'Mikis Theodorakis compositions',
    'Rebetiko folk songs',
  ],
  decorationIdeas: [
    'Blue and white Greek flag colors',
    'Greek key pattern borders',
    'Olive branches and leaves',
    'Clay pottery and amphoras',
    'Evil eye (mati) decorations',
  ],
  conversationStarters: [
    'Have you visited any Greek islands? Which is your favorite?',
    'What aspect of ancient Greek history interests you most?',
    'Have you tried authentic Greek food?',
    'Which Greek philosopher resonates with you?',
    'Would you prefer exploring Athens or island hopping?',
  ],
  quiz: [
    {
      id: 'greece-q1',
      question: 'What is the capital of Greece?',
      options: ['Thessaloniki', 'Athens', 'Sparta', 'Crete'],
      correctAnswer: 1,
    },
    {
      id: 'greece-q2',
      question: 'Which ancient temple sits atop the Acropolis?',
      options: ['Pantheon', 'Parthenon', 'Colosseum', 'Oracle'],
      correctAnswer: 1,
    },
    {
      id: 'greece-q3',
      question: 'What is the traditional Greek anise-flavored spirit?',
      options: ['Raki', 'Ouzo', 'Grappa', 'Sambuca'],
      correctAnswer: 1,
    },
    {
      id: 'greece-q4',
      question: 'How many islands does Greece have?',
      options: ['Around 1,000', 'Around 2,000', 'Around 6,000', 'Around 10,000'],
      correctAnswer: 2,
    },
    {
      id: 'greece-q5',
      question: 'Where did the ancient Olympic Games originate?',
      options: ['Athens', 'Sparta', 'Olympia', 'Delphi'],
      correctAnswer: 2,
    },
    {
      id: 'greece-q6',
      question: 'What is the Greek word for "cheers" when toasting?',
      options: ['Opa', 'Yamas', 'Kalimera', 'Efharisto'],
      correctAnswer: 1,
    },
    {
      id: 'greece-q7',
      question: 'Which Greek island is famous for its white buildings with blue domes?',
      options: ['Crete', 'Mykonos', 'Santorini', 'Rhodes'],
      correctAnswer: 2,
    },
    {
      id: 'greece-q8',
      question: 'What is the name of the Greek layered pastry with nuts and honey?',
      options: ['Baklava', 'Galaktoboureko', 'Loukoumades', 'Kataifi'],
      correctAnswer: 0,
    },
    {
      id: 'greece-q9',
      question: 'Which ancient Greek city-state was known for its warriors?',
      options: ['Athens', 'Corinth', 'Sparta', 'Thebes'],
      correctAnswer: 2,
    },
    {
      id: 'greece-q10',
      question: 'What is the traditional Greek folk dance called?',
      options: ['Flamenco', 'Sirtaki', 'Tarantella', 'Hora'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 52, y: 42 },
};
