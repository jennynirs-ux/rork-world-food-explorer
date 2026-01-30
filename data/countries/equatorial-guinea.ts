import { Country } from '@/types';

export const equatorialGuinea: Country = {
  id: 'equatorial-guinea',
  name: 'Equatorial Guinea',
  code: 'GQ',
  continent: 'Africa',
  flag: '🇬🇶',
  landscapeImage: 'https://images.unsplash.com/photo-1600077106724-946750eeaf8c?w=800',
  description: 'Equatorial Guinea is a Central African country with a mainland region and islands, known for oil production and Spanish colonial heritage.',
  quickFacts: [
    { label: 'Capital', value: 'Malabo' },
    { label: 'Population', value: '1.5 million' },
    { label: 'Official Languages', value: 'Spanish, French, Portuguese' },
    { label: 'Currency', value: 'Central African CFA Franc' },
    { label: 'Area', value: '28,051 km²' },
  ],
  facts: [
    'The only Spanish-speaking country in Africa',
    'Malabo is located on Bioko Island',
    'Rich in oil and natural gas',
    'One of Africa\'s wealthiest countries per capita',
  ],
  foodCulture: 'Cuisine blends African and Spanish influences with fish, plantains, and yams as staples.',
  history: [
    {
      year: '1778',
      title: 'Spanish Control',
      description: 'Spain gained control of the territory through the Treaty of El Pardo with Portugal.'
    },
    {
      year: '1968',
      title: 'Independence',
      description: 'Equatorial Guinea gained independence from Spain, becoming Africa\'s only Spanish-speaking nation.'
    },
    {
      year: '1990s',
      title: 'Oil Discovery',
      description: 'Major offshore oil discoveries transformed the economy dramatically.'
    },
  ],
  mustVisit: [
    { name: 'Malabo Cathedral', description: 'Beautiful Spanish colonial church in the capital.' },
    { name: 'Pico Basile', description: 'Highest peak in Equatorial Guinea with stunning views from Bioko Island.' },
    { name: 'Moka Wildlife Center', description: 'Primate rehabilitation center protecting endangered species.' },
    { name: 'Arena Blanca Beach', description: 'Beautiful white sand beach near Bata.' },
    { name: 'Monte Alen National Park', description: 'Dense rainforest with gorillas and elephants.' }
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Required for most nationalities. Apply in advance.' },
    { item: 'Best time to visit', description: 'December-February for dry season.' },
    { item: 'Spanish language', description: 'Essential as English is rarely spoken.' },
    { item: 'Yellow fever vaccination', description: 'Required for entry with certificate.' },
  ],
  mainDish: {
    id: 'equatorial-guinea-main',
    name: 'Succotash',
    description: 'Traditional stew with beans, corn, and fish',
    cookingTime: 60,
    servings: 6,
    dietType: 'fish',
    ingredients: [
      { name: 'Black-eyed peas', amount: 300, unit: 'g' },
      { name: 'Corn kernels', amount: 200, unit: 'g' },
      { name: 'Smoked fish', amount: 400, unit: 'g' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Palm oil', amount: 3, unit: 'tbsp' },
    ],
    steps: [
      'Soak beans overnight',
      'Cook beans until tender',
      'Add corn and smoked fish',
      'Sauté tomatoes and onions',
      'Combine all ingredients',
      'Simmer until flavors blend',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600',
  },
  dessert: {
    id: 'equatorial-guinea-dessert',
    name: 'Plantain Fritters',
    description: 'Sweet fried plantain dessert',
    cookingTime: 30,
    servings: 8,
    dietType: 'vegan',
    ingredients: [
      { name: 'Ripe plantains', amount: 4, unit: 'whole' },
      { name: 'Flour', amount: 100, unit: 'g' },
      { name: 'Sugar', amount: 50, unit: 'g' },
      { name: 'Cinnamon', amount: 1, unit: 'tsp' },
      { name: 'Oil for frying', amount: 500, unit: 'ml' },
    ],
    steps: [
      'Mash ripe plantains',
      'Mix with flour, sugar, and cinnamon',
      'Form into small balls or patties',
      'Heat oil to 180°C',
      'Fry until golden brown',
      'Drain on paper towels',
      'Serve warm with honey or syrup',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1587334207976-ca4f0c4e6de2?w=600',
  },
  drinks: {
    alcoholic: 'Palm wine, Local beer',
    nonAlcoholic: 'Malamba (sugarcane juice), Fresh juice',
  },
  music: [
    'Traditional Fang music',
    'Spanish-influenced songs',
    'African rhythms',
  ],
  decorationIdeas: [
    'Green, white, red and blue flag colors',
    'Spanish colonial elements',
    'Tropical themes',
    'Ocean imagery',
  ],
  conversationStarters: [
    'Did you know Spanish is spoken in Africa?',
    'What do you know about Central African islands?',
  ],
  innovations: [
    {
      name: 'Spanish Language in Africa',
      year: 'Colonial Era',
      description: 'Only Spanish-speaking country in Africa, maintaining unique linguistic heritage',
    },
    {
      name: 'Oil Industry Development',
      year: '1990s',
      description: 'Rapid development of offshore oil production transforming the economy',
    },
    {
      name: 'Bioko Biodiversity',
      year: '2000s',
      description: 'Conservation efforts protecting unique island species and ecosystems',
    },
  ],
  quiz: [
    {
      id: 'equatorial-guinea-q1',
      question: 'What is the capital of Equatorial Guinea?',
      options: ['Malabo', 'Bata', 'Libreville', 'Yaoundé'],
      correctAnswer: 0,
    },
    {
      id: 'equatorial-guinea-q2',
      question: 'What is unique about Equatorial Guinea in Africa?',
      options: ['Largest country', 'Only Spanish-speaking', 'Most populous', 'Coldest climate'],
      correctAnswer: 1,
    },
    {
      id: 'equatorial-guinea-q3',
      question: 'Where is the capital Malabo located?',
      options: ['Mainland', 'Bioko Island', 'Peninsula', 'Desert'],
      correctAnswer: 1,
    },
    {
      id: 'equatorial-guinea-q4',
      question: 'What is the main natural resource?',
      options: ['Gold', 'Diamonds', 'Oil and gas', 'Copper'],
      correctAnswer: 2,
    },
    {
      id: 'equatorial-guinea-q5',
      question: 'How many official languages does it have?',
      options: ['1', '2', '3', '4'],
      correctAnswer: 2,
    },
    {
      id: 'equatorial-guinea-q6',
      question: 'What is the traditional stew called?',
      options: ['Paella', 'Succotash', 'Gumbo', 'Chowder'],
      correctAnswer: 1,
    },
    {
      id: 'equatorial-guinea-q7',
      question: 'Which European country colonized it?',
      options: ['Portugal', 'France', 'Spain', 'Britain'],
      correctAnswer: 2,
    },
    {
      id: 'equatorial-guinea-q8',
      question: 'What ocean borders Equatorial Guinea?',
      options: ['Atlantic', 'Pacific', 'Indian', 'Arctic'],
      correctAnswer: 0,
    },
    {
      id: 'equatorial-guinea-q9',
      question: 'What is the currency?',
      options: ['Euro', 'Dollar', 'CFA Franc', 'Pound'],
      correctAnswer: 2,
    },
    {
      id: 'equatorial-guinea-q10',
      question: 'Which continent is it in?',
      options: ['South America', 'Asia', 'Africa', 'Europe'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 49, y: 19 },
};
