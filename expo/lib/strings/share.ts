import type { StringTable } from './index';

/**
 * Copy for share cards, share messages and the celebration sheet.
 *
 * Grammar notes for translators:
 * - Templates avoid "from {country}" where the target language would need an
 *   article or a case ending on the country name (de/fr/it/nl/pt/pl) and use
 *   "({country})" instead.
 * - Polish avoids first-person past tense (gendered) — e.g. "Mam na koncie",
 *   "Ugotowane przeze mnie".
 * - French uses a no-break space ( ) before : ! ? % and inside « ».
 */

/** Plural variants. `few`/`many` are only needed for Polish. */
export type PluralForms = { one: string; other: string; few?: string; many?: string };

export type PluralCategory = 'one' | 'few' | 'many' | 'other';

/** CLDR plural category for the languages the app supports (integers only). */
export function pluralCategory(n: number, lang: string): PluralCategory {
  const abs = Math.abs(n);
  if (!Number.isInteger(abs)) return 'other';
  if (lang === 'pl') {
    if (abs === 1) return 'one';
    const mod10 = abs % 10;
    const mod100 = abs % 100;
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'few';
    return 'many';
  }
  if (lang === 'fr') return abs === 0 || abs === 1 ? 'one' : 'other';
  return abs === 1 ? 'one' : 'other';
}

/** Pick the right plural template for `n` (placeholders are left for `fill`). */
export function selectPlural(forms: PluralForms, n: number, lang: string): string {
  const category = pluralCategory(n, lang);
  return forms[category] ?? forms.other;
}

export type ShareStrings = {
  // Story cards
  progressKicker: string;
  /** {n} = countries with at least one cooked dish */
  progressHeadline: PluralForms;
  progressHeadlineZero: string;
  statExplored: string;
  statCompleted: string;
  statDishes: string;
  statStreak: string;
  passportTitle: string;
  cookedKicker: string;
  badgeKicker: string;
  badgeFooter: string;
  /** {date} */
  earnedOn: string;
  footerCta: string;
  storeIos: string;
  storeAndroid: string;

  // Plain-text share messages
  appInvite: string;
  /** {flag} {name} {type} {country} */
  recipeHeader: string;
  recipeMain: string;
  recipeDessert: string;
  /** {minutes} */
  recipeTime: string;
  /** {n} */
  recipeServings: PluralForms;
  ingredients: string;
  instructions: string;
  exploreMore: string;
  /** {flag} {dish} {country} */
  cookedMessage: string;
  cookedTagline: string;
  /** {dish} */
  cookedTitle: string;
  progressTitle: string;
  /** {visited} {total} {pct} */
  progressExplored: string;
  progressDishes: string;
  progressQuizzes: string;
  progressPoints: string;
  progressStreak: string;
  progressJoin: string;
  progressShareTitle: string;
  /** {badge} {description} */
  badgeMessage: string;
  /** {badge} */
  badgeShareTitle: string;

  // Celebration sheet
  celebrateDish: string;
  celebrateQuiz: string;
  celebrateBadge: string;
  /** {n} */
  pointsEarned: PluralForms;
  newBadge: string;
  share: string;
  continue: string;
  remindStreak: string;
  remindersOn: string;

  // Buttons / accessibility
  shareProgress: string;
  shareBadge: string;
  sharePhoto: string;
  shareDialogTitle: string;
};

