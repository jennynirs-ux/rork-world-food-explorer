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
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Trash2,
  ShoppingCart,
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
import { MealPlan } from '@/types';

const MEAL_TYPES = ['lunch', 'dinner', 'dessert'] as const;
type MealType = typeof MEAL_TYPES[number];

function getWeekDates(baseDate: Date): string[] {
  const dates: string[] = [];
  const day = baseDate.getDay();
  const monday = new Date(baseDate);
  monday.setDate(baseDate.getDate() - ((day + 6) % 7));

  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    dates.push(d.toISOString().split('T')[0]);
  }
  return dates;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en', { weekday: 'short', month: 'short', day: 'numeric' });
}

function formatShortDay(dateStr: string): string {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en', { weekday: 'short' });
}

function formatDayNum(dateStr: string): string {
  const d = new Date(dateStr + 'T12:00:00');
  return d.getDate().toString();
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
  } = useApp();
  const { t } = useTranslation();

  const lang = userProfile.language || 'en';
  const [baseDate, setBaseDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0],
  );
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
      const mainName = translateContent(c.mainDish.name, lang);
      items.push({
        label: mainName,
        countryName,
        countryId: c.id,
        recipeId: c.mainDish.id,
      });
      if (c.dessert && selectedMealType === 'dessert') {
        const dessertName = translateContent(c.dessert.name, lang);
        items.push({
          label: dessertName,
          countryName,
          countryId: c.id,
          recipeId: c.dessert.id,
        });
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
    Alert.alert(t.mealPlan.added, 'Ingredients added to shopping list');
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
    Alert.alert(t.mealPlan.added, `Ingredients for ${weekPlans.length} meals added to shopping list`);
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

      text += `${formatDate(date)}:\n`;
      for (const plan of dayPlans) {
        const c = countries.find(cn => cn.id === plan.countryId);
        if (!c) continue;
        const recipe = plan.recipeId.endsWith('-dessert') ? c.dessert : c.mainDish;
        if (!recipe) continue;
        const recipeName = translateContent(recipe.name, lang);
        text += `  ${plan.mealType}: ${recipeName} (${translateContent(c.name, lang)})\n`;
      }
      text += '\n';
    }

    // Add combined grocery list
    text += '---\nGrocery List:\n';
    const groceryMap = new Map<string, { amount: number; unit: string }>();

    for (const plan of weekPlans) {
      const c = countries.find(cn => cn.id === plan.countryId);
      if (!c) continue;
      const recipe = plan.recipeId.endsWith('-dessert') ? c.dessert : c.mainDish;
      if (!recipe) continue;

      for (const ing of recipe.ingredients) {
        const name = typeof ing.name === 'string' ? ing.name : ing.name.en;
        const unit = typeof ing.unit === 'string' ? ing.unit : ing.unit.en;
        const key = `${name}|${unit}`;
        const existing = groceryMap.get(key);
        if (existing) {
          existing.amount += ing.amount;
        } else {
          groceryMap.set(key, { amount: ing.amount, unit });
        }
      }
    }

    for (const [key, val] of groceryMap.entries()) {
      const name = key.split('|')[0];
      text += `  - ${val.amount.toFixed(1)} ${val.unit} ${name}\n`;
    }

    try {
      await Share.share({
        message: text,
        title: 'Meal Plan',
      });
    } catch {
      // User cancelled
    }
  };

  const getRecipeInfo = (plan: MealPlan) => {
    const c = countries.find(cn => cn.id === plan.countryId);
    if (!c) return null;
    const recipe = plan.recipeId.endsWith('-dessert') ? c.dessert : c.mainDish;
    if (!recipe) return null;
    return {
      name: translateContent(recipe.name, lang),
      countryName: translateContent(c.name, lang),
      cookingTime: recipe.cookingTime,
    };
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>{t.mealPlan.title}</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.headerBtn} onPress={handleAddWeekToShoppingList}>
              <ShoppingCart size={18} color={colors.terracotta} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerBtn} onPress={handleExportWeek}>
              <Share2 size={18} color={colors.terracotta} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Week Navigation */}
        <View style={styles.weekNav}>
          <TouchableOpacity onPress={() => navigateWeek(-1)} style={styles.navBtn}>
            <ChevronLeft size={24} color={colors.text} />
          </TouchableOpacity>
          <Text style={styles.weekLabel}>
            {formatDate(weekDates[0])} – {formatDate(weekDates[6])}
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
                  {formatShortDay(date)}
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
        <Text style={styles.selectedDayLabel}>{formatDate(selectedDate)}</Text>

        {/* Meal Slots */}
        {MEAL_TYPES.map(mealType => {
          const plan = selectedPlans.find(p => p.mealType === mealType);
          const info = plan ? getRecipeInfo(plan) : null;

          return (
            <View key={mealType} style={styles.mealSlot}>
              <Text style={styles.mealTypeLabel}>
                {t.mealPlan[mealType as keyof typeof t.mealPlan] || mealType.charAt(0).toUpperCase() + mealType.slice(1)}
              </Text>
              {plan && info ? (
                <View style={styles.mealCard}>
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
              <Text style={styles.modalTitle}>
                {t.mealPlan[selectedMealType as keyof typeof t.mealPlan] || selectedMealType.charAt(0).toUpperCase() + selectedMealType.slice(1)}
              </Text>
              <TouchableOpacity onPress={() => setShowRecipePicker(false)} style={styles.modalCloseBtn}>
                <X size={22} color={colors.text} />
              </TouchableOpacity>
            </View>
            <View style={styles.modalSearchRow}>
              <Search size={18} color={colors.textTertiary} />
              <TextInput
                style={styles.modalSearchInput}
                placeholder="Search recipes..."
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
                <Text style={styles.modalEmptyText}>No recipes match your search</Text>
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
