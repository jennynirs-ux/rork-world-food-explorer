import { Country } from '@/types';

export const jamaica: Country = {
  id: 'jamaica',
  name: 'Jamaica',
  code: 'JM',
  continent: 'North America',
  flag: '🇯🇲',
  landscapeImage: 'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=800&q=80',
  description: 'Jamaica is a Caribbean island nation known for its reggae music, beautiful beaches, lush mountains, and vibrant culture. The birthplace of Bob Marley, Jamaica has left an indelible mark on music and sports worldwide.',
  quickFacts: [
    { label: 'Capital', value: 'Kingston' },
    { label: 'Population', value: '2.9 million' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'Jamaican Dollar (JMD)' },
    { label: 'Area', value: '10,991 km²' },
  ],
  facts: [
    'Jamaica is the birthplace of reggae music and Bob Marley',
    'The country has won more Olympic medals per capita than any other nation',
    'Blue Mountain Coffee is one of the world\'s most expensive coffees',
    'Usain Bolt, the fastest man in history, is Jamaican',
    'Jamaica was the first Caribbean country to gain independence',
    'The island has over 120 rivers and waterfalls',
  ],
  foodCulture: 'Jamaican cuisine is known for its bold, spicy flavors combining indigenous, African, British, and Indian influences. Jerk seasoning, a spicy marinade, is Jamaica\'s most famous culinary contribution to the world.',
  history: [
    {
      year: '1494',
      title: 'Columbus Arrival',
      description: 'Christopher Columbus landed on Jamaica during his second voyage to the Americas.'
    },
    {
      year: '1962',
      title: 'Independence',
      description: 'Jamaica gained independence from Britain, becoming a sovereign nation within the Commonwealth.'
    },
    {
      year: '1970s',
      title: 'Reggae Goes Global',
      description: 'Bob Marley and reggae music brought Jamaican culture to worldwide prominence.'
    },
  ],
  innovations: [
    {
      name: 'Reggae Music',
      year: '1960s',
      description: 'A music genre that originated in Jamaica and influenced popular music globally.'
    },
    {
      name: 'Jerk Cooking',
      year: 'Traditional',
      description: 'A unique cooking method and spice blend that became internationally famous.'
    },
  ],
  mustVisit: [
    { name: 'Seven Mile Beach', description: 'World-famous beach in Negril with crystal-clear waters.' },
    { name: 'Dunn\'s River Falls', description: 'Stunning terraced waterfalls you can climb near Ocho Rios.' },
    { name: 'Bob Marley Museum', description: 'Former home of reggae legend Bob Marley in Kingston.' },
    { name: 'Blue Mountains', description: 'Lush mountain range home to world-famous coffee plantations.' },
    { name: 'Rick\'s Café', description: 'Famous cliff diving spot with spectacular sunsets in Negril.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'December-April for dry season, avoid hurricane season (June-November).' },
    { item: 'Light clothing', description: 'Tropical climate requires breathable, light fabrics.' },
    { item: 'Water shoes', description: 'Useful for climbing Dunn\'s River Falls and rocky beaches.' },
    { item: 'Sun protection', description: 'Strong Caribbean sun requires high SPF and hat.' },
  ],
  mainDish: {
    id: 'jamaica-main',
    name: 'Jerk Chicken',
    description: 'Spicy grilled chicken marinated in Jamaica\'s famous jerk seasoning',
    cookingTime: 180,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken pieces', amount: 1500, unit: 'g' },
      { name: 'Scotch bonnet peppers', amount: 3, unit: 'pieces' },
      { name: 'Allspice', amount: 2, unit: 'tbsp' },
      { name: 'Thyme', amount: 2, unit: 'tbsp' },
      { name: 'Scallions', amount: 6, unit: 'stalks' },
      { name: 'Garlic', amount: 6, unit: 'cloves' },
      { name: 'Ginger', amount: 50, unit: 'g' },
      { name: 'Soy sauce', amount: 3, unit: 'tbsp' },
      { name: 'Lime juice', amount: 4, unit: 'tbsp' },
      { name: 'Brown sugar', amount: 2, unit: 'tbsp' },
    ],
    steps: [
      'Blend peppers, allspice, thyme, scallions, garlic, ginger into paste',
      'Mix paste with soy sauce, lime juice, and brown sugar',
      'Marinate chicken for at least 4 hours, preferably overnight',
      'Grill over pimento wood or charcoal for authentic flavor',
      'Cook until chicken is charred and fully cooked through',
      'Serve with rice and peas, festival (fried dough), and coleslaw',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&q=80',
  },
  dessert: {
    id: 'jamaica-dessert',
    name: 'Rum Cake',
    description: 'Moist, rich cake soaked in rum syrup, a Jamaican favorite',
    cookingTime: 90,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Flour', amount: 400, unit: 'g' },
      { name: 'Sugar', amount: 300, unit: 'g' },
      { name: 'Butter', amount: 200, unit: 'g' },
      { name: 'Eggs', amount: 4, unit: 'large' },
      { name: 'Dark rum', amount: 200, unit: 'ml' },
      { name: 'Raisins', amount: 150, unit: 'g' },
      { name: 'Mixed nuts', amount: 100, unit: 'g' },
      { name: 'Browning sauce', amount: 2, unit: 'tbsp' },
    ],
    steps: [
      'Soak raisins in rum overnight',
      'Cream butter and sugar, beat in eggs',
      'Fold in flour and soaked raisins with rum',
      'Add browning sauce for color',
      'Pour into greased pan, bake at 160°C for 60 minutes',
      'Poke holes in warm cake, pour rum syrup over',
      'Let cake absorb syrup completely before serving',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Rum_cake.jpg/800px-Rum_cake.jpg',
  },
  drinks: {
    alcoholic: 'Red Stripe beer, Appleton Estate rum, Rum punch, Bob Marley cocktail',
    nonAlcoholic: 'Ting (grapefruit soda), Sorrel drink, Fresh coconut water, Irish moss drink',
  },
  music: [
    'One Love - Bob Marley',
    'No Woman, No Cry - Bob Marley',
    'Three Little Birds - Bob Marley',
    'Everything\'s Gonna Be Alright - Bob Marley',
    'Welcome to Jamrock - Damian Marley',
  ],
  decorationIdeas: [
    'Jamaican flag colors (green, yellow, black)',
    'Rastafarian colors (red, yellow, green)',
    'Tropical flowers and palm leaves',
    'Bob Marley posters',
    'Beach and reggae themes',
  ],
  conversationStarters: [
    'What\'s your favorite Bob Marley song?',
    'Have you tried authentic jerk chicken?',
    'Do you follow Olympic sprinting?',
    'What\'s your favorite Caribbean beach?',
  ],
  quiz: [
    {
      id: 'jamaica-q1',
      question: 'Who is Jamaica\'s most famous reggae musician?',
      options: ['Bob Marley', 'Jimmy Cliff', 'Peter Tosh', 'Burning Spear'],
      correctAnswer: 0,
    },
    {
      id: 'jamaica-q2',
      question: 'What is Jamaica\'s famous spicy marinade called?',
      options: ['BBQ', 'Jerk', 'Cajun', 'Curry'],
      correctAnswer: 1,
    },
    {
      id: 'jamaica-q3',
      question: 'Who is the fastest man in history from Jamaica?',
      options: ['Asafa Powell', 'Yohan Blake', 'Usain Bolt', 'Warren Weir'],
      correctAnswer: 2,
    },
    {
      id: 'jamaica-q4',
      question: 'What is the capital of Jamaica?',
      options: ['Kingston', 'Montego Bay', 'Negril', 'Ocho Rios'],
      correctAnswer: 0,
    },
    {
      id: 'jamaica-q5',
      question: 'What music genre originated in Jamaica?',
      options: ['Jazz', 'Blues', 'Reggae', 'Salsa'],
      correctAnswer: 2,
    },
    {
      id: 'jamaica-q6',
      question: 'What is one of the world\'s most expensive coffees grown in Jamaica?',
      options: ['Kona Coffee', 'Blue Mountain Coffee', 'Colombian Coffee', 'Ethiopian Coffee'],
      correctAnswer: 1,
    },
    {
      id: 'jamaica-q7',
      question: 'What year did Jamaica gain independence?',
      options: ['1945', '1962', '1975', '1980'],
      correctAnswer: 1,
    },
    {
      id: 'jamaica-q8',
      question: 'What is Jamaica\'s currency?',
      options: ['US Dollar', 'Jamaican Dollar', 'Caribbean Dollar', 'British Pound'],
      correctAnswer: 1,
    },
    {
      id: 'jamaica-q9',
      question: 'Which famous waterfall can you climb in Jamaica?',
      options: ['Victoria Falls', 'Niagara Falls', 'Dunn\'s River Falls', 'Angel Falls'],
      correctAnswer: 2,
    },
    {
      id: 'jamaica-q10',
      question: 'Which beach is famous for its seven miles of white sand?',
      options: ['Copacabana Beach', 'Seven Mile Beach', 'Waikiki Beach', 'Bondi Beach'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 22, y: 27 },
};
