import { useCallback, useMemo, useState } from 'react';
import { View, Text, StyleSheet, SectionList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { BookOpen, ChefHat, Compass, Heart } from 'lucide-react-native';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { useStrings } from '@/lib/strings';
import { cookbookStrings } from '@/lib/strings/cookbook';
import { hapticLight } from '@/lib/haptics';
import colors from '@/constants/colors';
import type { FavoriteRecipe } from '@/types';
import { CookbookRow } from '@/components/cookbook/CookbookRow';
import UndoToast from '@/components/cookbook/UndoToast';
import { buildCookedEntries, buildSavedEntries, type CookbookEntry } from '@/components/cookbook/cookbook-data';

type Section = {
  key: 'saved' | 'cooked';
  title: string;
  hint: string;
  data: CookbookEntry[];
};

const NO_PRODUCTS: string[] = [];

export default function CookbookScreen() {
  const router = useRouter();
  const {
    favoriteRecipes,
    countryProgress,
    countries,
    userProfile,
    removeFavoriteRecipe,
    addFavoriteRecipe,
  } = useApp();
  const { language } = useTranslation();
  const s = useStrings(cookbookStrings);
  const purchased = userProfile.purchasedProducts ?? NO_PRODUCTS;

  const saved = useMemo(
    () => buildSavedEntries(favoriteRecipes, countries, language, purchased),
    [favoriteRecipes, countries, language, purchased],
  );
  const cooked = useMemo(
    () => buildCookedEntries(countryProgress, countries, language, purchased),
    [countryProgress, countries, language, purchased],
  );

  const sections = useMemo<Section[]>(() => [
    { key: 'saved', title: s.savedSection, hint: s.savedEmptyHint, data: saved },
    { key: 'cooked', title: s.cookedSection, hint: s.cookedEmptyHint, data: cooked },
  ], [s, saved, cooked]);

  const [undo, setUndo] = useState<{ favorite: FavoriteRecipe; token: number } | null>(null);

  const openRecipe = useCallback((entry: CookbookEntry) => {
    hapticLight();
    router.push({ pathname: '/country/[id]', params: { id: entry.countryId, tab: 'recipes' } });
  }, [router]);

  const removeSaved = useCallback((entry: CookbookEntry) => {
    hapticLight();
    const favorite = favoriteRecipes.find(f => f.recipeId === entry.recipeId);
    void removeFavoriteRecipe(entry.recipeId);
    if (favorite) setUndo({ favorite, token: Date.now() });
  }, [favoriteRecipes, removeFavoriteRecipe]);

  const undoRemove = useCallback(() => {
    if (!undo) return;
    const f = undo.favorite;
    hapticLight();
    void addFavoriteRecipe(f.recipeId, f.recipeName, f.countryId, f.countryName, f.countryFlag, f.isDessert);
    setUndo(null);
  }, [undo, addFavoriteRecipe]);

  const hideUndo = useCallback(() => setUndo(null), []);

  const header = (
    <View style={styles.header}>
      <Text style={styles.title} accessibilityRole="header">{s.title}</Text>
      <Text style={styles.subtitle}>{s.subtitle}</Text>
    </View>
  );

  const isEmpty = saved.length === 0 && cooked.length === 0;

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {isEmpty ? (
        <View style={styles.flex}>
          {header}
          <View style={styles.empty}>
            <View style={styles.emptyArt}>
              <BookOpen size={44} color={colors.brand} />
            </View>
            <Text style={styles.emptyTitle}>{s.emptyTitle}</Text>
            <Text style={styles.emptyBody}>{s.emptyBody}</Text>

            <View style={styles.howTo}>
              <View style={styles.howToRow}>
                <View style={styles.sectionIcon}>
                  <Heart size={14} color={colors.brand} fill={colors.brand} />
                </View>
                <Text style={styles.howToText}>{s.savedEmptyHint}</Text>
              </View>
              <View style={styles.howToRow}>
                <View style={[styles.sectionIcon, styles.sectionIconCooked]}>
                  <ChefHat size={14} color={colors.success} />
                </View>
                <Text style={styles.howToText}>{s.cookedEmptyHint}</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.cta}
              onPress={() => router.navigate('/')}
              activeOpacity={0.85}
              accessibilityRole="button"
            >
              <Compass size={18} color="#FFF" />
              <Text style={styles.ctaText}>{s.emptyCta}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <SectionList<CookbookEntry, Section>
          sections={sections}
          keyExtractor={(item, index) => `${item.key}-${index}`}
          ListHeaderComponent={header}
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.listContent, undo && styles.listContentWithToast]}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionIcon, section.key === 'cooked' && styles.sectionIconCooked]}>
                {section.key === 'saved'
                  ? <Heart size={14} color={colors.brand} fill={colors.brand} />
                  : <ChefHat size={14} color={colors.success} />}
              </View>
              <Text style={styles.sectionTitle} accessibilityRole="header">{section.title}</Text>
              <View style={styles.countPill}>
                <Text style={styles.countText}>{section.data.length}</Text>
              </View>
            </View>
          )}
          renderSectionFooter={({ section }) =>
            section.data.length === 0 ? (
              <View style={styles.sectionHint}>
                <Text style={styles.sectionHintText}>{section.hint}</Text>
              </View>
            ) : null
          }
          renderItem={({ item, section }) => (
            <CookbookRow
              entry={item}
              strings={s}
              onPress={openRecipe}
              onRemove={section.key === 'saved' ? removeSaved : undefined}
              showRating={section.key === 'cooked'}
            />
          )}
        />
      )}

      {undo && (
        <UndoToast
          key={undo.token}
          message={s.removed}
          actionLabel={s.undo}
          onAction={undoRemove}
          onHide={hideUndo}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  flex: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: '700' as const,
    color: colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
    lineHeight: 20,
  },
  listContent: {
    paddingBottom: 32,
  },
  listContentWithToast: {
    paddingBottom: 96,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  sectionIcon: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#FFF3ED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionIconCooked: {
    backgroundColor: '#E8F3EC',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: colors.text,
  },
  countPill: {
    minWidth: 24,
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 10,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  countText: {
    fontSize: 12,
    fontWeight: '700' as const,
    color: colors.textSecondary,
  },
  sectionHint: {
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  sectionHintText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingBottom: 40,
  },
  emptyArt: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: '#FFF3ED',
    borderWidth: 3,
    borderColor: '#FFE0D0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: '700' as const,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  emptyBody: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  howTo: {
    alignSelf: 'stretch',
    gap: 10,
    marginTop: 20,
    padding: 16,
    borderRadius: 14,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  howToRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  howToText: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  cta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 24,
    backgroundColor: colors.brand,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 14,
  },
  ctaText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700' as const,
  },
});
