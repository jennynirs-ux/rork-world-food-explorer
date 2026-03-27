import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, ActivityIndicator, Alert } from 'react-native';
import { Lock, Globe, X, Check, RotateCcw } from 'lucide-react-native';
import colors from '@/constants/colors';
import { MONETIZATION_PRODUCTS, PRODUCT_IDS } from '@/constants/monetization';
import { Country, TranslatedString } from '@/types';
import { getCountriesByContinent } from '@/lib/access-control';
import { purchaseProductById, restorePurchases, isPurchasesConfigured, getOfferings } from '@/lib/purchases';
import { hapticHeavy, hapticSuccess, hapticError } from '@/lib/haptics';

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
  const [purchasing, setPurchasing] = useState<string | null>(null);
  const [restoring, setRestoring] = useState(false);

  // Fetch localized prices from RevenueCat offerings
  const [dynamicPrices, setDynamicPrices] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!visible) return;
    let cancelled = false;
    const loadPrices = async () => {
      try {
        const packages = await getOfferings();
        if (cancelled || packages.length === 0) return;
        const prices: Record<string, string> = {};
        for (const pkg of packages) {
          prices[pkg.product.identifier] = pkg.product.priceString;
        }
        setDynamicPrices(prices);
      } catch {
        // Fall back to hardcoded prices — non-fatal
      }
    };
    void loadPrices();
    return () => { cancelled = true; };
  }, [visible]);

  const handlePurchase = async (productId: string) => {
    hapticHeavy();
    setPurchasing(productId);
    try {
      const entitlements = await purchaseProductById(productId);
      if (entitlements.length > 0) {
        entitlements.forEach((id) => onPurchase(id));
      } else {
        // Mock mode or user cancelled
        onPurchase(productId);
      }
      hapticSuccess();
      onClose();
    } catch (error: any) {
      hapticError();
      Alert.alert(
        'Purchase Failed',
        error.message || 'Something went wrong. Please try again.',
      );
    } finally {
      setPurchasing(null);
    }
  };

  const handleRestore = async () => {
    setRestoring(true);
    try {
      const entitlements = await restorePurchases();
      if (entitlements.length > 0) {
        hapticSuccess();
        entitlements.forEach((id) => onPurchase(id));
        Alert.alert('Restored!', `${entitlements.length} purchase(s) restored successfully.`);
        onClose();
      } else {
        Alert.alert('No Purchases Found', 'No previous purchases were found to restore.');
      }
    } catch (error: any) {
      Alert.alert(
        'Restore Failed',
        error.message || 'Could not restore purchases. Please try again.',
      );
    } finally {
      setRestoring(false);
    }
  };

  const getCountryCount = (continent?: string) => {
    if (!continent) return countries.length;
    return getCountriesByContinent(countries, continent).length;
  };

  const isPurchased = (productId: string) => {
    return purchasedProducts.includes(productId);
  };

  const isRevenueCatReady = isPurchasesConfigured();

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
                const isPurchasing = purchasing === product.id;

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
                        {dynamicPrices[product.id] || product.price}
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
                          disabled={!!purchasing || restoring}
                        >
                          {isPurchasing ? (
                            <ActivityIndicator size="small" color="#FFF" />
                          ) : (
                            <Text style={[
                              styles.purchaseButtonText,
                              isWorldUnlock && styles.purchaseButtonTextFeatured
                            ]}>
                              Unlock Now
                            </Text>
                          )}
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                );
              })}
            </View>

            <View style={styles.footer}>
              <TouchableOpacity
                style={styles.restoreButton}
                onPress={handleRestore}
                disabled={!!purchasing || restoring}
              >
                {restoring ? (
                  <ActivityIndicator size="small" color={colors.terracotta} />
                ) : (
                  <>
                    <RotateCcw size={16} color={colors.terracotta} />
                    <Text style={styles.restoreButtonText}>Restore Purchases</Text>
                  </>
                )}
              </TouchableOpacity>
              {!isRevenueCatReady && __DEV__ && (
                <Text style={styles.devNote}>
                  Dev mode: purchases are mocked
                </Text>
              )}
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
    minWidth: 120,
    alignItems: 'center',
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
    gap: 8,
  },
  restoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  restoreButtonText: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: colors.terracotta,
  },
  devNote: {
    fontSize: 11,
    color: colors.textTertiary,
    fontStyle: 'italic',
  },
});
