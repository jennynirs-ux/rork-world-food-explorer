import { View, Text, StyleSheet } from 'react-native';
import {
  Globe,
  Building2,
  Users,
  Languages,
  DollarSign,
  Maximize,
  Check,
  Landmark,
  Lightbulb,
  ChefHat,
  MapPin,
  Sparkles,
} from 'lucide-react-native';
import { useTranslation } from '@/lib/i18n';
import { translateContent } from '@/lib/translate-content';
import RegionalVariations from '@/components/RegionalVariations';
import colors from '@/constants/colors';
import type { Country } from '@/types';
import type { TranslatedCountry } from '@/lib/use-translated-country';

type AboutTabProps = {
  country: TranslatedCountry;
  countryData: Country | undefined;
  countryVariations: any[];
  countries: Country[];
  lang: string;
  onCountryPress: (countryId: string) => void;
};

export default function AboutTab({
  country,
  countryData,
  countryVariations,
  countries,
  lang,
  onCountryPress,
}: AboutTabProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.tabContent}>
      <View style={styles.section}>
        <Text style={styles.sectionTitleLarge}>{t.country.introduction}</Text>
        <Text style={styles.description}>{country.description}</Text>
      </View>

      {country.quickFacts && country.quickFacts.length > 0 && (
        <View style={styles.section}>
          <View style={styles.quickFactsGrid}>
            {country.quickFacts.map((fact, idx) => {
              const rawFact = countryData?.quickFacts?.[idx];
              const englishLabel = rawFact ? translateContent(rawFact.label, 'en') : fact.label;
              let IconComponent = Globe;
              let iconColor = '#3B82F6';

              if (englishLabel === 'Capital') {
                IconComponent = Building2;
                iconColor = '#EF4444';
              } else if (englishLabel === 'Population') {
                IconComponent = Users;
                iconColor = '#8B5CF6';
              } else if (englishLabel === 'Official Language' || englishLabel === 'Language') {
                IconComponent = Languages;
                iconColor = '#10B981';
              } else if (englishLabel === 'Currency') {
                IconComponent = DollarSign;
                iconColor = '#F59E0B';
              } else if (englishLabel === 'Area') {
                IconComponent = Maximize;
                iconColor = '#06B6D4';
              }

              const isFullWidth = englishLabel === 'Area';

              return (
                <View
                  key={idx}
                  style={[
                    styles.quickFactCard,
                    isFullWidth && styles.quickFactCardFullWidth,
                  ]}
                >
                  <IconComponent size={24} color={iconColor} style={styles.quickFactIcon} />
                  <Text style={styles.quickFactLabel}>{fact.label}</Text>
                  <Text style={styles.quickFactValue}>{fact.value}</Text>
                </View>
              );
            })}
          </View>
        </View>
      )}

      <View style={styles.section}>
        <View style={styles.funFactsCard}>
          <View style={styles.funFactsHeader}>
            <Check size={24} color={colors.text} />
            <Text style={styles.funFactsTitle}>{t.country.funFacts}</Text>
          </View>
          {country.facts.slice(0, 3).map((fact, idx) => (
            <Text key={idx} style={styles.funFactText}>
              {'\u2022'} {fact}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.historyCard}>
          <View style={styles.historySectionHeader}>
            <Landmark size={24} color={colors.terracotta} />
            <Text style={styles.historyTitle}>{t.country.historicalHighlights}</Text>
          </View>
          <View style={styles.historyTimelineContainer}>
            {(country.history || []).map((event, idx) => (
              <View key={idx} style={styles.historyTimelineItem}>
                <View style={styles.timelineDot} />
                <View style={styles.timelineContent}>
                  <Text style={styles.timelineYear}>{event.year}</Text>
                  <Text style={styles.timelineTitle}>{event.title}</Text>
                  <Text style={styles.timelineDescription}>{event.description}</Text>
                </View>
              </View>
            ))}
            {(!country.history || country.history.length === 0) && (
              <View style={styles.historyContent}>
                <Text style={styles.historyText}>
                  {t.country.genericHistory}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.innovationsCard}>
          <View style={styles.innovationsSectionHeader}>
            <Lightbulb size={24} color={colors.orange} />
            <Text style={styles.innovationsTitle}>{t.country.innovations}</Text>
          </View>
          <View style={styles.innovationsContainer}>
            {(country.innovations || []).map((innovation, idx) => (
              <View key={idx} style={styles.innovationItem}>
                <View style={styles.innovationHeader}>
                  <Text style={styles.innovationName}>{innovation.name}</Text>
                  <Text style={styles.innovationYear}>{innovation.year}</Text>
                </View>
                <Text style={styles.innovationDescription}>{innovation.description}</Text>
              </View>
            ))}
            {(!country.innovations || country.innovations.length === 0) && (
              <Text style={styles.innovationPlaceholder}>
                Innovation details coming soon for {country.name}!
              </Text>
            )}
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.foodCultureCard}>
          <View style={styles.foodCultureHeader}>
            <ChefHat size={24} color={colors.text} />
            <Text style={styles.foodCultureTitle}>{t.country.foodCulture}</Text>
          </View>
          <View style={styles.foodCultureContent}>
            <Text style={styles.foodCultureText}>{country.foodCulture}</Text>
          </View>
        </View>
      </View>

      {country.mustVisit && country.mustVisit.length > 0 && (
        <View style={styles.section}>
          <View style={styles.mustVisitCard}>
            <View style={styles.mustVisitHeader}>
              <MapPin size={24} color="#D95757" />
              <Text style={styles.mustVisitTitle}>{t.country.mustVisit}</Text>
            </View>
            <View style={styles.mustVisitList}>
              {country.mustVisit.map((place, idx) => (
                <View key={idx} style={styles.mustVisitItem}>
                  <View style={styles.mustVisitIconWrapper}>
                    <MapPin size={18} color="#D95757" />
                  </View>
                  <View style={styles.mustVisitContent}>
                    <Text style={styles.mustVisitName}>{place.name}</Text>
                    <Text style={styles.mustVisitDescription}>{place.description}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      )}

      {country.travelEssentials && country.travelEssentials.length > 0 && (
        <View style={styles.section}>
          <View style={styles.travelEssentialsCard}>
            <View style={styles.travelEssentialsHeader}>
              <Sparkles size={24} color={colors.text} />
              <Text style={styles.travelEssentialsTitle}>{t.country.travelEssentials}</Text>
            </View>
            <View style={styles.travelEssentialsList}>
              {country.travelEssentials.map((essential, idx) => (
                <View key={idx} style={styles.travelEssentialItem}>
                  <View style={styles.travelEssentialBullet}>
                    <Sparkles size={14} color={colors.terracotta} />
                  </View>
                  <View style={styles.travelEssentialContent}>
                    <Text style={styles.travelEssentialItemText}>{essential.item}</Text>
                    <Text style={styles.travelEssentialDescription}>{essential.description}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      )}

      {countryVariations.length > 0 && (
        <View style={styles.section}>
          <RegionalVariations
            variations={countryVariations}
            countries={countries}
            lang={lang}
            onCountryPress={onCountryPress}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  sectionTitleLarge: {
    fontSize: 24,
    fontWeight: '700' as const,
    color: colors.text,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  quickFactsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  quickFactCard: {
    width: '48%',
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
    elevation: 2,
  },
  quickFactCardFullWidth: {
    width: '100%',
  },
  quickFactIcon: {
    marginBottom: 8,
  },
  quickFactLabel: {
    fontSize: 12,
    fontWeight: '600' as const,
    color: colors.textTertiary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    textAlign: 'center',
    marginBottom: 6,
  },
  quickFactValue: {
    fontSize: 16,
    fontWeight: '700' as const,
    color: colors.text,
    textAlign: 'center',
  },
  funFactsCard: {
    backgroundColor: '#E8F4E5',
    borderRadius: 20,
    padding: 24,
  },
  funFactsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  funFactsTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.text,
  },
  funFactText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 24,
    marginBottom: 8,
  },
  historyCard: {
    backgroundColor: '#F5E6D3',
    borderRadius: 20,
    padding: 24,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
    elevation: 2,
  },
  historySectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.text,
  },
  historyContent: {
    borderLeftWidth: 4,
    borderLeftColor: '#6B7280',
    paddingLeft: 16,
  },
  historyText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  historyTimelineContainer: {
    gap: 24,
  },
  historyTimelineItem: {
    flexDirection: 'row',
    gap: 16,
  },
  timelineDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.terracotta,
    marginTop: 4,
    borderWidth: 3,
    borderColor: colors.sand,
  },
  timelineContent: {
    flex: 1,
    paddingBottom: 8,
  },
  timelineYear: {
    fontSize: 14,
    fontWeight: '700' as const,
    color: colors.terracotta,
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  timelineTitle: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: colors.text,
    marginBottom: 6,
  },
  timelineDescription: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  innovationsCard: {
    backgroundColor: '#FFF4E6',
    borderRadius: 20,
    padding: 24,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
    elevation: 2,
  },
  innovationsSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  innovationsTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.text,
  },
  innovationsContainer: {
    gap: 20,
  },
  innovationItem: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  innovationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  innovationName: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: colors.text,
    flex: 1,
  },
  innovationYear: {
    fontSize: 14,
    fontWeight: '700' as const,
    color: colors.orange,
    marginLeft: 12,
  },
  innovationDescription: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  innovationPlaceholder: {
    fontSize: 15,
    color: colors.textTertiary,
    lineHeight: 22,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingVertical: 12,
  },
  foodCultureCard: {
    backgroundColor: '#F9E5DD',
    borderRadius: 20,
    padding: 24,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
    elevation: 2,
  },
  foodCultureHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  foodCultureTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.text,
  },
  foodCultureContent: {
    borderLeftWidth: 4,
    borderLeftColor: '#F39C6B',
    paddingLeft: 16,
  },
  foodCultureText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 24,
    fontStyle: 'italic',
  },
  mustVisitCard: {
    backgroundColor: '#E8F0F2',
    borderRadius: 20,
    padding: 24,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
    elevation: 2,
  },
  mustVisitHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  mustVisitTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.text,
  },
  mustVisitList: {
    gap: 16,
  },
  mustVisitItem: {
    flexDirection: 'row',
    gap: 12,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  mustVisitIconWrapper: {
    marginTop: 2,
  },
  mustVisitContent: {
    flex: 1,
  },
  mustVisitName: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: colors.text,
    marginBottom: 4,
  },
  mustVisitDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  travelEssentialsCard: {
    backgroundColor: '#EDE7DD',
    borderRadius: 20,
    padding: 24,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
    elevation: 2,
  },
  travelEssentialsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  travelEssentialsTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.text,
  },
  travelEssentialsList: {
    gap: 16,
  },
  travelEssentialItem: {
    flexDirection: 'row',
    gap: 12,
    paddingBottom: 12,
  },
  travelEssentialBullet: {
    marginTop: 2,
  },
  travelEssentialContent: {
    flex: 1,
  },
  travelEssentialItemText: {
    fontSize: 15,
    fontWeight: '600' as const,
    color: colors.text,
    marginBottom: 4,
  },
  travelEssentialDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});
