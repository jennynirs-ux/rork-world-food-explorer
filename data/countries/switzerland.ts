import { Country } from '@/types';

export const switzerland: Country = {
  id: 'switzerland',
  name: 'Switzerland',
  code: 'CH',
  continent: 'Europe',
  flag: '🇨🇭',
  landscapeImage: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800',
  description: 'Switzerland is a mountainous Central European country known for its stunning Alps, pristine lakes, charming villages, and world-famous chocolate and cheese. Home to numerous international organizations, it has maintained neutrality for centuries.',
  quickFacts: [
    { label: 'Capital', value: 'Bern' },
    { label: 'Population', value: '8.7 million' },
    { label: 'Official Languages', value: 'German, French, Italian, Romansh' },
    { label: 'Currency', value: 'Swiss Franc (CHF)' },
    { label: 'Area', value: '41,285 km²' },
  ],
  facts: [
    'Switzerland has four official languages and 26 cantons (states)',
    'The country is famous for its neutrality - hasn\'t been in a war since 1815',
    'Swiss watches are world-renowned for precision and craftsmanship',
    'Switzerland produces about 180,000 tons of chocolate annually',
    'The Swiss train system is one of the most efficient in the world',
    'Switzerland is home to 13 UNESCO World Heritage Sites',
    'The Swiss invented milk chocolate, the Swiss Army knife, and Velcro',
    'Geneva hosts more international organizations than any other city',
  ],
  foodCulture: 'Swiss cuisine is hearty and comforting, varying by region and language. Cheese and chocolate are national treasures. Fondue and raclette are iconic dishes perfect for cold mountain evenings. Each region has distinct culinary traditions influenced by neighboring countries.',
  history: [
    {
      year: '1291',
      title: 'Swiss Confederation Founded',
      description: 'Three cantons formed an alliance, laying the foundation for modern Switzerland on August 1st (Swiss National Day).'
    },
    {
      year: '1648',
      title: 'Independence Recognized',
      description: 'The Peace of Westphalia recognized Swiss independence from the Holy Roman Empire.'
    },
    {
      year: '1815',
      title: 'Permanent Neutrality',
      description: 'The Congress of Vienna recognized Switzerland\'s permanent neutrality, which continues today.'
    },
    {
      year: '1848',
      title: 'Modern Constitution',
      description: 'Switzerland adopted a federal constitution, establishing the modern Swiss Confederation structure.'
    },
    {
      year: '1971',
      title: 'Women\'s Suffrage',
      description: 'Swiss women gained the right to vote at the federal level (late compared to other countries).'
    },
  ],
  travelEssentials: [
    { item: 'Visa', description: 'Schengen visa rules apply. Many nationalities can visit visa-free for up to 90 days.' },
    { item: 'Best time to visit', description: 'December to April for skiing; June to September for hiking' },
    { item: 'Transportation', description: 'Excellent train network. Swiss Travel Pass recommended for tourists.' },
    { item: 'Language', description: 'Varies by region: German (north/east), French (west), Italian (south). English widely spoken.' },
    { item: 'Safety', description: 'One of the safest countries in the world. Very low crime rates.' },
  ],
  mainDish: {
    id: 'switzerland-fondue',
    name: 'Cheese Fondue',
    description: 'Traditional Swiss dish of melted cheese served in a communal pot. Diners dip bread cubes into the cheese using long forks. A social and warming meal perfect for cold evenings.',
    cookingTime: 30,
    servings: 4,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Gruyère cheese', amount: 200, unit: 'g' },
      { name: 'Emmental cheese', amount: 200, unit: 'g' },
      { name: 'Dry white wine', amount: 300, unit: 'ml' },
      { name: 'Garlic', amount: 1, unit: 'clove' },
      { name: 'Cornstarch', amount: 2, unit: 'tbsp' },
      { name: 'Kirsch (cherry brandy)', amount: 2, unit: 'tbsp' },
      { name: 'Nutmeg', amount: 0.25, unit: 'tsp' },
      { name: 'Black pepper', amount: 0.5, unit: 'tsp' },
      { name: 'Crusty bread', amount: 400, unit: 'g' },
    ],
    steps: [
      'Cut bread into bite-sized cubes, leave crust on one side of each piece',
      'Grate both cheeses and toss with cornstarch',
      'Rub the inside of fondue pot with cut garlic clove',
      'Pour wine into pot and heat over medium heat until simmering',
      'Gradually add cheese, stirring constantly in a figure-8 pattern',
      'Once cheese is melted and smooth, stir in kirsch',
      'Season with nutmeg and pepper',
      'Keep fondue warm over burner, stir occasionally',
      'Dip bread cubes into cheese, stirring the fondue as you go',
      'Traditional rule: if you drop your bread, you buy the next round!',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=600',
  },
  drinks: {
    alcoholic: 'Swiss wine, Kirsch (cherry brandy), Absinth',
    nonAlcoholic: 'Rivella (Swiss soft drink), Hot chocolate, Alpine herb tea',
  },
  music: ['Alphorn music', 'Yodeling', 'Swiss folk music', 'Classical music'],
  decorationIdeas: [
    'Red and white (Swiss flag colors)',
    'Edelweiss flowers',
    'Cowbells',
    'Alpine theme with mountains',
    'Swiss cross motifs',
    'Wooden chalets and ski lodge atmosphere',
  ],
  conversationStarters: [
    'Would you prefer skiing in the Swiss Alps or exploring Swiss cities?',
    'Have you tried authentic Swiss chocolate? What\'s your favorite brand?',
    'Would you take the scenic train routes through the mountains?',
    'Cheese fondue or chocolate fondue - which would you choose?',
  ],
  quiz: [
    {
      id: 'switzerland-q1',
      question: 'What is Switzerland\'s capital city?',
      options: ['Zurich', 'Geneva', 'Bern', 'Basel'],
      correctAnswer: 2,
    },
    {
      id: 'switzerland-q2',
      question: 'How many official languages does Switzerland have?',
      options: ['1', '2', '3', '4'],
      correctAnswer: 3,
    },
    {
      id: 'switzerland-q3',
      question: 'What two cheeses are traditionally used in Swiss fondue?',
      options: ['Cheddar and Mozzarella', 'Gruyère and Emmental', 'Brie and Camembert', 'Parmesan and Pecorino'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 48, y: 47 },
};
