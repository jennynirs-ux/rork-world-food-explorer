import type { StringTable } from './index';

/**
 * Copy for the paywall and the locked-country preview.
 * Plain strings use {placeholders} (see fill()); counts are functions so each
 * language can pluralise naturally.
 */
export type PaywallStrings = {
  /** {country} is the (flag +) country name. */
  unlockCountry: string;
  countrySubtitle: string;
  /** {pct} */
  saveVsAllPacks: string;
  /** {pct} */
  saveVsRemainingPacks: string;
  seeAllPacks: string;
  showFewerPacks: string;
  oneTimePurchase: string;
  allUnlockedTitle: string;
  allUnlockedMessage: string;
  keepExploring: string;
  preview: string;
  moreCountries: (count: number) => string;
  /** {price} */
  fromPrice: string;
  recipeStats: (ingredients: number, steps: number) => string;
  recipesLockedTitle: string;
  recipesLockedBody: string;
  recipesPerkServings: string;
  recipesPerkCookingMode: string;
  recipesPerkExtras: string;
  quizLockedTitle: string;
  quizLockedBody: (questions: number) => string;
  quizPerkPoints: string;
  quizPerkRetake: string;
  unlockToSeeRecipe: string;
  /** Accessibility label for the country page's heart button. */
  favoriteLabel: string;
};

/** Polish has three plural forms: 1, 2–4 (not 12–14), and everything else. */
function plPlural(n: number, one: string, few: string, many: string): string {
  if (n === 1) return one;
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
}

