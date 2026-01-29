import { Country } from '@/types';

export const canada: Country = {
  id: 'canada',
  name: 'Canada',
  code: 'CA',
  continent: 'North America',
  flag: '🇨🇦',
  landscapeImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800',
  description: 'Canada is the second-largest country in the world, known for stunning natural beauty, multiculturalism, politeness, and maple syrup. From mountains to coastlines to vast forests.',
  quickFacts: [
    { label: 'Capital', value: 'Ottawa' },
    { label: 'Population', value: '38.2 million' },
    { label: 'Official Languages', value: 'English & French' },
    { label: 'Currency', value: 'Canadian Dollar (CAD)' },
    { label: 'Area', value: '9,984,670 km²' },
  ],
  facts: [
    'Canada has the longest coastline in the world at 202,080 km',
    'Canada has more lakes than the rest of the world combined',
    'The country produces 85% of the world\'s maple syrup',
    'Canada is officially bilingual with English and French',
    'The nation is known for its politeness and saying "sorry"',
    'Canada has six time zones',
    'Ice hockey is the national winter sport and a cultural obsession',
    'Canada is one of the most multicultural countries in the world',
  ],
  foodCulture: 'Canadian cuisine blends Indigenous, British, French, and immigrant influences. Regional specialties vary dramatically - from Maritime seafood to Québécois comfort food to West Coast fusion. Comfort food and hearty portions reflect the cold climate.',
  history: [
    {
      year: '1867',
      title: 'Confederation',
      description: 'The British North America Act united several colonies into the Dominion of Canada.'
    },
    {
      year: '1885',
      title: 'Transcontinental Railroad',
      description: 'Completion of the Canadian Pacific Railway connected the country coast to coast.'
    },
    {
      year: '1965',
      title: 'Maple Leaf Flag',
      description: 'Canada adopted its iconic red and white flag with the maple leaf, replacing the British ensign.'
    },
    {
      year: '1982',
      title: 'Constitutional Independence',
      description: 'Canada patriated its constitution, achieving full independence from Britain.'
    },
  ],
  innovations: [
    {
      name: 'Telephone',
      year: '1876',
      description: 'Alexander Graham Bell made the first telephone call in Brantford, Ontario.'
    },
    {
      name: 'Insulin',
      year: '1921',
      description: 'Frederick Banting discovered insulin at the University of Toronto, saving millions of diabetics.'
    },
    {
      name: 'Basketball',
      year: '1891',
      description: 'Canadian James Naismith invented basketball in Springfield, Massachusetts.'
    },
    {
      name: 'IMAX',
      year: '1970',
      description: 'Canadian filmmakers invented the IMAX large-format film system.'
    },
  ],
  mustVisit: [
    { name: 'Banff National Park', description: 'Stunning Rocky Mountain scenery with turquoise lakes, glaciers, and abundant wildlife.' },
    { name: 'Niagara Falls', description: 'Spectacular waterfalls on the Ontario-New York border, one of the world\'s most famous natural wonders.' },
    { name: 'Old Quebec City', description: 'Charming walled city with European feel, cobblestone streets, and French colonial architecture.' },
    { name: 'Vancouver', description: 'Beautiful coastal city surrounded by mountains, beaches, and temperate rainforest.' },
    { name: 'Northern Lights in Yukon', description: 'Aurora Borealis viewing in pristine wilderness under dark Arctic skies.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'Summer (June-August) for warm weather, or winter for skiing and snow activities.' },
    { item: 'Warm clothing', description: 'Even summer evenings can be cool; winter requires serious cold-weather gear.' },
    { item: 'Bear spray', description: 'Essential for hiking in wilderness areas with bears.' },
    { item: 'Power adapter', description: 'Canada uses Type A and B plugs with 120V (same as US).' },
    { item: 'Outdoor gear', description: 'Hiking boots, rain jacket for exploring Canada\'s natural beauty.' },
    { item: 'Cash', description: 'Small towns may have limited card acceptance.' }
  ],
  mainDish: {
    id: 'canada-main',
    name: 'Poutine',
    description: 'French fries topped with cheese curds and smothered in rich brown gravy',
    cookingTime: 45,
    servings: 4,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Russet potatoes', amount: 1000, unit: 'g' },
      { name: 'Cheese curds', amount: 300, unit: 'g' },
      { name: 'Beef or vegetable broth', amount: 500, unit: 'ml' },
      { name: 'Butter', amount: 3, unit: 'tbsp' },
      { name: 'Flour', amount: 3, unit: 'tbsp' },
      { name: 'Vegetable oil for frying', amount: 1, unit: 'as needed' },
      { name: 'Salt and pepper', amount: 1, unit: 'to taste' },
    ],
    steps: [
      'Cut potatoes into thick fries (about 1cm thick)',
      'Soak fries in cold water for 30 minutes, then pat dry',
      'Heat oil to 160°C, fry potatoes for 5 minutes until soft',
      'Remove and let cool, then fry again at 180°C until golden and crispy',
      'Make gravy: melt butter, whisk in flour, cook 1 minute',
      'Gradually add broth, stirring constantly until thick',
      'Season gravy with salt and pepper',
      'Place hot fries in a bowl, top with cheese curds',
      'Pour hot gravy over top so cheese curds begin to melt',
      'Serve immediately while hot and crispy',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1630431341973-02e1d4c50757?w=600',
  },
  dessert: {
    id: 'canada-dessert',
    name: 'Butter Tarts',
    description: 'Sweet pastry tarts filled with butter, sugar, syrup, and egg, a Canadian classic',
    cookingTime: 40,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Pie pastry', amount: 300, unit: 'g' },
      { name: 'Brown sugar', amount: 200, unit: 'g' },
      { name: 'Butter', amount: 100, unit: 'g' },
      { name: 'Corn syrup', amount: 150, unit: 'ml' },
      { name: 'Eggs', amount: 2, unit: 'large' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'Raisins or pecans (optional)', amount: 100, unit: 'g' },
      { name: 'Salt', amount: 1, unit: 'pinch' },
    ],
    steps: [
      'Preheat oven to 200°C (400°F)',
      'Roll out pastry and cut circles to fit muffin tins',
      'Press pastry into greased muffin cups',
      'Melt butter, mix with brown sugar, corn syrup, eggs, vanilla, and salt',
      'If using, add raisins or pecans to each tart shell',
      'Pour filling into each tart shell, filling about 2/3 full',
      'Bake for 15-20 minutes until filling is set but still slightly jiggly',
      'Let cool in pan for 10 minutes',
      'Remove carefully and cool on wire rack',
      'Best served warm or at room temperature',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1587241321921-91a834d82b0e?w=600',
  },
  drinks: {
    alcoholic: 'Canadian whisky (Crown Royal), Ice wine, Craft beer, Caesar cocktail',
    nonAlcoholic: 'Tim Hortons coffee, Maple syrup drinks, Apple cider',
  },
  music: [
    'O Canada (national anthem)',
    'The Weight - The Band',
    'Heart of Gold - Neil Young',
    'Tears Are Not Enough - Northern Lights',
    'Summer of \'69 - Bryan Adams',
  ],
  decorationIdeas: [
    'Red and white colors from Canadian flag',
    'Maple leaf decorations',
    'Plaid flannel patterns',
    'Hockey sticks and pucks',
    'Wilderness and nature themes',
  ],
  conversationStarters: [
    'Have you ever tried poutine? What did you think?',
    'Which Canadian city would you most like to visit?',
    'Do you follow hockey?',
    'Have you seen the Northern Lights?',
    'What\'s your favorite thing about Canada?',
  ],
  quiz: [
    {
      id: 'canada-q1',
      question: 'What is the capital of Canada?',
      options: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
      correctAnswer: 2,
    },
    {
      id: 'canada-q2',
      question: 'What are Canada\'s official languages?',
      options: ['English only', 'English and French', 'English and Spanish', 'English, French, and Indigenous'],
      correctAnswer: 1,
    },
    {
      id: 'canada-q3',
      question: 'What is poutine?',
      options: ['A dessert', 'Fries with gravy and cheese curds', 'A type of bread', 'A dance'],
      correctAnswer: 1,
    },
    {
      id: 'canada-q4',
      question: 'What percentage of world\'s maple syrup does Canada produce?',
      options: ['50%', '65%', '75%', '85%'],
      correctAnswer: 3,
    },
    {
      id: 'canada-q5',
      question: 'What is Canada\'s national winter sport?',
      options: ['Skiing', 'Ice hockey', 'Curling', 'Figure skating'],
      correctAnswer: 1,
    },
    {
      id: 'canada-q6',
      question: 'Who invented insulin in Canada?',
      options: ['Alexander Graham Bell', 'Frederick Banting', 'James Naismith', 'Reginald Fessenden'],
      correctAnswer: 1,
    },
    {
      id: 'canada-q7',
      question: 'When did Canada adopt its current flag with the maple leaf?',
      options: ['1955', '1965', '1975', '1985'],
      correctAnswer: 1,
    },
    {
      id: 'canada-q8',
      question: 'What is Canada\'s ranking by country size in the world?',
      options: ['First', 'Second', 'Third', 'Fourth'],
      correctAnswer: 1,
    },
    {
      id: 'canada-q9',
      question: 'When did Canada achieve full constitutional independence?',
      options: ['1867', '1931', '1965', '1982'],
      correctAnswer: 3,
    },
    {
      id: 'canada-q10',
      question: 'What dessert is a Canadian classic with butter, sugar, and syrup?',
      options: ['Maple cookies', 'Butter tarts', 'Nanaimo bars', 'Beaver tails'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 18, y: 60 },
};
