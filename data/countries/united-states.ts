import { Country } from '@/types';

export const unitedStates: Country = {
  id: 'united-states',
  name: 'United States',
  code: 'US',
  continent: 'North America',
  flag: '🇺🇸',
  landscapeImage: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f04?w=800&q=80',
  description:
    'The United States is a vast country stretching across North America with diverse landscapes, cultures, and cities. Known for innovation, entertainment, and the American Dream.',
  quickFacts: [
    { label: 'Capital', value: 'Washington, D.C.' },
    { label: 'Population', value: '331 million' },
    { label: 'Official Language', value: 'English (de facto)' },
    { label: 'Currency', value: 'US Dollar ($)' },
    { label: 'Area', value: '9,833,520 km²' },
  ],
  facts: [
    'The US has the world’s largest economy',
    'There are 50 states, with Alaska being the largest and Rhode Island the smallest',
    'The US produces more movies and TV shows than any other country',
    'Americans pioneered the internet, airplane, and assembly-line production',
    'The country spans deserts, rainforests, mountains, plains, and arctic tundra',
    'New York City is the most linguistically diverse city in the world',
    'The national park system protects 63 major natural landmarks',
    'American fast-food culture has influenced dining worldwide',
  ],
  foodCulture:
    'American cuisine is extremely diverse, shaped by immigrant cultures from around the world. Known for generous portions, regional BBQ traditions, and iconic foods like burgers and apple pie. Regional food varies widely from New York pizza to Texas BBQ and California fusion.',
  history: [
    {
      year: '1776',
      title: 'Declaration of Independence',
      description:
        'The 13 colonies declared independence from Britain, founding a new nation based on democratic principles.',
    },
    {
      year: '1861–1865',
      title: 'American Civil War',
      description:
        'A war between Northern and Southern states over slavery and states’ rights, ending with abolition.',
    },
    {
      year: '1969',
      title: 'Moon Landing',
      description:
        'NASA’s Apollo 11 mission put the first humans on the Moon, led by Neil Armstrong.',
    },
    {
      year: '2000s',
      title: 'Digital & Tech Era',
      description:
        'Silicon Valley companies reshaped global technology, communication, and innovation.',
    },
  ],
  innovations: [
    {
      name: 'Light Bulb',
      year: '1879',
      description: 'Thomas Edison developed the first practical incandescent light bulb.',
    },
    {
      name: 'Airplane',
      year: '1903',
      description:
        'The Wright Brothers achieved the first powered, controlled airplane flight.',
    },
    {
      name: 'Internet',
      year: '1969',
      description:
        'ARPANET, the precursor to the modern internet, was developed in the US.',
    },
    {
      name: 'Smartphone Revolution',
      year: '2007',
      description:
        'Apple’s iPhone transformed mobile communication and computing.',
    },
  ],
  mustVisit: [
    {
      name: 'Grand Canyon',
      description:
        'A vast natural wonder carved by the Colorado River with dramatic layered cliffs.',
    },
    {
      name: 'Statue of Liberty',
      description:
        'Iconic symbol of freedom in New York Harbor, gifted by France in 1886.',
    },
    {
      name: 'Yellowstone National Park',
      description:
        'The world’s first national park, famous for geysers and wildlife.',
    },
    {
      name: 'Golden Gate Bridge',
      description:
        'A landmark suspension bridge spanning San Francisco Bay.',
    },
    {
      name: 'French Quarter, New Orleans',
      description:
        'Historic area known for jazz, Creole cuisine, and vibrant nightlife.',
    },
  ],
  travelEssentials: [
    {
      item: 'Best time to visit',
      description:
        'Varies by region; spring and fall are ideal for most destinations.',
    },
    {
      item: 'Transportation',
      description:
        'A car is essential outside major cities; distances are long.',
    },
    {
      item: 'Travel insurance',
      description:
        'Strongly recommended due to high healthcare costs.',
    },
    {
      item: 'Power',
      description:
        'Type A & B plugs, 120V electricity.',
    },
    {
      item: 'Tipping',
      description:
        '15–20% tips expected in restaurants and service industries.',
    },
  ],
  mainDish: {
    id: 'united-states-main',
    name: 'Classic Burger with Fries',
    description:
      'Juicy beef burger with melted cheese, fresh toppings, and crispy fries.',
    cookingTime: 30,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Ground beef (80/20)', amount: 600, unit: 'g' },
      { name: 'Burger buns', amount: 4, unit: 'pieces' },
      { name: 'Cheddar cheese slices', amount: 4, unit: 'slices' },
      { name: 'Lettuce', amount: 4, unit: 'leaves' },
      { name: 'Tomato', amount: 1, unit: 'large' },
      { name: 'Onion', amount: 1, unit: 'medium' },
      { name: 'Pickles', amount: 8, unit: 'slices' },
      { name: 'Potatoes', amount: 4, unit: 'large' },
      { name: 'Salt and pepper', amount: 1, unit: 'to taste' },
    ],
    steps: [
      'Cut potatoes into fries and soak in cold water for 30 minutes',
      'Form beef into 4 patties and season generously',
      'Heat grill or pan to high heat',
      'Fry potatoes at 160°C until soft, then 180°C until golden',
      'Cook patties 3–4 minutes per side',
      'Add cheese during final minute',
      'Toast buns lightly',
      'Assemble burgers with toppings and serve with fries',
    ],
    imageUrl: 'https://images.pexels.com/photos/15010298/pexels-photo-15010298.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  dessert: {
    id: 'united-states-dessert',
    name: 'Apple Pie',
    description:
      'Classic American dessert with spiced apples in a flaky buttery crust.',
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
      { name: 'Egg (for egg wash)', amount: 1, unit: 'whole' },
    ],
    steps: [
      'Preheat oven to 190°C (375°F)',
      'Peel and slice apples thinly',
      'Mix apples with sugar, spices, lemon juice, and flour',
      'Line pie pan with bottom crust',
      'Fill with apple mixture and dot with butter',
      'Cover with top crust, seal edges, cut steam vents',
      'Brush with egg wash and sprinkle sugar',
      'Bake 45–50 minutes until golden and bubbling',
      'Cool before serving (best with vanilla ice cream)',
    ],
    imageUrl: 'https://images.pexels.com/photos/14892627/pexels-photo-14892627.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  drinks: {
    alcoholic:
      'Bourbon, craft beer, California wine, classic cocktails',
    nonAlcoholic:
      'Coca-Cola, root beer, sweet tea, specialty coffee',
  },
  music: [
    'The Star-Spangled Banner',
    'Born in the U.S.A. – Bruce Springsteen',
    'Empire State of Mind – Jay-Z ft. Alicia Keys',
    'Sweet Home Alabama – Lynyrd Skynyrd',
    'California Dreamin’ – The Mamas & the Papas',
  ],
  decorationIdeas: [
    'Red, white, and blue patriotic colors',
    'Stars and stripes patterns',
    'Route 66 & Americana themes',
    'Baseball and classic diner decor',
  ],
  conversationStarters: [
    'Which US cities have you visited?',
    'East Coast or West Coast?',
    'What’s your favorite American food?',
    'Have you ever done a US road trip?',
    'Which national park would you most like to see?',
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
      question: 'Which city is known as the “Big Apple”?',
      options: ['Los Angeles', 'Chicago', 'New York City', 'Boston'],
      correctAnswer: 2,
    },
    {
      id: 'united-states-q5',
      question: 'What is the national bird of the United States?',
      options: ['Eagle', 'Bald Eagle', 'Turkey', 'Falcon'],
      correctAnswer: 1,
    },
    {
      id: 'united-states-q6',
      question: 'Which natural landmark is carved by the Colorado River?',
      options: ['Yellowstone', 'Yosemite', 'Grand Canyon', 'Glacier National Park'],
      correctAnswer: 2,
    },
    {
      id: 'united-states-q7',
      question: 'What currency is used in the United States?',
      options: ['US Dollar', 'US Pound', 'US Peso', 'American Dollar'],
      correctAnswer: 0,
    },
    {
      id: 'united-states-q8',
      question: 'Which brothers achieved the first powered flight?',
      options: ['Warner Brothers', 'Wright Brothers', 'Jonas Brothers', 'Smith Brothers'],
      correctAnswer: 1,
    },
    {
      id: 'united-states-q9',
      question: 'What is a classic American dessert mentioned in the facts?',
      options: ['Cheesecake', 'Apple Pie', 'Brownies', 'Donuts'],
      correctAnswer: 1,
    },
    {
      id: 'united-states-q10',
      question: 'Which state is the largest by area?',
      options: ['Texas', 'California', 'Alaska', 'Montana'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 18, y: 42 },
};
