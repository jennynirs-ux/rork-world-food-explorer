import { Country } from '@/types';

export const saoTomeAndPrincipe: Country = {
  id: 'sao-tome-and-principe',
  name: 'Sao Tome and Principe',
  code: 'ST',
  continent: 'Africa',
  flag: '🇸🇹',
  landscapeImage: 'https://images.unsplash.com/photo-1574001106297-5cc5686a5c15?w=800',
  description:
    'Sao Tome and Principe is a small island nation in the Gulf of Guinea, known for lush rainforests, volcanic peaks, rich biodiversity, and a long cocoa-growing tradition shaped by Portuguese heritage.',
  quickFacts: [
    { label: 'Capital', value: 'Sao Tome' },
    { label: 'Population', value: '220,000' },
    { label: 'Official Language', value: 'Portuguese' },
    { label: 'Currency', value: 'Sao Tome and Principe dobra (STN)' },
    { label: 'Area', value: '1,001 km²' },
  ],
  facts: [
    'One of Africa\'s smallest countries by area',
    'Historically known for cocoa plantations and high-quality cacao',
    'The islands are volcanic and covered in tropical rainforest',
    'Home to many endemic bird species',
    'Located in the Gulf of Guinea off Central Africa',
    'Equatorial climate with warm temperatures year-round',
    'Principe is a UNESCO Biosphere Reserve',
    'Roça plantations are a major part of the islands\' history and identity',
  ],
  foodCulture:
    'Santomean cuisine blends African and Portuguese influences with fresh fish, tropical fruits, greens, and palm oil. Meals often feature stews, grilled seafood, bananas, breadfruit, cassava, and flavorful sauces.',

  history: [
    {
      year: '1470s',
      title: 'Portuguese Arrival',
      description:
        'Portuguese navigators reached the uninhabited islands and began establishing settlements and trade routes.',
    },
    {
      year: '1500s',
      title: 'Sugar and Early Plantations',
      description:
        'Plantation agriculture expanded, initially focused on sugar, shaping labor systems and colonial society.',
    },
    {
      year: '1800s',
      title: 'Cocoa Boom',
      description:
        'Cocoa became the dominant crop and the islands grew into a major cocoa producer through plantation networks known as rocas.',
    },
    {
      year: '1975',
      title: 'Independence',
      description:
        'Sao Tome and Principe became an independent nation after Portuguese rule, building modern state institutions.',
    },
    {
      year: 'Modern Era',
      title: 'Eco-tourism and Conservation',
      description:
        'The country increasingly focuses on biodiversity protection, sustainable tourism, and specialty cacao exports.',
    },
  ],

  innovations: [
    {
      name: 'Specialty Cocoa and Chocolate',
      year: '1800s-Present',
      description:
        'The islands developed a reputation for fine cacao, and today promote specialty cocoa and bean-to-bar chocolate production.',
    },
    {
      name: 'Biodiversity Conservation on Principe',
      year: 'Modern',
      description:
        'Principe has become a model for conservation-led development, supporting protected forests and marine environments.',
    },
  ],

  mustVisit: [
    {
      name: 'Obo National Park',
      description:
        'Rainforest park spanning Sao Tome and Principe with waterfalls, hiking, and endemic wildlife.',
    },
    {
      name: 'Pico Cao Grande',
      description:
        'Dramatic volcanic plug rising from the jungle, one of the most iconic landscapes on Sao Tome.',
    },
    {
      name: 'Roça Agostinho Neto',
      description:
        'Historic plantation complex offering a window into the cocoa era and colonial architecture.',
    },
    {
      name: 'Principe Island',
      description:
        'Relaxed island with pristine beaches, forest trails, and a UNESCO Biosphere Reserve status.',
    },
    {
      name: 'Ilheu das Rolas',
      description:
        'Small islet near the equator with beaches and the famous equator line landmark.',
    },
  ],

  travelEssentials: [
    {
      item: 'Best time to visit',
      description:
        'June to September is generally drier; October to May is wetter with lush landscapes.',
    },
    {
      item: 'Language',
      description:
        'Portuguese is official; some locals speak creole languages and basic English in tourist areas.',
    },
    {
      item: 'Currency',
      description:
        'Uses the dobra (STN). Cash is useful outside the capital.',
    },
    {
      item: 'Getting around',
      description:
        'Taxis and hired drivers are common; roads vary in quality outside main areas.',
    },
    {
      item: 'Nature prep',
      description:
        'Bring lightweight rain gear, sturdy shoes, and insect repellent for rainforest hikes.',
    },
    {
      item: 'Island hopping',
      description:
        'Domestic flights and boats connect Sao Tome with Principe depending on conditions and schedules.',
    },
  ],

  mainDish: {
    id: 'sao-tome-main',
    name: 'Calulu (Fish Stew)',
    description:
      'A classic island stew featuring fish, greens, okra, tomatoes, and palm oil, served with starchy sides like cassava or banana.',
    cookingTime: 90,
    servings: 6,
    dietType: 'fish',
    ingredients: [
      { name: 'Firm fish (or smoked fish)', amount: 600, unit: 'g' },
      { name: 'Okra, sliced', amount: 200, unit: 'g' },
      { name: 'Tomatoes, chopped', amount: 3, unit: 'whole' },
      { name: 'Onions, sliced', amount: 2, unit: 'whole' },
      { name: 'Garlic cloves, minced', amount: 3, unit: 'cloves' },
      { name: 'Red palm oil', amount: 80, unit: 'ml' },
      { name: 'Greens (spinach or similar)', amount: 250, unit: 'g' },
      { name: 'Lime', amount: 1, unit: 'whole' },
      { name: 'Salt', amount: 1, unit: 'tsp' },
      { name: 'Black pepper', amount: 0.5, unit: 'tsp' },
    ],
    steps: [
      'Season fish with salt, pepper, and lime juice.',
      'Heat palm oil in a pot over medium heat and saute onions until soft.',
      'Add garlic and cook 30 seconds.',
      'Add tomatoes and cook 6-8 minutes until they break down into a sauce.',
      'Stir in okra and simmer 5 minutes.',
      'Add fish and 250 ml water, then simmer gently 12-15 minutes until fish is cooked.',
      'Add greens and cook 5 minutes until wilted and tender.',
      'Taste and adjust seasoning with salt and lime.',
      'Serve hot with boiled cassava, rice, or fried plantain.',
    ],
    imageUrl: 'https://source.unsplash.com/featured/?fish-stew,african,seafood,okra&w=600',
  },

  dessert: {
    id: 'sao-tome-dessert',
    name: 'Banana and Coconut Cake',
    description:
      'A simple tropical dessert combining ripe banana and coconut for a soft, fragrant cake-style treat.',
    cookingTime: 55,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Ripe bananas, mashed', amount: 3, unit: 'large' },
      { name: 'All-purpose flour', amount: 220, unit: 'g' },
      { name: 'Sugar', amount: 120, unit: 'g' },
      { name: 'Desiccated coconut', amount: 80, unit: 'g' },
      { name: 'Butter, melted', amount: 80, unit: 'g' },
      { name: 'Eggs', amount: 2, unit: 'whole' },
      { name: 'Baking powder', amount: 2, unit: 'tsp' },
      { name: 'Pinch of salt', amount: 1, unit: 'pinch' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Preheat oven to 180C and grease a small loaf pan or cake tin.',
      'Mix flour, baking powder, coconut, sugar, and salt in a bowl.',
      'Whisk eggs, melted butter, vanilla, and mashed bananas together.',
      'Combine wet and dry ingredients until just mixed.',
      'Pour into the pan and smooth the top.',
      'Bake 35-45 minutes until a toothpick comes out clean.',
      'Cool 15 minutes before slicing.',
      'Serve plain or with fresh fruit.',
    ],
    imageUrl: 'https://source.unsplash.com/featured/?banana-cake,coconut,cake,dessert&w=600',
  },

  drinks: {
    alcoholic: 'Palm wine, Local beer',
    nonAlcoholic: 'Coffee, Coconut water, Tropical fruit juices',
  },

  music: [
    'Ussua (traditional)',
    'Socope (traditional)',
    'Modern Lusophone pop',
    'African percussion rhythms',
  ],

  decorationIdeas: [
    'Green, yellow, red, and black flag colors',
    'Cocoa pods and cacao leaf motifs',
    'Tropical leaves and orchids',
    'Colonial-era architecture details',
    'Beach lanterns and natural wood textures',
  ],

  conversationStarters: [
    'Have you ever tried chocolate made from island-grown cacao?',
    'Would you rather hike in rainforest or relax on a beach?',
    'What is your favorite tropical fruit?',
    'Have you visited any African islands?',
    'Do you enjoy seafood-based cuisines?',
  ],

  quiz: [
    {
      id: 'sao-tome-q1',
      question: 'What is the capital of Sao Tome and Principe?',
      options: ['Sao Tome', 'Principe', 'Libreville', 'Malabo'],
      correctAnswer: 0,
    },
    {
      id: 'sao-tome-q2',
      question: 'Sao Tome and Principe is located in which body of water?',
      options: ['Red Sea', 'Gulf of Guinea', 'Mediterranean Sea', 'Caribbean Sea'],
      correctAnswer: 1,
    },
    {
      id: 'sao-tome-q3',
      question: 'What is the official language of Sao Tome and Principe?',
      options: ['Spanish', 'French', 'Portuguese', 'English'],
      correctAnswer: 2,
    },
    {
      id: 'sao-tome-q4',
      question: 'Which crop is Sao Tome and Principe especially known for?',
      options: ['Cocoa', 'Wheat', 'Tea', 'Olives'],
      correctAnswer: 0,
    },
    {
      id: 'sao-tome-q5',
      question: 'Sao Tome and Principe is best described as a:',
      options: ['Landlocked country', 'Island nation', 'Desert kingdom', 'Arctic territory'],
      correctAnswer: 1,
    },
    {
      id: 'sao-tome-q6',
      question: 'Which European country colonized Sao Tome and Principe?',
      options: ['Portugal', 'Spain', 'France', 'Netherlands'],
      correctAnswer: 0,
    },
    {
      id: 'sao-tome-q7',
      question: 'What is Pico Cao Grande?',
      options: ['A famous lake', 'A volcanic spire', 'A desert plateau', 'A coral atoll'],
      correctAnswer: 1,
    },
    {
      id: 'sao-tome-q8',
      question: 'Which park is a key rainforest conservation area in the country?',
      options: ['Obo National Park', 'Serengeti', 'Kruger Park', 'Etosha'],
      correctAnswer: 0,
    },
    {
      id: 'sao-tome-q9',
      question: 'What traditional stew is featured in this country file?',
      options: ['Calulu', 'Pho', 'Fondue', 'Paella'],
      correctAnswer: 0,
    },
    {
      id: 'sao-tome-q10',
      question: 'What currency is used in Sao Tome and Principe?',
      options: ['Dobra (STN)', 'Cedi (GHS)', 'Naira (NGN)', 'Rand (ZAR)'],
      correctAnswer: 0,
    },
  ],

  coordinates: { x: 48, y: 16 },
};
