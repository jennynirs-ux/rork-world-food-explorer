import { Country } from '@/types';

export const kiribati: Country = {
  id: 'kiribati',
  name: 'Kiribati',
  code: 'KI',
  continent: 'Oceania',
  flag: '🇰🇮',
  landscapeImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
  description: 'Kiribati is a Pacific island nation spread across the equator, known for pristine atolls, fishing, and vulnerability to climate change.',
  quickFacts: [
    { label: 'Capital', value: 'South Tarawa' },
    { label: 'Population', value: '120,000' },
    { label: 'Official Languages', value: 'English, Gilbertese' },
    { label: 'Currency', value: 'Australian Dollar' },
    { label: 'Area', value: '811 km²' },
  ],
  facts: [
    'Spans all four hemispheres of the Earth',
    'One of the first places to see the sunrise each day',
    'Most vulnerable to sea level rise',
    'Pristine marine environment',
  ],
  foodCulture: 'I-Kiribati cuisine features fish, coconut, pandanus, and breadfruit.',
  history: [
    {
      year: '1979',
      title: 'Independence',
      description: 'Kiribati gained independence from the United Kingdom.'
    },
    {
      year: '1995',
      title: 'Climate Action',
      description: 'Kiribati became a leading voice on climate change and sea level rise issues.'
    },
  ],
  innovations: [
    {
      name: 'Traditional Navigation',
      year: 'Ancient',
      description: 'I-Kiribati navigators used stars, waves, and birds for ocean navigation.',
    },
    {
      name: 'Stick Charts',
      year: 'Traditional',
      description: 'Traditional wave navigation charts made from sticks and shells.',
    },
  ],
  mustVisit: [
    { name: 'Christmas Island', description: 'World\'s largest coral atoll with pristine beaches and bird watching.' },
    { name: 'Phoenix Islands', description: 'Remote protected marine area, one of the world\'s largest marine reserves.' },
    { name: 'Tarawa Lagoon', description: 'Beautiful lagoon with WWII historical sites.' },
    { name: 'Millennium Island', description: 'First place to see sunrise on Earth.' },
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'May-October for drier weather and calmer seas.' },
    { item: 'Reef shoes', description: 'Essential for walking on coral and rocky areas.' },
    { item: 'Sun protection', description: 'Strong equatorial sun requires maximum protection.' },
    { item: 'Limited facilities', description: 'Bring essentials as tourist infrastructure is minimal.' },
  ],
  dessert: {
    id: 'kiribati-dessert',
    name: 'Te Kaimatoa',
    description: 'Sweet coconut balls, a traditional I-Kiribati treat',
    cookingTime: 30,
    servings: 12,
    dietType: 'vegan',
    ingredients: [
      { name: 'Fresh coconut, grated', amount: 400, unit: 'g' },
      { name: 'Pandanus fruit paste', amount: 100, unit: 'g' },
      { name: 'Sugar or honey', amount: 100, unit: 'g' },
      { name: 'Water', amount: 50, unit: 'ml' },
    ],
    steps: [
      'Mix grated coconut with pandanus paste',
      'Add sugar or honey',
      'Add water slowly to bind mixture',
      'Form into small balls',
      'Let set for 30 minutes',
      'Serve as a sweet snack',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=600',
  },
  mainDish: {
    id: 'kiribati-main',
    name: 'Palusami',
    description: 'Taro leaves cooked in coconut cream',
    cookingTime: 90,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Taro leaves', amount: 500, unit: 'g' },
      { name: 'Coconut cream', amount: 400, unit: 'ml' },
      { name: 'Onions', amount: 1, unit: 'whole' },
      { name: 'Garlic', amount: 2, unit: 'cloves' },
      { name: 'Salt', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Wash taro leaves thoroughly',
      'Layer leaves in baking dish',
      'Mix coconut cream with onions and garlic',
      'Pour mixture over leaves',
      'Cover and bake at 350°F for 90 minutes',
      'Serve with fish or rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600',
  },
  drinks: {
    alcoholic: 'Kava, Toddy (palm wine)',
    nonAlcoholic: 'Coconut water, Fresh juice',
  },
  music: [
    'Traditional Gilbertese chants',
    'Pacific island rhythms',
  ],
  decorationIdeas: [
    'Red, white, blue and yellow flag colors',
    'Ocean and atoll imagery',
    'Traditional woven patterns',
    'Frigatebird motifs',
  ],
  conversationStarters: [
    'What do you know about climate change effects?',
    'Have you been to a Pacific atoll?',
  ],
  quiz: [
    {
      id: 'kiribati-q1',
      question: 'What is Kiribati most vulnerable to?',
      options: ['Earthquakes', 'Sea level rise', 'Volcanoes', 'Tsunamis'],
      correctAnswer: 1,
    },
    {
      id: 'kiribati-q2',
      question: 'What is the capital of Kiribati?',
      options: ['South Tarawa', 'Banaba', 'Christmas Island', 'Kiritimati'],
      correctAnswer: 0,
    },
    {
      id: 'kiribati-q3',
      question: 'How many hemispheres does Kiribati span?',
      options: ['One', 'Two', 'Three', 'Four'],
      correctAnswer: 3,
    },
    {
      id: 'kiribati-q4',
      question: 'In which year did Kiribati gain independence?',
      options: ['1965', '1975', '1979', '1985'],
      correctAnswer: 2,
    },
    {
      id: 'kiribati-q5',
      question: 'What currency does Kiribati use?',
      options: ['Kiribati Dollar', 'US Dollar', 'Australian Dollar', 'New Zealand Dollar'],
      correctAnswer: 2,
    },
    {
      id: 'kiribati-q6',
      question: 'What type of landform makes up most of Kiribati?',
      options: ['Mountains', 'Atolls', 'Plateaus', 'Valleys'],
      correctAnswer: 1,
    },
    {
      id: 'kiribati-q7',
      question: 'What is Kiribati known for being one of the first places to experience each day?',
      options: ['Sunset', 'Sunrise', 'High tide', 'Full moon'],
      correctAnswer: 1,
    },
    {
      id: 'kiribati-q8',
      question: 'What are the official languages of Kiribati?',
      options: ['English only', 'Gilbertese only', 'English and Gilbertese', 'French and English'],
      correctAnswer: 2,
    },
    {
      id: 'kiribati-q9',
      question: 'Which island in Kiribati is known as Millennium Island?',
      options: ['Tarawa', 'Caroline Island', 'Banaba', 'Butaritari'],
      correctAnswer: 1,
    },
    {
      id: 'kiribati-q10',
      question: 'What is the world\'s largest coral atoll located in Kiribati?',
      options: ['Tarawa', 'Christmas Island (Kiritimati)', 'Banaba', 'Abemama'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 93, y: 19 },
};
