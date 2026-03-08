import { Country } from '@/types';

export const bahamas: Country = {
  id: 'bahamas',
  name: 'Bahamas',
  code: 'BS',
  continent: 'North America',
  flag: '🇧🇸',
  landscapeImage: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
  description: 'The Bahamas is an archipelago of over 700 islands in the Atlantic Ocean, known for its crystal-clear turquoise waters, white sandy beaches, and vibrant marine life. It\'s a paradise for beach lovers and water sports enthusiasts.',
  quickFacts: [
    { label: 'Capital', value: 'Nassau' },
    { label: 'Population', value: '393,000' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'Bahamian Dollar (BSD)' },
    { label: 'Area', value: '13,878 km²' },
  ],
  facts: [
    'The Bahamas has some of the clearest water in the world',
    'There are over 700 islands, but only 30 are inhabited',
    'Home to the famous swimming pigs of Exuma',
    'The country has the third-largest barrier reef in the world',
    'Nassau\'s Junkanoo festival is a vibrant cultural celebration',
    'Pirates of the Caribbean was filmed in the Bahamas',
    'The blue holes attract divers from around the world',
    'Christopher Columbus first landed in the New World in the Bahamas in 1492',
  ],
  foodCulture: 'Bahamian cuisine features fresh seafood, especially conch, which is prepared in numerous ways. The food reflects African, British, and American influences. Meals are often enjoyed outdoors with a relaxed island vibe, accompanied by tropical cocktails and fresh fruit.',
  history: [
    {
      year: '1492',
      title: 'Columbus Arrival',
      description: 'Christopher Columbus made his first landfall in the New World on the island of San Salvador in the Bahamas.'
    },
    {
      year: '1600s-1700s',
      title: 'Pirate Haven',
      description: 'Nassau became a notorious pirate stronghold, home to famous pirates like Blackbeard and Calico Jack.'
    },
    {
      year: '1718',
      title: 'British Crown Colony',
      description: 'The Bahamas officially became a British Crown Colony, ending the era of pirate rule.'
    },
    {
      year: '1973',
      title: 'Independence',
      description: 'The Bahamas gained independence from the United Kingdom while remaining a member of the Commonwealth.'
    },
  ],
  innovations: [
    {
      name: 'Underwater Sculpture Park',
      year: '2014',
      description: 'Nassau created the world\'s largest underwater sculpture garden, Ocean Atlas, promoting marine conservation and eco-tourism.'
    },
    {
      name: 'Marine Conservation Techniques',
      year: '1950s',
      description: 'Pioneered Caribbean marine park systems and coral reef protection methods that influenced global conservation efforts.'
    },
    {
      name: 'Hurricane Forecasting Contribution',
      year: '1940s',
      description: 'Bahamian meteorological stations played crucial roles in developing Atlantic hurricane tracking systems.'
    },
    {
      name: 'Sustainable Tourism Model',
      year: '1990s',
      description: 'Developed eco-tourism practices balancing economic growth with environmental protection in island ecosystems.'
    },
  ],
  mustVisit: [
    { name: 'Exuma Cays', description: 'Pristine islands famous for swimming pigs, crystal-clear waters, and stunning sandbars like Pig Beach.' },
    { name: 'Andros Blue Holes', description: 'Mysterious underwater sinkholes perfect for diving, with unique marine ecosystems and geological formations.' },
    { name: 'Nassau\'s Queen\'s Staircase', description: '65 limestone steps carved by slaves in the late 18th century, leading to Fort Fincastle with panoramic city views.' },
    { name: 'Harbour Island', description: 'Famous for its pink sand beaches, charming colonial architecture, and laid-back island atmosphere.' },
    { name: 'Thunderball Grotto', description: 'Underwater cave system featured in James Bond films, ideal for snorkeling through dramatic rock formations.' }
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Many nationalities can visit visa-free for up to 90 days for tourism.' },
    { item: 'Best time to visit', description: 'December to April for dry season; avoid September-November (hurricane season)' },
    { item: 'Transportation', description: 'Ferries between islands, domestic flights, taxis, and rental cars.' },
    { item: 'Language', description: 'English is the official language. Bahamian Creole is also spoken.' },
    { item: 'Safety', description: 'Generally safe for tourists. Exercise caution in Nassau after dark.' },
  ],
  mainDish: {
    id: 'bahamas-conch-salad',
    name: 'Conch Salad',
    description: 'The Bahamas\' signature dish - fresh raw conch mixed with diced vegetables, citrus juices, and hot peppers. It\'s refreshing, zesty, and typically served as an appetizer or light meal.',
    cookingTime: 20,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'Fresh conch, diced', amount: 500, unit: 'g' },
      { name: 'Tomatoes, diced', amount: 2, unit: 'pieces' },
      { name: 'Bell peppers, diced', amount: 2, unit: 'pieces' },
      { name: 'Onion, diced', amount: 1, unit: 'piece' },
      { name: 'Lime juice', amount: 100, unit: 'ml' },
      { name: 'Orange juice', amount: 50, unit: 'ml' },
      { name: 'Scotch bonnet pepper, minced', amount: 1, unit: 'piece' },
      { name: 'Cilantro, chopped', amount: 3, unit: 'tbsp' },
      { name: 'Salt', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Clean and tenderize fresh conch by pounding it',
      'Dice conch into small pieces',
      'Combine diced conch with tomatoes, peppers, and onion in a bowl',
      'Add lime juice and orange juice',
      'Mix in minced scotch bonnet pepper (adjust to taste)',
      'Add chopped cilantro and salt',
      'Let marinate for 10-15 minutes in refrigerator',
      'Serve immediately in small bowls or cups',
    ],
    imageUrl: 'https://images.pexels.com/photos/2005928/pexels-photo-2005928.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  dessert: {
    id: 'bahamas-dessert',
    name: 'Guava Duff',
    description: 'Traditional Bahamian dessert: guava rolled in dough, boiled, and served with sweet rum butter sauce',
    cookingTime: 75,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'All-purpose flour', amount: 400, unit: 'g' },
      { name: 'Baking powder', amount: 2, unit: 'tsp' },
      { name: 'Butter', amount: 100, unit: 'g' },
      { name: 'Milk', amount: 250, unit: 'ml' },
      { name: 'Guava paste', amount: 300, unit: 'g' },
      { name: 'Brown sugar', amount: 200, unit: 'g' },
      { name: 'Heavy cream', amount: 200, unit: 'ml' },
      { name: 'Rum', amount: 50, unit: 'ml' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Mix flour and baking powder. Cut in 50g butter until crumbly.',
      'Add milk gradually to form soft dough.',
      'Roll dough into rectangle about 1cm thick.',
      'Spread guava paste evenly over dough.',
      'Roll up tightly like a jelly roll.',
      'Wrap in cheesecloth or parchment, tie ends.',
      'Boil in large pot of water for 60 minutes.',
      'Make sauce: melt remaining butter, add brown sugar and cream.',
      'Simmer until thickened, add rum and vanilla.',
      'Unwrap duff, slice, and serve warm with rum butter sauce.',
    ],
    imageUrl: 'https://images.pexels.com/photos/3613159/pexels-photo-3613159.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  drinks: {
    alcoholic: 'Bahama Mama cocktail, Goombay Smash, Kalik beer, Rum punch',
    nonAlcoholic: 'Coconut water, Sky Juice (coconut water with gin and milk), Fresh fruit juices',
  },
  music: ['Rake and Scrape', 'Junkanoo music', 'Calypso', 'Reggae', 'Soca'],
  decorationIdeas: [
    'Turquoise and aqua color scheme',
    'Seashells and starfish',
    'Palm fronds and tropical flowers',
    'Fishing nets as decor',
    'Beach-themed centerpieces',
    'Coral and sand elements',
  ],
  conversationStarters: [
    'Have you ever seen the famous swimming pigs of Exuma?',
    'What\'s your dream water activity: snorkeling, diving, or swimming with dolphins?',
    'Would you prefer exploring underwater caves or relaxing on a private beach?',
    'Have you tried conch? How would you prepare it?',
  ],
  quiz: [
    {
      id: 'bahamas-q1',
      question: 'What is the capital of the Bahamas?',
      options: ['Kingston', 'Nassau', 'Havana', 'Bridgetown'],
      correctAnswer: 1,
    },
    {
      id: 'bahamas-q2',
      question: 'What sea creature is the Bahamas famous for serving?',
      options: ['Lobster', 'Conch', 'Tuna', 'Shrimp'],
      correctAnswer: 1,
    },
    {
      id: 'bahamas-q3',
      question: 'Which famous explorer first landed in the Bahamas?',
      options: ['Marco Polo', 'Vasco da Gama', 'Christopher Columbus', 'Ferdinand Magellan'],
      correctAnswer: 2,
    },
    {
      id: 'bahamas-q4',
      question: 'How many islands make up the Bahamas archipelago?',
      options: ['Over 100', 'Over 300', 'Over 500', 'Over 700'],
      correctAnswer: 3,
    },
    {
      id: 'bahamas-q5',
      question: 'What is the official language of the Bahamas?',
      options: ['Spanish', 'English', 'French', 'Creole'],
      correctAnswer: 1,
    },
    {
      id: 'bahamas-q6',
      question: 'Which famous pirate had a stronghold in Nassau?',
      options: ['Captain Hook', 'Blackbeard', 'Jack Sparrow', 'Long John Silver'],
      correctAnswer: 1,
    },
    {
      id: 'bahamas-q7',
      question: 'What year did the Bahamas gain independence?',
      options: ['1963', '1968', '1973', '1978'],
      correctAnswer: 2,
    },
    {
      id: 'bahamas-q8',
      question: 'What is the famous cultural festival celebrated in Nassau?',
      options: ['Carnival', 'Junkanoo', 'Crop Over', 'Reggae Sumfest'],
      correctAnswer: 1,
    },
    {
      id: 'bahamas-q9',
      question: 'The Bahamas has the world\'s ranking for barrier reefs:',
      options: ['First largest', 'Second largest', 'Third largest', 'Fourth largest'],
      correctAnswer: 2,
    },
    {
      id: 'bahamas-q10',
      question: 'Which animal are the Exuma islands famous for?',
      options: ['Swimming dolphins', 'Swimming pigs', 'Sea turtles', 'Iguanas'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 23, y: 33 },
};
