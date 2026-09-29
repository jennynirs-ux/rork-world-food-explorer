/**
 * Globe3D Performance Optimization Utilities (PERF-002)
 *
 * Provides viewport culling, pin clustering, and level-of-detail
 * management for rendering 195 country pins on the globe.
 *
 * Usage: Import these helpers into Globe3D.tsx to reduce the number
 * of SVG elements rendered at any given time.
 */

import { useMemo, useCallback, useEffect, useRef, useState, type MutableRefObject } from 'react';
import { AccessibilityInfo } from 'react-native';

interface GlobePin {
  id: string;
  lat: number;
  lng: number;
  [key: string]: any;
}

interface ViewportBounds {
  centerLat: number;
  centerLng: number;
  radius: number; // degrees visible from center
}

/**
 * Calculate angular distance between two points on a sphere.
 * Uses the Haversine formula for accuracy.
 */
function angularDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * Math.asin(Math.sqrt(a)) * (180 / Math.PI);
}

/**
 * Filter pins to only those visible on the current globe face.
 * An orthographic projection shows ~90 degrees from center.
 * We use a slightly larger margin (100 deg) to avoid popping.
 */
export function getVisiblePins<T extends GlobePin>(
  pins: T[],
  viewport: ViewportBounds
): T[] {
  const maxAngle = viewport.radius + 10; // 10-degree margin
  return pins.filter((pin) => {
    if (pin.lat == null || pin.lng == null) return false;
    const dist = angularDistance(
      viewport.centerLat,
      viewport.centerLng,
      pin.lat,
      pin.lng
    );
    return dist <= maxAngle;
  });
}

/**
 * Cluster nearby pins when zoomed out to reduce SVG element count.
 * Uses a simple grid-based clustering approach.
 */
export function clusterPins<T extends GlobePin>(
  pins: T[],
  gridSize: number = 15 // degrees per grid cell
): { representative: T; count: number; members: T[] }[] {
  const grid = new Map<string, T[]>();

  for (const pin of pins) {
    if (pin.lat == null || pin.lng == null) continue;
    const cellLat = Math.floor(pin.lat / gridSize) * gridSize;
    const cellLng = Math.floor(pin.lng / gridSize) * gridSize;
    const key = cellLat + ',' + cellLng;
    if (!grid.has(key)) grid.set(key, []);
    grid.get(key)!.push(pin);
  }

  return Array.from(grid.values()).map((members) => ({
    representative: members[0],
    count: members.length,
    members,
  }));
}

/**
 * Level-of-detail selector based on zoom scale.
 * Returns the appropriate pin rendering strategy.
 */
export type LODLevel = 'clustered' | 'normal' | 'detailed';

export function getLODLevel(scale: number, minScale: number, maxScale: number): LODLevel {
  const normalizedZoom = (scale - minScale) / (maxScale - minScale);
  if (normalizedZoom < 0.3) return 'clustered';
  if (normalizedZoom > 0.7) return 'detailed';
  return 'normal';
}

/**
 * Hook: Optimized pin list based on viewport and zoom level.
 *
 * Combines viewport culling + clustering to dramatically reduce
 * the number of rendered SVG elements. At low zoom, 195 pins may
 * be reduced to ~30 clusters. At high zoom, only visible pins
 * (~40-60) are rendered.
 */
export function useOptimizedPins<T extends GlobePin>(
  pins: T[],
  centerLat: number,
  centerLng: number,
  scale: number,
  minScale: number = 150,
  maxScale: number = 800
) {
  return useMemo(() => {
    // Step 1: Viewport culling — only pins on visible hemisphere
    const viewportRadius = 90;
    const visible = getVisiblePins(pins, {
      centerLat,
      centerLng,
      radius: viewportRadius,
    });

    // Step 2: LOD-based clustering
    const lod = getLODLevel(scale, minScale, maxScale);

    // Clustering disabled — with 195 countries, clustering hides individual
    // countries behind representatives. All pins render individually.

    if (lod === 'normal') {
      // Medium zoom: show all visible, no clustering
      return {
        pins: visible,
        clusters: null,
        lod,
        visibleCount: visible.length,
        renderedCount: visible.length,
      };
    }

    // Detailed: show all visible with full details
    return {
      pins: visible,
      clusters: null,
      lod,
      visibleCount: visible.length,
      renderedCount: visible.length,
    };
  }, [pins, centerLat, centerLng, scale, minScale, maxScale]);
}

export type GlobeRotation = [number, number, number];

export interface FrameThrottle<T> {
  /** Store `value` as the latest update; it is committed on the next animation frame. */
  schedule: (value: T) => void;
  /** Commit any pending value immediately (e.g. on gesture release). */
  flush: () => void;
  /** Drop any pending value without committing it. */
  cancel: () => void;
}

/**
 * Coalesces high-frequency updates (pan events arrive at up to 120 Hz on
 * ProMotion displays) into at most one commit per animation frame. Only the
 * most recent value is committed, so callers should keep their own ref as the
 * source of truth and schedule the absolute value (not a delta).
 *
 * The returned object is referentially stable as long as `commit` is stable
 * (a `useState` setter is), so it can be used inside memoized gesture handlers.
 */
