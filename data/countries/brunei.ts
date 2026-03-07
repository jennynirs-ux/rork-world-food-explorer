import { Country } from '@/types';

export const brunei: Country = {
  id: 'brunei',
  name: 'Brunei',
  code: 'BN',
  continent: 'Asia',
  flag: '🇧🇳',
  landscapeImage: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80',
  description: 'Brunei is a small, wealthy Islamic sultanate on Borneo with magnificent mosques and pristine rainforests. Known for its oil wealth and peaceful, traditional culture.',
  quickFacts: [
    { label: 'Capital', value: 'Bandar Seri Begawan' },
    { label: 'Population', value: '450,000' },
    { label: 'Official Language', value: 'Malay' },
    { label: 'Currency', value: 'Brunei Dollar' },
    { label: 'Area', value: '5,765 km²' },
  ],
  facts: [
    'Brunei is one of the world\'s richest countries per capita',
    'The Sultan\'s palace has 1,788 rooms',
    'There are no personal income taxes',
    'The country is heavily forested with diverse wildlife',
    'Omar Ali Saifuddien Mosque is one of Asia\'s most beautiful',
    'Brunei has free education and healthcare for citizens',
    'The country\'s wealth comes primarily from oil and natural gas',
    'Brunei has one of the world\'s lowest crime rates',
  ],
  foodCulture: 'Bruneian cuisine is similar to Malay food with influences from neighboring countries. Rice, noodles, and seafood are staples. The food is generally mild and not too spicy. Halal food is the standard. Night markets offer diverse local dishes.',
  history: [
    {
      year: '14th-15th Century',
      title: 'Brunei Empire Peak',
      description: 'Brunei was a powerful empire controlling most of Borneo and parts of the Philippines, thriving on trade.'
    },
    {
      year: '1888',
      title: 'British Protectorate',
      description: 'Brunei became a British protectorate, which helped preserve its sultanate system during colonial times.'
    },
    {
      year: '1929',
      title: 'Oil Discovery',
      description: 'Oil was discovered in Seria, transforming Brunei\'s economy and making it extremely wealthy.'
    },
    {
      year: '1984',
      title: 'Independence',
      description: 'Brunei gained full independence from Britain, with the Sultan as both head of state and government.'
    },
  ],
  innovations: [
    {
      name: 'Kampong Ayer Water Village',
      year: 'Traditional',
      description: 'One of the world\'s largest water villages, with houses on stilts over water, preserving ancient way of life with modern amenities.'
    },
    {
      name: 'Welfare State Model',
      year: '1960s',
      description: 'Brunei developed a comprehensive welfare system providing free education, healthcare, and subsidized housing using oil revenues.'
    },
    {
      name: 'Islamic Banking',
      year: '1990s',
      description: 'Brunei pioneered Sharia-compliant banking systems in Southeast Asia.'
    },
    {
      name: 'Rainforest Conservation',
      year: '1990s',
      description: 'Despite oil wealth, Brunei maintained 70% forest cover, balancing development with environmental protection.'
    },
  ],
  mustVisit: [
    { name: 'Sultan Omar Ali Saifuddien Mosque', description: 'Stunning gold-domed mosque with Italian marble and crystal chandeliers, surrounded by an artificial lagoon.' },
    { name: 'Kampong Ayer', description: 'Historic water village on stilts with 30,000+ residents, called the "Venice of the East."' },
    { name: 'Ulu Temburong National Park', description: 'Pristine rainforest with canopy walkways offering incredible biodiversity and adventure activities.' },
    { name: 'Istana Nurul Iman', description: 'The Sultan\'s palace, world\'s largest residential palace with 1,788 rooms, open during Hari Raya celebrations.' },
    { name: 'Jerudong Park', description: 'Large amusement park with rides and attractions, once one of the most expensive parks ever built.' }
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Many nationalities can enter visa-free for 14-90 days depending on citizenship.' },
    { item: 'Best time to visit', description: 'February-April for drier weather; avoid November-January (wettest months).' },
    { item: 'Modest dress', description: 'Cover shoulders and knees. Women should dress conservatively, especially in mosques.' },
    { item: 'No alcohol', description: 'Alcohol is prohibited for Muslims and not sold publicly. Non-Muslims can bring limited amounts.' },
    { item: 'Currency', description: 'Brunei Dollar interchangeable with Singapore Dollar at 1:1.' },
    { item: 'Language', description: 'Malay is official, but English widely spoken in business and tourism.' }
  ],
  mainDish: {
    id: 'brunei-main',
    name: 'Ambuyat',
    description: 'National dish made from sago starch, eaten with various sauces',
    cookingTime: 30,
    servings: 4,
    dietType: 'vegan',
    ingredients: [
      { name: 'Sago starch', amount: 200, unit: 'g' },
      { name: 'Shrimp paste', amount: 2, unit: 'tbsp' },
      { name: 'Tamarind', amount: 50, unit: 'g' },
      { name: 'Chili peppers', amount: 3, unit: 'whole' },
      { name: 'Shallots', amount: 4, unit: 'whole' },
      { name: 'Palm sugar', amount: 2, unit: 'tbsp' },
      { name: 'Vegetables for sides', amount: 300, unit: 'g' },
    ],
    steps: [
      'Mix sago starch with boiling water',
      'Stir constantly until it becomes gluey',
      'Continue stirring until translucent',
      'Make cacah sauce: blend chilies, shallots, shrimp paste',
      'Make tempoyak: fermented durian sauce',
      'Prepare various side vegetables',
      'Use chandas (special fork) to twirl ambuyat',
      'Dip in sauces and eat with sides',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&q=80',
  },
  dessert: {
    id: 'brunei-dessert',
    name: 'Kuih Mor',
    description: 'Traditional pineapple tart cookies, sweet and crumbly',
    cookingTime: 50,
    servings: 24,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'All-purpose flour', amount: 400, unit: 'g' },
      { name: 'Butter, softened', amount: 250, unit: 'g' },
      { name: 'Powdered sugar', amount: 100, unit: 'g' },
      { name: 'Egg yolks', amount: 3, unit: 'large' },
      { name: 'Pineapple jam', amount: 300, unit: 'g' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Cream butter with powdered sugar until fluffy.',
      'Add egg yolks one at a time, mixing well.',
      'Add vanilla extract.',
      'Gradually mix in flour to form soft dough.',
      'Roll dough into small balls.',
      'Make indentation in center of each ball.',
      'Fill with pineapple jam.',
      'Place on baking sheet.',
      'Bake at 170°C for 20-25 minutes until lightly golden.',
      'Cool completely before serving.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Not consumed (Islamic country)',
    nonAlcoholic: 'Teh tarik (pulled tea), Coconut water, Fresh fruit juices',
  },
  music: [
    'Traditional Bruneian gamelan',
    'Islamic nasheeds',
    'Malay folk music',
    'Contemporary Bruneian pop',
  ],
  decorationIdeas: [
    'Yellow and black flag colors',
    'Islamic calligraphy',
    'Mosque imagery',
    'Royal crest',
    'Tropical rainforest themes',
  ],
  conversationStarters: [
    'Have you heard of Brunei before?',
    'What do you know about Islamic architecture?',
    'Have you tried sago-based foods?',
    'What small countries interest you?',
  ],
  quiz: [
    {
      id: 'brunei-q1',
      question: 'What is Brunei\'s main source of wealth?',
      options: ['Tourism', 'Oil and gas', 'Technology', 'Agriculture'],
      correctAnswer: 1,
    },
    {
      id: 'brunei-q2',
      question: 'What is Brunei\'s national dish?',
      options: ['Nasi lemak', 'Ambuyat', 'Rendang', 'Satay'],
      correctAnswer: 1,
    },
    {
      id: 'brunei-q3',
      question: 'What island is Brunei located on?',
      options: ['Sumatra', 'Java', 'Borneo', 'Sulawesi'],
      correctAnswer: 2,
    },
    {
      id: 'brunei-q4',
      question: 'What is the capital of Brunei?',
      options: ['Seria', 'Kuala Belait', 'Bandar Seri Begawan', 'Tutong'],
      correctAnswer: 2,
    },
    {
      id: 'brunei-q5',
      question: 'When did Brunei gain independence?',
      options: ['1974', '1979', '1984', '1989'],
      correctAnswer: 2,
    },
    {
      id: 'brunei-q6',
      question: 'What is Kampong Ayer?',
      options: ['A mountain', 'A water village on stilts', 'A palace', 'A market'],
      correctAnswer: 1,
    },
    {
      id: 'brunei-q7',
      question: 'How many rooms does the Sultan\'s palace have?',
      options: ['788', '1,088', '1,788', '2,788'],
      correctAnswer: 2,
    },
    {
      id: 'brunei-q8',
      question: 'What is prohibited in Brunei?',
      options: ['Tourism', 'Photography', 'Alcohol for Muslims', 'Music'],
      correctAnswer: 2,
    },
    {
      id: 'brunei-q9',
      question: 'When was oil discovered in Brunei?',
      options: ['1909', '1929', '1949', '1969'],
      correctAnswer: 1,
    },
    {
      id: 'brunei-q10',
      question: 'What percentage of Brunei is covered by forest?',
      options: ['40%', '55%', '70%', '85%'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 79, y: 19 },
};
