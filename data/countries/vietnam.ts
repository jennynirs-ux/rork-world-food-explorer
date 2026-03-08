import { Country } from '@/types';

export const vietnam: Country = {
  id: 'vietnam',
  name: 'Vietnam',
  code: 'VN',
  continent: 'Asia',
  flag: '🇻🇳',
  landscapeImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
  description:
    'Vietnam is a Southeast Asian country known for its beaches, rivers, Buddhist pagodas, and bustling cities. Rich history, world-famous cuisine, and dramatic landscapes define the nation.',
  quickFacts: [
    { label: 'Capital', value: 'Hanoi' },
    { label: 'Population', value: '98.2 million' },
    { label: 'Official Language', value: 'Vietnamese' },
    { label: 'Currency', value: 'Vietnamese Dong (₫)' },
    { label: 'Area', value: '331,212 km²' },
  ],
  facts: [
    'Vietnamese is a tonal language with six tones',
    'Vietnam is the world’s second-largest coffee exporter',
    'Motorbikes are the most common form of transport',
    'Ha Long Bay contains over 1,600 limestone islands',
    'Son Doong is the world’s largest cave',
    'The country stretches over 1,650 km north to south',
    'Street food culture is central to daily life',
    'Rice is the staple food across the country',
  ],
  foodCulture:
    'Vietnamese cuisine focuses on balance, freshness, and harmony between sweet, sour, salty, bitter, and spicy flavors. Herbs, vegetables, rice noodles, and light broths are central, and street food is an essential part of everyday life.',
  history: [
    {
      year: '111 BC – 938 AD',
      title: 'Chinese Rule',
      description:
        'Vietnam was under Chinese domination for over a millennium, shaping its language, philosophy, and governance.',
    },
    {
      year: '1954',
      title: 'Division of Vietnam',
      description:
        'After French defeat, Vietnam was divided into North and South.',
    },
    {
      year: '1955–1975',
      title: 'Vietnam War',
      description:
        'A prolonged and devastating conflict that ended with reunification.',
    },
    {
      year: '1986',
      title: 'Đổi Mới Reforms',
      description:
        'Economic reforms opened Vietnam to global markets and rapid growth.',
    },
  ],
  innovations: [
    {
      name: 'Ao Dai',
      year: '18th century',
      description:
        'The traditional Vietnamese dress symbolizing elegance and identity.',
    },
    {
      name: 'Phin Coffee Filter',
      year: '1800s',
      description:
        'A slow-drip metal filter creating Vietnam’s signature strong coffee.',
    },
    {
      name: 'Bamboo Basket Boats',
      year: 'Ancient',
      description:
        'Circular bamboo boats still used by fishermen today.',
    },
  ],
  mustVisit: [
    {
      name: 'Ha Long Bay',
      description:
        'UNESCO-listed bay with emerald waters and limestone islands.',
    },
    {
      name: 'Hoi An',
      description:
        'Ancient trading town known for lanterns and preserved architecture.',
    },
    {
      name: 'Sapa',
      description:
        'Mountain region with dramatic rice terraces and ethnic minorities.',
    },
    {
      name: 'Mekong Delta',
      description:
        'Lush river delta with floating markets and canals.',
    },
    {
      name: 'Cu Chi Tunnels',
      description:
        'Underground tunnel network used during the Vietnam War.',
    },
  ],
  travelEssentials: [
    {
      item: 'Best time to visit',
      description:
        'November–April for most regions; climate varies by geography.',
    },
    {
      item: 'Money',
      description:
        'Cash is widely used, especially for street food and small vendors.',
    },
    {
      item: 'Visa',
      description:
        'Many nationalities can use e-visa or visa-on-arrival.',
    },
    {
      item: 'Power',
      description:
        'Uses Type A, C, and G plugs with 220V.',
    },
    {
      item: 'Dress code',
      description:
        'Light clothing for heat; modest attire for temples.',
    },
  ],
  mainDish: {
    id: 'vietnam-main',
    name: 'Pho',
    description:
      'Iconic Vietnamese noodle soup with aromatic beef broth, rice noodles, herbs, and thinly sliced beef.',
    cookingTime: 180,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Beef bones', amount: 1000, unit: 'g' },
      { name: 'Rice noodles', amount: 400, unit: 'g' },
      { name: 'Beef sirloin', amount: 300, unit: 'g' },
      { name: 'Star anise', amount: 4, unit: 'pieces' },
      { name: 'Cinnamon stick', amount: 1, unit: 'piece' },
      { name: 'Fresh ginger', amount: 100, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Fish sauce', amount: 3, unit: 'tbsp' },
      { name: 'Bean sprouts', amount: 200, unit: 'g' },
      { name: 'Fresh herbs (basil, cilantro)', amount: 1, unit: 'bunch' },
      { name: 'Lime', amount: 2, unit: 'whole' },
    ],
    steps: [
      'Char ginger and onions until lightly blackened',
      'Boil beef bones with spices, ginger, and onions for 3 hours',
      'Skim foam regularly to keep broth clear',
      'Season broth with fish sauce and salt',
      'Soak rice noodles in hot water until tender',
      'Slice beef very thinly',
      'Place noodles and beef in bowls',
      'Pour boiling broth over beef to cook it',
      'Serve with herbs, sprouts, lime, and chili',
    ],
    imageUrl: 'https://images.pexels.com/photos/32698015/pexels-photo-32698015.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  dessert: {
    id: 'vietnam-dessert',
    name: 'Chè Chuối',
    description:
      'Traditional Vietnamese banana dessert with tapioca pearls and coconut milk.',
    cookingTime: 35,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Firm ripe bananas', amount: 6, unit: 'whole' },
      { name: 'Small tapioca pearls', amount: 120, unit: 'g' },
      { name: 'Coconut milk', amount: 400, unit: 'ml' },
      { name: 'Water', amount: 400, unit: 'ml' },
      { name: 'Sugar', amount: 80, unit: 'g' },
      { name: 'Salt', amount: 0.25, unit: 'tsp' },
      { name: 'Vanilla (optional)', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Soak tapioca pearls for 10 minutes and drain',
      'Slice bananas into thick pieces',
      'Heat coconut milk, water, sugar, and salt gently',
      'Add tapioca pearls and simmer until translucent',
      'Add bananas and cook 3–5 minutes',
      'Stir in vanilla if using',
      'Serve warm or chilled',
    ],
    imageUrl: 'https://images.pexels.com/photos/4069625/pexels-photo-4069625.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  drinks: {
    alcoholic: 'Bia Hoi, rice wine',
    nonAlcoholic:
      'Vietnamese iced coffee, iced tea, coconut water, fruit smoothies',
  },
  music: [
    'Traditional Ca Tru',
    'Quan Ho folk songs',
    'Modern Vietnamese pop',
  ],
  decorationIdeas: [
    'Red and gold colors',
    'Paper lanterns',
    'Bamboo elements',
    'Lotus flowers',
  ],
  conversationStarters: [
    'Have you ever tried pho?',
    'Would you explore Vietnam by motorbike?',
    'What do you know about Vietnamese street food?',
  ],
  quiz: [
    {
      id: 'vietnam-q1',
      question: 'What is the capital of Vietnam?',
      options: ['Hanoi', 'Ho Chi Minh City', 'Da Nang', 'Hue'],
      correctAnswer: 0,
    },
    {
      id: 'vietnam-q2',
      question: 'What is pho?',
      options: ['Noodle soup', 'Rice cake', 'Dessert', 'Drink'],
      correctAnswer: 0,
    },
    {
      id: 'vietnam-q3',
      question: 'Vietnam is the second-largest exporter of what?',
      options: ['Coffee', 'Tea', 'Rice', 'Cocoa'],
      correctAnswer: 0,
    },
    {
      id: 'vietnam-q4',
      question: 'What is the traditional dress of Vietnam?',
      options: ['Ao Dai', 'Kimono', 'Hanbok', 'Cheongsam'],
      correctAnswer: 0,
    },
    {
      id: 'vietnam-q5',
      question: 'Which bay is a UNESCO World Heritage Site?',
      options: ['Ha Long Bay', 'Nha Trang Bay', 'Cam Ranh Bay', 'Phu Quoc'],
      correctAnswer: 0,
    },
    {
      id: 'vietnam-q6',
      question: 'How many tones does Vietnamese have?',
      options: ['2', '4', '6', '8'],
      correctAnswer: 2,
    },
    {
      id: 'vietnam-q7',
      question: 'What reform opened Vietnam’s economy in 1986?',
      options: ['Doi Moi', 'Perestroika', 'Open Door', 'New Deal'],
      correctAnswer: 0,
    },
    {
      id: 'vietnam-q8',
      question: 'What is chè?',
      options: ['Sweet dessert soup', 'Rice noodle', 'Meat stew', 'Bread'],
      correctAnswer: 0,
    },
    {
      id: 'vietnam-q9',
      question: 'What is Vietnam’s largest city by population?',
      options: ['Hanoi', 'Hue', 'Ho Chi Minh City', 'Da Nang'],
      correctAnswer: 2,
    },
    {
      id: 'vietnam-q10',
      question: 'Which region is famous for rice terraces?',
      options: ['Sapa', 'Mekong Delta', 'Phu Quoc', 'Da Lat'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 77, y: 25 },
};
