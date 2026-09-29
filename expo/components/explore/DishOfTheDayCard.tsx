import { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CakeSlice, ChefHat, ChevronRight, Clock, Lock } from 'lucide-react-native';
import { FoodImage } from '@/components/FoodImage';
import FlagEmoji from '@/components/FlagEmoji';
import { exploreStrings } from '@/lib/strings/explore';
import { fill, useStrings } from '@/lib/strings';
import type { DailyDishKind } from '@/lib/daily';
import colors from '@/constants/colors';

const IMAGE_SIZE = 88;

type DishOfTheDayCardProps = {
  dishName: string;
  countryName: string;
  flag: string;
  imageUrl?: string;
  cookingTime: number;
  kind: DailyDishKind;
  /** Locked countries still show, with a "Preview" badge (the country page shows a teaser). */
  isLocked: boolean;
  onPress: () => void;
};

function DishOfTheDayCardComponent({
  dishName,
  countryName,
  flag,
  imageUrl,
  cookingTime,
  kind,
  isLocked,
  onPress,
}: DishOfTheDayCardProps) {
  const s = useStrings(exploreStrings);
  const label = kind === 'dessert' ? s.dessertOfTheDay : s.dishOfTheDay;
  const minutes = fill(s.minutes, { minutes: cookingTime });
  const LabelIcon = kind === 'dessert' ? CakeSlice : ChefHat;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.85}
      accessibilityRole="button"
      accessibilityLabel={`${label}: ${dishName}, ${countryName}, ${minutes}${isLocked ? `, ${s.preview}` : ''}`}
      accessibilityHint={isLocked ? s.openPreviewHint : s.openRecipeHint}
    >
      <View style={styles.imageWrap}>
        <FoodImage
          uri={imageUrl}
          alt={dishName}
          type="food"
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
          style={styles.image}
        />
        {isLocked && (
          <View style={styles.previewBadge}>
            <Lock size={10} color="#FFF" />
            <Text style={styles.previewText} numberOfLines={1}>{s.preview}</Text>
          </View>
        )}
      </View>

      <View style={styles.body}>
        <View style={styles.labelRow}>
          <LabelIcon size={13} color={colors.brand} />
          <Text style={styles.label} numberOfLines={1}>{label}</Text>
        </View>
        <Text style={styles.dishName} numberOfLines={2}>{dishName}</Text>
        <View style={styles.metaRow}>
          <FlagEmoji flag={flag} size={15} />
          <Text style={styles.metaText} numberOfLines={1}>{countryName}</Text>
          <Text style={styles.metaDot}>·</Text>
          <Clock size={12} color={colors.gray500} />
          <Text style={styles.metaTime} numberOfLines={1}>{minutes}</Text>
        </View>
      </View>

      <ChevronRight size={18} color={colors.gray400} />
    </TouchableOpacity>
  );
}

const DishOfTheDayCard = memo(DishOfTheDayCardComponent);
export default DishOfTheDayCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 10,
    paddingRight: 12,
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 18,
    backgroundColor: colors.surface,
    boxShadow: '0px 4px 14px rgba(139, 69, 19, 0.10)',
    elevation: 3,
  },
  imageWrap: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: 14,
    overflow: 'hidden',
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  body: {
    flex: 1,
    gap: 4,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  label: {
    flexShrink: 1,
    fontSize: 11,
    fontWeight: '700' as const,
    color: colors.brand,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  // Full-width strip along the bottom of the photo (clipped by imageWrap's radius).
  previewBadge: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    paddingHorizontal: 4,
    paddingVertical: 3,
    backgroundColor: 'rgba(44, 28, 16, 0.7)',
  },
  previewText: {
    flexShrink: 1,
    fontSize: 10,
    fontWeight: '700' as const,
    color: '#FFF',
  },
  dishName: {
    fontSize: 17,
    fontWeight: '700' as const,
    color: colors.text,
    lineHeight: 21,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  metaText: {
    flexShrink: 1,
    fontSize: 13,
    color: colors.textSecondary,
  },
  metaDot: {
    fontSize: 13,
    color: colors.gray400,
  },
  metaTime: {
    fontSize: 13,
    color: colors.textSecondary,
  },
});
