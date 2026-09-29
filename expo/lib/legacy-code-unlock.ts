import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Read-only remains of the old 6-character share-code system.
 *
 * Redeeming codes was removed (codes were only validated on-device and
 * App Store guideline 3.1.1 doesn't allow unlocking IAP content that way).
 * Users who redeemed a code before the update keep access until it expires.
 */

const REDEEMED_KEY = '@wfe_redeemed_code';
const EXPIRY_KEY = '@wfe_code_expiry';

const UNLOCK_DURATION_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

async function getExpiry(): Promise<number | null> {
  const [redeemed, expiryStr] = await Promise.all([
    AsyncStorage.getItem(REDEEMED_KEY),
    AsyncStorage.getItem(EXPIRY_KEY),
  ]);
  if (!redeemed || !expiryStr) return null;

  const expiry = parseInt(expiryStr, 10);
  const now = Date.now();
  // An expiry further out than one unlock period means the clock was turned back.
  if (isNaN(expiry) || expiry <= now || expiry - now > UNLOCK_DURATION_MS) {
    await AsyncStorage.multiRemove([REDEEMED_KEY, EXPIRY_KEY]);
    return null;
  }
  return expiry;
}

/**
 * Check if user has an active (non-expired) legacy code unlock.
 */
export async function hasActiveLegacyCodeUnlock(): Promise<boolean> {
  return (await getExpiry()) !== null;
}

/**
 * Days remaining on the legacy code unlock, 0 if none.
 */
export async function getLegacyUnlockDaysRemaining(): Promise<number> {
  const expiry = await getExpiry();
  if (expiry === null) return 0;
  return Math.ceil((expiry - Date.now()) / (24 * 60 * 60 * 1000));
}
