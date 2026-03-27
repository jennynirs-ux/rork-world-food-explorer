# CLAUDE.md — World Food Explorer

## Project Overview

World Food Explorer is a gamified global food discovery app built with Expo (React Native) and a tRPC/Hono backend. Users explore 197 countries' cuisines, cook recipes, take quizzes, and earn badges. Monetisation is via continent packs (in-app purchases through RevenueCat).

## Tech Stack

- **Frontend:** React Native 0.81 + Expo 54, TypeScript, Expo Router v6
- **State:** Zustand (not yet used directly), React Query + tRPC for server state, AsyncStorage for persistence
- **Backend:** tRPC 11 + Hono, JSON file-based DB (`.data/` directory)
- **Monetisation:** RevenueCat (react-native-purchases)
- **Testing:** Jest + jest-expo + React Native Testing Library
- **CI:** GitHub Actions (.github/workflows/ci.yml)
- **Build/Deploy:** EAS Build + EAS Submit

## Architecture Rules

### Security — NEVER bypass these

1. **All backend mutation routes MUST use `adminProcedure`** (defined in `backend/trpc/create-context.ts`). Only read queries may use `publicProcedure`. The `adminProcedure` requires the `x-api-key` header to match `WFE_API_KEY`.
2. **The mobile app NEVER has the server API key.** Public read routes (getAll, getById, referral queries) work without auth. Only admin tooling sends `x-api-key`. There is NO Hono-level API key gate — auth is handled per-route via tRPC procedures.
3. **Never trust the client for purchase validation.** Server-side entitlement checks via RevenueCat's REST API (`backend/lib/entitlements.ts`) are the source of truth. The client-side `purchasedProducts` array in AsyncStorage is only a cache for UI responsiveness.
4. **Never commit real API keys.** All secrets go through env vars. See `.env.production.example` for the list.
5. **`WFE_API_KEY` and `WFE_REVENUECAT_SECRET_KEY` are mandatory in production.** Without `WFE_API_KEY`, admin mutations are rejected. Without `WFE_REVENUECAT_SECRET_KEY`, all paid content is gated.
6. **CORS is restricted in production** to `worldfoodexplorer.app` domains.
7. **API key comparisons use `crypto.timingSafeEqual`** — never use `===` for secret comparison.

### Data Model

- **Country data** is seeded from `data/countries/*.ts` (197 files) and synced to the backend DB.
- **User progress** (visited countries, cooked dishes, quiz scores, badges, streaks) is stored client-side in AsyncStorage under `@world_cooking_*` keys. There is NO server-side user account system.
- **Referral data** is stored server-side in the JSON file DB.

### Monetisation Model

- 5 continent packs + 1 "Unlock the World" bundle (see `constants/monetization.ts`)
- 5 countries are free by default: Sweden, Japan, Mexico, Morocco, New Zealand
- Product IDs must match between `constants/monetization.ts`, `backend/lib/access-control.ts`, and RevenueCat dashboard
- Prices shown in the Paywall should come from RevenueCat offerings API, not the hardcoded strings

### Content Gating

- `lib/access-control.ts` — Client-side gating (for instant UI decisions)
- `backend/lib/access-control.ts` — Server-side gating (strips recipes, quiz answers from API responses)
- Both must stay in sync for the same continent→product mapping

## Commands

```bash
# Development
bun start                        # Start dev server with tunnel
bun run lint                     # ESLint

# Validation (run before production builds)
bun run validate-env             # Check client env vars
bun run validate-env:strict      # Also check backend env vars
bun run validate-submit          # Check App Store submission credentials

# Testing
npx jest                         # Run all tests
npx jest --coverage              # With coverage report

# Building
eas build --profile development  # Dev build (simulator)
eas build --profile preview      # Staging build
eas build --profile production   # Production build (run validate-env first!)

# Submitting
eas submit --profile production  # Submit to stores (run validate-submit first!)
```

## File Naming Conventions

- **App screens:** `app/(tabs)/screen-name.tsx` (kebab-case)
- **Components:** `components/PascalCase.tsx`
- **Libraries/utilities:** `lib/kebab-case.ts`
- **Backend routes:** `backend/trpc/routes/{resource}/{action}/route.ts`
- **Data files:** `data/countries/{country-name}.ts` (kebab-case)
- **Types:** All in `types/index.ts`

## Known Limitations (tracked, not yet fixed)

- **No cloud sync for user progress** — uninstall loses all data
- **In-memory rate limiter** — resets on server restart, doesn't work multi-instance
- **Backend DB uses synchronous file I/O** — adequate for current scale, needs migration for high traffic
- **Analytics are local-only** — no external analytics service integration
- **No privacy policy / ToS page** — required by App Store for IAP apps
