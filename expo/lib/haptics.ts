import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';

/**
 * Thin haptic helpers. All calls are fire-and-forget and silently
 * swallow errors so they never break the UI.
 */

const isNative = Platform.OS === 'ios' || Platform.OS === 'android';

/** Light tap – selection, toggles, list items */
export function hapticLight() {
  if (!isNative) return;
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
}

/** Medium tap – confirmations, globe pin select */
export function hapticMedium() {
  if (!isNative) return;
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
}

/** Heavy tap – purchase, submit quiz */
export function hapticHeavy() {
  if (!isNative) return;
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).catch(() => {});
}

/** Success notification – correct answer, purchase success */
export function hapticSuccess() {
  if (!isNative) return;
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
}

/** Error notification – wrong answer, purchase fail */
export function hapticError() {
  if (!isNative) return;
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
}

/** Selection tick – star ratings, picker items */
export function hapticSelection() {
  if (!isNative) return;
  Haptics.selectionAsync().catch(() => {});
}