export function useFrameThrottledValue<T>(commit: (value: T) => void): FrameThrottle<T> {
  const pendingRef = useRef<{ value: T } | null>(null);
  const frameRef = useRef<number | null>(null);
  const commitRef = useRef(commit);

  useEffect(() => {
    commitRef.current = commit;
  }, [commit]);

  const cancelFrame = useCallback(() => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
  }, []);

  const flush = useCallback(() => {
    cancelFrame();
    const pending = pendingRef.current;
    if (pending) {
      pendingRef.current = null;
      commitRef.current(pending.value);
    }
  }, [cancelFrame]);

  const cancel = useCallback(() => {
    cancelFrame();
    pendingRef.current = null;
  }, [cancelFrame]);

  const schedule = useCallback((value: T) => {
    pendingRef.current = { value };
    if (frameRef.current === null) {
      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;
        const pending = pendingRef.current;
        if (pending) {
          pendingRef.current = null;
          commitRef.current(pending.value);
        }
      });
    }
  }, []);

  // Never commit into an unmounted component.
  useEffect(() => cancel, [cancel]);

  return useMemo(() => ({ schedule, flush, cancel }), [schedule, flush, cancel]);
}

/**
 * Throttled rotation updates for the globe: pan-move events update a ref
 * synchronously and call `schedule(nextRotation)`; the projection (and the
 * ~177 SVG path strings derived from it) is rebuilt at most once per frame.
 */
export function useThrottledRotation(
  commit: (rotation: GlobeRotation) => void
): FrameThrottle<GlobeRotation> {
  return useFrameThrottledValue<GlobeRotation>(commit);
}

/**
 * Whether the user asked the OS to reduce motion. `null` until known, so
 * callers can hold off on animations instead of starting and stopping them.
 */
export function useReduceMotion(): boolean | null {
  const [reduceMotion, setReduceMotion] = useState<boolean | null>(null);

  useEffect(() => {
    let mounted = true;
    AccessibilityInfo.isReduceMotionEnabled()
      .then((enabled) => { if (mounted) setReduceMotion(enabled); })
      .catch(() => { if (mounted) setReduceMotion(false); });
    const subscription = AccessibilityInfo.addEventListener('reduceMotionChanged', (enabled) => {
      setReduceMotion(enabled);
    });
    return () => {
      mounted = false;
      subscription.remove();
    };
  }, []);

  return reduceMotion;
}

export interface IdleAutoRotationOptions {
  /** Auto-rotate at all (screen focused, reduce motion off, not zoomed in…). */
  enabled: boolean;
  /** Gesture source of truth for the rotation; updated before every commit. */
  rotationRef: MutableRefObject<GlobeRotation>;
  commit: (rotation: GlobeRotation) => void;
  /** Checked right before starting; return false to skip (e.g. while touching). */
  canStart?: () => boolean;
  /** Called right before auto-rotation starts (e.g. to stop leftover momentum). */
  onStart?: () => void;
  degreesPerSecond?: number;
  /** Delay before the first rotation once enabled. */
  startDelayMs?: number;
  /** Idle time after an interaction before rotation resumes. */
  resumeDelayMs?: number;
}

export interface IdleAutoRotation {
  /** Stop rotating now (e.g. on touch start). */
  pause: () => void;
  /** Stop rotating now and resume after the idle delay (e.g. on touch end). */
  resumeLater: () => void;
}

// ~30 fps is plenty for a slow spin (≈0.13° per step) and halves the
// projection/path work compared to committing on every frame.
const AUTO_ROTATE_STEP_MS = 30;
// Cap on a single step so a dropped/throttled frame doesn't jump the globe.
const AUTO_ROTATE_MAX_STEP_MS = 100;

/**
 * Slow idle spin around the globe's axis. Pauses on interaction and resumes
 * after a few idle seconds. The returned callbacks are stable, so they can be
 * used from a PanResponder that is created once.
 */
export function useIdleAutoRotation({
  enabled,
  rotationRef,
  commit,
  canStart,
  onStart,
  degreesPerSecond = 4,
  startDelayMs = 1500,
  resumeDelayMs = 4000,
}: IdleAutoRotationOptions): IdleAutoRotation {
  const frameRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const enabledRef = useRef(enabled);
  const latest = useRef({ commit, canStart, onStart, degreesPerSecond, resumeDelayMs });

  useEffect(() => {
    latest.current = { commit, canStart, onStart, degreesPerSecond, resumeDelayMs };
  });

  const pause = useCallback(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    if (!enabledRef.current || frameRef.current !== null) return;
    if (latest.current.canStart && !latest.current.canStart()) return;
    latest.current.onStart?.();

    let last: number | null = null;
    const step = (now: number) => {
      if (last === null) last = now;
      const elapsed = now - last;
      if (elapsed >= AUTO_ROTATE_STEP_MS) {
        last = now;
        const delta = (latest.current.degreesPerSecond * Math.min(elapsed, AUTO_ROTATE_MAX_STEP_MS)) / 1000;
        const [lambda, phi, gamma] = rotationRef.current;
        const next: GlobeRotation = [(lambda + delta) % 360, phi, gamma];
        rotationRef.current = next;
        latest.current.commit(next);
      }
      frameRef.current = requestAnimationFrame(step);
    };
    frameRef.current = requestAnimationFrame(step);
  }, [rotationRef]);

  const startAfter = useCallback((delay: number) => {
    pause();
    if (!enabledRef.current) return;
    timerRef.current = setTimeout(() => {
      timerRef.current = null;
      start();
    }, delay);
  }, [pause, start]);

  const resumeLater = useCallback(() => {
    startAfter(latest.current.resumeDelayMs);
  }, [startAfter]);

  useEffect(() => {
    enabledRef.current = enabled;
    if (enabled) startAfter(startDelayMs);
    else pause();
  }, [enabled, startDelayMs, startAfter, pause]);

  // Never keep animating (and committing state) after unmount.
  useEffect(() => pause, [pause]);

  return useMemo(() => ({ pause, resumeLater }), [pause, resumeLater]);
}
