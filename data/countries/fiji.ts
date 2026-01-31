import { Country } from '@/types';

export const fiji: Country = {
  id: 'fiji',
  name: 'Fiji',
  code: 'FJ',
  continent: 'Oceania',
  flag: '🇫🇯',
  landscapeImage: 'https://images.unsplash.com/photo-1587897773780-08046b96e42e?w=800&q=80',
  description: 'Fiji is an island nation in the South Pacific known for pristine beaches, coral reefs, friendly locals, and the greeting "Bula!"',
  quickFacts: [
    { label: 'Capital', value: 'Suva' },
    { label: 'Population', value: '900,000' },
    { label: 'Official Languages', value: 'English, Fijian, Hindi' },
    { label: 'Currency', value: 'Fijian Dollar' },
    { label: 'Area', value: '18,274 km²' },
  ],
  facts: [
    'Fiji consists of over 300 islands, 110 permanently inhabited',
    'Home to some of the world\'s best soft coral reefs',
    'Firewalking originated in Fiji',
    'Rugby is the national sport',
  ],
  foodCulture: 'Fijian cuisine blends indigenous, Indian, and Chinese influences. Fresh seafood, root vegetables, and coconut are staples.',
  history: [
    {
      year: '1643',
      title: 'European Discovery',
      description: 'Dutch explorer Abel Tasman was the first European to sight the Fijian islands.'
    },
    {
      year: '1874',
      title: 'British Colony',
      description: 'Fiji became a British Crown Colony after chiefs ceded sovereignty to Queen Victoria.'
    },
    {
      year: '1970',
      title: 'Independence',
      description: 'Fiji gained independence from Britain, becoming a sovereign nation.'
    },
  ],
  mustVisit: [
    { name: 'Coral Coast', description: 'Beautiful stretch of coastline with pristine beaches and coral reefs.' },
    { name: 'Mamanuca Islands', description: 'Tropical paradise islands perfect for snorkeling and diving.' },
    { name: 'Yasawa Islands', description: 'Remote islands with stunning beaches and traditional villages.' },
    { name: 'Suva Municipal Market', description: 'Vibrant market showcasing local produce, spices, and handicrafts.' },
    { name: 'Sigatoka Sand Dunes', description: 'National park with archaeological sites and coastal dunes.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'May-October for dry season with less humidity.' },
    { item: 'Visa', description: 'Many nationalities can enter visa-free for up to 4 months.' },
    { item: 'Reef-safe sunscreen', description: 'Protect coral reefs with eco-friendly sunscreen.' },
    { item: 'Respect for customs', description: 'Remove shoes before entering homes, cover shoulders in villages.' },
  ],
  mainDish: {
    id: 'fiji-main',
    name: 'Kokoda',
    description: 'Fijian ceviche with fish marinated in coconut cream and lime',
    cookingTime: 30,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'Fresh white fish', amount: 500, unit: 'g' },
      { name: 'Coconut cream', amount: 400, unit: 'ml' },
      { name: 'Limes', amount: 6, unit: 'whole' },
      { name: 'Tomatoes', amount: 2, unit: 'whole' },
      { name: 'Onions', amount: 1, unit: 'whole' },
      { name: 'Chili peppers', amount: 1, unit: 'whole' },
    ],
    steps: [
      'Dice fish into small cubes',
      'Marinate fish in lime juice for 2 hours',
      'Drain lime juice',
      'Add coconut cream, diced tomatoes, and onions',
      'Add chopped chili to taste',
      'Serve chilled',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559737558-2f5a2f7e8c59?w=600',
  },
  dessert: {
    id: 'fiji-dessert',
    name: 'Vakalavalava',
    description: 'Sweet cassava cake with coconut cream',
    cookingTime: 60,
    servings: 8,
    dietType: 'vegan',
    ingredients: [
      { name: 'Cassava root grated', amount: 500, unit: 'g' },
      { name: 'Coconut cream', amount: 400, unit: 'ml' },
      { name: 'Sugar', amount: 150, unit: 'g' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'Baking powder', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Preheat oven to 180°C',
      'Mix grated cassava with sugar',
      'Add coconut cream and vanilla',
      'Add baking powder and mix well',
      'Pour into greased baking dish',
      'Bake for 45 minutes until golden',
      'Cool and cut into squares',
      'Serve with extra coconut cream',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600',
  },
  drinks: {
    alcoholic: 'Kava (traditional ceremony drink), Fiji Bitter beer',
    nonAlcoholic: 'Fresh coconut water, Tropical fruit juice',
  },
  music: [
    'Traditional Fijian meke',
    'Pacific reggae',
    'Contemporary Fijian pop',
  ],
  decorationIdeas: [
    'Light blue, white and red flag colors',
    'Tropical flowers and leis',
    'Traditional tapa cloth',
    'Ocean and palm themes',
  ],
  conversationStarters: [
    'Have you been to a Pacific island?',
    'What do you know about kava ceremonies?',
    'Do you enjoy snorkeling or diving?',
  ],
  innovations: [
    {
      name: 'Firewalking Tradition',
      year: 'Ancient',
      description: 'The practice of walking barefoot over hot stones originated in Fiji',
    },
    {
      name: 'Coral Reef Conservation',
      year: '2000s',
      description: 'Pioneering marine protected areas to preserve soft coral reefs',
    },
    {
      name: 'Sustainable Tourism Model',
      year: '2010s',
      description: 'Developing eco-friendly tourism protecting island ecosystems',
    },
  ],
  quiz: [
    {
      id: 'fiji-q1',
      question: 'What is the capital of Fiji?',
      options: ['Nadi', 'Suva', 'Lautoka', 'Labasa'],
      correctAnswer: 1,
    },
    {
      id: 'fiji-q2',
      question: 'How many islands does Fiji have?',
      options: ['50', '100', '300+', '500'],
      correctAnswer: 2,
    },
    {
      id: 'fiji-q3',
      question: 'What is the traditional Fijian greeting?',
      options: ['Aloha', 'Bula', 'Kia ora', 'Hola'],
      correctAnswer: 1,
    },
    {
      id: 'fiji-q4',
      question: 'What is Kokoda?',
      options: ['A dance', 'Fijian ceviche', 'A mountain', 'A festival'],
      correctAnswer: 1,
    },
    {
      id: 'fiji-q5',
      question: 'What is the national sport of Fiji?',
      options: ['Cricket', 'Rugby', 'Soccer', 'Swimming'],
      correctAnswer: 1,
    },
    {
      id: 'fiji-q6',
      question: 'What traditional ceremony drink is Fiji known for?',
      options: ['Sake', 'Kava', 'Tea', 'Wine'],
      correctAnswer: 1,
    },
    {
      id: 'fiji-q7',
      question: 'What is Fiji famous for underwater?',
      options: ['Shipwrecks', 'Soft coral reefs', 'Underwater caves', 'Kelp forests'],
      correctAnswer: 1,
    },
    {
      id: 'fiji-q8',
      question: 'What practice originated in Fiji?',
      options: ['Surfing', 'Firewalking', 'Hula dancing', 'Poi spinning'],
      correctAnswer: 1,
    },
    {
      id: 'fiji-q9',
      question: 'Which ocean is Fiji in?',
      options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'],
      correctAnswer: 2,
    },
    {
      id: 'fiji-q10',
      question: 'How many official languages does Fiji have?',
      options: ['1', '2', '3', '4'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 92, y: 12 },
};
