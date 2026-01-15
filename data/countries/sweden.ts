import { Country } from '@/types';

export const sweden: Country = {
  id: 'sweden',
  name: 'Sweden',
  code: 'SE',
  continent: 'Europe',
  flag: '🇸🇪',
  landscapeImage: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800',
  description: 'Sweden is a Scandinavian nation known for its stunning natural beauty, innovative design, and high quality of life. From the Northern Lights to IKEA, Sweden offers a perfect blend of nature and modernity.',
  quickFacts: [
    { label: 'Capital', value: 'Stockholm' },
    { label: 'Population', value: '10.4 million' },
    { label: 'Official Language', value: 'Swedish' },
    { label: 'Currency', value: 'Swedish Krona (kr)' },
    { label: 'Area', value: '450,295 km²' },
  ],
  facts: [
    'Sweden has more than 100,000 lakes',
    'The country is one of the world\'s most gender-equal societies',
    'Sweden has not been at war since 1814',
    'Swedes consume more coffee per capita than almost any other country',
    'About 97% of Swedish banknotes are recycled',
    'The midnight sun can be seen in northern Sweden during summer',
    'Sweden gave the world IKEA, Spotify, and H&M',
    'Swedish is the official language, but most Swedes speak excellent English',
  ],
  foodCulture: 'Swedish cuisine emphasizes fresh, local ingredients and simple preparations. Traditional dishes often feature fish, potatoes, and berries. "Fika" (coffee break with pastries) is an important social tradition. Meals are typically enjoyed with family and friends.',
  history: [
    {
      year: '800-1050',
      title: 'Viking Age',
      description: 'Swedish Vikings explored and traded across Europe, reaching as far as Constantinople and Baghdad.'
    },
    {
      year: '1523',
      title: 'Kingdom of Sweden',
      description: 'Gustav Vasa became king, establishing Sweden as an independent nation and introducing Protestantism.'
    },
    {
      year: '17th Century',
      title: 'Swedish Empire',
      description: 'Sweden became a major European power, controlling territories around the Baltic Sea.'
    },
    {
      year: '1814-Present',
      title: 'Neutrality and Welfare State',
      description: 'Sweden adopted neutrality and developed its famous social welfare model.'
    },
  ],
  innovations: [
    {
      name: 'Dynamite',
      year: '1867',
      description: 'Alfred Nobel invented dynamite, revolutionizing construction and mining. His fortune funded the Nobel Prizes.'
    },
    {
      name: 'Three-Point Seatbelt',
      year: '1959',
      description: 'Nils Bohlin invented the modern seatbelt at Volvo, saving millions of lives worldwide.'
    },
    {
      name: 'Pacemaker',
      year: '1958',
      description: 'Rune Elmqvist developed the first implantable pacemaker, transforming cardiac care.'
    },
    {
      name: 'Spotify',
      year: '2006',
      description: 'Daniel Ek and Martin Lorentzon created Spotify, revolutionizing music streaming.'
    },
  ],
  mustVisit: [
    { name: 'Stockholm Archipelago', description: '30,000 islands offering stunning natural beauty and charming villages.' },
    { name: 'Icehotel', description: 'Unique hotel in Jukkasjärvi built entirely from ice and snow each winter.' },
    { name: 'Gamla Stan', description: 'Stockholm\'s medieval old town with cobblestone streets and colorful buildings.' },
    { name: 'Abisko National Park', description: 'Prime location for viewing the Northern Lights and midnight sun.' },
    { name: 'Vasa Museum', description: 'Museum housing a 17th-century warship that sank and was salvaged 333 years later.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'June-August for warm weather and midnight sun, December-March for winter activities and Northern Lights.' },
    { item: 'Warm clothing', description: 'Even summer evenings can be cool; winter requires serious cold-weather gear.' },
    { item: 'Cash and cards', description: 'Sweden is nearly cashless; cards and mobile payments are preferred.' },
    { item: 'Right of public access knowledge', description: 'Allemansrätten allows access to nature but with responsibilities.' },
    { item: 'Power adapter', description: 'Sweden uses Type F plugs with 230V.' },
    { item: 'Waterproof jacket', description: 'Weather can change quickly, especially near water.' }
  ],
  mainDish: {
    id: 'sweden-main',
    name: 'Swedish Meatballs (Köttbullar)',
    description: 'Tender meatballs in creamy gravy served with lingonberry sauce and mashed potatoes',
    cookingTime: 45,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Ground beef', amount: 300, unit: 'g' },
      { name: 'Ground pork', amount: 200, unit: 'g' },
      { name: 'Breadcrumbs', amount: 100, unit: 'g' },
      { name: 'Milk', amount: 100, unit: 'ml' },
      { name: 'Egg', amount: 1, unit: 'large' },
      { name: 'Onion, finely chopped', amount: 1, unit: 'small' },
      { name: 'Allspice', amount: 0.5, unit: 'tsp' },
      { name: 'Butter', amount: 50, unit: 'g' },
      { name: 'Beef stock', amount: 300, unit: 'ml' },
      { name: 'Heavy cream', amount: 150, unit: 'ml' },
    ],
    steps: [
      'Soak breadcrumbs in milk for 5 minutes',
      'Mix ground beef, pork, breadcrumbs, egg, onion, allspice, salt, and pepper',
      'Form mixture into small balls (about 2 cm diameter)',
      'Heat butter in a large pan over medium heat',
      'Fry meatballs in batches until browned on all sides',
      'Remove meatballs and add flour to pan, cook for 1 minute',
      'Gradually add stock and cream, whisking constantly',
      'Return meatballs to sauce and simmer for 10 minutes',
      'Season gravy with soy sauce or Worcestershire sauce',
      'Serve with lingonberry jam, mashed potatoes, and cucumber salad',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600',
  },
  dessert: {
    id: 'sweden-dessert',
    name: 'Princess Cake (Prinsesstårta)',
    description: 'Layered sponge cake with pastry cream, jam, and whipped cream, covered in green marzipan',
    cookingTime: 90,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Eggs', amount: 4, unit: 'large' },
      { name: 'Sugar', amount: 200, unit: 'g' },
      { name: 'Flour', amount: 150, unit: 'g' },
      { name: 'Baking powder', amount: 1, unit: 'tsp' },
      { name: 'Vanilla custard', amount: 400, unit: 'ml' },
      { name: 'Raspberry jam', amount: 150, unit: 'g' },
      { name: 'Heavy cream', amount: 500, unit: 'ml' },
      { name: 'Green marzipan', amount: 300, unit: 'g' },
    ],
    steps: [
      'Bake a sponge cake: beat eggs and sugar until fluffy',
      'Fold in flour and baking powder, bake at 350°F for 25 minutes',
      'Let cake cool, then slice horizontally into 3 layers',
      'Prepare vanilla custard and let cool',
      'Whip heavy cream to stiff peaks',
      'Place bottom cake layer, spread with jam',
      'Add middle layer, spread with custard',
      'Place top layer, dome whipped cream over entire cake',
      'Roll out green marzipan and drape over cake',
      'Trim excess and add a pink marzipan rose on top',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600',
  },
  drinks: {
    alcoholic: 'Aquavit, Swedish beer, Glögg (mulled wine)',
    nonAlcoholic: 'Coffee, Lingonberry juice, Elderflower cordial, Swedish milk',
  },
  music: [
    'Dancing Queen - ABBA',
    'The Winner Takes It All - ABBA',
    'Wake Me Up - Avicii',
    'Swedish folk music',
    'Traditional Midsummer songs',
  ],
  decorationIdeas: [
    'Blue and yellow Swedish flag colors',
    'Dala horses (traditional wooden horses)',
    'Minimalist Scandinavian design',
    'Birch branches',
    'Candles and lanterns',
  ],
  conversationStarters: [
    'Have you experienced a Swedish fika?',
    'What do you know about Swedish design?',
    'Would you like to see the Northern Lights?',
    'Have you tried authentic Swedish meatballs?',
    'What\'s your favorite ABBA song?',
  ],
  quiz: [
    {
      id: 'sweden-q1',
      question: 'What is the capital of Sweden?',
      options: ['Oslo', 'Stockholm', 'Copenhagen', 'Helsinki'],
      correctAnswer: 1,
    },
    {
      id: 'sweden-q2',
      question: 'What is the Swedish tradition of coffee and pastries called?',
      options: ['Hygge', 'Fika', 'Lagom', 'Smörgåsbord'],
      correctAnswer: 1,
    },
    {
      id: 'sweden-q3',
      question: 'Who invented dynamite?',
      options: ['Alfred Nobel', 'Nikola Tesla', 'Thomas Edison', 'Marie Curie'],
      correctAnswer: 0,
    },
    {
      id: 'sweden-q4',
      question: 'What color is traditional Swedish marzipan cake covered in?',
      options: ['Pink', 'Green', 'Yellow', 'Blue'],
      correctAnswer: 1,
    },
    {
      id: 'sweden-q5',
      question: 'Which furniture company was founded in Sweden?',
      options: ['IKEA', 'MUJI', 'West Elm', 'CB2'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 50, y: 62 },
};
