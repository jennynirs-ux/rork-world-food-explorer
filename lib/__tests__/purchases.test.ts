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
  },
}));

// eslint-disable-next-line import/first
import {
  configurePurchases,
  isPurchasesConfigured,
  getOfferings,
  restorePurchases,
  getCustomerInfo,
} from '../purchases';

describe('purchases (mock mode — no API keys)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('configurePurchases does not throw', async () => {
    await expect(configurePurchases('test-user')).resolves.not.toThrow();
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

  it('getCustomerInfo returns empty in mock mode', async () => {
    const result = await getCustomerInfo();
    expect(result).toEqual([]);
  });
});
