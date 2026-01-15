import { publicProcedure } from '@/backend/trpc/create-context';
import { z } from 'zod';
import { referralsDB } from '@/backend/db/referrals-db';

export const getStatsProcedure = publicProcedure
  .input(z.object({ userId: z.string() }))
  .query(async ({ input }) => {
    const code = await referralsDB.getUserReferralCode(input.userId);
    const referrals = await referralsDB.getReferralsByReferrer(code);
    const completedCount = await referralsDB.getCompletedReferralsCount(code);
    
    return { 
      referralCount: referrals.length,
      completedCount,
      freeMonthsEarned: completedCount
    };
  });
