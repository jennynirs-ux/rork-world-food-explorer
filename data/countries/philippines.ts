import { Country } from '@/types';

export const philippines: Country = {
  id: 'philippines',
  name: 'Philippines',
  code: 'PH',
  continent: 'Asia',
  flag: '🇵🇭',
  landscapeImage: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800',
  description: 'The Philippines is an archipelago of over 7,000 islands with stunning beaches, vibrant culture, Spanish colonial heritage, and incredibly warm and hospitable people. It\'s a tropical paradise with a unique blend of Asian and Western influences.',
  quickFacts: [
    { label: 'Capital', value: 'Manila' },
    { label: 'Population', value: '115 million' },
    { label: 'Official Languages', value: 'Filipino, English' },
    { label: 'Currency', value: 'Philippine Peso (PHP)' },
    { label: 'Area', value: '300,000 km²' },
  ],
  facts: [
    'The Philippines is made up of 7,641 islands',
    'It\'s the only predominantly Christian nation in Asia',
    'Text messaging capital of the world',
    'Filipinos are the second-largest Asian American group in the US',
    'The Philippines was named after King Philip II of Spain',
    'Jeepneys are the most popular mode of public transportation',
    'The country has the longest Christmas season (September to January)',
    'English is widely spoken, making it easy for travelers',
  ],
  foodCulture: 'Filipino cuisine is a delicious fusion of Malay, Chinese, Spanish, and American influences. It\'s characterized by sweet, sour, and savory flavors, with rice as the staple. Adobo, sinigang, and lechon are iconic dishes.',
  history: [
    {
      year: '1521',
      title: 'Magellan Arrives',
      description: 'Ferdinand Magellan landed in the Philippines, beginning Spanish interest in the islands.'
    },
    {
      year: '1565-1898',
      title: 'Spanish Colonial Period',
      description: 'Spain colonized the Philippines for over 300 years, deeply influencing culture and religion.'
    },
    {
      year: '1898',
      title: 'Philippine Revolution',
      description: 'The Philippines declared independence from Spain after the revolution.'
    },
    {
      year: '1898-1946',
      title: 'American Period',
      description: 'After the Spanish-American War, the Philippines came under US control.'
    },
    {
      year: '1946',
      title: 'Independence',
      description: 'The Philippines gained full independence from the United States.'
    },
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'December to May (dry season) for best weather' },
    { item: 'Visa', description: 'Visa-free for many nationalities for 30 days.' },
    { item: 'Transportation', description: 'Domestic flights between islands, jeepneys, tricycles, and ferries.' },
    { item: 'Language', description: 'Filipino and English. English very widely spoken.' },
    { item: 'Safety', description: 'Generally safe. Avoid certain southern areas. Check travel advisories.' },
  ],
  mainDish: {
    id: 'philippines-adobo',
    name: 'Chicken Adobo',
    description: 'The Philippines\' unofficial national dish - chicken braised in vinegar, soy sauce, and garlic',
    cookingTime: 60,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken thighs', amount: 1, unit: 'kg' },
      { name: 'Soy sauce', amount: 100, unit: 'ml' },
      { name: 'White vinegar', amount: 100, unit: 'ml' },
      { name: 'Garlic cloves', amount: 10, unit: 'pieces' },
      { name: 'Bay leaves', amount: 3, unit: 'pieces' },
      { name: 'Black peppercorns', amount: 1, unit: 'tbsp' },
      { name: 'Water', amount: 200, unit: 'ml' },
      { name: 'Cooking oil', amount: 2, unit: 'tbsp' },
      { name: 'Sugar', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Marinate chicken in soy sauce, vinegar, and crushed garlic for 30 min',
      'Heat oil in a pot, brown the chicken pieces',
      'Add marinade, bay leaves, and peppercorns',
      'Add water and bring to boil',
      'Reduce heat and simmer covered for 30 minutes',
      'Remove lid and continue simmering to reduce sauce',
      'Add sugar to balance flavors',
      'Cook until sauce is thick and chicken is tender',
      'Serve hot over steamed rice',
      'Garnish with fried garlic if desired',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=600',
  },
  drinks: {
    alcoholic: 'San Miguel beer, Tanduay rum, Lambanog (coconut wine)',
    nonAlcoholic: 'Calamansi juice, Buko (coconut water), Sago\'t gulaman',
  },
  music: ['OPM (Original Pilipino Music)', 'Kundiman', 'Traditional folk music', 'Contemporary pop'],
  decorationIdeas: [
    'Red, blue, yellow, and white (Philippine flag colors)',
    'Sampaguita flowers (national flower)',
    'Capiz shell decorations',
    'Bamboo and rattan elements',
    'Jeepney-inspired colorful patterns',
    'Traditional barong patterns',
  ],
  conversationStarters: [
    'Have you been to Palawan? It\'s one of the world\'s most beautiful islands!',
    'Filipino adobo is so flavorful - have you tried it?',
    'Filipinos are known for being incredibly hospitable!',
    'The beaches in the Philippines are stunning - island hopping is a must!',
  ],
  quiz: [
    {
      id: 'philippines-q1',
      question: 'What is the capital of the Philippines?',
      options: ['Cebu', 'Davao', 'Manila', 'Quezon City'],
      correctAnswer: 2,
    },
    {
      id: 'philippines-q2',
      question: 'Approximately how many islands make up the Philippines?',
      options: ['1,000', '3,000', '7,600', '10,000'],
      correctAnswer: 2,
    },
    {
      id: 'philippines-q3',
      question: 'What is the unofficial national dish of the Philippines?',
      options: ['Sinigang', 'Adobo', 'Lechon', 'Pancit'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 82, y: 24 },
};
