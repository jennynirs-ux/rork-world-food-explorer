import AsyncStorage from '@react-native-async-storage/async-storage';
import { Share } from 'react-native';

const SHARE_CODE_KEY = '@wfe_share_code';
const REDEEMED_KEY = '@wfe_redeemed_code';
const EXPIRY_KEY = '@wfe_code_expiry';

const UNLOCK_DURATION_MS = 14 * 24 * 60 * 60 * 1000; // 14 days

/**
 * Generate a unique 6-character share code for this user.
 * The code is deterministic per user (same user always gets same code).
 */
export async function getOrCreateShareCode(userId: string): Promise<string> {
  const existing = await AsyncStorage.getItem(SHARE_CODE_KEY);
  if (existing) return existing;

  const code = generateCode(userId);
  await AsyncStorage.setItem(SHARE_CODE_KEY, code);
  return code;
}

function generateCode(seed: string): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no I/O/0/1 to avoid confusion
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash + seed.charCodeAt(i)) | 0;
  }
  let code = '';
  for (let i = 0; i < 6; i++) {
    hash = ((hash << 5) - hash + i * 7) | 0;
    code += chars[Math.abs(hash) % chars.length];
  }
  return code;
}

/**
 * Validate and redeem a share code.
 * Unlocks all recipes for 30 days from the redemption date.
 * Returns true if the code is valid and was redeemed.
 */
export async function redeemShareCode(code: string): Promise<boolean> {
  const normalized = code.trim().toUpperCase();
  if (normalized.length !== 6) return false;

  // Any valid 6-character code works
  const valid = /^[A-Z0-9]{6}$/.test(normalized);
  if (!valid) return false;

  const expiryDate = Date.now() + UNLOCK_DURATION_MS;
  await AsyncStorage.setItem(REDEEMED_KEY, normalized);
  await AsyncStorage.setItem(EXPIRY_KEY, expiryDate.toString());
  return true;
}

/**
 * Check if user has an active (non-expired) redeemed code.
 */
export async function hasActiveRedeemedCode(): Promise<boolean> {
  const redeemed = await AsyncStorage.getItem(REDEEMED_KEY);
  if (!redeemed) return false;

  const expiryStr = await AsyncStorage.getItem(EXPIRY_KEY);
  if (!expiryStr) return false;

  const expiry = parseInt(expiryStr, 10);
  if (isNaN(expiry)) return false;

  if (Date.now() > expiry) {
    // Expired — clean up
    await AsyncStorage.removeItem(REDEEMED_KEY);
    await AsyncStorage.removeItem(EXPIRY_KEY);
    return false;
  }

  return true;
}

/**
 * Get the number of days remaining on the code unlock.
 * Returns 0 if no active code or expired.
 */
export async function getDaysRemaining(): Promise<number> {
  const expiryStr = await AsyncStorage.getItem(EXPIRY_KEY);
  if (!expiryStr) return 0;

  const expiry = parseInt(expiryStr, 10);
  if (isNaN(expiry)) return 0;

  const remaining = expiry - Date.now();
  if (remaining <= 0) return 0;

  return Math.ceil(remaining / (24 * 60 * 60 * 1000));
}

/**
 * Share the user's code via the native share sheet.
 */
export async function shareCode(code: string): Promise<void> {
  await Share.share({
    message: `🌍 Join me on World Food Explorer! Use my code ${code} to unlock all recipes for 14 days.\n\nhttps://worldfoodexplorer.app`,
    title: 'World Food Explorer — Unlock All Recipes',
    url: 'https://worldfoodexplorer.app',
  });
}
