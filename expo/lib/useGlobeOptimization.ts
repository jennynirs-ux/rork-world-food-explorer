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
import { AccessibilityInfo, AppState, type AppStateStatus } from 'react-native';
import type { Geometry } from 'geojson';

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

const DEG = Math.PI / 180;

/**
 * Calculate angular distance (degrees) between two points on a sphere.
 * Uses the Haversine formula for accuracy.
 */
export function angularDistance(
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
  return 2 * Math.asin(Math.min(1, Math.sqrt(a))) * (180 / Math.PI);
}

function toUnitVector(lat: number, lng: number): [number, number, number] {
  const phi = lat * DEG;
  const lambda = lng * DEG;
  return [Math.cos(phi) * Math.cos(lambda), Math.cos(phi) * Math.sin(lambda), Math.sin(phi)];
}

/**
 * Filter pins to those within `viewport.radius` degrees of the centre.
 * Cull here rather than after projecting: d3's projection(point) ignores
 * clipAngle, so a point behind the horizon still projects onto the disc
 * (mirrored, near the rim).
 */
export function getVisiblePins<T extends GlobePin>(
  pins: T[],
  viewport: ViewportBounds
): T[] {
  const maxAngle = viewport.radius;
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
    // Step 1: Viewport culling — only pins on the visible hemisphere, minus a
    // 10° band at the horizon where pins would be squashed onto the rim.
    const viewportRadius = 80;
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

/**
 * Greedy label placement: keeps pins in the given (priority) order and drops
 * any pin closer than `minSeparationDeg` to one already kept. The result
 * depends only on the zoom, not on the rotation, so pins don't flicker while
 * the globe turns.
 */
export function selectSpacedPins<T extends GlobePin>(pins: readonly T[], minSeparationDeg: number): T[] {
  const minDot = Math.cos(minSeparationDeg * DEG);
  const kept: T[] = [];
  const keptVectors: number[] = []; // x, y, z per kept pin
  for (const pin of pins) {
    if (pin.lat == null || pin.lng == null) continue;
    const [x, y, z] = toUnitVector(pin.lat, pin.lng);
    let isFree = true;
    for (let i = 0; i < keptVectors.length; i += 3) {
      // dot > cos(minimum) ⇔ the angle between them is below the minimum
      if (x * keptVectors[i] + y * keptVectors[i + 1] + z * keptVectors[i + 2] > minDot) {
        isFree = false;
        break;
      }
    }
    if (isFree) {
      kept.push(pin);
      keptVectors.push(x, y, z);
    }
  }
  return kept;
}

/** Nearest point within `maxDistance` of (x, y), or null. */
export function findNearestPin<T extends { x: number; y: number }>(
  positions: readonly T[],
  x: number,
  y: number,
  maxDistance: number
): T | null {
  let nearest: T | null = null;
  let nearestDistSq = maxDistance * maxDistance;
  for (const position of positions) {
    const distSq = (position.x - x) ** 2 + (position.y - y) ** 2;
    if (distSq <= nearestDistSq) {
      nearest = position;
      nearestDistSq = distSq;
    }
  }
  return nearest;
}

/**
 * Screen-space counterpart of selectSpacedPins: keeps positions in the given
 * (priority) order, drops any closer than `minDistance` to one already kept,
 * and stops at `maxCount`. Needed because the orthographic projection squashes
 * angular spacing towards the rim, so flags that are spaced on the sphere can
 * still overlap near the horizon.
 */
export function selectSpacedPositions<T extends { x: number; y: number }>(
  positions: readonly T[],
  minDistance: number,
  maxCount: number = Infinity
): T[] {
  const minDistSq = minDistance * minDistance;
  const kept: T[] = [];
  for (const position of positions) {
    if (kept.length >= maxCount) break;
    if (kept.every((other) => (other.x - position.x) ** 2 + (other.y - position.y) ** 2 >= minDistSq)) {
      kept.push(position);
    }
  }
  return kept;
}

/** Spherical cap (centre + angular radius, degrees) that contains a feature. */
export interface SphericalBounds {
  lat: number;
  lng: number;
  radius: number;
}

// Covers the slight bulge of great-circle edges between vertices.
const BOUNDS_MARGIN_DEG = 1;
const ALWAYS_VISIBLE: SphericalBounds = { lat: 0, lng: 0, radius: 180 };

function collectPositions(geometry: Geometry, out: number[][]): void {
  if (geometry.type === 'GeometryCollection') {
    for (const child of geometry.geometries) collectPositions(child, out);
    return;
  }
  const visit = (coords: unknown): void => {
    if (!Array.isArray(coords) || coords.length === 0) return;
    if (typeof coords[0] === 'number') out.push(coords as number[]);
    else for (const child of coords) visit(child);
  };
  visit(geometry.coordinates);
}

/**
 * Bounding cap of a GeoJSON geometry, computed once so features on the far
 * side of the globe can be skipped without projecting them. Centred on the
 * mean of the vertices' unit vectors, so it works across the antimeridian.
 */
export function getFeatureBounds(geometry: Geometry | null | undefined): SphericalBounds {
  if (!geometry) return ALWAYS_VISIBLE;
  const positions: number[][] = [];
  collectPositions(geometry, positions);
  let sx = 0;
  let sy = 0;
  let sz = 0;
  for (const [lng, lat] of positions) {
    const [x, y, z] = toUnitVector(lat, lng);
    sx += x;
    sy += y;
    sz += z;
  }
  const norm = Math.hypot(sx, sy, sz);
  if (positions.length === 0 || norm < 1e-9) return ALWAYS_VISIBLE;
  const lat = Math.asin(sz / norm) / DEG;
  const lng = Math.atan2(sy, sx) / DEG;
  let radius = 0;
  for (const [pLng, pLat] of positions) {
    radius = Math.max(radius, angularDistance(lat, lng, pLat, pLng));
  }
  radius += BOUNDS_MARGIN_DEG;
  // A cap only contains its polygon while it is smaller than a hemisphere.
  return radius < 90 ? { lat, lng, radius } : ALWAYS_VISIBLE;
}

/**
 * Largest angular distance (degrees) from the view centre that can appear
 * in a square viewport: the horizon, until the zoomed-in globe is larger
 * than the viewport's half-diagonal (orthographic: r = scale · sin θ).
 */
export function getMaxVisibleAngle(scale: number, viewportSize: number): number {
  const halfDiagonal = viewportSize / Math.SQRT2;
  if (scale <= halfDiagonal) return 90;
  return Math.asin(halfDiagonal / scale) / DEG;
}

/** Whether any part of the cap can be within `maxAngle` of the view centre. */
export function isBoundsVisible(
  bounds: SphericalBounds,
  centerLat: number,
  centerLng: number,
  maxAngle: number
): boolean {
  return angularDistance(centerLat, centerLng, bounds.lat, bounds.lng) - bounds.radius <= maxAngle;
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

type AccessibilitySettingEvent = 'reduceMotionChanged' | 'screenReaderChanged';

/** `null` until known, so callers can hold off instead of starting and stopping animations. */
function useAccessibilitySetting(
  isEnabled: () => Promise<boolean>,
  changeEvent: AccessibilitySettingEvent
): boolean | null {
  const [value, setValue] = useState<boolean | null>(null);

  useEffect(() => {
    let mounted = true;
    isEnabled()
      .then((enabled) => { if (mounted) setValue(enabled); })
      .catch(() => { if (mounted) setValue(false); });
    const subscription = AccessibilityInfo.addEventListener(changeEvent, (enabled) => {
      setValue(enabled);
    });
    return () => {
      mounted = false;
      subscription.remove();
    };
  }, [isEnabled, changeEvent]);

  return value;
}

const isReduceMotionEnabled = () => AccessibilityInfo.isReduceMotionEnabled();
const isScreenReaderEnabled = () => AccessibilityInfo.isScreenReaderEnabled();

/** Whether the user asked the OS to reduce motion (`null` until known). */
export function useReduceMotion(): boolean | null {
  return useAccessibilitySetting(isReduceMotionEnabled, 'reduceMotionChanged');
}

/** Whether VoiceOver/TalkBack is running (`null` until known). */
export function useScreenReaderEnabled(): boolean | null {
  return useAccessibilitySetting(isScreenReaderEnabled, 'screenReaderChanged');
}

function isActiveAppState(state: AppStateStatus | null | undefined): boolean {
  return state !== 'background' && state !== 'inactive';
}

/** False while the app is in the background or inactive (app switcher, system sheets…). */
export function useIsAppActive(): boolean {
  const [isActive, setIsActive] = useState(() => isActiveAppState(AppState.currentState));

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (state) => {
      setIsActive(isActiveAppState(state));
    });
    return () => subscription.remove();
  }, []);

  return isActive;
}

