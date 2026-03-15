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
      await fetch('https://clients3.google.com/generate_204', {
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
