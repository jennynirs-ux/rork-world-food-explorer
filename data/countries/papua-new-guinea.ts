import { Country } from '@/types';

export const papuaNewGuinea: Country = {
  id: 'papua-new-guinea',
  name: 'Papua New Guinea',
  code: 'PG',
  continent: 'Oceania',
  flag: '🇵🇬',
  landscapeImage: 'https://images.unsplash.com/photo-1505881402582-763970a1e27e?w=800&q=80',
  description: 'Papua New Guinea is a Pacific nation known for incredible biodiversity, tribal cultures, and being one of the world\'s most linguistically diverse countries.',
  quickFacts: [
    { label: 'Capital', value: 'Port Moresby' },
    { label: 'Population', value: '9.1 million' },
    { label: 'Official Languages', value: 'English, Tok Pisin, Hiri Motu' },
    { label: 'Currency', value: 'Papua New Guinean Kina' },
    { label: 'Area', value: '462,840 km²' },
  ],
  facts: [
    'Over 800 languages spoken - most diverse in the world',
    'Home to the Bird of Paradise',
    'Traditional tribal cultures still thrive',
    'Covers the eastern half of New Guinea island',
  ],
  foodCulture: 'Papua New Guinean cuisine features sago, taro, sweet potato, and tropical fruits with Melanesian traditions.',
  history: [
    {
      year: '1526',
      title: 'European Discovery',
      description: 'Portuguese explorer Jorge de Meneses landed on the island.'
    },
    {
      year: '1975',
      title: 'Independence',
      description: 'Papua New Guinea gained independence from Australia.'
    },
  ],
  innovations: [
    {
      name: 'Cultural Diversity',
      year: 'Ancient',
      description: 'Maintained incredible linguistic and cultural diversity with 800+ languages.',
    },
    {
      name: 'Traditional Medicine',
      year: 'Traditional',
      description: 'Rich knowledge of rainforest medicinal plants.',
    },
  ],
  mustVisit: [
    { name: 'Kokoda Track', description: 'Historic WWII trail through challenging jungle terrain.' },
    { name: 'Tufi', description: 'Stunning fjords with diving and traditional culture.' },
    { name: 'Mount Hagen', description: 'Highlands town famous for cultural shows and festivals.' },
    { name: 'Milne Bay', description: 'WWII history and excellent diving sites.' },
    { name: 'Sepik River', description: 'Remote river with traditional villages and art.' }
  ],
  travelEssentials: [
    { item: 'Safety', description: 'Exercise caution, especially in Port Moresby. Use reputable guides.' },
    { item: 'Malaria prophylaxis', description: 'Essential for lowland areas.' },
    { item: 'Visa', description: 'Visa on arrival available for most nationalities.' },
    { item: 'Cash', description: 'Credit cards limited outside major hotels.' },
  ],
  dessert: {
    id: 'papua-new-guinea-dessert',
    name: 'Sago Pudding',
    description: 'Sweet pudding made from sago palm',
    cookingTime: 40,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Sago pearls', amount: 200, unit: 'g' },
      { name: 'Coconut milk', amount: 400, unit: 'ml' },
      { name: 'Sugar', amount: 100, unit: 'g' },
      { name: 'Pandanus extract', amount: 1, unit: 'tsp' },
      { name: 'Banana leaves', amount: 4, unit: 'large' },
    ],
    steps: [
      'Soak sago pearls until soft',
      'Mix with coconut milk and sugar',
      'Add pandanus extract',
      'Wrap in banana leaves',
      'Steam for 30 minutes',
      'Cool before serving',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Sago_Soup.jpg/800px-Sago_Soup.jpg',
  },
  mainDish: {
    id: 'papua-new-guinea-main',
    name: 'Mumu',
    description: 'Traditional earth oven feast with pork and vegetables',
    cookingTime: 180,
    servings: 10,
    dietType: 'meat',
    ingredients: [
      { name: 'Pork', amount: 2, unit: 'kg' },
      { name: 'Sweet potato', amount: 1, unit: 'kg' },
      { name: 'Taro', amount: 1, unit: 'kg' },
      { name: 'Banana leaves', amount: 20, unit: 'pieces' },
      { name: 'Greens', amount: 500, unit: 'g' },
      { name: 'Hot stones', amount: 15, unit: 'pieces' },
    ],
    steps: [
      'Dig pit and heat stones in fire',
      'Line pit with banana leaves',
      'Layer meat and vegetables',
      'Add hot stones between layers',
      'Cover with leaves and earth',
      'Cook for 3 hours then uncover',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/%D0%A2%D1%83%D1%80%D0%B3%D0%B5%D0%BD%D0%B5%D0%B2._%D0%9C%D1%83%D0%BC%D1%83._%D0%9F%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F_%D0%B2_%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B5_%D0%A1%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%B8%D0%BA._1854.png/800px-%D0%A2%D1%83%D1%80%D0%B3%D0%B5%D0%BD%D0%B5%D0%B2._%D0%9C%D1%83%D0%BC%D1%83._%D0%9F%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F_%D0%B2_%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B5_%D0%A1%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%B8%D0%BA._1854.png',
  },
  drinks: {
    alcoholic: 'SP beer, Bush beer (fermented)',
    nonAlcoholic: 'Coconut water, Fresh tropical juice',
  },
  music: [
    'Traditional kundu drumming',
    'Melanesian chants',
    'Contemporary PNG pop',
  ],
  decorationIdeas: [
    'Red, black and yellow flag colors',
    'Bird of Paradise imagery',
    'Tribal masks and carvings',
    'Rainforest themes',
  ],
  conversationStarters: [
    'What do you know about linguistic diversity?',
    'Have you seen Birds of Paradise?',
  ],
  quiz: [
    {
      id: 'papua-new-guinea-q1',
      question: 'How many languages are spoken in PNG?',
      options: ['80', '200', '400', 'Over 800'],
      correctAnswer: 3,
    },
    {
      id: 'papua-new-guinea-q2',
      question: 'What is the capital of Papua New Guinea?',
      options: ['Port Moresby', 'Lae', 'Mount Hagen', 'Madang'],
      correctAnswer: 0,
    },
    {
      id: 'papua-new-guinea-q3',
      question: 'In which year did PNG gain independence?',
      options: ['1960', '1970', '1975', '1980'],
      correctAnswer: 2,
    },
    {
      id: 'papua-new-guinea-q4',
      question: 'What bird is Papua New Guinea famous for?',
      options: ['Eagle', 'Bird of Paradise', 'Parrot', 'Peacock'],
      correctAnswer: 1,
    },
    {
      id: 'papua-new-guinea-q5',
      question: 'What are the official languages of PNG?',
      options: ['English only', 'Tok Pisin only', 'English, Tok Pisin, Hiri Motu', 'French and English'],
      correctAnswer: 2,
    },
    {
      id: 'papua-new-guinea-q6',
      question: 'What is PNG\'s currency?',
      options: ['Dollar', 'Kina', 'Rupee', 'Peso'],
      correctAnswer: 1,
    },
    {
      id: 'papua-new-guinea-q7',
      question: 'From which country did PNG gain independence?',
      options: ['Britain', 'Australia', 'New Zealand', 'Germany'],
      correctAnswer: 1,
    },
    {
      id: 'papua-new-guinea-q8',
      question: 'What is the traditional earth oven feast called?',
      options: ['Hangi', 'Mumu', 'Barbecue', 'Luau'],
      correctAnswer: 1,
    },
    {
      id: 'papua-new-guinea-q9',
      question: 'Which island does PNG share with Indonesia?',
      options: ['Borneo', 'New Guinea', 'Sumatra', 'Java'],
      correctAnswer: 1,
    },
    {
      id: 'papua-new-guinea-q10',
      question: 'What is unique about PNG\'s linguistic diversity?',
      options: ['Only one language', 'Second most diverse', 'Most linguistically diverse in the world', 'No written languages'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 87, y: 15 },
};
