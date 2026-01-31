import { Country } from '@/types';

export const burundi: Country = {
  id: 'burundi',
  name: 'Burundi',
  code: 'BI',
  continent: 'Africa',
  flag: '🇧🇮',
  landscapeImage: 'https://images.unsplash.com/photo-1609197642428-c6e5a18a2e42?w=800&q=80',
  description: 'Burundi is a small East African country known for its mountainous terrain, Lake Tanganyika shoreline, and traditional drumming culture.',
  quickFacts: [
    { label: 'Capital', value: 'Gitega' },
    { label: 'Population', value: '12 million' },
    { label: 'Official Languages', value: 'Kirundi, French' },
    { label: 'Currency', value: 'Burundian Franc' },
    { label: 'Area', value: '27,834 km²' },
  ],
  facts: [
    'Burundi has some of the world\'s best coffee',
    'The Royal Drummers of Burundi are world-famous',
    'Lake Tanganyika is the world\'s second deepest lake',
    'Burundi is one of the most densely populated countries in Africa',
    'The country is landlocked in East Africa',
    'Burundi gained independence from Belgium in 1962',
    'The national motto is "Unity, Work, Progress"',
    'Traditional drumming is a UNESCO Intangible Cultural Heritage',
  ],
  foodCulture: 'Burundian cuisine is simple with beans, corn, sweet potatoes, and cassava as staples. Fish from Lake Tanganyika is popular. Meals are communal and often served on banana leaves.',
  history: [
    {
      year: '16th Century',
      title: 'Kingdom of Burundi',
      description: 'The Kingdom of Burundi was established, ruled by the Ganwa princes under the Mwami (king).'
    },
    {
      year: '1899',
      title: 'German East Africa',
      description: 'Burundi became part of German East Africa after European colonization.'
    },
    {
      year: '1916',
      title: 'Belgian Rule',
      description: 'Belgium took control after World War I, administering Burundi with Rwanda as Ruanda-Urundi.'
    },
    {
      year: '1962',
      title: 'Independence',
      description: 'Burundi gained independence from Belgium, initially as a constitutional monarchy.'
    },
    {
      year: '1966',
      title: 'Republic Declared',
      description: 'The monarchy was abolished and Burundi became a republic.'
    },
    {
      year: '1993-2005',
      title: 'Civil War',
      description: 'Ethnic conflict between Hutu and Tutsi led to civil war, ending with peace accords in 2005.'
    },
  ],
  innovations: [
    {
      name: 'Royal Drumming Tradition',
      year: 'Ancient',
      description: 'The Karyenda drummers developed complex rhythmic patterns and rituals that influenced percussion worldwide, recognized by UNESCO.'
    },
    {
      name: 'Specialty Coffee Cultivation',
      year: '1930s',
      description: 'Burundi perfected high-altitude Arabica coffee growing, producing some of the world\'s finest single-origin coffees.'
    },
    {
      name: 'Lake Tanganyika Fishing Techniques',
      year: 'Traditional',
      description: 'Developed unique methods for fishing in one of the world\'s deepest lakes with endemic species.'
    },
    {
      name: 'Basket Weaving Artistry',
      year: 'Traditional',
      description: 'Burundian weavers created distinctive coiled basket patterns that became internationally recognized art forms.'
    },
  ],
  mustVisit: [
    { name: 'Lake Tanganyika', description: 'World\'s second-deepest lake with crystal-clear waters, beautiful beaches, and unique fish species found nowhere else.' },
    { name: 'Rusizi National Park', description: 'River delta park with hippos, crocodiles, and diverse birdlife near Lake Tanganyika.' },
    { name: 'Kibira National Park', description: 'Mountain rainforest with primates, including chimpanzees, and over 200 bird species.' },
    { name: 'Gitega National Museum', description: 'Former royal capital\'s museum showcasing traditional drums, royal artifacts, and cultural heritage.' },
    { name: 'Karera Waterfalls', description: 'Series of four waterfalls cascading through lush vegetation, offering scenic hiking.' }
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Most visitors need a visa; available on arrival at airport or in advance.' },
    { item: 'Best time to visit', description: 'Dry seasons: June-August and December-January for easier travel.' },
    { item: 'Language', description: 'Kirundi is official. French widely spoken. Limited English in tourist areas.' },
    { item: 'Currency', description: 'Burundian Franc. US dollars accepted but bring cash as ATMs are limited.' },
    { item: 'Health precautions', description: 'Yellow fever vaccination required. Malaria prophylaxis essential.' },
    { item: 'Safety', description: 'Check current situation. Some areas have travel advisories.' }
  ],
  mainDish: {
    id: 'burundi-main',
    name: 'Beans and Plantains',
    description: 'Traditional dish with stewed beans and fried plantains',
    cookingTime: 90,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Red beans', amount: 500, unit: 'g' },
      { name: 'Plantains', amount: 4, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Palm oil', amount: 3, unit: 'tbsp' },
      { name: 'Garlic', amount: 3, unit: 'cloves' },
    ],
    steps: [
      'Soak beans overnight',
      'Cook beans until tender',
      'Sauté onions and tomatoes',
      'Add beans and simmer together',
      'Slice and fry plantains until golden',
      'Serve beans with fried plantains',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600',
  },
  dessert: {
    id: 'burundi-dessert',
    name: 'Umutsima Sweet',
    description: 'Sweet cassava and corn porridge, a comforting Burundian dessert',
    cookingTime: 40,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Cassava flour', amount: 200, unit: 'g' },
      { name: 'Cornmeal', amount: 200, unit: 'g' },
      { name: 'Sugar', amount: 150, unit: 'g' },
      { name: 'Water', amount: 1000, unit: 'ml' },
      { name: 'Salt', amount: 0.5, unit: 'tsp' },
    ],
    steps: [
      'Mix cassava flour and cornmeal together.',
      'Bring water to boil in large pot.',
      'Gradually add flour mixture, stirring constantly.',
      'Reduce heat and cook for 25 minutes, stirring often.',
      'Add sugar and salt, mix well.',
      'Continue cooking for 5 more minutes.',
      'Should be thick and smooth consistency.',
      'Serve warm in bowls.',
      'Optional: add a pat of butter on top.',
      'Can be eaten as breakfast or dessert.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600',
  },
  drinks: {
    alcoholic: 'Urwarwa (banana beer), Impeke (sorghum beer)',
    nonAlcoholic: 'Ikivuguto (fermented milk), Fresh juice',
  },
  music: [
    'Royal drum performances',
    'Traditional Kirundi songs',
    'African rhythms',
  ],
  decorationIdeas: [
    'Red, white and green flag colors',
    'Traditional drums',
    'Lake imagery',
    'Coffee plant decorations',
  ],
  conversationStarters: [
    'Have you tried African coffee?',
    'What do you know about traditional drumming?',
    'Do you enjoy lakeside destinations?',
  ],
  quiz: [
    {
      id: 'burundi-q1',
      question: 'What is the capital of Burundi?',
      options: ['Bujumbura', 'Gitega', 'Kigali', 'Kampala'],
      correctAnswer: 1,
    },
    {
      id: 'burundi-q2',
      question: 'Which lake borders Burundi?',
      options: ['Lake Victoria', 'Lake Tanganyika', 'Lake Malawi', 'Lake Turkana'],
      correctAnswer: 1,
    },
    {
      id: 'burundi-q3',
      question: 'What is Burundi famous for producing?',
      options: ['Diamonds', 'Coffee', 'Oil', 'Gold'],
      correctAnswer: 1,
    },
    {
      id: 'burundi-q4',
      question: 'What is the traditional art form Burundi is known for?',
      options: ['Painting', 'Royal drumming', 'Sculpture', 'Dance'],
      correctAnswer: 1,
    },
    {
      id: 'burundi-q5',
      question: 'When did Burundi gain independence?',
      options: ['1952', '1962', '1972', '1982'],
      correctAnswer: 1,
    },
    {
      id: 'burundi-q6',
      question: 'Which European country colonized Burundi?',
      options: ['France', 'Britain', 'Belgium', 'Germany'],
      correctAnswer: 2,
    },
    {
      id: 'burundi-q7',
      question: 'What is Lake Tanganyika\'s world ranking by depth?',
      options: ['First deepest', 'Second deepest', 'Third deepest', 'Fourth deepest'],
      correctAnswer: 1,
    },
    {
      id: 'burundi-q8',
      question: 'What are the two main ethnic groups in Burundi?',
      options: ['Hutu and Tutsi', 'Zulu and Xhosa', 'Kikuyu and Luo', 'Ashanti and Fante'],
      correctAnswer: 0,
    },
    {
      id: 'burundi-q9',
      question: 'What is the main staple food in Burundi?',
      options: ['Rice', 'Wheat', 'Beans', 'Millet'],
      correctAnswer: 2,
    },
    {
      id: 'burundi-q10',
      question: 'When did the civil war in Burundi end?',
      options: ['1995', '2000', '2005', '2010'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 54, y: 16 },
};
