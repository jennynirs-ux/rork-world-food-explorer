import { Country } from '@/types';

export const senegal: Country = {
  id: 'senegal',
  name: 'Senegal',
  code: 'SN',
  continent: 'Africa',
  flag: '🇸🇳',
  landscapeImage: 'https://images.unsplash.com/photo-1489493512991-b651f477a8e1?w=800&q=80',
  description:
    'Senegal is a West African country known for vibrant culture, Atlantic beaches, and historic Gorée Island. It is famous for music and dance, rich culinary traditions, and the energetic capital, Dakar.',
  quickFacts: [
    { label: 'Capital', value: 'Dakar' },
    { label: 'Population', value: '17 million' },
    { label: 'Official Language', value: 'French' },
    { label: 'Currency', value: 'West African CFA Franc (XOF)' },
    { label: 'Area', value: '196,722 km²' },
  ],
  facts: [
    'Senegal is the westernmost country on mainland Africa',
    'Gorée Island is a UNESCO-listed site tied to the Atlantic slave trade history',
    'Lake Retba (Lac Rose) is famous for its pink hue under certain conditions',
    'Senegal is widely known for its wrestling tradition (laamb)',
    'Dakar is a major cultural and economic hub in West Africa',
    'Mbalax is a signature music style associated with Senegal',
    'The Senegal River forms part of the northern border region',
    'Street food and shared platters are central to everyday dining culture',
  ],
  foodCulture:
    'Senegalese cuisine is bold and comforting, built around rice, fish, vegetables, and sauces seasoned with garlic, onion, chili, and herbs. Dishes often feature tamarind, mustard, and fermented seasonings, and meals are commonly shared from a large communal plate.',

  history: [
    {
      year: '1400s–1600s',
      title: 'Atlantic Trade Era',
      description:
        'Coastal trading routes expanded, connecting Senegal\'s shoreline with wider Atlantic commerce and shaping early colonial encounters.',
    },
    {
      year: '1700s–1800s',
      title: 'Colonial Expansion',
      description:
        'French influence grew through coastal settlements and river trade, affecting governance, language, and urban development.',
    },
    {
      year: '1940s–1950s',
      title: 'Independence Movement',
      description:
        'Political organizing and cultural revival accelerated, setting the stage for a peaceful transition to sovereignty.',
    },
    {
      year: '1960',
      title: 'Independence',
      description:
        'Senegal became an independent nation with Dakar as its capital.',
    },
    {
      year: '1970s–Present',
      title: 'Culture and Global Influence',
      description:
        'Senegal developed a strong international profile through music, arts, and sport, with Dakar remaining a creative powerhouse.',
    },
  ],

  innovations: [
    {
      name: 'Dakar Rally Legacy',
      year: '1979',
      description:
        'The Dakar Rally popularized long-distance endurance motorsport linked to Senegal\'s capital and brought global attention to the region.',
    },
    {
      name: 'Mbalax Music',
      year: '1970s–1980s',
      description:
        'A modern genre blending sabar drumming traditions with contemporary sounds, helping Senegalese music reach worldwide audiences.',
    },
    {
      name: 'Thieboudienne (Culinary Landmark)',
      year: '1800s',
      description:
        'Often credited to Saint-Louis cooks, this iconic fish-and-rice dish became a defining culinary innovation of Senegal.',
    },
  ],

  mustVisit: [
    { name: 'Gorée Island', description: 'Historic island near Dakar with powerful museums and colonial-era streets.' },
    { name: 'Dakar (Plateau & Corniche)', description: 'Oceanfront promenades, markets, and a thriving arts and music scene.' },
    { name: 'Lac Rose (Lake Retba)', description: 'Famous pink-tinged lake (color varies with season and conditions).' },
    { name: 'Saint-Louis', description: 'Historic river city with colonial architecture and a strong cultural identity.' },
    { name: 'Sine-Saloum Delta', description: 'Mangroves, birdlife, and peaceful waterways ideal for eco-trips.' },
  ],

  travelEssentials: [
    { item: 'Best time to visit', description: 'November–May (dry season) for lower humidity and easier travel.' },
    { item: 'Getting around', description: 'In cities, taxis and ride-hailing are common; for regions, consider a driver or organized tours.' },
    { item: 'Language', description: 'French is official; Wolof is widely spoken and useful for greetings.' },
    { item: 'Cash', description: 'Carry some XOF for markets and small restaurants; cards are more common in major hotels.' },
    { item: 'Sun and heat', description: 'Bring sun protection and stay hydrated, especially along the coast.' },
    { item: 'Respectful markets', description: 'Bargaining is common—keep it friendly and polite.' },
  ],

  mainDish: {
    id: 'senegal-main',
    name: 'Thieboudienne (Ceebu Jën)',
    description:
      'Senegal\'s national dish: fish and rice simmered in a rich tomato-based sauce with vegetables and aromatic seasoning.',
    cookingTime: 90,
    servings: 6,
    dietType: 'fish',
    ingredients: [
      { name: 'Firm white fish (snapper, grouper, cod)', amount: 800, unit: 'g' },
      { name: 'Broken rice', amount: 500, unit: 'g' },
      { name: 'Tomato paste', amount: 4, unit: 'tbsp' },
      { name: 'Onions, chopped', amount: 2, unit: 'whole' },
      { name: 'Garlic cloves', amount: 4, unit: 'cloves' },
      { name: 'Parsley', amount: 20, unit: 'g' },
      { name: 'Carrots', amount: 3, unit: 'whole' },
      { name: 'Cabbage', amount: 300, unit: 'g' },
      { name: 'Eggplant', amount: 1, unit: 'whole' },
      { name: 'Cassava (yuca)', amount: 200, unit: 'g' },
      { name: 'Hot chili (optional)', amount: 1, unit: 'whole' },
      { name: 'Vegetable oil', amount: 3, unit: 'tbsp' },
      { name: 'Salt', amount: 2, unit: 'tsp' },
    ],
    steps: [
      'Rinse rice until water runs mostly clear; soak 15 minutes, then drain.',
      'Make a herb paste: blend parsley, garlic, a little onion, and a pinch of salt.',
      'Cut small slits in the fish and rub some herb paste into the fish.',
      'Heat oil in a large pot and lightly brown the fish 2 minutes per side; remove to a plate.',
      'Saute remaining onions in the same pot 5 minutes. Stir in tomato paste and cook 1 minute.',
      'Add 1.2 L water and bring to a simmer. Add salt and the chili (optional).',
      'Add the vegetables and simmer until just tender (about 15–25 minutes depending on size). Remove vegetables to a tray.',
      'Return fish to the sauce and simmer 8–10 minutes, then remove fish carefully.',
      'Add drained rice to the pot, stir once, cover, and cook on low 18–20 minutes until rice is tender and has absorbed the sauce.',
      'Serve rice on a platter, top with fish and vegetables, and spoon a little extra sauce over everything.',
    ],
    imageUrl: 'https://images.pexels.com/photos/31779545/pexels-photo-31779545.jpeg?auto=compress&cs=tinysrgb&h=350',
  },

  dessert: {
    id: 'senegal-dessert',
    name: 'Thiakry',
    description:
      'A popular Senegalese dessert: sweetened millet couscous mixed with creamy yogurt and often flavored with vanilla or nutmeg.',
    cookingTime: 25,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Millet couscous (or fine millet semolina)', amount: 250, unit: 'g' },
      { name: 'Plain yogurt', amount: 500, unit: 'g' },
      { name: 'Sugar', amount: 80, unit: 'g' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'Nutmeg (optional)', amount: 0.25, unit: 'tsp' },
      { name: 'Raisins (optional)', amount: 40, unit: 'g' },
    ],
    steps: [
      'Steam or hydrate millet couscous according to package instructions; let cool to room temperature.',
      'Whisk yogurt with sugar and vanilla (and nutmeg if using).',
      'Fold cooled millet couscous into the yogurt mixture.',
      'Add raisins if using and mix well.',
      'Chill at least 1 hour for best texture.',
      'Serve cold in small bowls or glasses.',
    ],
    imageUrl: 'https://images.pexels.com/photos/4162496/pexels-photo-4162496.jpeg?auto=compress&cs=tinysrgb&h=350',
  },

  drinks: {
    alcoholic: 'Local beer (e.g., Flag), Palm wine',
    nonAlcoholic: 'Bissap (hibiscus drink), Bouye (baobab drink), Ginger juice',
  },

  music: [
    'Mbalax',
    "Youssou N'Dour",
    'Traditional sabar drumming',
    'Afro-pop and hip-hop scenes in Dakar',
    'Griot storytelling traditions',
  ],

  decorationIdeas: [
    'Green, yellow, and red accents (flag colors)',
    'Wax print / West African textiles',
    'Baobab silhouettes',
    'Market-inspired baskets and fabrics',
    'Coastal blues for an Atlantic vibe',
  ],

  conversationStarters: [
    'Would you rather explore Dakar\'s markets or take a day trip to Gorée Island?',
    'Have you tried bissap (hibiscus) before?',
    'What music genre do you associate with West Africa?',
    'Would you visit Lac Rose if it\'s pink during your trip?',
    'Do you like spicy sauces with fish and rice dishes?',
  ],

  quiz: [
    {
      id: 'senegal-q1',
      question: 'What is the capital of Senegal?',
      options: ['Bamako', 'Dakar', 'Abidjan', 'Accra'],
      correctAnswer: 1,
    },
    {
      id: 'senegal-q2',
      question: 'Senegal is located in which part of Africa?',
      options: ['West Africa', 'East Africa', 'Southern Africa', 'Central Africa'],
      correctAnswer: 0,
    },
    {
      id: 'senegal-q3',
      question: 'What is Senegal\'s national dish commonly called?',
      options: ['Thieboudienne (Ceebu Jën)', 'Couscous', 'Tagine', 'Injera'],
      correctAnswer: 0,
    },
    {
      id: 'senegal-q4',
      question: 'Which island near Dakar is famous for its history related to the Atlantic slave trade?',
      options: ['Zanzibar', 'Gorée Island', 'Mauritius', 'Cape Verde'],
      correctAnswer: 1,
    },
    {
      id: 'senegal-q5',
      question: 'What is the official language of Senegal?',
      options: ['English', 'French', 'Portuguese', 'Arabic'],
      correctAnswer: 1,
    },
    {
      id: 'senegal-q6',
      question: 'Which drink is made from hibiscus and is popular in Senegal?',
      options: ['Bissap', 'Mate', 'Kvass', 'Ayran'],
      correctAnswer: 0,
    },
    {
      id: 'senegal-q7',
      question: 'Lake Retba is also known as:',
      options: ['Blue Lake', 'Lac Rose (Pink Lake)', 'Silver Lake', 'Black Lake'],
      correctAnswer: 1,
    },
    {
      id: 'senegal-q8',
      question: 'Senegal\'s Atlantic coastline is on which ocean?',
      options: ['Indian Ocean', 'Pacific Ocean', 'Atlantic Ocean', 'Arctic Ocean'],
      correctAnswer: 2,
    },
    {
      id: 'senegal-q9',
      question: 'Which music style is strongly associated with Senegal?',
      options: ['Flamenco', 'Mbalax', 'Polka', 'K-Pop'],
      correctAnswer: 1,
    },
    {
      id: 'senegal-q10',
      question: 'What currency is used in Senegal?',
      options: ['West African CFA Franc (XOF)', 'Euro (EUR)', 'Senegalese Dollar (SND)', 'Naira (NGN)'],
      correctAnswer: 0,
    },
  ],

  coordinates: { x: 44, y: 25 },
};
