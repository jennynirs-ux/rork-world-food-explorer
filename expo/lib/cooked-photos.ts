import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system/legacy';
import * as ImagePicker from 'expo-image-picker';
import { Alert, Platform } from 'react-native';

const STORAGE_KEY = '@world_cooking_photos';
const PHOTO_DIR = 'cooked-photos/';

export interface CookedPhoto {
  id: string;
  countryId: string;
  recipeId: string;
  isDessert: boolean;
  uri: string;
  /**
   * File name inside the app's document directory. `uri` is rebuilt from it on
   * load because the absolute container path can change (e.g. after an iOS update).
   */
  fileName?: string;
  timestamp: string;
}

function photoDirectory(): string | null {
  if (Platform.OS === 'web' || !FileSystem.documentDirectory) return null;
  return `${FileSystem.documentDirectory}${PHOTO_DIR}`;
}

function withCurrentUri(photo: CookedPhoto): CookedPhoto {
  const dir = photoDirectory();
  return photo.fileName && dir ? { ...photo, uri: `${dir}${photo.fileName}` } : photo;
}

function fileExtension(uri: string): string {
  const match = /\.([a-z0-9]{2,5})(?:[?#].*)?$/i.exec(uri);
  return match ? match[1].toLowerCase() : 'jpg';
}

/**
 * The image picker returns a URI in the cache directory, which the OS may
 * purge at any time. Copy the image into the app's document directory so the
 * photo survives. On web (or if copying fails) the original URI is kept.
 */
async function persistImage(
  tempUri: string,
  id: string,
): Promise<{ uri: string; fileName?: string }> {
  const dir = photoDirectory();
  if (!dir) return { uri: tempUri };
  try {
    const info = await FileSystem.getInfoAsync(dir);
    if (!info.exists) {
      await FileSystem.makeDirectoryAsync(dir, { intermediates: true });
    }
    const fileName = `${id}.${fileExtension(tempUri)}`;
    await FileSystem.copyAsync({ from: tempUri, to: `${dir}${fileName}` });
    return { uri: `${dir}${fileName}`, fileName };
  } catch (error) {
    if (__DEV__) console.warn('Could not copy cooking photo to documents:', error);
    return { uri: tempUri };
  }
}

async function removeImageFile(photo: CookedPhoto): Promise<void> {
  const dir = photoDirectory();
  if (!photo.fileName || !dir) return;
  try {
    await FileSystem.deleteAsync(`${dir}${photo.fileName}`, { idempotent: true });
  } catch {
    /* non-fatal */
  }
}

function newPhotoId(): string {
  return `photo-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

async function createPhoto(
  countryId: string,
  recipeId: string,
  isDessert: boolean,
  tempUri: string,
): Promise<CookedPhoto> {
  const id = newPhotoId();
  const stored = await persistImage(tempUri, id);
  const photo: CookedPhoto = {
    id,
    countryId,
    recipeId,
    isDessert,
    uri: stored.uri,
    ...(stored.fileName ? { fileName: stored.fileName } : {}),
    timestamp: new Date().toISOString(),
  };
  await savePhoto(photo);
  return photo;
}

type PhotoStore = Record<string, CookedPhoto[]>;

async function loadStore(): Promise<PhotoStore> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

async function saveStore(store: PhotoStore): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    /* non-fatal */
  }
}

function photoKey(countryId: string, recipeId: string): string {
  return `${countryId}:${recipeId}`;
}

export async function getPhotosForRecipe(
  countryId: string,
  recipeId: string,
): Promise<CookedPhoto[]> {
  const store = await loadStore();
  return (store[photoKey(countryId, recipeId)] || []).map(withCurrentUri);
}

export async function getAllPhotosForCountry(
  countryId: string,
): Promise<CookedPhoto[]> {
  const store = await loadStore();
  const photos: CookedPhoto[] = [];
  for (const [key, list] of Object.entries(store)) {
    if (key.startsWith(`${countryId}:`)) {
      photos.push(...list.map(withCurrentUri));
    }
  }
  return photos.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
  );
}

export async function savePhoto(photo: CookedPhoto): Promise<void> {
  const store = await loadStore();
  const key = photoKey(photo.countryId, photo.recipeId);
  if (!store[key]) store[key] = [];
  store[key].unshift(photo);
  await saveStore(store);
}

export async function deletePhoto(
  countryId: string,
  recipeId: string,
  photoId: string,
): Promise<void> {
  const store = await loadStore();
  const key = photoKey(countryId, recipeId);
  if (store[key]) {
    const removed = store[key].find(p => p.id === photoId);
    store[key] = store[key].filter(p => p.id !== photoId);
    if (store[key].length === 0) delete store[key];
    await saveStore(store);
    if (removed) await removeImageFile(removed);
  }
}

export async function pickAndSavePhoto(
  countryId: string,
  recipeId: string,
  isDessert: boolean,
): Promise<CookedPhoto | null> {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== 'granted') {
    Alert.alert(
      'Permission needed',
      'Please allow access to your photo library to add cooking photos.',
    );
    return null;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ['images'],
    allowsEditing: true,
    aspect: [4, 3],
    quality: 0.7,
  });

  if (result.canceled || !result.assets?.[0]) return null;

  return createPhoto(countryId, recipeId, isDessert, result.assets[0].uri);
}

export async function takeAndSavePhoto(
  countryId: string,
  recipeId: string,
  isDessert: boolean,
): Promise<CookedPhoto | null> {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  if (status !== 'granted') {
    Alert.alert(
      'Permission needed',
      'Please allow camera access to take cooking photos.',
    );
    return null;
  }

  const result = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    aspect: [4, 3],
    quality: 0.7,
  });

  if (result.canceled || !result.assets?.[0]) return null;

  return createPhoto(countryId, recipeId, isDessert, result.assets[0].uri);
}

export function promptPhotoSource(
  countryId: string,
  recipeId: string,
  isDessert: boolean,
  onPhoto: (photo: CookedPhoto) => void,
): void {
  if (Platform.OS === 'web') {
    // Web only supports library
    void pickAndSavePhoto(countryId, recipeId, isDessert).then(p => {
      if (p) onPhoto(p);
    });
    return;
  }

  Alert.alert('Add Photo', 'How would you like to add your cooking photo?', [
    {
      text: 'Take Photo',
      onPress: () => {
        void takeAndSavePhoto(countryId, recipeId, isDessert).then(p => {
          if (p) onPhoto(p);
        });
      },
    },
    {
      text: 'Choose from Library',
      onPress: () => {
        void pickAndSavePhoto(countryId, recipeId, isDessert).then(p => {
          if (p) onPhoto(p);
        });
      },
    },
    { text: 'Cancel', style: 'cancel' },
  ]);
}
