import { Country } from '@/types';

export const seychelles: Country = {
  id: 'seychelles',
  name: 'Seychelles',
  code: 'SC',
  continent: 'Africa',
  flag: '🇸🇨',
  landscapeImage: 'https://images.unsplash.com/photo-1589979481223-deb893043163?w=800&q=80',
  description:
    'Seychelles is an Indian Ocean archipelago of 115 islands known for turquoise lagoons, dramatic granite boulders, coral reefs, and rare wildlife. It is famous for protected nature reserves and idyllic beaches across Mahé, Praslin, and La Digue.',
  quickFacts: [
    { label: 'Capital', value: 'Victoria' },
    { label: 'Population', value: '100,000' },
    { label: 'Official Languages', value: 'Seychellois Creole, English, French' },
    { label: 'Currency', value: 'Seychellois Rupee (SCR)' },
    { label: 'Area', value: '452 km²' },
  ],
  facts: [
    'Seychelles is an archipelago of 115 islands in the Indian Ocean',
    'Anse Source d’Argent (La Digue) is among the most photographed beaches in the world',
    'The Coco de Mer palm produces the largest seed in the plant kingdom',
    'Aldabra Atoll is famous for its giant tortoise population and protected ecosystems',
    'Much of Seychelles is set aside as nature reserves and marine protected areas',
    'Creole culture blends African, European, and Asian influences',
    'Coral reefs and lagoons make snorkeling and diving a major draw',
    'Vanilla, cinnamon, and tropical fruits appear in local cooking and drinks',
  ],
  foodCulture:
    'Seychellois cuisine is a Creole fusion shaped by African, French, Indian, and Chinese influences. Fresh fish, octopus, coconut milk, lime, chilies, and aromatic spices are staples, often served with rice, lentils, and chutneys.',

  history: [
    {
      year: '1700s',
      title: 'Early European Settlement',
      description:
        'French influence shaped early place names, administration, and Creole culture, later followed by British colonial rule.',
    },
    {
      year: '1900s',
      title: 'Creole Identity',
      description:
        'A distinct Seychellois Creole identity strengthened through language, music, and cuisine across the islands.',
    },
    {
      year: '1976',
      title: 'Independence',
      description:
        'Seychelles gained independence and developed its modern national institutions while expanding tourism and conservation.',
    },
    {
      year: 'Modern Era',
      title: 'Conservation & Sustainable Tourism',
      description:
        'Seychelles became known for protecting unique habitats, including marine zones, coral reefs, and island biodiversity.',
    },
    {
      year: 'Today',
      title: 'Island Nation Lifestyle',
      description:
        'Seychelles combines beach tourism, fisheries, and services with strong environmental protection and cultural traditions.',
    },
  ],

  innovations: [
    {
      name: 'Aldabra Conservation Model',
      year: 'Modern',
      description:
        'Long-term protection of Aldabra Atoll and its giant tortoises has become a flagship example of large-scale island ecosystem conservation.',
    },
    {
      name: 'Marine Protection Leadership',
      year: 'Modern',
      description:
        'Seychelles is known for expanding protected marine areas to help safeguard reefs, fisheries, and biodiversity while supporting sustainable tourism.',
    },
    {
      name: 'Creole Culinary Fusion',
      year: 'Traditional–Modern',
      description:
        'A distinctive Creole food culture blends African, French, Indian, and Chinese techniques into island dishes centered on seafood and coconut.',
    },
  ],

  mustVisit: [
    { name: 'Anse Source d’Argent (La Digue)', description: 'Iconic granite boulders, shallow turquoise water, and postcard views.' },
    { name: 'Vallée de Mai (Praslin)', description: 'Palm forest famous for Coco de Mer and lush nature trails.' },
    { name: 'Aldabra Atoll', description: 'Remote UNESCO-listed atoll with giant tortoises and pristine ecosystems (limited access).' },
    { name: 'Morne Seychellois National Park (Mahé)', description: 'Mountain hikes, rainforest, and panoramic viewpoints.' },
    { name: 'Curieuse Island', description: 'Giant tortoises, mangroves, and beaches near Praslin.' },
  ],

  travelEssentials: [
    { item: 'Best time to visit', description: 'April–May and October–November often bring calmer seas and good visibility for snorkeling.' },
    { item: 'Island hopping', description: 'Ferries and short flights connect Mahé, Praslin, and La Digue—plan transfers ahead.' },
    { item: 'Reef-safe sun protection', description: 'Use reef-safe sunscreen and protective clothing to reduce coral impact.' },
    { item: 'Cash & cards', description: 'Cards are common in hotels, but carry cash for small shops, buses, and takeaway.' },
    { item: 'Driving', description: 'Mahé and Praslin are easy to explore by rental car; La Digue is famous for bicycles.' },
    { item: 'Respect nature rules', description: 'Follow park guidelines and keep distance from wildlife, especially tortoises and nesting areas.' },
  ],

  mainDish: {
    id: 'seychelles-main',
    name: 'Seychellois Fish Curry',
    description:
      'Creole-style fish curry gently simmered in coconut milk with tomatoes, lime, and warm spices—bright, fragrant, and best with rice.',
    cookingTime: 40,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'White fish fillets (firm)', amount: 600, unit: 'g' },
      { name: 'Coconut milk', amount: 400, unit: 'ml' },
      { name: 'Onion, sliced', amount: 1, unit: 'whole' },
      { name: 'Garlic cloves, minced', amount: 3, unit: 'cloves' },
      { name: 'Fresh ginger, grated', amount: 20, unit: 'g' },
      { name: 'Tomatoes, chopped', amount: 2, unit: 'whole' },
      { name: 'Curry powder', amount: 2, unit: 'tbsp' },
      { name: 'Turmeric (optional)', amount: 0.5, unit: 'tsp' },
      { name: 'Lime juice', amount: 2, unit: 'tbsp' },
      { name: 'Vegetable oil', amount: 2, unit: 'tbsp' },
      { name: 'Salt', amount: 1, unit: 'tsp' },
      { name: 'Black pepper', amount: 0.5, unit: 'tsp' },
      { name: 'Fresh chili (optional)', amount: 1, unit: 'whole' },
    ],
    steps: [
      'Heat oil in a pan over medium heat. Sauté onion 4–5 minutes until softened.',
      'Add garlic and ginger; cook 30 seconds until fragrant.',
      'Stir in curry powder (and turmeric if using) and cook 30 seconds to bloom the spices.',
      'Add chopped tomatoes and cook 3–4 minutes until they break down.',
      'Pour in coconut milk, bring to a gentle simmer, and season with salt and pepper.',
      'Cut fish into large chunks and add to the sauce.',
      'Simmer gently 8–10 minutes (avoid hard boiling) until fish is just cooked.',
      'Stir in lime juice and taste—adjust salt, pepper, and lime.',
      'Optional: add a slit chili for heat during the simmer, then remove before serving.',
      'Serve with rice and a simple cucumber salad or lentils.',
    ],
    imageUrl: 'https://images.pexels.com/photos/10050659/pexels-photo-10050659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },

  dessert: {
    id: 'seychelles-dessert',
    name: 'Coconut & Banana Cake',
    description:
      'Moist island-style cake combining ripe bananas and coconut—simple, tropical, and perfect with tea.',
    cookingTime: 55,
    servings: 10,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Ripe bananas, mashed', amount: 3, unit: 'whole' },
      { name: 'All-purpose flour', amount: 250, unit: 'g' },
      { name: 'Sugar', amount: 120, unit: 'g' },
      { name: 'Desiccated coconut', amount: 80, unit: 'g' },
      { name: 'Baking powder', amount: 2, unit: 'tsp' },
      { name: 'Eggs', amount: 2, unit: 'whole' },
      { name: 'Butter, melted (or neutral oil)', amount: 90, unit: 'g' },
      { name: 'Milk (or coconut milk)', amount: 120, unit: 'ml' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'Pinch of salt', amount: 1, unit: 'pinch' },
    ],
    steps: [
      'Preheat oven to 180°C and grease a loaf tin or round cake pan.',
      'Whisk flour, baking powder, salt, and coconut in a bowl.',
      'In another bowl, mix mashed bananas, sugar, eggs, melted butter, milk, and vanilla.',
      'Fold wet mixture into dry mixture until just combined (do not overmix).',
      'Pour into the pan and smooth the top.',
      'Bake 35–45 minutes until a toothpick comes out clean.',
      'Cool 10 minutes in the pan, then transfer to a rack to cool fully.',
      'Slice and serve plain or with fresh fruit.',
      'Optional: toast extra coconut and sprinkle on top.',
      'Store airtight; the cake stays moist for 2–3 days.',
    ],
    imageUrl: 'https://images.pexels.com/photos/14242068/pexels-photo-14242068.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },

  drinks: {
    alcoholic: 'SeyBrew beer, Takamaka rum, Calou (palm wine)',
    nonAlcoholic: 'Fresh coconut water, Passion fruit juice, Vanilla tea',
  },

  music: [
    'Moutya',
    'Sega',
    'Contredanse',
    'Contemporary Seychellois pop',
    'Creole folk rhythms',
  ],

  decorationIdeas: [
    'Ocean blues and turquoise table settings',
    'Granite boulder and beach imagery',
    'Coco de Mer palm motifs',
    'Tropical flowers (frangipani) and greenery',
    'Shells and woven textures for an island feel',
  ],

  conversationStarters: [
    'Would you rather island-hop by ferry or stay on one beach for a week?',
    'Have you ever seen photos of Anse Source d’Argent?',
    'Would you like to snorkel with sea turtles and reef fish?',
    'What tropical fruit would you want on a beach dessert?',
    'Are you more into hiking viewpoints or relaxing by the lagoon?',
  ],

  quiz: [
    {
      id: 'seychelles-q1',
      question: 'How many islands make up Seychelles (approximately)?',
      options: ['12', '50', '115', '300'],
      correctAnswer: 2,
    },
    {
      id: 'seychelles-q2',
      question: 'What is the capital of Seychelles?',
      options: ['Victoria', 'Port Louis', 'Moroni', 'Saint-Denis'],
      correctAnswer: 0,
    },
    {
      id: 'seychelles-q3',
      question: 'Which beach is famous for granite boulders and is heavily photographed?',
      options: ['Anse Source d’Argent', 'Bondi Beach', 'Copacabana', 'Seven Mile Beach'],
      correctAnswer: 0,
    },
    {
      id: 'seychelles-q4',
      question: 'What unique palm is famous in Seychelles for producing an enormous seed?',
      options: ['Coco de Mer', 'Date palm', 'Oil palm', 'Areca palm'],
      correctAnswer: 0,
    },
    {
      id: 'seychelles-q5',
      question: 'Seychelles is located in which ocean?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'],
      correctAnswer: 1,
    },
    {
      id: 'seychelles-q6',
      question: 'Which of these is an official language of Seychelles?',
      options: ['German', 'Seychellois Creole', 'Portuguese', 'Swahili'],
      correctAnswer: 1,
    },
    {
      id: 'seychelles-q7',
      question: 'What is Seychelles’ currency?',
      options: ['Euro (EUR)', 'Seychellois Rupee (SCR)', 'Rand (ZAR)', 'Dirham (AED)'],
      correctAnswer: 1,
    },
    {
      id: 'seychelles-q8',
      question: 'Which ingredient is central in many Seychellois dishes?',
      options: ['Coconut', 'Rye', 'Maple syrup', 'Saffron'],
      correctAnswer: 0,
    },
    {
      id: 'seychelles-q9',
      question: 'Which dish style is common in Seychellois cuisine?',
      options: ['Creole seafood curry', 'Deep-dish pizza', 'Pierogi', 'Sushi omakase'],
      correctAnswer: 0,
    },
    {
      id: 'seychelles-q10',
      question: 'Which activity is especially popular in Seychelles due to reefs and lagoons?',
      options: ['Sandboarding', 'Snorkeling', 'Ice climbing', 'Desert trekking'],
      correctAnswer: 1,
    },
  ],

  coordinates: { x: 59, y: 18 },
};
