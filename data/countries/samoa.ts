import { Country } from '@/types';

export const samoa: Country = {
  id: 'samoa',
  name: 'Samoa',
  code: 'WS',
  continent: 'Oceania',
  flag: '🇼🇸',
  landscapeImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
  description:
    "Samoa is a Polynesian island nation known for traditional fa'a Samoa culture, lush landscapes, pristine beaches, and warm hospitality.",
  quickFacts: [
    { label: 'Capital', value: 'Apia' },
    { label: 'Population', value: '200,000' },
    { label: 'Official Languages', value: 'Samoan, English' },
    { label: 'Currency', value: 'Samoan Tala (WST)' },
    { label: 'Area', value: '2,842 km²' },
  ],
  facts: [
    "Fa'a Samoa (the Samoan way) remains a strong part of everyday life",
    'Samoa is in Polynesia in the South Pacific and consists mainly of Upolu and Savai\'i',
    'Apia is the main hub for culture, markets, and waterfront life',
    'Rugby is hugely popular and Samoa is known for strong international players',
    'To Sua Ocean Trench is one of Samoa\'s most famous natural swimming spots',
    'Traditional cooking often uses an umu (earth oven)',
    'Coconut, taro, breadfruit, and fresh seafood are key staples',
    'Writer Robert Louis Stevenson lived in Samoa and is buried near Apia',
  ],
  foodCulture:
    'Samoan cuisine is built around taro, coconut cream, breadfruit, and seafood. Many meals are cooked in an umu (earth oven), and food is often shared family-style during gatherings and celebrations.',

  history: [
    {
      year: 'Ancient',
      title: 'Polynesian Settlement',
      description:
        'Samoa was settled by Polynesian voyagers, developing rich traditions in navigation, family structure, and oral history.',
    },
    {
      year: '1800s',
      title: 'European Contact',
      description:
        'Increased contact with Europeans brought major change through trade, religion, and shifting political influence.',
    },
    {
      year: '1899',
      title: 'Partition of the Islands',
      description:
        'The Samoan islands were divided into different colonial administrations, shaping modern borders in the region.',
    },
    {
      year: '1918',
      title: '1918 Influenza Pandemic',
      description:
        'Samoa suffered significant losses during the influenza pandemic, a major event in modern Samoan history.',
    },
    {
      year: '1962',
      title: 'Independence',
      description:
        'Samoa became the first Pacific island nation to regain independence in the 20th century (as Western Samoa).',
    },
    {
      year: '1997',
      title: 'Name Change to Samoa',
      description:
        'The country officially adopted the name "Samoa", reflecting national identity and continuity.',
    },
  ],

  innovations: [
    {
      name: 'Polynesian Wayfinding',
      year: 'Ancient',
      description:
        'Samoan seafaring traditions contributed to Polynesian navigation knowledge, including reading stars, swells, and winds for ocean voyages.',
    },
    {
      name: 'Umu Earth-Oven Cooking',
      year: 'Traditional',
      description:
        'Umu cooking techniques (heated stones and covered pits) remain a core culinary method, producing distinctive smoky flavors.',
    },
    {
      name: 'Siapo (Tapa Cloth) Craft',
      year: 'Traditional',
      description:
        'Siapo is a traditional barkcloth art form using natural dyes and patterns, representing cultural identity and storytelling.',
    },
  ],

  mustVisit: [
    {
      name: 'To Sua Ocean Trench',
      description:
        'Iconic natural swimming hole with a ladder down into clear turquoise water.',
    },
    {
      name: 'Lalomanu Beach',
      description:
        'Famous white-sand beach with calm lagoon waters and classic South Pacific scenery.',
    },
    {
      name: 'Papaseea Sliding Rocks',
      description:
        'Natural rock waterslides in a river setting, a fun freshwater stop near Apia.',
    },
    {
      name: 'O Le Pupu-Pue National Park',
      description:
        'Rainforest trails and coastal views showcasing Samoa\'s lush interior and biodiversity.',
    },
    {
      name: 'Vailima (Robert Louis Stevenson Museum)',
      description:
        'Stevenson\'s former home near Apia, now a museum offering insight into Samoa\'s colonial-era history.',
    },
  ],

  travelEssentials: [
    {
      item: 'Best time to visit',
      description:
        'May to October is typically drier and cooler; November to April is warmer and wetter.',
    },
    {
      item: 'Cash and payments',
      description:
        'Carry some cash (WST) for small shops and markets; cards are more common in larger hotels and businesses.',
    },
    {
      item: 'Respect local customs',
      description:
        "Dress modestly in villages and follow local guidance; fa'a Samoa emphasizes respect and community.",
    },
    {
      item: 'Sunday quiet hours',
      description:
        'Many areas observe a quieter Sunday; plan shopping and transport accordingly.',
    },
    {
      item: 'Reef-safe sun protection',
      description:
        'Use reef-safe sunscreen and consider rash guards for lagoon swimming.',
    },
  ],

  mainDish: {
    id: 'samoa-main',
    name: 'Palusami',
    description:
      'A beloved Samoan dish of taro leaves baked in rich coconut cream (often served as part of an umu feast).',
    cookingTime: 90,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Taro leaves (or spinach as substitute)', amount: 500, unit: 'g' },
      { name: 'Coconut cream', amount: 400, unit: 'ml' },
      { name: 'Onion, finely chopped', amount: 1, unit: 'whole' },
      { name: 'Salt', amount: 1, unit: 'tsp' },
      { name: 'Black pepper', amount: 0.5, unit: 'tsp' },
    ],
    steps: [
      'Preheat oven to 180C.',
      'If using taro leaves: wash thoroughly and remove any tough stems. (Taro leaves must be cooked fully.)',
      'Mix coconut cream with chopped onion, salt, and black pepper.',
      'Create small bundles of leaves and spoon coconut mixture into the center of each bundle.',
      'Wrap each bundle tightly in foil (or banana leaves if available).',
      'Place bundles in a baking dish and bake 75-90 minutes until very tender.',
      'Rest 5 minutes, then unwrap carefully.',
      'Serve warm as a side or main with taro, breadfruit, or rice.',
    ],
    imageUrl: 'https://source.unsplash.com/featured/?coconut,greens,leafy,food,polynesian&w=600',
  },

  dessert: {
    id: 'samoa-dessert',
    name: 'Fa\'ausi',
    description:
      'A traditional Samoan dessert of steamed dough pieces served with a rich coconut caramel sauce.',
    cookingTime: 60,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'All-purpose flour', amount: 300, unit: 'g' },
      { name: 'Baking powder', amount: 2, unit: 'tsp' },
      { name: 'Sugar', amount: 60, unit: 'g' },
      { name: 'Pinch of salt', amount: 1, unit: 'pinch' },
      { name: 'Water', amount: 220, unit: 'ml' },
      { name: 'Coconut cream', amount: 400, unit: 'ml' },
      { name: 'Brown sugar', amount: 120, unit: 'g' },
      { name: 'Vanilla extract (optional)', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Mix flour, baking powder, sugar, and salt.',
      'Add water and stir until a thick batter forms (like drop-dumplings).',
      'Bring a pot of water to a gentle boil and place a steamer basket on top.',
      'Drop spoonfuls of batter onto parchment or lightly oiled steamer tray.',
      'Steam 15-20 minutes until cooked through.',
      'For the sauce: heat coconut cream and brown sugar in a saucepan, stirring until thick and caramel-like.',
      'Stir in vanilla if using.',
      'Serve steamed pieces warm, spooning coconut caramel sauce over the top.',
    ],
    imageUrl: 'https://source.unsplash.com/featured/?coconut,dessert,pudding,caramel&w=600',
  },

  drinks: {
    alcoholic: 'Vailima beer, Kava (traditional ceremonial drink)',
    nonAlcoholic: 'Coconut water, Fresh tropical juices, Lemon leaf tea',
  },

  music: [
    'Traditional Samoan songs',
    'Siva dance music',
    'Choral church singing',
    'Contemporary Polynesian pop',
    'Drum-based performance music',
  ],

  decorationIdeas: [
    'Red, white, and blue flag colors',
    'Polynesian patterns and tapa-style motifs',
    'Tropical flowers (hibiscus, frangipani)',
    'Ocean and palm themes',
    'Woven mats and natural textures',
  ],

  conversationStarters: [
    'Have you experienced Polynesian culture before?',
    "What do you know about fa'a Samoa (the Samoan way)?",
    'Would you rather swim in a lagoon or explore rainforest trails?',
    'Have you tried kava or watched a traditional ceremony?',
    'What is your dream island adventure activity?',
  ],

  quiz: [
    {
      id: 'samoa-q1',
      question: 'What is the capital of Samoa?',
      options: ['Apia', 'Pago Pago', 'Suva', "Nuku'alofa"],
      correctAnswer: 0,
    },
    {
      id: 'samoa-q2',
      question: 'What are the official languages of Samoa?',
      options: ['English only', 'Samoan only', 'Samoan and English', 'French and English'],
      correctAnswer: 2,
    },
    {
      id: 'samoa-q3',
      question: "What is the traditional Samoan way of life called?",
      options: ['Aloha', "Fa'a Samoa", 'Mana', 'Tapu'],
      correctAnswer: 1,
    },
    {
      id: 'samoa-q4',
      question: 'In which year did Samoa gain independence?',
      options: ['1950', '1962', '1970', '1980'],
      correctAnswer: 1,
    },
    {
      id: 'samoa-q5',
      question: 'What is Samoa\'s currency?',
      options: ['Dollar', 'Tala', 'Peso', 'Rupee'],
      correctAnswer: 1,
    },
    {
      id: 'samoa-q6',
      question: 'What is an "umu" in Samoan culture?',
      options: ['A canoe', 'An earth oven', 'A drum', 'A reef lagoon'],
      correctAnswer: 1,
    },
    {
      id: 'samoa-q7',
      question: 'Which famous natural swimming spot is in Samoa?',
      options: ['Blue Hole', 'To Sua Ocean Trench', 'Sacred Pool', 'Crystal Cave'],
      correctAnswer: 1,
    },
    {
      id: 'samoa-q8',
      question: 'Which famous writer lived in Samoa?',
      options: ['Mark Twain', 'Ernest Hemingway', 'Robert Louis Stevenson', 'Jack London'],
      correctAnswer: 2,
    },
    {
      id: 'samoa-q9',
      question: 'Which sport is especially popular in Samoa?',
      options: ['Ice hockey', 'Rugby', 'Baseball', 'Skiing'],
      correctAnswer: 1,
    },
    {
      id: 'samoa-q10',
      question: 'Samoa is part of which broader cultural region?',
      options: ['Polynesia', 'Scandinavia', 'The Balkans', 'North Africa'],
      correctAnswer: 0,
    },
  ],

  coordinates: { x: 95, y: 14 },
};
