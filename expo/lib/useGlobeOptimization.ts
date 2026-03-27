/**
 * Globe3D Performance Optimization Utilities (PERF-002)
 *
 * Provides viewport culling, pin clustering, and level-of-detail
 * management for rendering 195 country pins on the globe.
 *
 * Usage: Import these helpers into Globe3D.tsx to reduce the number
 * of SVG elements rendered at any given time.
 */

import { useMemo, useCallback, useRef } from 'react';

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

    if (lod === 'clustered') {
      // Zoomed out: cluster nearby pins into groups
      const clusters = clusterPins(visible, 20);
      return {
        pins: clusters.map((c) => c.representative),
        clusters,
        lod,
        visibleCount: visible.length,
        renderedCount: clusters.length,
      };
    }

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
 * Throttled rotation handler to reduce re-renders during pan gestures.
 * Limits projection recalculations to ~30fps instead of every frame.
 */
export function useThrottledRotation(delay: number = 33) {
  const lastUpdate = useRef(0);
  const pendingRotation = useRef<[number, number] | null>(null);

  const throttle = useCallback(
    (lat: number, lng: number, apply: (lat: number, lng: number) => void) => {
      pendingRotation.current = [lat, lng];
      const now = Date.now();
      if (now - lastUpdate.current >= delay) {
        lastUpdate.current = now;
        apply(lat, lng);
        pendingRotation.current = null;
      }
    },
    [delay]
  );

  const flush = useCallback(
    (apply: (lat: number, lng: number) => void) => {
      if (pendingRotation.current) {
        const [lat, lng] = pendingRotation.current;
        apply(lat, lng);
        pendingRotation.current = null;
      }
    },
    []
  );

  return { throttle, flush };
}
