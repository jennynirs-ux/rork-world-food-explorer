import { Country } from '@/types';

export const cameroon: Country = {
  id: 'cameroon',
  name: 'Cameroon',
  code: 'CM',
  continent: 'Africa',
  flag: '🇨🇲',
  landscapeImage: 'https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=800&q=80',
  description: 'Cameroon is known as "Africa in Miniature" for its geological and cultural diversity, featuring beaches, deserts, mountains, rainforests, and savannas.',
  quickFacts: [
    { label: 'Capital', value: 'Yaoundé' },
    { label: 'Population', value: '27 million' },
    { label: 'Official Languages', value: 'French, English' },
    { label: 'Currency', value: 'Central African CFA Franc' },
    { label: 'Area', value: '475,442 km²' },
  ],
  facts: [
    'Cameroon is called "Africa in Miniature" due to its diversity',
    'Mount Cameroon is an active volcano and highest peak in West Africa',
    'The country is bilingual with French and English',
    'Cameroon has won the Africa Cup of Nations five times',
    'The country has over 200 ethnic groups and languages',
    'Cameroon\'s wildlife includes gorillas, elephants, and chimpanzees',
    'The national football team is nicknamed "The Indomitable Lions"',
    'Lake Nyos is known for its deadly limnic eruption in 1986',
  ],
  foodCulture: 'Cameroonian cuisine varies by region with influences from French and English colonialism. Staples include cassava, plantains, and groundnuts. Dishes are often spicy with rich sauces.',
  history: [
    {
      year: 'Pre-Colonial',
      title: 'Ancient Kingdoms',
      description: 'Various kingdoms including the Sao civilization and Kanem-Bornu Empire thrived in the region.'
    },
    {
      year: '1884',
      title: 'German Colonization',
      description: 'Germany established Kamerun as a colony, introducing plantations and infrastructure.'
    },
    {
      year: '1916',
      title: 'Allied Takeover',
      description: 'After WWI, Cameroon was divided between French and British administration.'
    },
    {
      year: '1960-1961',
      title: 'Independence',
      description: 'French Cameroon gained independence in 1960, followed by British Cameroons joining in 1961.'
    },
    {
      year: '1972',
      title: 'United Republic',
      description: 'Federal system was abolished, creating the United Republic of Cameroon.'
    },
  ],
  innovations: [
    {
      name: 'Bikutsi Music Genre',
      year: '20th Century',
      description: 'Developed unique musical style combining traditional rhythms with modern instruments, influencing African popular music.'
    },
    {
      name: 'Ecological Diversity Conservation',
      year: '1930s-Present',
      description: 'Protected diverse ecosystems from coast to savanna, serving as a model for biodiversity preservation.'
    },
    {
      name: 'Bilingual Education System',
      year: '1961',
      description: 'Successfully maintained both French and English as official languages in education and government.'
    },
    {
      name: 'Sustainable Cocoa Farming',
      year: '1990s',
      description: 'Pioneered fair trade and sustainable cocoa production methods adopted across West Africa.'
    },
  ],
  mustVisit: [
    { name: 'Mount Cameroon', description: 'Active volcano and West Africa\'s highest peak at 4,040m, with challenging hikes and stunning views.' },
    { name: 'Waza National Park', description: 'Northern savanna park with elephants, giraffes, lions, and over 300 bird species.' },
    { name: 'Limbe Beaches', description: 'Beautiful black sand beaches at the foot of Mount Cameroon with botanical gardens.' },
    { name: 'Foumban Royal Palace', description: 'Historic palace of the Bamoun sultans with museum showcasing traditional art and artifacts.' },
    { name: 'Kribi Beach', description: 'Pristine Atlantic coastline with unique Chutes de la Lobé waterfalls flowing into the ocean.' }
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Most visitors need a visa in advance. Some nationalities can get visa on arrival.' },
    { item: 'Best time to visit', description: 'November-February for dry season in north; June-September for south.' },
    { item: 'Languages', description: 'French and English official. Local languages include Fulfulde, Ewondo, Duala.' },
    { item: 'Currency', description: 'Central African CFA Franc. Bring euros for exchange; ATMs in major cities.' },
    { item: 'Health', description: 'Yellow fever vaccination required. Malaria prophylaxis essential.' },
    { item: 'Safety', description: 'Exercise caution. Some border regions have security concerns.' }
  ],
  mainDish: {
    id: 'cameroon-main',
    name: 'Ndolé',
    description: 'National dish with bitter leaves, peanuts, and meat or fish',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Ndolé leaves or spinach', amount: 500, unit: 'g' },
      { name: 'Beef or fish', amount: 500, unit: 'g' },
      { name: 'Peanut paste', amount: 200, unit: 'g' },
      { name: 'Crayfish powder', amount: 2, unit: 'tbsp' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Garlic', amount: 3, unit: 'cloves' },
    ],
    steps: [
      'Blanch and squeeze ndolé leaves to reduce bitterness',
      'Cook meat or fish with onions and garlic',
      'Add peanut paste and crayfish powder',
      'Stir in ndolé leaves',
      'Simmer until thick',
      'Serve with plantains or rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80',
  },
  dessert: {
    id: 'cameroon-dessert',
    name: 'Puff Puff',
    description: 'Sweet fried dough balls, a popular Cameroonian street snack',
    cookingTime: 50,
    servings: 20,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'All-purpose flour', amount: 500, unit: 'g' },
      { name: 'Sugar', amount: 120, unit: 'g' },
      { name: 'Active dry yeast', amount: 2, unit: 'tsp' },
      { name: 'Warm water', amount: 400, unit: 'ml' },
      { name: 'Salt', amount: 0.5, unit: 'tsp' },
      { name: 'Nutmeg', amount: 0.5, unit: 'tsp' },
      { name: 'Vegetable oil for frying', amount: 500, unit: 'ml' },
    ],
    steps: [
      'Mix yeast with warm water and 1 tbsp sugar, let sit 10 minutes.',
      'Combine flour, remaining sugar, salt, and nutmeg.',
      'Add yeast mixture and mix into smooth batter.',
      'Cover and let rise in warm place for 1 hour.',
      'Heat oil to 180°C in deep pot.',
      'Drop spoonfuls of batter into hot oil.',
      'Fry until golden brown all over, about 3-4 minutes.',
      'Turn occasionally for even cooking.',
      'Remove with slotted spoon, drain on paper towels.',
      'Serve warm or at room temperature.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1567982047351-76b6f93e38ee?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Palm wine, 33 Export beer, Guinness',
    nonAlcoholic: 'Bissap (hibiscus), Ginger beer, Fresh coconut water',
  },
  music: [
    'Makossa',
    'Bikutsi',
    'Afrobeats',
  ],
  decorationIdeas: [
    'Green, red and yellow flag colors',
    'Traditional masks',
    'African textiles',
    'Wildlife imagery',
  ],
  conversationStarters: [
    'Have you explored Central African cuisine?',
    'What do you know about African wildlife?',
    'Do you follow African football?',
  ],
  quiz: [
    {
      id: 'cameroon-q1',
      question: 'What is the capital of Cameroon?',
      options: ['Douala', 'Yaoundé', 'Bamenda', 'Garoua'],
      correctAnswer: 1,
    },
    {
      id: 'cameroon-q2',
      question: 'Why is Cameroon called "Africa in Miniature"?',
      options: ['It\'s the smallest country', 'It has all of Africa\'s climates and landscapes', 'It\'s shaped like Africa', 'It was a former colony'],
      correctAnswer: 1,
    },
    {
      id: 'cameroon-q3',
      question: 'What are Cameroon\'s official languages?',
      options: ['French only', 'English only', 'French and English', 'French and Portuguese'],
      correctAnswer: 2,
    },
    {
      id: 'cameroon-q4',
      question: 'What is Cameroon\'s national dish?',
      options: ['Jollof rice', 'Ndolé', 'Fufu', 'Egusi soup'],
      correctAnswer: 1,
    },
    {
      id: 'cameroon-q5',
      question: 'What is the highest peak in West Africa?',
      options: ['Mount Kilimanjaro', 'Mount Kenya', 'Mount Cameroon', 'Mount Meru'],
      correctAnswer: 2,
    },
    {
      id: 'cameroon-q6',
      question: 'How many times has Cameroon won the Africa Cup of Nations?',
      options: ['Three', 'Four', 'Five', 'Six'],
      correctAnswer: 2,
    },
    {
      id: 'cameroon-q7',
      question: 'When did French Cameroon gain independence?',
      options: ['1950', '1960', '1970', '1980'],
      correctAnswer: 1,
    },
    {
      id: 'cameroon-q8',
      question: 'What is Cameroon\'s football team nicknamed?',
      options: ['The Eagles', 'The Lions', 'The Indomitable Lions', 'The Panthers'],
      correctAnswer: 2,
    },
    {
      id: 'cameroon-q9',
      question: 'Which music genre originated in Cameroon?',
      options: ['Afrobeat', 'Makossa', 'Highlife', 'Soukous'],
      correctAnswer: 1,
    },
    {
      id: 'cameroon-q10',
      question: 'What type of volcano is Mount Cameroon?',
      options: ['Dormant', 'Extinct', 'Active', 'Shield'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 49, y: 18 },
};
