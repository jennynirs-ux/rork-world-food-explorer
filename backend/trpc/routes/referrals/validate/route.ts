import { publicProcedure } from '@/backend/trpc/create-context';
import { z } from 'zod';
import { referralsDB } from '@/backend/db/referrals-db';

export const validateProcedure = publicProcedure
  .input(z.object({ code: z.string() }))
  .query(async ({ input }) => {
    const isValid = await referralsDB.validateReferralCode(input.code);
    return { isValid };
  });
