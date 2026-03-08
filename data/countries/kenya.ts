import { Country } from '@/types';

export const kenya: Country = {
  id: 'kenya',
  name: 'Kenya',
  code: 'KE',
  continent: 'Africa',
  flag: '🇰🇪',
  landscapeImage: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80',
  description: 'Kenya is a country in East Africa with coastline on the Indian Ocean. It encompasses savannah, lakelands, the dramatic Great Rift Valley, and mountain highlands. It\'s also home to wildlife like lions, elephants and rhinos.',
  quickFacts: [
    { label: 'Capital', value: 'Nairobi' },
    { label: 'Population', value: '54 million' },
    { label: 'Official Language', value: 'Swahili, English' },
    { label: 'Currency', value: 'Kenyan Shilling (KES)' },
    { label: 'Area', value: '580,367 km²' },
  ],
  facts: [
    'Kenya is home to the Great Wildebeest Migration, one of the world\'s greatest natural spectacles',
    'Mount Kenya is the second-highest mountain in Africa',
    'The Maasai Mara is one of Africa\'s most famous wildlife reserves',
    'Kenya is the world leader in mobile money technology with M-Pesa',
    'The country straddles the equator',
    'Kenyan runners dominate long-distance running events worldwide',
  ],
  foodCulture: 'Kenyan cuisine features a blend of African, Indian, and European influences. Ugali (maize meal) is a staple food, often served with meat stews and vegetables. The cuisine emphasizes fresh ingredients and hearty, flavorful dishes.',
  history: [
    {
      year: '1963',
      title: 'Independence',
      description: 'Kenya gained independence from British colonial rule, with Jomo Kenyatta as the first president.'
    },
    {
      year: '1977',
      title: 'Safari Tourism Boom',
      description: 'Kenya became one of Africa\'s premier safari destinations, attracting visitors from around the world.'
    },
    {
      year: '2007',
      title: 'M-Pesa Launch',
      description: 'Kenya pioneered mobile money transfer service, revolutionizing financial access in Africa.'
    },
  ],
  innovations: [
    {
      name: 'M-Pesa',
      year: '2007',
      description: 'Revolutionary mobile money transfer service that became a global model for financial inclusion.'
    },
    {
      name: 'KenGen Geothermal',
      year: '1981',
      description: 'Kenya became a leader in geothermal energy production in Africa.'
    },
  ],
  mustVisit: [
    { name: 'Maasai Mara', description: 'World-famous wildlife reserve, home to the Great Migration.' },
    { name: 'Mount Kenya', description: 'Africa\'s second-highest peak with diverse ecosystems.' },
    { name: 'Diani Beach', description: 'Pristine white sand beaches on the Indian Ocean coast.' },
    { name: 'Lake Nakuru', description: 'Stunning lake famous for flamingos and rhino sanctuary.' },
    { name: 'Amboseli National Park', description: 'Spectacular views of Mount Kilimanjaro and large elephant herds.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'July-October for the Great Migration, December-March for beach holidays.' },
    { item: 'Yellow fever vaccination', description: 'Required for entry into Kenya.' },
    { item: 'Safari clothing', description: 'Neutral colors for game drives, layers for varying temperatures.' },
    { item: 'Insect repellent', description: 'Essential for malaria prevention in certain areas.' },
  ],
  mainDish: {
    id: 'kenya-main',
    name: 'Nyama Choma',
    description: 'Grilled meat, typically goat or beef, a beloved Kenyan dish often enjoyed socially',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Goat or beef', amount: 2000, unit: 'g' },
      { name: 'Salt', amount: 2, unit: 'tbsp' },
      { name: 'Lemon juice', amount: 3, unit: 'tbsp' },
      { name: 'Black pepper', amount: 1, unit: 'tbsp' },
      { name: 'Garlic', amount: 4, unit: 'cloves' },
    ],
    steps: [
      'Cut meat into large chunks',
      'Season generously with salt, pepper, and crushed garlic',
      'Marinate with lemon juice for at least 2 hours',
      'Grill over open charcoal fire, turning frequently',
      'Cook until well-done and slightly charred',
      'Serve with ugali, kachumbari, and grilled vegetables',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Nyama_Choma_%28BBQ_the_Kenyan_way%29.jpg/800px-Nyama_Choma_%28BBQ_the_Kenyan_way%29.jpg',
  },
  dessert: {
    id: 'kenya-dessert',
    name: 'Mandazi',
    description: 'Sweet fried dough, similar to donuts, often enjoyed with chai',
    cookingTime: 40,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Flour', amount: 500, unit: 'g' },
      { name: 'Sugar', amount: 100, unit: 'g' },
      { name: 'Coconut milk', amount: 200, unit: 'ml' },
      { name: 'Eggs', amount: 2, unit: 'large' },
      { name: 'Cardamom', amount: 1, unit: 'tsp' },
      { name: 'Baking powder', amount: 2, unit: 'tsp' },
      { name: 'Oil for frying', amount: 500, unit: 'ml' },
    ],
    steps: [
      'Mix flour, sugar, baking powder, and cardamom',
      'Add eggs and coconut milk, knead into soft dough',
      'Let dough rest for 30 minutes',
      'Roll out and cut into triangles',
      'Deep fry until golden brown',
      'Serve warm with chai tea',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Bowl_of_mandazi.jpg/800px-Bowl_of_mandazi.jpg',
  },
  drinks: {
    alcoholic: 'Tusker beer, Kenya Cane spirit, Local honey wine',
    nonAlcoholic: 'Kenyan chai (spiced tea), Fresh sugarcane juice, Dawa (honey-lemon drink)',
  },
  music: [
    'Jambo Bwana - Kenyan national song',
    'Malaika - Traditional Swahili song',
    'Wavin\' Flag - K\'naan (featuring Kenyan artists)',
    'Benga music - Traditional Kenyan genre',
  ],
  decorationIdeas: [
    'Maasai shukas (red checkered cloth)',
    'Kenyan flag colors (black, red, green)',
    'African drums and instruments',
    'Wildlife and safari themes',
    'Kikoy fabrics and textiles',
  ],
  conversationStarters: [
    'Have you ever been on an African safari?',
    'What do you know about the Maasai people?',
    'Do you follow long-distance running?',
    'What\'s your favorite African animal?',
  ],
  quiz: [
    {
      id: 'kenya-q1',
      question: 'What is Kenya\'s most famous wildlife spectacle?',
      options: ['Gorilla trekking', 'Great Wildebeest Migration', 'Penguin colonies', 'Tiger reserves'],
      correctAnswer: 1,
    },
    {
      id: 'kenya-q2',
      question: 'What mobile money service did Kenya pioneer?',
      options: ['PayPal', 'M-Pesa', 'Apple Pay', 'Venmo'],
      correctAnswer: 1,
    },
    {
      id: 'kenya-q3',
      question: 'What is the capital of Kenya?',
      options: ['Mombasa', 'Nairobi', 'Kisumu', 'Nakuru'],
      correctAnswer: 1,
    },
    {
      id: 'kenya-q4',
      question: 'What is the name of Kenya\'s most famous wildlife reserve?',
      options: ['Kruger', 'Serengeti', 'Maasai Mara', 'Etosha'],
      correctAnswer: 2,
    },
    {
      id: 'kenya-q5',
      question: 'What is the second-highest mountain in Africa located in Kenya?',
      options: ['Mount Kilimanjaro', 'Mount Kenya', 'Mount Elgon', 'Mount Meru'],
      correctAnswer: 1,
    },
    {
      id: 'kenya-q6',
      question: 'In which year did Kenya gain independence?',
      options: ['1945', '1960', '1963', '1970'],
      correctAnswer: 2,
    },
    {
      id: 'kenya-q7',
      question: 'What is Kenya\'s traditional grilled meat dish called?',
      options: ['Braai', 'Nyama Choma', 'Suya', 'Kebab'],
      correctAnswer: 1,
    },
    {
      id: 'kenya-q8',
      question: 'What are the official languages of Kenya?',
      options: ['English only', 'Swahili only', 'Swahili and English', 'French and English'],
      correctAnswer: 2,
    },
    {
      id: 'kenya-q9',
      question: 'Which lake in Kenya is famous for its flamingos?',
      options: ['Lake Victoria', 'Lake Turkana', 'Lake Nakuru', 'Lake Naivasha'],
      correctAnswer: 2,
    },
    {
      id: 'kenya-q10',
      question: 'What is Kenya\'s currency?',
      options: ['Kenyan Dollar', 'Kenyan Shilling', 'Kenyan Pound', 'Kenyan Franc'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 54, y: 20 },
};
