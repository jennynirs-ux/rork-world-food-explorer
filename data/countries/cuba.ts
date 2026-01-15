import { Country } from '@/types';

export const cuba: Country = {
  id: 'cuba',
  name: 'Cuba',
  code: 'CU',
  continent: 'North America',
  flag: '🇨🇺',
  landscapeImage: 'https://images.unsplash.com/photo-1500759285222-a95626b934cb?w=800',
  description: 'Cuba is the largest Caribbean island, known for its pristine beaches, Spanish colonial architecture, vintage cars, cigars, and rich musical heritage. Havana, its capital, is famous for colorful buildings and classic American cars.',
  quickFacts: [
    { label: 'Capital', value: 'Havana' },
    { label: 'Population', value: '11.3 million' },
    { label: 'Official Language', value: 'Spanish' },
    { label: 'Currency', value: 'Cuban Peso (CUP)' },
    { label: 'Area', value: '109,884 km²' },
  ],
  facts: [
    'Cuba has one of the world\'s highest literacy rates at 99.8%',
    'The country is famous for its vintage 1950s American cars',
    'Cuban cigars are considered the finest in the world',
    'Baseball is the national sport, not soccer',
    'Cuba has nine UNESCO World Heritage Sites',
    'The island is home to the smallest bird in the world, the bee hummingbird',
  ],
  foodCulture: 'Cuban cuisine blends Spanish, African, and Caribbean influences. Rice and beans are staples, often accompanied by pork or chicken. The food is flavorful but less spicy than other Caribbean cuisines, with citrus and garlic as key flavor bases.',
  history: [
    {
      year: '1492',
      title: 'Columbus Arrives',
      description: 'Christopher Columbus claimed Cuba for Spain, beginning over 400 years of Spanish colonial rule.'
    },
    {
      year: '1959',
      title: 'Cuban Revolution',
      description: 'Fidel Castro led a revolution that overthrew the Batista government, establishing a socialist state.'
    },
    {
      year: '1962',
      title: 'Cuban Missile Crisis',
      description: 'A 13-day confrontation between the US and Soviet Union that brought the world to the brink of nuclear war.'
    },
  ],
  innovations: [
    {
      name: 'Lung Cancer Vaccine',
      year: '2011',
      description: 'Cuban scientists developed CimaVax, a therapeutic vaccine for lung cancer.'
    },
    {
      name: 'Meningitis B Vaccine',
      year: '1980s',
      description: 'Cuba was the first country to develop an effective vaccine against Meningitis B.'
    },
  ],
  mustVisit: [
    { name: 'Old Havana', description: 'Historic colonial district with Spanish architecture and vintage cars.' },
    { name: 'Viñales Valley', description: 'Stunning countryside with tobacco farms and limestone cliffs.' },
    { name: 'Trinidad', description: 'Perfectly preserved colonial town, a UNESCO World Heritage site.' },
    { name: 'Varadero Beach', description: '20km of white sand beaches with crystal-clear waters.' },
    { name: 'Malecón', description: 'Famous seaside promenade in Havana, the heart of the city.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'November-April for dry season, avoid hurricane season.' },
    { item: 'Cash (Euros or Canadian Dollars)', description: 'US cards don\'t work; bring cash to exchange.' },
    { item: 'Tourist card (visa)', description: 'Required for entry, available at airport or through airlines.' },
    { item: 'Spanish phrasebook', description: 'English is not widely spoken outside tourist areas.' },
  ],
  mainDish: {
    id: 'cuba-main',
    name: 'Ropa Vieja',
    description: 'Shredded beef stewed in tomato sauce, Cuba\'s national dish',
    cookingTime: 180,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Flank steak', amount: 1000, unit: 'g' },
      { name: 'Bell peppers', amount: 2, unit: 'large' },
      { name: 'Onions', amount: 2, unit: 'large' },
      { name: 'Tomato sauce', amount: 400, unit: 'ml' },
      { name: 'Garlic', amount: 6, unit: 'cloves' },
      { name: 'Cumin', amount: 1, unit: 'tbsp' },
      { name: 'White wine', amount: 200, unit: 'ml' },
      { name: 'Bay leaves', amount: 2, unit: 'pieces' },
    ],
    steps: [
      'Boil beef with bay leaves until tender (2 hours), reserve broth',
      'Shred cooked beef with forks',
      'Sauté onions, peppers, and garlic until soft',
      'Add tomato sauce, cumin, wine, and some broth',
      'Add shredded beef, simmer for 30 minutes',
      'Serve over white rice with black beans and plantains',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600',
  },
  dessert: {
    id: 'cuba-dessert',
    name: 'Flan Cubano',
    description: 'Creamy caramel custard, a beloved Cuban dessert',
    cookingTime: 75,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Sugar', amount: 300, unit: 'g' },
      { name: 'Eggs', amount: 6, unit: 'large' },
      { name: 'Condensed milk', amount: 400, unit: 'ml' },
      { name: 'Evaporated milk', amount: 350, unit: 'ml' },
      { name: 'Vanilla extract', amount: 2, unit: 'tsp' },
      { name: 'Lime zest', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Melt 150g sugar in pan until golden for caramel',
      'Pour caramel into flan mold, coating bottom',
      'Blend eggs, both milks, remaining sugar, vanilla, and lime zest',
      'Pour mixture over caramel in mold',
      'Place mold in water bath, bake at 180°C for 60 minutes',
      'Cool completely, then refrigerate for 4 hours',
      'Invert onto plate to serve',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600',
  },
  drinks: {
    alcoholic: 'Mojito, Cuba Libre, Daiquiri, Havana Club rum',
    nonAlcoholic: 'Guarapo (sugarcane juice), Cuban coffee, Malta (malt beverage), Batido (fruit shake)',
  },
  music: [
    'Guantanamera - Traditional Cuban song',
    'Chan Chan - Buena Vista Social Club',
    'El Cuarto de Tula - Buena Vista Social Club',
    'Son Cubano - Traditional genre',
  ],
  decorationIdeas: [
    'Vintage Cuban posters',
    'Bright tropical colors',
    'Cigar boxes and Cuban memorabilia',
    'Cuban flag colors (blue, white, red)',
    'Classic car decorations',
  ],
  conversationStarters: [
    'Have you ever tried a real Cuban mojito?',
    'What do you know about Cuban music?',
    'Would you like to visit Havana?',
    'What\'s your favorite Cuban dish?',
  ],
  quiz: [
    {
      id: 'cuba-q1',
      question: 'What is Cuba\'s national dish?',
      options: ['Paella', 'Ropa Vieja', 'Ceviche', 'Tacos'],
      correctAnswer: 1,
    },
    {
      id: 'cuba-q2',
      question: 'What is Cuba\'s capital city?',
      options: ['Santiago', 'Havana', 'Trinidad', 'Varadero'],
      correctAnswer: 1,
    },
    {
      id: 'cuba-q3',
      question: 'What type of cars is Cuba famous for?',
      options: ['Modern electric cars', 'Vintage 1950s American cars', 'Japanese sports cars', 'German luxury cars'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 21, y: 30 },
};
