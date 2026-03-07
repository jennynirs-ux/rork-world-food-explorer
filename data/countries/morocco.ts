import { Country } from '@/types';

export const morocco: Country = {
  id: 'morocco',
  name: 'Morocco',
  code: 'MA',
  continent: 'Africa',
  flag: '🇲🇦',
  landscapeImage: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80',
  description: 'Morocco is a North African country bordering the Atlantic Ocean and Mediterranean Sea. It\'s known for its Berber, Arabian and European cultural influences, bustling souks, and stunning architecture.',
  quickFacts: [
    { label: 'Capital', value: 'Rabat' },
    { label: 'Population', value: '37.3 million' },
    { label: 'Official Languages', value: 'Arabic & Berber' },
    { label: 'Currency', value: 'Moroccan Dirham (MAD)' },
    { label: 'Area', value: '446,550 km²' },
  ],
  facts: [
    'Morocco is the only African country with Atlantic and Mediterranean coastlines',
    'The country has the oldest university in the world - University of Al Quaraouiyine (859 AD)',
    'Casablanca is home to the world\'s tallest minaret',
    'Morocco produces the world\'s finest argan oil',
    'The Sahara Desert covers much of eastern Morocco',
    'Mint tea is the national drink and a sign of hospitality',
    'Morocco has four imperial cities: Fes, Marrakech, Meknes, and Rabat',
    'The blue city of Chefchaouen is painted entirely in shades of blue',
  ],
  foodCulture: 'Moroccan cuisine is a rich blend of Arab, Berber, Mediterranean and African influences. Meals are often served communally from large platters, and it\'s traditional to eat with your right hand. Spices like cumin, saffron, and cinnamon are essential.',
  history: [
    {
      year: '788 AD',
      title: 'Founding of Morocco',
      description: 'Idris I unified Morocco and established the first Muslim dynasty. Fes became the capital and a center of learning and culture.'
    },
    {
      year: '1062-1248',
      title: 'Almoravid and Almohad Dynasties',
      description: 'Morocco became a powerful empire controlling North Africa and parts of Spain, building magnificent mosques and palaces.'
    },
    {
      year: '1912-1956',
      title: 'French Protectorate',
      description: 'Morocco became a French and Spanish protectorate, leading to modern infrastructure development but also resistance movements.'
    },
    {
      year: '1956-Present',
      title: 'Modern Morocco',
      description: 'Morocco gained independence and has developed into a stable constitutional monarchy balancing tradition with modernization.'
    },
  ],
  innovations: [
    {
      name: 'Argan Oil Production',
      year: 'Ancient',
      description: 'Traditional method of extracting argan oil, now a global beauty and culinary product unique to Morocco.'
    },
    {
      name: 'Zellige Tilework',
      year: '10th Century',
      description: 'Intricate mosaic tilework technique creating geometric patterns, iconic of Moroccan architecture.'
    },
    {
      name: 'Noor Solar Complex',
      year: '2016',
      description: 'World\'s largest concentrated solar power plant, positioning Morocco as a renewable energy leader.'
    },
    {
      name: 'Tanneries of Fes',
      year: '11th Century',
      description: 'Ancient leather dyeing techniques still practiced today, producing world-renowned Moroccan leather goods.'
    },
  ],
  mustVisit: [
    { name: 'Marrakech Medina', description: 'Bustling old city with souks, Jemaa el-Fnaa square, and stunning palaces.' },
    { name: 'Sahara Desert', description: 'Experience camel trekking and spend a night under the stars in the desert.' },
    { name: 'Chefchaouen', description: 'The famous blue city nestled in the Rif Mountains.' },
    { name: 'Fes el-Bali', description: 'UNESCO World Heritage medieval medina with ancient tanneries.' },
    { name: 'Hassan II Mosque', description: 'Spectacular mosque in Casablanca with the world\'s tallest minaret.' }
  ],
  travelEssentials: [
    { item: 'Modest clothing', description: 'Cover shoulders and knees, especially in religious areas.' },
    { item: 'Comfortable shoes', description: 'Medinas have cobblestone streets and lots of walking.' },
    { item: 'Sunscreen & hat', description: 'Strong sun, especially in desert regions.' },
    { item: 'Cash in dirhams', description: 'Many small shops don\'t accept cards.' },
    { item: 'French/Arabic phrases', description: 'English is limited outside major tourist areas.' }
  ],
  mainDish: {
    id: 'morocco-main',
    name: 'Chicken Tagine',
    description: 'Slow-cooked chicken with olives, preserved lemons, and aromatic spices',
    cookingTime: 90,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken pieces', amount: 1, unit: 'kg' },
      { name: 'Onions', amount: 2, unit: 'large' },
      { name: 'Garlic cloves', amount: 4, unit: 'cloves' },
      { name: 'Preserved lemon', amount: 1, unit: 'whole' },
      { name: 'Green olives', amount: 150, unit: 'g' },
      { name: 'Olive oil', amount: 60, unit: 'ml' },
      { name: 'Ginger', amount: 1, unit: 'tsp' },
      { name: 'Turmeric', amount: 1, unit: 'tsp' },
      { name: 'Cumin', amount: 1, unit: 'tsp' },
      { name: 'Saffron threads', amount: 1, unit: 'pinch' },
      { name: 'Cilantro', amount: 1, unit: 'bunch' },
      { name: 'Chicken stock', amount: 500, unit: 'ml' },
    ],
    steps: [
      'In a tagine or heavy pot, heat olive oil over medium heat',
      'Add sliced onions and cook until soft',
      'Add minced garlic, ginger, turmeric, cumin, and saffron',
      'Add chicken pieces and brown on all sides',
      'Pour in chicken stock and bring to a simmer',
      'Add chopped cilantro, cover and cook on low for 45 minutes',
      'Add olives and preserved lemon (cut into quarters)',
      'Continue cooking for 30 more minutes until chicken is tender',
      'Adjust seasoning with salt and pepper',
      'Garnish with fresh cilantro and serve with couscous or bread',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541518763-27a56b59c8f1?w=800&q=80',
  },
  dessert: {
    id: 'morocco-dessert',
    name: 'Moroccan Orange Cake',
    description: 'Moist almond cake infused with orange blossom water',
    cookingTime: 60,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Ground almonds', amount: 300, unit: 'g' },
      { name: 'Eggs', amount: 6, unit: 'large' },
      { name: 'Sugar', amount: 250, unit: 'g' },
      { name: 'Baking powder', amount: 1, unit: 'tsp' },
      { name: 'Orange blossom water', amount: 2, unit: 'tbsp' },
      { name: 'Orange zest', amount: 2, unit: 'oranges' },
      { name: 'Powdered sugar', amount: 50, unit: 'g' },
      { name: 'Sliced almonds', amount: 50, unit: 'g' },
    ],
    steps: [
      'Preheat oven to 180°C (350°F) and grease a cake pan',
      'Beat eggs and sugar until light and fluffy',
      'Add ground almonds, baking powder, orange zest, and orange blossom water',
      'Mix until well combined',
      'Pour batter into prepared pan',
      'Sprinkle sliced almonds on top',
      'Bake for 40-45 minutes until golden and a toothpick comes out clean',
      'Let cool in pan for 10 minutes',
      'Turn out onto a wire rack to cool completely',
      'Dust with powdered sugar before serving',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Moroccan wine (Domaine de Sahari, Guerrouane)',
    nonAlcoholic: 'Mint tea (Atay), Fresh orange juice, Almond milk, Avocado smoothie',
  },
  music: [
    'Gnawa music',
    'Chaabi',
    'Berber folk music',
    'Andalusian classical music',
    'Modern Rai',
  ],
  decorationIdeas: [
    'Moroccan lanterns and candles',
    'Colorful poufs and cushions',
    'Patterned rugs and textiles',
    'Brass or copper tea service',
    'Blue and white ceramics',
  ],
  conversationStarters: [
    'Have you ever been to a Moroccan hammam (bath house)?',
    'What do you know about Berber culture?',
    'Would you like to experience a night in the Sahara?',
    'Have you tried authentic mint tea?',
    'What Moroccan city fascinates you most?',
  ],
  quiz: [
    {
      id: 'morocco-q1',
      question: 'What is the capital of Morocco?',
      options: ['Marrakech', 'Casablanca', 'Rabat', 'Fes'],
      correctAnswer: 2,
    },
    {
      id: 'morocco-q2',
      question: 'What is a tagine?',
      options: ['A type of bread', 'A cooking pot', 'A spice blend', 'A carpet'],
      correctAnswer: 1,
    },
    {
      id: 'morocco-q3',
      question: 'Which city is known as the "Blue City"?',
      options: ['Rabat', 'Chefchaouen', 'Tangier', 'Essaouira'],
      correctAnswer: 1,
    },
    {
      id: 'morocco-q4',
      question: 'What is Morocco\'s national drink?',
      options: ['Coffee', 'Mint tea', 'Orange juice', 'Wine'],
      correctAnswer: 1,
    },
    {
      id: 'morocco-q5',
      question: 'Which desert covers much of eastern Morocco?',
      options: ['Gobi', 'Sahara', 'Kalahari', 'Mojave'],
      correctAnswer: 1,
    },
    {
      id: 'morocco-q6',
      question: 'What is the main language spoken in Morocco?',
      options: ['French', 'Arabic', 'Spanish', 'Berber'],
      correctAnswer: 1,
    },
    {
      id: 'morocco-q7',
      question: 'Which Moroccan city is known for its blue-painted buildings?',
      options: ['Marrakech', 'Casablanca', 'Chefchaouen', 'Fes'],
      correctAnswer: 2,
    },
    {
      id: 'morocco-q8',
      question: 'What is a souk?',
      options: ['A palace', 'A traditional market', 'A mosque', 'A desert caravan'],
      correctAnswer: 1,
    },
    {
      id: 'morocco-q9',
      question: 'Which ocean borders Morocco on the west?',
      options: ['Mediterranean', 'Red Sea', 'Atlantic Ocean', 'Indian Ocean'],
      correctAnswer: 2,
    },
    {
      id: 'morocco-q10',
      question: 'What is the traditional Moroccan cake made with almonds?',
      options: ['Baklava', 'Msemen', 'Ghoriba', 'Sellou'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 45, y: 35 },
  isUnlockedByDefault: true,
};
