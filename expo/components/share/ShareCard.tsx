import { Fragment, useCallback, useEffect, useRef, useState, type ReactElement } from 'react';
import { View, Text, Image, StyleSheet, Platform, type TextProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Award, ChefHat, Flame, Globe, Sparkles, Star, Trophy, type LucideIcon } from 'lucide-react-native';
import { useTranslation } from '@/lib/i18n';
import { fill, pickStrings } from '@/lib/strings';
import { selectPlural, shareStrings, type ShareStrings } from '@/lib/strings/share';
import { APP_LINK_LABEL, APP_NAME, storeLine } from '@/lib/share';
import { canShareImages, captureCard, shareImageFile } from './capture';

/**
 * 9:16 story-format share cards (Instagram/TikTok Stories, messages).
 *
 * The card is laid out at 360×640 pt and exported at 1080×1920 px. Key content
 * stays clear of the top ~60 pt and bottom ~40 pt that Stories cover with UI.
 *
 *   const { shareCard, shareCardHost, isSharing } = useShareCard();
 *   shareCard({ variant: 'badge', name, description, icon }, () => shareBadge({ name, description }, language));
 *   ...
 *   {shareCardHost}   // render once, anywhere in the screen that stays mounted while sharing
 */

export const CARD_WIDTH = 360;
export const CARD_HEIGHT = 640;
const EXPORT_SIZE = { width: 1080, height: 1920 };
/** Max passport stamps on the progress card (two rows of eight). */
export const PASSPORT_MAX_FLAGS = 16;
/** How long to wait for images before capturing anyway. */
const READY_TIMEOUT_MS = 4000;

const INK = '#2D1B00';
const INK_MUTED = '#7A6450';
const BRAND = '#FF6B35';
const TERRACOTTA = '#C65D3B';
const CREAM = '#FFF6EC';
const PEACH = '#FFDCC2';
const GOLD = '#FFC857';

const APP_ICON = require('@/assets/images/icon.png');

export type ProgressCardData = {
  variant: 'progress';
  /** Countries with at least one cooked dish — the headline number. */
  cookedCountries: number;
  visitedCountries: number;
  completedCountries: number;
  totalCountries: number;
  dishesCooked: number;
  streak: number;
  /** Emoji flags, see selectPassportFlags() in lib/share.ts */
  flags: string[];
  /** Extra countries not shown as flags ("+N"). */
  moreFlags: number;
};

export type CookedCardData = {
  variant: 'cooked';
  dishName: string;
  countryName: string;
  flag: string;
  /** The user's photo, or the recipe image. Without one a flag illustration is shown. */
  imageUri?: string | null;
};

export type BadgeCardData = {
  variant: 'badge';
  /** Already localized. */
  name: string;
  description: string;
  icon?: LucideIcon;
  earnedDate?: string;
};

export type ShareCardData = ProgressCardData | CookedCardData | BadgeCardData;

/** Text that ignores the system font scale, so the fixed-size card never overflows. */
function T(props: TextProps) {
  return <Text allowFontScaling={false} {...props} />;
}

