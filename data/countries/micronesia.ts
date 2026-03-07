import { Country } from '@/types';

export const micronesia: Country = {
  id: 'micronesia',
  name: 'Micronesia',
  code: 'FM',
  continent: 'Oceania',
  flag: '🇫🇲',
  landscapeImage: 'https://images.unsplash.com/photo-1559628233-100c798642d4?w=800&q=80',
  description: 'The Federated States of Micronesia is a Pacific island nation known for WWII wrecks, pristine diving, and traditional culture.',
  quickFacts: [
    { label: 'Capital', value: 'Palikir' },
    { label: 'Population', value: '115,000' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'US Dollar' },
    { label: 'Area', value: '702 km²' },
  ],
  facts: [
    'Consists of over 600 islands',
    'Chuuk Lagoon has the world\'s best wreck diving',
    'Ancient stone money (Rai stones) on Yap',
    'Part of the larger Micronesia region',
  ],
  foodCulture: 'Micronesian cuisine features fish, taro, breadfruit, and coconut.',
  history: [
    {
      year: '1947',
      title: 'UN Trust Territory',
      description: 'Became a UN Trust Territory administered by the United States.'
    },
    {
      year: '1986',
      title: 'Independence',
      description: 'Gained sovereignty under Compact of Free Association with the US.'
    },
  ],
  innovations: [
    {
      name: 'Ocean Navigation',
      year: 'Ancient',
      description: 'Traditional star navigation techniques for long Pacific voyages.',
    },
    {
      name: 'Stone Money System',
      year: 'Traditional',
      description: 'Massive stone discs (Rai) used as currency on Yap island.',
    },
  ],
  mustVisit: [
    { name: 'Chuuk Lagoon', description: 'World-famous wreck diving with WWII ships and planes.' },
    { name: 'Nan Madol', description: 'Ancient stone city built on coral reefs, "Venice of the Pacific."' },
    { name: 'Yap Stone Money', description: 'See massive traditional stone money discs.' },
    { name: 'Pohnpei', description: 'Lush island with waterfalls and Nan Madol ruins.' },
    { name: 'Kosrae', description: 'Pristine island with excellent diving and ancient ruins.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'December-April for drier weather.' },
    { item: 'Visa', description: 'US citizens visa-free; others may need visa.' },
    { item: 'Cash', description: 'US dollars used; ATMs limited outside main islands.' },
    { item: 'Diving gear', description: 'Bring your own or rent for amazing wreck diving.' },
  ],
  dessert: {
    id: 'micronesia-dessert',
    name: 'Banana Pohnpei',
    description: 'Baked bananas with coconut cream',
    cookingTime: 40,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Ripe bananas', amount: 6, unit: 'large' },
      { name: 'Coconut cream', amount: 300, unit: 'ml' },
      { name: 'Brown sugar', amount: 100, unit: 'g' },
      { name: 'Lime juice', amount: 2, unit: 'tbsp' },
    ],
    steps: [
      'Peel and halve bananas lengthwise',
      'Arrange in baking dish',
      'Mix coconut cream with sugar',
      'Pour over bananas',
      'Drizzle with lime juice',
      'Bake at 350°F for 25 minutes',
      'Serve warm',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=800&q=80',
  },
  mainDish: {
    id: 'micronesia-main',
    name: 'Kelaguen',
    description: 'Grilled fish or chicken with lemon and coconut',
    cookingTime: 30,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'Fresh fish or chicken', amount: 500, unit: 'g' },
      { name: 'Lemons', amount: 4, unit: 'whole' },
      { name: 'Grated coconut', amount: 200, unit: 'g' },
      { name: 'Green onions', amount: 3, unit: 'whole' },
      { name: 'Hot peppers', amount: 2, unit: 'whole' },
    ],
    steps: [
      'Grill fish or chicken',
      'Chop into small pieces',
      'Mix with lemon juice',
      'Add grated coconut',
      'Add chopped onions and peppers',
      'Serve with rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Sakau (kava)',
    nonAlcoholic: 'Coconut water, Fresh fruit juice',
  },
  music: [
    'Traditional chants',
    'Pacific island songs',
    'Bamboo band music',
  ],
  decorationIdeas: [
    'Light blue and white flag colors',
    'Ocean themes',
    'Traditional outrigger canoes',
    'Stone money imagery',
  ],
  conversationStarters: [
    'Have you been wreck diving?',
    'What do you know about Pacific islands?',
  ],
  quiz: [
    {
      id: 'micronesia-q1',
      question: 'What is unique about Yap island?',
      options: ['Active volcano', 'Stone money', 'No beaches', 'Ice caps'],
      correctAnswer: 1,
    },
    {
      id: 'micronesia-q2',
      question: 'What is the capital of Micronesia?',
      options: ['Palikir', 'Pohnpei', 'Yap', 'Chuuk'],
      correctAnswer: 0,
    },
    {
      id: 'micronesia-q3',
      question: 'In which year did Micronesia gain independence?',
      options: ['1975', '1980', '1986', '1990'],
      correctAnswer: 2,
    },
    {
      id: 'micronesia-q4',
      question: 'How many islands does Micronesia have?',
      options: ['50', '200', '600+', '1000'],
      correctAnswer: 2,
    },
    {
      id: 'micronesia-q5',
      question: 'What currency does Micronesia use?',
      options: ['Micronesian Dollar', 'US Dollar', 'Australian Dollar', 'Yen'],
      correctAnswer: 1,
    },
    {
      id: 'micronesia-q6',
      question: 'What is Chuuk Lagoon famous for?',
      options: ['Surfing', 'Wreck diving', 'Fishing', 'Coral gardens'],
      correctAnswer: 1,
    },
    {
      id: 'micronesia-q7',
      question: 'What is Nan Madol often called?',
      options: ['Athens of the Pacific', 'Venice of the Pacific', 'Paris of the Pacific', 'Rome of the Pacific'],
      correctAnswer: 1,
    },
    {
      id: 'micronesia-q8',
      question: 'What is the official language of Micronesia?',
      options: ['Micronesian', 'English', 'Japanese', 'French'],
      correctAnswer: 1,
    },
    {
      id: 'micronesia-q9',
      question: 'What are the massive stone discs on Yap called?',
      options: ['Rock coins', 'Rai stones', 'Money rocks', 'Stone dollars'],
      correctAnswer: 1,
    },
    {
      id: 'micronesia-q10',
      question: 'What ancient ruins are found in Pohnpei?',
      options: ['Machu Picchu', 'Nan Madol', 'Angkor Wat', 'Petra'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 87, y: 22 },
};
