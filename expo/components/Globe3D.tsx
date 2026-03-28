import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, PanResponder, GestureResponderEvent, ActivityIndicator } from 'react-native';
import { ZoomIn, ZoomOut } from 'lucide-react-native';
import Svg, { Path, Circle, Defs, RadialGradient, Stop, G } from 'react-native-svg';
import { geoOrthographic, geoPath, geoContains, GeoPermissibleObjects } from 'd3-geo';
import { feature } from 'topojson-client';
import { useOptimizedPins } from '@/lib/useGlobeOptimization';
import { hapticMedium, hapticLight } from '@/lib/haptics';
import { useTranslation } from '@/lib/i18n';
import type { GeoJsonProperties, FeatureCollection, Feature, Geometry } from 'geojson';

type GeoFeature = Feature<Geometry, GeoJsonProperties> & { id?: string | number };
type GeoFeatureCollection = FeatureCollection<Geometry, GeoJsonProperties> & {
  features: GeoFeature[];
};

const { width, height } = Dimensions.get('window');

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
  accessibilityExploreHint?: string;
}

const MIN_SCALE = 150;
const MAX_SCALE = 2000;

// Mapping TopoJSON IDs to ISO codes
const GEO_TO_ISO: Record<string, string> = {
  "158":"TW","004":"AF","008":"AL","010":"AQ","012":"DZ","016":"AS","020":"AD","024":"AO","028":"AG","031":"AZ","032":"AR","036":"AU","040":"AT","044":"BS","048":"BH","050":"BD","051":"AM","052":"BB","056":"BE","060":"BM","064":"BT","068":"BO","070":"BA","072":"BW","076":"BR","084":"BZ","090":"SB","092":"VG","096":"BN","100":"BG","104":"MM","108":"BI","112":"BY","116":"KH","120":"CM","124":"CA","132":"CV","136":"KY","140":"CF","144":"LK","148":"TD","152":"CL","156":"CN","162":"CX","166":"CC","170":"CO","174":"KM","178":"CG","180":"CD","184":"CK","188":"CR","191":"HR","192":"CU","196":"CY","203":"CZ","204":"BJ","208":"DK","212":"DM","214":"DO","218":"EC","222":"SV","226":"GQ","231":"ET","232":"ER","233":"EE","234":"FO","238":"FK","242":"FJ","246":"FI","248":"AX","250":"FR","254":"GF","258":"PF","260":"TF","262":"DJ","266":"GA","268":"GE","270":"GM","275":"PS","276":"DE","288":"GH","292":"GI","296":"KI","300":"GR","304":"GL","308":"GD","312":"GP","316":"GU","320":"GT","324":"GN","328":"GY","332":"HT","334":"HM","336":"VA","340":"HN","344":"HK","348":"HU","352":"IS","356":"IN","360":"ID","364":"IR","368":"IQ","372":"IE","376":"IL","380":"IT","384":"CI","388":"JM","392":"JP","398":"KZ","400":"JO","404":"KE","408":"KP","410":"KR","414":"KW","417":"KG","418":"LA","422":"LB","426":"LS","428":"LV","430":"LR","434":"LY","438":"LI","440":"LT","442":"LU","446":"MO","450":"MG","454":"MW","458":"MY","462":"MV","466":"ML","470":"MT","474":"MQ","478":"MR","480":"MU","484":"MX","492":"MC","496":"MN","498":"MD","499":"ME","500":"MS","504":"MA","508":"MZ","512":"OM","516":"NA","520":"NR","524":"NP","528":"NL","531":"CW","533":"AW","534":"SX","535":"BQ","540":"NC","548":"VU","554":"NZ","558":"NI","562":"NE","566":"NG","570":"NU","574":"NF","578":"NO","580":"MP","581":"UM","583":"FM","584":"MH","585":"PW","586":"PK","591":"PA","598":"PG","600":"PY","604":"PE","608":"PH","612":"PN","616":"PL","620":"PT","624":"GW","626":"TL","630":"PR","634":"QA","638":"RE","642":"RO","643":"RU","646":"RW","652":"BL","654":"SH","659":"KN","660":"AI","662":"LC","663":"MF","666":"PM","670":"VC","674":"SM","678":"ST","682":"SA","686":"SN","688":"RS","690":"SC","694":"SL","702":"SG","703":"SK","704":"VN","705":"SI","706":"SO","710":"ZA","716":"ZW","724":"ES","728":"SS","729":"SD","732":"EH","740":"SR","744":"SJ","748":"SZ","752":"SE","756":"CH","760":"SY","762":"TJ","764":"TH","768":"TG","772":"TK","776":"TO","780":"TT","784":"AE","788":"TN","792":"TR","795":"TM","796":"TC","798":"TV","800":"UG","804":"UA","807":"MK","818":"EG","826":"GB","831":"GG","832":"JE","833":"IM","834":"TZ","840":"US","850":"VI","854":"BF","858":"UY","860":"UZ","862":"VE","876":"WF","882":"WS","887":"YE","894":"ZM"
};

