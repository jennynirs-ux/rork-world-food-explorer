import { Country } from '@/types';

export const serbia: Country = {
  id: 'serbia',
  name: 'Serbia',
  code: 'RS',
  continent: 'Europe',
  flag: '🇷🇸',
  landscapeImage: 'https://images.unsplash.com/photo-1590935216559-1e4c8c7b8c4f?w=800',
  description: 'Serbia is a landlocked country in Southeast Europe, situated at the crossroads of Central and Southeast Europe. Known for its vibrant nightlife, rich history, and warm hospitality, Belgrade is one of Europe\'s oldest cities.',
  quickFacts: [
    { label: 'Capital', value: 'Belgrade' },
    { label: 'Population', value: '6.9 million' },
    { label: 'Official Language', value: 'Serbian' },
    { label: 'Currency', value: 'Serbian Dinar (RSD)' },
    { label: 'Area', value: '88,361 km²' },
  ],
  facts: [
    'Belgrade is one of the oldest continuously inhabited cities in Europe',
    'Serbia is one of the largest raspberry exporters in the world',
    'The country has 5 UNESCO World Heritage Sites',
    'Nikola Tesla, the famous inventor, was born in Serbia',
    'Serbian hospitality is legendary - guests are treated with great warmth',
    'The Serbian language uses both Cyrillic and Latin scripts',
    'Serbia has numerous natural spa resorts with mineral springs',
    'Exit Festival in Novi Sad is one of Europe\'s biggest music festivals',
  ],
  foodCulture: 'Serbian cuisine is hearty and flavorful, influenced by Mediterranean, Turkish, and Hungarian traditions. Grilled meats are central to Serbian dining, with ćevapi and pljeskavica being national favorites. Meals are social affairs, often accompanied by rakija (fruit brandy) and Serbian hospitality.',
  history: [
    {
      year: '9th century',
      title: 'Serbian State Formation',
      description: 'The first Serbian state was formed during the early Middle Ages under the Vlastimirović dynasty.'
    },
    {
      year: '1217',
      title: 'Kingdom of Serbia',
      description: 'Stefan Nemanjić was crowned the first King of Serbia, beginning the era of the Serbian Kingdom.'
    },
    {
      year: '1346',
      title: 'Serbian Empire',
      description: 'Under Emperor Dušan, Serbia reached its greatest territorial extent and cultural flowering.'
    },
    {
      year: '1389',
      title: 'Battle of Kosovo',
      description: 'A pivotal battle against the Ottoman Empire that has deep significance in Serbian history and identity.'
    },
    {
      year: '1918',
      title: 'Kingdom of Serbs, Croats and Slovenes',
      description: 'After World War I, Serbia became part of a new South Slavic state that would later become Yugoslavia.'
    },
    {
      year: '2006',
      title: 'Modern Serbia',
      description: 'Serbia became an independent state following Montenegro\'s independence referendum.'
    },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Many nationalities can visit visa-free for up to 90 days. Check requirements.' },
    { item: 'Best time to visit', description: 'May to September for warm weather; July for Exit Festival' },
    { item: 'Transportation', description: 'Buses connect cities, Belgrade has trams and buses, taxis affordable' },
    { item: 'Language', description: 'Serbian (both Cyrillic and Latin). English spoken in Belgrade and tourist areas.' },
    { item: 'Safety', description: 'Generally safe and welcoming. Serbians are very hospitable.' },
  ],
  mainDish: {
    id: 'serbia-cevapi',
    name: 'Ćevapi',
    description: 'Traditional Serbian grilled minced meat sausages, typically made from a mixture of beef and pork. Served with flatbread (lepinja), onions, and kajmak (dairy spread).',
    cookingTime: 45,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Ground beef', amount: 400, unit: 'g' },
      { name: 'Ground pork', amount: 200, unit: 'g' },
      { name: 'Garlic', amount: 4, unit: 'cloves' },
      { name: 'Onion', amount: 1, unit: 'piece' },
      { name: 'Paprika', amount: 2, unit: 'tsp' },
      { name: 'Baking soda', amount: 0.5, unit: 'tsp' },
      { name: 'Salt', amount: 2, unit: 'tsp' },
      { name: 'Black pepper', amount: 1, unit: 'tsp' },
      { name: 'Flatbread (lepinja)', amount: 4, unit: 'pieces' },
      { name: 'Onions for serving', amount: 2, unit: 'pieces' },
    ],
    steps: [
      'Finely mince or grate garlic and onion',
      'Mix ground beef and pork in a large bowl',
      'Add garlic, onion, paprika, baking soda, salt, and pepper',
      'Mix thoroughly and let rest in refrigerator for 2 hours or overnight',
      'Form mixture into small finger-sized sausages (about 10cm long)',
      'Preheat grill or grill pan to high heat',
      'Grill ćevapi for 3-4 minutes per side until well browned',
      'Warm flatbread on the grill',
      'Serve ćevapi in flatbread with chopped onions and ajvar (red pepper spread)',
      'Traditionally accompanied by kajmak (creamy dairy spread)',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600',
  },
  drinks: {
    alcoholic: 'Rakija (fruit brandy), Serbian wine, Beer',
    nonAlcoholic: 'Turkish coffee, Boza (sweet fermented drink), Fruit juices',
  },
  music: ['Gusle (traditional instrument)', 'Turbo-folk', 'Serbian folk music', 'Brass band music'],
  decorationIdeas: [
    'Red, blue, and white (Serbian flag colors)',
    'Traditional Serbian embroidery',
    'Šajkača (traditional Serbian cap)',
    'Orthodox crosses',
    'Copper cookware',
    'Folk art patterns',
  ],
  conversationStarters: [
    'Have you heard of Nikola Tesla? He was born in Serbia!',
    'Would you try ćevapi with kajmak? It\'s a must in Serbia!',
    'Belgrade\'s nightlife is legendary - would you party on a river boat?',
    'What do you know about Serbian history and culture?',
  ],
  quiz: [
    {
      id: 'serbia-q1',
      question: 'What is Serbia\'s capital city?',
      options: ['Zagreb', 'Belgrade', 'Sarajevo', 'Skopje'],
      correctAnswer: 1,
    },
    {
      id: 'serbia-q2',
      question: 'Which famous inventor was born in Serbia?',
      options: ['Thomas Edison', 'Nikola Tesla', 'Albert Einstein', 'Alexander Bell'],
      correctAnswer: 1,
    },
    {
      id: 'serbia-q3',
      question: 'What are traditional Serbian grilled meat sausages called?',
      options: ['Ćevapi', 'Burek', 'Sarma', 'Ajvar'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 52, y: 44 },
};
