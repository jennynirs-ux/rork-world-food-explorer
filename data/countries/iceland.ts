import { Country } from '@/types';

export const iceland: Country = {
  id: 'iceland',
  name: 'Iceland',
  code: 'IS',
  continent: 'Europe',
  flag: '🇮🇸',
  landscapeImage: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=800',
  description: 'Iceland is a Nordic island nation known for its dramatic volcanic landscapes, geothermal hot springs, massive glaciers, and the stunning Northern Lights. Despite its name, Iceland has a mild climate and a vibrant cultural scene.',
  quickFacts: [
    { label: 'Capital', value: 'Reykjavík' },
    { label: 'Population', value: '380,000' },
    { label: 'Official Language', value: 'Icelandic' },
    { label: 'Currency', value: 'Icelandic Króna (ISK)' },
    { label: 'Area', value: '103,000 km²' },
  ],
  facts: [
    'Iceland has no mosquitoes',
    'About 85% of homes are heated with geothermal energy',
    'Iceland has no standing army',
    'The Icelandic language has changed very little in 1,000 years',
    'Iceland has more writers and artists per capita than any other country',
    'There are no forests in Iceland - Vikings cut them all down',
    'Iceland has 13 Santas called Yule Lads',
    'Beer was banned in Iceland until 1989',
  ],
  foodCulture: 'Icelandic cuisine is based on fresh fish, lamb, and dairy products. Traditional preservation methods like smoking, pickling, and fermentation are still used. Modern Icelandic cuisine combines these traditional elements with contemporary techniques.',
  history: [
    {
      year: '874 AD',
      title: 'First Settlement',
      description: 'Norse Vikings, led by Ingólfur Arnarson, became the first permanent settlers in Iceland.'
    },
    {
      year: '930 AD',
      title: 'Althing Established',
      description: 'Iceland established the Althing, one of the world\'s oldest parliaments still in existence.'
    },
    {
      year: '1000 AD',
      title: 'Christianity Adopted',
      description: 'Iceland peacefully converted to Christianity, preserving many pagan traditions.'
    },
    {
      year: '1944',
      title: 'Independence',
      description: 'Iceland gained full independence from Denmark and became a republic.'
    },
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'June-August for midnight sun, September-March for Northern Lights' },
    { item: 'Visa', description: 'Schengen visa rules apply. Many nationalities can visit visa-free.' },
    { item: 'Transportation', description: 'Car rental recommended for exploring. Ring Road circles the island.' },
    { item: 'Language', description: 'Icelandic. English is widely spoken.' },
    { item: 'Safety', description: 'Very safe. Watch for weather changes and respect nature warnings.' },
  ],
  mainDish: {
    id: 'iceland-plokkfiskur',
    name: 'Plokkfiskur',
    description: 'Traditional Icelandic fish stew made with white fish and potatoes in a creamy sauce',
    cookingTime: 40,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'White fish (cod or haddock)', amount: 500, unit: 'g' },
      { name: 'Potatoes', amount: 600, unit: 'g' },
      { name: 'Onion', amount: 1, unit: 'large' },
      { name: 'Butter', amount: 50, unit: 'g' },
      { name: 'Flour', amount: 3, unit: 'tbsp' },
      { name: 'Milk', amount: 400, unit: 'ml' },
      { name: 'Fish stock', amount: 200, unit: 'ml' },
      { name: 'Bay leaf', amount: 1, unit: 'piece' },
      { name: 'Salt and pepper', amount: 1, unit: 'to taste' },
    ],
    steps: [
      'Boil potatoes until tender, then peel and roughly mash',
      'Poach fish in water with bay leaf until cooked, then flake',
      'Dice onion and sauté in butter until soft',
      'Add flour and stir to make a roux',
      'Gradually add milk and fish stock, stirring constantly',
      'Add mashed potatoes and flaked fish',
      'Season with salt and pepper',
      'Simmer gently for 10 minutes, stirring occasionally',
      'Serve hot with rye bread',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600',
  },
  drinks: {
    alcoholic: 'Brennivín (schnapps), Icelandic beer, Local craft spirits',
    nonAlcoholic: 'Glacier water, Coffee, Malt-based soft drink (Malt og Appelsín)',
  },
  music: ['Sigur Rós', 'Björk', 'Of Monsters and Men', 'Traditional rímur chanting'],
  decorationIdeas: [
    'Blue and white colors (ice and snow)',
    'Volcanic rock decorations',
    'Northern Lights imagery',
    'Icelandic wool patterns',
    'Minimalist Nordic design',
    'Lupine flowers',
  ],
  conversationStarters: [
    'Have you ever seen the Northern Lights?',
    'Would you swim in the Blue Lagoon?',
    'Do you believe in elves? Many Icelanders do!',
    'What\'s the most volcanic landscape you\'ve visited?',
  ],
  quiz: [
    {
      id: 'iceland-q1',
      question: 'What is Iceland\'s capital city?',
      options: ['Oslo', 'Helsinki', 'Reykjavík', 'Copenhagen'],
      correctAnswer: 2,
    },
    {
      id: 'iceland-q2',
      question: 'What percentage of Iceland is heated by geothermal energy?',
      options: ['30%', '50%', '65%', '85%'],
      correctAnswer: 3,
    },
    {
      id: 'iceland-q3',
      question: 'When did Iceland gain independence from Denmark?',
      options: ['1904', '1918', '1944', '1960'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 42, y: 65 },
};