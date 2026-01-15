import { Country } from '@/types';

export const slovenia: Country = {
  id: 'slovenia',
  name: 'Slovenia',
  code: 'SI',
  continent: 'Europe',
  flag: '🇸🇮',
  landscapeImage: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800',
  description: 'Slovenia is a small but stunning country in Central Europe, known for its mountains, ski resorts, and lakes. Despite its small size, it offers incredible natural diversity from the Alps to the Mediterranean coast.',
  quickFacts: [
    { label: 'Capital', value: 'Ljubljana' },
    { label: 'Population', value: '2.1 million' },
    { label: 'Official Language', value: 'Slovene' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '20,273 km²' },
  ],
  facts: [
    'Slovenia is one of the most forested countries in Europe with 60% forest coverage',
    'Lake Bled with its island church is one of Europe\'s most photographed locations',
    'Slovenia has over 10,000 caves, including the famous Postojna Cave',
    'The country is home to the oldest vine in the world - over 400 years old',
    'Slovenia is the only European country that combines the Alps, Mediterranean, and Pannonian Plain',
    'Ljubljana was named European Green Capital in 2016',
    'Beekeeping is a significant part of Slovenian tradition and culture',
    'Slovenia produces excellent wines, with three distinct wine regions',
  ],
  foodCulture: 'Slovenian cuisine is a delicious blend of Alpine, Mediterranean, and Pannonian influences. Hearty dishes feature prominently, with emphasis on locally sourced ingredients. Potica (rolled pastry) is a national treasure, and every family has their own recipe.',
  history: [
    {
      year: '7th century',
      title: 'Slavic Settlement',
      description: 'Slavic tribes settled in the area, establishing the first Slovene principality known as Carantania.'
    },
    {
      year: '14th century',
      title: 'Habsburg Rule',
      description: 'Most Slovenian lands came under Habsburg rule, which would last for centuries.'
    },
    {
      year: '1918',
      title: 'Kingdom of Yugoslavia',
      description: 'After World War I, Slovenia became part of the Kingdom of Serbs, Croats and Slovenes, later Yugoslavia.'
    },
    {
      year: '1991',
      title: 'Independence',
      description: 'Slovenia declared independence from Yugoslavia after a brief 10-day war, becoming a sovereign nation.'
    },
    {
      year: '2004',
      title: 'EU and NATO',
      description: 'Slovenia joined both the European Union and NATO, integrating fully with Western institutions.'
    },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Schengen visa rules apply. EU citizens and many others can visit visa-free.' },
    { item: 'Best time to visit', description: 'May to September for hiking; December to March for skiing' },
    { item: 'Transportation', description: 'Well-connected by trains and buses. Car rental recommended for countryside.' },
    { item: 'Language', description: 'Slovene official. English widely spoken, German and Italian understood.' },
    { item: 'Safety', description: 'Very safe country with low crime rates. Friendly and welcoming people.' },
  ],
  mainDish: {
    id: 'slovenia-kranjska-klobasa',
    name: 'Kranjska Klobasa',
    description: 'Traditional Slovenian sausage from the Carniola region, made with pork and protected by EU geographical indication. Served with mustard, horseradish, and dark bread.',
    cookingTime: 20,
    servings: 4,
    dietType: 'meat',
    ingredients: [
      { name: 'Kranjska sausages', amount: 4, unit: 'pieces' },
      { name: 'Sauerkraut', amount: 400, unit: 'g' },
      { name: 'Potatoes', amount: 6, unit: 'pieces' },
      { name: 'Mustard', amount: 2, unit: 'tbsp' },
      { name: 'Horseradish', amount: 2, unit: 'tbsp' },
      { name: 'Caraway seeds', amount: 1, unit: 'tsp' },
      { name: 'Dark bread', amount: 4, unit: 'slices' },
    ],
    steps: [
      'Boil potatoes in salted water until tender',
      'Warm sauerkraut with caraway seeds',
      'Prick sausages with a fork to prevent bursting',
      'Place sausages in boiling water, reduce heat',
      'Simmer sausages for 15 minutes (do not boil)',
      'Drain and serve hot with sauerkraut and potatoes',
      'Accompany with mustard and horseradish',
      'Serve with dark bread on the side',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600',
  },
  drinks: {
    alcoholic: 'Slovenian wine (Rebula, Teran), Schnapps (sadjevec), Beer',
    nonAlcoholic: 'Cockta (Slovenian cola), Elderflower juice, Mountain spring water',
  },
  music: ['Slovenian folk music', 'Accordion polkas', 'Alpine songs', 'Contemporary Slovenian pop'],
  decorationIdeas: [
    'Blue, white, and red (Slovenian flag colors)',
    'Lake Bled themed decorations',
    'Alpine flowers - especially edelweiss',
    'Traditional lace from Idrija',
    'Wooden carved items',
    'Beehive panel paintings',
  ],
  conversationStarters: [
    'Have you seen pictures of Lake Bled? Would you visit the island church?',
    'Slovenia combines mountains and sea - which would you explore first?',
    'Would you try exploring the underground world of Slovenian caves?',
    'Have you tasted Slovenian wine? The country has excellent vineyards!',
  ],
  quiz: [
    {
      id: 'slovenia-q1',
      question: 'What is Slovenia\'s capital city?',
      options: ['Zagreb', 'Ljubljana', 'Bratislava', 'Belgrade'],
      correctAnswer: 1,
    },
    {
      id: 'slovenia-q2',
      question: 'Which famous lake with an island church is in Slovenia?',
      options: ['Lake Como', 'Lake Bled', 'Lake Geneva', 'Lake Balaton'],
      correctAnswer: 1,
    },
    {
      id: 'slovenia-q3',
      question: 'What percentage of Slovenia is covered by forests?',
      options: ['30%', '45%', '60%', '75%'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 50, y: 46 },
};
