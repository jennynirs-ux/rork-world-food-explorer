import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  ActivityIndicator,
  Alert,
  Platform,
  useWindowDimensions,
  Linking,
  LayoutAnimation,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Globe, X, Check, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react-native';
import colors from '@/constants/colors';
import { MONETIZATION_PRODUCTS, PRODUCT_IDS } from '@/constants/monetization';
import { Country } from '@/types';
import { getCountriesByContinent, getProductsForCountry } from '@/lib/access-control';
import {
  purchaseProductById,
  restorePurchases,
  isPurchasesConfigured,
  canMakePurchases,
  PurchasePendingError,
  PurchaseUnavailableError,
} from '@/lib/purchases';
import { hapticHeavy, hapticSuccess, hapticError, hapticSelection } from '@/lib/haptics';
import { trackEvent } from '@/lib/analytics';
import { useTranslation } from '@/lib/i18n';
import { translateContent } from '@/lib/translate-content';
import { useStrings, fill } from '@/lib/strings';
import { paywallStrings } from '@/lib/strings/paywall';
import { useOfferings } from '@/components/paywall/useOfferings';
import {
  PACK_PRODUCT_IDS,
  WORLD_PRODUCT_ID,
  resolvePrice,
  worldSavingsPercent,
} from '@/components/paywall/pricing';

const PRODUCT_TEXT_KEYS: Record<string, { name: string; desc: string }> = {
  [PRODUCT_IDS.UNLOCK_EUROPE]: { name: 'packEurope', desc: 'packEuropeDesc' },
  [PRODUCT_IDS.UNLOCK_ASIA]: { name: 'packAsia', desc: 'packAsiaDesc' },
  [PRODUCT_IDS.UNLOCK_AFRICA]: { name: 'packAfrica', desc: 'packAfricaDesc' },
  [PRODUCT_IDS.UNLOCK_AMERICAS]: { name: 'packAmericas', desc: 'packAmericasDesc' },
  [PRODUCT_IDS.UNLOCK_OCEANIA]: { name: 'packOceania', desc: 'packOceaniaDesc' },
  [PRODUCT_IDS.WORLD_UNLOCK_ALL]: { name: 'packWorld', desc: 'packWorldDesc' },
};

