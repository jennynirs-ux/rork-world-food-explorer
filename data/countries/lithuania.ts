import { Country } from '@/types';

export const lithuania: Country = {
  id: 'lithuania',
  name: 'Lithuania',
  code: 'LT',
  continent: 'Europe',
  flag: '🇱🇹',
  landscapeImage: 'https://images.unsplash.com/photo-1560363834-e8b5c5f6d3c2?w=800',
  description: 'Lithuania is the largest and most populous of the Baltic States, known for its medieval architecture, stunning nature, rich history, and vibrant culture. It was the first Soviet republic to declare independence.',
  quickFacts: [
    { label: 'Capital', value: 'Vilnius' },
    { label: 'Population', value: '2.8 million' },
    { label: 'Official Language', value: 'Lithuanian' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '65,300 km²' },
  ],
  facts: [
    'Lithuanian is one of the oldest living languages in the world',
    'Lithuania was the last pagan country in Europe to convert to Christianity',
    'The Curonian Spit has some of the highest moving sand dunes in Europe',
    'Basketball is the national sport and almost a religion',
    'Lithuania was once the largest country in Europe in the 15th century',
    'Vilnius has one of the largest Old Towns in Eastern Europe',
    'Lithuania produces the world\'s fastest internet speeds',
    'The Hill of Crosses has over 100,000 crosses',
  ],
  foodCulture: 'Lithuanian cuisine features hearty, filling dishes based on potatoes, rye bread, meat, and dairy products. The food reflects the country\'s agricultural heritage and cold climate, with many preserved and fermented foods.',
  history: [
    {
      year: '1253',
      title: 'Kingdom of Lithuania',
      description: 'Mindaugas was crowned as the first and only King of Lithuania.'
    },
    {
      year: '1386',
      title: 'Union with Poland',
      description: 'Grand Duke Jogaila married Polish queen and created the powerful Polish-Lithuanian Commonwealth.'
    },
    {
      year: '1795',
      title: 'Lost Independence',
      description: 'Lithuania was partitioned and became part of the Russian Empire.'
    },
    {
      year: '1918',
      title: 'Independence Restored',
      description: 'Lithuania declared independence after World War I.'
    },
    {
      year: '1940-1990',
      title: 'Soviet Occupation',
      description: 'Lithuania was occupied by the Soviet Union, enduring deportations and repression.'
    },
    {
      year: '1990',
      title: 'Second Independence',
      description: 'Lithuania became the first Soviet republic to declare independence, inspiring others.'
    },
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'May-September for warm weather and festivals' },
    { item: 'Visa', description: 'EU member. Schengen visa rules apply.' },
    { item: 'Transportation', description: 'Good public transport. Buses connect cities efficiently.' },
    { item: 'Language', description: 'Lithuanian. English spoken in cities and by younger people.' },
    { item: 'Safety', description: 'Very safe. Standard precautions in tourist areas.' },
  ],
  mainDish: {
    id: 'lithuania-cepelinai',
    name: 'Cepelinai',
    description: 'Lithuania\'s national dish - large potato dumplings filled with meat, served with sour cream and bacon sauce',
    cookingTime: 90,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Potatoes (starchy)', amount: 2, unit: 'kg' },
      { name: 'Ground pork', amount: 400, unit: 'g' },
      { name: 'Onion', amount: 1, unit: 'large' },
      { name: 'Bacon', amount: 200, unit: 'g' },
      { name: 'Sour cream', amount: 300, unit: 'ml' },
      { name: 'Potato starch', amount: 4, unit: 'tbsp' },
      { name: 'Salt and pepper', amount: 1, unit: 'to taste' },
    ],
    steps: [
      'Peel and grate 2/3 of the potatoes, squeeze out excess water',
      'Boil remaining 1/3 potatoes, mash and mix with grated potatoes',
      'Add potato starch and salt to potato mixture',
      'Brown ground pork with diced onion, season well',
      'Form potato mixture into oval shapes, add meat filling in center',
      'Seal edges to create zeppelin-shaped dumplings',
      'Boil in salted water for 30-40 minutes until they float',
      'Fry diced bacon until crispy, mix with sour cream',
      'Serve cepelinai hot with bacon-sour cream sauce',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1606850780554-b55ef9eb42b3?w=600',
  },
  drinks: {
    alcoholic: 'Midus (honey mead), Lithuanian beer, Starka (rye vodka)',
    nonAlcoholic: 'Kvas (fermented rye drink), Birch sap, Herbal teas',
  },
  music: ['Lithuanian folk songs (dainos)', 'Sutartinės (polyphonic songs)', 'Baltic folk music', 'Contemporary pop'],
  decorationIdeas: [
    'Yellow, green, and red (Lithuanian flag colors)',
    'Amber jewelry and decorations',
    'Traditional woven textiles',
    'Wooden carved items',
    'Straw ornaments',
    'Rue herb decorations',
  ],
  conversationStarters: [
    'Have you tried cepelinai? They\'re quite unique!',
    'Do you follow basketball? It\'s huge in Lithuania!',
    'The Hill of Crosses is such a powerful place - have you heard of it?',
    'Lithuanian is one of the oldest languages - so fascinating!',
  ],
  quiz: [
    {
      id: 'lithuania-q1',
      question: 'What is Lithuania\'s capital?',
      options: ['Riga', 'Tallinn', 'Vilnius', 'Warsaw'],
      correctAnswer: 2,
    },
    {
      id: 'lithuania-q2',
      question: 'What is the national sport of Lithuania?',
      options: ['Football', 'Ice Hockey', 'Basketball', 'Volleyball'],
      correctAnswer: 2,
    },
    {
      id: 'lithuania-q3',
      question: 'What year did Lithuania first declare independence from the Soviet Union?',
      options: ['1985', '1990', '1991', '1995'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 53, y: 55 },
};