import { Country } from '@/types';

export const unitedArabEmirates: Country = {
  id: 'united-arab-emirates',
  name: 'United Arab Emirates',
  code: 'AE',
  continent: 'Asia',
  flag: '🇦🇪',
  landscapeImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
  description:
    'The United Arab Emirates is a federation of seven emirates known for its blend of tradition and ultramodern development, iconic skylines, desert landscapes, and global business hubs.',
  quickFacts: [
    { label: 'Capital', value: 'Abu Dhabi' },
    { label: 'Population', value: '10 million' },
    { label: 'Official Language', value: 'Arabic' },
    { label: 'Currency', value: 'UAE Dirham (AED)' },
    { label: 'Area', value: '83,600 km²' },
  ],
  facts: [
    "Home to the world's tallest building, Burj Khalifa",
    'Formed in 1971 from seven emirates',
    'Over 200 nationalities live in the UAE',
    'One of the world’s safest countries',
    'Rapid transformation from desert communities to global cities in under 50 years',
  ],
  foodCulture:
    'Emirati cuisine is rooted in Bedouin traditions and shaped by Arab, Persian, and Indian influences. Dates, rice, lamb, wheat, and aromatic spices are staples, often served communally.',
  innovations: [
    { name: 'Vertical City Architecture', year: '2010', description: 'Burj Khalifa (828m) revolutionized skyscraper engineering and vertical urban design' },
    { name: 'Desert Farming Techniques', year: 'Ancient-Modern', description: 'Advanced hydroponics and desalination enabling agriculture in extreme desert conditions' },
    { name: 'Solar Energy Innovation', year: '2013', description: 'Mohammed bin Rashid Al Maktoum Solar Park, one of world\'s largest solar energy projects' },
    { name: 'Artificial Islands', year: '2001', description: 'Palm Jumeirah pioneered large-scale land reclamation creating iconic palm-shaped islands' },
  ],
  history: [
    {
      year: 'Pre-1800s',
      title: 'Bedouin & Coastal Settlements',
      description:
        'Communities relied on pearl diving, fishing, herding, and trade across the Arabian Gulf.',
    },
    {
      year: '1820',
      title: 'Trucial States',
      description:
        'The region became known as the Trucial States under British protection.',
    },
    {
      year: '1971',
      title: 'UAE Founded',
      description:
        'Six emirates united to form the UAE; Ras Al Khaimah joined shortly after.',
    },
    {
      year: '2000s',
      title: 'Modern Global Hub',
      description:
        'Rapid development transformed cities like Dubai and Abu Dhabi into global centers for finance, tourism, and innovation.',
    },
  ],
  travelEssentials: [
    {
      item: 'Visa',
      description:
        'Visa-free or visa-on-arrival access for many nationalities.',
    },
    {
      item: 'Best time to visit',
      description:
        'November–March for cooler temperatures.',
    },
    {
      item: 'Dress code',
      description:
        'Modest clothing recommended in public places; beachwear allowed at resorts.',
    },
    {
      item: 'Transport',
      description:
        'Excellent roads, taxis, metro (Dubai), and domestic flights.',
    },
    {
      item: 'Safety',
      description:
        'Very safe with low crime rates.',
    },
  ],
  mustVisit: [
    { name: 'Burj Khalifa', description: 'World\'s tallest building at 828m with observation decks offering breathtaking views of Dubai.' },
    { name: 'Sheikh Zayed Grand Mosque', description: 'Stunning white marble mosque in Abu Dhabi, one of the largest mosques in the world.' },
    { name: 'Dubai Mall and Dubai Fountain', description: 'Massive shopping center with aquarium, ice rink, and choreographed fountain shows.' },
    { name: 'The Desert', description: 'Experience dune bashing, camel rides, Bedouin camps, and stunning desert sunsets.' },
    { name: 'Louvre Abu Dhabi', description: 'Architectural masterpiece museum showcasing art from around the world.' },
  ],
  mainDish: {
    id: 'uae-main',
    name: 'Al Harees',
    description: 'A traditional slow-cooked dish of wheat and meat, especially served during Ramadan and celebrations.',
    cookingTime: 240,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Whole wheat', amount: 500, unit: 'g' },
      { name: 'Lamb or chicken', amount: 800, unit: 'g' },
      { name: 'Salt', amount: 2, unit: 'tsp' },
      { name: 'Ghee', amount: 100, unit: 'g' },
      { name: 'Water', amount: 1.5, unit: 'l' },
    ],
    steps: [
      'Soak wheat overnight',
      'Combine wheat, meat, water, and salt in a large pot',
      'Simmer gently for 4 hours until very soft',
      'Beat mixture until smooth and porridge-like',
      'Drizzle with melted ghee before serving',
      'Serve hot with dates',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80',
  },
  dessert: {
    id: 'uae-dessert',
    name: 'Luqaimat',
    description:
      'Golden, crispy Emirati dumplings drizzled with date syrup or honey and sprinkled with sesame seeds.',
    cookingTime: 30,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'All-purpose flour', amount: 250, unit: 'g' },
      { name: 'Yeast', amount: 1, unit: 'tsp' },
      { name: 'Sugar', amount: 1, unit: 'tbsp' },
      { name: 'Yogurt', amount: 120, unit: 'ml' },
      { name: 'Water', amount: 120, unit: 'ml' },
      { name: 'Saffron (optional)', amount: 1, unit: 'pinch' },
      { name: 'Vegetable oil (for frying)', amount: 500, unit: 'ml' },
      { name: 'Date syrup or honey', amount: 4, unit: 'tbsp' },
      { name: 'Sesame seeds', amount: 1, unit: 'tbsp' },
    ],
    steps: [
      'Mix flour, yeast, sugar, yogurt, and water into a thick batter',
      'Let batter rest for 45 minutes',
      'Heat oil to medium-high',
      'Drop spoonfuls of batter into oil',
      'Fry until golden and crispy',
      'Drain briefly on paper towels',
      'Drizzle with date syrup or honey',
      'Sprinkle with sesame seeds and serve warm',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1583338917451-face2751d8d5?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Limited (available in licensed hotels and restaurants)',
    nonAlcoholic: 'Arabic coffee (gahwa), Karak chai, Fresh juices',
  },
  music: [
    'Traditional Emirati folk music',
    'Yowla dance rhythms',
    'Modern Arabic pop',
  ],
  decorationIdeas: [
    'Red, green, white and black flag colors',
    'Desert and dune imagery',
    'Arabic calligraphy',
    'Gold and luxury accents',
    'Falcon motifs',
  ],
  conversationStarters: [
    'Have you visited Dubai or Abu Dhabi?',
    'What do you think about modern cities in the desert?',
    'Would you try traditional Emirati food?',
  ],
  quiz: [
    {
      id: 'uae-q1',
      question: 'What is the capital of the UAE?',
      options: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman'],
      correctAnswer: 1,
    },
    {
      id: 'uae-q2',
      question: 'How many emirates make up the UAE?',
      options: ['5', '6', '7', '9'],
      correctAnswer: 2,
    },
    {
      id: 'uae-q3',
      question: 'In which year was the UAE founded?',
      options: ['1961', '1968', '1971', '1980'],
      correctAnswer: 2,
    },
    {
      id: 'uae-q4',
      question: 'What is the UAE’s traditional sweet called?',
      options: ['Baklava', 'Luqaimat', 'Halva', 'Basbousa'],
      correctAnswer: 1,
    },
    {
      id: 'uae-q5',
      question: 'Which building is the tallest in the world?',
      options: ['Shanghai Tower', 'Burj Khalifa', 'One World Trade Center', 'Petronas Towers'],
      correctAnswer: 1,
    },
    {
      id: 'uae-q6',
      question: 'What is the UAE’s currency?',
      options: ['Riyal', 'Dinar', 'Dirham', 'Pound'],
      correctAnswer: 2,
    },
    {
      id: 'uae-q7',
      question: 'What is “gahwa”?',
      options: ['Spiced rice', 'Arabic coffee', 'A dance', 'A soup'],
      correctAnswer: 1,
    },
    {
      id: 'uae-q8',
      question: 'Which sea borders much of the UAE?',
      options: ['Red Sea', 'Arabian Gulf', 'Mediterranean Sea', 'Caspian Sea'],
      correctAnswer: 1,
    },
    {
      id: 'uae-q9',
      question: 'Which city is the UAE’s largest by population?',
      options: ['Abu Dhabi', 'Dubai', 'Sharjah', 'Al Ain'],
      correctAnswer: 1,
    },
    {
      id: 'uae-q10',
      question: 'Traditional Emirati culture originates from which lifestyle?',
      options: ['Nomadic Bedouin', 'Viking', 'Agricultural', 'Mountain'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 59, y: 33 },
};
