import { useState, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ArrowLeft, Moon, Flame, Wheat, Sparkles, Snowflake, Store, Soup, Leaf, Flower2, Star, MapPin } from 'lucide-react-native';
import { useApp } from '@/contexts/AppContext';
import { translateContent } from '@/lib/translate-content';
import { hapticLight } from '@/lib/haptics';
import { seasonalCollections } from '@/data/seasonal-collections';
import { regionalVariations } from '@/data/regional-variations';
import RegionalVariations from '@/components/RegionalVariations';
import EndangeredDishes from '@/components/EndangeredDishes';
import colors from '@/constants/colors';

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  star: Star,
  moon: Moon,
  flower2: Flower2,
  flame: Flame,
  wheat: Wheat,
  sparkles: Sparkles,
  snowflake: Snowflake,
  store: Store,
  soup: Soup,
  leaf: Leaf,
};

export default function CollectionsScreen() {
  const router = useRouter();
  const { countries, userProfile } = useApp();
  const lang = userProfile.language || 'en';

  const [activeTab, setActiveTab] = useState<'seasonal' | 'regional' | 'endangered'>('seasonal');

  const currentMonth = new Date().getMonth() + 1;

  // Collections relevant to current month first, then others
  const sortedCollections = useMemo(() => {
    return [...seasonalCollections].sort((a, b) => {
      const aRelevant = a.months.includes(currentMonth) ? 0 : 1;
      const bRelevant = b.months.includes(currentMonth) ? 0 : 1;
      return aRelevant - bRelevant;
    });
  }, [currentMonth]);

  const navigateToCountry = (countryId: string) => {
    hapticLight();
    router.push(`/(tabs)/country/${countryId}`);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <ArrowLeft size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Collections</Text>
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'seasonal' && styles.tabActive]}
          onPress={() => {
            hapticLight();
            setActiveTab('seasonal');
          }}
        >
          <Text style={[styles.tabText, activeTab === 'seasonal' && styles.tabTextActive]}>
            Seasonal
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'regional' && styles.tabActive]}
          onPress={() => {
            hapticLight();
            setActiveTab('regional');
          }}
        >
          <Text style={[styles.tabText, activeTab === 'regional' && styles.tabTextActive]}>
            Regional
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'endangered' && styles.tabActive]}
          onPress={() => {
            hapticLight();
            setActiveTab('endangered');
          }}
        >
          <Text style={[styles.tabText, activeTab === 'endangered' && styles.tabTextActive]}>
            Heritage
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {activeTab === 'seasonal' && (
          <View style={styles.section}>
            {sortedCollections.map(collection => {
              const isRelevant = collection.months.includes(currentMonth);
              const matchingCountries = collection.countryIds
                .map(id => countries.find(c => c.id === id))
                .filter(Boolean);

              return (
                <View key={collection.id} style={styles.collectionCard}>
                  <View style={styles.collectionHeader}>
                    <View style={styles.iconContainer}>
                      {(() => {
                        const IconComp = ICON_MAP[collection.icon];
                        return IconComp ? <IconComp size={24} color={colors.terracotta} /> : <MapPin size={24} color={colors.terracotta} />;
                      })()}
                    </View>
                    <View style={styles.collectionTitleArea}>
                      <View style={styles.collectionTitleRow}>
                        <Text style={styles.collectionName}>
                          {translateContent(collection.name, lang)}
                        </Text>
                        {isRelevant && (
                          <View style={styles.nowBadge}>
                            <Text style={styles.nowBadgeText}>Now</Text>
                          </View>
                        )}
                      </View>
                      <Text style={styles.collectionDesc} numberOfLines={2}>
                        {translateContent(collection.description, lang)}
                      </Text>
                    </View>
                  </View>

                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.countryScroll}
                    contentContainerStyle={styles.countryScrollContent}
                  >
                    {matchingCountries.map(c => {
                      if (!c) return null;
                      return (
                        <TouchableOpacity
                          key={c.id}
                          style={styles.countryChip}
                          onPress={() => navigateToCountry(c.id)}
                        >
                          <MapPin size={14} color={colors.sage} />
                          <Text style={styles.chipName} numberOfLines={1}>
                            {translateContent(c.name, lang)}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </ScrollView>
                </View>
              );
            })}
          </View>
        )}

        {activeTab === 'regional' && (
          <View style={styles.section}>
            <RegionalVariations
              variations={regionalVariations}
              countries={countries}
              lang={lang}
              onCountryPress={navigateToCountry}
            />
          </View>
        )}

        {activeTab === 'endangered' && (
          <View style={styles.section}>
            <EndangeredDishes
              countries={countries}
              lang={lang}
              onCountryPress={navigateToCountry}
            />
          </View>
        )}

        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  backBtn: {
    padding: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '700' as const,
    color: colors.text,
  },
  tabBar: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 16,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  tabActive: {
    backgroundColor: colors.terracotta,
    borderColor: colors.terracotta,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: colors.textSecondary,
  },
  tabTextActive: {
    color: '#FFF',
  },
  scrollView: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 16,
    gap: 12,
  },
  collectionCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  collectionHeader: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  collectionTitleArea: {
    flex: 1,
  },
  collectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  collectionName: {
    fontSize: 17,
    fontWeight: '700' as const,
    color: colors.text,
  },
  nowBadge: {
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  nowBadgeText: {
    fontSize: 11,
    fontWeight: '600' as const,
    color: '#16A34A',
  },
  collectionDesc: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 4,
    lineHeight: 18,
  },
  countryScroll: {
    marginHorizontal: -4,
  },
  countryScrollContent: {
    paddingHorizontal: 4,
    gap: 8,
  },
  countryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.background,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  chipName: {
    fontSize: 13,
    fontWeight: '500' as const,
    color: colors.text,
    maxWidth: 100,
  },
  bottomPadding: {
    height: 40,
  },
});
