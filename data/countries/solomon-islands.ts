import { Country } from '@/types';

export const solomonIslands: Country = {
  id: 'solomon-islands',
  name: 'Solomon Islands',
  code: 'SB',
  continent: 'Oceania',
  flag: '🇸🇧',
  landscapeImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
  description:
    'The Solomon Islands is a Pacific nation of nearly 1,000 islands, known for lush rainforests, coral reefs, WWII history, and strong Melanesian traditions.',
  quickFacts: [
    { label: 'Capital', value: 'Honiara' },
    { label: 'Population', value: '700,000' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'Solomon Islands Dollar (SBD)' },
    { label: 'Area', value: '28,896 km²' },
  ],
  facts: [
    'The country consists of more than 900 islands',
    'Many major World War II battles took place here, including Guadalcanal',
    'Traditional shell money is still used in some communities',
    'Fishing and subsistence farming are central to daily life',
    'The islands are part of the Melanesian cultural region',
    'Over 70 languages are spoken across the country',
    'Coral reefs and lagoons support rich marine biodiversity',
    'Village life and community traditions remain strong',
  ],
  foodCulture:
    'Solomon Islands cuisine is based on fresh fish, root vegetables, bananas, taro, and coconut. Food is often cooked in earth ovens or over open fires, with simple seasoning that highlights natural flavors.',

  innovations: [
    { name: 'Shell Money System', year: 'Ancient', description: 'Traditional shell currency still used in ceremonies and bride price, one of oldest continuous monetary systems' },
    { name: 'Canoe Building Techniques', year: 'Traditional', description: 'Advanced outrigger canoe construction allowing long-distance ocean navigation across the Pacific' },
    { name: 'Panpipe Musical Innovation', year: 'Traditional', description: 'Distinctive bamboo panpipe instruments creating unique polyphonic music' },
  ],
  history: [
    {
      year: 'Pre-1800s',
      title: 'Indigenous Melanesian Settlement',
      description:
        'Melanesian peoples settled the islands thousands of years ago, developing rich cultural traditions and village-based societies.',
    },
    {
      year: '1568',
      title: 'European Contact',
      description:
        'Spanish explorer Álvaro de Mendaña was the first European to visit the islands.',
    },
    {
      year: '1893',
      title: 'British Protectorate',
      description:
        'The Solomon Islands became a British protectorate, shaping colonial administration and trade.',
    },
    {
      year: '1942–1945',
      title: 'World War II',
      description:
        'The islands were the site of major Pacific battles, especially the Battle of Guadalcanal.',
    },
    {
      year: '1978',
      title: 'Independence',
      description:
        'The Solomon Islands gained independence from the United Kingdom.',
    },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Many nationalities receive visa on arrival for tourism.' },
    { item: 'Best time to visit', description: 'April to October (dry season) for best weather and diving.' },
    { item: 'Transportation', description: 'Domestic flights between islands, boats, limited roads.' },
    { item: 'Language', description: 'English is official. Pijin widely spoken, plus 70+ local languages.' },
    { item: 'Safety', description: 'Generally safe. Follow local advice, especially in remote areas.' },
  ],
  mustVisit: [
    { name: 'Guadalcanal WWII Sites', description: 'Historic battlefields, war memorials, and underwater wrecks from WWII Pacific campaign.' },
    { name: 'Marovo Lagoon', description: 'World\'s largest saltwater lagoon with incredible diving and traditional village life.' },
    { name: 'Rennell Island', description: 'UNESCO World Heritage site with the world\'s largest raised coral atoll and Lake Tegano.' },
    { name: 'Skull Island', description: 'Sacred site with ancient skulls and traditional shrines, insight into Melanesian culture.' },
    { name: 'Bonegi Beach', description: 'Beautiful beach with accessible WWII shipwrecks perfect for snorkeling.' },
  ],

  mainDish: {
    id: 'solomon-islands-main',
    name: 'Poi (Taro & Banana Pudding)',
    description:
      'A traditional island pudding made from taro and ripe bananas, enriched with coconut cream and gently fermented or freshly prepared.',
    cookingTime: 120,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Taro root, peeled and cubed', amount: 1, unit: 'kg' },
      { name: 'Ripe bananas, peeled', amount: 6, unit: 'whole' },
      { name: 'Coconut cream', amount: 400, unit: 'ml' },
      { name: 'Sugar (optional)', amount: 100, unit: 'g' },
      { name: 'Water', amount: 1.5, unit: 'l' },
    ],
    steps: [
      'Place cubed taro in a large pot and add water until fully covered.',
      'Bring to a boil and cook for 35–40 minutes until taro is very soft.',
      'Drain taro completely and transfer to a large mixing bowl.',
      'Mash taro until smooth using a pestle or potato masher.',
      'Add peeled bananas and mash together with taro until combined.',
      'Pour in coconut cream and mix until thick and creamy.',
      'Add sugar if a sweeter taste is desired.',
      'For traditional flavor, cover and rest at room temperature for 12–24 hours to lightly ferment.',
      'Serve at room temperature or slightly warmed.',
      'Optional: drizzle extra coconut cream on top before serving.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600',
  },

  dessert: {
    id: 'solomon-islands-dessert',
    name: 'Coconut Banana Sago Pudding',
    description:
      'A simple island dessert made with sago pearls simmered in coconut milk and served with ripe banana.',
    cookingTime: 35,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Sago pearls (or tapioca pearls)', amount: 120, unit: 'g' },
      { name: 'Coconut milk', amount: 400, unit: 'ml' },
      { name: 'Water', amount: 500, unit: 'ml' },
      { name: 'Ripe bananas, sliced', amount: 3, unit: 'whole' },
      { name: 'Brown sugar (or jaggery)', amount: 60, unit: 'g' },
      { name: 'Pinch of salt', amount: 1, unit: 'pinch' },
      { name: 'Lime zest (optional)', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Rinse sago pearls under cold water.',
      'Bring water to a gentle boil and add sago; simmer 10–15 minutes until mostly translucent.',
      'Stir in coconut milk, sugar, and a pinch of salt.',
      'Simmer 5–8 minutes until slightly thickened, stirring often.',
      'Remove from heat and fold in sliced bananas.',
      'Optional: add lime zest for brightness.',
      'Serve warm or chilled (it thickens as it cools).',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1505253213348-ce33b4d1c08d?w=600',
  },

  drinks: {
    alcoholic: 'Kava, Local beer',
    nonAlcoholic: 'Fresh coconut water, Banana juice, Herbal teas',
  },

  music: [
    'Traditional panpipe music',
    'Melanesian chants',
    'Drum-based ceremonial music',
    'Modern Pacific island pop',
  ],

  decorationIdeas: [
    'Blue, green, and yellow flag colors',
    'Ocean and coral reef themes',
    'Traditional shell money displays',
    'Wood carvings and woven mats',
    'WWII historical imagery (maps, photos)',
  ],

  conversationStarters: [
    'Did you know the Solomon Islands played a key role in WWII?',
    'Would you try traditional taro-based dishes?',
    'Have you ever visited a Pacific island nation?',
    'What interests you more: history or marine life?',
    'How important do you think village traditions are today?',
  ],

  quiz: [
    {
      id: 'solomon-q1',
      question: 'What is the capital of the Solomon Islands?',
      options: ['Honiara', 'Suva', 'Port Vila', 'Apia'],
      correctAnswer: 0,
    },
    {
      id: 'solomon-q2',
      question: 'The Solomon Islands are part of which cultural region?',
      options: ['Polynesia', 'Micronesia', 'Melanesia', 'Indonesia'],
      correctAnswer: 2,
    },
    {
      id: 'solomon-q3',
      question: 'Approximately how many islands make up the Solomon Islands?',
      options: ['50', '200', '500', '900+'],
      correctAnswer: 3,
    },
    {
      id: 'solomon-q4',
      question: 'Which major WWII battle took place in the Solomon Islands?',
      options: [
        'Battle of Midway',
        'Battle of Okinawa',
        'Battle of Guadalcanal',
        'Battle of Iwo Jima',
      ],
      correctAnswer: 2,
    },
    {
      id: 'solomon-q5',
      question: 'What is a traditional form of currency still used in some areas?',
      options: ['Gold coins', 'Shell money', 'Rice tokens', 'Copper rings'],
      correctAnswer: 1,
    },
    {
      id: 'solomon-q6',
      question: 'Which ingredient is central to many traditional dishes?',
      options: ['Wheat', 'Rice', 'Taro', 'Corn'],
      correctAnswer: 2,
    },
    {
      id: 'solomon-q7',
      question: 'What ocean surrounds the Solomon Islands?',
      options: ['Indian Ocean', 'Atlantic Ocean', 'Pacific Ocean', 'Southern Ocean'],
      correctAnswer: 2,
    },
    {
      id: 'solomon-q8',
      question: 'When did the Solomon Islands gain independence?',
      options: ['1965', '1978', '1985', '1992'],
      correctAnswer: 1,
    },
    {
      id: 'solomon-q9',
      question: 'What musical instrument is traditionally associated with the islands?',
      options: ['Bagpipes', 'Panpipes', 'Accordion', 'Sitar'],
      correctAnswer: 1,
    },
    {
      id: 'solomon-q10',
      question: 'What natural feature makes the Solomon Islands ideal for diving?',
      options: [
        'Desert reefs',
        'Volcanic ice',
        'Coral reefs and WWII wrecks',
        'Freshwater lakes',
      ],
      correctAnswer: 2,
    },
  ],

  coordinates: { x: 90, y: 15 },
};