export interface IdleAutoRotationOptions {
  /** May rotate right now (screen visible, nothing covering it, not zoomed in…). */
  enabled: boolean;
  /**
   * The spin runs once: it ends after `durationMs` or at `stop()`. A pause
   * (`enabled` false) keeps the remaining time; changing this value (e.g. the
   * screen's focus state) allows a fresh run.
   */
  resetKey?: unknown;
  /** Gesture source of truth for the rotation; updated before every commit. */
  rotationRef: MutableRefObject<GlobeRotation>;
  commit: (rotation: GlobeRotation) => void;
  /** Checked right before starting; return false to skip (e.g. while touching). */
  canStart?: () => boolean;
  /** Called right before auto-rotation starts (e.g. to stop leftover momentum). */
  onStart?: () => void;
  degreesPerSecond?: number;
  /** Delay before rotating once enabled (also after a pause). */
  startDelayMs?: number;
  /** Spinning time per run; the spin eases to a stop at the end. */
  durationMs?: number;
}

export interface IdleAutoRotation {
  /** End the current run now (e.g. on the first touch); only a new `resetKey` allows another. */
  stop: () => void;
}

// ~15 fps is plenty for a slow spin (≈0.26° per step). Every step rebuilds
// the projection and the path of every visible country, which is expensive
// in Hermes on low-end Android.
const AUTO_ROTATE_STEP_MS = 66;
// Cap on a single step so a dropped/throttled frame doesn't jump the globe.
const AUTO_ROTATE_MAX_STEP_MS = 132;
// The spin slows to a stop over the end of its run instead of halting.
const AUTO_ROTATE_EASE_OUT_MS = 2000;

