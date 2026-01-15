import { Country } from '@/types';

export const singapore: Country = {
  id: 'singapore',
  name: 'Singapore',
  code: 'SG',
  continent: 'Asia',
  flag: '🇸🇬',
  landscapeImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
  description: 'Singapore is a modern city-state and island nation known for its efficiency, cleanliness, multicultural society, world-class food scene, and impressive skyline. It\'s a perfect blend of East and West.',
  quickFacts: [
    { label: 'Capital', value: 'Singapore' },
    { label: 'Population', value: '5.9 million' },
    { label: 'Official Languages', value: 'English, Malay, Mandarin, Tamil' },
    { label: 'Currency', value: 'Singapore Dollar (SGD)' },
    { label: 'Area', value: '728 km²' },
  ],
  facts: [
    'Singapore is one of only three surviving city-states in the world',
    'Chewing gum is restricted (but not banned) in Singapore',
    'Singapore has one of the world\'s highest number of millionaires per capita',
    'The country is only slightly larger than New York City',
    'Singapore has no natural resources and imports everything including water',
    'Changi Airport has consistently been rated the world\'s best',
    'Singapore is one of the cleanest and safest cities in the world',
    'Over 60% of Singapore is covered in greenery',
  ],
  foodCulture: 'Singaporean cuisine is a melting pot of Chinese, Malay, Indian, and Peranakan flavors. Hawker centers are the heart of food culture, offering incredible dishes at affordable prices. Food is a national obsession.',
  history: [
    {
      year: '1819',
      title: 'British Founding',
      description: 'Sir Stamford Raffles established Singapore as a British trading post.'
    },
    {
      year: '1942-1945',
      title: 'Japanese Occupation',
      description: 'Singapore fell to Japanese forces during WWII, enduring harsh occupation.'
    },
    {
      year: '1963',
      title: 'Malaysian Federation',
      description: 'Singapore joined the Federation of Malaysia upon independence from Britain.'
    },
    {
      year: '1965',
      title: 'Independence',
      description: 'Singapore separated from Malaysia and became an independent nation.'
    },
    {
      year: '1965-1990',
      title: 'Rapid Development',
      description: 'Under Lee Kuan Yew, Singapore transformed from a poor nation to a first-world economy.'
    },
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'February-April for slightly cooler weather, but year-round destination' },
    { item: 'Visa', description: 'Visa-free or visa on arrival for most nationalities.' },
    { item: 'Transportation', description: 'Excellent MRT (metro), buses, and taxis. Very efficient.' },
    { item: 'Language', description: 'English widely spoken. Singlish (local English dialect) common.' },
    { item: 'Safety', description: 'Extremely safe. Strict laws ensure order and cleanliness.' },
  ],
  mainDish: {
    id: 'singapore-chicken-rice',
    name: 'Hainanese Chicken Rice',
    description: 'Singapore\'s national dish - poached chicken with fragrant rice, considered simple perfection',
    cookingTime: 60,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Whole chicken', amount: 1.5, unit: 'kg' },
      { name: 'Jasmine rice', amount: 400, unit: 'g' },
      { name: 'Chicken fat', amount: 3, unit: 'tbsp' },
      { name: 'Ginger', amount: 5, unit: 'cm piece' },
      { name: 'Garlic', amount: 6, unit: 'cloves' },
      { name: 'Pandan leaves', amount: 2, unit: 'pieces' },
      { name: 'Cucumber', amount: 1, unit: 'piece' },
      { name: 'Dark soy sauce', amount: 3, unit: 'tbsp' },
      { name: 'Chili sauce', amount: 100, unit: 'g' },
      { name: 'Sesame oil', amount: 2, unit: 'tbsp' },
    ],
    steps: [
      'Rub chicken with salt and stuff with ginger and pandan',
      'Bring water to boil, add chicken and simmer for 30 minutes',
      'Remove chicken and plunge into ice water immediately',
      'Fry minced garlic and ginger in chicken fat',
      'Add rice and stir until fragrant',
      'Add chicken broth and pandan leaves, cook rice',
      'Chop chicken into bite-sized pieces',
      'Serve chicken over fragrant rice',
      'Garnish with cucumber slices',
      'Serve with chili sauce, ginger paste, and dark soy sauce',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600',
  },
  drinks: {
    alcoholic: 'Singapore Sling (famous cocktail), Tiger beer, Local craft beers',
    nonAlcoholic: 'Kopi (local coffee), Teh Tarik (pulled tea), Fresh fruit juices, Sugarcane juice',
  },
  music: ['Modern Singaporean pop', 'Getai (street opera)', 'Fusion Asian music', 'International music scene'],
  decorationIdeas: [
    'Red and white (Singapore flag colors)',
    'Merlion imagery (national symbol)',
    'Orchids (national flower)',
    'Modern minimalist design',
    'Multicultural elements (Chinese, Malay, Indian)',
    'Marina Bay Sands motifs',
  ],
  conversationStarters: [
    'Have you been to Singapore\'s Gardens by the Bay?',
    'Hawker centers have the best food - which dish would you try?',
    'Singapore is so clean and organized - have you experienced it?',
    'The Singapore Sling was invented at Raffles Hotel!',
  ],
  quiz: [
    {
      id: 'singapore-q1',
      question: 'What year did Singapore gain independence?',
      options: ['1963', '1965', '1970', '1975'],
      correctAnswer: 1,
    },
    {
      id: 'singapore-q2',
      question: 'What is Singapore\'s national dish?',
      options: ['Laksa', 'Satay', 'Chicken Rice', 'Chili Crab'],
      correctAnswer: 2,
    },
    {
      id: 'singapore-q3',
      question: 'What is the Merlion?',
      options: ['A building', 'National symbol', 'A food', 'A festival'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 77, y: 19 },
};
