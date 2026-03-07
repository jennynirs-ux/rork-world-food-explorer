import { Country } from '@/types';

export const colombia: Country = {
  id: 'colombia',
  name: 'Colombia',
  code: 'CO',
  continent: 'South America',
  flag: '🇨🇴',
  landscapeImage: 'https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?w=800&q=80',
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
  innovations: [
    {
      name: 'Coffee Production Methods',
      year: '19th-20th century',
      description: 'Perfected high-altitude coffee growing techniques that produce some of the world\'s finest Arabica beans, setting global standards for quality.'
    },
    {
      name: 'TransMilenio BRT System',
      year: '2000',
      description: 'Developed innovative Bus Rapid Transit system in Bogotá that became a model for sustainable urban transportation worldwide.'
    },
    {
      name: 'Biodiversity Conservation',
      year: '1990s-present',
      description: 'Created pioneering programs to protect the world\'s second-most biodiverse country, including community-led conservation projects.'
    },
    {
      name: 'Surgical Innovations',
      year: '20th century',
      description: 'Colombian surgeons developed advanced reconstructive surgery techniques, making the country a leader in medical tourism for plastic surgery.'
    },
  ],
  mustVisit: [
    { name: 'Cartagena', description: 'Stunning colonial walled city on the Caribbean coast with colorful buildings, historic fortresses, and vibrant nightlife.' },
    { name: 'Coffee Region (Eje Cafetero)', description: 'Lush valleys with coffee plantations, charming towns like Salento, and the towering wax palms of Cocora Valley.' },
    { name: 'Tayrona National Park', description: 'Pristine Caribbean beaches backed by jungle-covered mountains, archaeological sites, and diverse wildlife.' },
    { name: 'Lost City (Ciudad Perdida)', description: 'Ancient archaeological site in Sierra Nevada, older than Machu Picchu, reached by challenging multi-day trek.' },
    { name: 'Medellín', description: 'Transformed city of eternal spring with innovative metro system, vibrant culture, and surrounding pueblos like Guatapé.' }
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
    imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80',
  },
  dessert: {
    id: 'colombia-dessert',
    name: 'Arequipe with Obleas',
    description: 'Thin crispy wafers filled with dulce de leche (arequipe), a beloved Colombian street food dessert',
    cookingTime: 90,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Sweetened condensed milk', amount: 400, unit: 'g' },
      { name: 'Whole milk', amount: 500, unit: 'ml' },
      { name: 'Sugar', amount: 150, unit: 'g' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'Baking soda', amount: 0.25, unit: 'tsp' },
      { name: 'Wafer cookies (obleas)', amount: 16, unit: 'pieces' },
      { name: 'Shredded cheese (optional)', amount: 100, unit: 'g' },
    ],
    steps: [
      'In heavy-bottomed pot, combine condensed milk, whole milk, and sugar',
      'Cook on medium heat, stirring constantly',
      'Add baking soda and vanilla',
      'Continue cooking and stirring for 60-75 minutes',
      'Mixture should turn golden brown and thicken to caramel consistency',
      'Remove from heat and let cool slightly',
      'Spread arequipe generously on one oblea',
      'Optional: sprinkle with shredded cheese',
      'Top with another oblea to make sandwich',
      'Serve immediately while crispy',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80',
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
    {
      id: 'colombia-q4',
      question: 'When did Colombia gain independence?',
      options: ['1810', '1819', '1825', '1830'],
      correctAnswer: 1,
    },
    {
      id: 'colombia-q5',
      question: 'What is Colombia\'s ranking for biodiversity?',
      options: ['First', 'Second', 'Third', 'Fifth'],
      correctAnswer: 1,
    },
    {
      id: 'colombia-q6',
      question: 'Which liberator led Colombia to independence?',
      options: ['José de San Martín', 'Simón Bolívar', 'Che Guevara', 'Bernardo O\'Higgins'],
      correctAnswer: 1,
    },
    {
      id: 'colombia-q7',
      question: 'What is the Colombian anise-flavored liquor called?',
      options: ['Tequila', 'Pisco', 'Aguardiente', 'Cachaça'],
      correctAnswer: 2,
    },
    {
      id: 'colombia-q8',
      question: 'Which city is known as the salsa capital of Colombia?',
      options: ['Bogotá', 'Cartagena', 'Cali', 'Medellín'],
      correctAnswer: 2,
    },
    {
      id: 'colombia-q9',
      question: 'What is the Lost City (Ciudad Perdida) older than?',
      options: ['The pyramids', 'Machu Picchu', 'The Colosseum', 'Angkor Wat'],
      correctAnswer: 1,
    },
    {
      id: 'colombia-q10',
      question: 'How many species of birds are found in Colombia?',
      options: ['Over 500', 'Over 1,000', 'Over 1,900', 'Over 3,000'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 22, y: 20 },
};
