import { Country } from '@/types';

export const albania: Country = {
  id: 'albania',
  name: 'Albania',
  code: 'AL',
  continent: 'Europe',
  flag: '🇦🇱',
  landscapeImage: 'https://images.unsplash.com/photo-1591194255768-97f1df39bbae?w=800&q=80',
  description:
    'Albania is a hidden gem on the Adriatic and Ionian coasts, offering stunning beaches, ancient ruins, and mountainous landscapes. Known for its warm hospitality, unique traditions, and rich history shaped by Illyrian roots, Roman influence, and centuries of Ottoman rule.',
  quickFacts: [
    { label: 'Capital', value: 'Tirana' },
    { label: 'Population', value: '2.8 million' },
    { label: 'Official Languages', value: 'Albanian' },
    { label: 'Currency', value: 'Albanian Lek (ALL)' },
    { label: 'Area', value: '28,748 km²' },
  ],
  facts: [
    'Albania has over 300 days of sunshine per year',
    "Mother Teresa, the Nobel Peace Prize winner, was of Albanian descent (born in Skopje, to an Albanian family)",
    "Albania was once one of the world's most isolated countries during the communist era",
    'The country has more than 750,000 bunkers built during the communist period',
    'The Albanian language is unique and not closely related to any other modern language',
    'Albania has three UNESCO World Heritage Sites (including Berat and Gjirokastër)',
    'In some regions, the traditional head gestures for “yes” and “no” can differ from what visitors expect',
    'Albania’s Riviera coastline stretches along the Adriatic and Ionian seas with crystal-clear waters',
  ],
  foodCulture:
    'Albanian cuisine blends Mediterranean and Balkan influences, featuring fresh vegetables, olive oil, herbs, cheeses, and grilled meats. Meals are social occasions, hospitality is paramount, and coffee culture is strong—cafés are key social gathering places across cities and towns.',
  history: [
    {
      year: '1000 BC',
      title: 'Illyrian Tribes',
      description:
        'Illyrian tribes inhabited the region, developing distinct cultures and trading with Greek colonies and, later, the Romans.',
    },
    {
      year: '168 BC',
      title: 'Roman Influence',
      description:
        'Roman rule connected the region to major roads and trade networks, leaving archaeological traces still visible today.',
    },
    {
      year: '4th–15th Century',
      title: 'Byzantine & Medieval Principalities',
      description:
        'Following the Roman era, the region passed through Byzantine influence and local medieval principalities, shaping language, faith, and fortress architecture.',
    },
    {
      year: '15th Century',
      title: 'Skanderbeg’s Resistance',
      description:
        'National hero Gjergj Kastrioti (Skanderbeg) led a long resistance against Ottoman expansion, becoming a defining symbol of Albanian identity.',
    },
    {
      year: '168 BC - 1912',
      title: 'Foreign Rule',
      description:
        'Albania was ruled at different times by Romans, Byzantines, Venetians, and the Ottoman Empire for many centuries, shaping culture, religion, and architecture.',
    },
    {
      year: '1912',
      title: 'Independence',
      description:
        'Albania declared independence from the Ottoman Empire and began forming modern state institutions.',
    },
    {
      year: '1944-1991',
      title: 'Communist Era',
      description:
        'Under Enver Hoxha, Albania became one of the world’s most isolated countries, marked by strict state control and widespread bunker construction.',
    },
    {
      year: '1990s–Present',
      title: 'Transition & Modern Albania',
      description:
        'After communism, Albania transitioned toward a market economy, expanded international ties, and grew tourism driven by beaches, heritage cities, and mountains.',
    },
  ],
  innovations: [
    {
      name: 'Albanian Language Preservation',
      year: '15th Century',
      description:
        'Despite centuries of foreign influence, Albanians preserved their language and identity, with early written Albanian emerging in medieval times.',
    },
    {
      name: 'Besa (Code of Honor)',
      year: 'Ancient',
      description:
        'A traditional moral code emphasizing keeping promises, protecting guests, and personal honor—often cited as a pillar of Albanian hospitality.',
    },
    {
      name: 'Polyphonic Singing',
      year: 'Traditional',
      description:
        'A distinctive multi-voice singing tradition (iso-polyphony) recognized by UNESCO for its unique harmonies and cultural importance.',
    },
    {
      name: 'Kulla Tower Houses',
      year: 'Traditional',
      description:
        'Fortified stone tower houses adapted to mountainous regions, reflecting local craftsmanship and historical needs for protection.',
    },
  ],
  mustVisit: [
    { name: 'Albanian Riviera', description: 'Pristine beaches with crystal-clear waters along the Ionian coast.' },
    { name: 'Berat', description: 'UNESCO World Heritage city known as the “City of a Thousand Windows.”' },
    { name: 'Gjirokastër', description: 'UNESCO-listed stone city with Ottoman-era architecture and a dramatic fortress.' },
    { name: 'Butrint', description: 'Ancient UNESCO archaeological site with Greek, Roman, and Byzantine ruins.' },
    { name: 'Theth National Park', description: 'Epic hiking and mountain scenery in the Albanian Alps.' },
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'May–June and September–October for mild weather; July–August for peak beach season.' },
    { item: 'Cash', description: 'Cards are improving in cities, but cash is still essential in smaller towns and rural areas.' },
    { item: 'Comfortable shoes', description: 'Ancient sites, cobblestone towns, and mountain trails need sturdy footwear.' },
    { item: 'Modest clothing for religious sites', description: 'Cover shoulders and knees when visiting mosques and churches.' },
    { item: 'Basic Albanian phrases', description: 'English is more common in tourist areas; a few local phrases help a lot.' },
    { item: 'Sunscreen', description: 'Strong summer sun along the coast and at higher elevations.' },
  ],

  // DINNER RECIPE (very specific instructions + measurements)
  mainDish: {
    id: 'albania-main',
    name: 'Tavë Kosi (Baked Lamb and Yogurt)',
    description:
      "Albania’s iconic dinner dish: tender lamb and rice baked under a tangy yogurt-and-egg custard until golden.",
    cookingTime: 95,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Lamb shoulder (boneless), cut into 3–4 cm cubes', amount: 900, unit: 'g' },
      { name: 'Fine salt', amount: 2, unit: 'tsp' },
      { name: 'Black pepper', amount: 1, unit: 'tsp' },
      { name: 'Unsalted butter', amount: 70, unit: 'g' },
      { name: 'Olive oil', amount: 1, unit: 'tbsp' },
      { name: 'Garlic cloves, lightly crushed', amount: 4, unit: 'cloves' },
      { name: 'Dry white wine', amount: 120, unit: 'ml' },
      { name: 'Water (for simmering)', amount: 700, unit: 'ml' },
      { name: 'Bay leaves', amount: 2, unit: 'whole' },
      { name: 'Short-grain rice (or arborio), rinsed', amount: 220, unit: 'g' },
      { name: 'Plain Greek yogurt (full fat, ~10%)', amount: 700, unit: 'g' },
      { name: 'Eggs', amount: 4, unit: 'large' },
      { name: 'All-purpose flour', amount: 3, unit: 'tbsp' },
      { name: 'Lamb cooking broth (reserved)', amount: 350, unit: 'ml' },
      { name: 'Nutmeg (optional)', amount: 0.25, unit: 'tsp' },
    ],
    steps: [
      'Preheat the oven to 190°C (375°F). Place a rack in the middle.',
      'Season the lamb cubes with 2 tsp salt and 1 tsp black pepper.',
      'Heat 50 g butter + 1 tbsp olive oil in a heavy pot over medium-high heat.',
      'Add lamb in 2 batches. Brown 6–8 minutes per batch, stirring occasionally, until well-colored. Transfer browned lamb to a plate.',
      'Lower heat to medium. Add crushed garlic cloves to the pot and sauté for 30 seconds until fragrant (do not burn).',
      'Pour in 120 ml white wine. Scrape the bottom of the pot to dissolve browned bits. Simmer 2 minutes.',
      'Return lamb to the pot. Add 700 ml water and 2 bay leaves. Bring to a boil, then reduce to a gentle simmer.',
      'Cover and simmer 45 minutes, stirring once or twice, until lamb is tender but not falling apart.',
      'Remove lamb with a slotted spoon and set aside. Strain the broth into a measuring jug. You need 350 ml broth for the yogurt sauce (top up with water if short). Discard bay leaves and garlic.',
      'Cook the rice: in a small pot, bring 450 ml water to a boil. Add rinsed rice and 1/2 tsp salt. Simmer uncovered 10 minutes until the rice is about 70% cooked. Drain well.',
      'Grease a baking dish (about 30×22 cm) with the remaining 20 g butter.',
      'Spread the drained rice evenly in the baking dish. Arrange the cooked lamb pieces on top.',
      'Make the yogurt sauce: in a large bowl, whisk 700 g yogurt until smooth. Whisk in 4 eggs one at a time.',
      'Sprinkle in 3 tbsp flour and whisk until fully combined and lump-free. Add 1/4 tsp nutmeg if using.',
      'Warm 350 ml of the reserved lamb broth (hot but not boiling). Slowly drizzle it into the yogurt mixture while whisking constantly to temper it (prevents curdling).',
      'Pour the yogurt sauce evenly over the lamb and rice. Tap the dish lightly on the counter to settle the mixture.',
      'Bake at 190°C (375°F) for 35–40 minutes, until the top is deeply golden and the center is set (it should wobble slightly, not slosh).',
      'Rest 10–15 minutes before serving so the custard firms up. Serve warm with a simple tomato-cucumber salad.',
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
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600',
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
      question: "What is Albania's baked lamb and yogurt national dish called?",
      options: ['Moussaka', 'Tavë Kosi', 'Byrek', 'Qofte'],
      correctAnswer: 1,
    },
    {
      id: 'albania-q3',
      question: 'What famous Nobel Peace Prize winner was of Albanian descent?',
      options: ['Florence Nightingale', 'Mother Teresa', 'Marie Curie', 'Malala Yousafzai'],
      correctAnswer: 1,
    },
    {
      id: 'albania-q4',
      question: 'What animal is featured on the red Albanian flag?',
      options: ['A golden lion', 'A black double-headed eagle', 'A white wolf', 'A bear'],
      correctAnswer: 1,
    },
    {
      id: 'albania-q5',
      question: 'In which year did Albania declare independence from the Ottoman Empire?',
      options: ['1850', '1912', '1945', '1990'],
      correctAnswer: 1,
    },
    {
      id: 'albania-q6',
      question: 'What are "Kulla" in Albanian architecture?',
      options: ['Religious temples', 'Fortified tower houses found in the mountains', 'Underground bunkers', 'Marketplaces'],
      correctAnswer: 1,
    },
    {
      id: 'albania-q7',
      question: 'Which two seas make up Albania’s coastline?',
      options: ['Mediterranean and Aegean', 'Adriatic and Ionian', 'Black and Marmara', 'Tyrrhenian and Ligurian'],
      correctAnswer: 1,
    },
    {
      id: 'albania-q8',
      question: 'What is the name of the traditional Albanian code of law and honor?',
      options: ['The Kanun', 'The Sharia', 'The Magna Carta', 'The Napoleonic Code'],
      correctAnswer: 0,
    },
    {
      id: 'albania-q9',
      question: 'During the communist era, hundreds of thousands of what were built across the country?',
      options: ['Windmills', 'Statues of Lenin', 'Concrete bunkers', 'Skyscrapers'],
      correctAnswer: 2,
    },
    {
      id: 'albania-q10',
      question: 'What is the name of the Albanian currency?',
      options: ['Dinar', 'Lira', 'Euro', 'Lek'],
      correctAnswer: 3,
    },
  ],
  coordinates: { x: 52, y: 42 },
};
