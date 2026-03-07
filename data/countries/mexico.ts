import { Country } from '@/types';

export const mexico: Country = {
  id: 'mexico',
  name: 'Mexico',
  code: 'MX',
  continent: 'North America',
  flag: '🇲🇽',
  landscapeImage: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800&q=80',
  description: 'Mexico is a country rich in ancient civilizations, vibrant culture, and diverse landscapes from beaches to mountains. Known for its flavorful cuisine, colorful traditions, and warm hospitality.',
  quickFacts: [
    { label: 'Capital', value: 'Mexico City' },
    { label: 'Population', value: '128.9 million' },
    { label: 'Official Language', value: 'Spanish' },
    { label: 'Currency', value: 'Mexican Peso (MXN)' },
    { label: 'Area', value: '1,964,375 km²' },
  ],
  facts: [
    'Mexico City is built on the ruins of the ancient Aztec city of Tenochtitlan',
    'Mexico is the birthplace of chocolate, corn, and chili peppers',
    'The country has 35 UNESCO World Heritage Sites',
    'Spanish is spoken by 98% of the population',
    'Mexico is home to the world\'s smallest volcano',
    'The Chihuahua dog breed originated in Mexico',
    'Day of the Dead is one of Mexico\'s most important traditions',
    'Mexico has the most taxi cabs in the world',
  ],
  foodCulture: 'Mexican cuisine is incredibly diverse, varying greatly by region. It\'s known for its bold flavors, combining indigenous ingredients like corn, beans, and chili peppers with Spanish influences. Meals are often communal and festive affairs.',
  history: [
    {
      year: '1500 BC - 1521 AD',
      title: 'Pre-Columbian Civilizations',
      description: 'Advanced civilizations including the Maya, Aztec, and Olmec built impressive cities and made significant contributions to astronomy, mathematics, and agriculture.'
    },
    {
      year: '1521-1821',
      title: 'Spanish Colonial Period',
      description: 'Hernán Cortés conquered the Aztec Empire. Mexico became "New Spain," blending Spanish and indigenous cultures over 300 years.'
    },
    {
      year: '1810-1821',
      title: 'War of Independence',
      description: 'Mexico fought for and won independence from Spain, led by figures like Miguel Hidalgo and José María Morelos.'
    },
    {
      year: '1910-1920',
      title: 'Mexican Revolution',
      description: 'Major social and political upheaval that transformed Mexico into a modern nation and inspired land reform and workers\' rights.'
    },
  ],
  innovations: [
    {
      name: 'Color Television',
      year: '1940',
      description: 'Guillermo González Camarena invented the chromoscopic adapter for television equipment, enabling color broadcasting.'
    },
    {
      name: 'Birth Control Pill',
      year: '1951',
      description: 'Luis Miramontes synthesized norethisterone, the first oral contraceptive, revolutionizing reproductive health.'
    },
    {
      name: 'Tortilla Machine',
      year: '1904',
      description: 'Everardo Rodríguez Arce invented the first machine to mass-produce tortillas, preserving this ancient food tradition.'
    },
    {
      name: 'Anti-graffiti coating',
      year: '2005',
      description: 'Mexican scientists developed Deletum 3000, a biodegradable coating that prevents graffiti adhesion.'
    },
  ],
  mustVisit: [
    { name: 'Chichen Itza', description: 'Magnificent Mayan pyramid and one of the New Seven Wonders of the World.' },
    { name: 'Cancún & Riviera Maya', description: 'Stunning Caribbean beaches with turquoise waters and white sand.' },
    { name: 'Mexico City', description: 'Vibrant capital with world-class museums, colonial architecture, and incredible food scene.' },
    { name: 'Copper Canyon', description: 'System of canyons larger and deeper than the Grand Canyon.' },
    { name: 'Oaxaca', description: 'Colonial city known for indigenous culture, crafts, and exceptional cuisine.' }
  ],
  travelEssentials: [
    { item: 'Sunscreen', description: 'Strong sun year-round, especially on coast.' },
    { item: 'Insect repellent', description: 'Protection against mosquitoes in tropical areas.' },
    { item: 'Water bottle', description: 'Stay hydrated, drink bottled or filtered water only.' },
    { item: 'Spanish phrasebook', description: 'English is limited outside tourist areas.' },
    { item: 'Light layers', description: 'Temperatures vary greatly between coast and highlands.' }
  ],
  mainDish: {
    id: 'mexico-main',
    name: 'Chicken Enchiladas',
    description: 'Rolled tortillas filled with chicken and topped with flavorful chili sauce and cheese',
    cookingTime: 45,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken breast', amount: 500, unit: 'g' },
      { name: 'Corn tortillas', amount: 12, unit: 'pieces' },
      { name: 'Red enchilada sauce', amount: 400, unit: 'ml' },
      { name: 'Cheddar cheese', amount: 200, unit: 'g' },
      { name: 'Onion', amount: 1, unit: 'medium' },
      { name: 'Sour cream', amount: 150, unit: 'ml' },
      { name: 'Cilantro', amount: 1, unit: 'bunch' },
      { name: 'Cumin', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Boil chicken breast until cooked through, about 15 minutes',
      'Shred chicken and mix with diced onion, cumin, and half the cheese',
      'Preheat oven to 180°C (350°F)',
      'Warm tortillas to make them pliable',
      'Dip each tortilla in enchilada sauce',
      'Fill with chicken mixture and roll up tightly',
      'Place seam-side down in a baking dish',
      'Pour remaining sauce over enchiladas',
      'Sprinkle with remaining cheese',
      'Bake for 20 minutes until cheese is melted and bubbly',
      'Serve with sour cream and fresh cilantro',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1534352956036-cd81e27dd615?w=800&q=80',
  },
  dessert: {
    id: 'mexico-dessert',
    name: 'Churros with Chocolate',
    description: 'Crispy fried dough coated in cinnamon sugar, served with rich chocolate sauce',
    cookingTime: 40,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Water', amount: 250, unit: 'ml' },
      { name: 'Butter', amount: 60, unit: 'g' },
      { name: 'All-purpose flour', amount: 150, unit: 'g' },
      { name: 'Eggs', amount: 3, unit: 'large' },
      { name: 'Sugar', amount: 100, unit: 'g' },
      { name: 'Cinnamon', amount: 2, unit: 'tsp' },
      { name: 'Dark chocolate', amount: 200, unit: 'g' },
      { name: 'Heavy cream', amount: 150, unit: 'ml' },
      { name: 'Vegetable oil for frying', amount: 1, unit: 'liter' },
    ],
    steps: [
      'Heat water and butter in a saucepan until boiling',
      'Remove from heat and stir in flour until mixture forms a ball',
      'Let cool for 5 minutes, then beat in eggs one at a time',
      'Transfer dough to a piping bag with star tip',
      'Heat oil in a deep pan to 180°C (350°F)',
      'Pipe 15cm strips of dough directly into hot oil',
      'Fry until golden brown, about 2 minutes per side',
      'Drain on paper towels',
      'Mix sugar and cinnamon, roll churros in mixture while warm',
      'For chocolate sauce: heat cream until simmering, pour over chopped chocolate',
      'Stir until smooth and serve warm with churros',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1543364195-bfe6e4932397?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Tequila, Mezcal, Margarita, Michelada, Paloma',
    nonAlcoholic: 'Horchata, Agua Fresca, Mexican Hot Chocolate, Jamaica (Hibiscus Tea)',
  },
  music: [
    'Cielito Lindo',
    'La Bamba - Ritchie Valens',
    'Mariachi music',
    'Bésame Mucho',
    'El Rey - Vicente Fernández',
  ],
  decorationIdeas: [
    'Papel picado (decorative paper banners)',
    'Bright Mexican textiles',
    'Terracotta pots and cacti',
    'Colorful serape table runners',
    'Sugar skull decorations',
  ],
  conversationStarters: [
    'Have you ever celebrated Día de los Muertos?',
    'What\'s your favorite type of Mexican food?',
    'Have you visited any Mayan or Aztec ruins?',
    'Can you handle spicy food?',
    'What Mexican tradition would you like to experience?',
  ],
  quiz: [
    {
      id: 'mexico-q1',
      question: 'What is the capital of Mexico?',
      options: ['Cancún', 'Guadalajara', 'Mexico City', 'Monterrey'],
      correctAnswer: 2,
    },
    {
      id: 'mexico-q2',
      question: 'Which ancient civilization built Chichen Itza?',
      options: ['Aztec', 'Maya', 'Olmec', 'Inca'],
      correctAnswer: 1,
    },
    {
      id: 'mexico-q3',
      question: 'What is the main ingredient in traditional tortillas?',
      options: ['Wheat', 'Corn', 'Rice', 'Potato'],
      correctAnswer: 1,
    },
    {
      id: 'mexico-q4',
      question: 'Which alcoholic beverage is made from agave?',
      options: ['Rum', 'Tequila', 'Vodka', 'Whiskey'],
      correctAnswer: 1,
    },
    {
      id: 'mexico-q5',
      question: 'What does "Día de los Muertos" celebrate?',
      options: ['Independence', 'Harvest', 'Deceased loved ones', 'New Year'],
      correctAnswer: 2,
    },
    {
      id: 'mexico-q6',
      question: 'What is the Mexican peninsula famous for ancient ruins?',
      options: ['Baja California', 'Yucatán', 'Oaxaca', 'Chiapas'],
      correctAnswer: 1,
    },
    {
      id: 'mexico-q7',
      question: 'What is the traditional Mexican sauce made with chocolate and chili?',
      options: ['Salsa', 'Guacamole', 'Mole', 'Pico de gallo'],
      correctAnswer: 2,
    },
    {
      id: 'mexico-q8',
      question: 'Which famous Mexican artist was known for her self-portraits?',
      options: ['Diego Rivera', 'Frida Kahlo', 'Rufino Tamayo', 'David Alfaro Siqueiros'],
      correctAnswer: 1,
    },
    {
      id: 'mexico-q9',
      question: 'What are churros traditionally served with?',
      options: ['Ice cream', 'Chocolate sauce', 'Caramel', 'Whipped cream'],
      correctAnswer: 1,
    },
    {
      id: 'mexico-q10',
      question: 'What is Mexico\'s national sport?',
      options: ['Soccer', 'Baseball', 'Charrería (rodeo)', 'Boxing'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 15, y: 30 },
  isUnlockedByDefault: true,
};
