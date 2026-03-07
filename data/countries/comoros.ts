import { Country } from '@/types';

export const comoros: Country = {
  id: 'comoros',
  name: 'Comoros',
  code: 'KM',
  continent: 'Africa',
  flag: '🇰🇲',
  landscapeImage: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80',
  description: 'Comoros is a volcanic archipelago off Africa\'s east coast, known as the "Perfume Islands" for its ylang-ylang, vanilla, and clove production.',
  quickFacts: [
    { label: 'Capital', value: 'Moroni' },
    { label: 'Population', value: '870,000' },
    { label: 'Official Languages', value: 'Comorian, Arabic, French' },
    { label: 'Currency', value: 'Comorian Franc' },
    { label: 'Area', value: '1,862 km²' },
  ],
  facts: [
    'Comoros is one of the world\'s largest producers of ylang-ylang',
    'The islands are volcanic with active Mount Karthala',
    'Comoros is one of the world\'s poorest countries',
    'The coelacanth, a "living fossil" fish, was rediscovered here',
    'Known as the "Perfume Islands" for aromatic exports',
    'Mount Karthala is one of the world\'s largest active volcanoes',
    'Comoros has had over 20 coups since independence',
    'The country is a blend of African, Arab, and French cultures',
  ],
  foodCulture: 'Comorian cuisine blends African, Arab, and French influences with seafood, rice, and aromatic spices. Vanilla and ylang-ylang add unique flavors. Meals often feature fresh fish, coconut, and local spices.',
  history: [
    {
      year: '9th century',
      title: 'Arab Settlement',
      description: 'Arab traders and Shirazi Persians settled the islands, bringing Islam and establishing trade networks.'
    },
    {
      year: '1841',
      title: 'French Protectorate',
      description: 'France began establishing control over the islands, eventually making them a colony.'
    },
    {
      year: '1975',
      title: 'Independence',
      description: 'Comoros declared independence from France, though Mayotte chose to remain French territory.'
    },
    {
      year: '1975-present',
      title: 'Political Instability',
      description: 'The country has experienced numerous coups and political upheavals, becoming one of the world\'s most politically unstable nations.'
    },
  ],
  innovations: [
    {
      name: 'Ylang-Ylang Distillation',
      year: '19th century',
      description: 'Perfected traditional ylang-ylang oil extraction methods that produce some of the world\'s finest essential oils used in luxury perfumes.'
    },
    {
      name: 'Vanilla Cultivation',
      year: '20th century',
      description: 'Developed unique vanilla growing techniques in volcanic soil, creating distinctive flavor profiles sought by gourmet chefs.'
    },
    {
      name: 'Coelacanth Research',
      year: '1938-present',
      description: 'After rediscovery of the "living fossil" fish, contributed to marine biology research on this species thought extinct for 65 million years.'
    },
    {
      name: 'Swahili-Arabic Architecture',
      year: 'Medieval-present',
      description: 'Created unique architectural style blending Arab, Swahili, and local traditions visible in historic stone towns and mosques.'
    },
  ],
  mustVisit: [
    { name: 'Mount Karthala', description: 'One of the world\'s largest active volcanoes with a stunning crater lake, offering challenging hikes with panoramic views.' },
    { name: 'Moroni Medina', description: 'Historic old town with narrow streets, white-washed buildings, and the iconic Friday Mosque (Ancienne Mosquée).'},
    { name: 'Mohéli Marine Park', description: 'Protected marine reserve with pristine coral reefs, sea turtles, dolphins, and excellent snorkeling opportunities.' },
    { name: 'Mitsamiouli Beach', description: 'Beautiful beach with black volcanic sand, clear waters, and local fishing culture on Grande Comore.' },
    { name: 'Ylang-Ylang Distilleries', description: 'Visit working distilleries to see essential oil production and learn about the perfume industry.' }
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Most visitors can obtain visa on arrival. Check current requirements before travel.' },
    { item: 'Best time to visit', description: 'May to October for dry season. Avoid January-April cyclone season.' },
    { item: 'Transportation', description: 'Inter-island flights, boats between islands, taxis on main islands.' },
    { item: 'Language', description: 'Comorian, Arabic, and French are official. French most useful for visitors.' },
    { item: 'Safety', description: 'Generally safe but check political situation. Basic infrastructure. Travel insurance essential.' },
  ],
  mainDish: {
    id: 'comoros-main',
    name: 'Langouste à la Vanille',
    description: 'Lobster in vanilla sauce, a Comorian specialty',
    cookingTime: 45,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'Lobster tails', amount: 4, unit: 'pieces' },
      { name: 'Vanilla beans', amount: 2, unit: 'whole' },
      { name: 'Coconut milk', amount: 400, unit: 'ml' },
      { name: 'Garlic', amount: 3, unit: 'cloves' },
      { name: 'Butter', amount: 50, unit: 'g' },
      { name: 'White wine', amount: 100, unit: 'ml' },
    ],
    steps: [
      'Split vanilla beans and scrape out seeds',
      'Sauté lobster in butter with garlic',
      'Add white wine and vanilla',
      'Pour in coconut milk',
      'Simmer until lobster is cooked',
      'Serve with fragrant rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=800&q=80',
  },
  dessert: {
    id: 'comoros-dessert',
    name: 'Mkatra Foutra',
    description: 'Traditional Comorian coconut bread, slightly sweet and perfect with tea',
    cookingTime: 45,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'All-purpose flour', amount: 500, unit: 'g' },
      { name: 'Coconut milk', amount: 300, unit: 'ml' },
      { name: 'Grated coconut', amount: 100, unit: 'g' },
      { name: 'Sugar', amount: 100, unit: 'g' },
      { name: 'Yeast', amount: 2, unit: 'tsp' },
      { name: 'Cardamom powder', amount: 1, unit: 'tsp' },
      { name: 'Salt', amount: 0.5, unit: 'tsp' },
      { name: 'Butter melted', amount: 50, unit: 'g' },
    ],
    steps: [
      'Warm coconut milk slightly and dissolve yeast in it',
      'Mix flour, sugar, cardamom, and salt in bowl',
      'Add yeast mixture and melted butter',
      'Add grated coconut and knead into soft dough',
      'Cover and let rise for 1 hour until doubled',
      'Shape into round loaf',
      'Place in greased pan and let rise 30 minutes',
      'Bake at 180°C for 30-35 minutes until golden',
      'Cool slightly before slicing',
      'Serve with vanilla tea or coffee',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Local rum',
    nonAlcoholic: 'Coconut water, Vanilla tea, Fresh juice',
  },
  music: [
    'Twarab music',
    'Traditional Comorian songs',
    'African-Arab fusion',
  ],
  decorationIdeas: [
    'Green, white, red and yellow flag colors',
    'Vanilla and ylang-ylang flowers',
    'Ocean and volcanic imagery',
    'Arabic calligraphy',
  ],
  conversationStarters: [
    'Have you used ylang-ylang essential oil?',
    'What do you know about volcanic islands?',
    'Do you enjoy exotic seafood?',
  ],
  quiz: [
    {
      id: 'comoros-q1',
      question: 'What is the capital of Comoros?',
      options: ['Moroni', 'Mamoudzou', 'Mutsamudu', 'Fomboni'],
      correctAnswer: 0,
    },
    {
      id: 'comoros-q2',
      question: 'What is Comoros known as?',
      options: ['Spice Islands', 'Perfume Islands', 'Pearl Islands', 'Sugar Islands'],
      correctAnswer: 1,
    },
    {
      id: 'comoros-q3',
      question: 'What is ylang-ylang used for?',
      options: ['Medicine', 'Perfume', 'Food coloring', 'Building material'],
      correctAnswer: 1,
    },
    {
      id: 'comoros-q4',
      question: 'What rare fish was rediscovered in Comoros waters?',
      options: ['Megalodon', 'Coelacanth', 'Great White Shark', 'Anglerfish'],
      correctAnswer: 1,
    },
    {
      id: 'comoros-q5',
      question: 'When did Comoros gain independence?',
      options: ['1960', '1968', '1975', '1980'],
      correctAnswer: 2,
    },
    {
      id: 'comoros-q6',
      question: 'What is Mount Karthala?',
      options: ['A mountain lake', 'An active volcano', 'A beach resort', 'A historic fort'],
      correctAnswer: 1,
    },
    {
      id: 'comoros-q7',
      question: 'How many official languages does Comoros have?',
      options: ['One', 'Two', 'Three', 'Four'],
      correctAnswer: 2,
    },
    {
      id: 'comoros-q8',
      question: 'Which colonial power controlled Comoros?',
      options: ['Britain', 'Portugal', 'France', 'Spain'],
      correctAnswer: 2,
    },
    {
      id: 'comoros-q9',
      question: 'What type of islands are the Comoros?',
      options: ['Coral atolls', 'Volcanic', 'Continental', 'Artificial'],
      correctAnswer: 1,
    },
    {
      id: 'comoros-q10',
      question: 'What cuisine influences are found in Comoros?',
      options: ['European only', 'Asian only', 'African, Arab, and French', 'American and Asian'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 58, y: 14 },
};
