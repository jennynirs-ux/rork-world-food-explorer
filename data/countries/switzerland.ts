import { Country } from '@/types';

export const switzerland: Country = {
  id: 'switzerland',
  name: 'Switzerland',
  code: 'CH',
  continent: 'Europe',
  flag: '🇨🇭',
  landscapeImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80',
  description:
    'Switzerland is a mountainous Central European country known for its stunning Alps, pristine lakes, charming villages, and world-famous chocolate and cheese. Home to numerous international organizations, it has maintained neutrality for centuries.',
  quickFacts: [
    { label: 'Capital', value: 'Bern' },
    { label: 'Population', value: '8.7 million' },
    { label: 'Official Languages', value: 'German, French, Italian, Romansh' },
    { label: 'Currency', value: 'Swiss Franc (CHF)' },
    { label: 'Area', value: '41,285 km²' },
  ],
  facts: [
    'Switzerland has four official languages and 26 cantons',
    'The country has not been involved in a war since 1815',
    'Swiss watches are world-renowned for precision',
    'Switzerland produces around 180,000 tons of chocolate annually',
    'The Swiss train system is among the most efficient in the world',
    'Switzerland has 13 UNESCO World Heritage Sites',
    'The Swiss invented the Swiss Army knife and Velcro',
    'Geneva hosts more international organizations than any other city',
  ],
  foodCulture:
    'Swiss cuisine is hearty and comforting, varying by region. Cheese and chocolate are national treasures. Fondue and raclette are iconic social dishes, especially popular during winter.',

  history: [
    {
      year: '1291',
      title: 'Swiss Confederation Founded',
      description:
        'An alliance of three cantons laid the foundation for modern Switzerland.',
    },
    {
      year: '1648',
      title: 'Independence Recognized',
      description:
        'Swiss independence was formally recognized by the Peace of Westphalia.',
    },
    {
      year: '1815',
      title: 'Permanent Neutrality',
      description:
        'Switzerland’s neutrality was internationally recognized.',
    },
    {
      year: '1848',
      title: 'Federal Constitution',
      description: 'A modern federal state was established.',
    },
    {
      year: '1971',
      title: 'Women’s Suffrage',
      description:
        'Swiss women gained the right to vote at the federal level.',
    },
  ],

  innovations: [
    {
      name: 'CERN & the Web',
      year: '1989',
      description:
        'At CERN near Geneva, Tim Berners-Lee proposed the World Wide Web, which later transformed global communication.',
    },
    {
      name: 'Swiss Engineering & Precision',
      year: '19th–20th Century',
      description:
        'Switzerland became globally known for precision manufacturing, especially watchmaking and advanced machinery.',
    },
    {
      name: 'Pharmaceutical & Life Sciences',
      year: '20th Century',
      description:
        'Major Swiss companies helped drive innovations in medicine, diagnostics, and global healthcare.',
    },
    {
      name: 'Direct Democracy',
      year: '19th Century',
      description:
        'Switzerland developed a strong tradition of referendums and citizen participation, shaping modern democratic governance.',
    },
  ],

  mustVisit: [
    {
      name: 'Jungfraujoch',
      description:
        'Iconic “Top of Europe” viewpoint with glaciers and dramatic Alpine scenery.',
    },
    {
      name: 'Zermatt & the Matterhorn',
      description:
        'Car-free mountain village and one of the world’s most famous peaks.',
    },
    {
      name: 'Lucerne & Chapel Bridge',
      description:
        'Charming old town on a lake, surrounded by mountains and classic Swiss views.',
    },
    {
      name: 'Bern Old Town',
      description:
        'UNESCO-listed medieval city center with arcades, fountains, and the Zytglogge clocktower.',
    },
    {
      name: 'Lake Geneva (Lac Léman)',
      description:
        'Beautiful lakeside towns, vineyards, and views of the Alps near Geneva and Lausanne.',
    },
  ],

  travelEssentials: [
    { item: 'Visa', description: 'Schengen rules apply for most visitors.' },
    {
      item: 'Best time to visit',
      description: 'Winter for skiing, summer for hiking and lakes.',
    },
    {
      item: 'Transport',
      description: 'Trains are punctual, clean, and scenic; buy day passes when touring.',
    },
    {
      item: 'Languages',
      description: 'Language varies by region; English is widely spoken in tourist areas.',
    },
    { item: 'Safety', description: 'One of the safest countries globally.' },
  ],

  mainDish: {
    id: 'switzerland-fondue',
    name: 'Cheese Fondue',
    description:
      'A communal dish of melted cheese enjoyed by dipping bread into the pot.',
    cookingTime: 30,
    servings: 4,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Gruyère cheese', amount: 200, unit: 'g' },
      { name: 'Emmental cheese', amount: 200, unit: 'g' },
      { name: 'Dry white wine', amount: 300, unit: 'ml' },
      { name: 'Garlic', amount: 1, unit: 'clove' },
      { name: 'Cornstarch', amount: 2, unit: 'tbsp' },
      { name: 'Kirsch', amount: 2, unit: 'tbsp' },
      { name: 'Nutmeg', amount: 0.25, unit: 'tsp' },
      { name: 'Black pepper', amount: 0.5, unit: 'tsp' },
      { name: 'Crusty bread', amount: 400, unit: 'g' },
    ],
    steps: [
      'Cut bread into cubes',
      'Grate cheeses and mix with cornstarch',
      'Rub fondue pot with garlic',
      'Heat wine until simmering',
      'Add cheese gradually while stirring',
      'Stir in kirsch',
      'Season with nutmeg and pepper',
      'Keep warm and serve immediately',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=800&q=80',
  },

  dessert: {
    id: 'switzerland-dessert',
    name: 'Zuger Kirschtorte',
    description:
      'A classic Swiss layer cake from Zug made with airy nut meringue layers, buttercream, and a touch of kirsch (cherry spirit).',
    cookingTime: 70,
    servings: 10,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Egg whites', amount: 5, unit: 'large' },
      { name: 'Sugar', amount: 220, unit: 'g' },
      { name: 'Ground hazelnuts (or almonds)', amount: 180, unit: 'g' },
      { name: 'All-purpose flour', amount: 60, unit: 'g' },
      { name: 'Butter (soft)', amount: 250, unit: 'g' },
      { name: 'Powdered sugar', amount: 180, unit: 'g' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'Kirsch (optional)', amount: 3, unit: 'tbsp' },
      { name: 'Milk', amount: 3, unit: 'tbsp' },
      { name: 'Sliced almonds (for decoration)', amount: 50, unit: 'g' },
    ],
    steps: [
      'Preheat oven to 170°C and line two round cake pans with parchment.',
      'Whip egg whites to soft peaks, then gradually add sugar and whip to glossy stiff peaks.',
      'Fold in ground nuts and flour gently until combined.',
      'Spread batter into pans and bake 25–30 minutes until lightly golden; cool completely.',
      'Beat butter with powdered sugar and vanilla until fluffy; add milk to loosen if needed.',
      'Stir in kirsch to taste (optional).',
      'Layer cake with buttercream between nut layers; frost the outside thinly.',
      'Press sliced almonds onto the sides/top for decoration.',
      'Chill at least 1 hour before slicing for best texture.',
    ],
    imageUrl: 'https://images.pexels.com/photos/42168/pexels-photo-42168.jpeg?auto=compress&cs=tinysrgb&h=350',
  },

  drinks: {
    alcoholic: 'Swiss wine, Kirsch, Absinth',
    nonAlcoholic: 'Rivella, Hot chocolate, Herbal tea',
  },

  music: ['Alphorn music', 'Yodeling', 'Swiss folk music'],

  decorationIdeas: [
    'Red and white color theme',
    'Alpine decorations',
    'Cowbells and edelweiss',
    'Wooden chalet aesthetics',
    'Snowy mountain and lake imagery',
  ],

  conversationStarters: [
    'Fondue or raclette – which do you prefer?',
    'Would you travel by scenic Swiss train?',
    'Have you tried Swiss chocolate?',
    'If you visited Switzerland, would you choose skiing or hiking?',
  ],

  quiz: [
    {
      id: 'switzerland-q1',
      question: 'What is the capital of Switzerland?',
      options: ['Zurich', 'Geneva', 'Bern', 'Basel'],
      correctAnswer: 2,
    },
    {
      id: 'switzerland-q2',
      question: 'How many official languages does Switzerland have?',
      options: ['1', '2', '3', '4'],
      correctAnswer: 3,
    },
    {
      id: 'switzerland-q3',
      question: 'Which two cheeses are traditionally used in fondue?',
      options: [
        'Cheddar & Mozzarella',
        'Gruyère & Emmental',
        'Brie & Camembert',
        'Parmesan & Pecorino',
      ],
      correctAnswer: 1,
    },
    {
      id: 'switzerland-q4',
      question: 'What currency is used in Switzerland?',
      options: ['Euro', 'Franc', 'Swiss Franc', 'Mark'],
      correctAnswer: 2,
    },
    {
      id: 'switzerland-q5',
      question: 'How many cantons does Switzerland have?',
      options: ['16', '20', '26', '30'],
      correctAnswer: 2,
    },
    {
      id: 'switzerland-q6',
      question: 'Which city hosts many international organizations?',
      options: ['Zurich', 'Bern', 'Basel', 'Geneva'],
      correctAnswer: 3,
    },
    {
      id: 'switzerland-q7',
      question: 'What invention is Switzerland famous for?',
      options: ['Seatbelt', 'Velcro', 'Telephone', 'Airplane'],
      correctAnswer: 1,
    },
    {
      id: 'switzerland-q8',
      question: 'What is Switzerland known for politically?',
      options: ['Expansion', 'Colonialism', 'Neutrality', 'Military alliances'],
      correctAnswer: 2,
    },
    {
      id: 'switzerland-q9',
      question: 'Which mountain range dominates Switzerland?',
      options: ['Pyrenees', 'Carpathians', 'Alps', 'Apennines'],
      correctAnswer: 2,
    },
    {
      id: 'switzerland-q10',
      question: 'What date is Swiss National Day?',
      options: ['May 1', 'June 6', 'August 1', 'October 31'],
      correctAnswer: 2,
    },
  ],

  coordinates: { x: 48, y: 47 },
};
