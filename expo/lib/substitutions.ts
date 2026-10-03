import { TranslatedString, IngredientSubstitution } from '@/types';

type Sub = IngredientSubstitution;

type SubstitutionEntry = {
  /** English keywords/phrases (singular, lowercase, space separated). */
  keys: string[];
  /** Suggestions. An empty list means "known ingredient, no sensible substitute". */
  subs: Sub[];
  /** Only applies when one of these words appears anywhere in the ingredient text. */
  requires?: string[];
  /** Never applies when one of these words appears anywhere in the ingredient text. */
  skipIf?: string[];
};

// ── Notes (shown under a suggestion, all nine languages) ─────────
const NOTE = {
  vegetarian: { en: 'Vegetarian option', sv: 'Vegetariskt alternativ', es: 'Opción vegetariana', fr: 'Option végétarienne', de: 'Vegetarische Alternative', it: 'Opzione vegetariana', pl: 'Opcja wegetariańska', nl: 'Vegetarische optie', pt: 'Opção vegetariana' },
  vegan: { en: 'Vegan option', sv: 'Veganskt alternativ', es: 'Opción vegana', fr: 'Option végane', de: 'Vegane Alternative', it: 'Opzione vegana', pl: 'Opcja wegańska', nl: 'Veganistische optie', pt: 'Opção vegana' },
  plantBased: { en: 'Plant-based option', sv: 'Växtbaserat alternativ', es: 'Opción vegetal', fr: 'Option végétale', de: 'Pflanzliche Alternative', it: 'Opzione vegetale', pl: 'Opcja roślinna', nl: 'Plantaardige optie', pt: 'Opção vegetal' },
  dairyFree: { en: 'Dairy-free option', sv: 'Mejerifritt alternativ', es: 'Opción sin lácteos', fr: 'Option sans produits laitiers', de: 'Milchfreie Alternative', it: 'Opzione senza latticini', pl: 'Opcja bez nabiału', nl: 'Zuivelvrije optie', pt: 'Opção sem laticínios' },
  glutenFree: { en: 'Gluten-free option', sv: 'Glutenfritt alternativ', es: 'Opción sin gluten', fr: 'Option sans gluten', de: 'Glutenfreie Alternative', it: 'Opzione senza glutine', pl: 'Opcja bezglutenowa', nl: 'Glutenvrije optie', pt: 'Opção sem glúten' },
  nutFree: { en: 'Nut-free option', sv: 'Nötfritt alternativ', es: 'Opción sin frutos secos', fr: 'Option sans fruits à coque', de: 'Nussfreie Alternative', it: 'Opzione senza frutta a guscio', pl: 'Opcja bez orzechów', nl: 'Notenvrije optie', pt: 'Opção sem castanhas' },
  eggFree: { en: 'Egg-free option', sv: 'Äggfritt alternativ', es: 'Opción sin huevo', fr: 'Option sans œuf', de: 'Eifreie Alternative', it: 'Opzione senza uova', pl: 'Opcja bez jajek', nl: 'Eivrije optie', pt: 'Opção sem ovo' },
  lowCarb: { en: 'Low-carb option', sv: 'Lågkolhydratalternativ', es: 'Opción baja en carbohidratos', fr: 'Option pauvre en glucides', de: 'Kohlenhydratarme Alternative', it: 'Opzione povera di carboidrati', pl: 'Opcja niskowęglowodanowa', nl: 'Koolhydraatarme optie', pt: 'Opção com menos carboidratos' },
  moreAvailable: { en: 'More widely available', sv: 'Lättare att få tag på', es: 'Más fácil de encontrar', fr: 'Plus facile à trouver', de: 'Leichter erhältlich', it: 'Più facile da trovare', pl: 'Łatwiej dostępne', nl: 'Makkelijker verkrijgbaar', pt: 'Mais fácil de encontrar' },
  deeperFlavor: { en: 'Deeper, savory flavor', sv: 'Djupare, fylligare smak', es: 'Sabor más profundo y sabroso', fr: 'Goût plus profond et plus savoureux', de: 'Tieferer, herzhafter Geschmack', it: 'Sapore più intenso e sapido', pl: 'Głębszy, bardziej wytrawny smak', nl: 'Diepere, hartigere smaak', pt: 'Sabor mais intenso e saboroso' },
  similarTextureFlavor: { en: 'Similar texture and flavor', sv: 'Liknande konsistens och smak', es: 'Textura y sabor similares', fr: 'Texture et goût similaires', de: 'Ähnliche Konsistenz, ähnlicher Geschmack', it: 'Consistenza e sapore simili', pl: 'Podobna konsystencja i smak', nl: 'Vergelijkbare textuur en smaak', pt: 'Textura e sabor parecidos' },
  similarTexture: { en: 'Similar texture', sv: 'Liknande konsistens', es: 'Textura similar', fr: 'Texture similaire', de: 'Ähnliche Konsistenz', it: 'Consistenza simile', pl: 'Podobna konsystencja', nl: 'Vergelijkbare textuur', pt: 'Textura parecida' },
  offTheHeat: { en: 'Stir in off the heat so it does not split', sv: 'Rör ner utanför värmen så att den inte skär sig', es: 'Incorpóralo fuera del fuego para que no se corte', fr: 'Incorporez hors du feu pour éviter qu’il ne tranche', de: 'Erst nach dem Kochen unterrühren, damit er nicht gerinnt', it: 'Incorporalo a fuoco spento perché non si separi', pl: 'Dodaj po zdjęciu z ognia, żeby się nie zważył', nl: 'Van het vuur af erdoor roeren, zodat het niet schift', pt: 'Misture fora do fogo para não talhar' },
  mildCreamy: { en: 'Mild and creamy', sv: 'Mild och krämig', es: 'Suave y cremosa', fr: 'Douce et crémeuse', de: 'Mild und cremig', it: 'Delicata e cremosa', pl: 'Łagodna i kremowa', nl: 'Mild en romig', pt: 'Suave e cremosa' },
  richerSmoother: { en: 'Richer and smoother', sv: 'Fylligare och krämigare', es: 'Más rico y suave', fr: 'Plus riche et plus onctueux', de: 'Gehaltvoller und cremiger', it: 'Più ricco e vellutato', pl: 'Bogatszy i gładszy', nl: 'Rijker en zachter', pt: 'Mais rico e cremoso' },
  caramelNotes: { en: 'Similar caramel notes', sv: 'Liknande karamelltoner', es: 'Notas acarameladas similares', fr: 'Notes caramélisées similaires', de: 'Ähnliche Karamellnoten', it: 'Note di caramello simili', pl: 'Podobne karmelowe nuty', nl: 'Vergelijkbare karameltonen', pt: 'Notas de caramelo parecidas' },
  veganSweetener: { en: 'Vegan natural sweetener', sv: 'Veganskt, naturligt sötningsmedel', es: 'Endulzante natural vegano', fr: 'Édulcorant naturel végane', de: 'Veganes, natürliches Süßungsmittel', it: 'Dolcificante naturale vegano', pl: 'Wegański naturalny słodzik', nl: 'Veganistische natuurlijke zoetstof', pt: 'Adoçante natural vegano' },
  naturalSweetener: { en: 'Natural sweetener', sv: 'Naturligt sötningsmedel', es: 'Endulzante natural', fr: 'Édulcorant naturel', de: 'Natürliches Süßungsmittel', it: 'Dolcificante naturale', pl: 'Naturalny słodzik', nl: 'Natuurlijke zoetstof', pt: 'Adoçante natural' },
  cookingNotBaking: { en: 'For cooking, not baking', sv: 'För matlagning, inte bakning', es: 'Para cocinar, no para hornear', fr: 'Pour la cuisine, pas pour la pâtisserie', de: 'Zum Kochen, nicht zum Backen', it: 'Per cucinare, non per i dolci da forno', pl: 'Do gotowania, nie do pieczenia', nl: 'Om mee te koken, niet om mee te bakken', pt: 'Para cozinhar, não para assar' },
  lighterTang: { en: 'Lighter, similar tang', sv: 'Lättare, liknande syrlighet', es: 'Más ligero, con una acidez similar', fr: 'Plus léger, acidité similaire', de: 'Leichter, ähnlich säuerlich', it: 'Più leggero, acidità simile', pl: 'Lżejszy, podobnie kwaskowy', nl: 'Lichter, vergelijkbaar fris', pt: 'Mais leve, acidez parecida' },
  notDairyFree: { en: 'Not dairy-free', sv: 'Inte mejerifritt', es: 'Contiene lácteos', fr: 'Contient des produits laitiers', de: 'Nicht milchfrei', it: 'Contiene latticini', pl: 'Zawiera nabiał', nl: 'Niet zuivelvrij', pt: 'Contém laticínios' },
  veganRichness: { en: 'Vegan, similar richness', sv: 'Veganskt, liknande fyllighet', es: 'Vegana, igual de cremosa', fr: 'Végane, onctuosité similaire', de: 'Vegan, ähnlich gehaltvoll', it: 'Vegano, altrettanto cremoso', pl: 'Wegańskie, podobnie treściwe', nl: 'Veganistisch, vergelijkbaar romig', pt: 'Vegano, igualmente encorpado' },
  addsRichness: { en: 'Adds richness', sv: 'Ger fylligare smak', es: 'Aporta más cremosidad', fr: 'Apporte de l’onctuosité', de: 'Macht es gehaltvoller', it: 'Rende il piatto più ricco', pl: 'Dodaje treściwości', nl: 'Maakt het voller', pt: 'Deixa mais encorpado' },
  standFiveMinutes: { en: 'Let it stand for 5 minutes', sv: 'Låt stå i 5 minuter', es: 'Déjala reposar 5 minutos', fr: 'Laissez reposer 5 minutes', de: '5 Minuten stehen lassen', it: 'Lascia riposare 5 minuti', pl: 'Odstaw na 5 minut', nl: 'Laat 5 minuten staan', pt: 'Deixe descansar por 5 minutos' },
  cheesyFlavor: { en: 'For cheesy flavor', sv: 'För ostsmak', es: 'Para dar sabor a queso', fr: 'Pour un goût de fromage', de: 'Für käsigen Geschmack', it: 'Per un sapore di formaggio', pl: 'Dla serowego smaku', nl: 'Voor een kaasachtige smaak', pt: 'Para dar sabor de queijo' },
  similarTanginess: { en: 'Similar tanginess', sv: 'Liknande syrlighet', es: 'Acidez similar', fr: 'Acidité similaire', de: 'Ähnlich säuerlich', it: 'Acidità simile', pl: 'Podobna kwaskowatość', nl: 'Vergelijkbaar fris', pt: 'Acidez parecida' },
  vegetarianUmami: { en: 'Vegetarian option, similar umami', sv: 'Vegetariskt alternativ med liknande umami', es: 'Opción vegetariana con un umami similar', fr: 'Option végétarienne, umami similaire', de: 'Vegetarische Alternative mit ähnlichem Umami', it: 'Opzione vegetariana, umami simile', pl: 'Opcja wegetariańska o podobnym umami', nl: 'Vegetarische optie met vergelijkbare umami', pt: 'Opção vegetariana com umami parecido' },
  plantProtein: { en: 'Plant-based protein', sv: 'Växtbaserat protein', es: 'Proteína vegetal', fr: 'Protéines végétales', de: 'Pflanzliches Protein', it: 'Proteine vegetali', pl: 'Białko roślinne', nl: 'Plantaardige eiwitten', pt: 'Proteína vegetal' },
  leaner: { en: 'Leaner alternative', sv: 'Magrare alternativ', es: 'Alternativa más magra', fr: 'Alternative plus maigre', de: 'Magerere Alternative', it: 'Alternativa più magra', pl: 'Chudsza alternatywa', nl: 'Magerder alternatief', pt: 'Alternativa mais magra' },
  veganTexture: { en: 'Vegan option, similar texture', sv: 'Veganskt alternativ med liknande konsistens', es: 'Opción vegana con textura similar', fr: 'Option végane, texture similaire', de: 'Vegane Alternative mit ähnlicher Konsistenz', it: 'Opzione vegana, consistenza simile', pl: 'Opcja wegańska o podobnej konsystencji', nl: 'Veganistische optie met vergelijkbare textuur', pt: 'Opção vegana com textura parecida' },
  slicedTexture: { en: 'Similar texture when sliced', sv: 'Liknande konsistens i skivor', es: 'Textura similar en láminas', fr: 'Texture similaire une fois tranché', de: 'In Scheiben ähnliche Konsistenz', it: 'Consistenza simile se affettati', pl: 'Pokrojone mają podobną konsystencję', nl: 'Vergelijkbare textuur in plakjes', pt: 'Textura parecida quando fatiados' },
  forBrushing: { en: 'For brushing', sv: 'För pensling', es: 'Para pincelar', fr: 'Pour dorer', de: 'Zum Bestreichen', it: 'Per spennellare', pl: 'Do smarowania', nl: 'Om mee te bestrijken', pt: 'Para pincelar' },
  veganBaking: { en: 'Vegan baking substitute', sv: 'Veganskt alternativ vid bakning', es: 'Sustituto vegano para repostería', fr: 'Substitut végane pour la pâtisserie', de: 'Veganer Ersatz beim Backen', it: 'Sostituto vegano per i dolci', pl: 'Wegański zamiennik do wypieków', nl: 'Veganistische vervanger bij het bakken', pt: 'Substituto vegano para massas e bolos' },
  veganWhips: { en: 'Vegan, whips like egg whites', sv: 'Veganskt, går att vispa som äggvita', es: 'Vegano, se monta como las claras', fr: 'Végane, se monte comme des blancs', de: 'Vegan, lässt sich wie Eiweiß aufschlagen', it: 'Vegana, si monta come gli albumi', pl: 'Wegańska, ubija się jak białka', nl: 'Veganistisch, laat zich opkloppen als eiwit', pt: 'Vegana, bate como clara em neve' },
  moreProtein: { en: 'Higher protein', sv: 'Mer protein', es: 'Más proteína', fr: 'Plus de protéines', de: 'Mehr Protein', it: 'Più proteine', pl: 'Więcej białka', nl: 'Meer eiwitten', pt: 'Mais proteína' },
  sharper: { en: 'Slightly sharper, use a little less', sv: 'Lite skarpare, använd lite mindre', es: 'Algo más ácido, usa un poco menos', fr: 'Un peu plus acide, mettez-en un peu moins', de: 'Etwas schärfer, nimm etwas weniger', it: 'Leggermente più aspro, usane un po’ meno', pl: 'Nieco ostrzejszy, użyj trochę mniej', nl: 'Iets scherper, gebruik wat minder', pt: 'Um pouco mais ácido, use um pouco menos' },
  closestFlavor: { en: 'Closest flavor', sv: 'Mest lik i smaken', es: 'El sabor más parecido', fr: 'Le goût le plus proche', de: 'Geschmacklich am nächsten', it: 'Il sapore più simile', pl: 'Najbardziej zbliżony smak', nl: 'Komt qua smaak het dichtst in de buurt', pt: 'O sabor mais parecido' },
  glutenFreeVersatile: { en: 'Gluten-free, works for many recipes', sv: 'Glutenfritt, fungerar i många recept', es: 'Sin gluten, sirve para muchas recetas', fr: 'Sans gluten, convient à de nombreuses recettes', de: 'Glutenfrei, für viele Rezepte geeignet', it: 'Senza glutine, va bene per molte ricette', pl: 'Bezglutenowa, sprawdza się w wielu przepisach', nl: 'Glutenvrij, geschikt voor veel recepten', pt: 'Sem glúten, funciona em muitas receitas' },
  moreNutritious: { en: 'More nutritious alternative', sv: 'Näringsrikare alternativ', es: 'Alternativa más nutritiva', fr: 'Alternative plus nutritive', de: 'Nährstoffreichere Alternative', it: 'Alternativa più nutriente', pl: 'Bardziej odżywcza alternatywa', nl: 'Voedzamer alternatief', pt: 'Alternativa mais nutritiva' },
  similarSweetness: { en: 'Similar sweetness and texture', sv: 'Liknande sötma och konsistens', es: 'Dulzor y textura similares', fr: 'Douceur et texture similaires', de: 'Ähnliche Süße und Konsistenz', it: 'Dolcezza e consistenza simili', pl: 'Podobna słodycz i konsystencja', nl: 'Vergelijkbare zoetheid en textuur', pt: 'Doçura e textura parecidas' },
  lessSweet: { en: 'Less sweet', sv: 'Mindre söta', es: 'Menos dulces', fr: 'Moins sucrées', de: 'Weniger süß', it: 'Meno dolci', pl: 'Mniej słodkie', nl: 'Minder zoet', pt: 'Menos doces' },
  sameThickening: { en: 'Same thickening power', sv: 'Tjocknar lika bra', es: 'Mismo poder espesante', fr: 'Même pouvoir épaississant', de: 'Gleiche Bindekraft', it: 'Stesso potere addensante', pl: 'Tak samo zagęszcza', nl: 'Bindt net zo goed', pt: 'Engrossa do mesmo jeito' },
  soyFree: { en: 'Soy-free, lower sodium', sv: 'Sojafritt, mindre salt', es: 'Sin soja, con menos sodio', fr: 'Sans soja, moins salé', de: 'Sojafrei, weniger Natrium', it: 'Senza soia, meno sodio', pl: 'Bez soi, mniej sodu', nl: 'Sojavrij, minder natrium', pt: 'Sem soja, com menos sódio' },
  glutenFreeSoy: { en: 'Gluten-free soy sauce', sv: 'Glutenfri sojasås', es: 'Salsa de soja sin gluten', fr: 'Sauce soja sans gluten', de: 'Glutenfreie Sojasauce', it: 'Salsa di soia senza glutine', pl: 'Bezglutenowy sos sojowy', nl: 'Glutenvrije sojasaus', pt: 'Molho de soja sem glúten' },
  veganUmami: { en: 'Vegan, similar umami', sv: 'Vegansk, liknande umami', es: 'Vegana, umami similar', fr: 'Végane, umami similaire', de: 'Vegan, ähnliches Umami', it: 'Vegana, umami simile', pl: 'Wegańska, podobne umami', nl: 'Veganistisch, vergelijkbare umami', pt: 'Vegana, umami parecido' },
  similarCrunch: { en: 'Similar crunch', sv: 'Liknande krispighet', es: 'Igual de crujientes', fr: 'Croquant similaire', de: 'Ähnlich knackig', it: 'Croccantezza simile', pl: 'Podobnie chrupiące', nl: 'Vergelijkbaar knapperig', pt: 'Crocância parecida' },
  milderFlavor: { en: 'Milder flavor', sv: 'Mildare smak', es: 'Sabor más suave', fr: 'Goût plus doux', de: 'Milder im Geschmack', it: 'Sapore più delicato', pl: 'Łagodniejszy smak', nl: 'Mildere smaak', pt: 'Sabor mais suave' },
  milderGarnish: { en: 'Milder, best as garnish', sv: 'Mildare, bäst som garnering', es: 'Más suave, ideal para decorar', fr: 'Plus douce, parfaite pour garnir', de: 'Milder, am besten zum Garnieren', it: 'Più delicata, ideale per guarnire', pl: 'Łagodniejszy, najlepszy do posypania', nl: 'Milder, het best als garnering', pt: 'Mais suave, ideal para finalizar' },
  cookedDishes: { en: 'For cooked dishes', sv: 'Till lagade rätter', es: 'Para platos cocinados', fr: 'Pour les plats cuisinés', de: 'Für gekochte Gerichte', it: 'Per i piatti cotti', pl: 'Do potraw gotowanych', nl: 'Voor gekookte gerechten', pt: 'Para pratos cozidos' },
  freshInSalads: { en: 'For fresh tomato in salads', sv: 'I stället för färsk tomat i sallader', es: 'En lugar de tomate fresco en ensaladas', fr: 'À la place de la tomate crue en salade', de: 'Statt frischer Tomaten im Salat', it: 'Al posto del pomodoro fresco nelle insalate', pl: 'Zamiast świeżego pomidora w sałatkach', nl: 'In plaats van verse tomaat in salades', pt: 'No lugar do tomate fresco em saladas' },
  starchyTexture: { en: 'Similar starchy texture', sv: 'Liknande stärkelserik konsistens', es: 'Textura feculenta similar', fr: 'Texture farineuse similaire', de: 'Ähnlich stärkehaltige Konsistenz', it: 'Consistenza amidacea simile', pl: 'Podobna skrobiowa konsystencja', nl: 'Vergelijkbare zetmeelrijke textuur', pt: 'Textura parecida, rica em amido' },
  milderFaster: { en: 'Milder, cooks faster', sv: 'Mildare, tillagas snabbare', es: 'Más suaves, se cocinan antes', fr: 'Plus doux, cuisent plus vite', de: 'Milder, gart schneller', it: 'Più delicati, cuociono prima', pl: 'Łagodniejszy, szybciej się gotuje', nl: 'Milder, sneller gaar', pt: 'Mais suave, cozinha mais rápido' },
  heartyTexture: { en: 'Similar hearty texture', sv: 'Liknande kraftig konsistens', es: 'Textura consistente similar', fr: 'Texture robuste similaire', de: 'Ähnlich kräftige Konsistenz', it: 'Consistenza corposa simile', pl: 'Podobnie treściwa konsystencja', nl: 'Vergelijkbare stevige textuur', pt: 'Textura firme parecida' },
  noSliminess: { en: 'Without the sliminess', sv: 'Utan slemmigheten', es: 'Sin la textura babosa', fr: 'Sans le côté gluant', de: 'Ohne das Schleimige', it: 'Senza la consistenza viscosa', pl: 'Bez śliskości', nl: 'Zonder het slijmerige', pt: 'Sem a baba' },
} satisfies Record<string, TranslatedString>;

