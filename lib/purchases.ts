import { Platform } from 'react-native';
import Purchases, { PurchasesPackage, CustomerInfo, LOG_LEVEL } from 'react-native-purchases';
import { PRODUCT_IDS } from '@/constants/monetization';
import { env, APP_ENV } from '@/lib/env';

const IOS_API_KEY = env.revenueCatIosKey;
const ANDROID_API_KEY = env.revenueCatAndroidKey;

let isConfigured = false;

/**
 * Initialize RevenueCat SDK. Call once at app startup.
 *
 * In development, missing API keys are tolerated (purchases are mocked).
 * In production, missing keys will throw so the issue surfaces immediately.
 */
export async function configurePurchases(userId?: string): Promise<void> {
  if (isConfigured) return;

  const apiKey = Platform.OS === 'ios' ? IOS_API_KEY : ANDROID_API_KEY;

  if (!apiKey) {
    if (APP_ENV === 'production') {
      throw new Error(
        'RevenueCat API key is not set. Production builds require valid ' +
        'EXPO_PUBLIC_REVENUECAT_IOS_KEY / EXPO_PUBLIC_REVENUECAT_ANDROID_KEY ' +
        'environment variables. See .env.production.example.'
      );
    }
    if (env.debugLogging) {
      console.warn(
        '[purchases] RevenueCat API key not set \u2014 purchases will be mocked (' + APP_ENV + ')'
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

    if (__DEV__ && env.debugLogging) {
      // eslint-disable-next-line no-console
      console.log('[purchases] RevenueCat configured (' + APP_ENV + ')');
    }
  } catch (error) {
    if (APP_ENV === 'production') {
      throw error;
    }
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
 * Returns the list of active entitlement identifiers on success.
 */
export async function purchasePackage(
  pkg: PurchasesPackage
): Promise<string[]> {
  try {
    const { customerInfo } = await Purchases.purchasePackage(pkg);
    return getActiveEntitlements(customerInfo);
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'userCancelled' in error && (error as Record<string, unknown>).userCancelled) {
      return [];
    }
    throw error;
  }
}

/**
 * Purchase a product by its RevenueCat product identifier.
 *
 * In production, throws if RevenueCat is not configured.
 * In development / staging, falls back to a mock purchase so the UI
 * can be exercised without a real App Store sandbox.
 */
export async function purchaseProductById(productId: string): Promise<string[]> {
  if (!isConfigured) {
    if (APP_ENV === 'production') {
      throw new Error(
        'Cannot purchase: RevenueCat is not configured. ' +
        'Ensure API keys are set in the production environment.'
      );
    }
    if (env.debugLogging) {
      console.warn('[purchases] Mock purchase: ' + productId);
    }
    return [productId];
  }

  const offerings = await getOfferings();
  const pkg = offerings.find((p) => p.product.identifier === productId);

  if (!pkg) {
    throw new Error('Product "' + productId + '" not found in RevenueCat offerings');
  }

  return await purchasePackage(pkg);
}

/**
 * Restore previous purchases. Required by App Store guidelines.
 * Returns the list of active entitlement identifiers.
 */
export async function restorePurchases(): Promise<string[]> {
  if (!isConfigured) {
    if (APP_ENV === 'production') {
      throw new Error(
        'Cannot restore purchases: RevenueCat is not configured.'
      );
    }
    if (env.debugLogging) {
      console.warn('[purchases] RevenueCat not configured \u2014 cannot restore');
    }
    return [];
  }

  try {
    const customerInfo = await Purchases.restorePurchases();
    return getActiveEntitlements(customerInfo);
  } catch (error) {
    if (env.debugLogging) console.error('[purchases] Failed to restore purchases:', error);
    throw error;
  }
}

/**
 * Get current customer info and active entitlements.
 */
export async function getCustomerInfo(): Promise<string[]> {
  if (!isConfigured) return [];

  try {
    const customerInfo = await Purchases.getCustomerInfo();
    return getActiveEntitlements(customerInfo);
  } catch (error) {
    if (env.debugLogging) console.error('[purchases] Failed to get customer info:', error);
    return [];
  }
}

/**
 * Extract active entitlement identifiers from CustomerInfo.
 * Maps RevenueCat entitlements back to our PRODUCT_IDS.
 */
function getActiveEntitlements(customerInfo: CustomerInfo): string[] {
  const activeEntitlements = Object.keys(customerInfo.entitlements.active);

  const productIds = Object.values(PRODUCT_IDS);
  return activeEntitlements.filter((id) => productIds.includes(id));
}
