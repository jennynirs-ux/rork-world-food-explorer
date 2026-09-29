import type { RefObject } from 'react';
import type { View } from 'react-native';

/**
 * Web: image cards are not captured (react-native-view-shot needs html2canvas
 * and file sharing is patchy in browsers). `useShareCard` falls back to the
 * plain-text share instead.
 */

export async function canShareImages(): Promise<boolean> {
  return false;
}

export async function captureCard(
  _ref: RefObject<View | null>,
  _size: { width: number; height: number },
): Promise<string> {
  throw new Error('Image share cards are not supported on web');
}

export async function shareImageFile(_uri: string, _dialogTitle: string): Promise<void> {
  throw new Error('Image share cards are not supported on web');
}
