// Mock react-native-purchases before importing the module
jest.mock('react-native-purchases', () => ({
  __esModule: true,
  default: {
    configure: jest.fn(),
    getOfferings: jest.fn().mockResolvedValue({
      current: { availablePackages: [] },
    }),
    purchasePackage: jest.fn(),
    restorePurchases: jest.fn().mockResolvedValue({
      entitlements: { active: {} },
    }),
    getCustomerInfo: jest.fn().mockResolvedValue({
      entitlements: { active: {} },
    }),
    logIn: jest.fn(),
    logOut: jest.fn().mockResolvedValue({ entitlements: { active: {} } }),
    isAnonymous: jest.fn().mockResolvedValue(true),
    syncPurchases: jest.fn().mockResolvedValue(undefined),
    setLogLevel: jest.fn(),
    addCustomerInfoUpdateListener: jest.fn(),
    removeCustomerInfoUpdateListener: jest.fn(),
  },
  LOG_LEVEL: { DEBUG: 'DEBUG' },
  PURCHASES_ERROR_CODE: jest.requireActual('@revenuecat/purchases-typescript-internal').PURCHASES_ERROR_CODE,
}));

// For the AppContext startup tests below. create-context-hook ships ESM
// only; this is the same implementation in CommonJS.
jest.mock('@nkzw/create-context-hook', () => {
  const React = jest.requireActual('react');
  return {
    __esModule: true,
    default: (init: () => unknown) => {
      const Context = React.createContext(undefined);
      return [
        ({ children }: { children: unknown }) =>
          React.createElement(Context.Provider, { value: init() }, children),
        () => React.useContext(Context),
      ];
    },
  };
});
jest.mock('@/lib/notifications', () => ({
  initializeNotifications: jest.fn().mockResolvedValue(undefined),
  refreshStreakReminder: jest.fn().mockResolvedValue(undefined),
}));
jest.mock('@/lib/legacy-code-unlock', () => ({
  hasActiveLegacyCodeUnlock: jest.fn().mockResolvedValue(false),
}));
jest.mock('@/lib/cache', () => ({ cache: { remove: jest.fn().mockResolvedValue(undefined) } }));
jest.mock('@/lib/rating', () => ({ trackPositiveAction: jest.fn().mockResolvedValue(undefined) }));

// eslint-disable-next-line import/first
import Purchases, { PURCHASES_ERROR_CODE } from 'react-native-purchases';
// eslint-disable-next-line import/first
import AsyncStorage from '@react-native-async-storage/async-storage';
// eslint-disable-next-line import/first
import {
  configurePurchases,
  ensureAnonymousUser,
  isPurchasesConfigured,
  getOfferings,
  restorePurchases,
  getCustomerInfo,
  getOwnedProducts,
  classifyPurchaseError,
  PurchaseAlreadyOwnedError,
  PurchaseUnavailableError,
} from '../purchases';

describe('purchases (mock mode — no API keys)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('configurePurchases does not throw', async () => {
    await expect(configurePurchases()).resolves.not.toThrow();
  });

  it('ensureAnonymousUser reports false (nothing to trust) without RevenueCat', async () => {
    await expect(ensureAnonymousUser()).resolves.toBe(false);
  });

  it('isPurchasesConfigured returns false without API keys', () => {
    // In test env, EXPO_PUBLIC_REVENUECAT_IOS_KEY is not set
    expect(isPurchasesConfigured()).toBe(false);
  });

  it('getOfferings returns empty in mock mode', async () => {
    const offerings = await getOfferings();
    expect(offerings).toEqual([]);
  });

  it('restorePurchases returns empty in mock mode', async () => {
    const result = await restorePurchases();
    expect(result).toEqual([]);
  });

  it('getCustomerInfo returns null (unknown) in mock mode', async () => {
    const result = await getCustomerInfo();
    expect(result).toBeNull();
  });
});

describe('getOwnedProducts', () => {
  const info = (active: Record<string, { productIdentifier: string }>, transactions: string[] = []) =>
    ({
      entitlements: { active },
      nonSubscriptionTransactions: transactions.map((productIdentifier) => ({ productIdentifier })),
    }) as any;

  it('maps entitlements named after product ids', () => {
    expect(getOwnedProducts(info({ world_unlock_all: { productIdentifier: 'world_unlock_all' } })))
      .toEqual(['world_unlock_all']);
  });

  it('maps entitlements with other names via their product', () => {
    expect(getOwnedProducts(info({ 'Unlock the World': { productIdentifier: 'world_unlock_all' } })))
      .toEqual(['world_unlock_all']);
  });

  it('includes non-subscription transactions and ignores unknown products', () => {
    expect(getOwnedProducts(info({}, ['unlock_asia', 'something_else'])).sort())
      .toEqual(['unlock_asia']);
  });

  it('returns nothing when the customer owns nothing (e.g. after a refund)', () => {
    expect(getOwnedProducts(info({}))).toEqual([]);
  });
});

