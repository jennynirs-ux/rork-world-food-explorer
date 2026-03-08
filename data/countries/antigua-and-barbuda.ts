import { Country } from '@/types';

export const antiguaAndBarbuda: Country = {
  id: 'antigua-and-barbuda',
  name: 'Antigua and Barbuda',
  code: 'AG',
  continent: 'North America',
  flag: '🇦🇬',
  landscapeImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
  description: 'Antigua and Barbuda is a twin-island nation in the Caribbean, known for 365 beaches, British colonial heritage, and vibrant carnival celebrations.',
  quickFacts: [
    { label: 'Capital', value: 'St. John\'s' },
    { label: 'Population', value: '98,000' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'East Caribbean Dollar' },
    { label: 'Area', value: '442 km²' },
  ],
  facts: [
    'Antigua is said to have 365 beaches, one for each day of the year',
    'The islands were once a major sugar producer',
    'Cricket is the national sport',
    'Nelson\'s Dockyard is a UNESCO World Heritage Site',
    'The island was named by Christopher Columbus after a church in Seville',
    'Antigua and Barbuda gained independence in 1981',
    'The country is part of the Commonwealth',
    'Sailing Week is one of the Caribbean\'s top regattas',
  ],
  foodCulture: 'Caribbean cuisine with African, British, and indigenous influences. Fresh seafood, tropical fruits, and spicy dishes are staples. Fungi (cornmeal and okra) and saltfish are traditional favorites.',
  history: [
    {
      year: 'Pre-1493',
      title: 'Indigenous Inhabitants',
      description:
        'The islands were originally inhabited by the Siboney people, followed by Arawaks and Caribs who lived off fishing and agriculture.',
    },
    {
      year: '1493',
      title: 'European Discovery',
      description:
        'Christopher Columbus landed on Antigua during his second voyage, naming it after the Church of Santa María de la Antigua.',
    },
    {
      year: '1632',
      title: 'British Colonization',
      description:
        'The British established a colony on Antigua, developing sugar plantations that relied on enslaved African labor.',
    },
    {
      year: '1834',
      title: 'Emancipation',
      description:
        'Slavery was abolished across British colonies, transforming the social and economic structure of the islands.',
    },
    {
      year: '1981',
      title: 'Independence',
      description:
        'Antigua and Barbuda gained independence from Britain, becoming a sovereign nation within the Commonwealth.',
    },
  ],
  innovations: [
    {
      name: 'Nelson\'s Dockyard',
      year: '18th Century',
      description:
        'A Georgian-era naval dockyard that became a UNESCO World Heritage Site, showcasing maritime heritage and restoration.',
    },
    {
      name: 'Carnival Culture',
      year: 'Traditional',
      description:
        'The annual Carnival celebration combines African traditions, colonial history, and Caribbean creativity into a world-renowned festival.',
    },
    {
      name: 'Sustainable Tourism',
      year: 'Modern',
      description:
        'Antigua has pioneered eco-friendly tourism initiatives to protect its natural beaches and marine environments.',
    },
  ],
  mustVisit: [
    { name: 'Nelson\'s Dockyard', description: 'UNESCO World Heritage Site and restored 18th-century naval base.' },
    { name: 'Half Moon Bay', description: 'Crescent-shaped beach with pristine white sand and turquoise waters.' },
    { name: 'Shirley Heights', description: 'Historic military lookout with panoramic views and Sunday sunset parties.' },
    { name: 'Stingray City', description: 'Shallow waters where you can interact with friendly southern stingrays.' },
    { name: 'Devil\'s Bridge', description: 'Natural limestone arch carved by Atlantic waves on the eastern coast.' },
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'December–April for dry season; avoid September–November hurricane season.' },
    { item: 'Currency', description: 'East Caribbean Dollar (XCD), but US dollars widely accepted.' },
    { item: 'Sun protection', description: 'Strong Caribbean sun requires high SPF sunscreen, hat, and sunglasses.' },
    { item: 'Water activities', description: 'Bring or rent snorkeling gear to explore coral reefs and marine life.' },
    { item: 'Language', description: 'English is the official language, making communication easy for visitors.' },
    { item: 'Island hopping', description: 'Consider ferry to Barbuda for pink sand beaches and frigate bird sanctuary.' },
  ],
  mainDish: {
    id: 'antigua-main',
    name: 'Pepperpot',
    description: 'Traditional Caribbean stew with vegetables and salted meat',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Salted beef', amount: 500, unit: 'g' },
      { name: 'Spinach', amount: 300, unit: 'g' },
      { name: 'Okra', amount: 200, unit: 'g' },
      { name: 'Eggplant', amount: 1, unit: 'whole' },
      { name: 'Coconut milk', amount: 400, unit: 'ml' },
      { name: 'Scotch bonnet pepper', amount: 1, unit: 'whole' },
    ],
    steps: [
      'Soak salted beef overnight to remove excess salt',
      'Boil beef until tender',
      'Add chopped vegetables and coconut milk',
      'Add whole scotch bonnet for flavor (don\'t break it)',
      'Simmer until vegetables are soft',
      'Serve with rice or dumplings',
    ],
    imageUrl: 'https://images.pexels.com/photos/29089211/pexels-photo-29089211.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  dessert: {
    id: 'antigua-dessert',
    name: 'Ducana',
    description: 'Sweet potato pudding wrapped in banana leaves and steamed',
    cookingTime: 75,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Sweet potatoes, grated', amount: 600, unit: 'g' },
      { name: 'Grated coconut', amount: 200, unit: 'g' },
      { name: 'Brown sugar', amount: 150, unit: 'g' },
      { name: 'All-purpose flour', amount: 100, unit: 'g' },
      { name: 'Raisins', amount: 100, unit: 'g' },
      { name: 'Cinnamon', amount: 1, unit: 'tsp' },
      { name: 'Nutmeg', amount: 0.5, unit: 'tsp' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'Butter, melted', amount: 50, unit: 'g' },
      { name: 'Banana leaves (or aluminum foil)', amount: 8, unit: 'pieces' },
    ],
    steps: [
      'If using banana leaves, soften by passing over flame briefly.',
      'Mix grated sweet potato with coconut, sugar, and flour.',
      'Add raisins, cinnamon, nutmeg, and vanilla.',
      'Stir in melted butter until well combined.',
      'Place a portion of mixture in center of each banana leaf.',
      'Fold leaves into packets and tie with string.',
      'Place packets in steamer basket over boiling water.',
      'Steam for 60 minutes until firm.',
      'Cool slightly before unwrapping.',
      'Serve warm or at room temperature.',
    ],
    imageUrl: 'https://images.pexels.com/photos/35583855/pexels-photo-35583855.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  drinks: {
    alcoholic: 'Rum punch, Cavalier rum',
    nonAlcoholic: 'Coconut water, Tamarind juice, Sorrel drink',
  },
  music: [
    'Calypso',
    'Soca',
    'Reggae',
    'Steel pan music',
  ],
  decorationIdeas: [
    'Tropical flowers and palm leaves',
    'Bright Caribbean colors',
    'Beach and ocean themes',
    'Cricket equipment',
  ],
  conversationStarters: [
    'Have you experienced Caribbean carnival?',
    'What\'s your favorite beach destination?',
    'Do you enjoy water sports?',
  ],
  quiz: [
    {
      id: 'antigua-q1',
      question: 'What is the capital of Antigua and Barbuda?',
      options: ['Bridgetown', 'St. John\'s', 'Castries', 'Nassau'],
      correctAnswer: 1,
    },
    {
      id: 'antigua-q2',
      question: 'How many beaches does Antigua reportedly have?',
      options: ['100', '200', '365', '500'],
      correctAnswer: 2,
    },
    {
      id: 'antigua-q3',
      question: 'What is the national sport of Antigua and Barbuda?',
      options: ['Football', 'Cricket', 'Baseball', 'Basketball'],
      correctAnswer: 1,
    },
    {
      id: 'antigua-q4',
      question: 'Which UNESCO World Heritage Site is located in Antigua?',
      options: ['Fort Charlotte', 'Nelson\'s Dockyard', 'Brimstone Hill', 'Port Royal'],
      correctAnswer: 1,
    },
    {
      id: 'antigua-q5',
      question: 'When did Antigua and Barbuda gain independence?',
      options: ['1962', '1973', '1981', '1990'],
      correctAnswer: 2,
    },
    {
      id: 'antigua-q6',
      question: 'What is the currency of Antigua and Barbuda?',
      options: ['Barbadian Dollar', 'East Caribbean Dollar', 'US Dollar', 'Antiguan Peso'],
      correctAnswer: 1,
    },
    {
      id: 'antigua-q7',
      question: 'Who named Antigua?',
      options: ['Amerigo Vespucci', 'Christopher Columbus', 'Sir Francis Drake', 'Vasco da Gama'],
      correctAnswer: 1,
    },
    {
      id: 'antigua-q8',
      question: 'What is Pepperpot traditionally served with?',
      options: ['Couscous', 'Rice or dumplings', 'Pasta', 'Bread only'],
      correctAnswer: 1,
    },
    {
      id: 'antigua-q9',
      question: 'Which historic site offers panoramic views and Sunday sunset parties?',
      options: ['Devil\'s Bridge', 'Shirley Heights', 'Fig Tree Drive', 'Darkwood Beach'],
      correctAnswer: 1,
    },
    {
      id: 'antigua-q10',
      question: 'What sweet dessert is wrapped in banana leaves?',
      options: ['Flan', 'Ducana', 'Tres Leches', 'Coconut drops'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 26, y: 27 },
};
