import { Country } from '@/types';

export const sriLanka: Country = {
  id: 'sri-lanka',
  name: 'Sri Lanka',
  code: 'LK',
  continent: 'Asia',
  flag: '🇱🇰',
  landscapeImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
  description: 'Sri Lanka is a tropical island nation known as the "Pearl of the Indian Ocean", famous for its tea plantations, ancient Buddhist sites, stunning beaches, and incredible wildlife.',
  quickFacts: [
    { label: 'Capital', value: 'Sri Jayawardenepura Kotte' },
    { label: 'Population', value: '22 million' },
    { label: 'Official Languages', value: 'Sinhala, Tamil' },
    { label: 'Currency', value: 'Sri Lankan Rupee (LKR)' },
    { label: 'Area', value: '65,610 km²' },
  ],
  facts: [
    'Sri Lanka produces some of the world\'s finest tea (Ceylon tea)',
    'The island has eight UNESCO World Heritage Sites',
    'Sri Lanka has the highest density of leopards in the world',
    'Adam\'s Peak is sacred to four major religions',
    'Sri Lanka was known as Ceylon until 1972',
    'The country has over 26 national parks',
    'Sigiriya Rock Fortress is an ancient engineering marvel',
    'Sri Lanka has a literacy rate of over 92%',
  ],
  foodCulture: 'Sri Lankan cuisine is incredibly flavorful with influences from India, Southeast Asia, and colonial powers. Rice and curry is the staple, with dishes featuring coconut, spices, and fresh seafood.',
  history: [
    {
      year: '543 BC',
      title: 'Arrival of Buddhism',
      description: 'Prince Vijaya arrived in Sri Lanka, and Buddhism later became central to the island\'s culture.'
    },
    {
      year: '200 BC',
      title: 'Ancient Kingdoms',
      description: 'Great kingdoms built magnificent cities like Anuradhapura with advanced irrigation systems.'
    },
    {
      year: '1505',
      title: 'Portuguese Arrival',
      description: 'Europeans arrived, beginning centuries of colonial rule by Portuguese, Dutch, and British.'
    },
    {
      year: '1948',
      title: 'Independence',
      description: 'Sri Lanka (then Ceylon) gained independence from Britain.'
    },
    {
      year: '1972',
      title: 'Name Change',
      description: 'Ceylon officially changed its name to Sri Lanka.'
    },
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'December-March for west/south coast, April-September for east coast' },
    { item: 'Visa', description: 'E-visa (ETA) required for most visitors. Easy online application.' },
    { item: 'Transportation', description: 'Scenic train rides, tuk-tuks, and buses widely available.' },
    { item: 'Language', description: 'Sinhala and Tamil. English widely spoken in tourist areas.' },
    { item: 'Safety', description: 'Generally safe. Be cautious with wildlife on safari.' },
  ],
  mainDish: {
    id: 'sri-lanka-rice-and-curry',
    name: 'Rice and Curry',
    description: 'The national dish - rice served with multiple curries, sambols, and sides',
    cookingTime: 90,
    servings: 4,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Basmati rice', amount: 600, unit: 'g' },
      { name: 'Lentils (dhal)', amount: 200, unit: 'g' },
      { name: 'Potatoes', amount: 400, unit: 'g' },
      { name: 'Green beans', amount: 200, unit: 'g' },
      { name: 'Coconut milk', amount: 400, unit: 'ml' },
      { name: 'Curry leaves', amount: 20, unit: 'pieces' },
      { name: 'Ceylon curry powder', amount: 4, unit: 'tbsp' },
      { name: 'Turmeric', amount: 2, unit: 'tsp' },
      { name: 'Onions', amount: 3, unit: 'pieces' },
      { name: 'Tomatoes', amount: 2, unit: 'pieces' },
    ],
    steps: [
      'Cook rice with a pinch of turmeric',
      'Prepare dhal curry: boil lentils with turmeric until soft',
      'Temper with curry leaves, mustard seeds, and onions',
      'Make potato curry: cook cubed potatoes in coconut milk with curry powder',
      'Prepare green bean curry with similar spices',
      'Make coconut sambol: grate coconut with chili and lime',
      'Arrange rice in center of plate',
      'Serve all curries around the rice',
      'Add papadum and pickle on the side',
      'Mix everything together while eating',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600',
  },
  drinks: {
    alcoholic: 'Arrack (coconut spirit), Lion beer',
    nonAlcoholic: 'Ceylon tea, King coconut water, Ginger beer, Lime juice',
  },
  music: ['Traditional Kandyan drumming', 'Baila music', 'Classical Sinhala songs', 'Tamil folk music'],
  decorationIdeas: [
    'Maroon, orange, and gold (Sri Lankan flag colors)',
    'Tea plantation imagery',
    'Elephant motifs',
    'Buddha statues and imagery',
    'Colorful batik fabrics',
    'Tropical flowers like frangipani',
  ],
  conversationStarters: [
    'Have you tried authentic Ceylon tea? It\'s incredible!',
    'Sigiriya Rock Fortress is such an amazing ancient site!',
    'Would you go on a safari to see leopards in Sri Lanka?',
    'The train ride through tea country is supposed to be stunning!',
  ],
  quiz: [
    {
      id: 'sri-lanka-q1',
      question: 'What was Sri Lanka previously called?',
      options: ['Burma', 'Ceylon', 'Siam', 'Formosa'],
      correctAnswer: 1,
    },
    {
      id: 'sri-lanka-q2',
      question: 'What is Sri Lanka famous for producing?',
      options: ['Coffee', 'Tea', 'Cocoa', 'Spices'],
      correctAnswer: 1,
    },
    {
      id: 'sri-lanka-q3',
      question: 'How many UNESCO World Heritage Sites does Sri Lanka have?',
      options: ['4', '6', '8', '10'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 72, y: 22 },
};