const mockPurchases = Purchases as unknown as Record<string, jest.Mock>;

/**
 * A fresh copy of lib/purchases with a RevenueCat key set, so it configures
 * the (mocked) SDK. The SDK mock and AsyncStorage are shared and reset in
 * beforeEach.
 */
function loadConfigured() {
  let mod!: typeof import('../purchases');
  jest.isolateModules(() => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports -- fresh copies via isolateModules
    mod = require('../purchases');
  });
  return { mod, Purchases: mockPurchases };
}

/** RevenueCat key set, SDK mock and storage reset, console quiet. */
function useConfiguredSdk() {
  const originalKey = process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY;
  beforeEach(async () => {
    process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY = 'appl_test';
    jest.clearAllMocks();
    await AsyncStorage.clear();
    mockPurchases.isAnonymous.mockResolvedValue(true);
    mockPurchases.logOut.mockResolvedValue(info([]));
    mockPurchases.syncPurchases.mockResolvedValue(undefined);
    mockPurchases.restorePurchases.mockResolvedValue(info([]));
    mockPurchases.purchasePackage.mockReset();
    jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });
  afterEach(() => {
    process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY = originalKey;
    jest.mocked(console.log).mockRestore();
    jest.mocked(console.warn).mockRestore();
    jest.mocked(console.error).mockRestore();
  });
}

const MIGRATION_KEY = '@world_cooking_rc_anonymous_migration';
const info = (products: string[]) =>
  ({ entitlements: { active: {} }, nonSubscriptionTransactions: products.map((productIdentifier) => ({ productIdentifier })) }) as any;
const rcError = (code: string) => Object.assign(new Error('rc'), { code, userCancelled: false });

