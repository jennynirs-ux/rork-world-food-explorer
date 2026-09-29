import { memo, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Lock } from 'lucide-react-native';
import { FoodImage } from '@/components/FoodImage';
import { optimizeImageUrl } from '@/lib/image-utils';
import colors from '@/constants/colors';

export const COUNTRY_THUMBNAIL_WIDTH = 80;
export const COUNTRY_THUMBNAIL_HEIGHT = 56;

/**
 * The exact URL FoodImage requests for a list thumbnail (same options as the
 * <FoodImage width height> below with the default contentFit="cover"), so a
 * prefetch warms the same cache entry.
 */
export function getCountryThumbnailUrl(uri: string): string {
  return optimizeImageUrl(uri, {
    width: COUNTRY_THUMBNAIL_WIDTH,
    height: COUNTRY_THUMBNAIL_HEIGHT,
    crop: true,
  });
}

type CountryListRowProps = {
  countryId: string;
  name: string;
  continent: string;
  flag: string;
  imageUri?: string;
  isAccessible: boolean;
  completionPercentage: number;
  onPress: (countryId: string) => void;
  lockedLabel?: string;
};

function CountryListRowComponent({
  countryId,
  name,
  continent,
  flag,
  imageUri,
  isAccessible,
  completionPercentage,
  onPress,
  lockedLabel,
}: CountryListRowProps) {
  const handlePress = useCallback(() => onPress(countryId), [onPress, countryId]);

  return (
    <TouchableOpacity
      style={[styles.countryCard, !isAccessible && styles.countryCardLocked]}
      onPress={handlePress}
      accessibilityLabel={`${name}, ${continent}${!isAccessible && lockedLabel ? `, ${lockedLabel}` : ''}`}
      accessibilityRole="button"
      activeOpacity={0.7}
    >
      <View style={!isAccessible ? styles.cardThumbnailLocked : undefined}>
        <FoodImage
          uri={imageUri}
          alt={name}
          type="landscape"
          width={COUNTRY_THUMBNAIL_WIDTH}
          height={COUNTRY_THUMBNAIL_HEIGHT}
          style={styles.cardThumbnail}
        />
      </View>
      <View style={styles.flagButton}>
        <Text style={[styles.flag, !isAccessible && styles.flagLocked]}>{flag}</Text>
        {!isAccessible && (
          <View style={styles.lockBadge}>
            <Lock size={12} color="#FFF" />
          </View>
        )}
      </View>
      <View style={styles.countryInfo}>
        <View style={styles.countryNameRow}>
          <Text style={styles.countryName}>{name}</Text>
          {!isAccessible && (
            <View style={styles.lockIcon}>
              <Lock size={16} color="#9CA3AF" />
            </View>
          )}
        </View>
        <Text style={styles.continent}>{continent}</Text>
        {isAccessible && (
          <View style={styles.progressContainer}>
            <View style={styles.progressRow}>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${completionPercentage}%` }]} />
              </View>
              <Text style={styles.progressLabel}>{completionPercentage}%</Text>
            </View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const CountryListRow = memo(CountryListRowComponent);
export default CountryListRow;

const styles = StyleSheet.create({
  countryCard: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    gap: 12,
    alignItems: 'center',
  },
  countryCardLocked: {
    backgroundColor: '#F3F2EF',
    opacity: 0.75,
  },
  cardThumbnail: {
    width: COUNTRY_THUMBNAIL_WIDTH,
    height: COUNTRY_THUMBNAIL_HEIGHT,
    borderRadius: 8,
  },
  cardThumbnailLocked: {
    opacity: 0.5,
    borderRadius: 8,
    overflow: 'hidden',
  },
  flagButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flag: {
    fontSize: 40,
  },
  flagLocked: {
    opacity: 0.5,
  },
  lockBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    backgroundColor: colors.brand,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.surface,
  },
  countryInfo: {
    flex: 1,
    gap: 4,
  },
  countryNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  countryName: {
    fontSize: 18,
    fontWeight: '600' as const,
    color: colors.text,
  },
  lockIcon: {
    opacity: 0.6,
  },
  continent: {
    fontSize: 14,
    color: colors.gray500,
  },
  progressContainer: {
    marginTop: 4,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: colors.sand,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.successGreen,
    borderRadius: 3,
  },
  progressLabel: {
    fontSize: 11,
    fontWeight: '500' as const,
    color: colors.gray400,
  },
});
