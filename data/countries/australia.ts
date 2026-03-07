import { Country } from '@/types';

export const australia: Country = {
  id: 'australia',
  name: 'Australia',
  code: 'AU',
  continent: 'Oceania',
  flag: '🇦🇺',
  landscapeImage: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80',
  description: 'Australia is the world\'s largest island and smallest continent, known for unique wildlife, stunning beaches, the Outback, and vibrant cities. A land of natural wonders from the Great Barrier Reef to Uluru.',
  quickFacts: [
    { label: 'Capital', value: 'Canberra' },
    { label: 'Population', value: '26 million' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'Australian Dollar (A$)' },
    { label: 'Area', value: '7,692,024 km²' },
  ],
  facts: [
    'Australia has more than 10,000 beaches',
    'The Great Barrier Reef is the world\'s largest living structure',
    '80% of Australian animals are found nowhere else on Earth',
    'Australia is the only country that is also a continent',
    'The Australian Alps get more snow than the Swiss Alps',
    'Australia has the world\'s longest fence (Dingo Fence, 5,614 km)',
    'Melbourne was once called Batmania',
    'Australia has over 60 wine regions',
  ],
  foodCulture: 'Australian cuisine is diverse, influenced by British heritage, Indigenous traditions, and immigration. Barbecues are central to social life. Modern Australian cuisine emphasizes fresh local ingredients, especially seafood. Vegemite, meat pies, and lamingtons are iconic.',
  history: [
    {
      year: '60,000+ years ago',
      title: 'Aboriginal Settlement',
      description: 'Indigenous Australians arrived, making them one of the world\'s oldest continuous cultures.'
    },
    {
      year: '1770',
      title: 'Captain Cook Arrives',
      description: 'British explorer James Cook claimed the east coast for Great Britain.'
    },
    {
      year: '1788',
      title: 'First Fleet',
      description: 'British colonization began with arrival of the First Fleet in Sydney.'
    },
    {
      year: '1901',
      title: 'Federation',
      description: 'Six British colonies united to form the Commonwealth of Australia.'
    },
  ],
  innovations: [
    {
      name: 'Wi-Fi',
      year: '1990s',
      description: 'CSIRO scientists developed the technology that became Wi-Fi.'
    },
    {
      name: 'Black Box Flight Recorder',
      year: '1958',
      description: 'David Warren invented the flight data recorder, revolutionizing aviation safety.'
    },
    {
      name: 'Cochlear Implant',
      year: '1978',
      description: 'Graeme Clark developed the multi-channel cochlear implant for hearing restoration.'
    },
    {
      name: 'Polymer Banknotes',
      year: '1988',
      description: 'Australia created the first plastic currency notes, now used worldwide.'
    },
  ],
  mustVisit: [
    { name: 'Great Barrier Reef', description: 'World\'s largest coral reef system, perfect for diving and snorkeling with incredible marine life.' },
    { name: 'Sydney Opera House', description: 'Iconic architectural masterpiece and performing arts center on Sydney Harbour.' },
    { name: 'Uluru (Ayers Rock)', description: 'Sacred Aboriginal site, massive sandstone monolith in the heart of the Outback.' },
    { name: 'Great Ocean Road', description: 'Scenic coastal drive featuring the Twelve Apostles limestone formations.' },
    { name: 'Daintree Rainforest', description: 'World\'s oldest tropical rainforest meeting the Great Barrier Reef.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'September-November and March-May for mild weather. Summer (Dec-Feb) is hot.' },
    { item: 'Sun protection', description: 'Australia has high UV levels. Slip, slop, slap (shirt, sunscreen, hat).' },
    { item: 'Insect repellent', description: 'Essential for bush and coastal areas.' },
    { item: 'Water bottle', description: 'Stay hydrated in the dry, hot climate.' },
    { item: 'Travel adapter (Type I)', description: 'Australia uses unique three-pin plugs with 230V.' },
    { item: 'Reef-safe sunscreen', description: 'Required for swimming near coral reefs.' }
  ],
  mainDish: {
    id: 'australia-main',
    name: 'Meat Pie with Mushy Peas',
    description: 'Iconic Australian savory pie filled with minced meat and gravy, served with pea puree',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Beef mince', amount: 600, unit: 'g' },
      { name: 'Onion', amount: 1, unit: 'large' },
      { name: 'Beef stock', amount: 400, unit: 'ml' },
      { name: 'Worcestershire sauce', amount: 2, unit: 'tbsp' },
      { name: 'Tomato paste', amount: 2, unit: 'tbsp' },
      { name: 'Puff pastry', amount: 600, unit: 'g' },
      { name: 'Frozen peas', amount: 300, unit: 'g' },
      { name: 'Butter', amount: 30, unit: 'g' },
      { name: 'Egg', amount: 1, unit: 'piece' },
    ],
    steps: [
      'Brown beef mince with diced onion in a large pan',
      'Add beef stock, Worcestershire sauce, and tomato paste',
      'Simmer for 30 minutes until thick, cool completely',
      'Line pie tins with pastry',
      'Fill with cooled meat mixture',
      'Top with pastry, seal edges, brush with beaten egg',
      'Cut small vent holes in top',
      'Bake at 200°C for 30 minutes until golden',
      'Boil peas, then mash with butter until smooth',
      'Serve pies with mushy peas on the side',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80',
  },
  dessert: {
    id: 'australia-dessert',
    name: 'Lamingtons',
    description: 'Sponge cake cubes coated in chocolate and rolled in desiccated coconut',
    cookingTime: 60,
    servings: 16,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Eggs', amount: 4, unit: 'large' },
      { name: 'Caster sugar', amount: 150, unit: 'g' },
      { name: 'Self-raising flour', amount: 150, unit: 'g' },
      { name: 'Butter melted', amount: 40, unit: 'g' },
      { name: 'Dark chocolate', amount: 200, unit: 'g' },
      { name: 'Icing sugar', amount: 300, unit: 'g' },
      { name: 'Cocoa powder', amount: 3, unit: 'tbsp' },
      { name: 'Desiccated coconut', amount: 300, unit: 'g' },
      { name: 'Milk', amount: 100, unit: 'ml' },
    ],
    steps: [
      'Beat eggs and sugar until thick and pale',
      'Fold in sifted flour gently',
      'Fold in melted butter',
      'Pour into greased baking pan',
      'Bake at 180°C for 25 minutes until golden',
      'Cool completely, then cut into squares',
      'Make chocolate icing: melt chocolate with milk, add icing sugar and cocoa',
      'Dip each square in chocolate icing',
      'Roll in desiccated coconut',
      'Place on wire rack to set',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Australian wine (Shiraz, Chardonnay), VB beer, XXXX beer, Bundaberg Rum',
    nonAlcoholic: 'Flat white coffee, Tim Tams dunked in tea/coffee, Milo, Lemon squash',
  },
  music: [
    'AC/DC - Back in Black',
    'INXS - Never Tear Us Apart',
    'Kylie Minogue - Can\'t Get You Out of My Head',
    'Men at Work - Down Under',
    'Sia - Chandelier',
  ],
  decorationIdeas: [
    'Blue, red, and white (Australian flag colors)',
    'Eucalyptus branches and native flowers',
    'Kangaroo and koala motifs',
    'Beach and surf themes',
    'Aboriginal art patterns',
  ],
  conversationStarters: [
    'Have you visited Australia\'s Outback?',
    'Would you like to snorkel the Great Barrier Reef?',
    'What Australian animal fascinates you most?',
    'Have you tried Vegemite?',
    'Which Australian city would you most like to explore?',
  ],
  quiz: [
    {
      id: 'australia-q1',
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
      correctAnswer: 2,
    },
    {
      id: 'australia-q2',
      question: 'What is the world\'s largest coral reef system?',
      options: ['Caribbean Reef', 'Red Sea Reef', 'Great Barrier Reef', 'Florida Reef'],
      correctAnswer: 2,
    },
    {
      id: 'australia-q3',
      question: 'Which technology did Australia invent?',
      options: ['Bluetooth', 'Wi-Fi', 'USB', '5G'],
      correctAnswer: 1,
    },
    {
      id: 'australia-q4',
      question: 'What is Uluru?',
      options: ['A beach', 'A city', 'A large sandstone rock', 'A reef'],
      correctAnswer: 2,
    },
    {
      id: 'australia-q5',
      question: 'What is Australia\'s famous spread made from yeast extract?',
      options: ['Nutella', 'Vegemite', 'Marmite', 'Peanut butter'],
      correctAnswer: 1,
    },
    {
      id: 'australia-q6',
      question: 'What percentage of Australian animals are found nowhere else on Earth?',
      options: ['50%', '60%', '70%', '80%'],
      correctAnswer: 3,
    },
    {
      id: 'australia-q7',
      question: 'What are Lamingtons coated in?',
      options: ['Chocolate and coconut', 'Caramel and nuts', 'Vanilla and sprinkles', 'Honey and almonds'],
      correctAnswer: 0,
    },
    {
      id: 'australia-q8',
      question: 'How many beaches does Australia have?',
      options: ['Over 1,000', 'Over 5,000', 'Over 10,000', 'Over 20,000'],
      correctAnswer: 2,
    },
    {
      id: 'australia-q9',
      question: 'When did Australia federate as a nation?',
      options: ['1788', '1850', '1901', '1945'],
      correctAnswer: 2,
    },
    {
      id: 'australia-q10',
      question: 'Which coffee drink originated in Australia?',
      options: ['Cappuccino', 'Latte', 'Flat white', 'Macchiato'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 85, y: 8 },
};