describe('RevenueCat anonymous App User IDs', () => {
  useConfiguredSdk();

  it('configures without a custom App User ID', async () => {
    const { mod, Purchases } = loadConfigured();
    await mod.configurePurchases();
    expect(mod.isPurchasesConfigured()).toBe(true);
    expect(Purchases.configure).toHaveBeenCalledWith({ apiKey: 'appl_test' });
  });

  it('a fresh install stays anonymous: no logout, no sync', async () => {
    const { mod, Purchases } = loadConfigured();
    Purchases.isAnonymous.mockResolvedValue(true);
    await mod.configurePurchases();

    await expect(mod.ensureAnonymousUser()).resolves.toBe(true);
    expect(Purchases.logOut).not.toHaveBeenCalled();
    expect(Purchases.syncPurchases).not.toHaveBeenCalled();
    expect(await AsyncStorage.getItem(MIGRATION_KEY)).toBe('done');
  });

  // syncPurchases in react-native-purchases resolves at once and never
  // reports a failure, so it is mocked that way throughout.
  it('a legacy custom-ID install logs out and syncs, but stays pending until the purchases arrive', async () => {
    const { mod, Purchases } = loadConfigured();
    Purchases.isAnonymous.mockResolvedValue(false);
    await mod.configurePurchases();

    await expect(mod.ensureAnonymousUser()).resolves.toBe(false);
    expect(Purchases.logOut).toHaveBeenCalledTimes(1);
    expect(Purchases.syncPurchases).toHaveBeenCalledTimes(1);
    expect(Purchases.restorePurchases).not.toHaveBeenCalled();
    expect(Purchases.logOut.mock.invocationCallOrder[0])
      .toBeLessThan(Purchases.syncPurchases.mock.invocationCallOrder[0]);
    expect(await AsyncStorage.getItem(MIGRATION_KEY)).toBe('pending');

    // The anonymous ID doesn't own the cached pack yet.
    await expect(mod.completeAnonymousMigration([], ['unlock_asia'])).resolves.toBe(false);
    expect(await AsyncStorage.getItem(MIGRATION_KEY)).toBe('pending');

    // The sync has gone through.
    await expect(mod.completeAnonymousMigration(['unlock_asia'], ['unlock_asia'])).resolves.toBe(true);
    expect(await AsyncStorage.getItem(MIGRATION_KEY)).toBe('done');

    // Later launches don't touch the SDK again.
    Purchases.isAnonymous.mockResolvedValue(true);
    await expect(mod.ensureAnonymousUser()).resolves.toBe(true);
    expect(Purchases.logOut).toHaveBeenCalledTimes(1);
    expect(Purchases.syncPurchases).toHaveBeenCalledTimes(1);
  });

  it('a legacy install that never bought anything completes at the first answer', async () => {
    const { mod, Purchases } = loadConfigured();
    Purchases.isAnonymous.mockResolvedValue(false);
    await mod.configurePurchases();

    await expect(mod.ensureAnonymousUser()).resolves.toBe(false);
    await expect(mod.completeAnonymousMigration([], [])).resolves.toBe(true);
    expect(await AsyncStorage.getItem(MIGRATION_KEY)).toBe('done');
  });

  it('a pending migration re-issues the sync on the next launch', async () => {
    const { mod, Purchases } = loadConfigured();
    Purchases.isAnonymous.mockResolvedValue(false);
    await mod.configurePurchases();
    await expect(mod.ensureAnonymousUser()).resolves.toBe(false);

    // Next launch: already anonymous after the logout, the sync runs again.
    Purchases.isAnonymous.mockResolvedValue(true);
    await expect(mod.ensureAnonymousUser()).resolves.toBe(false);
    expect(Purchases.logOut).toHaveBeenCalledTimes(1);
    expect(Purchases.syncPurchases).toHaveBeenCalledTimes(2);
    expect(await AsyncStorage.getItem(MIGRATION_KEY)).toBe('pending');
  });

  it('a failed logout (offline) reports false and keeps the migration pending', async () => {
    const { mod, Purchases } = loadConfigured();
    Purchases.isAnonymous.mockResolvedValue(false);
    Purchases.logOut.mockRejectedValueOnce(rcError(PURCHASES_ERROR_CODE.OFFLINE_CONNECTION_ERROR));
    await mod.configurePurchases();

    await expect(mod.ensureAnonymousUser()).resolves.toBe(false);
    expect(Purchases.syncPurchases).not.toHaveBeenCalled();
    expect(await AsyncStorage.getItem(MIGRATION_KEY)).not.toBe('done');
    // Answers for the old custom ID can't complete it.
    await expect(mod.completeAnonymousMigration([], [])).resolves.toBe(false);
    expect(await AsyncStorage.getItem(MIGRATION_KEY)).not.toBe('done');
  });

  it('a "done" install that is somehow back on a custom ID migrates again', async () => {
    await AsyncStorage.setItem(MIGRATION_KEY, 'done');
    const { mod, Purchases } = loadConfigured();
    Purchases.isAnonymous.mockResolvedValue(false);
    await mod.configurePurchases();

    await expect(mod.ensureAnonymousUser()).resolves.toBe(false);
    expect(Purchases.logOut).toHaveBeenCalledTimes(1);
    expect(await AsyncStorage.getItem(MIGRATION_KEY)).toBe('pending');
  });
});

