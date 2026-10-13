import { memo, useState, useRef, useEffect, useMemo, useCallback, type ReactNode } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  PanResponder,
  GestureResponderEvent,
  ActivityIndicator,
  Animated,
  Easing,
  Platform,
  useWindowDimensions,
  type LayoutChangeEvent,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ZoomIn, ZoomOut, RefreshCw } from 'lucide-react-native';
import Svg, { Path, Circle, Defs, RadialGradient, Stop, G } from 'react-native-svg';
import { geoOrthographic, geoPath, geoContains, geoArea, GeoPermissibleObjects, type GeoProjection } from 'd3-geo';
import { feature } from 'topojson-client';
import worldTopology from 'world-atlas/countries-110m.json';
import {
  useOptimizedPins,
  useThrottledRotation,
  useFrameThrottledValue,
  useIdleAutoRotation,
  useReduceMotion,
  useScreenReaderEnabled,
  useIsAppActive,
  selectSpacedPins,
  selectSpacedPositions,
  findNearestPin,
  getFeatureBounds,
  getMaxVisibleAngle,
  isBoundsVisible,
  type GlobeRotation,
} from '@/lib/useGlobeOptimization';
import { hapticMedium, hapticLight } from '@/lib/haptics';
import { useTranslation } from '@/lib/i18n';
import FlagEmoji from '@/components/FlagEmoji';
import { GLOBE_COLORS, STATUS_COLORS } from '@/components/explore/palette';
import type { GeoJsonProperties, FeatureCollection, Feature, Geometry } from 'geojson';

type GeoFeature = Feature<Geometry, GeoJsonProperties> & { id?: string | number };
type GeoFeatureCollection = FeatureCollection<Geometry, GeoJsonProperties> & {
  features: GeoFeature[];
};

interface CountryPin {
  id: string;
  name: string;
  flag: string;
  lat?: number;
  lng?: number;
  color: string;
  status: string;
  code: string;
}

interface Globe3DProps {
  pins: CountryPin[];
  onCountryPress: (countryId: string) => void;
  filterStatus: string | null;
  /** Country ids to highlight when `filterStatus === 'favorites'`. */
  favoriteCountryIds?: readonly string[];
  /**
   * Called with `true` when a touch/drag on the globe starts and `false` when
   * it ends, so a parent ScrollView can disable scrolling while rotating.
   */
  onDragStateChange?: (isDragging: boolean) => void;
  accessibilityExploreHint?: string;
  /**
   * Allows the idle auto-rotation and pulsing rings (pass false while the
   * screen isn't focused). Each time it turns true again the globe may spin
   * briefly once more. Both are always off when the OS asks to reduce motion.
   */
  animate?: boolean;
  /**
   * Pauses the animations while something covers the globe (e.g. a modal),
   * without allowing a new idle spin when it ends.
   */
  paused?: boolean;
}

type PinPosition = { country: CountryPin; x: number; y: number };
type CountryPathData = { key: string; d: string; fill: string; opacity: number };

const FAVORITES_FILTER = 'favorites';

// Zoom range of the original fixed-size globe (projection scale 150 → 2000),
// now expressed relative to the responsive base radius.
const MIN_ZOOM = 1;
const MAX_ZOOM = 2000 / 150;
// Globe radius relative to the SVG viewport: 150 on the 310pt viewport of a
// 390pt-wide phone, matching the previous look there.
const GLOBE_RADIUS_RATIO = 150 / 310;
// Cap on tablets so the globe doesn't dominate the screen.
const MAX_GLOBE_SIZE = 520;
const MIN_GLOBE_SIZE = 160;
// Horizontal breathing room inside the container (previously `width - 80`
// with 16pt page padding on each side → container width - 48).
const GLOBE_HORIZONTAL_INSET = 48;
// Explore screen wraps the globe in a section with 16pt horizontal padding;
// used as an estimate until the container has been measured.
const ESTIMATED_PARENT_HORIZONTAL_PADDING = 32;
const TAP_MAX_DRAG_DISTANCE = 10;
const INITIAL_ROTATION: GlobeRotation = [0, -30, 0];
// Slow idle spin (4°/s), only for a few seconds after the screen is focused.
const AUTO_ROTATE_DEG_PER_SEC = 4;
const AUTO_ROTATE_START_DELAY_MS = 1500;
const AUTO_ROTATE_DURATION_MS = 10000;
const PULSE_DURATION_MS = 1800;
const PIN_SIZE = 30;
// A tap this close to a flag's centre opens that country.
const PIN_HIT_RADIUS = PIN_SIZE / 2 + 4;
// Flags may overlap by up to this share of their size at the deepest zoom
// (so neighbouring island states like St Lucia and St Vincent both fit);
// none at the default zoom, except near the rim (see pinPositions).
const PIN_MAX_OVERLAP = 0.3;
// Safety cap; the spacing alone keeps it to ~20–40 flags.
const MAX_RENDERED_PINS = 60;
// Which flag wins where flags would overlap: in-progress countries first,
// then larger countries (small ones show up as you zoom in).
const PIN_STATUS_RANK: Record<string, number> = { cooking: 0, 'to do': 1, done: 2, locked: 3 };
// TalkBack's double-tap is an 'activate' action. On iOS VoiceOver uses
// onAccessibilityTap instead (an action would show up as a custom rotor action).
const PIN_ACCESSIBILITY_ACTIONS = Platform.OS === 'android' ? [{ name: 'activate' as const }] : undefined;
const USE_NATIVE_DRIVER = Platform.OS !== 'web';
const TOPOJSON_CACHE_KEY = '@globe_topojson_cache';

