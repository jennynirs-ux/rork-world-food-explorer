# Two-Sided Referral System — Implementation Plan

**Status:** planned, build week of June 1, 2026
**Decision date:** May 16, 2026
**Reward:** 30 days unlock for BOTH referrer and redeemer

## Goal

User A shares their referral code → User B redeems it → Both get 30 days of full "Unlock the World" access.

## Why a backend is required

Current system (`expo/lib/share-codes.ts`) is device-local:
- User A's code stored only in their AsyncStorage
- User B's redemption only updates User B's device
- No way to credit User A

To reward both sides, we need a shared backend.

## Tech choice: Supabase

- Free tier: 500 MB DB, 2 GB bandwidth/month, 50k MAU
- Real PostgreSQL database (not file-based)
- Built-in RPC, auth, RLS
- Easy React Native integration via `@supabase/supabase-js`
- Standard pattern, well-documented

Cost: $0 until ~50,000 monthly active users.

## Architecture

```
┌─────────────────┐         ┌──────────────────┐
│   Mojjo iOS     │◄────────┤    Supabase      │
│   / Android     │  HTTPS  │   (free tier)    │
│      App        ├────────►│                  │
└─────────────────┘         │  Table:          │
                            │   - referrals    │
                            └──────────────────┘
```

## Database schema

```sql
create table referrals (
  user_id             text primary key,
  referral_code       text unique not null,
  referred_by_code    text references referrals(referral_code),
  unlock_until        timestamptz,         -- redemption gives 30 days here
  pending_bonus_until timestamptz,         -- sharer reward when their code is used
  created_at          timestamptz default now(),
  updated_at          timestamptz default now()
);

create index on referrals (referral_code);
create index on referrals (referred_by_code);

-- Anti-reuse: a (user, code) pair can only be used once
create table redemptions (
  redeemer_user_id    text not null references referrals(user_id),
  referral_code       text not null references referrals(referral_code),
  redeemed_at         timestamptz default now(),
  primary key (redeemer_user_id, referral_code)
);

-- RLS: anonymous access via row-level policies tied to user_id passed in JWT
alter table referrals enable row level security;
alter table redemptions enable row level security;
```

If skipping auth for v1 (simpler): use anon key + service role calls via RPC functions that take user_id as parameter.

## RPC functions (server-side)

### 1. `get_or_create_my_record(p_user_id text)`
Called on app launch. Ensures row exists, returns current state.
Returns: `{ referral_code, unlock_until, pending_bonus_until }`.

### 2. `redeem_referral(p_user_id text, p_code text)`
Validates and applies the redemption.

Logic:
- If `p_code == requesting_user.referral_code` → reject (`own_code`)
- If row in `redemptions` exists for `(p_user_id, p_code)` → reject (`already_used`)
- Lookup referrer by `referral_code`. If none → reject (`invalid`)
- Atomically:
  - Insert into `redemptions`
  - Set redeemer's `unlock_until = greatest(unlock_until, now()) + 30 days`
  - Set referrer's `pending_bonus_until = greatest(pending_bonus_until, now()) + 30 days`

Returns: `{ ok, reason? }`.

### 3. `sync_unlock_state(p_user_id text)`
Returns: `{ unlock_until, pending_bonus_until }` so the app can grant local access.

## Frontend integration

### New files

- `expo/lib/supabase.ts` — Supabase client (URL + anon key from env)
- `expo/lib/referrals.ts` — wraps the three RPCs above

### Modified files

- `expo/contexts/AppContext.tsx`
  - On app launch init (~line 95): call `get_or_create_my_record`, store the returned code locally
  - `redeemCode` (~line 578): call `redeem_referral`, propagate failure reason like the local version
  - Add `syncUnlockState()` helper called on launch + on resume from background

- `expo/app/(tabs)/profile.tsx`
  - Optional: show "X friends have used your code" stat from `referred_by_code` count
  - Display the server-issued code instead of the deterministic local one

- `expo/lib/share-codes.ts`
  - Keep as offline fallback only
  - Deprecate `generateCode()` deterministic logic — server is now source of truth

### Migration of existing users

Users who already redeemed locally before this lands:
- AsyncStorage `REDEEMED_KEY` + `EXPIRY_KEY` are still there
- On first launch after update: app calls `get_or_create_my_record` with their existing userId
- If returned `unlock_until` is null but local has active expiry → upsert local expiry to server
- Future syncs use Supabase as source of truth

Zero data loss; existing customers keep their unlock period.

## Environment variables

Add to `expo/eas.json` under `build.production.env`:
```json
"EXPO_PUBLIC_SUPABASE_URL": "https://YOUR_PROJECT.supabase.co",
"EXPO_PUBLIC_SUPABASE_ANON_KEY": "YOUR_ANON_KEY"
```

Same keys for `preview` and `development` profiles, optionally pointing at a separate Supabase project for staging.

## Anti-abuse

Initial v1 protections:
- Self-referral blocked server-side (own_code reason)
- Per-user-per-code uniqueness enforced via `redemptions` table

v2 considerations (not blocking):
- Rate limit: max N redemptions per user per day
- Device fingerprinting via `react-native-device-info` to detect multi-account abuse
- Real auth (Sign in with Apple, Google) to prevent userId spoofing

## Implementation order (one focused day)

| # | Step | Time |
|---|---|---|
| 1 | Create Supabase project, save URL + anon key | 15 min |
| 2 | Run SQL migrations (tables + RPCs + RLS) | 1 hour |
| 3 | Install `@supabase/supabase-js` | 5 min |
| 4 | Write `lib/supabase.ts` + `lib/referrals.ts` | 45 min |
| 5 | Update `AppContext.tsx` integration | 1 hour |
| 6 | Update `profile.tsx` UI polish | 30 min |
| 7 | Test on Android sim + iOS sim | 1 hour |
| 8 | Add Supabase env vars to `eas.json` | 10 min |
| 9 | EAS build (Android + iOS), submit to internal tracks | 30 min |
| 10 | Smoke test on real device | 30 min |

Total: ~5–6 hours focused work, plus build/review time.

## Pre-work to do before build week

While waiting for EAS quota reset:

1. **Create the Supabase project** at https://supabase.com → New Project → name `world-food-journey-prod`
2. **Run the SQL migration** (tables + functions) — keep the SQL in this file
3. **Save URL + anon key** in 1Password or similar
4. **Decide on auth model** — anon-only for v1, or add Sign in with Apple for v2?

## Open questions

- [ ] Skip auth for v1, use raw userId as primary key? (Faster but spoofable.)
- [ ] Add push notification when sharer's bonus is earned?
- [ ] Show pending bonus in app UI (`"30 free days waiting — open to claim"`)?
- [ ] Sunset deterministic local code generation entirely or keep as offline backup?
