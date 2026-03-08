import { Country } from '@/types';

export const southAfrica: Country = {
  id: 'south-africa',
  name: 'South Africa',
  code: 'ZA',
  continent: 'Africa',
  flag: '🇿🇦',
  landscapeImage: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80',
  description:
    'South Africa is known for its diverse cultures, wildlife, and dramatic landscapes ranging from mountains and coastlines to vast savannas. Often called the "Rainbow Nation," it has 11 official languages and remarkable biodiversity.',
  quickFacts: [
    { label: 'Capital', value: 'Pretoria, Cape Town, Bloemfontein' },
    { label: 'Population', value: '60 million' },
    { label: 'Official Languages', value: '11 official languages' },
    { label: 'Currency', value: 'South African Rand (ZAR)' },
    { label: 'Area', value: '1,221,037 km²' },
  ],
  facts: [
    'South Africa has three capital cities with different governmental roles',
    'It is home to the Big Five safari animals',
    'Table Mountain is one of the oldest mountains on Earth',
    'The country has produced world-class athletes, musicians, and leaders',
    'South Africa has coastlines on both the Atlantic and Indian Oceans',
    'Kruger National Park is one of Africa’s largest game reserves',
    'The country has 11 official languages, one of the most in the world',
    'Ubuntu is a core cultural philosophy meaning humanity toward others',
  ],
  foodCulture:
    'South African cuisine reflects indigenous traditions and influences from Dutch, British, Malay, and Indian settlers. Braai (barbecue) is central to social life, and dishes often combine sweet, savory, and spicy flavors.',

  history: [
    {
      year: '1652',
      title: 'Dutch Settlement',
      description:
        'Jan van Riebeeck established the first European settlement at the Cape of Good Hope.',
    },
    {
      year: '1948–1994',
      title: 'Apartheid Era',
      description:
        'A system of institutionalized racial segregation enforced by law.',
    },
    {
      year: '1994',
      title: 'Democratic Transition',
      description:
        'South Africa held its first democratic elections, electing Nelson Mandela as president.',
    },
  ],

  innovations: [
    {
      name: 'First Heart Transplant',
      year: '1967',
      description:
        'Dr. Christiaan Barnard performed the world’s first human heart transplant in Cape Town.',
    },
    {
      name: 'CT Scan Technology',
      year: '1972',
      description:
        'Allan Cormack co-developed the mathematical foundations of the CAT scan.',
    },
  ],

  mustVisit: [
    { name: 'Table Mountain', description: 'Iconic mountain overlooking Cape Town.' },
    { name: 'Kruger National Park', description: 'World-famous safari destination.' },
    { name: 'Robben Island', description: 'Historic prison where Nelson Mandela was held.' },
    { name: 'Cape Winelands', description: 'Renowned vineyards and scenic valleys.' },
    { name: 'Garden Route', description: 'Spectacular coastal drive and nature experience.' },
  ],

  travelEssentials: [
    { item: 'Best time to visit', description: 'May–September for safaris; November–March for beaches.' },
    { item: 'Sun protection', description: 'High SPF sunscreen and hats are essential.' },
    { item: 'Transport', description: 'Car rental recommended for flexibility.' },
    { item: 'Health', description: 'Travel insurance advised for long distances.' },
  ],

  mainDish: {
    id: 'south-africa-bobotie',
    name: 'Bobotie',
    description:
      'A traditional Cape Malay dish of spiced minced meat baked with a savory egg custard topping.',
    cookingTime: 60,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Ground beef', amount: 1000, unit: 'g' },
      { name: 'Onions, chopped', amount: 2, unit: 'large' },
      { name: 'Curry powder', amount: 2, unit: 'tbsp' },
      { name: 'Turmeric', amount: 1, unit: 'tsp' },
      { name: 'Dried apricots, chopped', amount: 100, unit: 'g' },
      { name: 'Raisins', amount: 50, unit: 'g' },
      { name: 'White bread', amount: 2, unit: 'slices' },
      { name: 'Milk', amount: 300, unit: 'ml' },
      { name: 'Eggs', amount: 3, unit: 'large' },
      { name: 'Bay leaves', amount: 3, unit: 'pieces' },
      { name: 'Salt', amount: 1, unit: 'tsp' },
      { name: 'Black pepper', amount: 0.5, unit: 'tsp' },
    ],
    steps: [
      'Preheat oven to 180°C.',
      'Soak bread in 150 ml milk, then mash.',
      'Sauté onions until soft, add ground beef and brown.',
      'Stir in curry powder, turmeric, apricots, raisins, and soaked bread.',
      'Season with salt and pepper.',
      'Transfer mixture to baking dish and insert bay leaves.',
      'Whisk eggs with remaining milk and pour over meat.',
      'Bake for 40 minutes until golden and set.',
      'Remove bay leaves before serving.',
      'Serve with yellow rice and chutney.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=700',
  },

  dessert: {
    id: 'south-africa-malva-pudding',
    name: 'Malva Pudding',
    description:
      'A classic South African sponge pudding soaked in warm cream sauce.',
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
      'Beat sugar and eggs until pale.',
      'Mix in apricot jam.',
      'Fold in flour and milk alternately.',
      'Bake at 180°C for 35 minutes.',
      'Heat butter and cream to make sauce.',
      'Pour hot sauce over hot pudding.',
      'Rest 5 minutes before serving.',
      'Serve warm with ice cream or custard.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565680018093-ebb6e3a67f44?w=700',
  },

  drinks: {
    alcoholic: 'Pinotage wine, Amarula, Castle Lager',
    nonAlcoholic: 'Rooibos tea, Rock shandy, Ginger beer',
  },

  music: [
    'Miriam Makeba – Pata Pata',
    'Johnny Clegg – African Dream',
    'Master KG – Jerusalema',
    'Traditional Zulu and Xhosa music',
  ],

  decorationIdeas: [
    'South African flag colors',
    'Safari and wildlife elements',
    'Tribal patterns and textiles',
    'Protea flowers',
    'Wooden carvings',
  ],

  conversationStarters: [
    'Have you ever been on a safari?',
    'What do you know about Nelson Mandela?',
    'Would you try a traditional braai?',
    'Which Big Five animal is your favorite?',
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
      question: 'Which animals make up the Big Five?',
      options: [
        'Lion, Tiger, Bear, Elephant, Rhino',
        'Lion, Leopard, Rhino, Elephant, Buffalo',
        'Lion, Cheetah, Hippo, Giraffe, Zebra',
        'Lion, Hyena, Elephant, Rhino, Buffalo',
      ],
      correctAnswer: 1,
    },
    {
      id: 'south-africa-q3',
      question: 'Who became president in 1994?',
      options: ['Desmond Tutu', 'Nelson Mandela', 'Thabo Mbeki', 'F.W. de Klerk'],
      correctAnswer: 1,
    },
    {
      id: 'south-africa-q4',
      question: 'What is a traditional South African barbecue called?',
      options: ['Asado', 'Braai', 'Tandoor', 'Grillfest'],
      correctAnswer: 1,
    },
    {
      id: 'south-africa-q5',
      question: 'Which mountain overlooks Cape Town?',
      options: ['Mount Kenya', 'Table Mountain', 'Drakensberg', 'Mount Kilimanjaro'],
      correctAnswer: 1,
    },
    {
      id: 'south-africa-q6',
      question: 'How many official languages does South Africa have?',
      options: ['5', '7', '9', '11'],
      correctAnswer: 3,
    },
    {
      id: 'south-africa-q7',
      question: 'Which national park is famous for safaris?',
      options: ['Serengeti', 'Etosha', 'Kruger', 'Masai Mara'],
      correctAnswer: 2,
    },
    {
      id: 'south-africa-q8',
      question: 'What ocean borders South Africa to the east?',
      options: ['Atlantic', 'Indian', 'Pacific', 'Southern'],
      correctAnswer: 1,
    },
    {
      id: 'south-africa-q9',
      question: 'Which dessert is traditionally South African?',
      options: ['Baklava', 'Malva Pudding', 'Pavlova', 'Churros'],
      correctAnswer: 1,
    },
    {
      id: 'south-africa-q10',
      question: 'Which flower is a national symbol of South Africa?',
      options: ['Rose', 'Lotus', 'Protea', 'Tulip'],
      correctAnswer: 2,
    },
  ],

  coordinates: { x: 52, y: 10 },
};
