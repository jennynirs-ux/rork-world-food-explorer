import { Country } from '@/types';

export const luxembourg: Country = {
  id: 'luxembourg',
  name: 'Luxembourg',
  code: 'LU',
  continent: 'Europe',
  flag: '🇱🇺',
  landscapeImage: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80',
  description: 'Luxembourg is a small European country known for its medieval old town, EU institutions, multicultural population, and high living standards.',
  quickFacts: [
    { label: 'Capital', value: 'Luxembourg City' },
    { label: 'Population', value: '640,000' },
    { label: 'Official Languages', value: 'Luxembourgish, French, German' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '2,586 km²' },
  ],
  facts: [
    'One of the founding members of the EU',
    'Highest minimum wage in the EU',
    'Over 170 nationalities represented',
    'The old town is a UNESCO World Heritage Site',
  ],
  foodCulture: 'Luxembourg cuisine blends French and German influences with hearty meat dishes and pastries.',
  history: [
    {
      year: '963',
      title: 'Foundation',
      description: 'Count Siegfried built a castle that became the nucleus of Luxembourg.'
    },
    {
      year: '1867',
      title: 'Neutrality',
      description: 'Luxembourg was declared permanently neutral by European powers.'
    },
    {
      year: '1957',
      title: 'EU Founding',
      description: 'Luxembourg was a founding member of what became the European Union.'
    },
  ],
  innovations: [
    {
      name: 'RTL Broadcasting',
      year: '1931',
      description: 'Radio Luxembourg became one of Europe\'s first commercial radio stations.',
    },
    {
      name: 'Steel Industry',
      year: '19th Century',
      description: 'Development of innovative steel production techniques.',
    },
  ],
  mustVisit: [
    { name: 'Luxembourg City Old Quarter', description: 'UNESCO World Heritage Site with fortifications and historic buildings.' },
    { name: 'Vianden Castle', description: 'Beautifully restored medieval castle overlooking the town.' },
    { name: 'Mullerthal Region', description: 'Luxembourg\'s "Little Switzerland" with rock formations and forests.' },
    { name: 'Bock Casemates', description: 'Network of underground tunnels carved into rock.' },
    { name: 'Moselle Valley', description: 'Wine region with picturesque villages and vineyards.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'May-September for warm weather and outdoor activities.' },
    { item: 'Visa', description: 'EU member, Schengen visa rules apply.' },
    { item: 'Transportation', description: 'Free public transport throughout the country.' },
    { item: 'Language', description: 'Luxembourgish, French, and German all official; English widely spoken.' },
  ],
  dessert: {
    id: 'luxembourg-dessert',
    name: 'Quetschentaart',
    description: 'Traditional plum tart, Luxembourg\'s favorite dessert',
    cookingTime: 60,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Shortcrust pastry', amount: 400, unit: 'g' },
      { name: 'Plums (damson)', amount: 1000, unit: 'g' },
      { name: 'Sugar', amount: 150, unit: 'g' },
      { name: 'Cinnamon', amount: 1, unit: 'tsp' },
      { name: 'Breadcrumbs', amount: 50, unit: 'g' },
      { name: 'Butter', amount: 30, unit: 'g' },
    ],
    steps: [
      'Roll out pastry and line tart pan',
      'Sprinkle breadcrumbs over base to absorb juice',
      'Halve and pit plums',
      'Arrange plums tightly in overlapping circles',
      'Sprinkle with sugar and cinnamon',
      'Dot with small pieces of butter',
      'Bake at 180°C for 45 minutes until plums are soft',
      'Serve warm or cold with whipped cream',
    ],
    imageUrl: 'https://images.pexels.com/photos/7439809/pexels-photo-7439809.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  mainDish: {
    id: 'luxembourg-main',
    name: 'Judd mat Gaardebounen',
    description: 'Smoked pork collar with broad beans',
    cookingTime: 120,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Smoked pork collar', amount: 1, unit: 'kg' },
      { name: 'Broad beans', amount: 500, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Potatoes', amount: 6, unit: 'whole' },
      { name: 'Cream', amount: 200, unit: 'ml' },
      { name: 'Bay leaves', amount: 2, unit: 'whole' },
    ],
    steps: [
      'Soak pork overnight to reduce saltiness',
      'Boil pork with bay leaves until tender',
      'Cook broad beans separately',
      'Sauté onions and add cream',
      'Mix beans with creamy onions',
      'Serve pork slices with beans and boiled potatoes',
    ],
    imageUrl: 'https://images.pexels.com/photos/13065211/pexels-photo-13065211.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  drinks: {
    alcoholic: 'Moselle wine, Bofferding beer, Crémant sparkling wine',
    nonAlcoholic: 'Apple juice, Mineral water',
  },
  music: [
    'Traditional folk music',
    'Classical concerts',
    'European pop',
  ],
  decorationIdeas: [
    'Red, white and blue flag colors',
    'Castle and fortress imagery',
    'European architectural elements',
    'Wine region themes',
  ],
  conversationStarters: [
    'Have you visited Luxembourg\'s old town?',
    'What do you know about EU institutions?',
  ],
  quiz: [
    {
      id: 'luxembourg-q1',
      question: 'How many official languages does Luxembourg have?',
      options: ['1', '2', '3', '4'],
      correctAnswer: 2,
    },
    {
      id: 'luxembourg-q2',
      question: 'What is the capital of Luxembourg?',
      options: ['Brussels', 'Luxembourg City', 'Strasbourg', 'Geneva'],
      correctAnswer: 1,
    },
    {
      id: 'luxembourg-q3',
      question: 'What are Luxembourg\'s official languages?',
      options: ['French only', 'German only', 'Luxembourgish, French, German', 'English and French'],
      correctAnswer: 2,
    },
    {
      id: 'luxembourg-q4',
      question: 'Luxembourg was a founding member of which organization?',
      options: ['United Nations', 'European Union', 'NATO only', 'World Bank'],
      correctAnswer: 1,
    },
    {
      id: 'luxembourg-q5',
      question: 'What is unique about public transport in Luxembourg?',
      options: ['Most expensive in Europe', 'Free for everyone', 'Only for tourists', 'Trains only'],
      correctAnswer: 1,
    },
    {
      id: 'luxembourg-q6',
      question: 'What is Luxembourg\'s currency?',
      options: ['Luxembourg Franc', 'Swiss Franc', 'Euro', 'Dollar'],
      correctAnswer: 2,
    },
    {
      id: 'luxembourg-q7',
      question: 'What is Luxembourg\'s national dish?',
      options: ['Fondue', 'Judd mat Gaardebounen', 'Schnitzel', 'Croissant'],
      correctAnswer: 1,
    },
    {
      id: 'luxembourg-q8',
      question: 'What is the Mullerthal region also known as?',
      options: ['Big Switzerland', 'Little Switzerland', 'Mini Alps', 'Forest Hills'],
      correctAnswer: 1,
    },
    {
      id: 'luxembourg-q9',
      question: 'In which year was Luxembourg founded?',
      options: ['500', '963', '1200', '1500'],
      correctAnswer: 1,
    },
    {
      id: 'luxembourg-q10',
      question: 'What underground attraction can you visit in Luxembourg City?',
      options: ['Wine Cellars', 'Bock Casemates', 'Mining Tunnels', 'Metro System'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 48, y: 50 },
};
