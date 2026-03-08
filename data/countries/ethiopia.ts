import { Country } from '@/types';

export const ethiopia: Country = {
  id: 'ethiopia',
  name: 'Ethiopia',
  code: 'ET',
  continent: 'Africa',
  flag: '🇪🇹',
  landscapeImage: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80',
  description: 'Ethiopia is one of the oldest nations in the world, with a unique cultural heritage. Known as the birthplace of coffee, Ethiopia has never been colonized and maintains ancient Christian traditions.',
  quickFacts: [
    { label: 'Capital', value: 'Addis Ababa' },
    { label: 'Population', value: '120 million' },
    { label: 'Official Language', value: 'Amharic' },
    { label: 'Currency', value: 'Ethiopian Birr (ETB)' },
    { label: 'Area', value: '1,104,300 km²' },
  ],
  facts: [
    'Ethiopia is the birthplace of coffee',
    'The country has its own unique calendar that is 7-8 years behind the Gregorian calendar',
    'Ethiopia was never colonized, maintaining independence throughout history',
    'Home to 9 UNESCO World Heritage Sites',
    'Ethiopian Orthodox Christianity dates back to the 4th century',
    'Ethiopia has the most UNESCO-registered Intangible Cultural Heritage in Africa',
  ],
  foodCulture: 'Ethiopian cuisine is known for its unique flavors and communal eating style. Injera, a spongy sourdough flatbread, serves as both plate and utensil. Meals are typically eaten with hands, and coffee ceremonies are an important cultural tradition.',
  history: [
    {
      year: '1000 BC',
      title: 'Kingdom of Aksum',
      description: 'One of the great civilizations of the ancient world, controlling trade routes between Africa and Asia.'
    },
    {
      year: '1896',
      title: 'Battle of Adwa',
      description: 'Ethiopia defeated Italian forces, remaining the only African nation to resist European colonization.'
    },
    {
      year: '1974',
      title: 'End of Monarchy',
      description: 'Emperor Haile Selassie was overthrown, ending thousands of years of imperial rule.'
    },
  ],
  innovations: [
    {
      name: 'Coffee Cultivation',
      year: 'Ancient',
      description: 'Coffee was first discovered in Ethiopia and remains central to Ethiopian culture.'
    },
    {
      name: 'Ethiopian Calendar',
      year: 'Ancient',
      description: 'A unique calendar system with 13 months still in use today.'
    },
  ],
  mustVisit: [
    { name: 'Lalibela Churches', description: 'Ancient rock-hewn churches carved from solid rock, a UNESCO site.' },
    { name: 'Simien Mountains', description: 'Dramatic mountain landscapes with unique wildlife including gelada baboons.' },
    { name: 'Lake Tana', description: 'Source of the Blue Nile, with ancient island monasteries.' },
    { name: 'Aksum', description: 'Ancient city with towering obelisks and archaeological treasures.' },
    { name: 'Danakil Depression', description: 'One of the hottest places on Earth with colorful volcanic landscapes.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'October-March for dry season and comfortable temperatures.' },
    { item: 'Yellow fever vaccination', description: 'Recommended for travel to Ethiopia.' },
    { item: 'Modest clothing', description: 'Respectful dress for visiting religious sites.' },
    { item: 'Cash', description: 'ATMs limited outside major cities, carry Ethiopian Birr.' },
  ],
  mainDish: {
    id: 'ethiopia-main',
    name: 'Doro Wat',
    description: 'Spicy chicken stew, Ethiopia\'s national dish, served with injera',
    cookingTime: 120,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken pieces', amount: 1500, unit: 'g' },
      { name: 'Red onions', amount: 4, unit: 'large' },
      { name: 'Berbere spice', amount: 4, unit: 'tbsp' },
      { name: 'Niter kibbeh (spiced butter)', amount: 100, unit: 'g' },
      { name: 'Garlic', amount: 6, unit: 'cloves' },
      { name: 'Ginger', amount: 50, unit: 'g' },
      { name: 'Tomato paste', amount: 3, unit: 'tbsp' },
      { name: 'Hard-boiled eggs', amount: 6, unit: 'large' },
    ],
    steps: [
      'Slowly caramelize onions without oil until golden brown (45 minutes)',
      'Add niter kibbeh, berbere spice, garlic, and ginger',
      'Stir in tomato paste and water to make thick sauce',
      'Add chicken pieces and simmer for 45 minutes',
      'Add peeled hard-boiled eggs in final 15 minutes',
      'Serve on injera flatbread with sides',
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Ethiopian_wat.jpg/800px-Ethiopian_wat.jpg',
  },
  dessert: {
    id: 'ethiopia-dessert',
    name: 'Kolo',
    description: 'Roasted barley snack, often served during coffee ceremony',
    cookingTime: 30,
    servings: 8,
    dietType: 'vegan',
    ingredients: [
      { name: 'Barley', amount: 400, unit: 'g' },
      { name: 'Peanuts', amount: 100, unit: 'g' },
      { name: 'Chickpeas', amount: 100, unit: 'g' },
      { name: 'Salt', amount: 1, unit: 'tsp' },
      { name: 'Berbere spice', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Dry roast barley in pan until golden and aromatic',
      'Roast peanuts and chickpeas separately',
      'Mix all roasted ingredients together',
      'Season with salt and berbere spice',
      'Serve alongside Ethiopian coffee',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Tej (honey wine), St. George beer, Araki (traditional spirit)',
    nonAlcoholic: 'Ethiopian coffee, Spris (lemon drink), Buna (traditional coffee ceremony)',
  },
  music: [
    'Traditional Azmari music',
    'Tizita - Ethiopian blues',
    'Eskista - traditional dance music',
    'Mulatu Astatke - Ethio-jazz',
  ],
  decorationIdeas: [
    'Ethiopian flag colors (green, yellow, red)',
    'Traditional coffee pots (jebena)',
    'Mesob (colorful woven baskets)',
    'Ethiopian crosses and religious art',
    'Tribal textiles and patterns',
  ],
  conversationStarters: [
    'Have you tried Ethiopian coffee?',
    'What do you know about eating with injera?',
    'Have you heard about Ethiopia\'s ancient churches?',
    'What\'s your experience with African cuisines?',
  ],
  quiz: [
    {
      id: 'ethiopia-q1',
      question: 'What is Ethiopia famous for being the birthplace of?',
      options: ['Tea', 'Coffee', 'Chocolate', 'Wine'],
      correctAnswer: 1,
    },
    {
      id: 'ethiopia-q2',
      question: 'What is injera?',
      options: ['A spice blend', 'A spongy flatbread', 'A coffee pot', 'A traditional dress'],
      correctAnswer: 1,
    },
    {
      id: 'ethiopia-q3',
      question: 'Was Ethiopia colonized by European powers?',
      options: ['Yes, by Italy', 'Yes, by Britain', 'No, it remained independent', 'Yes, by France'],
      correctAnswer: 2,
    },
    {
      id: 'ethiopia-q4',
      question: 'What is the capital of Ethiopia?',
      options: ['Nairobi', 'Addis Ababa', 'Asmara', 'Khartoum'],
      correctAnswer: 1,
    },
    {
      id: 'ethiopia-q5',
      question: 'What is Doro Wat?',
      options: ['A coffee drink', 'Spicy chicken stew', 'A traditional dance', 'A mountain'],
      correctAnswer: 1,
    },
    {
      id: 'ethiopia-q6',
      question: 'How is the Ethiopian calendar different?',
      options: ['It has 10 months', 'It has 13 months', 'It has no leap years', 'It starts in summer'],
      correctAnswer: 1,
    },
    {
      id: 'ethiopia-q7',
      question: 'What is berbere?',
      options: ['A city', 'A spice blend', 'A river', 'A festival'],
      correctAnswer: 1,
    },
    {
      id: 'ethiopia-q8',
      question: 'Which battle secured Ethiopia\'s independence?',
      options: ['Battle of Waterloo', 'Battle of Adwa', 'Battle of Hastings', 'Battle of Tours'],
      correctAnswer: 1,
    },
    {
      id: 'ethiopia-q9',
      question: 'How many UNESCO World Heritage Sites does Ethiopia have?',
      options: ['3', '5', '9', '12'],
      correctAnswer: 2,
    },
    {
      id: 'ethiopia-q10',
      question: 'What is tej?',
      options: ['Coffee', 'Honey wine', 'Bread', 'Cheese'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 55, y: 20 },
};
