import { Country } from '@/types';

export const benin: Country = {
  id: 'benin',
  name: 'Benin',
  code: 'BJ',
  continent: 'Africa',
  flag: '🇧🇯',
  landscapeImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
  description: 'Benin is a West African nation, the birthplace of Vodun (Voodoo) religion, with a rich history as the site of the Kingdom of Dahomey.',
  quickFacts: [
    { label: 'Capital', value: 'Porto-Novo' },
    { label: 'Population', value: '12.5 million' },
    { label: 'Official Language', value: 'French' },
    { label: 'Currency', value: 'West African CFA Franc' },
    { label: 'Area', value: '114,763 km²' },
  ],
  facts: [
    'Benin is the birthplace of Vodun (Voodoo) religion',
    'The Kingdom of Dahomey was one of Africa\'s most powerful states',
    'Benin has beautiful stilt villages on Lake Nokoué',
    'The country was formerly called Dahomey',
  ],
  foodCulture: 'Beninese cuisine features yams, corn, beans, and palm oil. Spicy sauces and grilled fish are common.',
  mainDish: {
    id: 'benin-main',
    name: 'Kuli-Kuli',
    description: 'Spiced fried peanut cakes',
    cookingTime: 45,
    servings: 6,
    dietType: 'vegan',
    ingredients: [
      { name: 'Roasted peanuts', amount: 500, unit: 'g' },
      { name: 'Onion powder', amount: 2, unit: 'tsp' },
      { name: 'Ground ginger', amount: 1, unit: 'tsp' },
      { name: 'Cayenne pepper', amount: 1, unit: 'tsp' },
      { name: 'Salt', amount: 1, unit: 'tsp' },
      { name: 'Vegetable oil for frying', amount: 200, unit: 'ml' },
    ],
    steps: [
      'Grind roasted peanuts into paste',
      'Extract excess oil from paste',
      'Mix with spices and salt',
      'Form into small cakes or sticks',
      'Deep fry until golden brown',
      'Serve as snack or appetizer',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600',
  },
  drinks: {
    alcoholic: 'Palm wine, Local beer, Sodabi (palm liquor)',
    nonAlcoholic: 'Tchakpalo (millet drink), Bissap (hibiscus tea), Ginger juice',
  },
  music: [
    'Traditional Vodun music',
    'Zinli dance rhythms',
    'Afrobeat',
  ],
  decorationIdeas: [
    'Green, yellow and red flag colors',
    'Traditional masks',
    'Vodun spiritual symbols',
    'West African textiles',
  ],
  conversationStarters: [
    'What do you know about West African history?',
    'Have you explored African spiritual traditions?',
    'Do you enjoy spicy foods?',
  ],
  quiz: [
    {
      id: 'benin-q1',
      question: 'What is the capital of Benin?',
      options: ['Cotonou', 'Porto-Novo', 'Abomey', 'Parakou'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 48, y: 19 },
};
