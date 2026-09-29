import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Lock, Check } from 'lucide-react-native';
import colors from '@/constants/colors';

type LockedPanelProps = {
  title: string;
  body: string;
  perks?: string[];
  ctaLabel: string;
  onPress: () => void;
  testID?: string;
};

/** Friendly "this part is locked" card with what you get and one CTA. */
export default function LockedPanel({ title, body, perks = [], ctaLabel, onPress, testID }: LockedPanelProps) {
  return (
    <View style={styles.panel} testID={testID}>
      <View style={styles.iconCircle}>
        <Lock size={22} color={colors.terracotta} />
      </View>
      <Text style={styles.title} accessibilityRole="header">{title}</Text>
      <Text style={styles.body}>{body}</Text>

      {perks.length > 0 && (
        <View style={styles.perks}>
          {perks.map((perk) => (
            <View key={perk} style={styles.perkRow}>
              <View style={styles.perkCheck}>
                <Check size={12} color="#FFF" strokeWidth={3} />
              </View>
              <Text style={styles.perkText}>{perk}</Text>
            </View>
          ))}
        </View>
      )}

      <TouchableOpacity
        style={styles.cta}
        onPress={onPress}
        activeOpacity={0.85}
        accessibilityRole="button"
        accessibilityLabel={ctaLabel}
      >
        <Lock size={16} color="#FFF" />
        <Text style={styles.ctaText} numberOfLines={1}>{ctaLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    marginHorizontal: 20,
    marginTop: 8,
    marginBottom: 20,
    padding: 24,
    borderRadius: 20,
    backgroundColor: '#FFF9F5',
    borderWidth: 1.5,
    borderColor: colors.sand,
    alignItems: 'center',
  },
  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.sand,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 6,
  },
  body: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  perks: {
    alignSelf: 'stretch',
    gap: 10,
    marginTop: 18,
  },
  perkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  perkCheck: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.sage,
    justifyContent: 'center',
    alignItems: 'center',
  },
  perkText: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  cta: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 22,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    backgroundColor: colors.terracotta,
  },
  ctaText: {
    flexShrink: 1,
    fontSize: 16,
    fontWeight: '700' as const,
    color: '#FFF',
  },
});
