import { Country } from '@/types';

export const algeria: Country = {
  id: 'algeria',
  name: 'Algeria',
  code: 'DZ',
  continent: 'Africa',
  flag: '🇩🇿',
  landscapeImage: 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800',
  description: 'Algeria is the largest country in Africa, featuring the vast Sahara Desert, Mediterranean coastline, and rich Berber and Arab heritage. Known for its ancient ruins, beautiful architecture, and diverse landscapes.',
  quickFacts: [
    { label: 'Capital', value: 'Algiers' },
    { label: 'Population', value: '44.9 million' },
    { label: 'Official Languages', value: 'Arabic, Berber' },
    { label: 'Currency', value: 'Algerian Dinar (DZD)' },
    { label: 'Area', value: '2,381,741 km²' },
  ],
  facts: [
    'Algeria is the largest country in Africa and 10th largest in the world',
    'Over 90% of Algeria is covered by the Sahara Desert',
    'Algeria has seven UNESCO World Heritage Sites',
    'The country is the world\'s 6th largest producer of natural gas',
    'Algiers was once known as the "Paris of Africa"',
    'The Hoggar Mountains contain some of the Sahara\'s most dramatic scenery',
    'Algeria achieved independence from France in 1962 after a long war',
    'Couscous originated in North Africa, including Algeria',
  ],
  foodCulture: 'Algerian cuisine blends Berber, Arab, Turkish, and French influences. Couscous is the staple dish, often served with vegetables and meat. Meals are communal, reflecting the importance of family. Bread accompanies every meal, and mint tea is the beverage of choice.',
  history: [
    {
      year: '3000 BC',
      title: 'Berber Civilization',
      description: 'Indigenous Berber peoples established settlements and developed trade networks across North Africa.'
    },
    {
      year: '800s',
      title: 'Arab Conquest',
      description: 'Arab armies brought Islam and Arabic language, blending with Berber culture.'
    },
    {
      year: '1830-1962',
      title: 'French Colonization',
      description: 'France colonized Algeria, leading to a long and bitter independence struggle.'
    },
    {
      year: '1962-Present',
      title: 'Independent Algeria',
      description: 'After gaining independence, Algeria developed its oil and gas resources and modernized.'
    },
  ],
  innovations: [
    {
      name: 'Couscous',
      year: 'Ancient',
      description: 'Algeria played a key role in developing couscous, now a staple across North Africa and beyond.'
    },
    {
      name: 'Berber Calendar',
      year: 'Ancient',
      description: 'The Berber calendar, still used today, dates back thousands of years.'
    },
    {
      name: 'Desert Navigation',
      year: 'Traditional',
      description: 'Tuareg and Berber peoples developed sophisticated desert navigation techniques.'
    },
    {
      name: 'Rai Music',
      year: '1920s',
      description: 'Algeria gave birth to Raï music, which gained international popularity.'
    },
  ],
  mustVisit: [
    { name: 'Timgad', description: 'Exceptionally well-preserved Roman ruins, sometimes called the "Pompeii of North Africa."' },
    { name: 'Casbah of Algiers', description: 'UNESCO World Heritage medina with winding streets and Ottoman-era architecture.' },
    { name: 'Tassili n\'Ajjer', description: 'Vast plateau with prehistoric rock art dating back 12,000 years.' },
    { name: 'Oran', description: 'Coastal city known as the birthplace of Raï music and beautiful Mediterranean views.' },
    { name: 'Sahara Desert', description: 'Explore sand dunes, oases, and the stunning landscapes of the world\'s largest hot desert.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'October-April for cooler weather; avoid summer when temperatures exceed 45°C.' },
    { item: 'Modest clothing', description: 'Dress conservatively, especially outside major cities.' },
    { item: 'French language skills', description: 'French is widely spoken alongside Arabic; helpful for travelers.' },
    { item: 'Desert gear', description: 'If visiting Sahara, bring sun protection, warm clothing for nights.' },
    { item: 'Visa requirements', description: 'Most visitors need a visa; arrange in advance.' },
    { item: 'Cash', description: 'Credit cards not widely accepted outside major hotels.' }
  ],
  mainDish: {
    id: 'algeria-main',
    name: 'Couscous with Seven Vegetables',
    description: 'Traditional Algerian couscous with vegetables and chickpeas in aromatic broth',
    cookingTime: 60,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Couscous', amount: 500, unit: 'g' },
      { name: 'Carrots', amount: 3, unit: 'large' },
      { name: 'Zucchini', amount: 2, unit: 'medium' },
      { name: 'Turnips', amount: 2, unit: 'medium' },
      { name: 'Chickpeas', amount: 400, unit: 'g' },
      { name: 'Tomatoes', amount: 3, unit: 'large' },
      { name: 'Onions', amount: 2, unit: 'large' },
      { name: 'Bell peppers', amount: 2, unit: 'whole' },
      { name: 'Ras el hanout', amount: 2, unit: 'tbsp' },
      { name: 'Harissa paste', amount: 1, unit: 'tbsp' },
    ],
    steps: [
      'Soak chickpeas overnight, then cook until tender',
      'Sauté onions in olive oil until soft',
      'Add ras el hanout, stir until fragrant',
      'Add large chunks of vegetables and tomatoes',
      'Cover with water, bring to boil, then simmer 30 minutes',
      'Prepare couscous: pour boiling water over it, let steam 10 minutes',
      'Fluff couscous with fork, add butter',
      'Season vegetable broth with salt and harissa',
      'Serve couscous in large dish, vegetables on top',
      'Ladle some broth over couscous, serve extra broth on side',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1595777216776-e1c8ba8b38eb?w=600',
  },
  dessert: {
    id: 'algeria-dessert',
    name: 'Makroud',
    description: 'Semolina pastries filled with dates and fried, then soaked in honey',
    cookingTime: 60,
    servings: 20,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Semolina', amount: 500, unit: 'g' },
      { name: 'Butter, melted', amount: 150, unit: 'g' },
      { name: 'Orange blossom water', amount: 3, unit: 'tbsp' },
      { name: 'Date paste', amount: 400, unit: 'g' },
      { name: 'Cinnamon', amount: 2, unit: 'tsp' },
      { name: 'Honey', amount: 300, unit: 'g' },
      { name: 'Vegetable oil for frying', amount: 500, unit: 'ml' },
    ],
    steps: [
      'Mix semolina with melted butter until crumbly',
      'Add orange blossom water and knead into smooth dough',
      'Let rest for 30 minutes',
      'Mix date paste with cinnamon',
      'Roll dough into long rectangles',
      'Place date paste in center, fold dough over',
      'Cut into diamond shapes with ridged cutter',
      'Heat oil to 350°F and fry until golden',
      'Warm honey with a little water',
      'Dip fried makroud in honey while hot',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1571506165871-ee72a35bc9d1?w=600',
  },
  drinks: {
    alcoholic: 'Algerian wine (limited availability)',
    nonAlcoholic: 'Mint tea, Turkish coffee, Qahwa (Arabic coffee), Fresh orange juice, Almond milk',
  },
  music: [
    'Raï music',
    'Khaled - Didi',
    'Chaâbi (traditional folk)',
    'Andalusian classical music',
    'Berber music',
  ],
  decorationIdeas: [
    'Green and white flag colors',
    'Berber textiles and carpets',
    'Moorish geometric patterns',
    'Brass tea sets',
    'Desert-inspired earth tones',
  ],
  conversationStarters: [
    'Have you ever visited the Sahara Desert?',
    'What do you know about North African cuisine?',
    'Have you tried authentic couscous?',
    'What interests you about Berber culture?',
    'Have you heard Raï music?',
  ],
  quiz: [
    {
      id: 'algeria-q1',
      question: 'What is the capital of Algeria?',
      options: ['Oran', 'Constantine', 'Algiers', 'Annaba'],
      correctAnswer: 2,
    },
    {
      id: 'algeria-q2',
      question: 'What percentage of Algeria is covered by the Sahara Desert?',
      options: ['50%', '70%', '90%', '100%'],
      correctAnswer: 2,
    },
    {
      id: 'algeria-q3',
      question: 'What is the traditional staple dish of Algeria?',
      options: ['Pasta', 'Rice', 'Couscous', 'Bread'],
      correctAnswer: 2,
    },
    {
      id: 'algeria-q4',
      question: 'When did Algeria gain independence from France?',
      options: ['1945', '1954', '1962', '1970'],
      correctAnswer: 2,
    },
    {
      id: 'algeria-q5',
      question: 'What music genre originated in Algeria?',
      options: ['Jazz', 'Raï', 'Reggae', 'Samba'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 47, y: 32 },
};
