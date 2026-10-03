import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Switch, Modal, Pressable, Linking, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { fill } from '@/lib/strings';
import { User, Award, Trash2, ShoppingCart, ChevronRight, Ruler, Info, Languages, Bell, Send, X, Check, Gift, Share2, RotateCcw, FileText, Shield } from 'lucide-react-native';
import colors from '@/constants/colors';
import { useState, useEffect } from 'react';
import { enableNotifications, disableNotifications, areNotificationsEnabled } from '@/lib/notifications';
import { getLegacyUnlockDaysRemaining } from '@/lib/legacy-code-unlock';
import { shareApp } from '@/lib/share';
import { presentOfferCodeRedemption, restorePurchases } from '@/lib/purchases';

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
];

export default function ProfileScreen() {
  const router = useRouter();
  const { userProfile, stats, resetProgress, shoppingList, updateUserProfile, applyOwnedProducts, awardBadge } = useApp();
  const { t } = useTranslation();
  const [notificationsOn, setNotificationsOn] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [daysRemaining, setDaysRemaining] = useState(0);
  const [restoring, setRestoring] = useState(false);

  useEffect(() => {
    getLegacyUnlockDaysRemaining().then(setDaysRemaining).catch(() => {});
  }, []);

  const handleInvite = () => {
    shareApp(userProfile.language || 'en')
      .then(shared => { if (shared) awardBadge('ambassador'); })
      .catch(() => {});
  };

  const handleRedeemOfferCode = async () => {
    try {
      // Redeemed purchases arrive through the RevenueCat listener in AppContext.
      await presentOfferCodeRedemption();
    } catch {
      Alert.alert(t.profile.storeUnavailableTitle, t.profile.storeUnavailableMessage);
    }
  };

  const handleRestore = async () => {
    setRestoring(true);
    try {
      const owned = await restorePurchases();
      applyOwnedProducts(owned, 'replace');
      if (owned.length > 0) {
        Alert.alert(t.profile.restoreSuccessTitle, t.profile.restoreSuccessMessage);
      } else {
        Alert.alert(t.profile.restoreNoneTitle, t.profile.restoreNoneMessage);
      }
    } catch {
      Alert.alert(t.profile.storeUnavailableTitle, t.profile.storeUnavailableMessage);
    } finally {
      setRestoring(false);
    }
  };

  useEffect(() => {
    areNotificationsEnabled().then(setNotificationsOn);
  }, []);

  const toggleNotifications = async (value: boolean) => {
    if (value) {
      const ok = await enableNotifications();
      setNotificationsOn(ok);
      if (!ok) Alert.alert(t.profile.notificationPermissionTitle, t.profile.notificationPermissionMessage);
    } else {
      await disableNotifications();
      setNotificationsOn(false);
    }
  };

  const handleReset = () => {
    Alert.alert(
      t.profile.resetConfirm,
      t.profile.resetMessage,
      [
        { text: t.profile.cancel, style: 'cancel' },
        {
          text: t.profile.reset,
          style: 'destructive',
          onPress: () => {
            resetProgress();
            Alert.alert(t.profile.success, t.profile.resetSuccess);
          },
        },
      ]
    );
  };

  const toggleMetric = () => {
    updateUserProfile({ useMetric: !userProfile.useMetric });
  };

  const handleLanguageChange = (langCode: string) => {
    updateUserProfile({ language: langCode });
  };

  const currentLanguage = LANGUAGES.find(l => l.code === (userProfile.language || 'en'));

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>{t.profile.title}</Text>
        </View>

        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <User size={48} color="#FF6B35" />
          </View>
          <Text style={styles.name}>{userProfile.name}</Text>
          <View style={styles.pointsBadge}>
            <Award size={16} color="#FFF" />
            <Text style={styles.pointsText}>{userProfile.totalPoints} {t.profile.points}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.profile.measurementSystem}</Text>
          <View style={styles.card}>
            <View style={styles.settingRow}>
              <View style={styles.settingLeft}>
                <Ruler size={20} color="#FF6B35" />
                <View style={styles.settingInfo}>
                  <Text style={styles.settingName}>{t.profile.useMetric}</Text>
                  <Text style={styles.settingDescription}>
                    {userProfile.useMetric ? 'kg, cm, °C' : 'lb, in, °F'}
                  </Text>
                </View>
              </View>
              <Switch
                value={userProfile.useMetric ?? true}
                onValueChange={toggleMetric}
                trackColor={{ false: '#D1D5DB', true: '#FF6B35' }}
                thumbColor="#FFF"
                accessibilityLabel={t.profile.useMetric}
                accessibilityRole="switch"
              />
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.profile.notifications}</Text>
          <View style={styles.card}>
            <View style={styles.settingRow}>
              <View style={styles.settingLeft}>
                <Bell size={20} color="#FF6B35" />
                <View style={styles.settingInfo}>
                  <Text style={styles.settingName}>{t.profile.cookingReminders}</Text>
                  <Text style={styles.settingDescription}>
                    {t.profile.streakRemindersDesc}
                  </Text>
                </View>
              </View>
              <Switch
                value={notificationsOn}
                onValueChange={toggleNotifications}
                trackColor={{ false: '#D1D5DB', true: '#FF6B35' }}
                thumbColor="#FFF"
                accessibilityLabel={t.profile.cookingReminders}
                accessibilityRole="switch"
              />
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.profile.language}</Text>
          <View style={styles.card}>
            <View style={styles.settingRow}>
              <View style={styles.settingLeft}>
                <Languages size={20} color="#FF6B35" />
                <View style={styles.settingInfo}>
                  <Text style={styles.settingName}>{t.profile.appLanguage}</Text>
                  <Text style={styles.settingDescription}>
                    {currentLanguage?.flag} {currentLanguage?.name}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => setShowLanguageModal(true)}
                style={styles.changeButton}
                accessibilityLabel={`${t.profile.appLanguage}: ${currentLanguage?.name || 'English'}`}
                accessibilityRole="button"
              >
                <Text style={styles.changeButtonText}>{t.profile.change}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.profile.statistics}</Text>
          <View style={styles.statsCard}>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>{t.profile.countriesCompleted}</Text>
              <Text style={styles.statValue}>{stats.completedCountries} / {stats.totalCountries}</Text>
            </View>
            
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>{t.profile.countriesVisited}</Text>
              <Text style={styles.statValue}>{stats.visitedCountries}</Text>
            </View>
            
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>{t.profile.inProgress}</Text>
              <Text style={styles.statValue}>{stats.inProgressCountries}</Text>
            </View>
            
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>{t.profile.dishesCooked}</Text>
              <Text style={styles.statValue}>{stats.cookedDishes}</Text>
            </View>
            
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>{t.profile.quizzesCompleted}</Text>
              <Text style={styles.statValue}>{stats.completedQuizzes}</Text>
            </View>
            
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>{t.profile.badgesEarned}</Text>
              <Text style={styles.statValue}>{stats.earnedBadges}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.profile.quickAccess}</Text>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => router.push('/shopping-list' as any)}
            accessibilityLabel={shoppingList.length > 0
              ? fill(t.profile.shoppingListCountA11y, { label: t.profile.shoppingList, count: shoppingList.length })
              : t.profile.shoppingList}
            accessibilityRole="button"
          >
            <ShoppingCart size={20} color="#FF6B35" />
            <Text style={styles.menuButtonText}>{t.profile.shoppingList}</Text>
            {shoppingList.length > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{shoppingList.length}</Text>
              </View>
            )}
            <ChevronRight size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.profile.community}</Text>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => router.push('/submit-recipe' as any)}
            accessibilityLabel={t.profile.submitRecipe}
            accessibilityRole="button"
          >
            <Send size={20} color="#FF6B35" />
            <Text style={styles.menuButtonText}>{t.profile.submitRecipe}</Text>
            <ChevronRight size={20} color="#9CA3AF" />
          </TouchableOpacity>

          <View style={{ height: 8 }} />
          <TouchableOpacity
            style={styles.menuButton}
            onPress={handleInvite}
            accessibilityLabel={t.profile.inviteFriends}
            accessibilityRole="button"
            testID="profile-invite"
          >
            <Share2 size={20} color="#FF6B35" />
            <Text style={styles.menuButtonText}>{t.profile.inviteFriends}</Text>
            <ChevronRight size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.profile.purchases}</Text>
          {daysRemaining > 0 && (
            <View style={styles.activeCodeBanner}>
              <Check size={20} color="#10B981" />
              <Text style={styles.activeCodeText}>
                {t.profile.legacyUnlockActive.replace('{days}', String(daysRemaining))}
              </Text>
            </View>
          )}
          <TouchableOpacity
            style={styles.menuButton}
            onPress={handleRedeemOfferCode}
            accessibilityLabel={t.profile.redeemOfferCode}
            accessibilityRole="button"
            testID="profile-redeem-offer-code"
          >
            <Gift size={20} color="#FF6B35" />
            <Text style={styles.menuButtonText}>{t.profile.redeemOfferCode}</Text>
            <ChevronRight size={20} color="#9CA3AF" />
          </TouchableOpacity>
          <View style={{ height: 8 }} />
          <TouchableOpacity
            style={styles.menuButton}
            onPress={handleRestore}
            disabled={restoring}
            accessibilityLabel={t.profile.restorePurchases}
            accessibilityRole="button"
            testID="profile-restore-purchases"
          >
            <RotateCcw size={20} color="#FF6B35" />
            <Text style={styles.menuButtonText}>{t.profile.restorePurchases}</Text>
            {restoring ? <ActivityIndicator size="small" color="#FF6B35" /> : <ChevronRight size={20} color="#9CA3AF" />}
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.profile.about}</Text>
          <View style={styles.card}>
            <View style={styles.aboutRow}>
              <Info size={20} color="#FF6B35" />
              <View style={styles.aboutContent}>
                <Text style={styles.aboutText}>{t.profile.aboutApp}</Text>
                <Text style={styles.aboutDescription}>
                  {t.profile.aboutDesc}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.ui.legal}</Text>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => Linking.openURL('https://sites.google.com/mojjo.se/world-food-journey/terms-of-service')}
            accessibilityLabel={t.ui.termsOfService}
            accessibilityRole="link"
            testID="profile-terms"
          >
            <FileText size={20} color="#FF6B35" />
            <Text style={styles.menuButtonText}>{t.ui.termsOfService}</Text>
            <ChevronRight size={20} color="#9CA3AF" />
          </TouchableOpacity>
          <View style={{ height: 8 }} />
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => Linking.openURL('https://sites.google.com/mojjo.se/world-food-journey/privacy-policy')}
            accessibilityLabel={t.ui.privacyPolicy}
            accessibilityRole="link"
            testID="profile-privacy"
          >
            <Shield size={20} color="#FF6B35" />
            <Text style={styles.menuButtonText}>{t.ui.privacyPolicy}</Text>
            <ChevronRight size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.profile.dangerZone}</Text>
          <TouchableOpacity
            style={styles.dangerButton}
            onPress={handleReset}
            accessibilityLabel={t.profile.resetProgress}
            accessibilityRole="button"
          >
            <Trash2 size={20} color="#EF4444" />
            <Text style={styles.dangerButtonText}>{t.profile.resetProgress}</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>

      <Modal
        visible={showLanguageModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowLanguageModal(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setShowLanguageModal(false)}
        >
          <Pressable style={styles.modalSheet} onPress={() => {}}>
            <View style={styles.modalHandle} />
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{t.profile.selectLanguage}</Text>
              <TouchableOpacity
                onPress={() => setShowLanguageModal(false)}
                style={styles.modalCloseButton}
                accessibilityLabel={t.ui.cancel}
                accessibilityRole="button"
              >
                <X size={24} color="#6B7280" />
              </TouchableOpacity>
            </View>
            <ScrollView
              style={styles.modalList}
              showsVerticalScrollIndicator={false}
              bounces={false}
            >
              {LANGUAGES.map((lang) => {
                const isSelected = (userProfile.language || 'en') === lang.code;
                return (
                  <TouchableOpacity
                    key={lang.code}
                    style={[
                      styles.modalLanguageRow,
                      isSelected && styles.modalLanguageRowSelected,
                    ]}
                    onPress={() => {
                      handleLanguageChange(lang.code);
                      setShowLanguageModal(false);
                    }}
                    accessibilityLabel={isSelected ? fill(t.profile.languageSelectedA11y, { language: lang.name }) : lang.name}
                    accessibilityRole="button"
                  >
                    <Text style={styles.modalFlag}>{lang.flag}</Text>
                    <Text
                      style={[
                        styles.modalLangName,
                        isSelected && styles.modalLangNameSelected,
                      ]}
                    >
                      {lang.name}
                    </Text>
                    {isSelected && <Check size={22} color="#FF6B35" strokeWidth={3} />}
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </Pressable>
        </Pressable>
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
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '700' as const,
    color: '#2D1B00',
  },
  profileCard: {
    backgroundColor: '#FFF',
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#FFF8F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: '700' as const,
    color: '#2D1B00',
    marginBottom: 12,
  },
  pointsBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF6B35',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  pointsText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600' as const,
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: '#2D1B00',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 20,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  settingInfo: {
    flex: 1,
  },
  settingName: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: '#2D1B00',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
  statsCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 20,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  statLabel: {
    fontSize: 16,
    color: '#6B7280',
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: '#2D1B00',
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  menuButtonText: {
    flex: 1,
    color: '#2D1B00',
    fontSize: 16,
    fontWeight: '600' as const,
  },
  badge: {
    backgroundColor: '#FF6B35',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    minWidth: 24,
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '700' as const,
  },
  aboutRow: {
    flexDirection: 'row',
    gap: 12,
  },
  aboutContent: {
    flex: 1,
  },
  aboutText: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: '#2D1B00',
    marginBottom: 8,
  },
  aboutDescription: {
    fontSize: 15,
    color: '#6B7280',
    lineHeight: 22,
  },
  dangerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    gap: 8,
    borderWidth: 1,
    borderColor: '#FEE2E2',
  },
  dangerButtonText: {
    color: '#EF4444',
    fontSize: 16,
    fontWeight: '600' as const,
  },
  changeButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: '#FFF8F0',
  },
  changeButtonText: {
    color: '#FF6B35',
    fontSize: 14,
    fontWeight: '600' as const,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
  },
  modalSheet: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingBottom: 40,
    maxHeight: '70%',
  },
  modalHandle: {
    width: 40,
    height: 4,
    backgroundColor: '#D1D5DB',
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 8,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: '#2D1B00',
  },
  modalCloseButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalList: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  modalLanguageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginVertical: 3,
    gap: 14,
  },
  modalLanguageRowSelected: {
    backgroundColor: '#FFF8F0',
  },
  modalFlag: {
    fontSize: 28,
  },
  modalLangName: {
    flex: 1,
    fontSize: 17,
    fontWeight: '500' as const,
    color: '#2D1B00',
  },
  modalLangNameSelected: {
    color: '#FF6B35',
    fontWeight: '600' as const,
  },
  activeCodeBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#D1FAE5',
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
  },
  activeCodeText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600' as const,
    color: '#065F46',
  },
});
