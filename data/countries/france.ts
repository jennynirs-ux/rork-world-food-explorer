import { Country } from '@/types';

export const france: Country = {
  id: 'france',
  name: 'France',
  code: 'FR',
  continent: 'Europe',
  flag: '🇫🇷',
  landscapeImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
  description: 'France is a country of fine arts, fine wines, and fine cuisine. From the romance of Paris to the beaches of the Riviera, it offers unparalleled culture, history, and gastronomy.',
  quickFacts: [
    { label: 'Capital', value: 'Paris' },
    { label: 'Population', value: '67.4 million' },
    { label: 'Official Language', value: 'French' },
    { label: 'Currency', value: 'Euro (€)' },
    { label: 'Area', value: '643,801 km²' },
  ],
  facts: [
    'France is the most visited country in the world with over 89 million tourists annually',
    'The Louvre in Paris is the world\'s most visited art museum',
    'France produces over 400 different varieties of cheese',
    'The French invented the metric system',
    'France has won more Nobel Prizes for Literature than any other country',
    'The croissant was actually invented in Austria, not France',
    'France has more time zones than any other country (12)',
    'It is illegal to name a pig "Napoleon" in France',
  ],
  foodCulture: 'French cuisine is known for its finesse and flavor. Meals are a social affair, often lasting several hours. The French value quality ingredients, proper technique, and presentation. Wine is an integral part of meals, and bread is served with almost every dish.',
  history: [
    {
      year: '843',
      title: 'Treaty of Verdun',
      description: 'The Carolingian Empire was divided, creating the foundation for modern France.'
    },
    {
      year: '1789',
      title: 'French Revolution',
      description: 'The overthrow of the monarchy led to the Declaration of the Rights of Man and ideals of liberty, equality, and fraternity.'
    },
    {
      year: '1804',
      title: 'Napoleonic Era',
      description: 'Napoleon Bonaparte crowned himself Emperor and transformed Europe through military conquest and legal reform.'
    },
    {
      year: '1944-Present',
      title: 'Modern France',
      description: 'After liberation in WWII, France became a founding member of the EU and a major global power.'
    },
  ],
  innovations: [
    {
      name: 'Photography',
      year: '1826',
      description: 'Nicéphore Niépce created the first permanent photograph, revolutionizing visual documentation.'
    },
    {
      name: 'Cinema',
      year: '1895',
      description: 'The Lumière brothers invented the cinematograph, giving birth to the film industry.'
    },
    {
      name: 'Pasteurization',
      year: '1864',
      description: 'Louis Pasteur developed this process to kill harmful bacteria in food and beverages.'
    },
    {
      name: 'Hot Air Balloon',
      year: '1783',
      description: 'The Montgolfier brothers launched the first manned hot air balloon flight.'
    },
  ],
  mustVisit: [
    { name: 'Eiffel Tower', description: 'Iconic iron lattice tower in Paris, symbol of France and masterpiece of 19th-century engineering.' },
    { name: 'Palace of Versailles', description: 'Opulent royal château with magnificent gardens, representing the height of French monarchy.' },
    { name: 'Mont Saint-Michel', description: 'Medieval abbey perched on a tidal island, one of France\'s most recognizable landmarks.' },
    { name: 'French Riviera', description: 'Stunning Mediterranean coastline with glamorous beaches, Nice, Cannes, and Monaco.' },
    { name: 'Loire Valley Châteaux', description: 'Historic region with over 300 magnificent castles and vineyards.' }
  ],
  travelEssentials: [
    { item: 'Best time to visit', description: 'April-June and September-October for pleasant weather and fewer crowds.' },
    { item: 'Basic French phrases', description: 'Learning "Bonjour", "Merci", and "Pardon" goes a long way.' },
    { item: 'Comfortable walking shoes', description: 'Paris and other cities require lots of walking on cobblestones.' },
    { item: 'Museum pass', description: 'Paris Museum Pass saves money and time at major attractions.' },
    { item: 'Power adapter', description: 'France uses Type E plugs with 230V.' },
    { item: 'Cash for small purchases', description: 'Some cafés and markets prefer cash for small transactions.' }
  ],
  mainDish: {
    id: 'france-main',
    name: 'Coq au Vin',
    description: 'Classic French dish of chicken braised in red wine with mushrooms, onions, and bacon',
    cookingTime: 90,
    servings: 6,
    dietType: 'meat',
    ingredients: [
      { name: 'Chicken pieces', amount: 1.5, unit: 'kg' },
      { name: 'Red wine (Burgundy)', amount: 750, unit: 'ml' },
      { name: 'Bacon lardons', amount: 200, unit: 'g' },
      { name: 'Pearl onions', amount: 12, unit: 'whole' },
      { name: 'Button mushrooms', amount: 300, unit: 'g' },
      { name: 'Garlic cloves', amount: 3, unit: 'whole' },
      { name: 'Flour', amount: 3, unit: 'tbsp' },
      { name: 'Chicken stock', amount: 250, unit: 'ml' },
      { name: 'Tomato paste', amount: 2, unit: 'tbsp' },
      { name: 'Fresh thyme', amount: 3, unit: 'sprigs' },
    ],
    steps: [
      'Season chicken pieces with salt and pepper',
      'In a large Dutch oven, cook bacon until crispy, then remove',
      'Brown chicken pieces in bacon fat on all sides, then remove',
      'Add pearl onions and mushrooms, sauté until golden',
      'Add garlic and flour, cook for 1 minute',
      'Pour in red wine and stock, add tomato paste and thyme',
      'Return chicken and bacon to pot, bring to simmer',
      'Cover and cook in 325°F oven for 1 hour until chicken is tender',
      'Remove chicken, reduce sauce if needed',
      'Serve with crusty bread or mashed potatoes',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600',
  },
  dessert: {
    id: 'france-dessert',
    name: 'Crème Brûlée',
    description: 'Silky vanilla custard topped with caramelized sugar crust',
    cookingTime: 60,
    servings: 6,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Heavy cream', amount: 500, unit: 'ml' },
      { name: 'Egg yolks', amount: 6, unit: 'large' },
      { name: 'Granulated sugar', amount: 100, unit: 'g' },
      { name: 'Vanilla bean', amount: 1, unit: 'whole' },
      { name: 'Extra sugar for topping', amount: 6, unit: 'tsp' },
    ],
    steps: [
      'Preheat oven to 325°F',
      'Split vanilla bean and scrape seeds into cream',
      'Heat cream with vanilla until just simmering',
      'Whisk egg yolks with sugar until pale',
      'Slowly pour hot cream into eggs while whisking',
      'Strain mixture and divide among ramekins',
      'Place ramekins in baking dish, add hot water halfway up sides',
      'Bake 30-35 minutes until set but still jiggly',
      'Refrigerate at least 2 hours',
      'Before serving, sprinkle sugar on top and caramelize with torch',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600',
  },
  drinks: {
    alcoholic: 'Champagne, Bordeaux wine, Cognac, Calvados',
    nonAlcoholic: 'Café au lait, Perrier, Fresh pressed apple cider, Citron pressé',
  },
  music: [
    'La Vie en Rose - Édith Piaf',
    'Ne Me Quitte Pas - Jacques Brel',
    'Non, Je Ne Regrette Rien - Édith Piaf',
    'Sous le Ciel de Paris',
    'Autumn Leaves (Les Feuilles Mortes)',
  ],
  decorationIdeas: [
    'Eiffel Tower miniatures',
    'French flag colors (blue, white, red)',
    'Lavender bunches',
    'Wine bottles and grapes',
    'Parisian café aesthetic with bistro chairs',
  ],
  conversationStarters: [
    'Have you visited Paris? What was your favorite part?',
    'What French food would you most like to try?',
    'Do you prefer red wine or white wine?',
    'Which French region interests you most?',
    'Have you seen any classic French films?',
  ],
  quiz: [
    {
      id: 'france-q1',
      question: 'What is the capital of France?',
      options: ['Lyon', 'Marseille', 'Paris', 'Nice'],
      correctAnswer: 2,
    },
    {
      id: 'france-q2',
      question: 'Which museum houses the Mona Lisa?',
      options: ['Musée d\'Orsay', 'The Louvre', 'Centre Pompidou', 'Musée Rodin'],
      correctAnswer: 1,
    },
    {
      id: 'france-q3',
      question: 'What is France\'s national motto?',
      options: ['God Save the Queen', 'E Pluribus Unum', 'Liberty, Equality, Fraternity', 'In God We Trust'],
      correctAnswer: 2,
    },
    {
      id: 'france-q4',
      question: 'Which cheese is NOT French?',
      options: ['Brie', 'Camembert', 'Gouda', 'Roquefort'],
      correctAnswer: 2,
    },
    {
      id: 'france-q5',
      question: 'What year did the French Revolution begin?',
      options: ['1776', '1789', '1804', '1815'],
      correctAnswer: 1,
    },
  ],
  coordinates: { x: 48, y: 46 },
};
