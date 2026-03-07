import { Country } from '@/types';

export const cambodia: Country = {
  id: 'cambodia',
  name: 'Cambodia',
  code: 'KH',
  continent: 'Asia',
  flag: '🇰🇭',
  landscapeImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
  description: 'Cambodia is home to the magnificent Angkor Wat temple complex and rich Khmer culture. A resilient nation with ancient heritage and warm, welcoming people.',
  quickFacts: [
    { label: 'Capital', value: 'Phnom Penh' },
    { label: 'Population', value: '17 million' },
    { label: 'Official Language', value: 'Khmer' },
    { label: 'Currency', value: 'Riel' },
    { label: 'Area', value: '181,035 km²' },
  ],
  facts: [
    'Angkor Wat is the largest religious monument in the world',
    'The Khmer Empire was one of the most powerful in Southeast Asia',
    'Tonle Sap is Southeast Asia\'s largest freshwater lake',
    'Cambodia has a very young population - median age is 25',
    'The country is rebuilding after decades of conflict',
    'Khmer is one of the world\'s oldest languages',
    'Cambodia has over 4,000 Buddhist temples',
    'The national flower is the rumduol',
  ],
  foodCulture: 'Cambodian cuisine balances sweet, sour, salty, and bitter flavors. Rice, freshwater fish, and aromatic herbs are central. French influence is seen in baguettes. Prahok (fermented fish paste) adds distinctive flavor.',
  history: [
    {
      year: '802-1431',
      title: 'Angkor Empire',
      description: 'The Khmer Empire built Angkor Wat and ruled much of Southeast Asia, creating one of history\'s great civilizations.'
    },
    {
      year: '1863',
      title: 'French Protectorate',
      description: 'Cambodia became a French protectorate, introducing lasting cultural and architectural influences.'
    },
    {
      year: '1953',
      title: 'Independence',
      description: 'King Norodom Sihanouk negotiated Cambodia\'s independence from France.'
    },
    {
      year: '1975-1979',
      title: 'Khmer Rouge Regime',
      description: 'Pol Pot\'s brutal regime caused genocide, killing an estimated 1.7-2 million Cambodians.'
    },
    {
      year: '1993',
      title: 'Democratic Elections',
      description: 'UN-supervised elections restored constitutional monarchy and began national reconciliation.'
    },
  ],
  innovations: [
    {
      name: 'Angkor Wat Construction',
      year: '1113-1150',
      description: 'Khmer engineers built the world\'s largest religious complex with advanced hydraulic systems and precise astronomical alignments.'
    },
    {
      name: 'Baray Water Management',
      year: 'Angkor Period',
      description: 'Developed massive reservoir systems (barays) for irrigation and flood control that supported a million people.'
    },
    {
      name: 'Apsara Dance Preservation',
      year: 'Ancient-Present',
      description: 'Classical Khmer dance survived centuries and genocide, recognized by UNESCO as intangible cultural heritage.'
    },
    {
      name: 'Traditional Medicine System',
      year: 'Traditional',
      description: 'Developed Khmer traditional medicine using local herbs and healing practices that complement modern healthcare.'
    },
  ],
  mustVisit: [
    { name: 'Angkor Wat', description: 'Magnificent 12th-century temple complex, largest religious monument in the world, stunning at sunrise.' },
    { name: 'Bayon Temple', description: 'Iconic temple with 216 giant smiling stone faces, centerpiece of Angkor Thom city.' },
    { name: 'Tonle Sap Lake', description: 'Southeast Asia\'s largest freshwater lake with floating villages and incredible biodiversity.' },
    { name: 'Phnom Penh Royal Palace', description: 'Ornate palace complex with Silver Pagoda containing 5,000 silver floor tiles.' },
    { name: 'Koh Rong Islands', description: 'Pristine beaches with bioluminescent plankton, perfect for relaxation and water sports.' }
  ],
  travelEssentials: [
    { item: 'Visa', description: 'E-visa or visa on arrival available for most nationalities.' },
    { item: 'Best time to visit', description: 'November-February for cool, dry weather. Avoid April-May (hottest period).' },
    { item: 'Currency', description: 'Riel and US dollars both widely accepted. Bring small bills.' },
    { item: 'Dress code', description: 'Cover shoulders and knees when visiting temples. Remove shoes at entrances.' },
    { item: 'Health', description: 'Malaria prophylaxis for rural areas. Drink only bottled water.' },
    { item: 'Transportation', description: 'Tuk-tuks for cities, buses for long distances. Bike tours popular in Angkor.' }
  ],
  mainDish: {
    id: 'cambodia-main',
    name: 'Amok Trey',
    description: 'Fish steamed in coconut curry custard with lemongrass',
    cookingTime: 45,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'White fish fillets', amount: 500, unit: 'g' },
      { name: 'Coconut cream', amount: 400, unit: 'ml' },
      { name: 'Kroeung paste', amount: 3, unit: 'tbsp' },
      { name: 'Fish sauce', amount: 2, unit: 'tbsp' },
      { name: 'Palm sugar', amount: 1, unit: 'tbsp' },
      { name: 'Eggs', amount: 2, unit: 'whole' },
      { name: 'Kaffir lime leaves', amount: 4, unit: 'whole' },
      { name: 'Banana leaves', amount: 4, unit: 'squares' },
    ],
    steps: [
      'Blend kroeung paste (lemongrass, galangal, turmeric)',
      'Mix paste with coconut cream, fish sauce, sugar',
      'Beat eggs and fold into mixture',
      'Cut fish into cubes',
      'Line bowls with banana leaves',
      'Place fish in bowls and pour curry mixture over',
      'Steam for 30 minutes until set',
      'Garnish with lime leaves and serve with rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=800&q=80',
  },
  dessert: {
    id: 'cambodia-dessert',
    name: 'Num Plae Ai',
    description: 'Grilled banana sticky rice cakes wrapped in banana leaves',
    cookingTime: 60,
    servings: 8,
    dietType: 'vegan',
    ingredients: [
      { name: 'Sticky rice', amount: 300, unit: 'g' },
      { name: 'Ripe bananas', amount: 4, unit: 'whole' },
      { name: 'Coconut milk', amount: 200, unit: 'ml' },
      { name: 'Sugar', amount: 100, unit: 'g' },
      { name: 'Salt', amount: 0.5, unit: 'tsp' },
      { name: 'Banana leaves', amount: 8, unit: 'pieces' },
    ],
    steps: [
      'Soak sticky rice overnight, then steam for 20 minutes.',
      'Mix warm rice with coconut milk, sugar, and salt.',
      'Let mixture cool slightly.',
      'Slice bananas lengthwise.',
      'Soften banana leaves over flame.',
      'Place rice mixture on banana leaf.',
      'Add banana slice on top.',
      'Wrap tightly and secure with string.',
      'Grill over charcoal for 15-20 minutes, turning occasionally.',
      'Serve warm in the banana leaf wrapping.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Angkor beer, Palm wine, Rice wine',
    nonAlcoholic: 'Iced coffee with condensed milk, Sugar palm juice, Fresh coconut',
  },
  music: [
    'Traditional Pinpeat ensemble',
    'Apsara dance music',
    'Contemporary Khmer pop',
    'Buddhist chanting',
  ],
  decorationIdeas: [
    'Red and blue flag colors with Angkor Wat',
    'Temple silhouettes',
    'Lotus flowers',
    'Traditional silk patterns',
    'Apsara dancer imagery',
  ],
  conversationStarters: [
    'Have you seen photos of Angkor Wat?',
    'What ancient civilizations fascinate you?',
    'Have you tried Cambodian cuisine?',
    'What UNESCO World Heritage sites interest you?',
  ],
  quiz: [
    {
      id: 'cambodia-q1',
      question: 'What is Cambodia\'s most famous temple complex?',
      options: ['Borobudur', 'Angkor Wat', 'Prambanan', 'Wat Pho'],
      correctAnswer: 1,
    },
    {
      id: 'cambodia-q2',
      question: 'What is Cambodia\'s national dish?',
      options: ['Pho', 'Pad Thai', 'Amok', 'Laksa'],
      correctAnswer: 2,
    },
    {
      id: 'cambodia-q3',
      question: 'What was the historic Cambodian empire called?',
      options: ['Siam', 'Khmer Empire', 'Champa', 'Ayutthaya'],
      correctAnswer: 1,
    },
    {
      id: 'cambodia-q4',
      question: 'What is the capital of Cambodia?',
      options: ['Siem Reap', 'Phnom Penh', 'Battambang', 'Sihanoukville'],
      correctAnswer: 1,
    },
    {
      id: 'cambodia-q5',
      question: 'When was Angkor Wat built?',
      options: ['9th century', '12th century', '15th century', '18th century'],
      correctAnswer: 1,
    },
    {
      id: 'cambodia-q6',
      question: 'Which regime caused genocide in Cambodia from 1975-1979?',
      options: ['Viet Cong', 'Khmer Rouge', 'Pathet Lao', 'FUNCINPEC'],
      correctAnswer: 1,
    },
    {
      id: 'cambodia-q7',
      question: 'What lake is Southeast Asia\'s largest freshwater lake?',
      options: ['Tonle Sap', 'Inle Lake', 'Taal Lake', 'Laguna de Bay'],
      correctAnswer: 0,
    },
    {
      id: 'cambodia-q8',
      question: 'Which country colonized Cambodia?',
      options: ['Britain', 'Netherlands', 'France', 'Spain'],
      correctAnswer: 2,
    },
    {
      id: 'cambodia-q9',
      question: 'What is the official language of Cambodia?',
      options: ['Thai', 'Vietnamese', 'Khmer', 'Lao'],
      correctAnswer: 2,
    },
    {
      id: 'cambodia-q10',
      question: 'What is the traditional Cambodian dance form recognized by UNESCO?',
      options: ['Apsara Dance', 'Likay', 'Chhau', 'Legong'],
      correctAnswer: 0,
    },
  ],
  coordinates: { x: 77, y: 24 },
};
