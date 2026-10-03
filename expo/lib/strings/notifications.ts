import type { StringTable } from './index';

/**
 * Copy for locally scheduled notifications (lib/notifications.ts).
 * `challenges` rotate week by week, so every language needs the same number
 * of entries in the same order.
 */
export type NotificationStrings = {
  /** Android notification channel name (shown in system settings). */
  channelName: string;
  streakTitle: string;
  streakBody: string;
  challenges: { title: string; body: string }[];
};

export const notificationStrings: StringTable<NotificationStrings> = {
  en: {
    channelName: 'Reminders',
    streakTitle: "Don't break your streak! 🔥",
    streakBody: 'Cook something today to keep your cooking streak alive.',
    challenges: [
      { title: 'Weekly Challenge 🌍', body: 'Try cooking an Asian dish this week!' },
      { title: 'Weekly Challenge 🌍', body: 'Explore a European recipe you haven\'t tried!' },
      { title: 'Weekly Challenge 🌍', body: 'Cook something from Africa this week!' },
      { title: 'Weekly Challenge 🌍', body: 'Try a dish from the Americas!' },
      { title: 'Weekly Challenge 🌍', body: 'Discover Oceanian cuisine this week!' },
      { title: 'New Recipe Awaits 🍳', body: 'Your next culinary adventure is waiting!' },
      { title: 'Time to Cook! 👨‍🍳', body: 'Pick a random country and try something new!' },
    ],
  },
  sv: {
    channelName: 'Påminnelser',
    streakTitle: 'Bryt inte din svit! 🔥',
    streakBody: 'Laga något i dag så håller du liv i din matlagningssvit.',
    challenges: [
      { title: 'Veckans utmaning 🌍', body: 'Testa att laga en asiatisk rätt den här veckan!' },
      { title: 'Veckans utmaning 🌍', body: 'Upptäck ett europeiskt recept som du inte har provat!' },
      { title: 'Veckans utmaning 🌍', body: 'Laga något från Afrika den här veckan!' },
      { title: 'Veckans utmaning 🌍', body: 'Testa en rätt från Nord- eller Sydamerika!' },
      { title: 'Veckans utmaning 🌍', body: 'Upptäck Oceaniens kök den här veckan!' },
      { title: 'Ett nytt recept väntar 🍳', body: 'Ditt nästa matäventyr väntar på dig!' },
      { title: 'Dags att laga mat! 👨‍🍳', body: 'Slumpa fram ett land och prova något nytt!' },
    ],
  },
  de: {
    channelName: 'Erinnerungen',
    streakTitle: 'Lass deine Serie nicht abreißen! 🔥',
    streakBody: 'Koch heute etwas, damit deine Koch-Serie weiterläuft.',
    challenges: [
      { title: 'Wochen-Challenge 🌍', body: 'Koch diese Woche ein asiatisches Gericht!' },
      { title: 'Wochen-Challenge 🌍', body: 'Entdecke ein europäisches Rezept, das du noch nicht kennst!' },
      { title: 'Wochen-Challenge 🌍', body: 'Koch diese Woche etwas aus Afrika!' },
      { title: 'Wochen-Challenge 🌍', body: 'Probier ein Gericht aus Nord- oder Südamerika!' },
      { title: 'Wochen-Challenge 🌍', body: 'Entdecke diese Woche die Küche Ozeaniens!' },
      { title: 'Ein neues Rezept wartet 🍳', body: 'Dein nächstes kulinarisches Abenteuer wartet!' },
      { title: 'Zeit zum Kochen! 👨‍🍳', body: 'Wähl ein zufälliges Land und probier etwas Neues!' },
    ],
  },
  fr: {
    channelName: 'Rappels',
    streakTitle: 'Ne cassez pas votre série ! 🔥',
    streakBody: 'Cuisinez quelque chose aujourd’hui pour garder votre série en vie.',
    challenges: [
      { title: 'Défi de la semaine 🌍', body: 'Cuisinez un plat asiatique cette semaine !' },
      { title: 'Défi de la semaine 🌍', body: 'Découvrez une recette européenne que vous n’avez pas encore essayée !' },
      { title: 'Défi de la semaine 🌍', body: 'Cuisinez un plat d’Afrique cette semaine !' },
      { title: 'Défi de la semaine 🌍', body: 'Essayez un plat des Amériques !' },
      { title: 'Défi de la semaine 🌍', body: 'Découvrez la cuisine d’Océanie cette semaine !' },
      { title: 'Une nouvelle recette vous attend 🍳', body: 'Votre prochaine aventure culinaire vous attend !' },
      { title: 'À vos fourneaux ! 👨‍🍳', body: 'Choisissez un pays au hasard et essayez quelque chose de nouveau !' },
    ],
  },
  es: {
    channelName: 'Recordatorios',
    streakTitle: '¡No rompas tu racha! 🔥',
    streakBody: 'Cocina algo hoy para mantener viva tu racha.',
    challenges: [
      { title: 'Reto semanal 🌍', body: '¡Cocina un plato asiático esta semana!' },
      { title: 'Reto semanal 🌍', body: '¡Descubre una receta europea que aún no hayas probado!' },
      { title: 'Reto semanal 🌍', body: '¡Cocina algo de África esta semana!' },
      { title: 'Reto semanal 🌍', body: '¡Prueba un plato de las Américas!' },
      { title: 'Reto semanal 🌍', body: '¡Descubre la cocina de Oceanía esta semana!' },
      { title: 'Te espera una nueva receta 🍳', body: '¡Tu próxima aventura culinaria te espera!' },
      { title: '¡A cocinar! 👨‍🍳', body: '¡Elige un país al azar y prueba algo nuevo!' },
    ],
  },
  it: {
    channelName: 'Promemoria',
    streakTitle: 'Non interrompere la tua serie! 🔥',
    streakBody: 'Cucina qualcosa oggi per tenere viva la tua serie.',
    challenges: [
      { title: 'Sfida della settimana 🌍', body: 'Questa settimana cucina un piatto asiatico!' },
      { title: 'Sfida della settimana 🌍', body: 'Scopri una ricetta europea che non hai ancora provato!' },
      { title: 'Sfida della settimana 🌍', body: 'Questa settimana cucina qualcosa dall’Africa!' },
      { title: 'Sfida della settimana 🌍', body: 'Prova un piatto delle Americhe!' },
      { title: 'Sfida della settimana 🌍', body: 'Questa settimana scopri la cucina dell’Oceania!' },
      { title: 'Una nuova ricetta ti aspetta 🍳', body: 'La tua prossima avventura culinaria ti aspetta!' },
      { title: 'Si cucina! 👨‍🍳', body: 'Scegli un paese a caso e prova qualcosa di nuovo!' },
    ],
  },
  pl: {
    channelName: 'Przypomnienia',
    streakTitle: 'Nie przerywaj swojej serii! 🔥',
    streakBody: 'Ugotuj dziś coś, aby podtrzymać swoją serię gotowania.',
    challenges: [
      { title: 'Wyzwanie tygodnia 🌍', body: 'Ugotuj w tym tygodniu danie azjatyckie!' },
      { title: 'Wyzwanie tygodnia 🌍', body: 'Odkryj europejski przepis, którego jeszcze nie znasz!' },
      { title: 'Wyzwanie tygodnia 🌍', body: 'Ugotuj w tym tygodniu coś z Afryki!' },
      { title: 'Wyzwanie tygodnia 🌍', body: 'Spróbuj dania z obu Ameryk!' },
      { title: 'Wyzwanie tygodnia 🌍', body: 'Odkryj w tym tygodniu kuchnię Oceanii!' },
      { title: 'Czeka nowy przepis 🍳', body: 'Twoja kolejna kulinarna przygoda już czeka!' },
      { title: 'Czas gotować! 👨‍🍳', body: 'Wylosuj kraj i spróbuj czegoś nowego!' },
    ],
  },
  nl: {
    channelName: 'Herinneringen',
    streakTitle: 'Verbreek je reeks niet! 🔥',
    streakBody: 'Kook vandaag iets om je kookreeks in stand te houden.',
    challenges: [
      { title: 'Weekuitdaging 🌍', body: 'Kook deze week een Aziatisch gerecht!' },
      { title: 'Weekuitdaging 🌍', body: 'Ontdek een Europees recept dat je nog niet hebt geprobeerd!' },
      { title: 'Weekuitdaging 🌍', body: 'Kook deze week iets uit Afrika!' },
      { title: 'Weekuitdaging 🌍', body: 'Probeer een gerecht uit Noord- of Zuid-Amerika!' },
      { title: 'Weekuitdaging 🌍', body: 'Ontdek deze week de keuken van Oceanië!' },
      { title: 'Er wacht een nieuw recept 🍳', body: 'Je volgende culinaire avontuur wacht op je!' },
      { title: 'Tijd om te koken! 👨‍🍳', body: 'Kies een willekeurig land en probeer iets nieuws!' },
    ],
  },
  pt: {
    channelName: 'Lembretes',
    streakTitle: 'Não quebre sua sequência! 🔥',
    streakBody: 'Cozinhe algo hoje para manter sua sequência na cozinha.',
    challenges: [
      { title: 'Desafio da semana 🌍', body: 'Cozinhe um prato asiático esta semana!' },
      { title: 'Desafio da semana 🌍', body: 'Descubra uma receita europeia que você ainda não experimentou!' },
      { title: 'Desafio da semana 🌍', body: 'Cozinhe algo da África esta semana!' },
      { title: 'Desafio da semana 🌍', body: 'Experimente um prato das Américas!' },
      { title: 'Desafio da semana 🌍', body: 'Descubra a culinária da Oceania esta semana!' },
      { title: 'Uma nova receita espera por você 🍳', body: 'Sua próxima aventura culinária está esperando!' },
      { title: 'Hora de cozinhar! 👨‍🍳', body: 'Escolha um país aleatório e experimente algo novo!' },
    ],
  },
};
