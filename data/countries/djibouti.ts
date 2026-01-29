import { Country } from '@/types';

export const djibouti: Country = {
  id: 'djibouti',
  name: 'Djibouti',
  code: 'DJ',
  continent: 'Africa',
  flag: '🇩🇯',
  landscapeImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
  description: 'Djibouti is a small country on the Horn of Africa, known for its strategic location on the Red Sea, volcanic landscapes, and Lake Assal.',
  quickFacts: [
    { label: 'Capital', value: 'Djibouti City' },
    { label: 'Population', value: '1 million' },
    { label: 'Official Languages', value: 'French, Arabic' },
    { label: 'Currency', value: 'Djiboutian Franc' },
    { label: 'Area', value: '23,200 km²' },
  ],
  facts: [
    'Lake Assal is the lowest point in Africa',
    'One of the hottest inhabited places on Earth',
    'Strategic location with several foreign military bases',
    'Gateway to the Red Sea and Suez Canal',
  ],
  foodCulture: 'Djiboutian cuisine blends Somali, Afar, Yemeni, and French influences with seafood, goat meat, and spiced rice.',
  history: [
    {
      year: '1862',
      title: 'French Interest',
      description: 'France began establishing presence in the region, seeking a strategic port on the Red Sea.'
    },
    {
      year: '1977',
      title: 'Independence',
      description: 'Djibouti gained independence from France, becoming the last French colony in Africa to do so.'
    },
    {
      year: '2017',
      title: 'Strategic Hub',
      description: 'Opened China\'s first overseas military base, cementing its role as a strategic international location.'
    },
  ],
  mustVisit: [
    { name: 'Lake Assal', description: 'The lowest point in Africa and one of the saltiest bodies of water on Earth.' },
    { name: 'Day Forest National Park', description: 'Rare green oasis with unique biodiversity and hiking trails.' },
    { name: 'Lac Abbé', description: 'Otherworldly landscape with limestone chimneys, filmed in Planet of the Apes.' },
    { name: 'Gulf of Tadjoura', description: 'Pristine waters for snorkeling, diving, and whale shark spotting.' },
    { name: 'Grand Bara Desert', description: 'Vast desert landscape perfect for off-road adventures.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'November-March for cooler weather. Summer is extremely hot.' },
    { item: 'Visa', description: 'Available on arrival for most nationalities at Djibouti-Ambouli Airport.' },
    { item: 'Sun protection', description: 'Essential due to intense desert sun and high temperatures.' },
    { item: 'French language', description: 'Helpful as French is widely spoken alongside Arabic and Somali.' },
  ],
  mainDish: {
    id: 'djibouti-main',
    name: 'Skoudehkaris',
    description: 'Spiced lamb and rice dish',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Lamb or goat', amount: 800, unit: 'g' },
      { name: 'Basmati rice', amount: 500, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Cardamom', amount: 5, unit: 'pods' },
      { name: 'Cinnamon', amount: 2, unit: 'sticks' },
      { name: 'Raisins', amount: 100, unit: 'g' },
    ],
    steps: [
      'Brown meat with onions and spices',
      'Add water and simmer until tender',
      'Cook rice separately with meat broth',
      'Layer rice and meat',
      'Garnish with raisins and fried onions',
      'Serve with banana and salad',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600',
  },
  dessert: {
    id: 'djibouti-dessert',
    name: 'Halwa',
    description: 'Sweet Middle Eastern-style dessert with dates and nuts',
    cookingTime: 30,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Dates', amount: 500, unit: 'g' },
      { name: 'Butter', amount: 100, unit: 'g' },
      { name: 'Almonds', amount: 100, unit: 'g' },
      { name: 'Cardamom', amount: 1, unit: 'tsp' },
      { name: 'Sesame seeds', amount: 50, unit: 'g' },
    ],
    steps: [
      'Pit and chop dates finely',
      'Melt butter in pan',
      'Add dates and cardamom',
      'Cook until thick paste forms',
      'Mix in chopped almonds',
      'Spread on tray and top with sesame seeds',
      'Cool and cut into squares',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1606312619070-d48b4cac5e4f?w=600',
  },
  drinks: {
    alcoholic: 'Limited availability',
    nonAlcoholic: 'Spiced tea, Coffee, Fresh juice',
  },
  music: [
    'Traditional Somali music',
    'Afar folk songs',
    'Red Sea coastal rhythms',
  ],
  decorationIdeas: [
    'Light blue, green and white flag colors',
    'Red Sea imagery',
    'Volcanic landscapes',
    'Desert themes',
  ],
  conversationStarters: [
    'Have you been to the Red Sea?',
    'What do you know about the Horn of Africa?',
  ],
  innovations: [
    {
      name: 'Geothermal Energy Development',
      year: '2018',
      description: 'Djibouti is harnessing its volcanic activity for geothermal power to achieve energy independence',
    },
    {
      name: 'Port of Djibouti Expansion',
      year: '2017',
      description: 'Modern port facilities making Djibouti a major logistics hub for East Africa',
    },
    {
      name: 'Lake Assal Salt Extraction',
      year: 'Traditional',
      description: 'Innovative salt mining techniques in one of the saltiest bodies of water on Earth',
    },
  ],
  quiz: [
    {
      id: 'djibouti-q1',
      question: 'What is the capital of Djibouti?',
      options: ['Djibouti City', 'Addis Ababa', 'Mogadishu', 'Asmara'],
      correctAnswer: 0,
    },
    {
      id: 'djibouti-q2',
      question: 'What is Lake Assal known for?',
      options: ['Highest lake in Africa', 'Lowest point in Africa', 'Largest lake', 'Deepest lake'],
      correctAnswer: 1,
    },
    {
      id: 'djibouti-q3',
      question: 'Which languages are official in Djibouti?',
      options: ['English and Somali', 'French and Arabic', 'Arabic and Somali', 'French and English'],
      correctAnswer: 1,
    },
    {
      id: 'djibouti-q4',
      question: 'Djibouti is located on which body of water?',
      options: ['Mediterranean Sea', 'Red Sea', 'Persian Gulf', 'Indian Ocean'],
      correctAnswer: 1,
    },
    {
      id: 'djibouti-q5',
      question: 'What is the traditional main dish of Djibouti?',
      options: ['Couscous', 'Skoudehkaris', 'Injera', 'Tagine'],
      correctAnswer: 1,
    },
    {
      id: 'djibouti-q6',
      question: 'What is Djibouti known for strategically?',
      options: ['Oil reserves', 'Foreign military bases', 'Diamond mines', 'Agricultural exports'],
      correctAnswer: 1,
    },
    {
      id: 'djibouti-q7',
      question: 'What is the currency of Djibouti?',
      options: ['Euro', 'Dollar', 'Djiboutian Franc', 'Shilling'],
      correctAnswer: 2,
    },
    {
      id: 'djibouti-q8',
      question: 'Djibouti is on which part of Africa?',
      options: ['West Africa', 'Southern Africa', 'Horn of Africa', 'North Africa'],
      correctAnswer: 2,
    },
    {
      id: 'djibouti-q9',
      question: 'What type of climate does Djibouti have?',
      options: ['Tropical rainforest', 'One of the hottest', 'Mediterranean', 'Temperate'],
      correctAnswer: 1,
    },
    {
      id: 'djibouti-q10',
      question: 'Which canal route does Djibouti provide access to?',
      options: ['Panama Canal', 'Suez Canal', 'Kiel Canal', 'Corinth Canal'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 57, y: 24 },
};
