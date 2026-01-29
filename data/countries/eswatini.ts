import { Country } from '@/types';

export const eswatini: Country = {
  id: 'eswatini',
  name: 'Eswatini',
  code: 'SZ',
  continent: 'Africa',
  flag: '🇸🇿',
  landscapeImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
  description: 'Eswatini (formerly Swaziland) is a small, landlocked kingdom in Southern Africa known for its wildlife reserves, cultural festivals, and traditional ceremonies.',
  quickFacts: [
    { label: 'Capital', value: 'Mbabane (administrative), Lobamba (royal)' },
    { label: 'Population', value: '1.2 million' },
    { label: 'Official Languages', value: 'Swazi, English' },
    { label: 'Currency', value: 'Swazi Lilangeni' },
    { label: 'Area', value: '17,364 km²' },
  ],
  facts: [
    'One of the world\'s last absolute monarchies',
    'Home to the Umhlanga (Reed Dance) ceremony',
    'Changed name from Swaziland to Eswatini in 2018',
    'Has excellent wildlife reserves and conservation areas',
  ],
  foodCulture: 'Swazi cuisine features maize porridge, grilled meats, and indigenous vegetables with Southern African influences.',
  history: [
    {
      year: '1815',
      title: 'Kingdom Founded',
      description: 'King Sobhuza I established the Swazi kingdom, uniting various clans.'
    },
    {
      year: '1894',
      title: 'British Protectorate',
      description: 'Swaziland became a British protectorate after Boer control.'
    },
    {
      year: '1968',
      title: 'Independence',
      description: 'Swaziland gained independence from Britain, maintaining its monarchy.'
    },
    {
      year: '2018',
      title: 'Name Change',
      description: 'King Mswati III renamed the country from Swaziland to eSwatini.'
    },
  ],
  mustVisit: [
    { name: 'Hlane Royal National Park', description: 'Wildlife reserve with lions, elephants, and rhinos.' },
    { name: 'Mlilwane Wildlife Sanctuary', description: 'Beautiful nature reserve with hiking trails and traditional villages.' },
    { name: 'Sibebe Rock', description: 'World\'s second-largest granite dome with hiking routes.' },
    { name: 'Mantenga Cultural Village', description: 'Living museum showcasing traditional Swazi life.' },
    { name: 'Malolotja Nature Reserve', description: 'Mountainous reserve with waterfalls and diverse flora.' }
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Many nationalities can enter visa-free for short stays.' },
    { item: 'Best time to visit', description: 'May-September for cooler, dry weather and wildlife viewing.' },
    { item: 'Malaria precautions', description: 'Required in lowveld areas, especially summer.' },
    { item: 'Currency', description: 'South African Rand also widely accepted alongside Lilangeni.' },
  ],
  mainDish: {
    id: 'eswatini-main',
    name: 'Sishwala and Sidvudvu',
    description: 'Maize porridge with pumpkin and peanut stew',
    cookingTime: 60,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Maize meal', amount: 500, unit: 'g' },
      { name: 'Pumpkin', amount: 500, unit: 'g' },
      { name: 'Peanut butter', amount: 200, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Spinach', amount: 300, unit: 'g' },
    ],
    steps: [
      'Cook maize meal with water to make thick porridge',
      'Boil pumpkin until soft',
      'Sauté onions and tomatoes',
      'Add peanut butter and spinach',
      'Simmer pumpkin stew until thick',
      'Serve porridge with stew',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600',
  },
  dessert: {
    id: 'eswatini-dessert',
    name: 'Siphuphe Semmbila',
    description: 'Sweet maize cake with peanuts',
    cookingTime: 45,
    servings: 10,
    dietType: 'vegan',
    ingredients: [
      { name: 'Maize meal', amount: 300, unit: 'g' },
      { name: 'Peanuts ground', amount: 150, unit: 'g' },
      { name: 'Sugar', amount: 200, unit: 'g' },
      { name: 'Water', amount: 400, unit: 'ml' },
      { name: 'Baking powder', amount: 2, unit: 'tsp' },
    ],
    steps: [
      'Mix maize meal with ground peanuts',
      'Add sugar and baking powder',
      'Gradually add water to form thick batter',
      'Pour into greased pan',
      'Bake at 180°C for 35 minutes',
      'Cool and cut into squares',
      'Serve with tea or coffee',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600',
  },
  drinks: {
    alcoholic: 'Umcombotsi (traditional beer), Buganu (marula fruit beer)',
    nonAlcoholic: 'Mahewu (fermented porridge drink), Rooibos tea',
  },
  music: [
    'Traditional Swazi songs',
    'Sibhaca dance music',
    'Marabi jazz',
  ],
  decorationIdeas: [
    'Blue, yellow and red flag colors',
    'Traditional shields and spears',
    'Beadwork patterns',
    'Wildlife imagery',
  ],
  conversationStarters: [
    'What do you know about African monarchies?',
    'Have you experienced traditional African ceremonies?',
    'Have you heard of the Reed Dance ceremony?',
  ],
  innovations: [
    {
      name: 'Reed Dance Tradition',
      year: 'Ancient',
      description: 'Umhlanga ceremony celebrating womanhood and unity, attended by thousands',
    },
    {
      name: 'Wildlife Conservation',
      year: '1960s',
      description: 'Early establishment of nature reserves protecting endangered species',
    },
    {
      name: 'Swazi Candles',
      year: '1981',
      description: 'World-renowned hand-decorated candle craft industry',
    },
  ],
  quiz: [
    {
      id: 'eswatini-q1',
      question: 'What was Eswatini formerly called?',
      options: ['Swaziland', 'Basutoland', 'Bechuanaland', 'Rhodesia'],
      correctAnswer: 0,
    },
    {
      id: 'eswatini-q2',
      question: 'When did the country change its name?',
      options: ['2010', '2015', '2018', '2020'],
      correctAnswer: 2,
    },
    {
      id: 'eswatini-q3',
      question: 'What type of government does Eswatini have?',
      options: ['Republic', 'Absolute monarchy', 'Democracy', 'Communist'],
      correctAnswer: 1,
    },
    {
      id: 'eswatini-q4',
      question: 'What is the Umhlanga ceremony?',
      options: ['Harvest festival', 'Reed Dance', 'Wedding ritual', 'Rain dance'],
      correctAnswer: 1,
    },
    {
      id: 'eswatini-q5',
      question: 'What is the capital of Eswatini?',
      options: ['Mbabane', 'Pretoria', 'Gaborone', 'Maputo'],
      correctAnswer: 0,
    },
    {
      id: 'eswatini-q6',
      question: 'What currency is also accepted besides Lilangeni?',
      options: ['US Dollar', 'Euro', 'South African Rand', 'British Pound'],
      correctAnswer: 2,
    },
    {
      id: 'eswatini-q7',
      question: 'When did Eswatini gain independence?',
      options: ['1960', '1968', '1975', '1980'],
      correctAnswer: 1,
    },
    {
      id: 'eswatini-q8',
      question: 'What is Sibebe Rock?',
      options: ['A mountain', 'Granite dome', 'Waterfall', 'Cave system'],
      correctAnswer: 1,
    },
    {
      id: 'eswatini-q9',
      question: 'What is the main ingredient in Sishwala?',
      options: ['Rice', 'Wheat', 'Maize', 'Barley'],
      correctAnswer: 2,
    },
    {
      id: 'eswatini-q10',
      question: 'Which animals can be found in Hlane Park?',
      options: ['Penguins', 'Lions and elephants', 'Polar bears', 'Kangaroos'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 55, y: 10 },
};