// ── Reusable suggestions ──────────────────────────────────────────
const VEGETABLE_STOCK: Sub = { name: { en: 'Vegetable stock', sv: 'Grönsaksbuljong', es: 'Caldo de verduras', fr: 'Bouillon de légumes', de: 'Gemüsebrühe', it: 'Brodo vegetale', pl: 'Bulion warzywny', nl: 'Groentebouillon', pt: 'Caldo de legumes' }, ratio: 1, note: NOTE.vegetarian };
const MUSHROOM_STOCK: Sub = { name: { en: 'Mushroom stock', sv: 'Svampbuljong', es: 'Caldo de champiñones', fr: 'Bouillon de champignons', de: 'Pilzbrühe', it: 'Brodo di funghi', pl: 'Bulion grzybowy', nl: 'Paddenstoelenbouillon', pt: 'Caldo de cogumelos' }, ratio: 1, note: NOTE.deeperFlavor };
const TOFU: Sub = { name: { en: 'Tofu', sv: 'Tofu', es: 'Tofu', fr: 'Tofu', de: 'Tofu', it: 'Tofu', pl: 'Tofu', nl: 'Tofu', pt: 'Tofu' }, ratio: 1, note: NOTE.vegetarian };
const POTATOES: Sub = { name: { en: 'Potatoes', sv: 'Potatis', es: 'Papas', fr: 'Pommes de terre', de: 'Kartoffeln', it: 'Patate', pl: 'Ziemniaki', nl: 'Aardappelen', pt: 'Batatas' }, ratio: 1, note: NOTE.moreAvailable };
const SWEET_POTATO: Sub = { name: { en: 'Sweet potato', sv: 'Sötpotatis', es: 'Batata', fr: 'Patate douce', de: 'Süßkartoffel', it: 'Patata dolce', pl: 'Batat', nl: 'Zoete aardappel', pt: 'Batata-doce' }, ratio: 1, note: NOTE.similarTextureFlavor };
const GREEK_YOGURT: Sub = { name: { en: 'Greek yogurt', sv: 'Grekisk yoghurt', es: 'Yogur griego', fr: 'Yaourt grec', de: 'Griechischer Joghurt', it: 'Yogurt greco', pl: 'Jogurt grecki', nl: 'Griekse yoghurt', pt: 'Iogurte grego' }, ratio: 1, note: NOTE.offTheHeat };
const CASHEW_CREAM: Sub = { name: { en: 'Cashew cream', sv: 'Cashewgrädde', es: 'Crema de anacardos', fr: 'Crème de cajou', de: 'Cashewcreme', it: 'Crema di anacardi', pl: 'Krem z nerkowców', nl: 'Cashewroom', pt: 'Creme de castanha-de-caju' }, ratio: 1, note: NOTE.vegan };
const COCONUT_MILK: Sub = { name: { en: 'Coconut milk', sv: 'Kokosmjölk', es: 'Leche de coco', fr: 'Lait de coco', de: 'Kokosmilch', it: 'Latte di cocco', pl: 'Mleko kokosowe', nl: 'Kokosmelk', pt: 'Leite de coco' }, ratio: 1, note: NOTE.dairyFree };
const RICE_NOODLES: Sub = { name: { en: 'Rice noodles', sv: 'Risnudlar', es: 'Fideos de arroz', fr: 'Nouilles de riz', de: 'Reisnudeln', it: 'Spaghetti di riso', pl: 'Makaron ryżowy', nl: 'Rijstnoedels', pt: 'Macarrão de arroz' }, ratio: 1, note: NOTE.glutenFree };
const RICOTTA: Sub = { name: { en: 'Ricotta', sv: 'Ricotta', es: 'Ricotta', fr: 'Ricotta', de: 'Ricotta', it: 'Ricotta', pl: 'Ricotta', nl: 'Ricotta', pt: 'Ricota' }, ratio: 1, note: NOTE.mildCreamy };
const CREAM_CHEESE: Sub = { name: { en: 'Cream cheese', sv: 'Färskost', es: 'Queso crema', fr: 'Fromage frais', de: 'Frischkäse', it: 'Formaggio spalmabile', pl: 'Serek śmietankowy', nl: 'Roomkaas', pt: 'Cream cheese' }, ratio: 1, note: NOTE.richerSmoother };
const BROWN_SUGAR: Sub = { name: { en: 'Brown sugar', sv: 'Farinsocker', es: 'Azúcar moreno', fr: 'Sucre roux', de: 'Brauner Zucker', it: 'Zucchero di canna', pl: 'Brązowy cukier', nl: 'Bruine suiker', pt: 'Açúcar mascavo' }, ratio: 1, note: NOTE.caramelNotes };
const MAPLE_SYRUP: Sub = { name: { en: 'Maple syrup', sv: 'Lönnsirap', es: 'Jarabe de arce', fr: "Sirop d'érable", de: 'Ahornsirup', it: "Sciroppo d'acero", pl: 'Syrop klonowy', nl: 'Ahornsiroop', pt: 'Xarope de bordo' }, ratio: 0.75, note: NOTE.veganSweetener };
const CASHEWS = { en: 'Cashews', sv: 'Cashewnötter', es: 'Anacardos', fr: 'Noix de cajou', de: 'Cashewnüsse', it: 'Anacardi', pl: 'Orzechy nerkowca', nl: 'Cashewnoten', pt: 'Castanhas-de-caju' };

