import { Country } from '@/types';

export const costaRica: Country = {
  id: 'costa-rica',
  name: 'Costa Rica',
  code: 'CR',
  continent: 'North America',
  flag: '🇨🇷',
  landscapeImage: 'https://images.unsplash.com/photo-1564407687096-3be6a43e7aab?w=800',
  description: 'Costa Rica is a tropical paradise in Central America known for its "Pura Vida" lifestyle, stunning biodiversity, pristine beaches, lush rainforests, and commitment to environmental conservation. It\'s a leader in eco-tourism and sustainability.',
  quickFacts: [
    { label: 'Capital', value: 'San José' },
    { label: 'Population', value: '5.2 million' },
    { label: 'Official Language', value: 'Spanish' },
    { label: 'Currency', value: 'Costa Rican Colón (CRC)' },
    { label: 'Area', value: '51,100 km²' },
  ],
  facts: [
    'Costa Rica has no standing army - it was abolished in 1949',
    '25% of the country is protected nature reserves and national parks',
    'Home to 5% of the world\'s biodiversity despite its small size',
    'Over 99% of electricity comes from renewable sources',
    'The country has both Caribbean and Pacific coastlines',
    'Costa Rica is one of the world\'s happiest countries',
    'More than 500,000 species of wildlife live here',
    '"Pura Vida" (pure life) is both a greeting and a philosophy',
  ],
  foodCulture: 'Costa Rican cuisine, or "comida típica," is simple, fresh, and wholesome. Rice and beans form the base of most meals, complemented by fresh fruits, vegetables, and locally caught fish. The food reflects the country\'s agricultural heritage and emphasis on natural, unprocessed ingredients.',
  history: [
    {
      year: '1502',
      title: 'Columbus Arrives',
      description: 'Christopher Columbus landed on the Caribbean coast, naming the region "Rich Coast" believing it held vast gold deposits.'
    },
    {
      year: '1821',
      title: 'Independence',
      description: 'Costa Rica gained independence from Spain as part of the Central American independence movement.'
    },
    {
      year: '1948',
      title: 'Civil War',
      description: 'A brief but significant civil war led to constitutional reforms and the abolition of the military.'
    },
    {
      year: '1949',
      title: 'Abolition of Military',
      description: 'Costa Rica became one of the first countries to constitutionally abolish its military, redirecting funds to education and healthcare.'
    },
    {
      year: '1987',
      title: 'Nobel Peace Prize',
      description: 'President Óscar Arias received the Nobel Peace Prize for his work in ending civil wars in Central America.'
    },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Many nationalities can visit visa-free for up to 90 days.' },
    { item: 'Best time to visit', description: 'December to April (dry season) for best weather' },
    { item: 'Transportation', description: 'Rental cars, buses, domestic flights, boat taxis in coastal areas.' },
    { item: 'Language', description: 'Spanish is official. English widely spoken in tourist areas.' },
    { item: 'Safety', description: 'Very safe by Central American standards. Standard precautions in cities.' },
  ],
  mainDish: {
    id: 'costa-rica-gallo-pinto',
    name: 'Gallo Pinto',
    description: 'Costa Rica\'s national breakfast dish - rice and black beans mixed together and fried with onions, peppers, and spices. Often served with eggs, cheese, tortillas, and fried plantains. It\'s comfort food that Ticos eat daily.',
    cookingTime: 30,
    servings: 4,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Cooked white rice', amount: 3, unit: 'cups' },
      { name: 'Cooked black beans', amount: 2, unit: 'cups' },
      { name: 'Onion, diced', amount: 1, unit: 'piece' },
      { name: 'Red bell pepper, diced', amount: 1, unit: 'piece' },
      { name: 'Cilantro, chopped', amount: 3, unit: 'tbsp' },
      { name: 'Lizano sauce or Worcestershire', amount: 2, unit: 'tbsp' },
      { name: 'Garlic, minced', amount: 2, unit: 'cloves' },
      { name: 'Vegetable oil', amount: 2, unit: 'tbsp' },
    ],
    steps: [
      'Heat oil in a large pan over medium-high heat',
      'Sauté onion and bell pepper until soft',
      'Add minced garlic and cook for 1 minute',
      'Add cooked rice and beans to the pan',
      'Pour in Lizano sauce and mix well',
      'Fry everything together, stirring occasionally, for 5-7 minutes',
      'Add chopped cilantro and mix',
      'Serve hot with eggs, cheese, tortillas, and fried plantains',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1599639958862-f93ff0b56394?w=600',
  },
  drinks: {
    alcoholic: 'Imperial beer, Guaro (sugarcane liquor), Costa Rican rum',
    nonAlcoholic: 'Café chorreado (drip coffee), Agua de pipa (coconut water), Horchata, Fresh fruit batidos',
  },
  music: ['Traditional folk music', 'Calypso', 'Latin pop', 'Marimba music'],
  decorationIdeas: [
    'Blue, white, and red (flag colors)',
    'Tropical flowers and plants',
    'Handmade pottery from Guaitil',
    'Oxcart designs (carretas)',
    'Eco-friendly bamboo elements',
    'Bright, nature-inspired colors',
  ],
  conversationStarters: [
    'What does "Pura Vida" mean to you?',
    'Would you rather zip-line through the rainforest or surf on the Pacific coast?',
    'What do you think about Costa Rica abolishing its military?',
    'Have you tried Costa Rican coffee? How does it compare to others?',
  ],
  quiz: [
    {
      id: 'costa-rica-q1',
      question: 'What is Costa Rica\'s capital?',
      options: ['Panama City', 'San José', 'Managua', 'San Salvador'],
      correctAnswer: 1,
    },
    {
      id: 'costa-rica-q2',
      question: 'What percentage of Costa Rica\'s electricity comes from renewable sources?',
      options: ['50%', '75%', '99%', '100%'],
      correctAnswer: 2,
    },
    {
      id: 'costa-rica-q3',
      question: 'What is the traditional Costa Rican breakfast dish called?',
      options: ['Casado', 'Gallo Pinto', 'Ceviche', 'Tamales'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 18, y: 22 },
};
