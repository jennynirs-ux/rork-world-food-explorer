import { Country } from '@/types';

export const brazil: Country = {
  id: 'brazil',
  name: 'Brazil',
  code: 'BR',
  continent: 'South America',
  flag: '🇧🇷',
  landscapeImage: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800',
  description: 'Brazil is the largest country in South America, famous for the Amazon rainforest, Carnival celebrations, football, and its vibrant, diverse culture. Home to stunning beaches, waterfalls, and the rhythm of samba.',
  quickFacts: [
    { label: 'Capital', value: 'Brasília' },
    { label: 'Population', value: '215.3 million' },
    { label: 'Official Language', value: 'Portuguese' },
    { label: 'Currency', value: 'Brazilian Real (R$)' },
    { label: 'Area', value: '8,515,767 km²' },
  ],
  facts: [
    'Brazil is the 5th largest country in the world',
    'The Amazon rainforest covers about 60% of Brazil',
    'Brazil has won the FIFA World Cup 5 times, more than any other nation',
    'The country is home to 60% of the Amazon rainforest',
    'Portuguese is the official language, making Brazil the only Portuguese-speaking country in South America',
    'Brazil produces about one-third of the world\'s coffee',
    'Rio de Janeiro\'s Carnival is the world\'s largest festival',
    'Brazil has the world\'s most diverse collection of primates',
  ],
  foodCulture: 'Brazilian cuisine is incredibly diverse, reflecting influences from Indigenous, Portuguese, African, and immigrant cultures. Meals often feature rice, beans, and meat. Churrasco (BBQ) is a beloved tradition, and street food is popular and varied.',
  history: [
    {
      year: '1500',
      title: 'Portuguese Discovery',
      description: 'Pedro Álvares Cabral claimed Brazil for Portugal, beginning over 300 years of colonial rule.'
    },
    {
      year: '1822',
      title: 'Independence',
      description: 'Brazil became independent from Portugal, uniquely as an empire rather than a republic.'
    },
    {
      year: '1888',
      title: 'Abolition of Slavery',
      description: 'Brazil was the last country in the Americas to abolish slavery.'
    },
    {
      year: '1960-Present',
      title: 'Modern Brazil',
      description: 'Brasília became the new capital, and Brazil emerged as a major global economic power.'
    },
  ],
  innovations: [
    {
      name: 'Airplane',
      year: '1906',
      description: 'Alberto Santos-Dumont made the first public airplane flight (Brazilians dispute the Wright Brothers\' claim).'
    },
    {
      name: 'Ethanol Fuel',
      year: '1970s',
      description: 'Brazil pioneered large-scale use of sugarcane ethanol as vehicle fuel.'
    },
    {
      name: 'Banking Innovations',
      year: '1980s',
      description: 'Brazil developed electronic voting and banking systems still used worldwide.'
    },
    {
      name: 'Brazilian Jiu-Jitsu',
      year: '1920s',
      description: 'The Gracie family adapted Japanese jiu-jitsu into a highly effective martial art.'
    },
  ],
  mustVisit: [
    { name: 'Christ the Redeemer', description: 'Iconic Art Deco statue overlooking Rio de Janeiro, one of the New Seven Wonders.' },
    { name: 'Iguazu Falls', description: 'Massive waterfall system on the border with Argentina, one of the world\'s largest.' },
    { name: 'Amazon Rainforest', description: 'The world\'s largest tropical rainforest with incredible biodiversity.' },
    { name: 'Fernando de Noronha', description: 'Pristine archipelago with stunning beaches and marine life.' },
    { name: 'Salvador', description: 'Historic city with Afro-Brazilian culture, colorful colonial architecture, and beaches.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'December-March for beaches; June-September for Amazon and Southern regions.' },
    { item: 'Portuguese phrases', description: 'Basic Portuguese very helpful; English not widely spoken.' },
    { item: 'Mosquito protection', description: 'Essential for tropical regions and Amazon.' },
    { item: 'Beach gear', description: 'Brazilians love beach culture; pack swimwear and flip-flops.' },
    { item: 'Safety awareness', description: 'Be cautious in big cities; avoid displaying valuables.' },
    { item: 'Cash', description: 'Many small vendors prefer cash; ATMs widely available.' }
  ],
  mainDish: {
    id: 'brazil-main',
    name: 'Feijoada',
    description: 'Brazil\'s national dish: black bean stew with pork, beef, and sausages',
    cookingTime: 180,
    servings: 8,
    dietType: 'meat',
    ingredients: [
      { name: 'Black beans', amount: 500, unit: 'g' },
      { name: 'Pork ribs', amount: 400, unit: 'g' },
      { name: 'Smoked sausage', amount: 300, unit: 'g' },
      { name: 'Bacon', amount: 200, unit: 'g' },
      { name: 'Beef', amount: 300, unit: 'g' },
      { name: 'Onions', amount: 2, unit: 'large' },
      { name: 'Garlic cloves', amount: 6, unit: 'whole' },
      { name: 'Bay leaves', amount: 3, unit: 'whole' },
      { name: 'Orange', amount: 1, unit: 'whole' },
    ],
    steps: [
      'Soak black beans overnight',
      'Cook beans with bay leaves for 1 hour',
      'Brown bacon and pork ribs in large pot',
      'Add beef and sausage, brown all meats',
      'Add onions and garlic, sauté until soft',
      'Add cooked beans with their liquid to meat',
      'Simmer together for 1.5-2 hours',
      'Stir occasionally, add water if needed',
      'Season with salt, pepper, and squeeze of orange',
      'Serve with white rice, farofa, orange slices, and collard greens',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600',
  },
  dessert: {
    id: 'brazil-dessert',
    name: 'Brigadeiro',
    description: 'Chocolate truffle-like candy made with condensed milk, cocoa, and butter',
    cookingTime: 20,
    servings: 20,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Sweetened condensed milk', amount: 395, unit: 'g' },
      { name: 'Cocoa powder', amount: 3, unit: 'tbsp' },
      { name: 'Butter', amount: 30, unit: 'g' },
      { name: 'Chocolate sprinkles', amount: 100, unit: 'g' },
    ],
    steps: [
      'Combine condensed milk, cocoa powder, and butter in pot',
      'Cook over medium heat, stirring constantly',
      'Cook for 10-15 minutes until mixture thickens',
      'Mixture should pull away from bottom of pan',
      'Transfer to greased plate and let cool',
      'Grease hands with butter',
      'Roll mixture into small balls',
      'Roll each ball in chocolate sprinkles',
      'Place in mini paper cups',
      'Refrigerate until serving',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1548848932-bed2071c9440?w=600',
  },
  drinks: {
    alcoholic: 'Caipirinha, Cachaça, Guaraná Antarctica, Brahma beer',
    nonAlcoholic: 'Açaí juice, Coconut water, Guaraná, Fresh fruit juices',
  },
  music: [
    'Samba',
    'Bossa Nova - The Girl from Ipanema',
    'Samba de Janeiro',
    'Mas Que Nada - Sergio Mendes',
    'Traditional Forró',
  ],
  decorationIdeas: [
    'Green, yellow, and blue flag colors',
    'Carnival masks and feathers',
    'Tropical flowers and palm leaves',
    'Football/soccer theme',
    'Beach-inspired elements',
  ],
  conversationStarters: [
    'Have you experienced Brazilian Carnival?',
    'What\'s your favorite Brazilian dish?',
    'Which Brazilian city would you most like to visit?',
    'Do you follow Brazilian football?',
    'Have you tried a caipirinha?',
  ],
  quiz: [
    {
      id: 'brazil-q1',
      question: 'What is the capital of Brazil?',
      options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
      correctAnswer: 2,
    },
    {
      id: 'brazil-q2',
      question: 'What language is spoken in Brazil?',
      options: ['Spanish', 'Portuguese', 'French', 'Italian'],
      correctAnswer: 1,
    },
    {
      id: 'brazil-q3',
      question: 'How many times has Brazil won the FIFA World Cup?',
      options: ['3', '4', '5', '6'],
      correctAnswer: 2,
    },
    {
      id: 'brazil-q4',
      question: 'What is Brazil\'s national cocktail?',
      options: ['Mojito', 'Margarita', 'Caipirinha', 'Piña Colada'],
      correctAnswer: 2,
    },
    {
      id: 'brazil-q5',
      question: 'What percentage of the Amazon rainforest is in Brazil?',
      options: ['40%', '50%', '60%', '70%'],
      correctAnswer: 2,
    },
    {
      id: 'brazil-q6',
      question: 'What is Brazil\'s national dish?',
      options: ['Paella', 'Feijoada', 'Ceviche', 'Tamales'],
      correctAnswer: 1,
    },
    {
      id: 'brazil-q7',
      question: 'When did Brazil abolish slavery?',
      options: ['1865', '1878', '1888', '1898'],
      correctAnswer: 2,
    },
    {
      id: 'brazil-q8',
      question: 'What Brazilian martial art was developed by the Gracie family?',
      options: ['Capoeira', 'Brazilian Jiu-Jitsu', 'Muay Thai', 'Krav Maga'],
      correctAnswer: 1,
    },
    {
      id: 'brazil-q9',
      question: 'Which city hosts the world\'s largest Carnival celebration?',
      options: ['São Paulo', 'Salvador', 'Rio de Janeiro', 'Brasília'],
      correctAnswer: 2,
    },
    {
      id: 'brazil-q10',
      question: 'What is Brazil\'s ranking by country size in the world?',
      options: ['3rd', '4th', '5th', '6th'],
      correctAnswer: 2,
    },
  ],
  coordinates: { x: 28, y: 15 },
};
