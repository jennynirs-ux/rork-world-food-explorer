import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Share, TextInput, Alert, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { ArrowLeft, Check, X, Share2, Trash2, ShoppingCart, Search } from 'lucide-react-native';
import { useMemo, useState } from 'react';
import { hapticLight } from '@/lib/haptics';
import { APP_LINK } from '@/lib/share';
import { formatAmount } from '@/lib/format-amount';
import { translateContent, type TranslatableContent } from '@/lib/translate-content';
import { fill, useStrings } from '@/lib/strings';
import { shoppingStrings } from '@/lib/strings/cookbook';
import type { ShoppingListItem } from '@/types';

/** Show the search field once the list is long enough to need it. */
const SEARCH_THRESHOLD = 5;

type ItemRowProps = {
  item: ShoppingListItem;
  countryName: string;
  fromLabel: string;
  removeLabel: string;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
};

function ItemRow({ item, countryName, fromLabel, removeLabel, onToggle, onRemove }: ItemRowProps) {
  const label = [formatAmount(item.amount), item.unit, item.name].filter(Boolean).join(' ');
  return (
    <View style={[styles.itemCard, item.checked && styles.itemCardChecked]}>
      <TouchableOpacity
        style={styles.itemMain}
        onPress={() => { hapticLight(); onToggle(item.id); }}
        activeOpacity={0.7}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: item.checked }}
        accessibilityLabel={label}
      >
        {item.checked ? (
          <View style={styles.checkboxChecked}>
            <Check size={16} color="#FFF" />
          </View>
        ) : (
          <View style={styles.checkboxUnchecked} />
        )}
        <View style={styles.itemInfo}>
          <Text style={[styles.itemName, item.checked && styles.itemNameChecked]}>{label}</Text>
          {!!countryName && <Text style={styles.itemCountry}>{fromLabel} {countryName}</Text>}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onRemove(item.id)}
        style={styles.deleteButton}
        hitSlop={8}
        accessibilityRole="button"
        accessibilityLabel={fill(removeLabel, { item: item.name })}
      >
        <X size={20} color="#EF4444" />
      </TouchableOpacity>
    </View>
  );
}

