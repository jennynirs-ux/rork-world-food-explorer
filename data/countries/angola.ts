import { Country } from '@/types';

export const angola: Country = {
  id: 'angola',
  name: 'Angola',
  code: 'AO',
  continent: 'Africa',
  flag: '🇦🇴',
  landscapeImage: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
  description:
    'Angola is a country of diverse landscapes from Atlantic beaches to tropical rainforests. Rich in natural resources with Portuguese colonial heritage and vibrant African culture.',
  quickFacts: [
    { label: 'Capital', value: 'Luanda' },
    { label: 'Population', value: '34 million' },
    { label: 'Official Language', value: 'Portuguese' },
    { label: 'Currency', value: 'Kwanza' },
    { label: 'Area', value: '1,246,700 km²' },
  ],
  facts: [
    'Angola is the second-largest Portuguese-speaking country in Africa',
    'The country has vast oil reserves',
    "Luanda is one of the world's most expensive cities",
    'Angola has one of the fastest-growing economies in Africa',
    'The country is home to giant sable antelopes found nowhere else',
  ],
  foodCulture:
    'Angolan cuisine blends Portuguese and African flavors. Seafood, especially prawns and fish, is abundant along the coast. Palm oil, cassava, and hot peppers are staple ingredients.',
  mainDish: {
    id: 'angola-main',
    name: 'Muamba de Galinha',
    description: 'Chicken stewed in palm oil with okra, garlic, and peppers',
    cookingTime: 75,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken pieces', amount: 1.2, unit: 'kg' },
      { name: 'Red palm oil', amount: 150, unit: 'ml' },
      { name: 'Okra', amount: 300, unit: 'g' },
      { name: 'Garlic cloves', amount: 5, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Hot peppers', amount: 2, unit: 'whole' },
      { name: 'Butternut squash', amount: 300, unit: 'g' },
      { name: 'Bay leaves', amount: 2, unit: 'whole' },
    ],
    steps: [
      'Season chicken with salt, pepper, and crushed garlic',
      'Brown chicken in palm oil until golden',
      'Remove chicken and sauté onions and tomatoes',
      'Add hot peppers and bay leaves',
      'Return chicken to pot with water',
      'Simmer for 30 minutes',
      'Add okra and butternut squash',
      'Cook another 20 minutes until vegetables are tender',
      'Serve with rice or funge (cassava porridge)',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600',
  },
  drinks: {
    alcoholic: 'Cuca beer, Eka beer, Portuguese wine',
    nonAlcoholic: 'Kissangua (fermented maize drink), Fresh fruit juices, Coffee',
  },
  music: ['Semba', 'Kizomba', 'Kuduro', 'Contemporary Angolan pop'],
  decorationIdeas: [
    'Red, black, and yellow flag colors',
    'Portuguese tile patterns',
    'Palm tree motifs',
    'Coastal beach themes',
    'Tribal masks and art',
  ],
  conversationStarters: [
    'Have you tried kizomba dancing?',
    'What do you know about Portuguese-speaking Africa?',
    'Have you cooked with palm oil before?',
    'What African music genres do you enjoy?',
  ],

  // Fixed: expanded to EXACTLY 10 questions ✅
  quiz: [
    {
      id: 'angola-q1',
      question: 'What is the official language of Angola?',
      options: ['English', 'French', 'Portuguese', 'Spanish'],
      correctAnswer: 2,
    },
    {
      id: 'angola-q2',
      question: 'What is Angola’s capital city?',
      options: ['Benguela', 'Luanda', 'Lobito', 'Huambo'],
      correctAnswer: 1,
    },
    {
      id: 'angola-q3',
      question: 'Which currency is used in Angola?',
      options: ['Kwanza', 'Rand', 'CFA franc', 'Escudo'],
      correctAnswer: 0,
    },
    {
      id: 'angola-q4',
      question: 'Which ocean borders Angola to the west?',
      options: ['Indian Ocean', 'Atlantic Ocean', 'Pacific Ocean', 'Arctic Ocean'],
      correctAnswer: 1,
    },
    {
      id: 'angola-q5',
      question: 'Angola is one of Africa’s largest producers of which natural resource?',
      options: ['Gold', 'Oil', 'Coal', 'Uranium'],
      correctAnswer: 1,
    },
    {
      id: 'angola-q6',
      question: 'Which animal is Angola especially famous for, found nowhere else?',
      options: ['Mountain gorilla', 'Giant sable antelope', 'Okapi', 'Fennec fox'],
      correctAnswer: 1,
    },
    {
      id: 'angola-q7',
      question: 'Muamba de Galinha is best described as:',
      options: ['A grilled fish dish', 'A chicken stew often cooked with palm oil', 'A sweet dessert pastry', 'A rice pilaf with dried fruit'],
      correctAnswer: 1,
    },
    {
      id: 'angola-q8',
      question: 'Which popular dance/music style is strongly associated with Angola?',
      options: ['Flamenco', 'Kizomba', 'Tango', 'Polka'],
      correctAnswer: 1,
    },
    {
      id: 'angola-q9',
      question: 'Angola is the second-largest Portuguese-speaking country in Africa. Which is the largest?',
      options: ['Mozambique', 'Cape Verde', 'São Tomé and Príncipe', 'Guinea-Bissau'],
      correctAnswer: 0,
    },
    {
      id: 'angola-q10',
      question: 'About how large is Angola’s area (as listed in the quick facts)?',
      options: ['124,670 km²', '1,246,700 km²', '12,467,000 km²', '246,700 km²'],
      correctAnswer: 1,
    },
  ],

  coordinates: { x: 50, y: 15 },
};