/**
 * Common ingredient substitution database, matched against the English
 * ingredient name. The most specific (longest) matching key wins, so
 * "peanut butter" beats "butter" and "chicken stock" beats "chicken".
 * Every name and note carries all nine app languages.
 */
const SUBSTITUTION_DB: SubstitutionEntry[] = [
  // Dairy
  { keys: ['butter'], subs: [
    { name: { en: 'Coconut oil', sv: 'Kokosolja', es: 'Aceite de coco', fr: 'Huile de coco', de: 'Kokosöl', it: 'Olio di cocco', pl: 'Olej kokosowy', nl: 'Kokosolie', pt: 'Óleo de coco' }, ratio: 1, note: NOTE.dairyFree },
    { name: { en: 'Olive oil', sv: 'Olivolja', es: 'Aceite de oliva', fr: "Huile d'olive", de: 'Olivenöl', it: "Olio d'oliva", pl: 'Oliwa z oliwek', nl: 'Olijfolie', pt: 'Azeite de oliva' }, ratio: 0.75, note: NOTE.cookingNotBaking },
  ] },
  { keys: ['cream', 'heavy cream', 'whipping cream', 'double cream', 'whipped cream'], subs: [
    { name: { en: 'Coconut cream', sv: 'Kokosgrädde', es: 'Crema de coco', fr: 'Crème de coco', de: 'Kokoscreme', it: 'Crema di cocco', pl: 'Śmietanka kokosowa', nl: 'Kokosroom', pt: 'Creme de coco' }, ratio: 1, note: NOTE.dairyFree },
    CASHEW_CREAM,
  ] },
  { keys: ['sour cream', 'creme fraiche'], subs: [
    { ...GREEK_YOGURT, note: NOTE.lighterTang },
  ] },
  { keys: ['coconut cream'], subs: [
    { name: { en: 'Heavy cream', sv: 'Vispgrädde', es: 'Nata para montar', fr: 'Crème entière', de: 'Schlagsahne', it: 'Panna da montare', pl: 'Śmietanka kremówka', nl: 'Slagroom', pt: 'Creme de leite fresco' }, ratio: 1, note: NOTE.notDairyFree },
    CASHEW_CREAM,
  ] },
  { keys: ['coconut milk'], subs: [
    { name: { en: 'Cashew milk', sv: 'Cashewmjölk', es: 'Leche de anacardos', fr: 'Lait de cajou', de: 'Cashewmilch', it: 'Latte di anacardi', pl: 'Mleko z nerkowców', nl: 'Cashewmelk', pt: 'Leite de castanha-de-caju' }, ratio: 1, note: NOTE.veganRichness },
    GREEK_YOGURT,
  ] },
  { keys: ['milk'], subs: [
    { name: { en: 'Oat milk', sv: 'Havremjölk', es: 'Leche de avena', fr: "Lait d'avoine", de: 'Hafermilch', it: "Latte d'avena", pl: 'Mleko owsiane', nl: 'Havermelk', pt: 'Leite de aveia' }, ratio: 1, note: NOTE.dairyFree },
    { ...COCONUT_MILK, note: NOTE.addsRichness },
  ] },
  { keys: ['buttermilk'], subs: [
    { name: { en: 'Milk + 1 tbsp lemon juice per cup', sv: 'Mjölk + 1 msk citronsaft per 2,5 dl', es: 'Leche + 1 cda de jugo de limón por taza', fr: 'Lait + 1 c. à s. de jus de citron par tasse', de: 'Milch + 1 EL Zitronensaft pro Tasse', it: 'Latte + 1 cucchiaio di succo di limone per tazza', pl: 'Mleko + 1 łyżka soku z cytryny na szklankę', nl: 'Melk + 1 el citroensap per kopje', pt: 'Leite + 1 colher (sopa) de suco de limão por xícara' }, ratio: 1, note: NOTE.standFiveMinutes },
  ] },
  { keys: ['condensed milk', 'sweetened condensed milk'], subs: [
    { name: { en: 'Coconut condensed milk', sv: 'Kondenserad kokosmjölk', es: 'Leche condensada de coco', fr: 'Lait concentré de coco', de: 'Kokos-Kondensmilch', it: 'Latte condensato di cocco', pl: 'Kokosowe mleko skondensowane', nl: 'Gecondenseerde kokosmelk', pt: 'Leite condensado de coco' }, ratio: 1, note: NOTE.dairyFree },
  ] },
  { keys: ['evaporated milk'], subs: [COCONUT_MILK] },
  { keys: ['cheese'], subs: [
    { name: { en: 'Nutritional yeast', sv: 'Näringsjäst', es: 'Levadura nutricional', fr: 'Levure nutritionnelle', de: 'Hefeflocken', it: 'Lievito alimentare in scaglie', pl: 'Płatki drożdżowe', nl: 'Edelgistvlokken', pt: 'Levedura nutricional' }, ratio: 0.3, note: NOTE.cheesyFlavor },
  ] },
  { keys: ['cottage cheese', 'farmer cheese', 'ricotta', 'ricotta cheese', 'mascarpone', 'mascarpone cheese', 'quark'], subs: [RICOTTA, CREAM_CHEESE] },
  { keys: ['cream cheese'], subs: [
    RICOTTA,
    { name: { en: 'Cashew cream cheese', sv: 'Cashewfärskost', es: 'Queso crema de anacardos', fr: 'Fromage frais de cajou', de: 'Cashew-Frischkäse', it: 'Formaggio spalmabile di anacardi', pl: 'Serek z nerkowców', nl: 'Cashewroomkaas', pt: 'Cream cheese de castanha-de-caju' }, ratio: 1, note: NOTE.vegan },
  ] },
  { keys: ['yogurt', 'yoghurt'], subs: [
    { name: { en: 'Coconut yogurt', sv: 'Kokosyoghurt', es: 'Yogur de coco', fr: 'Yaourt de coco', de: 'Kokosjoghurt', it: 'Yogurt di cocco', pl: 'Jogurt kokosowy', nl: 'Kokosyoghurt', pt: 'Iogurte de coco' }, ratio: 1, note: NOTE.dairyFree },
    { name: { en: 'Sour cream', sv: 'Gräddfil', es: 'Crema agria', fr: 'Crème aigre', de: 'Saure Sahne', it: 'Panna acida', pl: 'Kwaśna śmietana', nl: 'Zure room', pt: 'Creme azedo' }, ratio: 1, note: NOTE.similarTanginess },
  ] },

  // Proteins
  { keys: ['beef'], subs: [
    { name: { en: 'Mushrooms', sv: 'Svamp', es: 'Champiñones', fr: 'Champignons', de: 'Pilze', it: 'Funghi', pl: 'Grzyby', nl: 'Paddenstoelen', pt: 'Cogumelos' }, ratio: 1, note: NOTE.vegetarianUmami },
    { name: { en: 'Lentils', sv: 'Linser', es: 'Lentejas', fr: 'Lentilles', de: 'Linsen', it: 'Lenticchie', pl: 'Soczewica', nl: 'Linzen', pt: 'Lentilhas' }, ratio: 0.8, note: NOTE.plantProtein },
  ] },
  { keys: ['chicken'], subs: [
    TOFU,
    { name: { en: 'Chickpeas', sv: 'Kikärtor', es: 'Garbanzos', fr: 'Pois chiches', de: 'Kichererbsen', it: 'Ceci', pl: 'Ciecierzyca', nl: 'Kikkererwten', pt: 'Grão-de-bico' }, ratio: 1, note: NOTE.plantBased },
  ] },
  { keys: ['pork'], subs: [
    { name: { en: 'Turkey', sv: 'Kalkon', es: 'Pavo', fr: 'Dinde', de: 'Truthahn', it: 'Tacchino', pl: 'Indyk', nl: 'Kalkoen', pt: 'Peru' }, ratio: 1, note: NOTE.leaner },
    { name: { en: 'Jackfruit', sv: 'Jackfrukt', es: 'Jaca', fr: 'Jacquier', de: 'Jackfrucht', it: 'Jackfruit', pl: 'Jackfruit', nl: 'Jackfruit', pt: 'Jaca' }, ratio: 1, note: NOTE.veganTexture },
  ] },
  { keys: ['lamb'], subs: [
    { name: { en: 'Beef', sv: 'Nötkött', es: 'Carne de res', fr: 'Bœuf', de: 'Rindfleisch', it: 'Manzo', pl: 'Wołowina', nl: 'Rundvlees', pt: 'Carne bovina' }, ratio: 1, note: NOTE.moreAvailable },
  ] },
  { keys: ['fish'], subs: [TOFU] },
  { keys: ['shrimp', 'prawn'], subs: [
    { name: { en: 'King oyster mushrooms', sv: 'Kungsmusseron', es: 'Seta de cardo', fr: 'Pleurote du panicaut', de: 'Kräuterseitling', it: 'Cardoncelli', pl: 'Boczniaki królewskie', nl: 'Koningsoesterzwammen', pt: 'Cogumelos eryngii' }, ratio: 1, note: NOTE.slicedTexture },
  ] },
  // Egg used as a glaze: brushing with milk works, a flax egg does not.
  { keys: ['egg', 'egg yolk'], requires: ['brushing', 'wash', 'glaze', 'glazing'], subs: [
    { name: { en: 'Milk or plant milk', sv: 'Mjölk eller växtbaserad mjölk', es: 'Leche o bebida vegetal', fr: 'Lait ou lait végétal', de: 'Milch oder Pflanzendrink', it: 'Latte o bevanda vegetale', pl: 'Mleko lub napój roślinny', nl: 'Melk of plantaardige melk', pt: 'Leite ou bebida vegetal' }, ratio: 1, note: NOTE.forBrushing },
  ] },
  { keys: ['egg'], skipIf: ['brushing', 'wash', 'glaze', 'glazing', 'boiled'], subs: [
    { name: { en: 'Flax egg (1 tbsp ground flax + 3 tbsp water)', sv: 'Linfrö-ägg (1 msk malet linfrö + 3 msk vatten)', es: 'Huevo de lino (1 cda de linaza molida + 3 cdas de agua)', fr: 'Œuf de lin (1 c. à s. de graines de lin moulues + 3 c. à s. d’eau)', de: 'Leinsamen-Ei (1 EL gemahlene Leinsamen + 3 EL Wasser)', it: 'Uovo di lino (1 cucchiaio di semi di lino macinati + 3 cucchiai d’acqua)', pl: 'Jajko lniane (1 łyżka mielonego siemienia lnianego + 3 łyżki wody)', nl: 'Lijnzaad-ei (1 el gemalen lijnzaad + 3 el water)', pt: 'Ovo de linhaça (1 colher de sopa de linhaça moída + 3 de água)' }, ratio: 1, note: NOTE.veganBaking },
  ] },
  { keys: ['egg white'], subs: [
    { name: { en: 'Aquafaba (3 tbsp chickpea liquid per egg white)', sv: 'Aquafaba (3 msk kikärtsspad per äggvita)', es: 'Aquafaba (3 cdas de líquido de garbanzos por clara)', fr: 'Aquafaba (3 c. à s. de jus de pois chiches par blanc)', de: 'Aquafaba (3 EL Kichererbsenwasser pro Eiweiß)', it: 'Aquafaba (3 cucchiai di acqua di cottura dei ceci per albume)', pl: 'Aquafaba (3 łyżki wody z ciecierzycy na białko)', nl: 'Aquafaba (3 el kikkererwtenvocht per eiwit)', pt: 'Aquafaba (3 colheres de sopa do líquido do grão-de-bico por clara)' }, ratio: 1, note: NOTE.veganWhips },
  ] },
  { keys: ['egg noodle'], subs: [{ ...RICE_NOODLES, note: NOTE.eggFree }] },

  // Grains & starches
  { keys: ['rice'], subs: [
    { name: { en: 'Cauliflower rice', sv: 'Blomkålsris', es: 'Arroz de coliflor', fr: 'Riz de chou-fleur', de: 'Blumenkohlreis', it: 'Riso di cavolfiore', pl: 'Ryż z kalafiora', nl: 'Bloemkoolrijst', pt: 'Arroz de couve-flor' }, ratio: 1, note: NOTE.lowCarb },
    { name: { en: 'Quinoa', sv: 'Quinoa', es: 'Quinoa', fr: 'Quinoa', de: 'Quinoa', it: 'Quinoa', pl: 'Komosa ryżowa', nl: 'Quinoa', pt: 'Quinoa' }, ratio: 1, note: NOTE.moreProtein },
  ] },
  { keys: ['rice vinegar'], subs: [
    { name: { en: 'Apple cider vinegar', sv: 'Äppelcidervinäger', es: 'Vinagre de manzana', fr: 'Vinaigre de cidre', de: 'Apfelessig', it: 'Aceto di mele', pl: 'Ocet jabłkowy', nl: 'Appelciderazijn', pt: 'Vinagre de maçã' }, ratio: 0.75, note: NOTE.sharper },
  ] },
  { keys: ['rice wine'], subs: [
    { name: { en: 'Dry sherry', sv: 'Torr sherry', es: 'Jerez seco', fr: 'Xérès sec', de: 'Trockener Sherry', it: 'Sherry secco', pl: 'Wytrawne sherry', nl: 'Droge sherry', pt: 'Xerez seco' }, ratio: 1, note: NOTE.closestFlavor },
  ] },
  { keys: ['pasta'], subs: [
    RICE_NOODLES,
    { name: { en: 'Zucchini noodles', sv: 'Zucchininudlar', es: 'Espaguetis de calabacín', fr: 'Nouilles de courgette', de: 'Zucchininudeln', it: 'Spaghetti di zucchine', pl: 'Makaron z cukinii', nl: 'Courgetteslierten', pt: 'Espaguete de abobrinha' }, ratio: 1, note: NOTE.lowCarb },
  ] },
  { keys: ['flour'], subs: [
    { name: { en: 'Almond flour', sv: 'Mandelmjöl', es: 'Harina de almendras', fr: "Farine d'amande", de: 'Mandelmehl', it: 'Farina di mandorle', pl: 'Mąka migdałowa', nl: 'Amandelmeel', pt: 'Farinha de amêndoas' }, ratio: 1, note: NOTE.glutenFreeVersatile },
    { name: { en: 'Oat flour', sv: 'Havremjöl', es: 'Harina de avena', fr: "Farine d'avoine", de: 'Hafermehl', it: "Farina d'avena", pl: 'Mąka owsiana', nl: 'Havermeel', pt: 'Farinha de aveia' }, ratio: 1, note: NOTE.glutenFree },
  ] },
  { keys: ['flour tortilla'], subs: [
    { name: { en: 'Corn tortillas', sv: 'Majstortillas', es: 'Tortillas de maíz', fr: 'Tortillas de maïs', de: 'Maistortillas', it: 'Tortillas di mais', pl: 'Tortille kukurydziane', nl: "Maïstortilla's", pt: 'Tortilhas de milho' }, ratio: 1, note: NOTE.glutenFree },
  ] },
  { keys: ['potato'], subs: [
    { ...SWEET_POTATO, note: NOTE.moreNutritious },
    { name: { en: 'Cauliflower', sv: 'Blomkål', es: 'Coliflor', fr: 'Chou-fleur', de: 'Blumenkohl', it: 'Cavolfiore', pl: 'Kalafior', nl: 'Bloemkool', pt: 'Couve-flor' }, ratio: 1, note: NOTE.lowCarb },
  ] },
  { keys: ['sweet potato', 'kumara'], subs: [
    { name: { en: 'Butternut squash', sv: 'Butternutpumpa', es: 'Calabaza moscada', fr: 'Courge butternut', de: 'Butternusskürbis', it: 'Zucca butternut', pl: 'Dynia piżmowa', nl: 'Flespompoen', pt: 'Abóbora-manteiga' }, ratio: 1, note: NOTE.similarSweetness },
    { ...POTATOES, note: NOTE.lessSweet },
  ] },
  { keys: ['potato starch'], subs: [
    { name: { en: 'Cornstarch', sv: 'Majsstärkelse', es: 'Maicena', fr: 'Fécule de maïs', de: 'Maisstärke', it: 'Amido di mais', pl: 'Skrobia kukurydziana', nl: 'Maïszetmeel', pt: 'Amido de milho' }, ratio: 1, note: NOTE.sameThickening },
  ] },

  // Stocks
  { keys: ['stock', 'broth', 'chicken stock', 'chicken broth', 'beef stock', 'beef broth', 'lamb stock', 'fish stock', 'meat stock', 'bone broth'], subs: [VEGETABLE_STOCK, MUSHROOM_STOCK] },
  { keys: ['vegetable stock', 'vegetable broth'], subs: [MUSHROOM_STOCK] },

  // Condiments & sauces
  { keys: ['soy sauce'], subs: [
    { name: { en: 'Coconut aminos', sv: 'Kokosaminos', es: 'Aminos de coco', fr: 'Aminos de noix de coco', de: 'Kokos-Aminos', it: 'Aminos di cocco', pl: 'Aminos kokosowe', nl: 'Kokos-aminos', pt: 'Aminos de coco' }, ratio: 1, note: NOTE.soyFree },
    { name: { en: 'Tamari', sv: 'Tamari', es: 'Tamari', fr: 'Tamari', de: 'Tamari', it: 'Tamari', pl: 'Tamari', nl: 'Tamari', pt: 'Tamari' }, ratio: 1, note: NOTE.glutenFreeSoy },
  ] },
  { keys: ['fish sauce'], subs: [
    { name: { en: 'Soy sauce + a squeeze of lime', sv: 'Sojasås + en skvätt lime', es: 'Salsa de soja + unas gotas de lima', fr: 'Sauce soja + un filet de citron vert', de: 'Sojasauce + ein Spritzer Limette', it: 'Salsa di soia + una spruzzata di lime', pl: 'Sos sojowy + odrobina soku z limonki', nl: 'Sojasaus + een scheutje limoensap', pt: 'Molho de soja + umas gotas de limão' }, ratio: 1, note: NOTE.vegetarian },
  ] },
  { keys: ['shrimp paste'], subs: [
    { name: { en: 'White miso paste', sv: 'Ljus misopasta', es: 'Pasta de miso blanco', fr: 'Pâte de miso blanc', de: 'Helle Misopaste', it: 'Pasta di miso bianco', pl: 'Jasna pasta miso', nl: 'Witte misopasta', pt: 'Pasta de missô branco' }, ratio: 1, note: NOTE.veganUmami },
  ] },
  { keys: ['sugar'], subs: [
    { name: { en: 'Honey', sv: 'Honung', es: 'Miel', fr: 'Miel', de: 'Honig', it: 'Miele', pl: 'Miód', nl: 'Honing', pt: 'Mel' }, ratio: 0.75, note: NOTE.naturalSweetener },
    MAPLE_SYRUP,
  ] },
  { keys: ['palm sugar', 'coconut sugar', 'jaggery'], subs: [BROWN_SUGAR] },
  { keys: ['honey'], subs: [
    { ...MAPLE_SYRUP, ratio: 1, note: NOTE.vegan },
    { name: { en: 'Agave syrup', sv: 'Agavesirap', es: 'Jarabe de agave', fr: "Sirop d'agave", de: 'Agavensirup', it: "Sciroppo d'agave", pl: 'Syrop z agawy', nl: 'Agavesiroop', pt: 'Xarope de agave' }, ratio: 1, note: NOTE.vegan },
  ] },

  // Nuts
  { keys: ['peanut', 'groundnut'], subs: [
    { name: CASHEWS, ratio: 1, note: NOTE.similarCrunch },
    { name: { en: 'Sunflower seeds', sv: 'Solrosfrön', es: 'Semillas de girasol', fr: 'Graines de tournesol', de: 'Sonnenblumenkerne', it: 'Semi di girasole', pl: 'Pestki słonecznika', nl: 'Zonnebloempitten', pt: 'Sementes de girassol' }, ratio: 1, note: NOTE.nutFree },
  ] },
  { keys: ['peanut butter', 'peanut paste'], subs: [
    { name: { en: 'Sunflower seed butter', sv: 'Solrosfrössmör', es: 'Mantequilla de girasol', fr: 'Beurre de tournesol', de: 'Sonnenblumenkernbutter', it: 'Crema di semi di girasole', pl: 'Masło ze słonecznika', nl: 'Zonnebloempittenpasta', pt: 'Pasta de semente de girassol' }, ratio: 1, note: NOTE.nutFree },
    { name: { en: 'Almond butter', sv: 'Mandelsmör', es: 'Mantequilla de almendras', fr: "Purée d'amande", de: 'Mandelmus', it: 'Crema di mandorle', pl: 'Masło migdałowe', nl: 'Amandelpasta', pt: 'Pasta de amêndoas' }, ratio: 1, note: NOTE.similarTexture },
  ] },
  { keys: ['almond'], subs: [
    { name: CASHEWS, ratio: 1, note: NOTE.similarTexture },
  ] },

  // Common vegetables
  { keys: ['onion'], subs: [
    { name: { en: 'Shallots', sv: 'Schalottenlök', es: 'Chalotes', fr: 'Échalotes', de: 'Schalotten', it: 'Scalogni', pl: 'Szalotki', nl: 'Sjalotten', pt: 'Chalotas' }, ratio: 0.75, note: NOTE.milderFlavor },
  ] },
  { keys: ['spring onion', 'green onion', 'scallion'], subs: [
    { name: { en: 'Chives', sv: 'Gräslök', es: 'Cebollino', fr: 'Ciboulette', de: 'Schnittlauch', it: 'Erba cipollina', pl: 'Szczypiorek', nl: 'Bieslook', pt: 'Cebolinha-francesa' }, ratio: 1, note: NOTE.milderGarnish },
  ] },
  { keys: ['tomato'], subs: [
    { name: { en: 'Canned tomatoes', sv: 'Tomater på burk', es: 'Tomate en lata', fr: 'Tomates en conserve', de: 'Dosentomaten', it: 'Pomodori in scatola', pl: 'Pomidory z puszki', nl: 'Tomaten uit blik', pt: 'Tomate em lata' }, ratio: 1, note: NOTE.cookedDishes },
    { name: { en: 'Red bell pepper', sv: 'Röd paprika', es: 'Pimiento rojo', fr: 'Poivron rouge', de: 'Rote Paprika', it: 'Peperone rosso', pl: 'Czerwona papryka', nl: 'Rode paprika', pt: 'Pimentão vermelho' }, ratio: 1, note: NOTE.freshInSalads },
  ] },
  { keys: ['plantain'], subs: [POTATOES] },
  { keys: ['cassava', 'manioc', 'yuca'], subs: [{ ...POTATOES, note: NOTE.starchyTexture }] },
  { keys: ['cassava leaf', 'cassava leaves'], subs: [
    { name: { en: 'Spinach', sv: 'Spenat', es: 'Espinacas', fr: 'Épinards', de: 'Spinat', it: 'Spinaci', pl: 'Szpinak', nl: 'Spinazie', pt: 'Espinafre' }, ratio: 1, note: NOTE.milderFaster },
    { name: { en: 'Kale', sv: 'Grönkål', es: 'Col rizada', fr: 'Chou kale', de: 'Grünkohl', it: 'Cavolo riccio', pl: 'Jarmuż', nl: 'Boerenkool', pt: 'Couve' }, ratio: 1, note: NOTE.heartyTexture },
  ] },
  { keys: ['yam'], subs: [SWEET_POTATO] },
  { keys: ['okra'], subs: [
    { name: { en: 'Green beans', sv: 'Haricots verts', es: 'Judías verdes', fr: 'Haricots verts', de: 'Grüne Bohnen', it: 'Fagiolini', pl: 'Fasolka szparagowa', nl: 'Sperziebonen', pt: 'Vagem' }, ratio: 1, note: NOTE.noSliminess },
  ] },

  // Known ingredients that merely contain a keyword above, with no good swap.
  { keys: ['irish cream', 'yogurt starter', 'pasta sheet', 'hard boiled egg', 'egg yolk', 'pearl sugar'], subs: [] },
];

