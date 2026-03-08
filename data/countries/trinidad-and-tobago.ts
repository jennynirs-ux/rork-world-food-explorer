import { Country } from '@/types';

export const trinidadAndTobago: Country = {
  id: 'trinidad-and-tobago',
  name: 'Trinidad and Tobago',
  code: 'TT',
  continent: 'North America',
  flag: '🇹🇹',
  landscapeImage: 'https://images.unsplash.com/photo-1580541631950-7282082b04f4?w=800&q=80',
  description:
    'Trinidad and Tobago is a twin-island Caribbean nation known for Carnival, steel pan music, diverse culture, and rich natural beauty.',

  quickFacts: [
    { label: 'Capital', value: 'Port of Spain' },
    { label: 'Population', value: '1.4 million' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'Trinidad and Tobago Dollar (TTD)' },
    { label: 'Area', value: '5,131 km²' },
  ],

  facts: [
    'Birthplace of steel pan music',
    'Hosts one of the world’s largest and most famous Carnivals',
    'Home to Pitch Lake, one of the world’s largest natural asphalt lakes',
    'Extremely diverse population with African, Indian, European, and Chinese roots',
    'Trinidad is more industrial and urban; Tobago is more relaxed and nature-focused',
    'Angostura bitters originated in Trinidad',
    'The country is a major producer of oil and natural gas in the Caribbean',
  ],

  foodCulture:
    'Trinidadian cuisine blends Indian, African, Chinese, and Caribbean influences. Street food is central, bold spices are common, and meals often include chutneys, curries, roti, and pepper sauces.',

  history: [
    {
      year: '1498',
      title: 'European Contact',
      description:
        'Christopher Columbus encountered Trinidad during his third voyage, initiating centuries of European influence.',
    },
    {
      year: '1797',
      title: 'British Control',
      description:
        'Trinidad came under British control, shaping administration, language, and institutions.',
    },
    {
      year: '1962',
      title: 'Independence',
      description:
        'Trinidad and Tobago gained independence, beginning a new era as a sovereign nation.',
    },
    {
      year: '1976',
      title: 'Republic',
      description:
        'The country became a republic within the Commonwealth, with a President as head of state.',
    },
  ],

  innovations: [
    {
      name: 'Steelpan (Steel Drum)',
      year: '1930s–1940s',
      description:
        'The steelpan is the only widely recognized acoustic instrument invented in the 20th century, born from Trinidad’s Carnival culture.',
    },
    {
      name: 'Angostura Bitters',
      year: '19th Century',
      description:
        'A globally famous aromatic bitters brand closely associated with Trinidad and used in cocktails worldwide.',
    },
  ],

  mustVisit: [
    {
      name: 'Port of Spain',
      description:
        'The lively capital, famous for Carnival culture, food, and nightlife.',
    },
    {
      name: 'Pitch Lake (La Brea)',
      description:
        'A remarkable natural asphalt lake and one of the country’s most iconic attractions.',
    },
    {
      name: 'Maracas Beach',
      description:
        'A popular Trinidad beach known for “bake and shark” and laid-back coastal vibes.',
    },
    {
      name: 'Asa Wright Nature Centre',
      description:
        'A rainforest sanctuary famous for birdwatching and biodiversity.',
    },
    {
      name: 'Tobago’s Buccoo Reef & Nylon Pool',
      description:
        'Clear turquoise waters, reef snorkeling, and a shallow natural pool experience.',
    },
  ],

  travelEssentials: [
    {
      item: 'Best time to visit',
      description:
        'Dry season (roughly December–May) for beach weather; Carnival season for peak festival energy.',
    },
    {
      item: 'Getting around',
      description:
        'Taxis and ride options are common in cities; domestic flights/ferries connect Trinidad and Tobago.',
    },
    {
      item: 'Money',
      description:
        'Trinidad and Tobago Dollar (TTD); cards work in many places, but cash helps for street food and smaller shops.',
    },
    {
      item: 'What to pack',
      description:
        'Light clothing, reef-safe sunscreen, insect repellent, and a rain layer for quick tropical showers.',
    },
    {
      item: 'Safety',
      description:
        'Stick to well-traveled areas at night, use registered taxis, and keep valuables discreet in busy zones.',
    },
  ],

  mainDish: {
    id: 'trinidad-main',
    name: 'Doubles',
    description:
      'Iconic Trinidadian street food: fried flatbread filled with curried chickpeas and chutneys',
    cookingTime: 60,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'All-purpose flour', amount: 400, unit: 'g' },
      { name: 'Dry chickpeas', amount: 400, unit: 'g' },
      { name: 'Curry powder', amount: 2, unit: 'tbsp' },
      { name: 'Turmeric', amount: 1, unit: 'tsp' },
      { name: 'Garlic', amount: 4, unit: 'cloves' },
      { name: 'Baking powder', amount: 2, unit: 'tsp' },
      { name: 'Salt', amount: 1, unit: 'tsp' },
      { name: 'Vegetable oil (for frying)', amount: 500, unit: 'ml' },
    ],
    steps: [
      'Soak chickpeas overnight, then boil until tender',
      'Cook chickpeas with curry powder, garlic, turmeric, salt, and water until thick',
      'Mix flour, baking powder, turmeric, salt, and water into a soft dough',
      'Rest dough for 30 minutes',
      'Divide dough into small balls and flatten',
      'Deep-fry until puffed and lightly golden',
      'Place curried chickpeas between two fried breads',
      'Top with tamarind chutney and pepper sauce',
      'Serve immediately while hot',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&q=80',
  },

  dessert: {
    id: 'trinidad-dessert',
    name: 'Coconut Sweet Bread',
    description:
      'A lightly spiced Caribbean-style sweet bread with coconut, often enjoyed as a snack or dessert.',
    cookingTime: 75,
    servings: 10,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'All-purpose flour', amount: 400, unit: 'g' },
      { name: 'Baking powder', amount: 2, unit: 'tsp' },
      { name: 'Brown sugar', amount: 150, unit: 'g' },
      { name: 'Butter (soft)', amount: 120, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'large' },
      { name: 'Grated coconut (or desiccated)', amount: 200, unit: 'g' },
      { name: 'Milk', amount: 180, unit: 'ml' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'Ground cinnamon', amount: 1, unit: 'tsp' },
      { name: 'Ground nutmeg', amount: 0.5, unit: 'tsp' },
      { name: 'Salt', amount: 0.5, unit: 'tsp' },
    ],
    steps: [
      'Preheat oven to 175°C and grease a loaf pan',
      'Mix flour, baking powder, salt, cinnamon, and nutmeg',
      'Cream butter and brown sugar until fluffy',
      'Beat in eggs and vanilla',
      'Fold in dry ingredients alternating with milk',
      'Stir in grated coconut',
      'Pour into pan and smooth the top',
      'Bake 45–55 minutes until a skewer comes out clean',
      'Cool 15 minutes in pan, then transfer to a rack',
      'Slice and serve slightly warm or at room temperature',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1586444248902-2367d0e7dbb7?w=900',
  },

  drinks: {
    alcoholic: 'Carib beer, Rum punch, Angostura bitters (cocktails)',
    nonAlcoholic: 'Mauby, Sorrel drink, Coconut water',
  },

  music: ['Calypso', 'Soca', 'Steel pan', 'Chutney music'],

  decorationIdeas: [
    'Red, white, and black flag colors',
    'Carnival feathers and masks',
    'Steel pan drums',
    'Tropical + festival themes',
  ],

  conversationStarters: [
    'Have you ever experienced Carnival?',
    'Do you enjoy Caribbean street food?',
    'What kind of music gets you dancing instantly?',
  ],

  quiz: [
    {
      id: 'trinidad-q1',
      question: 'What is the capital of Trinidad and Tobago?',
      options: ['Scarborough', 'Port of Spain', 'San Fernando', 'Kingstown'],
      correctAnswer: 1,
    },
    {
      id: 'trinidad-q2',
      question: 'Which musical instrument originated in Trinidad?',
      options: ['Steel pan', 'Bongo', 'Marimba', 'Saxophone'],
      correctAnswer: 0,
    },
    {
      id: 'trinidad-q3',
      question: 'What famous festival is Trinidad known for?',
      options: ['Rio Carnival', 'Notting Hill Carnival', 'Trinidad Carnival', 'Mardi Gras'],
      correctAnswer: 2,
    },
    {
      id: 'trinidad-q4',
      question: 'What is Pitch Lake?',
      options: ['A salt lake', 'A volcanic crater', 'A natural asphalt lake', 'A coral lagoon'],
      correctAnswer: 2,
    },
    {
      id: 'trinidad-q5',
      question: 'Which two islands form the country?',
      options: ['Trinidad and Jamaica', 'Trinidad and Barbados', 'Trinidad and Tobago', 'Tobago and Grenada'],
      correctAnswer: 2,
    },
    {
      id: 'trinidad-q6',
      question: 'What is doubles?',
      options: ['A dessert', 'A seafood dish', 'A street food with chickpeas', 'A drink'],
      correctAnswer: 2,
    },
    {
      id: 'trinidad-q7',
      question: 'What language is officially spoken?',
      options: ['Spanish', 'French', 'English', 'Dutch'],
      correctAnswer: 2,
    },
    {
      id: 'trinidad-q8',
      question: 'Which music style evolved from calypso?',
      options: ['Reggae', 'Soca', 'Salsa', 'Merengue'],
      correctAnswer: 1,
    },
    {
      id: 'trinidad-q9',
      question: 'Which island is known for a slower, more relaxed pace?',
      options: ['Trinidad', 'Tobago', 'Both equally', 'Neither'],
      correctAnswer: 1,
    },
    {
      id: 'trinidad-q10',
      question: 'What is a key feature of Trinidadian culture?',
      options: ['Minimalism', 'Strict formality', 'Celebration and music', 'Isolation'],
      correctAnswer: 2,
    },
  ],

  coordinates: { x: 26, y: 22 },
};
