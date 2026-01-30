import { Country } from '@/types';

export const sierraLeone: Country = {
  id: 'sierra-leone',
  name: 'Sierra Leone',
  code: 'SL',
  continent: 'Africa',
  flag: '🇸🇱',
  landscapeImage: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800',
  description:
    'Sierra Leone is a West African country known for beautiful Atlantic beaches, rainforest reserves, and a resilient culture shaped by trade, colonial history, and post-conflict recovery.',
  quickFacts: [
    { label: 'Capital', value: 'Freetown' },
    { label: 'Population', value: '8.3 million' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'Sierra Leonean Leone (SLE)' },
    { label: 'Area', value: '71,740 km²' },
  ],
  facts: [
    'The name Sierra Leone comes from Portuguese explorers and means "Lion Mountains"',
    'Freetown was founded as a settlement for freed enslaved people',
    'Sierra Leone has some of the most beautiful beaches in West Africa',
    'The country is rich in diamonds and mineral resources',
    'Rice is the most important staple food',
    'The Cotton Tree in Freetown is a historic national symbol',
    'Wildlife includes chimpanzees, pygmy hippos, and tropical birds',
    'Krío is widely spoken as a lingua franca',
  ],
  foodCulture:
    'Sierra Leonean cuisine is based on rice, cassava, palm oil, fish, and leafy sauces. Meals are often spicy and communal, with rice served alongside stews made from groundnuts, okra, cassava leaves, or fish.',

  history: [
    {
      year: '1400s',
      title: 'Early Trade & European Contact',
      description:
        'Portuguese explorers arrived along the coast, beginning trade links between West Africa and Europe.',
    },
    {
      year: '1787',
      title: 'Founding of Freetown',
      description:
        'Freetown was established as a settlement for freed enslaved Africans returning from Britain and the Americas.',
    },
    {
      year: '1808',
      title: 'British Crown Colony',
      description:
        'Sierra Leone became a British colony, playing a key role in anti-slavery naval patrols.',
    },
    {
      year: '1961',
      title: 'Independence',
      description:
        'Sierra Leone gained independence from Britain and became a sovereign nation.',
    },
    {
      year: '1991–2002',
      title: 'Civil War',
      description:
        'A devastating civil war deeply affected the country, economy, and population.',
    },
    {
      year: '2002–Present',
      title: 'Rebuilding & Growth',
      description:
        'The country has focused on peacebuilding, democratic elections, and economic recovery.',
    },
  ],

  innovations: [
    {
      name: 'Post-conflict Peacebuilding',
      year: '2002–Present',
      description:
        'Sierra Leone became a global example of post-conflict reconciliation and democratic recovery.',
    },
    {
      name: 'Community Rice Farming',
      year: 'Traditional',
      description:
        'Local farming techniques sustain rice production and food security across rural regions.',
    },
    {
      name: 'Grassroots Healthcare Models',
      year: 'Modern',
      description:
        'Community-based healthcare initiatives have improved maternal and child health outcomes.',
    },
  ],

  mustVisit: [
    { name: 'Lumley & River Number Two Beach', description: 'White sand beaches with calm Atlantic waters.' },
    { name: 'Tacugama Chimpanzee Sanctuary', description: 'Protected reserve for rescued chimpanzees near Freetown.' },
    { name: 'Cotton Tree (Freetown)', description: 'Historic landmark symbolizing freedom and national identity.' },
    { name: 'Tiwai Island Wildlife Sanctuary', description: 'Rainforest reserve rich in primates and birdlife.' },
    { name: 'Banana Islands', description: 'Peaceful islands with beaches and colonial-era ruins.' },
  ],

  travelEssentials: [
    { item: 'Best time to visit', description: 'November–April during the dry season.' },
    { item: 'Currency', description: 'Leone (SLE); cash is commonly used.' },
    { item: 'Language', description: 'English is official; Krío is widely spoken.' },
    { item: 'Health', description: 'Check vaccinations and malaria prevention before travel.' },
    { item: 'Transport', description: 'Local taxis and ferries are common around Freetown.' },
  ],

  mainDish: {
    id: 'sierra-leone-main',
    name: 'Jollof Rice',
    description:
      'A beloved West African rice dish cooked in tomato sauce with spices, often served with plantains or vegetables.',
    cookingTime: 60,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Long-grain rice', amount: 500, unit: 'g' },
      { name: 'Tomato paste', amount: 200, unit: 'g' },
      { name: 'Onions, chopped', amount: 2, unit: 'whole' },
      { name: 'Bell peppers, blended', amount: 2, unit: 'whole' },
      { name: 'Scotch bonnet pepper', amount: 1, unit: 'whole' },
      { name: 'Palm oil (or vegetable oil)', amount: 80, unit: 'ml' },
      { name: 'Vegetable stock or water', amount: 750, unit: 'ml' },
      { name: 'Salt', amount: 1.5, unit: 'tsp' },
    ],
    steps: [
      'Heat oil in a large pot over medium heat.',
      'Add onions and cook until soft.',
      'Stir in blended peppers and tomato paste.',
      'Cook sauce for 10–15 minutes until thickened.',
      'Add rice, salt, and stock.',
      'Stir well and bring to a simmer.',
      'Cover and cook on low heat for 25–30 minutes.',
      'Check rice and fluff with fork.',
      'Serve hot with fried plantains or vegetables.',
    ],
    imageUrl: 'https://source.unsplash.com/featured/?jollof-rice,west-african-food&w=600',
  },

  dessert: {
    id: 'sierra-leone-dessert',
    name: 'Fried Plantains',
    description:
      'Sweet ripe plantains sliced and fried until golden, often enjoyed as a dessert or side.',
    cookingTime: 20,
    servings: 4,
    dietType: 'vegan',
    ingredients: [
      { name: 'Ripe plantains', amount: 3, unit: 'whole' },
      { name: 'Vegetable oil', amount: 250, unit: 'ml' },
      { name: 'Pinch of salt', amount: 1, unit: 'pinch' },
    ],
    steps: [
      'Peel plantains and slice diagonally.',
      'Heat oil in a pan over medium heat.',
      'Fry slices 2–3 minutes per side until golden.',
      'Remove and drain on paper towels.',
      'Sprinkle lightly with salt.',
      'Serve warm.',
    ],
    imageUrl: 'https://source.unsplash.com/featured/?fried-plantains,african-dessert&w=600',
  },

  drinks: {
    alcoholic: 'Star Beer, Palm wine, Poyo',
    nonAlcoholic: 'Ginger beer, Fresh coconut water, Hibiscus tea',
  },

  music: ['Palm wine music', 'Bubu music', 'Afrobeat', 'Traditional drumming'],

  decorationIdeas: [
    'Green, white, and blue flag colors',
    'Coastal and beach imagery',
    'Traditional masks and textiles',
    'Natural wood and woven decor',
  ],

  conversationStarters: [
    'Have you ever tried West African jollof rice?',
    'Did you know Freetown was founded for freed enslaved people?',
    'Would you rather visit beaches or rainforests?',
    'What do you know about African music styles?',
  ],

  quiz: [
    {
      id: 'sierra-leone-q1',
      question: 'What is the capital of Sierra Leone?',
      options: ['Freetown', 'Monrovia', 'Conakry', 'Accra'],
      correctAnswer: 0,
    },
    {
      id: 'sierra-leone-q2',
      question: 'Which ocean borders Sierra Leone?',
      options: ['Indian Ocean', 'Atlantic Ocean', 'Pacific Ocean', 'Arctic Ocean'],
      correctAnswer: 1,
    },
    {
      id: 'sierra-leone-q3',
      question: 'What staple food is central to Sierra Leonean cuisine?',
      options: ['Rice', 'Wheat', 'Maize', 'Potatoes'],
      correctAnswer: 0,
    },
    {
      id: 'sierra-leone-q4',
      question: 'What does the name Sierra Leone mean?',
      options: ['Green Hills', 'Lion Mountains', 'Golden Coast', 'River Land'],
      correctAnswer: 1,
    },
    {
      id: 'sierra-leone-q5',
      question: 'Which language is widely spoken as a lingua franca?',
      options: ['French', 'Arabic', 'Krío', 'Swahili'],
      correctAnswer: 2,
    },
    {
      id: 'sierra-leone-q6',
      question: 'Which natural resource is Sierra Leone especially known for?',
      options: ['Gold', 'Diamonds', 'Oil', 'Coal'],
      correctAnswer: 1,
    },
    {
      id: 'sierra-leone-q7',
      question: 'What year did Sierra Leone gain independence?',
      options: ['1957', '1961', '1975', '1980'],
      correctAnswer: 1,
    },
    {
      id: 'sierra-leone-q8',
      question: 'Which tree is a national symbol in Freetown?',
      options: ['Baobab', 'Cotton Tree', 'Palm Tree', 'Mango Tree'],
      correctAnswer: 1,
    },
    {
      id: 'sierra-leone-q9',
      question: 'Which sanctuary near Freetown protects chimpanzees?',
      options: ['Serengeti', 'Tacugama', 'Kruger', 'Bwindi'],
      correctAnswer: 1,
    },
    {
      id: 'sierra-leone-q10',
      question: 'Which dessert is common in Sierra Leone?',
      options: ['Fried plantains', 'Baklava', 'Pavlova', 'Gelato'],
      correctAnswer: 0,
    },
  ],

  coordinates: { x: 44, y: 20 },
};
