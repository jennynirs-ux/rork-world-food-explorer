import { Country } from '@/types';

export const chad: Country = {
  id: 'chad',
  name: 'Chad',
  code: 'TD',
  continent: 'Africa',
  flag: '🇹🇩',
  landscapeImage: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80',
  description: 'Chad is a landlocked country in north-central Africa featuring the Sahara Desert, Lake Chad, and diverse ethnic groups.',
  quickFacts: [
    { label: 'Capital', value: 'N\'Djamena' },
    { label: 'Population', value: '17 million' },
    { label: 'Official Languages', value: 'French, Arabic' },
    { label: 'Currency', value: 'Central African CFA Franc' },
    { label: 'Area', value: '1,284,000 km²' },
  ],
  facts: [
    'Lake Chad has shrunk dramatically in recent decades',
    'Home to the Ennedi Plateau with ancient rock art',
    'Chad has over 200 ethnic groups',
    'The Tibesti Mountains contain Africa\'s highest volcano',
    'Chad is one of the most linguistically diverse countries in Africa',
    'The Sahara Desert covers the northern half of the country',
    'Chad has rich gold deposits in the north',
    'Zakouma National Park is home to recovering elephant populations',
  ],
  foodCulture: 'Chadian cuisine varies between the Arab north and African south, featuring millet, sorghum, and dried fish. In the north, Arab influences bring dates and camel meat, while the south enjoys more diverse vegetables and freshwater fish. Meals are communal and eaten by hand.',
  history: [
    {
      year: '7th century',
      title: 'Kanem-Bornu Empire',
      description: 'The powerful Kanem-Bornu Empire emerged around Lake Chad, becoming a major trading center for trans-Saharan routes.'
    },
    {
      year: '1900',
      title: 'French Colonial Rule',
      description: 'France colonized Chad, making it part of French Equatorial Africa despite fierce resistance from local populations.'
    },
    {
      year: '1960',
      title: 'Independence',
      description: 'Chad gained independence from France, though civil conflicts between north and south soon emerged.'
    },
    {
      year: '2003',
      title: 'Oil Production',
      description: 'Chad began exporting oil, transforming its economy despite ongoing political instability and conflict.'
    },
  ],
  innovations: [
    {
      name: 'Anti-Desertification Techniques',
      year: '1970s',
      description: 'Developed indigenous methods to combat Sahara expansion using traditional water conservation and tree planting adapted to extreme conditions.'
    },
    {
      name: 'Lake Chad Management',
      year: '1964',
      description: 'Founded the Lake Chad Basin Commission, one of Africa\'s earliest transboundary water management organizations.'
    },
    {
      name: 'Mobile Healthcare Networks',
      year: '2000s',
      description: 'Created innovative mobile health clinics to serve nomadic populations across vast desert regions.'
    },
    {
      name: 'Traditional Desert Navigation',
      year: 'Ancient',
      description: 'Perfected celestial navigation and sand-reading techniques still used by desert guides and studied by researchers worldwide.'
    },
  ],
  mustVisit: [
    { name: 'Zakouma National Park', description: 'One of Africa\'s best-kept secrets, with thriving elephant herds, lions, giraffes, and over 400 bird species.' },
    { name: 'Ennedi Plateau', description: 'Stunning sandstone formations with ancient rock art dating back 7,000 years, natural arches, and desert oases.' },
    { name: 'Tibesti Mountains', description: 'Dramatic volcanic peaks including Emi Koussi, Africa\'s highest volcano, with lunar-like landscapes.' },
    { name: 'Lake Chad', description: 'Historic lake shrinking due to climate change, but still vital for local communities and diverse birdlife.' },
    { name: 'Gaoui Village', description: 'Traditional village near N\'Djamena famous for pottery-making traditions passed down through generations.' }
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Most visitors require a visa obtained in advance. Travel permits needed for many regions.' },
    { item: 'Best time to visit', description: 'November to February for cooler, dry weather. March-May extremely hot. June-September rainy season in south.' },
    { item: 'Transportation', description: 'Limited public transport. Organized tours recommended. 4x4 vehicles essential for desert areas.' },
    { item: 'Language', description: 'French and Arabic are official. Over 120 local languages spoken. English rare.' },
    { item: 'Safety', description: 'Check travel advisories. Northern regions have security concerns. Travel with experienced guides.' },
  ],
  mainDish: {
    id: 'chad-main',
    name: 'Boule',
    description: 'Millet or sorghum porridge served with sauce',
    cookingTime: 45,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Millet or sorghum flour', amount: 500, unit: 'g' },
      { name: 'Dried fish or meat', amount: 200, unit: 'g' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Okra', amount: 200, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Palm oil', amount: 3, unit: 'tbsp' },
    ],
    steps: [
      'Boil water in large pot',
      'Gradually add flour while stirring',
      'Cook until thick porridge forms',
      'Make sauce with fish, tomatoes, and okra',
      'Simmer sauce until thick',
      'Serve boule with sauce on side',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600',
  },
  dessert: {
    id: 'chad-dessert',
    name: 'Maharagwe',
    description: 'Sweet bean dessert with coconut, popular in southern Chad',
    cookingTime: 60,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Red beans', amount: 400, unit: 'g' },
      { name: 'Coconut milk', amount: 400, unit: 'ml' },
      { name: 'Sugar', amount: 150, unit: 'g' },
      { name: 'Cinnamon powder', amount: 1, unit: 'tsp' },
      { name: 'Cardamom powder', amount: 0.5, unit: 'tsp' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Soak beans overnight in water',
      'Drain and rinse beans',
      'Boil beans in fresh water until soft (about 45 minutes)',
      'Drain beans and return to pot',
      'Add coconut milk, sugar, cinnamon, and cardamom',
      'Simmer on low heat for 15 minutes',
      'Stir in vanilla extract',
      'Serve warm or chilled as dessert',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600',
  },
  drinks: {
    alcoholic: 'Bili-bili (millet beer)',
    nonAlcoholic: 'Karkanji (hibiscus tea), Fresh milk',
  },
  music: [
    'Traditional Sai music',
    'Arabic influences',
    'Saharan rhythms',
  ],
  decorationIdeas: [
    'Blue, yellow and red flag colors',
    'Desert landscapes',
    'Traditional patterns',
    'Lake Chad imagery',
  ],
  conversationStarters: [
    'What do you know about the Sahara Desert?',
    'Have you explored Saharan cuisine?',
  ],
  quiz: [
    {
      id: 'chad-q1',
      question: 'What is the capital of Chad?',
      options: ['N\'Djamena', 'Bangui', 'Khartoum', 'Niamey'],
      correctAnswer: 0,
    },
    {
      id: 'chad-q2',
      question: 'What are the official languages of Chad?',
      options: ['English and Arabic', 'French and Arabic', 'French and Swahili', 'Arabic and Hausa'],
      correctAnswer: 1,
    },
    {
      id: 'chad-q3',
      question: 'How many ethnic groups does Chad have?',
      options: ['Over 50', 'Over 100', 'Over 200', 'Over 300'],
      correctAnswer: 2,
    },
    {
      id: 'chad-q4',
      question: 'What desert covers northern Chad?',
      options: ['Kalahari', 'Sahara', 'Namib', 'Arabian'],
      correctAnswer: 1,
    },
    {
      id: 'chad-q5',
      question: 'When did Chad gain independence?',
      options: ['1955', '1960', '1965', '1970'],
      correctAnswer: 1,
    },
    {
      id: 'chad-q6',
      question: 'What is the name of Chad\'s famous national park?',
      options: ['Serengeti', 'Zakouma', 'Kruger', 'Virunga'],
      correctAnswer: 1,
    },
    {
      id: 'chad-q7',
      question: 'Which mountain range contains Africa\'s highest volcano?',
      options: ['Atlas Mountains', 'Drakensberg', 'Tibesti Mountains', 'Simien Mountains'],
      correctAnswer: 2,
    },
    {
      id: 'chad-q8',
      question: 'What is Chad\'s traditional millet beer called?',
      options: ['Bili-bili', 'Pombe', 'Tej', 'Dolo'],
      correctAnswer: 0,
    },
    {
      id: 'chad-q9',
      question: 'The Ennedi Plateau is famous for:',
      options: ['Ancient rock art', 'Diamond mines', 'Tea plantations', 'Coral reefs'],
      correctAnswer: 0,
    },
    {
      id: 'chad-q10',
      question: 'What body of water is Chad named after?',
      options: ['Chad River', 'Lake Chad', 'Chad Ocean', 'Chad Gulf'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 50, y: 28 },
};
