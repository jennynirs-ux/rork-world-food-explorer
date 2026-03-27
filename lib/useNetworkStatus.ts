import { useState, useEffect, useCallback } from 'react';
import { AppState, AppStateStatus } from 'react-native';

/**
 * Lightweight offline detection without extra dependencies.
 * Checks connectivity when the app comes to foreground.
 */
export function useNetworkStatus() {
  const [isConnected, setIsConnected] = useState<boolean>(true);

  const checkConnection = useCallback(async () => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      // Ping own API instead of Google to avoid privacy/GDPR issues
      // and work in regions where Google is blocked.
      const baseUrl =
        process.env.EXPO_PUBLIC_RORK_API_BASE_URL || 'https://api.worldfoodexplorer.app';
      await fetch(baseUrl, {
        method: 'HEAD',
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      setIsConnected(true);
    } catch {
      setIsConnected(false);
    }
  }, []);

  useEffect(() => {
    void checkConnection();

    const handleAppState = (nextState: AppStateStatus) => {
      if (nextState === 'active') {
        void checkConnection();
      }
    };

    const subscription = AppState.addEventListener('change', handleAppState);
    return () => subscription.remove();
  }, [checkConnection]);

  return { isConnected, checkConnection };
}
