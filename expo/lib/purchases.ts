import { Linking, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Purchases, { PurchasesPackage, CustomerInfo, LOG_LEVEL, PURCHASES_ERROR_CODE } from 'react-native-purchases';
import { PRODUCT_IDS } from '@/constants/monetization';
import { env, APP_ENV, allowMockPurchases } from '@/lib/env';

const IOS_API_KEY = env.revenueCatIosKey;
const ANDROID_API_KEY = env.revenueCatAndroidKey;

let isConfigured = false;

/**
 * Progress of the move from per-install custom App User IDs (1.1.2 and
 * earlier) to RevenueCat's anonymous IDs: 'pending' once the old ID has been
 * logged out but the purchases haven't shown up on the anonymous one yet,
 * 'done' after (or straight away on a fresh install).
 */
const ANONYMOUS_ID_MIGRATION_KEY = '@world_cooking_rc_anonymous_migration';

/** Thrown when the store reports the payment as pending (Ask to Buy, slow card). */
export class PurchasePendingError extends Error {
  constructor() {
    super('Purchase pending approval');
    this.name = 'PurchasePendingError';
  }
}

/** Thrown when the product can't be bought right now (store unreachable, not configured). */
export class PurchaseUnavailableError extends Error {
  constructor() {
    super('Purchases are unavailable right now');
    this.name = 'PurchaseUnavailableError';
  }
}

/**
 * Thrown when the store says the account already owns the product but a
 * restore couldn't confirm it (Google Play's ITEM_ALREADY_OWNED).
 */
export class PurchaseAlreadyOwnedError extends Error {
  constructor() {
    super('Product already owned by the store account');
    this.name = 'PurchaseAlreadyOwnedError';
  }
}

/**
 * What a failed purchase or restore means for the customer:
 *   ignore       - a second tap while the store is still busy; nothing to show
 *   notAllowed   - in-app purchases are blocked (Screen Time, parental controls)
 *   connection   - the store or RevenueCat couldn't be reached
 *   unconfirmed  - the store may have charged, but RevenueCat couldn't confirm
 *                  the receipt yet; it retries on its own, Restore also works
 *   alreadyOwned - the store account owns it, but it couldn't be restored
 *   unavailable  - the product can't be bought here (store not set up)
 *   unknown      - anything else
 */
export type PurchaseErrorKind =
  | 'ignore'
  | 'notAllowed'
  | 'connection'
  | 'unconfirmed'
  | 'alreadyOwned'
  | 'unavailable'
  | 'unknown';

export function classifyPurchaseError(error: unknown): PurchaseErrorKind {
  if (error instanceof PurchaseAlreadyOwnedError) return 'alreadyOwned';
  if (error instanceof PurchaseUnavailableError) return 'unavailable';

  switch ((error as { code?: string } | null)?.code) {
    case PURCHASES_ERROR_CODE.OPERATION_ALREADY_IN_PROGRESS_ERROR:
      return 'ignore';
    case PURCHASES_ERROR_CODE.PURCHASE_NOT_ALLOWED_ERROR:
      return 'notAllowed';
    case PURCHASES_ERROR_CODE.NETWORK_ERROR:
    case PURCHASES_ERROR_CODE.OFFLINE_CONNECTION_ERROR:
    case PURCHASES_ERROR_CODE.STORE_PROBLEM_ERROR:
    case PURCHASES_ERROR_CODE.PRODUCT_REQUEST_TIMED_OUT_ERROR:
      return 'connection';
    case PURCHASES_ERROR_CODE.UNEXPECTED_BACKEND_RESPONSE_ERROR:
    case PURCHASES_ERROR_CODE.UNKNOWN_BACKEND_ERROR:
    case PURCHASES_ERROR_CODE.RECEIPT_ALREADY_IN_USE_ERROR:
    case PURCHASES_ERROR_CODE.RECEIPT_IN_USE_BY_OTHER_SUBSCRIBER_ERROR:
    case PURCHASES_ERROR_CODE.INVALID_RECEIPT_ERROR:
    case PURCHASES_ERROR_CODE.MISSING_RECEIPT_FILE_ERROR:
    case PURCHASES_ERROR_CODE.INVALID_CREDENTIALS_ERROR:
    case PURCHASES_ERROR_CODE.INVALID_APP_USER_ID_ERROR:
    case PURCHASES_ERROR_CODE.API_ENDPOINT_BLOCKED:
    case PURCHASES_ERROR_CODE.CUSTOMER_INFO_ERROR:
      return 'unconfirmed';
    case PURCHASES_ERROR_CODE.PRODUCT_ALREADY_PURCHASED_ERROR:
      return 'alreadyOwned';
    case PURCHASES_ERROR_CODE.PRODUCT_NOT_AVAILABLE_FOR_PURCHASE_ERROR:
    case PURCHASES_ERROR_CODE.CONFIGURATION_ERROR:
      return 'unavailable';
    default:
      return 'unknown';
  }
}

/**
 * Initialize RevenueCat SDK. Call once at app startup, then
 * ensureAnonymousUser().
 *
 * No App User ID is passed: RevenueCat generates an anonymous one and reuses
 * it on later launches. Anonymous IDs on two devices with the same store
 * account are merged on restore, whereas custom IDs get the purchase moved
 * from one to the other (and the first device locks again).
 *
 * Without an API key purchases are mocked in a local dev bundle and disabled
 * everywhere else — a release build must never hand out content for free.
 */
export async function configurePurchases(): Promise<void> {
  if (isConfigured) return;

  const apiKey = Platform.OS === 'ios' ? IOS_API_KEY : ANDROID_API_KEY;

  if (!apiKey || Platform.OS === 'web') {
    if (env.debugLogging) {
      console.warn(
        '[purchases] RevenueCat not available — purchases are ' +
        (allowMockPurchases ? 'mocked' : 'disabled') + ' (' + APP_ENV + ')'
      );
    }
    return;
  }

  try {
    if (env.debugLogging) {
      Purchases.setLogLevel(LOG_LEVEL.DEBUG);
    }

    Purchases.configure({ apiKey });

    isConfigured = true;

    if (env.debugLogging) {
      console.log('[purchases] RevenueCat configured (' + APP_ENV + ')');
    }
  } catch (error) {
    if (env.debugLogging) {
      console.error('[purchases] Failed to configure RevenueCat:', error);
    }
  }
}

/**
 * Set once this launch has logged a legacy install out and asked the SDK to
 * sync, so only a launch that is really on the anonymous ID can complete the
 * migration.
 */
let migrationSyncIssued = false;

/**
 * Move an install from 1.1.2 or earlier off its random custom App User ID.
 *
 * configure() without an App User ID keeps using the ID the SDK cached, so
 * such an install is still identified. Log it out to get an anonymous ID,
 * then sync the store purchases so they move over to it. syncPurchases is
 * silent; restorePurchases could ask for the Apple ID password, which only a
 * tap by the user may trigger.
 *
 * syncPurchases is fire-and-forget in react-native-purchases (it resolves
 * before anything reaches RevenueCat and never reports a failure), so its
 * result proves nothing. The migration stays 'pending', and the sync is
 * re-issued every launch, until completeAnonymousMigration() sees the
 * purchases on the anonymous ID.
 *
 * Returns true only when the migration was already complete (or there was
 * nothing to migrate) before this launch, i.e. when RevenueCat's answer can
 * be trusted to revoke.
 */
export async function ensureAnonymousUser(): Promise<boolean> {
  if (!isConfigured) return false;

  try {
    const state = await AsyncStorage.getItem(ANONYMOUS_ID_MIGRATION_KEY);
    const anonymous = await Purchases.isAnonymous();
    if (state === 'done' && anonymous) return true;

    if (!anonymous) {
      // Recorded first so a sync that fails after the logout is retried.
      await AsyncStorage.setItem(ANONYMOUS_ID_MIGRATION_KEY, 'pending');
      await Purchases.logOut();
    } else if (state !== 'pending') {
      // A fresh install: anonymous from the start, nothing to move over.
      await AsyncStorage.setItem(ANONYMOUS_ID_MIGRATION_KEY, 'done');
      return true;
    }

    await Purchases.syncPurchases();
    migrationSyncIssued = true;
    return false;
  } catch (error) {
    if (env.debugLogging) console.warn('[purchases] Anonymous ID migration failed:', error);
    return false;
  }
}

/**
 * Finish the anonymous ID migration once RevenueCat's customer info for the
 * anonymous ID lists every store product cached on the profile (or right
 * away when nothing was ever bought). Call with each answer for the
 * anonymous ID (startup and the update listener) while ensureAnonymousUser()
 * returned false. Until it completes, startup only merges, so a sync that
 * hasn't gone through never revokes what was bought.
 *
 * Returns true when the migration is complete.
 */
export async function completeAnonymousMigration(
  owned: string[],
  cachedStoreProducts: string[]
): Promise<boolean> {
  if (!isConfigured || !migrationSyncIssued) return false;

  try {
    if (await AsyncStorage.getItem(ANONYMOUS_ID_MIGRATION_KEY) !== 'pending') return false;
    if (!cachedStoreProducts.every((p) => owned.includes(p))) return false;
    await AsyncStorage.setItem(ANONYMOUS_ID_MIGRATION_KEY, 'done');
    migrationSyncIssued = false;
    return true;
  } catch (error) {
    if (env.debugLogging) console.warn('[purchases] Could not record the anonymous ID migration:', error);
    return false;
  }
}

/**
 * Check if RevenueCat is configured and ready.
 */
export function isPurchasesConfigured(): boolean {
  return isConfigured;
}

/**
 * Whether the paywall can take a purchase at all (real store or dev mock).
 */
export function canMakePurchases(): boolean {
  return isConfigured || allowMockPurchases;
}

/**
 * Get available packages from RevenueCat offerings.
 */
export async function getOfferings(): Promise<PurchasesPackage[]> {
  if (!isConfigured) return [];

  try {
    const offerings = await Purchases.getOfferings();
    if (offerings.current && offerings.current.availablePackages.length > 0) {
      return offerings.current.availablePackages;
    }
    return [];
  } catch (error) {
    if (env.debugLogging) console.error('[purchases] Failed to get offerings:', error);
    return [];
  }
}

/**
 * Purchase a specific package.
 * Returns the product ids the customer now owns on success, [] if cancelled.
 *
 * Apple/Google sometimes return a CustomerInfo that doesn't list the new
 * purchase yet — the receipt is valid but RevenueCat's server-side
 * validation hasn't caught up. We mitigate that by retrying once after a
 * short delay, and as a final fallback, trusting the productId of the
 * package we just purchased (since the purchase itself did succeed).
 *
 * Without this safety net, a customer can be charged but see no unlock —
 * the very bug a real customer hit shortly after launch.
 */
export async function purchasePackage(
  pkg: PurchasesPackage
): Promise<string[]> {
  try {
    const { customerInfo } = await Purchases.purchasePackage(pkg);
    let owned = getOwnedProducts(customerInfo);

    if (!owned.includes(pkg.product.identifier)) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      try {
        const fresh = await Purchases.getCustomerInfo();
        owned = getOwnedProducts(fresh);
      } catch (e) {
        if (env.debugLogging) {
          console.warn('[purchases] Retry getCustomerInfo failed:', e);
        }
      }
    }

    if (!owned.includes(pkg.product.identifier)) {
      if (env.debugLogging) {
        console.warn(
          '[purchases] Purchase not reflected after retry; trusting ' +
          'purchased productId: ' + pkg.product.identifier
        );
      }
      owned = [...owned, pkg.product.identifier];
    }

    return owned;
  } catch (error: any) {
    if (error?.userCancelled) {
      return [];
    }
    if (error?.code === PURCHASES_ERROR_CODE.PAYMENT_PENDING_ERROR) {
      throw new PurchasePendingError();
    }
    if (error?.code === PURCHASES_ERROR_CODE.PRODUCT_ALREADY_PURCHASED_ERROR) {
      return await restoreAlreadyOwned(pkg.product.identifier);
    }
    throw error;
  }
}

