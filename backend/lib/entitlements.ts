/**
 * Server-side entitlement verification via RevenueCat REST API.
 *
 * In production, the backend verifies a user's purchases directly with
 * RevenueCat so that the mobile client cannot lie about what it has bought.
 *
 * Required env var:  WFE_REVENUECAT_SECRET_KEY
 *   – This is the **secret** API key from your RevenueCat dashboard
 *     (Project Settings → API Keys → Secret key), NOT the public SDK key.
 *
 * In development (no secret key set), entitlement checks are skipped and all
 * content is returned — matching the existing mock-purchase behaviour.
 */

const REVENUECAT_API = 'https://api.revenuecat.com/v1';

export type EntitlementResult = {
  /** Product IDs the user has active entitlements for */
  activeProducts: string[];
  /** Whether verification was actually performed (false in dev/mock) */
  verified: boolean;
};

/**
 * Verify a user's active entitlements via RevenueCat.
 *
 * @param userId  The app_user_id that was used when configuring the
 *                RevenueCat SDK on the client (stored in AsyncStorage as
 *                `@world_cooking_user_id`).
 */
export async function verifyEntitlements(
  userId: string | undefined
): Promise<EntitlementResult> {
  const secretKey = process.env.WFE_REVENUECAT_SECRET_KEY;

  // ── No secret key → dev/mock mode ──────────────────────────
  if (!secretKey) {
    if (process.env.NODE_ENV === 'production') {
      console.error(
        '[entitlements] WFE_REVENUECAT_SECRET_KEY is not set — ' +
          'all paid content will be gated in production.'
      );
      return { activeProducts: [], verified: false };
    }
    // Dev mode — return empty (all content shown without gating)
    return { activeProducts: [], verified: false };
  }

  // ── No userId → anonymous / not logged in ──────────────────
  if (!userId) {
    return { activeProducts: [], verified: true };
  }

  try {
    const response = await fetch(
      `${REVENUECAT_API}/subscribers/${encodeURIComponent(userId)}`,
      {
        headers: {
          Authorization: `Bearer ${secretKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      // User may not exist in RevenueCat yet (hasn't made any purchase)
      if (response.status === 404) {
        return { activeProducts: [], verified: true };
      }
      console.error(
        `[entitlements] RevenueCat API error: ${response.status} ${response.statusText}`
      );
      return { activeProducts: [], verified: false };
    }

    const data = (await response.json()) as {
      subscriber?: {
        entitlements?: Record<
          string,
          { expires_date: string | null; purchase_date: string }
        >;
      };
    };

    const entitlements = data.subscriber?.entitlements ?? {};
    const now = new Date();

    const activeProducts = Object.entries(entitlements)
      .filter(([, ent]) => {
        // Lifetime purchase (no expiry) or not yet expired
        if (!ent.expires_date) return true;
        return new Date(ent.expires_date) > now;
      })
      .map(([id]) => id);

    return { activeProducts, verified: true };
  } catch (error) {
    console.error('[entitlements] Failed to verify with RevenueCat:', error);
    return { activeProducts: [], verified: false };
  }
}
