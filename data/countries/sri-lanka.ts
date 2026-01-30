import { Country } from '@/types';

export const sriLanka: Country = {
  id: 'sri-lanka',
  name: 'Sri Lanka',
  code: 'LK',
  continent: 'Asia',
  flag: '🇱🇰',
  landscapeImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
  description:
    'Sri Lanka is a tropical island nation known as the "Pearl of the Indian Ocean", famous for its tea plantations, ancient Buddhist sites, stunning beaches, and incredible wildlife.',
  quickFacts: [
    { label: 'Capital', value: 'Sri Jayawardenepura Kotte' },
    { label: 'Population', value: '22 million' },
    { label: 'Official Languages', value: 'Sinhala, Tamil' },
    { label: 'Currency', value: 'Sri Lankan Rupee (LKR)' },
    { label: 'Area', value: '65,610 km²' },
  ],
  facts: [
    "Sri Lanka produces some of the world's finest tea (Ceylon tea)",
    'The island has eight UNESCO World Heritage Sites',
    'Sri Lanka has the highest density of leopards in the world',
    "Adam's Peak is sacred to four major religions",
    'Sri Lanka was known as Ceylon until 1972',
    'The country has over 26 national parks',
    'Sigiriya Rock Fortress is an ancient engineering marvel',
    'Sri Lanka has a literacy rate of over 92%',
  ],
  foodCulture:
    'Sri Lankan cuisine is deeply aromatic and spice-driven, centered around rice served with multiple curries, sambols, and pickles. Coconut milk, curry leaves, chili, and spices are essential.',
  history: [
    {
      year: '543 BC',
      title: 'Arrival of Buddhism',
      description:
        "Buddhism was introduced to the island and became central to Sri Lanka's culture and identity.",
    },
    {
      year: '200 BC',
      title: 'Ancient Kingdoms',
      description:
        'Advanced civilizations built cities like Anuradhapura with sophisticated irrigation systems.',
    },
    {
      year: '1505',
      title: 'European Colonization',
      description:
        'Portuguese, Dutch, and later British rule shaped Sri Lanka for over 400 years.',
    },
    {
      year: '1948',
      title: 'Independence',
      description: 'Sri Lanka gained independence from British colonial rule.',
    },
    {
      year: '1972',
      title: 'Republic of Sri Lanka',
      description:
        'The country officially changed its name from Ceylon to Sri Lanka.',
    },
  ],
  travelEssentials: [
    {
      item: 'Best time to visit',
      description:
        'December–March for west and south coast, April–September for east coast',
    },
    {
      item: 'Visa',
      description:
        'Electronic Travel Authorization (ETA) required for most visitors',
    },
    {
      item: 'Transport',
      description:
        'Scenic trains, tuk-tuks, and buses are common and affordable',
    },
    {
      item: 'Clothing',
      description:
        'Light clothing recommended; modest dress required at temples',
    },
    {
      item: 'Wildlife safety',
      description: 'Always follow park guidelines when on safari',
    },
  ],
  mainDish: {
    id: 'sri-lanka-rice-and-curry',
    name: 'Sri Lankan Rice and Curry (Vegetarian)',
    description:
      'A traditional Sri Lankan meal consisting of steamed rice served with dhal curry, vegetable curries, and coconut sambol.',
    cookingTime: 90,
    servings: 4,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Basmati rice', amount: 600, unit: 'g' },
      { name: 'Red lentils (dhal)', amount: 200, unit: 'g' },
      { name: 'Potatoes', amount: 400, unit: 'g' },
      { name: 'Green beans', amount: 200, unit: 'g' },
      { name: 'Coconut milk', amount: 400, unit: 'ml' },
      { name: 'Onions', amount: 3, unit: 'medium' },
      { name: 'Tomatoes', amount: 2, unit: 'medium' },
      { name: 'Curry leaves', amount: 20, unit: 'pieces' },
      { name: 'Mustard seeds', amount: 2, unit: 'tsp' },
      { name: 'Ceylon curry powder', amount: 4, unit: 'tbsp' },
      { name: 'Turmeric', amount: 2, unit: 'tsp' },
      { name: 'Fresh grated coconut', amount: 150, unit: 'g' },
      { name: 'Green chili', amount: 1, unit: 'piece' },
      { name: 'Lime', amount: 1, unit: 'piece' },
      { name: 'Vegetable oil', amount: 4, unit: 'tbsp' },
      { name: 'Salt', amount: 2, unit: 'tsp' },
    ],
    steps: [
      'Rinse rice and cook in 1.2 liters of water with a pinch of salt; keep warm',
      'Boil lentils with turmeric and salt for 20 minutes until soft',
      'Heat oil, add mustard seeds, curry leaves, and sliced onion',
      'Add cooked lentils and coconut milk; simmer 10 minutes',
      'Cook diced potatoes in coconut milk, curry powder, salt, and water for 20 minutes',
      'Sauté green beans with onion, curry leaves, and turmeric until tender',
      'Prepare coconut sambol by mixing grated coconut, chopped chili, salt, and lime juice',
      'Taste and adjust seasoning of all curries',
      'Serve rice in the center with curries arranged around it',
      'Mix rice with curries while eating, as traditionally done',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600',
  },
  dessert: {
    id: 'sri-lanka-dessert',
    name: 'Watalappan',
    description:
      'A rich Sri Lankan coconut custard sweetened with jaggery and scented with cardamom.',
    cookingTime: 60,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Coconut milk', amount: 400, unit: 'ml' },
      { name: 'Jaggery (or brown sugar)', amount: 200, unit: 'g' },
      { name: 'Eggs', amount: 4, unit: 'large' },
      { name: 'Cardamom (ground)', amount: 1, unit: 'tsp' },
      { name: 'Nutmeg (optional)', amount: 0.25, unit: 'tsp' },
      { name: 'Vanilla (optional)', amount: 1, unit: 'tsp' },
      { name: 'Cashews (optional)', amount: 50, unit: 'g' },
    ],
    steps: [
      'Gently warm coconut milk with jaggery until dissolved (do not boil), then cool slightly',
      'Whisk eggs in a bowl until just combined (avoid making it foamy)',
      'Slowly whisk in the warm coconut-jaggery mixture',
      'Stir in cardamom and optional nutmeg/vanilla',
      'Strain mixture for a smooth custard (optional but recommended)',
      'Pour into ramekins or a baking dish; top with cashews if using',
      'Steam or bake in a water bath at 160°C for 35–45 minutes until just set',
      'Cool, then chill before serving',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1514511547116-1ff2dca2cfe3?w=600',
  },
  drinks: {
    alcoholic: 'Arrack (coconut spirit), Lion Lager',
    nonAlcoholic:
      'Ceylon tea, King coconut water, Ginger beer, Fresh lime juice',
  },
  music: [
    'Traditional Kandyan drumming',
    'Baila music',
    'Classical Sinhala songs',
    'Tamil folk music',
  ],
  decorationIdeas: [
    'Maroon, orange, and gold tones',
    'Tea plantation imagery',
    'Elephant motifs',
    'Buddha statues',
    'Colorful batik fabrics',
    'Tropical flowers',
  ],
  conversationStarters: [
    'Have you tried authentic Ceylon tea?',
    'Would you visit Sigiriya Rock Fortress?',
    'Sri Lanka has incredible wildlife — did you know about the leopards?',
    'The train ride through tea country is world-famous!',
  ],
  quiz: [
    {
      id: 'sri-lanka-q1',
      question: 'What was Sri Lanka previously called?',
      options: ['Burma', 'Ceylon', 'Siam', 'Formosa'],
      correctAnswer: 1,
    },
    {
      id: 'sri-lanka-q2',
      question: 'Which beverage is Sri Lanka especially famous for?',
      options: ['Coffee', 'Tea', 'Cocoa', 'Wine'],
      correctAnswer: 1,
    },
    {
      id: 'sri-lanka-q3',
      question: 'How many UNESCO World Heritage Sites are in Sri Lanka?',
      options: ['4', '6', '8', '10'],
      correctAnswer: 2,
    },
    {
      id: 'sri-lanka-q4',
      question: 'What is the capital of Sri Lanka?',
      options: ['Colombo', 'Kandy', 'Galle', 'Sri Jayawardenepura Kotte'],
      correctAnswer: 3,
    },
    {
      id: 'sri-lanka-q5',
      question: 'Which religion has the strongest historical influence?',
      options: ['Hinduism', 'Buddhism', 'Islam', 'Christianity'],
      correctAnswer: 1,
    },
    {
      id: 'sri-lanka-q6',
      question: 'Which animal is commonly seen on Sri Lankan safaris?',
      options: ['Tiger', 'Leopard', 'Lion', 'Cheetah'],
      correctAnswer: 1,
    },
    {
      id: 'sri-lanka-q7',
      question: 'What is the traditional Sri Lankan staple food?',
      options: ['Noodles', 'Bread', 'Rice and curry', 'Flatbread'],
      correctAnswer: 2,
    },
    {
      id: 'sri-lanka-q8',
      question: 'What is Adam’s Peak known for?',
      options: ['Volcano', 'Sacred footprint', 'Tea farming', 'Ancient fortress'],
      correctAnswer: 1,
    },
    {
      id: 'sri-lanka-q9',
      question: 'Which ocean surrounds Sri Lanka?',
      options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
      correctAnswer: 2,
    },
    {
      id: 'sri-lanka-q10',
      question: 'Which ingredient is essential in Sri Lankan cooking?',
      options: ['Cream', 'Coconut', 'Cheese', 'Butter'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 72, y: 22 },
};
