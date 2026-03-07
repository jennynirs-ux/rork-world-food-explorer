import { Country } from '@/types';

export const poland: Country = {
  id: 'poland',
  name: 'Poland',
  code: 'PL',
  continent: 'Europe',
  flag: '🇵🇱',
  landscapeImage: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=800&q=80',
  description: 'Poland is a Central European country with a rich and turbulent history. From medieval castles to vibrant modern cities, Poland offers stunning architecture, hearty cuisine, and resilient culture that has survived centuries of challenges.',
  quickFacts: [
    { label: 'Capital', value: 'Warsaw' },
    { label: 'Population', value: '38 million' },
    { label: 'Official Language', value: 'Polish' },
    { label: 'Currency', value: 'Polish Złoty (PLN)' },
    { label: 'Area', value: '312,696 km²' },
  ],
  facts: [
    'Poland has 17 UNESCO World Heritage Sites',
    'Copernicus, who proposed the heliocentric model, was Polish',
    'Poland was erased from the map for 123 years (1795-1918)',
    'Marie Curie, first woman to win a Nobel Prize, was Polish',
    'The word "vodka" comes from the Polish word "woda" (water)',
    'Poland has over 9,000 lakes',
  ],
  foodCulture: 'Polish cuisine is hearty and comforting, featuring dumplings, sausages, stews, and soups. Sour cream, mushrooms, cabbage, and potatoes are staples. Meals are often multi-course affairs, especially on holidays.',
  history: [
    {
      year: '966',
      title: 'Christianization',
      description: 'Poland adopted Christianity, marking the beginning of the Polish state under Duke Mieszko I.'
    },
    {
      year: '1939-1945',
      title: 'World War II',
      description: 'Poland suffered immense losses during WWII, including the Holocaust and Warsaw Uprising.'
    },
    {
      year: '1989',
      title: 'Fall of Communism',
      description: 'The Solidarity movement led to the end of communist rule, inspiring other Eastern European nations.'
    },
  ],
  innovations: [
    {
      name: 'Heliocentrism',
      year: '1543',
      description: 'Nicolaus Copernicus proposed that Earth orbits the Sun, revolutionizing astronomy.'
    },
    {
      name: 'Bulletproof Vest',
      year: '1897',
      description: 'Jan Szczepanik invented an early bulletproof vest and received patents.'
    },
    {
      name: 'Radium & Polonium',
      year: '1898',
      description: 'Marie Curie discovered these radioactive elements, winning two Nobel Prizes.'
    },
  ],
  mustVisit: [
    { name: 'Kraków Old Town', description: 'Medieval city center with stunning Main Market Square, UNESCO site.' },
    { name: 'Auschwitz-Birkenau', description: 'WWII concentration camp memorial and museum.' },
    { name: 'Wieliczka Salt Mine', description: 'Underground salt mine with carved chambers and chapels.' },
    { name: 'Warsaw Old Town', description: 'Beautifully reconstructed historic center, UNESCO Heritage site.' },
    { name: 'Malbork Castle', description: 'Largest castle in the world by land area, former Teutonic Order headquarters.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'May-September for warm weather and festivals.' },
    { item: 'Visa', description: 'Schengen visa rules apply.' },
    { item: 'Cash', description: 'Cards widely accepted, but have some złoty for small purchases.' },
    { item: 'Warm clothing', description: 'Winters are cold, pack accordingly.' },
  ],
  mainDish: {
    id: 'poland-main',
    name: 'Pierogi',
    description: 'Dumplings filled with various ingredients, Poland\'s most iconic dish',
    cookingTime: 90,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Flour', amount: 500, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'large' },
      { name: 'Warm water', amount: 150, unit: 'ml' },
      { name: 'Potatoes', amount: 600, unit: 'g' },
      { name: 'Farmer cheese', amount: 200, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'large' },
      { name: 'Butter', amount: 100, unit: 'g' },
      { name: 'Salt and pepper', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Make dough: mix flour, eggs, water, and salt, knead until smooth',
      'Let dough rest for 30 minutes',
      'Make filling: mash cooked potatoes with cheese and sautéed onions',
      'Roll out dough thinly, cut circles with glass',
      'Place filling on each circle, fold and seal edges',
      'Boil pierogi in salted water until they float',
      'Sauté in butter with onions until lightly golden',
      'Serve with sour cream',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1566740933430-b5e70b06d2d6?w=800&q=80',
  },
  dessert: {
    id: 'poland-dessert',
    name: 'Sernik (Polish Cheesecake)',
    description: 'Dense, creamy cheesecake made with farmer cheese',
    cookingTime: 90,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Farmer cheese (twaróg)', amount: 1000, unit: 'g' },
      { name: 'Sugar', amount: 250, unit: 'g' },
      { name: 'Eggs', amount: 6, unit: 'large' },
      { name: 'Butter', amount: 150, unit: 'g' },
      { name: 'Vanilla extract', amount: 2, unit: 'tsp' },
      { name: 'Lemon zest', amount: 1, unit: 'tbsp' },
      { name: 'Potato starch', amount: 4, unit: 'tbsp' },
      { name: 'Graham crackers for crust', amount: 200, unit: 'g' },
    ],
    steps: [
      'Make crust: crush crackers, mix with melted butter, press into pan',
      'Blend cheese until smooth',
      'Beat in sugar, eggs, vanilla, lemon zest, and starch',
      'Pour mixture over crust',
      'Bake at 160°C for 60-70 minutes',
      'Turn off oven, leave cake inside with door open for 30 minutes',
      'Cool completely, refrigerate overnight',
      'Dust with powdered sugar before serving',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1508737027454-e6454ef45afd?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Vodka (Żubrówka, Belvedere), Polish beer (Tyskie, Żywiec), Nalewka (fruit liqueur)',
    nonAlcoholic: 'Kompot (fruit drink), Herbata (tea), Apple juice, Hot chocolate',
  },
  music: [
    'Chopin - world-famous composer',
    'Mazurka - traditional Polish dance',
    'Polonaise - noble dance',
    'Modern Polish pop and disco polo',
  ],
  decorationIdeas: [
    'Polish flag colors (white and red)',
    'Traditional wycinanki paper cutouts',
    'Folk art with colorful floral patterns',
    'Red and white checked tablecloths',
    'Traditional pottery and ceramics',
  ],
  conversationStarters: [
    'Have you tried pierogi?',
    'What do you know about Polish history?',
    'Do you enjoy Chopin\'s music?',
    'Have you visited any Polish cities?',
  ],
  quiz: [
    {
      id: 'poland-q1',
      question: 'Who was the famous Polish astronomer who proposed heliocentrism?',
      options: ['Galileo', 'Copernicus', 'Kepler', 'Newton'],
      correctAnswer: 1,
    },
    {
      id: 'poland-q2',
      question: 'What is Poland\'s most famous dumpling dish?',
      options: ['Pierogi', 'Pelmeni', 'Gyoza', 'Ravioli'],
      correctAnswer: 0,
    },
    {
      id: 'poland-q3',
      question: 'Which famous composer was Polish?',
      options: ['Mozart', 'Beethoven', 'Chopin', 'Bach'],
      correctAnswer: 2,
    },
    {
      id: 'poland-q4',
      question: 'What is the capital of Poland?',
      options: ['Kraków', 'Warsaw', 'Gdańsk', 'Wrocław'],
      correctAnswer: 1,
    },
    {
      id: 'poland-q5',
      question: 'Which scientist won two Nobel Prizes and was Polish?',
      options: ['Einstein', 'Marie Curie', 'Newton', 'Darwin'],
      correctAnswer: 1,
    },
    {
      id: 'poland-q6',
      question: 'For how many years was Poland erased from the map?',
      options: ['50 years', '75 years', '123 years', '200 years'],
      correctAnswer: 2,
    },
    {
      id: 'poland-q7',
      question: 'What is Poland\'s currency?',
      options: ['Złoty', 'Euro', 'Koruna', 'Forint'],
      correctAnswer: 0,
    },
    {
      id: 'poland-q8',
      question: 'In which year did communism end in Poland?',
      options: ['1980', '1985', '1989', '1995'],
      correctAnswer: 2,
    },
    {
      id: 'poland-q9',
      question: 'What movement led to the fall of communism in Poland?',
      options: ['Solidarity', 'Revolution', 'Uprising', 'Renaissance'],
      correctAnswer: 0,
    },
    {
      id: 'poland-q10',
      question: 'How many UNESCO World Heritage Sites does Poland have?',
      options: ['5', '10', '17', '25'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 52, y: 52 },
};
