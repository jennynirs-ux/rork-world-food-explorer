import { Country } from '@/types';

export const somalia: Country = {
  id: 'somalia',
  name: 'Somalia',
  code: 'SO',
  continent: 'Africa',
  flag: '🇸🇴',
  landscapeImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
  description:
    'Somalia sits on the Horn of Africa with the longest coastline on the African continent. Known for ancient trading history, nomadic culture, and a rich oral poetry tradition.',
  quickFacts: [
    { label: 'Capital', value: 'Mogadishu' },
    { label: 'Population', value: '16 million' },
    { label: 'Official Languages', value: 'Somali, Arabic' },
    { label: 'Currency', value: 'Somali Shilling (SOS)' },
    { label: 'Area', value: '637,657 km²' },
  ],
  facts: [
    "Somalia has Africa's longest coastline, stretching about 3,000 km",
    'Somali has a strong oral tradition where poetry is highly valued',
    'Frankincense and myrrh have been exported from the region for millennia',
    'Somalia historically connected trade between Africa, Arabia, and Asia',
    'Somali cuisine shows East African, Arabian, and Italian influences',
    'Camels play a major role in pastoral life and culture',
    'Banana exports were historically important to the economy',
    'Somalia sits at a strategic location near the Gulf of Aden and Indian Ocean routes',
  ],
  foodCulture:
    'Somali cuisine reflects East African, Arabian, and Italian influences. Meals often feature rice, pasta, grilled meats, and flatbread. Spices such as cumin, cardamom, coriander, and cloves are common, and tea is a daily ritual.',

  history: [
    {
      year: '1st millennium',
      title: 'Ancient Trade Networks',
      description:
        'Coastal cities and trading communities connected the region to the Red Sea, Arabia, and Indian Ocean trade routes.',
    },
    {
      year: '7th century',
      title: 'Islam Spreads',
      description:
        'Islam became a major cultural and religious influence through contact with Arabia and local adoption.',
    },
    {
      year: 'Late 1800s',
      title: 'Colonial Era',
      description:
        'European powers established influence and administration across different parts of Somali territory.',
    },
    {
      year: '1960',
      title: 'Independence',
      description:
        'Somalia became independent and united from former territories under different colonial administrations.',
    },
    {
      year: 'Modern Era',
      title: 'Resilience and Culture',
      description:
        'Despite challenges, Somali culture remains vibrant through poetry, music, entrepreneurship, and strong community ties.',
    },
  ],

  mainDish: {
    id: 'somalia-main',
    name: 'Bariis Iskukaris',
    description:
      'Somali spiced rice with meat, raisins, and deeply caramelized onions—often served for celebrations and family gatherings.',
    cookingTime: 60,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Basmati rice', amount: 500, unit: 'g' },
      { name: 'Lamb or goat, cut into bite-size pieces', amount: 500, unit: 'g' },
      { name: 'Onions, thinly sliced', amount: 3, unit: 'whole' },
      { name: 'Raisins', amount: 100, unit: 'g' },
      { name: 'Cardamom pods', amount: 5, unit: 'whole' },
      { name: 'Cumin', amount: 1, unit: 'tsp' },
      { name: 'Cinnamon stick', amount: 1, unit: 'whole' },
      { name: 'Vegetable oil', amount: 4, unit: 'tbsp' },
      { name: 'Chicken stock (or water)', amount: 750, unit: 'ml' },
      { name: 'Sugar', amount: 2, unit: 'tbsp' },
      { name: 'Salt', amount: 1, unit: 'tsp' },
      { name: 'Black pepper', amount: 0.5, unit: 'tsp' },
    ],
    steps: [
      'Rinse basmati rice until the water runs mostly clear. Drain and set aside.',
      'Heat oil in a heavy pot over medium heat. Add sliced onions and sugar, stirring often until onions turn deep golden-brown and caramelized (10–15 minutes).',
      'Remove about half the caramelized onions and set aside for garnish.',
      'Increase heat slightly and add meat to the pot. Brown on all sides (5–7 minutes).',
      'Add cumin, cardamom pods, cinnamon stick, salt, and pepper. Stir for 30 seconds until fragrant.',
      'Add rinsed rice and toast gently for 1–2 minutes, coating the grains in the spiced oil.',
      'Pour in stock (or water), bring to a boil, then reduce heat to low.',
      'Cover tightly and simmer for 18–20 minutes until rice is tender and liquid is absorbed.',
      'Stir in raisins and the reserved caramelized onions, then cover and rest 5 minutes off heat.',
      'Fluff with a fork and serve warm.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=600',
  },

  dessert: {
    id: 'somalia-dessert',
    name: 'Halwo (Somali Sweet)',
    description:
      'A celebratory Somali sweet similar to a firm jelly candy, flavored with cardamom and often garnished with nuts.',
    cookingTime: 40,
    servings: 10,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Sugar', amount: 300, unit: 'g' },
      { name: 'Cornstarch', amount: 120, unit: 'g' },
      { name: 'Water', amount: 600, unit: 'ml' },
      { name: 'Cardamom powder', amount: 1, unit: 'tsp' },
      { name: 'Butter or ghee', amount: 60, unit: 'g' },
      { name: 'Roasted peanuts or cashews (optional)', amount: 80, unit: 'g' },
    ],
    steps: [
      'Whisk cornstarch with 300 ml water until smooth.',
      'In a pot, dissolve sugar in remaining water and bring to a gentle boil.',
      'Reduce to low heat and slowly whisk in the cornstarch mixture.',
      'Cook, stirring constantly, until thick and glossy (15–20 minutes).',
      'Stir in butter/ghee and cardamom, cooking 5 more minutes.',
      'Fold in nuts if using.',
      'Pour into a greased dish, smooth the top, and cool until set.',
      'Slice into small pieces and serve.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541976076758-347942db1974?w=600',
  },

  drinks: {
    alcoholic: 'Not commonly consumed (Islamic country)',
    nonAlcoholic: 'Shaah (spiced tea), Camel milk, Fresh mango juice',
  },

  music: [
    'Traditional Somali poetry chants',
    'Balwo music',
    'Heello songs',
    'Contemporary Somali pop and hip-hop',
  ],

  decorationIdeas: [
    'Light blue and white flag colors',
    'Ocean and coastal themes',
    'Traditional woven mats and baskets',
    'Frankincense burners and aroma elements',
    'Nomadic tent-inspired textures and fabrics',
  ],

  conversationStarters: [
    'Did you know Somalia has one of Africa’s longest coastlines?',
    'Have you ever tried Somali spiced tea (shaah)?',
    'What do you know about the Horn of Africa?',
    'Which spices do you love most in rice dishes?',
    'Would you try a dish that mixes raisins with savory rice?',
  ],

  quiz: [
    {
      id: 'somalia-q1',
      question: 'What is the capital of Somalia?',
      options: ['Hargeisa', 'Mogadishu', 'Kismayo', 'Berbera'],
      correctAnswer: 1,
    },
    {
      id: 'somalia-q2',
      question: "Somalia is located in which part of Africa?",
      options: ['North Africa', 'Horn of Africa', 'Central Africa', 'Southern Africa'],
      correctAnswer: 1,
    },
    {
      id: 'somalia-q3',
      question: "Somalia is known for having Africa's longest…",
      options: ['River', 'Coastline', 'Mountain range', 'Rainforest'],
      correctAnswer: 1,
    },
    {
      id: 'somalia-q4',
      question: 'Which two languages are official in Somalia?',
      options: ['Somali and Arabic', 'English and French', 'Swahili and Portuguese', 'Arabic and French'],
      correctAnswer: 0,
    },
    {
      id: 'somalia-q5',
      question: 'Which ancient trade goods are historically associated with Somalia?',
      options: ['Silk and jade', 'Frankincense and myrrh', 'Gold and diamonds', 'Coffee and cocoa'],
      correctAnswer: 1,
    },
    {
      id: 'somalia-q6',
      question: 'What is Bariis Iskukaris?',
      options: ['A sweet dessert', 'A spiced rice dish', 'A soup', 'A flatbread'],
      correctAnswer: 1,
    },
    {
      id: 'somalia-q7',
      question: 'Somali cuisine is influenced by which regions?',
      options: ['East African, Arabian, and Italian', 'Nordic and Baltic', 'Japanese and Korean', 'Mexican and Peruvian'],
      correctAnswer: 0,
    },
    {
      id: 'somalia-q8',
      question: 'Somalia became independent and unified in which year?',
      options: ['1945', '1960', '1978', '1991'],
      correctAnswer: 1,
    },
    {
      id: 'somalia-q9',
      question: 'What is “Shaah” in Somali culture?',
      options: ['A soup', 'A spiced tea', 'A dance', 'A woven mat'],
      correctAnswer: 1,
    },
    {
      id: 'somalia-q10',
      question: 'Which currency is used in Somalia?',
      options: ['Somali Shilling', 'East African Shilling', 'CFA Franc', 'Somali Dinar'],
      correctAnswer: 0,
    },
  ],

  coordinates: { x: 58, y: 18 },
};
