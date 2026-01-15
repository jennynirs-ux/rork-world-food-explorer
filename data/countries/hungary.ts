import { Country } from '@/types';

export const hungary: Country = {
  id: 'hungary',
  name: 'Hungary',
  code: 'HU',
  continent: 'Europe',
  flag: '🇭🇺',
  landscapeImage: 'https://images.unsplash.com/photo-1541423647933-ac0638a6f0b3?w=800',
  description: 'Hungary is a landlocked country in Central Europe known for its rich history, thermal baths, unique language, and vibrant capital Budapest. The Danube River divides the city into historic Buda and modern Pest.',
  quickFacts: [
    { label: 'Capital', value: 'Budapest' },
    { label: 'Population', value: '9.7 million' },
    { label: 'Official Language', value: 'Hungarian' },
    { label: 'Currency', value: 'Hungarian Forint (Ft)' },
    { label: 'Area', value: '93,030 km²' },
  ],
  facts: [
    'Hungarian language is unique - not related to any neighboring languages',
    'Hungary has more thermal springs than any other country in the world',
    'The Rubik\'s Cube was invented by Hungarian Ernő Rubik',
    'Hungary has won more Olympic medals per capita than any other nation',
    'Budapest is often called the "Pearl of the Danube"',
    'Hungarians write their names with surname first, given name second',
    'Hungary has 8 UNESCO World Heritage Sites',
    'The Hungarian Parliament Building is the third largest in the world',
  ],
  foodCulture: 'Hungarian cuisine is rich, hearty, and heavily seasoned with paprika, the national spice. Goulash is world-famous, but Hungarian food offers much more. Meals are generous, and Hungarians take great pride in their culinary traditions and hospitality.',
  history: [
    {
      year: '896 AD',
      title: 'Magyar Conquest',
      description: 'Magyar tribes led by Árpád conquered the Carpathian Basin, establishing the Hungarian nation.'
    },
    {
      year: '1000 AD',
      title: 'Kingdom of Hungary',
      description: 'Stephen I became the first King of Hungary and converted the nation to Christianity.'
    },
    {
      year: '1526',
      title: 'Ottoman Invasion',
      description: 'The Battle of Mohács led to Ottoman conquest of much of Hungary for 150 years.'
    },
    {
      year: '1867',
      title: 'Austro-Hungarian Compromise',
      description: 'Creation of the Austro-Hungarian Empire with Hungary as an equal partner.'
    },
    {
      year: '1956',
      title: 'Hungarian Revolution',
      description: 'A nationwide revolt against Soviet rule, brutally suppressed but remembered as a symbol of resistance.'
    },
    {
      year: '1989',
      title: 'Democratic Transition',
      description: 'Hungary peacefully transitioned from communism to democracy.'
    },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Schengen visa rules apply. EU citizens and many others can visit visa-free.' },
    { item: 'Best time to visit', description: 'April to June and September to October for pleasant weather' },
    { item: 'Transportation', description: 'Excellent public transport in Budapest. Trains connect major cities.' },
    { item: 'Language', description: 'Hungarian. English spoken in Budapest and tourist areas.' },
    { item: 'Safety', description: 'Generally safe. Watch for pickpockets in tourist areas.' },
  ],
  mainDish: {
    id: 'hungary-goulash',
    name: 'Gulyás (Goulash)',
    description: 'Hungary\'s national dish - a hearty soup-stew made with beef, vegetables, and lots of paprika. Originally a shepherd\'s dish, now beloved worldwide.',
    cookingTime: 150,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Beef chuck', amount: 800, unit: 'g' },
      { name: 'Onions', amount: 3, unit: 'pieces' },
      { name: 'Hungarian paprika', amount: 3, unit: 'tbsp' },
      { name: 'Potatoes', amount: 4, unit: 'pieces' },
      { name: 'Carrots', amount: 2, unit: 'pieces' },
      { name: 'Bell peppers', amount: 2, unit: 'pieces' },
      { name: 'Tomatoes', amount: 2, unit: 'pieces' },
      { name: 'Garlic', amount: 4, unit: 'cloves' },
      { name: 'Caraway seeds', amount: 1, unit: 'tsp' },
      { name: 'Bay leaves', amount: 2, unit: 'pieces' },
      { name: 'Beef broth', amount: 2, unit: 'liters' },
    ],
    steps: [
      'Cut beef into 2-3 cm cubes',
      'Finely chop onions and sauté in oil until golden',
      'Remove from heat, add paprika, stir quickly (paprika burns easily)',
      'Add beef, garlic, caraway seeds, and bay leaves',
      'Brown meat, then add water to cover',
      'Simmer covered for 1 hour until meat is tender',
      'Add diced potatoes, carrots, and peppers',
      'Add chopped tomatoes and enough broth for soup consistency',
      'Simmer 30 more minutes until vegetables are tender',
      'Season with salt and pepper to taste',
      'Serve hot with fresh bread',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=600',
  },
  drinks: {
    alcoholic: 'Tokaji wine (sweet dessert wine), Pálinka (fruit brandy), Hungarian beer',
    nonAlcoholic: 'Mineral water, Fruit syrups (szörp), Coffee',
  },
  music: ['Hungarian folk music', 'Gypsy music', 'Franz Liszt compositions', 'Csárdás dance music'],
  decorationIdeas: [
    'Red, white, and green (Hungarian flag colors)',
    'Paprika strings and peppers',
    'Traditional embroidered tablecloths',
    'Hungarian pottery with folk patterns',
    'Sunflowers',
    'Danube and bridge motifs',
  ],
  conversationStarters: [
    'Have you been to Budapest\'s thermal baths? They\'re incredible!',
    'Would you try authentic Hungarian goulash? It\'s different from what most people think!',
    'Did you know the Rubik\'s Cube is Hungarian?',
    'Hungarian is such a unique language - have you heard it spoken?',
  ],
  quiz: [
    {
      id: 'hungary-q1',
      question: 'What is Hungary\'s capital city?',
      options: ['Bucharest', 'Budapest', 'Prague', 'Vienna'],
      correctAnswer: 1,
    },
    {
      id: 'hungary-q2',
      question: 'What spice is essential in Hungarian cuisine?',
      options: ['Saffron', 'Cumin', 'Paprika', 'Turmeric'],
      correctAnswer: 2,
    },
    {
      id: 'hungary-q3',
      question: 'What famous puzzle was invented in Hungary?',
      options: ['Sudoku', 'Rubik\'s Cube', 'Crossword', 'Jigsaw puzzle'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 52, y: 47 },
};
