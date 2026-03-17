import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Globe, ChevronDown, ChevronUp, MapPin } from 'lucide-react-native';
import { DishVariation, Country } from '@/types';
import { translateContent } from '@/lib/translate-content';
import colors from '@/constants/colors';

interface RegionalVariationsProps {
  variations: DishVariation[];
  countries: Country[];
  lang?: string;
  onCountryPress?: (countryId: string) => void;
}

export default function RegionalVariations({
  variations,
  countries,
  lang = 'en',
  onCountryPress,
}: RegionalVariationsProps) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  if (variations.length === 0) return null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Globe size={16} color={colors.blue} />
        <Text style={styles.title}>Same Dish, Different Countries</Text>
      </View>

      {variations.map((variation, idx) => {
        const isExpanded = expandedIdx === idx;

        return (
          <View key={idx} style={styles.variationCard}>
            <TouchableOpacity
              style={styles.variationHeader}
              onPress={() => setExpandedIdx(isExpanded ? null : idx)}
              activeOpacity={0.7}
            >
              <Text style={styles.dishName}>
                {translateContent(variation.dishName, lang)}
              </Text>
              <View style={styles.countryCount}>
                <Text style={styles.countryCountText}>
                  {variation.countries.length} countries
                </Text>
                {isExpanded ? (
                  <ChevronUp size={16} color={colors.textTertiary} />
                ) : (
                  <ChevronDown size={16} color={colors.textTertiary} />
                )}
              </View>
            </TouchableOpacity>

            {isExpanded && (
              <View style={styles.countriesList}>
                {variation.countries.map((vc, cIdx) => {
                  return (
                    <TouchableOpacity
                      key={cIdx}
                      style={styles.countryItem}
                      onPress={() => onCountryPress?.(vc.countryId)}
                      activeOpacity={0.7}
                      disabled={!onCountryPress}
                    >
                      <View style={styles.flagIcon}>
                        <MapPin size={16} color={colors.terracotta} />
                      </View>
                      <View style={styles.countryInfo}>
                        <Text style={styles.localName}>
                          {translateContent(vc.localName, lang)}
                        </Text>
                        <Text style={styles.description} numberOfLines={2}>
                          {translateContent(vc.description, lang)}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '700' as const,
    color: colors.text,
  },
  variationCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  variationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
  },
  dishName: {
    fontSize: 15,
    fontWeight: '600' as const,
    color: colors.text,
    flex: 1,
  },
  countryCount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  countryCountText: {
    fontSize: 13,
    color: colors.textTertiary,
  },
  countriesList: {
    paddingHorizontal: 14,
    paddingBottom: 14,
    gap: 10,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 10,
  },
  countryItem: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
  },
  flagIcon: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  countryInfo: {
    flex: 1,
  },
  localName: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: colors.text,
  },
  description: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 2,
    lineHeight: 18,
  },
});
