import { z } from 'zod';
import { publicProcedure } from '../../../create-context';
import { countriesDB } from '@/backend/db/countries-db';
import { verifyEntitlements } from '@/backend/lib/entitlements';
import { isCountryAccessible, stripLockedContent } from '@/backend/lib/access-control';

export default publicProcedure
  .input(
    z.object({
      id: z.string(),
      /** The app_user_id used by RevenueCat on the client. */
      userId: z.string().optional(),
    })
  )
  .query(async ({ input }) => {
    const country = await countriesDB.getById(input.id);
    if (!country) {
      throw new Error('Country not found');
    }

    // ── Entitlement check ─────────────────────────────────────
    const { activeProducts, verified } = await verifyEntitlements(
      input.userId
    );

    const shouldGate =
      process.env.NODE_ENV === 'production' || verified;

    if (shouldGate && !isCountryAccessible(country, activeProducts)) {
      return stripLockedContent(country);
    }

    return country;
  });
