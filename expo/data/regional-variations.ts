import { DishVariation } from '@/types';

/**
 * Regional variations: same dish concept, different countries.
 * Shows how food travels and evolves across cultures.
 */
export const regionalVariations: DishVariation[] = [
  {
    dishName: { en: 'Dumplings', sv: 'Knyten', es: 'Empanadillas', fr: 'Raviolis', de: 'Teigtaschen' },
    countries: [
      { countryId: 'china', localName: { en: 'Jiaozi' }, description: { en: 'Thin wheat wrappers with pork/vegetable filling, steamed or pan-fried' } },
      { countryId: 'japan', localName: { en: 'Gyoza' }, description: { en: 'Pan-fried with thinner wrappers, dipped in soy-vinegar sauce' } },
      { countryId: 'south-korea', localName: { en: 'Mandu' }, description: { en: 'Often larger, sometimes with kimchi filling' } },
      { countryId: 'poland', localName: { en: 'Pierogi' }, description: { en: 'Boiled or pan-fried with potato, cheese, or sauerkraut' } },
      { countryId: 'georgia', localName: { en: 'Khinkali' }, description: { en: 'Large soup dumplings with spiced meat filling' } },
      { countryId: 'nepal', localName: { en: 'Momo' }, description: { en: 'Steamed with spiced buffalo or vegetable filling, served with tomato chutney' } },
      { countryId: 'turkey', localName: { en: 'Manti' }, description: { en: 'Tiny dumplings with yogurt and spiced butter sauce' } },
    ],
  },
  {
    dishName: { en: 'Flatbread', sv: 'Tunnbröd', es: 'Pan plano', fr: 'Pain plat', de: 'Fladenbrot' },
    countries: [
      { countryId: 'india', localName: { en: 'Naan / Roti' }, description: { en: 'Leavened (naan) or unleavened (roti), baked in tandoor or on griddle' } },
      { countryId: 'mexico', localName: { en: 'Tortilla' }, description: { en: 'Corn or wheat flour, pressed thin, base for tacos and burritos' } },
      { countryId: 'ethiopia', localName: { en: 'Injera' }, description: { en: 'Spongy sourdough teff flatbread, doubles as plate and utensil' } },
      { countryId: 'turkey', localName: { en: 'Pide' }, description: { en: 'Boat-shaped, topped with cheese, egg, or minced meat' } },
      { countryId: 'italy', localName: { en: 'Focaccia' }, description: { en: 'Olive oil-rich, dimpled, often with herbs and salt' } },
      { countryId: 'iran', localName: { en: 'Lavash' }, description: { en: 'Paper-thin, baked on hot stone, versatile wrap' } },
      { countryId: 'sweden', localName: { en: 'Tunnbröd' }, description: { en: 'Thin soft bread, traditionally with reindeer or herring' } },
    ],
  },
  {
    dishName: { en: 'Rice & Beans', sv: 'Ris och bönor', es: 'Arroz con frijoles', fr: 'Riz et haricots', de: 'Reis und Bohnen' },
    countries: [
      { countryId: 'brazil', localName: { en: 'Arroz e Feijão' }, description: { en: 'Black beans with white rice, served at every meal' } },
      { countryId: 'cuba', localName: { en: 'Moros y Cristianos' }, description: { en: 'Black beans cooked into the rice, seasoned with cumin' } },
      { countryId: 'jamaica', localName: { en: 'Rice and Peas' }, description: { en: 'Kidney beans cooked in coconut milk with scotch bonnet' } },
      { countryId: 'costa-rica', localName: { en: 'Gallo Pinto' }, description: { en: 'Day-old rice fried with black beans and Lizano sauce' } },
      { countryId: 'nigeria', localName: { en: 'Jollof Rice' }, description: { en: 'Rice cooked in tomato-pepper sauce with beans on the side' } },
      { countryId: 'india', localName: { en: 'Rajma Chawal' }, description: { en: 'Kidney bean curry served over basmati rice' } },
    ],
  },
  {
    dishName: { en: 'Meat on a Stick', sv: 'Kött på pinne', es: 'Carne en pincho', fr: 'Brochette', de: 'Fleischspieß' },
    countries: [
      { countryId: 'turkey', localName: { en: 'Şiş Kebab' }, description: { en: 'Marinated lamb cubes grilled on skewers' } },
      { countryId: 'japan', localName: { en: 'Yakitori' }, description: { en: 'Chicken pieces grilled over charcoal with tare sauce' } },
      { countryId: 'brazil', localName: { en: 'Churrasco' }, description: { en: 'Large cuts rotisserie-grilled, sliced tableside' } },
      { countryId: 'nigeria', localName: { en: 'Suya' }, description: { en: 'Spiced peanut-crusted beef, grilled over coals' } },
      { countryId: 'indonesia', localName: { en: 'Satay' }, description: { en: 'Thin meat strips with sweet peanut dipping sauce' } },
      { countryId: 'south-africa', localName: { en: 'Sosatie' }, description: { en: 'Cape Malay marinated lamb with dried apricots' } },
      { countryId: 'greece', localName: { en: 'Souvlaki' }, description: { en: 'Pork or chicken cubes with lemon, oregano, served in pita' } },
    ],
  },
  {
    dishName: { en: 'Stuffed Pastry', sv: 'Fylld bakverk', es: 'Empanada', fr: 'Chausson', de: 'Gefülltes Gebäck' },
    countries: [
      { countryId: 'argentina', localName: { en: 'Empanada' }, description: { en: 'Baked or fried half-moon pastries with beef, onion, egg' } },
      { countryId: 'india', localName: { en: 'Samosa' }, description: { en: 'Triangular crispy pastry with spiced potato filling' } },
      { countryId: 'united-kingdom', localName: { en: 'Cornish Pasty' }, description: { en: 'Crimped pastry with beef, potato, swede, onion' } },
      { countryId: 'jamaica', localName: { en: 'Jamaican Patty' }, description: { en: 'Turmeric-yellow flaky crust with spiced beef' } },
      { countryId: 'nigeria', localName: { en: 'Meat Pie' }, description: { en: 'Flaky pastry with minced meat and potato filling' } },
      { countryId: 'lebanon', localName: { en: 'Fatayer' }, description: { en: 'Triangular pies with spinach, meat, or cheese' } },
    ],
  },
  {
    dishName: { en: 'Fermented Cabbage', sv: 'Jäst kål', es: 'Col fermentada', fr: 'Chou fermenté', de: 'Sauerkraut' },
    countries: [
      { countryId: 'south-korea', localName: { en: 'Kimchi' }, description: { en: 'Napa cabbage with gochugaru, garlic, ginger, fish sauce' } },
      { countryId: 'germany', localName: { en: 'Sauerkraut' }, description: { en: 'Shredded cabbage fermented with salt, tangy and mild' } },
      { countryId: 'poland', localName: { en: 'Kiszona Kapusta' }, description: { en: 'Similar to sauerkraut, used in bigos (hunter stew)' } },
      { countryId: 'china', localName: { en: 'Suancai' }, description: { en: 'Pickled mustard greens, base for soups and stir-fries' } },
    ],
  },
  {
    dishName: { en: 'Sweet Filled Pastry', sv: 'Söt fylld bakverk', es: 'Pastel dulce', fr: 'Pâtisserie fourrée', de: 'Süßes Gebäck' },
    countries: [
      { countryId: 'france', localName: { en: 'Croissant / Pain au chocolat' }, description: { en: 'Buttery laminated dough, plain or with chocolate' } },
      { countryId: 'turkey', localName: { en: 'Baklava' }, description: { en: 'Layered phyllo with nuts and honey syrup' } },
      { countryId: 'italy', localName: { en: 'Cannoli' }, description: { en: 'Crispy fried tubes filled with sweet ricotta cream' } },
      { countryId: 'portugal', localName: { en: 'Pastel de Nata' }, description: { en: 'Egg custard tart in crispy puff pastry' } },
      { countryId: 'japan', localName: { en: 'Taiyaki' }, description: { en: 'Fish-shaped cake filled with red bean paste' } },
      { countryId: 'austria', localName: { en: 'Apfelstrudel' }, description: { en: 'Paper-thin pastry rolled around apple and cinnamon' } },
    ],
  },
  {
    dishName: { en: 'Spicy Stew/Curry', sv: 'Kryddig gryta', es: 'Guiso picante', fr: 'Ragoût épicé', de: 'Scharfer Eintopf' },
    countries: [
      { countryId: 'india', localName: { en: 'Curry' }, description: { en: 'Spice-rich sauces with regional variations across the subcontinent' } },
      { countryId: 'thailand', localName: { en: 'Kaeng' }, description: { en: 'Coconut-based curries with lemongrass, galangal, kaffir lime' } },
      { countryId: 'ethiopia', localName: { en: 'Wot/Wat' }, description: { en: 'Berbere-spiced stew with meat or lentils on injera' } },
      { countryId: 'morocco', localName: { en: 'Tagine' }, description: { en: 'Slow-cooked in clay pot with preserved lemon and olives' } },
      { countryId: 'hungary', localName: { en: 'Gulyás (Goulash)' }, description: { en: 'Paprika-rich beef stew with potatoes' } },
      { countryId: 'jamaica', localName: { en: 'Curry Goat' }, description: { en: 'Slow-cooked goat in Jamaican curry spices with scotch bonnet' } },
    ],
  },
];
