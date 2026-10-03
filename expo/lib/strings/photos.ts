import type { StringTable } from './index';

/**
 * Copy for adding cooking photos (source picker and permission alerts).
 * Used from lib/cooked-photos.ts, which is not a React module, so callers
 * pass the picked table in (see CookedPhotoGallery).
 */
export type PhotoStrings = {
  addTitle: string;
  addMessage: string;
  takePhoto: string;
  chooseFromLibrary: string;
  cancel: string;
  permissionTitle: string;
  libraryPermission: string;
  cameraPermission: string;
};

export const photoStrings: StringTable<PhotoStrings> = {
  en: {
    addTitle: 'Add Photo',
    addMessage: 'How would you like to add your cooking photo?',
    takePhoto: 'Take Photo',
    chooseFromLibrary: 'Choose from Library',
    cancel: 'Cancel',
    permissionTitle: 'Permission needed',
    libraryPermission: 'Please allow access to your photo library to add cooking photos.',
    cameraPermission: 'Please allow camera access to take cooking photos.',
  },
  sv: {
    addTitle: 'Lägg till foto',
    addMessage: 'Hur vill du lägga till ditt matfoto?',
    takePhoto: 'Ta foto',
    chooseFromLibrary: 'Välj från bildbiblioteket',
    cancel: 'Avbryt',
    permissionTitle: 'Behörighet krävs',
    libraryPermission: 'Ge appen åtkomst till dina bilder för att lägga till matfoton.',
    cameraPermission: 'Ge appen åtkomst till kameran för att ta matfoton.',
  },
  de: {
    addTitle: 'Foto hinzufügen',
    addMessage: 'Wie möchtest du dein Kochfoto hinzufügen?',
    takePhoto: 'Foto aufnehmen',
    chooseFromLibrary: 'Aus Mediathek wählen',
    cancel: 'Abbrechen',
    permissionTitle: 'Berechtigung erforderlich',
    libraryPermission: 'Bitte erlaube den Zugriff auf deine Fotos, um Kochfotos hinzuzufügen.',
    cameraPermission: 'Bitte erlaube den Kamerazugriff, um Kochfotos aufzunehmen.',
  },
  fr: {
    addTitle: 'Ajouter une photo',
    addMessage: 'Comment voulez-vous ajouter votre photo de cuisine ?',
    takePhoto: 'Prendre une photo',
    chooseFromLibrary: 'Choisir dans la photothèque',
    cancel: 'Annuler',
    permissionTitle: 'Autorisation requise',
    libraryPermission: 'Autorisez l’accès à vos photos pour ajouter des photos de cuisine.',
    cameraPermission: 'Autorisez l’accès à l’appareil photo pour prendre des photos de cuisine.',
  },
  es: {
    addTitle: 'Añadir foto',
    addMessage: '¿Cómo quieres añadir tu foto de cocina?',
    takePhoto: 'Hacer foto',
    chooseFromLibrary: 'Elegir de la galería',
    cancel: 'Cancelar',
    permissionTitle: 'Permiso necesario',
    libraryPermission: 'Permite el acceso a tus fotos para añadir fotos de cocina.',
    cameraPermission: 'Permite el acceso a la cámara para hacer fotos de cocina.',
  },
  it: {
    addTitle: 'Aggiungi foto',
    addMessage: 'Come vuoi aggiungere la tua foto di cucina?',
    takePhoto: 'Scatta foto',
    chooseFromLibrary: 'Scegli dalla libreria',
    cancel: 'Annulla',
    permissionTitle: 'Autorizzazione necessaria',
    libraryPermission: 'Consenti l’accesso alle tue foto per aggiungere foto di cucina.',
    cameraPermission: 'Consenti l’accesso alla fotocamera per scattare foto di cucina.',
  },
  pl: {
    addTitle: 'Dodaj zdjęcie',
    addMessage: 'Jak chcesz dodać zdjęcie potrawy?',
    takePhoto: 'Zrób zdjęcie',
    chooseFromLibrary: 'Wybierz z biblioteki',
    cancel: 'Anuluj',
    permissionTitle: 'Wymagane uprawnienia',
    libraryPermission: 'Zezwól na dostęp do zdjęć, aby dodawać zdjęcia potraw.',
    cameraPermission: 'Zezwól na dostęp do aparatu, aby robić zdjęcia potraw.',
  },
  nl: {
    addTitle: 'Foto toevoegen',
    addMessage: 'Hoe wil je je kookfoto toevoegen?',
    takePhoto: 'Foto maken',
    chooseFromLibrary: 'Kiezen uit bibliotheek',
    cancel: 'Annuleren',
    permissionTitle: 'Toestemming nodig',
    libraryPermission: 'Geef toegang tot je foto’s om kookfoto’s toe te voegen.',
    cameraPermission: 'Geef toegang tot je camera om kookfoto’s te maken.',
  },
  pt: {
    addTitle: 'Adicionar foto',
    addMessage: 'Como você quer adicionar sua foto de cozinha?',
    takePhoto: 'Tirar foto',
    chooseFromLibrary: 'Escolher da galeria',
    cancel: 'Cancelar',
    permissionTitle: 'Permissão necessária',
    libraryPermission: 'Permita o acesso às suas fotos para adicionar fotos de cozinha.',
    cameraPermission: 'Permita o acesso à câmera para tirar fotos de cozinha.',
  },
};
