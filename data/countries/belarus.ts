import { Country } from '@/types';

export const belarus: Country = {
  id: 'belarus',
  name: 'Belarus',
  code: 'BY',
  continent: 'Europe',
  flag: '🇧🇾',
  landscapeImage: 'https://images.unsplash.com/photo-1597933534414-18662a97c3db?w=800',
  description:
    'Belarus is a landlocked country in Eastern Europe known for vast forests, Soviet-era architecture, and rich folk traditions.',
  quickFacts: [
    { label: 'Capital', value: 'Minsk' },
    { label: 'Population', value: '9.4 million' },
    { label: 'Official Languages', value: 'Belarusian, Russian' },
    { label: 'Currency', value: 'Belarusian Ruble' },
    { label: 'Area', value: '207,600 km²' },
  ],
  facts: [
    'About 40% of Belarus is covered by forests',
    'The Białowieża Forest is one of Europe’s last primeval forests',
    'Belarus has four UNESCO World Heritage Sites',
    'The country is sometimes called the “lungs of Europe” due to its extensive forests',
  ],
  foodCulture:
    'Belarusian cuisine features hearty dishes with potatoes, meat, and mushrooms. Traditional recipes have been preserved for centuries.',

  // You can add history / innovations / mustVisit / travelEssentials later if you want — quiz must always be 10 ✅
  mainDish: {
    id: 'belarus-main',
    name: 'Draniki',
    description:
      'Belarusian potato pancakes: crisp edges, tender center, traditionally served with sour cream.',
    cookingTime: 35,
    servings: 4,
    dietType: 'vegetarian',
    ingredients: [
      { name: 'Potatoes (starchy, e.g., Russet)', amount: 1000, unit: 'g' },
      { name: 'Onion', amount: 1, unit: 'medium' },
      { name: 'Eggs', amount: 2, unit: 'whole' },
      { name: 'All-purpose flour', amount: 25, unit: 'g' }, // ~3 tbsp
      { name: 'Salt', amount: 1.25, unit: 'tsp' },
      { name: 'Black pepper', amount: 0.5, unit: 'tsp' },
      { name: 'Vegetable oil (for frying)', amount: 120, unit: 'ml' },
      { name: 'Sour cream (to serve)', amount: 200, unit: 'g' },
    ],
    steps: [
      'Prep: Peel potatoes. Grate potatoes on the fine side of a box grater (or use a food processor). Grate onion as well.',
      'Remove liquid: Transfer grated potato/onion to a clean kitchen towel and squeeze hard over a bowl. Keep squeezing until the mixture is fairly dry.',
      'Optional (better texture): Let the squeezed potato liquid sit 2 minutes so starch settles at the bottom. Pour off the water and add the starch back into the potato mixture.',
      'Mix batter: In a bowl, combine potato/onion mixture with eggs, flour, salt, and pepper. Stir until evenly mixed (it should be thick, spoonable).',
      'Heat pan: Heat 2–3 tbsp oil in a large frying pan over medium-high heat. Oil should shimmer but not smoke.',
      'Fry: Drop heaped tablespoons (about 2 tbsp each) into the pan and flatten to ~8–10 mm thick.',
      'Cook: Fry 3–4 minutes per side until deep golden and crisp. Adjust heat so they brown steadily without burning.',
      'Drain & repeat: Transfer to paper towels or a rack. Add a little more oil between batches as needed.',
      'Serve: Serve immediately with sour cream (and optional chopped dill or chives if you like).',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=600',
  },

  drinks: {
    alcoholic: 'Vodka, Krambambula (honey liqueur), Kvass',
    nonAlcoholic: 'Kvass, Kisel (berry drink), Black tea',
  },
  music: ['Traditional folk songs', 'Belarusian polkas', 'Modern Belarusian pop'],
  decorationIdeas: [
    'Red and green flag colors',
    'Traditional woven patterns',
    'Forest and nature themes',
    'Folk art elements',
  ],
  conversationStarters: [
    'Have you explored Eastern European cuisine?',
    'What do you know about primeval forests?',
    'Do you enjoy hearty comfort food?',
  ],

  // Fixed: expanded to EXACTLY 10 questions ✅
  quiz: [
    {
      id: 'belarus-q1',
      question: 'What is the capital of Belarus?',
      options: ['Kiev', 'Minsk', 'Warsaw', 'Vilnius'],
      correctAnswer: 1,
    },
    {
      id: 'belarus-q2',
      question: 'Which two languages are listed as official in Belarus?',
      options: [
        'Belarusian and Russian',
        'Polish and Belarusian',
        'Ukrainian and Russian',
        'Lithuanian and Belarusian',
      ],
      correctAnswer: 0,
    },
    {
      id: 'belarus-q3',
      question: 'Belarus is located in which continent?',
      options: ['Asia', 'Europe', 'Africa', 'South America'],
      correctAnswer: 1,
    },
    {
      id: 'belarus-q4',
      question: 'Belarus is landlocked. What does that mean?',
      options: [
        'It has no rivers',
        'It has no coastline',
        'It has only islands',
        'It is entirely mountainous',
      ],
      correctAnswer: 1,
    },
    {
      id: 'belarus-q5',
      question: 'About how much of Belarus is covered by forests (according to the facts above)?',
      options: ['10%', '25%', '40%', '75%'],
      correctAnswer: 2,
    },
    {
      id: 'belarus-q6',
      question: 'Which famous primeval forest is mentioned in Belarus-related facts?',
      options: ['Black Forest', 'Białowieża Forest', 'Sherwood Forest', 'Congo Rainforest'],
      correctAnswer: 1,
    },
    {
      id: 'belarus-q7',
      question: 'What is the name of Belarusian potato pancakes served with sour cream?',
      options: ['Pierogi', 'Draniki', 'Borscht', 'Goulash'],
      correctAnswer: 1,
    },
    {
      id: 'belarus-q8',
      question: 'What is the currency of Belarus?',
      options: ['Zloty', 'Belarusian Ruble', 'Euro', 'Hryvnia'],
      correctAnswer: 1,
    },
    {
      id: 'belarus-q9',
      question: 'Which ingredient is essential for traditional Draniki?',
      options: ['Rice', 'Potatoes', 'Corn', 'Couscous'],
      correctAnswer: 1,
    },
    {
      id: 'belarus-q10',
      question: 'Which of these is listed as a traditional drink in Belarus?',
      options: ['Matcha', 'Kvass', 'Bubble tea', 'Kombucha'],
      correctAnswer: 1,
    },
  ],

  coordinates: { x: 52, y: 54 },
};
