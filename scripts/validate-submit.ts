#!/usr/bin/env node
/**
 * validate-submit.ts — Pre-submission validation for app store credentials.
 *
 * Checks that eas.json submit credentials are filled in and that required
 * files exist before running `eas submit`.
 *
 * Usage:
 *   npx tsx scripts/validate-submit.ts
 *
 * Exit codes:
 *   0 = all checks passed
 *   1 = one or more issues found
 */

import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(__dirname, '..');
const EAS_PATH = path.join(ROOT, 'eas.json');

const PLACEHOLDER_PATTERNS = [
  /REPLACE_WITH/i,
  /YOUR_/i,
  /_HERE$/i,
  /^$/,
  /^placeholder/i,
  /^changeme/i,
  /^todo/i,
];

function isPlaceholder(value: string): boolean {
  return PLACEHOLDER_PATTERNS.some((p) => p.test(value.trim()));
}

console.log('\n🔍  Validating app store submission credentials...\n');

let hasErrors = false;

// ── Load eas.json ─────────────────────────────────────────────
if (!fs.existsSync(EAS_PATH)) {
  console.error('  ❌  eas.json not found');
  process.exit(1);
}

const eas = JSON.parse(fs.readFileSync(EAS_PATH, 'utf-8'));
const submit = eas.submit?.production;

if (!submit) {
  console.error('  ❌  No submit.production section in eas.json');
  process.exit(1);
}

// ── iOS checks ────────────────────────────────────────────────
const iosChecks = [
  { key: 'appleId', label: 'Apple ID (email)' },
  { key: 'ascAppId', label: 'App Store Connect App ID' },
  { key: 'appleTeamId', label: 'Apple Team ID' },
];

console.log('  iOS:');
for (const check of iosChecks) {
  const value = submit.ios?.[check.key] || '';
  if (isPlaceholder(value)) {
    console.log(`    ❌  ${check.label} (${check.key}) — still a placeholder: "${value}"`);
    hasErrors = true;
  } else {
    console.log(`    ✅  ${check.label}`);
  }
}

// ── Android checks ────────────────────────────────────────────
console.log('  Android:');
const saPath = submit.android?.serviceAccountKeyPath;
if (!saPath) {
  console.log('    ❌  serviceAccountKeyPath is not set');
  hasErrors = true;
} else {
  const fullPath = path.resolve(ROOT, saPath);
  if (fs.existsSync(fullPath)) {
    console.log(`    ✅  Service account key file exists: ${saPath}`);
  } else {
    console.log(`    ❌  Service account key file NOT found: ${saPath}`);
    console.log(`         Expected at: ${fullPath}`);
    hasErrors = true;
  }
}

// ── RevenueCat production keys ────────────────────────────────
console.log('  RevenueCat (production build env):');
const prodEnv = eas.build?.production?.env || {};
const rcChecks = [
  { key: 'EXPO_PUBLIC_REVENUECAT_IOS_KEY', label: 'iOS SDK key' },
  { key: 'EXPO_PUBLIC_REVENUECAT_ANDROID_KEY', label: 'Android SDK key' },
];

for (const check of rcChecks) {
  const value = prodEnv[check.key] || '';
  if (isPlaceholder(value)) {
    console.log(`    ❌  ${check.label} — still a placeholder`);
    hasErrors = true;
  } else {
    console.log(`    ✅  ${check.label}`);
  }
}

console.log('');

if (hasErrors) {
  console.error(
    '🚫  Submission credentials are incomplete.\n' +
      '    Fill in the real values in eas.json before running `eas submit`.\n'
  );
  process.exit(1);
} else {
  console.log('✅  All submission credentials look good!\n');
  process.exit(0);
}
