import { Country } from '@/types';

export const newZealand: Country = {
  id: 'new-zealand',
  name: 'New Zealand',
  code: 'NZ',
  continent: 'Oceania',
  flag: '🇳🇿',
  landscapeImage: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800',
  description: 'New Zealand is a remote island nation known for dramatic landscapes, Maori culture, adventure sports, and being the filming location for Lord of the Rings. Clean, green, and spectacularly beautiful.',
  quickFacts: [
    { label: 'Capital', value: 'Wellington' },
    { label: 'Population', value: '5.1 million' },
    { label: 'Official Languages', value: 'English, Māori, NZ Sign' },
    { label: 'Currency', value: 'New Zealand Dollar (NZD)' },
    { label: 'Area', value: '268,021 km²' },
  ],
  facts: [
    'New Zealand has more sheep than people - about 6 sheep per person',
    'There are no snakes in New Zealand',
    'New Zealand was the last major landmass to be populated by humans',
    'The country gave women the right to vote in 1893, first in the world',
    'New Zealand has three official languages',
    'Kiwi fruit is actually from China - it was renamed in New Zealand',
    'The world\'s first commercial bungee jump was in New Zealand',
    'About 30% of the country is protected conservation land',
  ],
  foodCulture: 'New Zealand cuisine features fresh seafood, lamb, and local produce. British influences blend with Māori traditions and modern Pacific Rim fusion. The country is famous for its wine, especially Sauvignon Blanc, and café culture.',
  history: [
    {
      year: '1250-1300',
      title: 'Māori Arrival',
      description: 'Polynesian settlers arrived, becoming the indigenous Māori people of Aotearoa.'
    },
    {
      year: '1840',
      title: 'Treaty of Waitangi',
      description: 'Agreement between the British Crown and Māori chiefs, founding document of New Zealand.'
    },
    {
      year: '1893',
      title: 'Women\'s Suffrage',
      description: 'New Zealand became the first country to grant women the right to vote.'
    },
    {
      year: '2001-2003',
      title: 'Lord of the Rings',
      description: 'The film trilogy showcased New Zealand\'s landscapes to the world, boosting tourism.'
    },
  ],
  innovations: [
    {
      name: 'Bungy Jumping',
      year: '1988',
      description: 'A.J. Hackett commercialized bungy jumping in Queenstown, creating extreme tourism.'
    },
    {
      name: 'Jetboat',
      year: '1954',
      description: 'Sir William Hamilton invented the Hamilton jetboat for shallow river navigation.'
    },
    {
      name: 'Electric Fence',
      year: '1936',
      description: 'New Zealanders pioneered electric fencing for farm livestock management.'
    },
    {
      name: 'Split Atom',
      year: '1932',
      description: 'Ernest Rutherford, a New Zealander, split the atom, founding nuclear physics.'
    },
  ],
  mustVisit: [
    { name: 'Milford Sound', description: 'Stunning fjord with dramatic cliffs, waterfalls, and rainforest, often called the eighth wonder.' },
    { name: 'Tongariro Crossing', description: 'One of the world\'s best day hikes through volcanic landscapes and emerald lakes.' },
    { name: 'Hobbiton', description: 'Movie set from Lord of the Rings and The Hobbit, preserved as a tourist attraction.' },
    { name: 'Fox and Franz Josef Glaciers', description: 'Rare glaciers that descend into temperate rainforest, accessible for hiking.' },
    { name: 'Rotorua', description: 'Geothermal wonderland with hot springs, geysers, and rich Māori cultural experiences.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'December-February (summer) for warm weather, or June-August for skiing.' },
    { item: 'Car rental', description: 'Essential for exploring - remember to drive on the left side!' },
    { item: 'Hiking gear', description: 'Quality boots and layers for Great Walks and outdoor adventures.' },
    { item: 'Power adapter', description: 'New Zealand uses Type I plugs with 230V.' },
    { item: 'Sandfly repellent', description: 'Essential for South Island, especially Milford Sound and West Coast.' },
    { item: 'Warm layers', description: 'Weather can change rapidly - bring layers even in summer.' }
  ],
  mainDish: {
    id: 'new-zealand-main',
    name: 'Hangi (Traditional Māori Earth Oven)',
    description: 'Meat and vegetables slow-cooked underground with heated rocks',
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
      'Dig a pit in the ground, line with volcanic rocks',
      'Light a large fire over the rocks, heat for 2-3 hours',
      'Season all meat generously',
      'Wrap meat in foil or muslin cloth',
      'Place meat baskets on hot rocks when fire dies down',
      'Add vegetables in baskets on top',
      'Cover with wet cloths and earth to seal in heat',
      'Cook underground for 3-4 hours',
      'Carefully uncover and remove baskets',
      'Serve with traditional Māori bread (rewena)',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600',
  },
  dessert: {
    id: 'new-zealand-dessert',
    name: 'Pavlova',
    description: 'Meringue dessert with crispy shell, soft center, topped with cream and fruit',
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
      'Preheat oven to 150°C (300°F)',
      'Beat egg whites until stiff peaks form',
      'Gradually add sugar, beating until glossy',
      'Fold in vinegar and cornstarch',
      'Spread meringue in a circle on baking paper',
      'Create a slight well in the center',
      'Bake for 1 hour, then turn off oven and let cool inside',
      'Whip cream until soft peaks',
      'Top cooled pavlova with whipped cream',
      'Add sliced kiwi, strawberries, and passion fruit',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600',
  },
  drinks: {
    alcoholic: 'Marlborough Sauvignon Blanc, Pinot Noir, Speight\'s beer, L&P (lemon & paeroa soda)',
    nonAlcoholic: 'Flat white coffee, Mānuka honey drinks, Fresh fruit juices',
  },
  music: [
    'Poi E - Patea Māori Club',
    'Slice of Heaven - Dave Dobbyn',
    'Royals - Lorde',
    'Six Months in a Leaky Boat - Split Enz',
    'Traditional Māori haka and waiata',
  ],
  decorationIdeas: [
    'Silver fern symbol (New Zealand icon)',
    'Black and white colors (All Blacks rugby)',
    'Māori carvings and patterns (koru spirals)',
    'Native pohutukawa flowers',
    'Lord of the Rings themed elements',
  ],
  conversationStarters: [
    'Have you seen Lord of the Rings?',
    'Would you try bungee jumping in Queenstown?',
    'Have you ever tried a flat white coffee?',
    'Which island would you visit - North or South?',
    'What do you know about Māori culture?',
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
      question: 'What is the indigenous people of New Zealand called?',
      options: ['Māori', 'Aboriginal', 'Inuit', 'Samoan'],
      correctAnswer: 0,
    },
    {
      id: 'new-zealand-q3',
      question: 'What dessert is New Zealand famous for?',
      options: ['Tiramisu', 'Pavlova', 'Cheesecake', 'Crème brûlée'],
      correctAnswer: 1,
    },
    {
      id: 'new-zealand-q4',
      question: 'New Zealand was the first country to give women the right to what?',
      options: ['Own property', 'Work', 'Vote', 'Drive'],
      correctAnswer: 2,
    },
    {
      id: 'new-zealand-q5',
      question: 'What film trilogy was famously shot in New Zealand?',
      options: ['Star Wars', 'Harry Potter', 'Lord of the Rings', 'Narnia'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 92, y: 5 },
};
