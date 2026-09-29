import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Lock, ChevronRight } from 'lucide-react-native';
import colors from '@/constants/colors';

type UnlockBarProps = {
  title: string;
  /** e.g. "+45 more countries · from 29 kr"; hidden when empty. */
  detail?: string;
  onPress: () => void;
};

/** Height of the bar above the safe-area inset, for bottom spacing in scroll views. */
export const UNLOCK_BAR_HEIGHT = 96;

/** Sticky bottom call to action shown on locked country pages. */
export default function UnlockBar({ title, detail, onPress }: UnlockBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.wrapper} pointerEvents="box-none">
      <LinearGradient
        colors={['rgba(245, 241, 235, 0)', colors.background]}
        style={styles.fade}
        pointerEvents="none"
      />
      <View style={[styles.bar, { paddingBottom: Math.max(insets.bottom, 12) }]}>
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
          activeOpacity={0.88}
          accessibilityRole="button"
          accessibilityLabel={detail ? `${title}. ${detail}` : title}
          testID="country-unlock-cta"
        >
          <View style={styles.lockCircle}>
            <Lock size={18} color={colors.terracotta} />
          </View>
          <View style={styles.textColumn}>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
            {!!detail && (
              <Text style={styles.detail} numberOfLines={1}>{detail}</Text>
            )}
          </View>
          <ChevronRight size={22} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 20,
  },
  fade: {
    height: 24,
  },
  bar: {
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    paddingTop: 4,
    alignItems: 'center',
  },
  button: {
    width: '100%',
    maxWidth: 560,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: colors.terracotta,
    borderRadius: 18,
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 14,
    boxShadow: '0px 6px 18px rgba(198, 93, 59, 0.35)',
    elevation: 6,
  },
  lockCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColumn: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: '700' as const,
    color: '#FFF',
  },
  detail: {
    fontSize: 13,
    fontWeight: '500' as const,
    color: 'rgba(255, 255, 255, 0.88)',
    marginTop: 2,
  },
});
