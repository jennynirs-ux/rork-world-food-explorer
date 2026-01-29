import { Country } from '@/types';

export const slovenia: Country = {
  id: 'slovenia',
  name: 'Slovenia',
  code: 'SI',
  continent: 'Europe',
  flag: '🇸🇮',
  // Tip: using a stable “featured” query avoids copy/paste errors from very long Unsplash URLs
  landscapeImage: 'https://source.unsplash.com/featured/?slovenia,lake-bled,landscape&w=800',
  description:
    'Slovenia is a small but spectacular country where the Alps, the Mediterranean, and the Pannonian plain meet. It’s known for emerald rivers, lakes like Bled and Bohinj, extensive cave systems, and a green, outdoorsy lifestyle centered around local food and friendly towns.',
  quickFacts: [
    { label: 'Capital', value: 'Ljubljana' },
    { label: 'Population', value: '2.1 million' },
    { label: 'Official Language', value: 'Slovene' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '20,273 km²' },
  ],
  facts: [
    'Slovenia is among Europe’s most forested countries (around 60% forest cover)',
    'Lake Bled’s island church is one of the country’s most iconic sights',
    'Slovenia has thousands of caves, including Postojna Cave and Škocjan Caves (UNESCO)',
    'Ljubljana has a strong “green city” reputation and excellent walkability',
    'The country connects Alpine peaks, Mediterranean coastline, and rolling wine hills in a short drive',
    'Beekeeping is a proud tradition—Carniolan honey bees are strongly associated with Slovenia',
    'The Soča River is famous for its striking emerald color and outdoor sports',
    'Slovenia has several notable wine regions producing whites like Rebula and reds like Teran',
  ],
  foodCulture:
    'Slovenian cuisine blends Alpine comfort food, Mediterranean freshness, and Central European heartiness. Expect sausages, stews, dumplings, seasonal mushrooms, trout, and excellent pastries. Potica (rolled nut pastry) is a classic celebration dessert, and local wines are a big part of the table.',

  history: [
    {
      year: '7th century',
      title: 'Early Slovene Polities',
      description:
        'Slavic groups settled the region and formed early political entities such as Carantania, influencing Slovene identity and language.',
    },
    {
      year: '14th–1918',
      title: 'Habsburg Era',
      description:
        'Much of today’s Slovenia fell under Habsburg influence for centuries, shaping architecture, administration, and trade connections.',
    },
    {
      year: '1918',
      title: 'Yugoslav Period',
      description:
        'After World War I, Slovenian lands became part of a South Slavic state (later Yugoslavia), while retaining distinct culture and language.',
    },
    {
      year: '1991',
      title: 'Independence',
      description:
        'Slovenia declared independence and became a sovereign state after a brief Ten-Day War.',
    },
    {
      year: '2004',
      title: 'EU and NATO Membership',
      description:
        'Slovenia joined the European Union and NATO, further integrating with European institutions.',
    },
  ],

  innovations: [
    {
      name: 'Green Tourism and Nature Protection',
      year: 'Modern',
      description:
        'Slovenia built a strong eco-tourism reputation with protected parks, sustainable travel initiatives, and a “green destination” identity.',
    },
    {
      name: 'Karst Science and Cave Tourism',
      year: '1800s–Present',
      description:
        'The Karst region and major cave systems helped develop speleology and world-famous cave tourism (e.g., Postojna, Škocjan).',
    },
    {
      name: 'Beekeeping Culture and Honey Heritage',
      year: 'Long tradition',
      description:
        'Beekeeping is a national pride, reflected in folklore, painted beehive panels, and widespread small-scale apiaries.',
    },
  ],

  mustVisit: [
    { name: 'Lake Bled', description: 'Iconic lake with an island church, castle views, and scenic walking paths.' },
    { name: 'Ljubljana Old Town', description: 'A lively, human-scale capital with bridges, markets, and café culture.' },
    { name: 'Škocjan Caves', description: 'UNESCO-listed caves with a dramatic underground canyon and river.' },
    { name: 'Soča Valley', description: 'Emerald river landscapes perfect for hiking, rafting, and photography.' },
    { name: 'Triglav National Park', description: 'Alpine lakes, peaks, and trails centered around Slovenia’s highest mountain.' },
  ],

  travelEssentials: [
    { item: 'Visa', description: 'Schengen rules apply; many travelers can enter visa-free for short stays.' },
    { item: 'Best time to visit', description: 'May–September for lakes and hiking; December–March for skiing in the Alps.' },
    { item: 'Transportation', description: 'Trains/buses cover main routes; renting a car helps for mountains and countryside.' },
    { item: 'Language', description: 'Slovene. English is widely spoken in tourist areas; Italian/German are also common near borders.' },
    { item: 'Money',j', description: 'Euro (€). Cards are common, but carry some cash for rural areas.' },
    { item: 'Nature etiquette', description: 'Stay on trails in parks, respect cave rules, and use reef-safe/eco-friendly products in nature areas.' },
  ],

  mainDish: {
    id: 'slovenia-main',
    name: 'Kranjska Klobasa (Carniolan Sausage)',
    description:
      'A classic Slovenian pork sausage from the Carniola region, traditionally served with mustard, horseradish, and hearty sides like sauerkraut and potatoes.',
    cookingTime: 25,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Carniolan sausages (Kranjska klobasa)', amount: 4, unit: 'pieces' },
      { name: 'Sauerkraut', amount: 400, unit: 'g' },
      { name: 'Caraway seeds', amount: 1, unit: 'tsp' },
      { name: 'Potatoes', amount: 800, unit: 'g' },
      { name: 'Butter', amount: 30, unit: 'g' },
      { name: 'Mustard (to serve)', amount: 2, unit: 'tbsp' },
      { name: 'Prepared horseradish (to serve)', amount: 2, unit: 'tbsp' },
      { name: 'Dark bread (to serve)', amount: 4, unit: 'slices' },
    ],
    steps: [
      'Boil potatoes in salted water until tender; drain and toss with butter.',
      'Warm sauerkraut gently with caraway seeds (do not boil hard).',
      'Heat a pot of water until just below simmer (small bubbles, not a rolling boil).',
      'Add sausages and poach 12–15 minutes to heat through without splitting.',
      'Drain sausages and rest 2 minutes.',
      'Plate with sauerkraut and potatoes.',
      'Serve with mustard, horseradish, and dark bread.',
      'Optional: add a spoon of pan-fried onions or a small side salad.',
    ],
    imageUrl: 'https://source.unsplash.com/featured/?sausage,sauerkraut,central-european-food&w=600',
  },

  dessert: {
    id: 'slovenia-dessert',
    name: 'Potica (Walnut Roll)',
    description:
      'Slovenia’s signature celebration pastry: a rolled yeast dough filled with sweet walnuts (often with honey, cinnamon, and raisins) and baked until golden.',
    cookingTime: 120,
    servings: 10,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'All-purpose flour', amount: 500, unit: 'g' },
      { name: 'Milk', amount: 250, unit: 'ml' },
      { name: 'Butter, melted', amount: 80, unit: 'g' },
      { name: 'Sugar', amount: 90, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'whole' },
      { name: 'Dry yeast', amount: 7, unit: 'g' },
      { name: 'Ground walnuts', amount: 300, unit: 'g' },
      { name: 'Honey', amount: 3, unit: 'tbsp' },
      { name: 'Cinnamon', amount: 1.5, unit: 'tsp' },
      { name: 'Raisins (optional)', amount: 70, unit: 'g' },
      { name: 'Pinch of salt', amount: 1, unit: 'pinch' },
    ],
    steps: [
      'Warm milk until just lukewarm; stir in yeast and a teaspoon of sugar. Let foam 10 minutes.',
      'Mix flour, sugar, salt, eggs, and melted butter, then add the yeast mixture to form a soft dough.',
      'Knead until smooth; cover and rise 60 minutes until doubled.',
      'Mix walnuts with honey, cinnamon, and (optional) raisins; adjust sweetness to taste.',
      'Roll dough into a rectangle, spread filling evenly, then roll up tightly.',
      'Place in a greased loaf pan or ring mold; rise 25–35 minutes.',
      'Bake at 180°C for 40–50 minutes until golden and cooked through.',
      'Cool before slicing for neat spirals.',
    ],
    imageUrl: 'https://source.unsplash.com/featured/?walnut-roll,swirl-cake,pastry&w=600',
  },

  drinks: {
    alcoholic: 'Slovenian wines (Rebula, Malvazija, Teran), Fruit brandy (sadjevec), Craft beer',
    nonAlcoholic: 'Cockta (Slovenian cola), Elderflower cordial, Mineral water, Herbal teas',
  },

  music: ['Slovenian folk music', 'Accordion polkas', 'Alpine songs', 'Contemporary Slovenian pop'],

  decorationIdeas: [
    'Blue, white, and red accents (flag colors)',
    'Lake Bled and alpine-lake visuals',
    'Edelweiss and alpine flower touches',
    'Idrija lace-style details',
    'Beehive panel art motifs',
    'Wood-carved rustic elements',
  ],

  conversationStarters: [
    'Would you rather hike in the Alps or relax by Lake Bled?',
    'Slovenia has thousands of caves—would you explore an underground canyon?',
    'Have you tried potica (walnut roll) before?',
    'Ljubljana is very walkable—what’s your favorite kind of “small city” travel?',
    'If you could do one outdoor activity in Slovenia, would it be rafting the Soča or skiing the Tatras-like Alps?',
  ],

  quiz: [
    {
      id: 'slovenia-q1',
      question: 'What is the capital city of Slovenia?',
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
      question: 'Slovenia is the only European country that combines which environments?',
      options: ['Alps, Mediterranean, and Pannonian Plain', 'Arctic, Desert, and Rainforest', 'Himalayas and Steppe', 'Tundra and Savanna'],
      correctAnswer: 0,
    },
    {
      id: 'slovenia-q4',
      question: 'What is Potica?',
      options: ['A national pastry roll', 'A mountain peak', 'A river', 'A festival'],
      correctAnswer: 0,
    },
    {
      id: 'slovenia-q5',
      question: 'Which currency is used in Slovenia?',
      options: ['Euro', 'Kuna', 'Dinar', 'Franc'],
      correctAnswer: 0,
    },
  ],

  coordinates: { x: 50, y: 46 },
};
