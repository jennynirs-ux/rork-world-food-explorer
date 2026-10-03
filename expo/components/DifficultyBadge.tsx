import { View, Text, StyleSheet } from 'react-native';
import { getDifficultyInfo } from '@/lib/nutrition';
import { useTranslation } from '@/lib/i18n';

const LABEL_KEYS = { easy: 'difficultyEasy', medium: 'difficultyMedium', hard: 'difficultyHard' } as const;

interface DifficultyBadgeProps {
  difficulty?: 'easy' | 'medium' | 'hard';
  size?: 'small' | 'normal';
}

export default function DifficultyBadge({ difficulty, size = 'normal' }: DifficultyBadgeProps) {
  const { t } = useTranslation();
  const info = getDifficultyInfo(difficulty);
  const label = t.ui[LABEL_KEYS[difficulty ?? 'medium']];
  const isSmall = size === 'small';

  return (
    <View style={[styles.badge, { backgroundColor: info.bgColor }, isSmall && styles.badgeSmall]}>
      <Text style={[styles.label, { color: info.color }, isSmall && styles.labelSmall]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  badgeSmall: {
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 6,
  },
  label: {
    fontSize: 13,
    fontWeight: '600' as const,
  },
  labelSmall: {
    fontSize: 11,
  },
});
