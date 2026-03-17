import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { Alert, Platform } from 'react-native';

const STORAGE_KEY = '@world_cooking_photos';

export interface CookedPhoto {
  id: string;
  countryId: string;
  recipeId: string;
  isDessert: boolean;
  uri: string;
  timestamp: string;
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
  return store[photoKey(countryId, recipeId)] || [];
}

export async function getAllPhotosForCountry(
  countryId: string,
): Promise<CookedPhoto[]> {
  const store = await loadStore();
  const photos: CookedPhoto[] = [];
  for (const [key, list] of Object.entries(store)) {
    if (key.startsWith(`${countryId}:`)) {
      photos.push(...list);
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
    store[key] = store[key].filter(p => p.id !== photoId);
    if (store[key].length === 0) delete store[key];
    await saveStore(store);
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

  const photo: CookedPhoto = {
    id: `photo-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
    countryId,
    recipeId,
    isDessert,
    uri: result.assets[0].uri,
    timestamp: new Date().toISOString(),
  };

  await savePhoto(photo);
  return photo;
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

  const photo: CookedPhoto = {
    id: `photo-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
    countryId,
    recipeId,
    isDessert,
    uri: result.assets[0].uri,
    timestamp: new Date().toISOString(),
  };

  await savePhoto(photo);
  return photo;
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
