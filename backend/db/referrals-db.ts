import { Referral } from '@/types';
import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';

const DB_DIR = path.resolve(process.env.WFE_DB_DIR || '.data');
const REFERRALS_PATH = path.resolve(DB_DIR, 'referrals.json');
const CODES_PATH = path.resolve(DB_DIR, 'referral-codes.json');

function ensureDirSync() {
  if (!fs.existsSync(DB_DIR)) fs.mkdirSync(DB_DIR, { recursive: true });
}

function loadReferrals(): Referral[] {
  try {
    ensureDirSync();
    if (fs.existsSync(REFERRALS_PATH)) {
      return JSON.parse(fs.readFileSync(REFERRALS_PATH, 'utf-8'));
    }
  } catch (err) {
    console.error('[referrals-db] Failed to load referrals:', err);
  }
  return [];
}

function loadCodes(): Map<string, string> {
  try {
    ensureDirSync();
    if (fs.existsSync(CODES_PATH)) {
      return new Map(
        Object.entries(JSON.parse(fs.readFileSync(CODES_PATH, 'utf-8')))
      );
    }
  } catch (err) {
    console.error('[referrals-db] Failed to load codes:', err);
  }
  return new Map();
}

/** Atomic async write: write to temp file, then rename. */
async function safeWrite(filePath: string, data: string): Promise<void> {
  try {
    ensureDirSync();
    const tmpPath = filePath + '.tmp';
    await fs.promises.writeFile(tmpPath, data, 'utf-8');
    await fs.promises.rename(tmpPath, filePath);
  } catch (err) {
    console.error(`[referrals-db] Failed to persist ${path.basename(filePath)}:`, err);
  }
}

async function saveReferrals(data: Referral[]): Promise<void> {
  await safeWrite(REFERRALS_PATH, JSON.stringify(data));
}

async function saveCodes(data: Map<string, string>): Promise<void> {
  await safeWrite(CODES_PATH, JSON.stringify(Object.fromEntries(data)));
}

let referralsStore: Referral[] = loadReferrals();
let userReferralCodes: Map<string, string> = loadCodes();

export const referralsDB = {
  generateReferralCode: (): string => {
    // Use crypto.randomBytes for unpredictable codes instead of Math.random
    const bytes = crypto.randomBytes(6);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(bytes[i % bytes.length] % chars.length);
    }
    return code;
  },

  getUserReferralCode: async (userId: string): Promise<string> => {
    if (userReferralCodes.has(userId)) {
      return userReferralCodes.get(userId)!;
    }
    const newCode = referralsDB.generateReferralCode();
    userReferralCodes.set(userId, newCode);
    await saveCodes(userReferralCodes);
    return newCode;
  },

  getUserByReferralCode: async (code: string): Promise<string | undefined> => {
    for (const [userId, userCode] of userReferralCodes.entries()) {
      if (userCode === code) {
        return userId;
      }
    }
    return undefined;
  },

  createReferral: async (referrerCode: string, refereeCode: string): Promise<Referral> => {
    const existing = referralsStore.find(
      r => r.referrerCode === referrerCode && r.refereeCode === refereeCode
    );
    if (existing) {
      throw new Error('Referral already exists');
    }

    const referral: Referral = {
      id: `ref-${Date.now()}-${crypto.randomBytes(6).toString('hex')}`,
      referrerCode,
      refereeCode,
      status: 'pending',
      createdDate: new Date().toISOString(),
    };

    referralsStore.push(referral);
    await saveReferrals(referralsStore);
    return referral;
  },

  completeReferral: async (referralId: string): Promise<Referral> => {
    const referral = referralsStore.find(r => r.id === referralId);
    if (!referral) {
      throw new Error('Referral not found');
    }

    referral.status = 'completed';
    referral.completedDate = new Date().toISOString();
    await saveReferrals(referralsStore);
    return referral;
  },

  getReferralsByReferrer: async (referrerCode: string): Promise<Referral[]> => {
    return referralsStore.filter(r => r.referrerCode === referrerCode);
  },

  getReferralsByReferee: async (refereeCode: string): Promise<Referral[]> => {
    return referralsStore.filter(r => r.refereeCode === refereeCode);
  },

  getCompletedReferralsCount: async (referrerCode: string): Promise<number> => {
    return referralsStore.filter(
      r => r.referrerCode === referrerCode && r.status === 'completed'
    ).length;
  },

  validateReferralCode: async (code: string): Promise<boolean> => {
    const userId = await referralsDB.getUserByReferralCode(code);
    return userId !== undefined;
  },
};
