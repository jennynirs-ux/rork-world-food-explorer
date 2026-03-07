import { Country } from '@/types';

export const barbados: Country = {
  id: 'barbados',
  name: 'Barbados',
  code: 'BB',
  continent: 'North America',
  flag: '🇧🇧',
  landscapeImage: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80',
  description: 'Barbados is an eastern Caribbean island known for beautiful beaches, British colonial heritage, and as the birthplace of rum.',
  quickFacts: [
    { label: 'Capital', value: 'Bridgetown' },
    { label: 'Population', value: '287,000' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'Barbadian Dollar' },
    { label: 'Area', value: '430 km²' },
  ],
  facts: [
    'Barbados is considered the birthplace of rum',
    'Rihanna, the famous singer, is from Barbados',
    'The island has been independent since 1966',
    'Cricket is the most popular sport',
    'Barbados has over 70 miles of beautiful beaches',
    'The island was continuously British for 300+ years',
    'George Washington visited Barbados in 1751, his only trip outside North America',
    'Barbados became a republic in 2021',
  ],
  foodCulture: 'Bajan cuisine combines African, British, and Caribbean influences. Flying fish is the national dish, often served with cou-cou. Fresh seafood, tropical fruits, and spicy pepper sauces are staples. The island has a strong tradition of street food and fish fries.',
  history: [
    {
      year: '1627',
      title: 'British Settlement',
      description: 'The English landed and established the first permanent European settlement, making Barbados a British colony.'
    },
    {
      year: '1600s-1800s',
      title: 'Sugar Plantation Era',
      description: 'Barbados became one of the world\'s leading sugar producers, powered by enslaved African labor and creating immense wealth.'
    },
    {
      year: '1834',
      title: 'Emancipation',
      description: 'Slavery was abolished throughout the British Empire, fundamentally changing Barbadian society.'
    },
    {
      year: '1966',
      title: 'Independence',
      description: 'Barbados gained independence from Britain while remaining part of the Commonwealth.'
    },
    {
      year: '2021',
      title: 'Republic Status',
      description: 'Barbados removed Queen Elizabeth II as head of state and became a republic.'
    },
  ],
  innovations: [
    {
      name: 'Rum Production',
      year: '1703',
      description: 'Mount Gay Rum, established in 1703, is the oldest existing rum company in the world. Barbados refined distillation techniques that shaped the global rum industry.'
    },
    {
      name: 'Crop Over Festival',
      year: '1780s',
      description: 'A harvest festival tradition that evolved into one of the Caribbean\'s most vibrant cultural celebrations, influencing carnival culture across the region.'
    },
    {
      name: 'Grantley Adams International Airport Hub',
      year: '1939',
      description: 'Barbados became a critical aviation hub connecting the Americas with Africa and Europe during WWII and beyond.'
    },
    {
      name: 'Solar Water Heating Adoption',
      year: '1970s',
      description: 'Barbados achieved one of the world\'s highest rates of solar water heater installation per capita, pioneering renewable energy in the Caribbean.'
    },
  ],
  mustVisit: [
    { name: 'Harrison\'s Cave', description: 'Spectacular crystallized limestone cavern with underground streams, waterfalls, and deep pools accessed by tram.' },
    { name: 'Bathsheba Beach', description: 'Dramatic coastline on the Atlantic side with huge boulders and powerful surf, popular with photographers and surfers.' },
    { name: 'St. Nicholas Abbey', description: 'One of the oldest plantation houses in the Caribbean, with a rum distillery and beautiful gardens.' },
    { name: 'Carlisle Bay', description: 'Pristine beach on the calm Caribbean coast, perfect for swimming and snorkeling with shipwrecks.' },
    { name: 'Oistins Fish Fry', description: 'Friday night street food festival where locals gather for fresh fish, music, and dancing.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'December to April for dry season and perfect beach weather.' },
    { item: 'Visa', description: 'Many nationalities receive visa-free entry for up to 90 days.' },
    { item: 'Currency', description: 'Barbadian Dollar (fixed 2:1 rate with USD). US dollars widely accepted.' },
    { item: 'Transport', description: 'Buses are cheap and frequent. Taxis and rental cars available.' },
    { item: 'Sun protection', description: 'Strong tropical sun year-round—bring reef-safe sunscreen.' },
    { item: 'Dress code', description: 'Beachwear for beaches only; dress modestly when in town or at restaurants.' }
  ],
  mainDish: {
    id: 'barbados-main',
    name: 'Flying Fish and Cou-Cou',
    description: 'National dish with seasoned flying fish and cornmeal-okra pudding',
    cookingTime: 60,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'Flying fish fillets', amount: 8, unit: 'pieces' },
      { name: 'Cornmeal', amount: 200, unit: 'g' },
      { name: 'Okra', amount: 300, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Scotch bonnet pepper', amount: 1, unit: 'whole' },
    ],
    steps: [
      'Season fish with herbs and spices',
      'Steam or fry fish until cooked',
      'Boil okra until soft',
      'Gradually add cornmeal to okra water, stirring constantly',
      'Cook until smooth pudding forms',
      'Serve fish over cou-cou with tomato sauce',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
  },
  dessert: {
    id: 'barbados-dessert',
    name: 'Coconut Bread',
    description: 'Sweet Bajan coconut bread with hints of spice, perfect with tea',
    cookingTime: 75,
    servings: 10,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'All-purpose flour', amount: 400, unit: 'g' },
      { name: 'Grated coconut', amount: 200, unit: 'g' },
      { name: 'Brown sugar', amount: 200, unit: 'g' },
      { name: 'Butter, melted', amount: 100, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'large' },
      { name: 'Milk', amount: 200, unit: 'ml' },
      { name: 'Baking powder', amount: 2, unit: 'tsp' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'Nutmeg', amount: 0.5, unit: 'tsp' },
      { name: 'Cinnamon', amount: 0.5, unit: 'tsp' },
    ],
    steps: [
      'Preheat oven to 175°C. Grease a loaf pan.',
      'Mix flour, baking powder, nutmeg, and cinnamon.',
      'In another bowl, beat eggs with brown sugar.',
      'Add melted butter, milk, and vanilla to egg mixture.',
      'Fold in grated coconut.',
      'Combine wet and dry ingredients, mix until just combined.',
      'Pour into prepared loaf pan.',
      'Bake for 55-65 minutes until golden and a skewer comes out clean.',
      'Cool in pan for 10 minutes, then turn out onto wire rack.',
      'Slice and serve warm or at room temperature.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1586444248902-2367d0e7dbb7?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Mount Gay Rum, Banks Beer, Rum punch',
    nonAlcoholic: 'Mauby, Sorrel, Coconut water',
  },
  music: [
    'Calypso',
    'Soca',
    'Spouge',
    'Rihanna hits',
  ],
  decorationIdeas: [
    'Blue, yellow, and black flag colors',
    'Beach and ocean themes',
    'Tropical flowers',
    'Rum barrels',
  ],
  conversationStarters: [
    'Have you tried authentic Caribbean rum?',
    'Do you enjoy island music?',
    'What\'s your ideal beach vacation?',
  ],
  quiz: [
    {
      id: 'barbados-q1',
      question: 'What is the capital of Barbados?',
      options: ['Bridgetown', 'Kingston', 'Nassau', 'Castries'],
      correctAnswer: 0,
    },
    {
      id: 'barbados-q2',
      question: 'What is considered the national dish of Barbados?',
      options: ['Jerk chicken', 'Flying fish and cou-cou', 'Roti', 'Curry goat'],
      correctAnswer: 1,
    },
    {
      id: 'barbados-q3',
      question: 'Which famous singer was born in Barbados?',
      options: ['Beyoncé', 'Rihanna', 'Alicia Keys', 'Whitney Houston'],
      correctAnswer: 1,
    },
    {
      id: 'barbados-q4',
      question: 'In which year did Barbados gain independence?',
      options: ['1956', '1966', '1976', '1986'],
      correctAnswer: 1,
    },
    {
      id: 'barbados-q5',
      question: 'What is Barbados considered the birthplace of?',
      options: ['Reggae music', 'Steel drums', 'Rum', 'Cricket'],
      correctAnswer: 2,
    },
    {
      id: 'barbados-q6',
      question: 'What is the most popular sport in Barbados?',
      options: ['Football', 'Basketball', 'Cricket', 'Baseball'],
      correctAnswer: 2,
    },
    {
      id: 'barbados-q7',
      question: 'Which rum company established in 1703 is the oldest in the world?',
      options: ['Bacardi', 'Mount Gay', 'Captain Morgan', 'Appleton Estate'],
      correctAnswer: 1,
    },
    {
      id: 'barbados-q8',
      question: 'When did Barbados become a republic?',
      options: ['2015', '2018', '2021', '2023'],
      correctAnswer: 2,
    },
    {
      id: 'barbados-q9',
      question: 'Which US president visited Barbados, his only trip outside North America?',
      options: ['Thomas Jefferson', 'George Washington', 'Abraham Lincoln', 'John Adams'],
      correctAnswer: 1,
    },
    {
      id: 'barbados-q10',
      question: 'What is the name of the famous Friday night street food festival in Barbados?',
      options: ['Fish Market', 'Oistins Fish Fry', 'Bridgetown BBQ', 'Seafood Saturday'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 26, y: 25 },
};
