import { publicProcedure } from '@/backend/trpc/create-context';
import { z } from 'zod';
import { referralsDB } from '@/backend/db/referrals-db';

export const applyProcedure = publicProcedure
  .input(z.object({ 
    userId: z.string(),
    referralCode: z.string() 
  }))
  .mutation(async ({ input }) => {
    const referrerUserId = await referralsDB.getUserByReferralCode(input.referralCode);
    
    if (!referrerUserId) {
      throw new Error('Invalid referral code');
    }

    if (referrerUserId === input.userId) {
      throw new Error('Cannot use your own referral code');
    }

    const refereeCode = await referralsDB.getUserReferralCode(input.userId);
    
    const referral = await referralsDB.createReferral(input.referralCode, refereeCode);
    
    return { 
      success: true, 
      referral,
      message: 'Referral applied successfully! Both you and your friend will receive 1 free month.' 
    };
  });
