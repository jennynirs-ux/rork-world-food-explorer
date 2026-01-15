import { Country } from '@/types';

export const albania: Country = {
  id: 'albania',
  name: 'Albania',
  code: 'AL',
  continent: 'Europe',
  flag: '🇦🇱',
  landscapeImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
  description: 'Albania is a hidden gem on the Adriatic and Ionian coasts, offering stunning beaches, ancient ruins, and mountainous landscapes. Known for its warm hospitality and rich history.',
  quickFacts: [
    { label: 'Capital', value: 'Tirana' },
    { label: 'Population', value: '2.8 million' },
    { label: 'Official Language', value: 'Albanian' },
    { label: 'Currency', value: 'Albanian Lek (ALL)' },
    { label: 'Area', value: '28,748 km²' },
  ],
  facts: [
    'Albania has over 300 days of sunshine per year',
    'Mother Teresa, the Nobel Peace Prize winner, was of Albanian descent',
    'Albania was once one of the world\'s most isolated countries',
    'The country has more than 750,000 bunkers built during communist era',
    'Albanian language is unique and not closely related to any other',
    'Albania has three UNESCO World Heritage Sites',
    'The traditional head nod for "yes" and "no" is opposite to most countries',
    'Albania has stunning Riviera coastline along the Adriatic and Ionian seas',
  ],
  foodCulture: 'Albanian cuisine blends Mediterranean and Balkan influences, featuring fresh vegetables, olive oil, and grilled meats. Meals are social occasions, and hospitality is paramount. Coffee culture is strong, with cafés serving as important social gathering places.',
  history: [
    {
      year: '1000 BC',
      title: 'Illyrian Tribes',
      description: 'The Illyrians inhabited the region, establishing a distinct culture and trading with Greeks and Romans.'
    },
    {
      year: '168 BC - 1912',
      title: 'Foreign Rule',
      description: 'Albania was ruled by Romans, Byzantines, Venetians, and the Ottoman Empire for nearly 2,000 years.'
    },
    {
      year: '1912',
      title: 'Independence',
      description: 'Albania declared independence from the Ottoman Empire, becoming a sovereign nation.'
    },
    {
      year: '1944-1991',
      title: 'Communist Era',
      description: 'Under Enver Hoxha, Albania became one of the world\'s most isolated countries.'
    },
  ],
  innovations: [
    {
      name: 'Albanian Language Preservation',
      year: '15th Century',
      description: 'Albanians maintained their unique language despite centuries of foreign occupation.'
    },
    {
      name: 'Besa Code',
      year: 'Ancient',
      description: 'Traditional Albanian code of honor emphasizing promise-keeping and protecting guests.'
    },
    {
      name: 'Polyphonic Singing',
      year: 'Traditional',
      description: 'UNESCO-recognized Albanian polyphonic music tradition, unique harmonic style.'
    },
    {
      name: 'Mountain Architecture',
      year: 'Traditional',
      description: 'Stone tower houses (kulla) adapted to mountainous terrain.'
    },
  ],
  mustVisit: [
    { name: 'Albanian Riviera', description: 'Pristine beaches with crystal-clear waters along the Ionian coast.' },
    { name: 'Berat', description: 'UNESCO World Heritage city known as the "City of a Thousand Windows."' },
    { name: 'Gjirokastër', description: 'Ottoman-era stone city, birthplace of Albania\'s former dictator and writer Ismail Kadare.' },
    { name: 'Butrint', description: 'Ancient archaeological site with Greek, Roman, and Byzantine ruins.' },
    { name: 'Theth National Park', description: 'Stunning mountain scenery perfect for hiking in the Albanian Alps.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'May-June and September-October for pleasant weather; July-August for beach season.' },
    { item: 'Cash', description: 'Many places don\'t accept cards; ATMs available in cities.' },
    { item: 'Comfortable shoes', description: 'Ancient sites and mountain trails require good footwear.' },
    { item: 'Modest clothing for religious sites', description: 'Cover shoulders and knees when visiting mosques and churches.' },
    { item: 'Basic Albanian phrases', description: 'English not widely spoken outside tourist areas.' },
    { item: 'Sunscreen', description: 'Strong Mediterranean sun, especially in coastal areas.' }
  ],
  mainDish: {
    id: 'albania-main',
    name: 'Tavë Kosi',
    description: 'Albania\'s national dish: baked lamb with rice in tangy yogurt sauce',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Lamb chunks', amount: 800, unit: 'g' },
      { name: 'Rice', amount: 200, unit: 'g' },
      { name: 'Greek yogurt', amount: 500, unit: 'g' },
      { name: 'Eggs', amount: 3, unit: 'large' },
      { name: 'Flour', amount: 2, unit: 'tbsp' },
      { name: 'Butter', amount: 50, unit: 'g' },
      { name: 'Garlic cloves', amount: 3, unit: 'whole' },
      { name: 'White wine', amount: 100, unit: 'ml' },
    ],
    steps: [
      'Brown lamb pieces in butter with garlic',
      'Add wine and enough water to cover, simmer 45 minutes',
      'Cook rice separately until almost done',
      'Remove lamb, reserve 250ml cooking liquid',
      'Mix yogurt, eggs, and flour until smooth',
      'Gradually whisk in warm lamb broth',
      'Layer rice in baking dish, arrange lamb on top',
      'Pour yogurt mixture over everything',
      'Bake at 350°F for 30-40 minutes until golden',
      'Let rest 10 minutes before serving',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=600',
  },
  dessert: {
    id: 'albania-dessert',
    name: 'Ballokume',
    description: 'Traditional Albanian cornmeal cookies with a crumbly texture',
    cookingTime: 40,
    servings: 20,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Cornmeal', amount: 300, unit: 'g' },
      { name: 'Sugar', amount: 200, unit: 'g' },
      { name: 'Butter', amount: 150, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'large' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'Baking powder', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Toast cornmeal in a dry pan until fragrant',
      'Cream butter and sugar until fluffy',
      'Beat in eggs one at a time',
      'Add vanilla extract',
      'Mix in toasted cornmeal and baking powder',
      'Form dough into small balls',
      'Place on baking sheet and flatten slightly',
      'Bake at 350°F for 15-20 minutes',
      'Cookies should be pale golden, not browned',
      'Cool completely before serving',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600',
  },
  drinks: {
    alcoholic: 'Raki (grape brandy), Skrapar wine, Korça beer',
    nonAlcoholic: 'Turkish coffee, Mountain tea, Boza (fermented grain drink), Fresh fruit juices',
  },
  music: [
    'Albanian polyphonic singing',
    'Iso-polyphony (UNESCO heritage)',
    'Traditional folk songs',
    'Çifteli (traditional instrument) music',
    'Modern Albanian pop',
  ],
  decorationIdeas: [
    'Red and black flag colors',
    'Double-headed eagle symbol',
    'Ottoman-era textiles',
    'Copper coffee pots',
    'Traditional Albanian carpets',
  ],
  conversationStarters: [
    'Have you heard of Albanian hospitality traditions?',
    'What do you know about the Albanian Riviera?',
    'Have you tried Balkan cuisine?',
    'Would you like to explore ancient ruins?',
    'What interests you about Albanian history?',
  ],
  quiz: [
    {
      id: 'albania-q1',
      question: 'What is the capital of Albania?',
      options: ['Tirana', 'Durrës', 'Vlorë', 'Shkodër'],
      correctAnswer: 0,
    },
    {
      id: 'albania-q2',
      question: 'What is Albania\'s national dish?',
      options: ['Moussaka', 'Tavë Kosi', 'Baklava', 'Burek'],
      correctAnswer: 1,
    },
    {
      id: 'albania-q3',
      question: 'What famous humanitarian was of Albanian descent?',
      options: ['Mother Teresa', 'Florence Nightingale', 'Clara Barton', 'Jane Addams'],
      correctAnswer: 0,
    },
    {
      id: 'albania-q4',
      question: 'What animal appears on the Albanian flag?',
      options: ['Lion', 'Eagle', 'Wolf', 'Bear'],
      correctAnswer: 1,
    },
    {
      id: 'albania-q5',
      question: 'When did Albania gain independence?',
      options: ['1878', '1912', '1945', '1991'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 52, y: 42 },
};