export default function ShoppingListScreen() {
  const router = useRouter();
  const { shoppingList, toggleShoppingItem, removeShoppingItem, clearShoppingList, countries } = useApp();
  const { t, language } = useTranslation();
  const s = useStrings(shoppingStrings);
  const [searchQuery, setSearchQuery] = useState('');

  // Items store the country name in the language used when they were added;
  // show it in the current language when the country is known.
  const countryNames = useMemo(
    () => new Map(countries.map(c => [c.id, translateContent(c.name, language)])),
    [countries, language],
  );
  const countryNameFor = (item: ShoppingListItem) =>
    countryNames.get(item.countryId) || translateContent(item.countryName as TranslatableContent, language);

  const goBack = () => {
    if (router.canGoBack()) router.back();
    else router.replace('/meal-plan');
  };

  const handleShare = async () => {
    const listText = shoppingList
      .map(item => `${item.checked ? '✓' : '○'} ${[formatAmount(item.amount), item.unit, item.name].filter(Boolean).join(' ')} (${countryNameFor(item)})`)
      .join('\n');

    try {
      await Share.share({
        message: `🛒 ${t.shopping.title}:\n\n${listText}\n\n🌍 ${s.madeWith}\n${APP_LINK}`,
        url: APP_LINK,
      });
    } catch {
      Alert.alert(t.shopping.sharingFailedTitle, t.shopping.sharingFailedMessage);
    }
  };

  const handleClear = () => {
    const doClear = () => {
      setSearchQuery('');
      void clearShoppingList();
    };
    // Alert buttons are a no-op in react-native-web.
    if (Platform.OS === 'web') {
      if (typeof window !== 'undefined' && window.confirm(`${t.shopping.clearConfirmTitle}\n\n${t.shopping.clearConfirmMessage}`)) {
        doClear();
      }
      return;
    }
    Alert.alert(t.shopping.clearConfirmTitle, t.shopping.clearConfirmMessage, [
      { text: t.shopping.clearConfirmCancel, style: 'cancel' },
      { text: t.shopping.clearConfirmClear, style: 'destructive', onPress: doClear },
    ]);
  };

  const query = searchQuery.trim().toLowerCase();
  const filteredList = query
    ? shoppingList.filter(item =>
        item.name.toLowerCase().includes(query) || countryNameFor(item).toLowerCase().includes(query))
    : shoppingList;

  const uncheckedItems = filteredList.filter(item => !item.checked);
  const checkedItems = filteredList.filter(item => item.checked);
  const showSearch = shoppingList.length > SEARCH_THRESHOLD || searchQuery.length > 0;

  const renderItem = (item: ShoppingListItem) => (
    <ItemRow
      key={item.id}
      item={item}
      countryName={countryNameFor(item)}
      fromLabel={t.shopping.from}
      removeLabel={s.removeItem}
      onToggle={toggleShoppingItem}
      onRemove={removeShoppingItem}
    />
  );

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={goBack}
          style={styles.backButton}
          accessibilityRole="button"
          accessibilityLabel={t.common.back}
        >
          <ArrowLeft size={24} color="#2D1B00" />
        </TouchableOpacity>
        <Text style={styles.topBarTitle} accessibilityRole="header">{t.shopping.title}</Text>
        <View style={{ width: 40 }} />
      </View>

      {shoppingList.length === 0 ? (
        <View style={styles.emptyState}>
          <ShoppingCart size={80} color="#D1D5DB" />
          <Text style={styles.emptyTitle}>{t.shopping.noItems}</Text>
          <Text style={styles.emptyText}>
            {t.shopping.noItemsDesc}
          </Text>
          <TouchableOpacity
            style={styles.browseButton}
            onPress={() => router.dismissTo('/')}
            accessibilityRole="button"
          >
            <Text style={styles.browseButtonText}>{t.shopping.browseRecipes}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionButton} onPress={handleShare} accessibilityRole="button">
              <Share2 size={20} color="#FF6B35" />
              <Text style={styles.actionButtonText}>{t.shopping.shareList}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, styles.actionButtonDanger]}
              onPress={handleClear}
              accessibilityRole="button"
            >
              <Trash2 size={20} color="#EF4444" />
              <Text style={styles.actionButtonTextDanger}>{t.shopping.clearAll}</Text>
            </TouchableOpacity>
          </View>

          {showSearch && (
            <View style={styles.searchContainer}>
              <Search size={18} color="#9CA3AF" />
              <TextInput
                style={styles.searchInput}
                placeholder={t.shopping.searchIngredients}
                placeholderTextColor="#9CA3AF"
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="search"
              />
              {searchQuery.length > 0 && (
                <TouchableOpacity
                  onPress={() => setSearchQuery('')}
                  hitSlop={8}
                  accessibilityRole="button"
                  accessibilityLabel={s.clearSearch}
                >
                  <X size={18} color="#9CA3AF" />
                </TouchableOpacity>
              )}
            </View>
          )}

          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {filteredList.length === 0 && (
              <Text style={styles.noMatches}>{fill(s.noMatches, { query: searchQuery.trim() })}</Text>
            )}

            {uncheckedItems.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                  {t.shopping.toBuy} ({uncheckedItems.length})
                </Text>
                {uncheckedItems.map(renderItem)}
              </View>
            )}

            {checkedItems.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                  {t.shopping.checked} ({checkedItems.length})
                </Text>
                {checkedItems.map(renderItem)}
              </View>
            )}

            <View style={{ height: 20 }} />
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  topBarTitle: {
    fontSize: 18,
    fontWeight: '600' as const,
    color: '#2D1B00',
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 12,
    borderRadius: 12,
    gap: 8,
    borderWidth: 1,
    borderColor: '#FF6B35',
  },
  actionButtonText: {
    color: '#FF6B35',
    fontSize: 14,
    fontWeight: '600' as const,
  },
  actionButtonDanger: {
    borderColor: '#FEE2E2',
  },
  actionButtonTextDanger: {
    color: '#EF4444',
    fontSize: 14,
    fontWeight: '600' as const,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: '700' as const,
    color: '#2D1B00',
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  browseButton: {
    marginTop: 20,
    backgroundColor: '#FF6B35',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
  },
  browseButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600' as const,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginHorizontal: 16,
    marginBottom: 12,
    gap: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#2D1B00',
    padding: 0,
  },
  scrollView: {
    flex: 1,
  },
  noMatches: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    paddingHorizontal: 32,
    paddingVertical: 32,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: '#2D1B00',
    marginBottom: 12,
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingRight: 12,
    marginBottom: 8,
  },
  itemCardChecked: {
    opacity: 0.6,
  },
  itemMain: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 16,
    paddingLeft: 16,
    paddingRight: 8,
  },
  checkboxUnchecked: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#D1D5DB',
  },
  checkboxChecked: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: '#2D1B00',
    marginBottom: 4,
  },
  itemNameChecked: {
    textDecorationLine: 'line-through',
    color: '#6B7280',
  },
  itemCountry: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  deleteButton: {
    padding: 4,
  },
});