/**
 * Short, slow idle spin around the globe's axis. It runs for `durationMs`
 * once enabled and ends early at `stop()`; it doesn't restart until
 * `resetKey` changes. The returned callback is stable, so it can be used from
 * a PanResponder that is created once.
 */
export function useIdleAutoRotation({
  enabled,
  resetKey,
  rotationRef,
  commit,
  canStart,
  onStart,
  degreesPerSecond = 4,
  startDelayMs = 1500,
  durationMs = 10000,
}: IdleAutoRotationOptions): IdleAutoRotation {
  const frameRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const enabledRef = useRef(enabled);
  const resetKeyRef = useRef(resetKey);
  // Time the current run has spun so far, and whether it is over.
  const spunMsRef = useRef(0);
  const isDoneRef = useRef(false);
  const latest = useRef({ commit, canStart, onStart, degreesPerSecond, durationMs });

  useEffect(() => {
    latest.current = { commit, canStart, onStart, degreesPerSecond, durationMs };
  });

  const cancel = useCallback(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
  }, []);

  const stop = useCallback(() => {
    isDoneRef.current = true;
    cancel();
  }, [cancel]);

  const start = useCallback(() => {
    if (!enabledRef.current || isDoneRef.current || frameRef.current !== null) return;
    if (latest.current.canStart && !latest.current.canStart()) return;
    latest.current.onStart?.();

    let last: number | null = null;
    const step = (now: number) => {
      if (last === null) last = now;
      const elapsed = now - last;
      if (elapsed >= AUTO_ROTATE_STEP_MS) {
        last = now;
        // Wall-clock time counts, so a slow device doesn't spin (and keep
        // the JS thread busy) for longer.
        spunMsRef.current += elapsed;
        const remaining = latest.current.durationMs - spunMsRef.current;
        if (remaining <= 0) {
          frameRef.current = null;
          isDoneRef.current = true;
          return;
        }
        const speed = Math.min(1, remaining / AUTO_ROTATE_EASE_OUT_MS);
        const delta = (latest.current.degreesPerSecond * speed * Math.min(elapsed, AUTO_ROTATE_MAX_STEP_MS)) / 1000;
        const [lambda, phi, gamma] = rotationRef.current;
        const next: GlobeRotation = [(lambda + delta) % 360, phi, gamma];
        rotationRef.current = next;
        latest.current.commit(next);
      }
      frameRef.current = requestAnimationFrame(step);
    };
    frameRef.current = requestAnimationFrame(step);
  }, [rotationRef]);

  useEffect(() => {
    if (!Object.is(resetKeyRef.current, resetKey)) {
      resetKeyRef.current = resetKey;
      spunMsRef.current = 0;
      isDoneRef.current = false;
    }
    enabledRef.current = enabled;
    cancel();
    if (!enabled || isDoneRef.current) return;
    timerRef.current = setTimeout(() => {
      timerRef.current = null;
      start();
    }, startDelayMs);
  }, [enabled, resetKey, startDelayMs, start, cancel]);

  // Never keep animating (and committing state) after unmount.
  useEffect(() => cancel, [cancel]);

  return useMemo(() => ({ stop }), [stop]);
}
