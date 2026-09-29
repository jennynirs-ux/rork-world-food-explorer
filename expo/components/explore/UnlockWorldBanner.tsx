import { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronRight, Globe2 } from 'lucide-react-native';
import { exploreStrings } from '@/lib/strings/explore';
import { fill, useStrings } from '@/lib/strings';
import colors from '@/constants/colors';

type UnlockWorldBannerProps = {
  unlocked: number;
  total: number;
  onPress: () => void;
};

/** Slim, low-key upsell for users who don't own the whole world yet. */
function UnlockWorldBannerComponent({ unlocked, total, onPress }: UnlockWorldBannerProps) {
  const s = useStrings(exploreStrings);
  const countText = fill(s.unlockedCount, { unlocked, total });
  const progress = total > 0 ? Math.min(1, unlocked / total) : 0;

  return (
    <TouchableOpacity
      style={styles.banner}
      onPress={onPress}
      activeOpacity={0.8}
      accessibilityRole="button"
      accessibilityLabel={`${countText}. ${s.unlockWorld}`}
      accessibilityHint={s.unlockHint}
    >
      <View style={styles.iconWrap}>
        <Globe2 size={16} color={colors.brand} />
      </View>
      <View style={styles.body}>
        <Text style={styles.count} numberOfLines={1}>{countText}</Text>
        <Text style={styles.cta} numberOfLines={1}>{s.unlockWorld}</Text>
      </View>
      <ChevronRight size={18} color={colors.brand} />
      <View style={styles.track}>
        <View style={[styles.trackFill, { width: `${Math.max(2, progress * 100)}%` }]} />
      </View>
    </TouchableOpacity>
  );
}

const UnlockWorldBanner = memo(UnlockWorldBannerComponent);
export default UnlockWorldBanner;

const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 14,
    backgroundColor: '#FFF8F2',
    borderWidth: 1,
    borderColor: '#F5E2D3',
    overflow: 'hidden',
  },
  iconWrap: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FFEBDD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    gap: 1,
  },
  count: {
    fontSize: 12,
    fontWeight: '500' as const,
    color: colors.textSecondary,
  },
  cta: {
    fontSize: 14,
    fontWeight: '700' as const,
    color: colors.text,
  },
  track: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 3,
    backgroundColor: '#F7E6D8',
    pointerEvents: 'none',
  },
  trackFill: {
    height: '100%',
    backgroundColor: colors.brand,
    opacity: 0.7,
  },
});
