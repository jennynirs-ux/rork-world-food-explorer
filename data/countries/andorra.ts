import { Country } from '@/types';

export const andorra: Country = {
  id: 'andorra',
  name: 'Andorra',
  code: 'AD',
  continent: 'Europe',
  flag: '🇦🇩',
  landscapeImage: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80',
  description:
    'Andorra is a tiny, independent principality nestled between France and Spain in the Pyrenees mountains. Known for ski resorts and tax-haven status.',
  quickFacts: [
    { label: 'Capital', value: 'Andorra la Vella' },
    { label: 'Population', value: '77,000' },
    { label: 'Official Language', value: 'Catalan' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '468 km²' },
  ],
  facts: [
    'Andorra is one of the smallest countries in Europe',
    'It has no airport or railway station',
    'Andorra is among the countries with the highest life expectancy in the world',
    'The country has been ruled by two co-princes since 1278',
    'Over 10 million tourists visit annually, despite its tiny size',
  ],
  foodCulture:
    'Andorran cuisine reflects Catalan traditions with mountain influences. Hearty dishes feature wild game, mushrooms, and mountain herbs. Meals are accompanied by local wines and cheeses.',

  history: [
    {
      year: '9th Century',
      title: 'Foundation',
      description:
        'Charlemagne granted a charter to Andorran people in recognition of their support against the Moors.',
    },
    {
      year: '1278',
      title: 'Co-Principality Established',
      description:
        'The co-principality system was established, with two co-princes sharing sovereignty—a unique governance structure that continues today.',
    },
    {
      year: '1933',
      title: 'Universal Male Suffrage',
      description:
        'Andorra introduced voting rights for men, beginning its slow transition toward modern democracy.',
    },
    {
      year: '1993',
      title: 'Modern Constitution',
      description:
        'Andorra adopted its first written constitution, becoming a parliamentary democracy while maintaining its traditional co-princes.',
    },
  ],
  innovations: [
    {
      name: 'Co-Principality System',
      year: '1278',
      description:
        'A unique governance model with two co-princes (the Bishop of Urgell and the President of France) that has survived for over 700 years.',
    },
    {
      name: 'Tax-Free Commerce',
      year: '20th Century',
      description:
        'Andorra developed a tax-haven economy that attracted international commerce and tourism.',
    },
    {
      name: 'Mountain Resilience',
      year: 'Traditional',
      description:
        'Andorrans developed unique architectural and agricultural techniques adapted to steep mountain terrain.',
    },
  ],
  mustVisit: [
    { name: 'Grandvalira', description: 'One of the largest ski areas in the Pyrenees with over 200 km of slopes.' },
    { name: 'Caldea Spa', description: 'Europe\'s largest mountain thermal spa complex with stunning views.' },
    { name: 'Sant Joan de Caselles', description: 'Beautiful 11th-century Romanesque church with original frescoes.' },
    { name: 'Coma Pedrosa', description: 'Andorra\'s highest peak offering challenging hikes and panoramic views.' },
    { name: 'Casa de la Vall', description: 'Historic parliament building dating from 1580 in Andorra la Vella.' },
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'December-March for skiing; June-September for hiking and mountain activities.' },
    { item: 'Getting there', description: 'No airport or train—access via bus or car from Barcelona (3 hours) or Toulouse (2.5 hours).' },
    { item: 'Shopping', description: 'Take advantage of duty-free shopping for electronics, perfumes, and alcohol.' },
    { item: 'Language', description: 'Catalan is official but Spanish and French are widely spoken; English in tourist areas.' },
    { item: 'Currency', description: 'Euro is used despite not being in the EU.' },
    { item: 'Layers', description: 'Mountain weather changes quickly—bring warm clothing even in summer.' },
  ],

  mainDish: {
    id: 'andorra-main',
    name: 'Escudella (Escudella i Carn d’Olla)',
    description:
      'Andorra’s most iconic winter comfort food: a slow-simmered meat-and-vegetable stew, traditionally served in two parts (broth with pasta first, then the meats and vegetables).',
    cookingTime: 150,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      // Proteins
      { name: 'Pork ribs', amount: 400, unit: 'g' },
      { name: 'Chicken pieces (bone-in)', amount: 400, unit: 'g' },
      { name: 'Smoked bacon or pancetta', amount: 150, unit: 'g' },
      { name: 'Chorizo (or other smoked sausage)', amount: 200, unit: 'g' },

      // Legumes + veg
      { name: 'Dried white beans', amount: 200, unit: 'g' },
      { name: 'Potatoes', amount: 500, unit: 'g' }, // ~3 medium
      { name: 'Cabbage (green or savoy)', amount: 300, unit: 'g' },
      { name: 'Carrots', amount: 2, unit: 'pieces' },
      { name: 'Leek', amount: 1, unit: 'piece' },
      { name: 'Onion', amount: 1, unit: 'piece' },
      { name: 'Garlic cloves', amount: 4, unit: 'cloves' },

      // Pasta + seasoning
      { name: 'Large pasta shells (or short pasta)', amount: 180, unit: 'g' },
      { name: 'Bay leaf', amount: 2, unit: 'pieces' },
      { name: 'Black pepper', amount: 1, unit: 'tsp' },
      { name: 'Salt', amount: 1.5, unit: 'tsp' }, // adjust at end
      { name: 'Olive oil', amount: 1, unit: 'tbsp' },

      // Liquid
      { name: 'Water', amount: 3000, unit: 'ml' },
    ],
    steps: [
      // Beans
      'The night before: Soak the dried white beans in plenty of cold water (at least 3x their volume) for 10–12 hours. Drain and rinse.',

      // Start broth
      'Build the stew base: In a large heavy pot (6–8 liters), add pork ribs, chicken, bacon/pancetta, bay leaves, pepper, and 3,000 ml water. Bring to a boil over high heat.',
      'Skim: As foam rises, skim with a spoon for 5–8 minutes until the broth looks cleaner.',
      'Simmer: Reduce heat to low so it gently bubbles. Cover partially and simmer for 45 minutes.',

      // Add beans and sturdy veg
      'Add beans: Stir in the soaked beans. Simmer (partially covered) for 40 minutes.',
      'Add aromatics: Add onion (halved), leek (in 2–3 pieces), carrots (chunked), and whole garlic cloves. Simmer 20 minutes.',
      'Add sausage: Add the chorizo/smoked sausage. Simmer 15 minutes.',

      // Add potatoes + cabbage
      'Add potatoes: Add potatoes (peeled, cut into large chunks). Simmer 15 minutes.',
      'Add cabbage: Add cabbage (roughly chopped). Simmer 15–20 minutes until potatoes are tender and beans are fully cooked.',

      // Season
      'Season carefully: Taste the broth and add salt gradually. Because bacon/sausage can be salty, start with 1 tsp and adjust to taste.',

      // Traditional serving: broth + pasta
      'Serve in two parts (traditional): Remove meats and vegetables to a large platter and keep warm. Strain (or ladle) about 1.2–1.5 liters of broth into a separate pot.',
      'Cook pasta in broth: Bring the reserved broth to a boil. Add pasta shells and cook until al dente (usually 10–12 minutes). If needed, add a splash of water so there’s enough liquid.',
      'First course: Serve the pasta-in-broth as a soup.',
      'Second course: Serve the meats and vegetables on a platter with a drizzle of olive oil, and extra broth on the side if desired.',

      // Optional shortcut (one-pot serving)
      'Optional shortcut: If you prefer a simpler one-bowl meal, skip the “two-part” serving and just cook the pasta directly in the main pot for the final 10–12 minutes (add 200–300 ml extra water if the pot is thick).',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80',
  },

  dessert: {
    id: 'andorra-dessert',
    name: 'Crema Catalana',
    description: 'Catalan-style crème brûlée with cinnamon and lemon zest, caramelized sugar on top',
    cookingTime: 35,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Whole milk', amount: 1000, unit: 'ml' },
      { name: 'Egg yolks', amount: 8, unit: 'large' },
      { name: 'Sugar', amount: 150, unit: 'g' },
      { name: 'Cornstarch', amount: 30, unit: 'g' },
      { name: 'Cinnamon stick', amount: 1, unit: 'whole' },
      { name: 'Lemon zest', amount: 1, unit: 'lemon' },
      { name: 'Brown sugar for caramelizing', amount: 60, unit: 'g' },
    ],
    steps: [
      'Heat milk with cinnamon stick and lemon zest until warm. Remove from heat, cover, infuse 20 minutes.',
      'Strain milk to remove cinnamon and zest.',
      'Whisk egg yolks with sugar until pale and thick.',
      'Add cornstarch and whisk until smooth.',
      'Slowly pour warm milk into egg mixture, whisking constantly.',
      'Return to pan and cook over medium-low heat, stirring constantly until thickened (about 8 minutes).',
      'Pour into shallow ceramic dishes (cazuelas).',
      'Cool to room temperature, then refrigerate at least 3 hours.',
      'Before serving, sprinkle thin layer of brown sugar on top.',
      'Caramelize with kitchen torch or under hot broiler until golden and crispy.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517427677506-ade074eb1b66?w=800&q=80',
  },

  drinks: {
    alcoholic: 'Local wines, Ratafia (herbal liqueur)',
    nonAlcoholic: 'Mountain spring water, Hot chocolate',
  },
  music: ['Traditional Catalan folk music', 'Sardana dances', 'Mountain shepherd songs'],
  decorationIdeas: [
    'Mountain landscape imagery',
    'Red and yellow colors from flag',
    'Alpine flowers',
    'Ski equipment as decor',
  ],
  conversationStarters: [
    'Have you been skiing in the Pyrenees?',
    'What do you know about micro-nations?',
    'Do you enjoy mountain hiking?',
  ],

  // Fixed: expanded to EXACTLY 10 questions ✅
  quiz: [
    {
      id: 'andorra-q1',
      question: 'What is the capital of Andorra?',
      options: ['Escaldes', 'Encamp', 'Andorra la Vella', 'La Massana'],
      correctAnswer: 2,
    },
    {
      id: 'andorra-q2',
      question: 'Between which two countries is Andorra located?',
      options: ['France and Spain', 'Spain and Portugal', 'France and Italy', 'Italy and Switzerland'],
      correctAnswer: 0,
    },
    {
      id: 'andorra-q3',
      question: 'In which mountain range is Andorra located?',
      options: ['Alps', 'Pyrenees', 'Carpathians', 'Apennines'],
      correctAnswer: 1,
    },
    {
      id: 'andorra-q4',
      question: 'What is Andorra’s official language?',
      options: ['Spanish', 'French', 'Catalan', 'Portuguese'],
      correctAnswer: 2,
    },
    {
      id: 'andorra-q5',
      question: 'Which currency is used in Andorra?',
      options: ['Andorran franc', 'Euro (€)', 'Spanish peseta', 'US dollar'],
      correctAnswer: 1,
    },
    {
      id: 'andorra-q6',
      question: 'Which statement about Andorra’s transport links is true?',
      options: [
        'It has a major international airport',
        'It has a national railway network',
        'It has no airport or railway station within the country',
        'It has a large seaport',
      ],
      correctAnswer: 2,
    },
    {
      id: 'andorra-q7',
      question: 'Andorra is especially known for which type of tourism?',
      options: ['Safari tourism', 'Skiing and mountain sports', 'Desert trekking', 'Rainforest expeditions'],
      correctAnswer: 1,
    },
    {
      id: 'andorra-q8',
      question: 'What traditional stew is commonly associated with Andorra?',
      options: ['Bouillabaisse', 'Escudella', 'Borscht', 'Pho'],
      correctAnswer: 1,
    },
    {
      id: 'andorra-q9',
      question: 'Andorra has been ruled by two co-princes since which year (as stated in the facts above)?',
      options: ['1066', '1278', '1492', '1816'],
      correctAnswer: 1,
    },
    {
      id: 'andorra-q10',
      question: 'Approximately how large is Andorra (area)?',
      options: ['468 km²', '4,680 km²', '46,800 km²', '468,000 km²'],
      correctAnswer: 0,
    },
  ],

  coordinates: { x: 47, y: 43 },
};
