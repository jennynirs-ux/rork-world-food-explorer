import { publicProcedure } from '@/backend/trpc/create-context';
import { z } from 'zod';
import { referralsDB } from '@/backend/db/referrals-db';

export const getCodeProcedure = publicProcedure
  .input(z.object({ userId: z.string() }))
  .query(async ({ input }) => {
    const code = await referralsDB.getUserReferralCode(input.userId);
    return { code };
  });
