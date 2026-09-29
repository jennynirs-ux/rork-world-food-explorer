import { Linking, Platform } from 'react-native';
import Purchases, { PurchasesPackage, CustomerInfo, LOG_LEVEL, PURCHASES_ERROR_CODE } from 'react-native-purchases';
import { PRODUCT_IDS } from '@/constants/monetization';
import { env, APP_ENV, allowMockPurchases } from '@/lib/env';

const IOS_API_KEY = env.revenueCatIosKey;
const ANDROID_API_KEY = env.revenueCatAndroidKey;

let isConfigured = false;

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
 * Initialize RevenueCat SDK. Call once at app startup.
 *
 * Without an API key purchases are mocked in a local dev bundle and disabled
 * everywhere else — a release build must never hand out content for free.
 */
export async function configurePurchases(userId?: string): Promise<void> {
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

    Purchases.configure({
      apiKey,
      appUserID: userId || undefined,
    });

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
    throw error;
  }
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
