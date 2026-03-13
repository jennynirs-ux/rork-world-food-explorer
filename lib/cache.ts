import AsyncStorage from '@react-native-async-storage/async-storage';

const CACHE_PREFIX = 'wfe_cache_';
const DEFAULT_TTL = 24 * 60 * 60 * 1000; // 24 hours

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

/**
 * Generic cache layer using AsyncStorage.
 * Provides TTL-based expiration for offline-first data access.
 */
export const cache = {
  /**
   * Store data with a time-to-live.
   */
  async set<T>(key: string, data: T, ttl = DEFAULT_TTL): Promise<void> {
    try {
      const entry: CacheEntry<T> = {
        data,
        timestamp: Date.now(),
        ttl,
      };
      await AsyncStorage.setItem(
        CACHE_PREFIX + key,
        JSON.stringify(entry)
      );
    } catch (error) {
      console.warn('[Cache] Failed to write:', key, error);
    }
  },

  /**
   * Retrieve cached data. Returns null if expired or missing.
   */
  async get<T>(key: string): Promise<T | null> {
    try {
      const raw = await AsyncStorage.getItem(CACHE_PREFIX + key);
      if (!raw) return null;

      const entry: CacheEntry<T> = JSON.parse(raw);
      const isExpired = Date.now() - entry.timestamp > entry.ttl;

      if (isExpired) {
        await AsyncStorage.removeItem(CACHE_PREFIX + key);
        return null;
      }

      return entry.data;
    } catch (error) {
      console.warn('[Cache] Failed to read:', key, error);
      return null;
    }
  },

  /**
   * Remove a specific cache entry.
   */
  async remove(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(CACHE_PREFIX + key);
    } catch (error) {
      console.warn('[Cache] Failed to remove:', key, error);
    }
  },

  /**
   * Clear all app cache entries (preserves non-cache AsyncStorage data).
   */
  async clearAll(): Promise<void> {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const cacheKeys = keys.filter((k) => k.startsWith(CACHE_PREFIX));
      if (cacheKeys.length > 0) {
        await AsyncStorage.multiRemove(cacheKeys);
      }
    } catch (error) {
      console.warn('[Cache] Failed to clear:', error);
    }
  },

  /**
   * Fetch with cache-first strategy.
   * Returns cached data if available and fresh, otherwise calls fetcher.
   */
  async getOrFetch<T>(
    key: string,
    fetcher: () => Promise<T>,
    ttl = DEFAULT_TTL
  ): Promise<T> {
    const cached = await this.get<T>(key);
    if (cached !== null) return cached;

    const fresh = await fetcher();
    await this.set(key, fresh, ttl);
    return fresh;
  },
};

/**
 * Hook-friendly wrapper for network-aware data fetching.
 * Falls back to cached data when offline.
 */
export async function fetchWithOfflineFallback<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttl = DEFAULT_TTL
): Promise<{ data: T; fromCache: boolean }> {
  try {
    const fresh = await fetcher();
    await cache.set(key, fresh, ttl);
    return { data: fresh, fromCache: false };
  } catch (error) {
    // Network failed — try cache
    const cached = await cache.get<T>(key);
    if (cached !== null) {
      return { data: cached, fromCache: true };
    }
    throw error; // No cache, rethrow
  }
}
