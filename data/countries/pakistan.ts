import { Country } from '@/types';

export const pakistan: Country = {
  id: 'pakistan',
  name: 'Pakistan',
  code: 'PK',
  continent: 'Asia',
  flag: '🇵🇰',
  landscapeImage: 'https://images.unsplash.com/photo-1583074866344-e3f21e55a440?w=800',
  description: 'Pakistan is a country of stunning natural beauty, from the towering peaks of the Karakoram and Himalayas to the Arabian Sea coast, with a rich cultural heritage spanning thousands of years.',
  quickFacts: [
    { label: 'Capital', value: 'Islamabad' },
    { label: 'Population', value: '230 million' },
    { label: 'Official Languages', value: 'Urdu, English' },
    { label: 'Currency', value: 'Pakistani Rupee (PKR)' },
    { label: 'Area', value: '881,913 km²' },
  ],
  facts: [
    'Pakistan has five of the world\'s fourteen 8,000m+ peaks',
    'The Indus Valley Civilization was one of the world\'s oldest',
    'K2, the world\'s second highest mountain, is in Pakistan',
    'Pakistan has the world\'s youngest Nobel Prize laureate (Malala)',
    'The country was founded in 1947 as the first Islamic republic',
    'Pakistan has the sixth largest population in the world',
    'The Karakoram Highway is the highest paved international road',
    'Pakistan is the world\'s fifth largest milk producer',
  ],
  foodCulture: 'Pakistani cuisine is incredibly diverse and flavorful, known for its use of spices, aromatic rice dishes, tandoori meats, and rich curries. Regional varieties include Punjabi, Sindhi, Balochi, and Pashtun cuisines.',
  history: [
    {
      year: '2500 BC',
      title: 'Indus Valley Civilization',
      description: 'One of the world\'s earliest urban civilizations flourished in what is now Pakistan.'
    },
    {
      year: '1526',
      title: 'Mughal Empire',
      description: 'The Mughal Empire brought Islamic architecture and culture to the region.'
    },
    {
      year: '1858',
      title: 'British Raj',
      description: 'The region became part of British India after the end of Mughal rule.'
    },
    {
      year: '1947',
      title: 'Independence',
      description: 'Pakistan gained independence from Britain as a homeland for Muslims of the subcontinent.'
    },
    {
      year: '1971',
      title: 'Bangladesh Independence',
      description: 'East Pakistan became the independent nation of Bangladesh.'
    },
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'October-April for most regions, June-September for northern mountains' },
    { item: 'Visa', description: 'E-visa available for many nationalities. Check requirements.' },
    { item: 'Transportation', description: 'Domestic flights, buses, and hired cars available.' },
    { item: 'Language', description: 'Urdu and English. Regional languages vary.' },
    { item: 'Safety', description: 'Check travel advisories. Northern areas generally safe for tourists.' },
  ],
  mainDish: {
    id: 'pakistan-biryani',
    name: 'Chicken Biryani',
    description: 'Aromatic rice dish layered with spiced chicken, one of Pakistan\'s most beloved dishes',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Basmati rice', amount: 600, unit: 'g' },
      { name: 'Chicken', amount: 1, unit: 'kg' },
      { name: 'Yogurt', amount: 250, unit: 'ml' },
      { name: 'Onions (fried)', amount: 3, unit: 'large' },
      { name: 'Tomatoes', amount: 3, unit: 'pieces' },
      { name: 'Ginger-garlic paste', amount: 3, unit: 'tbsp' },
      { name: 'Biryani masala', amount: 3, unit: 'tbsp' },
      { name: 'Saffron', amount: 1, unit: 'pinch' },
      { name: 'Mint and coriander', amount: 1, unit: 'bunch each' },
      { name: 'Ghee', amount: 100, unit: 'g' },
    ],
    steps: [
      'Marinate chicken with yogurt, ginger-garlic paste, and half the biryani masala for 30 min',
      'Parboil rice with whole spices until 70% cooked, drain',
      'In a heavy pot, layer: fried onions, marinated chicken, remaining masala',
      'Add chopped tomatoes, mint, and coriander',
      'Layer parboiled rice on top',
      'Sprinkle saffron soaked in milk, remaining fried onions, and ghee',
      'Cover pot tightly with foil and lid',
      'Cook on high heat for 5 min, then low heat for 30-40 min (dum)',
      'Let rest for 5 minutes before opening',
      'Gently mix and serve with raita',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600',
  },
  drinks: {
    alcoholic: 'Limited availability (Islamic country)',
    nonAlcoholic: 'Chai (milk tea), Lassi (yogurt drink), Rooh Afza, Fresh sugarcane juice',
  },
  music: ['Qawwali (Sufi devotional music)', 'Ghazals', 'Folk music', 'Contemporary Pakistani pop'],
  decorationIdeas: [
    'Green and white (Pakistani flag colors)',
    'Truck art-inspired patterns (colorful Pakistani style)',
    'Mughal architectural motifs',
    'Traditional ajrak textiles',
    'Islamic calligraphy',
    'Colorful cushions and carpets',
  ],
  conversationStarters: [
    'Have you seen pictures of the fairy meadows in Pakistan?',
    'Pakistani biryani is legendary - have you tried it?',
    'The Karakoram Highway is one of the world\'s most scenic roads!',
    'Truck art in Pakistan is so vibrant and unique!',
  ],
  quiz: [
    {
      id: 'pakistan-q1',
      question: 'What is Pakistan\'s capital city?',
      options: ['Karachi', 'Lahore', 'Islamabad', 'Peshawar'],
      correctAnswer: 2,
    },
    {
      id: 'pakistan-q2',
      question: 'Which mountain range is K2 located in?',
      options: ['Himalayas', 'Karakoram', 'Hindu Kush', 'Alps'],
      correctAnswer: 1,
    },
    {
      id: 'pakistan-q3',
      question: 'What year did Pakistan gain independence?',
      options: ['1945', '1947', '1950', '1956'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 68, y: 35 },
};
