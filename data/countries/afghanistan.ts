import { Country } from '@/types';

export const afghanistan: Country = {
  id: 'afghanistan',
  name: 'Afghanistan',
  code: 'AF',
  continent: 'Asia',
  flag: '🇦🇫',
  landscapeImage: 'https://images.unsplash.com/photo-1586339277861-b0b8c885dd06?w=800&q=80',
  description: 'Afghanistan is a landlocked country in Central Asia, known for its mountainous terrain, rich history along the Silk Road, and resilient culture. It has a complex heritage influenced by various empires and civilizations.',
  quickFacts: [
    { label: 'Capital', value: 'Kabul' },
    { label: 'Population', value: '40.2 million' },
    { label: 'Official Languages', value: 'Pashto, Dari' },
    { label: 'Currency', value: 'Afghan Afghani (AFN)' },
    { label: 'Area', value: '652,230 km²' },
  ],
  facts: [
    'Afghanistan is home to the Hindu Kush mountain range',
    'The country was a major route on the ancient Silk Road',
    'Afghanistan has never been successfully occupied by a foreign power for long',
    'The national sport is buzkashi, played on horseback',
    'Afghanistan is one of the world\'s largest producers of pomegranates',
    'The country has significant copper and rare earth mineral deposits',
    'Poetry is highly valued in Afghan culture',
    'Afghanistan has more than 20 ethnic groups',
  ],
  foodCulture: 'Afghan cuisine reflects influences from Central Asia, the Middle East, and South Asia. Meals often feature rice, flatbreads, and grilled meats. Tea is the most popular beverage, and hospitality is a cornerstone of Afghan culture.',
  history: [
    {
      year: '500 BC',
      title: 'Achaemenid Empire',
      description: 'Afghanistan was part of the Persian Empire, serving as a crucial link on trade routes.'
    },
    {
      year: '330 BC',
      title: 'Alexander the Great',
      description: 'Alexander conquered the region, establishing cities and spreading Hellenistic culture.'
    },
    {
      year: '1747',
      title: 'Durrani Empire',
      description: 'Ahmad Shah Durrani founded the Durrani Empire, considered the beginning of modern Afghanistan.'
    },
    {
      year: '1979-Present',
      title: 'Modern Challenges',
      description: 'Decades of conflict have shaped contemporary Afghanistan, with ongoing efforts toward peace and development.'
    },
  ],
  innovations: [
    {
      name: 'Algebra Contributions',
      year: '9th Century',
      description: 'Scholars in the region made significant contributions to mathematics during the Islamic Golden Age.'
    },
    {
      name: 'Miniature Painting',
      year: '15th Century',
      description: 'The Herat school of miniature painting influenced Persian and Mughal art traditions.'
    },
    {
      name: 'Astronomical Observations',
      year: '10th Century',
      description: 'Afghan scholars made important contributions to astronomy and mathematics.'
    },
    {
      name: 'Poetry and Literature',
      year: '13th Century',
      description: 'Rumi, one of history\'s greatest poets, was born in present-day Afghanistan.'
    },
  ],
  mustVisit: [
    { name: 'Band-e Amir National Park', description: 'Afghanistan\'s first national park with stunning blue lakes in the Hindu Kush mountains.' },
    { name: 'Babur\'s Gardens', description: 'Historic gardens in Kabul, tomb of the founder of the Mughal Empire.' },
    { name: 'Minaret of Jam', description: 'UNESCO World Heritage Site, a 65-meter tall 12th-century minaret.' },
    { name: 'Balkh', description: 'Ancient city known as the "Mother of Cities," with archaeological sites dating back millennia.' },
    { name: 'Panjshir Valley', description: 'Scenic valley known for its natural beauty and historical significance.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'Spring (March-May) and autumn (September-November) offer the best weather.' },
    { item: 'Security awareness', description: 'Check current travel advisories and hire local guides.' },
    { item: 'Modest clothing', description: 'Dress conservatively, especially for women; long sleeves and head covering.' },
    { item: 'Cash', description: 'Carry Afghan Afghanis as card acceptance is limited.' },
    { item: 'Basic Dari/Pashto phrases', description: 'Learning greetings shows respect for local culture.' },
    { item: 'Respectful behavior', description: 'Understand and respect local customs and religious practices.' }
  ],
  mainDish: {
    id: 'afghanistan-main',
    name: 'Kabuli Pulao',
    description: 'Afghanistan\'s national dish: aromatic rice with tender lamb, carrots, and raisins',
    cookingTime: 120,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Lamb shoulder', amount: 800, unit: 'g' },
      { name: 'Basmati rice', amount: 600, unit: 'g' },
      { name: 'Carrots', amount: 400, unit: 'g' },
      { name: 'Raisins', amount: 100, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'large' },
      { name: 'Cumin', amount: 2, unit: 'tsp' },
      { name: 'Cardamom', amount: 6, unit: 'pods' },
      { name: 'Cinnamon', amount: 1, unit: 'stick' },
      { name: 'Slivered almonds', amount: 100, unit: 'g' },
      { name: 'Vegetable oil', amount: 100, unit: 'ml' },
    ],
    steps: [
      'Cut lamb into chunks, season with salt and pepper',
      'Brown lamb in oil with onions until golden',
      'Add spices and enough water to cover, simmer 1 hour until tender',
      'Cut carrots into matchsticks, fry until caramelized',
      'Fry raisins briefly until plump, remove',
      'Toast almonds until golden',
      'Parboil rice in salted water for 5 minutes, drain',
      'Layer rice over meat, drizzle with oil',
      'Cover tightly and steam on low heat for 30 minutes',
      'Serve rice mounded on platter, top with meat, carrots, raisins, and almonds',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1677599083247-9be34fdca346?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600',
  },
  dessert: {
    id: 'afghanistan-dessert',
    name: 'Firnee',
    description: 'Creamy milk pudding flavored with cardamom and rose water, topped with pistachios',
    cookingTime: 30,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Whole milk', amount: 1000, unit: 'ml' },
      { name: 'Cornstarch', amount: 60, unit: 'g' },
      { name: 'Sugar', amount: 100, unit: 'g' },
      { name: 'Cardamom powder', amount: 1, unit: 'tsp' },
      { name: 'Rose water', amount: 2, unit: 'tbsp' },
      { name: 'Pistachios, chopped', amount: 50, unit: 'g' },
      { name: 'Almonds, slivered', amount: 30, unit: 'g' },
    ],
    steps: [
      'Mix cornstarch with 200ml cold milk until smooth',
      'Heat remaining milk with sugar until warm',
      'Gradually add cornstarch mixture while stirring constantly',
      'Continue cooking and stirring until mixture thickens',
      'Add cardamom powder and rose water',
      'Cook for another 5 minutes, stirring constantly',
      'Pour into individual serving dishes',
      'Let cool to room temperature',
      'Refrigerate for at least 2 hours',
      'Before serving, garnish with chopped pistachios and almonds',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600',
  },
  drinks: {
    alcoholic: 'Alcohol is prohibited in Afghanistan',
    nonAlcoholic: 'Green tea (Kahwah), Black tea, Doogh (yogurt drink), Sharbat (fruit drinks)',
  },
  music: [
    'Traditional Afghan folk music',
    'Rubab (national instrument) melodies',
    'Ghazals (poetry recitation with music)',
    'Attan dance music',
    'Classical Afghan music',
  ],
  decorationIdeas: [
    'Afghan carpets and rugs',
    'Lapis lazuli blue accents',
    'Geometric patterns',
    'Low cushions and floor seating',
    'Copper and brass decorative items',
  ],
  conversationStarters: [
    'What do you know about Afghan culture and history?',
    'Have you tried authentic Afghan cuisine?',
    'What interests you about Central Asian cultures?',
    'Have you read poetry by Rumi?',
    'What do you think about traditional Afghan hospitality?',
  ],
quiz: [
  {
    id: 'afghanistan-q1',
    question: 'What is the capital of Afghanistan?',
    options: ['Kandahar', 'Herat', 'Kabul', 'Mazar-i-Sharif'],
    correctAnswer: 2,
  },
  {
    id: 'afghanistan-q2',
    question: "Afghanistan is best described as a…",
    options: ['Coastal country', 'Island nation', 'Landlocked country', 'Peninsula country'],
    correctAnswer: 2,
  },
  {
    id: 'afghanistan-q3',
    question: 'Which mountain range runs through Afghanistan?',
    options: ['Alps', 'Himalayas', 'Hindu Kush', 'Andes'],
    correctAnswer: 2,
  },
  {
    id: 'afghanistan-q4',
    question: 'Afghanistan was historically an important route on which trade network?',
    options: ['Spice Route', 'Silk Road', 'Amber Road', 'Trans-Saharan Route'],
    correctAnswer: 1,
  },
  {
    id: 'afghanistan-q5',
    question: 'What are the official languages of Afghanistan?',
    options: ['Arabic and Persian', 'Pashto and Dari', 'Urdu and Pashto', 'Persian and Urdu'],
    correctAnswer: 1,
  },
  {
    id: 'afghanistan-q6',
    question: "What is Afghanistan's currency?",
    options: ['Afghan Dinar (AFD)', 'Afghan Afghani (AFN)', 'Rial (IRR)', 'Rupee (AFR)'],
    correctAnswer: 1,
  },
  {
    id: 'afghanistan-q7',
    question: "What is Afghanistan's national dish?",
    options: ['Biryani', 'Kabuli Pulao', 'Pilaf', 'Kebab'],
    correctAnswer: 1,
  },
  {
    id: 'afghanistan-q8',
    question: 'What is the national sport of Afghanistan?',
    options: ['Cricket', 'Football', 'Buzkashi', 'Wrestling'],
    correctAnswer: 2,
  },
  {
    id: 'afghanistan-q9',
    question: 'Which famous poet was born in present-day Afghanistan?',
    options: ['Omar Khayyam', 'Hafez', 'Rumi', 'Saadi'],
    correctAnswer: 2,
  },
  {
    id: 'afghanistan-q10',
    question: "Which place is known as Afghanistan's first national park with striking blue lakes?",
    options: ['Band-e Amir National Park', "Babur's Gardens", 'Minaret of Jam', 'Panjshir Valley'],
    correctAnswer: 0,
  },
],
  coordinates: { x: 65, y: 37 },
};
