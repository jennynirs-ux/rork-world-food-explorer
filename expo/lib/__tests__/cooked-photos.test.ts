import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system/legacy';
import * as ImagePicker from 'expo-image-picker';
import { Alert, Platform } from 'react-native';
import { pickAndSavePhoto, takeAndSavePhoto, getPhotosForRecipe, deletePhoto } from '../cooked-photos';
import { photoStrings } from '../strings/photos';

jest.mock('expo-file-system/legacy', () => ({
  documentDirectory: 'file:///data/app-A/Documents/',
  getInfoAsync: jest.fn().mockResolvedValue({ exists: false }),
  makeDirectoryAsync: jest.fn().mockResolvedValue(undefined),
  copyAsync: jest.fn().mockResolvedValue(undefined),
  deleteAsync: jest.fn().mockResolvedValue(undefined),
}));

const fs = FileSystem as unknown as {
  documentDirectory: string;
  copyAsync: jest.Mock;
  makeDirectoryAsync: jest.Mock;
  deleteAsync: jest.Mock;
};

const pickImage = (uri: string) =>
  (ImagePicker.launchImageLibraryAsync as jest.Mock).mockResolvedValueOnce({ canceled: false, assets: [{ uri }] });

describe('cooked photos', () => {
  beforeEach(async () => {
    jest.clearAllMocks();
    await AsyncStorage.clear();
    fs.documentDirectory = 'file:///data/app-A/Documents/';
  });

  it('copies the picked image out of the cache into the documents directory', async () => {
    pickImage('file:///data/app-A/Library/Caches/ImagePicker/ABC.jpeg');
    const photo = await pickAndSavePhoto('japan', 'japan-main', false);

    expect(fs.makeDirectoryAsync).toHaveBeenCalledWith('file:///data/app-A/Documents/cooked-photos/', { intermediates: true });
    expect(fs.copyAsync).toHaveBeenCalledWith({
      from: 'file:///data/app-A/Library/Caches/ImagePicker/ABC.jpeg',
      to: `file:///data/app-A/Documents/cooked-photos/${photo!.id}.jpeg`,
    });
    expect(photo!.uri).toBe(`file:///data/app-A/Documents/cooked-photos/${photo!.id}.jpeg`);
    expect(photo!.fileName).toBe(`${photo!.id}.jpeg`);

    const stored = await getPhotosForRecipe('japan', 'japan-main');
    expect(stored).toHaveLength(1);
    expect(stored[0].uri).toBe(photo!.uri);
  });

  it('camera photos are persisted too', async () => {
    (ImagePicker.launchCameraAsync as jest.Mock).mockResolvedValueOnce({
      canceled: false,
      assets: [{ uri: 'file:///cache/Camera/pic.png' }],
    });
    const photo = await takeAndSavePhoto('peru', 'peru-main', false);
    expect(fs.copyAsync).toHaveBeenCalledTimes(1);
    expect(photo!.uri).toMatch(/^file:\/\/\/data\/app-A\/Documents\/cooked-photos\/photo-.*\.png$/);
  });

  it('resolves stored photos against the current documents directory', async () => {
    pickImage('file:///cache/x.jpg');
    const photo = await pickAndSavePhoto('japan', 'japan-main', false);
    // iOS moves the app container on updates.
    fs.documentDirectory = 'file:///data/app-B/Documents/';
    const [stored] = await getPhotosForRecipe('japan', 'japan-main');
    expect(stored.uri).toBe(`file:///data/app-B/Documents/cooked-photos/${photo!.fileName}`);
  });

  it('deletes the copied file with the photo', async () => {
    pickImage('file:///cache/x.jpg');
    const photo = await pickAndSavePhoto('japan', 'japan-main', false);
    await deletePhoto('japan', 'japan-main', photo!.id);
    expect(fs.deleteAsync).toHaveBeenCalledWith(photo!.uri, { idempotent: true });
    expect(await getPhotosForRecipe('japan', 'japan-main')).toEqual([]);
  });

  it('keeps the original URI if copying fails', async () => {
    fs.copyAsync.mockRejectedValueOnce(new Error('disk full'));
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    pickImage('file:///cache/y.jpg');
    const photo = await pickAndSavePhoto('japan', 'japan-main', false);
    warn.mockRestore();
    expect(photo!.uri).toBe('file:///cache/y.jpg');
    expect(photo!.fileName).toBeUndefined();
  });

  it('keeps the URI as-is on web', async () => {
    const original = Platform.OS;
    Object.defineProperty(Platform, 'OS', { value: 'web', configurable: true });
    try {
      pickImage('blob:http://localhost:8081/abc');
      const photo = await pickAndSavePhoto('japan', 'japan-main', false);
      expect(fs.copyAsync).not.toHaveBeenCalled();
      expect(photo!.uri).toBe('blob:http://localhost:8081/abc');
    } finally {
      Object.defineProperty(Platform, 'OS', { value: original, configurable: true });
    }
  });
});

describe('photo prompt copy', () => {
  const LANGS = ['en', 'sv', 'de', 'fr', 'es', 'it', 'pl', 'nl', 'pt'] as const;

  it.each(LANGS)('%s has every string', lang => {
    const table = photoStrings[lang];
    expect(Object.keys(table).sort()).toEqual(Object.keys(photoStrings.en).sort());
    Object.values(table).forEach(text => expect(text.trim()).not.toBe(''));
  });

  it('shows the permission alert in the language it is given', async () => {
    const alert = jest.spyOn(Alert, 'alert').mockImplementation(() => {});
    (ImagePicker.requestCameraPermissionsAsync as jest.Mock).mockResolvedValueOnce({ status: 'denied' });
    expect(await takeAndSavePhoto('peru', 'peru-main', false, photoStrings.sv)).toBeNull();
    expect(alert).toHaveBeenCalledWith(photoStrings.sv.permissionTitle, photoStrings.sv.cameraPermission);
    alert.mockRestore();
  });
});
