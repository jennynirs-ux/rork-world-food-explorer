import { Country } from '@/types';

export const newZealand: Country = {
  id: 'new-zealand',
  name: 'New Zealand',
  code: 'NZ',
  continent: 'Oceania',
  flag: '🇳🇿',
  landscapeImage: 'https://images.unsplash.com/photo-1469521669194-babb45599def?w=800&q=80',
  description:
    'New Zealand is a remote island nation known for dramatic landscapes, Maori culture, adventure sports, and being the filming location for Lord of the Rings. Clean, green, and spectacularly beautiful.',
  quickFacts: [
    { label: 'Capital', value: 'Wellington' },
    { label: 'Population', value: '5.1 million' },
    { label: 'Official Languages', value: 'English, Maori, NZ Sign' },
    { label: 'Currency', value: 'New Zealand Dollar (NZD)' },
    { label: 'Area', value: '268,021 km²' },
  ],
  facts: [
    'New Zealand has more sheep than people (historically around 6 sheep per person, though it changes over time)',
    'There are no native land snakes in New Zealand',
    'New Zealand was one of the last major landmasses to be settled by humans',
    'New Zealand became the first self-governing country to grant women the right to vote in 1893',
    'New Zealand has three official languages: English, Maori, and New Zealand Sign Language',
    'Kiwi fruit originated in China and was later renamed and popularized in New Zealand',
    'The first modern commercial bungy jump operation was established in New Zealand',
    'About 30% of the country is protected conservation land',
  ],
  foodCulture:
    'New Zealand cuisine features fresh seafood, lamb, and local produce. British influences blend with Maori traditions and modern Pacific Rim fusion. The country is famous for its wine, especially Sauvignon Blanc, and its cafe culture.',

  history: [
    {
      year: '1250-1300',
      title: 'Maori Arrival',
      description:
        'Polynesian settlers arrived and became the indigenous Maori people of Aotearoa, developing distinct language, art, and traditions.',
    },
    {
      year: '1642',
      title: 'First European Contact',
      description:
        'Dutch explorer Abel Tasman became the first recorded European to sight New Zealand, marking the start of European mapping interest.',
    },
    {
      year: '1769',
      title: 'Captain Cook Mapping',
      description:
        'James Cook circumnavigated and mapped New Zealand, expanding European knowledge of the islands and increasing future settlement.',
    },
    {
      year: '1840',
      title: 'Treaty of Waitangi',
      description:
        'An agreement between the British Crown and Maori chiefs that became a founding document, still central to law and national debate today.',
    },
    {
      year: '1893',
      title: 'Women\'s Suffrage',
      description:
        'New Zealand became the first self-governing country to grant women the right to vote, a landmark in global democracy history.',
    },
    {
      year: '2001-2003',
      title: 'Lord of the Rings Tourism Boom',
      description:
        'The film trilogy showcased landscapes worldwide and helped accelerate tourism, branding New Zealand as an outdoor adventure destination.',
    },
  ],

  innovations: [
    {
      name: 'Bungy Jumping (commercial)',
      year: '1988',
      description:
        'A.J. Hackett helped commercialize bungy jumping in Queenstown, shaping modern adventure tourism.',
    },
    {
      name: 'Jetboat',
      year: '1954',
      description:
        'Bill Hamilton developed the Hamilton jet unit, enabling jetboats to run in shallow rivers and becoming a signature New Zealand experience.',
    },
    {
      name: 'Electric Fence',
      year: '1930s',
      description:
        'New Zealand farming innovation advanced electric fencing, improving livestock management and pasture rotation.',
    },
    {
      name: 'Rutherford and Nuclear Physics',
      year: '1890s-1930s',
      description:
        'Ernest Rutherford (born in New Zealand) made foundational discoveries in atomic and nuclear physics, shaping modern science.',
    },
  ],

  mustVisit: [
    {
      name: 'Milford Sound',
      description:
        'Stunning fjord with dramatic cliffs, waterfalls, and rainforest, often called the eighth wonder of the world.',
    },
    {
      name: 'Tongariro Alpine Crossing',
      description:
        'One of the world\'s best day hikes through volcanic landscapes and emerald lakes.',
    },
    {
      name: 'Hobbiton',
      description:
        'Movie set from Lord of the Rings and The Hobbit, preserved as a tourist attraction.',
    },
    {
      name: 'Fox and Franz Josef Glaciers',
      description:
        'Rare glaciers that descend into temperate rainforest, accessible via hikes and guided tours.',
    },
    {
      name: 'Rotorua',
      description:
        'Geothermal wonderland with hot springs, geysers, and rich Maori cultural experiences.',
    },
  ],

  travelEssentials: [
    {
      item: 'Best time to visit',
      description:
        'December-February for summer and beaches, or June-August for skiing and winter scenery.',
    },
    {
      item: 'Car rental',
      description:
        'Useful for exploring both islands; remember to drive on the left side.',
    },
    {
      item: 'Hiking gear',
      description:
        'Bring quality boots and layers for Great Walks and alpine weather changes.',
    },
    {
      item: 'Power adapter',
      description:
        'New Zealand uses Type I plugs with 230V.',
    },
    {
      item: 'Sandfly repellent',
      description:
        'Helpful on the South Island, especially Fiordland and the West Coast.',
    },
    {
      item: 'Biosecurity rules',
      description:
        'New Zealand has strict rules for bringing in food, plants, and outdoor gear; clean boots and declare items when in doubt.',
    },
  ],

  mainDish: {
    id: 'new-zealand-main',
    name: 'Hangi (Traditional Maori Earth Oven)',
    description:
      'Meat and vegetables slow-cooked using heated stones in an earth oven, a traditional Maori method for gatherings.',
    cookingTime: 240,
    servings: 8,
    dietType: 'meat',
    ingredients: [
      { name: 'Lamb shoulder', amount: 1000, unit: 'g' },
      { name: 'Pork shoulder', amount: 1000, unit: 'g' },
      { name: 'Chicken pieces', amount: 800, unit: 'g' },
      { name: 'Kumara (sweet potato)', amount: 1000, unit: 'g' },
      { name: 'Potatoes', amount: 1000, unit: 'g' },
      { name: 'Carrots', amount: 500, unit: 'g' },
      { name: 'Cabbage', amount: 1, unit: 'head' },
      { name: 'Onions', amount: 3, unit: 'large' },
      { name: 'Salt and pepper', amount: 1, unit: 'to taste' },
    ],
    steps: [
      'Heat stones: traditionally, heat clean stones with a strong fire for 2-3 hours until very hot.',
      'Season meats with salt and pepper (and optionally garlic and herbs).',
      'Wrap meats and vegetables in foil or cloth bundles (traditional hangi uses baskets and coverings).',
      'Place hot stones in a pit or a safe heat-proof setup, then set meat bundles closest to the heat.',
      'Add vegetable bundles on top so they steam and roast gently.',
      'Cover tightly to trap steam and heat (earth covering in traditional method).',
      'Cook for 3-4 hours until meat is tender and vegetables are soft.',
      'Carefully uncover, remove bundles, and rest meat briefly before serving.',
      'Serve with vegetables and a simple gravy made from collected juices if desired.',
      'Optional: serve alongside Maori bread (rewena) or a fresh salad.',
    ],
    imageUrl: 'https://images.pexels.com/photos/36113874/pexels-photo-36113874.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },

  dessert: {
    id: 'new-zealand-dessert',
    name: 'Pavlova',
    description:
      'A crisp meringue shell with a soft marshmallow center, topped with whipped cream and fresh fruit.',
    cookingTime: 90,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Egg whites', amount: 4, unit: 'large' },
      { name: 'Caster sugar', amount: 250, unit: 'g' },
      { name: 'White vinegar', amount: 1, unit: 'tsp' },
      { name: 'Cornstarch', amount: 1, unit: 'tsp' },
      { name: 'Heavy cream', amount: 300, unit: 'ml' },
      { name: 'Kiwi fruit', amount: 4, unit: 'kiwis' },
      { name: 'Strawberries', amount: 250, unit: 'g' },
      { name: 'Passion fruit', amount: 2, unit: 'passion fruits' },
    ],
    steps: [
      'Preheat oven to 150C. Line a baking tray with baking paper.',
      'Beat egg whites until stiff peaks form.',
      'Add sugar gradually, beating until thick and glossy and sugar dissolves.',
      'Fold in vinegar and cornstarch gently.',
      'Shape meringue into a round on the tray, creating a shallow well in the center.',
      'Bake for 60 minutes, then turn off oven and cool inside with the door closed.',
      'Whip cream to soft peaks.',
      'Top cooled pavlova with whipped cream.',
      'Add sliced kiwi, strawberries, and passion fruit.',
      'Serve immediately for best texture.',
    ],
    imageUrl: 'https://images.pexels.com/photos/31500975/pexels-photo-31500975.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },

  drinks: {
    alcoholic:
      'Marlborough Sauvignon Blanc, Central Otago Pinot Noir, Craft beer, L&P (lemon and paeroa soda)',
    nonAlcoholic:
      'Flat white coffee, Manuka honey drinks, Fresh fruit juices',
  },

  music: [
    'Poi E - Patea Maori Club',
    'Slice of Heaven - Dave Dobbyn',
    'Royals - Lorde',
    'Six Months in a Leaky Boat - Split Enz',
    'Traditional Maori haka and waiata',
  ],

  decorationIdeas: [
    'Silver fern symbol (New Zealand icon)',
    'Black and white colors (All Blacks rugby)',
    'Maori patterns (koru spirals) and carving motifs',
    'Native pohutukawa flowers (summer holiday vibe)',
    'Lord of the Rings themed elements',
  ],

  conversationStarters: [
    'Have you seen Lord of the Rings?',
    'Would you try bungy jumping in Queenstown?',
    'Have you ever tried a flat white coffee?',
    'Which island would you visit, North or South?',
    'What do you know about Maori culture?',
  ],

  quiz: [
    {
      id: 'new-zealand-q1',
      question: 'What is the capital of New Zealand?',
      options: ['Auckland', 'Wellington', 'Christchurch', 'Queenstown'],
      correctAnswer: 1,
    },
    {
      id: 'new-zealand-q2',
      question: 'What are the indigenous people of New Zealand called?',
      options: ['Maori', 'Aboriginal', 'Inuit', 'Samoan'],
      correctAnswer: 0,
    },
    {
      id: 'new-zealand-q3',
      question: 'What is a well-known New Zealand meringue dessert topped with fruit and cream?',
      options: ['Baklava', 'Pavlova', 'Gelato', 'Flan'],
      correctAnswer: 1,
    },
    {
      id: 'new-zealand-q4',
      question: 'New Zealand became the first self-governing country to grant women the right to what in 1893?',
      options: ['Own property', 'Vote', 'Drive', 'Serve in parliament'],
      correctAnswer: 1,
    },
    {
      id: 'new-zealand-q5',
      question: 'Which film trilogy is famously associated with New Zealand landscapes?',
      options: ['Star Wars', 'Harry Potter', 'Lord of the Rings', 'Indiana Jones'],
      correctAnswer: 2,
    },
    {
      id: 'new-zealand-q6',
      question: 'What is the name of the agreement signed in 1840 between the British Crown and Maori chiefs?',
      options: ['Treaty of Versailles', 'Treaty of Waitangi', 'Magna Carta', 'Treaty of Tordesillas'],
      correctAnswer: 1,
    },
    {
      id: 'new-zealand-q7',
      question: 'New Zealand uses what type of power plug?',
      options: ['Type A', 'Type C', 'Type I', 'Type G'],
      correctAnswer: 2,
    },
    {
      id: 'new-zealand-q8',
      question: 'Which activity was commercialized in Queenstown and helped shape adventure tourism?',
      options: ['Paragliding', 'Bungy jumping', 'Ice climbing', 'Scuba diving'],
      correctAnswer: 1,
    },
    {
      id: 'new-zealand-q9',
      question: 'What is the capital city of New Zealand located on?',
      options: ['North Island', 'South Island', 'Stewart Island', 'Chatham Islands'],
      correctAnswer: 0,
    },
    {
      id: 'new-zealand-q10',
      question: 'What is the traditional Maori method of cooking food using heated stones in an earth oven called?',
      options: ['Hangi', 'Tagine', 'Paella', 'Tandoor'],
      correctAnswer: 0,
    },
  ],

  coordinates: { x: 92, y: 5 },
  isUnlockedByDefault: true,
};
