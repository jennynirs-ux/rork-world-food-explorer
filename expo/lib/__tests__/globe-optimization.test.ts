import { act, renderHook } from '@testing-library/react-native';
import { AppState } from 'react-native';
import type { Geometry } from 'geojson';
import {
  angularDistance,
  findNearestPin,
  getFeatureBounds,
  getMaxVisibleAngle,
  getVisiblePins,
  isBoundsVisible,
  selectSpacedPins,
  selectSpacedPositions,
  useIdleAutoRotation,
  useIsAppActive,
  type GlobeRotation,
} from '../useGlobeOptimization';

const pin = (id: string, lat: number, lng: number) => ({ id, lat, lng });

describe('getVisiblePins', () => {
  it('culls at the given radius, with no extra margin behind the horizon', () => {
    const pins = [pin('front', 0, 75), pin('rim', 0, 85), pin('behind', 0, 95)];
    const ids = (radius: number) =>
      getVisiblePins(pins, { centerLat: 0, centerLng: 0, radius }).map((p) => p.id);
    expect(ids(80)).toEqual(['front']);
    expect(ids(90)).toEqual(['front', 'rim']);
  });
});

describe('selectSpacedPins', () => {
  it('keeps pins in priority order and drops those too close to a kept one', () => {
    const pins = [pin('germany', 51, 10), pin('luxembourg', 49.8, 6.1), pin('spain', 40, -4)];
    expect(selectSpacedPins(pins, 5).map((p) => p.id)).toEqual(['germany', 'spain']);
    // Priority decides who wins the spot.
    expect(selectSpacedPins([pins[1], pins[0], pins[2]], 5).map((p) => p.id)).toEqual(['luxembourg', 'spain']);
    // Small enough spacing keeps everyone.
    expect(selectSpacedPins(pins, 1)).toHaveLength(3);
  });

  it('measures distance across the antimeridian', () => {
    const pins = [pin('east', -17, 179.5), pin('west', -17, -179.5)];
    expect(selectSpacedPins(pins, 2).map((p) => p.id)).toEqual(['east']);
    expect(selectSpacedPins(pins, 0.5)).toHaveLength(2);
  });
});

describe('findNearestPin', () => {
  const positions = [
    { id: 'a', x: 100, y: 100 },
    { id: 'b', x: 120, y: 100 },
  ];

  it('returns the closest position within the radius', () => {
    expect(findNearestPin(positions, 108, 102, 19)?.id).toBe('a');
    expect(findNearestPin(positions, 113, 98, 19)?.id).toBe('b');
  });

  it('returns null when nothing is close enough', () => {
    expect(findNearestPin(positions, 100, 140, 19)).toBeNull();
    expect(findNearestPin([], 0, 0, 19)).toBeNull();
  });
});

describe('selectSpacedPositions', () => {
  const at = (id: string, x: number, y: number) => ({ id, x, y });

  it('keeps positions in priority order and drops those too close on screen', () => {
    // b is 12 pt from a (squashed near the rim); c is far enough from both.
    const positions = [at('a', 100, 100), at('b', 112, 100), at('c', 100, 130)];
    expect(selectSpacedPositions(positions, 21).map((p) => p.id)).toEqual(['a', 'c']);
    expect(selectSpacedPositions([positions[1], positions[0], positions[2]], 21).map((p) => p.id)).toEqual(['b', 'c']);
    expect(selectSpacedPositions(positions, 10)).toHaveLength(3);
  });

  it('stops at maxCount', () => {
    const positions = [at('a', 0, 0), at('b', 50, 0), at('c', 100, 0)];
    expect(selectSpacedPositions(positions, 21, 2).map((p) => p.id)).toEqual(['a', 'b']);
  });
});

describe('getFeatureBounds', () => {
  const square = (lng: number, lat: number, half: number): Geometry => ({
    type: 'Polygon',
    coordinates: [[
      [lng - half, lat - half],
      [lng + half, lat - half],
      [lng + half, lat + half],
      [lng - half, lat + half],
      [lng - half, lat - half],
    ]],
  });

  const expectContainsVertices = (bounds: { lat: number; lng: number; radius: number }, geometry: Geometry) => {
    const rings = geometry.type === 'Polygon' ? geometry.coordinates
      : geometry.type === 'GeometryCollection' ? geometry.geometries.flatMap((g) => (g.type === 'Polygon' ? g.coordinates : []))
      : [];
    expect(rings.length).toBeGreaterThan(0);
    for (const ring of rings) {
      for (const [lng, lat] of ring) {
        expect(angularDistance(bounds.lat, bounds.lng, lat, lng)).toBeLessThanOrEqual(bounds.radius);
      }
    }
  };

  it('contains every vertex in a tight cap', () => {
    const geometry = square(10, 45, 5);
    const bounds = getFeatureBounds(geometry);
    // Centred near the middle (the repeated closing vertex pulls it a little).
    expect(angularDistance(bounds.lat, bounds.lng, 45, 10)).toBeLessThan(1.5);
    expectContainsVertices(bounds, geometry);
    expect(bounds.radius).toBeLessThan(10);
  });

  it('stays small for a country that crosses the antimeridian', () => {
    const fiji: Geometry = {
      type: 'MultiPolygon',
      coordinates: [
        [[[178, -18], [179.9, -18], [179.9, -16], [178, -16], [178, -18]]],
        [[[-180, -17], [-179, -17], [-179, -16], [-180, -16], [-180, -17]]],
      ],
    };
    const bounds = getFeatureBounds(fiji);
    expect(Math.abs(bounds.lng)).toBeGreaterThan(178);
    expect(bounds.radius).toBeLessThan(5);
  });

  it('handles geometry collections and missing geometry', () => {
    const collection: Geometry = { type: 'GeometryCollection', geometries: [square(0, 0, 1), square(4, 0, 1)] };
    const bounds = getFeatureBounds(collection);
    expect(bounds.lng).toBeCloseTo(2, 0);
    expectContainsVertices(bounds, collection);
    expect(getFeatureBounds(null).radius).toBe(180);
  });
});

