import { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Flame } from 'lucide-react-native';
import { exploreStrings } from '@/lib/strings/explore';
import { fill, useStrings } from '@/lib/strings';
import colors from '@/constants/colors';

function StreakChipComponent({ count }: { count: number }) {
  const s = useStrings(exploreStrings);
  return (
    <View
      style={styles.chip}
      accessible
      accessibilityRole="text"
      accessibilityLabel={fill(s.streak, { count })}
    >
      <Flame size={16} color={colors.brand} fill="#FFB38A" />
      <Text style={styles.count}>{count}</Text>
    </View>
  );
}

const StreakChip = memo(StreakChipComponent);
export default StreakChip;

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
    backgroundColor: '#FFF1E8',
    borderWidth: 1,
    borderColor: '#FFD9C2',
  },
  count: {
    fontSize: 15,
    fontWeight: '700' as const,
    color: colors.brand,
    fontVariant: ['tabular-nums'],
  },
});
