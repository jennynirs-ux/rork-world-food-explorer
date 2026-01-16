import { Country } from '@/types';

export const kiribati: Country = {
  id: 'kiribati',
  name: 'Kiribati',
  code: 'KI',
  continent: 'Oceania',
  flag: '🇰🇮',
  landscapeImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
  description: 'Kiribati is a Pacific island nation spread across the equator, known for pristine atolls, fishing, and vulnerability to climate change.',
  quickFacts: [
    { label: 'Capital', value: 'South Tarawa' },
    { label: 'Population', value: '120,000' },
    { label: 'Official Languages', value: 'English, Gilbertese' },
    { label: 'Currency', value: 'Australian Dollar' },
    { label: 'Area', value: '811 km²' },
  ],
  facts: [
    'Spans all four hemispheres of the Earth',
    'One of the first places to see the sunrise each day',
    'Most vulnerable to sea level rise',
    'Pristine marine environment',
  ],
  foodCulture: 'I-Kiribati cuisine features fish, coconut, pandanus, and breadfruit.',
  mainDish: {
    id: 'kiribati-main',
    name: 'Palusami',
    description: 'Taro leaves cooked in coconut cream',
    cookingTime: 90,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Taro leaves', amount: 500, unit: 'g' },
      { name: 'Coconut cream', amount: 400, unit: 'ml' },
      { name: 'Onions', amount: 1, unit: 'whole' },
      { name: 'Garlic', amount: 2, unit: 'cloves' },
      { name: 'Salt', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Wash taro leaves thoroughly',
      'Layer leaves in baking dish',
      'Mix coconut cream with onions and garlic',
      'Pour mixture over leaves',
      'Cover and bake at 350°F for 90 minutes',
      'Serve with fish or rice',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600',
  },
  drinks: {
    alcoholic: 'Kava, Toddy (palm wine)',
    nonAlcoholic: 'Coconut water, Fresh juice',
  },
  music: [
    'Traditional Gilbertese chants',
    'Pacific island rhythms',
  ],
  decorationIdeas: [
    'Red, white, blue and yellow flag colors',
    'Ocean and atoll imagery',
    'Traditional woven patterns',
    'Frigatebird motifs',
  ],
  conversationStarters: [
    'What do you know about climate change effects?',
    'Have you been to a Pacific atoll?',
  ],
  quiz: [
    {
      id: 'kiribati-q1',
      question: 'What is Kiribati most vulnerable to?',
      options: ['Earthquakes', 'Sea level rise', 'Volcanoes', 'Tsunamis'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 93, y: 19 },
};
