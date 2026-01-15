import { Country } from '@/types';

export const bangladesh: Country = {
  id: 'bangladesh',
  name: 'Bangladesh',
  code: 'BD',
  continent: 'Asia',
  flag: '🇧🇩',
  landscapeImage: 'https://images.unsplash.com/photo-1564341352-8d62ff7b4f8a?w=800',
  description: 'Bangladesh is a South Asian country known for its lush greenery, mighty rivers, vibrant culture, and warm hospitality. Home to the world\'s longest natural sea beach and the largest mangrove forest, it offers rich biodiversity and cultural heritage.',
  quickFacts: [
    { label: 'Capital', value: 'Dhaka' },
    { label: 'Population', value: '166 million' },
    { label: 'Official Language', value: 'Bengali' },
    { label: 'Currency', value: 'Bangladeshi Taka (৳)' },
    { label: 'Area', value: '147,570 km²' },
  ],
  facts: [
    'Cox\'s Bazar is the world\'s longest natural sea beach at 120 km',
    'The Sundarbans, a UNESCO World Heritage Site, is home to the Royal Bengal Tiger',
    'Bangladesh has the largest river delta in the world',
    'The country is the world\'s second-largest garment exporter',
    'Bengali is the seventh most spoken language in the world',
    'The national flower is the white water lily',
    'Bangladesh won independence on December 16, 1971',
    'The country has six seasons according to the Bengali calendar',
  ],
  foodCulture: 'Bengali cuisine is known for its subtle use of spices and emphasis on fish and rice. Mustard oil and panch phoron (five-spice blend) are signature flavors. Meals typically include rice, dal, fish curry, and vegetables. Sweets play an important role in celebrations.',
  history: [
    {
      year: '3rd century BC',
      title: 'Ancient Bengal',
      description: 'The region was part of powerful empires including the Maurya and Gupta dynasties, developing rich Buddhist and Hindu traditions.'
    },
    {
      year: '1204',
      title: 'Islamic Rule',
      description: 'Islamic rulers established control, bringing Persian and Mughal cultural influences that deeply shaped Bengali society.'
    },
    {
      year: '1757',
      title: 'British Colonial Period',
      description: 'After the Battle of Plassey, Bengal came under British East India Company control, later becoming part of British India.'
    },
    {
      year: '1947',
      title: 'Partition of India',
      description: 'Bengal was divided; the eastern part became East Pakistan as part of the newly created Pakistan.'
    },
    {
      year: '1952',
      title: 'Language Movement',
      description: 'Bengalis protested to preserve their language, a pivotal moment in national identity formation.'
    },
    {
      year: '1971',
      title: 'Independence',
      description: 'After a nine-month liberation war, Bangladesh emerged as an independent nation on December 16, 1971.'
    },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Visa on arrival available for many nationalities. E-visa also available.' },
    { item: 'Best time to visit', description: 'November to February for cool, dry weather' },
    { item: 'Transportation', description: 'Rickshaws, CNGs (auto-rickshaws), buses, trains, and domestic flights.' },
    { item: 'Language', description: 'Bengali is official. English is spoken in urban areas and tourist spots.' },
    { item: 'Safety', description: 'Generally safe for tourists. Exercise standard precautions in crowded areas.' },
  ],
  mainDish: {
    id: 'bangladesh-biryani',
    name: 'Kacchi Biryani',
    description: 'Bangladesh\'s most beloved rice dish - aromatic basmati rice layered with marinated meat (usually mutton), yogurt, and spices, then slow-cooked to perfection. It\'s a celebration dish that\'s rich, flavorful, and deeply satisfying.',
    cookingTime: 120,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Basmati rice', amount: 500, unit: 'g' },
      { name: 'Mutton', amount: 1, unit: 'kg' },
      { name: 'Yogurt', amount: 300, unit: 'g' },
      { name: 'Fried onions', amount: 150, unit: 'g' },
      { name: 'Ghee', amount: 100, unit: 'ml' },
      { name: 'Biryani masala', amount: 3, unit: 'tbsp' },
      { name: 'Saffron', amount: 1, unit: 'tsp' },
      { name: 'Potatoes', amount: 4, unit: 'pieces' },
    ],
    steps: [
      'Marinate mutton with yogurt, spices, and half the fried onions for 2 hours',
      'Parboil rice with whole spices until 70% cooked',
      'Layer marinated meat at bottom of heavy pot',
      'Add halved potatoes to meat layer',
      'Cover with parboiled rice',
      'Top with remaining fried onions, saffron milk, and ghee',
      'Seal pot with dough or foil, cook on high heat for 5 minutes',
      'Reduce to low heat and cook for 45-60 minutes',
      'Let rest for 10 minutes before serving',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600',
  },
  drinks: {
    alcoholic: 'Limited availability (Muslim-majority country)',
    nonAlcoholic: 'Cha (milk tea), Borhani (spiced yogurt drink), Fresh sugarcane juice, Lassi',
  },
  music: ['Rabindra Sangeet', 'Baul folk music', 'Nazrul Geeti', 'Modern Bengali songs'],
  decorationIdeas: [
    'Red and green (flag colors)',
    'Jamdani fabric patterns',
    'Bengali alpana (floor art) designs',
    'Brass utensils as decor',
    'Water lily flowers',
    'Terracotta elements',
  ],
  conversationStarters: [
    'Have you heard about the Sundarbans and its Royal Bengal Tigers?',
    'What do you know about the Bengali language movement?',
    'Would you prefer exploring Cox\'s Bazar beach or the rivers of Bangladesh?',
    'Have you tried any Bengali sweets like rasgulla or sandesh?',
  ],
  quiz: [
    {
      id: 'bangladesh-q1',
      question: 'What is the capital of Bangladesh?',
      options: ['Chittagong', 'Dhaka', 'Sylhet', 'Khulna'],
      correctAnswer: 1,
    },
    {
      id: 'bangladesh-q2',
      question: 'What is the world\'s longest natural sea beach located in Bangladesh?',
      options: ['Kuakata', 'Saint Martin', 'Cox\'s Bazar', 'Patenga'],
      correctAnswer: 2,
    },
    {
      id: 'bangladesh-q3',
      question: 'When did Bangladesh gain independence?',
      options: ['1947', '1952', '1971', '1991'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 74, y: 32 },
};
