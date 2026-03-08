import { Country } from '@/types';

export const saintKittsAndNevis: Country = {
  id: 'saint-kitts-and-nevis',
  name: 'Saint Kitts and Nevis',
  code: 'KN',
  continent: 'North America',
  flag: '🇰🇳',
  landscapeImage: 'https://images.unsplash.com/photo-1580541631950-7282082b04f4?w=800&q=80',
  description:
    'Saint Kitts and Nevis is a dual-island Caribbean nation known for lush volcanic peaks, beaches, and colonial-era forts. The islands blend Creole culture, rainforest hikes, and a relaxed seaside rhythm.',
  quickFacts: [
    { label: 'Capital', value: 'Basseterre' },
    { label: 'Population', value: '53,000' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'East Caribbean Dollar (XCD)' },
    { label: 'Area', value: '261 km²' },
  ],
  facts: [
    'Saint Kitts and Nevis is often described as the smallest sovereign state in the Western Hemisphere by area',
    'Brimstone Hill Fortress National Park is a UNESCO World Heritage Site',
    'Mount Liamuiga is a dormant volcano and the highest point on Saint Kitts',
    'The St Kitts Scenic Railway was built for the sugar industry and later became a major tourist attraction',
    'Carnival and music traditions include calypso, soca, and steelpan',
    'Nevis is known for hot springs and historic plantation estates',
    'The islands have a long history of sugarcane cultivation',
    'Independence from the United Kingdom was achieved in 1983',
  ],
  foodCulture:
    'Kittitian and Nevisian cuisine blends African, British, and Creole influences. Seafood, salted fish, stews, rice and peas, plantains, and tropical fruits are common. Local meals are often hearty, spicy, and served with dumplings or johnny cakes.',

  history: [
    {
      year: 'Pre-1600s',
      title: 'Indigenous Settlement',
      description:
        'Indigenous peoples lived on the islands for centuries before European colonization, shaping early place names and regional trade routes.',
    },
    {
      year: '1493',
      title: 'European Arrival',
      description:
        'Christopher Columbus reached the region during his second voyage, beginning a new era of European interest in the Caribbean.',
    },
    {
      year: '1620s',
      title: 'British and French Colonization',
      description:
        'European settlements expanded on Saint Kitts, and the islands became strategically important for regional power struggles.',
    },
    {
      year: '1700s',
      title: 'Sugar Plantation Era',
      description:
        'Sugarcane plantations transformed the economy and society, driving major infrastructure development and transatlantic trade.',
    },
    {
      year: '1800s',
      title: 'Fortifications and Imperial Rivalry',
      description:
        'Defensive sites like Brimstone Hill were strengthened as colonial powers competed for Caribbean dominance.',
    },
    {
      year: '1983',
      title: 'Independence',
      description:
        'Saint Kitts and Nevis became an independent nation within the Commonwealth, with Basseterre as the capital.',
    },
  ],

  innovations: [
    {
      name: 'Sugar Railway Engineering',
      year: '1900s',
      description:
        'A narrow-gauge railway network was developed to support sugar production and transport, later adapted into the St Kitts Scenic Railway for tourism.',
    },
    {
      name: 'Citizenship by Investment Program',
      year: '1980s',
      description:
        'Saint Kitts and Nevis pioneered one of the earliest citizenship-by-investment programs, influencing similar economic models worldwide.',
    },
  ],

  mustVisit: [
    {
      name: 'Brimstone Hill Fortress',
      description:
        'UNESCO-listed fortress with panoramic views and a powerful window into colonial Caribbean history.',
    },
    {
      name: 'Mount Liamuiga',
      description:
        'Hike a rainforest trail to the crater rim of the island\'s dramatic volcanic peak.',
    },
    {
      name: 'St Kitts Scenic Railway',
      description:
        'A classic ride around the island built from historic sugar-rail infrastructure.',
    },
    {
      name: 'Nevis Peak',
      description:
        'A lush, cloud-topped mountain offering challenging hikes and big island views.',
    },
    {
      name: 'Pinney\'s Beach (Nevis)',
      description:
        'Long, calm shoreline ideal for swimming, sunset strolls, and beach restaurants.',
    },
  ],

  travelEssentials: [
    {
      item: 'Best time to visit',
      description:
        'December to April is popular for drier weather; late summer can be hotter and more humid.',
    },
    {
      item: 'Currency',
      description:
        'The East Caribbean Dollar (XCD) is standard; cards are common in tourist areas but carry some cash.',
    },
    {
      item: 'Getting around',
      description:
        'Taxis and minibuses are common; renting a car can be convenient for exploring beaches and hikes.',
    },
    {
      item: 'Sun and mosquito protection',
      description:
        'Bring sunscreen and repellent, especially for rainforest hikes and evenings.',
    },
    {
      item: 'Light hiking gear',
      description:
        'For volcanic trails: breathable layers, sturdy shoes, and plenty of water.',
    },
  ],

  mainDish: {
    id: 'saint-kitts-main',
    name: 'Stewed Saltfish',
    description:
      'A Caribbean staple: salted cod simmered with tomatoes, peppers, onions, herbs, and a little heat. Often served with dumplings or johnny cakes.',
    cookingTime: 45,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'Salted codfish', amount: 500, unit: 'g' },
      { name: 'Onion, sliced', amount: 1, unit: 'large' },
      { name: 'Bell peppers, sliced', amount: 2, unit: 'pieces' },
      { name: 'Tomatoes, chopped', amount: 3, unit: 'pieces' },
      { name: 'Garlic cloves, minced', amount: 3, unit: 'cloves' },
      { name: 'Thyme', amount: 4, unit: 'sprigs' },
      { name: 'Scotch bonnet pepper', amount: 1, unit: 'piece' },
      { name: 'Vegetable oil', amount: 2, unit: 'tbsp' },
      { name: 'Black pepper', amount: 0.5, unit: 'tsp' },
      { name: 'Lime juice', amount: 1, unit: 'tbsp' },
    ],
    steps: [
      'Soak saltfish in cold water for 6-12 hours, changing water 2-3 times.',
      'Rinse, then simmer the fish 8-10 minutes to remove excess salt; drain and flake.',
      'Heat oil in a pan and saute onion and bell peppers for 4-5 minutes until softened.',
      'Add garlic and cook 30 seconds until fragrant.',
      'Add tomatoes, thyme, black pepper, and scotch bonnet (whole for mild heat).',
      'Simmer 8-10 minutes until saucy.',
      'Stir in flaked saltfish and simmer 5-7 minutes to blend flavors.',
      'Remove scotch bonnet if used whole; add lime juice.',
      'Taste and adjust (usually no extra salt needed).',
      'Serve warm with dumplings, johnny cakes, or rice.',
    ],
    imageUrl: 'https://images.pexels.com/photos/3628428/pexels-photo-3628428.jpeg?auto=compress&cs=tinysrgb&h=350',
  },

  dessert: {
    id: 'saint-kitts-dessert',
    name: 'Coconut Tart',
    description:
      'A simple Caribbean-style coconut tart with a sweet coconut filling and a lightly crisp pastry crust.',
    cookingTime: 55,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Desiccated coconut', amount: 200, unit: 'g' },
      { name: 'Sugar', amount: 120, unit: 'g' },
      { name: 'Butter, melted', amount: 60, unit: 'g' },
      { name: 'Egg', amount: 1, unit: 'piece' },
      { name: 'Milk', amount: 80, unit: 'ml' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'Pie crust (store-bought or homemade)', amount: 1, unit: 'piece' },
      { name: 'Pinch of salt', amount: 1, unit: 'pinch' },
    ],
    steps: [
      'Preheat oven to 180C and place pie crust in a tart tin.',
      'Mix coconut, sugar, salt, and vanilla in a bowl.',
      'Whisk egg with milk and melted butter, then combine with coconut mixture.',
      'Pour filling into crust and smooth the top.',
      'Bake 30-35 minutes until golden and set.',
      'Cool at least 15 minutes before slicing.',
      'Serve plain or with a little whipped cream.',
    ],
    imageUrl: 'https://images.pexels.com/photos/6378948/pexels-photo-6378948.jpeg?auto=compress&cs=tinysrgb&h=350',
  },

  drinks: {
    alcoholic: 'Local rum, Rum punch, Carib beer',
    nonAlcoholic: 'Fresh fruit juices, Ginger beer, Sorrel drink',
  },

  music: ['Calypso', 'Soca', 'Steelpan', 'Reggae'],

  decorationIdeas: [
    'Green, yellow, red, and black flag colors',
    'Palm leaves and tropical flowers',
    'Volcano and rainforest themes',
    'Seashells and beach lanterns',
    'Colonial fortress silhouettes',
  ],

  conversationStarters: [
    'Would you rather hike a volcano or relax on a Caribbean beach?',
    'Have you ever tried stewed saltfish or Caribbean dumplings?',
    'What is your favorite island music: calypso, soca, or reggae?',
    'Would you visit a historic fortress like Brimstone Hill?',
    'Do you enjoy scenic train rides when traveling?',
  ],

  quiz: [
    {
      id: 'saint-kitts-q1',
      question: 'What is the capital of Saint Kitts and Nevis?',
      options: ['Basseterre', 'Charlestown', 'Bridgetown', 'Castries'],
      correctAnswer: 0,
    },
    {
      id: 'saint-kitts-q2',
      question: 'Saint Kitts and Nevis is best described as a...',
      options: ['Single island nation', 'Dual-island nation', 'Landlocked country', 'Desert kingdom'],
      correctAnswer: 1,
    },
    {
      id: 'saint-kitts-q3',
      question: 'What is the official language of Saint Kitts and Nevis?',
      options: ['Spanish', 'French', 'English', 'Dutch'],
      correctAnswer: 2,
    },
    {
      id: 'saint-kitts-q4',
      question: 'What currency is used in Saint Kitts and Nevis?',
      options: ['US Dollar (USD)', 'East Caribbean Dollar (XCD)', 'Euro (EUR)', 'Jamaican Dollar (JMD)'],
      correctAnswer: 1,
    },
    {
      id: 'saint-kitts-q5',
      question: 'Which UNESCO World Heritage Site is in Saint Kitts?',
      options: ['Machu Picchu', 'Brimstone Hill Fortress', 'Petra', 'The Acropolis'],
      correctAnswer: 1,
    },
    {
      id: 'saint-kitts-q6',
      question: 'What is Mount Liamuiga?',
      options: ['A coral reef', 'A dormant volcano peak', 'A river delta', 'A desert dune'],
      correctAnswer: 1,
    },
    {
      id: 'saint-kitts-q7',
      question: 'In which year did Saint Kitts and Nevis gain independence?',
      options: ['1962', '1973', '1983', '1993'],
      correctAnswer: 2,
    },
    {
      id: 'saint-kitts-q8',
      question: 'Which island is paired with Saint Kitts to form the country?',
      options: ['Nevis', 'Barbuda', 'Tobago', 'Martinique'],
      correctAnswer: 0,
    },
    {
      id: 'saint-kitts-q9',
      question: 'What is a common traditional dish featured in this country file?',
      options: ['Stewed Saltfish', 'Sushi', 'Poutine', 'Paella'],
      correctAnswer: 0,
    },
    {
      id: 'saint-kitts-q10',
      question: 'Which music styles are strongly associated with the Caribbean and common in Saint Kitts and Nevis?',
      options: ['Calypso and Soca', 'K-Pop and J-Pop', 'Flamenco and Fado', 'Polka and Waltz'],
      correctAnswer: 0,
    },
  ],

  coordinates: { x: 26, y: 27 },
};
