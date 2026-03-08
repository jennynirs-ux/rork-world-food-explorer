import { Country } from '@/types';

export const spain: Country = {
  id: 'spain',
  name: 'Spain',
  code: 'ES',
  continent: 'Europe',
  flag: '🇪🇸',
  landscapeImage: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80',
  description:
    'Spain is a vibrant country known for flamenco dancing, bullfighting, and siesta culture. With diverse regions from the beaches of Costa del Sol to the mountains of the Pyrenees, Spain offers rich history and passionate living.',
  quickFacts: [
    { label: 'Capital', value: 'Madrid' },
    { label: 'Population', value: '47.4 million' },
    { label: 'Official Language', value: 'Spanish' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '505,990 km²' },
  ],
  facts: [
    'Spain is the second-largest country in the European Union',
    'Spanish is the second most spoken language in the world by native speakers',
    "Spain produces almost 50% of the world's olive oil",
    'The Spanish national anthem has no words',
    'Spain has the second-highest number of UNESCO World Heritage Sites (49)',
    'Lunch is typically eaten around 2-3 PM, dinner at 9-10 PM',
    'Spain has over 8,000 kilometers of coastline',
    'The Spanish celebrate 14 public holidays a year, more than most countries',
  ],
  foodCulture:
    'Spanish cuisine varies greatly by region but centers around fresh, local ingredients. Tapas culture encourages socializing over small plates. Meals are leisurely affairs, and food is meant to be shared. Olive oil, garlic, and tomatoes feature prominently.',
  history: [
    {
      year: '711-1492',
      title: 'Moorish Spain',
      description:
        'Islamic rule brought architectural marvels like the Alhambra and significant advances in science and culture.',
    },
    {
      year: '1492',
      title: 'Reconquista Complete',
      description:
        'Christians recaptured Granada, ending Muslim rule. Columbus discovered the Americas for Spain.',
    },
    {
      year: '16th-17th Century',
      title: 'Spanish Empire',
      description:
        'Spain became a global superpower, controlling vast territories in the Americas, Europe, and Asia.',
    },
    {
      year: '1975-Present',
      title: 'Modern Democracy',
      description:
        "After Franco's death, Spain transitioned to democracy and joined the European Union in 1986.",
    },
  ],
  innovations: [
    {
      name: 'Autogyro',
      year: '1920',
      description:
        'Juan de la Cierva invented the autogyro, precursor to the modern helicopter.',
    },
    {
      name: 'Mop',
      year: '1956',
      description:
        'Manuel Jalón Corominas invented the modern mop and bucket system.',
    },
    {
      name: 'Stapler',
      year: '1920',
      description:
        'The modern stapler was perfected and commercialized by Spanish engineers.',
    },
    {
      name: 'Space Suit',
      year: '1935',
      description:
        'Emilio Herrera designed one of the first pressurized space suit prototypes.',
    },
  ],
  mustVisit: [
    {
      name: 'La Sagrada Familia',
      description:
        "Gaudí's masterpiece basilica in Barcelona, still under construction after 140+ years.",
    },
    {
      name: 'Alhambra',
      description:
        'Stunning Moorish palace and fortress complex in Granada with intricate Islamic architecture.',
    },
    {
      name: 'Park Güell',
      description:
        'Whimsical public park in Barcelona designed by Antoni Gaudí with colorful mosaics.',
    },
    {
      name: 'Prado Museum',
      description:
        "One of the world's finest art museums in Madrid, featuring works by Velázquez and Goya.",
    },
    {
      name: 'Ibiza',
      description:
        'Mediterranean island famous for beaches, nightlife, and stunning sunsets.',
    },
  ],
  travelEssentials: [
    {
      item: 'Best time to visit',
      description:
        'May-June and September-October for good weather without extreme heat or crowds.',
    },
    {
      item: 'Siesta awareness',
      description:
        'Many shops close 2-5 PM for siesta; plan accordingly.',
    },
    {
      item: 'Comfortable walking shoes',
      description:
        'Spanish cities involve lots of walking and cobblestones.',
    },
    { item: 'Light jacket', description: 'Evenings can be cool even in summer.' },
    {
      item: 'Sunscreen and hat',
      description: 'Spanish sun is intense, especially in summer.',
    },
    {
      item: 'Basic Spanish phrases',
      description: '"Gracias", "Por favor", and "Hola" are appreciated.',
    },
  ],
  mainDish: {
    id: 'spain-main',
    name: 'Paella Valenciana',
    description:
      'Traditional Spanish rice dish from Valencia with chicken, rabbit, and vegetables',
    cookingTime: 60,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Bomba rice', amount: 400, unit: 'g' },
      { name: 'Chicken pieces', amount: 400, unit: 'g' },
      { name: 'Rabbit pieces', amount: 300, unit: 'g' },
      { name: 'Green beans', amount: 200, unit: 'g' },
      { name: 'Garrofó (butter beans)', amount: 150, unit: 'g' },
      { name: 'Tomatoes', amount: 2, unit: 'large' },
      { name: 'Chicken stock', amount: 1200, unit: 'ml' },
      { name: 'Saffron threads', amount: 1, unit: 'pinch' },
      { name: 'Paprika', amount: 1, unit: 'tsp' },
      { name: 'Olive oil', amount: 4, unit: 'tbsp' },
      { name: 'Lemon wedges (to serve)', amount: 1, unit: 'piece' },
    ],
    steps: [
      'Heat olive oil in a large paella pan over medium-high heat',
      'Season and brown chicken and rabbit pieces, then remove',
      'Add green beans and garrofó (butter beans), sauté for 5 minutes',
      'Add grated tomatoes and paprika, cook until thick',
      'Return meat to pan, add rice and stir to coat',
      'Dissolve saffron in hot stock and pour over rice',
      'Bring to a boil, then reduce heat and simmer without stirring',
      'Cook for 15-18 minutes until rice is tender and stock absorbed',
      'Let rest off heat for 5 minutes before serving',
      'Aim for a crispy bottom layer called "socarrat"',
    ],
    imageUrl: 'https://images.pexels.com/photos/4663225/pexels-photo-4663225.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  dessert: {
    id: 'spain-dessert',
    name: 'Churros con Chocolate',
    description:
      'Crispy fried dough pastries served with thick hot chocolate for dipping',
    cookingTime: 30,
    servings: 4,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Water', amount: 250, unit: 'ml' },
      { name: 'Butter', amount: 50, unit: 'g' },
      { name: 'All-purpose flour', amount: 150, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'large' },
      { name: 'Salt', amount: 0.5, unit: 'tsp' },
      { name: 'Sugar for coating', amount: 100, unit: 'g' },
      { name: 'Cinnamon', amount: 1, unit: 'tsp' },
      { name: 'Dark chocolate', amount: 200, unit: 'g' },
      { name: 'Milk', amount: 300, unit: 'ml' },
      { name: 'Cornstarch', amount: 1, unit: 'tbsp' },
    ],
    steps: [
      'Heat water, butter, and salt until butter melts',
      'Remove from heat, add flour all at once and stir vigorously',
      'Let cool slightly, then beat in eggs one at a time',
      'Heat oil to 190°C for frying',
      'Pipe dough through a star tip into hot oil in 15 cm strips',
      'Fry until golden brown, about 2 minutes per side',
      'Drain on paper towels and roll in cinnamon sugar',
      'For chocolate: heat milk and chocolate, whisk in cornstarch',
      'Cook until thick and smooth',
      'Serve churros hot with chocolate for dipping',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Sangria, Rioja wine, Cava, Sherry, Agua de Valencia',
    nonAlcoholic: 'Horchata, Café con leche, Fresh orange juice',
  },
  music: [
    'Malagueña',
    'Asturias - Isaac Albéniz',
    'Concierto de Aranjuez - Joaquín Rodrigo',
    'Bamboleo - Gipsy Kings',
    'Traditional Flamenco guitar',
  ],
  decorationIdeas: [
    'Spanish flag colors (red and yellow)',
    'Flamenco fans and castanets',
    'Colorful Talavera pottery',
    'Bullfighting posters',
    'Mosaic tile patterns inspired by Gaudí',
  ],
  conversationStarters: [
    'Have you experienced Spanish siesta culture?',
    "What's your favorite Spanish dish?",
    'Which Spanish city would you most like to visit?',
    'Have you seen a flamenco performance?',
    'Do you prefer sangria or wine?',
  ],
  quiz: [
    {
      id: 'spain-q1',
      question: 'What is the capital of Spain?',
      options: ['Barcelona', 'Madrid', 'Seville', 'Valencia'],
      correctAnswer: 1,
    },
    {
      id: 'spain-q2',
      question: 'Which architect designed La Sagrada Familia?',
      options: ['Pablo Picasso', 'Salvador Dalí', 'Antoni Gaudí', 'Joan Miró'],
      correctAnswer: 2,
    },
    {
      id: 'spain-q3',
      question: 'What is the traditional afternoon rest called?',
      options: ['Fiesta', 'Siesta', 'Sienna', 'Fiasco'],
      correctAnswer: 1,
    },
    {
      id: 'spain-q4',
      question: 'Which city is famous for the Alhambra?',
      options: ['Granada', 'Toledo', 'Córdoba', 'Salamanca'],
      correctAnswer: 0,
    },
    {
      id: 'spain-q5',
      question: 'What type of rice is traditionally used in paella?',
      options: ['Arborio', 'Basmati', 'Bomba', 'Jasmine'],
      correctAnswer: 2,
    },
    {
      id: 'spain-q6',
      question: 'What is the Spanish word for a tapas bar crawl?',
      options: ['Fiesta', 'Siesta', 'Tapeo', 'Paseo'],
      correctAnswer: 2,
    },
    {
      id: 'spain-q7',
      question: 'Which painter created "Guernica"?',
      options: ['Salvador Dalí', 'Pablo Picasso', 'Joan Miró', 'Diego Velázquez'],
      correctAnswer: 1,
    },
    {
      id: 'spain-q8',
      question: 'What is the running of the bulls festival called?',
      options: ['La Tomatina', 'San Fermín', 'Feria de Abril', 'Las Fallas'],
      correctAnswer: 1,
    },
    {
      id: 'spain-q9',
      question: 'Which Spanish region is known for producing sherry?',
      options: ['Catalonia', 'Andalusia', 'Basque Country', 'Galicia'],
      correctAnswer: 1,
    },
    {
      id: 'spain-q10',
      question: 'What are churros traditionally dipped in?',
      options: ['Caramel', 'Hot chocolate', 'Honey', 'Dulce de leche'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 45, y: 42 },
};
