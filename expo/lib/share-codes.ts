import AsyncStorage from '@react-native-async-storage/async-storage';
import { Share } from 'react-native';

const SHARE_CODE_KEY = '@wfe_share_code';
const REDEEMED_KEY = '@wfe_redeemed_code';

/**
 * Generate a unique 6-character share code for this user.
 * The code is deterministic per user (same user always gets same code).
 */
export async function getOrCreateShareCode(userId: string): Promise<string> {
  const existing = await AsyncStorage.getItem(SHARE_CODE_KEY);
  if (existing) return existing;

  // Generate a 6-char alphanumeric code from the userId
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
 * Returns true if the code is valid and was redeemed.
 */
export async function redeemShareCode(code: string): Promise<boolean> {
  const normalized = code.trim().toUpperCase();
  if (normalized.length !== 6) return false;

  // Check if already redeemed
  const alreadyRedeemed = await AsyncStorage.getItem(REDEEMED_KEY);
  if (alreadyRedeemed) return true; // Already has access

  // Any valid 6-character code unlocks all recipes
  // In production, you'd validate against a server
  const valid = /^[A-Z0-9]{6}$/.test(normalized);
  if (!valid) return false;

  await AsyncStorage.setItem(REDEEMED_KEY, normalized);
  return true;
}

/**
 * Check if user has redeemed a share code.
 */
export async function hasRedeemedCode(): Promise<boolean> {
  const redeemed = await AsyncStorage.getItem(REDEEMED_KEY);
  return !!redeemed;
}

/**
 * Share the user's code via the native share sheet.
 */
export async function shareCode(code: string): Promise<void> {
  await Share.share({
    message: `🌍 Join me on World Food Explorer! Use my code ${code} to unlock all recipes.\n\nhttps://worldfoodexplorer.app`,
    title: 'World Food Explorer — Unlock All Recipes',
    url: 'https://worldfoodexplorer.app',
  });
}
