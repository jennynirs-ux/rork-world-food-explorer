import { createTRPCRouter } from "./create-context";
import hiRoute from "./routes/example/hi/route";
import getAllCountries from "./routes/countries/get-all/route";
import getCountryById from "./routes/countries/get-by-id/route";
import createCountry from "./routes/countries/create/route";
import updateCountry from "./routes/countries/update/route";
import bulkCreateCountries from "./routes/countries/bulk-create/route";
import bulkUpdateCountries from "./routes/countries/bulk-update/route";
import { getCodeProcedure } from "./routes/referrals/get-code/route";
import { validateProcedure } from "./routes/referrals/validate/route";
import { applyProcedure } from "./routes/referrals/apply/route";
import { getStatsProcedure } from "./routes/referrals/get-stats/route";

export const appRouter = createTRPCRouter({
  example: createTRPCRouter({
    hi: hiRoute,
  }),
  countries: createTRPCRouter({
    getAll: getAllCountries,
    getById: getCountryById,
    create: createCountry,
    update: updateCountry,
    bulkCreate: bulkCreateCountries,
    bulkUpdate: bulkUpdateCountries,
  }),
  referrals: createTRPCRouter({
    getCode: getCodeProcedure,
    validate: validateProcedure,
    apply: applyProcedure,
    getStats: getStatsProcedure,
  }),
});

export type AppRouter = typeof appRouter;
