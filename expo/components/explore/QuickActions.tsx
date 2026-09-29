import { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { BookOpen, ChefHat } from 'lucide-react-native';
import { useTranslation } from '@/lib/i18n';
import { hapticLight } from '@/lib/haptics';
import colors from '@/constants/colors';

/** "What can I cook?" and "Collections" shortcuts on the Explore map. */
function QuickActionsComponent() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <View style={styles.quickActions}>
      <TouchableOpacity
        style={[styles.quickActionButton, styles.quickActionCook]}
        onPress={() => { hapticLight(); router.push('/ingredient-match'); }}
        accessibilityLabel={t.explore.whatCanICook}
        accessibilityRole="button"
      >
        <ChefHat size={18} color="#E8590C" />
        <View style={styles.quickActionTextContainer}>
          <Text style={styles.quickActionText}>{t.explore.whatCanICook}</Text>
          <Text style={styles.quickActionSubtitle}>{t.ui.matchIngredients}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.quickActionButton, styles.quickActionCollections]}
        onPress={() => { hapticLight(); router.push('/collections'); }}
        accessibilityLabel={t.explore.collections}
        accessibilityRole="button"
      >
        <BookOpen size={18} color="#16A34A" />
        <View style={styles.quickActionTextContainer}>
          <Text style={styles.quickActionText}>{t.explore.collections}</Text>
          <Text style={styles.quickActionSubtitle}>{t.ui.browseCollections}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const QuickActions = memo(QuickActionsComponent);
export default QuickActions;

const styles = StyleSheet.create({
  quickActions: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 8,
  },
  quickActionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
    borderWidth: 1,
  },
  quickActionCook: {
    backgroundColor: '#FFF3ED',
    borderColor: '#FDDCC8',
  },
  quickActionCollections: {
    backgroundColor: '#F0FDF4',
    borderColor: '#D1FAE5',
  },
  quickActionTextContainer: {
    flexShrink: 1,
  },
  quickActionText: {
    fontSize: 13,
    fontWeight: '600' as const,
    color: colors.text,
  },
  quickActionSubtitle: {
    fontSize: 11,
    color: colors.gray400,
    marginTop: 1,
  },
});
