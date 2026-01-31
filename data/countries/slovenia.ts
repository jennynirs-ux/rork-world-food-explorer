import { Country } from '@/types';

export const slovenia: Country = {
  id: 'slovenia',
  name: 'Slovenia',
  code: 'SI',
  continent: 'Europe',
  flag: '🇸🇮',
  landscapeImage: 'https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?w=800&q=80',
  description:
    'Slovenia is a small but stunning country in Central Europe, known for its mountains, ski resorts, and lakes. Despite its small size, it offers incredible natural diversity from the Alps to the Mediterranean coast.',
  quickFacts: [
    { label: 'Capital', value: 'Ljubljana' },
    { label: 'Population', value: '2.1 million' },
    { label: 'Official Language', value: 'Slovene' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '20,273 km²' },
  ],
  facts: [
    'Slovenia is one of the most forested countries in Europe with about 60% forest coverage',
    "Lake Bled with its island church is one of Europe's most photographed locations",
    'Slovenia has over 10,000 caves, including the famous Postojna Cave',
    'The country is home to one of the oldest vines in the world, over 400 years old',
    'Slovenia is the only European country that combines the Alps, Mediterranean, and Pannonian Plain',
    'Ljubljana was named European Green Capital in 2016',
    'Beekeeping is a significant part of Slovenian tradition and culture',
    'Slovenia produces excellent wines, with three distinct wine regions',
  ],
  foodCulture:
    'Slovenian cuisine is a delicious blend of Alpine, Mediterranean, and Pannonian influences. Hearty dishes feature prominently, with emphasis on locally sourced ingredients. Potica (rolled pastry) is a national treasure, and many families have their own recipe.',
  history: [
    {
      year: '7th century',
      title: 'Slavic Settlement',
      description:
        'Slavic tribes settled in the area, establishing early Slovene communities and the first Slovene principality known as Carantania.',
    },
    {
      year: '14th century',
      title: 'Habsburg Rule',
      description:
        'Most Slovenian lands came under Habsburg rule, which would last for centuries and strongly influence culture and architecture.',
    },
    {
      year: '1918',
      title: 'Kingdom of Yugoslavia',
      description:
        'After World War I, Slovenia became part of the Kingdom of Serbs, Croats and Slovenes, later known as Yugoslavia.',
    },
    {
      year: '1991',
      title: 'Independence',
      description:
        'Slovenia declared independence from Yugoslavia after a brief 10-day war, becoming a sovereign nation.',
    },
    {
      year: '2004',
      title: 'EU and NATO',
      description:
        'Slovenia joined both the European Union and NATO, integrating with Western institutions.',
    },
  ],
  innovations: [
    {
      name: 'Modern Apiculture & Beekeeping Heritage',
      year: '1700s–Modern',
      description:
        'Slovenia is internationally known for beekeeping traditions and modern apiculture, including distinctive painted beehive panels and strong support for pollinator awareness.',
    },
    {
      name: 'Green Capital Urban Model',
      year: '2016',
      description:
        'Ljubljana’s recognition as European Green Capital accelerated innovative urban sustainability work, including pedestrian-first planning and green transport initiatives.',
    },
    {
      name: 'Cave Science & Karst Research',
      year: '1800s–Modern',
      description:
        'Slovenia’s Karst region and extensive caves helped shape modern speleology and karst science, supporting research into subterranean geology and ecosystems.',
    },
  ],
  mustVisit: [
    {
      name: 'Lake Bled',
      description:
        'Iconic lake with an island church, castle views, and scenic walks—one of Slovenia’s signature landscapes.',
    },
    {
      name: 'Postojna Cave',
      description:
        'Spectacular cave system with dramatic chambers and formations, among the country’s most famous attractions.',
    },
    {
      name: 'Škocjan Caves',
      description:
        'UNESCO-listed caves featuring a massive underground canyon and remarkable karst scenery.',
    },
    {
      name: 'Triglav National Park',
      description:
        'Julian Alps hiking paradise with alpine lakes, peaks, and valleys—perfect for outdoor adventures.',
    },
    {
      name: 'Piran',
      description:
        'Charming Adriatic coastal town with Venetian architecture, sunsets, and seafood cafés.',
    },
  ],
  travelEssentials: [
    {
      item: 'Visa',
      description:
        'Schengen visa rules apply. EU citizens and many others can visit visa-free for short stays.',
    },
    {
      item: 'Best time to visit',
      description:
        'May to September for lakes and hiking; December to March for skiing in the Alps.',
    },
    {
      item: 'Transportation',
      description:
        'Well-connected by trains and buses. Renting a car helps for countryside and mountain areas.',
    },
    {
      item: 'Language',
      description:
        'Slovene is official. English is widely spoken in tourist areas; German and Italian are also understood in some regions.',
    },
    {
      item: 'Safety',
      description:
        'Very safe country with low crime rates and a welcoming, outdoorsy culture.',
    },
    {
      item: 'Money',
      description:
        'Euro (€). Cards are common, but carry some cash for small towns and mountain huts.',
    },
  ],
  mainDish: {
    id: 'slovenia-kranjska-klobasa',
    name: 'Kranjska Klobasa',
    description:
      'Traditional Slovenian sausage from the Carniola region, made with pork and protected by EU geographical indication. Served with mustard, horseradish, and dark bread.',
    cookingTime: 20,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Kranjska sausages', amount: 4, unit: 'pieces' },
      { name: 'Sauerkraut', amount: 400, unit: 'g' },
      { name: 'Potatoes', amount: 700, unit: 'g' },
      { name: 'Mustard', amount: 2, unit: 'tbsp' },
      { name: 'Horseradish', amount: 2, unit: 'tbsp' },
      { name: 'Caraway seeds', amount: 1, unit: 'tsp' },
      { name: 'Dark bread', amount: 4, unit: 'slices' },
    ],
    steps: [
      'Boil potatoes in salted water until tender, then drain.',
      'Warm sauerkraut in a saucepan with a splash of water; stir in caraway seeds and heat gently.',
      'Bring a pot of water to a bare simmer (do not hard-boil).',
      'Add sausages to the simmering water and cook 10–15 minutes until heated through.',
      'Drain sausages and rest 2 minutes.',
      'Serve sausages with sauerkraut and potatoes.',
      'Add mustard and horseradish on the side, plus dark bread.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600',
  },
  dessert: {
    id: 'slovenia-dessert',
    name: 'Potica',
    description:
      'A beloved Slovenian rolled pastry, traditionally filled with walnuts (or poppy seed) and served on holidays and special occasions.',
    cookingTime: 120,
    servings: 10,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'All-purpose flour', amount: 500, unit: 'g' },
      { name: 'Milk (lukewarm)', amount: 250, unit: 'ml' },
      { name: 'Butter, melted', amount: 80, unit: 'g' },
      { name: 'Sugar', amount: 100, unit: 'g' },
      { name: 'Dry yeast', amount: 7, unit: 'g' },
      { name: 'Egg', amount: 1, unit: 'piece' },
      { name: 'Salt', amount: 1, unit: 'tsp' },
      { name: 'Ground walnuts', amount: 300, unit: 'g' },
      { name: 'Honey', amount: 2, unit: 'tbsp' },
      { name: 'Cinnamon', amount: 1, unit: 'tsp' },
      { name: 'Vanilla extract (optional)', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Activate yeast in lukewarm milk with 1 tbsp sugar for 10 minutes until foamy.',
      'Mix flour, salt, remaining sugar, egg, melted butter, and yeast mixture into a soft dough.',
      'Knead 8–10 minutes until smooth; cover and let rise 60 minutes.',
      'Mix ground walnuts with honey, cinnamon, and vanilla (optional). Add a spoon of warm milk if needed to make a spreadable filling.',
      'Roll dough into a large rectangle (about 3–5 mm thick). Spread filling evenly.',
      'Roll up tightly, seam-side down. Place in a greased loaf tin or ring mold.',
      'Let rise 30 minutes. Bake at 180°C for 40–50 minutes until golden.',
      'Cool before slicing so the swirl holds.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600',
  },
  drinks: {
    alcoholic:
      'Slovenian wine (Rebula, Teran), Schnapps (sadjevec), Craft beer',
    nonAlcoholic: 'Cockta (Slovenian cola), Elderflower juice, Herbal teas',
  },
  music: [
    'Slovenian folk music',
    'Accordion polkas',
    'Alpine songs',
    'Contemporary Slovenian pop',
  ],
  decorationIdeas: [
    'Blue, white, and red (Slovenian flag colors)',
    'Lake Bled-inspired lake and candlelight décor',
    'Alpine flowers (edelweiss-style)',
    'Traditional lace motifs (Idrija)',
    'Beehive panel patterns',
  ],
  conversationStarters: [
    'Have you seen pictures of Lake Bled? Would you visit the island church?',
    'Slovenia combines mountains and sea — which would you explore first?',
    'Would you try exploring the underground world of Slovenian caves?',
    'Have you tasted Slovenian wine? The country has excellent vineyards!',
  ],
  quiz: [
    {
      id: 'slovenia-q1',
      question: "What is Slovenia's capital city?",
      options: ['Zagreb', 'Ljubljana', 'Bratislava', 'Belgrade'],
      correctAnswer: 1,
    },
    {
      id: 'slovenia-q2',
      question: 'Which famous lake with an island church is in Slovenia?',
      options: ['Lake Como', 'Lake Bled', 'Lake Geneva', 'Lake Balaton'],
      correctAnswer: 1,
    },
    {
      id: 'slovenia-q3',
      question: 'Approximately what percentage of Slovenia is covered by forests?',
      options: ['30%', '45%', '60%', '75%'],
      correctAnswer: 2,
    },
    {
      id: 'slovenia-q4',
      question: 'Which currency is used in Slovenia?',
      options: ['Kuna', 'Euro (€)', 'Zloty', 'Forint'],
      correctAnswer: 1,
    },
    {
      id: 'slovenia-q5',
      question: 'Which cave system is a UNESCO World Heritage Site in Slovenia?',
      options: ['Postojna Cave', 'Škocjan Caves', 'Mammoth Cave', 'Reed Flute Cave'],
      correctAnswer: 1,
    },
    {
      id: 'slovenia-q6',
      question: 'Slovenia is one of the few European countries that combines which landscapes?',
      options: [
        'Alps, Mediterranean, and Pannonian Plain',
        'Arctic, Desert, and Rainforest',
        'Only Mountains and Desert',
        'Only Coast and Desert',
      ],
      correctAnswer: 0,
    },
    {
      id: 'slovenia-q7',
      question: 'What is Potica?',
      options: ['A sausage', 'A rolled pastry', 'A soup', 'A cheese'],
      correctAnswer: 1,
    },
    {
      id: 'slovenia-q8',
      question: 'Triglav National Park is best known for which type of scenery?',
      options: ['Coral reefs', 'Alpine mountains', 'Sand dunes', 'Tropical rainforest'],
      correctAnswer: 1,
    },
    {
      id: 'slovenia-q9',
      question: 'Which coastal town is known for Venetian architecture in Slovenia?',
      options: ['Piran', 'Split', 'Kotor', 'Dubrovnik'],
      correctAnswer: 0,
    },
    {
      id: 'slovenia-q10',
      question: 'Which activity is strongly associated with Slovenian tradition mentioned in the facts?',
      options: ['Beekeeping', 'Whaling', 'Ice fishing', 'Camel racing'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 50, y: 46 },
};
