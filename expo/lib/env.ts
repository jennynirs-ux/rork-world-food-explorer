import Constants from 'expo-constants';

export type AppEnvironment = 'development' | 'staging' | 'production';

/**
 * Determine the current environment from the EAS build profile.
 *
 * EAS sets Constants.expoConfig.extra.eas.profile automatically during
 * managed builds.  For local dev (Expo Go / npx expo start) the profile
 * is undefined, which maps to 'development'.
 */
function resolveEnvironment(): AppEnvironment {
  const profile =
    (Constants.expoConfig?.extra?.eas as Record<string, string> | undefined)
      ?.profile ?? '';

  switch (profile) {
    case 'production':
      return 'production';
    case 'preview':
      return 'staging';
    default:
      return 'development';
  }
}

export const APP_ENV = resolveEnvironment();

interface EnvConfig {
  /** Human-readable label for logging / debug screens */
  label: string;
  /** Base URL the mobile client talks to */
  apiBaseUrl: string;
  /** RevenueCat iOS API key */
  revenueCatIosKey: string;
  /** RevenueCat Android API key */
  revenueCatAndroidKey: string;
  /** Whether purchases run in sandbox / mock mode */
  purchaseSandbox: boolean;
  /** Enable verbose console logging */
  debugLogging: boolean;
}

const configs: Record<AppEnvironment, EnvConfig> = {
  development: {
    label: 'DEV',
    apiBaseUrl:
      process.env.EXPO_PUBLIC_RORK_API_BASE_URL || 'http://localhost:3000',
    revenueCatIosKey: process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY || '',
    revenueCatAndroidKey:
      process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_KEY || '',
    purchaseSandbox: true,
    debugLogging: true,
  },
  staging: {
    label: 'STAGING',
    apiBaseUrl:
      process.env.EXPO_PUBLIC_RORK_API_BASE_URL ||
      'https://staging-api.worldfoodexplorer.app',
    revenueCatIosKey: process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY || '',
    revenueCatAndroidKey:
      process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_KEY || '',
    purchaseSandbox: true,
    debugLogging: true,
  },
  production: {
    label: 'PROD',
    apiBaseUrl:
      process.env.EXPO_PUBLIC_RORK_API_BASE_URL ||
      'https://api.worldfoodexplorer.app',
    revenueCatIosKey: process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY || '',
    revenueCatAndroidKey:
      process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_KEY || '',
    purchaseSandbox: false,
    debugLogging: false,
  },
};

/** Resolved environment configuration for the running build. */
export const env: EnvConfig = configs[APP_ENV];
