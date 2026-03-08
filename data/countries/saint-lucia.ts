import { Country } from '@/types';

export const saintLucia: Country = {
  id: 'saint-lucia',
  name: 'Saint Lucia',
  code: 'LC',
  continent: 'North America',
  flag: '🇱🇨',
  landscapeImage: 'https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?w=800&q=80',
  description:
    'Saint Lucia is a Caribbean island known for the iconic Pitons, volcanic landscapes, lush rainforests, and a vibrant Creole culture. It is famous for scenic drives, warm hospitality, and a mix of French and British colonial heritage.',
  quickFacts: [
    { label: 'Capital', value: 'Castries' },
    { label: 'Population', value: '184,000' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'East Caribbean Dollar (XCD)' },
    { label: 'Area', value: '617 km²' },
  ],
  facts: [
    'The Pitons (Gros Piton and Petit Piton) are a UNESCO World Heritage Site',
    'Saint Lucia is the only country named after a woman (Saint Lucy)',
    'The island has a drive-in volcano area at Sulphur Springs near Soufriere',
    'Saint Lucia has produced two Nobel Prize laureates',
    'Bananas were historically a major export, and agriculture still matters in rural areas',
    'Creole (Kwéyòl) culture is celebrated with music, food, and festivals',
    'The coastline includes volcanic black-sand beaches and golden beaches',
    'The island is known for excellent snorkeling and diving along coral reefs',
  ],
  foodCulture:
    'Saint Lucian cuisine blends African, French, and Caribbean influences. Seafood is central, and local staples include green bananas (called "green figs"), breadfruit, cassava, and coconut. Meals are often seasoned with herbs, peppers, and lime, and shared in a relaxed, social way.',

  history: [
    {
      year: '1500s',
      title: 'Early European Contact',
      description:
        'European explorers reached the island during the age of exploration, and Saint Lucia later became a strategic Caribbean prize.',
    },
    {
      year: '1600s-1700s',
      title: 'French and British Rivalry',
      description:
        'France and Britain fought repeatedly for control of Saint Lucia, shaping the islands language, culture, and place names.',
    },
    {
      year: '1814',
      title: 'British Control',
      description:
        'After the Napoleonic era, Saint Lucia became a British colony, and English governance expanded across the island.',
    },
    {
      year: '1958-1962',
      title: 'West Indies Federation',
      description:
        'Saint Lucia joined the short-lived West Indies Federation, an early effort toward Caribbean political unity.',
    },
    {
      year: '1979',
      title: 'Independence',
      description:
        'Saint Lucia gained independence from the United Kingdom while remaining part of the Commonwealth.',
    },
  ],

  innovations: [
    {
      name: 'Economic Development Thought Leadership',
      year: '1979',
      description:
        'Sir Arthur Lewis (born in Saint Lucia) received the Nobel Prize in Economics for influential work on development economics.',
    },
    {
      name: 'Literature and Poetry on the World Stage',
      year: '1992',
      description:
        'Derek Walcott (born in Saint Lucia) won the Nobel Prize in Literature, elevating Caribbean storytelling globally.',
    },
    {
      name: 'Sustainable Tourism Models',
      year: 'Modern',
      description:
        'Saint Lucia has promoted eco-tourism and nature-based travel while protecting flagship landscapes like the Pitons region.',
    },
  ],

  mustVisit: [
    { name: 'The Pitons', description: 'Iconic twin volcanic spires and hiking trails; a UNESCO World Heritage Site.' },
    { name: 'Sulphur Springs', description: 'Volcanic area near Soufriere with warm springs and famous mud baths.' },
    { name: 'Pigeon Island National Park', description: 'Historic fort ruins, viewpoints, and beaches near Gros Islet.' },
    { name: 'Diamond Falls Botanical Gardens', description: 'Mineral-fed waterfall and lush tropical gardens.' },
    { name: 'Marigot Bay', description: 'A postcard-perfect harbor surrounded by green hills and calm waters.' },
  ],

  travelEssentials: [
    { item: 'Best time to visit', description: 'December to April for drier weather; late summer can be wetter and stormier.' },
    { item: 'Currency', description: 'East Caribbean Dollar (XCD). US dollars are often accepted in tourist areas.' },
    { item: 'Getting around', description: 'Taxis and minibuses are common. Renting a car helps, but roads can be narrow and winding.' },
    { item: 'What to pack', description: 'Light layers, rain cover, reef-safe sunscreen, and comfortable shoes for hikes.' },
    { item: 'Local language', description: 'English is official; you will also hear Saint Lucian Creole (Kwéyòl).' },
    { item: 'Safety', description: 'Generally safe; use standard precautions, especially at night in busy areas.' },
  ],

  mainDish: {
    id: 'saint-lucia-main',
    name: 'Green Fig and Saltfish',
    description:
      'Saint Lucia national dish: tender green bananas (called "green figs") served with sautéed salted cod, peppers, tomatoes, and herbs.',
    cookingTime: 60,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'Green bananas (unripe)', amount: 8, unit: 'pieces' },
      { name: 'Salted cod (saltfish)', amount: 450, unit: 'g' },
      { name: 'Onion, sliced', amount: 1, unit: 'large' },
      { name: 'Bell pepper, sliced', amount: 1, unit: 'piece' },
      { name: 'Tomatoes, diced', amount: 2, unit: 'pieces' },
      { name: 'Garlic cloves, minced', amount: 3, unit: 'cloves' },
      { name: 'Thyme (fresh or dried)', amount: 1, unit: 'tsp' },
      { name: 'Lime', amount: 1, unit: 'piece' },
      { name: 'Vegetable oil (or coconut oil)', amount: 2, unit: 'tbsp' },
      { name: 'Black pepper', amount: 0.5, unit: 'tsp' },
    ],
    steps: [
      'Desalt the cod: soak saltfish in cold water for 6-12 hours (or overnight), changing water 2-3 times. Rinse well.',
      'Simmer saltfish 10 minutes, drain, then flake into bite-size pieces. Remove any bones.',
      'Prepare green figs: trim ends of green bananas, cut a shallow slit down the peel, and boil in salted water 15-20 minutes until tender.',
      'Drain bananas, cool slightly, peel, and set aside.',
      'In a pan, heat oil over medium heat. Saute onion and bell pepper for 4-5 minutes until softened.',
      'Add garlic and thyme; cook 30 seconds. Add tomatoes and cook 3-4 minutes until saucy.',
      'Add flaked saltfish and black pepper; toss gently for 3-5 minutes until heated through.',
      'Finish with a squeeze of lime and serve alongside the boiled green figs. Optional: serve with avocado or a simple salad.',
    ],
    imageUrl: 'https://images.pexels.com/photos/30350304/pexels-photo-30350304.jpeg?auto=compress&cs=tinysrgb&h=350',
  },

  dessert: {
    id: 'saint-lucia-dessert',
    name: 'Coconut Tart',
    description:
      'A sweet Caribbean-style coconut tart with a tender crust and rich coconut filling, often flavored with vanilla and warm spices.',
    cookingTime: 60,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Shortcrust pastry (ready-made or homemade)', amount: 400, unit: 'g' },
      { name: 'Desiccated coconut', amount: 250, unit: 'g' },
      { name: 'Sugar', amount: 180, unit: 'g' },
      { name: 'Eggs', amount: 3, unit: 'large' },
      { name: 'Milk (or coconut milk)', amount: 200, unit: 'ml' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'Ground nutmeg', amount: 0.5, unit: 'tsp' },
      { name: 'Pinch of salt', amount: 1, unit: 'pinch' },
    ],
    steps: [
      'Preheat oven to 175°C.',
      'Roll pastry and line a tart pan (about 24 cm). Prick the base with a fork.',
      'In a bowl, mix coconut, sugar, nutmeg, and salt.',
      'Whisk eggs, milk, and vanilla together, then stir into the coconut mixture.',
      'Pour filling into the pastry shell and smooth the top.',
      'Bake 35-45 minutes until set and golden at the edges.',
      'Cool at least 20 minutes before slicing. Serve plain or with fresh fruit.',
    ],
    imageUrl: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&h=350',
  },

  drinks: {
    alcoholic: 'Spiced rum, Rum punch, Local beers',
    nonAlcoholic: 'Coconut water, Sorrel drink, Fresh passion fruit juice, Ginger tea',
  },
  music: ['Calypso', 'Soca', 'Zouk', 'Reggae', 'Creole folk styles'],
  decorationIdeas: [
    'Blue, yellow, black, and white (flag colors)',
    'Pitons mountain silhouettes on table cards or prints',
    'Tropical flowers (hibiscus, bird-of-paradise)',
    'Bamboo, rattan, and natural textures',
    'Volcanic stone and black-sand accents',
  ],
  conversationStarters: [
    'Would you hike Gros Piton or relax at a volcanic beach?',
    'Have you tried Caribbean saltfish dishes before?',
    'What is your dream tropical activity: snorkeling, rainforest hike, or sunset cruise?',
    'Do you like spicy food, or do you prefer milder island flavors?',
    'If you visited Saint Lucia, would you stay near the Pitons or closer to Castries?',
  ],

  quiz: [
    {
      id: 'saint-lucia-q1',
      question: 'What is the capital of Saint Lucia?',
      options: ['Castries', 'Soufriere', 'Gros Islet', 'Vieux Fort'],
      correctAnswer: 0,
    },
    {
      id: 'saint-lucia-q2',
      question: 'What are the Pitons?',
      options: ['Twin volcanic mountains', 'Coral reefs', 'A waterfall', 'A beach festival'],
      correctAnswer: 0,
    },
    {
      id: 'saint-lucia-q3',
      question: 'Which currency is used in Saint Lucia?',
      options: ['US Dollar (USD)', 'Euro (EUR)', 'East Caribbean Dollar (XCD)', 'Pound Sterling (GBP)'],
      correctAnswer: 2,
    },
    {
      id: 'saint-lucia-q4',
      question: 'What is the official language of Saint Lucia?',
      options: ['French', 'English', 'Spanish', 'Portuguese'],
      correctAnswer: 1,
    },
    {
      id: 'saint-lucia-q5',
      question: 'Saint Lucia is in which region?',
      options: ['Caribbean', 'Baltic', 'Middle East', 'East Asia'],
      correctAnswer: 0,
    },
    {
      id: 'saint-lucia-q6',
      question: 'In Saint Lucian cuisine, what are "green figs"?',
      options: ['Unripe bananas', 'Green apples', 'Actual figs', 'Plant leaves'],
      correctAnswer: 0,
    },
    {
      id: 'saint-lucia-q7',
      question: 'In which year did Saint Lucia gain independence?',
      options: ['1962', '1979', '1989', '1995'],
      correctAnswer: 1,
    },
    {
      id: 'saint-lucia-q8',
      question: 'Which famous natural attraction is known for mud baths and geothermal activity?',
      options: ['Sulphur Springs', 'Marigot Bay', 'Pigeon Island', 'Diamond Falls'],
      correctAnswer: 0,
    },
    {
      id: 'saint-lucia-q9',
      question: 'How many Nobel Prize laureates has Saint Lucia produced?',
      options: ['0', '1', '2', '4'],
      correctAnswer: 2,
    },
    {
      id: 'saint-lucia-q10',
      question: 'Which dish is widely recognized as Saint Lucia national dish?',
      options: ['Green Fig and Saltfish', 'Jerk Chicken', 'Paella', 'Pho'],
      correctAnswer: 0,
    },
  ],

  coordinates: { x: 26, y: 25 },
};
