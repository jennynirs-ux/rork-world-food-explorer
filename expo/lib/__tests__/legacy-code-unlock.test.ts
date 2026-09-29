import AsyncStorage from '@react-native-async-storage/async-storage';
import { hasActiveLegacyCodeUnlock, getLegacyUnlockDaysRemaining } from '../legacy-code-unlock';

const DAY = 24 * 60 * 60 * 1000;

async function setExpiry(expiry: number) {
  await AsyncStorage.setItem('@wfe_redeemed_code', 'ABC123');
  await AsyncStorage.setItem('@wfe_code_expiry', String(expiry));
}

describe('legacy code unlock', () => {
  beforeEach(async () => {
    await AsyncStorage.clear();
  });

  it('is inactive when nothing was redeemed', async () => {
    expect(await hasActiveLegacyCodeUnlock()).toBe(false);
    expect(await getLegacyUnlockDaysRemaining()).toBe(0);
  });

  it('stays active until the stored expiry', async () => {
    await setExpiry(Date.now() + 10 * DAY);
    expect(await hasActiveLegacyCodeUnlock()).toBe(true);
    expect(await getLegacyUnlockDaysRemaining()).toBe(10);
  });

  it('expires and cleans up after the expiry', async () => {
    await setExpiry(Date.now() - 1000);
    expect(await hasActiveLegacyCodeUnlock()).toBe(false);
    expect(await AsyncStorage.getItem('@wfe_code_expiry')).toBeNull();
  });

  it('rejects an expiry further out than one unlock period (clock turned back)', async () => {
    await setExpiry(Date.now() + 60 * DAY);
    expect(await hasActiveLegacyCodeUnlock()).toBe(false);
  });
});
