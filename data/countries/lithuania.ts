import { Country } from '@/types';

export const lithuania: Country = {
  id: 'lithuania',
  name: 'Lithuania',
  code: 'LT',
  continent: 'Europe',
  flag: '🇱🇹',
  landscapeImage: 'https://images.unsplash.com/photo-1601823984263-b55a23f3b26f?w=800&q=80',
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
  innovations: [
    {
      name: 'Lithuanian Language Preservation',
      year: 'Continuous',
      description: 'Maintained one of the oldest living Indo-European languages despite occupations.',
    },
    {
      name: 'Cross Crafting',
      year: 'Traditional',
      description: 'Traditional cross-making became a cultural and spiritual practice.',
    },
    {
      name: 'Baltic Way',
      year: '1989',
      description: 'Peaceful demonstration where 2 million people formed a human chain across Baltic states.',
    },
  ],
  mustVisit: [
    { name: 'Vilnius Old Town', description: 'One of the largest medieval old towns in Eastern Europe, UNESCO site.' },
    { name: 'Trakai Island Castle', description: 'Gothic castle on an island in a scenic lake.' },
    { name: 'Hill of Crosses', description: 'Pilgrimage site with over 100,000 crosses.' },
    { name: 'Curonian Spit', description: 'UNESCO site with massive sand dunes and fishing villages.' },
    { name: 'Kernavė', description: 'Archaeological site, first capital of Lithuania.' }
  ],
  dessert: {
    id: 'lithuania-dessert',
    name: 'Šakotis',
    description: 'Traditional tree cake with crispy branches, served at celebrations',
    cookingTime: 90,
    servings: 16,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Eggs', amount: 12, unit: 'large' },
      { name: 'Sugar', amount: 300, unit: 'g' },
      { name: 'Butter', amount: 300, unit: 'g' },
      { name: 'Sour cream', amount: 200, unit: 'ml' },
      { name: 'Flour', amount: 300, unit: 'g' },
      { name: 'Vanilla extract', amount: 2, unit: 'tsp' },
    ],
    steps: [
      'Beat eggs and sugar until very fluffy',
      'Melt butter and cool slightly',
      'Fold in butter, sour cream, and vanilla',
      'Gradually add flour',
      'Pour batter over rotating spit in layers',
      'Bake each layer until golden before adding next',
      'Continue until desired size',
      'Cool completely and remove from spit',
      'Dust with powdered sugar',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600',
  },
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
    {
      id: 'lithuania-q4',
      question: 'What is Lithuania\'s national dish?',
      options: ['Pierogi', 'Cepelinai', 'Goulash', 'Borscht'],
      correctAnswer: 1,
    },
    {
      id: 'lithuania-q5',
      question: 'What is unique about the Lithuanian language?',
      options: ['Newest language', 'One of the oldest living languages', 'Only spoken in cities', 'No written form'],
      correctAnswer: 1,
    },
    {
      id: 'lithuania-q6',
      question: 'What is Lithuania\'s currency?',
      options: ['Litas', 'Euro', 'Krona', 'Zloty'],
      correctAnswer: 1,
    },
    {
      id: 'lithuania-q7',
      question: 'Which pilgrimage site in Lithuania has over 100,000 crosses?',
      options: ['Cross Mountain', 'Hill of Crosses', 'Sacred Valley', 'Cross Fields'],
      correctAnswer: 1,
    },
    {
      id: 'lithuania-q8',
      question: 'What is Lithuania\'s most popular sport?',
      options: ['Football', 'Ice Hockey', 'Basketball', 'Tennis'],
      correctAnswer: 2,
    },
    {
      id: 'lithuania-q9',
      question: 'Which Lithuanian castle sits on an island in a lake?',
      options: ['Vilnius Castle', 'Kaunas Castle', 'Trakai Castle', 'Klaipeda Castle'],
      correctAnswer: 2,
    },
    {
      id: 'lithuania-q10',
      question: 'What UNESCO site features massive moving sand dunes?',
      options: ['Baltic Coast', 'Curonian Spit', 'Nida Beach', 'Palanga Shore'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 53, y: 55 },
};