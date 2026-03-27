import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AlertTriangle, MapPin } from 'lucide-react-native';
import { endangeredDishes, EndangeredDish } from '@/data/endangered-dishes';
import { translateContent } from '@/lib/translate-content';
import { Country } from '@/types';
import colors from '@/constants/colors';

interface EndangeredDishesProps {
  countries: Country[];
  lang?: string;
  onCountryPress?: (countryId: string) => void;
}

function ThreatBadge({ level }: { level: EndangeredDish['threatLevel'] }) {
  const config: Record<string, { color: string; bg: string; label: string }> = {
    critical: { color: '#DC2626', bg: '#FEE2E2', label: 'Critical' },
    endangered: { color: '#D97706', bg: '#FEF3C7', label: 'Endangered' },
    vulnerable: { color: '#2563EB', bg: '#DBEAFE', label: 'Vulnerable' },
  };
  const c = config[level] || { color: '#6B7280', bg: '#F3F4F6', label: level || 'Unknown' };

  return (
    <View style={[styles.threatBadge, { backgroundColor: c.bg }]}>
      <Text style={[styles.threatText, { color: c.color }]}>{c.label}</Text>
    </View>
  );
}

export default function EndangeredDishesSection({
  countries,
  lang = 'en',
  onCountryPress,
}: EndangeredDishesProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AlertTriangle size={18} color="#D97706" />
        <Text style={styles.title}>Endangered Food Heritage</Text>
      </View>
      <Text style={styles.intro}>
        These culinary traditions risk disappearing. Learn about them and help preserve food culture.
      </Text>

      {endangeredDishes.map(dish => {
        return (
          <TouchableOpacity
            key={dish.id}
            style={styles.card}
            onPress={() => onCountryPress?.(dish.countryId)}
            activeOpacity={0.7}
            disabled={!onCountryPress}
          >
            <View style={styles.cardHeader}>
              <View style={styles.flagIcon}>
                <MapPin size={20} color={colors.terracotta} />
              </View>
              <View style={styles.cardTitleArea}>
                <Text style={styles.dishName}>
                  {translateContent(dish.name, lang)}
                </Text>
                <Text style={styles.region}>
                  {translateContent(dish.region, lang)}
                </Text>
              </View>
              <ThreatBadge level={dish.threatLevel} />
            </View>

            <Text style={styles.description}>
              {translateContent(dish.description, lang)}
            </Text>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Why at risk:</Text>
              <Text style={styles.infoText}>
                {translateContent(dish.reason, lang)}
              </Text>
            </View>

            <View style={styles.helpRow}>
              <Text style={styles.helpLabel}>How to help:</Text>
              <Text style={styles.helpText}>
                {translateContent(dish.howToHelp, lang)}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 17,
    fontWeight: '700' as const,
    color: colors.text,
  },
  intro: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
    marginBottom: 4,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  flagIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitleArea: {
    flex: 1,
  },
  dishName: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: colors.text,
  },
  region: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 1,
  },
  threatBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  threatText: {
    fontSize: 11,
    fontWeight: '600' as const,
  },
  description: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  infoRow: {
    gap: 2,
  },
  infoLabel: {
    fontSize: 12,
    fontWeight: '600' as const,
    color: colors.terracotta,
  },
  infoText: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  helpRow: {
    backgroundColor: '#F0FDF4',
    borderRadius: 8,
    padding: 10,
    gap: 2,
  },
  helpLabel: {
    fontSize: 12,
    fontWeight: '600' as const,
    color: '#16A34A',
  },
  helpText: {
    fontSize: 13,
    color: '#166534',
    lineHeight: 18,
  },
});
