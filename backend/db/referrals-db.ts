import { Referral } from '@/types';

let referralsStore: Referral[] = [];
let userReferralCodes: Map<string, string> = new Map();

export const referralsDB = {
  generateReferralCode: (): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  },

  getUserReferralCode: async (userId: string): Promise<string> => {
    if (userReferralCodes.has(userId)) {
      return userReferralCodes.get(userId)!;
    }
    const newCode = referralsDB.generateReferralCode();
    userReferralCodes.set(userId, newCode);
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
      id: `ref-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      referrerCode,
      refereeCode,
      status: 'pending',
      createdDate: new Date().toISOString(),
    };

    referralsStore.push(referral);
    return referral;
  },

  completeReferral: async (referralId: string): Promise<Referral> => {
    const referral = referralsStore.find(r => r.id === referralId);
    if (!referral) {
      throw new Error('Referral not found');
    }

    referral.status = 'completed';
    referral.completedDate = new Date().toISOString();
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
