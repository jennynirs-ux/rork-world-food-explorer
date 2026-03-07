import { Country } from '@/types';

export const egypt: Country = {
  id: 'egypt',
  name: 'Egypt',
  code: 'EG',
  continent: 'Africa',
  flag: '🇪🇬',
  landscapeImage: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80',
  description: 'Egypt, a country linking northeast Africa with the Middle East, dates to the time of the pharaohs. Home to the ancient pyramids and the Sphinx, it\'s a land of timeless wonders.',
  quickFacts: [
    { label: 'Capital', value: 'Cairo' },
    { label: 'Population', value: '104 million' },
    { label: 'Official Language', value: 'Arabic' },
    { label: 'Currency', value: 'Egyptian Pound (£E)' },
    { label: 'Area', value: '1,002,450 km²' },
  ],
  facts: [
    'Egypt is home to the last standing wonder of the ancient world: the Great Pyramid of Giza',
    'The ancient Egyptians invented paper, the 365-day calendar, and the earliest forms of writing',
    'The Nile River is the longest river in the world at 6,650 km',
    'Egypt has more than 100 pyramids',
    'Ancient Egyptians believed in over 2,000 gods and goddesses',
    'Cleopatra was actually Greek, not Egyptian',
    'The Egyptian civilization lasted over 3,000 years',
    'Ancient Egyptians were the first to create makeup and perfume',
  ],
  foodCulture: 'Egyptian cuisine is characterized by dishes such as ful medames, koshari, and molokhia. Bread is a staple in every meal, and Egyptian hospitality means generous portions and sweet mint tea.',
  history: [
    {
      year: '3100 BC',
      title: 'Ancient Egypt United',
      description: 'King Menes united Upper and Lower Egypt, beginning one of history\'s greatest civilizations.'
    },
    {
      year: '2560 BC',
      title: 'Great Pyramid Built',
      description: 'The Great Pyramid of Giza was completed for Pharaoh Khufu, the largest of the Egyptian pyramids.'
    },
    {
      year: '1323 BC',
      title: 'Tutankhamun\'s Reign',
      description: 'The boy king Tutankhamun ruled Egypt. His intact tomb would later become one of archaeology\'s greatest discoveries.'
    },
    {
      year: '30 BC',
      title: 'End of Pharaonic Era',
      description: 'After Cleopatra\'s death, Egypt became a province of Rome, ending 3,000 years of pharaonic rule.'
    },
  ],
  innovations: [
    {
      name: 'Hieroglyphic Writing',
      year: '3200 BC',
      description: 'One of the earliest writing systems, using pictorial symbols to represent words and sounds.'
    },
    {
      name: 'Paper (Papyrus)',
      year: '3000 BC',
      description: 'Ancient Egyptians created paper from papyrus reeds, revolutionizing record-keeping.'
    },
    {
      name: 'The Calendar',
      year: '3000 BC',
      description: 'The 365-day calendar based on solar year movements.'
    },
    {
      name: 'Medicine and Surgery',
      year: '2500 BC',
      description: 'Advanced medical knowledge including surgical procedures, anatomy, and pharmaceutical treatments.'
    },
  ],
  mustVisit: [
    { name: 'The Great Pyramids of Giza', description: 'The last remaining wonder of the ancient world, including the Great Sphinx and three massive pyramids.' },
    { name: 'Luxor\'s Valley of the Kings', description: 'Ancient burial ground for pharaohs including Tutankhamun, with elaborate decorated tombs.' },
    { name: 'Abu Simbel Temples', description: 'Massive rock-cut temples built by Ramesses II, relocated to save them from flooding.' },
    { name: 'Khan el-Khalili Bazaar', description: 'Historic Cairo market offering spices, jewelry, textiles, and traditional crafts since the 14th century.' },
    { name: 'Karnak Temple', description: 'Vast temple complex in Luxor, one of the largest religious buildings ever constructed.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'October-April for cooler weather. Summer (May-Sep) is extremely hot.' },
    { item: 'Modest clothing', description: 'Cover shoulders and knees, especially at religious sites and conservative areas.' },
    { item: 'Sun protection', description: 'Strong desert sun requires hat, sunglasses, and high SPF sunscreen.' },
    { item: 'Cash in Egyptian Pounds', description: 'Many vendors and small shops don\'t accept cards.' },
    { item: 'Comfortable walking shoes', description: 'Sandy terrain and extensive archaeological sites require sturdy footwear.' },
    { item: 'Travel insurance', description: 'Recommended for peace of mind with health and safety coverage.' }
  ],
  mainDish: {
    id: 'egypt-main',
    name: 'Koshari',
    description: 'Egypt\'s national dish: a hearty mix of rice, lentils, pasta, and chickpeas topped with spicy tomato sauce',
    cookingTime: 60,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Rice', amount: 200, unit: 'g' },
      { name: 'Brown lentils', amount: 150, unit: 'g' },
      { name: 'Macaroni pasta', amount: 150, unit: 'g' },
      { name: 'Chickpeas', amount: 200, unit: 'g' },
      { name: 'Onions', amount: 3, unit: 'large' },
      { name: 'Tomato sauce', amount: 400, unit: 'g' },
      { name: 'Garlic cloves', amount: 4, unit: 'pieces' },
      { name: 'Cumin', amount: 2, unit: 'tsp' },
      { name: 'Vinegar', amount: 2, unit: 'tbsp' },
      { name: 'Chili powder', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Cook rice, lentils, and pasta separately according to package directions',
      'Drain and season each with salt',
      'Slice onions thinly and fry until deeply caramelized and crispy',
      'For the sauce: sauté garlic, add tomato sauce, cumin, vinegar, and chili',
      'Simmer sauce for 15 minutes',
      'Layer in serving bowl: rice, then lentils, then pasta, then chickpeas',
      'Top with tomato sauce and crispy fried onions',
      'Serve hot with extra sauce and vinegar on the side',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80',
  },
  dessert: {
    id: 'egypt-dessert',
    name: 'Basbousa',
    description: 'Sweet semolina cake soaked in sugar syrup, topped with almonds or coconut',
    cookingTime: 50,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Semolina', amount: 300, unit: 'g' },
      { name: 'Sugar', amount: 150, unit: 'g' },
      { name: 'Yogurt', amount: 200, unit: 'g' },
      { name: 'Butter melted', amount: 100, unit: 'g' },
      { name: 'Coconut flakes', amount: 100, unit: 'g' },
      { name: 'Baking powder', amount: 2, unit: 'tsp' },
      { name: 'Almonds', amount: 24, unit: 'pieces' },
      { name: 'For syrup: water', amount: 300, unit: 'ml' },
      { name: 'For syrup: sugar', amount: 300, unit: 'g' },
      { name: 'Lemon juice', amount: 1, unit: 'tbsp' },
    ],
    steps: [
      'Make syrup: boil water and sugar for 10 minutes, add lemon juice, let cool',
      'Mix semolina, sugar, coconut, and baking powder',
      'Add yogurt and melted butter, mix until combined',
      'Pour into greased baking pan, smooth top',
      'Cut into diamond or square shapes',
      'Place an almond on each piece',
      'Bake at 180°C for 30-35 minutes until golden',
      'Immediately pour cold syrup over hot cake',
      'Let absorb for at least 2 hours before serving',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1579697096985-41fe1430e5df?w=600&q=80',
  },
  drinks: {
    alcoholic: 'Stella beer, Sakara Gold',
    nonAlcoholic: 'Mint tea (shai), Turkish coffee, Hibiscus tea (karkadeh), Fresh sugarcane juice',
  },
  music: [
    'Om Kalthoum classics',
    'Traditional Nubian music',
    'Modern Arabic pop',
    'Mohamed Mounir songs',
  ],
  decorationIdeas: [
    'Gold and turquoise colors (ancient Egyptian palette)',
    'Papyrus scrolls and hieroglyphic prints',
    'Brass lanterns and metalwork',
    'Pharaoh statues and pyramids',
    'Desert sand and palm fronds',
  ],
  conversationStarters: [
    'Have you seen the pyramids in person?',
    'What Egyptian pharaoh fascinates you most?',
    'Would you sail down the Nile River?',
    'What\'s your favorite Egyptian historical fact?',
    'Have you tried Egyptian street food?',
  ],
  quiz: [
    {
      id: 'egypt-q1',
      question: 'What is the capital of Egypt?',
      options: ['Alexandria', 'Cairo', 'Giza', 'Luxor'],
      correctAnswer: 1,
    },
    {
      id: 'egypt-q2',
      question: 'Which river flows through Egypt?',
      options: ['Amazon', 'Mississippi', 'Nile', 'Euphrates'],
      correctAnswer: 2,
    },
    {
      id: 'egypt-q3',
      question: 'What is Egypt\'s national dish?',
      options: ['Falafel', 'Koshari', 'Shawarma', 'Hummus'],
      correctAnswer: 1,
    },
    {
      id: 'egypt-q4',
      question: 'Who was the last pharaoh of Egypt?',
      options: ['Tutankhamun', 'Ramesses II', 'Cleopatra', 'Nefertiti'],
      correctAnswer: 2,
    },
    {
      id: 'egypt-q5',
      question: 'How many pyramids does Egypt have?',
      options: ['3', '50', '100+', '10'],
      correctAnswer: 2,
    },
    {
      id: 'egypt-q6',
      question: 'When was the Great Pyramid built?',
      options: ['1000 BC', '2560 BC', '3000 BC', '500 BC'],
      correctAnswer: 1,
    },
    {
      id: 'egypt-q7',
      question: 'What is the longest river in the world?',
      options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
      correctAnswer: 1,
    },
    {
      id: 'egypt-q8',
      question: 'What writing system did ancient Egyptians use?',
      options: ['Cuneiform', 'Hieroglyphics', 'Latin', 'Greek'],
      correctAnswer: 1,
    },
    {
      id: 'egypt-q9',
      question: 'What is Basbousa?',
      options: ['A temple', 'A dessert', 'A city', 'A pharaoh'],
      correctAnswer: 1,
    },
    {
      id: 'egypt-q10',
      question: 'What currency does Egypt use?',
      options: ['Egyptian Pound', 'Dollar', 'Euro', 'Dinar'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 50, y: 30 },
};