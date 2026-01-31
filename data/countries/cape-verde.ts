import { Country } from '@/types';

export const capeVerde: Country = {
  id: 'cape-verde',
  name: 'Cape Verde',
  code: 'CV',
  continent: 'Africa',
  flag: '🇨🇻',
  landscapeImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
  description: 'Cape Verde is an island nation off the coast of West Africa, known for its Creole Portuguese-African culture, pristine beaches, and unique music.',
  quickFacts: [
    { label: 'Capital', value: 'Praia' },
    { label: 'Population', value: '560,000' },
    { label: 'Official Language', value: 'Portuguese' },
    { label: 'Currency', value: 'Cape Verdean Escudo' },
    { label: 'Area', value: '4,033 km²' },
  ],
  facts: [
    'Cape Verde consists of 10 volcanic islands',
    'The country was uninhabited until Portuguese discovery in 1456',
    'Morna music from Cape Verde influenced many music genres',
    'Cesária Évora, the "Barefoot Diva", made Cape Verdean music famous worldwide',
    'The islands experience almost year-round sunshine',
    'Cape Verde has one of the most stable democracies in Africa',
    'The country is known for its world-class windsurfing conditions',
    'Fogo volcano last erupted in 2014-2015',
  ],
  foodCulture: 'Cape Verdean cuisine blends Portuguese, West African, and Brazilian influences. Fresh seafood, corn, and beans are staples. Meals are often shared family-style, reflecting the communal culture. Cachupa is the beloved national dish, eaten for breakfast or dinner.',
  history: [
    {
      year: '1456',
      title: 'Portuguese Discovery',
      description: 'Portuguese explorers discovered the uninhabited islands, which became a key trading post for the Atlantic slave trade.'
    },
    {
      year: '1495',
      title: 'Settlement Begins',
      description: 'Portuguese settlers and enslaved Africans began inhabiting the islands, creating a unique Creole culture.'
    },
    {
      year: '1975',
      title: 'Independence',
      description: 'Cape Verde gained independence from Portugal, establishing itself as a sovereign nation.'
    },
    {
      year: '1991',
      title: 'Democratic Transition',
      description: 'The country held its first multi-party elections, becoming one of Africa\'s most stable democracies.'
    },
  ],
  innovations: [
    {
      name: 'Morna Music',
      year: '19th century',
      description: 'Created the haunting Morna music genre, which influenced Brazilian saudade and Portuguese fado, gaining worldwide recognition through Cesária Évora.'
    },
    {
      name: 'Sustainable Desalination',
      year: '2000s',
      description: 'Pioneered solar-powered desalination plants to combat water scarcity, becoming a model for other island nations.'
    },
    {
      name: 'Wind Energy Development',
      year: '2010s',
      description: 'Developed one of Africa\'s first large-scale wind farms, aiming for 100% renewable energy by 2025.'
    },
    {
      name: 'Diaspora Engagement Model',
      year: '1990s',
      description: 'Created innovative programs to engage its large diaspora community (more Cape Verdeans live abroad than at home) in national development.'
    },
  ],
  mustVisit: [
    { name: 'Sal Island', description: 'Famous for pristine beaches, world-class windsurfing and kitesurfing, and the natural salt pans of Pedra de Lume.' },
    { name: 'Fogo Volcano', description: 'Active volcano with lunar landscapes, wine vineyards growing in volcanic soil, and dramatic hiking trails.' },
    { name: 'Mindelo', description: 'Cultural capital on São Vicente island, birthplace of Cesária Évora, with vibrant music scene and colonial architecture.' },
    { name: 'Santo Antão', description: 'Mountainous island with dramatic valleys, terraced agriculture, and spectacular hiking routes through lush landscapes.' },
    { name: 'Boa Vista', description: 'Island with endless white sand beaches, shipwrecks, and sea turtle nesting sites.' }
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Most visitors need a visa, which can be obtained online (e-visa) before travel.' },
    { item: 'Best time to visit', description: 'November to June for dry season and best beach weather. August-October for music festivals.' },
    { item: 'Transportation', description: 'Inter-island flights, ferries (can be unreliable), local taxis called "aluguer", and shared minibuses.' },
    { item: 'Language', description: 'Portuguese is official, but Cape Verdean Creole (Kriolu) is widely spoken. Some English in tourist areas.' },
    { item: 'Safety', description: 'Generally very safe. Exercise normal precautions. Respect local customs and traditions.' },
  ],
  mainDish: {
    id: 'cape-verde-main',
    name: 'Cachupa',
    description: 'National stew with corn, beans, and meat or fish',
    cookingTime: 120,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Corn kernels', amount: 300, unit: 'g' },
      { name: 'Beans', amount: 200, unit: 'g' },
      { name: 'Pork or fish', amount: 500, unit: 'g' },
      { name: 'Sweet potato', amount: 2, unit: 'whole' },
      { name: 'Cassava', amount: 200, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
    ],
    steps: [
      'Soak corn and beans overnight',
      'Cook corn and beans until tender',
      'Add meat or fish and vegetables',
      'Simmer for 2 hours until thick',
      'Season with bay leaves and garlic',
      'Serve hot or fried as Cachupa frita',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600',
  },
  dessert: {
    id: 'cape-verde-dessert',
    name: 'Doce de Papaia',
    description: 'Sweet papaya jam often served with fresh cheese, a beloved Cape Verdean dessert combining Portuguese and tropical influences',
    cookingTime: 90,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Green papaya', amount: 1000, unit: 'g' },
      { name: 'Sugar', amount: 500, unit: 'g' },
      { name: 'Water', amount: 250, unit: 'ml' },
      { name: 'Lemon juice', amount: 50, unit: 'ml' },
      { name: 'Cinnamon stick', amount: 1, unit: 'piece' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'Fresh cheese (queijo fresco)', amount: 200, unit: 'g' },
    ],
    steps: [
      'Peel and seed the green papaya',
      'Cut papaya into small cubes or strips',
      'Soak papaya in water overnight to remove bitterness',
      'Drain and rinse papaya thoroughly',
      'In a large pot, combine sugar and water to make syrup',
      'Add papaya, cinnamon stick, and lemon juice',
      'Cook on medium heat, stirring occasionally, for 60-75 minutes',
      'Mixture should become thick and translucent',
      'Add vanilla extract and remove from heat',
      'Cool and serve with sliced fresh cheese',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1587241321921-91ffe2909df2?w=600',
  },
  drinks: {
    alcoholic: 'Grogue (sugarcane rum), Strela beer',
    nonAlcoholic: 'Grogue with honey, Fresh fruit juice',
  },
  music: [
    'Morna',
    'Coladeira',
    'Cesária Évora classics',
    'Funaná',
  ],
  decorationIdeas: [
    'Blue, white, red and yellow flag colors',
    'Ocean and beach themes',
    'Portuguese tiles',
    'Musical instruments',
  ],
  conversationStarters: [
    'Have you heard of Cesária Évora?',
    'What do you know about African island nations?',
    'Do you enjoy world music?',
  ],
  quiz: [
    {
      id: 'cape-verde-q1',
      question: 'What is the capital of Cape Verde?',
      options: ['Praia', 'Mindelo', 'Santa Maria', 'Sal'],
      correctAnswer: 0,
    },
    {
      id: 'cape-verde-q2',
      question: 'How many islands make up Cape Verde?',
      options: ['5', '10', '15', '20'],
      correctAnswer: 1,
    },
    {
      id: 'cape-verde-q3',
      question: 'What is the official language of Cape Verde?',
      options: ['Spanish', 'French', 'Portuguese', 'English'],
      correctAnswer: 2,
    },
    {
      id: 'cape-verde-q4',
      question: 'Which famous singer is known as the "Barefoot Diva" from Cape Verde?',
      options: ['Miriam Makeba', 'Cesária Évora', 'Angélique Kidjo', 'Sade'],
      correctAnswer: 1,
    },
    {
      id: 'cape-verde-q5',
      question: 'What is the national dish of Cape Verde?',
      options: ['Feijoada', 'Cachupa', 'Jollof Rice', 'Couscous'],
      correctAnswer: 1,
    },
    {
      id: 'cape-verde-q6',
      question: 'When did Cape Verde gain independence?',
      options: ['1965', '1970', '1975', '1980'],
      correctAnswer: 2,
    },
    {
      id: 'cape-verde-q7',
      question: 'What type of music originated in Cape Verde?',
      options: ['Salsa', 'Morna', 'Samba', 'Reggae'],
      correctAnswer: 1,
    },
    {
      id: 'cape-verde-q8',
      question: 'Which island is home to an active volcano?',
      options: ['Sal', 'Fogo', 'Boa Vista', 'Santiago'],
      correctAnswer: 1,
    },
    {
      id: 'cape-verde-q9',
      question: 'Cape Verde is known for being ideal for which water sport?',
      options: ['Surfing', 'Windsurfing', 'Scuba diving', 'Water polo'],
      correctAnswer: 1,
    },
    {
      id: 'cape-verde-q10',
      question: 'Who discovered Cape Verde in 1456?',
      options: ['Spanish explorers', 'Dutch traders', 'Portuguese explorers', 'British sailors'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 42, y: 28 },
};
