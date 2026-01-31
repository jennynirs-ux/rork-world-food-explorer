import { Country } from '@/types';

export const netherlands: Country = {
  id: 'netherlands',
  name: 'Netherlands',
  code: 'NL',
  continent: 'Europe',
  flag: '🇳🇱',
  landscapeImage: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80',
  description: 'The Netherlands is famous for tulips, windmills, canals, bicycles, and liberal social policies. A flat, innovative country that has reclaimed much of its land from the sea.',
  quickFacts: [
    { label: 'Capital', value: 'Amsterdam' },
    { label: 'Population', value: '17.5 million' },
    { label: 'Official Language', value: 'Dutch' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '41,543 km²' },
  ],
  facts: [
    'About 26% of the Netherlands is below sea level',
    'There are more bicycles than people in the Netherlands',
    'The Netherlands has over 1,000 windmills, though most are no longer in use',
    'Amsterdam has more canals than Venice',
    'The Dutch are the tallest people in the world on average',
    'The Netherlands is the world\'s second-largest exporter of agricultural products',
    'Orange is the national color, after the Dutch Royal Family (House of Orange)',
    'The country has no mountain peaks - its highest point is only 323 meters',
  ],
  foodCulture: 'Dutch cuisine is hearty and simple, featuring dairy products, bread, and fish. The Netherlands is famous for cheese (Gouda, Edam), herring, and Dutch treats like stroopwafels. Café culture and gezelligheid (coziness) are important.',
  history: [
    {
      year: '1568-1648',
      title: 'Eighty Years\' War',
      description: 'Dutch revolt against Spanish rule led to independence and the Dutch Republic.'
    },
    {
      year: '1600s',
      title: 'Dutch Golden Age',
      description: 'Period of great wealth, trade dominance, and cultural achievements including Rembrandt and Vermeer.'
    },
    {
      year: '1953',
      title: 'North Sea Flood',
      description: 'Devastating flood killed nearly 2,000, leading to the Delta Works - world\'s largest flood protection system.'
    },
    {
      year: '2001',
      title: 'Same-Sex Marriage',
      description: 'Netherlands became the first country in the world to legalize same-sex marriage.'
    },
  ],
  innovations: [
    {
      name: 'Microscope',
      year: '1590',
      description: 'Zacharias Janssen invented the compound microscope in Middelburg.'
    },
    {
      name: 'Stock Exchange',
      year: '1602',
      description: 'Amsterdam Stock Exchange became the world\'s first official stock exchange.'
    },
    {
      name: 'Bluetooth',
      year: '1994',
      description: 'Dutch engineer Jaap Haartsen invented Bluetooth wireless technology.'
    },
    {
      name: 'CD (Compact Disc)',
      year: '1979',
      description: 'Philips co-invented the CD, revolutionizing music and data storage.'
    },
  ],
  mustVisit: [
    { name: 'Keukenhof Gardens', description: 'World\'s largest flower garden with millions of tulips blooming each spring.' },
    { name: 'Anne Frank House', description: 'Historic house and museum dedicated to Anne Frank, Jewish wartime diarist.' },
    { name: 'Kinderdijk Windmills', description: 'UNESCO site with 19 well-preserved windmills from the 18th century.' },
    { name: 'Van Gogh Museum', description: 'Largest collection of Van Gogh\'s paintings and drawings in the world.' },
    { name: 'Giethoorn Village', description: 'Idyllic "Venice of the Netherlands" with canals instead of roads.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'April-May for tulips, or June-August for warm weather and long days.' },
    { item: 'Bike rental', description: 'Essential for experiencing the Netherlands like a local.' },
    { item: 'Rain gear', description: 'Weather is unpredictable - bring a waterproof jacket year-round.' },
    { item: 'Museum card', description: 'Consider a museum card if visiting multiple museums in Amsterdam.' },
    { item: 'Power adapter', description: 'Netherlands uses Type C and F plugs with 230V.' },
    { item: 'Cash', description: 'While cards are widely accepted, some small vendors prefer cash.' }
  ],
  mainDish: {
    id: 'netherlands-main',
    name: 'Stamppot',
    description: 'Traditional Dutch comfort food - mashed potatoes with vegetables and sausage',
    cookingTime: 45,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Potatoes', amount: 1000, unit: 'g' },
      { name: 'Kale or cabbage', amount: 500, unit: 'g' },
      { name: 'Rookworst (smoked sausage)', amount: 4, unit: 'sausages' },
      { name: 'Butter', amount: 50, unit: 'g' },
      { name: 'Milk', amount: 100, unit: 'ml' },
      { name: 'Onions', amount: 2, unit: 'medium' },
      { name: 'Mustard', amount: 2, unit: 'tbsp' },
      { name: 'Salt and pepper', amount: 1, unit: 'to taste' },
    ],
    steps: [
      'Peel and cube potatoes, boil until tender',
      'Meanwhile, chop kale or cabbage finely',
      'Sauté onions until golden',
      'Add kale to onions, cook until wilted',
      'Heat sausages in boiling water for 10 minutes',
      'Drain potatoes, mash with butter and milk',
      'Mix in the kale and onions thoroughly',
      'Season generously with salt, pepper, and mustard',
      'Serve topped with sliced rookworst',
      'Traditionally eaten with a small well of gravy in the center',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600',
  },
  dessert: {
    id: 'netherlands-dessert',
    name: 'Stroopwafels',
    description: 'Thin waffle cookies with caramel syrup filling, best served warm over hot coffee',
    cookingTime: 45,
    servings: 20,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Flour', amount: 250, unit: 'g' },
      { name: 'Butter', amount: 100, unit: 'g' },
      { name: 'Brown sugar', amount: 100, unit: 'g' },
      { name: 'Egg', amount: 1, unit: 'large' },
      { name: 'Yeast', amount: 7, unit: 'g' },
      { name: 'Milk', amount: 50, unit: 'ml' },
      { name: 'Syrup (for filling)', amount: 200, unit: 'g' },
      { name: 'Butter (for filling)', amount: 100, unit: 'g' },
      { name: 'Cinnamon', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Mix warm milk with yeast, let activate for 10 minutes',
      'Combine flour, sugar, melted butter, egg, yeast mixture',
      'Knead into smooth dough, let rest 30 minutes',
      'Make caramel filling: heat syrup, butter, and cinnamon together',
      'Heat waffle iron to medium-high',
      'Roll small dough balls, flatten in waffle iron',
      'Cook for 1-2 minutes until golden',
      'While still hot, carefully slice waffle horizontally',
      'Spread caramel filling on one half, sandwich together',
      'Best served warm over a cup of hot coffee',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600',
  },
  drinks: {
    alcoholic: 'Heineken beer, Jenever (Dutch gin), Dutch craft beers, Advocaat (egg liqueur)',
    nonAlcoholic: 'Coffee, Hot chocolate, Chocomel (chocolate milk), Fresh stroopwafel over coffee',
  },
  music: [
    'Three Little Birds - Lenny Kuhr (Eurovision winner)',
    'Venus - Shocking Blue',
    'Radar Love - Golden Earring',
    'Traditional Dutch folk music',
    'Electronic/EDM (Tiësto, Armin van Buuren, Martin Garrix)',
  ],
  decorationIdeas: [
    'Orange decorations (national color)',
    'Delft blue pottery and tiles',
    'Tulips in wooden clogs',
    'Miniature windmills',
    'Dutch flag colors (red, white, blue)',
  ],
  conversationStarters: [
    'Have you ever tried Dutch cheese?',
    'Would you bike around Amsterdam?',
    'Have you seen the tulip fields?',
    'What do you think about Dutch directness?',
    'Have you been to any Dutch museums?',
  ],
  quiz: [
    {
      id: 'netherlands-q1',
      question: 'What is the capital of the Netherlands?',
      options: ['Rotterdam', 'The Hague', 'Amsterdam', 'Utrecht'],
      correctAnswer: 2,
    },
    {
      id: 'netherlands-q2',
      question: 'What percentage of the Netherlands is below sea level?',
      options: ['10%', '26%', '40%', '50%'],
      correctAnswer: 1,
    },
    {
      id: 'netherlands-q3',
      question: 'What are stroopwafels?',
      options: ['Cheese', 'Waffle cookies with caramel', 'Pancakes', 'Bread'],
      correctAnswer: 1,
    },
    {
      id: 'netherlands-q4',
      question: 'What is the Dutch national color?',
      options: ['Red', 'Blue', 'Orange', 'Yellow'],
      correctAnswer: 2,
    },
    {
      id: 'netherlands-q5',
      question: 'Which famous artist was Dutch?',
      options: ['Monet', 'Van Gogh', 'Picasso', 'Da Vinci'],
      correctAnswer: 1,
    },
    {
      id: 'netherlands-q6',
      question: 'What is the traditional Dutch cheese with red wax coating?',
      options: ['Brie', 'Cheddar', 'Edam', 'Gruyere'],
      correctAnswer: 2,
    },
    {
      id: 'netherlands-q7',
      question: 'What are polders?',
      options: ['Traditional shoes', 'Reclaimed land from the sea', 'Windmills', 'Canals'],
      correctAnswer: 1,
    },
    {
      id: 'netherlands-q8',
      question: 'Which museum houses Anne Frank\'s hiding place?',
      options: ['Rijksmuseum', 'Van Gogh Museum', 'Anne Frank House', 'Stedelijk Museum'],
      correctAnswer: 2,
    },
    {
      id: 'netherlands-q9',
      question: 'How do most people get around in the Netherlands?',
      options: ['Cars', 'Trains', 'Bicycles', 'Buses'],
      correctAnswer: 2,
    },
    {
      id: 'netherlands-q10',
      question: 'What are traditional Dutch wooden shoes called?',
      options: ['Clogs', 'Sabots', 'Geta', 'Espadrilles'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 48, y: 52 },
};
