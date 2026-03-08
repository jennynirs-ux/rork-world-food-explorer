import { Country } from '@/types';

export const ghana: Country = {
  id: 'ghana',
  name: 'Ghana',
  code: 'GH',
  continent: 'Africa',
  flag: '🇬🇭',
  landscapeImage: 'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=800&q=80',
  description: 'Ghana, known as the "Gateway to Africa," was the first sub-Saharan African nation to gain independence. Rich in history, culture, and natural beauty, Ghana is famous for its gold, cocoa, and warm hospitality.',
  quickFacts: [
    { label: 'Capital', value: 'Accra' },
    { label: 'Population', value: '32 million' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'Ghanaian Cedi (GHS)' },
    { label: 'Area', value: '238,533 km²' },
  ],
  facts: [
    'Ghana was the first sub-Saharan African country to gain independence',
    'The country is the world\'s second-largest cocoa producer',
    'Lake Volta is one of the largest man-made lakes in the world',
    'Ghana has numerous slave trade historical sites recognized by UNESCO',
    'The name "Ghana" means "Warrior King" in the Soninke language',
    'Ghana is known as one of Africa\'s most stable democracies',
  ],
  foodCulture: 'Ghanaian cuisine features flavorful stews, soups, and starches. Fufu and banku (fermented corn dough) are staples often eaten with rich, spicy sauces. Palm oil, tomatoes, and hot peppers are essential ingredients.',
  history: [
    {
      year: '1400s-1600s',
      title: 'Gold Trade',
      description: 'The region became known as the "Gold Coast" due to abundant gold resources attracting European traders.'
    },
    {
      year: '1957',
      title: 'Independence',
      description: 'Ghana gained independence from Britain, led by Kwame Nkrumah, inspiring other African nations.'
    },
    {
      year: '1992',
      title: 'Democratic Constitution',
      description: 'Ghana adopted a new constitution, establishing a stable multi-party democracy.'
    },
  ],
  innovations: [
    {
      name: 'Kente Cloth',
      year: 'Traditional',
      description: 'Internationally recognized handwoven cloth with intricate patterns, each with symbolic meaning.'
    },
    {
      name: 'Ashanti Gold Weights',
      year: 'Historical',
      description: 'Intricate brass weights used for measuring gold, now prized as art pieces.'
    },
  ],
  mustVisit: [
    { name: 'Cape Coast Castle', description: 'Historic fortress and UNESCO site, former slave trade post.' },
    { name: 'Kakum National Park', description: 'Rainforest with canopy walkway suspended 40 meters above ground.' },
    { name: 'Mole National Park', description: 'Ghana\'s largest wildlife reserve with elephants and diverse species.' },
    { name: 'Elmina Castle', description: 'Oldest European building in sub-Saharan Africa, UNESCO Heritage site.' },
    { name: 'Lake Volta', description: 'Massive reservoir perfect for boat trips and fishing.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'November-March for dry season and comfortable weather.' },
    { item: 'Yellow fever vaccination', description: 'Required for entry into Ghana.' },
    { item: 'Visa', description: 'E-visa available for most nationalities.' },
    { item: 'Insect repellent', description: 'Malaria prevention important in certain areas.' },
  ],
  mainDish: {
    id: 'ghana-main',
    name: 'Waakye',
    description: 'Rice and beans cooked with sorghum leaves, served with various sides',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Rice', amount: 400, unit: 'g' },
      { name: 'Black-eyed peas', amount: 200, unit: 'g' },
      { name: 'Sorghum leaves', amount: 50, unit: 'g' },
      { name: 'Baking soda', amount: 1, unit: 'tsp' },
      { name: 'Salt', amount: 1, unit: 'tsp' },
      { name: 'Water', amount: 1500, unit: 'ml' },
    ],
    steps: [
      'Soak black-eyed peas overnight',
      'Boil peas with sorghum leaves and baking soda for 30 minutes',
      'Add rice, reduce heat, and cook until tender',
      'Remove leaves before serving',
      'Serve with fried fish, boiled eggs, gari, and shito (hot pepper sauce)',
      'Add stew or gravy on top',
    ],
    imageUrl: 'https://images.pexels.com/photos/8896094/pexels-photo-8896094.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  dessert: {
    id: 'ghana-dessert',
    name: 'Bofrot',
    description: 'Sweet fried dough similar to donuts, popular breakfast or snack',
    cookingTime: 50,
    servings: 15,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Flour', amount: 500, unit: 'g' },
      { name: 'Sugar', amount: 100, unit: 'g' },
      { name: 'Yeast', amount: 7, unit: 'g' },
      { name: 'Warm milk', amount: 250, unit: 'ml' },
      { name: 'Butter', amount: 50, unit: 'g' },
      { name: 'Nutmeg', amount: 1, unit: 'tsp' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'Oil for frying', amount: 500, unit: 'ml' },
    ],
    steps: [
      'Mix flour, sugar, yeast, and nutmeg',
      'Add warm milk, melted butter, and vanilla',
      'Knead into soft dough, let rise for 1 hour',
      'Roll out dough and cut into small rounds',
      'Let rise again for 30 minutes',
      'Deep fry until golden brown',
      'Serve warm with hot chocolate or tea',
    ],
    imageUrl: 'https://images.pexels.com/photos/13774721/pexels-photo-13774721.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  drinks: {
    alcoholic: 'Akpeteshie (local gin), Club beer, Palm wine, Guinness',
    nonAlcoholic: 'Sobolo (hibiscus drink), Asana (fermented corn drink), Fresh coconut water, Malt drinks',
  },
  music: [
    'Highlife music - traditional Ghanaian genre',
    'Azonto - modern dance music',
    'Gospel music - very popular',
    'Traditional drumming and dance',
  ],
  decorationIdeas: [
    'Kente cloth patterns',
    'Ghanaian flag colors (red, yellow, green, black star)',
    'Adinkra symbols (traditional motifs)',
    'Calabash bowls and baskets',
    'African drums and instruments',
  ],
  conversationStarters: [
    'Have you heard about Ghana\'s role in African independence?',
    'What do you know about kente cloth?',
    'Have you tried West African cuisine?',
    'What interests you about Ghanaian culture?',
  ],
  quiz: [
    {
      id: 'ghana-q1',
      question: 'What was Ghana formerly known as?',
      options: ['Ivory Coast', 'Gold Coast', 'Slave Coast', 'Diamond Coast'],
      correctAnswer: 1,
    },
    {
      id: 'ghana-q2',
      question: 'What is Ghana famous for producing?',
      options: ['Diamonds', 'Cocoa', 'Oil', 'Rubber'],
      correctAnswer: 1,
    },
    {
      id: 'ghana-q3',
      question: 'What is kente?',
      options: ['A drum', 'A dance', 'A woven cloth', 'A food dish'],
      correctAnswer: 2,
    },
    {
      id: 'ghana-q4',
      question: 'What is the capital of Ghana?',
      options: ['Lagos', 'Accra', 'Kumasi', 'Tamale'],
      correctAnswer: 1,
    },
    {
      id: 'ghana-q5',
      question: 'Which European country colonized Ghana?',
      options: ['France', 'Portugal', 'Britain', 'Belgium'],
      correctAnswer: 2,
    },
    {
      id: 'ghana-q6',
      question: 'What is Ghana\'s traditional stew called?',
      options: ['Jollof', 'Fufu', 'Groundnut soup', 'Banku'],
      correctAnswer: 2,
    },
    {
      id: 'ghana-q7',
      question: 'In which year did Ghana gain independence?',
      options: ['1947', '1957', '1967', '1977'],
      correctAnswer: 1,
    },
    {
      id: 'ghana-q8',
      question: 'What is fufu typically eaten with?',
      options: ['Soup or stew', 'Rice', 'Bread', 'Salad'],
      correctAnswer: 0,
    },
    {
      id: 'ghana-q9',
      question: 'What symbol is on Ghana\'s flag?',
      options: ['Lion', 'Black star', 'Eagle', 'Sun'],
      correctAnswer: 1,
    },
    {
      id: 'ghana-q10',
      question: 'What percentage of the world\'s cocoa does Ghana produce?',
      options: ['About 10%', 'About 20%', 'About 50%', 'About 70%'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 47, y: 18 },
};
