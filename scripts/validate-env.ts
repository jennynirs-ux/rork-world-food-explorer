#!/usr/bin/env node
/**
 * validate-env.ts — Pre-build environment validation.
 *
 * Run this before `eas build --profile production` to catch missing or
 * placeholder environment variables that would break the production app.
 *
 * Usage:
 *   npx tsx scripts/validate-env.ts          # validates current env
 *   npx tsx scripts/validate-env.ts --strict # also checks backend-only vars
 *
 * Exit codes:
 *   0 = all checks passed
 *   1 = one or more required variables are missing or still placeholders
 */

const PLACEHOLDER_PATTERNS = [
  /^$/,                    // empty string
  /YOUR_/i,               // "YOUR_KEY_HERE" style placeholders
  /_HERE$/i,              // "APPLE_ID_HERE" style
  /^appl_$/,              // empty RevenueCat prefix
  /^goog_$/,              // empty RevenueCat prefix
  /^placeholder/i,
  /^changeme/i,
  /^todo/i,
  /^xxx/i,
];

function isPlaceholder(value: string | undefined): boolean {
  if (!value) return true;
  return PLACEHOLDER_PATTERNS.some((pattern) => pattern.test(value.trim()));
}

type Check = {
  name: string;
  value: string | undefined;
  required: boolean;
  description: string;
};

const isStrict = process.argv.includes('--strict');

const checks: Check[] = [
  // ── Client-side (baked into the JS bundle) ──────────────────
  {
    name: 'EXPO_PUBLIC_RORK_API_BASE_URL',
    value: process.env.EXPO_PUBLIC_RORK_API_BASE_URL,
    required: true,
    description: 'Backend API URL for the mobile client',
  },
  {
    name: 'EXPO_PUBLIC_REVENUECAT_IOS_KEY',
    value: process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY,
    required: true,
    description: 'RevenueCat public iOS SDK key (from RevenueCat dashboard)',
  },
  {
    name: 'EXPO_PUBLIC_REVENUECAT_ANDROID_KEY',
    value: process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_KEY,
    required: true,
    description: 'RevenueCat public Android SDK key',
  },

  // ── Backend-only (only checked with --strict) ───────────────
  {
    name: 'WFE_API_KEY',
    value: process.env.WFE_API_KEY,
    required: isStrict,
    description: 'API key that protects backend routes',
  },
  {
    name: 'WFE_REVENUECAT_SECRET_KEY',
    value: process.env.WFE_REVENUECAT_SECRET_KEY,
    required: isStrict,
    description: 'RevenueCat secret key for server-side entitlement verification',
  },
];

console.log('\n🔍  Validating environment variables...\n');

let hasErrors = false;

for (const check of checks) {
  const missing = isPlaceholder(check.value);
  const icon = missing ? (check.required ? '❌' : '⚠️ ') : '✅';

  console.log(`  ${icon}  ${check.name}`);
  if (missing) {
    console.log(`       ${check.description}`);
    if (check.required) {
      hasErrors = true;
    }
  }
}

console.log('');

if (hasErrors) {
  console.error(
    '🚫  One or more REQUIRED environment variables are missing or set to placeholder values.\n' +
      '    Fix them before running a production build.\n' +
      '    See .env.production.example for the expected values.\n'
  );
  process.exit(1);
} else {
  console.log('✅  All required environment variables are set.\n');
  process.exit(0);
}
