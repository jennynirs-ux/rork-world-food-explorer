import { Country } from '@/types';

export const colombia: Country = {
  id: 'colombia',
  name: 'Colombia',
  code: 'CO',
  continent: 'South America',
  flag: '🇨🇴',
  landscapeImage: 'https://images.unsplash.com/photo-1564769610726-59c8f99b5d7b?w=800',
  description: 'Colombia is a vibrant South American country known for its stunning biodiversity, coffee plantations, colorful colonial cities, and warm, welcoming people. From the Caribbean coast to the Amazon rainforest, it offers incredible natural and cultural diversity.',
  quickFacts: [
    { label: 'Capital', value: 'Bogotá' },
    { label: 'Population', value: '51.5 million' },
    { label: 'Official Language', value: 'Spanish' },
    { label: 'Currency', value: 'Colombian Peso (COP)' },
    { label: 'Area', value: '1,141,748 km²' },
  ],
  facts: [
    'Colombia is the world\'s leading producer of emeralds',
    'The country has the second-highest biodiversity in the world',
    'Colombia is the third-largest coffee producer globally',
    'Cartagena is one of the most beautiful colonial cities in South America',
    'Colombia has both Caribbean and Pacific coastlines',
    'The country is home to over 1,900 species of birds',
    'Salsa dancing is hugely popular, especially in Cali',
    'Colombia has 59 national parks protecting diverse ecosystems',
  ],
  foodCulture: 'Colombian cuisine is diverse and hearty, varying significantly by region. Influenced by indigenous, Spanish, and African traditions, meals typically feature rice, beans, plantains, and arepas. Coffee culture is deeply ingrained, and Colombians take pride in their world-renowned beans.',
  history: [
    {
      year: '1499',
      title: 'Spanish Arrival',
      description: 'Spanish explorers arrived on Colombian shores, beginning the colonial period that would last over 300 years.'
    },
    {
      year: '1810-1819',
      title: 'Independence',
      description: 'Led by Simón Bolívar, Colombia gained independence from Spain after nearly a decade of revolutionary wars.'
    },
    {
      year: '1903',
      title: 'Panama Separation',
      description: 'Panama separated from Colombia with U.S. support to facilitate the construction of the Panama Canal.'
    },
    {
      year: '1948-1958',
      title: 'La Violencia',
      description: 'A period of intense political violence between Liberal and Conservative parties that claimed hundreds of thousands of lives.'
    },
    {
      year: '2016',
      title: 'Peace Agreement',
      description: 'After decades of armed conflict, the government signed a historic peace agreement with FARC guerrillas.'
    },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Many nationalities can visit visa-free for up to 90 days for tourism.' },
    { item: 'Best time to visit', description: 'December to March and July to August for dry season' },
    { item: 'Transportation', description: 'Domestic flights for long distances, buses for regional travel, metro in Medellín and Bogotá.' },
    { item: 'Language', description: 'Spanish is essential. English is limited outside tourist areas.' },
    { item: 'Safety', description: 'Much safer than its past reputation. Exercise standard precautions.' },
  ],
  mainDish: {
    id: 'colombia-bandeja-paisa',
    name: 'Bandeja Paisa',
    description: 'Colombia\'s most famous dish from the Antioquia region - a hearty platter featuring beans, rice, ground beef, chorizo, fried egg, plantain, avocado, and arepa. It\'s a complete feast on one plate.',
    cookingTime: 90,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Red beans', amount: 400, unit: 'g' },
      { name: 'Ground beef', amount: 400, unit: 'g' },
      { name: 'Chorizo sausages', amount: 4, unit: 'pieces' },
      { name: 'Pork belly (chicharrón)', amount: 200, unit: 'g' },
      { name: 'White rice', amount: 300, unit: 'g' },
      { name: 'Eggs', amount: 4, unit: 'pieces' },
      { name: 'Ripe plantains', amount: 2, unit: 'pieces' },
      { name: 'Avocado', amount: 2, unit: 'pieces' },
      { name: 'Arepas', amount: 4, unit: 'pieces' },
    ],
    steps: [
      'Cook red beans with onion, garlic, and tomato until soft (1-2 hours)',
      'Cook white rice separately',
      'Brown ground beef with onions and spices',
      'Fry chorizo sausages until cooked through',
      'Fry pork belly until crispy',
      'Slice and fry plantains until golden',
      'Fry eggs sunny-side up',
      'Warm or grill arepas',
      'Arrange all components on a large platter with sliced avocado',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1626082910618-5f6f07bb6d8e?w=600',
  },
  drinks: {
    alcoholic: 'Aguardiente (anise-flavored liquor), Colombian beer, Rum',
    nonAlcoholic: 'Colombian coffee, Agua de panela (sugarcane drink), Fresh fruit juices',
  },
  music: ['Cumbia', 'Vallenato', 'Salsa', 'Champeta', 'Bambuco'],
  decorationIdeas: [
    'Yellow, blue, and red (flag colors)',
    'Colorful woven mochilas (bags)',
    'Coffee bean displays',
    'Tropical flowers (orchids)',
    'Sombreros vueltiaos',
    'Bright, vibrant colors',
  ],
  conversationStarters: [
    'What\'s your favorite Colombian coffee? How do you like to brew it?',
    'Would you explore Cartagena\'s colonial streets or trek to the Lost City?',
    'Have you heard Colombian music? What do you think of cumbia or vallenato?',
    'What do you know about Colombia\'s transformation in recent years?',
  ],
  quiz: [
    {
      id: 'colombia-q1',
      question: 'What is Colombia\'s capital city?',
      options: ['Medellín', 'Bogotá', 'Cali', 'Cartagena'],
      correctAnswer: 1,
    },
    {
      id: 'colombia-q2',
      question: 'What precious stone is Colombia the world leader in producing?',
      options: ['Diamonds', 'Rubies', 'Emeralds', 'Sapphires'],
      correctAnswer: 2,
    },
    {
      id: 'colombia-q3',
      question: 'What is the traditional hearty platter from Antioquia called?',
      options: ['Ajiaco', 'Bandeja Paisa', 'Sancocho', 'Arepas'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 22, y: 20 },
};
