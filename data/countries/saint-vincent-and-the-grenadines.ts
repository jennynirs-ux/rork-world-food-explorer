import { Country } from '@/types';

export const saintVincentAndTheGrenadines: Country = {
  id: 'saint-vincent-and-the-grenadines',
  name: 'Saint Vincent and the Grenadines',
  code: 'VC',
  continent: 'North America',
  flag: '🇻🇨',
  landscapeImage: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80',
  description:
    'Saint Vincent and the Grenadines is a Caribbean island nation famous for turquoise bays, sailing and yacht charters, coral reefs, and the dramatic volcanic landscape of La Soufriere.',
  quickFacts: [
    { label: 'Capital', value: 'Kingstown' },
    { label: 'Population', value: '111,000' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'East Caribbean Dollar (XCD)' },
    { label: 'Area', value: '389 km²' },
  ],
  facts: [
    'The country is made up of Saint Vincent plus a chain of smaller islands called the Grenadines',
    'The Tobago Cays are known for clear water, coral reefs, and sea turtles',
    'Kingstown is one of the oldest towns in the Eastern Caribbean',
    'La Soufriere is an active volcano on Saint Vincent',
    'Sailing, snorkeling, and diving are major activities across the island chain',
    'Breadfruit is a beloved staple and features in many traditional meals',
    'Carnival (Vincy Mas) is one of the biggest cultural celebrations of the year',
    'The islands have a strong Creole culture shaped by African, European, and Indigenous influences',
  ],
  foodCulture:
    'Vincentian cuisine is hearty and island-fresh, built around seafood, breadfruit, plantains, yams, and spicy Creole seasonings. Meals often include fish, stews, and local vegetables, with pepper sauces and lime adding brightness.',

  history: [
    {
      year: 'Pre-1600s',
      title: 'Indigenous Caribbean Roots',
      description:
        'Indigenous communities lived across the islands for centuries, developing navigation and coastal livelihoods that shaped early island culture.',
    },
    {
      year: '1600s',
      title: 'European Rivalry',
      description:
        'European powers competed for control in the region, and the islands became part of wider Caribbean trade and conflict.',
    },
    {
      year: '1700s',
      title: 'Plantation Economy',
      description:
        'Plantations expanded, transforming land use and society and tying the islands into Atlantic trade networks.',
    },
    {
      year: '1800s',
      title: 'Colonial Administration',
      description:
        'British rule consolidated over time, and the islands developed administrative centers including Kingstown.',
    },
    {
      year: '1979',
      title: 'Independence',
      description:
        'Saint Vincent and the Grenadines became an independent state within the Commonwealth, with Kingstown as the capital.',
    },
    {
      year: 'Modern Era',
      title: 'Tourism and Island Life',
      description:
        'The Grenadines grew into a world-famous sailing destination, while Saint Vincent balances agriculture, services, and eco-tourism.',
    },
  ],

  innovations: [
    {
      name: 'Marine Protection and Sustainable Tourism',
      year: 'Modern',
      description:
        'Protected marine areas, especially around the Tobago Cays, help conserve reefs and turtle habitats while supporting sustainable tourism.',
    },
    {
      name: 'Yacht Charter and Island-Hopping Infrastructure',
      year: 'Late 1900s-Present',
      description:
        'The Grenadines developed into a globally recognized sailing destination, with charter services and anchorages supporting island-to-island travel.',
    },
  ],

  mustVisit: [
    {
      name: 'Tobago Cays Marine Park',
      description:
        'Iconic reef lagoons with snorkeling, turtles, and postcard-perfect anchorages.',
    },
    {
      name: 'Bequia',
      description:
        'Charming island with beaches, sailing culture, and a relaxed village vibe.',
    },
    {
      name: 'Mustique',
      description:
        'Famous private island known for beautiful beaches and exclusive retreats.',
    },
    {
      name: 'La Soufriere Volcano',
      description:
        'A dramatic volcanic hike on Saint Vincent with epic views (check safety guidance before visiting).',
    },
    {
      name: 'Kingstown and Botanical Gardens',
      description:
        'Historic capital with markets and a renowned botanical garden experience.',
    },
  ],

  travelEssentials: [
    {
      item: 'Best time to visit',
      description:
        'December to April for drier weather; May to November is warmer and wetter.',
    },
    {
      item: 'Island hopping',
      description:
        'Ferries, short flights, and boat charters connect Saint Vincent with the Grenadines.',
    },
    {
      item: 'Currency',
      description:
        'The East Caribbean Dollar (XCD) is standard; carry some cash for small purchases.',
    },
    {
      item: 'Reef-safe sun protection',
      description:
        'Use reef-safe sunscreen and protective clothing to help protect coral reefs.',
    },
    {
      item: 'Volcano awareness',
      description:
        'If hiking La Soufriere, check local guidance and conditions before you go.',
    },
  ],

  mainDish: {
    id: 'saint-vincent-main',
    name: 'Roasted Breadfruit and Fried Jackfish',
    description:
      'A classic Vincentian comfort meal: smoky roasted breadfruit paired with crispy fried fish, lime, and pepper sauce.',
    cookingTime: 60,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'Breadfruit', amount: 1, unit: 'whole' },
      { name: 'Jackfish (or mackerel), cleaned', amount: 4, unit: 'pieces' },
      { name: 'Lime', amount: 2, unit: 'pieces' },
      { name: 'Garlic cloves, minced', amount: 3, unit: 'cloves' },
      { name: 'Salt', amount: 1, unit: 'tsp' },
      { name: 'Black pepper', amount: 0.5, unit: 'tsp' },
      { name: 'All-purpose flour', amount: 80, unit: 'g' },
      { name: 'Oil for frying', amount: 300, unit: 'ml' },
      { name: 'Hot pepper sauce (to serve)', amount: 2, unit: 'tbsp' },
    ],
    steps: [
      'Roast the breadfruit: bake at 200C for 50-60 minutes (turn once) until the skin is dark and the inside is soft.',
      'Cool slightly, then peel and cut into thick slices.',
      'Pat fish dry. Rub with lime juice, garlic, salt, and pepper. Let sit 10 minutes.',
      'Lightly dredge fish in flour, shaking off excess.',
      'Heat oil in a pan over medium-high heat.',
      'Fry fish 3-5 minutes per side until golden and cooked through.',
      'Drain on paper towels.',
      'Serve fried fish with warm breadfruit slices and extra lime.',
      'Add pepper sauce to taste.',
      'Optional: serve with a simple salad or steamed greens.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
  },

  dessert: {
    id: 'saint-vincent-dessert',
    name: 'Coconut Bake',
    description:
      'A lightly sweet coconut bread that can be served as a snack or dessert, often enjoyed with tea or fresh fruit.',
    cookingTime: 45,
    servings: 8,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'All-purpose flour', amount: 300, unit: 'g' },
      { name: 'Baking powder', amount: 2, unit: 'tsp' },
      { name: 'Sugar', amount: 70, unit: 'g' },
      { name: 'Desiccated coconut', amount: 120, unit: 'g' },
      { name: 'Butter, melted', amount: 60, unit: 'g' },
      { name: 'Milk (or coconut milk)', amount: 250, unit: 'ml' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'Pinch of salt', amount: 1, unit: 'pinch' },
    ],
    steps: [
      'Preheat oven to 180C and grease a loaf tin or small baking dish.',
      'Mix flour, baking powder, sugar, coconut, and salt in a bowl.',
      'Stir in melted butter, milk, and vanilla until a soft dough/batter forms.',
      'Spread into the tin and smooth the top.',
      'Bake 30-35 minutes until golden and a toothpick comes out clean.',
      'Cool 10-15 minutes before slicing.',
      'Serve warm or at room temperature.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=800&q=80',
  },

  drinks: {
    alcoholic: 'Hairoun beer, Sunset rum, Rum punch',
    nonAlcoholic: 'Sea moss drink, Sorrel drink, Fresh fruit juices, Ginger tea',
  },

  music: ['Calypso', 'Soca', 'Reggae', 'Steelpan'],

  decorationIdeas: [
    'Blue, yellow, and green flag colors',
    'Sailing and yacht elements (ropes, mini anchors)',
    'Tropical leaves and hibiscus flowers',
    'Sea turtle and reef motifs',
    'Beach lanterns and driftwood accents',
  ],

  conversationStarters: [
    'Would you rather island-hop by sailboat or stay on one beach all week?',
    'Have you ever tried roasted breadfruit?',
    'What is your favorite ocean activity: snorkeling, diving, or kayaking?',
    'Would you hike an active volcano if conditions were safe?',
    'Which Caribbean music style gets you in a good mood?',
  ],

  quiz: [
    {
      id: 'saint-vincent-q1',
      question: 'What is the capital of Saint Vincent and the Grenadines?',
      options: ['Kingstown', 'Georgetown', 'Bridgetown', 'Castries'],
      correctAnswer: 0,
    },
    {
      id: 'saint-vincent-q2',
      question: 'Saint Vincent and the Grenadines is located in which region?',
      options: ['Caribbean', 'Baltic', 'Persian Gulf', 'Arctic'],
      correctAnswer: 0,
    },
    {
      id: 'saint-vincent-q3',
      question: 'What is the official language of Saint Vincent and the Grenadines?',
      options: ['Spanish', 'French', 'English', 'Dutch'],
      correctAnswer: 2,
    },
    {
      id: 'saint-vincent-q4',
      question: 'What currency is used in Saint Vincent and the Grenadines?',
      options: ['East Caribbean Dollar (XCD)', 'US Dollar (USD)', 'Euro (EUR)', 'Pound Sterling (GBP)'],
      correctAnswer: 0,
    },
    {
      id: 'saint-vincent-q5',
      question: 'Which marine area is famous for snorkeling and sea turtles?',
      options: ['Tobago Cays', 'Great Barrier Reef', 'Blue Lagoon (Iceland)', 'Lake Titicaca'],
      correctAnswer: 0,
    },
    {
      id: 'saint-vincent-q6',
      question: 'What is La Soufriere on Saint Vincent?',
      options: ['A glacier', 'An active volcano', 'A coral atoll', 'A desert oasis'],
      correctAnswer: 1,
    },
    {
      id: 'saint-vincent-q7',
      question: 'The country is made up of Saint Vincent plus what island group?',
      options: ['The Grenadines', 'The Canaries', 'The Azores', 'The Cyclades'],
      correctAnswer: 0,
    },
    {
      id: 'saint-vincent-q8',
      question: 'Which staple food is especially common in traditional Vincentian meals?',
      options: ['Breadfruit', 'Rye bread', 'Couscous', 'Buckwheat'],
      correctAnswer: 0,
    },
    {
      id: 'saint-vincent-q9',
      question: 'Which festival name is commonly associated with Saint Vincent and the Grenadines carnival celebrations?',
      options: ['Vincy Mas', 'Junkanoo', 'Carnaval de Oruro', 'Songkran'],
      correctAnswer: 0,
    },
    {
      id: 'saint-vincent-q10',
      question: 'In which year did Saint Vincent and the Grenadines become independent?',
      options: ['1966', '1979', '1983', '1995'],
      correctAnswer: 1,
    },
  ],

  coordinates: { x: 26, y: 25 },
};
