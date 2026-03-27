import { SeasonalCollection } from '@/types';

/**
 * Curated seasonal and holiday-themed food collections.
 * months array uses 1-12 (Jan-Dec).
 */
export const seasonalCollections: SeasonalCollection[] = [
  {
    id: 'lunar-new-year',
    name: { en: 'Lunar New Year', sv: 'Kinesiska nyåret', es: 'Año Nuevo Lunar', fr: 'Nouvel An lunaire', de: 'Mondneujahr' },
    description: { en: 'Celebrate with lucky dumplings, noodles, and festive dishes from across Asia', sv: 'Fira med knyten, nudlar och festliga rätter från hela Asien' },
    icon: 'star',
    months: [1, 2],
    countryIds: ['china', 'vietnam', 'south-korea', 'singapore', 'malaysia', 'thailand', 'indonesia'],
  },
  {
    id: 'ramadan',
    name: { en: 'Ramadan & Eid', sv: 'Ramadan & Eid', es: 'Ramadán y Eid', fr: 'Ramadan et Aïd', de: 'Ramadan & Eid' },
    description: { en: 'Traditional iftar dishes and Eid celebrations from the Muslim world', sv: 'Traditionella iftarrätter och Eid-firanden från den muslimska världen' },
    icon: 'moon',
    months: [3, 4],
    countryIds: ['turkey', 'morocco', 'egypt', 'saudi-arabia', 'pakistan', 'indonesia', 'iran', 'jordan', 'lebanon', 'bangladesh'],
  },
  {
    id: 'easter',
    name: { en: 'Easter & Spring', sv: 'Påsk & Vår', es: 'Pascua y Primavera', fr: 'Pâques et Printemps', de: 'Ostern & Frühling' },
    description: { en: 'Spring celebrations with lamb, eggs, and sweet breads from around the world' },
    icon: 'flower2',
    months: [3, 4],
    countryIds: ['italy', 'greece', 'spain', 'france', 'poland', 'ethiopia', 'sweden', 'united-kingdom', 'portugal'],
  },
  {
    id: 'summer-bbq',
    name: { en: 'Summer Grilling', sv: 'Sommargrillning', es: 'Parrilla de Verano', fr: 'Barbecue estival', de: 'Sommerliches Grillen' },
    description: { en: 'Fire up the grill with the world\'s best barbecue traditions' },
    icon: 'flame',
    months: [6, 7, 8],
    countryIds: ['brazil', 'argentina', 'united-states', 'south-korea', 'south-africa', 'australia', 'jamaica', 'turkey'],
  },
  {
    id: 'harvest-festival',
    name: { en: 'Harvest Festival', sv: 'Skördefest', es: 'Festival de la Cosecha', fr: 'Fête des récoltes', de: 'Erntefest' },
    description: { en: 'Autumn harvest dishes celebrating the bounty of the season' },
    icon: 'wheat',
    months: [9, 10, 11],
    countryIds: ['united-states', 'canada', 'germany', 'china', 'india', 'japan', 'south-korea', 'ghana'],
  },
  {
    id: 'diwali',
    name: { en: 'Diwali', sv: 'Diwali', es: 'Diwali', fr: 'Diwali', de: 'Diwali' },
    description: { en: 'Festival of lights featuring sweets, snacks, and festive Indian cuisine' },
    icon: 'sparkles',
    months: [10, 11],
    countryIds: ['india', 'nepal', 'sri-lanka', 'singapore', 'malaysia'],
  },
  {
    id: 'christmas',
    name: { en: 'Christmas & Winter', sv: 'Jul & Vinter', es: 'Navidad e Invierno', fr: 'Noël et Hiver', de: 'Weihnachten & Winter' },
    description: { en: 'Festive holiday dishes from Christmas celebrations around the globe', sv: 'Festliga rätter från julfiranden runt om i världen' },
    icon: 'snowflake',
    months: [12, 1],
    countryIds: ['sweden', 'germany', 'italy', 'france', 'united-kingdom', 'mexico', 'philippines', 'poland', 'portugal', 'spain', 'austria', 'norway'],
  },
  {
    id: 'street-food',
    name: { en: 'World Street Food', sv: 'Gatumat i världen', es: 'Comida callejera mundial', fr: 'Street food du monde', de: 'Weltstraßenküche' },
    description: { en: 'Quick, delicious street food favorites from bustling markets worldwide' },
    icon: 'store',
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    countryIds: ['thailand', 'vietnam', 'mexico', 'india', 'turkey', 'japan', 'south-korea', 'egypt', 'morocco', 'colombia', 'peru', 'nigeria'],
  },
  {
    id: 'comfort-food',
    name: { en: 'Comfort Food', sv: 'Husmanskost', es: 'Comida reconfortante', fr: 'Cuisine réconfortante', de: 'Soulfood' },
    description: { en: 'Warming, hearty dishes that feel like a hug from home' },
    icon: 'soup',
    months: [10, 11, 12, 1, 2],
    countryIds: ['united-kingdom', 'united-states', 'japan', 'italy', 'france', 'south-korea', 'hungary', 'poland', 'germany', 'ireland'],
  },
  {
    id: 'vegetarian-world',
    name: { en: 'Vegetarian World Tour', sv: 'Vegetarisk världsresa', es: 'Tour vegetariano mundial', fr: 'Tour végétarien mondial', de: 'Vegetarische Weltreise' },
    description: { en: 'Plant-based masterpieces from cultures with rich vegetarian traditions' },
    icon: 'leaf',
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    countryIds: ['india', 'ethiopia', 'lebanon', 'thailand', 'mexico', 'japan', 'italy', 'greece', 'israel'],
  },
];
