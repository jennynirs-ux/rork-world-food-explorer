import { Country } from '@/types';

export const slovakia: Country = {
  id: 'slovakia',
  name: 'Slovakia',
  code: 'SK',
  continent: 'Europe',
  flag: '🇸🇰',
  landscapeImage: 'https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?w=800&q=80',
  description:
    'Slovakia is a landlocked country in Central Europe known for dramatic mountain scenery, medieval castles, and strong folk traditions. The High Tatras offer excellent hiking and skiing, while historic towns and spa regions add culture and relaxation.',
  quickFacts: [
    { label: 'Capital', value: 'Bratislava' },
    { label: 'Population', value: '5.5 million' },
    { label: 'Official Language', value: 'Slovak' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '49,035 km²' },
  ],
  facts: [
    'Slovakia is famous for its high density of castles, ruins, and chateaux',
    'The High Tatras are a compact alpine range with big scenery and popular ski resorts',
    'Bratislava is the only national capital bordering two countries (Austria and Hungary)',
    'Slovakia has extensive cave systems, including UNESCO-listed caves in the Carpathians',
    'The country is a major European car manufacturing hub (high per-capita output)',
    'Wooden churches and traditional village architecture are key cultural highlights',
    'Thermal springs and spa towns are popular across the country',
    'Folk music and dance traditions remain strong and widely celebrated',
  ],
  foodCulture:
    'Slovak cuisine is hearty and comforting, shaped by mountain life and colder seasons. Potatoes, cabbage, dumplings, and sheep cheese are staples, often paired with smoked meats. Meals are filling, simple, and deeply tied to regional traditions.',

  history: [
    {
      year: '5th–6th century',
      title: 'Slavic Settlement',
      description:
        'Slavic communities settled in the region and gradually formed the cultural foundations of Slovak identity.',
    },
    {
      year: '9th century',
      title: 'Great Moravia',
      description:
        'The territory became part of Great Moravia, a significant early Slavic state linked to the spread of Christianity and literacy.',
    },
    {
      year: '1000–1918',
      title: 'Kingdom of Hungary and Austria-Hungary',
      description:
        'For centuries, Slovakia was part of the Kingdom of Hungary and later the Austro-Hungarian realm, shaping administration, trade, and architecture.',
    },
    {
      year: '1918',
      title: 'Czechoslovakia Formed',
      description:
        'After World War I, Slovakia joined with the Czech lands to form the state of Czechoslovakia.',
    },
    {
      year: '1993',
      title: 'Velvet Divorce',
      description:
        'Slovakia became independent through a peaceful split from the Czech Republic, known as the “Velvet Divorce.”',
    },
    {
      year: '2004–2009',
      title: 'EU Integration and the Euro',
      description:
        'Slovakia joined the European Union in 2004 and adopted the euro in 2009, deepening ties with the European economy.',
    },
  ],

  innovations: [
    {
      name: 'High-Output Automotive Manufacturing',
      year: '1990s–Present',
      description:
        'Slovakia became a major European hub for car production, building a strong supplier network and advanced manufacturing capabilities.',
    },
    {
      name: 'Thermal Spa and Wellness Development',
      year: '1900s–Present',
      description:
        'Spa towns and thermal areas evolved into modern wellness destinations, combining health tourism with regional infrastructure.',
    },
    {
      name: 'Cave Research and Conservation',
      year: 'Modern',
      description:
        'Slovakia supports significant speleology (cave study) and protection of karst ecosystems, including internationally recognized cave sites.',
    },
  ],

  mustVisit: [
    { name: 'High Tatras (Vysoké Tatry)', description: 'Iconic alpine scenery for hiking, skiing, and mountain lakes.' },
    { name: 'Bratislava Old Town', description: 'Compact historic center with cafés, river views, and a hilltop castle.' },
    { name: 'Spiš Castle', description: 'One of Europe’s largest castle complexes and a dramatic UNESCO-listed site.' },
    { name: 'Slovak Paradise National Park', description: 'Famous for gorges, ladders, waterfalls, and forest trails.' },
    { name: 'Banská Štiavnica', description: 'Historic mining town with beautiful architecture and a unique setting.' },
  ],

  travelEssentials: [
    { item: 'Visa', description: 'Schengen rules apply; many travelers can enter visa-free for short stays.' },
    { item: 'Best time to visit', description: 'June–September for hiking; December–March for skiing and winter markets.' },
    { item: 'Transportation', description: 'Trains and buses connect cities well; cars help for mountains and rural areas.' },
    { item: 'Language', description: 'Slovak; English is common in Bratislava and tourist centers.' },
    { item: 'Money', description: 'Euro (€). Cards are widely accepted, but carry cash for smaller villages.' },
    { item: 'Outdoor readiness', description: 'In the Tatras, weather shifts quickly—pack layers and proper footwear.' },
  ],

  mainDish: {
    id: 'slovakia-main',
    name: 'Bryndzové Halušky',
    description:
      'Slovakia’s national favorite: soft potato dumplings tossed with tangy sheep cheese (bryndza) and topped with crispy bacon.',
    cookingTime: 45,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Potatoes, peeled', amount: 800, unit: 'g' },
      { name: 'All-purpose flour', amount: 220, unit: 'g' },
      { name: 'Egg', amount: 1, unit: 'whole' },
      { name: 'Salt', amount: 1.5, unit: 'tsp' },
      { name: 'Bryndza (sheep cheese)', amount: 300, unit: 'g' },
      { name: 'Bacon', amount: 200, unit: 'g' },
      { name: 'Sour cream (optional)', amount: 100, unit: 'ml' },
    ],
    steps: [
      'Grate the potatoes finely into a bowl.',
      'Stir in egg and salt, then add flour gradually to make a thick, sticky batter.',
      'Bring a large pot of salted water to a gentle boil.',
      'Push small pieces of batter into the water using a halušky board, spaetzle maker, or coarse grater.',
      'Cook 2–3 minutes until dumplings float, then scoop out with a slotted spoon and drain well.',
      'Dice bacon and fry until crisp; keep the rendered fat.',
      'While dumplings are hot, mix them with bryndza until creamy and coated.',
      'Top with crispy bacon and a spoon of rendered fat for classic flavor.',
      'Serve immediately; add sour cream if you like it extra creamy.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1566740933430-b5e70b06d2d6?w=800&q=80',
  },

  dessert: {
    id: 'slovakia-dessert',
    name: 'Šúľance s makom (Poppy Seed Noodles)',
    description:
      'Soft potato noodles tossed with butter, ground poppy seeds, and sugar—an old-school Slovak sweet comfort dessert.',
    cookingTime: 45,
    servings: 4,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Potatoes, peeled', amount: 700, unit: 'g' },
      { name: 'All-purpose flour', amount: 200, unit: 'g' },
      { name: 'Egg', amount: 1, unit: 'whole' },
      { name: 'Butter', amount: 60, unit: 'g' },
      { name: 'Ground poppy seeds', amount: 80, unit: 'g' },
      { name: 'Sugar', amount: 60, unit: 'g' },
      { name: 'Pinch of salt', amount: 1, unit: 'pinch' },
    ],
    steps: [
      'Boil potatoes until tender, drain, and mash until smooth; cool slightly.',
      'Mix in egg, pinch of salt, and flour to form a soft dough.',
      'Roll dough into thin ropes and cut into short pieces.',
      'Boil in lightly salted water until they float (2–3 minutes), then drain.',
      'Melt butter and toss the cooked noodles in butter.',
      'Mix ground poppy seeds with sugar, then sprinkle over noodles and toss gently.',
      'Serve warm.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=800&q=80',
  },

  drinks: {
    alcoholic: 'Borovička (juniper brandy), Slovak wine, Tatratea (herbal liqueur)',
    nonAlcoholic: 'Kofola, Vinea (grape drink), Mineral water, Herbal teas',
  },

  music: [
    'Slovak folk music',
    'Fujara (traditional flute)',
    'Shepherd songs',
    'Contemporary Slovak pop',
  ],

  decorationIdeas: [
    'White, blue, and red accents (flag colors)',
    'Traditional folk embroidery patterns',
    'Mountain lodge and alpine touches',
    'Castle silhouettes and medieval motifs',
    'Wood-carved ornaments and rustic ceramics',
  ],

  conversationStarters: [
    'Would you rather explore castles or hike in the High Tatras?',
    'Have you ever tried bryndza (sheep cheese) dishes?',
    'Which sounds more fun: a spa day in thermal springs or a mountain trek?',
    'Did you know Bratislava borders Austria and Hungary?',
    'What’s your favorite kind of comfort food for cold weather?',
  ],

  quiz: [
    {
      id: 'slovakia-q1',
      question: 'What is the capital of Slovakia?',
      options: ['Prague', 'Bratislava', 'Budapest', 'Vienna'],
      correctAnswer: 1,
    },
    {
      id: 'slovakia-q2',
      question: 'Which currency is used in Slovakia?',
      options: ['Koruna', 'Euro', 'Forint', 'Zloty'],
      correctAnswer: 1,
    },
    {
      id: 'slovakia-q3',
      question: 'Which mountain range is Slovakia especially famous for?',
      options: ['Alps', 'High Tatras', 'Pyrenees', 'Apennines'],
      correctAnswer: 1,
    },
    {
      id: 'slovakia-q4',
      question: 'What is bryndza?',
      options: ['A smoked sausage', 'A sheep cheese', 'A poppy seed cake', 'A soup'],
      correctAnswer: 1,
    },
    {
      id: 'slovakia-q5',
      question: 'Bryndzové halušky is best described as…',
      options: ['Fish stew with rice', 'Potato dumplings with sheep cheese', 'Fried noodles with shrimp', 'Stuffed grape leaves'],
      correctAnswer: 1,
    },
    {
      id: 'slovakia-q6',
      question: 'In which year did Slovakia become independent after the “Velvet Divorce”?',
      options: ['1989', '1991', '1993', '2004'],
      correctAnswer: 2,
    },
    {
      id: 'slovakia-q7',
      question: 'Slovakia is part of which border-free travel area?',
      options: ['NAFTA', 'Schengen Area', 'ASEAN', 'MERCOSUR'],
      correctAnswer: 1,
    },
    {
      id: 'slovakia-q8',
      question: 'Which UNESCO-famous castle complex is a top landmark in Slovakia?',
      options: ['Neuschwanstein', 'Spiš Castle', 'Windsor Castle', 'Edinburgh Castle'],
      correctAnswer: 1,
    },
    {
      id: 'slovakia-q9',
      question: 'Bratislava borders Slovakia and also directly borders…',
      options: ['France and Spain', 'Austria and Hungary', 'Germany and Switzerland', 'Italy and Slovenia'],
      correctAnswer: 1,
    },
    {
      id: 'slovakia-q10',
      question: 'Slovakia is best described as a…',
      options: ['Landlocked country in Central Europe', 'Island nation in the Pacific', 'Desert kingdom', 'Arctic archipelago'],
      correctAnswer: 0,
    },
  ],

  coordinates: { x: 52, y: 49 },
};