/**
 * A keyword followed by one of these words names a different product
 * ("rice flour", "onion powder", "cream of tartar", "butter beans").
 */
const DIFFERENT_PRODUCT_AFTER = new Set([
  'of', 'oil', 'flour', 'meal', 'vinegar', 'wine', 'milk', 'cream', 'butter', 'cheese',
  'powder', 'paste', 'sauce', 'stock', 'broth', 'bouillon', 'cube', 'extract', 'essence',
  'syrup', 'noodle', 'water', 'leaf', 'leaves', 'starch', 'jam', 'juice', 'zest', 'seed',
  'liqueur', 'chutney', 'puree', 'gel', 'flake', 'bean', 'bone', 'starter', 'sheet',
  'tortilla', 'wrapper', 'paper', 'skin', 'sugar',
]);

/**
 * A keyword preceded by one of these words names a different product
 * ("coconut milk", "peanut butter", "sweet potato", "ice cream", "palm sugar").
 */
const DIFFERENT_PRODUCT_BEFORE = new Set([
  'coconut', 'peanut', 'almond', 'cashew', 'hazelnut', 'nut', 'palm', 'cocoa', 'shea',
  'soy', 'oat', 'rice', 'sweet', 'sour', 'ice', 'cream', 'powdered', 'icing', 'confectioner',
  'condensed', 'evaporated', 'sweetened', 'cauliflower', 'zucchini', 'flax', 'sticky', 'glutinous',
  // gluten-free flours ("cassava flour", "maize flour") need no flour swap
  'maize', 'corn', 'cassava', 'sorghum', 'millet', 'tapioca', 'chickpea', 'gram', 'teff',
  'buckwheat', 'banana', 'plantain', 'potato',
]);