export const paywallStrings: StringTable<PaywallStrings> = {
  en: {
    unlockCountry: 'Unlock {country}',
    countrySubtitle: 'Get the full recipes, step-by-step cooking mode and the quiz.',
    saveVsAllPacks: 'Save {pct}% vs. buying every pack',
    saveVsRemainingPacks: 'Save {pct}% vs. buying the remaining packs',
    seeAllPacks: 'See all packs',
    showFewerPacks: 'Show fewer packs',
    oneTimePurchase: 'One-time purchase · no subscription',
    allUnlockedTitle: 'Everything is unlocked',
    allUnlockedMessage: 'Every country, recipe and quiz is yours. Enjoy the journey!',
    keepExploring: 'Keep exploring',
    preview: 'Preview',
    moreCountries: (n) => `+${n} more ${n === 1 ? 'country' : 'countries'}`,
    fromPrice: 'from {price}',
    recipeStats: (i, s) => `${i} ${i === 1 ? 'ingredient' : 'ingredients'} · ${s} ${s === 1 ? 'step' : 'steps'}`,
    recipesLockedTitle: 'Unlock the full recipes',
    recipesLockedBody: 'Everything you need to cook these dishes in your own kitchen.',
    recipesPerkServings: 'Ingredients that scale to your servings',
    recipesPerkCookingMode: 'Step-by-step cooking mode with timers',
    recipesPerkExtras: 'Drinks, music and table decoration ideas',
    quizLockedTitle: 'Test your knowledge',
    quizLockedBody: (n) => `${n} ${n === 1 ? 'question' : 'questions'} about the country's food and culture.`,
    quizPerkPoints: 'Earn points and fill in your world map',
    quizPerkRetake: 'Retake it anytime to beat your best score',
    unlockToSeeRecipe: 'Unlock to see the full recipe',
    favoriteLabel: 'Favorite',
  },
  sv: {
    unlockCountry: 'Lås upp {country}',
    countrySubtitle: 'Få de kompletta recepten, matlagningsläget steg för steg och quizet.',
    saveVsAllPacks: 'Spara {pct} % jämfört med att köpa alla paket',
    saveVsRemainingPacks: 'Spara {pct} % jämfört med att köpa resterande paket',
    seeAllPacks: 'Visa alla paket',
    showFewerPacks: 'Visa färre paket',
    oneTimePurchase: 'Engångsköp · ingen prenumeration',
    allUnlockedTitle: 'Allt är upplåst',
    allUnlockedMessage: 'Alla länder, recept och quiz är dina. Trevlig resa!',
    keepExploring: 'Fortsätt utforska',
    preview: 'Förhandsvisning',
    moreCountries: (n) => `+${n} ${n === 1 ? 'land' : 'länder'} till`,
    fromPrice: 'från {price}',
    recipeStats: (i, s) => `${i} ${i === 1 ? 'ingrediens' : 'ingredienser'} · ${s} steg`,
    recipesLockedTitle: 'Lås upp de kompletta recepten',
    recipesLockedBody: 'Allt du behöver för att laga rätterna i ditt eget kök.',
    recipesPerkServings: 'Ingredienser som räknas om efter antal portioner',
    recipesPerkCookingMode: 'Matlagningsläge steg för steg med timer',
    recipesPerkExtras: 'Dryck, musik och dukningsidéer',
    quizLockedTitle: 'Testa dina kunskaper',
    quizLockedBody: (n) => `${n} ${n === 1 ? 'fråga' : 'frågor'} om landets mat och kultur.`,
    quizPerkPoints: 'Samla poäng och fyll i din världskarta',
    quizPerkRetake: 'Gör om det när du vill och slå ditt rekord',
    unlockToSeeRecipe: 'Lås upp för att se hela receptet',
    favoriteLabel: 'Favorit',
  },
  de: {
    unlockCountry: '{country} freischalten',
    countrySubtitle: 'Hol dir die kompletten Rezepte, den Schritt-für-Schritt-Kochmodus und das Quiz.',
    saveVsAllPacks: 'Spare {pct} % gegenüber allen Einzelpaketen',
    saveVsRemainingPacks: 'Spare {pct} % gegenüber den restlichen Paketen',
    seeAllPacks: 'Alle Pakete anzeigen',
    showFewerPacks: 'Weniger Pakete anzeigen',
    oneTimePurchase: 'Einmalkauf · kein Abo',
    allUnlockedTitle: 'Alles ist freigeschaltet',
    allUnlockedMessage: 'Alle Länder, Rezepte und Quizze gehören dir. Gute Reise!',
    keepExploring: 'Weiter entdecken',
    preview: 'Vorschau',
    moreCountries: (n) => `+${n} ${n === 1 ? 'weiteres Land' : 'weitere Länder'}`,
    fromPrice: 'ab {price}',
    recipeStats: (i, s) => `${i} ${i === 1 ? 'Zutat' : 'Zutaten'} · ${s} ${s === 1 ? 'Schritt' : 'Schritte'}`,
    recipesLockedTitle: 'Die kompletten Rezepte freischalten',
    recipesLockedBody: 'Alles, was du brauchst, um diese Gerichte in deiner eigenen Küche zu kochen.',
    recipesPerkServings: 'Zutatenmengen, die sich an deine Portionen anpassen',
    recipesPerkCookingMode: 'Schritt-für-Schritt-Kochmodus mit Timern',
    recipesPerkExtras: 'Getränke, Musik und Deko-Ideen für den Tisch',
    quizLockedTitle: 'Teste dein Wissen',
    quizLockedBody: (n) => `${n} ${n === 1 ? 'Frage' : 'Fragen'} zu Essen und Kultur des Landes.`,
    quizPerkPoints: 'Sammle Punkte und fülle deine Weltkarte',
    quizPerkRetake: 'Jederzeit wiederholen und den eigenen Rekord knacken',
    unlockToSeeRecipe: 'Freischalten, um das ganze Rezept zu sehen',
    favoriteLabel: 'Favorit',
  },
  fr: {
    unlockCountry: 'Débloquer : {country}',
    countrySubtitle: 'Accédez aux recettes complètes, au mode cuisine pas à pas et au quiz.',
    saveVsAllPacks: 'Économisez {pct} % par rapport à l’achat de tous les packs',
    saveVsRemainingPacks: 'Économisez {pct} % par rapport aux packs restants',
    seeAllPacks: 'Voir tous les packs',
    showFewerPacks: 'Afficher moins de packs',
    oneTimePurchase: 'Achat unique · sans abonnement',
    allUnlockedTitle: 'Tout est débloqué',
    allUnlockedMessage: 'Tous les pays, recettes et quiz sont à vous. Bon voyage !',
    keepExploring: 'Continuer à explorer',
    preview: 'Aperçu',
    moreCountries: (n) => `+${n} ${n > 1 ? 'autres' : 'autre'} pays`,
    fromPrice: 'dès {price}',
    recipeStats: (i, s) => `${i} ingrédient${i > 1 ? 's' : ''} · ${s} étape${s > 1 ? 's' : ''}`,
    recipesLockedTitle: 'Débloquez les recettes complètes',
    recipesLockedBody: 'Tout ce qu’il vous faut pour préparer ces plats chez vous.',
    recipesPerkServings: 'Des quantités adaptées au nombre de portions',
    recipesPerkCookingMode: 'Mode cuisine pas à pas avec minuteurs',
    recipesPerkExtras: 'Boissons, musique et idées de décoration de table',
    quizLockedTitle: 'Testez vos connaissances',
    quizLockedBody: (n) => `${n} question${n > 1 ? 's' : ''} sur la cuisine et la culture du pays.`,
    quizPerkPoints: 'Gagnez des points et complétez votre carte du monde',
    quizPerkRetake: 'Rejouez quand vous voulez pour battre votre record',
    unlockToSeeRecipe: 'Débloquez pour voir la recette complète',
    favoriteLabel: 'Favori',
  },
  es: {
    unlockCountry: 'Desbloquea {country}',
    countrySubtitle: 'Accede a las recetas completas, al modo cocina paso a paso y al cuestionario.',
    saveVsAllPacks: 'Ahorra un {pct} % frente a comprar todos los paquetes',
    saveVsRemainingPacks: 'Ahorra un {pct} % frente a comprar los paquetes restantes',
    seeAllPacks: 'Ver todos los paquetes',
    showFewerPacks: 'Ver menos paquetes',
    oneTimePurchase: 'Pago único · sin suscripción',
    allUnlockedTitle: 'Todo está desbloqueado',
    allUnlockedMessage: 'Todos los países, recetas y cuestionarios son tuyos. ¡Buen viaje!',
    keepExploring: 'Seguir explorando',
    preview: 'Vista previa',
    moreCountries: (n) => `+${n} ${n === 1 ? 'país' : 'países'} más`,
    fromPrice: 'desde {price}',
    recipeStats: (i, s) => `${i} ${i === 1 ? 'ingrediente' : 'ingredientes'} · ${s} ${s === 1 ? 'paso' : 'pasos'}`,
    recipesLockedTitle: 'Desbloquea las recetas completas',
    recipesLockedBody: 'Todo lo que necesitas para preparar estos platos en casa.',
    recipesPerkServings: 'Ingredientes ajustados a tus raciones',
    recipesPerkCookingMode: 'Modo cocina paso a paso con temporizadores',
    recipesPerkExtras: 'Bebidas, música e ideas para decorar la mesa',
    quizLockedTitle: 'Pon a prueba lo que sabes',
    quizLockedBody: (n) => `${n} ${n === 1 ? 'pregunta' : 'preguntas'} sobre la gastronomía y la cultura del país.`,
    quizPerkPoints: 'Gana puntos y completa tu mapa del mundo',
    quizPerkRetake: 'Repítelo cuando quieras para superar tu récord',
    unlockToSeeRecipe: 'Desbloquea para ver la receta completa',
    favoriteLabel: 'Favorito',
  },
  it: {
    unlockCountry: 'Sblocca: {country}',
    countrySubtitle: 'Accedi alle ricette complete, alla modalità cucina passo passo e al quiz.',
    saveVsAllPacks: 'Risparmia il {pct}% rispetto all’acquisto di tutti i pacchetti',
    saveVsRemainingPacks: 'Risparmia il {pct}% rispetto ai pacchetti rimanenti',
    seeAllPacks: 'Vedi tutti i pacchetti',
    showFewerPacks: 'Mostra meno pacchetti',
    oneTimePurchase: 'Acquisto una tantum · nessun abbonamento',
    allUnlockedTitle: 'Hai sbloccato tutto',
    allUnlockedMessage: 'Tutti i paesi, le ricette e i quiz sono tuoi. Buon viaggio!',
    keepExploring: 'Continua a esplorare',
    preview: 'Anteprima',
    moreCountries: (n) => `+${n} ${n === 1 ? 'altro paese' : 'altri paesi'}`,
    fromPrice: 'da {price}',
    recipeStats: (i, s) => `${i} ${i === 1 ? 'ingrediente' : 'ingredienti'} · ${s} ${s === 1 ? 'passaggio' : 'passaggi'}`,
    recipesLockedTitle: 'Sblocca le ricette complete',
    recipesLockedBody: 'Tutto ciò che ti serve per preparare questi piatti a casa tua.',
    recipesPerkServings: 'Ingredienti adattati al numero di porzioni',
    recipesPerkCookingMode: 'Modalità cucina passo passo con timer',
    recipesPerkExtras: 'Bevande, musica e idee per apparecchiare la tavola',
    quizLockedTitle: 'Metti alla prova le tue conoscenze',
    quizLockedBody: (n) => `${n} ${n === 1 ? 'domanda' : 'domande'} sulla cucina e la cultura del paese.`,
    quizPerkPoints: 'Guadagna punti e completa la tua mappa del mondo',
    quizPerkRetake: 'Rifallo quando vuoi per battere il tuo record',
    unlockToSeeRecipe: 'Sblocca per vedere la ricetta completa',
    favoriteLabel: 'Preferito',
  },
  pl: {
    unlockCountry: 'Odblokuj: {country}',
    countrySubtitle: 'Zyskaj pełne przepisy, tryb gotowania krok po kroku i quiz.',
    saveVsAllPacks: 'Oszczędzasz {pct}% względem zakupu wszystkich pakietów',
    saveVsRemainingPacks: 'Oszczędzasz {pct}% względem pozostałych pakietów',
    seeAllPacks: 'Zobacz wszystkie pakiety',
    showFewerPacks: 'Pokaż mniej pakietów',
    oneTimePurchase: 'Jednorazowy zakup · bez subskrypcji',
    allUnlockedTitle: 'Wszystko jest odblokowane',
    allUnlockedMessage: 'Wszystkie kraje, przepisy i quizy są Twoje. Miłej podróży!',
    keepExploring: 'Odkrywaj dalej',
    preview: 'Podgląd',
    moreCountries: (n) => `+${n} ${plPlural(n, 'kolejny kraj', 'kolejne kraje', 'kolejnych krajów')}`,
    fromPrice: 'od {price}',
    recipeStats: (i, s) =>
      `${i} ${plPlural(i, 'składnik', 'składniki', 'składników')} · ${s} ${plPlural(s, 'krok', 'kroki', 'kroków')}`,
    recipesLockedTitle: 'Odblokuj pełne przepisy',
    recipesLockedBody: 'Wszystko, czego potrzebujesz, by przygotować te dania we własnej kuchni.',
    recipesPerkServings: 'Składniki przeliczane na liczbę porcji',
    recipesPerkCookingMode: 'Tryb gotowania krok po kroku z minutnikiem',
    recipesPerkExtras: 'Napoje, muzyka i pomysły na dekorację stołu',
    quizLockedTitle: 'Sprawdź swoją wiedzę',
    quizLockedBody: (n) => `${n} ${plPlural(n, 'pytanie', 'pytania', 'pytań')} o kuchni i kulturze tego kraju.`,
    quizPerkPoints: 'Zdobywaj punkty i uzupełniaj swoją mapę świata',
    quizPerkRetake: 'Powtarzaj go, kiedy chcesz, i pobijaj swój rekord',
    unlockToSeeRecipe: 'Odblokuj, aby zobaczyć cały przepis',
    favoriteLabel: 'Ulubione',
  },
  nl: {
    unlockCountry: 'Ontgrendel {country}',
    countrySubtitle: 'Krijg de volledige recepten, de stap-voor-stap kookmodus en de quiz.',
    saveVsAllPacks: 'Bespaar {pct}% ten opzichte van alle pakketten los',
    saveVsRemainingPacks: 'Bespaar {pct}% ten opzichte van de overige pakketten',
    seeAllPacks: 'Bekijk alle pakketten',
    showFewerPacks: 'Toon minder pakketten',
    oneTimePurchase: 'Eenmalige aankoop · geen abonnement',
    allUnlockedTitle: 'Alles is ontgrendeld',
    allUnlockedMessage: 'Alle landen, recepten en quizzen zijn van jou. Goede reis!',
    keepExploring: 'Verder ontdekken',
    preview: 'Voorproefje',
    moreCountries: (n) => `+${n} extra ${n === 1 ? 'land' : 'landen'}`,
    fromPrice: 'vanaf {price}',
    recipeStats: (i, s) => `${i} ${i === 1 ? 'ingrediënt' : 'ingrediënten'} · ${s} ${s === 1 ? 'stap' : 'stappen'}`,
    recipesLockedTitle: 'Ontgrendel de volledige recepten',
    recipesLockedBody: 'Alles wat je nodig hebt om deze gerechten in je eigen keuken te maken.',
    recipesPerkServings: 'Ingrediënten afgestemd op je aantal porties',
    recipesPerkCookingMode: 'Stap-voor-stap kookmodus met timers',
    recipesPerkExtras: 'Drankjes, muziek en ideeën om de tafel te dekken',
    quizLockedTitle: 'Test je kennis',
    quizLockedBody: (n) => `${n} ${n === 1 ? 'vraag' : 'vragen'} over het eten en de cultuur van het land.`,
    quizPerkPoints: 'Verdien punten en vul je wereldkaart aan',
    quizPerkRetake: 'Doe hem opnieuw wanneer je wilt en verbeter je record',
    unlockToSeeRecipe: 'Ontgrendel om het hele recept te zien',
    favoriteLabel: 'Favoriet',
  },
  pt: {
    unlockCountry: 'Desbloquear: {country}',
    countrySubtitle: 'Tenha acesso às receitas completas, ao modo de cozinha passo a passo e ao questionário.',
    saveVsAllPacks: 'Economize {pct}% em relação a comprar todos os pacotes',
    saveVsRemainingPacks: 'Economize {pct}% em relação aos pacotes restantes',
    seeAllPacks: 'Ver todos os pacotes',
    showFewerPacks: 'Ver menos pacotes',
    oneTimePurchase: 'Compra única · sem assinatura',
    allUnlockedTitle: 'Tudo está desbloqueado',
    allUnlockedMessage: 'Todos os países, receitas e questionários são seus. Boa viagem!',
    keepExploring: 'Explorar mais',
    preview: 'Prévia',
    moreCountries: (n) => `+${n} ${n === 1 ? 'outro país' : 'outros países'}`,
    fromPrice: 'a partir de {price}',
    recipeStats: (i, s) => `${i} ${i === 1 ? 'ingrediente' : 'ingredientes'} · ${s} ${s === 1 ? 'passo' : 'passos'}`,
    recipesLockedTitle: 'Desbloqueie as receitas completas',
    recipesLockedBody: 'Tudo o que precisa para preparar estes pratos em casa.',
    recipesPerkServings: 'Ingredientes ajustados ao número de porções',
    recipesPerkCookingMode: 'Modo de cozinha passo a passo com temporizadores',
    recipesPerkExtras: 'Bebidas, música e ideias para decorar a mesa',
    quizLockedTitle: 'Teste os seus conhecimentos',
    quizLockedBody: (n) => `${n} ${n === 1 ? 'pergunta' : 'perguntas'} sobre a gastronomia e a cultura do país.`,
    quizPerkPoints: 'Ganhe pontos e complete o seu mapa-múndi',
    quizPerkRetake: 'Refaça quando quiser para bater o seu recorde',
    unlockToSeeRecipe: 'Desbloqueie para ver a receita completa',
    favoriteLabel: 'Favorito',
  },
};
