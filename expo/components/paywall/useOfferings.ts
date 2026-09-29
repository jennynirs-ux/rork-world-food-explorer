import { useEffect, useState } from 'react';
import type { PurchasesPackage } from 'react-native-purchases';
import { getOfferings, isPurchasesConfigured } from '@/lib/purchases';

// Last good result, shared by every screen so the paywall can show prices
// instantly while it refreshes them.
let cachedPackages: PurchasesPackage[] = [];
let inflight: Promise<PurchasesPackage[]> | null = null;

function fetchOfferings(): Promise<PurchasesPackage[]> {
  if (!inflight) {
    inflight = getOfferings()
      .catch(() => [] as PurchasesPackage[])
      .then((pkgs) => {
        if (pkgs.length > 0) cachedPackages = pkgs;
        return pkgs;
      })
      .finally(() => {
        inflight = null;
      });
  }
  return inflight;
}

/**
 * Live store packages from RevenueCat. Fetches whenever `enabled` turns on
 * and again whenever `refreshKey` changes (retry). `settled` becomes true once
 * a fetch has finished, so callers can tell "still loading" from "failed".
 */
export function useOfferings(enabled: boolean, refreshKey: number = 0) {
  const [packages, setPackages] = useState<PurchasesPackage[]>(cachedPackages);
  const [loading, setLoading] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    if (!enabled || !isPurchasesConfigured()) return;
    let cancelled = false;
    // Show what another screen already loaded while we refresh.
    if (cachedPackages.length > 0) setPackages(cachedPackages);
    setLoading(true);
    void fetchOfferings().then((pkgs) => {
      if (cancelled) return;
      setPackages(pkgs);
      setLoading(false);
      setSettled(true);
    });
    return () => {
      cancelled = true;
    };
  }, [enabled, refreshKey]);

  return { packages, loading, settled };
}
