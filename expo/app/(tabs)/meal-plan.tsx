import { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Share,
  Modal,
  FlatList,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Trash2,
  ShoppingCart,
  ListPlus,
  Share2,
  CalendarDays,
  MapPin,
  X,
  Search,
} from 'lucide-react-native';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { translateContent } from '@/lib/translate-content';
import { hapticLight, hapticSuccess } from '@/lib/haptics';
import { isCountryAccessible } from '@/lib/access-control';
import colors from '@/constants/colors';
import { getPlannedRecipe } from '@/lib/grocery-export';
import { MealPlan } from '@/types';
import { fill, useStrings } from '@/lib/strings';
import { shoppingStrings } from '@/lib/strings/cookbook';

const MEAL_TYPES = ['lunch', 'dinner', 'dessert'] as const;
type MealType = typeof MEAL_TYPES[number];

/**
 * Local calendar date as YYYY-MM-DD. (toISOString() gives the UTC date, which
 * is already tomorrow on a US evening.)
 */
function toDateKey(d: Date): string {
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${month}-${day}`;
}

/** Parse a YYYY-MM-DD key as local noon (safe from DST edges). */
function fromDateKey(key: string): Date {
  const [y, m, d] = key.split('-').map(Number);
  return new Date(y, m - 1, d, 12);
}

function getWeekDates(baseDate: Date): string[] {
  const offsetToMonday = (baseDate.getDay() + 6) % 7;
  const dates: string[] = [];
  for (let i = 0; i < 7; i++) {
    dates.push(toDateKey(new Date(
      baseDate.getFullYear(),
      baseDate.getMonth(),
      baseDate.getDate() - offsetToMonday + i,
      12,
    )));
  }
  return dates;
}

function formatLocalized(dateStr: string, locale: string, options: Intl.DateTimeFormatOptions): string {
  const d = fromDateKey(dateStr);
  try {
    return d.toLocaleDateString(locale, options);
  } catch {
    return d.toLocaleDateString('en', options);
  }
}

function formatDate(dateStr: string, locale: string): string {
  return formatLocalized(dateStr, locale, { weekday: 'short', month: 'short', day: 'numeric' });
}

function formatShortDay(dateStr: string, locale: string): string {
  return formatLocalized(dateStr, locale, { weekday: 'short' });
}

function formatDayNum(dateStr: string): string {
  return fromDateKey(dateStr).getDate().toString();
}

export default function MealPlanScreen() {
  const {
    countries,
    mealPlans,
    addMealPlan,
    removeMealPlan,
    getMealPlansForDate,
    addMealPlanToShoppingList,
    userProfile,
    shoppingList,
  } = useApp();
  const { t } = useTranslation();
  const router = useRouter();
  const shopping = useStrings(shoppingStrings);
  const toBuyCount = shoppingList.filter(item => !item.checked).length;

  const lang = userProfile.language || 'en';
  const mealTypeLabel = (mealType: MealPlan['mealType']): string => {
    const label = t.mealPlan[mealType as keyof typeof t.mealPlan];
    return typeof label === 'string' && label
      ? label
      : mealType.charAt(0).toUpperCase() + mealType.slice(1);
  };
  const [baseDate, setBaseDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(() => toDateKey(new Date()));
  const [showRecipePicker, setShowRecipePicker] = useState(false);
  const [selectedMealType, setSelectedMealType] = useState<MealType>('lunch');
  const [recipeSearch, setRecipeSearch] = useState('');

  const weekDates = useMemo(() => getWeekDates(baseDate), [baseDate]);

  const selectedPlans = useMemo(
    () => getMealPlansForDate(selectedDate),
    [getMealPlansForDate, selectedDate],
  );

  const navigateWeek = (direction: number) => {
    hapticLight();
    setBaseDate(prev => {
      const d = new Date(prev);
      d.setDate(d.getDate() + direction * 7);
      return d;
    });
  };

  const handleAddMeal = (mealType: MealType) => {
    hapticLight();
    setSelectedMealType(mealType);
    setRecipeSearch('');
    setShowRecipePicker(true);
  };

  const recipePickerOptions = useMemo(() => {
    const purchasedProducts = userProfile.purchasedProducts || [];
    return countries.filter(c => isCountryAccessible(c, purchasedProducts)).flatMap(c => {
      const items: { label: string; countryName: string; countryId: string; recipeId: string }[] = [];
      const countryName = translateContent(c.name, lang);
      // For dessert slot: only show desserts. For lunch/dinner: only show main dishes.
      if (selectedMealType === 'dessert') {
        if (c.dessert) {
          const dessertName = translateContent(c.dessert.name, lang);
          items.push({
            label: dessertName,
            countryName,
            countryId: c.id,
            recipeId: c.dessert.id,
          });
        }
      } else {
        if (c.mainDish) {
          const mainName = translateContent(c.mainDish.name, lang);
          items.push({
            label: mainName,
            countryName,
            countryId: c.id,
            recipeId: c.mainDish.id,
          });
        }
      }
      return items;
    });
  }, [countries, userProfile.purchasedProducts, lang, selectedMealType]);

  const filteredPickerOptions = useMemo(() => {
    if (!recipeSearch.trim()) return recipePickerOptions;
    const q = recipeSearch.toLowerCase();
    return recipePickerOptions.filter(
      opt => opt.label.toLowerCase().includes(q) || opt.countryName.toLowerCase().includes(q)
    );
  }, [recipePickerOptions, recipeSearch]);

  const handleSelectRecipe = (opt: { countryId: string; recipeId: string }) => {
    hapticSuccess();
    addMealPlan({
      id: `${selectedDate}-${selectedMealType}-${Date.now()}`,
      date: selectedDate,
      countryId: opt.countryId,
      recipeId: opt.recipeId,
      mealType: selectedMealType,
    });
    setShowRecipePicker(false);
  };

  const handleRemovePlan = (planId: string) => {
    hapticLight();
    removeMealPlan(planId);
  };

  const handleAddToShoppingList = (plan: MealPlan) => {
    hapticSuccess();
    addMealPlanToShoppingList(plan);
    Alert.alert(t.mealPlan.added, t.mealPlan.ingredientsAdded);
  };

  const handleAddWeekToShoppingList = () => {
    hapticSuccess();
    const weekPlans = mealPlans.filter(p => weekDates.includes(p.date));
    if (weekPlans.length === 0) {
      Alert.alert(t.mealPlan.emptyWeek, t.mealPlan.emptyWeekDesc);
      return;
    }
    for (const plan of weekPlans) {
      addMealPlanToShoppingList(plan);
    }
    Alert.alert(t.mealPlan.added, t.mealPlan.ingredientsAdded);
  };

  const handleExportWeek = async () => {
    hapticLight();
    const weekPlans = mealPlans.filter(p => weekDates.includes(p.date));
    if (weekPlans.length === 0) {
      Alert.alert(t.mealPlan.emptyWeek, t.mealPlan.emptyWeekDesc);
      return;
    }

    let text = `${t.mealPlan.exportWeek}\n\n`;
    for (const date of weekDates) {
      const dayPlans = weekPlans.filter(p => p.date === date);
      if (dayPlans.length === 0) continue;

      text += `${formatDate(date, lang)}:\n`;
      for (const plan of dayPlans) {
        const c = countries.find(cn => cn.id === plan.countryId);
        if (!c) continue;
        const recipe = getPlannedRecipe(c, plan);
        if (!recipe) continue;
        const recipeName = translateContent(recipe.name, lang);
        text += `  ${mealTypeLabel(plan.mealType)}: ${recipeName} (${translateContent(c.name, lang)})\n`;
      }
      text += '\n';
    }

    // Add combined grocery list
    text += `---\n${t.shopping.title}:\n`;
    // Merge on the English name/unit, show them in the user's language.
    const groceryMap = new Map<string, { name: string; amount: number; unit: string }>();

    for (const plan of weekPlans) {
      const c = countries.find(cn => cn.id === plan.countryId);
      if (!c) continue;
      const recipe = getPlannedRecipe(c, plan);
      if (!recipe) continue;

      for (const ing of recipe.ingredients) {
        const key = `${translateContent(ing.name, 'en').toLowerCase()}|${translateContent(ing.unit, 'en').toLowerCase()}`;
        const existing = groceryMap.get(key);
        if (existing) {
          existing.amount += ing.amount;
        } else {
          groceryMap.set(key, {
            name: translateContent(ing.name, lang),
            amount: ing.amount,
            unit: translateContent(ing.unit, lang),
          });
        }
      }
    }

    for (const val of groceryMap.values()) {
      text += `  - ${val.amount.toFixed(1)} ${val.unit} ${val.name}\n`;
    }

    try {
      await Share.share({
        message: text,
        title: t.mealPlan.exportWeek,
      });
    } catch {
      // User cancelled
    }
  };

  const getRecipeInfo = (plan: MealPlan) => {
    const c = countries.find(cn => cn.id === plan.countryId);
    if (!c) return null;
    const recipe = getPlannedRecipe(c, plan);
    if (!recipe) return null;
    return {
      name: translateContent(recipe.name, lang),
      countryName: translateContent(c.name, lang),
      cookingTime: recipe.cookingTime,
    };
  };

  const today = toDateKey(new Date());

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>{t.mealPlan.title}</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity
              style={styles.headerBtn}
              onPress={handleAddWeekToShoppingList}
              accessibilityRole="button"
              accessibilityLabel={shopping.addWeek}
            >
              <ListPlus size={18} color={colors.terracotta} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerBtn}
              onPress={handleExportWeek}
              accessibilityRole="button"
              accessibilityLabel={shopping.shareWeek}
            >
              <Share2 size={18} color={colors.terracotta} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerBtn}
              onPress={() => {
                hapticLight();
                router.push('/shopping-list');
              }}
              accessibilityRole="button"
              accessibilityLabel={
                toBuyCount > 0
                  ? `${shopping.openList}, ${fill(shopping.toBuyCount, { count: toBuyCount })}`
                  : shopping.openList
              }
            >
              <ShoppingCart size={18} color={colors.terracotta} />
              {toBuyCount > 0 && (
                <View style={styles.cartBadge} pointerEvents="none">
                  <Text style={styles.cartBadgeText}>{toBuyCount > 99 ? '99+' : toBuyCount}</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Week Navigation */}
        <View style={styles.weekNav}>
          <TouchableOpacity onPress={() => navigateWeek(-1)} style={styles.navBtn}>
            <ChevronLeft size={24} color={colors.text} />
          </TouchableOpacity>
          <Text style={styles.weekLabel}>
            {formatDate(weekDates[0], lang)} – {formatDate(weekDates[6], lang)}
          </Text>
          <TouchableOpacity onPress={() => navigateWeek(1)} style={styles.navBtn}>
            <ChevronRight size={24} color={colors.text} />
          </TouchableOpacity>
        </View>

        {/* Day Selector */}
        <View style={styles.dayRow}>
          {weekDates.map(date => {
            const isSelected = date === selectedDate;
            const isToday = date === today;
            const dayPlans = getMealPlansForDate(date);
            return (
              <TouchableOpacity
                key={date}
                style={[
                  styles.dayCell,
                  isSelected && styles.dayCellSelected,
                  isToday && !isSelected && styles.dayCellToday,
                ]}
                onPress={() => {
                  hapticLight();
                  setSelectedDate(date);
                }}
              >
                <Text
                  style={[
                    styles.dayName,
                    isSelected && styles.dayNameSelected,
                  ]}
                >
                  {formatShortDay(date, lang)}
                </Text>
                <Text
                  style={[
                    styles.dayNum,
                    isSelected && styles.dayNumSelected,
                  ]}
                >
                  {formatDayNum(date)}
                </Text>
                {dayPlans.length > 0 && (
                  <View
                    style={[
                      styles.dot,
                      isSelected && styles.dotSelected,
                    ]}
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Selected Day */}
        <Text style={styles.selectedDayLabel}>{formatDate(selectedDate, lang)}</Text>

        {/* Meal Slots */}
        {MEAL_TYPES.map(mealType => {
          const plans = selectedPlans.filter(p => p.mealType === mealType);

          return (
            <View key={mealType} style={styles.mealSlot}>
              <Text style={styles.mealTypeLabel}>{mealTypeLabel(mealType)}</Text>
              {plans.length > 0 ? (
                <>
                  {plans.map(plan => {
                    const info = getRecipeInfo(plan);
                    if (!info) return null;
                    return (
                      <View key={plan.id} style={styles.mealCard}>
                        <View style={styles.mealIcon}>
                          <MapPin size={18} color={colors.terracotta} />
                        </View>
                        <View style={styles.mealInfo}>
                          <Text style={styles.mealName} numberOfLines={1}>
                            {info.name}
                          </Text>
                          <Text style={styles.mealCountry}>
                            {info.countryName} · {info.cookingTime} min
                          </Text>
                        </View>
                        <View style={styles.mealActions}>
                          <TouchableOpacity
                            onPress={() => handleAddToShoppingList(plan)}
                            style={styles.mealActionBtn}
                          >
                            <ShoppingCart size={16} color={colors.sage} />
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => handleRemovePlan(plan.id)}
                            style={styles.mealActionBtn}
                          >
                            <Trash2 size={16} color={colors.error} />
                          </TouchableOpacity>
                        </View>
                      </View>
                    );
                  })}
                  <TouchableOpacity
                    style={styles.emptySlot}
                    onPress={() => handleAddMeal(mealType)}
                  >
                    <Plus size={20} color={colors.textTertiary} />
                    <Text style={styles.emptySlotText}>{t.mealPlan.addRecipe}</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <TouchableOpacity
                  style={styles.emptySlot}
                  onPress={() => handleAddMeal(mealType)}
                >
                  <Plus size={20} color={colors.textTertiary} />
                  <Text style={styles.emptySlotText}>{t.mealPlan.addRecipe}</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })}

        {/* Empty state */}
        {selectedPlans.length === 0 && (
          <View style={styles.emptyState}>
            <CalendarDays size={48} color={colors.textTertiary} />
            <Text style={styles.emptyStateText}>
              {t.mealPlan.noMeals}
            </Text>
            <Text style={styles.emptyStateSubtext}>
              {t.mealPlan.noMealsDesc}
            </Text>
          </View>
        )}

        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Recipe Picker Modal */}
      <Modal
        visible={showRecipePicker}
        animationType="slide"
        transparent
        onRequestClose={() => setShowRecipePicker(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalSheet}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{mealTypeLabel(selectedMealType)}</Text>
              <TouchableOpacity onPress={() => setShowRecipePicker(false)} style={styles.modalCloseBtn}>
                <X size={22} color={colors.text} />
              </TouchableOpacity>
            </View>
            <View style={styles.modalSearchRow}>
              <Search size={18} color={colors.textTertiary} />
              <TextInput
                style={styles.modalSearchInput}
                placeholder={t.mealPlan.searchRecipes}
                placeholderTextColor={colors.textTertiary}
                value={recipeSearch}
                onChangeText={setRecipeSearch}
                autoCapitalize="none"
              />
              {recipeSearch.length > 0 && (
                <TouchableOpacity onPress={() => setRecipeSearch('')}>
                  <X size={18} color={colors.textTertiary} />
                </TouchableOpacity>
              )}
            </View>
            <FlatList
              data={filteredPickerOptions}
              keyExtractor={(item, idx) => `${item.countryId}-${item.recipeId}-${idx}`}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalRecipeItem}
                  onPress={() => handleSelectRecipe(item)}
                  activeOpacity={0.7}
                >
                  <View style={styles.modalRecipeIcon}>
                    <MapPin size={18} color={colors.terracotta} />
                  </View>
                  <View style={styles.modalRecipeInfo}>
                    <Text style={styles.modalRecipeName} numberOfLines={1}>{item.label}</Text>
                    <Text style={styles.modalRecipeCountry}>{item.countryName}</Text>
                  </View>
                </TouchableOpacity>
              )}
              ListEmptyComponent={
                <Text style={styles.modalEmptyText}>{t.mealPlan.noSearchResults}</Text>
              }
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.modalListContent}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '700' as const,
    color: colors.text,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 8,
  },
  headerBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    minWidth: 18,
    height: 18,
    paddingHorizontal: 4,
    borderRadius: 9,
    backgroundColor: colors.brand,
    borderWidth: 2,
    borderColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '700' as const,
    lineHeight: 12,
  },
  weekNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  navBtn: {
    padding: 8,
  },
  weekLabel: {
    fontSize: 15,
    fontWeight: '600' as const,
    color: colors.text,
  },
  dayRow: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    gap: 4,
    marginBottom: 16,
  },
  dayCell: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: colors.surface,
  },
  dayCellSelected: {
    backgroundColor: colors.terracotta,
  },
  dayCellToday: {
    borderWidth: 2,
    borderColor: colors.terracotta,
  },
  dayName: {
    fontSize: 11,
    fontWeight: '600' as const,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  dayNameSelected: {
    color: '#FFF',
  },
  dayNum: {
    fontSize: 16,
    fontWeight: '700' as const,
    color: colors.text,
  },
  dayNumSelected: {
    color: '#FFF',
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: colors.terracotta,
    marginTop: 4,
  },
  dotSelected: {
    backgroundColor: '#FFF',
  },
  selectedDayLabel: {
    fontSize: 17,
    fontWeight: '600' as const,
    color: colors.text,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  mealSlot: {
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  mealTypeLabel: {
    fontSize: 13,
    fontWeight: '600' as const,
    color: colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  mealCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 14,
    gap: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  mealIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mealInfo: {
    flex: 1,
  },
  mealName: {
    fontSize: 15,
    fontWeight: '600' as const,
    color: colors.text,
  },
  mealCountry: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 2,
  },
  mealActions: {
    flexDirection: 'row',
    gap: 8,
  },
  mealActionBtn: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptySlot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    borderStyle: 'dashed',
  },
  emptySlotText: {
    fontSize: 14,
    color: colors.textTertiary,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 40,
    gap: 8,
  },
  emptyStateText: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: colors.textSecondary,
    marginTop: 8,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: colors.textTertiary,
  },
  bottomPadding: {
    height: 40,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  modalSheet: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '75%',
    paddingBottom: 34,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.text,
  },
  modalCloseBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalSearchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 12,
    backgroundColor: colors.surface,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  modalSearchInput: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
    padding: 0,
  },
  modalListContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  modalRecipeItem: {
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
  modalRecipeIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalRecipeInfo: {
    flex: 1,
  },
  modalRecipeName: {
    fontSize: 15,
    fontWeight: '600' as const,
    color: colors.text,
  },
  modalRecipeCountry: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 2,
  },
  modalEmptyText: {
    fontSize: 15,
    color: colors.textTertiary,
    textAlign: 'center',
    paddingVertical: 30,
  },
});
