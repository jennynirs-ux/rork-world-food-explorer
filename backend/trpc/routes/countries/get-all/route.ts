import { publicProcedure } from '../../../create-context';
import { countriesDB } from '@/backend/db/countries-db';

export default publicProcedure.query(async () => {
  const countries = await countriesDB.getAll();
  return countries;
});
