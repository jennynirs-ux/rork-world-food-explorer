import { Country } from '@/types';

export const monaco: Country = {
  id: 'monaco',
  name: 'Monaco',
  code: 'MC',
  continent: 'Europe',
  flag: '🇲🇨',
  landscapeImage: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&q=80',
  description: 'Monaco is a tiny city-state on the French Riviera, known for luxury, casinos, the Grand Prix, and being a billionaire\'s playground.',
  quickFacts: [
    { label: 'Capital', value: 'Monaco' },
    { label: 'Population', value: '39,000' },
    { label: 'Official Language', value: 'French' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '2.02 km²' },
  ],
  facts: [
    'The world\'s second smallest country',
    'Has the highest number of millionaires per capita',
    'No income tax for residents',
    'Home to the Monaco Grand Prix',
  ],
  foodCulture: 'Monégasque cuisine is similar to French and Italian Mediterranean cooking.',
  history: [
    {
      year: '1297',
      title: 'Grimaldi Rule',
      description: 'The Grimaldi family began ruling Monaco, continuing to this day.'
    },
    {
      year: '1861',
      title: 'French Protection',
      description: 'Monaco came under French protection while maintaining sovereignty.'
    },
    {
      year: '1956',
      title: 'Prince Rainier & Grace Kelly',
      description: 'The wedding of Prince Rainier and actress Grace Kelly brought global attention.'
    },
  ],
  innovations: [
    {
      name: 'Monte Carlo Method',
      year: '1940s',
      description: 'Statistical algorithm named after Monaco\'s famous casino.',
    },
    {
      name: 'Ocean Conservation',
      year: 'Modern',
      description: 'Prince Albert II leads global ocean conservation efforts.',
    },
  ],
  mustVisit: [
    { name: 'Monte Carlo Casino', description: 'Legendary casino with Belle Époque architecture.' },
    { name: 'Prince\'s Palace', description: 'Official residence of the ruling Grimaldi family.' },
    { name: 'Oceanographic Museum', description: 'Jacques Cousteau\'s marine museum on a cliff.' },
    { name: 'Monaco Grand Prix Circuit', description: 'Walk the famous F1 street circuit.' },
    { name: 'Jardin Exotique', description: 'Clifftop garden with succulents and panoramic views.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'April-October for warm weather; May for Grand Prix.' },
    { item: 'Visa', description: 'Same as France (Schengen).' },
    { item: 'Budget', description: 'One of the world\'s most expensive destinations.' },
    { item: 'Dress code', description: 'Smart casual; casinos require jacket for men.' },
  ],
  dessert: {
    id: 'monaco-dessert',
    name: 'Fougasse Monégasque',
    description: 'Traditional sweet bread with anise and orange blossom',
    cookingTime: 120,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Flour', amount: 500, unit: 'g' },
      { name: 'Sugar', amount: 150, unit: 'g' },
      { name: 'Butter', amount: 100, unit: 'g' },
      { name: 'Eggs', amount: 3, unit: 'large' },
      { name: 'Yeast', amount: 10, unit: 'g' },
      { name: 'Anise seeds', amount: 2, unit: 'tbsp' },
      { name: 'Orange blossom water', amount: 2, unit: 'tbsp' },
    ],
    steps: [
      'Activate yeast in warm water',
      'Mix flour, sugar, eggs, butter, and yeast',
      'Add anise and orange blossom water',
      'Knead into smooth dough, let rise 1 hour',
      'Shape into flat oval bread',
      'Let rise again for 30 minutes',
      'Bake at 350°F for 25 minutes until golden',
      'Cool and slice to serve',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1558303035-8d0d4c0da71b?w=800&q=80',
  },
  mainDish: {
    id: 'monaco-main',
    name: 'Barbajuan',
    description: 'Fried pastry filled with Swiss chard and ricotta',
    cookingTime: 60,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Pastry dough', amount: 400, unit: 'g' },
      { name: 'Swiss chard', amount: 300, unit: 'g' },
      { name: 'Ricotta cheese', amount: 200, unit: 'g' },
      { name: 'Parmesan', amount: 50, unit: 'g' },
      { name: 'Onions', amount: 1, unit: 'whole' },
      { name: 'Olive oil', amount: 100, unit: 'ml' },
    ],
    steps: [
      'Sauté onions and chard',
      'Mix with cheeses',
      'Roll out pastry dough',
      'Fill with chard mixture',
      'Fold into half-moons and seal',
      'Deep fry until golden',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Champagne, French wines, Cocktails',
    nonAlcoholic: 'Espresso, French mineral water',
  },
  music: [
    'Classical concerts',
    'Opera',
    'Jazz festivals',
  ],
  decorationIdeas: [
    'Red and white flag colors',
    'Luxury yacht imagery',
    'Casino themes',
    'Formula 1 elements',
  ],
  conversationStarters: [
    'Have you been to Monte Carlo?',
    'What do you know about Formula 1?',
  ],
  quiz: [
    {
      id: 'monaco-q1',
      question: 'What famous race is held in Monaco?',
      options: ['Le Mans 24', 'Monaco Grand Prix', 'Tour de France', 'Dakar Rally'],
      correctAnswer: 1,
    },
    {
      id: 'monaco-q2',
      question: 'What is Monaco\'s size ranking among countries?',
      options: ['Smallest', 'Second smallest', 'Third smallest', 'Fourth smallest'],
      correctAnswer: 1,
    },
    {
      id: 'monaco-q3',
      question: 'Which royal family has ruled Monaco since 1297?',
      options: ['Windsor', 'Bourbon', 'Grimaldi', 'Habsburg'],
      correctAnswer: 2,
    },
    {
      id: 'monaco-q4',
      question: 'What is Monaco\'s famous casino called?',
      options: ['Bellagio', 'Monte Carlo', 'Caesars Palace', 'The Venetian'],
      correctAnswer: 1,
    },
    {
      id: 'monaco-q5',
      question: 'What currency does Monaco use?',
      options: ['Monaco Franc', 'Swiss Franc', 'Euro', 'Dollar'],
      correctAnswer: 2,
    },
    {
      id: 'monaco-q6',
      question: 'Who was the famous American actress who became Princess of Monaco?',
      options: ['Audrey Hepburn', 'Grace Kelly', 'Marilyn Monroe', 'Elizabeth Taylor'],
      correctAnswer: 1,
    },
    {
      id: 'monaco-q7',
      question: 'What is Monaco\'s approximate area?',
      options: ['2 km²', '10 km²', '50 km²', '100 km²'],
      correctAnswer: 0,
    },
    {
      id: 'monaco-q8',
      question: 'What is Monaco\'s official language?',
      options: ['Italian', 'French', 'English', 'Monégasque'],
      correctAnswer: 1,
    },
    {
      id: 'monaco-q9',
      question: 'What does Monaco have the highest concentration of?',
      options: ['Restaurants', 'Millionaires', 'Museums', 'Hotels'],
      correctAnswer: 1,
    },
    {
      id: 'monaco-q10',
      question: 'Who is Monaco\'s current monarch known for ocean conservation?',
      options: ['Prince Rainier III', 'Prince Albert II', 'Prince Charles III', 'Prince Louis'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 48, y: 44 },
};