describe('visibility of country bounds', () => {
  it('is the horizon until the zoomed globe outgrows the viewport', () => {
    expect(getMaxVisibleAngle(150, 310)).toBe(90);
    // Half-diagonal of a 310pt viewport is ~219pt.
    expect(getMaxVisibleAngle(438.4, 310)).toBeCloseTo(30, 0);
  });

  it('skips caps that lie entirely beyond the limit', () => {
    const cap = { lat: 0, lng: 100, radius: 5 };
    expect(isBoundsVisible(cap, 0, 0, 90)).toBe(false); // 95°–105° away
    expect(isBoundsVisible(cap, 0, 10, 90)).toBe(true); // reaches 85°
    expect(isBoundsVisible({ ...cap, radius: 180 }, 0, 0, 30)).toBe(true);
  });
});

describe('useIdleAutoRotation', () => {
  const FRAME_MS = 16;
  const originalRaf = global.requestAnimationFrame;
  const originalCancel = global.cancelAnimationFrame;

  beforeEach(() => {
    jest.useFakeTimers();
    global.requestAnimationFrame = ((cb: FrameRequestCallback) =>
      setTimeout(() => cb(Date.now()), FRAME_MS)) as unknown as typeof requestAnimationFrame;
    global.cancelAnimationFrame = ((id: number) => clearTimeout(id)) as typeof cancelAnimationFrame;
  });

  afterEach(() => {
    jest.useRealTimers();
    global.requestAnimationFrame = originalRaf;
    global.cancelAnimationFrame = originalCancel;
  });

  function setup(initial: { enabled: boolean; resetKey?: unknown }) {
    const rotationRef = { current: [0, -30, 0] as GlobeRotation };
    const commits: { at: number; lambda: number }[] = [];
    const commit = (next: GlobeRotation) => commits.push({ at: Date.now(), lambda: next[0] });
    const hook = renderHook(
      (props: { enabled: boolean; resetKey?: unknown }) =>
        useIdleAutoRotation({
          ...props,
          rotationRef,
          commit,
          degreesPerSecond: 4,
          startDelayMs: 1000,
          durationMs: 5000,
        }),
      { initialProps: initial }
    );
    return { ...hook, commits, rotationRef };
  }

  const advance = (ms: number) => act(() => { jest.advanceTimersByTime(ms); });

  it('waits for the start delay, then commits at most ~15 times a second', () => {
    const { commits } = setup({ enabled: true });
    advance(999);
    expect(commits).toHaveLength(0);
    advance(1000);
    expect(commits.length).toBeGreaterThan(10);
    expect(commits.length).toBeLessThanOrEqual(16);
    for (let i = 1; i < commits.length; i++) {
      expect(commits[i].at - commits[i - 1].at).toBeGreaterThanOrEqual(66);
    }
  });

  it('ends after its duration, easing out, and does not start again by itself', () => {
    const { commits, rotationRef } = setup({ enabled: true });
    advance(1000 + 6000);
    const count = commits.length;
    expect(count).toBeGreaterThan(0);
    // ≈ 3 s at full speed + a 2 s ease-out → between 12° and 20°.
    expect(rotationRef.current[0]).toBeGreaterThan(12);
    expect(rotationRef.current[0]).toBeLessThan(20);
    const step = (i: number) => commits[i].lambda - commits[i - 1].lambda;
    expect(step(count - 1)).toBeLessThan(step(5) / 2);
    advance(20000);
    expect(commits).toHaveLength(count);
  });

  it('keeps the remaining time across a pause', () => {
    const { commits, rerender } = setup({ enabled: true });
    advance(1000 + 2000);
    rerender({ enabled: false });
    const atPause = commits.length;
    advance(10000);
    expect(commits).toHaveLength(atPause);
    rerender({ enabled: true });
    advance(1000 + 10000);
    const spunMs = commits[commits.length - 1].at - commits[0].at - 10000 - 1000;
    expect(spunMs).toBeLessThanOrEqual(5000);
    expect(spunMs).toBeGreaterThan(4500);
  });

  it('stays stopped after stop() until the reset key changes', () => {
    const { result, commits, rerender } = setup({ enabled: true, resetKey: 1 });
    advance(1500);
    act(() => result.current.stop());
    const atStop = commits.length;
    rerender({ enabled: false, resetKey: 1 });
    rerender({ enabled: true, resetKey: 1 });
    advance(5000);
    expect(commits).toHaveLength(atStop);
    rerender({ enabled: true, resetKey: 2 });
    advance(1500);
    expect(commits.length).toBeGreaterThan(atStop);
  });

  it('never commits after unmount', () => {
    const { commits, unmount } = setup({ enabled: true });
    advance(1200);
    const atUnmount = commits.length;
    unmount();
    advance(5000);
    expect(commits).toHaveLength(atUnmount);
  });
});

describe('useIsAppActive', () => {
  it('follows AppState changes', () => {
    const addEventListener = AppState.addEventListener as unknown as jest.Mock;
    addEventListener.mockClear();
    const { result } = renderHook(() => useIsAppActive());
    expect(result.current).toBe(true);
    const onChange = addEventListener.mock.calls[0][1] as (state: string) => void;
    act(() => onChange('background'));
    expect(result.current).toBe(false);
    act(() => onChange('active'));
    expect(result.current).toBe(true);
    act(() => onChange('inactive'));
    expect(result.current).toBe(false);
  });
});
