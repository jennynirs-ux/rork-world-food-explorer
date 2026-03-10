import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { Lock, Globe, X, Check } from 'lucide-react-native';
import colors from '@/constants/colors';
import { MONETIZATION_PRODUCTS, PRODUCT_IDS } from '@/constants/monetization';
import { Country, TranslatedString } from '@/types';
import { getCountriesByContinent } from '@/lib/access-control';

function getTranslatedName(name: TranslatedString): string {
  if (typeof name === 'string') return name;
  return name.en;
}

type PaywallProps = {
  visible: boolean;
  onClose: () => void;
  country?: Country;
  countries: Country[];
  onPurchase: (productId: string) => void;
  purchasedProducts: string[];
};

export default function Paywall({
  visible,
  onClose,
  country,
  countries,
  onPurchase,
  purchasedProducts,
}: PaywallProps) {
  const handlePurchase = (productId: string) => {
    onPurchase(productId);
    onClose();
  };

  const getCountryCount = (continent?: string) => {
    if (!continent) return countries.length;
    if (continent === 'Americas') {
      return getCountriesByContinent(countries, 'Americas').length;
    }
    return getCountriesByContinent(countries, continent).length;
  };

  const isPurchased = (productId: string) => {
    return purchasedProducts.includes(productId);
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <X size={24} color={colors.text} />
          </TouchableOpacity>

          <ScrollView 
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
            bounces={false}
          >
            <View style={styles.header}>
              <View style={styles.lockIconContainer}>
                <Lock size={48} color={colors.terracotta} />
              </View>
              <Text style={styles.title}>Unlock More Countries</Text>
              {country && (
                <Text style={styles.subtitle}>
                  {country.flag} {getTranslatedName(country.name)} is locked
                </Text>
              )}
              <Text style={styles.description}>
                Choose a pack to unlock countries and explore their cuisines
              </Text>
            </View>

            <View style={styles.productsContainer}>
              {MONETIZATION_PRODUCTS.map((product) => {
                const isWorldUnlock = product.id === PRODUCT_IDS.WORLD_UNLOCK_ALL;
                const countryCount = getCountryCount(product.continent);
                const purchased = isPurchased(product.id);

                return (
                  <View
                    key={product.id}
                    style={[
                      styles.productCard,
                      isWorldUnlock && styles.productCardFeatured,
                      purchased && styles.productCardPurchased,
                    ]}
                  >
                    {isWorldUnlock && (
                      <View style={styles.featuredBadge}>
                        <Text style={styles.featuredBadgeText}>BEST VALUE</Text>
                      </View>
                    )}
                    
                    <View style={styles.productHeader}>
                      <View style={styles.productIcon}>
                        <Globe 
                          size={24} 
                          color={isWorldUnlock ? colors.sand : colors.terracotta} 
                        />
                      </View>
                      <View style={styles.productInfo}>
                        <Text style={[
                          styles.productName,
                          isWorldUnlock && styles.productNameFeatured
                        ]}>
                          {product.name}
                        </Text>
                        <Text style={styles.productDescription}>
                          {product.description}
                        </Text>
                        <Text style={styles.countryCount}>
                          {countryCount} countries
                        </Text>
                      </View>
                    </View>

                    <View style={styles.productFooter}>
                      <Text style={[
                        styles.productPrice,
                        isWorldUnlock && styles.productPriceFeatured
                      ]}>
                        {product.price}
                      </Text>
                      
                      {purchased ? (
                        <View style={styles.purchasedButton}>
                          <Check size={20} color={colors.sage} />
                          <Text style={styles.purchasedButtonText}>Purchased</Text>
                        </View>
                      ) : (
                        <TouchableOpacity
                          style={[
                            styles.purchaseButton,
                            isWorldUnlock && styles.purchaseButtonFeatured,
                          ]}
                          onPress={() => handlePurchase(product.id)}
                        >
                          <Text style={[
                            styles.purchaseButtonText,
                            isWorldUnlock && styles.purchaseButtonTextFeatured
                          ]}>
                            Unlock Now
                          </Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                );
              })}
            </View>

            <View style={styles.footer}>
              <Text style={styles.footerText}>
                All purchases are for demonstration purposes.
              </Text>
              <Text style={styles.footerText}>
                In production, this would integrate with RevenueCat.
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '90%',
    paddingTop: 20,
  },
  scrollView: {
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  lockIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.sand,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700' as const,
    color: colors.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: colors.textSecondary,
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  productsContainer: {
    paddingHorizontal: 24,
    gap: 16,
  },
  productCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 20,
    borderWidth: 2,
    borderColor: colors.border,
  },
  productCardFeatured: {
    borderColor: colors.terracotta,
    backgroundColor: '#FFF9F5',
  },
  productCardPurchased: {
    borderColor: colors.sage,
    opacity: 0.7,
  },
  featuredBadge: {
    position: 'absolute',
    top: -10,
    right: 20,
    backgroundColor: colors.terracotta,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  featuredBadgeText: {
    fontSize: 12,
    fontWeight: '700' as const,
    color: '#FFF',
    letterSpacing: 0.5,
  },
  productHeader: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  productIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.sand,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.text,
    marginBottom: 4,
  },
  productNameFeatured: {
    color: colors.terracotta,
  },
  productDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 4,
  },
  countryCount: {
    fontSize: 13,
    color: colors.textTertiary,
    fontWeight: '600' as const,
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 24,
    fontWeight: '700' as const,
    color: colors.text,
  },
  productPriceFeatured: {
    color: colors.terracotta,
  },
  purchaseButton: {
    backgroundColor: colors.terracotta,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  purchaseButtonFeatured: {
    backgroundColor: colors.earthBrown,
  },
  purchaseButtonText: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: '#FFF',
  },
  purchaseButtonTextFeatured: {
    color: colors.sand,
  },
  purchasedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: colors.sand,
  },
  purchasedButtonText: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: colors.sage,
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: colors.textTertiary,
    textAlign: 'center',
    lineHeight: 18,
  },
});
