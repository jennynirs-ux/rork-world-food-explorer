import { Country } from '@/types';

export const algeria: Country = {
  id: 'algeria',
  name: 'Algeria',
  code: 'DZ',
  continent: 'Africa',
  flag: '🇩🇿',
  landscapeImage: 'https://images.unsplash.com/photo-1567355256384-09f3b48dae87?w=800&q=80',
  description:
    'Algeria is the largest country in Africa, featuring the vast Sahara Desert, a Mediterranean coastline, and rich Amazigh (Berber) and Arab heritage. It is known for ancient Roman ruins, striking desert landscapes, and a vibrant culinary and music culture.',
  quickFacts: [
    { label: 'Capital', value: 'Algiers' },
    { label: 'Population', value: '44.9 million' },
    { label: 'Official Languages', value: 'Arabic, Tamazight (Berber)' },
    { label: 'Currency', value: 'Algerian Dinar (DZD)' },
    { label: 'Area', value: '2,381,741 km²' },
  ],
  facts: [
    'Algeria is the largest country in Africa and one of the 10 largest countries in the world by area',
    'Over 80–90% of Algeria is part of the Sahara Desert',
    'Algeria has multiple UNESCO World Heritage Sites, including the Casbah of Algiers and Tassili n’Ajjer',
    'The country is a major producer of natural gas',
    'Algiers is known for its white buildings overlooking the sea and historic quarters like the Casbah',
    'The Hoggar (Ahaggar) Mountains contain some of the Sahara’s most dramatic scenery',
    'Algeria achieved independence from France in 1962 after a long war',
    'Couscous is a foundational North African dish and is central to Algerian home cooking',
  ],
  foodCulture:
    'Algerian cuisine blends Amazigh (Berber), Arab, Turkish, and French influences. Couscous is a staple, often served with vegetables, chickpeas, and flavorful broths. Bread accompanies most meals, and mint tea and strong coffee are common—hospitality and communal dining are important cultural traditions.',
  history: [
    {
      year: '3000 BC',
      title: 'Amazigh (Berber) Roots',
      description:
        'Indigenous Amazigh communities established settlements and trade networks across North Africa, laying deep cultural foundations still visible today.',
    },
    {
      year: '12th–1st Century BC',
      title: 'Numidia & Mediterranean Powers',
      description:
        'Ancient kingdoms such as Numidia rose in the region and interacted with Carthage and Rome, shaping early statecraft and trade.',
    },
    {
      year: '1st–5th Century',
      title: 'Roman North Africa',
      description:
        'Parts of present-day Algeria became important Roman provinces; impressive ruins like Timgad and Djemila reflect this era.',
    },
    {
      year: '800s',
      title: 'Arab Conquest & Islamization',
      description:
        'Arab dynasties brought Islam and Arabic, blending with Amazigh cultures to create a rich, layered identity.',
    },
    {
      year: '1500s–1800s',
      title: 'Ottoman Regency',
      description:
        'Coastal Algeria was linked to the Ottoman Empire, with Algiers emerging as a major Mediterranean port city.',
    },
    {
      year: '1830-1962',
      title: 'French Colonization',
      description:
        'France colonized Algeria, leading to major demographic, economic, and political change, and later a fierce struggle for independence.',
    },
    {
      year: '1954-1962',
      title: 'War of Independence',
      description:
        'A long and violent conflict ended in independence in 1962, fundamentally shaping modern Algerian society and politics.',
    },
    {
      year: '1962-Present',
      title: 'Independent Algeria',
      description:
        'After independence, Algeria developed large energy resources, expanded education and infrastructure, and built modern state institutions alongside ongoing political and economic reforms.',
    },
  ],
  innovations: [
    {
      name: 'Couscous Tradition',
      year: 'Ancient',
      description:
        'Algeria helped develop and preserve couscous culture—steaming grains and serving them with aromatic broths and vegetables is a cornerstone of Algerian cooking.',
    },
    {
      name: 'Amazigh (Berber) Calendar',
      year: 'Ancient',
      description:
        'The Amazigh calendar, still used today by some communities, reflects deep agricultural and cultural traditions dating back millennia.',
    },
    {
      name: 'Desert Navigation & Caravan Routes',
      year: 'Traditional',
      description:
        'Tuareg and Amazigh peoples refined navigation and survival knowledge for Sahara travel, supporting long-distance trade routes.',
    },
    {
      name: 'Raï Music',
      year: '1920s',
      description:
        'Raï emerged in western Algeria and later became internationally popular, blending folk roots with modern sounds and powerful storytelling.',
    },
  ],
  mustVisit: [
    { name: 'Timgad', description: 'Exceptionally well-preserved Roman ruins, sometimes called the “Pompeii of North Africa.”' },
    { name: 'Casbah of Algiers', description: 'UNESCO World Heritage medina with winding streets and Ottoman-era architecture.' },
    { name: "Tassili n'Ajjer", description: 'Vast plateau with prehistoric rock art and landscapes shaped by wind and stone.' },
    { name: 'Oran', description: 'Coastal city associated with Raï music, seaside promenades, and lively cafés.' },
    { name: 'Sahara Desert', description: 'Explore dunes, oases, and the dramatic night skies of the world’s largest hot desert.' },
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'October–April for cooler weather; avoid deep summer when temperatures can exceed 45°C in the interior.' },
    { item: 'Modest clothing', description: 'Dress conservatively, especially outside major tourist areas and in rural towns.' },
    { item: 'Language', description: 'Arabic and Tamazight are official; French is widely used in daily life and can be helpful for travelers.' },
    { item: 'Desert gear', description: 'For Sahara trips: sun protection, plenty of water, and warm layers for cold nights.' },
    { item: 'Visa requirements', description: 'Many visitors need a visa—arrange in advance and check requirements early.' },
    { item: 'Cash', description: 'Cards are limited outside major hotels; carry cash for day-to-day purchases.' },
  ],

  // DINNER RECIPE (very specific instructions + measurements)
  mainDish: {
    id: 'algeria-main',
    name: 'Algerian Couscous with Seven Vegetables',
    description:
      'A classic Algerian family dinner: steamed couscous served with a fragrant vegetable-and-chickpea broth, traditionally finished with harissa to taste.',
    cookingTime: 95,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Dried chickpeas', amount: 250, unit: 'g' },
      { name: 'Couscous (medium grain)', amount: 600, unit: 'g' },
      { name: 'Fine salt', amount: 2, unit: 'tsp' },
      { name: 'Olive oil', amount: 4, unit: 'tbsp' },
      { name: 'Onions, finely chopped', amount: 2, unit: 'medium' },
      { name: 'Garlic cloves, minced', amount: 4, unit: 'cloves' },
      { name: 'Tomato paste', amount: 2, unit: 'tbsp' },
      { name: 'Ras el hanout', amount: 2, unit: 'tsp' },
      { name: 'Ground cumin', amount: 1, unit: 'tsp' },
      { name: 'Sweet paprika', amount: 1, unit: 'tsp' },
      { name: 'Ground turmeric', amount: 0.5, unit: 'tsp' },
      { name: 'Vegetable stock (or water)', amount: 1500, unit: 'ml' },
      { name: 'Carrots, cut into 4–5 cm pieces', amount: 3, unit: 'large' },
      { name: 'Turnips, peeled and quartered', amount: 2, unit: 'medium' },
      { name: 'Zucchini, cut into large chunks', amount: 2, unit: 'medium' },
      { name: 'Bell peppers, halved and seeded', amount: 2, unit: 'whole' },
      { name: 'Potatoes, peeled and halved', amount: 2, unit: 'medium' },
      { name: 'Pumpkin or butternut squash, large cubes', amount: 400, unit: 'g' },
      { name: 'Harissa paste (to serve)', amount: 2, unit: 'tbsp' },
      { name: 'Unsalted butter (optional, for couscous)', amount: 30, unit: 'g' },
      { name: 'Fresh coriander or parsley, chopped (optional)', amount: 3, unit: 'tbsp' },
    ],
    steps: [
      'Soak the chickpeas: place 250 g dried chickpeas in a bowl, cover with plenty of cold water, and soak 10–12 hours (overnight). Drain and rinse.',
      'Start the broth: heat 3 tbsp olive oil in a large pot over medium heat. Add chopped onions and sauté 8–10 minutes until soft and translucent.',
      'Add minced garlic and cook 30 seconds until fragrant. Stir in 2 tbsp tomato paste and cook 1 minute to deepen the flavor.',
      'Add spices: stir in ras el hanout (2 tsp), cumin (1 tsp), paprika (1 tsp), and turmeric (1/2 tsp). Stir constantly for 30 seconds.',
      'Add 1500 ml vegetable stock (or water) and the drained chickpeas. Add 1 tsp salt. Bring to a boil, then reduce to a gentle simmer.',
      'Simmer chickpeas 35 minutes, partially covered, until they begin to soften (they should not be fully mushy).',
      'Add firm vegetables: add carrots, turnips, potatoes, and squash. Simmer 20 minutes.',
      'Add tender vegetables: add zucchini and bell peppers. Simmer 12–15 minutes more until all vegetables are tender but still hold shape.',
      'Taste the broth and adjust salt. Keep the pot on very low heat while you finish the couscous.',
      'Prepare couscous (first steam/soak): place 600 g couscous in a wide bowl. Add 1 tbsp olive oil and 1/2 tsp salt. Rub the grains between your fingers for 1 minute to separate.',
      'Add 450 ml boiling water to the couscous, stir once, cover tightly, and let stand 10 minutes.',
      'Fluff and finish: uncover and fluff with a fork. Add 30 g butter (optional) and fluff again until light and separate. If clumpy, sprinkle 2–3 tbsp warm water and fluff.',
      'Serve: mound couscous on a large platter, arrange vegetables and chickpeas on top, then ladle 2–3 scoops of broth over the couscous.',
      'Harissa: mix harissa paste with 2–3 tbsp warm broth in a small bowl to loosen, and let each person add to taste.',
      'Optional garnish: sprinkle with chopped coriander or parsley and serve immediately with extra broth on the side.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1595777216776-e1c8ba8b38eb?w=600',
  },

  dessert: {
    id: 'algeria-dessert',
    name: 'Makroud',
    description: 'Semolina pastries filled with dates and fried, then soaked in honey',
    cookingTime: 60,
    servings: 20,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Semolina', amount: 500, unit: 'g' },
      { name: 'Butter, melted', amount: 150, unit: 'g' },
      { name: 'Orange blossom water', amount: 3, unit: 'tbsp' },
      { name: 'Date paste', amount: 400, unit: 'g' },
      { name: 'Cinnamon', amount: 2, unit: 'tsp' },
      { name: 'Honey', amount: 300, unit: 'g' },
      { name: 'Vegetable oil for frying', amount: 500, unit: 'ml' },
    ],
    steps: [
      'Mix semolina with melted butter until crumbly',
      'Add orange blossom water and knead into smooth dough',
      'Let rest for 30 minutes',
      'Mix date paste with cinnamon',
      'Roll dough into long rectangles',
      'Place date paste in center, fold dough over',
      'Cut into diamond shapes with ridged cutter',
      'Heat oil to 350°F and fry until golden',
      'Warm honey with a little water',
      'Dip fried makroud in honey while hot',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1571506165871-ee72a35bc9d1?w=600',
  },

  drinks: {
    alcoholic: 'Algerian wine (limited availability)',
    nonAlcoholic: 'Mint tea, Turkish coffee, Qahwa (Arabic coffee), Fresh orange juice, Almond milk',
  },
  music: [
    'Raï music',
    'Khaled - Didi',
    "Chaâbi (traditional folk)",
    'Andalusian classical music',
    'Berber music',
  ],
  decorationIdeas: [
    'Green and white flag colors',
    'Berber textiles and carpets',
    'Moorish geometric patterns',
    'Brass tea sets',
    'Desert-inspired earth tones',
  ],
  conversationStarters: [
    'Have you ever visited the Sahara Desert?',
    'What do you know about North African cuisine?',
    'Have you tried authentic couscous?',
    'What interests you about Amazigh (Berber) culture?',
    'Have you heard Raï music?',
  ],
  quiz: [
    {
      id: 'algeria-q1',
      question: 'What is the capital of Algeria?',
      options: ['Oran', 'Constantine', 'Algiers', 'Annaba'],
      correctAnswer: 2,
    },
    {
      id: 'algeria-q2',
      question: 'Algeria is the largest country on which continent?',
      options: ['Asia', 'Europe', 'Africa', 'South America'],
      correctAnswer: 2,
    },
    {
      id: 'algeria-q3',
      question: 'Which desert covers most of Algeria?',
      options: ['Kalahari Desert', 'Gobi Desert', 'Sahara Desert', 'Atacama Desert'],
      correctAnswer: 2,
    },
    {
      id: 'algeria-q4',
      question: 'What percentage of Algeria is part of the Sahara Desert (approximately)?',
      options: ['25%', '50%', '80–90%', '100%'],
      correctAnswer: 2,
    },
    {
      id: 'algeria-q5',
      question: 'Which ancient civilization built the ruins of Timgad?',
      options: ['Greek', 'Roman', 'Egyptian', 'Phoenician'],
      correctAnswer: 1,
    },
    {
      id: 'algeria-q6',
      question: 'What is the UNESCO-listed historic medina in Algiers called?',
      options: ['The Souk', 'The Casbah', 'The Agora', 'The Forum'],
      correctAnswer: 1,
    },
    {
      id: 'algeria-q7',
      question: 'In which year did Algeria gain independence from France?',
      options: ['1945', '1954', '1962', '1970'],
      correctAnswer: 2,
    },
    {
      id: 'algeria-q8',
      question: 'What is the name of the Algerian currency?',
      options: ['Dirham', 'Dinar', 'Franc', 'Pound'],
      correctAnswer: 1,
    },
    {
      id: 'algeria-q9',
      question: 'Which music genre originated in Algeria and became internationally popular?',
      options: ['Jazz', 'Raï', 'Reggae', 'Samba'],
      correctAnswer: 1,
    },
    {
      id: 'algeria-q10',
      question: "Which place in Algeria is famous for prehistoric rock art and dramatic plateau landscapes?",
      options: ['Timgad', "Tassili n’Ajjer", 'Oran', 'Hoggar Mountains'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 47, y: 32 },
};
