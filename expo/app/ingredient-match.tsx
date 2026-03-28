import { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ArrowLeft, Plus, X, Search, Clock, MapPin } from 'lucide-react-native';
import { useApp } from '@/contexts/AppContext';
import { translateContent } from '@/lib/translate-content';
import { hapticLight, hapticSuccess } from '@/lib/haptics';
import { findMatchingRecipes, COMMON_INGREDIENTS, RecipeMatch } from '@/lib/ingredient-match';
import DifficultyBadge from '@/components/DifficultyBadge';
import { useTranslation } from '@/lib/i18n';
import colors from '@/constants/colors';

export default function IngredientMatchScreen() {
  const router = useRouter();
  const { countries, userProfile } = useApp();
  const { t } = useTranslation();
  const lang = userProfile.language || 'en';

  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [inputText, setInputText] = useState('');

  const addIngredient = useCallback((ingredient: string) => {
    const trimmed = ingredient.trim().toLowerCase();
    if (trimmed && !selectedIngredients.includes(trimmed)) {
      hapticLight();
      setSelectedIngredients(prev => [...prev, trimmed]);
      setInputText('');
    }
  }, [selectedIngredients]);

  const removeIngredient = useCallback((ingredient: string) => {
    hapticLight();
    setSelectedIngredients(prev => prev.filter(i => i !== ingredient));
  }, []);

  const matches = useMemo(() => {
    if (selectedIngredients.length === 0) return [];
    return findMatchingRecipes(selectedIngredients, countries, 25);
  }, [selectedIngredients, countries]);

  const filteredSuggestions = useMemo(() => {
    if (inputText.length === 0) {
      return COMMON_INGREDIENTS.filter(i => !selectedIngredients.includes(i));
    }
    const lower = inputText.toLowerCase();
    return COMMON_INGREDIENTS
      .filter(i => i.includes(lower) && !selectedIngredients.includes(i));
  }, [inputText, selectedIngredients]);

  const navigateToRecipe = (match: RecipeMatch) => {
    hapticSuccess();
    router.push({
      pathname: `/(tabs)/country/${match.countryId}`,
      params: {
        tab: 'recipes',
        recipe: match.isDessert ? 'dessert' : 'main',
      },
    } as any);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <ArrowLeft size={24} color={colors.text} />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>{t.ingredientMatch.title}</Text>
          <Text style={styles.subtitle}>{t.ingredientMatch.subtitle}</Text>
        </View>
      </View>

      {/* Input */}
      <View style={styles.inputSection}>
        <View style={styles.inputRow}>
          <Search size={18} color={colors.textTertiary} />
          <TextInput
            style={styles.input}
            placeholder={t.ingredientMatch.placeholder}
            placeholderTextColor={colors.textTertiary}
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={() => addIngredient(inputText)}
            returnKeyType="done"
            autoCapitalize="none"
          />
          {inputText.length > 0 && (
            <TouchableOpacity onPress={() => addIngredient(inputText)}>
              <Plus size={22} color={colors.terracotta} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Selected ingredients */}
      {selectedIngredients.length > 0 && (
        <View style={styles.selectedRow}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipScroll}>
            {selectedIngredients.map(ing => (
              <TouchableOpacity
                key={ing}
                style={styles.selectedChip}
                onPress={() => removeIngredient(ing)}
              >
                <Text style={styles.selectedChipText}>{ing}</Text>
                <X size={14} color="#FFF" />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Suggestions */}
        {selectedIngredients.length < 3 && filteredSuggestions.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {selectedIngredients.length === 0 ? t.ingredientMatch.commonIngredients : t.ingredientMatch.addMore}
            </Text>
            <View style={styles.suggestionGrid}>
              {filteredSuggestions.slice(0, 12).map(ing => (
                <TouchableOpacity
                  key={ing}
                  style={styles.suggestionChip}
                  onPress={() => addIngredient(ing)}
                >
                  <Plus size={14} color={colors.sage} />
                  <Text style={styles.suggestionText}>{ing}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Results */}
        {selectedIngredients.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {matches.length > 0
                ? `${matches.length} ${t.ingredientMatch.recipesFound}`
                : t.ingredientMatch.noMatches}
            </Text>

            {matches.length === 0 && selectedIngredients.length > 0 && (
              <Text style={styles.noMatchText}>
                {t.ingredientMatch.noMatchesHint}
              </Text>
            )}

            {matches.slice(0, 20).map((match, idx) => {
              const recipeName = translateContent(match.recipe.name, lang);
              return (
                <TouchableOpacity
                  key={`${match.countryId}-${match.isDessert}-${idx}`}
                  style={styles.resultCard}
                  onPress={() => navigateToRecipe(match)}
                  activeOpacity={0.7}
                >
                  <View style={styles.resultIcon}>
                    <MapPin size={20} color={colors.terracotta} />
                  </View>
                  <View style={styles.resultInfo}>
                    <Text style={styles.resultName} numberOfLines={1}>
                      {recipeName}
                    </Text>
                    <Text style={styles.resultCountry}>
                      {match.countryName}
                      {match.isDessert ? ` ${t.ingredientMatch.dessert}` : ''}
                    </Text>
                    <View style={styles.matchRow}>
                      <View style={styles.matchBar}>
                        <View
                          style={[
                            styles.matchBarFill,
                            {
                              width: `${match.matchPercent}%`,
                              backgroundColor:
                                match.matchPercent >= 70
                                  ? '#10B981'
                                  : match.matchPercent >= 50
                                    ? '#F59E0B'
                                    : '#EF4444',
                            },
                          ]}
                        />
                      </View>
                      <Text style={styles.matchPercent}>{match.matchPercent}%</Text>
                    </View>
                    <Text style={styles.matchDetail}>
                      {match.matchedIngredients.length} {t.ingredientMatch.of} {match.totalIngredients} {t.ingredientMatch.ingredients}
                    </Text>
                  </View>
                  <View style={styles.resultMeta}>
                    <View style={styles.metaItem}>
                      <Clock size={12} color={colors.textTertiary} />
                      <Text style={styles.metaText}>{match.recipe.cookingTime}m</Text>
                    </View>
                    <DifficultyBadge difficulty={match.recipe.difficulty} size="small" />
                  </View>
                </TouchableOpacity>
              );
            })}
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
    fontSize: 22,
    fontWeight: '700' as const,
    color: colors.text,
  },
  subtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 2,
  },
  inputSection: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
    padding: 0,
  },
  selectedRow: {
    marginBottom: 8,
  },
  chipScroll: {
    paddingHorizontal: 16,
    gap: 8,
  },
  selectedChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.terracotta,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  selectedChipText: {
    fontSize: 14,
    fontWeight: '500' as const,
    color: '#FFF',
  },
  scrollView: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600' as const,
    color: colors.textSecondary,
    marginBottom: 10,
  },
  suggestionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  suggestionChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.surface,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  suggestionText: {
    fontSize: 13,
    color: colors.text,
  },
  noMatchText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    paddingVertical: 20,
  },
  resultCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 14,
    gap: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  resultIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultInfo: {
    flex: 1,
  },
  resultName: {
    fontSize: 15,
    fontWeight: '600' as const,
    color: colors.text,
  },
  resultCountry: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  matchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 6,
  },
  matchBar: {
    flex: 1,
    height: 6,
    backgroundColor: colors.background,
    borderRadius: 3,
    overflow: 'hidden',
  },
  matchBarFill: {
    height: '100%',
    borderRadius: 3,
  },
  matchPercent: {
    fontSize: 12,
    fontWeight: '600' as const,
    color: colors.text,
    width: 35,
    textAlign: 'right',
  },
  matchDetail: {
    fontSize: 11,
    color: colors.textTertiary,
    marginTop: 2,
  },
  resultMeta: {
    alignItems: 'flex-end',
    gap: 6,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  metaText: {
    fontSize: 12,
    color: colors.textTertiary,
  },
  bottomPadding: {
    height: 40,
  },
});
