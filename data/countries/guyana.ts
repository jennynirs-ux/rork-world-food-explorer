import { Country } from '@/types';

export const guyana: Country = {
  id: 'guyana',
  name: 'Guyana',
  code: 'GY',
  continent: 'South America',
  flag: '🇬🇾',
  landscapeImage: 'https://images.unsplash.com/photo-1618083707368-b3823daa2726?w=800&q=80',
  description: 'Guyana is the only English-speaking country in South America, known for pristine rainforests, Kaieteur Falls, and diverse culture.',
  quickFacts: [
    { label: 'Capital', value: 'Georgetown' },
    { label: 'Population', value: '790,000' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'Guyanese Dollar' },
    { label: 'Area', value: '214,969 km²' },
  ],
  facts: [
    'Home to Kaieteur Falls, one of the world\'s tallest waterfalls',
    'Over 80% covered by rainforest',
    'The only South American country in the Commonwealth',
    'Rich in gold and oil reserves',
  ],
  foodCulture: 'Guyanese cuisine blends Caribbean, Indian, African, and Chinese influences.',
  history: [
    {
      year: '1621',
      title: 'Dutch Colonization',
      description: 'The Dutch established colonies in what is now Guyana.'
    },
    {
      year: '1814',
      title: 'British Control',
      description: 'Britain gained control, naming it British Guiana.'
    },
    {
      year: '1966',
      title: 'Independence',
      description: 'Guyana gained independence from Britain, becoming a republic.'
    },
  ],
  innovations: [
    {
      name: 'Cassareep Production',
      year: 'Traditional',
      description: 'Indigenous Amerindians developed cassareep from cassava, a preservative used in pepperpot stew.'
    },
    {
      name: 'Demerara Sugar',
      year: '1700s',
      description: 'Produced distinctive light brown sugar that became famous worldwide.'
    },
    {
      name: 'Eco-Tourism Model',
      year: '2000s',
      description: 'Pioneered sustainable rainforest tourism with community-based conservation.'
    },
  ],
  mustVisit: [
    { name: 'Kaieteur Falls', description: 'One of the world\'s tallest single-drop waterfalls at 226 meters.' },
    { name: 'Iwokrama Rainforest', description: 'Pristine protected rainforest with diverse wildlife and canopy walkway.' },
    { name: 'Georgetown', description: 'Capital city with colonial architecture and St. George\'s Cathedral.' },
    { name: 'Rupununi Savannah', description: 'Vast grasslands with indigenous communities and wildlife.' },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Available on arrival for most nationalities.' },
    { item: 'Best time to visit', description: 'February-April or August-November for drier weather.' },
    { item: 'Yellow fever vaccination', description: 'Recommended, proof may be required.' },
    { item: 'Insect repellent', description: 'Essential for rainforest areas.' },
  ],
  mainDish: {
    id: 'guyana-main',
    name: 'Pepperpot',
    description: 'Traditional Amerindian stew with cassareep',
    cookingTime: 180,
    servings: 8,
    dietType: 'meat',
    ingredients: [
      { name: 'Beef and pork', amount: 1, unit: 'kg' },
      { name: 'Cassareep', amount: 200, unit: 'ml' },
      { name: 'Cinnamon', amount: 2, unit: 'sticks' },
      { name: 'Brown sugar', amount: 2, unit: 'tbsp' },
      { name: 'Hot peppers', amount: 2, unit: 'whole' },
      { name: 'Thyme', amount: 4, unit: 'sprigs' },
    ],
    steps: [
      'Cut meat into chunks',
      'Combine all ingredients in pot',
      'Bring to boil then simmer 3 hours',
      'Stir occasionally, add water as needed',
      'Cook until meat is very tender',
      'Serve with bread or rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600',
  },
  dessert: {
    id: 'guyana-dessert',
    name: 'Cassava Pone',
    description: 'Sweet cassava cake with coconut and spices',
    cookingTime: 90,
    servings: 12,
    dietType: 'vegan',
    ingredients: [
      { name: 'Grated cassava', amount: 600, unit: 'g' },
      { name: 'Grated coconut', amount: 200, unit: 'g' },
      { name: 'Brown sugar', amount: 300, unit: 'g' },
      { name: 'Coconut milk', amount: 200, unit: 'ml' },
      { name: 'Cinnamon', amount: 1, unit: 'tsp' },
      { name: 'Nutmeg', amount: 1, unit: 'tsp' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Mix grated cassava with coconut',
      'Add sugar, coconut milk, and spices',
      'Pour into greased baking pan',
      'Bake at 175°C for 60-75 minutes',
      'Top should be dark and caramelized',
      'Cool before cutting into squares',
      'Serve at room temperature',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600',
  },
  drinks: {
    alcoholic: 'El Dorado rum, Banks beer',
    nonAlcoholic: 'Mauby, Sorrel, Coconut water',
  },
  music: [
    'Chutney music',
    'Soca',
    'Reggae',
  ],
  decorationIdeas: [
    'Green, yellow, red and black flag colors',
    'Rainforest themes',
    'Waterfall imagery',
    'Caribbean-Indian fusion',
  ],
  conversationStarters: [
    'Have you been to a rainforest?',
    'What do you know about Caribbean culture?',
  ],
  quiz: [
    {
      id: 'guyana-q1',
      question: 'What is the capital of Guyana?',
      options: ['Georgetown', 'Paramaribo', 'Cayenne', 'Port of Spain'],
      correctAnswer: 0,
    },
    {
      id: 'guyana-q2',
      question: 'What is unique about Guyana in South America?',
      options: ['Largest country', 'Only English-speaking', 'Most populous', 'Highest altitude'],
      correctAnswer: 1,
    },
    {
      id: 'guyana-q3',
      question: 'What is Kaieteur Falls famous for?',
      options: ['Widest falls', 'One of tallest single drops', 'Most water volume', 'Oldest falls'],
      correctAnswer: 1,
    },
    {
      id: 'guyana-q4',
      question: 'What percentage of Guyana is rainforest?',
      options: ['50%', '60%', '80%+', '90%'],
      correctAnswer: 2,
    },
    {
      id: 'guyana-q5',
      question: 'What is pepperpot?',
      options: ['A vegetable', 'Traditional stew', 'A dance', 'A river'],
      correctAnswer: 1,
    },
    {
      id: 'guyana-q6',
      question: 'What is cassareep?',
      options: ['A fruit', 'Cassava-based preservative', 'A fish', 'A bird'],
      correctAnswer: 1,
    },
    {
      id: 'guyana-q7',
      question: 'When did Guyana gain independence?',
      options: ['1956', '1966', '1976', '1986'],
      correctAnswer: 1,
    },
    {
      id: 'guyana-q8',
      question: 'What is the Rupununi?',
      options: ['A mountain', 'A river', 'Savannah region', 'A city'],
      correctAnswer: 2,
    },
    {
      id: 'guyana-q9',
      question: 'Which European country first colonized Guyana?',
      options: ['Britain', 'Netherlands', 'France', 'Spain'],
      correctAnswer: 1,
    },
    {
      id: 'guyana-q10',
      question: 'What is cassava pone?',
      options: ['A soup', 'Sweet cake', 'A dance', 'A drink'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 26, y: 20 },
};
