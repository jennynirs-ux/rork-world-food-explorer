import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useApp } from '@/contexts/AppContext';
import { ShoppingCart, Trash2 } from 'lucide-react-native';

export default function ShopScreen() {
  const { shoppingList, removeShoppingItem, clearShoppingList } = useApp();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <ShoppingCart size={32} color="#FF6B35" />
        <View style={styles.headerContent}>
          <Text style={styles.title}>Shopping List</Text>
          <Text style={styles.subtitle}>{shoppingList.length} items</Text>
        </View>
        {shoppingList.length > 0 && (
          <TouchableOpacity onPress={clearShoppingList} style={styles.clearButton}>
            <Trash2 size={20} color="#EF4444" />
          </TouchableOpacity>
        )}
      </View>

      {shoppingList.length === 0 ? (
        <View style={styles.emptyState}>
          <ShoppingCart size={64} color="#D1D5DB" />
          <Text style={styles.emptyTitle}>Your shopping list is empty</Text>
          <Text style={styles.emptyText}>
            Add ingredients from country recipes to create your shopping list
          </Text>
        </View>
      ) : (
        <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
          {shoppingList.map((item) => (
            <View key={item.id} style={styles.itemCard}>
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>
                  {item.name} ({item.amount} {item.unit})
                </Text>
                <Text style={styles.itemCountry}>{item.countryName}</Text>
              </View>
              <TouchableOpacity
                onPress={() => removeShoppingItem(item.id)}
                style={styles.removeButton}
              >
                <Trash2 size={18} color="#EF4444" />
              </TouchableOpacity>
            </View>
          ))}
          <View style={{ height: 100 }} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
  },
  headerContent: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: '700' as const,
    color: '#2D1B00',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 4,
  },
  clearButton: {
    padding: 8,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: '#2D1B00',
    marginTop: 24,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  list: {
    flex: 1,
    paddingHorizontal: 16,
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    gap: 12,
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
  itemCountry: {
    fontSize: 14,
    color: '#6B7280',
  },
  removeButton: {
    padding: 8,
  },
});