export const shareStrings: StringTable<ShareStrings> = {
  en: {
    progressKicker: 'My food journey',
    progressHeadline: {
      one: "I've cooked my way through {n} country",
      other: "I've cooked my way through {n} countries",
    },
    progressHeadlineZero: 'My food journey around the world has begun',
    statExplored: 'Countries explored',
    statCompleted: 'Countries completed',
    statDishes: 'Dishes cooked',
    statStreak: 'Day streak',
    passportTitle: 'My passport stamps',
    cookedKicker: 'I cooked',
    badgeKicker: 'Badge unlocked!',
    badgeFooter: 'Unlocked on World Food Journey',
    earnedOn: 'Earned {date}',
    footerCta: 'Cook the world with me',
    storeIos: 'Download on the App Store',
    storeAndroid: 'Get it on Google Play',

    appInvite: "🌍 I'm cooking my way around the world with World Food Journey — recipes, food culture and quizzes from 195 countries. Join me!",
    recipeHeader: '{flag} {name} — {type} from {country}',
    recipeMain: 'Main dish',
    recipeDessert: 'Dessert',
    recipeTime: '⏱ {minutes} min',
    recipeServings: { one: '👥 {n} serving', other: '👥 {n} servings' },
    ingredients: '🧾 Ingredients:',
    instructions: '👩‍🍳 Instructions:',
    exploreMore: '🌍 Explore more recipes on World Food Journey',
    cookedMessage: '{flag} I just cooked {dish} from {country}!',
    cookedTagline: '🍽 Made with World Food Journey — explore cuisines from around the world!',
    cookedTitle: 'I cooked {dish}!',
    progressTitle: '🌍 My World Food Journey',
    progressExplored: '🗺 Countries explored: {visited}/{total} ({pct}%)',
    progressDishes: '🍳 Dishes cooked: {n}',
    progressQuizzes: '🧠 Quizzes completed: {n}',
    progressPoints: '⭐ Points earned: {n}',
    progressStreak: '🔥 Day streak: {n}',
    progressJoin: 'Join me on World Food Journey!',
    progressShareTitle: 'My World Food Journey stats',
    badgeMessage: '🏅 I unlocked the “{badge}” badge on World Food Journey! {description}',
    badgeShareTitle: 'Badge unlocked: {badge}',

    celebrateDish: 'Nice work, chef!',
    celebrateQuiz: 'Quiz complete!',
    celebrateBadge: 'Badge unlocked!',
    pointsEarned: { one: '+{n} point', other: '+{n} points' },
    newBadge: 'New badge',
    share: 'Share',
    continue: 'Continue',
    remindStreak: 'Remind me to keep my streak',
    remindersOn: 'Streak reminders on',

    shareProgress: 'Share my progress',
    shareBadge: 'Share this badge',
    sharePhoto: 'Share photo',
    shareDialogTitle: 'Share your food journey',
  },

  sv: {
    progressKicker: 'Min matresa',
    progressHeadline: {
      one: 'Jag har lagat mat från {n} land',
      other: 'Jag har lagat mat från {n} länder',
    },
    progressHeadlineZero: 'Min matresa jorden runt har börjat',
    statExplored: 'Utforskade länder',
    statCompleted: 'Avklarade länder',
    statDishes: 'Lagade rätter',
    statStreak: 'Dagars svit',
    passportTitle: 'Mina passtämplar',
    cookedKicker: 'Jag lagade',
    badgeKicker: 'Märke upplåst!',
    badgeFooter: 'Upplåst i World Food Journey',
    earnedOn: 'Förtjänat {date}',
    footerCta: 'Laga mat jorden runt med mig',
    storeIos: 'Hämta i App Store',
    storeAndroid: 'Ladda ned på Google Play',

    appInvite: '🌍 Jag lagar mat jorden runt med World Food Journey — recept, matkultur och quiz från 195 länder. Häng med!',
    recipeHeader: '{flag} {name} — {type} från {country}',
    recipeMain: 'Huvudrätt',
    recipeDessert: 'Efterrätt',
    recipeTime: '⏱ {minutes} min',
    recipeServings: { one: '👥 {n} portion', other: '👥 {n} portioner' },
    ingredients: '🧾 Ingredienser:',
    instructions: '👩‍🍳 Gör så här:',
    exploreMore: '🌍 Upptäck fler recept i World Food Journey',
    cookedMessage: '{flag} Jag har precis lagat {dish} från {country}!',
    cookedTagline: '🍽 Lagat med World Food Journey — upptäck världens kök!',
    cookedTitle: 'Jag lagade {dish}!',
    progressTitle: '🌍 Min World Food Journey',
    progressExplored: '🗺 Utforskade länder: {visited}/{total} ({pct} %)',
    progressDishes: '🍳 Lagade rätter: {n}',
    progressQuizzes: '🧠 Genomförda quiz: {n}',
    progressPoints: '⭐ Intjänade poäng: {n}',
    progressStreak: '🔥 Dagars svit: {n}',
    progressJoin: 'Häng med på World Food Journey!',
    progressShareTitle: 'Min statistik i World Food Journey',
    badgeMessage: '🏅 Jag har låst upp märket ”{badge}” i World Food Journey! {description}',
    badgeShareTitle: 'Märke upplåst: {badge}',

    celebrateDish: 'Snyggt jobbat, kocken!',
    celebrateQuiz: 'Quiz klart!',
    celebrateBadge: 'Märke upplåst!',
    pointsEarned: { one: '+{n} poäng', other: '+{n} poäng' },
    newBadge: 'Nytt märke',
    share: 'Dela',
    continue: 'Fortsätt',
    remindStreak: 'Påminn mig så att jag håller sviten',
    remindersOn: 'Svitpåminnelser på',

    shareProgress: 'Dela mina framsteg',
    shareBadge: 'Dela det här märket',
    sharePhoto: 'Dela foto',
    shareDialogTitle: 'Dela din matresa',
  },

  de: {
    progressKicker: 'Meine kulinarische Weltreise',
    progressHeadline: {
      one: 'Ich habe mich durch {n} Land gekocht',
      other: 'Ich habe mich durch {n} Länder gekocht',
    },
    progressHeadlineZero: 'Meine kulinarische Weltreise hat begonnen',
    statExplored: 'Entdeckte Länder',
    statCompleted: 'Abgeschlossene Länder',
    statDishes: 'Gekochte Gerichte',
    statStreak: 'Tage in Serie',
    passportTitle: 'Meine Passstempel',
    cookedKicker: 'Selbst gekocht',
    badgeKicker: 'Abzeichen freigeschaltet!',
    badgeFooter: 'Freigeschaltet in World Food Journey',
    earnedOn: 'Verdient am {date}',
    footerCta: 'Koch mit mir um die Welt',
    storeIos: 'Laden im App Store',
    storeAndroid: 'Jetzt bei Google Play',

    appInvite: '🌍 Ich koche mich mit World Food Journey um die Welt – Rezepte, Esskultur und Quiz aus 195 Ländern. Mach mit!',
    recipeHeader: '{flag} {name} – {type} ({country})',
    recipeMain: 'Hauptgericht',
    recipeDessert: 'Dessert',
    recipeTime: '⏱ {minutes} Min.',
    recipeServings: { one: '👥 {n} Portion', other: '👥 {n} Portionen' },
    ingredients: '🧾 Zutaten:',
    instructions: '👩‍🍳 Zubereitung:',
    exploreMore: '🌍 Entdecke mehr Rezepte in World Food Journey',
    cookedMessage: '{flag} Gerade selbst gekocht: {dish} ({country})!',
    cookedTagline: '🍽 Gekocht mit World Food Journey – entdecke die Küchen der Welt!',
    cookedTitle: '{dish} – selbst gekocht!',
    progressTitle: '🌍 Meine World Food Journey',
    progressExplored: '🗺 Entdeckte Länder: {visited}/{total} ({pct} %)',
    progressDishes: '🍳 Gekochte Gerichte: {n}',
    progressQuizzes: '🧠 Abgeschlossene Quiz: {n}',
    progressPoints: '⭐ Gesammelte Punkte: {n}',
    progressStreak: '🔥 Tage in Serie: {n}',
    progressJoin: 'Koch mit mir bei World Food Journey!',
    progressShareTitle: 'Meine World-Food-Journey-Statistik',
    badgeMessage: '🏅 Ich habe in World Food Journey das Abzeichen „{badge}“ freigeschaltet! {description}',
    badgeShareTitle: 'Abzeichen freigeschaltet: {badge}',

    celebrateDish: 'Lecker gemacht!',
    celebrateQuiz: 'Quiz geschafft!',
    celebrateBadge: 'Abzeichen freigeschaltet!',
    pointsEarned: { one: '+{n} Punkt', other: '+{n} Punkte' },
    newBadge: 'Neues Abzeichen',
    share: 'Teilen',
    continue: 'Weiter',
    remindStreak: 'Erinnere mich an meine Serie',
    remindersOn: 'Serien-Erinnerungen aktiv',

    shareProgress: 'Meinen Fortschritt teilen',
    shareBadge: 'Dieses Abzeichen teilen',
    sharePhoto: 'Foto teilen',
    shareDialogTitle: 'Teile deine kulinarische Reise',
  },

  fr: {
    progressKicker: 'Mon tour du monde culinaire',
    progressHeadline: {
      one: "J’ai fait le tour de {n} pays en cuisine",
      other: "J’ai fait le tour de {n} pays en cuisine",
    },
    progressHeadlineZero: 'Mon tour du monde culinaire commence',
    statExplored: 'Pays explorés',
    statCompleted: 'Pays terminés',
    statDishes: 'Plats cuisinés',
    statStreak: 'Jours d’affilée',
    passportTitle: 'Mes tampons de passeport',
    cookedKicker: 'J’ai cuisiné',
    badgeKicker: 'Badge débloqué !',
    badgeFooter: 'Débloqué sur World Food Journey',
    earnedOn: 'Obtenu le {date}',
    footerCta: 'Cuisinez le monde avec moi',
    storeIos: 'Télécharger dans l’App Store',
    storeAndroid: 'Disponible sur Google Play',

    appInvite: '🌍 Je fais le tour du monde en cuisine avec World Food Journey — recettes, culture culinaire et quiz de 195 pays. Rejoignez-moi !',
    recipeHeader: '{flag} {name} — {type} ({country})',
    recipeMain: 'Plat principal',
    recipeDessert: 'Dessert',
    recipeTime: '⏱ {minutes} min',
    recipeServings: { one: '👥 {n} portion', other: '👥 {n} portions' },
    ingredients: '🧾 Ingrédients :',
    instructions: '👩‍🍳 Préparation :',
    exploreMore: '🌍 Découvrez d’autres recettes sur World Food Journey',
    cookedMessage: '{flag} Je viens de cuisiner {dish} ({country}) !',
    cookedTagline: '🍽 Préparé avec World Food Journey — explorez les cuisines du monde entier !',
    cookedTitle: 'J’ai cuisiné {dish} !',
    progressTitle: '🌍 Mon World Food Journey',
    progressExplored: '🗺 Pays explorés : {visited}/{total} ({pct} %)',
    progressDishes: '🍳 Plats cuisinés : {n}',
    progressQuizzes: '🧠 Quiz terminés : {n}',
    progressPoints: '⭐ Points gagnés : {n}',
    progressStreak: '🔥 Jours d’affilée : {n}',
    progressJoin: 'Rejoignez-moi sur World Food Journey !',
    progressShareTitle: 'Mes stats World Food Journey',
    badgeMessage: '🏅 J’ai débloqué le badge « {badge} » sur World Food Journey ! {description}',
    badgeShareTitle: 'Badge débloqué : {badge}',

    celebrateDish: 'Bravo, chef !',
    celebrateQuiz: 'Quiz terminé !',
    celebrateBadge: 'Badge débloqué !',
    pointsEarned: { one: '+{n} point', other: '+{n} points' },
    newBadge: 'Nouveau badge',
    share: 'Partager',
    continue: 'Continuer',
    remindStreak: 'Me rappeler de garder ma série',
    remindersOn: 'Rappels de série activés',

    shareProgress: 'Partager ma progression',
    shareBadge: 'Partager ce badge',
    sharePhoto: 'Partager la photo',
    shareDialogTitle: 'Partagez votre voyage culinaire',
  },

  es: {
    progressKicker: 'Mi viaje gastronómico',
    progressHeadline: {
      one: 'He viajado a {n} país desde mi cocina',
      other: 'He viajado a {n} países desde mi cocina',
    },
    progressHeadlineZero: 'Mi vuelta al mundo gastronómica acaba de empezar',
    statExplored: 'Países explorados',
    statCompleted: 'Países completados',
    statDishes: 'Platos cocinados',
    statStreak: 'Días de racha',
    passportTitle: 'Mis sellos del pasaporte',
    cookedKicker: 'Hecho por mí',
    badgeKicker: '¡Insignia desbloqueada!',
    badgeFooter: 'Desbloqueada en World Food Journey',
    earnedOn: 'Conseguida el {date}',
    footerCta: 'Cocina el mundo conmigo',
    storeIos: 'Descárgalo en el App Store',
    storeAndroid: 'Disponible en Google Play',

    appInvite: '🌍 Estoy dando la vuelta al mundo cocinando con World Food Journey: recetas, cultura gastronómica y cuestionarios de 195 países. ¡Únete!',
    recipeHeader: '{flag} {name} — {type} ({country})',
    recipeMain: 'Plato principal',
    recipeDessert: 'Postre',
    recipeTime: '⏱ {minutes} min',
    recipeServings: { one: '👥 {n} porción', other: '👥 {n} porciones' },
    ingredients: '🧾 Ingredientes:',
    instructions: '👩‍🍳 Preparación:',
    exploreMore: '🌍 Descubre más recetas en World Food Journey',
    cookedMessage: '{flag} ¡Acabo de cocinar {dish} ({country})!',
    cookedTagline: '🍽 Hecho con World Food Journey: ¡descubre cocinas de todo el mundo!',
    cookedTitle: '¡{dish}, hecho por mí!',
    progressTitle: '🌍 Mi World Food Journey',
    progressExplored: '🗺 Países explorados: {visited}/{total} ({pct} %)',
    progressDishes: '🍳 Platos cocinados: {n}',
    progressQuizzes: '🧠 Cuestionarios completados: {n}',
    progressPoints: '⭐ Puntos ganados: {n}',
    progressStreak: '🔥 Días de racha: {n}',
    progressJoin: '¡Únete a mí en World Food Journey!',
    progressShareTitle: 'Mis estadísticas de World Food Journey',
    badgeMessage: '🏅 ¡Nueva insignia en World Food Journey: «{badge}»! {description}',
    badgeShareTitle: 'Insignia desbloqueada: {badge}',

    celebrateDish: '¡Buen trabajo, chef!',
    celebrateQuiz: '¡Cuestionario completado!',
    celebrateBadge: '¡Insignia desbloqueada!',
    pointsEarned: { one: '+{n} punto', other: '+{n} puntos' },
    newBadge: 'Nueva insignia',
    share: 'Compartir',
    continue: 'Continuar',
    remindStreak: 'Recuérdame mantener mi racha',
    remindersOn: 'Recordatorios de racha activados',

    shareProgress: 'Compartir mi progreso',
    shareBadge: 'Compartir esta insignia',
    sharePhoto: 'Compartir foto',
    shareDialogTitle: 'Comparte tu viaje gastronómico',
  },

  it: {
    progressKicker: 'Il mio viaggio nel gusto',
    progressHeadline: {
      one: 'Ho fatto il giro di {n} paese ai fornelli',
      other: 'Ho fatto il giro di {n} paesi ai fornelli',
    },
    progressHeadlineZero: 'Il mio giro del mondo ai fornelli è iniziato',
    statExplored: 'Paesi esplorati',
    statCompleted: 'Paesi completati',
    statDishes: 'Piatti cucinati',
    statStreak: 'Giorni di fila',
    passportTitle: 'I miei timbri sul passaporto',
    cookedKicker: 'Ho cucinato',
    badgeKicker: 'Badge sbloccato!',
    badgeFooter: 'Sbloccato su World Food Journey',
    earnedOn: 'Ottenuto il {date}',
    footerCta: 'Cucina il mondo con me',
    storeIos: 'Scarica su App Store',
    storeAndroid: 'Disponibile su Google Play',

    appInvite: '🌍 Sto facendo il giro del mondo ai fornelli con World Food Journey: ricette, cultura gastronomica e quiz da 195 paesi. Unisciti a me!',
    recipeHeader: '{flag} {name} — {type} ({country})',
    recipeMain: 'Piatto principale',
    recipeDessert: 'Dolce',
    recipeTime: '⏱ {minutes} min',
    recipeServings: { one: '👥 {n} porzione', other: '👥 {n} porzioni' },
    ingredients: '🧾 Ingredienti:',
    instructions: '👩‍🍳 Preparazione:',
    exploreMore: '🌍 Scopri altre ricette su World Food Journey',
    cookedMessage: '{flag} Ho appena cucinato {dish} ({country})!',
    cookedTagline: '🍽 Preparato con World Food Journey: scopri le cucine di tutto il mondo!',
    cookedTitle: 'Ho cucinato {dish}!',
    progressTitle: '🌍 Il mio World Food Journey',
    progressExplored: '🗺 Paesi esplorati: {visited}/{total} ({pct}%)',
    progressDishes: '🍳 Piatti cucinati: {n}',
    progressQuizzes: '🧠 Quiz completati: {n}',
    progressPoints: '⭐ Punti guadagnati: {n}',
    progressStreak: '🔥 Giorni di fila: {n}',
    progressJoin: 'Unisciti a me su World Food Journey!',
    progressShareTitle: 'Le mie statistiche su World Food Journey',
    badgeMessage: '🏅 Ho sbloccato il badge “{badge}” su World Food Journey! {description}',
    badgeShareTitle: 'Badge sbloccato: {badge}',

    celebrateDish: 'Ottimo lavoro, chef!',
    celebrateQuiz: 'Quiz completato!',
    celebrateBadge: 'Badge sbloccato!',
    pointsEarned: { one: '+{n} punto', other: '+{n} punti' },
    newBadge: 'Nuovo badge',
    share: 'Condividi',
    continue: 'Continua',
    remindStreak: 'Ricordami di mantenere la serie',
    remindersOn: 'Promemoria serie attivi',

    shareProgress: 'Condividi i miei progressi',
    shareBadge: 'Condividi questo badge',
    sharePhoto: 'Condividi foto',
    shareDialogTitle: 'Condividi il tuo viaggio nel gusto',
  },

  pl: {
    progressKicker: 'Moja kulinarna podróż',
    // After "z" the noun takes the genitive: z 1 kraju, z 2/5/22 krajów.
    progressHeadline: {
      one: 'Mam na koncie dania z {n} kraju',
      few: 'Mam na koncie dania z {n} krajów',
      many: 'Mam na koncie dania z {n} krajów',
      other: 'Mam na koncie dania z {n} krajów',
    },
    progressHeadlineZero: 'Moja kulinarna podróż dookoła świata właśnie się zaczęła',
    statExplored: 'Odkryte kraje',
    statCompleted: 'Ukończone kraje',
    statDishes: 'Ugotowane dania',
    statStreak: 'Dni z rzędu',
    passportTitle: 'Moje pieczątki w paszporcie',
    cookedKicker: 'Ugotowane przeze mnie',
    badgeKicker: 'Odznaka odblokowana!',
    badgeFooter: 'Zdobyta w World Food Journey',
    earnedOn: 'Zdobyta {date}',
    footerCta: 'Gotuj ze mną dania z całego świata',
    storeIos: 'Pobierz z App Store',
    storeAndroid: 'Pobierz z Google Play',

    appInvite: '🌍 Gotuję dania z całego świata z World Food Journey — przepisy, kultura kulinarna i quizy ze 195 krajów. Dołącz do mnie!',
    recipeHeader: '{flag} {name} — {type} ({country})',
    recipeMain: 'Danie główne',
    recipeDessert: 'Deser',
    recipeTime: '⏱ {minutes} min',
    recipeServings: {
      one: '👥 {n} porcja',
      few: '👥 {n} porcje',
      many: '👥 {n} porcji',
      other: '👥 {n} porcji',
    },
    ingredients: '🧾 Składniki:',
    instructions: '👩‍🍳 Przygotowanie:',
    exploreMore: '🌍 Odkryj więcej przepisów w World Food Journey',
    cookedMessage: '{flag} Prosto z mojej kuchni: {dish} ({country})!',
    cookedTagline: '🍽 Ugotowane z World Food Journey — odkrywaj kuchnie z całego świata!',
    cookedTitle: 'Ugotowane: {dish}!',
    progressTitle: '🌍 Moja podróż z World Food Journey',
    progressExplored: '🗺 Odkryte kraje: {visited}/{total} ({pct}%)',
    progressDishes: '🍳 Ugotowane dania: {n}',
    progressQuizzes: '🧠 Ukończone quizy: {n}',
    progressPoints: '⭐ Zdobyte punkty: {n}',
    progressStreak: '🔥 Dni z rzędu: {n}',
    progressJoin: 'Dołącz do mnie w World Food Journey!',
    progressShareTitle: 'Moje statystyki w World Food Journey',
    badgeMessage: '🏅 Nowa odznaka w World Food Journey: „{badge}”! {description}',
    badgeShareTitle: 'Odznaka odblokowana: {badge}',

    celebrateDish: 'Pyszna robota!',
    celebrateQuiz: 'Quiz ukończony!',
    celebrateBadge: 'Odznaka odblokowana!',
    pointsEarned: {
      one: '+{n} punkt',
      few: '+{n} punkty',
      many: '+{n} punktów',
      other: '+{n} punktu',
    },
    newBadge: 'Nowa odznaka',
    share: 'Udostępnij',
    continue: 'Kontynuuj',
    remindStreak: 'Przypominaj mi o mojej serii',
    remindersOn: 'Przypomnienia o serii włączone',

    shareProgress: 'Udostępnij moje postępy',
    shareBadge: 'Udostępnij tę odznakę',
    sharePhoto: 'Udostępnij zdjęcie',
    shareDialogTitle: 'Udostępnij swoją kulinarną podróż',
  },

  nl: {
    progressKicker: 'Mijn culinaire wereldreis',
    progressHeadline: {
      one: 'Ik heb me door {n} land heen gekookt',
      other: 'Ik heb me door {n} landen heen gekookt',
    },
    progressHeadlineZero: 'Mijn culinaire wereldreis is begonnen',
    statExplored: 'Ontdekte landen',
    statCompleted: 'Voltooide landen',
    statDishes: 'Gekookte gerechten',
    statStreak: 'Dagen op rij',
    passportTitle: 'Mijn paspoortstempels',
    cookedKicker: 'Zelf gekookt',
    badgeKicker: 'Badge ontgrendeld!',
    badgeFooter: 'Ontgrendeld in World Food Journey',
    earnedOn: 'Verdiend op {date}',
    footerCta: 'Kook met me mee de wereld rond',
    storeIos: 'Download in de App Store',
    storeAndroid: 'Ontdek het op Google Play',

    appInvite: '🌍 Ik kook de wereld rond met World Food Journey — recepten, eetcultuur en quizzen uit 195 landen. Doe je mee?',
    recipeHeader: '{flag} {name} — {type} ({country})',
    recipeMain: 'Hoofdgerecht',
    recipeDessert: 'Dessert',
    recipeTime: '⏱ {minutes} min',
    recipeServings: { one: '👥 {n} portie', other: '👥 {n} porties' },
    ingredients: '🧾 Ingrediënten:',
    instructions: '👩‍🍳 Bereiding:',
    exploreMore: '🌍 Ontdek meer recepten in World Food Journey',
    cookedMessage: '{flag} Net zelf gekookt: {dish} ({country})!',
    cookedTagline: '🍽 Gemaakt met World Food Journey — ontdek keukens van over de hele wereld!',
    cookedTitle: 'Zelf gekookt: {dish}!',
    progressTitle: '🌍 Mijn World Food Journey',
    progressExplored: '🗺 Ontdekte landen: {visited}/{total} ({pct}%)',
    progressDishes: '🍳 Gekookte gerechten: {n}',
    progressQuizzes: '🧠 Voltooide quizzen: {n}',
    progressPoints: '⭐ Verdiende punten: {n}',
    progressStreak: '🔥 Dagen op rij: {n}',
    progressJoin: 'Kook met me mee op World Food Journey!',
    progressShareTitle: 'Mijn World Food Journey-statistieken',
    badgeMessage: '🏅 Ik heb de badge ‘{badge}’ ontgrendeld in World Food Journey! {description}',
    badgeShareTitle: 'Badge ontgrendeld: {badge}',

    celebrateDish: 'Heerlijk gedaan, chef!',
    celebrateQuiz: 'Quiz voltooid!',
    celebrateBadge: 'Badge ontgrendeld!',
    pointsEarned: { one: '+{n} punt', other: '+{n} punten' },
    newBadge: 'Nieuwe badge',
    share: 'Delen',
    continue: 'Doorgaan',
    remindStreak: 'Herinner me aan mijn reeks',
    remindersOn: 'Reeksherinneringen staan aan',

    shareProgress: 'Mijn voortgang delen',
    shareBadge: 'Deze badge delen',
    sharePhoto: 'Foto delen',
    shareDialogTitle: 'Deel je culinaire reis',
  },

  // Brazilian Portuguese, matching lib/i18n.ts (compartilhar, emblemas, sequência).
  pt: {
    progressKicker: 'Minha viagem gastronômica',
    progressHeadline: {
      one: 'Já cozinhei pratos de {n} país',
      other: 'Já cozinhei pratos de {n} países',
    },
    progressHeadlineZero: 'Minha volta ao mundo na cozinha começou',
    statExplored: 'Países explorados',
    statCompleted: 'Países concluídos',
    statDishes: 'Pratos preparados',
    statStreak: 'Dias seguidos',
    passportTitle: 'Carimbos no meu passaporte',
    cookedKicker: 'Eu cozinhei',
    badgeKicker: 'Emblema desbloqueado!',
    badgeFooter: 'Desbloqueado no World Food Journey',
    earnedOn: 'Conquistado em {date}',
    footerCta: 'Cozinhe o mundo comigo',
    storeIos: 'Baixar na App Store',
    storeAndroid: 'Disponível no Google Play',

    appInvite: '🌍 Estou dando a volta ao mundo na cozinha com o World Food Journey — receitas, cultura gastronômica e quizzes de 195 países. Vem comigo!',
    recipeHeader: '{flag} {name} — {type} ({country})',
    recipeMain: 'Prato principal',
    recipeDessert: 'Sobremesa',
    recipeTime: '⏱ {minutes} min',
    recipeServings: { one: '👥 {n} porção', other: '👥 {n} porções' },
    ingredients: '🧾 Ingredientes:',
    instructions: '👩‍🍳 Modo de preparo:',
    exploreMore: '🌍 Descubra mais receitas no World Food Journey',
    cookedMessage: '{flag} Acabei de cozinhar {dish} ({country})!',
    cookedTagline: '🍽 Feito com o World Food Journey — descubra cozinhas do mundo todo!',
    cookedTitle: 'Eu cozinhei {dish}!',
    progressTitle: '🌍 Minha jornada no World Food Journey',
    progressExplored: '🗺 Países explorados: {visited}/{total} ({pct}%)',
    progressDishes: '🍳 Pratos preparados: {n}',
    progressQuizzes: '🧠 Questionários concluídos: {n}',
    progressPoints: '⭐ Pontos ganhos: {n}',
    progressStreak: '🔥 Dias seguidos: {n}',
    progressJoin: 'Vem comigo no World Food Journey!',
    progressShareTitle: 'Minhas estatísticas no World Food Journey',
    badgeMessage: '🏅 Desbloqueei o emblema “{badge}” no World Food Journey! {description}',
    badgeShareTitle: 'Emblema desbloqueado: {badge}',

    celebrateDish: 'Mandou bem, chef!',
    celebrateQuiz: 'Questionário concluído!',
    celebrateBadge: 'Emblema desbloqueado!',
    pointsEarned: { one: '+{n} ponto', other: '+{n} pontos' },
    newBadge: 'Novo emblema',
    share: 'Compartilhar',
    continue: 'Continuar',
    remindStreak: 'Me lembre de manter minha sequência',
    remindersOn: 'Lembretes de sequência ativados',

    shareProgress: 'Compartilhar meu progresso',
    shareBadge: 'Compartilhar este emblema',
    sharePhoto: 'Compartilhar foto',
    shareDialogTitle: 'Compartilhe sua viagem gastronômica',
  },
};
