import { Country } from '@/types';

export const indonesia: Country = {
  id: 'indonesia',
  name: 'Indonesia',
  code: 'ID',
  continent: 'Asia',
  flag: '🇮🇩',
  landscapeImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
  description: 'Indonesia is the world\'s largest archipelago with over 17,000 islands, diverse cultures, stunning beaches, ancient temples, and the largest Muslim population. It\'s a land of incredible natural beauty and cultural richness.',
  quickFacts: [
    { label: 'Capital', value: 'Jakarta' },
    { label: 'Population', value: '275 million' },
    { label: 'Official Language', value: 'Indonesian' },
    { label: 'Currency', value: 'Indonesian Rupiah (IDR)' },
    { label: 'Area', value: '1,904,569 km²' },
  ],
  facts: [
    'Indonesia has over 17,000 islands, with only about 6,000 inhabited',
    'It\'s the world\'s largest island country',
    'Indonesia is home to the Komodo dragon, found nowhere else',
    'The country has over 700 languages and dialects',
    'Borobudur is the world\'s largest Buddhist temple',
    'Indonesia straddles the equator between Asia and Australia',
    'The country has over 130 active volcanoes',
    'Bali is one of the world\'s most popular tourist destinations',
  ],
  foodCulture: 'Indonesian cuisine is incredibly diverse, varying by island and ethnic group. Rice is the staple, and dishes are often spicy with aromatic herbs and spices. Satay, rendang, and nasi goreng are famous worldwide.',
  history: [
    {
      year: '8th-9th Century',
      title: 'Buddhist and Hindu Kingdoms',
      description: 'Great kingdoms built Borobudur and Prambanan temples.'
    },
    {
      year: '13th Century',
      title: 'Spread of Islam',
      description: 'Islam arrived through trade and gradually became the dominant religion.'
    },
    {
      year: '1602',
      title: 'Dutch Colonization',
      description: 'The Dutch East India Company established control, beginning 350 years of colonial rule.'
    },
    {
      year: '1942-1945',
      title: 'Japanese Occupation',
      description: 'Japanese forces occupied Indonesia during World War II.'
    },
    {
      year: '1945',
      title: 'Independence',
      description: 'Sukarno declared independence, followed by years of struggle against the Dutch.'
    },
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'April-October (dry season) for most islands' },
    { item: 'Visa', description: 'Visa on arrival or e-visa available for many nationalities.' },
    { item: 'Transportation', description: 'Domestic flights between islands, ferries, local transport varies by island.' },
    { item: 'Language', description: 'Indonesian (Bahasa Indonesia). English in tourist areas.' },
    { item: 'Safety', description: 'Generally safe. Be aware of volcanic activity and petty theft.' },
  ],
  mainDish: {
    id: 'indonesia-nasi-goreng',
    name: 'Nasi Goreng',
    description: 'Indonesian fried rice, the national dish, with sweet soy sauce, vegetables, and topped with a fried egg',
    cookingTime: 30,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Cooked rice (day-old)', amount: 600, unit: 'g' },
      { name: 'Chicken or shrimp', amount: 300, unit: 'g' },
      { name: 'Eggs', amount: 4, unit: 'pieces' },
      { name: 'Shallots', amount: 5, unit: 'pieces' },
      { name: 'Garlic', amount: 4, unit: 'cloves' },
      { name: 'Chili peppers', amount: 3, unit: 'pieces' },
      { name: 'Kecap manis (sweet soy sauce)', amount: 4, unit: 'tbsp' },
      { name: 'Shrimp paste', amount: 1, unit: 'tsp' },
      { name: 'Tomato', amount: 1, unit: 'piece' },
      { name: 'Cucumber', amount: 1, unit: 'piece' },
    ],
    steps: [
      'Make spice paste: blend shallots, garlic, chilies, and shrimp paste',
      'Heat oil in wok, fry spice paste until fragrant',
      'Add chicken or shrimp, cook until done',
      'Add day-old rice, breaking up clumps',
      'Stir-fry on high heat, mixing well',
      'Add kecap manis and mix until rice is evenly coated',
      'Push rice to side, fry eggs sunny-side up',
      'Plate the nasi goreng',
      'Top each serving with a fried egg',
      'Garnish with sliced tomato, cucumber, and crackers',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600',
  },
  drinks: {
    alcoholic: 'Bintang beer, Arak (local spirit), Palm wine',
    nonAlcoholic: 'Teh botol (bottled sweet tea), Es kelapa (coconut water), Jamu (herbal drink)',
  },
  music: ['Gamelan (traditional orchestra)', 'Dangdut music', 'Keroncong', 'Modern Indonesian pop'],
  decorationIdeas: [
    'Red and white (Indonesian flag colors)',
    'Batik patterns (traditional fabric)',
    'Wayang (shadow puppet) motifs',
    'Tropical flowers like hibiscus',
    'Bamboo elements',
    'Balinese art and carvings',
  ],
  conversationStarters: [
    'Have you been to Bali? The beaches are stunning!',
    'Komodo dragons are only found in Indonesia - so fascinating!',
    'Indonesian satay is so flavorful - do you like it?',
    'Over 17,000 islands - so much to explore!',
  ],
  quiz: [
    {
      id: 'indonesia-q1',
      question: 'What is Indonesia\'s capital city?',
      options: ['Bali', 'Jakarta', 'Surabaya', 'Bandung'],
      correctAnswer: 1,
    },
    {
      id: 'indonesia-q2',
      question: 'Approximately how many islands does Indonesia have?',
      options: ['1,000', '5,000', '17,000', '30,000'],
      correctAnswer: 2,
    },
    {
      id: 'indonesia-q3',
      question: 'What unique animal is found only in Indonesia?',
      options: ['Tiger', 'Orangutan', 'Komodo dragon', 'Panda'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 80, y: 16 },
};
