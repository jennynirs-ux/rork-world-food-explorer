import { Country } from '@/types';

export const benin: Country = {
  id: 'benin',
  name: 'Benin',
  code: 'BJ',
  continent: 'Africa',
  flag: '🇧🇯',
  landscapeImage: 'https://images.unsplash.com/photo-1545447934-c06e65e3d58d?w=800&q=80',
  description: 'Benin is a West African nation, the birthplace of Vodun (Voodoo) religion, with a rich history as the site of the Kingdom of Dahomey.',
  quickFacts: [
    { label: 'Capital', value: 'Porto-Novo' },
    { label: 'Population', value: '12.5 million' },
    { label: 'Official Language', value: 'French' },
    { label: 'Currency', value: 'West African CFA Franc' },
    { label: 'Area', value: '114,763 km²' },
  ],
  facts: [
    'Benin is the birthplace of Vodun (Voodoo) religion',
    'The Kingdom of Dahomey was one of Africa\'s most powerful states',
    'Benin has beautiful stilt villages on Lake Nokoué',
    'The country was formerly called Dahomey',
    'Benin has a Door of No Return monument at Ouidah, marking the slave trade history',
    'The Amazon Warriors of Dahomey were an all-female military regiment',
    'Benin is home to Pendjari National Park with elephants and lions',
    'The country celebrates Voodoo Day as a national holiday',
  ],
  foodCulture: 'Beninese cuisine features yams, corn, beans, and palm oil. Spicy sauces and grilled fish are common. Akassa (fermented corn dough), peanut-based dishes, and red palm oil sauces are staples. Food is often eaten with hands and shared communally.',
  history: [
    {
      year: '1600-1894',
      title: 'Kingdom of Dahomey',
      description: 'A powerful West African kingdom known for its military prowess, especially the all-female Agojie (Amazon Warriors), and its wealth from trade.'
    },
    {
      year: '1892-1894',
      title: 'French Conquest',
      description: 'France conquered the Kingdom of Dahomey after fierce resistance, establishing colonial rule over the region.'
    },
    {
      year: '1960',
      title: 'Independence',
      description: 'Benin gained independence from France as the Republic of Dahomey.'
    },
    {
      year: '1975',
      title: 'Name Change to Benin',
      description: 'The country changed its name from Dahomey to the People\'s Republic of Benin, referencing the historic Benin Empire.'
    },
    {
      year: '1990',
      title: 'Democratic Transition',
      description: 'Benin transitioned to multi-party democracy, becoming a model for democratic reform in West Africa.'
    },
  ],
  innovations: [
    {
      name: 'Vodun (Voodoo) Religion',
      year: 'Ancient',
      description: 'Benin is the birthplace of Vodun, a complex spiritual system that spread to the Caribbean and Americas, influencing cultures worldwide.'
    },
    {
      name: 'Amazon Women Warriors',
      year: '17th-19th Century',
      description: 'The Kingdom of Dahomey created an elite all-female military unit, the Agojie, who fought alongside male soldiers and became legendary.'
    },
    {
      name: 'Stilt Village Architecture',
      year: 'Traditional',
      description: 'Communities built entire villages on stilts over Lake Nokoué, creating unique floating settlements adapted to aquatic life.'
    },
    {
      name: 'Democratic Model',
      year: '1990',
      description: 'Benin\'s peaceful transition to democracy in 1990 set a precedent for democratic reform across francophone Africa.'
    },
  ],
  mustVisit: [
    { name: 'Ganvié Stilt Village', description: 'Africa\'s largest lake village, built entirely on stilts over Lake Nokoué with 20,000+ residents.' },
    { name: 'Door of No Return', description: 'Poignant memorial in Ouidah marking where enslaved Africans were shipped across the Atlantic.' },
    { name: 'Royal Palaces of Abomey', description: 'UNESCO World Heritage Site with 12 palaces of the Kingdom of Dahomey, showcasing royal history.' },
    { name: 'Pendjari National Park', description: 'Wildlife sanctuary with elephants, lions, leopards, and over 300 bird species.' },
    { name: 'Python Temple', description: 'Sacred temple in Ouidah where pythons roam freely, central to Vodun spiritual practices.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'November to February for dry season with cooler temperatures.' },
    { item: 'Visa', description: 'Most visitors need a visa; e-visa available for many nationalities.' },
    { item: 'Language', description: 'French is official; Fon and Yoruba widely spoken locally.' },
    { item: 'Currency', description: 'West African CFA Franc (XOF). Bring euros to exchange; ATMs limited outside cities.' },
    { item: 'Health precautions', description: 'Yellow fever vaccination required. Malaria prophylaxis recommended.' },
    { item: 'Respect for traditions', description: 'Vodun is deeply respected; seek permission before photographing ceremonies.' }
  ],
  mainDish: {
    id: 'benin-main',
    name: 'Kuli-Kuli',
    description: 'Spiced fried peanut cakes',
    cookingTime: 45,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Roasted peanuts', amount: 500, unit: 'g' },
      { name: 'Onion powder', amount: 2, unit: 'tsp' },
      { name: 'Ground ginger', amount: 1, unit: 'tsp' },
      { name: 'Cayenne pepper', amount: 1, unit: 'tsp' },
      { name: 'Salt', amount: 1, unit: 'tsp' },
      { name: 'Vegetable oil for frying', amount: 200, unit: 'ml' },
    ],
    steps: [
      'Grind roasted peanuts into paste',
      'Extract excess oil from paste',
      'Mix with spices and salt',
      'Form into small cakes or sticks',
      'Deep fry until golden brown',
      'Serve as snack or appetizer',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600',
  },
  dessert: {
    id: 'benin-dessert',
    name: 'Yovo Doko (Puff Puff)',
    description: 'Sweet fried dough balls, popular West African snack',
    cookingTime: 60,
    servings: 20,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'All-purpose flour', amount: 500, unit: 'g' },
      { name: 'Sugar', amount: 100, unit: 'g' },
      { name: 'Active dry yeast', amount: 2, unit: 'tsp' },
      { name: 'Warm water', amount: 350, unit: 'ml' },
      { name: 'Salt', amount: 0.5, unit: 'tsp' },
      { name: 'Nutmeg', amount: 0.5, unit: 'tsp' },
      { name: 'Vegetable oil for frying', amount: 500, unit: 'ml' },
    ],
    steps: [
      'Mix yeast with warm water and 1 tbsp sugar, let foam for 10 minutes.',
      'Combine flour, remaining sugar, salt, and nutmeg in bowl.',
      'Add yeast mixture, mix into smooth batter.',
      'Cover and let rise in warm place for 45 minutes.',
      'Heat oil to 180°C in deep pot.',
      'Drop spoonfuls of batter into hot oil.',
      'Fry for 3-4 minutes, turning until golden brown all over.',
      'Remove with slotted spoon, drain on paper towels.',
      'Optional: roll in sugar while warm.',
      'Serve warm or at room temperature.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600',
  },
  drinks: {
    alcoholic: 'Palm wine, Local beer, Sodabi (palm liquor)',
    nonAlcoholic: 'Tchakpalo (millet drink), Bissap (hibiscus tea), Ginger juice',
  },
  music: [
    'Traditional Vodun music',
    'Zinli dance rhythms',
    'Afrobeat',
  ],
  decorationIdeas: [
    'Green, yellow and red flag colors',
    'Traditional masks',
    'Vodun spiritual symbols',
    'West African textiles',
  ],
  conversationStarters: [
    'What do you know about West African history?',
    'Have you explored African spiritual traditions?',
    'Do you enjoy spicy foods?',
  ],
  quiz: [
    {
      id: 'benin-q1',
      question: 'What is the capital of Benin?',
      options: ['Cotonou', 'Porto-Novo', 'Abomey', 'Parakou'],
      correctAnswer: 1,
    },
    {
      id: 'benin-q2',
      question: 'What religion was born in Benin?',
      options: ['Islam', 'Christianity', 'Vodun (Voodoo)', 'Buddhism'],
      correctAnswer: 2,
    },
    {
      id: 'benin-q3',
      question: 'What was Benin formerly called?',
      options: ['Dahomey', 'Beninia', 'French Benin', 'Upper Volta'],
      correctAnswer: 0,
    },
    {
      id: 'benin-q4',
      question: 'The Kingdom of Dahomey was famous for which all-female military unit?',
      options: ['Warriors of Light', 'Amazon Women (Agojie)', 'Shield Maidens', 'Royal Guard'],
      correctAnswer: 1,
    },
    {
      id: 'benin-q5',
      question: 'When did Benin gain independence from France?',
      options: ['1950', '1960', '1970', '1980'],
      correctAnswer: 1,
    },
    {
      id: 'benin-q6',
      question: 'What is the largest stilt village in Africa located in Benin?',
      options: ['Ouidah', 'Ganvié', 'Abomey', 'Cotonou'],
      correctAnswer: 1,
    },
    {
      id: 'benin-q7',
      question: 'What monument in Ouidah marks the slave trade history?',
      options: ['Gate of Sorrow', 'Door of No Return', 'Memorial Bridge', 'Freedom Arch'],
      correctAnswer: 1,
    },
    {
      id: 'benin-q8',
      question: 'Which UNESCO World Heritage Site contains 12 royal palaces?',
      options: ['Ganvié', 'Ouidah', 'Royal Palaces of Abomey', 'Porto-Novo Palace'],
      correctAnswer: 2,
    },
    {
      id: 'benin-q9',
      question: 'What year did Benin transition to democracy?',
      options: ['1980', '1985', '1990', '1995'],
      correctAnswer: 2,
    },
    {
      id: 'benin-q10',
      question: 'Which national park in Benin is home to elephants and lions?',
      options: ['Pendjari National Park', 'W National Park', 'Nokoué Reserve', 'Abomey Park'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 48, y: 19 },
};
