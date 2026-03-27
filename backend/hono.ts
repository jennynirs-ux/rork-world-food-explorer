import { Hono } from "hono";
import { trpcServer } from "@hono/trpc-server";
import { cors } from "hono/cors";
import { appRouter } from "./trpc/app-router";
import { createContext } from "./trpc/create-context";

const IS_PRODUCTION = process.env.NODE_ENV === "production";

const app = new Hono();

// ── CORS — restrict origins in production ─────────────────────
app.use(
  "*",
  cors(
    IS_PRODUCTION
      ? {
          origin: [
            "https://worldfoodexplorer.app",
            "https://api.worldfoodexplorer.app",
          ],
          allowMethods: ["GET", "POST", "OPTIONS"],
          allowHeaders: ["Content-Type", "x-api-key", "Authorization"],
          maxAge: 86400,
        }
      : undefined // wide-open cors in dev
  )
);

// ── Simple in-memory rate limiter ────────────────────────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 120; // requests per window

app.use("/api/*", async (c, next) => {
  const ip =
    c.req.header("x-forwarded-for")?.split(",")[0]?.trim() ||
    c.req.header("x-real-ip") ||
    "unknown";
  const now = Date.now();
  let entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    entry = { count: 0, resetAt: now + RATE_LIMIT_WINDOW_MS };
    rateLimitMap.set(ip, entry);
  }

  entry.count += 1;

  c.header("X-RateLimit-Limit", String(RATE_LIMIT_MAX));
  c.header("X-RateLimit-Remaining", String(Math.max(0, RATE_LIMIT_MAX - entry.count)));
  c.header("X-RateLimit-Reset", String(Math.ceil(entry.resetAt / 1000)));

  if (entry.count > RATE_LIMIT_MAX) {
    return c.json({ error: "Too many requests" }, 429);
  }

  await next();
});

// Clean up stale rate-limit entries every 5 minutes
const cleanupTimer = setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap) {
    if (now > entry.resetAt) rateLimitMap.delete(key);
  }
}, 5 * 60_000);
cleanupTimer.unref(); // Allow process to exit cleanly

// ── Auth strategy ─────────────────────────────────────────────
// Public read routes (getAll, getById, referral queries) require NO API key
// — the mobile app calls these directly without credentials.
// Write/mutation routes are protected by `adminProcedure` in the tRPC layer
// (see backend/trpc/create-context.ts) which requires `x-api-key` header.
//
// This means:
//  - Mobile app → public queries work without API key
//  - Admin tools → mutations require x-api-key header
//  - The API key is NEVER embedded in the mobile client

app.use(
  "/api/trpc/*",
  trpcServer({
    router: appRouter,
    createContext,
  })
);

app.get("/", (c) => {
  return c.json({ status: "ok", message: "API is running" });
});

export default app;
