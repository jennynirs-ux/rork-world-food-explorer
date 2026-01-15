import { Country } from '@/types';

export const turkey: Country = {
  id: 'turkey',
  name: 'Turkey',
  code: 'TR',
  continent: 'Asia/Europe',
  flag: '🇹🇷',
  landscapeImage: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800',
  description: 'Turkey is a transcontinental country bridging Europe and Asia, with a rich history spanning ancient civilizations. Known for its Byzantine and Ottoman heritage, stunning landscapes, and delicious cuisine.',
  quickFacts: [
    { label: 'Capital', value: 'Ankara' },
    { label: 'Population', value: '85 million' },
    { label: 'Official Language', value: 'Turkish' },
    { label: 'Currency', value: 'Turkish Lira (₺)' },
    { label: 'Area', value: '783,562 km²' },
  ],
  facts: [
    'Istanbul is the only city in the world located on two continents',
    'Turkey is home to the ancient city of Troy',
    'Turkish coffee fortune telling is a cultural tradition',
    'The country has 18 UNESCO World Heritage Sites',
    'Tulips originally came from Turkey, not the Netherlands',
    'Santa Claus was born in Turkey (ancient Myra)',
    'The Grand Bazaar in Istanbul is one of the oldest covered markets in the world',
    'Turkey is the world\'s largest producer of hazelnuts',
  ],
  foodCulture: 'Turkish cuisine is one of the world\'s most diverse, influenced by Ottoman palace kitchens and regional traditions. Mezze (small plates), kebabs, and baklava are iconic. Meals are social affairs, often accompanied by Turkish tea or coffee.',
  history: [
    {
      year: '330 AD',
      title: 'Constantinople Founded',
      description: 'Emperor Constantine established Constantinople (modern Istanbul) as the capital of the Byzantine Empire.'
    },
    {
      year: '1299',
      title: 'Ottoman Empire Begins',
      description: 'Osman I founded the Ottoman Empire, which would grow to control vast territories across three continents.'
    },
    {
      year: '1453',
      title: 'Fall of Constantinople',
      description: 'Ottoman Sultan Mehmed II conquered Constantinople, ending the Byzantine Empire.'
    },
    {
      year: '1923',
      title: 'Republic Founded',
      description: 'Mustafa Kemal Atatürk established the modern Republic of Turkey after WWI.'
    },
  ],
  innovations: [
    {
      name: 'Turkish Coffee',
      year: '15th century',
      description: 'Unique brewing method creating thick, aromatic coffee that became a UNESCO cultural heritage.'
    },
    {
      name: 'Turkish Bath (Hamam)',
      year: 'Ancient',
      description: 'Traditional steam bathing ritual combining cleansing, relaxation, and social interaction.'
    },
    {
      name: 'Marbling Art (Ebru)',
      year: '13th century',
      description: 'Traditional paper marbling technique creating intricate designs on water.'
    },
  ],
  mustVisit: [
    { name: 'Hagia Sophia', description: 'Magnificent Byzantine basilica turned mosque, architectural marvel in Istanbul.' },
    { name: 'Cappadocia', description: 'Surreal landscape with fairy chimneys, cave hotels, and hot air balloon rides.' },
    { name: 'Pamukkale', description: 'Cotton castle terraces of white mineral pools and ancient Roman spa city of Hierapolis.' },
    { name: 'Ephesus', description: 'Best-preserved ancient Greek city with the Library of Celsus and Great Theater.' },
    { name: 'Blue Mosque', description: 'Stunning 17th-century Ottoman mosque with six minarets and blue İznik tiles.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'April-May and September-October for pleasant weather nationwide.' },
    { item: 'Modest clothing', description: 'Cover shoulders and knees for mosque visits.' },
    { item: 'Comfortable shoes', description: 'Ancient sites and Istanbul\'s hills require lots of walking.' },
    { item: 'Turkish Lira cash', description: 'Many small shops and markets prefer cash.' },
    { item: 'Istanbul Museum Pass', description: 'Saves money and time at major attractions.' },
    { item: 'Adaptor plug (Type C/F)', description: 'Turkey uses European-style plugs with 220V.' }
  ],
  mainDish: {
    id: 'turkey-main',
    name: 'İskender Kebab',
    description: 'Thinly sliced döner kebab over pita bread, topped with tomato sauce, melted butter, and yogurt',
    cookingTime: 90,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Lamb or beef', amount: 800, unit: 'g' },
      { name: 'Yogurt', amount: 400, unit: 'g' },
      { name: 'Pita bread', amount: 4, unit: 'pieces' },
      { name: 'Tomatoes', amount: 4, unit: 'large' },
      { name: 'Butter', amount: 100, unit: 'g' },
      { name: 'Garlic', amount: 3, unit: 'cloves' },
      { name: 'Paprika', amount: 2, unit: 'tsp' },
      { name: 'Cumin', amount: 1, unit: 'tsp' },
      { name: 'Salt and pepper', amount: 1, unit: 'to taste' },
    ],
    steps: [
      'Marinate meat with spices, garlic, and olive oil for 2 hours',
      'Grill or pan-fry meat until well-cooked, slice thinly',
      'Make tomato sauce: blend tomatoes with garlic, cook until thick',
      'Cut pita bread into squares and arrange on plates',
      'Layer sliced meat over pita',
      'Top with tomato sauce',
      'Melt butter with paprika until sizzling',
      'Drizzle hot butter over meat',
      'Serve with yogurt on the side',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600',
  },
  dessert: {
    id: 'turkey-dessert',
    name: 'Baklava',
    description: 'Layers of flaky phyllo pastry filled with chopped nuts and sweetened with honey syrup',
    cookingTime: 75,
    servings: 24,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Phyllo dough', amount: 500, unit: 'g' },
      { name: 'Walnuts or pistachios', amount: 400, unit: 'g' },
      { name: 'Butter melted', amount: 250, unit: 'g' },
      { name: 'Sugar', amount: 300, unit: 'g' },
      { name: 'Water', amount: 250, unit: 'ml' },
      { name: 'Honey', amount: 100, unit: 'g' },
      { name: 'Lemon juice', amount: 2, unit: 'tbsp' },
      { name: 'Cinnamon', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Chop nuts and mix with cinnamon',
      'Brush baking pan with melted butter',
      'Layer 10 sheets of phyllo, brushing each with butter',
      'Spread a layer of nut mixture',
      'Add 5 more phyllo sheets with butter between each',
      'Repeat nut and phyllo layers until done, ending with phyllo',
      'Cut into diamond shapes before baking',
      'Bake at 180°C for 45 minutes until golden',
      'Make syrup: boil sugar, water, honey, and lemon juice',
      'Pour hot syrup over baked baklava',
      'Let cool completely before serving',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600',
  },
  drinks: {
    alcoholic: 'Rakı (anise spirit), Efes beer, Turkish wine',
    nonAlcoholic: 'Turkish tea (çay), Turkish coffee, Ayran (yogurt drink), Şalgam (turnip juice)',
  },
  music: [
    'Traditional Turkish folk music',
    'Ottoman classical music',
    'Tarkan - modern Turkish pop',
    'Whirling Dervish ceremonial music',
  ],
  decorationIdeas: [
    'Turkish lanterns and lamps',
    'Red and white colors (Turkish flag)',
    'İznik tiles and ceramics',
    'Turkish carpets and kilims',
    'Evil eye (Nazar) amulets',
  ],
  conversationStarters: [
    'Have you visited Istanbul?',
    'What\'s your favorite Turkish dish?',
    'Have you experienced a Turkish bath (hamam)?',
    'Would you like to ride a hot air balloon in Cappadocia?',
    'Have you tried Turkish coffee fortune telling?',
  ],
  quiz: [
    {
      id: 'turkey-q1',
      question: 'What is the capital of Turkey?',
      options: ['Istanbul', 'Ankara', 'Izmir', 'Antalya'],
      correctAnswer: 1,
    },
    {
      id: 'turkey-q2',
      question: 'Which city is located on two continents?',
      options: ['Ankara', 'Moscow', 'Istanbul', 'Athens'],
      correctAnswer: 2,
    },
    {
      id: 'turkey-q3',
      question: 'What is the traditional Turkish anise-flavored spirit?',
      options: ['Vodka', 'Rakı', 'Ouzo', 'Sake'],
      correctAnswer: 1,
    },
    {
      id: 'turkey-q4',
      question: 'What famous sweet pastry comes from Turkey?',
      options: ['Croissant', 'Strudel', 'Baklava', 'Tiramisu'],
      correctAnswer: 2,
    },
    {
      id: 'turkey-q5',
      question: 'Which flowers originally came from Turkey?',
      options: ['Roses', 'Tulips', 'Sunflowers', 'Daisies'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 54, y: 42 },
};