import { Country } from '@/types';

export const honduras: Country = {
  id: 'honduras',
  name: 'Honduras',
  code: 'HN',
  continent: 'North America',
  flag: '🇭🇳',
  landscapeImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
  description: 'Honduras is a Central American country known for Mayan ruins, Caribbean beaches, diving in the Bay Islands, and coffee production.',
  quickFacts: [
    { label: 'Capital', value: 'Tegucigalpa' },
    { label: 'Population', value: '10 million' },
    { label: 'Official Language', value: 'Spanish' },
    { label: 'Currency', value: 'Honduran Lempira' },
    { label: 'Area', value: '112,492 km²' },
  ],
  facts: [
    'Home to Copán, one of the most important Mayan sites',
    'The Bay Islands offer world-class diving and snorkeling',
    'Major coffee exporter',
    'Name means "depths" referring to deep waters off the coast',
  ],
  foodCulture: 'Honduran cuisine features corn-based dishes, beans, plantains, and fresh seafood along the coast.',
  history: [
    {
      year: '1502',
      title: 'Columbus Arrival',
      description: 'Christopher Columbus landed on Honduras during his fourth voyage.'
    },
    {
      year: '1821',
      title: 'Independence from Spain',
      description: 'Honduras gained independence, briefly joining the Mexican Empire then the Federal Republic of Central America.'
    },
    {
      year: '1838',
      title: 'Full Independence',
      description: 'Honduras became a fully independent republic.'
    },
  ],
  innovations: [
    {
      name: 'Copán Mayan Site',
      year: 'Ancient',
      description: 'Mayan city with hieroglyphic stairway containing longest Mayan text, advancing understanding of Mayan civilization.'
    },
    {
      name: 'Bay Islands Diving',
      year: '1960s',
      description: 'Pioneered Caribbean diving tourism with the Mesoamerican Barrier Reef.'
    },
    {
      name: 'Coffee Excellence',
      year: '1800s',
      description: 'Developed high-altitude coffee cultivation producing specialty-grade beans.'
    },
  ],
  mustVisit: [
    { name: 'Copán Ruins', description: 'UNESCO World Heritage Site with impressive Mayan ruins and hieroglyphic stairway.' },
    { name: 'Roatán', description: 'Bay Island with world-class diving, white sand beaches, and coral reefs.' },
    { name: 'La Tigra National Park', description: 'Cloud forest near Tegucigalpa with hiking trails and wildlife.' },
    { name: 'Utila', description: 'Budget-friendly diving destination and whale shark spotting.' },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Available on arrival for most nationalities.' },
    { item: 'Best time to visit', description: 'November-April for dry season.' },
    { item: 'Safety', description: 'Check current advisories. Tourist areas generally safe.' },
    { item: 'Spanish language', description: 'Helpful, especially outside Bay Islands.' },
  ],
  mainDish: {
    id: 'honduras-main',
    name: 'Baleadas',
    description: 'Flour tortillas filled with beans, cheese, and cream',
    cookingTime: 30,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Flour tortillas', amount: 12, unit: 'pieces' },
      { name: 'Refried beans', amount: 400, unit: 'g' },
      { name: 'Queso fresco', amount: 200, unit: 'g' },
      { name: 'Honduran crema', amount: 200, unit: 'ml' },
      { name: 'Avocado', amount: 2, unit: 'whole' },
      { name: 'Eggs (optional)', amount: 6, unit: 'whole' },
    ],
    steps: [
      'Warm tortillas on griddle',
      'Spread refried beans on tortilla',
      'Add crumbled cheese',
      'Drizzle with crema',
      'Add sliced avocado',
      'Fold and serve immediately',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80',
  },
  dessert: {
    id: 'honduras-dessert',
    name: 'Tres Leches Cake',
    description: 'Sponge cake soaked in three types of milk',
    cookingTime: 90,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Eggs', amount: 6, unit: 'large' },
      { name: 'Sugar', amount: 200, unit: 'g' },
      { name: 'Flour', amount: 200, unit: 'g' },
      { name: 'Baking powder', amount: 1, unit: 'tsp' },
      { name: 'Evaporated milk', amount: 300, unit: 'ml' },
      { name: 'Condensed milk', amount: 300, unit: 'ml' },
      { name: 'Heavy cream', amount: 300, unit: 'ml' },
      { name: 'Vanilla extract', amount: 2, unit: 'tsp' },
      { name: 'Whipped cream for topping', amount: 400, unit: 'ml' },
    ],
    steps: [
      'Beat eggs and sugar until fluffy',
      'Fold in flour and baking powder',
      'Pour into greased pan',
      'Bake at 180°C for 30 minutes',
      'Cool cake completely',
      'Mix three milks with vanilla',
      'Poke holes in cake with fork',
      'Pour milk mixture slowly over cake',
      'Refrigerate overnight',
      'Top with whipped cream before serving',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1598511726623-d2e9996892f0?w=750&q=80',
  },
  drinks: {
    alcoholic: 'Port Royal beer, Aguardiente',
    nonAlcoholic: 'Horchata, Tamarind juice, Coffee',
  },
  music: [
    'Punta music',
    'Garifuna drums',
    'Latin pop',
  ],
  decorationIdeas: [
    'Blue and white flag colors',
    'Mayan symbols',
    'Caribbean beach themes',
    'Coffee plant imagery',
  ],
  conversationStarters: [
    'Have you been diving in the Caribbean?',
    'What do you know about Mayan civilization?',
    'Do you enjoy Central American coffee?',
  ],
  quiz: [
    {
      id: 'honduras-q1',
      question: 'What is the capital of Honduras?',
      options: ['Tegucigalpa', 'San Pedro Sula', 'Managua', 'San Salvador'],
      correctAnswer: 0,
    },
    {
      id: 'honduras-q2',
      question: 'What ancient civilization site is in Honduras?',
      options: ['Tikal', 'Copán', 'Chichen Itza', 'Machu Picchu'],
      correctAnswer: 1,
    },
    {
      id: 'honduras-q3',
      question: 'What are the Bay Islands known for?',
      options: ['Skiing', 'Diving', 'Desert tours', 'Mountain climbing'],
      correctAnswer: 1,
    },
    {
      id: 'honduras-q4',
      question: 'What is baleadas?',
      options: ['A dance', 'Filled tortillas', 'A drink', 'A festival'],
      correctAnswer: 1,
    },
    {
      id: 'honduras-q5',
      question: 'What does "Honduras" mean?',
      options: ['Mountains', 'Depths', 'Rivers', 'Forests'],
      correctAnswer: 1,
    },
    {
      id: 'honduras-q6',
      question: 'What is Honduras a major exporter of?',
      options: ['Wine', 'Coffee', 'Chocolate', 'Tea'],
      correctAnswer: 1,
    },
    {
      id: 'honduras-q7',
      question: 'Which island is part of Honduras?',
      options: ['Jamaica', 'Roatán', 'Cuba', 'Aruba'],
      correctAnswer: 1,
    },
    {
      id: 'honduras-q8',
      question: 'What is the official language?',
      options: ['English', 'Portuguese', 'Spanish', 'French'],
      correctAnswer: 2,
    },
    {
      id: 'honduras-q9',
      question: 'When did Honduras gain independence?',
      options: ['1810', '1821', '1830', '1850'],
      correctAnswer: 1,
    },
    {
      id: 'honduras-q10',
      question: 'What reef system is near Honduras?',
      options: ['Great Barrier Reef', 'Mesoamerican Barrier Reef', 'Red Sea Reef', 'Belize Barrier Reef'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 18, y: 26 },
};
