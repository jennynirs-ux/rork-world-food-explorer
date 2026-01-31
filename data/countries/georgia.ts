import { Country } from '@/types';

export const georgia: Country = {
  id: 'georgia',
  name: 'Georgia',
  code: 'GE',
  continent: 'Europe',
  flag: '🇬🇪',
  landscapeImage: 'https://images.unsplash.com/photo-1607968565043-36af90dde238?w=800&q=80',
  description: 'Georgia is a country at the crossroads of Europe and Asia, known for its ancient wine culture, stunning mountains, and warm hospitality.',
  quickFacts: [
    { label: 'Capital', value: 'Tbilisi' },
    { label: 'Population', value: '3.7 million' },
    { label: 'Official Language', value: 'Georgian' },
    { label: 'Currency', value: 'Georgian Lari' },
    { label: 'Area', value: '69,700 km²' },
  ],
  facts: [
    'Georgia is the birthplace of wine with 8,000 years of winemaking',
    'Has its own unique alphabet',
    'The Caucasus Mountains offer world-class skiing',
    'Georgian polyphonic singing is UNESCO-recognized',
  ],
  foodCulture: 'Georgian cuisine is diverse and flavorful with unique dishes like khachapuri and khinkali. Wine accompanies most meals.',
  history: [
    {
      year: '4th century',
      title: 'Christianity Adopted',
      description: 'Georgia became one of the first nations to adopt Christianity as the state religion.'
    },
    {
      year: '1991',
      title: 'Independence',
      description: 'Georgia regained independence following the collapse of the Soviet Union.'
    },
  ],
  innovations: [
    {
      name: 'Qvevri Wine-Making',
      year: '6000 BC',
      description: 'Ancient method of fermenting wine in clay vessels buried underground, recognized by UNESCO as cultural heritage.'
    },
    {
      name: 'Georgian Alphabet',
      year: '5th century',
      description: 'Unique writing system, one of only 14 alphabets in use today, designed to preserve Georgian language and culture.'
    },
    {
      name: 'Polyphonic Singing',
      year: 'Ancient',
      description: 'Traditional multi-part harmony singing technique recognized by UNESCO as intangible cultural heritage.'
    },
    {
      name: 'Supra Tradition',
      year: 'Traditional',
      description: 'Elaborate feast ritual with toastmaster (tamada) that influenced communal dining traditions across the Caucasus.'
    },
  ],
  mustVisit: [
    { name: 'Old Tbilisi', description: 'Historic district with sulfur baths, narrow streets, and charming architecture.' },
    { name: 'Kazbegi', description: 'Mountain region with the iconic Gergeti Trinity Church at 2,170m elevation.' },
    { name: 'Kakheti Wine Region', description: 'Birthplace of wine with vineyards, monasteries, and traditional wineries.' },
    { name: 'Vardzia', description: 'Cave monastery complex carved into cliff face in the 12th century.' },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Visa-free for many nationalities; e-visa available.' },
    { item: 'Best time', description: 'May-October for hiking; December-March for skiing.' },
    { item: 'Language', description: 'Georgian; Russian widely spoken; English in tourist areas.' },
  ],
  mainDish: {
    id: 'georgia-main',
    name: 'Khachapuri',
    description: 'Cheese-filled bread boat topped with egg and butter',
    cookingTime: 60,
    servings: 4,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Bread dough', amount: 500, unit: 'g' },
      { name: 'Sulguni cheese', amount: 400, unit: 'g' },
      { name: 'Feta cheese', amount: 200, unit: 'g' },
      { name: 'Eggs', amount: 4, unit: 'whole' },
      { name: 'Butter', amount: 100, unit: 'g' },
      { name: 'Milk', amount: 100, unit: 'ml' },
    ],
    steps: [
      'Mix cheeses together',
      'Roll dough into boat shape',
      'Fill with cheese mixture',
      'Bake at 450°F for 15 minutes',
      'Crack egg on top and bake 5 more minutes',
      'Top with butter and serve hot',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600',
  },
  dessert: {
    id: 'georgia-dessert',
    name: 'Churchkhela',
    description: 'Traditional Georgian candy: walnuts threaded on string and dipped in grape must',
    cookingTime: 180,
    servings: 10,
    dietType: 'vegan',
    ingredients: [
      { name: 'Walnuts', amount: 300, unit: 'g' },
      { name: 'Grape juice (or pomegranate juice)', amount: 2000, unit: 'ml' },
      { name: 'Flour', amount: 200, unit: 'g' },
      { name: 'Sugar', amount: 150, unit: 'g' },
    ],
    steps: [
      'Thread walnuts onto strings, leaving space at top.',
      'Heat grape juice with sugar until dissolved.',
      'Gradually whisk in flour to avoid lumps.',
      'Simmer, stirring constantly, until thickened (15-20 minutes).',
      'Cool mixture to warm temperature.',
      'Dip walnut strings into mixture, coating evenly.',
      'Hang to dry for 1 hour.',
      'Repeat dipping 2-3 more times for thick coating.',
      'Hang in cool, dry place for 2-3 days to fully dry.',
      'Store in airtight container up to 3 months.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1587241321921-91ffe2909df2?w=600',
  },
  drinks: {
    alcoholic: 'Georgian wine (Saperavi, Rkatsiteli), Chacha (grape vodka)',
    nonAlcoholic: 'Borjomi mineral water, Tarragon lemonade',
  },
  music: [
    'Georgian polyphonic singing',
    'Traditional folk dances',
    'Contemporary Georgian pop',
  ],
  decorationIdeas: [
    'White and red flag colors',
    'Wine and grape themes',
    'Caucasus mountain imagery',
    'Traditional Georgian patterns',
  ],
  conversationStarters: [
    'Have you tried Georgian wine?',
    'What do you know about ancient winemaking?',
    'Do you enjoy mountain destinations?',
  ],
  quiz: [
    {
      id: 'georgia-q1',
      question: 'What is the capital of Georgia?',
      options: ['Yerevan', 'Baku', 'Tbilisi', 'Batumi'],
      correctAnswer: 2,
    },
    {
      id: 'georgia-q2',
      question: 'How many years of winemaking history does Georgia have?',
      options: ['2,000 years', '4,000 years', '6,000 years', '8,000 years'],
      correctAnswer: 3,
    },
    {
      id: 'georgia-q3',
      question: 'What is Khachapuri?',
      options: ['A wine', 'Cheese-filled bread', 'A dance', 'A mountain'],
      correctAnswer: 1,
    },
    {
      id: 'georgia-q4',
      question: 'What is unique about the Georgian alphabet?',
      options: ['It uses Roman letters', 'It has no vowels', 'It\'s one of only 14 alphabets in use', 'It was invented last year'],
      correctAnswer: 2,
    },
    {
      id: 'georgia-q5',
      question: 'When did Georgia regain independence?',
      options: ['1985', '1989', '1991', '1995'],
      correctAnswer: 2,
    },
    {
      id: 'georgia-q6',
      question: 'What is Qvevri?',
      options: ['A type of cheese', 'Clay wine vessel', 'A musical instrument', 'A traditional hat'],
      correctAnswer: 1,
    },
    {
      id: 'georgia-q7',
      question: 'What is Churchkhela?',
      options: ['A soup', 'Walnuts in grape must candy', 'A type of bread', 'Grilled meat'],
      correctAnswer: 1,
    },
    {
      id: 'georgia-q8',
      question: 'Which mountain range runs through Georgia?',
      options: ['Alps', 'Pyrenees', 'Caucasus', 'Carpathians'],
      correctAnswer: 2,
    },
    {
      id: 'georgia-q9',
      question: 'What Georgian tradition is UNESCO-recognized?',
      options: ['Wine making', 'Polyphonic singing', 'Both wine making and singing', 'Neither'],
      correctAnswer: 2,
    },
    {
      id: 'georgia-q10',
      question: 'What is the Kakheti region famous for?',
      options: ['Skiing', 'Wine production', 'Beach resorts', 'Desert landscapes'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 58, y: 43 },
};
