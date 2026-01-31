import { Country } from '@/types';

export const coteDivoire: Country = {
  id: 'cote-divoire',
  name: 'Côte d\'Ivoire',
  code: 'CI',
  continent: 'Africa',
  flag: '🇨🇮',
  landscapeImage: 'https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?w=800',
  description: 'Côte d\'Ivoire (Ivory Coast) is the world\'s largest cocoa producer with vibrant culture and beautiful beaches. A blend of French colonial heritage and diverse African traditions.',
  quickFacts: [
    { label: 'Capital', value: 'Yamoussoukro (political), Abidjan (economic)' },
    { label: 'Population', value: '27 million' },
    { label: 'Official Language', value: 'French' },
    { label: 'Currency', value: 'West African CFA Franc' },
    { label: 'Area', value: '322,463 km²' },
  ],
  facts: [
    'Produces over 40% of the world\'s cocoa',
    'Yamoussoukro has the world\'s largest church',
    'The country has over 60 ethnic groups',
    'Abidjan is called the "Paris of West Africa"',
    'The name means "Ivory Coast" in French',
    'The Basilica of Our Lady of Peace is larger than St. Peter\'s in Rome',
    'Home to Taï National Park, a UNESCO World Heritage Site',
    'Côte d\'Ivoire is the economic powerhouse of francophone West Africa',
  ],
  foodCulture: 'Ivorian cuisine features cassava, plantains, rice, and seafood. French colonial influence is evident in baguettes and coffee culture. Spicy stews and grilled fish are popular. Attiéké (cassava couscous) is a staple, and street food culture is vibrant.',
  history: [
    {
      year: 'Pre-colonial',
      title: 'Ancient Kingdoms',
      description: 'Various kingdoms including the Kong Empire thrived through trans-Saharan trade routes.'
    },
    {
      year: '1843',
      title: 'French Colonization',
      description: 'France established trading posts, eventually creating the colony of Ivory Coast.'
    },
    {
      year: '1960',
      title: 'Independence',
      description: 'Côte d\'Ivoire gained independence with Félix Houphouët-Boigny as first president, bringing stability and growth.'
    },
    {
      year: '2002-2011',
      title: 'Civil War',
      description: 'Political crisis led to division of the country and civil conflict, ending with 2011 elections.'
    },
  ],
  innovations: [
    {
      name: 'Cocoa Production Methods',
      year: '20th century',
      description: 'Developed advanced cocoa farming and processing techniques that made Côte d\'Ivoire the world\'s top producer, supplying 40% of global cocoa.'
    },
    {
      name: 'Basilica of Our Lady of Peace',
      year: '1990',
      description: 'Built the world\'s largest church in Yamoussoukro, showcasing innovative architecture and engineering.'
    },
    {
      name: 'Coupé-Décalé Music',
      year: '2000s',
      description: 'Created this vibrant dance music genre that swept across Africa and influenced global African pop music.'
    },
    {
      name: 'West African Economic Hub',
      year: '1960s-present',
      description: 'Developed Abidjan into the major economic center of francophone West Africa with modern port facilities.'
    },
  ],
  mustVisit: [
    { name: 'Basilica of Our Lady of Peace', description: 'World\'s largest church in Yamoussoukro with stunning architecture, larger than St. Peter\'s Basilica.' },
    { name: 'Grand-Bassam', description: 'UNESCO World Heritage Site, former colonial capital with beautiful beaches and French colonial architecture.' },
    { name: 'Taï National Park', description: 'UNESCO rainforest reserve with rare primates, pygmy hippos, and incredible biodiversity.' },
    { name: 'Abidjan', description: 'Modern economic capital with vibrant markets, St. Paul\'s Cathedral, and lively nightlife scene.' },
    { name: 'Man Region', description: 'Mountainous area with beautiful landscapes, waterfalls, and unique stilt-house villages.' }
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Most visitors need visa in advance or e-visa. Some nationalities get visa on arrival.' },
    { item: 'Best time to visit', description: 'November to March for dry season along the coast.' },
    { item: 'Language', description: 'French is essential. Very limited English. Learn basic French phrases.' },
    { item: 'Currency', description: 'West African CFA Franc. Euros can be exchanged. ATMs in major cities.' },
    { item: 'Health precautions', description: 'Yellow fever vaccination required. Malaria prophylaxis recommended.' },
    { item: 'Safety', description: 'Generally safe in tourist areas. Exercise caution and follow local advice.' }
  ],
  mainDish: {
    id: 'cote-divoire-main',
    name: 'Kedjenou',
    description: 'Slow-cooked chicken stew with vegetables in a sealed pot',
    cookingTime: 90,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken pieces', amount: 1, unit: 'kg' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Eggplant', amount: 1, unit: 'whole' },
      { name: 'Ginger', amount: 20, unit: 'g' },
      { name: 'Garlic', amount: 4, unit: 'cloves' },
      { name: 'Scotch bonnet pepper', amount: 1, unit: 'whole' },
      { name: 'Bay leaves', amount: 2, unit: 'whole' },
    ],
    steps: [
      'Layer all ingredients in a clay pot or Dutch oven',
      'Do not add water - ingredients will create their own sauce',
      'Seal pot tightly with foil or lid',
      'Cook over very low heat for 1.5 hours',
      'Shake pot occasionally instead of stirring',
      'Check that chicken is tender and cooked through',
      'Season with salt if needed',
      'Serve with attiéké (cassava couscous) or rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600',
  },
  drinks: {
    alcoholic: 'Bangui (palm wine), Flag beer, Ivoire beer',
    nonAlcoholic: 'Bissap (hibiscus), Gnamakoudji (ginger drink), Fresh coconut water',
  },
  music: [
    'Coupé-Décalé',
    'Zouglou',
    'Traditional Baoulé music',
    'Afrobeat',
  ],
  decorationIdeas: [
    'Orange, white, and green flag colors',
    'Cocoa pod imagery',
    'Traditional Kente cloth patterns',
    'Tropical rainforest themes',
    'West African masks',
  ],
  conversationStarters: [
    'Do you enjoy chocolate? Most cocoa comes from here!',
    'Have you tried West African cuisine?',
    'What do you know about French-speaking Africa?',
    'Have you been to tropical West Africa?',
  ],
  quiz: [
    {
      id: 'cote-divoire-q1',
      question: 'What is Côte d\'Ivoire the world\'s largest producer of?',
      options: ['Coffee', 'Cocoa', 'Bananas', 'Rubber'],
      correctAnswer: 1,
    },
    {
      id: 'cote-divoire-q2',
      question: 'What is the economic capital of Côte d\'Ivoire?',
      options: ['Yamoussoukro', 'Abidjan', 'Bouaké', 'San Pedro'],
      correctAnswer: 1,
    },
    {
      id: 'cote-divoire-q3',
      question: 'What does "Côte d\'Ivoire" mean in English?',
      options: ['Gold Coast', 'Ivory Coast', 'Pepper Coast', 'Grain Coast'],
      correctAnswer: 1,
    },
    {
      id: 'cote-divoire-q4',
      question: 'What is the political capital of Côte d\'Ivoire?',
      options: ['Abidjan', 'Yamoussoukro', 'Bouaké', 'Grand-Bassam'],
      correctAnswer: 1,
    },
    {
      id: 'cote-divoire-q5',
      question: 'When did Côte d\'Ivoire gain independence?',
      options: ['1955', '1960', '1965', '1970'],
      correctAnswer: 1,
    },
    {
      id: 'cote-divoire-q6',
      question: 'What is the traditional Ivorian cassava dish called?',
      options: ['Fufu', 'Attiéké', 'Banku', 'Ugali'],
      correctAnswer: 1,
    },
    {
      id: 'cote-divoire-q7',
      question: 'What music genre originated in Côte d\'Ivoire?',
      options: ['Afrobeat', 'Coupé-Décalé', 'Highlife', 'Makossa'],
      correctAnswer: 1,
    },
    {
      id: 'cote-divoire-q8',
      question: 'Which city is called the "Paris of West Africa"?',
      options: ['Dakar', 'Lagos', 'Abidjan', 'Accra'],
      correctAnswer: 2,
    },
    {
      id: 'cote-divoire-q9',
      question: 'What is the traditional slow-cooked chicken stew called?',
      options: ['Yassa', 'Mafe', 'Kedjenou', 'Jollof'],
      correctAnswer: 2,
    },
    {
      id: 'cote-divoire-q10',
      question: 'How much of the world\'s cocoa does Côte d\'Ivoire produce?',
      options: ['20%', '30%', '40%', '50%'],
      correctAnswer: 2,
    },
  ],
  dessert: {
    id: 'cote-divoire-dessert',
    name: 'Aloco',
    description: 'Fried plantains served with spicy pepper sauce, a beloved Ivorian street food dessert',
    cookingTime: 20,
    servings: 4,
    dietType: 'vegan',
    ingredients: [
      { name: 'Ripe plantains', amount: 4, unit: 'whole' },
      { name: 'Vegetable oil for frying', amount: 300, unit: 'ml' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Scotch bonnet pepper', amount: 1, unit: 'whole' },
      { name: 'Ginger', amount: 10, unit: 'g' },
    ],
    steps: [
      'Peel and slice plantains diagonally into thick pieces.',
      'Heat oil to 180°C in deep pan.',
      'Fry plantain slices until golden brown, about 3-4 minutes per side.',
      'Remove and drain on paper towels.',
      'Make sauce: blend tomatoes, onions, pepper, and ginger.',
      'Cook sauce in pan until thickened, about 10 minutes.',
      'Season with salt.',
      'Serve hot aloco with spicy tomato sauce on the side.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600',
  },
  coordinates: { x: 46, y: 18 },
};
