import { Country } from '@/types';

export const argentina: Country = {
  id: 'argentina',
  name: 'Argentina',
  code: 'AR',
  continent: 'South America',
  flag: '🇦🇷',
  landscapeImage: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&q=80',
  description: 'Argentina is a vast South American country with diverse landscapes from the Andes mountains to Patagonian glaciers. Known for tango, beef, wine, and passionate football culture.',
  quickFacts: [
    { label: 'Capital', value: 'Buenos Aires' },
    { label: 'Population', value: '45.8 million' },
    { label: 'Official Language', value: 'Spanish' },
    { label: 'Currency', value: 'Argentine Peso (ARS)' },
    { label: 'Area', value: '2,780,400 km²' },
  ],
  facts: [
    'Argentina is the second-largest country in South America and the eighth-largest in the world',
    'The tango originated in Buenos Aires in the late 19th century',
    'Argentina has won the FIFA World Cup three times (1978, 1986, 2022)',
    'The country produces some of the world\'s finest Malbec wines',
    'Argentina has the highest consumption of beef per capita in the world',
    'The Andes mountain range runs along the entire western border',
    'Buenos Aires is often called the "Paris of South America"',
    'Argentina is home to the world\'s southernmost city, Ushuaia',
  ],
  foodCulture: 'Argentine cuisine is heavily influenced by Italian and Spanish traditions, with a strong emphasis on beef. The asado (barbecue) is a central social event. Meals are eaten late, with dinner often starting at 10 PM or later.',
  history: [
    {
      year: '1816',
      title: 'Independence',
      description: 'Argentina declared independence from Spain on July 9, 1816, after years of revolutionary struggle.'
    },
    {
      year: '1880-1916',
      title: 'Golden Age',
      description: 'Massive European immigration and agricultural exports made Argentina one of the world\'s wealthiest nations.'
    },
    {
      year: '1946-1955',
      title: 'Perón Era',
      description: 'Juan Perón and his wife Eva (Evita) transformed Argentine politics with their populist movement.'
    },
    {
      year: '2022',
      title: 'World Cup Victory',
      description: 'Argentina won their third FIFA World Cup, led by Lionel Messi in what many called the greatest final ever.'
    },
  ],
  innovations: [
    {
      name: 'Fingerprint Identification',
      year: '1892',
      description: 'Juan Vucetich created the first method of fingerprint identification for criminal investigations.'
    },
    {
      name: 'Ballpoint Pen',
      year: '1943',
      description: 'László Bíró, an Argentine-Hungarian inventor, perfected the ballpoint pen in Argentina.'
    },
    {
      name: 'Bypass Surgery',
      year: '1967',
      description: 'René Favaloro pioneered the coronary artery bypass graft surgery.'
    },
  ],
  mustVisit: [
    { name: 'Iguazu Falls', description: 'Spectacular waterfalls on the border with Brazil, one of the New Seven Wonders of Nature.' },
    { name: 'Perito Moreno Glacier', description: 'Massive glacier in Patagonia, one of the few glaciers in the world still advancing.' },
    { name: 'Buenos Aires', description: 'Vibrant capital city with European architecture, tango shows, and world-class cuisine.' },
    { name: 'Mendoza Wine Country', description: 'Stunning wine region at the foot of the Andes, famous for Malbec.' },
    { name: 'Ushuaia', description: 'The world\'s southernmost city, gateway to Antarctica and Tierra del Fuego National Park.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'Spring (September-November) and Fall (March-May) offer pleasant weather.' },
    { item: 'Cash', description: 'US dollars are widely accepted. ATMs available but may have limits.' },
    { item: 'Power adapter', description: 'Argentina uses Type C and I plugs with 220V.' },
    { item: 'Spanish phrasebook', description: 'English is limited outside major tourist areas.' },
    { item: 'Layers of clothing', description: 'Weather can vary greatly depending on the region.' },
    { item: 'Comfortable shoes', description: 'Buenos Aires is a walking city with lots to explore.' }
  ],
  mainDish: {
    id: 'argentina-main',
    name: 'Asado (Argentine Barbecue)',
    description: 'Traditional Argentine barbecue featuring various cuts of beef cooked slowly over wood fire',
    cookingTime: 180,
    servings: 8,
    dietType: 'meat',
    ingredients: [
      { name: 'Beef short ribs', amount: 1000, unit: 'g' },
      { name: 'Beef sirloin', amount: 1000, unit: 'g' },
      { name: 'Chorizo sausages', amount: 500, unit: 'g' },
      { name: 'Coarse salt', amount: 3, unit: 'tbsp' },
      { name: 'Chimichurri sauce', amount: 200, unit: 'ml' },
      { name: 'Wood or charcoal', amount: 1, unit: 'as needed' },
    ],
    steps: [
      'Build a fire with wood or charcoal and let it burn down to hot coals',
      'Season all meat generously with coarse salt',
      'Place ribs on the grill first, as they take longest to cook',
      'Add other cuts of meat, maintaining a medium-low heat',
      'Cook slowly for 2-3 hours, turning occasionally',
      'Meat is done when tender and slightly charred outside',
      'Slice and serve with chimichurri sauce and crusty bread',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80',
  },
  dessert: {
    id: 'argentina-dessert',
    name: 'Alfajores',
    description: 'Traditional cookies filled with dulce de leche and coated in chocolate or powdered sugar',
    cookingTime: 45,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Cornstarch', amount: 200, unit: 'g' },
      { name: 'Flour', amount: 150, unit: 'g' },
      { name: 'Butter', amount: 150, unit: 'g' },
      { name: 'Sugar', amount: 100, unit: 'g' },
      { name: 'Egg yolks', amount: 2, unit: 'large' },
      { name: 'Dulce de leche', amount: 300, unit: 'g' },
      { name: 'Shredded coconut', amount: 100, unit: 'g' },
      { name: 'Baking powder', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Mix cornstarch, flour, and baking powder together',
      'Cream butter with sugar until light and fluffy',
      'Add egg yolks one at a time, mixing well',
      'Gradually add dry ingredients until dough forms',
      'Refrigerate dough for 30 minutes',
      'Roll out dough and cut into circles',
      'Bake at 180°C (350°F) for 12-15 minutes until lightly golden',
      'Let cool completely, then sandwich with dulce de leche',
      'Roll edges in shredded coconut',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1599599810694-b5b37304c041?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Malbec wine, Fernet con Coca, Quilmes beer',
    nonAlcoholic: 'Mate (traditional herbal tea), Fresh orange juice, Licuados (fruit smoothies)',
  },
  music: [
    'La Cumparsita - Carlos Gardel',
    'Por Una Cabeza - Carlos Gardel',
    'Volver - Carlos Gardel',
    'Libertango - Astor Piazzolla',
    'Alfonsina y el Mar - Mercedes Sosa',
  ],
  decorationIdeas: [
    'Blue and white colors from the Argentine flag',
    'Gaucho-themed decorations (traditional cowboys)',
    'Tango posters and bandoneon images',
    'Wine bottles from Mendoza',
    'Pampas grass arrangements',
  ],
  conversationStarters: [
    'Have you ever tried mate? What did you think?',
    'What\'s your favorite Argentine football team?',
    'Have you seen a tango performance?',
    'What do you know about Patagonia?',
    'Do you prefer red wine from Argentina or other regions?',
  ],
  quiz: [
    {
      id: 'argentina-q1',
      question: 'What is the capital of Argentina?',
      options: ['Santiago', 'Buenos Aires', 'Montevideo', 'Lima'],
      correctAnswer: 1,
    },
    {
      id: 'argentina-q2',
      question: 'What traditional dance originated in Argentina?',
      options: ['Salsa', 'Samba', 'Tango', 'Flamenco'],
      correctAnswer: 2,
    },
    {
      id: 'argentina-q3',
      question: 'Which wine is Argentina most famous for?',
      options: ['Malbec', 'Chardonnay', 'Cabernet', 'Pinot Noir'],
      correctAnswer: 0,
    },
    {
      id: 'argentina-q4',
      question: 'What is dulce de leche?',
      options: ['A cheese', 'A sweet milk caramel', 'A type of bread', 'A dance'],
      correctAnswer: 1,
    },
    {
      id: 'argentina-q5',
      question: 'How many times has Argentina won the FIFA World Cup?',
      options: ['2', '3', '4', '5'],
      correctAnswer: 1,
    },
    {
      id: 'argentina-q6',
      question: 'What is the traditional Argentine barbecue called?',
      options: ['Churrasco', 'Asado', 'Parrilla', 'Barbacoa'],
      correctAnswer: 1,
    },
    {
      id: 'argentina-q7',
      question: 'What is the name of the massive glacier in Patagonia?',
      options: ['Upsala Glacier', 'Perito Moreno Glacier', 'Viedma Glacier', 'Grey Glacier'],
      correctAnswer: 1,
    },
    {
      id: 'argentina-q8',
      question: 'Which famous waterfall is located on Argentina\'s border?',
      options: ['Angel Falls', 'Victoria Falls', 'Iguazu Falls', 'Niagara Falls'],
      correctAnswer: 2,
    },
    {
      id: 'argentina-q9',
      question: 'What is the southernmost city in the world located in Argentina?',
      options: ['Ushuaia', 'Bariloche', 'El Calafate', 'Punta Arenas'],
      correctAnswer: 0,
    },
    {
      id: 'argentina-q10',
      question: 'What Argentine cookie is filled with dulce de leche?',
      options: ['Churros', 'Alfajores', 'Empanadas', 'Medialunas'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 26, y: 8 },
};
