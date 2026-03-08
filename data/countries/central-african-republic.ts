import { Country } from '@/types';

export const centralAfricanRepublic: Country = {
  id: 'central-african-republic',
  name: 'Central African Republic',
  code: 'CF',
  continent: 'Africa',
  flag: '🇨🇫',
  landscapeImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80',
  description: 'The Central African Republic is a landlocked country known for its diverse wildlife, tropical forests, and rich mineral resources.',
  quickFacts: [
    { label: 'Capital', value: 'Bangui' },
    { label: 'Population', value: '5 million' },
    { label: 'Official Languages', value: 'French, Sango' },
    { label: 'Currency', value: 'Central African CFA Franc' },
    { label: 'Area', value: '622,984 km²' },
  ],
  facts: [
    'Home to the rare forest elephant',
    'Rich in diamonds, gold, and uranium',
    'The country has vast rainforests',
    'Sango is a unique lingua franca developed for trade',
    'The Dzanga-Sangha rainforest is home to lowland gorillas',
    'The country has incredible biodiversity despite challenges',
    'CAR is one of the most forested countries in Africa',
    'The Manovo-Gounda St. Floris National Park is a UNESCO World Heritage Site',
  ],
  foodCulture: 'Central African cuisine features cassava, plantains, peanuts, and bushmeat. French influence is evident in urban areas. Meals are communal and eaten with hands. Palm oil and peanut sauces are staples.',
  history: [
    {
      year: '13th century',
      title: 'Early Kingdoms',
      description: 'Various Bantu kingdoms dominated the region, engaging in trans-Saharan trade routes.'
    },
    {
      year: '1889',
      title: 'French Colonization',
      description: 'France established control over Ubangi-Shari (modern CAR) as part of French Equatorial Africa.'
    },
    {
      year: '1960',
      title: 'Independence',
      description: 'The Central African Republic gained independence from France with David Dacko as first president.'
    },
    {
      year: '1966-1979',
      title: 'Bokassa Era',
      description: 'Jean-Bédel Bokassa ruled, declaring himself emperor in 1976, leading to economic decline and political turmoil.'
    },
  ],
  innovations: [
    {
      name: 'Forest Conservation Methods',
      year: '1990s',
      description: 'Developed community-based rainforest protection programs that became models for sustainable forestry in Central Africa.'
    },
    {
      name: 'Sango Language Development',
      year: '20th century',
      description: 'Evolved Sango into a national lingua franca that unites over 80 ethnic groups, one of Africa\'s most successful indigenous language projects.'
    },
    {
      name: 'Traditional Butterfly Farming',
      year: '2000s',
      description: 'Pioneered sustainable butterfly farming for international collectors, providing income while protecting rainforest habitats.'
    },
    {
      name: 'Pygmy Music Preservation',
      year: 'Ancient-Modern',
      description: 'Maintained unique polyphonic music traditions of Pygmy peoples, recognized by UNESCO as Intangible Cultural Heritage.'
    },
  ],
  mustVisit: [
    { name: 'Dzanga-Sangha Special Reserve', description: 'Pristine rainforest home to forest elephants, lowland gorillas, and incredible biodiversity including rare butterflies.' },
    { name: 'Bangui', description: 'Capital city with the Boganda Museum showcasing national history and the lively PK5 market district.' },
    { name: 'Manovo-Gounda St. Floris National Park', description: 'UNESCO World Heritage Site with diverse wildlife including elephants, black rhinos, and various antelope species.' },
    { name: 'Boali Falls', description: 'Spectacular 50-meter waterfall near Bangui, popular picnic spot with surrounding natural beauty.' },
    { name: 'Lobaye Forest', description: 'Dense tropical rainforest with opportunities to encounter Pygmy communities and learn traditional forest practices.' }
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Required for most visitors. Obtain in advance as on-arrival visas are limited.' },
    { item: 'Best time to visit', description: 'November to April for dry season. June-September can be very wet.' },
    { item: 'Transportation', description: 'Limited infrastructure. Organized tours essential. 4x4 vehicles needed outside cities.' },
    { item: 'Language', description: 'French and Sango are official. Sango is widely spoken. English very rare.' },
    { item: 'Safety', description: 'Check current travel advisories. Political instability affects some regions. Travel with experienced guides only.' },
  ],
  mainDish: {
    id: 'central-african-main',
    name: 'Fufu with Peanut Sauce',
    description: 'Starchy dough served with rich peanut-based sauce',
    cookingTime: 60,
    servings: 4,
    dietType: 'vegan',
    ingredients: [
      { name: 'Cassava flour', amount: 400, unit: 'g' },
      { name: 'Peanut butter', amount: 200, unit: 'g' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Spinach', amount: 300, unit: 'g' },
      { name: 'Palm oil', amount: 3, unit: 'tbsp' },
    ],
    steps: [
      'Boil water and gradually add cassava flour',
      'Stir vigorously to form smooth dough',
      'Sauté onions and tomatoes',
      'Add peanut butter and water to make sauce',
      'Add spinach and simmer',
      'Serve fufu with peanut sauce',
    ],
    imageUrl: 'https://images.pexels.com/photos/32909266/pexels-photo-32909266.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  dessert: {
    id: 'central-african-dessert',
    name: 'Makara',
    description: 'Sweet fried dough balls, popular street food dessert',
    cookingTime: 40,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'All-purpose flour', amount: 400, unit: 'g' },
      { name: 'Sugar', amount: 150, unit: 'g' },
      { name: 'Yeast', amount: 2, unit: 'tsp' },
      { name: 'Warm water', amount: 250, unit: 'ml' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'Salt', amount: 0.5, unit: 'tsp' },
      { name: 'Oil for frying', amount: 500, unit: 'ml' },
      { name: 'Powdered sugar for dusting', amount: 50, unit: 'g' },
    ],
    steps: [
      'Mix warm water, sugar, and yeast. Let sit 10 minutes until foamy',
      'Add flour, salt, and vanilla. Mix into smooth dough',
      'Cover and let rise for 1 hour until doubled',
      'Heat oil to 180°C in deep pot',
      'Scoop small portions of dough with spoon',
      'Carefully drop into hot oil',
      'Fry until golden brown on all sides (3-4 minutes)',
      'Drain on paper towels',
      'Dust with powdered sugar while warm',
      'Serve immediately as a sweet treat',
    ],
    imageUrl: 'https://images.pexels.com/photos/34268537/pexels-photo-34268537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  drinks: {
    alcoholic: 'Palm wine, Local beer',
    nonAlcoholic: 'Ginger juice, Hibiscus tea',
  },
  music: [
    'Traditional Pygmy music',
    'Sango folk songs',
    'Central African rhythms',
  ],
  decorationIdeas: [
    'Blue, white, green, yellow and red flag colors',
    'Tropical forest imagery',
    'Traditional crafts',
  ],
  conversationStarters: [
    'What do you know about Central African wildlife?',
    'Have you tried West African cuisine?',
  ],
  quiz: [
    {
      id: 'central-african-q1',
      question: 'What is the capital of Central African Republic?',
      options: ['Bangui', 'Libreville', 'Brazzaville', 'Kinshasa'],
      correctAnswer: 0,
    },
    {
      id: 'central-african-q2',
      question: 'What are the official languages of Central African Republic?',
      options: ['English and French', 'French and Sango', 'Portuguese and Sango', 'English and Sango'],
      correctAnswer: 1,
    },
    {
      id: 'central-african-q3',
      question: 'What is Sango in Central African Republic?',
      options: ['A traditional dance', 'A lingua franca language', 'A type of food', 'A musical instrument'],
      correctAnswer: 1,
    },
    {
      id: 'central-african-q4',
      question: 'What natural resource is CAR particularly rich in?',
      options: ['Oil', 'Diamonds', 'Coal', 'Copper'],
      correctAnswer: 1,
    },
    {
      id: 'central-african-q5',
      question: 'When did Central African Republic gain independence?',
      options: ['1950', '1955', '1960', '1965'],
      correctAnswer: 2,
    },
    {
      id: 'central-african-q6',
      question: 'What type of elephant is found in CAR?',
      options: ['Savanna elephant', 'Forest elephant', 'Asian elephant', 'Pygmy elephant'],
      correctAnswer: 1,
    },
    {
      id: 'central-african-q7',
      question: 'Who declared himself emperor of CAR in 1976?',
      options: ['David Dacko', 'Jean-Bédel Bokassa', 'Ange-Félix Patassé', 'François Bozizé'],
      correctAnswer: 1,
    },
    {
      id: 'central-african-q8',
      question: 'What is the Dzanga-Sangha known for?',
      options: ['Desert landscapes', 'Beach resorts', 'Rainforest and gorillas', 'Mountain peaks'],
      correctAnswer: 2,
    },
    {
      id: 'central-african-q9',
      question: 'What type of terrain covers much of CAR?',
      options: ['Desert', 'Rainforest', 'Tundra', 'Grassland only'],
      correctAnswer: 1,
    },
    {
      id: 'central-african-q10',
      question: 'What is the height of Boali Falls?',
      options: ['25 meters', '50 meters', '75 meters', '100 meters'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 52, y: 18 },
};
