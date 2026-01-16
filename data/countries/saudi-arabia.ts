import { Country } from '@/types';

export const saudiarabia: Country = {
  id: 'saudi-arabia',
  name: 'Saudi Arabia',
  code: 'SA',
  continent: 'Asia',
  flag: '🇸🇦',
  landscapeImage: 'https://images.unsplash.com/photo-1578070181910-f1e514afdd08?w=800',
  description: 'Saudi Arabia is the birthplace of Islam, home to Mecca and Medina, known for vast deserts, oil wealth, and modernization efforts.',
  quickFacts: [
    { label: 'Capital', value: 'Riyadh' },
    { label: 'Population', value: '35 million' },
    { label: 'Official Language', value: 'Arabic' },
    { label: 'Currency', value: 'Saudi Riyal' },
    { label: 'Area', value: '2,149,690 km²' },
  ],
  facts: [
    'Home to Islam\'s two holiest cities: Mecca and Medina',
    'World\'s largest oil exporter',
    'No permanent rivers or lakes',
    'Undergoing major modernization with Vision 2030',
  ],
  foodCulture: 'Saudi cuisine features rice, meat, dates, and aromatic spices with Bedouin and Levantine influences.',
  mainDish: {
    id: 'saudi-arabia-main',
    name: 'Kabsa',
    description: 'National dish with spiced rice and meat',
    cookingTime: 120,
    servings: 8,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken or lamb', amount: 1.5, unit: 'kg' },
      { name: 'Basmati rice', amount: 600, unit: 'g' },
      { name: 'Tomatoes', amount: 4, unit: 'whole' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Kabsa spice mix', amount: 3, unit: 'tbsp' },
      { name: 'Dried limes', amount: 3, unit: 'whole' },
    ],
    steps: [
      'Brown meat with kabsa spices',
      'Add tomatoes and onions',
      'Simmer until meat is tender',
      'Cook rice with meat broth and dried limes',
      'Layer meat over rice',
      'Garnish with raisins and almonds',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600',
  },
  drinks: {
    alcoholic: 'Not available (prohibited)',
    nonAlcoholic: 'Arabic coffee (Qahwa), Saudi champagne (apple cider), Fresh dates juice',
  },
  music: [
    'Traditional Ardah dance',
    'Bedouin folk music',
    'Modern Arabic pop',
  ],
  decorationIdeas: [
    'Green and white flag colors',
    'Desert landscapes',
    'Islamic calligraphy',
    'Date palm imagery',
  ],
  conversationStarters: [
    'What do you know about Arabian culture?',
    'Have you tried authentic Middle Eastern cuisine?',
  ],
  quiz: [
    {
      id: 'saudi-arabia-q1',
      question: 'What are the two holiest cities in Islam located in Saudi Arabia?',
      options: ['Riyadh and Jeddah', 'Mecca and Medina', 'Dubai and Abu Dhabi', 'Baghdad and Damascus'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 58, y: 32 },
};
