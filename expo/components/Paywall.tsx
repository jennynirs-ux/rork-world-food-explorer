import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, ActivityIndicator, Alert, Platform, useWindowDimensions, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Lock, Globe, X, Check, RotateCcw } from 'lucide-react-native';
import type { PurchasesPackage } from 'react-native-purchases';
import colors from '@/constants/colors';
import { MONETIZATION_PRODUCTS, PRODUCT_IDS } from '@/constants/monetization';
import { Country, TranslatedString } from '@/types';
import { getCountriesByContinent } from '@/lib/access-control';
import { getOfferings, purchaseProductById, restorePurchases, isPurchasesConfigured } from '@/lib/purchases';
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
  const [packages, setPackages] = useState<PurchasesPackage[]>([]);
  const [pricesLoading, setPricesLoading] = useState<boolean>(false);
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const isTablet = Math.min(windowWidth, windowHeight) >= 600;

  // Load live prices from RevenueCat / StoreKit whenever the paywall opens.
  // This is the source of truth for what Apple/Google will charge — never
  // display the hardcoded price strings from MONETIZATION_PRODUCTS to users.
  useEffect(() => {
    if (!visible) return;
    if (!isPurchasesConfigured()) return;
    let cancelled = false;
    setPricesLoading(true);
    getOfferings()
      .then((pkgs) => {
        if (!cancelled) setPackages(pkgs);
      })
      .catch(() => {
        // Swallow — fall through to hardcoded fallback prices in the render.
      })
      .finally(() => {
        if (!cancelled) setPricesLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [visible]);

  const getDisplayPrice = (productId: string): string => {
    const pkg = packages.find((p) => p.product.identifier === productId);
    if (pkg?.product.priceString) return pkg.product.priceString;
    // Fallback for dev mode / RevenueCat not configured.
    const fallback = MONETIZATION_PRODUCTS.find((p) => p.id === productId);
    return fallback?.price ?? '';
  };

  const handlePurchase = async (productId: string) => {
    hapticHeavy();
    setPurchasing(productId);
    try {
      const entitlements = await purchaseProductById(productId);
      if (entitlements.length > 0) {
        // Real (or mocked) successful purchase — grant access
        entitlements.forEach((id) => onPurchase(id));
        hapticSuccess();
        onClose();
      } else {
        // User cancelled the Apple/Google purchase sheet — do NOT unlock.
        // Keep the paywall open so they can try again or pick another option.
        if (__DEV__) console.log('[Paywall] Purchase cancelled by user');
      }
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

  if (!visible) return null;

  const innerCard = (
    <View style={[styles.modalContent, isTablet && styles.modalContentTablet]}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose} testID="paywall-close">
        <X size={24} color={colors.text} />
      </TouchableOpacity>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
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
                      {pricesLoading && packages.length === 0 ? (
                        <ActivityIndicator size="small" color={colors.terracotta} />
                      ) : (
                        <Text style={[
                          styles.productPrice,
                          isWorldUnlock && styles.productPriceFeatured
                        ]}>
                          {getDisplayPrice(product.id)}
                        </Text>
                      )}

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
              <Text style={styles.legalIntro}>
                Purchases are one-time and unlock recipe content permanently. Payment will be charged to your Apple ID at confirmation.
              </Text>
              <View style={styles.legalLinks}>
                <TouchableOpacity
                  onPress={() => Linking.openURL('https://sites.google.com/mojjo.se/world-food-journey/terms-of-service')}
                  testID="paywall-terms"
                >
                  <Text style={styles.legalLink}>Terms of Service</Text>
                </TouchableOpacity>
                <Text style={styles.legalSeparator}>·</Text>
                <TouchableOpacity
                  onPress={() => Linking.openURL('https://sites.google.com/mojjo.se/world-food-journey/privacy-policy')}
                  testID="paywall-privacy"
                >
                  <Text style={styles.legalLink}>Privacy Policy</Text>
                </TouchableOpacity>
              </View>
            </View>
      </ScrollView>
    </View>
  );

  const content = (
    <View style={[styles.modalOverlay, isTablet && styles.modalOverlayTablet]}>
      <TouchableOpacity
        style={StyleSheet.absoluteFill}
        activeOpacity={1}
        onPress={onClose}
        testID="paywall-backdrop"
      />
      {innerCard}
    </View>
  );

  // On web, Modal can be unreliable — use a full-screen absolute overlay instead
  if (Platform.OS === 'web') {
    return (
      <View style={styles.webOverlay}>
        {content}
      </View>
    );
  }

  return (
    <Modal
      visible={true}
      animationType={isTablet ? 'fade' : 'slide'}
      transparent={true}
      presentationStyle="overFullScreen"
      onRequestClose={onClose}
      supportedOrientations={['portrait', 'landscape']}
      statusBarTranslucent
    >
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        {content}
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  webOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalOverlayTablet: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  modalContent: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: '90%',
    paddingTop: 20,
    width: '100%',
  },
  modalContentTablet: {
    height: '85%',
    width: '100%',
    maxWidth: 560,
    borderRadius: 24,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
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
  legalIntro: {
    fontSize: 11,
    color: colors.textTertiary,
    textAlign: 'center',
    lineHeight: 16,
    marginTop: 8,
    paddingHorizontal: 12,
  },
  legalLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  legalLink: {
    fontSize: 12,
    color: colors.terracotta,
    fontWeight: '600' as const,
    textDecorationLine: 'underline',
  },
  legalSeparator: {
    fontSize: 12,
    color: colors.textTertiary,
  },
});
