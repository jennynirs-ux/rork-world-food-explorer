import type { StringTable } from './index';

type ExploreStrings = {
  dishOfTheDay: string;
  dessertOfTheDay: string;
  /** Cooking time; {minutes} is a number. */
  minutes: string;
  /** Badge on the dish of the day when its country is locked. */
  preview: string;
  openRecipeHint: string;
  openPreviewHint: string;
  /** Accessibility label of the streak chip; {count} is a number. */
  streak: string;
  /** {unlocked} and {total} are numbers. */
  unlockedCount: string;
  unlockWorld: string;
  unlockHint: string;
  noResults: string;
};

export const exploreStrings: StringTable<ExploreStrings> = {
  en: {
    dishOfTheDay: 'Dish of the day',
    dessertOfTheDay: 'Dessert of the day',
    minutes: '{minutes} min',
    preview: 'Preview',
    openRecipeHint: 'Opens the recipe',
    openPreviewHint: 'Opens a preview of this country',
    streak: 'Day streak: {count}',
    unlockedCount: '{unlocked}/{total} countries unlocked',
    unlockWorld: 'Unlock the world',
    unlockHint: 'Shows the unlock options',
    noResults: 'No countries match your search',
  },
  sv: {
    dishOfTheDay: 'Dagens rätt',
    dessertOfTheDay: 'Dagens efterrätt',
    minutes: '{minutes} min',
    preview: 'Smakprov',
    openRecipeHint: 'Öppnar receptet',
    openPreviewHint: 'Öppnar en förhandstitt på landet',
    streak: 'Dagar i rad: {count}',
    unlockedCount: '{unlocked}/{total} länder upplåsta',
    unlockWorld: 'Lås upp hela världen',
    unlockHint: 'Visar alternativen för upplåsning',
    noResults: 'Inga länder matchar din sökning',
  },
  de: {
    dishOfTheDay: 'Gericht des Tages',
    dessertOfTheDay: 'Dessert des Tages',
    minutes: '{minutes} Min.',
    preview: 'Vorschau',
    openRecipeHint: 'Öffnet das Rezept',
    openPreviewHint: 'Öffnet eine Vorschau dieses Landes',
    streak: 'Tage in Folge: {count}',
    unlockedCount: '{unlocked}/{total} Länder freigeschaltet',
    unlockWorld: 'Die ganze Welt freischalten',
    unlockHint: 'Zeigt die Freischaltoptionen',
    noResults: 'Keine Länder passen zu deiner Suche',
  },
  fr: {
    dishOfTheDay: 'Plat du jour',
    dessertOfTheDay: 'Dessert du jour',
    minutes: '{minutes} min',
    preview: 'Aperçu',
    openRecipeHint: 'Ouvre la recette',
    openPreviewHint: 'Ouvre un aperçu de ce pays',
    streak: 'Jours d’affilée : {count}',
    unlockedCount: '{unlocked}/{total} pays débloqués',
    unlockWorld: 'Débloquez le monde entier',
    unlockHint: 'Affiche les options de déblocage',
    noResults: 'Aucun pays ne correspond à votre recherche',
  },
  es: {
    dishOfTheDay: 'Plato del día',
    dessertOfTheDay: 'Postre del día',
    minutes: '{minutes} min',
    preview: 'Vista previa',
    openRecipeHint: 'Abre la receta',
    openPreviewHint: 'Abre una vista previa de este país',
    streak: 'Días seguidos: {count}',
    unlockedCount: '{unlocked}/{total} países desbloqueados',
    unlockWorld: 'Desbloquea el mundo entero',
    unlockHint: 'Muestra las opciones de desbloqueo',
    noResults: 'Ningún país coincide con tu búsqueda',
  },
  it: {
    dishOfTheDay: 'Piatto del giorno',
    dessertOfTheDay: 'Dolce del giorno',
    minutes: '{minutes} min',
    preview: 'Anteprima',
    openRecipeHint: 'Apre la ricetta',
    openPreviewHint: 'Apre un’anteprima di questo paese',
    streak: 'Giorni di fila: {count}',
    unlockedCount: '{unlocked}/{total} paesi sbloccati',
    unlockWorld: 'Sblocca il mondo intero',
    unlockHint: 'Mostra le opzioni di sblocco',
    noResults: 'Nessun paese corrisponde alla ricerca',
  },
  pl: {
    dishOfTheDay: 'Danie dnia',
    dessertOfTheDay: 'Deser dnia',
    minutes: '{minutes} min',
    preview: 'Podgląd',
    openRecipeHint: 'Otwiera przepis',
    openPreviewHint: 'Otwiera podgląd tego kraju',
    streak: 'Seria dni: {count}',
    unlockedCount: 'Odblokowane kraje: {unlocked}/{total}',
    unlockWorld: 'Odblokuj cały świat',
    unlockHint: 'Pokazuje opcje odblokowania',
    noResults: 'Żaden kraj nie pasuje do wyszukiwania',
  },
  nl: {
    dishOfTheDay: 'Gerecht van de dag',
    dessertOfTheDay: 'Dessert van de dag',
    minutes: '{minutes} min',
    preview: 'Voorproefje',
    openRecipeHint: 'Opent het recept',
    openPreviewHint: 'Opent een voorproefje van dit land',
    streak: 'Dagen op rij: {count}',
    unlockedCount: '{unlocked}/{total} landen ontgrendeld',
    unlockWorld: 'Ontgrendel de hele wereld',
    unlockHint: 'Toont de ontgrendelopties',
    noResults: 'Geen landen gevonden voor je zoekopdracht',
  },
  pt: {
    dishOfTheDay: 'Prato do dia',
    dessertOfTheDay: 'Sobremesa do dia',
    minutes: '{minutes} min',
    preview: 'Prévia',
    openRecipeHint: 'Abre a receita',
    openPreviewHint: 'Abre uma prévia deste país',
    streak: 'Dias seguidos: {count}',
    unlockedCount: '{unlocked}/{total} países desbloqueados',
    unlockWorld: 'Desbloqueie o mundo inteiro',
    unlockHint: 'Mostra as opções de desbloqueio',
    noResults: 'Nenhum país corresponde à sua pesquisa',
  },
};
