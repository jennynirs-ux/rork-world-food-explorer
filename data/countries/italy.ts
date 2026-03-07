import { Country } from '@/types';

export const italy: Country = {
  id: 'italy',
  name: 'Italy',
  code: 'IT',
  continent: 'Europe',
  flag: '🇮🇹',
  landscapeImage: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80',
  description: 'Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins.',
  quickFacts: [
    { label: 'Capital', value: 'Rome' },
    { label: 'Population', value: '60.3 million' },
    { label: 'Official Language', value: 'Italian' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '301,340 km²' },
  ],
  facts: [
    'Italy has more UNESCO World Heritage Sites than any other country in the world',
    'Italian cuisine is one of the most popular in the world, known for pasta, pizza, and gelato',
    'The Italian language is known as the language of music',
    'Italy is home to three active volcanoes: Vesuvius, Etna, and Stromboli',
    'The average Italian consumes 25 kilograms of pasta per year',
    'Italy produces the most wine in the world',
    'The Colosseum in Rome could hold up to 80,000 spectators',
    'Italian families are very close-knit and Sunday lunch is a sacred tradition',
  ],
  foodCulture: 'Italian cuisine is characterized by its simplicity, with many dishes having only 4 to 8 ingredients. Italian cooks rely chiefly on the quality of the ingredients rather than elaborate preparation. Meals are an important part of Italian culture, often lasting several hours with multiple courses.',
  history: [
    {
      year: '753 BC',
      title: 'Founding of Rome',
      description: 'According to legend, Rome was founded by Romulus and Remus. This marked the beginning of one of history\'s greatest civilizations.'
    },
    {
      year: '27 BC',
      title: 'Roman Empire Begins',
      description: 'Augustus became the first Roman Emperor, beginning an era of unprecedented power and cultural influence that would last over 400 years.'
    },
    {
      year: '1400s-1600s',
      title: 'The Renaissance',
      description: 'Italy became the birthplace of the Renaissance, producing legendary artists like Leonardo da Vinci, Michelangelo, and Raphael.'
    },
    {
      year: '1861',
      title: 'Unification of Italy',
      description: 'After centuries of division, the Italian peninsula was unified into a single nation under King Victor Emmanuel II.'
    },
  ],
  innovations: [
    {
      name: 'Radio',
      year: '1895',
      description: 'Guglielmo Marconi developed the first practical radio signaling system, revolutionizing communication.'
    },
    {
      name: 'Telephone',
      year: '1871',
      description: 'Antonio Meucci invented the first telephone, though Alexander Graham Bell received the patent.'
    },
    {
      name: 'Battery',
      year: '1800',
      description: 'Alessandro Volta invented the voltaic pile, the first electric battery.'
    },
    {
      name: 'Piano',
      year: '1700',
      description: 'Bartolomeo Cristofori invented the piano, transforming music composition and performance.'
    },
  ],
  mustVisit: [
    { name: 'The Colosseum', description: 'Ancient amphitheater in Rome, iconic symbol of Imperial Rome and one of the New Seven Wonders of the World.' },
    { name: 'Venice Canals', description: 'Stunning network of waterways with gondolas, historic bridges, and beautiful architecture.' },
    { name: 'Florence Cathedral', description: 'Magnificent Renaissance cathedral with Brunelleschi\'s famous dome dominating the Florence skyline.' },
    { name: 'Amalfi Coast', description: 'Breathtaking coastal region with colorful cliffside towns, crystal-clear waters, and dramatic scenery.' },
    { name: 'Pompeii', description: 'Ancient Roman city preserved by volcanic ash from Mount Vesuvius in 79 AD.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'April-June and September-October offer pleasant weather and fewer crowds.' },
    { item: 'Comfortable walking shoes', description: 'Many Italian cities have cobblestone streets and lots of walking.' },
    { item: 'Modest clothing', description: 'Required for visiting churches and religious sites.' },
    { item: 'Power adapter', description: 'Italy uses Type L plugs with 230V.' },
    { item: 'Cash', description: 'Small shops and restaurants may not accept cards.' },
    { item: 'Phrasebook', description: 'Basic Italian phrases are appreciated, especially outside tourist areas.' }
  ],
  mainDish: {
    id: 'italy-main',
    name: 'Spaghetti Carbonara',
    description: 'A classic Roman pasta dish made with eggs, cheese, pancetta, and black pepper',
    cookingTime: 25,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Spaghetti', amount: 400, unit: 'g' },
      { name: 'Pancetta', amount: 200, unit: 'g' },
      { name: 'Eggs', amount: 4, unit: 'large' },
      { name: 'Pecorino Romano cheese', amount: 100, unit: 'g' },
      { name: 'Black pepper', amount: 2, unit: 'tsp' },
      { name: 'Salt', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Bring a large pot of salted water to boil and cook spaghetti according to package directions',
      'While pasta cooks, cut pancetta into small pieces and fry in a large pan until crispy',
      'In a bowl, whisk together eggs, grated Pecorino Romano, and black pepper',
      'When pasta is ready, reserve 1 cup of pasta water and drain the rest',
      'Add hot pasta to the pan with pancetta, remove from heat',
      'Quickly mix in the egg mixture, adding pasta water gradually to create a creamy sauce',
      'Serve immediately with extra cheese and pepper',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80',
  },
  dessert: {
    id: 'italy-dessert',
    name: 'Tiramisu',
    description: 'A coffee-flavored Italian dessert made with ladyfinger cookies, mascarpone, and cocoa',
    cookingTime: 30,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Ladyfinger cookies', amount: 300, unit: 'g' },
      { name: 'Mascarpone cheese', amount: 500, unit: 'g' },
      { name: 'Eggs', amount: 4, unit: 'large' },
      { name: 'Sugar', amount: 100, unit: 'g' },
      { name: 'Strong espresso', amount: 300, unit: 'ml' },
      { name: 'Cocoa powder', amount: 2, unit: 'tbsp' },
      { name: 'Dark rum or Marsala wine', amount: 2, unit: 'tbsp' },
    ],
    steps: [
      'Brew strong espresso and let it cool. Add rum or Marsala wine',
      'Separate egg whites and yolks',
      'Beat egg yolks with sugar until pale and creamy',
      'Mix mascarpone into the egg yolk mixture until smooth',
      'Beat egg whites to stiff peaks and gently fold into mascarpone mixture',
      'Quickly dip ladyfingers in coffee and arrange in a single layer in a dish',
      'Spread half the mascarpone cream over the ladyfingers',
      'Repeat with another layer of dipped ladyfingers and remaining cream',
      'Dust generously with cocoa powder',
      'Refrigerate for at least 4 hours before serving',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Chianti, Prosecco, Aperol Spritz, Limoncello',
    nonAlcoholic: 'Espresso, Cappuccino, Italian Soda, Fresh-squeezed orange juice',
  },
  music: [
    'O Sole Mio',
    'Con te partirò (Time to Say Goodbye) - Andrea Bocelli',
    'Volare - Domenico Modugno',
    'Bella Ciao',
    'Nessun Dorma - Luciano Pavarotti',
  ],
  decorationIdeas: [
    'Red and white checkered tablecloth',
    'Chianti bottles with candles',
    'Italian flag colors (green, white, red)',
    'Fresh basil plants as centerpieces',
    'Vintage Italian posters or postcards',
  ],
  conversationStarters: [
    'Have you ever visited Italy? What was your favorite city?',
    'What\'s your favorite Italian dish?',
    'Do you prefer pasta or pizza?',
    'Have you tried making homemade pasta?',
    'Which Italian region would you most like to explore?',
  ],
  quiz: [
    {
      id: 'italy-q1',
      question: 'What is the capital of Italy?',
      options: ['Milan', 'Venice', 'Rome', 'Florence'],
      correctAnswer: 2,
    },
    {
      id: 'italy-q2',
      question: 'Which volcano destroyed Pompeii in 79 AD?',
      options: ['Mount Etna', 'Mount Vesuvius', 'Stromboli', 'Mount Vulcano'],
      correctAnswer: 1,
    },
    {
      id: 'italy-q3',
      question: 'What cheese is traditionally used in Carbonara?',
      options: ['Parmesan', 'Mozzarella', 'Pecorino Romano', 'Gorgonzola'],
      correctAnswer: 2,
    },
    {
      id: 'italy-q4',
      question: 'Which Italian city is famous for its canals?',
      options: ['Rome', 'Venice', 'Naples', 'Turin'],
      correctAnswer: 1,
    },
    {
      id: 'italy-q5',
      question: 'What does "al dente" mean in cooking pasta?',
      options: ['Very soft', 'Firm to the bite', 'Overcooked', 'Raw'],
      correctAnswer: 1,
    },
    {
      id: 'italy-q6',
      question: 'Who painted the Sistine Chapel ceiling?',
      options: ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Donatello'],
      correctAnswer: 1,
    },
    {
      id: 'italy-q7',
      question: 'What is tiramisu made with?',
      options: ['Chocolate and cream', 'Ladyfingers and mascarpone', 'Ricotta and berries', 'Panna cotta'],
      correctAnswer: 1,
    },
    {
      id: 'italy-q8',
      question: 'Which Italian city is home to the Colosseum?',
      options: ['Milan', 'Florence', 'Rome', 'Naples'],
      correctAnswer: 2,
    },
    {
      id: 'italy-q9',
      question: 'What shape is traditional Italian pasta called farfalle?',
      options: ['Tube', 'Bow-tie', 'Spiral', 'Sheet'],
      correctAnswer: 1,
    },
    {
      id: 'italy-q10',
      question: 'Which Italian dessert literally means "pick me up"?',
      options: ['Gelato', 'Panna Cotta', 'Tiramisu', 'Cannoli'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 50, y: 45 },
};
