import { Country } from '@/types';

export const cyprus: Country = {
  id: 'cyprus',
  name: 'Cyprus',
  code: 'CY',
  continent: 'Europe',
  flag: '🇨🇾',
  landscapeImage: 'https://images.unsplash.com/photo-1562737193-7c3e3c6ef9c8?w=800',
  description: 'Cyprus is a Mediterranean island nation at the crossroads of Europe, Asia, and Africa, known for its ancient history, beautiful beaches, warm hospitality, and the legendary birthplace of Aphrodite.',
  quickFacts: [
    { label: 'Capital', value: 'Nicosia' },
    { label: 'Population', value: '1.2 million' },
    { label: 'Official Languages', value: 'Greek, Turkish' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '9,251 km²' },
  ],
  facts: [
    'Cyprus is the legendary birthplace of Aphrodite, goddess of love',
    'Nicosia is the last divided capital in the world',
    'Cyprus has been inhabited for over 10,000 years',
    'The island has the most sunshine in Europe - 340 days per year',
    'Cyprus produces halloumi cheese, now famous worldwide',
    'The Troodos Mountains have snow in winter and beaches nearby',
    'Cyprus has been ruled by Greeks, Romans, Byzantines, Ottomans, and British',
    'Commandaria is one of the oldest named wines in the world',
  ],
  foodCulture: 'Cypriot cuisine is a delicious blend of Greek, Turkish, and Middle Eastern influences. Meze culture is central, with tables filled with dozens of small dishes. Fresh ingredients, olive oil, and grilled meats are staples.',
  history: [
    {
      year: '1400 BC',
      title: 'Ancient Cyprus',
      description: 'Cyprus became a major center of copper production and trade in the ancient Mediterranean.'
    },
    {
      year: '58 BC',
      title: 'Roman Rule',
      description: 'Cyprus became part of the Roman Empire, entering a period of prosperity.'
    },
    {
      year: '1571',
      title: 'Ottoman Conquest',
      description: 'The Ottoman Empire conquered Cyprus, ruling for over 300 years.'
    },
    {
      year: '1878',
      title: 'British Administration',
      description: 'Cyprus came under British administration, later becoming a Crown Colony.'
    },
    {
      year: '1960',
      title: 'Independence',
      description: 'Cyprus gained independence from Britain with Archbishop Makarios as president.'
    },
    {
      year: '1974',
      title: 'Division',
      description: 'Turkish invasion and subsequent division of the island into Greek and Turkish areas.'
    },
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'April-June and September-October for ideal weather' },
    { item: 'Visa', description: 'EU member. Special visa rules apply for the divided areas.' },
    { item: 'Transportation', description: 'Car rental recommended. Left-side driving (British legacy).' },
    { item: 'Language', description: 'Greek and Turkish. English widely spoken.' },
    { item: 'Safety', description: 'Very safe. Respect the buffer zone division.' },
  ],
  mainDish: {
    id: 'cyprus-souvlaki',
    name: 'Cypriot Souvlaki',
    description: 'Grilled meat skewers served in pita with salad, the most popular street food in Cyprus',
    cookingTime: 45,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Pork shoulder', amount: 800, unit: 'g' },
      { name: 'Olive oil', amount: 4, unit: 'tbsp' },
      { name: 'Lemon juice', amount: 3, unit: 'tbsp' },
      { name: 'Garlic', amount: 4, unit: 'cloves' },
      { name: 'Oregano', amount: 2, unit: 'tbsp' },
      { name: 'Pita bread', amount: 8, unit: 'pieces' },
      { name: 'Tomatoes', amount: 3, unit: 'pieces' },
      { name: 'Onions', amount: 2, unit: 'pieces' },
      { name: 'Tahini sauce', amount: 200, unit: 'ml' },
    ],
    steps: [
      'Cut pork into 2cm cubes',
      'Mix olive oil, lemon juice, minced garlic, and oregano',
      'Marinate pork for at least 2 hours (or overnight)',
      'Thread meat onto skewers',
      'Grill over hot coals or high heat for 10-12 minutes, turning',
      'Warm pita bread on the grill',
      'Chop tomatoes and slice onions thinly',
      'Remove meat from skewers into pita',
      'Add salad and drizzle with tahini sauce',
      'Wrap and serve immediately',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1633321702068-3e1c1c2e69c4?w=600',
  },
  drinks: {
    alcoholic: 'Commandaria wine, Zivania (grape spirit), KEO beer',
    nonAlcoholic: 'Cypriot coffee, Fresh orange juice, Iced frappe',
  },
  music: ['Traditional Cypriot folk music', 'Bouzouki music', 'Modern Greek pop', 'Turkish Cypriot folk'],
  decorationIdeas: [
    'Blue and white Mediterranean colors',
    'Copper decorations (Cyprus named after copper)',
    'Olive branches and leaves',
    'Lace tablecloths',
    'Ceramic pottery with traditional patterns',
    'Bougainvillea flowers',
  ],
  conversationStarters: [
    'Have you visited Petra tou Romiou, Aphrodite\'s birthplace?',
    'Halloumi cheese from Cyprus is amazing - do you like it?',
    'The divided capital Nicosia is such a unique situation.',
    'Would you try meze? It\'s like a feast of small dishes!',
  ],
  quiz: [
    {
      id: 'cyprus-q1',
      question: 'What is Cyprus\'s capital city?',
      options: ['Limassol', 'Nicosia', 'Larnaca', 'Paphos'],
      correctAnswer: 1,
    },
    {
      id: 'cyprus-q2',
      question: 'What is the famous Cypriot cheese?',
      options: ['Feta', 'Mozzarella', 'Halloumi', 'Gouda'],
      correctAnswer: 2,
    },
    {
      id: 'cyprus-q3',
      question: 'Cyprus is the legendary birthplace of which goddess?',
      options: ['Athena', 'Artemis', 'Hera', 'Aphrodite'],
      correctAnswer: 3,
    },
  ],
  coordinates: { x: 55, y: 35 },
};
