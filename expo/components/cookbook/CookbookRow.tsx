import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Clock, Heart, Lock, Star } from 'lucide-react-native';
import { FoodImage } from '@/components/FoodImage';
import FlagEmoji from '@/components/FlagEmoji';
import colors from '@/constants/colors';
import { fill } from '@/lib/strings';
import type { CookbookStrings } from '@/lib/strings/cookbook';
import type { CookbookEntry } from './cookbook-data';

const THUMB = 76;

type Props = {
  entry: CookbookEntry;
  strings: CookbookStrings;
  onPress: (entry: CookbookEntry) => void;
  /** Shown for saved recipes: a filled heart that un-saves. */
  onRemove?: (entry: CookbookEntry) => void;
  showRating?: boolean;
};

function Stars({ rating, label }: { rating: number; label: string }) {
  return (
    <View style={styles.stars} accessible accessibilityLabel={label}>
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={13}
          color={i <= rating ? '#F59E0B' : '#D1D5DB'}
          fill={i <= rating ? '#F59E0B' : 'transparent'}
        />
      ))}
    </View>
  );
}

function CookbookRowComponent({ entry, strings: s, onPress, onRemove, showRating }: Props) {
  const typeLabel = entry.isDessert ? s.dessert : s.mainDish;
  const a11yLabel = [entry.dishName, entry.countryName, typeLabel, entry.locked ? s.locked : null]
    .filter(Boolean)
    .join(', ');

  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.main}
        onPress={() => onPress(entry)}
        disabled={!entry.available}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityLabel={a11yLabel}
      >
        <View style={styles.thumbWrap}>
          <FoodImage
            uri={entry.imageUrl}
            alt={entry.dishName}
            type="food"
            width={THUMB}
            height={THUMB}
            style={styles.thumb}
          />
          {entry.locked && (
            <View style={styles.lockOverlay}>
              <Lock size={20} color="#FFF" />
            </View>
          )}
        </View>

        <View style={styles.info}>
          <Text style={styles.dish} numberOfLines={2}>{entry.dishName}</Text>
          <View style={styles.countryRow}>
            {!!entry.flag && <FlagEmoji flag={entry.flag} size={16} />}
            <Text style={styles.country} numberOfLines={1}>{entry.countryName}</Text>
          </View>
          <View style={styles.metaRow}>
            {typeof entry.cookingTime === 'number' && entry.cookingTime > 0 && (
              <View style={styles.meta}>
                <Clock size={12} color={colors.textTertiary} />
                <Text style={styles.metaText}>{fill(s.minutes, { count: entry.cookingTime })}</Text>
              </View>
            )}
            <View style={[styles.tag, entry.isDessert && styles.tagDessert]}>
              <Text style={[styles.tagText, entry.isDessert && styles.tagTextDessert]}>{typeLabel}</Text>
            </View>
            {entry.locked && (
              <View style={styles.lockedTag}>
                <Lock size={10} color={colors.textSecondary} />
                <Text style={styles.lockedTagText}>{s.locked}</Text>
              </View>
            )}
          </View>
          {showRating && !!entry.rating && (
            <Stars rating={entry.rating} label={fill(s.ratingA11y, { rating: entry.rating })} />
          )}
        </View>
      </TouchableOpacity>

      {onRemove && (
        <TouchableOpacity
          style={styles.heartBtn}
          onPress={() => onRemove(entry)}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel={fill(s.removeA11y, { dish: entry.dishName })}
        >
          <Heart size={20} color={colors.brand} fill={colors.brand} />
        </TouchableOpacity>
      )}
    </View>
  );
}

export const CookbookRow = React.memo(CookbookRowComponent);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  main: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 12,
  },
  thumbWrap: {
    width: THUMB,
    height: THUMB,
    borderRadius: 12,
    overflow: 'hidden',
  },
  thumb: {
    width: THUMB,
    height: THUMB,
  },
  lockOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    flex: 1,
    gap: 4,
  },
  dish: {
    fontSize: 16,
    fontWeight: '700' as const,
    color: colors.text,
    lineHeight: 20,
  },
  countryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  country: {
    flexShrink: 1,
    fontSize: 13,
    color: colors.textSecondary,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  tag: {
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 6,
    backgroundColor: '#FFF3ED',
  },
  tagDessert: {
    backgroundColor: '#FCE7F3',
  },
  tagText: {
    fontSize: 11,
    fontWeight: '600' as const,
    color: '#C2410C',
  },
  tagTextDessert: {
    color: '#BE185D',
  },
  lockedTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 6,
    backgroundColor: colors.gray100,
  },
  lockedTagText: {
    fontSize: 11,
    fontWeight: '600' as const,
    color: colors.textSecondary,
  },
  stars: {
    flexDirection: 'row',
    gap: 2,
    marginTop: 1,
  },
  heartBtn: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 14,
  },
});