describe('AppContext startup sync with RevenueCat', () => {
  // Each test loads a fresh AppContext, including all bundled country data.
  jest.setTimeout(30000);
  useConfiguredSdk();

  const PROFILE_KEY = '@world_cooking_user_profile';

  /** Start AppProvider (with a fresh, configured lib/purchases) on a saved profile. */
  async function startApp(cachedProducts: string[], whileFetching?: (app: () => any) => Promise<void>) {
    await AsyncStorage.setItem(PROFILE_KEY, JSON.stringify({
      name: 'Jenny',
      totalPoints: 0,
      createdDate: '2026-01-01T00:00:00.000Z',
      completedOnboarding: true,
      purchasedProducts: cachedProducts,
    }));
    let app: any;
    let rntl!: typeof import('@testing-library/react-native');
    await jest.isolateModulesAsync(async () => {
      // eslint-disable-next-line @typescript-eslint/no-require-imports -- fresh copies via isolateModules
      const React = require('react');
      // The /pure entry doesn't register test hooks, which can't be added from inside a test.
      // eslint-disable-next-line @typescript-eslint/no-require-imports -- fresh copies via isolateModules
      rntl = require('@testing-library/react-native/pure');
      // eslint-disable-next-line @typescript-eslint/no-require-imports -- fresh copies via isolateModules
      const { AppProvider, useApp } = require('@/contexts/AppContext');
      function Probe() {
        app = useApp();
        return null;
      }
      rntl.render(React.createElement(AppProvider, null, React.createElement(Probe)));
    });
    cleanup = rntl.cleanup;
    testingLibrary = rntl;
    if (whileFetching) {
      // Runs while the startup CustomerInfo request is still out.
      await rntl.waitFor(() => expect(mockPurchases.getCustomerInfo).toHaveBeenCalled());
      await rntl.act(() => whileFetching(() => app));
    }
    // Ready once the listener is registered, the last step of initPurchases.
    await rntl.waitFor(() => expect(mockPurchases.addCustomerInfoUpdateListener).toHaveBeenCalled());
    return () => app;
  }

  let cleanup: () => void = () => {};
  // The testing-library copy the current app was rendered with.
  let testingLibrary!: typeof import('@testing-library/react-native');
  afterEach(() => {
    cleanup();
    cleanup = () => {};
  });

  it('the first launch after upgrading keeps the cached purchases while the sync is on its way', async () => {
    mockPurchases.isAnonymous.mockResolvedValue(false);
    // The fresh anonymous ID owns nothing until the sync has gone through.
    mockPurchases.getCustomerInfo.mockResolvedValue(info([]));

    const app = await startApp(['unlock_asia']);
    expect(mockPurchases.logOut).toHaveBeenCalled();
    expect(mockPurchases.syncPurchases).toHaveBeenCalledTimes(1);
    expect(app().userProfile.purchasedProducts).toEqual(['unlock_asia']);
    expect(await AsyncStorage.getItem(MIGRATION_KEY)).toBe('pending');
  });

  it('a failed logout keeps the cached purchases', async () => {
    mockPurchases.isAnonymous.mockResolvedValue(false);
    mockPurchases.logOut.mockRejectedValue(rcError(PURCHASES_ERROR_CODE.NETWORK_ERROR));
    mockPurchases.getCustomerInfo.mockResolvedValue(info([]));

    const app = await startApp(['unlock_asia']);
    expect(app().userProfile.purchasedProducts).toEqual(['unlock_asia']);
    expect(await AsyncStorage.getItem(MIGRATION_KEY)).not.toBe('done');
  });

  it('the migration completes when the synced purchases arrive through the listener', async () => {
    mockPurchases.isAnonymous.mockResolvedValue(false);
    mockPurchases.getCustomerInfo.mockResolvedValue(info([]));

    const app = await startApp(['unlock_asia']);
    const listener = mockPurchases.addCustomerInfoUpdateListener.mock.calls[0][0];
    await testingLibrary.act(async () => { listener(info(['unlock_asia'])); });
    await testingLibrary.waitFor(async () => expect(await AsyncStorage.getItem(MIGRATION_KEY)).toBe('done'));
    expect(app().userProfile.purchasedProducts).toEqual(['unlock_asia']);
  });

  it('once the migration is done, RevenueCat revokes (refunds)', async () => {
    await AsyncStorage.setItem(MIGRATION_KEY, 'done');
    mockPurchases.getCustomerInfo.mockResolvedValue(info(['unlock_europe']));

    const app = await startApp(['unlock_asia', 'unlock_europe']);
    expect(mockPurchases.syncPurchases).not.toHaveBeenCalled();
    expect(app().userProfile.purchasedProducts).toEqual(['unlock_europe']);
  });

  it('an older startup answer does not undo a purchase made while it was loading', async () => {
    await AsyncStorage.setItem(MIGRATION_KEY, 'done');
    let answer!: (value: unknown) => void;
    mockPurchases.getCustomerInfo.mockReturnValue(new Promise((resolve) => { answer = resolve; }));

    const app = await startApp([], async (current) => {
      await current().purchaseProduct('unlock_asia');
      answer(info([]));
    });
    expect(app().userProfile.purchasedProducts).toEqual(['unlock_asia']);
  });

  it('a migrated install does not sync again and adds purchases found on RevenueCat', async () => {
    await AsyncStorage.setItem(MIGRATION_KEY, 'done');
    mockPurchases.getCustomerInfo.mockResolvedValue(info(['world_unlock_all']));

    const app = await startApp([]);
    expect(mockPurchases.logOut).not.toHaveBeenCalled();
    expect(mockPurchases.syncPurchases).not.toHaveBeenCalled();
    expect(app().userProfile.purchasedProducts).toEqual(['world_unlock_all']);
  });
});

