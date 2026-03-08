import { Country } from '@/types';

export const southKorea: Country = {
  id: 'south-korea',
  name: 'South Korea',
  code: 'KR',
  continent: 'Asia',
  flag: '🇰🇷',
  landscapeImage: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&q=80',
  description:
    'South Korea is a dynamic East Asian nation blending ancient traditions with cutting-edge technology. Known for K-pop, kimchi, bustling cities, and beautiful mountain temples.',
  quickFacts: [
    { label: 'Capital', value: 'Seoul' },
    { label: 'Population', value: '51.7 million' },
    { label: 'Official Language', value: 'Korean' },
    { label: 'Currency', value: 'South Korean Won (KRW, ₩)' },
    { label: 'Area', value: '100,210 km²' },
  ],
  facts: [
    'South Korea has one of the fastest internet speeds in the world',
    'K-pop is a global cultural phenomenon with billions of fans worldwide',
    'South Korea is one of the world’s most technologically advanced countries',
    'Kimchi (fermented vegetables) is served with most meals',
    'Hangul, the Korean alphabet, was created in the 15th century',
    'Mandatory military service exists for most men',
    'Jeju Island is a popular volcanic island destination',
    'Korean cuisine is famous for shared meals and many side dishes (banchan)',
  ],
  foodCulture:
    'Korean cuisine emphasizes balance and variety, with rice, soup, and multiple banchan (side dishes). Fermentation is central, especially in kimchi, doenjang, and gochujang. Meals are often communal, with shared dishes and grilling at the table.',

  history: [
    {
      year: '1392–1897',
      title: 'Joseon Dynasty',
      description:
        'The longest-ruling Korean dynasty, which established Confucian principles and helped develop Hangul.',
    },
    {
      year: '1950–1953',
      title: 'Korean War',
      description:
        'The war ended in an armistice and solidified the division of the peninsula into North and South Korea.',
    },
    {
      year: '1960s–1990s',
      title: 'Economic Miracle',
      description:
        'South Korea rapidly industrialized and became a major global economy.',
    },
    {
      year: '2000s–Present',
      title: 'Hallyu Wave',
      description:
        'K-pop, K-dramas, and Korean cinema became globally influential.',
    },
  ],

  innovations: [
    {
      name: 'Hangul Alphabet',
      year: '1443',
      description:
        'King Sejong created one of the most systematic and learnable writing systems in the world.',
    },
    {
      name: 'Metal Movable Type Printing',
      year: '1377',
      description:
        'Korea printed the world’s oldest surviving book using metal movable type, predating Gutenberg.',
    },
    {
      name: 'Global Electronics Leadership',
      year: 'Modern',
      description:
        'South Korea became a leader in semiconductors, displays, and consumer electronics.',
    },
  ],

  mustVisit: [
    {
      name: 'Gyeongbokgung Palace',
      description:
        'Grand royal palace in Seoul with traditional architecture and ceremonial guards.',
    },
    {
      name: 'Jeju Island',
      description:
        'Volcanic island with waterfalls, lava tubes, beaches, and Hallasan Mountain.',
    },
    {
      name: 'Bukchon Hanok Village',
      description:
        'Historic neighborhood of traditional Korean houses in central Seoul.',
    },
    {
      name: 'DMZ',
      description:
        'The Demilitarized Zone, a unique historical and geopolitical site.',
    },
    {
      name: 'Busan',
      description:
        'Coastal city famous for beaches, seafood markets, and temple views by the sea.',
    },
  ],

  travelEssentials: [
    {
      item: 'Best time to visit',
      description:
        'Spring (April–May) for cherry blossoms or autumn (September–November) for foliage.',
    },
    {
      item: 'T-money card',
      description:
        'Rechargeable transit card for subway, buses, convenience stores, and taxis.',
    },
    {
      item: 'Connectivity',
      description:
        'Excellent public Wi-Fi and affordable SIM/eSIM options make navigation easy.',
    },
    {
      item: 'Power adapter',
      description:
        'Type C/F plugs, 220V. Many hotels provide USB charging too.',
    },
    {
      item: 'Shoes',
      description:
        'Comfortable walking shoes help for city exploring and temple/hiking days.',
    },
  ],

  mainDish: {
    id: 'south-korea-bibimbap',
    name: 'Bibimbap',
    description:
      'Mixed rice bowl with seasoned vegetables, beef, a fried egg, and spicy gochujang—stirred together before eating.',
    cookingTime: 45,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Short-grain rice', amount: 400, unit: 'g' },
      { name: 'Beef sirloin, thinly sliced', amount: 200, unit: 'g' },
      { name: 'Spinach', amount: 200, unit: 'g' },
      { name: 'Bean sprouts', amount: 150, unit: 'g' },
      { name: 'Carrots, julienned', amount: 1, unit: 'large' },
      { name: 'Zucchini, julienned', amount: 1, unit: 'medium' },
      { name: 'Eggs', amount: 4, unit: 'large' },
      { name: 'Gochujang (Korean chili paste)', amount: 4, unit: 'tbsp' },
      { name: 'Sesame oil', amount: 3, unit: 'tbsp' },
      { name: 'Soy sauce', amount: 2, unit: 'tbsp' },
      { name: 'Garlic, minced', amount: 2, unit: 'cloves' },
      { name: 'Sesame seeds (optional)', amount: 1, unit: 'tbsp' },
    ],
    steps: [
      'Cook the rice according to package directions.',
      'Marinate beef with soy sauce, 1 tbsp sesame oil, and minced garlic for 10–15 minutes.',
      'Blanch spinach for 30 seconds, squeeze dry, and season with a little sesame oil and salt.',
      'Blanch bean sprouts for 2 minutes, drain, and season with a little sesame oil and salt.',
      'Sauté carrots briefly until just tender; repeat with zucchini.',
      'Cook the marinated beef in a hot pan until browned and cooked through.',
      'Fry eggs sunny-side up (or to your preference).',
      'Divide rice into bowls and arrange vegetables and beef in sections on top.',
      'Add a fried egg to each bowl and a spoonful of gochujang.',
      'Sprinkle sesame seeds if using, then mix everything together before eating.',
    ],
    imageUrl: 'https://images.pexels.com/photos/5773958/pexels-photo-5773958.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },

  dessert: {
    id: 'south-korea-bingsu',
    name: 'Bingsu',
    description:
      'Shaved ice dessert topped with sweet red beans, fruit, and condensed milk (often with mochi or ice cream).',
    cookingTime: 20,
    servings: 4,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Ice cubes (or frozen milk cubes)', amount: 500, unit: 'g' },
      { name: 'Sweetened red beans (pat)', amount: 200, unit: 'g' },
      { name: 'Condensed milk', amount: 100, unit: 'ml' },
      { name: 'Fresh strawberries, sliced', amount: 200, unit: 'g' },
      { name: 'Mochi pieces', amount: 100, unit: 'g' },
      { name: 'Cornflakes (optional)', amount: 50, unit: 'g' },
      { name: 'Ice cream', amount: 4, unit: 'scoops' },
    ],
    steps: [
      'Optional: freeze milk in an ice tray for a creamier bingsu texture.',
      'Crush ice (or frozen milk cubes) in a blender or shaved-ice machine until fluffy.',
      'Pile shaved ice into bowls.',
      'Top with sweetened red beans.',
      'Add strawberries and mochi pieces.',
      'Add a scoop of ice cream.',
      'Drizzle generously with condensed milk.',
      'Optional: finish with a small handful of cornflakes for crunch.',
      'Serve immediately.',
    ],
    imageUrl: 'https://images.pexels.com/photos/33999509/pexels-photo-33999509.png?auto=compress&cs=tinysrgb&h=650&w=940',
  },

  drinks: {
    alcoholic: 'Soju, Makgeolli (rice wine), Korean lager',
    nonAlcoholic: 'Barley tea, Banana milk, Korean citron tea (Yuja-cha)',
  },

  music: [
    'Arirang (traditional folk song)',
    'PSY – Gangnam Style',
    'BTS – Dynamite',
    'BLACKPINK – DDU-DU DDU-DU',
    'iKON – Love Scenario',
  ],

  decorationIdeas: [
    'Red and blue from the Korean flag (taegeuk)',
    'Black trigram accents (flag symbols)',
    'Cherry blossom branches',
    'Korean paper lanterns',
    'Hanbok-inspired patterns and textiles',
    'K-pop posters or album-cover collage wall',
  ],

  conversationStarters: [
    "What’s your favorite K-drama or K-pop group?",
    'Have you tried kimchi—how spicy can you handle?',
    'Would you visit the DMZ?',
    'What do you think of Korean skincare?',
    'Which Korean dish would you try first: bibimbap, bulgogi, or tteokbokki?',
  ],

  quiz: [
    {
      id: 'south-korea-q1',
      question: 'What is the capital of South Korea?',
      options: ['Busan', 'Seoul', 'Incheon', 'Daegu'],
      correctAnswer: 1,
    },
    {
      id: 'south-korea-q2',
      question: 'What is kimchi?',
      options: ['A soup', 'Fermented vegetables', 'A rice dish', 'A noodle dish'],
      correctAnswer: 1,
    },
    {
      id: 'south-korea-q3',
      question: 'What is the Korean alphabet called?',
      options: ['Kanji', 'Hangul', 'Hiragana', 'Hanzi'],
      correctAnswer: 1,
    },
    {
      id: 'south-korea-q4',
      question: 'Which drink is strongly associated with South Korea?',
      options: ['Sake', 'Soju', 'Shochu', 'Baijiu'],
      correctAnswer: 1,
    },
    {
      id: 'south-korea-q5',
      question: 'What does “Hallyu” refer to?',
      options: [
        'Korean food only',
        'Korean Wave (global pop culture influence)',
        'Korean currency',
        'Korean geography',
      ],
      correctAnswer: 1,
    },
    {
      id: 'south-korea-q6',
      question: 'What is the traditional Korean dress called?',
      options: ['Kimono', 'Hanbok', 'Sari', 'Ao dai'],
      correctAnswer: 1,
    },
    {
      id: 'south-korea-q7',
      question: 'Which South Korean company is a global leader in smartphones and semiconductors?',
      options: ['LG', 'Hyundai', 'Samsung', 'SK'],
      correctAnswer: 2,
    },
    {
      id: 'south-korea-q8',
      question: 'What is the DMZ?',
      options: [
        'A shopping district',
        'A demilitarized zone between North and South Korea',
        'A music venue',
        'A train station',
      ],
      correctAnswer: 1,
    },
    {
      id: 'south-korea-q9',
      question: 'What is bingsu?',
      options: ['Fried chicken', 'Shaved ice dessert', 'Rice cake', 'Noodle soup'],
      correctAnswer: 1,
    },
    {
      id: 'south-korea-q10',
      question: 'Which Korean film won the Best Picture Oscar in 2020?',
      options: ['Train to Busan', 'Parasite', 'Oldboy', 'The Host'],
      correctAnswer: 1,
    },
  ],

  coordinates: { x: 82, y: 40 },
};
