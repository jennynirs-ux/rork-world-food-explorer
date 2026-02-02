import { Country } from '@/types';

export const japan: Country = {
  id: 'japan',
  name: 'Japan',
  code: 'JP',
  continent: 'Asia',
  flag: '🇯🇵',
  landscapeImage: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800&q=80',
  description: 'Japan is an island nation in East Asia known for its unique blend of ancient traditions and cutting-edge technology. From cherry blossoms to bullet trains, it offers a fascinating cultural experience.',
  quickFacts: [
    { label: 'Capital', value: 'Tokyo' },
    { label: 'Population', value: '125.8 million' },
    { label: 'Official Language', value: 'Japanese' },
    { label: 'Currency', value: 'Yen (¥)' },
    { label: 'Area', value: '377,975 km²' },
  ],
  facts: [
    'Japan consists of 6,852 islands',
    'There are more than 5 million vending machines in Japan',
    'Japan has the highest life expectancy in the world',
    'The Japanese language has no curse words',
    'Over 70% of Japan is covered by mountains',
    'Japan is home to over 100,000 centenarians',
    'There are over 1,500 earthquakes in Japan every year',
    'Mount Fuji is an active volcano and Japan\'s highest mountain',
  ],
  foodCulture: 'Japanese cuisine emphasizes seasonal ingredients, presentation, and the natural flavors of food. Meals are traditionally served with rice and miso soup, and it\'s customary to say "itadakimasu" before eating and "gochisosama" after finishing.',
  history: [
    {
      year: '660 BC',
      title: 'Legendary Founding',
      description: 'According to tradition, Emperor Jimmu founded Japan and became its first emperor, establishing an unbroken imperial line.'
    },
    {
      year: '1185-1868',
      title: 'Feudal Japan',
      description: 'The era of samurai warriors and shoguns. Japan was ruled by military leaders while the emperor remained a figurehead.'
    },
    {
      year: '1854',
      title: 'Opening to the West',
      description: 'Commodore Perry\'s arrival forced Japan to end 200+ years of isolation and open its ports to international trade.'
    },
    {
      year: '1945-Present',
      title: 'Modern Japan',
      description: 'After WWII, Japan rebuilt itself into the world\'s third-largest economy while preserving its ancient culture and traditions.'
    },
  ],
  innovations: [
    {
      name: 'Bullet Train (Shinkansen)',
      year: '1964',
      description: 'Revolutionary high-speed rail system that transformed transportation and inspired similar systems worldwide.'
    },
    {
      name: 'Instant Noodles',
      year: '1958',
      description: 'Momofuku Ando invented instant ramen, creating a global food phenomenon.'
    },
    {
      name: 'Blue LED',
      year: '1990s',
      description: 'Japanese scientists developed blue LEDs, completing RGB spectrum and enabling modern displays and lighting.'
    },
    {
      name: 'QR Code',
      year: '1994',
      description: 'Denso Wave created QR codes for tracking automotive parts, now used worldwide for payments and information sharing.'
    },
  ],
  mustVisit: [
    { name: 'Mount Fuji', description: 'Japan\'s iconic snow-capped volcano and highest peak at 3,776 meters.' },
    { name: 'Tokyo', description: 'Vibrant capital city blending ultramodern skyscrapers with traditional temples.' },
    { name: 'Kyoto', description: 'Former imperial capital with 2,000+ temples and shrines, traditional geisha districts.' },
    { name: 'Hiroshima Peace Memorial', description: 'Powerful reminder of WWII history and message of peace.' },
    { name: 'Cherry Blossom Sites', description: 'Various locations throughout Japan for viewing the iconic sakura bloom in spring.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'March-May for cherry blossoms, September-November for autumn colors and mild weather.' },
    { item: 'JR Pass', description: 'Unlimited train travel pass for tourists, great value for exploring multiple cities.' },
    { item: 'Pocket WiFi', description: 'Stay connected as public WiFi is limited.' },
    { item: 'Cash', description: 'Many places still don\'t accept credit cards.' },
    { item: 'Comfortable walking shoes', description: 'Expect lots of walking and stair climbing.' },
    { item: 'Translation app', description: 'Helpful for reading menus and signs in Japanese.' }
  ],
  mainDish: {
    id: 'japan-main',
    name: 'Chicken Teriyaki',
    description: 'Tender chicken glazed with a sweet and savory teriyaki sauce',
    cookingTime: 30,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken thighs', amount: 600, unit: 'g' },
      { name: 'Soy sauce', amount: 60, unit: 'ml' },
      { name: 'Mirin', amount: 60, unit: 'ml' },
      { name: 'Sake', amount: 60, unit: 'ml' },
      { name: 'Sugar', amount: 2, unit: 'tbsp' },
      { name: 'Ginger', amount: 1, unit: 'tbsp' },
      { name: 'Vegetable oil', amount: 2, unit: 'tbsp' },
      { name: 'Sesame seeds', amount: 1, unit: 'tbsp' },
    ],
    steps: [
      'Mix soy sauce, mirin, sake, sugar, and grated ginger in a bowl',
      'Heat oil in a large pan over medium-high heat',
      'Pat chicken thighs dry and season with salt',
      'Sear chicken skin-side down for 5-6 minutes until golden',
      'Flip chicken and cook for another 3-4 minutes',
      'Pour teriyaki sauce over chicken and reduce heat to medium',
      'Simmer for 5-7 minutes, basting chicken with sauce',
      'Remove when sauce thickens and chicken is cooked through',
      'Slice chicken and drizzle with remaining sauce',
      'Garnish with sesame seeds and serve with rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=600',
  },
  dessert: {
    id: 'japan-dessert',
    name: 'Mochi Ice Cream',
    description: 'Sweet rice cake filled with ice cream, a perfect blend of chewy and creamy',
    cookingTime: 45,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Sweet rice flour (mochiko)', amount: 200, unit: 'g' },
      { name: 'Sugar', amount: 80, unit: 'g' },
      { name: 'Water', amount: 240, unit: 'ml' },
      { name: 'Cornstarch (for dusting)', amount: 100, unit: 'g' },
      { name: 'Ice cream of choice', amount: 8, unit: 'scoops' },
    ],
    steps: [
      'Scoop ice cream into 8 balls and freeze on a tray',
      'Mix mochiko and sugar in a microwave-safe bowl',
      'Add water and stir until smooth',
      'Microwave for 2 minutes, stir, then microwave for 1 more minute',
      'The mochi should be slightly translucent and sticky',
      'Dust a work surface heavily with cornstarch',
      'Turn out hot mochi onto cornstarch and dust top',
      'Roll to about 5mm thickness and cut into circles',
      'Place an ice cream ball in center of each circle',
      'Quickly wrap mochi around ice cream and pinch to seal',
      'Freeze for at least 2 hours before serving',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600',
  },
  drinks: {
    alcoholic: 'Sake, Shochu, Japanese Whisky, Plum Wine (Umeshu)',
    nonAlcoholic: 'Green Tea, Matcha, Barley Tea (Mugicha), Calpis',
  },
  music: [
    'Sakura Sakura (traditional)',
    'Sukiyaki - Kyu Sakamoto',
    'Traditional Koto music',
    'Taiko drum performances',
    'Modern J-Pop selections',
  ],
  decorationIdeas: [
    'Cherry blossom branches',
    'Paper lanterns',
    'Origami decorations',
    'Bamboo placemats',
    'Minimalist Zen aesthetic',
  ],
  conversationStarters: [
    'Have you ever tried making sushi at home?',
    'What Japanese tradition fascinates you most?',
    'Would you like to experience a traditional tea ceremony?',
    'What\'s your favorite anime or manga?',
    'Have you visited Japan? What impressed you most?',
  ],
  quiz: [
    {
      id: 'japan-q1',
      question: 'What is the capital of Japan?',
      options: ['Kyoto', 'Osaka', 'Tokyo', 'Nagoya'],
      correctAnswer: 2,
    },
    {
      id: 'japan-q2',
      question: 'What is Japan\'s highest mountain?',
      options: ['Mount Fuji', 'Mount Kita', 'Mount Hotaka', 'Mount Yari'],
      correctAnswer: 0,
    },
    {
      id: 'japan-q3',
      question: 'What do you say before eating in Japan?',
      options: ['Sayonara', 'Itadakimasu', 'Arigato', 'Konnichiwa'],
      correctAnswer: 1,
    },
    {
      id: 'japan-q4',
      question: 'What is mochi made from?',
      options: ['Wheat flour', 'Rice flour', 'Corn flour', 'Potato starch'],
      correctAnswer: 1,
    },
    {
      id: 'japan-q5',
      question: 'What does "sake" refer to in Japanese?',
      options: ['Rice wine', 'Tea', 'Noodles', 'Sushi'],
      correctAnswer: 0,
    },
    {
      id: 'japan-q6',
      question: 'What is the traditional Japanese garment called?',
      options: ['Sari', 'Kimono', 'Hanbok', 'Cheongsam'],
      correctAnswer: 1,
    },
    {
      id: 'japan-q7',
      question: 'Which Japanese city was the former capital for over 1,000 years?',
      options: ['Tokyo', 'Osaka', 'Kyoto', 'Nara'],
      correctAnswer: 2,
    },
    {
      id: 'japan-q8',
      question: 'What is the art of Japanese flower arrangement called?',
      options: ['Origami', 'Ikebana', 'Bonsai', 'Sumi-e'],
      correctAnswer: 1,
    },
    {
      id: 'japan-q9',
      question: 'What type of noodles are used in ramen?',
      options: ['Rice noodles', 'Wheat noodles', 'Glass noodles', 'Egg noodles'],
      correctAnswer: 1,
    },
    {
      id: 'japan-q10',
      question: 'What is the Japanese bullet train called?',
      options: ['Shinkansen', 'Maglev', 'Express', 'Metro'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 85, y: 38 },
  isUnlockedByDefault: true,
};