function formatCardDate(iso: string | undefined, lang: string): string {
  if (!iso) return '';
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  try {
    return date.toLocaleDateString(lang, { day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return date.toLocaleDateString();
  }
}

// ---------------------------------------------------------------------------
// Shared pieces
// ---------------------------------------------------------------------------

function BrandFooter({
  tone,
  s,
  lang,
  onIconSettled,
}: {
  tone: 'light' | 'dark';
  s: ShareStrings;
  lang: string;
  onIconSettled: () => void;
}) {
  const light = tone === 'light';
  return (
    <View style={styles.footer}>
      <View style={[styles.footerDivider, { backgroundColor: light ? 'rgba(255,255,255,0.28)' : 'rgba(45,27,0,0.12)' }]} />
      <View style={styles.footerRow}>
        <Image source={APP_ICON} style={styles.footerIcon} fadeDuration={0} onLoadEnd={onIconSettled} />
        <View style={styles.footerText}>
          <T style={[styles.footerName, { color: light ? '#FFF' : INK }]} numberOfLines={1}>{APP_NAME}</T>
          <T style={[styles.footerCta, { color: light ? 'rgba(255,255,255,0.85)' : INK_MUTED }]} numberOfLines={1}>
            {s.footerCta}
          </T>
        </View>
      </View>
      <T style={[styles.footerStore, { color: light ? 'rgba(255,255,255,0.9)' : INK }]} numberOfLines={1}>
        {storeLine(lang)}
      </T>
      <T
        style={[styles.footerLink, { color: light ? 'rgba(255,255,255,0.7)' : INK_MUTED }]}
        numberOfLines={1}
        adjustsFontSizeToFit
        minimumFontScale={0.6}
      >
        {APP_LINK_LABEL}
      </T>
    </View>
  );
}

function StatTile({
  icon: Icon,
  tint,
  value,
  total,
  label,
}: {
  icon: LucideIcon;
  tint: string;
  value: number;
  total?: number;
  label: string;
}) {
  return (
    <View style={styles.statTile}>
      <View style={styles.statTop}>
        <View style={[styles.statIcon, { backgroundColor: `${tint}22` }]}>
          <Icon size={16} color={tint} strokeWidth={2.4} />
        </View>
        <T style={styles.statValue} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.6}>
          {value}
          {total !== undefined && <T style={styles.statTotal}>/{total}</T>}
        </T>
      </View>
      <T style={styles.statLabel} numberOfLines={2}>{label}</T>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Variants
// ---------------------------------------------------------------------------

type VariantProps<D> = { data: D; s: ShareStrings; lang: string; settle: (key: string) => void };

function ProgressCard({ data, s, lang, settle }: VariantProps<ProgressCardData>) {
  const headline = data.cookedCountries > 0
    ? selectPlural(s.progressHeadline, data.cookedCountries, lang)
    : s.progressHeadlineZero;
  const parts = headline.split('{n}');

  return (
    <LinearGradient colors={[CREAM, PEACH] as const} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.card}>
      <View style={[styles.blob, styles.blobTopRight]} />
      <View style={[styles.blob, styles.blobBottomLeft]} />

      <View style={styles.progressBody}>
        <View style={styles.kickerPill}>
          <Globe size={13} color={BRAND} strokeWidth={2.5} />
          <T style={styles.kickerText} numberOfLines={1}>{s.progressKicker}</T>
        </View>

        <T style={styles.headline} numberOfLines={4} adjustsFontSizeToFit minimumFontScale={0.75}>
          {parts.map((part, i) => (
            <Fragment key={i}>
              {i > 0 && <T style={styles.headlineNumber}>{data.cookedCountries}</T>}
              {part}
            </Fragment>
          ))}
        </T>

        <View style={styles.statGrid}>
          <StatTile icon={Globe} tint={BRAND} value={data.visitedCountries} total={data.totalCountries} label={s.statExplored} />
          <StatTile icon={Trophy} tint="#D99100" value={data.completedCountries} total={data.totalCountries} label={s.statCompleted} />
          <StatTile icon={ChefHat} tint={TERRACOTTA} value={data.dishesCooked} label={s.statDishes} />
          <StatTile icon={Flame} tint="#F2542D" value={data.streak} label={s.statStreak} />
        </View>

        {data.flags.length > 0 && (
          <View style={styles.passport}>
            <View style={styles.passportHeader}>
              <T style={styles.sectionLabel} numberOfLines={1}>{s.passportTitle}</T>
              {data.moreFlags > 0 && (
                <View style={styles.morePill}>
                  <T style={styles.morePillText} numberOfLines={1}>+{data.moreFlags}</T>
                </View>
              )}
            </View>
            <View style={styles.flagWrap}>
              {data.flags.map((flag, i) => (
                <View key={`${flag}-${i}`} style={styles.stamp}>
                  <T style={styles.stampFlag}>{flag}</T>
                </View>
              ))}
            </View>
          </View>
        )}
      </View>

      <BrandFooter tone="dark" s={s} lang={lang} onIconSettled={() => settle('icon')} />
    </LinearGradient>
  );
}

/** Long dish names step down in size (adjustsFontSizeToFit alone isn't reliable everywhere). */
function dishNameSize(name: string) {
  if (name.length > 44) return { fontSize: 25, lineHeight: 29 };
  if (name.length > 26) return { fontSize: 30, lineHeight: 34 };
  return null;
}

function CookedCard({ data, s, lang, settle }: VariantProps<CookedCardData>) {
  const [imageFailed, setImageFailed] = useState(false);
  const hasImage = !!data.imageUri && !imageFailed;

  return (
    <View style={[styles.card, styles.cookedCard]}>
      {hasImage ? (
        <Image
          source={{ uri: data.imageUri ?? undefined }}
          style={StyleSheet.absoluteFill}
          resizeMode="cover"
          fadeDuration={0}
          onError={() => {
            setImageFailed(true);
            settle('hero');
          }}
          onLoadEnd={() => settle('hero')}
        />
      ) : (
        <LinearGradient colors={[BRAND, TERRACOTTA] as const} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill}>
          <View style={styles.plateArea}>
            <View style={styles.plateOuter}>
              <View style={styles.plateInner}>
                <T style={styles.plateFlag}>{data.flag}</T>
              </View>
            </View>
          </View>
        </LinearGradient>
      )}

      <LinearGradient colors={['rgba(20,10,0,0.55)', 'rgba(20,10,0,0)'] as const} style={styles.topShade} />
      <LinearGradient
        colors={['rgba(20,10,0,0)', 'rgba(20,10,0,0.72)', 'rgba(20,10,0,0.92)'] as const}
        locations={[0, 0.45, 1]}
        style={styles.bottomShade}
      />

      <View style={styles.cookedTop}>
        <View style={styles.glassPill}>
          <ChefHat size={13} color="#FFF" strokeWidth={2.5} />
          <T style={styles.glassPillText} numberOfLines={1}>{APP_NAME}</T>
        </View>
      </View>

      <View style={styles.cookedBottom}>
        <T style={styles.cookedKicker} numberOfLines={1}>{s.cookedKicker}</T>
        <T
          style={[styles.cookedDish, dishNameSize(data.dishName)]}
          numberOfLines={3}
          adjustsFontSizeToFit
          minimumFontScale={0.6}
        >
          {data.dishName}
        </T>
        <View style={styles.countryPill}>
          <T style={styles.countryPillFlag}>{data.flag}</T>
          <T style={styles.countryPillText} numberOfLines={1}>{data.countryName}</T>
        </View>
        <BrandFooter tone="light" s={s} lang={lang} onIconSettled={() => settle('icon')} />
      </View>
    </View>
  );
}

function BadgeCard({ data, s, lang, settle }: VariantProps<BadgeCardData>) {
  const Icon = data.icon ?? Award;
  const earned = formatCardDate(data.earnedDate, lang);

  return (
    <LinearGradient
      colors={['#FF9A5A', BRAND, TERRACOTTA] as const}
      locations={[0, 0.5, 1]}
      start={{ x: 0.2, y: 0 }}
      end={{ x: 0.8, y: 1 }}
      style={styles.card}
    >
      <View style={styles.badgeBody}>
        <View style={styles.glassPill}>
          <Sparkles size={13} color={GOLD} strokeWidth={2.5} />
          <T style={styles.glassPillText} numberOfLines={1}>{s.badgeKicker}</T>
        </View>

        <View style={styles.medalArea}>
          <View style={[styles.ring, styles.ringLarge]} />
          <View style={[styles.ring, styles.ringMedium]} />
          <View style={styles.medalOuter}>
            <View style={styles.medalInner}>
              <Icon size={76} color={BRAND} strokeWidth={1.9} />
            </View>
          </View>
          <View style={[styles.spark, { top: 18, left: 58 }]}><Star size={22} color={GOLD} fill={GOLD} /></View>
          <View style={[styles.spark, { top: 44, right: 50 }]}><Sparkles size={26} color="#FFF" /></View>
          <View style={[styles.spark, { bottom: 26, left: 74 }]}><Sparkles size={18} color="#FFF" /></View>
          <View style={[styles.spark, { bottom: 14, right: 70 }]}><Star size={16} color={GOLD} fill={GOLD} /></View>
        </View>

        <T style={styles.badgeName} numberOfLines={2} adjustsFontSizeToFit minimumFontScale={0.7}>{data.name}</T>
        {!!data.description && (
          <T style={styles.badgeDescription} numberOfLines={3}>{data.description}</T>
        )}
        {!!earned && (
          <View style={styles.datePill}>
            <T style={styles.datePillText} numberOfLines={1}>{fill(s.earnedOn, { date: earned })}</T>
          </View>
        )}
        <T style={styles.badgeUnlocked} numberOfLines={1}>{s.badgeFooter}</T>
      </View>

      <BrandFooter tone="light" s={s} lang={lang} onIconSettled={() => settle('icon')} />
    </LinearGradient>
  );
}

// ---------------------------------------------------------------------------
// Public component + hook
// ---------------------------------------------------------------------------

export type ShareCardProps = {
  data: ShareCardData;
  language: string;
  /** Called once the card is laid out and its images have loaded (or failed). */
  onReady?: () => void;
};

export function ShareCard({ data, language, onReady }: ShareCardProps) {
  const s = pickStrings(shareStrings, language);
  const pendingRef = useRef<Set<string> | null>(null);
  if (pendingRef.current === null) {
    const keys = ['layout', 'icon'];
    if (data.variant === 'cooked' && data.imageUri) keys.push('hero');
    pendingRef.current = new Set(keys);
  }
  const firedRef = useRef(false);
  const onReadyRef = useRef(onReady);
  useEffect(() => {
    onReadyRef.current = onReady;
  }, [onReady]);

  const settle = useCallback((key: string) => {
    const pending = pendingRef.current;
    if (!pending) return;
    pending.delete(key);
    if (pending.size === 0 && !firedRef.current) {
      firedRef.current = true;
      onReadyRef.current?.();
    }
  }, []);

  let content: ReactElement;
  switch (data.variant) {
    case 'progress':
      content = <ProgressCard data={data} s={s} lang={language} settle={settle} />;
      break;
    case 'cooked':
      content = <CookedCard data={data} s={s} lang={language} settle={settle} />;
      break;
    case 'badge':
      content = <BadgeCard data={data} s={s} lang={language} settle={settle} />;
      break;
  }

  return (
    <View style={styles.frame} collapsable={false} onLayout={() => settle('layout')}>
      {content}
    </View>
  );
}

export type ShareCardResult = 'image' | 'text' | 'failed';

type ShareJob = { id: number; data: ShareCardData };

const wait = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms));
const nextFrames = () =>
  new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));

