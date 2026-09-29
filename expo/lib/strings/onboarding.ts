import type { StringTable } from './index';

type OnboardingStrings = {
  pickFirstTitle: string;
  pickFirstSubtitle: string;
  free: string;
  optional: string;
};

export const onboardingStrings: StringTable<OnboardingStrings> = {
  en: { pickFirstTitle: 'Where should your journey start?', pickFirstSubtitle: 'Pick a free country — you can cook its dishes right away.', free: 'Free', optional: 'Optional' },
  sv: { pickFirstTitle: 'Var ska resan börja?', pickFirstSubtitle: 'Välj ett gratis land — du kan laga dess rätter direkt.', free: 'Gratis', optional: 'Valfritt' },
  de: { pickFirstTitle: 'Wo soll deine Reise beginnen?', pickFirstSubtitle: 'Wähle ein kostenloses Land – du kannst seine Gerichte sofort kochen.', free: 'Gratis', optional: 'Optional' },
  fr: { pickFirstTitle: 'Par où commencer votre voyage ?', pickFirstSubtitle: 'Choisissez un pays gratuit — vous pouvez cuisiner ses plats tout de suite.', free: 'Gratuit', optional: 'Facultatif' },
  es: { pickFirstTitle: '¿Dónde empieza tu viaje?', pickFirstSubtitle: 'Elige un país gratis y cocina sus platos ahora mismo.', free: 'Gratis', optional: 'Opcional' },
  it: { pickFirstTitle: 'Da dove inizia il tuo viaggio?', pickFirstSubtitle: 'Scegli un paese gratuito: puoi cucinarne subito i piatti.', free: 'Gratis', optional: 'Facoltativo' },
  pl: { pickFirstTitle: 'Gdzie zaczniesz swoją podróż?', pickFirstSubtitle: 'Wybierz darmowy kraj — możesz od razu gotować jego dania.', free: 'Za darmo', optional: 'Opcjonalnie' },
  nl: { pickFirstTitle: 'Waar begint je reis?', pickFirstSubtitle: 'Kies een gratis land — je kunt de gerechten meteen koken.', free: 'Gratis', optional: 'Optioneel' },
  pt: { pickFirstTitle: 'Onde começa a sua viagem?', pickFirstSubtitle: 'Escolha um país grátis — pode cozinhar os pratos dele já.', free: 'Grátis', optional: 'Opcional' },
};