// Mapping TopoJSON IDs to ISO codes
const GEO_TO_ISO: Record<string, string> = {
  "158":"TW","004":"AF","008":"AL","010":"AQ","012":"DZ","016":"AS","020":"AD","024":"AO","028":"AG","031":"AZ","032":"AR","036":"AU","040":"AT","044":"BS","048":"BH","050":"BD","051":"AM","052":"BB","056":"BE","060":"BM","064":"BT","068":"BO","070":"BA","072":"BW","076":"BR","084":"BZ","090":"SB","092":"VG","096":"BN","100":"BG","104":"MM","108":"BI","112":"BY","116":"KH","120":"CM","124":"CA","132":"CV","136":"KY","140":"CF","144":"LK","148":"TD","152":"CL","156":"CN","162":"CX","166":"CC","170":"CO","174":"KM","178":"CG","180":"CD","184":"CK","188":"CR","191":"HR","192":"CU","196":"CY","203":"CZ","204":"BJ","208":"DK","212":"DM","214":"DO","218":"EC","222":"SV","226":"GQ","231":"ET","232":"ER","233":"EE","234":"FO","238":"FK","242":"FJ","246":"FI","248":"AX","250":"FR","254":"GF","258":"PF","260":"TF","262":"DJ","266":"GA","268":"GE","270":"GM","275":"PS","276":"DE","288":"GH","292":"GI","296":"KI","300":"GR","304":"GL","308":"GD","312":"GP","316":"GU","320":"GT","324":"GN","328":"GY","332":"HT","334":"HM","336":"VA","340":"HN","344":"HK","348":"HU","352":"IS","356":"IN","360":"ID","364":"IR","368":"IQ","372":"IE","376":"IL","380":"IT","384":"CI","388":"JM","392":"JP","398":"KZ","400":"JO","404":"KE","408":"KP","410":"KR","414":"KW","417":"KG","418":"LA","422":"LB","426":"LS","428":"LV","430":"LR","434":"LY","438":"LI","440":"LT","442":"LU","446":"MO","450":"MG","454":"MW","458":"MY","462":"MV","466":"ML","470":"MT","474":"MQ","478":"MR","480":"MU","484":"MX","492":"MC","496":"MN","498":"MD","499":"ME","500":"MS","504":"MA","508":"MZ","512":"OM","516":"NA","520":"NR","524":"NP","528":"NL","531":"CW","533":"AW","534":"SX","535":"BQ","540":"NC","548":"VU","554":"NZ","558":"NI","562":"NE","566":"NG","570":"NU","574":"NF","578":"NO","580":"MP","581":"UM","583":"FM","584":"MH","585":"PW","586":"PK","591":"PA","598":"PG","600":"PY","604":"PE","608":"PH","612":"PN","616":"PL","620":"PT","624":"GW","626":"TL","630":"PR","634":"QA","638":"RE","642":"RO","643":"RU","646":"RW","652":"BL","654":"SH","659":"KN","660":"AI","662":"LC","663":"MF","666":"PM","670":"VC","674":"SM","678":"ST","682":"SA","686":"SN","688":"RS","690":"SC","694":"SL","702":"SG","703":"SK","704":"VN","705":"SI","706":"SO","710":"ZA","716":"ZW","724":"ES","728":"SS","729":"SD","732":"EH","740":"SR","744":"SJ","748":"SZ","752":"SE","756":"CH","760":"SY","762":"TJ","764":"TH","768":"TG","772":"TK","776":"TO","780":"TT","784":"AE","788":"TN","792":"TR","795":"TM","796":"TC","798":"TV","800":"UG","804":"UA","807":"MK","818":"EG","826":"GB","831":"GG","832":"JE","833":"IM","834":"TZ","840":"US","850":"VI","854":"BF","858":"UY","860":"UZ","862":"VE","876":"WF","882":"WS","887":"YE","894":"ZM"
};

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function computeGlobeSize(containerWidth: number, windowHeight: number): number {
  const size = Math.min(containerWidth - GLOBE_HORIZONTAL_INSET, windowHeight * 0.55, MAX_GLOBE_SIZE);
  return Math.max(MIN_GLOBE_SIZE, Math.floor(size));
}

function createProjection(scale: number, rotation: GlobeRotation, size: number): GeoProjection {
  return geoOrthographic()
    .scale(scale)
    .center([0, 0])
    .rotate(rotation)
    .translate([size / 2, size / 2])
    .clipAngle(90);
}

/** Degrees of rotation per dragged point; smaller when zoomed in. */
function rotationSensitivity(scale: number): number {
  return Math.max(0.35, 120 / scale);
}

/**
 * Minimum angular distance (degrees) between two flags: one flag width at
 * the default zoom, less towards the max zoom. The zoom is rounded to
 * quarter-octave steps so the set of flags only changes in steps while pinching.
 */
