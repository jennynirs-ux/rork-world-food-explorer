import { Country } from '@/types';

export const tonga: Country = {
  id: 'tonga',
  name: 'Tonga',
  code: 'TO',
  continent: 'Oceania',
  flag: '🇹🇴',
  landscapeImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
  description:
    'Tonga is a Polynesian kingdom in the South Pacific, known for whale watching, pristine beaches, strong cultural traditions, and being the only Pacific nation never formally colonized.',

  quickFacts: [
    { label: 'Capital', value: "Nuku'alofa" },
    { label: 'Population', value: '106,000' },
    { label: 'Official Languages', value: 'Tongan, English' },
    { label: 'Currency', value: 'Tongan Paʻanga (TOP)' },
    { label: 'Area', value: '747 km²' },
  ],

  facts: [
    'Tonga was never formally colonized by a European power',
    'It is one of the last remaining Polynesian monarchies',
    'The country consists of 169 islands, about 36 of which are inhabited',
    'Tonga is one of the best places in the world to swim with humpback whales',
    'Traditional hierarchy and respect play a central role in society',
    'Sunday is widely observed as a day of rest and worship',
  ],

  foodCulture:
    'Tongan cuisine centers on root vegetables, coconut, seafood, and meats cooked in traditional earth ovens (umu). Meals are often communal and prepared for extended family gatherings and celebrations.',

  history: [
    {
      year: 'c. 950 AD',
      title: 'Tui Tonga Empire',
      description:
        'The Tui Tonga dynasty emerged, establishing one of the earliest Polynesian maritime empires.',
    },
    {
      year: '1773',
      title: 'European Contact',
      description:
        'Captain James Cook visited Tonga, later referring to it as the “Friendly Islands.”',
    },
    {
      year: '1900',
      title: 'British Protected State',
      description:
        'Tonga became a British-protected state but retained its monarchy and internal governance.',
    },
    {
      year: '1970',
      title: 'Full Independence',
      description:
        'Tonga regained full sovereignty and joined the Commonwealth of Nations.',
    },
  ],

  innovations: [
    {
      name: 'Traditional Navigation',
      year: 'Ancient',
      description:
        'Polynesian navigators used stars, waves, and bird patterns to travel vast ocean distances.',
    },
    {
      name: 'Tapa Cloth (Ngatu)',
      year: 'Centuries-old',
      description:
        'Decorative bark cloth production remains a key cultural and artistic tradition.',
    },
  ],

  mustVisit: [
    {
      name: 'Vavaʻu Islands',
      description:
        'A world-famous destination for whale watching, sailing, and crystal-clear waters.',
    },
    {
      name: 'Haʻamonga ʻa Maui Trilithon',
      description:
        'A mysterious stone monument often compared to Stonehenge.',
    },
    {
      name: 'Tongatapu',
      description:
        'The main island, home to the capital and major cultural sites.',
    },
    {
      name: 'ʻEua National Park',
      description:
        'Known for hiking trails, caves, and dramatic coastal cliffs.',
    },
  ],

  travelEssentials: [
    {
      item: 'Best time to visit',
      description:
        'May–October offers drier weather and whale season (July–October).',
    },
    {
      item: 'Dress code',
      description:
        'Modest clothing is expected, especially in villages and on Sundays.',
    },
    {
      item: 'Sunday observance',
      description:
        'Most businesses close on Sundays; plan activities accordingly.',
    },
    {
      item: 'Cash',
      description:
        'Cash is widely used outside major hotels; ATMs are limited.',
    },
    {
      item: 'Respect & etiquette',
      description:
        'Respect for elders, royalty, and church traditions is very important.',
    },
  ],

  mainDish: {
    id: 'tonga-main',
    name: 'Lu Pulu',
    description: 'Corned beef wrapped in taro leaves and cooked with coconut cream',
    cookingTime: 120,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Corned beef', amount: 500, unit: 'g' },
      { name: 'Taro leaves', amount: 400, unit: 'g' },
      { name: 'Coconut cream', amount: 400, unit: 'ml' },
      { name: 'Onions', amount: 2, unit: 'whole' },
    ],
    steps: [
      'Wrap taro leaves around pieces of corned beef',
      'Add sliced onions and coconut cream',
      'Wrap tightly in foil or banana leaves',
      'Bake in an earth oven (umu) or conventional oven',
      'Cook for about 2 hours until tender',
      'Serve with taro, yam, or cassava',
    ],
    imageUrl: 'https://images.pexels.com/photos/5393647/pexels-photo-5393647.jpeg?auto=compress&cs=tinysrgb&h=350',
  },

  dessert: {
    id: 'tonga-dessert',
    name: 'Faikakai Topai',
    description:
      'Soft dumplings served in sweet coconut syrup, commonly enjoyed as a dessert.',
    cookingTime: 40,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'All-purpose flour', amount: 300, unit: 'g' },
      { name: 'Water', amount: 180, unit: 'ml' },
      { name: 'Coconut milk', amount: 400, unit: 'ml' },
      { name: 'Sugar', amount: 120, unit: 'g' },
      { name: 'Vanilla (optional)', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Mix flour and water to form a soft dough',
      'Shape into small dumplings',
      'Boil dumplings until they float',
      'Heat coconut milk and sugar in a separate pot',
      'Add cooked dumplings to coconut sauce',
      'Simmer gently for 10–15 minutes',
      'Serve warm',
    ],
    imageUrl: 'https://images.pexels.com/photos/5652258/pexels-photo-5652258.jpeg?auto=compress&cs=tinysrgb&h=350',
  },

  drinks: {
    alcoholic: 'Kava',
    nonAlcoholic: 'Coconut water, fresh tropical juices',
  },

  music: [
    'Traditional log drum (nafa) performances',
    'Tongan choral singing',
    'Polynesian ceremonial music',
  ],

  decorationIdeas: [
    'Red and white national colors',
    'Royal and crown motifs',
    'Tropical flowers and palm leaves',
    'Ocean and whale symbolism',
  ],

  conversationStarters: [
    'Have you ever swum with whales?',
    'What do you know about Polynesian navigation?',
    'Would you visit a country that shuts down on Sundays?',
  ],

  quiz: [
    {
      id: 'tonga-q1',
      question: "What is unique about Tonga's history?",
      options: ['First to gain independence', 'Never colonized', 'Largest island nation', 'No monarchy'],
      correctAnswer: 1,
    },
    {
      id: 'tonga-q2',
      question: 'What is the capital of Tonga?',
      options: ["Nuku'alofa", 'Apia', 'Suva', 'Port Vila'],
      correctAnswer: 0,
    },
    {
      id: 'tonga-q3',
      question: 'Which region best describes Tonga?',
      options: ['Melanesia', 'Micronesia', 'Polynesia', 'Caribbean'],
      correctAnswer: 2,
    },
    {
      id: 'tonga-q4',
      question: 'Approximately how many islands make up Tonga?',
      options: ['12', '45', '169', '900'],
      correctAnswer: 2,
    },
    {
      id: 'tonga-q5',
      question: 'Which marine animal is Tonga famous for?',
      options: ['Great white sharks', 'Humpback whales', 'Manatees', 'Sea lions'],
      correctAnswer: 1,
    },
    {
      id: 'tonga-q6',
      question: 'What type of government does Tonga have?',
      options: ['Republic', 'Military rule', 'Polynesian monarchy', 'City-state federation'],
      correctAnswer: 2,
    },
    {
      id: 'tonga-q7',
      question: 'What are Tonga’s official languages?',
      options: ['French and English', 'Tongan and English', 'Spanish and Portuguese', 'Tongan only'],
      correctAnswer: 1,
    },
    {
      id: 'tonga-q8',
      question: 'What is the currency of Tonga?',
      options: ['Tongan Paʻanga', 'Tongan Dollar', 'Pacific Franc', 'Tala'],
      correctAnswer: 0,
    },
    {
      id: 'tonga-q9',
      question: 'What is Lu Pulu traditionally made with?',
      options: [
        'Chicken and rice',
        'Corned beef, taro leaves, coconut cream',
        'Fish and noodles',
        'Beef and potatoes',
      ],
      correctAnswer: 1,
    },
    {
      id: 'tonga-q10',
      question: 'Which traditional drink is widely known across Tonga and the Pacific?',
      options: ['Kava', 'Sake', 'Mate', 'Kvass'],
      correctAnswer: 0,
    },
  ],

  coordinates: { x: 94, y: 10 },
};
