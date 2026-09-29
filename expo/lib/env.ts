export type AppEnvironment = 'development' | 'staging' | 'production';

/**
 * Determine the current environment.
 *
 * EAS build profiles set EXPO_PUBLIC_APP_ENV explicitly (see eas.json).
 * When it is missing we fall back on __DEV__, so a release binary can never
 * silently run with development behaviour (mock purchases, debug logging).
 */
function resolveEnvironment(): AppEnvironment {
  switch (process.env.EXPO_PUBLIC_APP_ENV) {
    case 'production':
      return 'production';
    case 'staging':
    case 'preview':
      return 'staging';
    case 'development':
      return 'development';
    default:
      return __DEV__ ? 'development' : 'production';
  }
}

export const APP_ENV = resolveEnvironment();

interface EnvConfig {
  /** Human-readable label for logging / debug screens */
  label: string;
  /** RevenueCat iOS API key */
  revenueCatIosKey: string;
  /** RevenueCat Android API key */
  revenueCatAndroidKey: string;
  /** Enable verbose console logging */
  debugLogging: boolean;
}

const configs: Record<AppEnvironment, Omit<EnvConfig, 'revenueCatIosKey' | 'revenueCatAndroidKey'>> = {
  development: { label: 'DEV', debugLogging: true },
  staging: { label: 'STAGING', debugLogging: true },
  production: { label: 'PROD', debugLogging: false },
};

/** Resolved environment configuration for the running build. */
export const env: EnvConfig = {
  ...configs[APP_ENV],
  revenueCatIosKey: process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY || '',
  revenueCatAndroidKey: process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_KEY || '',
};

/** Mock purchases are only ever allowed in a local development bundle. */
export const allowMockPurchases = __DEV__;
