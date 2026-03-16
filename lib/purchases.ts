import { Platform } from 'react-native';
import Purchases, { PurchasesPackage, CustomerInfo, LOG_LEVEL } from 'react-native-purchases';
import { PRODUCT_IDS } from '@/constants/monetization';

const IOS_API_KEY = process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY || '';
const ANDROID_API_KEY = process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_KEY || '';

let isConfigured = false;

/**
 * Initialize RevenueCat SDK. Call once at app startup.
 */
export async function configurePurchases(userId?: string): Promise<void> {
  if (isConfigured) return;

  const apiKey = Platform.OS === 'ios' ? IOS_API_KEY : ANDROID_API_KEY;
  if (!apiKey) {
    if (__DEV__) console.warn('RevenueCat API key not set — purchases will be mocked');
    return;
  }

  try {
    if (__DEV__) {
      Purchases.setLogLevel(LOG_LEVEL.DEBUG);
    }

    Purchases.configure({
      apiKey,
      appUserID: userId || undefined,
    });

    isConfigured = true;
  } catch (error) {
    if (__DEV__) console.error('Failed to configure RevenueCat:', error);
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
    if (__DEV__) console.error('Failed to get offerings:', error);
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
  } catch (error: any) {
    if (error.userCancelled) {
      // User cancelled — not an error
      return [];
    }
    throw error;
  }
}

/**
 * Purchase a product by its RevenueCat product identifier.
 * Falls back to mock purchase if RevenueCat is not configured.
 */
export async function purchaseProductById(productId: string): Promise<string[]> {
  if (!isConfigured) {
    // Mock mode: return the productId as if purchased
    if (__DEV__) console.warn(`Mock purchase: ${productId}`);
    return [productId];
  }

  try {
    const offerings = await getOfferings();
    const pkg = offerings.find(
      (p) => p.product.identifier === productId
    );

    if (!pkg) {
      throw new Error(`Product "${productId}" not found in RevenueCat offerings`);
    }

    return await purchasePackage(pkg);
  } catch (error) {
    throw error;
  }
}

/**
 * Restore previous purchases. Required by App Store guidelines.
 * Returns the list of active entitlement identifiers.
 */
export async function restorePurchases(): Promise<string[]> {
  if (!isConfigured) {
    if (__DEV__) console.warn('RevenueCat not configured — cannot restore');
    return [];
  }

  try {
    const customerInfo = await Purchases.restorePurchases();
    return getActiveEntitlements(customerInfo);
  } catch (error) {
    if (__DEV__) console.error('Failed to restore purchases:', error);
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
    if (__DEV__) console.error('Failed to get customer info:', error);
    return [];
  }
}

/**
 * Extract active entitlement identifiers from CustomerInfo.
 * Maps RevenueCat entitlements back to our PRODUCT_IDS.
 */
function getActiveEntitlements(customerInfo: CustomerInfo): string[] {
  const activeEntitlements = Object.keys(customerInfo.entitlements.active);

  // Map entitlement identifiers to our product IDs
  const productIds = Object.values(PRODUCT_IDS);
  return activeEntitlements.filter((id) => productIds.includes(id));
}
