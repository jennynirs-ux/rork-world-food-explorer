import { z } from 'zod';
import { publicProcedure } from '../../../create-context';
import { countriesDB } from '@/backend/db/countries-db';
import { verifyEntitlements } from '@/backend/lib/entitlements';
import { gateCountries } from '@/backend/lib/access-control';

export default publicProcedure
  .input(
    z
      .object({
        /** The app_user_id used by RevenueCat on the client. */
        userId: z.string().optional(),
      })
      .optional()
  )
  .query(async ({ input }) => {
    const countries = await countriesDB.getAll();

    // ── Entitlement check ─────────────────────────────────────
    const { activeProducts, verified } = await verifyEntitlements(
      input?.userId
    );

    // In production, always gate content.
    // In dev (verified=false because no secret key), return everything.
    const shouldGate =
      process.env.NODE_ENV === 'production' || verified;

    return gateCountries(countries, activeProducts, shouldGate);
  });
