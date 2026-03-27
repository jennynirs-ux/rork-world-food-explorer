import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import * as crypto from "crypto";

export const createContext = async (opts: FetchCreateContextFnOptions) => {
  // Extract API key from request headers for admin route auth
  const apiKey =
    opts.req.headers.get("x-api-key") ||
    opts.req.headers.get("authorization")?.replace("Bearer ", "") ||
    null;

  return {
    req: opts.req,
    apiKey,
  };
};

export type Context = Awaited<ReturnType<typeof createContext>>;

const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const createTRPCRouter = t.router;

/** Public procedure — no auth required. Safe for read-only endpoints. */
export const publicProcedure = t.procedure;

/**
 * Admin procedure — requires a valid WFE_API_KEY.
 *
 * Use this for ALL mutation / write endpoints (create, update, delete, bulk ops).
 * In production the WFE_API_KEY env var MUST be set; if it isn't, every admin
 * call will be rejected so data can't be mutated by anonymous callers.
 */
export const adminProcedure = t.procedure.use(async ({ ctx, next }) => {
  const requiredKey = process.env.WFE_API_KEY;

  if (!requiredKey) {
    // In production, refuse all admin calls when the key isn't configured.
    // In dev, allow through so local development isn't blocked.
    const isProduction = process.env.NODE_ENV === "production";
    if (isProduction) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message:
          "Server misconfiguration: WFE_API_KEY is not set. Admin routes are disabled.",
      });
    }
    // Dev mode — allow through with a warning
    console.warn(
      "[auth] WFE_API_KEY not set — admin routes are unprotected (dev mode)"
    );
    return next({ ctx });
  }

  if (
    !ctx.apiKey ||
    !timingSafeEqual(ctx.apiKey, requiredKey)
  ) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Invalid or missing API key.",
    });
  }

  return next({ ctx });
});

/** Constant-time string comparison to prevent timing attacks on API keys. */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b));
}