const FEATURED_BG = '#FFF9F5';

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
  const [reloadKey, setReloadKey] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showAllPacks, setShowAllPacks] = useState(false);
  const { t, language } = useTranslation();
  const s = useStrings(paywallStrings);
  const ui = t.ui as Record<string, string>;
  const insets = useSafeAreaInsets();
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const isTablet = Math.min(windowWidth, windowHeight) >= 600;

  // Live prices from RevenueCat / StoreKit, refreshed every time the paywall
  // opens. This is the source of truth for what Apple/Google will charge —
  // never show the hardcoded MONETIZATION_PRODUCTS prices in a release build.
  const { packages, loading: pricesLoading, settled } = useOfferings(visible, reloadKey);

  const countryId = country?.id;
  useEffect(() => {
    if (!visible) return;
    // Start from the recommended option every time the paywall opens.
    setSelectedId(null);
    setShowAllPacks(false);
    void trackEvent('paywall_viewed', { countryId: countryId ?? 'none' });
  }, [visible, countryId]);

  const storeReady = isPurchasesConfigured();
  const purchasesAvailable = canMakePurchases();
  const devFallback = !storeReady && purchasesAvailable;
  const pricesMissing = storeReady && settled && !pricesLoading && packages.length === 0;
  const showPriceSpinner = storeReady && packages.length === 0 && (pricesLoading || !settled);

  const isPurchased = (productId: string) => purchasedProducts.includes(productId);
  const priceOf = (productId: string) => resolvePrice(productId, packages, devFallback);

  // A product can only be bought when the store returned it — never let a
  // customer tap "Unlock" on a price we couldn't confirm with Apple/Google.
  const isProductAvailable = (productId: string): boolean => {
    if (!storeReady) return purchasesAvailable; // dev mock
    return packages.some((p) => p.product.identifier === productId);
  };

  const getDisplayPrice = (productId: string): string => priceOf(productId)?.priceString ?? '—';

  // Count only the countries a pack actually unlocks (free ones are already open).
  const getCountryCount = (continent?: string) => {
    const pool = continent ? getCountriesByContinent(countries, continent) : countries;
    return pool.filter((c) => !c.isUnlockedByDefault).length;
  };

  // What to show: the world unlock first, then the pack(s) for this country
  // ("See all packs" reveals the rest). Without a country: world + every pack.
  const countryPackIds = country ? getProductsForCountry(country) : [];
  const primaryIds = country ? [WORLD_PRODUCT_ID, ...countryPackIds] : [WORLD_PRODUCT_ID, ...PACK_PRODUCT_IDS];
  const extraIds = country ? PACK_PRODUCT_IDS.filter((id) => !countryPackIds.includes(id)) : [];
  const visibleIds = showAllPacks ? [...primaryIds, ...extraIds] : primaryIds;

  const everythingUnlocked = isPurchased(WORLD_PRODUCT_ID) || PACK_PRODUCT_IDS.every(isPurchased);
  const defaultId =
    primaryIds.find((id) => !isPurchased(id)) ?? extraIds.find((id) => !isPurchased(id)) ?? null;
  const selected =
    selectedId && !isPurchased(selectedId) && visibleIds.includes(selectedId) ? selectedId : defaultId;

  // Savings are computed from the store's numeric prices, against the packs
  // the customer would still have to buy.
  const ownsAnyPack = PACK_PRODUCT_IDS.some(isPurchased);
  const savingsPct = worldSavingsPercent(
    PACK_PRODUCT_IDS.filter((id) => !isPurchased(id)).map((id) => priceOf(id)?.price),
    priceOf(WORLD_PRODUCT_ID)?.price,
  );
  const savingsText =
    savingsPct == null ? null : fill(ownsAnyPack ? s.saveVsRemainingPacks : s.saveVsAllPacks, { pct: savingsPct });

  const countryName = country ? translateContent(country.name, language) : '';

  const handlePurchase = async (productId: string) => {
    hapticHeavy();
    setPurchasing(productId);
    try {
      const entitlements = await purchaseProductById(productId);
      if (entitlements.length > 0) {
        // Real (or mocked) successful purchase — grant access
        entitlements.forEach((id) => onPurchase(id));
        hapticSuccess();
        void trackEvent('purchase_completed', { productId, countryId: countryId ?? 'none' });
        onClose();
      } else {
        // User cancelled the Apple/Google purchase sheet — do NOT unlock.
        // Keep the paywall open so they can try again or pick another option.
        if (__DEV__) console.log('[Paywall] Purchase cancelled by user');
      }
    } catch (error: any) {
      if (error instanceof PurchasePendingError) {
        // Ask to Buy / slow payment: the unlock arrives via the RevenueCat listener.
        Alert.alert(t.ui.purchasePendingTitle, t.ui.purchasePendingMessage);
        onClose();
        return;
      }
      hapticError();
      Alert.alert(
        t.ui.purchaseFailedTitle,
        error instanceof PurchaseUnavailableError
          ? t.profile.storeUnavailableMessage
          : t.ui.purchaseFailedGeneric,
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
        Alert.alert(t.profile.restoreSuccessTitle, t.profile.restoreSuccessMessage);
        onClose();
      } else {
        Alert.alert(t.profile.restoreNoneTitle, t.profile.restoreNoneMessage);
      }
    } catch {
      Alert.alert(t.profile.storeUnavailableTitle, t.profile.storeUnavailableMessage);
    } finally {
      setRestoring(false);
    }
  };

  const toggleAllPacks = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowAllPacks((v) => !v);
  };

  if (!visible) return null;

  const busy = !!purchasing || restoring;

  const renderOption = (productId: string) => {
    const product = MONETIZATION_PRODUCTS.find((p) => p.id === productId);
    if (!product) return null;
    const isWorld = productId === WORLD_PRODUCT_ID;
    const purchased = isPurchased(productId);
    const isSelected = !purchased && selected === productId;
    const name = ui[PRODUCT_TEXT_KEYS[productId].name];
    const countText = t.ui.countriesCount.replace('{count}', String(getCountryCount(product.continent)));
    const price = getDisplayPrice(productId);
    const unlocksThisCountry = !!country && countryPackIds.includes(productId);

    return (
      <TouchableOpacity
        key={productId}
        activeOpacity={0.85}
        onPress={() => {
          if (selected !== productId) hapticSelection();
          setSelectedId(productId);
        }}
        disabled={purchased || busy}
        accessibilityRole="radio"
        aria-checked={isSelected}
        aria-disabled={purchased}
        accessibilityLabel={[name, countText, purchased ? t.ui.purchased : price, isWorld && !purchased ? savingsText : null]
          .filter(Boolean)
          .join(', ')}
        testID={`paywall-option-${productId}`}
        style={[
          styles.option,
          isWorld && styles.optionWorld,
          isSelected && styles.optionSelected,
          purchased && styles.optionPurchased,
        ]}
      >
        {isWorld && !purchased && (
          <View style={styles.featuredBadge}>
            <Text style={styles.featuredBadgeText}>{t.ui.bestValue}</Text>
          </View>
        )}

        <View style={styles.optionRow}>
          {purchased ? (
            <View style={styles.radioPurchased}>
              <Check size={14} color="#FFF" strokeWidth={3} />
            </View>
          ) : (
            <View style={[styles.radio, isSelected && styles.radioSelected]}>
              {isSelected && <View style={styles.radioDot} />}
            </View>
          )}

          <View style={styles.optionInfo}>
            <Text style={[styles.optionName, isWorld && styles.optionNameWorld]}>{name}</Text>
            {isWorld && <Text style={styles.optionDescription}>{ui[PRODUCT_TEXT_KEYS[productId].desc]}</Text>}
            <View style={styles.optionMetaRow}>
              <Text style={styles.optionMeta}>{countText}</Text>
              {unlocksThisCountry && country && (
                <View style={styles.includesChip}>
                  <Check size={12} color={colors.success} strokeWidth={3} />
                  <Text style={styles.includesChipText} numberOfLines={1}>
                    {country.flag} {countryName}
                  </Text>
                </View>
              )}
            </View>
          </View>

          <View style={styles.priceColumn}>
            {purchased ? (
              <Text style={styles.purchasedText}>{t.ui.purchased}</Text>
            ) : showPriceSpinner ? (
              <ActivityIndicator size="small" color={colors.terracotta} />
            ) : (
              <Text style={[styles.price, isWorld && styles.priceWorld]}>{price}</Text>
            )}
          </View>
        </View>

        {isWorld && !purchased && savingsText && (
          <View style={styles.savingsPill}>
            <Text style={styles.savingsText}>{savingsText}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const closeButton = (
    <TouchableOpacity
      style={styles.closeButton}
      onPress={onClose}
      testID="paywall-close"
      accessibilityRole="button"
      accessibilityLabel={t.common.close}
      hitSlop={8}
    >
      <X size={22} color={colors.text} />
    </TouchableOpacity>
  );

  const footerPadding = isTablet ? 16 : Math.max(insets.bottom, 16);

  const allUnlockedCard = (
    <View style={[styles.modalContent, styles.modalContentCompact, isTablet && styles.modalContentTablet, isTablet && styles.modalContentCompact]}>
      {closeButton}
      <View style={[styles.doneState, { paddingBottom: footerPadding + 8 }]}>
        <View style={styles.doneIcon}>
          <Check size={36} color="#FFF" strokeWidth={3} />
        </View>
        <Text style={styles.title} accessibilityRole="header">{s.allUnlockedTitle}</Text>
        <Text style={styles.description}>{s.allUnlockedMessage}</Text>
        <TouchableOpacity style={[styles.ctaButton, styles.doneButton]} onPress={onClose} accessibilityRole="button">
          <Text style={styles.ctaButtonText}>{s.keepExploring}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const selectedPrice = selected ? getDisplayPrice(selected) : '—';
  const selectedName = selected ? ui[PRODUCT_TEXT_KEYS[selected].name] : '';
  const canBuySelected = !!selected && isProductAvailable(selected) && !busy;
  const ctaLabel = selected && selectedPrice !== '—' ? `${t.ui.unlockNow} · ${selectedPrice}` : t.ui.unlockNow;

  const purchaseCard = (
    <View style={[styles.modalContent, isTablet && styles.modalContentTablet]}>
      {closeButton}

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          {!country && (
            <View style={styles.headerIcon}>
              <Globe size={36} color={colors.terracotta} />
            </View>
          )}
          <Text style={styles.title} accessibilityRole="header">
            {country ? fill(s.unlockCountry, { country: `${country.flag} ${countryName}` }) : t.ui.paywallTitle}
          </Text>
          <Text style={styles.description}>{country ? s.countrySubtitle : t.ui.paywallDescription}</Text>
        </View>

        {(pricesMissing || !purchasesAvailable) && (
          <View style={styles.unavailableBanner}>
            <Text style={styles.unavailableText}>
              {purchasesAvailable ? t.ui.pricesUnavailable : t.ui.purchasesUnavailable}
            </Text>
            {purchasesAvailable && (
              <TouchableOpacity
                onPress={() => setReloadKey((k) => k + 1)}
                style={styles.retryButton}
                accessibilityRole="button"
                testID="paywall-retry"
              >
                <Text style={styles.retryButtonText}>{t.ui.tryAgain}</Text>
              </TouchableOpacity>
            )}
          </View>
        )}

        <View style={styles.options} accessibilityRole="radiogroup">
          {visibleIds.map(renderOption)}
        </View>

        {extraIds.length > 0 && (
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={toggleAllPacks}
            accessibilityRole="button"
            aria-expanded={showAllPacks}
            testID="paywall-toggle-packs"
          >
            <Text style={styles.toggleText}>{showAllPacks ? s.showFewerPacks : s.seeAllPacks}</Text>
            {showAllPacks ? (
              <ChevronUp size={18} color={colors.terracotta} />
            ) : (
              <ChevronDown size={18} color={colors.terracotta} />
            )}
          </TouchableOpacity>
        )}

        <View style={styles.legal}>
          {!storeReady && purchasesAvailable && (
            <Text style={styles.devNote}>Dev mode: purchases are mocked</Text>
          )}
          <Text style={styles.legalIntro}>
            {Platform.OS === 'android' ? t.ui.paywallLegalGoogle : t.ui.paywallLegalApple}
          </Text>
          <View style={styles.legalLinks}>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://sites.google.com/mojjo.se/world-food-journey/terms-of-service')}
              testID="paywall-terms"
              accessibilityRole="link"
            >
              <Text style={styles.legalLink}>{t.ui.termsOfService}</Text>
            </TouchableOpacity>
            <Text style={styles.legalSeparator}>·</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://sites.google.com/mojjo.se/world-food-journey/privacy-policy')}
              testID="paywall-privacy"
              accessibilityRole="link"
            >
              <Text style={styles.legalLink}>{t.ui.privacyPolicy}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={[styles.footer, { paddingBottom: footerPadding }]}>
        <TouchableOpacity
          style={[styles.ctaButton, !canBuySelected && !purchasing && styles.ctaButtonDisabled]}
          onPress={() => selected && handlePurchase(selected)}
          disabled={!canBuySelected}
          accessibilityRole="button"
          accessibilityLabel={selected ? `${selectedName}, ${selectedPrice}` : t.ui.unlockNow}
          aria-disabled={!canBuySelected}
          aria-busy={!!purchasing}
          testID="paywall-cta"
        >
          {purchasing ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <Text style={styles.ctaButtonText} numberOfLines={1} adjustsFontSizeToFit>
              {ctaLabel}
            </Text>
          )}
        </TouchableOpacity>
        <Text style={styles.oneTimeText}>{s.oneTimePurchase}</Text>
        <TouchableOpacity
          style={styles.restoreButton}
          onPress={handleRestore}
          disabled={busy}
          accessibilityRole="button"
          testID="paywall-restore"
        >
          {restoring ? (
            <ActivityIndicator size="small" color={colors.terracotta} />
          ) : (
            <>
              <RotateCcw size={14} color={colors.terracotta} />
              <Text style={styles.restoreButtonText}>{t.profile.restorePurchases}</Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );

  const content = (
    <View style={[styles.modalOverlay, isTablet && styles.modalOverlayTablet]}>
      <TouchableOpacity
        style={StyleSheet.absoluteFill}
        activeOpacity={1}
        onPress={onClose}
        testID="paywall-backdrop"
        accessible={false}
      />
      {everythingUnlocked ? allUnlockedCard : purchaseCard}
    </View>
  );

  // On web, Modal can be unreliable — use a full-screen absolute overlay instead
  if (Platform.OS === 'web') {
    return <View style={styles.webOverlay}>{content}</View>;
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
      {/* The sheet runs to the bottom edge (its footer pads for the home
          indicator); only the top is inset. */}
      <SafeAreaView style={styles.safeArea} edges={['top']}>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalOverlay: {
    flex: 1,
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
    width: '100%',
    overflow: 'hidden',
  },
  modalContentTablet: {
    height: '85%',
    width: '100%',
    maxWidth: 560,
    borderRadius: 24,
  },
  modalContentCompact: {
    height: 'auto',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 24,
    paddingBottom: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 14,
    right: 14,
    zIndex: 10,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  headerIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.sand,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    fontSize: 26,
    fontWeight: '800' as const,
    color: colors.text,
    marginBottom: 8,
    textAlign: 'center',
    paddingHorizontal: 28,
  },
  description: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  unavailableBanner: {
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: colors.surface,
    alignItems: 'center',
    gap: 8,
  },
  unavailableText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  retryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.terracotta,
  },
  retryButtonText: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: '#FFF',
  },
  options: {
    paddingHorizontal: 20,
    paddingTop: 8,
    gap: 14,
  },
  option: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: colors.border,
  },
  optionWorld: {
    backgroundColor: FEATURED_BG,
    borderColor: colors.sand,
    paddingTop: 20,
  },
  optionSelected: {
    borderColor: colors.terracotta,
    boxShadow: '0px 6px 16px rgba(198, 93, 59, 0.18)',
    elevation: 3,
  },
  optionPurchased: {
    opacity: 0.6,
    backgroundColor: colors.surfaceAlt,
  },
  featuredBadge: {
    position: 'absolute',
    top: -11,
    right: 16,
    backgroundColor: colors.terracotta,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  featuredBadgeText: {
    fontSize: 11,
    fontWeight: '800' as const,
    color: '#FFF',
    letterSpacing: 0.6,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: colors.gray300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioSelected: {
    borderColor: colors.terracotta,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.terracotta,
  },
  radioPurchased: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.sage,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionInfo: {
    flex: 1,
    gap: 2,
  },
  optionName: {
    fontSize: 17,
    fontWeight: '700' as const,
    color: colors.text,
  },
  optionNameWorld: {
    fontSize: 19,
    color: colors.terracotta,
  },
  optionDescription: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  optionMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 2,
  },
  optionMeta: {
    fontSize: 13,
    fontWeight: '600' as const,
    color: colors.textTertiary,
  },
  includesChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#EAF3EC',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    maxWidth: 180,
  },
  includesChipText: {
    fontSize: 12,
    fontWeight: '600' as const,
    color: colors.success,
  },
  priceColumn: {
    alignItems: 'flex-end',
    minWidth: 64,
  },
  price: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: colors.text,
  },
  priceWorld: {
    fontSize: 21,
    color: colors.terracotta,
  },
  purchasedText: {
    fontSize: 14,
    fontWeight: '700' as const,
    color: colors.sage,
  },
  savingsPill: {
    alignSelf: 'flex-start',
    marginTop: 12,
    marginLeft: 34,
    backgroundColor: '#EAF3EC',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  savingsText: {
    fontSize: 13,
    fontWeight: '700' as const,
    color: colors.success,
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: 6,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 6,
  },
  toggleText: {
    fontSize: 15,
    fontWeight: '600' as const,
    color: colors.terracotta,
  },
  legal: {
    paddingHorizontal: 24,
    paddingTop: 12,
    alignItems: 'center',
    gap: 8,
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
    paddingHorizontal: 12,
  },
  legalLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
  footer: {
    paddingHorizontal: 20,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.background,
    alignItems: 'stretch',
  },
  ctaButton: {
    backgroundColor: colors.terracotta,
    borderRadius: 16,
    minHeight: 54,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 4px 12px rgba(198, 93, 59, 0.35)',
    elevation: 4,
  },
  ctaButtonDisabled: {
    opacity: 0.45,
  },
  ctaButtonText: {
    fontSize: 17,
    fontWeight: '700' as const,
    color: '#FFF',
  },
  oneTimeText: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 8,
  },
  restoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 2,
    minHeight: 36,
  },
  restoreButtonText: {
    fontSize: 13,
    fontWeight: '600' as const,
    color: colors.terracotta,
  },
  doneState: {
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: 44,
  },
  doneIcon: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.sage,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },
  doneButton: {
    alignSelf: 'stretch',
    marginTop: 24,
  },
});