/**
 * Renders a share card off-screen, snapshots it and opens the share sheet.
 * On web, when sharing files isn't available, or if anything fails, it calls
 * `fallback` (a plain-text share from lib/share.ts) instead.
 *
 * Render `shareCardHost` somewhere in the screen that stays mounted while the
 * share is in progress (inside a Modal if the share starts from one).
 */
export function useShareCard() {
  const { language } = useTranslation();
  const [job, setJob] = useState<ShareJob | null>(null);
  const [isSharing, setIsSharing] = useState(false);
  const cardRef = useRef<View>(null);
  const readyRef = useRef<(() => void) | null>(null);
  const busyRef = useRef(false);
  const mountedRef = useRef(true);
  const dialogTitle = pickStrings(shareStrings, language).shareDialogTitle;

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const shareCard = useCallback(
    async (data: ShareCardData, fallback: () => Promise<unknown>): Promise<ShareCardResult> => {
      if (busyRef.current) return 'failed';
      busyRef.current = true;
      setIsSharing(true);

      const shareAsText = async (): Promise<ShareCardResult> => {
        try {
          await fallback();
          return 'text';
        } catch (error) {
          if (__DEV__) console.warn('[share] text share failed', error);
          return 'failed';
        }
      };

      try {
        if (Platform.OS === 'web' || !(await canShareImages())) {
          return await shareAsText();
        }
        const ready = new Promise<void>(resolve => {
          readyRef.current = resolve;
        });
        setJob({ id: Date.now(), data });
        await Promise.race([ready, wait(READY_TIMEOUT_MS)]);
        await nextFrames();
        if (!mountedRef.current) return 'failed';
        const uri = await captureCard(cardRef, EXPORT_SIZE);
        await shareImageFile(uri, dialogTitle);
        return 'image';
      } catch (error) {
        if (__DEV__) console.warn('[share] image card failed, falling back to text', error);
        return await shareAsText();
      } finally {
        readyRef.current = null;
        busyRef.current = false;
        if (mountedRef.current) {
          setJob(null);
          setIsSharing(false);
        }
      }
    },
    [dialogTitle],
  );

  const handleReady = useCallback(() => {
    readyRef.current?.();
  }, []);

  const shareCardHost = job ? (
    <View
      key={job.id}
      style={styles.offscreen}
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
    >
      <View ref={cardRef} collapsable={false}>
        <ShareCard data={job.data} language={language} onReady={handleReady} />
      </View>
    </View>
  ) : null;

  return { shareCard, shareCardHost, isSharing };
}

// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  offscreen: {
    position: 'absolute',
    pointerEvents: 'none',
    top: 0,
    left: -CARD_WIDTH * 4,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
  frame: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    overflow: 'hidden',
    paddingHorizontal: 28,
    paddingBottom: 30,
  },

  // Footer
  footer: {
    marginTop: 'auto',
  },
  footerDivider: {
    height: StyleSheet.hairlineWidth * 2,
    marginBottom: 12,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  footerIcon: {
    width: 38,
    height: 38,
    borderRadius: 10,
  },
  footerText: {
    flex: 1,
  },
  footerName: {
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
  footerCta: {
    fontSize: 12,
    marginTop: 1,
  },
  footerStore: {
    fontSize: 11,
    fontWeight: '700',
    marginTop: 10,
  },
  footerLink: {
    fontSize: 10,
    marginTop: 2,
  },

  // Progress
  blob: {
    position: 'absolute',
    borderRadius: 999,
  },
  blobTopRight: {
    width: 260,
    height: 260,
    top: -90,
    right: -110,
    backgroundColor: 'rgba(255,107,53,0.14)',
  },
  blobBottomLeft: {
    width: 200,
    height: 200,
    bottom: 90,
    left: -120,
    backgroundColor: 'rgba(107,122,58,0.10)',
  },
  progressBody: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 44,
  },
  kickerPill: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#FFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    maxWidth: '100%',
  },
  kickerText: {
    fontSize: 11,
    fontWeight: '800',
    color: BRAND,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  headline: {
    marginTop: 14,
    fontSize: 28,
    lineHeight: 33,
    fontWeight: '800',
    color: INK,
    letterSpacing: -0.4,
  },
  headlineNumber: {
    color: BRAND,
  },
  statGrid: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  statTile: {
    width: (CARD_WIDTH - 56 - 10) / 2,
    backgroundColor: 'rgba(255,255,255,0.88)',
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 11,
  },
  statTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statValue: {
    flex: 1,
    fontSize: 28,
    fontWeight: '800',
    color: INK,
    letterSpacing: -0.5,
  },
  statTotal: {
    fontSize: 15,
    fontWeight: '600',
    color: INK_MUTED,
    letterSpacing: 0,
  },
  statLabel: {
    marginTop: 4,
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '600',
    color: INK_MUTED,
  },
  passport: {
    marginTop: 20,
  },
  passportHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  sectionLabel: {
    flexShrink: 1,
    fontSize: 11,
    fontWeight: '800',
    color: INK_MUTED,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  morePill: {
    backgroundColor: BRAND,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  morePillText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#FFF',
  },
  flagWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  stamp: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(255,107,53,0.35)',
  },
  stampFlag: {
    fontSize: 17,
    lineHeight: Platform.OS === 'android' ? 22 : 20,
    textAlign: 'center',
  },

  // Cooked
  cookedCard: {
    backgroundColor: TERRACOTTA,
    paddingHorizontal: 0,
    paddingBottom: 0,
  },
  plateArea: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 120,
  },
  plateOuter: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plateInner: {
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: CREAM,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plateFlag: {
    fontSize: 88,
    lineHeight: Platform.OS === 'android' ? 110 : 104,
    textAlign: 'center',
  },
  topShade: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 150,
  },
  bottomShade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 380,
  },
  cookedTop: {
    paddingTop: 56,
    paddingHorizontal: 24,
  },
  glassPill: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.35)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    maxWidth: '100%',
  },
  glassPillText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#FFF',
    letterSpacing: 1.1,
    textTransform: 'uppercase',
  },
  cookedBottom: {
    marginTop: 'auto',
    paddingHorizontal: 24,
    paddingBottom: 30,
  },
  cookedKicker: {
    fontSize: 13,
    fontWeight: '800',
    color: '#FFB48F',
    letterSpacing: 1.4,
    textTransform: 'uppercase',
  },
  cookedDish: {
    marginTop: 4,
    fontSize: 36,
    lineHeight: 40,
    fontWeight: '800',
    color: '#FFF',
    letterSpacing: -0.6,
  },
  countryPill: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 12,
    marginBottom: 18,
    backgroundColor: '#FFF',
    borderRadius: 999,
    paddingLeft: 10,
    paddingRight: 14,
    paddingVertical: 6,
    maxWidth: '100%',
  },
  countryPillFlag: {
    fontSize: 18,
    lineHeight: Platform.OS === 'android' ? 24 : 22,
  },
  countryPillText: {
    flexShrink: 1,
    fontSize: 15,
    fontWeight: '700',
    color: INK,
  },

  // Badge
  badgeBody: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  medalArea: {
    width: 300,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  ring: {
    position: 'absolute',
    borderRadius: 999,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.18)',
  },
  ringLarge: {
    width: 250,
    height: 250,
  },
  ringMedium: {
    width: 204,
    height: 204,
    borderColor: 'rgba(255,255,255,0.28)',
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  medalOuter: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: GOLD,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#FFF',
  },
  medalInner: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: CREAM,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spark: {
    position: 'absolute',
  },
  badgeName: {
    fontSize: 32,
    lineHeight: 37,
    fontWeight: '800',
    color: '#FFF',
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  badgeDescription: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 21,
    color: 'rgba(255,255,255,0.92)',
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  datePill: {
    marginTop: 14,
    backgroundColor: 'rgba(45,27,0,0.22)',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  datePillText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFF',
  },
  badgeUnlocked: {
    marginTop: 14,
    fontSize: 13,
    fontWeight: '700',
    color: '#FFE3C7',
  },
});
