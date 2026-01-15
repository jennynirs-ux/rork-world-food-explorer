import { Country } from '@/types';

export const southAfrica: Country = {
  id: 'south-africa',
  name: 'South Africa',
  code: 'ZA',
  continent: 'Africa',
  flag: '🇿🇦',
  landscapeImage: 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=800',
  description: 'South Africa is known for its diverse cultures, wildlife, and stunning landscapes from mountains to savannas. Often called the "Rainbow Nation," it boasts 11 official languages and is home to incredible biodiversity.',
  quickFacts: [
    { label: 'Capital', value: 'Pretoria, Cape Town, Bloemfontein' },
    { label: 'Population', value: '60 million' },
    { label: 'Official Language', value: '11 languages' },
    { label: 'Currency', value: 'South African Rand (R)' },
    { label: 'Area', value: '1,221,037 km²' },
  ],
  facts: [
    'South Africa has three capital cities: Pretoria (executive), Cape Town (legislative), and Bloemfontein (judicial)',
    'Home to the Big Five: lions, leopards, rhinoceros, elephants, and buffalo',
    'Table Mountain is one of the oldest mountains in the world',
    'South Africa produces almost half of the world\'s gold',
    'The country has 11 official languages',
    'Kruger National Park is one of Africa\'s largest game reserves',
  ],
  foodCulture: 'South African cuisine reflects the diverse cultural heritage, featuring influences from indigenous tribes, Dutch, British, Malay, and Indian cuisines. Braai (barbecue) is a cornerstone of South African food culture.',
  history: [
    {
      year: '1652',
      title: 'Dutch Settlement',
      description: 'Jan van Riebeeck established the first European settlement at the Cape of Good Hope.'
    },
    {
      year: '1948-1994',
      title: 'Apartheid Era',
      description: 'A system of institutionalized racial segregation that was eventually dismantled through international pressure and internal resistance.'
    },
    {
      year: '1994',
      title: 'First Democratic Election',
      description: 'Nelson Mandela became the first black president in South Africa\'s first fully democratic elections.'
    },
  ],
  innovations: [
    {
      name: 'Heart Transplant',
      year: '1967',
      description: 'Dr. Christiaan Barnard performed the world\'s first human heart transplant in Cape Town.'
    },
    {
      name: 'CAT Scan',
      year: '1972',
      description: 'Allan Cormack co-invented the CAT scan technology.'
    },
  ],
  mustVisit: [
    { name: 'Table Mountain', description: 'Iconic flat-topped mountain overlooking Cape Town with panoramic views.' },
    { name: 'Kruger National Park', description: 'World-renowned wildlife reserve home to the Big Five.' },
    { name: 'Robben Island', description: 'Historic island where Nelson Mandela was imprisoned for 18 years.' },
    { name: 'Cape Winelands', description: 'Beautiful wine region with world-class vineyards.' },
    { name: 'Garden Route', description: 'Scenic coastal drive with forests, beaches, and lagoons.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'May-September for wildlife viewing, November-March for beaches.' },
    { item: 'Safari gear', description: 'Neutral-colored clothing and binoculars for game drives.' },
    { item: 'Sun protection', description: 'Strong sun requires high SPF sunscreen and hat.' },
    { item: 'Adaptable clothing', description: 'Weather can vary greatly between regions.' },
  ],
  mainDish: {
    id: 'south-africa-main',
    name: 'Bobotie',
    description: 'A traditional Cape Malay dish of spiced minced meat baked with an egg topping',
    cookingTime: 60,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Ground beef', amount: 1000, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'large' },
      { name: 'Curry powder', amount: 2, unit: 'tbsp' },
      { name: 'Turmeric', amount: 1, unit: 'tsp' },
      { name: 'Dried apricots', amount: 100, unit: 'g' },
      { name: 'Raisins', amount: 50, unit: 'g' },
      { name: 'Bread', amount: 2, unit: 'slices' },
      { name: 'Milk', amount: 300, unit: 'ml' },
      { name: 'Eggs', amount: 3, unit: 'large' },
      { name: 'Bay leaves', amount: 3, unit: 'pieces' },
    ],
    steps: [
      'Soak bread in half the milk, then mash',
      'Fry onions until soft, add ground beef and brown',
      'Add curry powder, turmeric, apricots, raisins, and soaked bread',
      'Transfer mixture to baking dish, push bay leaves on top',
      'Beat eggs with remaining milk and pour over meat',
      'Bake at 180°C for 40 minutes until golden',
      'Serve with yellow rice and chutney',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1585937421612-70e008356f9e?w=600',
  },
  dessert: {
    id: 'south-africa-dessert',
    name: 'Malva Pudding',
    description: 'A sweet and sticky sponge pudding with apricot jam',
    cookingTime: 45,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Sugar', amount: 200, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'large' },
      { name: 'Apricot jam', amount: 2, unit: 'tbsp' },
      { name: 'Flour', amount: 250, unit: 'g' },
      { name: 'Milk', amount: 250, unit: 'ml' },
      { name: 'Butter', amount: 100, unit: 'g' },
      { name: 'Cream', amount: 250, unit: 'ml' },
    ],
    steps: [
      'Beat sugar and eggs, add jam',
      'Mix in flour and milk alternately',
      'Pour into greased baking dish, bake at 180°C for 35 minutes',
      'Heat butter, cream, and sugar for sauce',
      'Pour hot sauce over hot pudding',
      'Serve warm with vanilla ice cream',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600',
  },
  drinks: {
    alcoholic: 'Pinotage wine, Amarula cream liqueur, Castle Lager',
    nonAlcoholic: 'Rooibos tea, Rock shandy, Coke float',
  },
  music: [
    'Pata Pata - Miriam Makeba',
    'Nkalakatha - Mandoza',
    'Jerusalema - Master KG',
    'African Dream - Johnny Clegg',
  ],
  decorationIdeas: [
    'African tribal patterns and textiles',
    'Wooden animal carvings',
    'South African flag colors',
    'Protea flowers (national flower)',
    'Safari-themed decor',
  ],
  conversationStarters: [
    'Have you been on a safari?',
    'What do you know about Nelson Mandela?',
    'Do you enjoy South African wine?',
    'What\'s your favorite African wildlife animal?',
  ],
  quiz: [
    {
      id: 'south-africa-q1',
      question: 'How many capital cities does South Africa have?',
      options: ['One', 'Two', 'Three', 'Four'],
      correctAnswer: 2,
    },
    {
      id: 'south-africa-q2',
      question: 'What are the Big Five animals?',
      options: ['Lion, Tiger, Bear, Elephant, Rhino', 'Lion, Leopard, Rhino, Elephant, Buffalo', 'Lion, Cheetah, Hippo, Giraffe, Zebra', 'Lion, Hyena, Elephant, Rhino, Buffalo'],
      correctAnswer: 1,
    },
    {
      id: 'south-africa-q3',
      question: 'Who performed the first heart transplant?',
      options: ['Nelson Mandela', 'Christiaan Barnard', 'Desmond Tutu', 'Allan Cormack'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 52, y: 10 },
};
