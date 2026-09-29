import { useEffect, useState } from 'react';
import { AppState } from 'react-native';
import { localDayNumber, msUntilNextLocalDay } from '@/lib/daily';

/**
 * The current local calendar day (see `localDayNumber`). Rolls over at local
 * midnight while the screen is open and re-checks when the app returns to
 * the foreground (timers don't run while it's suspended).
 */
export function useLocalDayNumber(): number {
  const [day, setDay] = useState(() => localDayNumber(new Date()));

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    const refresh = () => {
      if (timer) clearTimeout(timer);
      setDay(localDayNumber(new Date()));
      // +1s so we land safely on the new day.
      timer = setTimeout(refresh, msUntilNextLocalDay() + 1000);
    };

    refresh();
    const subscription = AppState.addEventListener('change', state => {
      if (state === 'active') refresh();
    });

    return () => {
      if (timer) clearTimeout(timer);
      subscription.remove();
    };
  }, []);

  return day;
}
