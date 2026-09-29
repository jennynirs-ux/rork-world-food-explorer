/**
 * CelebrationSheet — a playful bottom sheet shown right after an achievement
 * (dish cooked, quiz completed, badge unlocked). Pops a medallion, bursts
 * confetti and counts up the points using react-native `Animated` only.
 * Honors the OS "reduce motion" setting.
 *
 * Usage (e.g. in app/country/[id].tsx):
 *
 *   import CelebrationSheet, { type CelebrationKind } from '@/components/celebration/CelebrationSheet';
 *   import { useShareCard } from '@/components/share/ShareCard';
 *   import { localizeBadge, shareCookedIt } from '@/lib/share';
 *
 *   const [celebration, setCelebration] = useState<{ kind: CelebrationKind; points: number } | null>(null);
 *   const { shareCard, shareCardHost, isSharing } = useShareCard();
 *
 *   // after marking the main dish as cooked:
 *   setCelebration({ kind: 'dish', points: 50 });
 *
 *   <CelebrationSheet
 *     visible={!!celebration}
 *     kind={celebration?.kind ?? 'dish'}
 *     subtitle={dishName}
 *     points={celebration?.points}
 *     badge={newBadge ? { ...localizeBadge(t.badges, newBadge), icon: newBadge.icon } : undefined}
 *     sharing={isSharing}
 *     onShare={() => shareCard(
 *       { variant: 'cooked', dishName, countryName, flag: countryData.flag, imageUri: countryData.mainDish.imageUrl },
 *       () => shareCookedIt(countryData, dishName, undefined, language),
 *     )}
 *     onContinue={() => setCelebration(null)}
 *     showReminderPrompt={!notificationsEnabled}
 *     onEnableReminders={enableStreakReminders} // may return false (e.g. permission denied) to reset the toggle
 *   >
 *     {shareCardHost}
 *   </CelebrationSheet>
 */
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import {
  AccessibilityInfo,
  ActivityIndicator,
  Animated,
  Easing,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Award, Bell, BellRing, Brain, ChefHat, Share2, Star, type LucideIcon } from 'lucide-react-native';
import { useTranslation } from '@/lib/i18n';
import { fill, useStrings } from '@/lib/strings';
import { selectPlural, shareStrings } from '@/lib/strings/share';
import { hapticLight, hapticSuccess } from '@/lib/haptics';

export type CelebrationKind = 'dish' | 'quiz' | 'badge';

export type CelebrationBadge = {
  /** Localized name — see localizeBadge() in lib/share.ts */
  name: string;
  description?: string;
  icon?: LucideIcon;
};

export type CelebrationSheetProps = {
  visible: boolean;
  kind: CelebrationKind;
  /** Overrides the default localized title for `kind`. */
  title?: string;
  /** E.g. the dish name or "8/10 correct". For kind 'badge' defaults to the badge name. */
  subtitle?: string;
  /** Points earned; hidden when 0 or undefined. */
  points?: number;
  /** A badge earned together with this achievement (or the badge itself for kind 'badge'). */
  badge?: CelebrationBadge | null;
  /** Primary button. The sheet stays open while sharing. */
  onShare: () => void;
  /** Secondary button, backdrop tap and Android back. */
  onContinue: () => void;
  /** Shows a spinner on the Share button (pass `isSharing` from useShareCard). */
  sharing?: boolean;
  /** Show the "Remind me to keep my streak" toggle (requires onEnableReminders). */
  showReminderPrompt?: boolean;
  /** Return (or resolve) `false` if reminders could not be enabled; the toggle then resets. */
  onEnableReminders?: () => void | boolean | Promise<void | boolean>;
  /** Rendered inside the modal — put `shareCardHost` from useShareCard() here. */
  children?: ReactNode;
};

const BRAND = '#FF6B35';
const TERRACOTTA = '#C65D3B';
const INK = '#2D1B00';
const MUTED = '#6B7280';
const GOLD = '#FFC857';

const NATIVE_DRIVER = Platform.OS !== 'web';
const SHEET_OFFSET = 520;
const MEDAL_SIZE = 104;