export default function Globe3D({ pins, onCountryPress, filterStatus, accessibilityExploreHint }: Globe3DProps) {
  const { t } = useTranslation();
  const [scale, setScale] = useState(150);
  const [rotation, setRotation] = useState<[number, number, number]>([0, -30, 0]);

  // PERF-002: Viewport culling — only render pins visible on the current globe face
  const optimizedResult = useOptimizedPins(
    pins.map(p => ({ ...p, lat: p.lat || 0, lng: p.lng || 0 })),
    -rotation[1], // centerLat (d3-geo convention: negated)
    -rotation[0], // centerLng (d3-geo convention: negated)
    scale,
    MIN_SCALE,
    MAX_SCALE
  );
  const visiblePins = optimizedResult.pins as CountryPin[];
  const [worldData, setWorldData] = useState<GeoFeatureCollection | null>(null);
  const [loading, setLoading] = useState(true);

  // Refs for animation and gesture handling
  const lastXRef = useRef(0);
  const lastYRef = useRef(0);
  const velocityRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);
  const totalDragDistanceRef = useRef(0);
  
  const GLOBE_SIZE = Math.min(width - 80, height * 0.55);

  const pinLookup = useMemo(() => {
    return visiblePins.reduce((acc, pin) => {
      acc[pin.code.toLowerCase()] = pin;
      return acc;
    }, {} as Record<string, CountryPin>);
  }, [visiblePins]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const topology = await response.json();
        
        if (!topology || !topology.objects || !topology.objects.countries) {
          throw new Error('Invalid topology data');
        }
        
        const features = feature(topology, topology.objects.countries) as unknown as GeoFeatureCollection;
        setWorldData(features);
        setLoading(false);
      } catch (error) {
        if (__DEV__) console.error("Failed to load map data", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const { pathGenerator, projection } = useMemo(() => {
    try {
      const projection = geoOrthographic()
        .scale(scale)
        .center([0, 0])
        .rotate(rotation)
        .translate([GLOBE_SIZE / 2, GLOBE_SIZE / 2])
        .clipAngle(90);

      const pathGenerator = geoPath().projection(projection);
      return { pathGenerator, projection };
    } catch (error) {
      if (__DEV__) console.error('Error creating projection:', error);
      return { pathGenerator: null, projection: null };
    }
  }, [scale, rotation, GLOBE_SIZE]);

  const getCountryFromFeature = useCallback((feature: GeoFeature): CountryPin | undefined => {
    const rawId = feature.id;
    if (!rawId) return undefined;
    const idStr = String(rawId).padStart(3, '0');
    const isoCode = GEO_TO_ISO[idStr];
    if (!isoCode) {

      return undefined;
    }
    const country = pinLookup[isoCode.toLowerCase()];
    if (!country) {

    }
    return country;
  }, [pinLookup]);

  const getCountryCentroid = useCallback((feature: GeoFeature): [number, number] | null => {
    if (!pathGenerator || !pathGenerator.centroid) return null;
    try {
      const centroid = pathGenerator.centroid(feature);
      if (!centroid || !isFinite(centroid[0]) || !isFinite(centroid[1])) return null;
      return centroid as [number, number];
    } catch {
      return null;
    }
  }, [pathGenerator]);

  const stopSpinning = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  }, []);

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

      setRotation(current => {
        const [lambda, phi, gamma] = current;
        const sensitivity = Math.max(0.35, 120 / scale);

        return [
          lambda + (velocityRef.current.x * sensitivity),
          Math.max(-90, Math.min(90, phi - (velocityRef.current.y * sensitivity))),
          gamma
        ];
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [scale, stopSpinning]);

  const handleGlobePress = useCallback((evt: GestureResponderEvent) => {
    if (totalDragDistanceRef.current > 10) {
      return;
    }

    const touch = evt.nativeEvent;
    const touchX = touch.locationX;
    const touchY = touch.locationY;

    if (!worldData || !projection) return;

    const coords = projection.invert?.([touchX, touchY]);
    if (!coords) return;

    for (const feat of worldData.features) {
      const path = pathGenerator(feat as GeoPermissibleObjects);
      if (!path) continue;

      const country = getCountryFromFeature(feat);
      if (!country) continue;

      const isFiltered = filterStatus && country.status !== filterStatus;
      if (isFiltered) continue;

      if (geoContains(feat, coords)) {
        hapticMedium();
        // Use setTimeout to avoid blocking the UI thread during navigation
        setTimeout(() => onCountryPress(country.id), 50);
        return;
      }
    }
  }, [worldData, pathGenerator, projection, filterStatus, getCountryFromFeature, onCountryPress]);

  const panResponder = useMemo(() => PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: (_, gestureState) =>
      Math.abs(gestureState.dx) > 5 || Math.abs(gestureState.dy) > 5,
    onPanResponderGrant: (evt) => {
      stopSpinning();
      isDraggingRef.current = true;
      totalDragDistanceRef.current = 0;
      lastXRef.current = evt.nativeEvent.pageX;
      lastYRef.current = evt.nativeEvent.pageY;
      velocityRef.current = { x: 0, y: 0 };
    },
    onPanResponderMove: (evt) => {
      const currentX = evt.nativeEvent.pageX;
      const currentY = evt.nativeEvent.pageY;

      const dx = currentX - lastXRef.current;
      const dy = currentY - lastYRef.current;

      totalDragDistanceRef.current += Math.abs(dx) + Math.abs(dy);

      velocityRef.current = { x: dx, y: dy };

      // Higher base value = more responsive rotation; clamped so zoom doesn't kill it
      const sensitivity = Math.max(0.35, 120 / scale);

      setRotation(current => [
        current[0] + (dx * sensitivity),
        Math.max(-90, Math.min(90, current[1] - (dy * sensitivity))),
        current[2]
      ]);

      lastXRef.current = currentX;
      lastYRef.current = currentY;
    },
    onPanResponderRelease: (evt) => {
      isDraggingRef.current = false;
      if (totalDragDistanceRef.current <= 10) {
        handleGlobePress(evt);
      } else {
        applyMomentum();
      }
    },
    onPanResponderTerminationRequest: () => false,
    onPanResponderTerminate: () => {
      isDraggingRef.current = false;
    },
  }), [scale, stopSpinning, applyMomentum, handleGlobePress]);



  const handleZoomIn = () => {
    hapticLight();
    setScale(prev => Math.min(prev * 1.2, MAX_SCALE));
  };

  const handleZoomOut = () => {
    hapticLight();
    setScale(prev => Math.max(prev * 0.8, MIN_SCALE));
  };



  // P-02: Memoize computed country paths and pin positions
  const countryPaths = useMemo(() => {
    if (!worldData || !pathGenerator) return [];
    return worldData.features.map((feat: GeoFeature, i: number) => {
      const path = pathGenerator(feat as GeoPermissibleObjects);
      if (!path) return null;
      const country = getCountryFromFeature(feat);
      const color = country ? country.color : '#E8DCC8';
      const isFiltered = filterStatus && (!country || country.status !== filterStatus);
      const hasCountryData = !!country;
      return { key: i, path, color, isFiltered, hasCountryData };
    }).filter(Boolean) as { key: number; path: string; color: string; isFiltered: boolean; hasCountryData: boolean }[];
  }, [worldData, pathGenerator, getCountryFromFeature, filterStatus]);

  const pinPositions = useMemo(() => {
    if (!worldData || !pathGenerator) return [];
    return worldData.features.map((feat: GeoFeature, idx: number) => {
      const country = getCountryFromFeature(feat);
      if (!country) return null;
      const isFiltered = filterStatus && country.status !== filterStatus;
      if (isFiltered) return null;
      const centroid = getCountryCentroid(feat);
      if (!centroid) return null;
      const [x, y] = centroid;
      if (!isFinite(x) || !isFinite(y)) return null;
      return { country, x, y, idx };
    }).filter(Boolean) as { country: CountryPin; x: number; y: number; idx: number }[];
  }, [worldData, pathGenerator, getCountryFromFeature, getCountryCentroid, filterStatus]);

  if (loading || !worldData || !pathGenerator || !projection) {
    return (
      <View style={styles.loadingContainer}>
        <View style={[styles.loadingSkeleton, { width: GLOBE_SIZE, height: GLOBE_SIZE, borderRadius: GLOBE_SIZE / 2 }]}>
          <ActivityIndicator size="large" color="#FF6B35" />
        </View>
        <Text style={styles.loadingText}>{t.globe.loadingWorld}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.globeContainer}>
        <View style={{ position: 'relative' }}>
          <View
            style={[styles.svgWrapper, { width: GLOBE_SIZE, height: GLOBE_SIZE }]}
            {...panResponder.panHandlers}
          >
            <Svg
              width={GLOBE_SIZE}
              height={GLOBE_SIZE}
              viewBox={`0 0 ${GLOBE_SIZE} ${GLOBE_SIZE}`}
            >
            <Defs>
              <RadialGradient id="oceanGradient" cx="50%" cy="50%" r="50%">
                <Stop offset="0%" stopColor="#7dd3fc" />
                <Stop offset="100%" stopColor="#2563eb" />
              </RadialGradient>
              <RadialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
                <Stop offset="0%" stopColor="#bae6fd" stopOpacity="0.3" />
                <Stop offset="100%" stopColor="#bae6fd" stopOpacity="0" />
              </RadialGradient>
            </Defs>

            {/* Atmosphere Glow */}
            <Circle
              cx={GLOBE_SIZE / 2}
              cy={GLOBE_SIZE / 2}
              r={scale * 1.05}
              fill="url(#glowGradient)"
            />

            {/* Ocean */}
            <Circle
              cx={GLOBE_SIZE / 2}
              cy={GLOBE_SIZE / 2}
              r={scale}
              fill="url(#oceanGradient)"
              stroke="#60a5fa"
              strokeWidth="1"
            />

            <G>
              {countryPaths.map(({ key, path, color, isFiltered, hasCountryData }) => (
                <Path
                  key={key}
                  d={path}
                  fill={isFiltered ? '#E8DCC8' : color}
                  stroke="#ffffff"
                  strokeWidth="0.5"
                  opacity={isFiltered ? 0.3 : (hasCountryData ? 1 : 0.6)}
                />
              ))}
            </G>

            {/* Flag Pins - visible markers on countries */}
            <G>
              {pinPositions.map(({ country, x, y, idx }) => (
                <G key={`${country.id}-${idx}`}>
                  <Circle
                    cx={x}
                    cy={y}
                    r={10}
                    fill="#FF6B35"
                    opacity={0.95}
                  />
                  <Circle
                    cx={x}
                    cy={y}
                    r={6}
                    fill="white"
                    opacity={1}
                  />
                </G>
              ))}
            </G>
            </Svg>
          </View>

          {/* Touchable flag pins overlaid on top */}
          <View style={{ position: 'absolute', top: 0, left: 0, width: GLOBE_SIZE, height: GLOBE_SIZE, pointerEvents: 'box-none' }}>
            {pinPositions.map(({ country, x, y, idx }) => (
              <TouchableOpacity
                key={`${country.id}-touch-${idx}`}
                style={[
                  styles.flagPin,
                  {
                    left: x - 20,
                    top: y - 20,
                  },
                ]}
                onPress={() => { hapticMedium(); setTimeout(() => onCountryPress(country.id), 50); }}
                activeOpacity={0.7}
                accessibilityLabel={`${country.name}, ${country.status}`}
                accessibilityRole="button"
                accessibilityHint={accessibilityExploreHint || 'Double tap to explore this country'}
              >
                <Text style={styles.flagEmoji}>{country.flag}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.legend}>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#D1D5DB' }]} />
            <Text style={styles.legendText}>{t.globe.toDo}</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#F59E0B' }]} />
            <Text style={styles.legendText}>{t.globe.cooking}</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#10B981' }]} />
            <Text style={styles.legendText}>{t.globe.done}</Text>
          </View>
        </View>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={handleZoomIn}
          accessibilityLabel="Zoom in"
          accessibilityRole="button"
        >
          <ZoomIn size={20} color="#6B7280" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={handleZoomOut}
          accessibilityLabel="Zoom out"
          accessibilityRole="button"
        >
          <ZoomOut size={20} color="#6B7280" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  globeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  svgWrapper: {
    overflow: 'visible',
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
  legend: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 16,
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendText: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500' as const,
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
  flagPin: {
    position: 'absolute' as const,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.3)',
    elevation: 6,
    borderWidth: 3,
    borderColor: '#FF6B35',
  },
  flagEmoji: {
    fontSize: 20,
  },
});
