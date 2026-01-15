import { z } from 'zod';
import { publicProcedure } from '../../../create-context';
import { countriesDB } from '@/backend/db/countries-db';

export default publicProcedure
  .input(z.object({ id: z.string() }))
  .query(async ({ input }) => {
    const country = await countriesDB.getById(input.id);
    if (!country) {
      throw new Error('Country not found');
    }
    return country;
  });