function stripDiacritics(s: string): string {
  const decomposed = typeof s.normalize === 'function' ? s.normalize('NFD') : s;
  return decomposed.replace(/[̀-ͯ]/g, '');
}

/** Lowercase, strip diacritics and punctuation, collapse whitespace. */
function normalizeText(s: string): string {
  return stripDiacritics(s.toLowerCase())
    .replace(/œ/g, 'oe')
    .replace(/æ/g, 'ae')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function words(s: string): string[] {
  const n = normalizeText(s);
  return n ? n.split(' ') : [];
}

/**
 * The part of an English ingredient name that names the ingredient:
 * "For syrup: sugar" -> "sugar", "Butter, melted (or neutral oil)" -> "butter",
 * "Vegetable oil for frying" -> "vegetable oil".
 */
function coreWords(name: string): string[] {
  let s = name.toLowerCase();
  const colon = s.lastIndexOf(':');
  if (colon >= 0) s = s.slice(colon + 1);
  s = s.replace(/\([^)]*\)/g, ' ').split(',')[0];
  const w = words(s);
  const cut = w.findIndex((x, i) => i > 0 && (x === 'for' || x === 'to'));
  return cut > 0 ? w.slice(0, cut) : w;
}

/** Word equality that tolerates simple English plurals (egg/eggs, potato/potatoes). */
function wordMatches(text: string, key: string): boolean {
  return text === key || text === `${key}s` || text === `${key}es` ||
    (key.endsWith('f') && text === `${key.slice(0, -1)}ves`) ||
    (key.endsWith('y') && text === `${key.slice(0, -1)}ies`);
}