/**
 * Google Play won't sell a product the account already owns, so buying again
 * after RevenueCat lost track of it (other device, reinstall) fails every
 * time. Restore instead, and count it as bought only when RevenueCat confirms
 * the product (or the world unlock): Play also reports this for a purchase
 * that is still pending.
 */
async function restoreAlreadyOwned(productId: string): Promise<string[]> {
  try {
    const owned = getOwnedProducts(await Purchases.restorePurchases());
    if (owned.includes(productId) || owned.includes(PRODUCT_IDS.WORLD_UNLOCK_ALL)) {
      return owned;
    }
  } catch (error) {
    if (env.debugLogging) console.warn('[purchases] Restore after already-owned failed:', error);
  }
  throw new PurchaseAlreadyOwnedError();
}

/**
 * Purchase a product by its RevenueCat product identifier.
 *
 * In a local dev bundle without RevenueCat, falls back to a mock purchase so
 * the UI can be exercised without a real App Store sandbox.
 */
export async function purchaseProductById(productId: string): Promise<string[]> {
  if (!isConfigured) {
    if (!allowMockPurchases) {
      throw new PurchaseUnavailableError();
    }
    if (env.debugLogging) {
      console.warn('[purchases] Mock purchase: ' + productId);
    }
    return [productId];
  }

  const offerings = await getOfferings();
  const pkg = offerings.find((p) => p.product.identifier === productId);

  if (!pkg) {
    throw new PurchaseUnavailableError();
  }

  return await purchasePackage(pkg);
}