function pinSpacingDegrees(baseScale: number, zoom: number): number {
  const steppedZoom = 2 ** (Math.round(Math.log2(zoom) * 4) / 4);
  const zoomProgress = Math.log(steppedZoom) / Math.log(MAX_ZOOM);
  const spacingPx = PIN_SIZE * (1 - PIN_MAX_OVERLAP * zoomProgress);
  return (spacingPx / (baseScale * steppedZoom)) * (180 / Math.PI);
}

function Globe3D({
  pins,
  onCountryPress,
  filterStatus,
  favoriteCountryIds,
  onDragStateChange,
  accessibilityExploreHint,
  animate = true,
  paused = false,
}: Globe3DProps) {
  const { t } = useTranslation();

  // Responsive sizing: fit the measured container width (window width until
  // the first layout), bounded by screen height and a tablet cap.
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const [containerWidth, setContainerWidth] = useState<number | null>(null);
  const globeSize = computeGlobeSize(
    containerWidth ?? windowWidth - ESTIMATED_PARENT_HORIZONTAL_PADDING,
    windowHeight
  );
  const baseScale = globeSize * GLOBE_RADIUS_RATIO;

  const handleContainerLayout = useCallback((event: LayoutChangeEvent) => {
    const measured = Math.round(event.nativeEvent.layout.width);
    if (measured > 0) setContainerWidth(measured);
  }, []);

  const [zoom, setZoom] = useState(MIN_ZOOM);
  const [rotation, setRotation] = useState<GlobeRotation>(INITIAL_ROTATION);
  const scale = baseScale * zoom;

  // Gesture source of truth. Pan/pinch events update these refs synchronously
  // and state is committed at most once per animation frame.
  const rotationRef = useRef<GlobeRotation>(INITIAL_ROTATION);
  const zoomRef = useRef(MIN_ZOOM);
  const baseScaleRef = useRef(baseScale);
  useEffect(() => {
    baseScaleRef.current = baseScale;
  }, [baseScale]);

  const { schedule: scheduleRotation, flush: flushRotation } = useThrottledRotation(setRotation);
  const { schedule: scheduleZoom, flush: flushZoom } = useFrameThrottledValue<number>(setZoom);

  const favoriteSet = useMemo(() => new Set(favoriteCountryIds ?? []), [favoriteCountryIds]);

  // Flag pins only for countries the user can cook (locked countries are
  // shown by their land colour and are still tappable). Under the favourites
  // filter every favourite gets a pin so the filter never looks empty.
  // Stable array so useOptimizedPins' memo isn't invalidated every render.
  const pinCandidates = useMemo(
    () => pins
      .filter((p) => p.status !== 'locked' || (filterStatus === FAVORITES_FILTER && favoriteSet.has(p.id)))
      .map((p) => ({ ...p, lat: p.lat || 0, lng: p.lng || 0 })),
    [pins, filterStatus, favoriteSet]
  );

  const [worldData, setWorldData] = useState<GeoFeatureCollection | null>(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  // Touchable pin overlays are skipped while the user drags/pinches the globe.
  const [arePinOverlaysHidden, setArePinOverlaysHidden] = useState(false);

  // Refs for animation and gesture handling
  const lastXRef = useRef(0);
  const lastYRef = useRef(0);
  const velocityRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);
  const totalDragDistanceRef = useRef(0);
  const isPinchingRef = useRef(false);
  // A pinch happened during the current touch, so its release is never a tap.
  const didPinchRef = useRef(false);
  const lastPinchDistRef = useRef(0);
  const overlaysHiddenRef = useRef(false);
  const isTouchActiveRef = useRef(false);
  // Flags as last rendered, for resolving taps.
  const pinPositionsRef = useRef<PinPosition[]>([]);

  // Colour lookup uses *all* pins (not just the culled visible ones) so it
  // stays stable while rotating and edge countries keep their colour.
  const pinLookup = useMemo(() => {
    const lookup: Record<string, CountryPin> = {};
    for (const pin of pins) lookup[pin.code.toLowerCase()] = pin;
    return lookup;
  }, [pins]);

  // Pins and taps: locked countries stay visible under status filters; the
  // favorites filter shows only the user's favourite countries.
  const isPinHidden = useCallback(
    (country: CountryPin) => {
      if (!filterStatus) return false;
      if (filterStatus === FAVORITES_FILTER) return !favoriteSet.has(country.id);
      if (country.status === 'locked') return false;
      return country.status !== filterStatus;
    },
    [filterStatus, favoriteSet]
  );

  // Land area per ISO code, so larger countries win a flag spot.
  const areaByIso = useMemo(() => {
    const areas: Record<string, number> = {};
    if (!worldData) return areas;
    for (const feat of worldData.features) {
      const iso = feat.id == null ? undefined : GEO_TO_ISO[String(feat.id).padStart(3, '0')];
      if (iso) areas[iso] = (areas[iso] ?? 0) + geoArea(feat as GeoPermissibleObjects);
    }
    return areas;
  }, [worldData]);

  // At most one flag per flag-sized spot: after a world purchase up to ~175
  // overlapping flags covered the globe and taps hit whichever was on top.
  const pinSpacing = pinSpacingDegrees(baseScale, zoom);
  const placedPins = useMemo(() => {
    const ranked = pinCandidates
      .filter((pin) => !isPinHidden(pin))
      .sort((a, b) =>
        (PIN_STATUS_RANK[a.status] ?? 9) - (PIN_STATUS_RANK[b.status] ?? 9) ||
        (areaByIso[b.code.toUpperCase()] ?? 0) - (areaByIso[a.code.toUpperCase()] ?? 0));
    return selectSpacedPins(ranked, pinSpacing);
  }, [pinCandidates, isPinHidden, areaByIso, pinSpacing]);

  // PERF-002: Viewport culling — only render pins visible on the current globe face
  const { pins: visiblePins } = useOptimizedPins(
    placedPins,
    -rotation[1], // centerLat (d3-geo convention: negated)
    -rotation[0], // centerLng (d3-geo convention: negated)
    scale,
    baseScale * MIN_ZOOM,
    baseScale * MAX_ZOOM
  );

  const loadWorldData = useCallback(async () => {
    setLoading(true);
    setFetchError(false);
    try {
      // The map ships with the app, so the globe works offline from the first launch.
      const topology = worldTopology as any;
      const features = feature(topology, topology.objects.countries) as unknown as GeoFeatureCollection;
      setWorldData(features);
      // Drop the copy older versions downloaded and cached.
      AsyncStorage.removeItem(TOPOJSON_CACHE_KEY).catch(() => {});
    } catch (error) {
      if (__DEV__) console.error("Failed to load map data", error);
      setFetchError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadWorldData();
  }, [loadWorldData]);

  const { pathGenerator, projection } = useMemo(() => {
    try {
      const projection = createProjection(scale, rotation, globeSize);
      // 0.1 pt precision is invisible and ~28% less path text for the
      // native side to parse on every frame.
      const pathGenerator = geoPath().projection(projection).digits(1);
      return { pathGenerator, projection };
    } catch (error) {
      if (__DEV__) console.error('Error creating projection:', error);
      return { pathGenerator: null, projection: null };
    }
  }, [scale, rotation, globeSize]);

  const getCountryFromFeature = useCallback((feature: GeoFeature): CountryPin | undefined => {
    const rawId = feature.id;
    if (!rawId) return undefined;
    const idStr = String(rawId).padStart(3, '0');
    const isoCode = GEO_TO_ISO[idStr];
    if (!isoCode) return undefined;
    return pinLookup[isoCode.toLowerCase()];
  }, [pinLookup]);

  const stopSpinning = useCallback(() => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  }, []);

  // Don't keep animating (and setting state) after unmount.
  useEffect(() => stopSpinning, [stopSpinning]);

  const reduceMotion = useReduceMotion();
  const isScreenReaderOn = useScreenReaderEnabled();
  const isAppActive = useIsAppActive();
  const motionAllowed = animate && !paused && isAppActive && reduceMotion === false;

  // Short idle spin each time the screen is focused: it eases to a stop after
  // a few seconds, and the first touch or zoom ends it. Only at the default
  // zoom, so it never drags away what the user zoomed into, and never with a
  // screen reader (it would move the flags away from the reader's focus).
  const { stop: stopAutoRotate } = useIdleAutoRotation({
    enabled: motionAllowed && isScreenReaderOn === false && !!worldData && zoom <= MIN_ZOOM,
    resetKey: animate,
    rotationRef,
    commit: setRotation,
    canStart: () => !isTouchActiveRef.current,
    onStart: stopSpinning,
    degreesPerSecond: AUTO_ROTATE_DEG_PER_SEC,
    startDelayMs: AUTO_ROTATE_START_DELAY_MS,
    durationMs: AUTO_ROTATE_DURATION_MS,
  });

  // One shared, natively driven value for all "not started yet" pulse rings.
  const [pulse] = useState(() => new Animated.Value(0));
  useEffect(() => {
    if (!motionAllowed) {
      pulse.stopAnimation();
      pulse.setValue(0);
      return;
    }
    const loop = Animated.loop(
      Animated.timing(pulse, {
        toValue: 1,
        duration: PULSE_DURATION_MS,
        easing: Easing.out(Easing.quad),
        useNativeDriver: USE_NATIVE_DRIVER,
      })
    );
    loop.start();
    return () => loop.stop();
  }, [motionAllowed, pulse]);

  const applyMomentum = useCallback(() => {
    stopSpinning();

    const friction = 0.95;
    const stopThreshold = 0.05;

    const animate = () => {
      velocityRef.current.x *= friction;
      velocityRef.current.y *= friction;

      if (Math.abs(velocityRef.current.x) < stopThreshold && Math.abs(velocityRef.current.y) < stopThreshold) {
        stopSpinning();
        return;
      }

      // Already runs once per frame, so commit directly.
      const [lambda, phi, gamma] = rotationRef.current;
      const sensitivity = rotationSensitivity(baseScaleRef.current * zoomRef.current);
      const next: GlobeRotation = [
        lambda + velocityRef.current.x * sensitivity,
        clamp(phi - velocityRef.current.y * sensitivity, -90, 90),
        gamma,
      ];
      rotationRef.current = next;
      setRotation(next);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [stopSpinning]);

  const handleGlobeTap = useCallback((evt: GestureResponderEvent) => {
    if (totalDragDistanceRef.current > TAP_MAX_DRAG_DISTANCE) return;
    if (!worldData) return;

    const { locationX, locationY } = evt.nativeEvent;

    // Flags don't take touches themselves (a drag that starts on one must
    // still rotate the globe), so a tap on or next to a flag is resolved here.
    const pin = findNearestPin(pinPositionsRef.current, locationX, locationY, PIN_HIT_RADIUS);
    if (pin) {
      hapticMedium();
      setTimeout(() => onCountryPress(pin.country.id), 50);
      return;
    }

    // Build the projection from the gesture refs so this handler doesn't have
    // to change (and recreate the gesture) on every rotation frame.
    const tapProjection = createProjection(baseScale * zoomRef.current, rotationRef.current, globeSize);
    const coords = tapProjection.invert?.([locationX, locationY]);
    if (!coords) return;

    for (const feat of worldData.features) {
      const country = getCountryFromFeature(feat);
      if (!country) continue;
      if (isPinHidden(country)) continue;

      if (geoContains(feat, coords)) {
        hapticMedium();
        // Use setTimeout to avoid blocking the UI thread during navigation
        setTimeout(() => onCountryPress(country.id), 50);
        return;
      }
    }
  }, [worldData, baseScale, globeSize, getCountryFromFeature, isPinHidden, onCountryPress]);

  // Latest-callback refs so the PanResponder can be created once.
  const handleGlobeTapRef = useRef(handleGlobeTap);
  useEffect(() => {
    handleGlobeTapRef.current = handleGlobeTap;
  }, [handleGlobeTap]);
  const onDragStateChangeRef = useRef(onDragStateChange);
  useEffect(() => {
    onDragStateChangeRef.current = onDragStateChange;
  }, [onDragStateChange]);

  const setOverlaysHidden = useCallback((hidden: boolean) => {
    if (overlaysHiddenRef.current === hidden) return;
    overlaysHiddenRef.current = hidden;
    setArePinOverlaysHidden(hidden);
  }, []);

  const setTouchActive = useCallback((active: boolean) => {
    if (isTouchActiveRef.current === active) return;
    isTouchActiveRef.current = active;
    onDragStateChangeRef.current?.(active);
  }, []);

  // If we unmount mid-drag, make sure the parent re-enables scrolling.
  useEffect(() => () => setTouchActive(false), [setTouchActive]);

  const panResponder = useMemo(() => PanResponder.create({
    // Capture handlers run from parent → child BEFORE the regular set handlers
    // run from child → parent. Returning true here prevents the parent
    // ScrollView from stealing vertical drags (which made the page scroll
    // while the user tried to rotate the globe). All globe-area touches now
    // belong to this PanResponder. The parent additionally disables scrolling
    // via onDragStateChange while a touch is active.
    onStartShouldSetPanResponderCapture: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: (_, gestureState) =>
      Math.abs(gestureState.dx) > 5 || Math.abs(gestureState.dy) > 5,
    onPanResponderGrant: (evt) => {
      stopSpinning();
      stopAutoRotate();
      isPinchingRef.current = false;
      didPinchRef.current = false;
      totalDragDistanceRef.current = 0;
      lastXRef.current = evt.nativeEvent.pageX;
      lastYRef.current = evt.nativeEvent.pageY;
      velocityRef.current = { x: 0, y: 0 };
      setTouchActive(true);
    },
    onPanResponderMove: (evt) => {
      const touches = evt.nativeEvent.touches;

      // Pinch-to-zoom with two fingers
      if (touches && touches.length >= 2) {
        const dx = touches[0].pageX - touches[1].pageX;
        const dy = touches[0].pageY - touches[1].pageY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (!isPinchingRef.current) {
          isPinchingRef.current = true;
          lastPinchDistRef.current = dist;
          setOverlaysHidden(true);
          return;
        }

        const pinchDelta = dist / lastPinchDistRef.current;
        const nextZoom = clamp(zoomRef.current * pinchDelta, MIN_ZOOM, MAX_ZOOM);
        zoomRef.current = nextZoom;
        scheduleZoom(nextZoom);
        lastPinchDistRef.current = dist;
        return;
      }

      // Single finger rotation
      if (isPinchingRef.current) {
        // Back to one finger: restart the drag from where that finger is now.
        // lastX/lastY still hold the position from before the pinch, which
        // made the globe jump (and fling) on the next move.
        isPinchingRef.current = false;
        didPinchRef.current = true;
        lastXRef.current = evt.nativeEvent.pageX;
        lastYRef.current = evt.nativeEvent.pageY;
        velocityRef.current = { x: 0, y: 0 };
        return;
      }

      const currentX = evt.nativeEvent.pageX;
      const currentY = evt.nativeEvent.pageY;

      const dx = currentX - lastXRef.current;
      const dy = currentY - lastYRef.current;

      totalDragDistanceRef.current += Math.abs(dx) + Math.abs(dy);

      velocityRef.current = { x: dx, y: dy };

      const sensitivity = rotationSensitivity(baseScaleRef.current * zoomRef.current);
      const [lambda, phi, gamma] = rotationRef.current;
      const next: GlobeRotation = [
        lambda + dx * sensitivity,
        clamp(phi - dy * sensitivity, -90, 90),
        gamma,
      ];
      rotationRef.current = next;
      // Coalesced to one state update (and one projection rebuild) per frame.
      scheduleRotation(next);

      lastXRef.current = currentX;
      lastYRef.current = currentY;

      if (totalDragDistanceRef.current > TAP_MAX_DRAG_DISTANCE) {
        setOverlaysHidden(true);
      }
    },
    onPanResponderRelease: (evt) => {
      flushRotation();
      flushZoom();
      const wasPinching = isPinchingRef.current;
      isPinchingRef.current = false;
      setOverlaysHidden(false);
      setTouchActive(false);
      if (wasPinching) return;
      if (totalDragDistanceRef.current <= TAP_MAX_DRAG_DISTANCE) {
        // Lifting the fingers after a pinch isn't a tap.
        if (!didPinchRef.current) handleGlobeTapRef.current(evt);
      } else {
        applyMomentum();
      }
    },
    onPanResponderTerminationRequest: () => false,
    onPanResponderTerminate: () => {
      flushRotation();
      flushZoom();
      isPinchingRef.current = false;
      setOverlaysHidden(false);
      setTouchActive(false);
    },
  }), [
    stopSpinning,
    applyMomentum,
    scheduleRotation,
    flushRotation,
    scheduleZoom,
    flushZoom,
    setOverlaysHidden,
    setTouchActive,
    stopAutoRotate,
  ]);

  const handleZoomIn = useCallback(() => {
    hapticLight();
    stopAutoRotate();
    const next = Math.min(zoomRef.current * 1.2, MAX_ZOOM);
    zoomRef.current = next;
    setZoom(next);
  }, [stopAutoRotate]);

  const handleZoomOut = useCallback(() => {
    hapticLight();
    stopAutoRotate();
    const next = Math.max(zoomRef.current * 0.8, MIN_ZOOM);
    zoomRef.current = next;
    setZoom(next);
  }, [stopAutoRotate]);

  // Bounding caps, so countries on the far side are skipped before projecting.
  const featureBounds = useMemo(
    () => worldData?.features.map((feat) => getFeatureBounds(feat.geometry)) ?? [],
    [worldData]
  );

  // P-02: Per-country fill/opacity only depends on data + filter, not on the
  // projection, so it isn't recomputed on every rotation frame.
  const featureStyles = useMemo(() => {
    if (!worldData) return [];
    return worldData.features.map((feat: GeoFeature, i: number) => {
      const country = getCountryFromFeature(feat);
      const matchesFilter =
        !filterStatus ||
        (!!country &&
          (filterStatus === FAVORITES_FILTER
            ? favoriteSet.has(country.id)
            : country.status === filterStatus));
      // Accessible countries wear their status colour; locked ones are
      // desaturated sand (tapping them still opens the country teaser).
      let fill: string;
      if (!country) fill = GLOBE_COLORS.landOther;
      else if (matchesFilter) fill = country.color;
      else fill = STATUS_COLORS.locked;
      return {
        feat: feat as GeoPermissibleObjects,
        bounds: featureBounds[i],
        fill,
        opacity: !matchesFilter ? 0.35 : country ? 1 : 0.7,
      };
    });
  }, [worldData, featureBounds, getCountryFromFeature, filterStatus, favoriteSet]);

  // Per-frame work while rotating: one path string per visible country,
  // joined into one <Path> per fill/opacity (~5 elements instead of ~110).
  // Taps use geoContains on the data, not the paths, so merging is safe.
  const countryPaths = useMemo(() => {
    if (!pathGenerator) return [];
    const centerLat = -rotation[1];
    const centerLng = -rotation[0];
    const maxAngle = getMaxVisibleAngle(scale, globeSize);
    const groups = new Map<string, { fill: string; opacity: number; parts: string[] }>();
    for (const { feat, bounds, fill, opacity } of featureStyles) {
      if (!isBoundsVisible(bounds, centerLat, centerLng, maxAngle)) continue;
      const d = pathGenerator(feat);
      if (!d) continue;
      const key = `${fill}|${opacity}`;
      const group = groups.get(key);
      if (group) group.parts.push(d);
      else groups.set(key, { fill, opacity, parts: [d] });
    }
    const result: CountryPathData[] = [];
    for (const [key, { fill, opacity, parts }] of groups) {
      result.push({ key, d: parts.join(''), fill, opacity });
    }
    return result;
  }, [featureStyles, pathGenerator, rotation, scale, globeSize]);

  // Compute pin positions directly from lat/lng using the d3 projection
  // This is more reliable than matching TopoJSON features by ISO code
  const pinPositions = useMemo(() => {
    if (!projection) return [];
    const cx = globeSize / 2;
    const cy = globeSize / 2;
    const result: PinPosition[] = [];
    // visiblePins is already filtered, spaced, in priority order and culled
    // to the visible face (projection() itself doesn't clip the far side).
    for (const country of visiblePins) {
      const projected = projection([country.lng, country.lat]);
      if (!projected) continue;
      const [x, y] = projected;
      if (!isFinite(x) || !isFinite(y)) continue;
      // Only show pins whose center is within the globe circle…
      const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
      if (dist > scale) continue; // outside the globe circle
      // …and within the visible square viewport. When the user zooms in,
      // the globe extends beyond globeSize; pins outside the rendered
      // area would otherwise float over surrounding UI.
      if (x < 0 || x > globeSize || y < 0 || y > globeSize) continue;
      result.push({ country, x, y });
    }
    // The angular spacing shrinks on screen towards the rim (by cos of the
    // distance from the centre), so drop flags that would still overlap there
    // by more than PIN_MAX_OVERLAP. Capped at the on-screen spacing in the
    // middle (with a little slack for the quarter-octave zoom steps) so this
    // never removes flags away from the rim.
    const centreSpacingPx = pinSpacing * (Math.PI / 180) * scale;
    const minScreenDistance = Math.min(PIN_SIZE * (1 - PIN_MAX_OVERLAP), centreSpacingPx * 0.9);
    return selectSpacedPositions(result, minScreenDistance, MAX_RENDERED_PINS);
  }, [visiblePins, projection, globeSize, scale, pinSpacing]);

  useEffect(() => {
    pinPositionsRef.current = pinPositions;
  }, [pinPositions]);

  let content: ReactNode;

  if (fetchError && !worldData) {
    content = (
      <View style={styles.loadingContainer}>
        <View style={[styles.loadingSkeleton, { width: globeSize, height: globeSize, borderRadius: globeSize / 2 }]}>
          <Text style={styles.loadingText}>{t.ui.mapLoadFailed}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={loadWorldData}>
            <RefreshCw size={18} color="#FFF" />
            <Text style={styles.retryButtonText}>{t.ui.tryAgain}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else if (loading || !worldData || !pathGenerator || !projection) {
    content = (
      <View style={styles.loadingContainer}>
        <View style={[styles.loadingSkeleton, { width: globeSize, height: globeSize, borderRadius: globeSize / 2 }]}>
          <ActivityIndicator size="large" color="#FF6B35" />
        </View>
        <Text style={styles.loadingText}>{t.globe.loadingWorld}</Text>
      </View>
    );
  } else {
    content = (
      <View style={styles.container}>
        <View style={styles.globeContainer}>
          <View style={styles.globeViewport}>
            <View
              style={[styles.svgWrapper, { width: globeSize, height: globeSize }]}
              {...panResponder.panHandlers}
            >
              <Svg
                width={globeSize}
                height={globeSize}
                viewBox={`0 0 ${globeSize} ${globeSize}`}
              >
                <Defs>
                  <RadialGradient id="oceanGradient" cx="42%" cy="38%" r="62%">
                    <Stop offset="0%" stopColor={GLOBE_COLORS.oceanCenter} />
                    <Stop offset="100%" stopColor={GLOBE_COLORS.oceanEdge} />
                  </RadialGradient>
                  <RadialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
                    <Stop offset="90%" stopColor={GLOBE_COLORS.glow} stopOpacity="0.6" />
                    <Stop offset="100%" stopColor={GLOBE_COLORS.glow} stopOpacity="0" />
                  </RadialGradient>
                  {/* Darkened rim + soft highlight give the flat map some volume. */}
                  <RadialGradient id="limbGradient" cx="50%" cy="50%" r="50%">
                    <Stop offset="70%" stopColor={GLOBE_COLORS.limbShade} stopOpacity="0" />
                    <Stop offset="100%" stopColor={GLOBE_COLORS.limbShade} stopOpacity="0.22" />
                  </RadialGradient>
                  <RadialGradient id="highlightGradient" cx="36%" cy="30%" r="45%">
                    <Stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.32" />
                    <Stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                  </RadialGradient>
                </Defs>

                {/* Warm atmosphere glow */}
                <Circle
                  cx={globeSize / 2}
                  cy={globeSize / 2}
                  r={scale * 1.035}
                  fill="url(#glowGradient)"
                />

                {/* Ocean */}
                <Circle
                  cx={globeSize / 2}
                  cy={globeSize / 2}
                  r={scale}
                  fill="url(#oceanGradient)"
                  stroke={GLOBE_COLORS.oceanStroke}
                  strokeWidth="1"
                />

                <CountryPathsLayer paths={countryPaths} />

                <Circle cx={globeSize / 2} cy={globeSize / 2} r={scale} fill="url(#limbGradient)" />
                <Circle cx={globeSize / 2} cy={globeSize / 2} r={scale} fill="url(#highlightGradient)" />

                {/* Flag Pins - visible markers on countries */}
                <PinDotsLayer positions={pinPositions} />
              </Svg>
            </View>

            {/* Flag pins overlaid on top — skipped while dragging */}
            {!arePinOverlaysHidden && (
              <PinOverlays
                positions={pinPositions}
                size={globeSize}
                onCountryPress={onCountryPress}
                accessibilityHint={accessibilityExploreHint}
                lockedLabel={t.ui.lockedLabel}
                pulse={pulse}
                isPulseAnimated={motionAllowed}
                acceptsTouches={isScreenReaderOn === true}
              />
            )}
          </View>
        </View>

        <View style={styles.controls}>
          <TouchableOpacity
            style={styles.controlButton}
            onPress={handleZoomIn}
            accessibilityLabel={t.ui.zoomIn}
            accessibilityRole="button"
          >
            <ZoomIn size={20} color="#6B7280" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.controlButton}
            onPress={handleZoomOut}
            accessibilityLabel={t.ui.zoomOut}
            accessibilityRole="button"
          >
            <ZoomOut size={20} color="#6B7280" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.root} onLayout={handleContainerLayout}>
      {content}
    </View>
  );
}

const CountryPathsLayer = memo(function CountryPathsLayer({ paths }: { paths: CountryPathData[] }) {
  return (
    <G>
      {paths.map(({ key, d, fill, opacity }) => (
        <Path
          key={key}
          d={d}
          fill={fill}
          stroke="#ffffff"
          strokeWidth="0.5"
          opacity={opacity}
        />
      ))}
    </G>
  );
});

/** SVG dots under the flag pins; they stay visible while the overlays are hidden during drags. */
const PinDotsLayer = memo(function PinDotsLayer({ positions }: { positions: PinPosition[] }) {
  return (
    <G>
      {positions.map(({ country, x, y }) => {
        const isLocked = country.status === 'locked';
        return (
          <G key={country.id}>
            <Circle cx={x} cy={y} r={isLocked ? 5 : 7} fill={isLocked ? '#B8AC9A' : country.color} opacity={0.95} />
            <Circle cx={x} cy={y} r={isLocked ? 2.5 : 4} fill="white" />
          </G>
        );
      })}
    </G>
  );
});

type PinOverlaysProps = {
  positions: PinPosition[];
  size: number;
  onCountryPress: (countryId: string) => void;
  accessibilityHint?: string;
  lockedLabel: string;
  /** Shared 0→1 loop driving the rings around not-yet-started countries. */
  pulse: Animated.Value;
  /** false → a static halo instead (reduce motion / screen not focused). */
  isPulseAnimated: boolean;
  /**
   * Normally the flags let touches through to the globe (taps on them are
   * resolved there). With a screen reader on they take touches, so touch
   * exploration (Android hover events) can land on them.
   */
  acceptsTouches: boolean;
};

const PinOverlays = memo(function PinOverlays({
  positions,
  size,
  onCountryPress,
  accessibilityHint,
  lockedLabel,
  pulse,
  isPulseAnimated,
  acceptsTouches,
}: PinOverlaysProps) {
  const pulseStyle = useMemo(() => (isPulseAnimated
    ? {
        opacity: pulse.interpolate({ inputRange: [0, 1], outputRange: [0.5, 0] }),
        transform: [{ scale: pulse.interpolate({ inputRange: [0, 1], outputRange: [1, 1.8] }) }],
      }
    : styles.pulseRingStatic), [isPulseAnimated, pulse]);

  return (
    <View
      style={[
        styles.pinOverlayLayer,
        { width: size, height: size, pointerEvents: acceptsTouches ? 'box-none' : 'none' },
      ]}
    >
      {/* Rings first so they sit underneath every pin. */}
      {positions.map(({ country, x, y }) => (country.status === 'to do' ? (
        <Animated.View
          key={`ring-${country.id}`}
          style={[
            styles.pulseRing,
            { left: x - PIN_SIZE / 2, top: y - PIN_SIZE / 2, borderColor: country.color },
            pulseStyle,
          ]}
        />
      ) : null))}
      {positions.map(({ country, x, y }) => {
        const isLocked = country.status === 'locked';
        const open = () => { hapticMedium(); setTimeout(() => onCountryPress(country.id), 50); };
        return (
          <View
            key={country.id}
            style={[
              styles.flagPin,
              { left: x - PIN_SIZE / 2, top: y - PIN_SIZE / 2, borderColor: country.color },
              isLocked && styles.flagPinLocked,
            ]}
            accessible
            accessibilityLabel={isLocked ? `${country.name}, ${lockedLabel}` : country.name}
            accessibilityRole="button"
            accessibilityHint={accessibilityHint}
            onAccessibilityTap={open}
            accessibilityActions={PIN_ACCESSIBILITY_ACTIONS}
            onAccessibilityAction={(event) => {
              if (event.nativeEvent.actionName === 'activate') open();
            }}
          >
            <FlagEmoji flag={country.flag} size={16} />
          </View>
        );
      })}
    </View>
  );
});

export default memo(Globe3D);

const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  globeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  globeViewport: {
    position: 'relative',
  },
  pinOverlayLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  svgWrapper: {
    // Clip to the globe viewport so zoomed-in country paths and
    // overlaid touchable pins don't render over surrounding UI.
    overflow: 'hidden',
    // Ensures touches are caught within the box
    backgroundColor: 'transparent',
  },
  controls: {
    position: 'absolute' as const,
    right: 16,
    bottom: 16,
    gap: 8,
  },
  controlButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)',
    elevation: 3,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  loadingSkeleton: {
    backgroundColor: '#E8E0D8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#6B7280',
  },
  retryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#FF6B35',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 12,
  },
  retryButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600' as const,
  },
  flagPin: {
    position: 'absolute' as const,
    width: PIN_SIZE,
    height: PIN_SIZE,
    borderRadius: PIN_SIZE / 2,
    backgroundColor: GLOBE_COLORS.pinBackground,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    borderWidth: 2,
    boxShadow: '0px 2px 4px rgba(91, 58, 30, 0.25)',
  },
  // Only locked favourites (favourites filter) get a pin; keep them quiet.
  flagPinLocked: {
    borderColor: '#B8AC9A',
    opacity: 0.8,
  },
  pulseRing: {
    position: 'absolute' as const,
    pointerEvents: 'none',
    width: PIN_SIZE,
    height: PIN_SIZE,
    borderRadius: PIN_SIZE / 2,
    borderWidth: 1.5,
  },
  pulseRingStatic: {
    opacity: 0.3,
    transform: [{ scale: 1.3 }],
  },
});
