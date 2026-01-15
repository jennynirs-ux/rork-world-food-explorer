import { Country } from '@/types';

export const unitedStates: Country = {
  id: 'united-states',
  name: 'United States',
  code: 'US',
  continent: 'North America',
  flag: '🇺🇸',
  landscapeImage: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800',
  description: 'The United States is a vast country stretching across North America with diverse landscapes, cultures, and cities. Known for innovation, entertainment, and the American Dream.',
  quickFacts: [
    { label: 'Capital', value: 'Washington, D.C.' },
    { label: 'Population', value: '331 million' },
    { label: 'Official Language', value: 'English (de facto)' },
    { label: 'Currency', value: 'US Dollar ($)' },
    { label: 'Area', value: '9,833,520 km²' },
  ],
  facts: [
    'The US has the world\'s largest economy',
    'There are 50 states, with Alaska being the largest and Rhode Island the smallest',
    'The US produces more movies and TV shows than any other country',
    'Americans invented the internet, airplane, and assembly line production',
    'The US has the most diverse ecosystems, from deserts to rainforests to arctic tundra',
    'New York City is the most linguistically diverse city in the world',
    'The national park system includes 63 parks protecting natural wonders',
    'American fast food culture has influenced dining worldwide',
  ],
  foodCulture: 'American cuisine is incredibly diverse, reflecting immigrant influences from around the world. Known for generous portions, BBQ traditions, and iconic foods like burgers and apple pie. Regional cuisines vary dramatically from New York pizza to Texas BBQ to California fusion.',
  history: [
    {
      year: '1776',
      title: 'Declaration of Independence',
      description: 'The 13 colonies declared independence from Britain, founding a new nation based on democratic principles.'
    },
    {
      year: '1861-1865',
      title: 'Civil War',
      description: 'A devastating war between Northern and Southern states over slavery and states\' rights, ending with abolition.'
    },
    {
      year: '1969',
      title: 'Moon Landing',
      description: 'NASA\'s Apollo 11 mission put the first humans on the moon, with Neil Armstrong\'s historic first steps.'
    },
    {
      year: '2001',
      title: 'Digital Age',
      description: 'Silicon Valley companies like Apple, Google, and Facebook revolutionized technology and communication.'
    },
  ],
  innovations: [
    {
      name: 'Light Bulb',
      year: '1879',
      description: 'Thomas Edison created the first practical incandescent light bulb.'
    },
    {
      name: 'Airplane',
      year: '1903',
      description: 'Wright Brothers achieved the first powered, sustained, and controlled airplane flight.'
    },
    {
      name: 'Internet',
      year: '1969',
      description: 'ARPANET, the precursor to the internet, was developed by the US Department of Defense.'
    },
    {
      name: 'iPhone',
      year: '2007',
      description: 'Apple revolutionized mobile phones and computing with the first iPhone.'
    },
  ],
  mustVisit: [
    { name: 'Grand Canyon', description: 'Spectacular natural wonder with breathtaking views of layered red rocks carved by the Colorado River.' },
    { name: 'Statue of Liberty', description: 'Iconic symbol of freedom in New York Harbor, gift from France in 1886.' },
    { name: 'Yellowstone National Park', description: 'First national park in the world, featuring geysers, hot springs, and diverse wildlife.' },
    { name: 'Golden Gate Bridge', description: 'Stunning suspension bridge spanning San Francisco Bay, an engineering marvel.' },
    { name: 'French Quarter, New Orleans', description: 'Historic neighborhood with vibrant music, Creole cuisine, and unique architecture.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'Varies by region - generally spring (April-May) and fall (September-October).' },
    { item: 'Driver\'s license', description: 'A car is essential for exploring most of America outside major cities.' },
    { item: 'Travel insurance', description: 'Healthcare is expensive - travel insurance is crucial.' },
    { item: 'Power adapter', description: 'US uses Type A and B plugs with 120V.' },
    { item: 'Comfortable shoes', description: 'Distances are vast - expect lots of walking in cities, driving between destinations.' },
    { item: 'Tipping knowledge', description: '15-20% tip expected at restaurants, bars, and for services.' }
  ],
  mainDish: {
    id: 'united-states-main',
    name: 'Classic Burger with Fries',
    description: 'Juicy beef burger with cheese, lettuce, tomato, and crispy french fries',
    cookingTime: 30,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Ground beef (80/20)', amount: 600, unit: 'g' },
      { name: 'Burger buns', amount: 4, unit: 'buns' },
      { name: 'Cheddar cheese slices', amount: 4, unit: 'slices' },
      { name: 'Lettuce', amount: 4, unit: 'leaves' },
      { name: 'Tomato', amount: 1, unit: 'large' },
      { name: 'Onion', amount: 1, unit: 'medium' },
      { name: 'Pickles', amount: 8, unit: 'slices' },
      { name: 'Potatoes', amount: 4, unit: 'large' },
      { name: 'Salt and pepper', amount: 1, unit: 'to taste' },
    ],
    steps: [
      'Cut potatoes into fries, soak in cold water for 30 minutes',
      'Form ground beef into 4 patties, season generously with salt and pepper',
      'Heat grill or pan to high heat',
      'Dry fries, fry at 160°C until soft, then at 180°C until crispy and golden',
      'Cook burger patties 3-4 minutes per side for medium',
      'Add cheese in last minute, let melt',
      'Toast burger buns lightly',
      'Assemble: bun bottom, lettuce, tomato, burger with cheese, onion, pickles, sauces, bun top',
      'Serve immediately with hot fries and ketchup',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600',
  },
  dessert: {
    id: 'united-states-dessert',
    name: 'Apple Pie',
    description: 'Classic American dessert with spiced apples in a flaky, buttery crust',
    cookingTime: 90,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Pie crust dough', amount: 500, unit: 'g' },
      { name: 'Granny Smith apples', amount: 6, unit: 'large' },
      { name: 'Sugar', amount: 150, unit: 'g' },
      { name: 'Butter', amount: 50, unit: 'g' },
      { name: 'Cinnamon', amount: 2, unit: 'tsp' },
      { name: 'Nutmeg', amount: 1, unit: 'tsp' },
      { name: 'Lemon juice', amount: 2, unit: 'tbsp' },
      { name: 'Flour', amount: 3, unit: 'tbsp' },
    ],
    steps: [
      'Preheat oven to 190°C (375°F)',
      'Peel and slice apples thinly',
      'Mix apples with sugar, cinnamon, nutmeg, lemon juice, and flour',
      'Roll out half the pie dough and place in 9-inch pie pan',
      'Fill with apple mixture, dot with butter',
      'Roll out remaining dough for top crust',
      'Cover pie, seal edges, cut slits for steam to escape',
      'Brush with egg wash, sprinkle with sugar',
      'Bake 45-50 minutes until crust is golden and filling bubbles',
      'Cool before serving, excellent with vanilla ice cream',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=600',
  },
  drinks: {
    alcoholic: 'Bourbon whiskey, Craft beer, California wine, Cocktails (Martini, Manhattan)',
    nonAlcoholic: 'Coca-Cola, Root beer, Sweet tea (South), Coffee (Starbucks culture)',
  },
  music: [
    'The Star-Spangled Banner',
    'Born in the U.S.A. - Bruce Springsteen',
    'Empire State of Mind - Jay-Z ft. Alicia Keys',
    'Sweet Home Alabama - Lynyrd Skynyrd',
    'California Dreamin\' - The Mamas & the Papas',
  ],
  decorationIdeas: [
    'Red, white, and blue patriotic colors',
    'Stars and stripes patterns',
    'Vintage Route 66 signs',
    'Baseball and Americana themes',
    'State flag representations',
  ],
  conversationStarters: [
    'Which US cities have you visited or want to visit?',
    'East Coast or West Coast?',
    'What\'s your favorite American food?',
    'Have you ever done a US road trip?',
    'Which American national park would you most like to see?',
  ],
  quiz: [
    {
      id: 'united-states-q1',
      question: 'What is the capital of the United States?',
      options: ['New York City', 'Washington, D.C.', 'Los Angeles', 'Chicago'],
      correctAnswer: 1,
    },
    {
      id: 'united-states-q2',
      question: 'How many states are in the US?',
      options: ['48', '50', '51', '52'],
      correctAnswer: 1,
    },
    {
      id: 'united-states-q3',
      question: 'When did the US declare independence?',
      options: ['1776', '1783', '1789', '1812'],
      correctAnswer: 0,
    },
    {
      id: 'united-states-q4',
      question: 'Which city is known as the "Big Apple"?',
      options: ['Los Angeles', 'Chicago', 'New York City', 'Boston'],
      correctAnswer: 2,
    },
    {
      id: 'united-states-q5',
      question: 'What is America\'s national bird?',
      options: ['Eagle', 'Bald Eagle', 'Turkey', 'Falcon'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 18, y: 42 },
};
