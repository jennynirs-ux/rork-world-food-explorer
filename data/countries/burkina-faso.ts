import { Country } from '@/types';

export const burkinaFaso: Country = {
  id: 'burkina-faso',
  name: 'Burkina Faso',
  code: 'BF',
  continent: 'Africa',
  flag: '🇧🇫',
  landscapeImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
  description: 'Burkina Faso is a landlocked country in West Africa known for its vibrant music scene, traditional masks, and the biennial FESPACO film festival.',
  quickFacts: [
    { label: 'Capital', value: 'Ouagadougou' },
    { label: 'Population', value: '21 million' },
    { label: 'Official Language', value: 'French' },
    { label: 'Currency', value: 'West African CFA Franc' },
    { label: 'Area', value: '274,200 km²' },
  ],
  facts: [
    'Burkina Faso means "Land of Honest People"',
    'Hosts Africa\'s largest film festival, FESPACO',
    'Known for elaborate traditional masks',
    'The country has no coastline',
    'Thomas Sankara renamed the country from Upper Volta to Burkina Faso',
    'The country has over 60 ethnic groups',
    'Burkina Faso is one of the world\'s largest cotton producers',
    'Traditional music features the balafon, an African xylophone',
  ],
  foodCulture: 'Burkinabé cuisine features millet, sorghum, rice, and local vegetables with peanut-based sauces. Tô (porridge made from millet or sorghum) is a staple eaten with various sauces. Grilled meat and fresh vegetables from local markets are common.',
  history: [
    {
      year: '11th-19th Century',
      title: 'Mossi Kingdoms',
      description: 'Powerful Mossi kingdoms dominated the region, resisting Islamic conversion and maintaining traditional beliefs.'
    },
    {
      year: '1896',
      title: 'French Colonization',
      description: 'France established the colony of Upper Volta, exploiting resources and using forced labor.'
    },
    {
      year: '1960',
      title: 'Independence',
      description: 'Upper Volta gained independence from France, beginning an era of political instability.'
    },
    {
      year: '1983-1987',
      title: 'Thomas Sankara Era',
      description: 'Revolutionary leader Thomas Sankara renamed the country Burkina Faso and implemented radical reforms before his assassination.'
    },
    {
      year: '1987-2014',
      title: 'Blaise Compaoré Rule',
      description: 'Compaoré ruled for 27 years until popular uprising forced him from power.'
    },
  ],
  innovations: [
    {
      name: 'FESPACO Film Festival',
      year: '1969',
      description: 'Founded Africa\'s largest and most prestigious film festival, promoting African cinema and cultural exchange.'
    },
    {
      name: 'Traditional Mask Making',
      year: 'Ancient',
      description: 'Burkinabé artisans perfected intricate mask-making traditions that influenced art worldwide, particularly among Bobo and Bwa peoples.'
    },
    {
      name: 'Sankara\'s Reforms',
      year: '1980s',
      description: 'Thomas Sankara implemented innovative programs: mass vaccination, tree planting, women\'s rights, and self-sufficiency initiatives.'
    },
    {
      name: 'Cotton Production Techniques',
      year: '20th Century',
      description: 'Developed efficient organic and conventional cotton farming methods adapted to Sahel conditions.'
    },
  ],
  mustVisit: [
    { name: 'Ruins of Loropéni', description: 'UNESCO World Heritage Site with ancient stone fortifications, one of West Africa\'s best-preserved ruins.' },
    { name: 'Grand Mosque of Bobo-Dioulasso', description: 'Stunning Sudanese-style mud-brick mosque, a masterpiece of Sahelian architecture.' },
    { name: 'Karfiguéla Waterfalls', description: 'Beautiful cascading waterfalls near Banfora, perfect for swimming and picnicking.' },
    { name: 'Sindou Peaks', description: 'Dramatic rock formations with hiking trails offering spectacular views of natural stone pillars.' },
    { name: 'Nazinga Game Ranch', description: 'Wildlife reserve with elephants, buffalos, and various antelope species in natural savanna.' }
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Most visitors need a visa; e-visa available for some nationalities. Visa on arrival possible.' },
    { item: 'Best time to visit', description: 'November to February for cooler, dry weather. Avoid June-October rainy season.' },
    { item: 'Health precautions', description: 'Yellow fever vaccination required. Malaria prophylaxis essential.' },
    { item: 'Language', description: 'French is official. Learn basic French phrases; local languages include Mooré and Dioula.' },
    { item: 'Currency', description: 'West African CFA Franc. Bring cash as ATMs are limited outside Ouagadougou.' },
    { item: 'Safety', description: 'Check current security situation. Some border areas have travel warnings.' }
  ],
  mainDish: {
    id: 'burkina-main',
    name: 'Riz Gras',
    description: 'Rich rice cooked with meat and vegetables',
    cookingTime: 60,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Rice', amount: 500, unit: 'g' },
      { name: 'Beef or lamb', amount: 500, unit: 'g' },
      { name: 'Tomatoes', amount: 4, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Tomato paste', amount: 3, unit: 'tbsp' },
      { name: 'Vegetables', amount: 300, unit: 'g' },
    ],
    steps: [
      'Brown meat with onions',
      'Add tomatoes and tomato paste',
      'Add water and simmer until meat is tender',
      'Add rice and vegetables',
      'Cook until rice absorbs all liquid',
      'Serve hot with extra sauce',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600',
  },
  dessert: {
    id: 'burkina-dessert',
    name: 'Beignets',
    description: 'West African sweet fried dough balls, light and fluffy',
    cookingTime: 45,
    servings: 16,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'All-purpose flour', amount: 400, unit: 'g' },
      { name: 'Sugar', amount: 80, unit: 'g' },
      { name: 'Active dry yeast', amount: 2, unit: 'tsp' },
      { name: 'Warm milk', amount: 250, unit: 'ml' },
      { name: 'Egg', amount: 1, unit: 'large' },
      { name: 'Butter, melted', amount: 30, unit: 'g' },
      { name: 'Nutmeg', amount: 0.5, unit: 'tsp' },
      { name: 'Vegetable oil for frying', amount: 500, unit: 'ml' },
      { name: 'Powdered sugar for dusting', amount: 50, unit: 'g' },
    ],
    steps: [
      'Mix yeast with warm milk and 1 tbsp sugar, let foam 10 minutes.',
      'Combine flour, remaining sugar, and nutmeg.',
      'Add yeast mixture, egg, and melted butter.',
      'Mix into smooth, soft dough.',
      'Cover and let rise 1 hour until doubled.',
      'Heat oil to 180°C.',
      'Drop spoonfuls of dough into hot oil.',
      'Fry until golden brown, turning once.',
      'Drain on paper towels.',
      'Dust with powdered sugar while warm.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?w=600',
  },
  drinks: {
    alcoholic: 'Dolo (millet beer), Palm wine',
    nonAlcoholic: 'Bissap (hibiscus tea), Ginger juice, Baobab juice',
  },
  music: [
    'Balafon traditional music',
    'Afrobeat',
    'Traditional drum ensembles',
  ],
  decorationIdeas: [
    'Red, green and yellow flag colors',
    'Traditional masks',
    'Woven baskets',
    'African textiles',
  ],
  conversationStarters: [
    'Have you seen any African films?',
    'What do you know about West African art?',
    'Do you enjoy traditional music?',
  ],
  quiz: [
    {
      id: 'burkina-q1',
      question: 'What is the capital of Burkina Faso?',
      options: ['Bamako', 'Ouagadougou', 'Niamey', 'Abidjan'],
      correctAnswer: 1,
    },
    {
      id: 'burkina-q2',
      question: 'What does "Burkina Faso" mean?',
      options: ['Land of Peace', 'Land of Honest People', 'Land of Freedom', 'Land of Unity'],
      correctAnswer: 1,
    },
    {
      id: 'burkina-q3',
      question: 'What is FESPACO?',
      options: ['A national park', 'Africa\'s largest film festival', 'A political party', 'A traditional dance'],
      correctAnswer: 1,
    },
    {
      id: 'burkina-q4',
      question: 'What was Burkina Faso called before 1984?',
      options: ['French Sudan', 'Upper Volta', 'French Guinea', 'Dahomey'],
      correctAnswer: 1,
    },
    {
      id: 'burkina-q5',
      question: 'Which revolutionary leader renamed the country Burkina Faso?',
      options: ['Blaise Compaoré', 'Thomas Sankara', 'Maurice Yaméogo', 'Saye Zerbo'],
      correctAnswer: 1,
    },
    {
      id: 'burkina-q6',
      question: 'When did Burkina Faso gain independence?',
      options: ['1950', '1960', '1970', '1980'],
      correctAnswer: 1,
    },
    {
      id: 'burkina-q7',
      question: 'What is the main agricultural export of Burkina Faso?',
      options: ['Coffee', 'Cotton', 'Cocoa', 'Rice'],
      correctAnswer: 1,
    },
    {
      id: 'burkina-q8',
      question: 'What traditional instrument is popular in Burkina Faso?',
      options: ['Djembe', 'Kora', 'Balafon', 'Mbira'],
      correctAnswer: 2,
    },
    {
      id: 'burkina-q9',
      question: 'Which UNESCO World Heritage Site is in Burkina Faso?',
      options: ['Timbuktu', 'Ruins of Loropéni', 'Djenné', 'Island of Gorée'],
      correctAnswer: 1,
    },
    {
      id: 'burkina-q10',
      question: 'What is Burkina Faso known for producing?',
      options: ['Diamonds', 'Traditional masks', 'Rubber', 'Tea'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 46, y: 25 },
};
