import { cache, fetchWithOfflineFallback } from '../cache';
import AsyncStorage from '@react-native-async-storage/async-storage';

// AsyncStorage is mocked via jest.setup.js

beforeEach(async () => {
  await AsyncStorage.clear();
  jest.restoreAllMocks();
});

describe('cache.set / cache.get', () => {
  it('stores and retrieves data', async () => {
    await cache.set('country_SE', { name: 'Sweden', population: 10_500_000 });
    const result = await cache.get<{ name: string; population: number }>('country_SE');
    expect(result).toEqual({ name: 'Sweden', population: 10_500_000 });
  });

  it('returns null for missing keys', async () => {
    const result = await cache.get('nonexistent');
    expect(result).toBeNull();
  });

  it('returns null and removes entry when TTL has expired', async () => {
    // Set with a very short TTL (1 ms)
    await cache.set('temp', 'hello', 1);

    // Advance time past the TTL
    const originalNow = Date.now;
    Date.now = jest.fn(() => originalNow() + 100);

    const result = await cache.get('temp');
    expect(result).toBeNull();

    // Verify the key was cleaned up from storage
    const raw = await AsyncStorage.getItem('wfe_cache_temp');
    expect(raw).toBeNull();

    Date.now = originalNow;
  });

  it('returns data when TTL has not expired', async () => {
    await cache.set('fresh', { value: 42 }, 60_000);
    const result = await cache.get<{ value: number }>('fresh');
    expect(result).toEqual({ value: 42 });
  });
});

describe('cache.remove', () => {
  it('removes a specific cache entry', async () => {
    await cache.set('to_delete', 'bye');
    await cache.remove('to_delete');
    const result = await cache.get('to_delete');
    expect(result).toBeNull();
  });
});

describe('cache.clearAll', () => {
  it('removes all cache entries but preserves non-cache keys', async () => {
    // Set some cache entries
    await cache.set('a', 1);
    await cache.set('b', 2);

    // Set a non-cache key directly in AsyncStorage
    await AsyncStorage.setItem('user_prefs', 'dark_mode');

    await cache.clearAll();

    // Cache entries should be gone
    expect(await cache.get('a')).toBeNull();
    expect(await cache.get('b')).toBeNull();

    // Non-cache key should remain
    const prefs = await AsyncStorage.getItem('user_prefs');
    expect(prefs).toBe('dark_mode');
  });
});

describe('cache.getOrFetch', () => {
  it('returns cached data without calling fetcher', async () => {
    await cache.set('cached_key', 'cached_value');
    const fetcher = jest.fn(() => Promise.resolve('fresh_value'));

    const result = await cache.getOrFetch('cached_key', fetcher);

    expect(result).toBe('cached_value');
    expect(fetcher).not.toHaveBeenCalled();
  });

  it('calls fetcher and caches result on cache miss', async () => {
    const fetcher = jest.fn(() => Promise.resolve('fetched'));

    const result = await cache.getOrFetch('new_key', fetcher);

    expect(result).toBe('fetched');
    expect(fetcher).toHaveBeenCalledTimes(1);

    // Verify it was cached
    const cached = await cache.get('new_key');
    expect(cached).toBe('fetched');
  });
});

describe('fetchWithOfflineFallback', () => {
  it('returns fresh data with fromCache: false when online', async () => {
    const fetcher = jest.fn(() => Promise.resolve({ id: 1 }));

    const result = await fetchWithOfflineFallback('online_key', fetcher);

    expect(result).toEqual({ data: { id: 1 }, fromCache: false });
  });

  it('falls back to cache when fetcher throws', async () => {
    // Pre-populate cache
    await cache.set('offline_key', { id: 2 });

    const fetcher = jest.fn(() => Promise.reject(new Error('Network error')));

    const result = await fetchWithOfflineFallback('offline_key', fetcher);

    expect(result).toEqual({ data: { id: 2 }, fromCache: true });
  });

  it('rethrows when fetcher fails and no cache exists', async () => {
    const fetcher = jest.fn(() => Promise.reject(new Error('Network error')));

    await expect(
      fetchWithOfflineFallback('no_cache_key', fetcher)
    ).rejects.toThrow('Network error');
  });
});
