import { Country } from '@/types';

export const latvia: Country = {
  id: 'latvia',
  name: 'Latvia',
  code: 'LV',
  continent: 'Europe',
  flag: '🇱🇻',
  landscapeImage: 'https://images.unsplash.com/photo-1559566076-a9f3e94eac0e?w=800',
  description: 'Latvia is a Baltic country known for its stunning Art Nouveau architecture, pristine nature, rich folklore traditions, and beautiful coastline along the Baltic Sea. Riga, its capital, is a UNESCO World Heritage Site.',
  quickFacts: [
    { label: 'Capital', value: 'Riga' },
    { label: 'Population', value: '1.9 million' },
    { label: 'Official Language', value: 'Latvian' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '64,589 km²' },
  ],
  facts: [
    'Latvia has over 12,000 rivers and 3,000 lakes',
    'Riga has the highest concentration of Art Nouveau architecture in the world',
    'Latvia has more women than men - one of the highest ratios globally',
    'The Latvian flag is one of the oldest in the world (1279)',
    'Latvia is 54% forest - one of the most forested countries in Europe',
    'Latvian Song and Dance Festival is a UNESCO cultural heritage',
    'Latvia has the widest waterfall in Europe (Ventas Rumba)',
    'Ice hockey is the most popular sport',
  ],
  foodCulture: 'Latvian cuisine is hearty and seasonal, featuring rye bread, smoked fish, dairy products, and forest ingredients. Traditional food preservation methods are still widely used, and foraging is a beloved national pastime.',
  history: [
    {
      year: '1201',
      title: 'Riga Founded',
      description: 'German crusaders founded Riga, which became a major trading center in the Baltic region.'
    },
    {
      year: '1918',
      title: 'First Independence',
      description: 'Latvia declared independence after World War I, establishing a democratic republic.'
    },
    {
      year: '1940',
      title: 'Soviet Occupation',
      description: 'Latvia was occupied by the Soviet Union, followed by Nazi Germany, then Soviet Union again.'
    },
    {
      year: '1991',
      title: 'Independence Restored',
      description: 'Latvia regained independence after the collapse of the Soviet Union.'
    },
    {
      year: '2004',
      title: 'EU Membership',
      description: 'Latvia joined the European Union and NATO.'
    },
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'June-August for warm weather, December for Christmas markets' },
    { item: 'Visa', description: 'EU member. Schengen visa rules apply.' },
    { item: 'Transportation', description: 'Good public transport in Riga. Buses connect cities.' },
    { item: 'Language', description: 'Latvian. Russian and English commonly spoken.' },
    { item: 'Safety', description: 'Very safe. Normal city precautions apply.' },
  ],
  mainDish: {
    id: 'latvia-grey-peas',
    name: 'Grey Peas with Bacon',
    description: 'Traditional Latvian dish of boiled grey peas served with fried bacon and onions',
    cookingTime: 120,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Grey peas (dried)', amount: 400, unit: 'g' },
      { name: 'Bacon', amount: 300, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'large' },
      { name: 'Butter', amount: 50, unit: 'g' },
      { name: 'Sour cream', amount: 200, unit: 'ml' },
      { name: 'Bay leaves', amount: 2, unit: 'pieces' },
      { name: 'Salt and pepper', amount: 1, unit: 'to taste' },
    ],
    steps: [
      'Soak grey peas overnight in cold water',
      'Drain and rinse peas',
      'Boil peas with bay leaves for 1.5-2 hours until soft',
      'Dice bacon and fry until crispy',
      'Slice onions and sauté in butter until golden',
      'Drain peas and season with salt and pepper',
      'Serve peas topped with crispy bacon and onions',
      'Add a dollop of sour cream on top',
      'Traditionally served with dark rye bread',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=600',
  },
  drinks: {
    alcoholic: 'Riga Black Balsam (herbal liqueur), Latvian beer, Kvass',
    nonAlcoholic: 'Birch sap, Berry juices, Herbal teas',
  },
  music: ['Latvian folk songs (dainas)', 'Choral music', 'Traditional kokle (zither) music', 'Baltic folk'],
  decorationIdeas: [
    'Maroon and white (Latvian flag colors)',
    'Amber decorations',
    'Traditional woven belts and textiles',
    'Oak leaf motifs',
    'Linen tablecloths',
    'Wildflower arrangements',
  ],
  conversationStarters: [
    'Have you been to Riga? The Art Nouveau architecture is stunning!',
    'Would you try Riga Black Balsam? It\'s an acquired taste!',
    'Latvia\'s forests are so peaceful - do you enjoy forest walks?',
    'The Song Festival brings together thousands of singers - amazing!',
  ],
  quiz: [
    {
      id: 'latvia-q1',
      question: 'What is Latvia\'s capital city?',
      options: ['Vilnius', 'Tallinn', 'Riga', 'Helsinki'],
      correctAnswer: 2,
    },
    {
      id: 'latvia-q2',
      question: 'What percentage of Latvia is covered by forests?',
      options: ['30%', '40%', '54%', '65%'],
      correctAnswer: 2,
    },
    {
      id: 'latvia-q3',
      question: 'What is Riga Black Balsam?',
      options: ['A type of bread', 'A herbal liqueur', 'A cheese', 'A fish dish'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 53, y: 57 },
};