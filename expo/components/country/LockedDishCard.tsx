import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Clock, ChefHat, Lock, ChevronRight } from 'lucide-react-native';
import { FoodImage } from '@/components/FoodImage';
import DifficultyBadge from '@/components/DifficultyBadge';
import colors from '@/constants/colors';
import type { Recipe } from '@/types';
import type { TranslatedRecipe } from '@/lib/use-translated-country';

type LockedDishCardProps = {
  sectionTitle: string;
  recipe: TranslatedRecipe;
  difficulty?: Recipe['difficulty'];
  showDietType?: boolean;
  minutesLabel: string;
  statsLabel: string;
  hint: string;
  onPress: () => void;
};

/** Recipe teaser for a locked country: photo and summary, recipe body hidden. */
export default function LockedDishCard({
  sectionTitle,
  recipe,
  difficulty,
  showDietType,
  minutesLabel,
  statsLabel,
  hint,
  onPress,
}: LockedDishCardProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{sectionTitle}</Text>
      <TouchableOpacity
        style={styles.card}
        onPress={onPress}
        activeOpacity={0.85}
        accessibilityRole="button"
        accessibilityLabel={`${recipe.name}. ${statsLabel}`}
        accessibilityHint={hint}
      >
        <FoodImage uri={recipe.imageUrl} alt={String(recipe.name)} style={styles.image} type="food" />
        <View style={styles.body}>
          <Text style={styles.name}>{recipe.name}</Text>
          <Text style={styles.description}>{recipe.description}</Text>

          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Clock size={16} color={colors.gray500} />
              <Text style={styles.infoText}>
                {recipe.cookingTime} {minutesLabel}
              </Text>
            </View>
            {showDietType && !!recipe.dietType && (
              <View style={styles.infoItem}>
                <ChefHat size={16} color={colors.gray500} />
                <Text style={styles.infoText}>{recipe.dietType}</Text>
              </View>
            )}
            <DifficultyBadge difficulty={difficulty} size="small" />
          </View>
        </View>

        <View style={styles.lockedStrip}>
          <Lock size={15} color={colors.terracotta} />
          <Text style={styles.lockedStripText} numberOfLines={1}>{statsLabel}</Text>
          <ChevronRight size={18} color={colors.terracotta} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700' as const,
    color: colors.text,
    marginBottom: 16,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    height: 170,
    width: '100%',
  },
  body: {
    padding: 20,
    paddingBottom: 4,
  },
  name: {
    fontSize: 22,
    fontWeight: '700' as const,
    color: colors.text,
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    color: colors.gray500,
    lineHeight: 22,
    marginBottom: 14,
  },
  infoRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 16,
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  infoText: {
    fontSize: 14,
    color: colors.gray500,
  },
  lockedStrip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#FFF9F5',
    borderTopWidth: 1,
    borderTopColor: colors.divider,
  },
  lockedStripText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600' as const,
    color: colors.terracotta,
  },
});