function singular(word: string): string {
  if (word.endsWith('ies') && word.length > 4) return `${word.slice(0, -3)}y`;
  if (word.endsWith('oes') && word.length > 4) return word.slice(0, -2);
  if (word.endsWith('s') && !word.endsWith('ss') && word.length > 3) return word.slice(0, -1);
  return word;
}

/** All start indexes where the key's words appear consecutively in `text`. */
function findPhrase(text: string[], key: string[]): number[] {
  const hits: number[] = [];
  for (let i = 0; i + key.length <= text.length; i++) {
    if (key.every((k, j) => wordMatches(text[i + j], k))) hits.push(i);
  }
  return hits;
}

function containsPhrase(text: string[], phrase: string[]): boolean {
  return phrase.length > 0 && findPhrase(text, phrase).length > 0;
}

export type KeyMatch<T> = {
  value: T;
  /** Index of the first matched word. */
  start: number;
  /** Number of words matched. */
  wordCount: number;
  /** Specificity: character length of the matched key. */
  length: number;
  order: number;
};

/**
 * Find whole-word/phrase occurrences of `keys` in `nameWords`, most specific
 * first: longer keys win, then earlier position, then declaration order.
 * A key directly preceded or followed by a word that turns it into a different
 * product ("coconut milk", "rice flour") does not count.
 */
