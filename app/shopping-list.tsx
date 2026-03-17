import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Share, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { ArrowLeft, Check, X, Share2, Trash2, ShoppingCart, Search } from 'lucide-react-native';
import { useState } from 'react';
import { hapticLight } from '@/lib/haptics';

export default function ShoppingListScreen() {
  const router = useRouter();
  const { shoppingList, toggleShoppingItem, removeShoppingItem, clearShoppingList } = useApp();
  const { t } = useTranslation();

  const handleShare = async () => {
    const listText = shoppingList
      .map(item => `${item.checked ? '✓' : '○'} ${item.amount} ${item.unit} ${item.name} (${item.countryName})`)
      .join('\n');
    
    try {
      await Share.share({
        message: `Shopping List:\n\n${listText}`,
      });
    } catch {
      Alert.alert('Sharing failed', 'Could not share the shopping list. Please try again.');
    }
  };

  const [searchQuery, setSearchQuery] = useState('');

  const filteredList = shoppingList.filter(item => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return item.name.toLowerCase().includes(q) || item.countryName.toLowerCase().includes(q);
  });

  const uncheckedItems = filteredList.filter(item => !item.checked);
  const checkedItems = filteredList.filter(item => item.checked);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#2D1B00" />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>{t.shopping.title}</Text>
        <View style={{ width: 40 }} />
      </View>

      {shoppingList.length === 0 ? (
        <View style={styles.emptyState}>
          <ShoppingCart size={80} color="#D1D5DB" />
          <Text style={styles.emptyTitle}>{t.shopping.noItems}</Text>
          <Text style={styles.emptyText}>
            {t.shopping.noItemsDesc}
          </Text>
        </View>
      ) : (
        <>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
              <Share2 size={20} color="#FF6B35" />
              <Text style={styles.actionButtonText}>{t.shopping.shareList}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, styles.actionButtonDanger]}
              onPress={clearShoppingList}
            >
              <Trash2 size={20} color="#EF4444" />
              <Text style={styles.actionButtonTextDanger}>{t.shopping.clearAll}</Text>
            </TouchableOpacity>
          </View>

          {shoppingList.length > 5 && (
            <View style={styles.searchContainer}>
              <Search size={18} color="#9CA3AF" />
              <TextInput
                style={styles.searchInput}
                placeholder={t.shopping.searchIngredients}
                placeholderTextColor="#9CA3AF"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>
          )}

          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            {uncheckedItems.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                  {t.shopping.toBuy} ({uncheckedItems.length})
                </Text>
                {uncheckedItems.map(item => (
                  <View key={item.id} style={styles.itemCard}>
                    <TouchableOpacity
                      style={styles.checkbox}
                      onPress={() => { hapticLight(); toggleShoppingItem(item.id); }}
                    >
                      <View style={styles.checkboxUnchecked} />
                    </TouchableOpacity>
                    <View style={styles.itemInfo}>
                      <Text style={styles.itemName}>
                        {item.amount} {item.unit} {item.name}
                      </Text>
                      <Text style={styles.itemCountry}>{t.shopping.from} {item.countryName}</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => removeShoppingItem(item.id)}
                      style={styles.deleteButton}
                    >
                      <X size={20} color="#EF4444" />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            )}

            {checkedItems.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                  {t.shopping.checked} ({checkedItems.length})
                </Text>
                {checkedItems.map(item => (
                  <View key={item.id} style={[styles.itemCard, styles.itemCardChecked]}>
                    <TouchableOpacity
                      style={styles.checkbox}
                      onPress={() => { hapticLight(); toggleShoppingItem(item.id); }}
                    >
                      <View style={styles.checkboxChecked}>
                        <Check size={16} color="#FFF" />
                      </View>
                    </TouchableOpacity>
                    <View style={styles.itemInfo}>
                      <Text style={[styles.itemName, styles.itemNameChecked]}>
                        {item.amount} {item.unit} {item.name}
                      </Text>
                      <Text style={styles.itemCountry}>{t.shopping.from} {item.countryName}</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => removeShoppingItem(item.id)}
                      style={styles.deleteButton}
                    >
                      <X size={20} color="#EF4444" />
                    </TouchableOpacity>
                  </View>
                ))}
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
    padding: 16,
    marginBottom: 8,
    gap: 12,
  },
  itemCardChecked: {
    opacity: 0.6,
  },
  checkbox: {
    width: 24,
    height: 24,
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
