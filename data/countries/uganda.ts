import { Country } from '@/types';

export const uganda: Country = {
  id: 'uganda',
  name: 'Uganda',
  code: 'UG',
  continent: 'Africa',
  flag: '🇺🇬',
  landscapeImage: 'https://images.unsplash.com/photo-1612965110667-38a19c144b91?w=800',
  description:
    'Uganda, the "Pearl of Africa," is known for its diverse landscapes, mountain gorillas, and as the source of the Nile River. A country of lush rainforests, savannah, and friendly people.',
  quickFacts: [
    { label: 'Capital', value: 'Kampala' },
    { label: 'Population', value: '47 million' },
    { label: 'Official Languages', value: 'English, Swahili' },
    { label: 'Currency', value: 'Ugandan Shilling (UGX)' },
    { label: 'Area', value: '241,038 km²' },
  ],
  facts: [
    'Uganda is home to about half of the world’s mountain gorilla population',
    'The source of the Nile River is in Jinja, Uganda',
    'Lake Victoria, Africa’s largest lake, borders Uganda',
    'Winston Churchill called Uganda the "Pearl of Africa"',
    'Uganda has 10 national parks with diverse ecosystems',
    'The crested crane is Uganda’s national bird and a national symbol',
    'Uganda lies on the equator, giving it a warm climate year-round with regional variation by altitude',
  ],

  foodCulture:
    'Ugandan cuisine features matoke (steamed plantains), posho (maize meal), and hearty stews. Meals are often shared communally, and groundnuts (peanuts) are commonly used in sauces.',

  history: [
    {
      year: 'Pre-1800s',
      title: 'Kingdoms and Trade Networks',
      description:
        'Powerful kingdoms such as Buganda, Bunyoro, and Ankole shaped Uganda’s political and cultural landscape, supported by regional trade and agriculture.',
    },
    {
      year: '1894',
      title: 'British Protectorate',
      description:
        'Uganda became a British protectorate, bringing major political and economic changes and expanding rail and administrative systems.',
    },
    {
      year: '1962',
      title: 'Independence',
      description:
        'Uganda gained independence, beginning a modern era of nation-building with evolving political systems and institutions.',
    },
    {
      year: '1990s–Present',
      title: 'Conservation and Tourism Growth',
      description:
        'Uganda strengthened conservation efforts and eco-tourism, especially around gorilla trekking and national parks.',
    },
  ],

  innovations: [
    {
      name: 'Mountain Gorilla Conservation',
      year: 'Modern Era',
      description:
        'Uganda is internationally known for conservation programs and protected areas supporting mountain gorilla populations and eco-tourism.',
    },
    {
      name: 'Coffee Production Excellence',
      year: '20th Century–Present',
      description:
        'Uganda is a major coffee producer (especially robusta), supporting rural livelihoods and export growth.',
    },
    {
      name: 'Community-Based Tourism Models',
      year: 'Modern Era',
      description:
        'Many regions use community tourism initiatives where local communities benefit directly from conservation and visitor experiences.',
    },
  ],

  mustVisit: [
    {
      name: 'Bwindi Impenetrable National Park',
      description:
        'World-famous for mountain gorilla trekking and dense, ancient rainforest ecosystems.',
    },
    {
      name: 'Murchison Falls National Park',
      description:
        'Known for dramatic Nile scenery where the river forces through a narrow gorge, plus classic safari wildlife.',
    },
    {
      name: 'Queen Elizabeth National Park',
      description:
        'A diverse park with savannah, wetlands, and the Kazinga Channel—great for boat safaris and birdlife.',
    },
    {
      name: 'Jinja (Source of the Nile)',
      description:
        'A lively riverside town associated with the Nile’s source, popular for rafting and outdoor adventures.',
    },
    {
      name: 'Lake Victoria Shores',
      description:
        'Africa’s largest lake offers beautiful sunsets, fishing culture, and relaxed lakeside vibes.',
    },
  ],

  travelEssentials: [
    {
      item: 'Best time to visit',
      description:
        'Drier seasons often make travel and trekking easier; weather varies by region and altitude.',
    },
    {
      item: 'Wildlife etiquette',
      description:
        'Follow ranger guidance, keep distance, and avoid loud noises—especially on gorilla treks.',
    },
    {
      item: 'What to pack',
      description:
        'Light rain jacket, sturdy shoes, insect repellent, and layers (cooler at higher elevations).',
    },
    {
      item: 'Cash & payments',
      description:
        'Cards may not work everywhere; carry some cash for smaller vendors and remote areas.',
    },
    {
      item: 'Respect local culture',
      description:
        'Ask before photographing people and be mindful in rural areas and at community sites.',
    },
  ],

  mainDish: {
    id: 'uganda-main',
    name: 'Matoke',
    description:
      'Steamed and mashed green bananas traditionally cooked in banana leaves and served with groundnut sauce',
    cookingTime: 60,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Green plantains/bananas', amount: 10, unit: 'whole' },
      { name: 'Groundnuts (peanuts)', amount: 200, unit: 'g' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Garlic', amount: 3, unit: 'cloves' },
      { name: 'Vegetable oil', amount: 3, unit: 'tbsp' },
      { name: 'Banana leaves', amount: 2, unit: 'large' },
      { name: 'Salt', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Peel green plantains and wrap them in banana leaves',
      'Steam wrapped plantains for about 40 minutes until soft',
      'Grind or blend groundnuts with water into a smooth paste',
      'Sauté onions, garlic, and tomatoes in oil',
      'Add groundnut paste and simmer until thick',
      'Unwrap and mash the steamed plantains',
      'Serve mashed matoke topped with groundnut sauce',
      'Accompany with fresh vegetables or greens',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1587334207863-c52ca1cf9e7e?w=600',
  },

  dessert: {
    id: 'uganda-dessert',
    name: 'Rolex Banana Pancakes',
    description:
      'Simple sweet banana pancakes inspired by Uganda’s beloved “rolex” street-food style—served warm with banana and a light sprinkle of sugar.',
    cookingTime: 25,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Ripe bananas', amount: 3, unit: 'large' },
      { name: 'All-purpose flour', amount: 200, unit: 'g' },
      { name: 'Milk (or plant milk)', amount: 250, unit: 'ml' },
      { name: 'Eggs', amount: 2, unit: 'large' },
      { name: 'Sugar', amount: 40, unit: 'g' },
      { name: 'Baking powder', amount: 1.5, unit: 'tsp' },
      { name: 'Salt', amount: 0.25, unit: 'tsp' },
      { name: 'Butter or oil (for frying)', amount: 2, unit: 'tbsp' },
    ],
    steps: [
      'Mash bananas until smooth',
      'Whisk eggs and milk together in a bowl',
      'Add flour, sugar, baking powder, and salt; whisk until just combined',
      'Stir in mashed banana',
      'Heat a pan over medium heat with a little butter/oil',
      'Pour small ladles of batter and cook 2–3 minutes per side until golden',
      'Serve warm (optionally dust with a little sugar or serve with fruit)',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600',
  },

  drinks: {
    alcoholic: 'Waragi (banana gin), local banana beer, Bell Lager',
    nonAlcoholic: 'Chai (milk tea), passion fruit juice, fresh juice blends',
  },

  music: [
    'Traditional Kiganda music',
    'Kadongo Kamu',
    'Contemporary Afrobeat',
    'Gospel music',
  ],

  decorationIdeas: [
    'Black, yellow, and red flag colors',
    'Crested crane imagery (national bird)',
    'Banana leaf patterns',
    'Traditional bark cloth',
    'Green and earth-tone accents',
  ],

  conversationStarters: [
    'Would you like to see mountain gorillas in the wild?',
    'Have you ever tried plantains prepared different ways?',
    'What do you know about the source of the Nile?',
    'Which African wildlife fascinates you most?',
  ],

  quiz: [
    {
      id: 'uganda-q1',
      question: 'What is the capital of Uganda?',
      options: ['Entebbe', 'Kampala', 'Jinja', 'Mbarara'],
      correctAnswer: 1,
    },
    {
      id: 'uganda-q2',
      question: 'Which rare animal is Uganda famous for protecting?',
      options: ['Giant pandas', 'Mountain gorillas', 'Snow leopards', 'Koalas'],
      correctAnswer: 1,
    },
    {
      id: 'uganda-q3',
      question: 'What is matoke made from?',
      options: ['Rice', 'Green plantains', 'Cassava', 'Sweet potatoes'],
      correctAnswer: 1,
    },
    {
      id: 'uganda-q4',
      question: 'Which major river has its source in Uganda?',
      options: ['Congo River', 'Niger River', 'Nile River', 'Zambezi River'],
      correctAnswer: 2,
    },
    {
      id: 'uganda-q5',
      question: 'Which lake borders Uganda and is Africa’s largest?',
      options: ['Lake Tanganyika', 'Lake Malawi', 'Lake Victoria', 'Lake Turkana'],
      correctAnswer: 2,
    },
    {
      id: 'uganda-q6',
      question: 'What nickname did Winston Churchill give Uganda?',
      options: ['Heart of Africa', 'Garden of Africa', 'Pearl of Africa', 'Jewel of the Nile'],
      correctAnswer: 2,
    },
    {
      id: 'uganda-q7',
      question: 'What is the national bird of Uganda?',
      options: ['Eagle', 'Flamingo', 'Crested crane', 'Ostrich'],
      correctAnswer: 2,
    },
    {
      id: 'uganda-q8',
      question: 'How many national parks does Uganda have?',
      options: ['5', '7', '10', '15'],
      correctAnswer: 2,
    },
    {
      id: 'uganda-q9',
      question: 'Which crop plays a central role in Ugandan cuisine?',
      options: ['Wheat', 'Bananas/plantains', 'Potatoes', 'Rice'],
      correctAnswer: 1,
    },
    {
      id: 'uganda-q10',
      question: 'Which currency is used in Uganda?',
      options: ['Kenyan Shilling', 'Ugandan Shilling', 'East African Pound', 'US Dollar'],
      correctAnswer: 1,
    },
  ],

  coordinates: { x: 55, y: 20 },
};
