import { Country } from '@/types';

export const estonia: Country = {
  id: 'estonia',
  name: 'Estonia',
  code: 'EE',
  continent: 'Europe',
  flag: '🇪🇪',
  landscapeImage: 'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=800',
  description: 'Estonia is a digital pioneer and the most northerly Baltic state, known for its medieval old towns, pristine nature, innovative tech scene, and unique position bridging Eastern and Northern Europe.',
  quickFacts: [
    { label: 'Capital', value: 'Tallinn' },
    { label: 'Population', value: '1.3 million' },
    { label: 'Official Language', value: 'Estonian' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '45,227 km²' },
  ],
  facts: [
    'Estonia is the birthplace of Skype',
    'Over 50% of Estonia is covered in forest',
    'Estonia has over 2,000 islands',
    'Estonia was the first country to offer e-Residency',
    'WiFi access is a legal right in Estonia',
    'Tallinn\'s Old Town is a UNESCO World Heritage Site',
    'Estonia has one of the highest literacy rates in the world (99.8%)',
    'Wife-carrying is a serious sport with world championships',
  ],
  foodCulture: 'Estonian cuisine blends Nordic, German, and Russian influences, featuring rye bread, fish, pork, potatoes, and dairy. Foraging for mushrooms and berries is a beloved tradition, and seasonal, local ingredients are highly valued.',
  history: [
    {
      year: '1219',
      title: 'Danish Conquest',
      description: 'Denmark conquered northern Estonia. The Danish flag allegedly fell from the sky during the battle.'
    },
    {
      year: '1561-1721',
      title: 'Swedish Period',
      description: 'Estonia came under Swedish rule, considered a golden age with education reforms.'
    },
    {
      year: '1918',
      title: 'First Independence',
      description: 'Estonia declared independence and successfully defended it in the War of Independence.'
    },
    {
      year: '1940-1991',
      title: 'Soviet Occupation',
      description: 'Estonia was occupied by the Soviet Union, enduring deportations and Russification.'
    },
    {
      year: '1991',
      title: 'Independence Restored',
      description: 'Estonia regained independence through the Singing Revolution, a peaceful movement.'
    },
    {
      year: '2011',
      title: 'Euro Adoption',
      description: 'Estonia adopted the Euro, becoming the first ex-Soviet state to do so.'
    },
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'May-September for warm weather and white nights' },
    { item: 'Visa', description: 'EU member. Schengen visa rules apply.' },
    { item: 'Transportation', description: 'Excellent public transport. Tallinn has free public transport for residents.' },
    { item: 'Language', description: 'Estonian. English widely spoken, especially by younger generation.' },
    { item: 'Safety', description: 'Very safe. One of the safest countries in Europe.' },
  ],
  mainDish: {
    id: 'estonia-verivorst',
    name: 'Verivorst with Mulgipuder',
    description: 'Traditional Estonian blood sausage served with mashed potatoes and barley, a Christmas favorite',
    cookingTime: 60,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Blood sausage (verivorst)', amount: 800, unit: 'g' },
      { name: 'Potatoes', amount: 800, unit: 'g' },
      { name: 'Barley groats', amount: 200, unit: 'g' },
      { name: 'Butter', amount: 100, unit: 'g' },
      { name: 'Sour cream', amount: 200, unit: 'ml' },
      { name: 'Lingonberry jam', amount: 150, unit: 'g' },
      { name: 'Salt', amount: 1, unit: 'to taste' },
    ],
    steps: [
      'Cook barley groats in salted water until tender (about 40 minutes)',
      'Boil potatoes until soft, then drain',
      'Mash potatoes and mix with cooked barley',
      'Add butter and sour cream to the potato-barley mixture',
      'Season with salt and mix until creamy',
      'Fry blood sausage in a pan until heated through and crispy',
      'Serve sausage on top of mulgipuder (potato-barley mash)',
      'Accompany with lingonberry jam on the side',
      'Traditionally served with sauerkraut',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1606850780554-b55ef9eb42b3?w=600',
  },
  drinks: {
    alcoholic: 'Vana Tallinn (liqueur), Estonian craft beer, Kali (fermented rye drink)',
    nonAlcoholic: 'Berry juices, Herbal teas, Kefir',
  },
  music: ['Estonian folk songs (regilaulud)', 'Arvo Pärt compositions', 'Choral music', 'Trad folk'],
  decorationIdeas: [
    'Blue, black, and white (Estonian flag colors)',
    'Cornflower decorations',
    'Traditional knitted patterns',
    'Wooden handicrafts',
    'Nordic minimalist design',
    'Pine and juniper branches',
  ],
  conversationStarters: [
    'Did you know Estonia is super digital? They even vote online!',
    'Have you been to Tallinn\'s medieval Old Town?',
    'Would you try black bread with herring? It\'s a classic combo!',
    'The Singing Revolution is such an inspiring story of peaceful resistance.',
  ],
  quiz: [
    {
      id: 'estonia-q1',
      question: 'What is Estonia\'s capital city?',
      options: ['Riga', 'Tallinn', 'Vilnius', 'Helsinki'],
      correctAnswer: 1,
    },
    {
      id: 'estonia-q2',
      question: 'Which tech company was founded in Estonia?',
      options: ['Spotify', 'Skype', 'WhatsApp', 'Telegram'],
      correctAnswer: 1,
    },
    {
      id: 'estonia-q3',
      question: 'What is the Singing Revolution?',
      options: ['A music festival', 'A peaceful independence movement', 'A TV show', 'A type of folk song'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 53, y: 59 },
};