/**
 * Restore previous purchases. Required by App Store guidelines.
 * Returns the product ids the customer owns.
 */
export async function restorePurchases(): Promise<string[]> {
  if (!isConfigured) {
    if (!allowMockPurchases) {
      throw new PurchaseUnavailableError();
    }
    if (env.debugLogging) {
      console.warn('[purchases] RevenueCat not configured — cannot restore');
    }
    return [];
  }

  try {
    const customerInfo = await Purchases.restorePurchases();
    return getOwnedProducts(customerInfo);
  } catch (error) {
    if (env.debugLogging) console.error('[purchases] Failed to restore purchases:', error);
    throw error;
  }
}

/**
 * Get the product ids the customer currently owns according to RevenueCat.
 *
 * Returns null when the answer is unknown (not configured, offline, store
 * error) so callers can keep their cached state instead of treating it as
 * "owns nothing".
 */
export async function getCustomerInfo(): Promise<string[] | null> {
  if (!isConfigured) return null;

  try {
    const customerInfo = await Purchases.getCustomerInfo();
    return getOwnedProducts(customerInfo);
  } catch (error) {
    if (env.debugLogging) console.error('[purchases] Failed to get customer info:', error);
    return null;
  }
}

/**
 * Subscribe to CustomerInfo changes (purchases completed outside the paywall,
 * redeemed offer codes, Ask to Buy approvals). Returns an unsubscribe function.
 */
