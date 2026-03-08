import { Country } from '@/types';

export const india: Country = {
  id: 'india',
  name: 'India',
  code: 'IN',
  continent: 'Asia',
  flag: '🇮🇳',
  landscapeImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80',
  description: 'India is a vast South Asian country with diverse terrain, from Himalayan peaks to Indian Ocean coastline. Known for its rich history, spiritual traditions, colorful festivals, and aromatic cuisine.',
  quickFacts: [
    { label: 'Capital', value: 'New Delhi' },
    { label: 'Population', value: '1.4 billion' },
    { label: 'Official Languages', value: 'Hindi, English' },
    { label: 'Currency', value: 'Indian Rupee (₹)' },
    { label: 'Area', value: '3,287,263 km²' },
  ],
  facts: [
    'India is the world\'s largest democracy',
    'India has 22 officially recognized languages',
    'The game of chess was invented in India',
    'India is the birthplace of four major religions: Hinduism, Buddhism, Jainism, and Sikhism',
    'The Taj Mahal attracts 7-8 million visitors annually',
    'India has the largest film industry in the world (Bollywood)',
    'Yoga originated in India over 5,000 years ago',
    'India is the world\'s largest producer of spices',
  ],
  foodCulture: 'Indian cuisine varies dramatically by region, united by the use of diverse spices and cooking techniques. Meals often include rice or bread, vegetables, lentils, and yogurt. Food is deeply connected to culture, religion, and tradition.',
  history: [
    {
      year: '2500 BC',
      title: 'Indus Valley Civilization',
      description: 'One of the world\'s oldest urban civilizations flourished in the Indus River valley.'
    },
    {
      year: '322 BC - 500 AD',
      title: 'Classical Period',
      description: 'Great empires like Maurya and Gupta ruled, ushering in a golden age of art, literature, and science.'
    },
    {
      year: '1526-1857',
      title: 'Mughal Empire',
      description: 'Muslim rulers created magnificent architecture like the Taj Mahal and enriched Indian culture.'
    },
    {
      year: '1947-Present',
      title: 'Independent India',
      description: 'After centuries of British rule, India gained independence and became the world\'s largest democracy.'
    },
  ],
  innovations: [
    {
      name: 'Zero',
      year: '5th Century',
      description: 'Indian mathematicians invented the concept of zero and the decimal system.'
    },
    {
      name: 'Ayurveda',
      year: 'Ancient',
      description: 'Traditional system of medicine practiced for over 3,000 years.'
    },
    {
      name: 'USB',
      year: '1994',
      description: 'Ajay Bhatt, Indian-American, co-invented the USB (Universal Serial Bus).'
    },
    {
      name: 'Fiber Optics',
      year: '1950s',
      description: 'Indian physicist Narinder Singh Kapany pioneered fiber optic technology.'
    },
  ],
  mustVisit: [
    { name: 'Taj Mahal', description: 'Stunning white marble mausoleum, one of the Seven Wonders of the World.' },
    { name: 'Jaipur', description: 'The "Pink City" with magnificent palaces and forts.' },
    { name: 'Varanasi', description: 'One of the world\'s oldest cities, sacred site on the Ganges River.' },
    { name: 'Kerala Backwaters', description: 'Serene network of lagoons and lakes with houseboats.' },
    { name: 'Golden Temple', description: 'Stunning Sikh temple in Amritsar covered in gold leaf.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'October-March for most regions; avoid monsoon season (June-September).' },
    { item: 'Modest clothing', description: 'Cover shoulders and knees, especially at religious sites.' },
    { item: 'Stomach medication', description: 'Prepare for different food and water; drink only bottled water.' },
    { item: 'Cash', description: 'ATMs available but cards not accepted everywhere.' },
    { item: 'Scarf or shawl', description: 'Useful for temple visits and as protection from sun.' },
    { item: 'Patience', description: 'India can be chaotic; embrace the experience with an open mind.' }
  ],
  mainDish: {
    id: 'india-main',
    name: 'Chicken Tikka Masala',
    description: 'Tender chicken in creamy tomato sauce with aromatic spices',
    cookingTime: 60,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken breast', amount: 800, unit: 'g' },
      { name: 'Yogurt', amount: 200, unit: 'ml' },
      { name: 'Tomato puree', amount: 400, unit: 'g' },
      { name: 'Heavy cream', amount: 200, unit: 'ml' },
      { name: 'Onions', amount: 2, unit: 'large' },
      { name: 'Ginger-garlic paste', amount: 2, unit: 'tbsp' },
      { name: 'Garam masala', amount: 2, unit: 'tsp' },
      { name: 'Cumin', amount: 1, unit: 'tsp' },
      { name: 'Coriander', amount: 1, unit: 'tsp' },
      { name: 'Turmeric', amount: 0.5, unit: 'tsp' },
    ],
    steps: [
      'Marinate chicken in yogurt, ginger-garlic, and spices for 2 hours',
      'Grill or broil chicken until charred edges form',
      'Sauté onions in butter until golden',
      'Add ginger-garlic paste, cook until fragrant',
      'Add tomato puree and spices, cook for 10 minutes',
      'Add cream and simmer for 5 minutes',
      'Cut chicken into bite-size pieces, add to sauce',
      'Simmer for 10 minutes',
      'Garnish with cilantro',
      'Serve with basmati rice or naan bread',
    ],
    imageUrl: 'https://images.pexels.com/photos/29173114/pexels-photo-29173114.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  dessert: {
    id: 'india-dessert',
    name: 'Gulab Jamun',
    description: 'Sweet milk-solid dumplings soaked in rose-flavored sugar syrup',
    cookingTime: 45,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Milk powder', amount: 200, unit: 'g' },
      { name: 'All-purpose flour', amount: 50, unit: 'g' },
      { name: 'Baking soda', amount: 0.5, unit: 'tsp' },
      { name: 'Milk', amount: 100, unit: 'ml' },
      { name: 'Sugar', amount: 500, unit: 'g' },
      { name: 'Water', amount: 500, unit: 'ml' },
      { name: 'Rose water', amount: 1, unit: 'tsp' },
      { name: 'Cardamom powder', amount: 0.5, unit: 'tsp' },
      { name: 'Ghee for frying', amount: 500, unit: 'ml' },
    ],
    steps: [
      'Make syrup: boil sugar and water until slightly thick',
      'Add rose water and cardamom, keep warm',
      'Mix milk powder, flour, and baking soda',
      'Add milk gradually to form soft dough',
      'Divide into small balls, roll smooth without cracks',
      'Heat ghee to medium temperature',
      'Fry balls on low heat until golden brown',
      'Drain and immediately immerse in warm syrup',
      'Soak for at least 2 hours',
      'Serve warm or at room temperature',
    ],
    imageUrl: 'https://images.pexels.com/photos/14610769/pexels-photo-14610769.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  drinks: {
    alcoholic: 'Kingfisher beer, Old Monk rum, Indian whiskey',
    nonAlcoholic: 'Masala chai, Lassi, Fresh lime soda, Sugarcane juice',
  },
  music: [
    'Jai Ho - A.R. Rahman',
    'Classical Raga music',
    'Bollywood soundtracks',
    'Traditional sitar music',
    'Devotional bhajans',
  ],
  decorationIdeas: [
    'Saffron, white, and green flag colors',
    'Marigold flower garlands',
    'Colorful rangoli patterns',
    'Brass diyas (lamps)',
    'Paisley and mandala designs',
  ],
  conversationStarters: [
    'Have you practiced yoga?',
    'What\'s your favorite Indian curry?',
    'Which Indian city would you like to visit?',
    'Have you seen a Bollywood film?',
    'What do you know about Indian festivals?',
  ],
  quiz: [
    {
      id: 'india-q1',
      question: 'What is the capital of India?',
      options: ['Mumbai', 'New Delhi', 'Kolkata', 'Bangalore'],
      correctAnswer: 1,
    },
    {
      id: 'india-q2',
      question: 'Which monument is called the "symbol of love"?',
      options: ['Red Fort', 'Taj Mahal', 'Hawa Mahal', 'Gateway of India'],
      correctAnswer: 1,
    },
    {
      id: 'india-q3',
      question: 'What does "namaste" mean?',
      options: ['Hello', 'I bow to you', 'Welcome', 'Thank you'],
      correctAnswer: 1,
    },
    {
      id: 'india-q4',
      question: 'Which Indian city is known as the "Pink City"?',
      options: ['Jaipur', 'Udaipur', 'Jodhpur', 'Delhi'],
      correctAnswer: 0,
    },
    {
      id: 'india-q5',
      question: 'What is India\'s national animal?',
      options: ['Elephant', 'Lion', 'Bengal Tiger', 'Peacock'],
      correctAnswer: 2,
    },
    {
      id: 'india-q6',
      question: 'Which Indian city is home to Bollywood?',
      options: ['Delhi', 'Bangalore', 'Mumbai', 'Kolkata'],
      correctAnswer: 2,
    },
    {
      id: 'india-q7',
      question: 'What is the traditional Indian flatbread called?',
      options: ['Naan', 'Pita', 'Tortilla', 'Baguette'],
      correctAnswer: 0,
    },
    {
      id: 'india-q8',
      question: 'Which river is considered sacred in Hinduism?',
      options: ['Yamuna', 'Brahmaputra', 'Ganges', 'Indus'],
      correctAnswer: 2,
    },
    {
      id: 'india-q9',
      question: 'What is India\'s most famous mausoleum?',
      options: ['Red Fort', 'Taj Mahal', 'Qutub Minar', 'India Gate'],
      correctAnswer: 1,
    },
    {
      id: 'india-q10',
      question: 'What are the sweet milk balls fried and soaked in syrup called?',
      options: ['Jalebi', 'Ladoo', 'Gulab Jamun', 'Barfi'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 70, y: 32 },
};
