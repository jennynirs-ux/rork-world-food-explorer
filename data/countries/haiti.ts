import { Country } from '@/types';

export const haiti: Country = {
  id: 'haiti',
  name: 'Haiti',
  code: 'HT',
  continent: 'North America',
  flag: '🇭🇹',
  landscapeImage: 'https://images.unsplash.com/photo-1624298357797-c465515c2e1d?w=800&q=80',
  description: 'Haiti shares Hispaniola island with the Dominican Republic, known as the first Black republic, vibrant art scene, and resilient culture.',
  quickFacts: [
    { label: 'Capital', value: 'Port-au-Prince' },
    { label: 'Population', value: '11.5 million' },
    { label: 'Official Languages', value: 'French, Haitian Creole' },
    { label: 'Currency', value: 'Haitian Gourde' },
    { label: 'Area', value: '27,750 km²' },
  ],
  facts: [
    'First independent Black republic in the world (1804)',
    'Only country where a slave revolt led to independence',
    'Known for vibrant folk art and tap-tap buses',
    'Birthplace of Vodou religion',
  ],
  foodCulture: 'Haitian cuisine blends African, French, and Taíno influences with rice, beans, and spicy sauces.',
  history: [
    {
      year: '1492',
      title: 'Spanish Colonization',
      description: 'Columbus arrived on Hispaniola, beginning Spanish colonial rule.'
    },
    {
      year: '1697',
      title: 'French Colony',
      description: 'Western Hispaniola became the French colony of Saint-Domingue, becoming the wealthiest colony in the Caribbean.'
    },
    {
      year: '1804',
      title: 'Independence',
      description: 'Haiti became the first Black republic and second independent nation in the Americas after a successful slave revolt.'
    },
  ],
  innovations: [
    {
      name: 'First Black Republic',
      year: '1804',
      description: 'First successful slave revolt leading to an independent nation, inspiring abolition movements worldwide.'
    },
    {
      name: 'Vodou Religion',
      year: 'Traditional',
      description: 'Syncretic religion blending African, Catholic, and indigenous beliefs that played a key role in the revolution.'
    },
    {
      name: 'Haitian Creole Language',
      year: 'Colonial Era',
      description: 'Developed unique French-based creole that became an official language and cultural identity marker.'
    },
  ],
  mustVisit: [
    { name: 'Citadelle Laferrière', description: 'Massive mountaintop fortress, UNESCO World Heritage Site, largest in the Americas.' },
    { name: 'Labadee', description: 'Beautiful beach peninsula with water sports and local culture.' },
    { name: 'Iron Market', description: 'Historic Port-au-Prince market with vibrant art and handicrafts.' },
    { name: 'Bassin Bleu', description: 'Series of stunning blue waterfalls and natural pools.' },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Available on arrival for most nationalities.' },
    { item: 'Best time to visit', description: 'November-March for dry season.' },
    { item: 'French/Creole', description: 'Helpful as English is limited. French or Haitian Creole preferred.' },
    { item: 'Safety', description: 'Check current advisories. Stick to tourist areas.' },
  ],
  mainDish: {
    id: 'haiti-main',
    name: 'Griot with Pikliz',
    description: 'Fried pork with spicy pickled vegetables',
    cookingTime: 120,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Pork shoulder', amount: 1, unit: 'kg' },
      { name: 'Sour orange juice', amount: 200, unit: 'ml' },
      { name: 'Scotch bonnet peppers', amount: 2, unit: 'whole' },
      { name: 'Cabbage for pikliz', amount: 300, unit: 'g' },
      { name: 'Carrots', amount: 2, unit: 'whole' },
      { name: 'Garlic', amount: 5, unit: 'cloves' },
    ],
    steps: [
      'Marinate pork in citrus and spices overnight',
      'Boil pork until tender',
      'Deep fry until crispy',
      'Make pikliz with shredded vegetables and peppers',
      'Let pikliz ferment for 24 hours',
      'Serve griot with pikliz and rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600',
  },
  dessert: {
    id: 'haiti-dessert',
    name: 'Pain Patate',
    description: 'Sweet potato pudding with coconut and spices',
    cookingTime: 75,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Sweet potatoes cooked and mashed', amount: 600, unit: 'g' },
      { name: 'Coconut milk', amount: 400, unit: 'ml' },
      { name: 'Brown sugar', amount: 200, unit: 'g' },
      { name: 'Evaporated milk', amount: 200, unit: 'ml' },
      { name: 'Eggs', amount: 3, unit: 'large' },
      { name: 'Vanilla extract', amount: 2, unit: 'tsp' },
      { name: 'Cinnamon', amount: 1, unit: 'tsp' },
      { name: 'Nutmeg', amount: 0.5, unit: 'tsp' },
      { name: 'Raisins', amount: 100, unit: 'g' },
    ],
    steps: [
      'Mix mashed sweet potatoes with coconut milk',
      'Add sugar, evaporated milk, and beaten eggs',
      'Stir in vanilla, cinnamon, nutmeg',
      'Fold in raisins',
      'Pour into greased baking dish',
      'Bake at 175°C for 60 minutes until set',
      'Cool before cutting into squares',
      'Serve at room temperature or chilled',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600',
  },
  drinks: {
    alcoholic: 'Rhum Barbancourt, Prestige beer',
    nonAlcoholic: 'Akasan (corn drink), Coconut water, Fresh juice',
  },
  music: [
    'Kompa',
    'Rara',
    'Mizik rasin',
  ],
  decorationIdeas: [
    'Blue and red flag colors',
    'Vibrant folk art',
    'Tap-tap bus designs',
    'Vodou symbols',
  ],
  conversationStarters: [
    'What do you know about Haitian independence?',
    'Have you seen Haitian folk art?',
    'Do you enjoy Caribbean rhythms?',
  ],
  quiz: [
    {
      id: 'haiti-q1',
      question: 'What is the capital of Haiti?',
      options: ['Port-au-Prince', 'Cap-Haïtien', 'Santo Domingo', 'Kingston'],
      correctAnswer: 0,
    },
    {
      id: 'haiti-q2',
      question: 'When did Haiti gain independence?',
      options: ['1776', '1804', '1825', '1844'],
      correctAnswer: 1,
    },
    {
      id: 'haiti-q3',
      question: 'What is unique about Haiti\'s independence?',
      options: ['First in Americas', 'First Black republic', 'Peaceful transition', 'Granted by France'],
      correctAnswer: 1,
    },
    {
      id: 'haiti-q4',
      question: 'What is griot?',
      options: ['A dance', 'Fried pork dish', 'A drum', 'A festival'],
      correctAnswer: 1,
    },
    {
      id: 'haiti-q5',
      question: 'What is pikliz?',
      options: ['A soup', 'Spicy pickled vegetables', 'A bread', 'A drink'],
      correctAnswer: 1,
    },
    {
      id: 'haiti-q6',
      question: 'What island does Haiti share with Dominican Republic?',
      options: ['Jamaica', 'Hispaniola', 'Cuba', 'Puerto Rico'],
      correctAnswer: 1,
    },
    {
      id: 'haiti-q7',
      question: 'What UNESCO site is in Haiti?',
      options: ['Citadelle Laferrière', 'Fort Napoleon', 'El Morro', 'Brimstone Hill'],
      correctAnswer: 0,
    },
    {
      id: 'haiti-q8',
      question: 'What are the official languages of Haiti?',
      options: ['Spanish and English', 'French and Haitian Creole', 'English only', 'Portuguese and French'],
      correctAnswer: 1,
    },
    {
      id: 'haiti-q9',
      question: 'What is pain patate?',
      options: ['Bread', 'Sweet potato pudding', 'Meat pie', 'Fish stew'],
      correctAnswer: 1,
    },
    {
      id: 'haiti-q10',
      question: 'What religion originated in Haiti?',
      options: ['Rastafari', 'Vodou', 'Santeria', 'Candomblé'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 23, y: 29 },
};
