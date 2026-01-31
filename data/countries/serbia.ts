import { Country } from '@/types';

export const serbia: Country = {
  id: 'serbia',
  name: 'Serbia',
  code: 'RS',
  continent: 'Europe',
  flag: '🇷🇸',
  landscapeImage: 'https://images.unsplash.com/photo-1607799632518-da91dd151b38?w=800&q=80',
  description:
    'Serbia is a landlocked country in Southeast Europe at the crossroads of Central and the Balkans. It is known for lively cities, Orthodox monasteries, river landscapes along the Danube and Sava, and a strong food-and-coffee culture. Belgrade is among Europe\'s oldest continuously inhabited cities.',
  quickFacts: [
    { label: 'Capital', value: 'Belgrade' },
    { label: 'Population', value: '6.9 million' },
    { label: 'Official Language', value: 'Serbian' },
    { label: 'Currency', value: 'Serbian Dinar (RSD)' },
    { label: 'Area', value: '88,361 km²' },
  ],
  facts: [
    'Belgrade is one of the oldest continuously inhabited cities in Europe',
    'Serbia is among the world\'s leading raspberry producers/exporters',
    'The Serbian language uses both Cyrillic and Latin scripts',
    'The Danube River flows through Serbia and is central to its geography',
    'Novi Sad hosts EXIT Festival, one of Europe\'s best-known summer music festivals',
    'Serbia has many spa towns and mineral springs (banje)',
    'Traditional hospitality is expressed through food, coffee, and rakija offered to guests',
    'The region has deep medieval heritage with monasteries and fortresses',
  ],
  foodCulture:
    'Serbian cuisine is hearty and social, shaped by Balkan, Ottoman, and Central European influences. Grilled meats (ćevapi, pljeskavica), rich stews, pastries like burek, and spreads like ajvar are common. Meals often come with chopped onions, flatbread, and a glass of rakija or strong coffee.',

  history: [
    {
      year: '9th–10th Century',
      title: 'Early Serbian Polities',
      description:
        'Early medieval Serbian principalities formed in the Balkans, creating the foundations of later Serbian statehood and identity.',
    },
    {
      year: '1217',
      title: 'Kingdom of Serbia',
      description:
        'The Serbian state strengthened and gained international recognition as a kingdom, with major cultural growth in the medieval period.',
    },
    {
      year: '1346',
      title: 'Serbian Empire',
      description:
        'Under Emperor Dušan, Serbia expanded and became a significant Balkan power, leaving a strong legal and cultural legacy.',
    },
    {
      year: '1389',
      title: 'Battle of Kosovo',
      description:
        'A pivotal medieval battle that became central in Serbian historical memory and later national narratives.',
    },
    {
      year: '1804–1815',
      title: 'Serbian Uprisings',
      description:
        'A series of uprisings helped Serbia regain autonomy and gradually re-establish modern state institutions.',
    },
    {
      year: '2006',
      title: 'Independent Serbia',
      description:
        'Serbia became an independent state after Montenegro\'s independence referendum, shaping its modern political era.',
    },
  ],

  innovations: [
    {
      name: 'Nikola Tesla\'s Electrical Breakthroughs',
      year: '1880s–1900s',
      description:
        'Tesla\'s work on alternating current (AC) systems and electrical engineering shaped modern power distribution and technology worldwide.',
    },
    {
      name: 'Pupin Coils (Mihajlo Pupin)',
      year: '1899',
      description:
        'Pupin\'s innovations improved long-distance telephone transmission, helping expand reliable communications over great distances.',
    },
    {
      name: 'Modern Serbian Film & Animation',
      year: '1960s–Present',
      description:
        'Serbia and former Yugoslav-era studios developed internationally recognized film, animation, and festival culture with lasting regional influence.',
    },
  ],

  mustVisit: [
    { name: 'Kalemegdan Fortress (Belgrade)', description: 'Iconic fortress and park above the confluence of the Sava and Danube.' },
    { name: 'Novi Sad & Petrovaradin Fortress', description: 'Danube city with a grand fortress and summer festival atmosphere.' },
    { name: 'Studenica Monastery', description: 'A major medieval monastery complex and landmark of Serbian heritage.' },
    { name: 'Niš', description: 'Historic southern city known for Roman-era roots and lively café streets.' },
    { name: 'Tara National Park', description: 'Mountain scenery, forests, viewpoints, and river gorges for hiking and nature trips.' },
  ],

  travelEssentials: [
    { item: 'Best time to visit', description: 'May–September for warm weather; winter for city breaks and mountain escapes.' },
    { item: 'Currency', description: 'Serbian Dinar (RSD); carry some cash for small cafés and markets.' },
    { item: 'Getting around', description: 'Buses connect most cities well; Belgrade has trams and buses; taxis are common (use official apps/stands).' },
    { item: 'Language', description: 'Serbian uses Cyrillic and Latin; English is common in Belgrade and tourist areas.' },
    { item: 'Food tip', description: 'Try ajvar, kajmak, burek, and local grilled meats—portions can be generous.' },
    { item: 'Coffee culture', description: 'Expect long café sits—ordering one drink and chatting is normal.' },
  ],

  mainDish: {
    id: 'serbia-main',
    name: 'Ćevapi',
    description:
      'Small grilled minced-meat sausages served with warm lepinja (flatbread), chopped onions, and often kajmak (creamy dairy spread) and ajvar.',
    cookingTime: 45,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Ground beef', amount: 500, unit: 'g' },
      { name: 'Ground pork (optional)', amount: 250, unit: 'g' },
      { name: 'Garlic cloves, minced', amount: 3, unit: 'cloves' },
      { name: 'Fine salt', amount: 2, unit: 'tsp' },
      { name: 'Black pepper', amount: 1, unit: 'tsp' },
      { name: 'Sweet paprika', amount: 1, unit: 'tsp' },
      { name: 'Baking soda', amount: 0.5, unit: 'tsp' },
      { name: 'Sparkling water', amount: 60, unit: 'ml' },
      { name: 'Lepinja (flatbread)', amount: 4, unit: 'pieces' },
      { name: 'Onion, finely chopped (to serve)', amount: 2, unit: 'whole' },
      { name: 'Ajvar (to serve)', amount: 150, unit: 'g' },
      { name: 'Kajmak (optional, to serve)', amount: 150, unit: 'g' },
    ],
    steps: [
      'Combine ground meat, garlic, salt, pepper, paprika, and baking soda in a bowl.',
      'Pour in sparkling water and mix thoroughly until the mixture becomes sticky and well combined.',
      'Cover and refrigerate at least 2 hours (overnight is even better).',
      'With wet hands, shape into small finger-length sausages (about 8–10 cm).',
      'Preheat a grill or grill pan to medium-high heat.',
      'Grill ćevapi 3–4 minutes per side until browned and cooked through.',
      'Warm lepinja on the grill for 30–60 seconds per side.',
      'Serve ćevapi tucked into lepinja with lots of chopped onion.',
      'Add ajvar and (optionally) kajmak on top or on the side.',
      'Eat hot—this is a classic street-food style meal in Serbia.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600',
  },

  dessert: {
    id: 'serbia-dessert',
    name: 'Vanilice',
    description:
      'Tender Serbian sandwich cookies filled with jam (often apricot or rosehip) and rolled in powdered sugar.',
    cookingTime: 50,
    servings: 24,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Unsalted butter, softened', amount: 200, unit: 'g' },
      { name: 'Powdered sugar (plus extra for coating)', amount: 120, unit: 'g' },
      { name: 'Egg yolks', amount: 2, unit: 'whole' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'All-purpose flour', amount: 320, unit: 'g' },
      { name: 'Cornstarch', amount: 40, unit: 'g' },
      { name: 'Apricot jam (or rosehip jam)', amount: 180, unit: 'g' },
    ],
    steps: [
      'Preheat oven to 170°C and line a baking tray with parchment paper.',
      'Beat butter and powdered sugar until light and fluffy.',
      'Mix in egg yolks and vanilla.',
      'Fold in flour and cornstarch to form a soft dough.',
      'Roll dough to about 5 mm thickness and cut small rounds (4–5 cm).',
      'Bake 10–12 minutes until just set (do not brown too much). Cool completely.',
      'Sandwich cookies with a small spoon of jam.',
      'Roll finished cookies in powdered sugar.',
      'Let rest 30 minutes so the cookies soften slightly.',
      'Store in an airtight container; they taste even better the next day.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600',
  },

  drinks: {
    alcoholic: 'Rakija (fruit brandy), Serbian wine, Local beer',
    nonAlcoholic: 'Turkish-style coffee, Herbal teas, Fruit juices',
  },

  music: [
    'Traditional folk & gusle',
    'Brass band music',
    'Turbo-folk',
    'Modern Serbian pop and hip-hop',
    'Festival culture (EXIT in Novi Sad)',
  ],

  decorationIdeas: [
    'Red, blue, and white (flag colors)',
    'Traditional embroidery motifs',
    'Copper serving trays and coffee sets',
    'Orthodox-inspired patterns',
    'Folk art designs and woven textiles',
  ],

  conversationStarters: [
    'Would you rather explore Belgrade nightlife or hike in Tara National Park?',
    'Have you tried ajvar or kajmak before?',
    'Do you like coffee culture where people sit and talk for a long time?',
    'EXIT Festival in Novi Sad is huge—would you go to a summer music festival?',
    'What do you know about Nikola Tesla and his inventions?',
  ],

  quiz: [
    {
      id: 'serbia-q1',
      question: 'What is the capital of Serbia?',
      options: ['Zagreb', 'Belgrade', 'Sarajevo', 'Skopje'],
      correctAnswer: 1,
    },
    {
      id: 'serbia-q2',
      question: 'Which two major rivers meet in Belgrade?',
      options: ['Danube and Sava', 'Rhine and Danube', 'Volga and Don', 'Po and Tiber'],
      correctAnswer: 0,
    },
    {
      id: 'serbia-q3',
      question: 'Which famous inventor is closely associated with Serbian heritage?',
      options: ['Nikola Tesla', 'Marie Curie', 'Isaac Newton', 'Leonardo da Vinci'],
      correctAnswer: 0,
    },
    {
      id: 'serbia-q4',
      question: 'What currency is used in Serbia?',
      options: ['Euro (EUR)', 'Serbian Dinar (RSD)', 'Kuna (HRK)', 'Lev (BGN)'],
      correctAnswer: 1,
    },
    {
      id: 'serbia-q5',
      question: 'Which spreads are common with grilled meats in Serbia?',
      options: ['Ajvar and kajmak', 'Guacamole and salsa', 'Hummus and tahini', 'Pesto and ricotta'],
      correctAnswer: 0,
    },
    {
      id: 'serbia-q6',
      question: 'What are ćevapi?',
      options: ['Stuffed pastries', 'Grilled minced-meat sausages', 'Cheese dumplings', 'Fish stew'],
      correctAnswer: 1,
    },
    {
      id: 'serbia-q7',
      question: 'Which script is official and widely used for Serbian?',
      options: ['Greek only', 'Cyrillic and Latin', 'Arabic only', 'Hebrew and Latin'],
      correctAnswer: 1,
    },
    {
      id: 'serbia-q8',
      question: 'EXIT Festival is most closely associated with which Serbian city?',
      options: ['Niš', 'Novi Sad', 'Kragujevac', 'Subotica'],
      correctAnswer: 1,
    },
    {
      id: 'serbia-q9',
      question: 'Rakija is best described as:',
      options: ['A fruit brandy', 'A sparkling wine', 'A herbal tea', 'A dairy drink'],
      correctAnswer: 0,
    },
    {
      id: 'serbia-q10',
      question: 'Serbia is part of which broader European region?',
      options: ['The Baltics', 'The Balkans', 'Scandinavia', 'The Iberian Peninsula'],
      correctAnswer: 1,
    },
  ],

  coordinates: { x: 52, y: 44 },
};
