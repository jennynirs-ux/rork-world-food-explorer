import { Country } from '@/types';

export const peru: Country = {
  id: 'peru',
  name: 'Peru',
  code: 'PE',
  continent: 'South America',
  flag: '🇵🇪',
  landscapeImage: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80',
  description: 'Peru is a country in South America that\'s home to a section of Amazon rainforest and Machu Picchu, an ancient Incan city high in the Andes mountains.',
  quickFacts: [
    { label: 'Capital', value: 'Lima' },
    { label: 'Population', value: '33.7 million' },
    { label: 'Official Language', value: 'Spanish, Quechua, Aymara' },
    { label: 'Currency', value: 'Sol (S/)' },
    { label: 'Area', value: '1,285,216 km²' },
  ],
  facts: [
    'Peru is home to Machu Picchu, one of the New Seven Wonders of the World',
    'The Amazon River begins in Peru',
    'Peru has over 3,000 varieties of potatoes',
    'The Nazca Lines are ancient geoglyphs visible only from the air',
    'Peruvian cuisine is considered one of the best in the world',
    'Lake Titicaca is the highest navigable lake in the world',
    'The Inca Empire was the largest empire in pre-Columbian America',
    'Peru has 12 UNESCO World Heritage Sites',
  ],
  foodCulture: 'Peruvian cuisine is a fusion of indigenous Incan traditions, Spanish colonial influence, and immigrant cultures. Ceviche, the national dish, showcases fresh seafood marinated in citrus. Lima has become a global culinary capital.',
  history: [
    {
      year: '1200-1533',
      title: 'Inca Empire',
      description: 'The Inca civilization flourished, building Machu Picchu and creating a vast empire across the Andes.'
    },
    {
      year: '1533',
      title: 'Spanish Conquest',
      description: 'Francisco Pizarro conquered the Inca Empire, beginning Spanish colonial rule that lasted nearly 300 years.'
    },
    {
      year: '1821',
      title: 'Independence',
      description: 'Peru declared independence from Spain, led by José de San Martín and Simón Bolívar.'
    },
    {
      year: '1911',
      title: 'Machu Picchu Discovery',
      description: 'American historian Hiram Bingham brought international attention to Machu Picchu.'
    },
  ],
  innovations: [
    {
      name: 'Terrace Farming',
      year: '1200s',
      description: 'The Incas perfected agricultural terraces to grow crops in the steep Andes mountains.'
    },
    {
      name: 'Freeze-Drying Food',
      year: 'Ancient',
      description: 'Incas invented chuño, freeze-dried potatoes, by using high altitude freezing nights and hot days.'
    },
    {
      name: 'Quipu System',
      year: '1400s',
      description: 'A recording device using knotted strings for accounting and record-keeping.'
    },
  ],
  mustVisit: [
    { name: 'Machu Picchu', description: 'Ancient Incan citadel set high in the Andes Mountains, one of the most iconic archaeological sites in the world.' },
    { name: 'Sacred Valley', description: 'Stunning valley near Cusco with Incan ruins, traditional villages, and breathtaking mountain scenery.' },
    { name: 'Lake Titicaca', description: 'The highest navigable lake in the world with floating reed islands and indigenous communities.' },
    { name: 'Rainbow Mountain', description: 'Vinicunca mountain with naturally colored mineral stripes creating a rainbow effect.' },
    { name: 'Amazon Rainforest', description: 'Peruvian Amazon offers incredible biodiversity and indigenous culture experiences.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'May-September for dry season in the Andes; year-round for Amazon and coast.' },
    { item: 'Altitude sickness medication', description: 'Essential for high-altitude areas like Cusco and Puno.' },
    { item: 'Layers of clothing', description: 'Temperature varies greatly from hot days to cold nights in the mountains.' },
    { item: 'Sun protection', description: 'UV rays are intense at high altitudes.' },
    { item: 'Cash in local currency', description: 'Many places don\'t accept cards, especially in rural areas.' },
    { item: 'Water purification', description: 'Drink bottled water to avoid altitude sickness complications.' }
  ],
  mainDish: {
    id: 'peru-main',
    name: 'Ceviche',
    description: 'Fresh raw fish marinated in citrus juices, typically lime, and spiced with chili peppers',
    cookingTime: 20,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'Fresh white fish (sea bass or sole)', amount: 500, unit: 'g' },
      { name: 'Fresh lime juice', amount: 150, unit: 'ml' },
      { name: 'Red onion', amount: 1, unit: 'medium' },
      { name: 'Ají amarillo (yellow chili)', amount: 1, unit: 'piece' },
      { name: 'Cilantro', amount: 3, unit: 'tbsp' },
      { name: 'Sweet potato', amount: 2, unit: 'medium' },
      { name: 'Corn on the cob', amount: 2, unit: 'pieces' },
      { name: 'Salt and pepper', amount: 1, unit: 'to taste' },
    ],
    steps: [
      'Cut fish into small cubes, about 1cm each',
      'Thinly slice red onion and soak in cold water for 10 minutes to reduce sharpness',
      'Finely chop ají amarillo and cilantro',
      'Mix fish with lime juice, ensuring all pieces are covered',
      'Add onion, chili, cilantro, salt and pepper',
      'Let marinate for 5-10 minutes until fish turns opaque',
      'Boil sweet potato and corn separately',
      'Serve ceviche immediately with sweet potato and corn on the side',
    ],
    imageUrl: 'https://images.pexels.com/photos/35800557/pexels-photo-35800557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  dessert: {
    id: 'peru-dessert',
    name: 'Alfajores',
    description: 'Delicate shortbread cookies sandwiched with dulce de leche and dusted with powdered sugar',
    cookingTime: 45,
    servings: 20,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Cornstarch', amount: 200, unit: 'g' },
      { name: 'All-purpose flour', amount: 150, unit: 'g' },
      { name: 'Butter', amount: 200, unit: 'g' },
      { name: 'Sugar', amount: 100, unit: 'g' },
      { name: 'Egg yolks', amount: 3, unit: 'pieces' },
      { name: 'Dulce de leche', amount: 300, unit: 'g' },
      { name: 'Powdered sugar', amount: 50, unit: 'g' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Mix butter and sugar until creamy',
      'Add egg yolks and vanilla, beat well',
      'Sift together cornstarch and flour, add to mixture',
      'Form dough and refrigerate for 30 minutes',
      'Roll out dough to 5mm thickness',
      'Cut circles with cookie cutter',
      'Bake at 180°C for 12-15 minutes until edges are golden',
      'Cool completely, then sandwich cookies with dulce de leche',
      'Dust with powdered sugar',
    ],
    imageUrl: 'https://images.pexels.com/photos/16522216/pexels-photo-16522216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  drinks: {
    alcoholic: 'Pisco Sour, Chilcano, Cusqueña beer',
    nonAlcoholic: 'Chicha morada, Inca Kola, Coca tea, Fresh fruit juices',
  },
  music: [
    'El Cóndor Pasa',
    'Traditional Andean pan flute music',
    'Marinera dance music',
    'Vals Peruano',
  ],
  decorationIdeas: [
    'Colorful Peruvian textiles and weavings',
    'Alpaca wool blankets',
    'Ceramic pottery with Incan designs',
    'Red and white colors (Peruvian flag)',
    'Llama and alpaca figurines',
  ],
  conversationStarters: [
    'Have you ever hiked to Machu Picchu?',
    'What\'s your favorite Peruvian dish?',
    'Would you like to explore the Amazon rainforest?',
    'Have you tried a Pisco Sour?',
    'Which interests you more: Incan history or Peruvian cuisine?',
  ],
  quiz: [
    {
      id: 'peru-q1',
      question: 'What is the capital of Peru?',
      options: ['Cusco', 'Lima', 'Arequipa', 'Trujillo'],
      correctAnswer: 1,
    },
    {
      id: 'peru-q2',
      question: 'Which civilization built Machu Picchu?',
      options: ['Maya', 'Aztec', 'Inca', 'Olmec'],
      correctAnswer: 2,
    },
    {
      id: 'peru-q3',
      question: 'What is Peru\'s national dish?',
      options: ['Tacos', 'Ceviche', 'Empanadas', 'Paella'],
      correctAnswer: 1,
    },
    {
      id: 'peru-q4',
      question: 'What drink is Peru famous for?',
      options: ['Tequila', 'Caipirinha', 'Pisco Sour', 'Mojito'],
      correctAnswer: 2,
    },
    {
      id: 'peru-q5',
      question: 'How many varieties of potatoes does Peru have?',
      options: ['500', '1,000', '3,000', '5,000'],
      correctAnswer: 2,
    },
    {
      id: 'peru-q6',
      question: 'What lake is the highest navigable lake in the world?',
      options: ['Lake Superior', 'Lake Baikal', 'Lake Titicaca', 'Lake Victoria'],
      correctAnswer: 2,
    },
    {
      id: 'peru-q7',
      question: 'What ancient geoglyphs are visible only from the air?',
      options: ['Stonehenge', 'Nazca Lines', 'Pyramids', 'Moai'],
      correctAnswer: 1,
    },
    {
      id: 'peru-q8',
      question: 'In which year did Peru gain independence?',
      options: ['1810', '1821', '1850', '1900'],
      correctAnswer: 1,
    },
    {
      id: 'peru-q9',
      question: 'What is Peru\'s currency?',
      options: ['Peso', 'Sol', 'Real', 'Bolivar'],
      correctAnswer: 1,
    },
    {
      id: 'peru-q10',
      question: 'Where does the Amazon River begin?',
      options: ['Brazil', 'Peru', 'Colombia', 'Ecuador'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 20, y: 15 },
};