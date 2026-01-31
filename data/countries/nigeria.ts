import { Country } from '@/types';

export const nigeria: Country = {
  id: 'nigeria',
  name: 'Nigeria',
  code: 'NG',
  continent: 'Africa',
  flag: '🇳🇬',
  landscapeImage: 'https://images.unsplash.com/photo-1608483086010-e9b46c2a0e2b?w=800&q=80',
  description: 'Nigeria is Africa\'s most populous country and largest economy, known for its diverse cultures, vibrant music scene (especially Afrobeats), and Nollywood film industry. Home to over 250 ethnic groups, Nigeria is a cultural powerhouse.',
  quickFacts: [
    { label: 'Capital', value: 'Abuja' },
    { label: 'Population', value: '220 million' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'Nigerian Naira (NGN)' },
    { label: 'Area', value: '923,768 km²' },
  ],
  facts: [
    'Nigeria is the most populous country in Africa',
    'Nollywood is the world\'s second-largest film industry by volume',
    'Over 500 languages are spoken in Nigeria',
    'Nigeria is the largest oil producer in Africa',
    'The country has produced numerous Grammy-winning artists',
    'Lagos is one of the fastest-growing cities in the world',
  ],
  foodCulture: 'Nigerian cuisine is rich and diverse, varying by region. Spicy stews, rice dishes, and fufu are staples. Palm oil, peppers, and aromatic spices feature prominently. Nigerian food is hearty, flavorful, and often quite spicy.',
  history: [
    {
      year: '1000 AD',
      title: 'Ancient Kingdoms',
      description: 'Powerful kingdoms like Benin, Oyo, and Kanem-Bornu flourished with sophisticated governance and art.'
    },
    {
      year: '1960',
      title: 'Independence',
      description: 'Nigeria gained independence from British colonial rule, becoming a sovereign nation.'
    },
    {
      year: '1990s-Present',
      title: 'Cultural Renaissance',
      description: 'Nollywood and Afrobeats music brought Nigerian culture to global prominence.'
    },
  ],
  innovations: [
    {
      name: 'Nollywood',
      year: '1990s',
      description: 'Nigeria built the world\'s second-largest film industry, producing over 2,500 films annually.'
    },
    {
      name: 'Afrobeats',
      year: '2000s',
      description: 'A fusion music genre that has taken the world by storm, with artists like Burna Boy and Wizkid.'
    },
  ],
  mustVisit: [
    { name: 'Lagos', description: 'Vibrant megacity with beaches, nightlife, and cultural attractions.' },
    { name: 'Yankari National Park', description: 'Wildlife reserve with elephants, lions, and warm springs.' },
    { name: 'Olumo Rock', description: 'Historic rock formation in Abeokuta with panoramic views.' },
    { name: 'Lekki Conservation Centre', description: 'Nature reserve with canopy walkway in Lagos.' },
    { name: 'Osun-Osogbo Sacred Grove', description: 'UNESCO World Heritage site, sacred forest with Yoruba shrines.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'November-March for dry season and cooler weather.' },
    { item: 'Yellow fever vaccination', description: 'Mandatory for entry into Nigeria.' },
    { item: 'Visa', description: 'Required for most nationalities, apply in advance.' },
    { item: 'Cash', description: 'Carry local currency, ATMs available in cities.' },
  ],
  mainDish: {
    id: 'nigeria-main',
    name: 'Jollof Rice',
    description: 'Iconic West African rice dish cooked in tomato sauce with spices',
    cookingTime: 60,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Long-grain rice', amount: 500, unit: 'g' },
      { name: 'Tomato paste', amount: 200, unit: 'g' },
      { name: 'Bell peppers', amount: 3, unit: 'large' },
      { name: 'Scotch bonnet peppers', amount: 2, unit: 'pieces' },
      { name: 'Onions', amount: 2, unit: 'large' },
      { name: 'Chicken or beef stock', amount: 750, unit: 'ml' },
      { name: 'Curry powder', amount: 2, unit: 'tbsp' },
      { name: 'Thyme', amount: 1, unit: 'tbsp' },
      { name: 'Bay leaves', amount: 2, unit: 'pieces' },
    ],
    steps: [
      'Blend tomatoes, peppers, and onions into smooth paste',
      'Fry tomato paste until oil separates and paste darkens',
      'Add blended mixture, fry until reduced',
      'Add stock, curry, thyme, and bay leaves, bring to boil',
      'Add washed rice, stir, cover tightly',
      'Cook on low heat until rice absorbs liquid (30-40 mins)',
      'Serve with fried plantains and chicken',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600',
  },
  dessert: {
    id: 'nigeria-dessert',
    name: 'Puff Puff',
    description: 'Sweet fried dough balls, a popular Nigerian street snack',
    cookingTime: 45,
    servings: 20,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Flour', amount: 500, unit: 'g' },
      { name: 'Sugar', amount: 100, unit: 'g' },
      { name: 'Yeast', amount: 7, unit: 'g' },
      { name: 'Warm water', amount: 350, unit: 'ml' },
      { name: 'Nutmeg', amount: 1, unit: 'tsp' },
      { name: 'Salt', amount: 1, unit: 'pinch' },
      { name: 'Vegetable oil for frying', amount: 500, unit: 'ml' },
    ],
    steps: [
      'Mix flour, sugar, yeast, nutmeg, and salt',
      'Add warm water gradually to form smooth batter',
      'Let batter rise for 1-2 hours until doubled',
      'Heat oil in deep pan',
      'Scoop batter with wet hands and drop into hot oil',
      'Fry until golden brown on all sides',
      'Drain and dust with powdered sugar if desired',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600',
  },
  drinks: {
    alcoholic: 'Star beer, Guinness (Nigerian version), Palm wine, Chapman (cocktail)',
    nonAlcoholic: 'Zobo (hibiscus drink), Kunun (millet drink), Chapman (non-alcoholic), Fresh coconut',
  },
  music: [
    'Ye - Burna Boy',
    'Essence - Wizkid',
    'Fall - Davido',
    'African Giant - Burna Boy',
    'Fela Kuti - Afrobeat pioneer',
  ],
  decorationIdeas: [
    'Nigerian flag colors (green and white)',
    'Ankara print fabrics',
    'Traditional Nigerian masks',
    'Calabash decorations',
    'Colorful West African patterns',
  ],
  conversationStarters: [
    'Have you watched any Nollywood films?',
    'What\'s your favorite Afrobeats song?',
    'Have you tried Nigerian jollof rice?',
    'What do you know about Nigerian culture?',
  ],
  quiz: [
    {
      id: 'nigeria-q1',
      question: 'What is Nigeria\'s film industry called?',
      options: ['Bollywood', 'Nollywood', 'Hollywood', 'Kollywood'],
      correctAnswer: 1,
    },
    {
      id: 'nigeria-q2',
      question: 'What is the most populous country in Africa?',
      options: ['Egypt', 'South Africa', 'Nigeria', 'Ethiopia'],
      correctAnswer: 2,
    },
    {
      id: 'nigeria-q3',
      question: 'Which music genre originated in Nigeria?',
      options: ['Reggae', 'Salsa', 'Afrobeats', 'Jazz'],
      correctAnswer: 2,
    },
    {
      id: 'nigeria-q4',
      question: 'What is the capital of Nigeria?',
      options: ['Lagos', 'Abuja', 'Kano', 'Ibadan'],
      correctAnswer: 1,
    },
    {
      id: 'nigeria-q5',
      question: 'In which year did Nigeria gain independence?',
      options: ['1950', '1960', '1970', '1980'],
      correctAnswer: 1,
    },
    {
      id: 'nigeria-q6',
      question: 'What is Nigeria\'s most famous rice dish?',
      options: ['Fried rice', 'Jollof rice', 'Biryani', 'Paella'],
      correctAnswer: 1,
    },
    {
      id: 'nigeria-q7',
      question: 'How many languages are spoken in Nigeria approximately?',
      options: ['50', '150', '300', '500+'],
      correctAnswer: 3,
    },
    {
      id: 'nigeria-q8',
      question: 'What is Nigeria\'s currency?',
      options: ['Naira', 'Cedi', 'Shilling', 'Franc'],
      correctAnswer: 0,
    },
    {
      id: 'nigeria-q9',
      question: 'Which industry ranks Nigeria as the world\'s second largest by volume?',
      options: ['Music', 'Film (Nollywood)', 'Technology', 'Fashion'],
      correctAnswer: 1,
    },
    {
      id: 'nigeria-q10',
      question: 'What is Nigeria\'s position in Africa?',
      options: ['Smallest country', 'Most populous country', 'Richest country', 'Oldest country'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 48, y: 20 },
};