describe('purchasePackage: product already owned (Google Play)', () => {
  useConfiguredSdk();
  const pkg = (id: string) => ({ product: { identifier: id } }) as any;

  it('restores and succeeds when RevenueCat confirms the product', async () => {
    const { mod, Purchases } = loadConfigured();
    Purchases.purchasePackage.mockRejectedValue(rcError(PURCHASES_ERROR_CODE.PRODUCT_ALREADY_PURCHASED_ERROR));
    Purchases.restorePurchases.mockResolvedValue(info(['unlock_asia']));
    await mod.configurePurchases();

    await expect(mod.purchasePackage(pkg('unlock_asia'))).resolves.toEqual(['unlock_asia']);
  });

  it('counts the world unlock as owning every pack', async () => {
    const { mod, Purchases } = loadConfigured();
    Purchases.purchasePackage.mockRejectedValue(rcError(PURCHASES_ERROR_CODE.PRODUCT_ALREADY_PURCHASED_ERROR));
    Purchases.restorePurchases.mockResolvedValue(info(['world_unlock_all']));
    await mod.configurePurchases();

    await expect(mod.purchasePackage(pkg('unlock_asia'))).resolves.toEqual(['world_unlock_all']);
  });

  it('throws PurchaseAlreadyOwnedError when the restore does not confirm it', async () => {
    const { mod, Purchases } = loadConfigured();
    Purchases.purchasePackage.mockRejectedValue(rcError(PURCHASES_ERROR_CODE.PRODUCT_ALREADY_PURCHASED_ERROR));
    Purchases.restorePurchases.mockResolvedValue(info(['unlock_europe']));
    await mod.configurePurchases();

    await expect(mod.purchasePackage(pkg('unlock_asia'))).rejects.toBeInstanceOf(mod.PurchaseAlreadyOwnedError);
  });

  it('throws PurchaseAlreadyOwnedError when the restore itself fails', async () => {
    const { mod, Purchases } = loadConfigured();
    Purchases.purchasePackage.mockRejectedValue(rcError(PURCHASES_ERROR_CODE.PRODUCT_ALREADY_PURCHASED_ERROR));
    Purchases.restorePurchases.mockRejectedValue(rcError(PURCHASES_ERROR_CODE.NETWORK_ERROR));
    await mod.configurePurchases();

    await expect(mod.purchasePackage(pkg('unlock_asia'))).rejects.toBeInstanceOf(mod.PurchaseAlreadyOwnedError);
  });

  it('still passes other errors through unchanged', async () => {
    const { mod, Purchases } = loadConfigured();
    const error = rcError(PURCHASES_ERROR_CODE.UNEXPECTED_BACKEND_RESPONSE_ERROR);
    Purchases.purchasePackage.mockRejectedValue(error);
    await mod.configurePurchases();

    await expect(mod.purchasePackage(pkg('unlock_asia'))).rejects.toBe(error);
    expect(Purchases.restorePurchases).not.toHaveBeenCalled();
  });
});

describe('classifyPurchaseError', () => {
  const code = (c: PURCHASES_ERROR_CODE) => classifyPurchaseError(rcError(c));

  it('ignores a second tap while the store is busy', () => {
    expect(code(PURCHASES_ERROR_CODE.OPERATION_ALREADY_IN_PROGRESS_ERROR)).toBe('ignore');
  });

  it('recognises purchases blocked on the device', () => {
    expect(code(PURCHASES_ERROR_CODE.PURCHASE_NOT_ALLOWED_ERROR)).toBe('notAllowed');
  });

  it('maps network and store problems to a connection message', () => {
    expect(code(PURCHASES_ERROR_CODE.NETWORK_ERROR)).toBe('connection');
    expect(code(PURCHASES_ERROR_CODE.OFFLINE_CONNECTION_ERROR)).toBe('connection');
    expect(code(PURCHASES_ERROR_CODE.STORE_PROBLEM_ERROR)).toBe('connection');
  });

  it('treats backend and receipt errors as possibly charged', () => {
    for (const c of [
      PURCHASES_ERROR_CODE.UNEXPECTED_BACKEND_RESPONSE_ERROR,
      PURCHASES_ERROR_CODE.UNKNOWN_BACKEND_ERROR,
      PURCHASES_ERROR_CODE.RECEIPT_ALREADY_IN_USE_ERROR,
      PURCHASES_ERROR_CODE.INVALID_RECEIPT_ERROR,
    ]) {
      expect(code(c)).toBe('unconfirmed');
    }
  });

  it('maps already-owned and unavailable products', () => {
    expect(classifyPurchaseError(new PurchaseAlreadyOwnedError())).toBe('alreadyOwned');
    expect(code(PURCHASES_ERROR_CODE.PRODUCT_ALREADY_PURCHASED_ERROR)).toBe('alreadyOwned');
    expect(classifyPurchaseError(new PurchaseUnavailableError())).toBe('unavailable');
  });

  it('falls back to unknown', () => {
    expect(code(PURCHASES_ERROR_CODE.UNKNOWN_ERROR)).toBe('unknown');
    expect(classifyPurchaseError(new Error('boom'))).toBe('unknown');
    expect(classifyPurchaseError(null)).toBe('unknown');
  });
});
