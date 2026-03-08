import { Country } from '@/types';

export const syria: Country = {
  id: 'syria',
  name: 'Syria',
  code: 'SY',
  continent: 'Asia',
  flag: '🇸🇾',
  landscapeImage: 'https://images.unsplash.com/photo-1597211684565-dca64d72c5ac?w=800&q=80',
  description:
    'Syria is an ancient Middle Eastern country with a rich history dating back millennia, known for Damascus, Aleppo, and diverse cultural heritage.',
  quickFacts: [
    { label: 'Capital', value: 'Damascus' },
    { label: 'Population', value: '18 million' },
    { label: 'Official Language', value: 'Arabic' },
    { label: 'Currency', value: 'Syrian Pound' },
    { label: 'Area', value: '185,180 km²' },
  ],

  facts: [
    'Damascus is one of the oldest continuously inhabited cities',
    'Syria has several UNESCO World Heritage Sites, including Ancient City of Damascus and Ancient City of Aleppo',
    'The ruins of Palmyra were one of the most important cultural centers of the ancient world',
    'Syrian souqs (traditional markets) are famous for spices, textiles, and handcrafted goods',
    'Syrian soap from Aleppo (laurel soap) is among the oldest types of hard soap still made today',
    'Syria sits at a historic crossroads of Mediterranean, Mesopotamian, and Levantine civilizations',
    'Dabke dance is a major part of celebration culture across the Levant, including Syria',
    'Syrian cuisine is known for mezze culture and rich spice blends',
  ],

  foodCulture:
    'Syrian cuisine is rich and varied with influences from Ottoman, Persian, and Mediterranean traditions. Meals often revolve around shared mezze, grilled meats, fragrant rice dishes, and sweets scented with rose or orange blossom.',

  history: [
    {
      year: '3000–2000 BC',
      title: 'Early Cities & Trade Routes',
      description:
        'Ancient settlements and city-states flourished in the region, positioned on important trade routes linking Mesopotamia and the Mediterranean.',
    },
    {
      year: '64 BC',
      title: 'Roman Province of Syria',
      description:
        'Syria became a Roman province, with cities like Palmyra and Antioch playing major roles in commerce and culture.',
    },
    {
      year: '661–750',
      title: 'Umayyad Caliphate',
      description:
        'Damascus became the capital of the Umayyad Caliphate, shaping architecture, scholarship, and regional influence.',
    },
    {
      year: '1516–1918',
      title: 'Ottoman Era',
      description:
        'Syria was part of the Ottoman Empire for centuries, influencing food, crafts, and urban life.',
    },
    {
      year: '1946',
      title: 'Independence',
      description:
        'Syria gained full independence after the end of the French Mandate period.',
    },
  ],

  innovations: [
    {
      name: 'Aleppo Soap (Laurel Soap)',
      year: 'Ancient–Medieval',
      description:
        'Traditional laurel and olive oil soap-making from Aleppo influenced soap traditions across the Mediterranean.',
    },
    {
      name: 'Damascene Craftsmanship',
      year: 'Medieval Era',
      description:
        'Damascus became renowned for intricate metalwork, textiles, and artisan crafts traded across regions.',
    },
    {
      name: 'Levantine Culinary Traditions',
      year: 'Centuries',
      description:
        'Syrian mezze culture and dessert techniques helped shape food traditions across the Levant and beyond.',
    },
  ],

  mustVisit: [
    {
      name: 'Old City of Damascus',
      description:
        'Historic streets, courtyards, and markets in one of the world’s oldest continuously inhabited cities.',
    },
    {
      name: 'Ancient City of Aleppo',
      description:
        'A legendary cultural center with deep history and an iconic citadel (note: preservation status varies due to conflict).',
    },
    {
      name: 'Palmyra (Tadmur)',
      description:
        'Famous ancient oasis city with monumental ruins (note: access and preservation vary).',
    },
    {
      name: 'Crac des Chevaliers',
      description:
        'One of the best-preserved medieval crusader castles in the world (access conditions may vary).',
    },
    {
      name: 'Bosra',
      description:
        'Known for its impressive Roman theater and ancient city remains in southern Syria.',
    },
  ],

  travelEssentials: [
    {
      item: 'Safety & advisories',
      description:
        'Check current travel advisories and local guidance; conditions can vary significantly by region.',
    },
    {
      item: 'Language',
      description:
        'Arabic is the official language; learning basic greetings is appreciated.',
    },
    {
      item: 'Etiquette',
      description:
        'Modest dress is respectful, especially at religious or traditional sites.',
    },
    {
      item: 'Cash',
      description:
        'Card acceptance can be limited; carry local currency where relevant.',
    },
    {
      item: 'Food culture',
      description:
        'Expect shared dishes and hospitality—meals are often communal and generous.',
    },
  ],

  mainDish: {
    id: 'syria-main',
    name: 'Kibbeh',
    description: 'Bulgur and meat croquettes, national dish',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Ground lamb', amount: 500, unit: 'g' },
      { name: 'Fine bulgur', amount: 300, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Pine nuts', amount: 100, unit: 'g' },
      { name: 'Allspice', amount: 1, unit: 'tsp' },
      { name: 'Cinnamon', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Soak bulgur in water for 15 minutes and drain well',
      'Mix bulgur with half the meat, grated onion, and spices',
      'Prepare filling by cooking remaining meat with pine nuts and spices',
      'Form oval shells and fill with meat mixture',
      'Seal carefully and shape into torpedoes',
      'Deep fry until golden brown',
      'Drain on paper towels and serve warm',
      'Serve with yogurt and fresh salad',
    ],
    imageUrl: 'https://images.pexels.com/photos/6497907/pexels-photo-6497907.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },

  dessert: {
    id: 'syria-dessert',
    name: 'Ma’amoul',
    description:
      'Traditional Syrian semolina cookies filled with dates or nuts, commonly prepared for religious holidays.',
    cookingTime: 60,
    servings: 24,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Semolina', amount: 500, unit: 'g' },
      { name: 'Butter (melted)', amount: 250, unit: 'g' },
      { name: 'Milk', amount: 120, unit: 'ml' },
      { name: 'Sugar', amount: 50, unit: 'g' },
      { name: 'Date paste', amount: 300, unit: 'g' },
      { name: 'Orange blossom water', amount: 2, unit: 'tbsp' },
      { name: 'Rose water', amount: 1, unit: 'tbsp' },
      { name: 'Powdered sugar (optional)', amount: 50, unit: 'g' },
    ],
    steps: [
      'Mix semolina with melted butter and let rest 30 minutes',
      'Add milk, sugar, orange blossom water, and rose water',
      'Knead gently into a soft dough',
      'Take small portions and flatten in your palm',
      'Fill with date paste and seal into balls',
      'Press into decorative molds if available',
      'Place on baking tray and bake at 180°C for 15–18 minutes',
      'Let cool completely',
      'Dust lightly with powdered sugar if desired',
    ],
    imageUrl: 'https://images.pexels.com/photos/35583855/pexels-photo-35583855.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },

  drinks: {
    alcoholic: 'Arak (anise-flavored)',
    nonAlcoholic: 'Arabic coffee, Mint tea, Jallab (date syrup drink)',
  },

  music: ['Traditional Dabke', 'Arabic classical music', 'Levantine folk songs'],

  decorationIdeas: [
    'Red, white, black and green flag colors',
    'Damascus rose patterns',
    'Historic architecture imagery',
    'Arabic calligraphy',
    'Lanterns and warm ambient lighting',
    'Brass and copper accents',
  ],

  conversationStarters: [
    'What do you know about ancient Middle Eastern history?',
    'Have you tried Levantine cuisine?',
    'Are you more into food, history, or architecture when you explore a country?',
    'Have you ever tried mezze-style dining with many small dishes?',
  ],

  quiz: [
    {
      id: 'syria-q1',
      question: "What is Syria's capital city?",
      options: ['Aleppo', 'Damascus', 'Beirut', 'Amman'],
      correctAnswer: 1,
    },
    {
      id: 'syria-q2',
      question:
        'Which famous ancient city in Syria was a major Silk Road oasis and has UNESCO-listed ruins?',
      options: ['Palmyra', 'Petra', 'Persepolis', 'Byblos'],
      correctAnswer: 0,
    },
    {
      id: 'syria-q3',
      question: 'Which sea borders Syria to the west?',
      options: ['Red Sea', 'Mediterranean Sea', 'Black Sea', 'Caspian Sea'],
      correctAnswer: 1,
    },
    {
      id: 'syria-q4',
      question: 'What is the primary official language of Syria?',
      options: ['Persian', 'Turkish', 'Arabic', 'Hebrew'],
      correctAnswer: 2,
    },
    {
      id: 'syria-q5',
      question: 'Kibbeh is most commonly made with bulgur and what?',
      options: ['Fish', 'Meat', 'Cheese', 'Chickpeas'],
      correctAnswer: 1,
    },
    {
      id: 'syria-q6',
      question: 'Which dance is widely associated with Levantine celebrations?',
      options: ['Dabke', 'Flamenco', 'Tango', 'Samba'],
      correctAnswer: 0,
    },
    {
      id: 'syria-q7',
      question:
        'Which two historic Syrian cities are often mentioned as major cultural centers?',
      options: [
        'Damascus and Aleppo',
        'Basra and Baghdad',
        'Jerusalem and Jaffa',
        'Mecca and Medina',
      ],
      correctAnswer: 0,
    },
    {
      id: 'syria-q8',
      question: 'Syria is part of which broader region?',
      options: ['Scandinavia', 'Levant / Middle East', 'Central America', 'Oceania'],
      correctAnswer: 1,
    },
    {
      id: 'syria-q9',
      question: "What is Syria's currency called?",
      options: ['Syrian Pound', 'Syrian Dinar', 'Syrian Rial', 'Syrian Lira (Euro)'],
      correctAnswer: 0,
    },
    {
      id: 'syria-q10',
      question: 'Which of these is a common non-alcoholic drink in Syrian culture?',
      options: ['Matcha latte', 'Arabic coffee', 'Root beer float', 'Bubble tea'],
      correctAnswer: 1,
    },
  ],

  coordinates: { x: 55, y: 37 },
};
