import { Country } from '@/types';

export const tanzania: Country = {
  id: 'tanzania',
  name: 'Tanzania',
  code: 'TZ',
  continent: 'Africa',
  flag: '🇹🇿',
  landscapeImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
  description:
    'Tanzania is home to Mount Kilimanjaro, the Serengeti, and Zanzibar’s spice islands. A land of incredible wildlife, dramatic landscapes, and rich Swahili culture.',
  quickFacts: [
    { label: 'Capital', value: 'Dodoma' },
    { label: 'Population', value: '61 million' },
    { label: 'Official Languages', value: 'Swahili, English' },
    { label: 'Currency', value: 'Tanzanian Shilling' },
    { label: 'Area', value: '947,303 km²' },
  ],

  facts: [
    'Mount Kilimanjaro is Africa’s highest peak at 5,895 meters',
    'The Serengeti hosts the world’s largest annual animal migration',
    'Ngorongoro Crater is the world’s largest inactive volcanic caldera',
    'Zanzibar was once the world’s largest producer of cloves',
    'Lake Tanganyika is one of the deepest and longest freshwater lakes in the world',
    'Over 120 ethnic groups live in Tanzania',
    'Olduvai Gorge is one of the most important paleoanthropological sites in the world',
    'The Swahili coast has centuries of maritime trade and cultural exchange',
  ],

  foodCulture:
    'Tanzanian cuisine blends African, Arab, and Indian influences. Ugali (maize porridge), rice, beans, grilled meats, and fresh seafood dominate daily meals, with aromatic spices from Zanzibar enhancing coastal dishes.',

  history: [
    {
      year: 'Pre-1000s',
      title: 'Early Peoples & Trade Routes',
      description:
        'Diverse communities developed across the mainland and coast, with growing regional trade connections over time.',
    },
    {
      year: '1000s–1500s',
      title: 'Swahili Coast City-States',
      description:
        'Coastal towns flourished through Indian Ocean trade, blending African, Arab, and Persian influences into Swahili culture.',
    },
    {
      year: '1500s–1700s',
      title: 'Portuguese Presence on the Coast',
      description:
        'Portuguese influence spread along parts of the coast, shaping maritime power struggles and trade dynamics.',
    },
    {
      year: '1800s',
      title: 'Omani Influence & Zanzibar’s Rise',
      description:
        'Zanzibar became a major center for regional trade and clove cultivation, strongly influencing coastal culture.',
    },
    {
      year: '1880s–1918',
      title: 'German East Africa',
      description:
        'Mainland Tanzania (Tanganyika) was part of German East Africa, with infrastructure and colonial administration expanding.',
    },
    {
      year: '1919–1961',
      title: 'British Administration',
      description:
        'After World War I, Tanganyika came under British administration, leading to political changes and independence movements.',
    },
    {
      year: '1961–1964',
      title: 'Independence & Union',
      description:
        'Tanganyika gained independence (1961). Zanzibar became independent (1963), and the union formed Tanzania in 1964.',
    },
  ],

  innovations: [
    {
      name: 'Paleoanthropology at Olduvai Gorge',
      year: '20th Century',
      description:
        'Olduvai Gorge and nearby sites helped transform understanding of human evolution through major fossil discoveries and research.',
    },
    {
      name: 'Conservation & National Parks Model',
      year: '20th Century',
      description:
        'Protected areas like Serengeti and Ngorongoro became globally significant for wildlife conservation and ecosystem research.',
    },
    {
      name: 'Taarab Music Evolution',
      year: '19th–20th Century',
      description:
        'Zanzibar’s taarab tradition developed into a distinctive musical style blending coastal Swahili poetry with diverse influences.',
    },
  ],

  mustVisit: [
    {
      name: 'Serengeti National Park',
      description:
        'Iconic savannahs and the Great Migration—one of Earth’s most spectacular wildlife events.',
    },
    {
      name: 'Ngorongoro Conservation Area',
      description:
        'A dramatic crater ecosystem with dense wildlife viewing and striking volcanic landscapes.',
    },
    {
      name: 'Mount Kilimanjaro',
      description:
        'Africa’s highest peak—trekking routes range from challenging to extremely challenging depending on itinerary.',
    },
    {
      name: 'Zanzibar Stone Town',
      description:
        'Historic alleys, carved doors, and coastal heritage—plus easy access to beaches and spice farms.',
    },
    {
      name: 'Lake Tanganyika (Mahale / Gombe areas)',
      description:
        'Remote lakeshore beauty and famous chimpanzee habitats in western Tanzania.',
    },
  ],

  travelEssentials: [
    { item: 'Visa', description: 'Visa rules vary by nationality; check requirements before travel.' },
    {
      item: 'Best time to visit',
      description:
        'Dry season (June–October) for safaris; coastal islands are great much of the year.',
    },
    {
      item: 'Wildlife viewing',
      description:
        'The Great Migration timing varies; plan Serengeti regions based on season.',
    },
    {
      item: 'Health & mosquitoes',
      description:
        'Use mosquito protection and follow health guidance for the areas you’ll visit.',
    },
    {
      item: 'Money',
      description:
        'Cash is useful outside major cities; ATMs are common in towns but less reliable in remote areas.',
    },
    {
      item: 'Respectful culture',
      description:
        'Swahili greetings go a long way; dress modestly in towns and in Zanzibar’s historic areas.',
    },
  ],

  mainDish: {
    id: 'tanzania-main',
    name: 'Nyama Choma with Ugali',
    description:
      'Charcoal-grilled meat served with firm maize porridge (ugali) and fresh kachumbari salad',
    cookingTime: 45,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Goat or beef (bone-in preferred)', amount: 800, unit: 'g' },
      { name: 'Maize flour (fine white cornmeal)', amount: 300, unit: 'g' },
      { name: 'Water (for ugali)', amount: 900, unit: 'ml' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Red onion', amount: 1, unit: 'whole' },
      { name: 'Fresh cilantro', amount: 3, unit: 'tbsp' },
      { name: 'Lemon juice', amount: 2, unit: 'tbsp' },
      { name: 'Vegetable oil', amount: 2, unit: 'tbsp' },
      { name: 'Salt', amount: 2, unit: 'tsp' },
      { name: 'Black pepper', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Cut meat into medium-sized chunks (5–6 cm)',
      'Season meat evenly with 1 tsp salt and black pepper',
      'Let meat rest at room temperature for 30 minutes',
      'Preheat charcoal grill or grill pan to high heat',
      'Grill meat for 6–8 minutes per side until charred outside and juicy inside',
      'Remove meat and rest under foil for 5 minutes before serving',
      'For ugali: bring 900 ml water to a rolling boil in a heavy pot',
      'Reduce heat to medium and slowly add maize flour while stirring constantly',
      'Stir firmly for 8–10 minutes until thick and smooth with no lumps',
      'Shape ugali into a mound using a wooden spoon',
      'For kachumbari: finely dice tomatoes and onion',
      'Mix tomatoes, onion, cilantro, lemon juice, and remaining salt',
      'Serve grilled meat hot with ugali and kachumbari on the side',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=650',
  },

  dessert: {
    id: 'tanzania-dessert',
    name: 'Mandazi',
    description:
      'East African coconut doughnuts—lightly sweet, gently spiced, and perfect with chai.',
    cookingTime: 40,
    servings: 12,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'All-purpose flour', amount: 400, unit: 'g' },
      { name: 'Sugar', amount: 80, unit: 'g' },
      { name: 'Baking powder', amount: 2, unit: 'tsp' },
      { name: 'Ground cardamom (optional)', amount: 0.5, unit: 'tsp' },
      { name: 'Salt', amount: 0.5, unit: 'tsp' },
      { name: 'Coconut milk', amount: 250, unit: 'ml' },
      { name: 'Egg (optional)', amount: 1, unit: 'large' },
      { name: 'Vegetable oil (for frying)', amount: 700, unit: 'ml' },
    ],
    steps: [
      'Mix flour, sugar, baking powder, salt, and cardamom in a bowl',
      'Add coconut milk (and egg if using) and knead into a soft, smooth dough',
      'Cover and rest 15 minutes',
      'Roll dough to about 1 cm thickness and cut into triangles or squares',
      'Heat oil in a pot to medium heat',
      'Fry mandazi in batches until puffed and golden, turning once',
      'Drain on paper towels and serve warm with chai',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1525176561091-0169dd29e76e?w=800',
  },

  drinks: {
    alcoholic: 'Banana beer, Safari Lager, Konyagi (local gin)',
    nonAlcoholic: 'Chai (spiced tea), Fresh coconut water, Tamarind juice',
  },

  music: [
    'Bongo Flava',
    'Traditional Taarab music',
    'Swahili coastal rhythms',
    'Ngoma drumming traditions',
  ],

  decorationIdeas: [
    'Green, yellow, blue, and black (flag colors)',
    'Safari animal imagery',
    'Maasai beadwork-inspired patterns',
    'Zanzibar spice bowls (cloves, cinnamon, cardamom)',
    'Kilimanjaro mountain silhouettes',
    'Woven baskets and natural textiles',
  ],

  conversationStarters: [
    'Would you like to go on a Serengeti safari?',
    'Have you ever tasted ugali?',
    'Would you climb Mount Kilimanjaro?',
    'What do you know about Zanzibar’s spice history?',
    'Beach time in Zanzibar or safari in the Serengeti—if you had to pick one?',
  ],

  quiz: [
    {
      id: 'tanzania-q1',
      question: 'What is the capital of Tanzania?',
      options: ['Dar es Salaam', 'Dodoma', 'Arusha', 'Mwanza'],
      correctAnswer: 1,
    },
    {
      id: 'tanzania-q2',
      question: 'What is Africa’s highest mountain?',
      options: ['Mount Kenya', 'Mount Kilimanjaro', 'Mount Meru', 'Atlas Mountains'],
      correctAnswer: 1,
    },
    {
      id: 'tanzania-q3',
      question: 'Which famous wildlife migration occurs in Tanzania?',
      options: ['Elephant March', 'Great Migration', 'Buffalo Run', 'Savannah Crossing'],
      correctAnswer: 1,
    },
    {
      id: 'tanzania-q4',
      question: 'What is ugali primarily made from?',
      options: ['Rice', 'Wheat', 'Maize (corn)', 'Millet'],
      correctAnswer: 2,
    },
    {
      id: 'tanzania-q5',
      question: 'Which island is famous for spices in Tanzania?',
      options: ['Pemba', 'Zanzibar', 'Mafia', 'Lamu'],
      correctAnswer: 1,
    },
    {
      id: 'tanzania-q6',
      question: 'What language is widely spoken across Tanzania?',
      options: ['Arabic', 'Swahili', 'French', 'Portuguese'],
      correctAnswer: 1,
    },
    {
      id: 'tanzania-q7',
      question: 'Which crater is found in northern Tanzania?',
      options: ['Ngorongoro', 'Krakatoa', 'Vesuvius', 'Etna'],
      correctAnswer: 0,
    },
    {
      id: 'tanzania-q8',
      question: 'What type of beer is traditionally brewed from bananas?',
      options: ['Millet beer', 'Banana beer', 'Palm wine', 'Sorghum beer'],
      correctAnswer: 1,
    },
    {
      id: 'tanzania-q9',
      question: 'What is Nyama Choma?',
      options: ['Stewed meat', 'Grilled meat', 'Dried meat', 'Spiced fish'],
      correctAnswer: 1,
    },
    {
      id: 'tanzania-q10',
      question: 'Which sea borders Tanzania to the east?',
      options: ['Red Sea', 'Arabian Sea', 'Indian Ocean', 'Mediterranean Sea'],
      correctAnswer: 2,
    },
  ],

  coordinates: { x: 56, y: 15 },
};
