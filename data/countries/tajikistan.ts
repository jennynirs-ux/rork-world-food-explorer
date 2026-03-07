import { Country } from '@/types';

export const tajikistan: Country = {
  id: 'tajikistan',
  name: 'Tajikistan',
  code: 'TJ',
  continent: 'Asia',
  flag: '🇹🇯',
  landscapeImage: 'https://images.unsplash.com/photo-1565108781004-2a3ad8396bdb?w=800&q=80',
  description:
    'Tajikistan is a mountainous Central Asian country, often called the "Roof of the World", known for the Pamir Mountains, dramatic landscapes, and rich Silk Road heritage.',
  quickFacts: [
    { label: 'Capital', value: 'Dushanbe' },
    { label: 'Population', value: '9.8 million' },
    { label: 'Official Language', value: 'Tajik' },
    { label: 'Currency', value: 'Tajikistani Somoni' },
    { label: 'Area', value: '143,100 km²' },
  ],

  facts: [
    'Over 90% of Tajikistan is mountainous',
    'The Pamir Mountains are among the highest in the world',
    'Tajik is a variety of Persian (Farsi)',
    'The country has more than 1,000 rivers and lakes',
    'The Pamir Highway is one of the highest international roads on Earth',
    'Tajikistan has a strong tradition of hospitality and communal meals',
    'Many villages in the Pamirs preserve distinct languages and cultural practices',
    'Handwoven textiles and embroidery are important folk arts in many regions',
  ],

  foodCulture:
    'Tajik cuisine is hearty and communal, centered around rice, meat, bread, and dairy. Meals are often shared from large platters and reflect strong Persian and Central Asian influences, with staples like non (bread), soups, kebabs, and pilaf (osh).',

  history: [
    {
      year: '6th–4th Century BC',
      title: 'Achaemenid & Iranian Influence',
      description:
        'The region was influenced by ancient Iranian empires and Persianate culture, shaping language and identity.',
    },
    {
      year: '329 BC',
      title: 'Hellenistic Period',
      description:
        'After Alexander the Great’s campaigns, Hellenistic states and trade networks influenced parts of Central Asia.',
    },
    {
      year: '8th–10th Century',
      title: 'Silk Road & Cultural Flourishing',
      description:
        'Trade along Silk Road routes supported cities and scholarship, strengthening Persian-influenced culture in the region.',
    },
    {
      year: '1929',
      title: 'Tajik SSR',
      description:
        'Tajikistan became a Soviet republic, bringing major social, economic, and infrastructure changes.',
    },
    {
      year: '1991',
      title: 'Independence',
      description:
        'Tajikistan became independent following the dissolution of the Soviet Union.',
    },
  ],

  innovations: [
    {
      name: 'Persianate Poetry & Literature',
      year: '10th–15th Century',
      description:
        'Tajik (Persian) literary traditions form a major part of the region’s cultural identity, with poetry central to education and celebrations.',
    },
    {
      name: 'Mountain Irrigation & Terracing',
      year: 'Centuries',
      description:
        'Communities developed practical agricultural techniques for steep terrain, including channels and terraced fields in valleys.',
    },
    {
      name: 'Traditional Textile Arts',
      year: 'Centuries',
      description:
        'Embroidery, suzani-style patterns, and regional weaving traditions remain important cultural crafts and local economies.',
    },
  ],

  mustVisit: [
    {
      name: 'Pamir Highway (M41)',
      description:
        'Legendary high-altitude route through dramatic mountain landscapes and remote villages.',
    },
    {
      name: 'Iskanderkul Lake',
      description:
        'A striking alpine lake in the Fann Mountains, linked to legends of Alexander (Iskander).',
    },
    {
      name: 'Fann Mountains',
      description:
        'Popular for hiking with turquoise lakes, jagged peaks, and scenic valleys.',
    },
    {
      name: 'Dushanbe',
      description:
        'The capital city with parks, museums, bazaars, and a gateway to the mountains.',
    },
    {
      name: 'Wakhan Valley (near the Afghan border)',
      description:
        'A culturally rich high valley known for sweeping views, fort ruins, and unique Pamiri heritage (access depends on permits/routes).',
    },
  ],

  travelEssentials: [
    {
      item: 'Best time to visit',
      description:
        'Late spring to early autumn (May–October) for most regions; Pamirs are best in summer.',
    },
    {
      item: 'Permits & borders',
      description:
        'Some areas (especially in GBAO/Pamirs) may require additional permits—check requirements in advance.',
    },
    {
      item: 'Transport',
      description:
        'Shared taxis and 4x4s are common for mountain routes; roads can be slow and weather-dependent.',
    },
    {
      item: 'Altitude',
      description:
        'Take time to acclimatize in high regions like the Pamirs; hydrate and plan easy days early on.',
    },
    {
      item: 'Cash',
      description:
        'Carry somoni in rural areas; card acceptance can be limited outside major cities.',
    },
  ],

  mainDish: {
    id: 'tajikistan-main',
    name: 'Osh (Plov)',
    description: 'Traditional pilaf made with rice, meat, carrots, and spices',
    cookingTime: 120,
    servings: 8,
    dietType: 'meat',
    ingredients: [
      { name: 'Lamb or beef', amount: 800, unit: 'g' },
      { name: 'Rice', amount: 600, unit: 'g' },
      { name: 'Carrots', amount: 4, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Garlic head', amount: 1, unit: 'whole' },
      { name: 'Cumin', amount: 1, unit: 'tbsp' },
      { name: 'Vegetable oil', amount: 150, unit: 'ml' },
      { name: 'Salt', amount: 1.5, unit: 'tsp' },
    ],
    steps: [
      'Heat oil in a large heavy pot',
      'Brown meat pieces until well colored',
      'Add sliced onions and cook until golden',
      'Add julienned carrots and sauté gently',
      'Season with cumin and salt',
      'Add enough water to cover ingredients and simmer',
      'Rinse rice thoroughly and layer it on top without stirring',
      'Place whole garlic head into the rice',
      'Cover and steam until rice is tender and liquid absorbed',
      'Gently mix before serving and serve family-style',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80',
  },

  dessert: {
    id: 'tajikistan-dessert',
    name: 'Halva',
    description:
      'A traditional Tajik sweet made from flour, oil, sugar, and nuts, often prepared for celebrations and guests.',
    cookingTime: 30,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'All-purpose flour', amount: 200, unit: 'g' },
      { name: 'Vegetable oil or butter', amount: 120, unit: 'ml' },
      { name: 'Sugar', amount: 150, unit: 'g' },
      { name: 'Water', amount: 200, unit: 'ml' },
      { name: 'Crushed walnuts or almonds', amount: 80, unit: 'g' },
      { name: 'Cardamom', amount: 0.5, unit: 'tsp' },
    ],
    steps: [
      'Heat oil in a pan over medium heat',
      'Add flour and stir continuously until golden brown',
      'In a separate pot, dissolve sugar in water and bring to a boil',
      'Carefully pour syrup into flour mixture while stirring',
      'Add cardamom and mix until thick and smooth',
      'Stir in crushed nuts',
      'Cook for 2–3 minutes until glossy',
      'Transfer to a dish and smooth the surface',
      'Let cool slightly before serving',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800&q=80',
  },

  drinks: {
    alcoholic: 'Vodka',
    nonAlcoholic: 'Green tea, Ayran, Kumis (fermented milk)',
  },

  music: [
    'Shashmaqam (classical tradition)',
    'Folk music with daf drum',
    'Persian-influenced melodies',
  ],

  decorationIdeas: [
    'Red, white, and green flag colors',
    'Mountain and glacier imagery',
    'Silk Road motifs',
    'Traditional textiles and patterns',
    'Carpet-inspired table runners and embroidered cushions',
  ],

  conversationStarters: [
    'Would you dare to travel the Pamir Highway?',
    'What do you know about the Silk Road?',
    'Have you tried Central Asian pilaf before?',
    'Did you know Tajik is closely related to Persian?',
    'Are you more drawn to mountains, culture, or food when you travel?',
  ],

  quiz: [
    {
      id: 'tajikistan-q1',
      question: 'What is the capital of Tajikistan?',
      options: ['Dushanbe', 'Bishkek', 'Tashkent', 'Ashgabat'],
      correctAnswer: 0,
    },
    {
      id: 'tajikistan-q2',
      question: 'Which mountain range dominates Tajikistan?',
      options: ['Himalayas', 'Pamir Mountains', 'Caucasus', 'Ural Mountains'],
      correctAnswer: 1,
    },
    {
      id: 'tajikistan-q3',
      question: 'What ancient trade route passed through Tajikistan?',
      options: ['Amber Road', 'Spice Route', 'Silk Road', 'Tea Horse Road'],
      correctAnswer: 2,
    },
    {
      id: 'tajikistan-q4',
      question: 'Over what percentage of Tajikistan is mountainous?',
      options: ['30%', '50%', '70%', '90%'],
      correctAnswer: 3,
    },
    {
      id: 'tajikistan-q5',
      question: 'What language is most closely related to Tajik?',
      options: ['Turkish', 'Arabic', 'Persian', 'Russian'],
      correctAnswer: 2,
    },
    {
      id: 'tajikistan-q6',
      question: 'What is the national dish Osh primarily made from?',
      options: ['Rice and fish', 'Rice and meat', 'Bread and cheese', 'Noodles'],
      correctAnswer: 1,
    },
    {
      id: 'tajikistan-q7',
      question: 'What is the Pamir Highway famous for?',
      options: [
        'Being the longest road in Asia',
        'Being one of the highest roads in the world',
        'Connecting Europe and China directly',
        'Crossing a desert',
      ],
      correctAnswer: 1,
    },
    {
      id: 'tajikistan-q8',
      question: 'Which beverage is commonly consumed with meals in Tajikistan?',
      options: ['Green tea', 'Coffee', 'Cola', 'Mate'],
      correctAnswer: 0,
    },
    {
      id: 'tajikistan-q9',
      question: 'Which region is Tajikistan part of?',
      options: ['Middle East', 'South Asia', 'Central Asia', 'East Asia'],
      correctAnswer: 2,
    },
    {
      id: 'tajikistan-q10',
      question: 'What instrument is commonly used in Tajik folk music?',
      options: ['Daf drum', 'Bagpipes', 'Accordion', 'Sitar'],
      correctAnswer: 0,
    },
  ],

  coordinates: { x: 67, y: 40 },
};