const KIND_ICON: Record<CelebrationKind, LucideIcon> = {
  dish: ChefHat,
  quiz: Brain,
  badge: Award,
};

// Deterministic confetti layout (no Math.random during render).
const CONFETTI_COLORS = [BRAND, GOLD, TERRACOTTA, '#79C381', '#6BA3E1', '#E88CA8'];
const CONFETTI = Array.from({ length: 22 }, (_, i) => {
  const angle = (i / 22) * Math.PI * 2 + (i % 3) * 0.25;
  const distance = 95 + ((i * 37) % 75);
  return {
    dx: Math.cos(angle) * distance,
    dy: Math.sin(angle) * distance * 0.75 - 40,
    fall: 70 + ((i * 53) % 60),
    spin: `${(i % 2 === 0 ? 1 : -1) * (200 + ((i * 41) % 320))}deg`,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    width: i % 3 === 0 ? 8 : 6,
    height: i % 3 === 0 ? 8 : 13,
    round: i % 4 === 0,
  };
});

type ReminderState = 'idle' | 'pending' | 'on';

export default function CelebrationSheet({
  visible,
  kind,
  title,
  subtitle,
  points = 0,
  badge,
  onShare,
  onContinue,
  sharing = false,
  showReminderPrompt = false,
  onEnableReminders,
  children,
}: CelebrationSheetProps) {
  const s = useStrings(shareStrings);
  const { language } = useTranslation();
  const insets = useSafeAreaInsets();

  // Starts false so the Modal always goes false -> true and fires onShow.
  const [mounted, setMounted] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [shownPoints, setShownPoints] = useState(0);
  const [reminder, setReminder] = useState<ReminderState>('idle');

  const backdrop = useRef(new Animated.Value(0)).current;
  const sheetY = useRef(new Animated.Value(SHEET_OFFSET)).current;
  const medal = useRef(new Animated.Value(0)).current;
  const wiggle = useRef(new Animated.Value(0)).current;
  const burst = useRef(new Animated.Value(0)).current;
  const pulse = useRef(new Animated.Value(0)).current;
  const pointsValue = useRef(new Animated.Value(0)).current;
  const pulseLoop = useRef<Animated.CompositeAnimation | null>(null);

  useEffect(() => {
    let active = true;
    AccessibilityInfo.isReduceMotionEnabled()
      .then(enabled => {
        if (active) setReduceMotion(enabled);
      })
      .catch(() => {});
    const sub = AccessibilityInfo.addEventListener('reduceMotionChanged', setReduceMotion);
    return () => {
      active = false;
      sub.remove();
    };
  }, []);

  useEffect(() => {
    const id = pointsValue.addListener(({ value }) => setShownPoints(Math.round(value)));
    return () => pointsValue.removeListener(id);
  }, [pointsValue]);

  const visibleRef = useRef(visible);
  visibleRef.current = visible;
  const mountedRef = useRef(mounted);
  useEffect(() => {
    mountedRef.current = mounted;
  }, [mounted]);

  // Runs from Modal.onShow, so the sheet is on screen before it starts moving.
  const animateIn = useCallback(() => {
    hapticSuccess();
    pulseLoop.current?.stop();
    backdrop.setValue(0);
    sheetY.setValue(SHEET_OFFSET);
    medal.setValue(0);
    wiggle.setValue(0);
    burst.setValue(0);
    pulse.setValue(0);
    pointsValue.setValue(0);
    setShownPoints(0);
    if (reduceMotion) {
      backdrop.setValue(1);
      sheetY.setValue(0);
      medal.setValue(1);
      setShownPoints(points);
      return;
    }

    Animated.parallel([
      Animated.timing(backdrop, { toValue: 1, duration: 220, useNativeDriver: NATIVE_DRIVER }),
      Animated.spring(sheetY, { toValue: 0, damping: 18, stiffness: 170, mass: 0.9, useNativeDriver: NATIVE_DRIVER }),
      Animated.sequence([
        Animated.delay(140),
        Animated.spring(medal, { toValue: 1, friction: 4, tension: 110, useNativeDriver: NATIVE_DRIVER }),
      ]),
      Animated.sequence([
        Animated.delay(320),
        Animated.timing(wiggle, { toValue: 1, duration: 90, useNativeDriver: NATIVE_DRIVER }),
        Animated.timing(wiggle, { toValue: -1, duration: 150, useNativeDriver: NATIVE_DRIVER }),
        Animated.timing(wiggle, { toValue: 0.5, duration: 120, useNativeDriver: NATIVE_DRIVER }),
        Animated.timing(wiggle, { toValue: 0, duration: 100, useNativeDriver: NATIVE_DRIVER }),
      ]),
      Animated.sequence([
        Animated.delay(180),
        Animated.timing(burst, {
          toValue: 1,
          duration: 1400,
          easing: Easing.out(Easing.quad),
          useNativeDriver: NATIVE_DRIVER,
        }),
      ]),
      Animated.timing(pointsValue, {
        toValue: points,
        duration: 900,
        delay: 380,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }),
    ]).start();

    pulseLoop.current = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1, duration: 1100, easing: Easing.out(Easing.ease), useNativeDriver: NATIVE_DRIVER }),
        Animated.timing(pulse, { toValue: 0, duration: 0, useNativeDriver: NATIVE_DRIVER }),
      ]),
    );
    pulseLoop.current.start();
  }, [backdrop, burst, medal, points, pointsValue, pulse, reduceMotion, sheetY, wiggle]);

  const animateInRef = useRef(animateIn);
  useEffect(() => {
    animateInRef.current = animateIn;
  }, [animateIn]);

  useEffect(() => {
    if (visible) {
      setReminder('idle');
      // Re-opened while the close animation was running: the Modal never hid, so no onShow.
      if (mountedRef.current) animateInRef.current();
      else setMounted(true);
      return;
    }
    pulseLoop.current?.stop();
    Animated.parallel([
      Animated.timing(backdrop, { toValue: 0, duration: 180, useNativeDriver: NATIVE_DRIVER }),
      Animated.timing(sheetY, { toValue: SHEET_OFFSET, duration: 220, easing: Easing.in(Easing.cubic), useNativeDriver: NATIVE_DRIVER }),
    ]).start(() => {
      // Re-opened while closing: keep the modal up.
      if (!visibleRef.current) setMounted(false);
    });
  }, [visible, backdrop, sheetY]);

  useEffect(() => () => pulseLoop.current?.stop(), []);

  const handleEnableReminders = useCallback(async () => {
    if (!onEnableReminders || reminder !== 'idle') return;
    hapticLight();
    setReminder('pending');
    try {
      const result = await onEnableReminders();
      setReminder(result === false ? 'idle' : 'on');
    } catch {
      setReminder('idle');
    }
  }, [onEnableReminders, reminder]);

  const Icon = kind === 'badge' ? badge?.icon ?? KIND_ICON.badge : KIND_ICON[kind];
  const defaultTitle = kind === 'dish' ? s.celebrateDish : kind === 'quiz' ? s.celebrateQuiz : s.celebrateBadge;
  const heroSubtitle = subtitle ?? (kind === 'badge' ? badge?.name : undefined);
  const heroDescription = kind === 'badge' ? badge?.description : undefined;
  const extraBadge = kind !== 'badge' ? badge : null;
  const BadgeIcon = extraBadge?.icon ?? Award;
  const pointsTemplate = selectPlural(s.pointsEarned, points, language);
  const reminderOn = reminder === 'on';

  const rotate = wiggle.interpolate({ inputRange: [-1, 1], outputRange: ['-12deg', '12deg'] });
  const pulseScale = pulse.interpolate({ inputRange: [0, 1], outputRange: [1, 1.45] });
  const pulseOpacity = pulse.interpolate({ inputRange: [0, 0.2, 1], outputRange: [0, 0.35, 0] });

  return (
    <Modal
      visible={mounted}
      transparent
      animationType="none"
      statusBarTranslucent
      onShow={animateIn}
      onRequestClose={onContinue}
    >
      <View style={styles.root}>
        <Animated.View style={[styles.backdrop, { opacity: backdrop }]}>
          <Pressable
            style={StyleSheet.absoluteFill}
            onPress={onContinue}
            accessibilityRole="button"
            accessibilityLabel={s.continue}
          />
        </Animated.View>

        <Animated.View
          style={[styles.sheet, { paddingBottom: insets.bottom + 20, transform: [{ translateY: sheetY }] }]}
          accessibilityViewIsModal
        >
          <View style={styles.medalStage}>
            {!reduceMotion && (
              <View style={styles.confettiOrigin}>
                {CONFETTI.map((piece, i) => (
                  <Animated.View
                    key={i}
                    style={[
                      styles.confetti,
                      {
                        width: piece.width,
                        height: piece.height,
                        borderRadius: piece.round ? piece.width / 2 : 2,
                        backgroundColor: piece.color,
                        opacity: burst.interpolate({ inputRange: [0, 0.06, 0.7, 1], outputRange: [0, 1, 1, 0] }),
                        transform: [
                          { translateX: burst.interpolate({ inputRange: [0, 1], outputRange: [0, piece.dx] }) },
                          {
                            translateY: burst.interpolate({
                              inputRange: [0, 0.5, 1],
                              outputRange: [0, piece.dy, piece.dy + piece.fall],
                            }),
                          },
                          { rotate: burst.interpolate({ inputRange: [0, 1], outputRange: ['0deg', piece.spin] }) },
                        ],
                      },
                    ]}
                  />
                ))}
              </View>
            )}
            <Animated.View
              style={[styles.pulseRing, { opacity: pulseOpacity, transform: [{ scale: pulseScale }] }]}
            />
            <Animated.View style={[styles.medal, { transform: [{ scale: medal }, { rotate }] }]}>
              <LinearGradient
                colors={['#FF9A5A', BRAND, TERRACOTTA] as const}
                start={{ x: 0.1, y: 0 }}
                end={{ x: 0.9, y: 1 }}
                style={styles.medalFace}
              >
                <Icon size={46} color="#FFF" strokeWidth={2.2} />
              </LinearGradient>
            </Animated.View>
          </View>

          <Text style={styles.title} accessibilityRole="header">{title ?? defaultTitle}</Text>
          {!!heroSubtitle && <Text style={styles.subtitle}>{heroSubtitle}</Text>}
          {!!heroDescription && <Text style={styles.description}>{heroDescription}</Text>}

          {points > 0 && (
            <View style={styles.pointsPill} accessible accessibilityLabel={fill(pointsTemplate, { n: points })}>
              <Star size={16} color="#E0A100" fill={GOLD} />
              <Text style={styles.pointsText}>{fill(pointsTemplate, { n: shownPoints })}</Text>
            </View>
          )}

          {!!extraBadge && (
            <View style={styles.badgeRow}>
              <View style={styles.badgeIcon}>
                <BadgeIcon size={24} color={BRAND} strokeWidth={2.2} />
              </View>
              <View style={styles.badgeText}>
                <Text style={styles.badgeLabel}>{s.newBadge}</Text>
                <Text style={styles.badgeName}>{extraBadge.name}</Text>
                {!!extraBadge.description && <Text style={styles.badgeDescription}>{extraBadge.description}</Text>}
              </View>
            </View>
          )}

          {showReminderPrompt && !!onEnableReminders && (
            <Pressable
              style={[styles.reminder, reminderOn && styles.reminderOn]}
              onPress={handleEnableReminders}
              disabled={reminder !== 'idle'}
              accessibilityRole="switch"
              accessibilityLabel={s.remindStreak}
              accessibilityState={{ checked: reminderOn, busy: reminder === 'pending' }}
            >
              {reminderOn ? <BellRing size={18} color={BRAND} /> : <Bell size={18} color={MUTED} />}
              <Text style={[styles.reminderText, reminderOn && styles.reminderTextOn]}>
                {reminderOn ? s.remindersOn : s.remindStreak}
              </Text>
              <View style={[styles.toggleTrack, reminderOn && styles.toggleTrackOn]}>
                <View style={[styles.toggleKnob, reminderOn && styles.toggleKnobOn]} />
              </View>
            </Pressable>
          )}

          <TouchableOpacity
            style={[styles.primaryButton, sharing && styles.buttonBusy]}
            onPress={onShare}
            disabled={sharing}
            activeOpacity={0.85}
            accessibilityRole="button"
            accessibilityLabel={s.share}
            accessibilityState={{ busy: sharing }}
          >
            {sharing ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <>
                <Share2 size={18} color="#FFF" strokeWidth={2.4} />
                <Text style={styles.primaryText}>{s.share}</Text>
              </>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={onContinue}
            activeOpacity={0.7}
            accessibilityRole="button"
          >
            <Text style={styles.secondaryText}>{s.continue}</Text>
          </TouchableOpacity>
        </Animated.View>

        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(24, 14, 4, 0.55)',
  },
  sheet: {
    width: '100%',
    maxWidth: 560,
    alignSelf: 'center',
    backgroundColor: '#FFFBF6',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  medalStage: {
    width: MEDAL_SIZE,
    height: MEDAL_SIZE,
    marginTop: -MEDAL_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confettiOrigin: {
    position: 'absolute',
    top: MEDAL_SIZE / 2,
    left: MEDAL_SIZE / 2,
    width: 0,
    height: 0,
    pointerEvents: 'none',
  },
  confetti: {
    position: 'absolute',
  },
  pulseRing: {
    position: 'absolute',
    width: MEDAL_SIZE,
    height: MEDAL_SIZE,
    borderRadius: MEDAL_SIZE / 2,
    backgroundColor: BRAND,
  },
  medal: {
    width: MEDAL_SIZE,
    height: MEDAL_SIZE,
    borderRadius: MEDAL_SIZE / 2,
    padding: 5,
    backgroundColor: '#FFF',
    shadowColor: TERRACOTTA,
    shadowOpacity: 0.35,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
  },
  medalFace: {
    flex: 1,
    borderRadius: MEDAL_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: GOLD,
  },
  title: {
    marginTop: 14,
    fontSize: 26,
    fontWeight: '800',
    color: INK,
    textAlign: 'center',
    letterSpacing: -0.3,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 17,
    fontWeight: '600',
    color: TERRACOTTA,
    textAlign: 'center',
  },
  description: {
    marginTop: 4,
    fontSize: 14,
    color: MUTED,
    textAlign: 'center',
  },
  pointsPill: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#FFF3D6',
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  pointsText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#A86B00',
    fontVariant: ['tabular-nums'],
  },
  badgeRow: {
    marginTop: 16,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#FDE2CF',
  },
  badgeIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFF1E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    flex: 1,
  },
  badgeLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: BRAND,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  badgeName: {
    fontSize: 16,
    fontWeight: '700',
    color: INK,
    marginTop: 1,
  },
  badgeDescription: {
    fontSize: 13,
    color: MUTED,
    marginTop: 1,
  },
  reminder: {
    marginTop: 14,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 11,
    backgroundColor: '#F5F1EB',
  },
  reminderOn: {
    backgroundColor: '#FFF1E6',
  },
  reminderText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#4B5563',
  },
  reminderTextOn: {
    color: TERRACOTTA,
  },
  toggleTrack: {
    width: 40,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#D1D5DB',
    padding: 3,
  },
  toggleTrackOn: {
    backgroundColor: BRAND,
  },
  toggleKnob: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FFF',
  },
  toggleKnobOn: {
    transform: [{ translateX: 16 }],
  },
  primaryButton: {
    marginTop: 20,
    alignSelf: 'stretch',
    height: 54,
    borderRadius: 16,
    backgroundColor: BRAND,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  buttonBusy: {
    opacity: 0.8,
  },
  primaryText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '700',
  },
  secondaryButton: {
    marginTop: 6,
    alignSelf: 'stretch',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryText: {
    color: '#6B4423',
    fontSize: 16,
    fontWeight: '600',
  },
});
