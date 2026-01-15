import { Country } from '@/types';

export const thailand: Country = {
  id: 'thailand',
  name: 'Thailand',
  code: 'TH',
  continent: 'Asia',
  flag: '🇹🇭',
  landscapeImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800',
  description: 'Thailand, the "Land of Smiles," is known for tropical beaches, ornate Buddhist temples, vibrant street food culture, and warm hospitality. A perfect blend of ancient traditions and modern city life.',
  quickFacts: [
    { label: 'Capital', value: 'Bangkok' },
    { label: 'Population', value: '69.8 million' },
    { label: 'Official Language', value: 'Thai' },
    { label: 'Currency', value: 'Thai Baht (฿)' },
    { label: 'Area', value: '513,120 km²' },
  ],
  facts: [
    'Thailand is the only Southeast Asian country never colonized by Europeans',
    'Bangkok\'s full name is the longest city name in the world with 168 letters',
    'Thailand has over 1,430 islands',
    'The country is the world\'s largest exporter of rice',
    'White elephants are considered sacred and royal in Thailand',
    'Thai people celebrate New Year three times: Western, Chinese, and Songkran',
    'Thailand has more than 40,000 Buddhist temples',
    'Red Bull energy drink was inspired by a Thai drink called Krating Daeng',
  ],
  foodCulture: 'Thai cuisine balances five fundamental flavors: sweet, spicy, sour, bitter, and salty. Street food is a way of life, with vendors offering fresh, flavorful dishes at all hours. Meals are meant to be shared, and rice accompanies almost every dish.',
  history: [
    {
      year: '1238',
      title: 'Sukhothai Kingdom',
      description: 'The first Thai kingdom was established, considered the golden age of Thai culture.'
    },
    {
      year: '1782',
      title: 'Chakri Dynasty',
      description: 'King Rama I founded the current dynasty and established Bangkok as the capital.'
    },
    {
      year: '1932',
      title: 'Constitutional Monarchy',
      description: 'Thailand transitioned from absolute to constitutional monarchy in a bloodless revolution.'
    },
    {
      year: '1939',
      title: 'Modern Thailand',
      description: 'The country changed its name from Siam to Thailand, meaning "Land of the Free."'
    },
  ],
  innovations: [
    {
      name: 'Muay Thai',
      year: 'Ancient',
      description: 'Thailand developed Muay Thai, one of the world\'s most effective martial arts.'
    },
    {
      name: 'Thai Silk',
      year: 'Traditional',
      description: 'Renowned for its quality, Thai silk became world-famous through Jim Thompson.'
    },
    {
      name: 'Tuk-Tuk',
      year: '1960s',
      description: 'The three-wheeled motorized vehicle became an iconic symbol of Thai transportation.'
    },
    {
      name: 'Thai Massage',
      year: 'Ancient',
      description: 'Traditional healing art combining acupressure, yoga, and meditation.'
    },
  ],
  mustVisit: [
    { name: 'Grand Palace', description: 'Bangkok\'s stunning complex of royal buildings and home to the Emerald Buddha.' },
    { name: 'Phi Phi Islands', description: 'Breathtaking limestone islands with crystal-clear waters and white beaches.' },
    { name: 'Ayutthaya', description: 'Ancient capital with impressive temple ruins, UNESCO World Heritage Site.' },
    { name: 'Chiang Mai', description: 'Cultural hub in the mountains with temples, night markets, and elephant sanctuaries.' },
    { name: 'Railay Beach', description: 'Stunning beach accessible only by boat, famous for rock climbing.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'November-February for cool, dry weather; avoid April (hottest month).' },
    { item: 'Modest clothing for temples', description: 'Cover shoulders and knees; remove shoes before entering.' },
    { item: 'Cash', description: 'Many street vendors and small shops only accept cash.' },
    { item: 'Respectful gestures', description: 'The wai greeting, don\'t touch heads, don\'t point feet at people or Buddha images.' },
    { item: 'Mosquito repellent', description: 'Essential for tropical climate.' },
    { item: 'Light, breathable clothing', description: 'Thailand is hot and humid year-round.' }
  ],
  mainDish: {
    id: 'thailand-main',
    name: 'Pad Thai',
    description: 'Thailand\'s famous stir-fried rice noodles with shrimp, tofu, peanuts, and tamarind',
    cookingTime: 30,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'Rice noodles', amount: 400, unit: 'g' },
      { name: 'Shrimp', amount: 300, unit: 'g' },
      { name: 'Firm tofu', amount: 200, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'large' },
      { name: 'Bean sprouts', amount: 150, unit: 'g' },
      { name: 'Garlic chives', amount: 100, unit: 'g' },
      { name: 'Tamarind paste', amount: 3, unit: 'tbsp' },
      { name: 'Fish sauce', amount: 3, unit: 'tbsp' },
      { name: 'Palm sugar', amount: 2, unit: 'tbsp' },
      { name: 'Crushed peanuts', amount: 50, unit: 'g' },
    ],
    steps: [
      'Soak rice noodles in warm water for 30 minutes',
      'Mix tamarind paste, fish sauce, and palm sugar for sauce',
      'Heat wok with oil over high heat',
      'Fry tofu until golden, remove',
      'Cook shrimp until pink, remove',
      'Scramble eggs in wok, push to side',
      'Add drained noodles and sauce, toss quickly',
      'Add shrimp, tofu, and garlic chives',
      'Toss for 2-3 minutes until noodles are tender',
      'Serve topped with bean sprouts, peanuts, lime wedge, and chilies',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600',
  },
  dessert: {
    id: 'thailand-dessert',
    name: 'Mango Sticky Rice',
    description: 'Sweet coconut sticky rice served with fresh ripe mango',
    cookingTime: 45,
    servings: 4,
    dietType: 'vegan',
    ingredients: [
      { name: 'Sticky rice', amount: 300, unit: 'g' },
      { name: 'Coconut milk', amount: 400, unit: 'ml' },
      { name: 'Sugar', amount: 100, unit: 'g' },
      { name: 'Salt', amount: 0.5, unit: 'tsp' },
      { name: 'Ripe mangoes', amount: 3, unit: 'large' },
      { name: 'Sesame seeds', amount: 1, unit: 'tbsp' },
    ],
    steps: [
      'Soak sticky rice in water for at least 4 hours',
      'Steam rice in bamboo steamer for 25-30 minutes',
      'Heat coconut milk, sugar, and salt until sugar dissolves',
      'Reserve some coconut sauce for topping',
      'Mix hot rice with most of the coconut mixture',
      'Cover and let rice absorb coconut milk for 20 minutes',
      'Slice mangoes into thin pieces',
      'Serve rice with mango slices',
      'Drizzle reserved coconut sauce over top',
      'Sprinkle with toasted sesame seeds',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1601473420361-59cdbb7b30c4?w=600',
  },
  drinks: {
    alcoholic: 'Singha beer, Chang beer, Thai whiskey (Mekhong)',
    nonAlcoholic: 'Thai iced tea, Coconut water, Nam manao (lime soda), Thai iced coffee',
  },
  music: [
    'Traditional Thai classical music',
    'Luk thung (Thai country music)',
    'Mor lam (Isan folk music)',
    'Thai pop music',
    'Traditional drum and xylophone',
  ],
  decorationIdeas: [
    'Red, white, and blue flag colors',
    'Golden Buddha statues',
    'Thai silk table runners',
    'Orchids and tropical flowers',
    'Lanterns and parasols',
  ],
  conversationStarters: [
    'Have you tried authentic Thai street food?',
    'Which Thai island would you most like to visit?',
    'What\'s your favorite Thai dish?',
    'Have you experienced a Thai massage?',
    'What do you know about Thai culture?',
  ],
  quiz: [
    {
      id: 'thailand-q1',
      question: 'What is the capital of Thailand?',
      options: ['Phuket', 'Chiang Mai', 'Bangkok', 'Pattaya'],
      correctAnswer: 2,
    },
    {
      id: 'thailand-q2',
      question: 'What is Thailand\'s traditional martial art called?',
      options: ['Karate', 'Muay Thai', 'Taekwondo', 'Kung Fu'],
      correctAnswer: 1,
    },
    {
      id: 'thailand-q3',
      question: 'What was Thailand called before 1939?',
      options: ['Burma', 'Siam', 'Khmer', 'Indochina'],
      correctAnswer: 1,
    },
    {
      id: 'thailand-q4',
      question: 'What is the main religion in Thailand?',
      options: ['Hinduism', 'Islam', 'Buddhism', 'Christianity'],
      correctAnswer: 2,
    },
    {
      id: 'thailand-q5',
      question: 'What does "Pad Thai" mean?',
      options: ['Spicy noodles', 'Thai stir-fry', 'Rice dish', 'Street food'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 75, y: 25 },
};
