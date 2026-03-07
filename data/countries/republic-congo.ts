import { Country } from '@/types';

export const republicCongo: Country = {
  id: 'republic-congo',
  name: 'Republic of the Congo',
  code: 'CG',
  continent: 'Africa',
  flag: '🇨🇬',
  landscapeImage: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80',
  description: 'The Republic of the Congo is a Central African country with equatorial rainforests, wildlife reserves, and the Congo River forming its eastern border.',
  quickFacts: [
    { label: 'Capital', value: 'Brazzaville' },
    { label: 'Population', value: '5.5 million' },
    { label: 'Official Language', value: 'French' },
    { label: 'Currency', value: 'Central African CFA Franc' },
    { label: 'Area', value: '342,000 km²' },
  ],
  facts: [
    'Brazzaville and Kinshasa are the world\'s closest capitals',
    'Home to lowland gorillas and forest elephants',
    'Rich in oil and timber resources',
    'Traditional Sapeurs fashion culture originated here',
  ],
  foodCulture: 'Congolese cuisine features cassava, plantains, peanuts, and river fish with French colonial influences.',
  history: [
    {
      year: '1880',
      title: 'French Colonization',
      description: 'The region became part of French Equatorial Africa, shaping modern political boundaries.'
    },
    {
      year: '1960',
      title: 'Independence',
      description: 'Congo gained independence from France, establishing the Republic of the Congo.'
    },
  ],
  innovations: [
    {
      name: 'Sapeur Culture',
      year: '1920s',
      description: 'The Society of Tastemakers and Elegant People (SAPE) created a unique fashion subculture emphasizing dignity through style.'
    },
    {
      name: 'Rumba Music',
      year: '1950s',
      description: 'Congolese musicians contributed significantly to the development of African rumba and soukous music.'
    },
    {
      name: 'Sustainable Palm Oil',
      year: 'Traditional',
      description: 'Traditional methods of palm oil production that maintain forest ecosystems while providing livelihoods.'
    },
  ],
  mustVisit: [
    { name: 'Odzala-Kokoua National Park', description: 'Pristine rainforest with lowland gorillas and forest elephants.' },
    { name: 'Brazzaville', description: 'Capital city with French colonial architecture and vibrant markets.' },
    { name: 'Conkouati-Douli National Park', description: 'Coastal park combining beaches, lagoons, and tropical forest.' },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Required for most nationalities; obtain in advance.' },
    { item: 'Vaccinations', description: 'Yellow fever certificate required; malaria prophylaxis recommended.' },
    { item: 'Language', description: 'French is official; Lingala and Kituba widely spoken.' },
  ],
  mainDish: {
    id: 'congo-main',
    name: 'Poulet Moambe',
    description: 'Chicken in palm butter sauce with rice',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken', amount: 1, unit: 'kg' },
      { name: 'Palm butter', amount: 400, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'whole' },
      { name: 'Tomatoes', amount: 3, unit: 'whole' },
      { name: 'Garlic', amount: 3, unit: 'cloves' },
      { name: 'Pili-pili pepper', amount: 1, unit: 'tsp' },
    ],
    steps: [
      'Season and brown chicken',
      'Sauté onions, tomatoes, and garlic',
      'Add palm butter and water',
      'Add chicken and simmer 60 minutes',
      'Season with pili-pili',
      'Serve with rice or fufu',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=900&q=80',
  },
  dessert: {
    id: 'congo-dessert',
    name: 'Makemba',
    description: 'Fried sweet plantains, a popular Congolese dessert',
    cookingTime: 20,
    servings: 4,
    dietType: 'vegan',
    ingredients: [
      { name: 'Ripe plantains', amount: 4, unit: 'whole' },
      { name: 'Vegetable oil for frying', amount: 300, unit: 'ml' },
      { name: 'Sugar (optional)', amount: 2, unit: 'tbsp' },
      { name: 'Cinnamon (optional)', amount: 0.5, unit: 'tsp' },
    ],
    steps: [
      'Peel ripe plantains and slice diagonally into 1cm pieces.',
      'Heat oil in deep pan to 350°F.',
      'Fry plantain slices in batches for 2-3 minutes per side until golden.',
      'Drain on paper towels.',
      'Optionally sprinkle with sugar and cinnamon while hot.',
      'Serve warm as dessert or snack.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80',
  },
  drinks: {
    alcoholic: 'Ngok (palm wine), Local beer',
    nonAlcoholic: 'Ginger juice, Bissap',
  },
  music: [
    'Soukous',
    'Rumba Congolaise',
    'Traditional rhythms',
  ],
  decorationIdeas: [
    'Green, yellow and red flag colors',
    'Sapeur fashion imagery',
    'Rainforest themes',
    'Congo River scenes',
  ],
  conversationStarters: [
    'Have you heard of the Sapeurs?',
    'What do you know about Central African music?',
  ],
  quiz: [
    {
      id: 'congo-q1',
      question: 'What is the capital of Republic of the Congo?',
      options: ['Kinshasa', 'Brazzaville', 'Pointe-Noire', 'Dolisie'],
      correctAnswer: 1,
    },
    {
      id: 'congo-q2',
      question: 'Which two capitals are the closest in the world?',
      options: ['Brazzaville and Kinshasa', 'Rome and Vatican City', 'Vienna and Bratislava', 'Copenhagen and Malmö'],
      correctAnswer: 0,
    },
    {
      id: 'congo-q3',
      question: 'What unique fashion culture originated in Congo?',
      options: ['Haute Couture', 'Sapeur culture', 'Streetwear', 'Minimalism'],
      correctAnswer: 1,
    },
    {
      id: 'congo-q4',
      question: 'When did Congo gain independence?',
      options: ['1950', '1960', '1970', '1980'],
      correctAnswer: 1,
    },
    {
      id: 'congo-q5',
      question: 'What animal can be found in Odzala-Kokoua National Park?',
      options: ['Mountain gorillas', 'Lowland gorillas', 'Chimpanzees only', 'Orangutans'],
      correctAnswer: 1,
    },
    {
      id: 'congo-q6',
      question: 'What is the official language of Republic of the Congo?',
      options: ['English', 'Portuguese', 'French', 'Spanish'],
      correctAnswer: 2,
    },
    {
      id: 'congo-q7',
      question: 'What music style developed in Congo?',
      options: ['Samba', 'Rumba/Soukous', 'Reggae', 'Calypso'],
      correctAnswer: 1,
    },
    {
      id: 'congo-q8',
      question: 'What is Poulet Moambe?',
      options: ['A type of bread', 'Chicken in palm butter sauce', 'A traditional dance', 'A musical instrument'],
      correctAnswer: 1,
    },
    {
      id: 'congo-q9',
      question: 'What natural resource is Congo rich in?',
      options: ['Coal', 'Oil and timber', 'Iron ore', 'Natural gas only'],
      correctAnswer: 1,
    },
    {
      id: 'congo-q10',
      question: 'What is Makemba?',
      options: ['A type of soup', 'Fried sweet plantains', 'Grilled fish', 'Cassava bread'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 50, y: 18 },
};
