import { Country } from '@/types';

export const vietnam: Country = {
  id: 'vietnam',
  name: 'Vietnam',
  code: 'VN',
  continent: 'Asia',
  flag: '🇻🇳',
  landscapeImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800',
  description:
    'Vietnam is a Southeast Asian country known for its beaches, rivers, Buddhist pagodas, and bustling cities. Rich history, incredible cuisine, and stunning natural landscapes make it a fascinating destination.',
  quickFacts: [
    { label: 'Capital', value: 'Hanoi' },
    { label: 'Population', value: '98.2 million' },
    { label: 'Official Language', value: 'Vietnamese' },
    { label: 'Currency', value: 'Vietnamese Dong (₫)' },
    { label: 'Area', value: '331,212 km²' },
  ],
  facts: [
    "Vietnam is the world's largest exporter of cashews and black pepper",
    'The country has one of the youngest populations in Southeast Asia',
    'Vietnamese is a tonal language with six different tones',
    'Motorcycles are the primary mode of transportation - Hanoi alone has over 5 million',
    'Vietnam has some of the world’s largest caves, including Son Doong',
    'Coffee culture is huge - Vietnam is the second-largest coffee exporter globally',
    'The country stretches over 1,650 km from north to south',
    'Ha Long Bay features over 1,600 limestone islands',
  ],
  foodCulture:
    'Vietnamese cuisine emphasizes fresh ingredients, minimal use of oil, and lots of herbs and vegetables. The five fundamental taste elements (spicy, sour, bitter, salty, and sweet) are balanced in every meal. Street food culture is vibrant and essential.',
  history: [
    {
      year: '111 BC - 938 AD',
      title: 'Chinese Rule',
      description:
        'Vietnam was under Chinese domination for over 1,000 years, deeply influencing its culture.',
    },
    {
      year: '1954',
      title: 'Division of Vietnam',
      description:
        'After defeating France, Vietnam was divided into North and South at the Geneva Conference.',
    },
    {
      year: '1955-1975',
      title: 'Vietnam War',
      description:
        'The devastating war between North and South Vietnam, with major involvement from the US.',
    },
    {
      year: '1986',
      title: 'Doi Moi Reforms',
      description:
        'Economic reforms opened Vietnam to the world, leading to rapid development and growth.',
    },
  ],
  innovations: [
    {
      name: 'Ao Dai',
      year: '1744',
      description:
        'The traditional Vietnamese dress that became a symbol of national identity.',
    },
    {
      name: 'Vietnamese Coffee Filter',
      year: '1800s',
      description:
        "The phin filter creates Vietnam's distinctive strong, slow-drip coffee.",
    },
    {
      name: 'Bamboo Circular Boat',
      year: 'Ancient',
      description:
        'Unique round boats made from bamboo, still used by fishermen today.',
    },
  ],
  mustVisit: [
    {
      name: 'Ha Long Bay',
      description:
        'UNESCO World Heritage Site with emerald waters and thousands of limestone islands.',
    },
    {
      name: 'Hoi An Ancient Town',
      description:
        'Beautifully preserved trading port with lantern-lit streets and tailors.',
    },
    {
      name: 'Mekong Delta',
      description:
        'Lush river delta with floating markets and traditional village life.',
    },
    {
      name: 'Sapa Rice Terraces',
      description:
        'Stunning mountain landscapes with cascading rice terraces and hill tribes.',
    },
    {
      name: 'Cu Chi Tunnels',
      description:
        'Vast network of underground tunnels used during the Vietnam War.',
    },
  ],
  travelEssentials: [
    {
      item: 'Best time to visit',
      description:
        'November-April for most regions, though climate varies greatly north to south.',
    },
    {
      item: 'Vietnamese Dong',
      description:
        'Cash is widely used, especially for street food and small vendors.',
    },
    { item: 'Visa', description: 'Most nationalities can get visa on arrival or e-visa.' },
    {
      item: 'Power adapter',
      description: 'Vietnam uses Type A, C, and G plugs with 220V.',
    },
    {
      item: 'Light clothing',
      description:
        'Cotton clothing for hot, humid weather. Modest dress for temples.',
    },
    {
      item: 'Stomach medicine',
      description:
        'Street food is delicious but can be challenging for unaccustomed stomachs.',
    },
  ],
  mainDish: {
    id: 'vietnam-main',
    name: 'Pho',
    description:
      'Iconic Vietnamese noodle soup with aromatic broth, rice noodles, herbs, and meat',
    cookingTime: 180,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Beef bones', amount: 1000, unit: 'g' },
      { name: 'Rice noodles', amount: 400, unit: 'g' },
      { name: 'Beef sirloin', amount: 300, unit: 'g' },
      { name: 'Star anise', amount: 4, unit: 'pieces' },
      { name: 'Cinnamon stick', amount: 1, unit: 'stick' },
      { name: 'Ginger', amount: 100, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'large' },
      { name: 'Fish sauce', amount: 3, unit: 'tbsp' },
      { name: 'Bean sprouts', amount: 200, unit: 'g' },
      { name: 'Fresh herbs (basil, cilantro)', amount: 1, unit: 'bunch' },
      { name: 'Lime', amount: 2, unit: 'limes' },
    ],
    steps: [
      'Char ginger and onions over open flame until blackened',
      'Boil beef bones for 3 hours with star anise, cinnamon, charred ginger and onions',
      'Skim foam regularly to keep broth clear',
      'Season broth with fish sauce and salt',
      'Soak rice noodles in hot water until soft, drain',
      'Slice beef very thinly',
      'Place noodles in bowls, top with raw beef slices',
      'Ladle boiling broth over (cooks the beef)',
      'Serve with bean sprouts, herbs, lime, chili, and hoisin sauce',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600',
  },

  // ✅ Dessert changed to Cinnamon Buns (as requested)
  dessert: {
    id: 'vietnam-dessert',
    name: 'Cinnamon Buns',
    description:
      'Soft, buttery cinnamon buns with a sweet cinnamon filling and optional glaze',
    cookingTime: 120,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Milk', amount: 250, unit: 'ml' },
      { name: 'Butter (melted)', amount: 75, unit: 'g' },
      { name: 'Sugar', amount: 60, unit: 'g' },
      { name: 'Dry yeast', amount: 7, unit: 'g' },
      { name: 'All-purpose flour', amount: 450, unit: 'g' },
      { name: 'Egg', amount: 1, unit: 'piece' },
      { name: 'Salt', amount: 1, unit: 'tsp' },
      { name: 'Butter (soft, for filling)', amount: 80, unit: 'g' },
      { name: 'Brown sugar', amount: 120, unit: 'g' },
      { name: 'Cinnamon', amount: 2, unit: 'tbsp' },
      { name: 'Powdered sugar (optional glaze)', amount: 120, unit: 'g' },
      { name: 'Water or milk (optional glaze)', amount: 2, unit: 'tbsp' },
    ],
    steps: [
      'Warm milk until lukewarm (not hot). Mix in yeast and 1 tbsp sugar, rest 10 minutes until foamy',
      'Add melted butter, remaining sugar, egg, salt, and flour. Knead 8-10 minutes until smooth',
      'Cover and let rise 60 minutes (until doubled)',
      'Mix filling: soft butter + brown sugar + cinnamon',
      'Roll dough into a rectangle, spread filling evenly',
      'Roll up tightly, slice into 12 buns',
      'Place in a baking dish, cover and rise 30 minutes',
      'Bake at 200°C for 12-15 minutes until golden',
      'Optional: mix powdered sugar with a little milk/water and drizzle as glaze',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600',
  },

  drinks: {
    alcoholic: 'Bia hoi (fresh beer), Ruou can (rice wine), Craft beer',
    nonAlcoholic:
      'Ca phe sua da (iced coffee with condensed milk), Tra da (iced tea), Fresh coconut water, Sinh to (fruit smoothies)',
  },
  music: [
    'Diem Xua - Traditional',
    'Em Cua Ngay Hom Qua - Son Tung M-TP',
    'Lac Troi - Son Tung M-TP',
    'Traditional Ca Tru music',
    'Quan Ho folk songs',
  ],
  decorationIdeas: [
    'Red and gold colors for luck and prosperity',
    'Paper lanterns (especially in Hoi An style)',
    'Conical hats (non la)',
    'Bamboo decorations',
    'Lotus flowers and Vietnamese flags',
  ],
  conversationStarters: [
    'Have you ever tried authentic pho?',
    'What do you know about the Vietnam War?',
    'Would you explore Vietnam by motorcycle?',
    'Have you heard of Ha Long Bay?',
    "What's your favorite Vietnamese dish?",
  ],

  // ✅ Expanded to 10 quiz questions
  quiz: [
    {
      id: 'vietnam-q1',
      question: 'What is the capital of Vietnam?',
      options: ['Ho Chi Minh City', 'Hanoi', 'Da Nang', 'Hue'],
      correctAnswer: 1,
    },
    {
      id: 'vietnam-q2',
      question: 'What is pho?',
      options: ['A noodle soup', 'A rice dish', 'A dessert', 'A drink'],
      correctAnswer: 0,
    },
    {
      id: 'vietnam-q3',
      question: 'Vietnam is the second-largest exporter of what product globally?',
      options: ['Tea', 'Coffee', 'Cocoa', 'Sugar'],
      correctAnswer: 1,
    },
    {
      id: 'vietnam-q4',
      question: 'What is the traditional Vietnamese dress called?',
      options: ['Kimono', 'Ao Dai', 'Cheongsam', 'Hanbok'],
      correctAnswer: 1,
    },
    {
      id: 'vietnam-q5',
      question: 'Which bay is famous for over 1,600 limestone islands?',
      options: ['Ha Long Bay', 'Nha Trang Bay', 'Cam Ranh Bay', 'Phan Thiet Bay'],
      correctAnswer: 0,
    },
    {
      id: 'vietnam-q6',
      question: 'Which Vietnamese city is known for lantern-lit streets and ancient town charm?',
      options: ['Hanoi', 'Hoi An', 'Da Nang', 'Haiphong'],
      correctAnswer: 1,
    },
    {
      id: 'vietnam-q7',
      question: 'What is Vietnamese known for in linguistics?',
      options: ['No vowels', 'Six tones', 'Only one tone', 'No alphabet'],
      correctAnswer: 1,
    },
    {
      id: 'vietnam-q8',
      question: 'What is the name of Vietnam’s famous economic reform program starting in 1986?',
      options: ['Perestroika', 'Doi Moi', 'Open Door', 'New Deal'],
      correctAnswer: 1,
    },
    {
      id: 'vietnam-q9',
      question: 'What is a “phin” used for?',
      options: ['Cooking rice', 'Filtering coffee', 'Playing music', 'Fishing'],
      correctAnswer: 1,
    },
    {
      id: 'vietnam-q10',
      question: 'Which region is famous for dramatic rice terraces and mountain scenery?',
      options: ['Mekong Delta', 'Sapa', 'Phu Quoc', 'Da Lat'],
      correctAnswer: 1,
    },
  ],

  coordinates: { x: 77, y: 25 },
};
