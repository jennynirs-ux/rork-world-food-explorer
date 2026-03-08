import { Country } from '@/types';

export const angola: Country = {
  id: 'angola',
  name: 'Angola',
  code: 'AO',
  continent: 'Africa',
  flag: '🇦🇴',
  landscapeImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
  description:
    'Angola is a large and diverse country in southern Africa, stretching from Atlantic beaches to savannas and rainforests. It combines deep indigenous traditions with Portuguese colonial heritage and is known for music, dance, and rich natural resources.',
  quickFacts: [
    { label: 'Capital', value: 'Luanda' },
    { label: 'Population', value: '34 million' },
    { label: 'Official Language', value: 'Portuguese' },
    { label: 'Currency', value: 'Kwanza (AOA)' },
    { label: 'Area', value: '1,246,700 km²' },
  ],
  facts: [
    'Angola is one of the largest countries in Africa by area',
    'Portuguese is the official language, reflecting colonial history',
    'Angola is one of Africa’s top oil producers',
    'Luanda has historically been one of the most expensive cities in the world',
    'The giant sable antelope is endemic to Angola',
    'Angola has more than 90 ethnic groups',
    'The country endured a long civil war that ended in 2002',
    'Angolan music and dance styles are internationally influential',
  ],
  foodCulture:
    'Angolan cuisine blends indigenous African cooking with Portuguese influences. Meals often feature palm oil, cassava, beans, peanuts, seafood, and spicy sauces. Communal meals and slow-cooked stews are central to daily life.',
  history: [
    {
      year: 'Before 1400',
      title: 'Pre-Colonial Kingdoms',
      description:
        'Powerful states such as the Kingdom of Kongo and Ndongo governed large areas, with structured trade, diplomacy, and agriculture.',
    },
    {
      year: '1482',
      title: 'Portuguese Arrival',
      description:
        'Portuguese explorers arrived on the coast, beginning centuries of trade, missionary activity, and colonization.',
    },
    {
      year: '1600s–1800s',
      title: 'Slave Trade Era',
      description:
        'Angola became a major center of the transatlantic slave trade, profoundly impacting society and demographics.',
    },
    {
      year: '1950s–1975',
      title: 'Independence Struggle',
      description:
        'Armed liberation movements fought Portuguese rule, leading to independence in 1975.',
    },
    {
      year: '1975–2002',
      title: 'Civil War',
      description:
        'A prolonged civil war followed independence, shaping modern Angola’s political and economic development.',
    },
    {
      year: '2002–Present',
      title: 'Reconstruction & Growth',
      description:
        'Since the war ended, Angola has focused on rebuilding infrastructure, education, and economic diversification.',
    },
  ],
  innovations: [
    {
      name: 'Semba Music',
      year: 'Traditional',
      description:
        'Semba originated in Angola and directly influenced Brazilian samba, shaping global music history.',
    },
    {
      name: 'Kizomba',
      year: '1980s',
      description:
        'A slow, expressive partner dance and music style that became globally popular.',
    },
    {
      name: 'Palm Oil Cuisine',
      year: 'Traditional',
      description:
        'Angolan cooking techniques using red palm oil influenced cuisines across the Atlantic world.',
    },
    {
      name: 'Cassava-Based Staples',
      year: 'Ancient',
      description:
        'Mastery of cassava processing led to durable foods like funge, central to Angolan diets.',
    },
  ],
  mustVisit: [
    { name: 'Luanda', description: 'Capital city with beaches, museums, and colonial architecture.' },
    { name: 'Kalandula Falls', description: 'One of Africa’s largest waterfalls by volume.' },
    { name: 'Miradouro da Lua', description: 'Moon-like cliffs shaped by erosion near the coast.' },
    { name: 'Iona National Park', description: 'Desert landscapes, wildlife, and dramatic scenery.' },
    { name: 'Benguela', description: 'Historic coastal city with beaches and railway heritage.' },
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'May–September for drier weather and cooler temperatures.' },
    { item: 'Visa', description: 'Many nationalities require a visa; check in advance.' },
    { item: 'Language', description: 'Portuguese is essential; English is limited outside cities.' },
    { item: 'Cash', description: 'ATMs and card use are limited; carry local currency.' },
    { item: 'Health', description: 'Vaccinations and malaria precautions are recommended.' },
  ],

  // DINNER RECIPE – VERY SPECIFIC
  mainDish: {
    id: 'angola-main',
    name: 'Muamba de Galinha',
    description:
      'Angola’s national dish: chicken slowly simmered in red palm oil with vegetables, garlic, and chili, served with funge.',
    cookingTime: 80,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken pieces (bone-in)', amount: 1.2, unit: 'kg' },
      { name: 'Red palm oil', amount: 150, unit: 'ml' },
      { name: 'Onions, finely chopped', amount: 2, unit: 'medium' },
      { name: 'Garlic cloves, minced', amount: 6, unit: 'cloves' },
      { name: 'Tomatoes, grated', amount: 3, unit: 'medium' },
      { name: 'Okra, sliced', amount: 300, unit: 'g' },
      { name: 'Butternut squash, cubed', amount: 300, unit: 'g' },
      { name: 'Fresh chili peppers', amount: 2, unit: 'whole' },
      { name: 'Bay leaves', amount: 2, unit: 'whole' },
      { name: 'Salt', amount: 2, unit: 'tsp' },
      { name: 'Black pepper', amount: 1, unit: 'tsp' },
      { name: 'Water', amount: 800, unit: 'ml' },
    ],
    steps: [
      'Season chicken with salt, pepper, and half of the minced garlic. Rest 15 minutes.',
      'Heat palm oil in a heavy pot over medium heat.',
      'Brown chicken pieces on all sides (6–8 minutes). Remove and set aside.',
      'Add onions to the oil and sauté 8 minutes until soft.',
      'Add remaining garlic and cook 30 seconds.',
      'Stir in grated tomatoes and bay leaves; cook 5 minutes.',
      'Return chicken to pot and add 800 ml water.',
      'Cover and simmer gently for 30 minutes.',
      'Add squash and chili peppers; cook 15 minutes.',
      'Add okra and cook final 10 minutes until thickened.',
      'Taste and adjust seasoning. Serve hot with funge or rice.',
    ],
    imageUrl: 'https://images.pexels.com/photos/27397342/pexels-photo-27397342.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },

  dessert: {
    id: 'angola-dessert',
    name: 'Cocada Amarela',
    description: 'A dense coconut-and-egg custard dessert influenced by Portuguese traditions',
    cookingTime: 45,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Grated coconut', amount: 300, unit: 'g' },
      { name: 'Sugar', amount: 250, unit: 'g' },
      { name: 'Egg yolks', amount: 10, unit: 'large' },
      { name: 'Water', amount: 200, unit: 'ml' },
    ],
    steps: [
      'Boil sugar and water to form a light syrup (5 minutes).',
      'Add coconut and cook 10 minutes, stirring constantly.',
      'Remove from heat and cool slightly.',
      'Whisk egg yolks and slowly mix into coconut mixture.',
      'Return to low heat and stir until thick.',
      'Pour into greased dish and bake at 180°C for 20 minutes.',
      'Cool before slicing.',
    ],
    imageUrl: 'https://images.pexels.com/photos/34682283/pexels-photo-34682283.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },

  drinks: {
    alcoholic: 'Cuca beer, Eka beer, Palm wine',
    nonAlcoholic: 'Ginger drink, Coffee, Fresh fruit juices',
  },
  music: [
    'Semba',
    'Kizomba',
    'Kuduro',
    'Afro-pop',
    'Traditional percussion music',
  ],
  decorationIdeas: [
    'Red, black, and yellow colors',
    'Wooden masks and sculptures',
    'Palm and tropical motifs',
    'Textiles with geometric patterns',
  ],
  conversationStarters: [
    'Have you heard of kizomba or semba music?',
    'What do you know about Angolan cuisine?',
    'Have you tried muamba de galinha?',
    'What would you like to learn about Angola?',
  ],
  quiz: [
    {
      id: 'angola-q1',
      question: 'What is the capital of Angola?',
      options: ['Benguela', 'Luanda', 'Huambo', 'Lobito'],
      correctAnswer: 1,
    },
    {
      id: 'angola-q2',
      question: 'What is Angola\'s official language?',
      options: ['English', 'Spanish', 'Portuguese', 'French'],
      correctAnswer: 2,
    },
    {
      id: 'angola-q3',
      question: 'Which music style originated in Angola?',
      options: ['Samba', 'Semba', 'Salsa', 'Rumba'],
      correctAnswer: 1,
    },
    {
      id: 'angola-q4',
      question: 'What is Angola\'s national dish?',
      options: ['Feijoada', 'Muamba de Galinha', 'Moqueca', 'Bacalhau'],
      correctAnswer: 1,
    },
    {
      id: 'angola-q5',
      question: 'When did Angola gain independence?',
      options: ['1960', '1975', '1990', '2002'],
      correctAnswer: 1,
    },
    {
      id: 'angola-q6',
      question: 'What is the name of Angola\'s currency?',
      options: ['Peso', 'Kwanza', 'Rand', 'Dollar'],
      correctAnswer: 1,
    },
    {
      id: 'angola-q7',
      question: 'Which animal is endemic to Angola?',
      options: ['Mountain gorilla', 'Giant sable antelope', 'Snow leopard', 'Bengal tiger'],
      correctAnswer: 1,
    },
    {
      id: 'angola-q8',
      question: 'What is one of Africa\'s largest waterfalls located in Angola?',
      options: ['Victoria Falls', 'Kalandula Falls', 'Tugela Falls', 'Murchison Falls'],
      correctAnswer: 1,
    },
    {
      id: 'angola-q9',
      question: 'Which dance and music style originated in Angola in the 1980s?',
      options: ['Samba', 'Kizomba', 'Tango', 'Flamenco'],
      correctAnswer: 1,
    },
    {
      id: 'angola-q10',
      question: 'When did Angola\'s civil war end?',
      options: ['1975', '1990', '2002', '2010'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 52, y: 59 },
};
