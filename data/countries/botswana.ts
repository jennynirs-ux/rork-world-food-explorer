import { Country } from '@/types';

export const botswana: Country = {
  id: 'botswana',
  name: 'Botswana',
  code: 'BW',
  continent: 'Africa',
  flag: '🇧🇼',
  landscapeImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80',
  description: 'Botswana is renowned for the Okavango Delta, abundant wildlife, and successful conservation efforts. A stable democracy with stunning natural landscapes and rich biodiversity.',
  quickFacts: [
    { label: 'Capital', value: 'Gaborone' },
    { label: 'Population', value: '2.6 million' },
    { label: 'Official Languages', value: 'English, Setswana' },
    { label: 'Currency', value: 'Botswana Pula' },
    { label: 'Area', value: '581,730 km²' },
  ],
  facts: [
    'The Okavango Delta is the world\'s largest inland delta',
    'Botswana has the largest elephant population in Africa',
    'About 70% of the country is covered by the Kalahari Desert',
    'Botswana is one of Africa\'s most stable democracies',
    'The country has a very low population density',
    'Botswana is one of the world\'s largest diamond producers',
    'The country has never experienced a coup since independence',
    'San Bushmen have lived in Botswana for over 20,000 years',
  ],
  foodCulture: 'Botswana cuisine is based on meat and maize. Beef is particularly popular due to the country\'s cattle farming tradition. Traditional foods include seswaa (pounded meat), bogobe (porridge), and morogo (wild spinach). Game meat is also enjoyed.',
  history: [
    {
      year: 'Ancient Times',
      title: 'San Bushmen',
      description: 'The San people have inhabited the Kalahari region for over 20,000 years, developing unique survival skills and rock art traditions.'
    },
    {
      year: '1885',
      title: 'British Protectorate',
      description: 'Bechuanaland became a British protectorate, protecting it from Boer expansion and maintaining traditional chieftaincy systems.'
    },
    {
      year: '1966',
      title: 'Independence',
      description: 'Botswana gained independence peacefully, with Seretse Khama becoming the first president and establishing democratic governance.'
    },
    {
      year: '1967',
      title: 'Diamond Discovery',
      description: 'Massive diamond deposits were discovered, transforming Botswana from one of the poorest to an upper-middle-income country.'
    },
    {
      year: '1990s-Present',
      title: 'Conservation Leadership',
      description: 'Botswana became a leader in wildlife conservation and community-based natural resource management.'
    },
  ],
  innovations: [
    {
      name: 'Community-Based Natural Resource Management',
      year: '1990s',
      description: 'Botswana pioneered giving local communities control over wildlife resources, creating sustainable conservation and tourism income.'
    },
    {
      name: 'Diamond Revenue Management',
      year: '1970s',
      description: 'Successfully negotiated favorable diamond deals and managed mineral wealth prudently, avoiding the "resource curse" affecting many countries.'
    },
    {
      name: 'Anti-Poaching Strategies',
      year: '2010s',
      description: 'Developed some of Africa\'s most effective anti-poaching measures, creating safe havens for elephants and other wildlife.'
    },
    {
      name: 'Multi-Party Democracy',
      year: '1966-Present',
      description: 'Maintained stable democratic governance for over 55 years, one of Africa\'s longest continuous democracies.'
    },
  ],
  mustVisit: [
    { name: 'Okavango Delta', description: 'UNESCO World Heritage Site, world\'s largest inland delta with incredible wildlife viewing via mokoro (dugout canoe).' },
    { name: 'Chobe National Park', description: 'Famous for the largest elephant concentration in Africa and exceptional game viewing along the Chobe River.' },
    { name: 'Moremi Game Reserve', description: 'Premier wildlife area in the Okavango Delta with diverse ecosystems and abundant predators.' },
    { name: 'Makgadikgadi Salt Pans', description: 'Vast salt flats that transform into wildlife magnets during rainy season, with zebra migrations.' },
    { name: 'Central Kalahari Game Reserve', description: 'Second-largest game reserve in the world, offering remote wilderness and black-maned lions.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'May-October for dry season (prime game viewing); November-April for birding and green landscapes.' },
    { item: 'Visa', description: 'Many nationalities receive visa-free entry for up to 90 days.' },
    { item: 'Malaria prevention', description: 'Take prophylaxis for northern areas (Okavango, Chobe). Lower risk in south.' },
    { item: 'Safari bookings', description: 'Book accommodations and activities well in advance, especially for peak season.' },
    { item: 'Cash', description: 'Pula is the currency. Credit cards accepted in lodges; carry cash for small purchases.' },
    { item: 'Respect for wildlife', description: 'Follow guide instructions strictly. Wild animals are unpredictable and dangerous.' }
  ],
  mainDish: {
    id: 'botswana-main',
    name: 'Seswaa',
    description: 'Slow-cooked, pounded beef or goat meat served with pap',
    cookingTime: 180,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Beef or goat meat', amount: 1, unit: 'kg' },
      { name: 'Maize meal', amount: 400, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Salt', amount: 2, unit: 'tsp' },
      { name: 'Black pepper', amount: 1, unit: 'tsp' },
      { name: 'Water', amount: 2, unit: 'liters' },
    ],
    steps: [
      'Cut meat into large chunks with bones',
      'Place meat in large pot with water and salt',
      'Bring to boil, then reduce to simmer',
      'Cook for 3 hours until meat is very tender',
      'Remove bones and pound meat with wooden spoon',
      'Continue pounding until meat is shredded',
      'Mix in cooking liquid to keep moist',
      'For pap: cook maize meal with water until thick',
      'Serve seswaa with pap',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=800&q=80',
  },
  dessert: {
    id: 'botswana-dessert',
    name: 'Dikgobe Sweet Porridge',
    description: 'Sweet sorghum porridge with peanuts and sugar, a comforting Botswanan dessert',
    cookingTime: 45,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Sorghum flour', amount: 300, unit: 'g' },
      { name: 'Ground peanuts', amount: 100, unit: 'g' },
      { name: 'Sugar', amount: 150, unit: 'g' },
      { name: 'Water', amount: 1000, unit: 'ml' },
      { name: 'Salt', amount: 0.5, unit: 'tsp' },
    ],
    steps: [
      'Mix sorghum flour with cold water to form smooth paste.',
      'Bring remaining water to boil.',
      'Slowly add flour paste while stirring constantly.',
      'Reduce heat and simmer for 30 minutes, stirring frequently.',
      'Add ground peanuts and sugar.',
      'Cook for another 10 minutes until thick.',
      'Add pinch of salt to balance sweetness.',
      'Serve warm in bowls.',
      'Optional: top with extra ground peanuts.',
      'Can be served as breakfast or dessert.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Chibuku, St. Louis lager, Traditional sorghum beer',
    nonAlcoholic: 'Ginger beer, Rooibos tea, Fresh fruit juices',
  },
  music: [
    'Traditional Tswana music',
    'Kwasa kwasa',
    'Contemporary Motswako hip-hop',
    'Afro-house',
  ],
  decorationIdeas: [
    'Light blue, black, and white flag colors',
    'Safari and wildlife themes',
    'Traditional baskets',
    'Desert landscape elements',
    'Elephant imagery',
  ],
  conversationStarters: [
    'Have you heard of the Okavango Delta?',
    'What do you find interesting about African wildlife?',
    'Have you been on a safari?',
    'What do you know about desert ecosystems?',
  ],
  quiz: [
    {
      id: 'botswana-q1',
      question: 'What is the Okavango Delta?',
      options: ['A mountain range', 'The world\'s largest inland delta', 'A volcano', 'A desert'],
      correctAnswer: 1,
    },
    {
      id: 'botswana-q2',
      question: 'What desert covers most of Botswana?',
      options: ['Sahara', 'Namib', 'Kalahari', 'Gobi'],
      correctAnswer: 2,
    },
    {
      id: 'botswana-q3',
      question: 'Botswana has Africa\'s largest population of which animal?',
      options: ['Lions', 'Elephants', 'Giraffes', 'Rhinos'],
      correctAnswer: 1,
    },
    {
      id: 'botswana-q4',
      question: 'What is the capital of Botswana?',
      options: ['Gaborone', 'Francistown', 'Maun', 'Kasane'],
      correctAnswer: 0,
    },
    {
      id: 'botswana-q5',
      question: 'When did Botswana gain independence?',
      options: ['1956', '1966', '1976', '1986'],
      correctAnswer: 1,
    },
    {
      id: 'botswana-q6',
      question: 'What is Botswana\'s main natural resource?',
      options: ['Oil', 'Gold', 'Diamonds', 'Copper'],
      correctAnswer: 2,
    },
    {
      id: 'botswana-q7',
      question: 'What is the traditional Botswanan pounded meat dish called?',
      options: ['Braai', 'Seswaa', 'Biltong', 'Boerewors'],
      correctAnswer: 1,
    },
    {
      id: 'botswana-q8',
      question: 'Which indigenous people have lived in Botswana for over 20,000 years?',
      options: ['Maasai', 'Zulu', 'San Bushmen', 'Kikuyu'],
      correctAnswer: 2,
    },
    {
      id: 'botswana-q9',
      question: 'What is the currency of Botswana?',
      options: ['Rand', 'Shilling', 'Pula', 'Dollar'],
      correctAnswer: 2,
    },
    {
      id: 'botswana-q10',
      question: 'Which national park is famous for its Chobe River elephant populations?',
      options: ['Kruger National Park', 'Chobe National Park', 'Serengeti', 'Etosha'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 53, y: 12 },
};
