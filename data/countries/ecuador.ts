import { Country } from '@/types';

export const ecuador: Country = {
  id: 'ecuador',
  name: 'Ecuador',
  code: 'EC',
  continent: 'South America',
  flag: '🇪🇨',
  landscapeImage: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800',
  description: 'Ecuador is a compact South American country that packs incredible diversity - from the Amazon rainforest to the Andean highlands, Pacific beaches, and the unique Galápagos Islands. Named after the equator that runs through it, Ecuador offers rich indigenous culture and biodiversity.',
  quickFacts: [
    { label: 'Capital', value: 'Quito' },
    { label: 'Population', value: '18 million' },
    { label: 'Official Language', value: 'Spanish' },
    { label: 'Currency', value: 'US Dollar (USD)' },
    { label: 'Area', value: '283,561 km²' },
  ],
  facts: [
    'The Galápagos Islands belong to Ecuador and inspired Darwin\'s theory of evolution',
    'Quito was the first city to be declared a UNESCO World Heritage Site',
    'Ecuador is one of 17 megadiverse countries in the world',
    'The country uses the US dollar as its official currency',
    'Ecuador is the world\'s largest exporter of bananas',
    'The equator line (Mitad del Mundo) runs through the country',
    'Ecuador has the highest density of rivers in South America',
    'The country has 25% of all plant species found in South America',
  ],
  foodCulture: 'Ecuadorian cuisine reflects its diverse geography - coastal dishes feature fresh seafood, highland cuisine includes hearty soups and roasted meats, while Amazonian dishes use exotic fruits and fish. Indigenous ingredients like quinoa, corn, and potatoes are staples.',
  history: [
    {
      year: '1463',
      title: 'Inca Conquest',
      description: 'The Inca Empire conquered the region, integrating it into their vast territory before Spanish arrival.'
    },
    {
      year: '1534',
      title: 'Spanish Colonization',
      description: 'Spanish conquistadors established colonial rule, founding Quito and Guayaquil.'
    },
    {
      year: '1822',
      title: 'Independence',
      description: 'Ecuador gained independence from Spain after the Battle of Pichincha, initially joining Gran Colombia.'
    },
    {
      year: '1830',
      title: 'Republic Established',
      description: 'Ecuador separated from Gran Colombia to become an independent republic.'
    },
    {
      year: '1835',
      title: 'Galápagos Discovery',
      description: 'Charles Darwin visited the Galápagos Islands, leading to observations that inspired his theory of evolution.'
    },
    {
      year: '2000',
      title: 'Dollarization',
      description: 'Ecuador adopted the US dollar as its official currency to combat economic instability.'
    },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Many nationalities can visit visa-free for up to 90 days.' },
    { item: 'Best time to visit', description: 'June to September for highlands; December to May for coast and Galápagos' },
    { item: 'Transportation', description: 'Buses for intercity travel, domestic flights, taxis in cities.' },
    { item: 'Language', description: 'Spanish is essential. Indigenous languages in rural areas. Limited English.' },
    { item: 'Safety', description: 'Exercise caution in cities. Tourist areas generally safe.' },
  ],
  mainDish: {
    id: 'ecuador-ceviche',
    name: 'Ecuadorian Ceviche',
    description: 'Ecuador\'s signature coastal dish - fresh shrimp marinated in lime juice with tomato sauce, served in a flavorful broth with onions, tomatoes, and cilantro. Unlike Peruvian ceviche, it\'s served in a soupy style and often accompanied by popcorn and plantain chips.',
    cookingTime: 45,
    servings: 6,
    dietType: 'fish',
    ingredients: [
      { name: 'Raw shrimp, peeled', amount: 1, unit: 'kg' },
      { name: 'Lime juice', amount: 200, unit: 'ml' },
      { name: 'Tomato sauce', amount: 150, unit: 'ml' },
      { name: 'Orange juice', amount: 100, unit: 'ml' },
      { name: 'Red onion, diced', amount: 2, unit: 'pieces' },
      { name: 'Tomatoes, diced', amount: 3, unit: 'pieces' },
      { name: 'Cilantro, chopped', amount: 4, unit: 'tbsp' },
      { name: 'Ketchup', amount: 2, unit: 'tbsp' },
    ],
    steps: [
      'Boil shrimp briefly (1-2 minutes) until just pink, then cool',
      'Soak diced red onion in ice water for 10 minutes to reduce sharpness',
      'In a large bowl, mix lime juice, orange juice, tomato sauce, and ketchup',
      'Add diced tomatoes, drained onions, and chopped cilantro',
      'Fold in cooked shrimp',
      'Season with salt and pepper to taste',
      'Refrigerate for 30 minutes to let flavors meld',
      'Serve in bowls with popcorn, plantain chips, and crackers',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1569552096938-5d81ac48df14?w=600',
  },
  drinks: {
    alcoholic: 'Pilsener beer, Zhumir (sugarcane liquor), Canelazo (hot spiced drink)',
    nonAlcoholic: 'Colada morada (berry drink), Naranjilla juice, Morocho (sweet corn drink)',
  },
  music: ['Pasillo', 'San Juanito', 'Marimba music', 'Andean folk music'],
  decorationIdeas: [
    'Yellow, blue, and red (flag colors)',
    'Colorful otavaleño textiles',
    'Panama hats (which are actually from Ecuador)',
    'Tropical flowers and plants',
    'Andean pottery',
    'Amazonian and coastal elements',
  ],
  conversationStarters: [
    'Would you explore the Galápagos Islands or trek through the Amazon?',
    'What do you know about Charles Darwin\'s visit to Ecuador?',
    'Have you tried ceviche? How does the Ecuadorian style differ?',
    'Would you prefer the coast, the highlands, or the rainforest?',
  ],
  quiz: [
    {
      id: 'ecuador-q1',
      question: 'What is Ecuador\'s capital city?',
      options: ['Guayaquil', 'Cuenca', 'Quito', 'Lima'],
      correctAnswer: 2,
    },
    {
      id: 'ecuador-q2',
      question: 'What currency does Ecuador use?',
      options: ['Ecuadorian Peso', 'US Dollar', 'Euro', 'Sucre'],
      correctAnswer: 1,
    },
    {
      id: 'ecuador-q3',
      question: 'Which famous islands belong to Ecuador?',
      options: ['Falkland Islands', 'Easter Island', 'Galápagos Islands', 'Caribbean Islands'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 20, y: 18 },
};
