import AsyncStorage from '@react-native-async-storage/async-storage';
import { Share } from 'react-native';

const SHARE_CODE_KEY = '@wfe_share_code';
const REDEEMED_KEY = '@wfe_redeemed_code';
const EXPIRY_KEY = '@wfe_code_expiry';
const REDEEMED_HISTORY_KEY = '@wfe_redeemed_history';

const UNLOCK_DURATION_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

export type RedeemFailureReason = 'invalid_format' | 'own_code' | 'already_used';
export type RedeemResult =
  | { ok: true }
  | { ok: false; reason: RedeemFailureReason };

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

async function getRedeemedHistory(): Promise<string[]> {
  try {
    const raw = await AsyncStorage.getItem(REDEEMED_HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((c) => typeof c === 'string') : [];
  } catch {
    return [];
  }
}

async function appendRedeemedHistory(code: string): Promise<void> {
  const history = await getRedeemedHistory();
  if (history.includes(code)) return;
  history.push(code);
  await AsyncStorage.setItem(REDEEMED_HISTORY_KEY, JSON.stringify(history));
}

/**
 * Validate and redeem a share code.
 *
 * Rules:
 *  - Must be a 6-character alphanumeric code.
 *  - Cannot equal the user's own generated code (no self-referral).
 *  - The same code cannot be redeemed twice by the same user.
 *
 * On success, unlocks all recipes for 30 days from the redemption date.
 */
export async function redeemShareCode(
  code: string,
  userId: string,
): Promise<RedeemResult> {
  const normalized = code.trim().toUpperCase();
  if (normalized.length !== 6 || !/^[A-Z0-9]{6}$/.test(normalized)) {
    return { ok: false, reason: 'invalid_format' };
  }

  // Reject self-referral: user can't use their own code.
  const ownCode = generateCode(userId);
  if (normalized === ownCode) {
    return { ok: false, reason: 'own_code' };
  }

  // Reject if this user has already redeemed this exact code before.
  const history = await getRedeemedHistory();
  if (history.includes(normalized)) {
    return { ok: false, reason: 'already_used' };
  }

  const expiryDate = Date.now() + UNLOCK_DURATION_MS;
  await AsyncStorage.setItem(REDEEMED_KEY, normalized);
  await AsyncStorage.setItem(EXPIRY_KEY, expiryDate.toString());
  await appendRedeemedHistory(normalized);
  return { ok: true };
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
    message: `🌍 Join me on World Food Journey! Use my code ${code} to unlock all recipes for 30 days.\n\nhttps://worldfoodexplorer.app`,
    title: 'World Food Journey — Unlock All Recipes',
    url: 'https://worldfoodexplorer.app',
  });
}
