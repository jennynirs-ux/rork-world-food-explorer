import { Country } from '@/types';

export const saintLucia: Country = {
  id: 'saint-lucia',
  name: 'Saint Lucia',
  code: 'LC',
  continent: 'North America',
  flag: '🇱🇨',
  landscapeImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
  description: 'Saint Lucia is a Caribbean island known for the iconic Pitons mountains, volcanic beaches, luxury resorts, and lush rainforests.',
  quickFacts: [
    { label: 'Capital', value: 'Castries' },
    { label: 'Population', value: '184,000' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'East Caribbean Dollar' },
    { label: 'Area', value: '617 km²' },
  ],
  facts: [
    'The Pitons are a UNESCO World Heritage Site',
    'Only country named after a woman (Saint Lucy)',
    'Drive-in volcano at Sulphur Springs',
    'Has produced two Nobel Prize laureates',
  ],
  foodCulture: 'Saint Lucian cuisine features Creole flavors with fresh seafood, tropical fruits, and spices.',
  mainDish: {
    id: 'saint-lucia-main',
    name: 'Green Fig and Saltfish',
    description: 'National dish with green bananas and salted cod',
    cookingTime: 60,
    servings: 4,
    dietType: 'fish',
    ingredients: [
      { name: 'Green bananas', amount: 8, unit: 'whole' },
      { name: 'Salted codfish', amount: 400, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Tomatoes', amount: 2, unit: 'whole' },
      { name: 'Bell peppers', amount: 1, unit: 'whole' },
      { name: 'Coconut oil', amount: 3, unit: 'tbsp' },
    ],
    steps: [
      'Soak saltfish to remove excess salt',
      'Boil green bananas until tender',
      'Flake saltfish',
      'Sauté onions, peppers, and tomatoes',
      'Add flaked fish',
      'Serve with boiled green bananas',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559737558-2f5a2f7e8c59?w=600',
  },
  drinks: {
    alcoholic: 'Piton beer, Rum punch, Bounty rum',
    nonAlcoholic: 'Coconut water, Sorrel, Passion fruit juice',
  },
  music: [
    'Calypso',
    'Soca',
    'Zouk',
    'Reggae',
  ],
  decorationIdeas: [
    'Blue, yellow, black and white flag colors',
    'Pitons mountain imagery',
    'Tropical flowers',
    'Beach and rainforest themes',
  ],
  conversationStarters: [
    'Have you seen the Pitons?',
    'What\'s your ideal tropical vacation?',
  ],
  quiz: [
    {
      id: 'saint-lucia-q1',
      question: 'What are the Pitons?',
      options: ['Beaches', 'Mountains', 'Rivers', 'Caves'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 26, y: 25 },
};