export type ProductRules = { before: Set<string>; after: Set<string> };

export function findKeyMatches<T>(
  nameWords: string[],
  keys: { key: string; value: T }[],
  rules: ProductRules = { before: DIFFERENT_PRODUCT_BEFORE, after: DIFFERENT_PRODUCT_AFTER },
): KeyMatch<T>[] {
  const matches: KeyMatch<T>[] = [];
  keys.forEach(({ key, value }, order) => {
    const keyWords = key.split(' ');
    for (const start of findPhrase(nameWords, keyWords)) {
      const before = nameWords[start - 1];
      const after = nameWords[start + keyWords.length];
      if (before && rules.before.has(singular(before))) continue;
      if (after && rules.after.has(singular(after))) continue;
      matches.push({ value, start, wordCount: keyWords.length, length: key.length, order });
    }
  });
  return matches.sort((a, b) => b.length - a.length || a.start - b.start || a.order - b.order);
}

const DB_KEYS = SUBSTITUTION_DB.flatMap(entry =>
  entry.keys.map(key => ({ key: normalizeText(key), value: entry })),
);

/**
 * Look up substitutions for a given ingredient name (matched on the English name).
 * The most specific matching keyword wins, and a suggestion that is the
 * ingredient itself (or an alternative the recipe already lists) is never returned.
 */