export function addOwnedProductsListener(listener: (owned: string[]) => void): () => void {
  if (!isConfigured) return () => {};
  const handler = (info: CustomerInfo) => listener(getOwnedProducts(info));
  Purchases.addCustomerInfoUpdateListener(handler);
  return () => {
    Purchases.removeCustomerInfoUpdateListener(handler);
  };
}

/**
 * Open the platform's promo/offer code redemption flow.
 * iOS: Apple's in-app Offer Code sheet. Android: Google Play's redeem page.
 */
export async function presentOfferCodeRedemption(): Promise<void> {
  if (Platform.OS === 'ios') {
    if (!isConfigured) throw new PurchaseUnavailableError();
    await Purchases.presentCodeRedemptionSheet();
    return;
  }
  if (Platform.OS === 'android') {
    await Linking.openURL('https://play.google.com/redeem');
    return;
  }
  throw new PurchaseUnavailableError();
}

/**
 * Map CustomerInfo to the PRODUCT_IDS the customer owns.
 *
 * Reads active entitlements by id and by backing product, plus the
 * non-subscription transactions, so ownership is detected even when the
 * RevenueCat entitlement names don't match our product ids. Refunded
 * purchases drop out of both, which revokes access.
 */
export function getOwnedProducts(customerInfo: CustomerInfo): string[] {
  const productIds = Object.values(PRODUCT_IDS) as string[];
  const owned = new Set<string>();

  for (const [entitlementId, entitlement] of Object.entries(customerInfo.entitlements.active)) {
    if (productIds.includes(entitlementId)) owned.add(entitlementId);
    if (productIds.includes(entitlement.productIdentifier)) owned.add(entitlement.productIdentifier);
  }

  for (const transaction of customerInfo.nonSubscriptionTransactions ?? []) {
    if (productIds.includes(transaction.productIdentifier)) owned.add(transaction.productIdentifier);
  }

  return [...owned];
}
