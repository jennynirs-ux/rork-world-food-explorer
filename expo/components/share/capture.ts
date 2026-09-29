import type { RefObject } from 'react';
import type { View } from 'react-native';

/**
 * Native implementation: snapshot a mounted view to a PNG and open the system
 * share sheet with it. Web resolves `capture.web.ts` instead, which never
 * pulls in react-native-view-shot (its web build needs html2canvas).
 *
 * Both native modules are imported lazily so that a binary built before they
 * were added doesn't crash on import — the caller falls back to text sharing.
 */

export async function canShareImages(): Promise<boolean> {
  try {
    const Sharing = await import('expo-sharing');
    return await Sharing.isAvailableAsync();
  } catch {
    return false;
  }
}

export async function captureCard(
  ref: RefObject<View | null>,
  size: { width: number; height: number },
): Promise<string> {
  const { captureRef } = await import('react-native-view-shot');
  if (!ref.current) throw new Error('Share card is not mounted');
  return captureRef(ref, {
    format: 'png',
    quality: 1,
    result: 'tmpfile',
    width: size.width,
    height: size.height,
  });
}

export async function shareImageFile(uri: string, dialogTitle: string): Promise<void> {
  const Sharing = await import('expo-sharing');
  await Sharing.shareAsync(uri, { mimeType: 'image/png', UTI: 'public.png', dialogTitle });
}
