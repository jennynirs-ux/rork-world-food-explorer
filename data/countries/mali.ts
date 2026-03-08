import { Country } from '@/types';

export const mali: Country = {
  id: 'mali',
  name: 'Mali',
  code: 'ML',
  continent: 'Africa',
  flag: '🇲🇱',
  landscapeImage: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&q=80',
  description: 'Mali is a landlocked West African country known for the ancient city of Timbuktu, the Niger River, and rich musical traditions.',
  quickFacts: [
    { label: 'Capital', value: 'Bamako' },
    { label: 'Population', value: '21 million' },
    { label: 'Official Language', value: 'French' },
    { label: 'Currency', value: 'West African CFA Franc' },
    { label: 'Area', value: '1,240,192 km²' },
  ],
  facts: [
    'Home to the legendary city of Timbuktu',
    'The Mali Empire was one of the richest in history',
    'Known for traditional mud-brick architecture',
    'Birthplace of kora music and blues',
  ],
  foodCulture: 'Malian cuisine features millet, rice, peanuts, and vegetables with West African spices.',
  history: [
    {
      year: '1235',
      title: 'Mali Empire',
      description: 'Sundiata Keita founded the Mali Empire, which became one of the wealthiest in the world.'
    },
    {
      year: '1324',
      title: 'Mansa Musa\'s Pilgrimage',
      description: 'The richest man in history traveled to Mecca with so much gold he caused inflation.'
    },
    {
      year: '1960',
      title: 'Independence',
      description: 'Mali gained independence from France.'
    },
  ],
  innovations: [
    {
      name: 'Timbuktu Manuscripts',
      year: '13th Century',
      description: 'Preservation of ancient Islamic manuscripts and scholarly traditions.',
    },
    {
      name: 'Mud-Brick Architecture',
      year: 'Traditional',
      description: 'Great Mosque of Djenné showcases traditional Sudano-Sahelian architecture.',
    },
    {
      name: 'Kora Music',
      year: 'Traditional',
      description: 'Development of the 21-string kora instrument and its playing techniques.',
    },
  ],
  mustVisit: [
    { name: 'Timbuktu', description: 'Legendary ancient city, UNESCO World Heritage Site.' },
    { name: 'Great Mosque of Djenné', description: 'World\'s largest mud-brick building, UNESCO site.' },
    { name: 'Dogon Country', description: 'Dramatic cliffs with traditional villages and culture.' },
    { name: 'Niger River', description: 'Vital waterway through the Sahel region.' },
    { name: 'Bamako National Museum', description: 'Showcases Mali\'s rich cultural heritage.' }
  ],
  travelEssentials: [
    { item: 'Safety', description: 'Check current travel advisories; some areas have security concerns.' },
    { item: 'Best time to visit', description: 'November-February for cooler, dry weather.' },
    { item: 'Visa', description: 'Most visitors need a visa arranged in advance.' },
    { item: 'Yellow fever vaccination', description: 'Required for entry into Mali.' },
  ],
  dessert: {
    id: 'mali-dessert',
    name: 'Degue',
    description: 'Creamy millet pudding with yogurt and vanilla',
    cookingTime: 60,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Millet couscous', amount: 200, unit: 'g' },
      { name: 'Plain yogurt', amount: 500, unit: 'ml' },
      { name: 'Sugar', amount: 100, unit: 'g' },
      { name: 'Vanilla extract', amount: 2, unit: 'tsp' },
      { name: 'Ground nutmeg', amount: 0.5, unit: 'tsp' },
      { name: 'Raisins', amount: 50, unit: 'g' },
    ],
    steps: [
      'Steam millet couscous until fluffy',
      'Let cool to room temperature',
      'Mix yogurt with sugar and vanilla',
      'Fold cooled millet into yogurt mixture',
      'Add nutmeg and raisins',
      'Refrigerate for at least 2 hours',
      'Serve chilled in bowls',
    ],
    imageUrl: 'https://images.pexels.com/photos/9553316/pexels-photo-9553316.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  mainDish: {
    id: 'mali-main',
    name: 'Tigadèguèna',
    description: 'Peanut butter stew with meat and vegetables',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Beef or lamb', amount: 600, unit: 'g' },
      { name: 'Peanut butter', amount: 300, unit: 'g' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Okra', amount: 200, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Eggplant', amount: 1, unit: 'whole' },
    ],
    steps: [
      'Brown meat with onions',
      'Add tomatoes and water',
      'Stir in peanut butter',
      'Add vegetables',
      'Simmer until thick',
      'Serve over rice or couscous',
    ],
    imageUrl: 'https://images.pexels.com/photos/36287930/pexels-photo-36287930.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  drinks: {
    alcoholic: 'Dolo (millet beer), Palm wine',
    nonAlcoholic: 'Bissap (hibiscus tea), Ginger juice, Baobab juice',
  },
  music: [
    'Kora traditional music',
    'Desert blues',
    'Ali Farka Touré',
    'Toumani Diabaté',
  ],
  decorationIdeas: [
    'Green, yellow and red flag colors',
    'Mud-brick architecture imagery',
    'Kora instruments',
    'Saharan themes',
  ],
  conversationStarters: [
    'Have you heard of Timbuktu?',
    'What do you know about West African blues?',
    'Do you enjoy traditional string instruments?',
  ],
  quiz: [
    {
      id: 'mali-q1',
      question: 'What is the capital of Mali?',
      options: ['Bamako', 'Timbuktu', 'Gao', 'Sikasso'],
      correctAnswer: 0,
    },
    {
      id: 'mali-q2',
      question: 'What legendary ancient city is located in Mali?',
      options: ['Carthage', 'Timbuktu', 'Alexandria', 'Babylon'],
      correctAnswer: 1,
    },
    {
      id: 'mali-q3',
      question: 'Who was the richest ruler in history from Mali?',
      options: ['Sundiata Keita', 'Mansa Musa', 'Askia Muhammad', 'Sonni Ali'],
      correctAnswer: 1,
    },
    {
      id: 'mali-q4',
      question: 'What is the world\'s largest mud-brick building located in Mali?',
      options: ['Palace of Bamako', 'Great Mosque of Djenné', 'Timbuktu Library', 'Gao Castle'],
      correctAnswer: 1,
    },
    {
      id: 'mali-q5',
      question: 'In which year did Mali gain independence?',
      options: ['1950', '1960', '1970', '1980'],
      correctAnswer: 1,
    },
    {
      id: 'mali-q6',
      question: 'What is Mali\'s official language?',
      options: ['Arabic', 'English', 'French', 'Bambara'],
      correctAnswer: 2,
    },
    {
      id: 'mali-q7',
      question: 'What traditional string instrument originated in Mali?',
      options: ['Guitar', 'Kora', 'Harp', 'Banjo'],
      correctAnswer: 1,
    },
    {
      id: 'mali-q8',
      question: 'Which river flows through Mali?',
      options: ['Nile', 'Congo', 'Niger', 'Zambezi'],
      correctAnswer: 2,
    },
    {
      id: 'mali-q9',
      question: 'What is Mali\'s currency?',
      options: ['Malian Franc', 'West African CFA Franc', 'Mali Dollar', 'Dinar'],
      correctAnswer: 1,
    },
    {
      id: 'mali-q10',
      question: 'What ancient manuscripts are preserved in Timbuktu?',
      options: ['Dead Sea Scrolls', 'Islamic manuscripts', 'Egyptian papyri', 'Roman texts'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 46, y: 28 },
};