export function getSubstitutions(ingredientName: TranslatedString): IngredientSubstitution[] {
  const name = typeof ingredientName === 'string' ? ingredientName : ingredientName?.en;
  if (!name) return [];

  const core = coreWords(name);
  const all = words(name);
  const candidates = findKeyMatches(core, DB_KEYS).filter(({ value }) =>
    (!value.requires || value.requires.some(w => all.includes(w))) &&
    !(value.skipIf || []).some(w => all.includes(w)),
  );

  const taken: [number, number][] = [];
  for (const c of candidates) {
    const span: [number, number] = [c.start, c.start + c.wordCount];
    if (taken.some(([s, e]) => span[0] < e && s < span[1])) continue;
    if (c.value.subs.length === 0) return [];

    const subs = c.value.subs.filter(sub => {
      const subName = typeof sub.name === 'string' ? sub.name : sub.name.en;
      return !containsPhrase(all, coreWords(subName));
    });
    if (subs.length > 0) return subs;
    // Every suggestion is already in the recipe ("lamb or beef" -> beef):
    // fall back to another ingredient named in the text.
    taken.push(span);
  }

  return [];
}

/**
 * Enrich recipe ingredients with substitution data from the database.
 * Returns the same ingredients array but with substitutions populated.
 */
export function enrichWithSubstitutions(
  ingredients: { name: TranslatedString; amount: number; unit: TranslatedString; substitutions?: IngredientSubstitution[] }[],
): typeof ingredients {
  return ingredients.map(ing => {
    // If already has substitutions from data, keep them
    if (ing.substitutions && ing.substitutions.length > 0) return ing;

    const subs = getSubstitutions(ing.name);

    if (subs.length > 0) {
      return { ...ing, substitutions: subs };
    }

    return ing;
  });
}

/** Helpers shared with other English-name matchers (e.g. nutrition). */
export { normalizeText as normalizeIngredientText, coreWords as ingredientCoreWords };
