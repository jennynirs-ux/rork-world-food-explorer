import { Country } from '@/types';

export const togo: Country = {
  id: 'togo',
  name: 'Togo',
  code: 'TG',
  continent: 'Africa',
  flag: '🇹🇬',
  landscapeImage: 'https://images.unsplash.com/photo-1489493512991-b651f477a8e1?w=800&q=80',
  description:
    'Togo is a narrow West African country known for palm-lined beaches, lively markets, hilltop villages, and cultural traditions where Vodun has historical roots alongside Christianity and Islam.',

  quickFacts: [
    { label: 'Capital', value: 'Lomé' },
    { label: 'Population', value: '8.5 million' },
    { label: 'Official Language', value: 'French' },
    { label: 'Currency', value: 'West African CFA Franc (XOF)' },
    { label: 'Area', value: '56,785 km²' },
  ],

  facts: [
    'Togo has a short Atlantic coastline (around 56 km), but a long north–south landscape range',
    'The country is home to many ethnic groups, including Ewe, Kabyé, Mina, and others',
    'Traditional religions (including Vodun) are practiced alongside Christianity and Islam',
    'Togo is one of the region’s notable phosphate producers',
    'Lomé is known for its busy markets, including craft and fetish markets',
    'The country stretches from coastal lagoons to savanna in the north',
  ],

  foodCulture:
    'Togolese cuisine features staples like maize, cassava, yams, plantain, beans, and spicy sauces. Meals are often built around a starchy base (like fufu or pâte) served with soups or stews, plus grilled fish or meat depending on region and season.',

  history: [
    {
      year: '1884',
      title: 'German Protectorate',
      description:
        'The coastal region became part of German Togoland during the colonial era.',
    },
    {
      year: '1914–1919',
      title: 'Partition After World War I',
      description:
        'After Germany’s defeat, Togoland was divided between British and French administration.',
    },
    {
      year: '1960',
      title: 'Independence',
      description:
        'Togo gained independence and Lomé became the capital of the modern state.',
    },
  ],

  innovations: [
    {
      name: 'Phosphate Industry',
      year: '20th Century',
      description:
        'Phosphate mining has been a major economic activity and export sector for decades.',
    },
    {
      name: 'Textiles & Wax Prints',
      year: 'Modern era',
      description:
        'Colorful fabrics and tailoring traditions are central to daily life and celebrations, with vibrant patterns used across West Africa.',
    },
  ],

  mustVisit: [
    {
      name: 'Lomé',
      description:
        'Beachfront energy, markets, craft stalls, and the everyday pulse of the capital.',
    },
    {
      name: 'Kpalimé',
      description:
        'A green region near hills and waterfalls, known for crafts and nature getaways.',
    },
    {
      name: 'Mount Agou',
      description:
        'The country’s highest point, offering hikes and scenic views.',
    },
    {
      name: 'Togoville (Lake Togo)',
      description:
        'A lakeside town with cultural history and local traditions.',
    },
    {
      name: 'Koutammakou (Batammariba area)',
      description:
        'A cultural landscape known for distinctive tower houses and heritage traditions.',
    },
  ],

  travelEssentials: [
    { item: 'Visa', description: 'Visa requirements vary by nationality; check before travel.' },
    {
      item: 'Best time to visit',
      description:
        'Dry season is generally easier for travel; timing varies slightly by region.',
    },
    {
      item: 'Transport',
      description:
        'Shared taxis and buses are common; plan extra time for intercity travel.',
    },
    {
      item: 'Money',
      description:
        'Cash is important for markets and transport; ATMs are mainly in larger towns.',
    },
    {
      item: 'Languages',
      description:
        'French is official; local languages (e.g., Ewe, Kabyé) are widely spoken.',
    },
    {
      item: 'Etiquette',
      description:
        'Greetings matter—take time to say hello before jumping into questions or business.',
    },
  ],

  mainDish: {
    id: 'togo-main',
    name: 'Fufu with Light Soup',
    description: 'Pounded cassava or yam served with a flavorful, spicy soup',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Cassava or yam', amount: 1, unit: 'kg' },
      { name: 'Goat or chicken', amount: 500, unit: 'g' },
      { name: 'Tomatoes', amount: 4, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Chili peppers', amount: 3, unit: 'whole' },
      { name: 'Palm oil', amount: 50, unit: 'ml' },
      { name: 'Salt', amount: 1.5, unit: 'tsp' },
      { name: 'Black pepper', amount: 0.5, unit: 'tsp' },
    ],
    steps: [
      'Boil cassava or yam until very soft',
      'Pound (or mash) until smooth and elastic; shape into balls',
      'For the soup: simmer meat with chopped tomatoes, onions, chilies, salt, and pepper',
      'Add palm oil and continue simmering until the meat is tender and flavors deepen',
      'Serve fufu with the hot soup on the side',
      'Eat by pinching off small pieces of fufu and dipping into the soup',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80',
  },

  dessert: {
    id: 'togo-dessert',
    name: 'Coconut Peanut Candy',
    description:
      'A simple sweet made by cooking shredded coconut with sugar and peanuts until sticky and caramelized.',
    cookingTime: 25,
    servings: 12,
    dietType: 'vegan',
    ingredients: [
      { name: 'Shredded coconut', amount: 200, unit: 'g' },
      { name: 'Roasted peanuts', amount: 150, unit: 'g' },
      { name: 'Sugar', amount: 150, unit: 'g' },
      { name: 'Water', amount: 60, unit: 'ml' },
      { name: 'Salt', amount: 0.25, unit: 'tsp' },
      { name: 'Vanilla (optional)', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Line a tray with baking paper',
      'Add sugar and water to a pan and heat until bubbling',
      'Stir in shredded coconut and salt',
      'Cook, stirring, until thick and sticky (about 8–10 minutes)',
      'Stir in peanuts and vanilla (optional)',
      'Spoon small mounds onto the tray',
      'Let cool completely until firm',
      'Serve as bite-size candies',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80',
  },

  drinks: {
    alcoholic: 'Palm wine, Tchoukoutou (millet beer)',
    nonAlcoholic: 'Bissap (hibiscus), Ginger juice',
  },

  music: [
    'Traditional Agbadja dance music',
    'Afrobeat and Afropop',
    'Highlife influences',
    'Local percussion-driven festival rhythms',
  ],

  decorationIdeas: [
    'Green, yellow, and red flag colors',
    'West African textiles and patterns',
    'Handwoven baskets and natural fibers',
    'Palm-leaf and coastal elements',
    'Masks and symbolic motifs (used respectfully)',
  ],

  conversationStarters: [
    'Have you tried fufu or any West African soups?',
    'Do you enjoy spicy sauces—mild heat or full fire?',
    'What do you know about West African coastal cultures?',
    'Have you seen West African wax print fashion in real life?',
  ],

  quiz: [
    {
      id: 'togo-q1',
      question: 'What is the capital of Togo?',
      options: ['Lomé', 'Accra', 'Cotonou', 'Ouagadougou'],
      correctAnswer: 0,
    },
    {
      id: 'togo-q2',
      question: 'Which continent is Togo located in?',
      options: ['Asia', 'South America', 'Africa', 'Europe'],
      correctAnswer: 2,
    },
    {
      id: 'togo-q3',
      question: 'What is the official language of Togo?',
      options: ['English', 'Portuguese', 'French', 'Arabic'],
      correctAnswer: 2,
    },
    {
      id: 'togo-q4',
      question: 'Which traditional religion has historical roots in Togo and the region?',
      options: ['Islam', 'Christianity', 'Vodun', 'Hinduism'],
      correctAnswer: 2,
    },
    {
      id: 'togo-q5',
      question: 'Which ocean borders Togo?',
      options: ['Indian Ocean', 'Atlantic Ocean', 'Pacific Ocean', 'Mediterranean Sea'],
      correctAnswer: 1,
    },
    {
      id: 'togo-q6',
      question: 'Togo is especially known for producing which mineral?',
      options: ['Gold', 'Diamonds', 'Phosphate', 'Copper'],
      correctAnswer: 2,
    },
    {
      id: 'togo-q7',
      question: 'What is fufu primarily made from?',
      options: ['Rice', 'Corn', 'Cassava or yam', 'Wheat'],
      correctAnswer: 2,
    },
    {
      id: 'togo-q8',
      question: 'Which African region does Togo belong to?',
      options: ['North Africa', 'East Africa', 'West Africa', 'Southern Africa'],
      correctAnswer: 2,
    },
    {
      id: 'togo-q9',
      question: 'How long is Togo’s coastline approximately?',
      options: ['15 km', '56 km', '120 km', '300 km'],
      correctAnswer: 1,
    },
    {
      id: 'togo-q10',
      question: 'Which traditional drink is commonly consumed in Togo?',
      options: ['Palm wine', 'Sake', 'Mate', 'Kvass'],
      correctAnswer: 0,
    },
  ],

  coordinates: { x: 47, y: 18 },
};
