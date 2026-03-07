import { Country } from '@/types';

export const belize: Country = {
  id: 'belize',
  name: 'Belize',
  code: 'BZ',
  continent: 'North America',
  flag: '🇧🇿',
  landscapeImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
  description: 'Belize is a Caribbean country on the northeastern coast of Central America, known for the Belize Barrier Reef, Mayan ruins, and diverse ecosystems.',
  quickFacts: [
    { label: 'Capital', value: 'Belmopan' },
    { label: 'Population', value: '400,000' },
    { label: 'Official Language', value: 'English' },
    { label: 'Currency', value: 'Belize Dollar' },
    { label: 'Area', value: '22,966 km²' },
  ],
  facts: [
    'Belize has the second largest barrier reef in the world',
    'It\'s the only Central American country with English as official language',
    'Home to the famous Great Blue Hole',
    'Over 900 Mayan archaeological sites',
    'Belize has more than 600 species of birds',
    'The country was formerly known as British Honduras',
    'Belize has the lowest population density in Central America',
    'Half of Belize is covered in forests',
  ],
  foodCulture: 'Belizean cuisine blends Maya, Mestizo, Creole, and Garifuna influences with fresh seafood, rice and beans as staples. Recado spice paste, coconut, and habanero peppers are essential ingredients. Marie Sharp\'s hot sauce is a source of national pride.',
  history: [
    {
      year: '1500 BC-900 AD',
      title: 'Mayan Civilization',
      description: 'The Maya built sophisticated cities and ceremonial centers across Belize, leaving impressive archaeological sites.'
    },
    {
      year: '1638',
      title: 'British Settlement',
      description: 'English and Scottish settlers arrived to harvest logwood, establishing what would become British Honduras.'
    },
    {
      year: '1862',
      title: 'British Crown Colony',
      description: 'Belize officially became a British Crown Colony known as British Honduras.'
    },
    {
      year: '1981',
      title: 'Independence',
      description: 'Belize gained independence from Britain, becoming the last British colony on the American mainland to do so.'
    },
  ],
  innovations: [
    {
      name: 'Marine Reserve Network',
      year: '1987',
      description: 'Belize established the first marine reserve in Central America at Hol Chan, pioneering reef conservation in the region.'
    },
    {
      name: 'Jaguar Preservation',
      year: '1986',
      description: 'Created the world\'s first jaguar preserve (Cockscomb Basin Wildlife Sanctuary), protecting this endangered species.'
    },
    {
      name: 'Blue Hole Exploration',
      year: '1970s',
      description: 'Jacques Cousteau declared Belize\'s Blue Hole one of the top diving sites in the world, popularizing underwater cave exploration.'
    },
    {
      name: 'Garifuna Cultural Preservation',
      year: 'Traditional',
      description: 'Belize has been instrumental in preserving Garifuna language, music, and dance traditions, recognized by UNESCO as intangible heritage.'
    },
  ],
  mustVisit: [
    { name: 'Great Blue Hole', description: 'Massive underwater sinkhole, over 300 meters wide and 125 meters deep, perfect for diving and snorkeling.' },
    { name: 'Xunantunich', description: 'Ancient Mayan ruins with El Castillo pyramid offering panoramic views of the jungle and Guatemala.' },
    { name: 'Caye Caulker', description: 'Laid-back island with the motto "Go Slow," perfect for snorkeling and enjoying Caribbean vibes.' },
    { name: 'ATM Cave', description: 'Actun Tunichil Muknal cave system with Mayan artifacts and crystal-formed skeletons.' },
    { name: 'Placencia Peninsula', description: '16 miles of gorgeous beaches with excellent diving, fishing, and relaxation opportunities.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'November to April for dry season; avoid September-October (hurricane season peak).' },
    { item: 'Visa', description: 'Many nationalities get visa-free entry for up to 30 days.' },
    { item: 'Language', description: 'English is official, but Spanish, Creole, and Garifuna are widely spoken.' },
    { item: 'Currency', description: 'Belize Dollar (BZD), fixed at 2:1 with USD. US dollars accepted everywhere.' },
    { item: 'Water activities gear', description: 'Bring reef-safe sunscreen, snorkel gear, and waterproof bags.' },
    { item: 'Bug spray', description: 'Mosquito repellent essential for jungle areas and evenings.' }
  ],
  mainDish: {
    id: 'belize-main',
    name: 'Rice and Beans with Stew Chicken',
    description: 'National dish with coconut rice and beans',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken pieces', amount: 1, unit: 'kg' },
      { name: 'Red kidney beans', amount: 400, unit: 'g' },
      { name: 'Rice', amount: 500, unit: 'g' },
      { name: 'Coconut milk', amount: 400, unit: 'ml' },
      { name: 'Recado spice paste', amount: 2, unit: 'tbsp' },
      { name: 'Habanero pepper', amount: 1, unit: 'whole' },
    ],
    steps: [
      'Marinate chicken with recado paste',
      'Cook beans until tender',
      'Stew chicken with onions and peppers',
      'Cook rice with beans and coconut milk',
      'Serve rice and beans with stew chicken',
      'Add plantains on the side',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
  },
  dessert: {
    id: 'belize-dessert',
    name: 'Tableta',
    description: 'Traditional Belizean coconut candy squares, sweet and chewy',
    cookingTime: 45,
    servings: 20,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Grated coconut', amount: 400, unit: 'g' },
      { name: 'Brown sugar', amount: 400, unit: 'g' },
      { name: 'Ginger, grated', amount: 2, unit: 'tbsp' },
      { name: 'Water', amount: 250, unit: 'ml' },
      { name: 'Vanilla extract', amount: 1, unit: 'tsp' },
      { name: 'Cinnamon', amount: 0.5, unit: 'tsp' },
    ],
    steps: [
      'Combine sugar and water in a heavy pot.',
      'Bring to boil, stirring until sugar dissolves.',
      'Add grated coconut, ginger, and cinnamon.',
      'Cook over medium heat, stirring constantly for 20-25 minutes.',
      'Mixture should thicken and pull away from sides.',
      'Add vanilla, stir well.',
      'Pour into greased baking dish.',
      'Let cool and set for 2 hours.',
      'Cut into small squares.',
      'Serve as a sweet snack.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80',
  },
  drinks: {
    alcoholic: 'Belikin beer, Cashew wine, Rum',
    nonAlcoholic: 'Seaweed shake, Horchata, Fresh coconut water',
  },
  music: [
    'Punta music',
    'Brukdown',
    'Paranda',
    'Reggae',
  ],
  decorationIdeas: [
    'Blue, red and white flag colors',
    'Tropical rainforest themes',
    'Mayan symbols',
    'Ocean and reef imagery',
  ],
  conversationStarters: [
    'Have you ever been diving or snorkeling?',
    'What do you know about Mayan culture?',
    'Do you enjoy Caribbean food?',
  ],
  quiz: [
    {
      id: 'belize-q1',
      question: 'What is the capital of Belize?',
      options: ['Belize City', 'Belmopan', 'San Pedro', 'Orange Walk'],
      correctAnswer: 1,
    },
    {
      id: 'belize-q2',
      question: 'What is the official language of Belize?',
      options: ['Spanish', 'English', 'French', 'Portuguese'],
      correctAnswer: 1,
    },
    {
      id: 'belize-q3',
      question: 'Belize has the world\'s ranking barrier reef:',
      options: ['First largest', 'Second largest', 'Third largest', 'Fourth largest'],
      correctAnswer: 1,
    },
    {
      id: 'belize-q4',
      question: 'What is the famous underwater feature in Belize called?',
      options: ['Black Hole', 'Great Blue Hole', 'Deep Blue Sea', 'Ocean Cave'],
      correctAnswer: 1,
    },
    {
      id: 'belize-q5',
      question: 'When did Belize gain independence?',
      options: ['1971', '1976', '1981', '1986'],
      correctAnswer: 2,
    },
    {
      id: 'belize-q6',
      question: 'What was Belize formerly known as?',
      options: ['British Honduras', 'Spanish Maya', 'New England', 'Caribbean Britain'],
      correctAnswer: 0,
    },
    {
      id: 'belize-q7',
      question: 'How many Mayan archaeological sites does Belize have?',
      options: ['Over 200', 'Over 400', 'Over 600', 'Over 900'],
      correctAnswer: 3,
    },
    {
      id: 'belize-q8',
      question: 'Which famous explorer declared the Blue Hole one of the top diving sites?',
      options: ['Christopher Columbus', 'Jacques Cousteau', 'James Cook', 'Ferdinand Magellan'],
      correctAnswer: 1,
    },
    {
      id: 'belize-q9',
      question: 'What type of wildlife sanctuary was the first in the world in Belize?',
      options: ['Tiger preserve', 'Jaguar preserve', 'Panther preserve', 'Leopard preserve'],
      correctAnswer: 1,
    },
    {
      id: 'belize-q10',
      question: 'What percentage of Belize is covered in forests?',
      options: ['25%', '50%', '75%', '90%'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 17, y: 27 },
};
