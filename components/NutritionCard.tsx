import { View, Text, StyleSheet } from 'react-native';
import { Flame } from 'lucide-react-native';
import { NutritionInfo } from '@/types';
import colors from '@/constants/colors';

interface NutritionCardProps {
  nutrition: NutritionInfo;
  servingsMultiplier?: number;
}

function MacroBar({
  label,
  grams,
  color,
  maxGrams,
}: {
  label: string;
  grams: number;
  color: string;
  maxGrams: number;
}) {
  const pct = Math.min((grams / maxGrams) * 100, 100);

  return (
    <View style={styles.macroRow}>
      <Text style={styles.macroLabel}>{label}</Text>
      <View style={styles.barTrack}>
        <View style={[styles.barFill, { width: `${pct}%`, backgroundColor: color }]} />
      </View>
      <Text style={styles.macroValue}>{grams}g</Text>
    </View>
  );
}

export default function NutritionCard({ nutrition, servingsMultiplier = 1 }: NutritionCardProps) {
  if (!nutrition) return null;

  const cal = Math.round((nutrition.caloriesPerServing || 0) * servingsMultiplier);
  const protein = Math.round((nutrition.protein || 0) * servingsMultiplier);
  const carbs = Math.round((nutrition.carbs || 0) * servingsMultiplier);
  const fat = Math.round((nutrition.fat || 0) * servingsMultiplier);
  const fiber = nutrition.fiber ? Math.round(nutrition.fiber * servingsMultiplier) : null;

  // Max for bar scaling
  const maxGrams = Math.max(protein, carbs, fat, 1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Flame size={16} color={colors.terracotta} />
        <Text style={styles.title}>Nutrition per serving</Text>
      </View>

      <View style={styles.calorieRow}>
        <Text style={styles.calorieValue}>{cal}</Text>
        <Text style={styles.calorieUnit}>kcal</Text>
      </View>

      <View style={styles.macros}>
        <MacroBar label="Protein" grams={protein} color="#3B82F6" maxGrams={maxGrams} />
        <MacroBar label="Carbs" grams={carbs} color="#F59E0B" maxGrams={maxGrams} />
        <MacroBar label="Fat" grams={fat} color="#EF4444" maxGrams={maxGrams} />
        {fiber !== null && fiber > 0 && (
          <MacroBar label="Fiber" grams={fiber} color="#10B981" maxGrams={maxGrams} />
        )}
      </View>

      <Text style={styles.disclaimer}>Estimated values</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 14,
    marginTop: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: colors.text,
  },
  calorieRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
    marginBottom: 12,
  },
  calorieValue: {
    fontSize: 28,
    fontWeight: '700' as const,
    color: colors.text,
  },
  calorieUnit: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  macros: {
    gap: 8,
  },
  macroRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  macroLabel: {
    width: 52,
    fontSize: 13,
    color: colors.textSecondary,
  },
  barTrack: {
    flex: 1,
    height: 8,
    backgroundColor: colors.background,
    borderRadius: 4,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: 4,
  },
  macroValue: {
    width: 40,
    fontSize: 13,
    fontWeight: '600' as const,
    color: colors.text,
    textAlign: 'right',
  },
  disclaimer: {
    fontSize: 11,
    color: colors.textTertiary,
    marginTop: 8,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
