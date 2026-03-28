import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Switch, Modal, Pressable, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { User, Award, Trash2, ShoppingCart, ChevronRight, Utensils, Ruler, Info, Beef, Fish, Salad, Sprout, Languages, Bell, Send, X, Check, Gift, Share2, Key } from 'lucide-react-native';
import { DietType } from '@/types';
import colors from '@/constants/colors';
import { useState, useEffect } from 'react';
import { enableNotifications, disableNotifications, areNotificationsEnabled } from '@/lib/notifications';
import { getDaysRemaining } from '@/lib/share-codes';

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
  const { userProfile, stats, resetProgress, shoppingList, updateUserProfile, redeemCode, getShareCode, shareMyCode } = useApp();
  const { t } = useTranslation();
  const [notificationsOn, setNotificationsOn] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [myCode, setMyCode] = useState('');
  const [redeemInput, setRedeemInput] = useState('');
  const [redeemStatus, setRedeemStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [daysRemaining, setDaysRemaining] = useState(0);

  useEffect(() => {
    getShareCode().then(setMyCode).catch(() => {});
    getDaysRemaining().then(setDaysRemaining).catch(() => {});
  }, [getShareCode]);

  const handleRedeemCode = async () => {
    if (!redeemInput.trim()) return;
    const success = await redeemCode(redeemInput);
    setRedeemStatus(success ? 'success' : 'error');
    if (success) {
      Alert.alert('🎉 All Recipes Unlocked!', 'You now have access to all countries and recipes for 30 days.');
      setDaysRemaining(30);
      setShowCodeModal(false);
      setRedeemInput('');
      setRedeemStatus('idle');
    }
  };

  useEffect(() => {
    areNotificationsEnabled().then(setNotificationsOn);
  }, []);

  const toggleNotifications = async (value: boolean) => {
    if (value) {
      const ok = await enableNotifications();
      setNotificationsOn(ok);
      if (!ok) Alert.alert('Permission Required', 'Please enable notifications in your device settings.');
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

  const toggleDietPreference = (diet: DietType) => {
    const currentPrefs = userProfile.dietaryPreferences || [];
    const newPrefs = currentPrefs.includes(diet)
      ? currentPrefs.filter(d => d !== diet)
      : [...currentPrefs, diet];
    updateUserProfile({ dietaryPreferences: newPrefs });
  };

  const toggleMetric = () => {
    updateUserProfile({ useMetric: !userProfile.useMetric });
  };

  const handleLanguageChange = (langCode: string) => {
    updateUserProfile({ language: langCode });
  };

  const currentLanguage = LANGUAGES.find(l => l.code === (userProfile.language || 'en'));

  const dietOptions: { type: DietType; label: string; IconComponent: typeof Beef }[] = [
    { type: 'meat', label: t.profile.meat, IconComponent: Beef },
    { type: 'fish', label: t.profile.fish, IconComponent: Fish },
    { type: 'vegetarian', label: t.profile.vegetarian, IconComponent: Salad },
    { type: 'vegan', label: t.profile.vegan, IconComponent: Sprout },
  ];

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
          <Text style={styles.sectionTitle}>{t.profile.dietaryPreferences}</Text>
          <View style={styles.card}>
            <View style={styles.settingHeader}>
              <Utensils size={20} color="#FF6B35" />
              <Text style={styles.settingHeaderText}>{t.profile.selectPreferences}</Text>
            </View>
            <View style={styles.dietGrid}>
              {dietOptions.map(option => (
                <TouchableOpacity
                  key={option.type}
                  style={[
                    styles.dietOption,
                    userProfile.dietaryPreferences?.includes(option.type) && styles.dietOptionSelected,
                  ]}
                  onPress={() => toggleDietPreference(option.type)}
                  accessibilityLabel={`${option.label}${userProfile.dietaryPreferences?.includes(option.type) ? ', selected' : ''}`}
                  accessibilityRole="button"
                >
                  <option.IconComponent 
                    size={32} 
                    color={userProfile.dietaryPreferences?.includes(option.type) ? '#FF6B35' : '#9CA3AF'} 
                  />
                  <Text
                    style={[
                      styles.dietLabel,
                      userProfile.dietaryPreferences?.includes(option.type) && styles.dietLabelSelected,
                    ]}
                  >
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
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
                accessibilityLabel={`Use metric system, ${userProfile.useMetric ? 'on' : 'off'}`}
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
                accessibilityLabel={`Cooking reminders, ${notificationsOn ? 'on' : 'off'}`}
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
                accessibilityLabel={`Change language, current: ${currentLanguage?.name || 'English'}`}
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
            accessibilityLabel={`Shopping list${shoppingList.length > 0 ? `, ${shoppingList.length} items` : ''}`}
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
            accessibilityLabel="Submit a recipe"
            accessibilityRole="button"
          >
            <Send size={20} color="#FF6B35" />
            <Text style={styles.menuButtonText}>{t.profile.submitRecipe}</Text>
            <ChevronRight size={20} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => setShowCodeModal(true)}
            accessibilityLabel="Share or enter access code"
            accessibilityRole="button"
          >
            <Gift size={20} color="#FF6B35" />
            <Text style={styles.menuButtonText}>{t.profile.shareCode}</Text>
            <ChevronRight size={20} color="#9CA3AF" />
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
          <Text style={styles.sectionTitle}>{t.profile.dangerZone}</Text>
          <TouchableOpacity
            style={styles.dangerButton}
            onPress={handleReset}
            accessibilityLabel="Reset all progress"
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
                accessibilityLabel="Close language picker"
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
                    accessibilityLabel={`${lang.name}${isSelected ? ', selected' : ''}`}
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

      {/* Share Code Modal */}
      <Modal
        visible={showCodeModal}
        animationType="slide"
        transparent
        onRequestClose={() => setShowCodeModal(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setShowCodeModal(false)}>
          <Pressable style={styles.codeModalContent} onPress={() => {}}>
            <View style={styles.modalHandle} />
            <View style={styles.codeModalHeader}>
              <Text style={styles.codeModalTitle}>Share & Redeem Codes</Text>
              <TouchableOpacity onPress={() => setShowCodeModal(false)}>
                <X size={24} color={colors.text} />
              </TouchableOpacity>
            </View>

            {/* Active code status */}
            {daysRemaining > 0 && (
              <View style={styles.activeCodeBanner}>
                <Check size={20} color="#10B981" />
                <Text style={styles.activeCodeText}>
                  All recipes unlocked — {daysRemaining} {daysRemaining === 1 ? 'day' : 'days'} remaining
                </Text>
              </View>
            )}

            {/* Your Code */}
            <View style={styles.codeSection}>
              <View style={styles.codeSectionHeader}>
                <Share2 size={18} color={colors.brand} />
                <Text style={styles.codeSectionTitle}>Your Code</Text>
              </View>
              <Text style={styles.codeSectionDesc}>
                Share this code with a friend to give them access to all recipes for 30 days:
              </Text>
              <View style={styles.codeDisplay}>
                <Text style={styles.codeText}>{myCode || '...'}</Text>
              </View>
              <TouchableOpacity style={styles.shareCodeButton} onPress={shareMyCode}>
                <Share2 size={18} color="#FFF" />
                <Text style={styles.shareCodeButtonText}>Share Code</Text>
              </TouchableOpacity>
            </View>

            {/* Redeem Code */}
            <View style={styles.codeSection}>
              <View style={styles.codeSectionHeader}>
                <Key size={18} color={colors.brand} />
                <Text style={styles.codeSectionTitle}>Enter a Code</Text>
              </View>
              <Text style={styles.codeSectionDesc}>
                Enter a code from a friend to unlock all recipes for 30 days:
              </Text>
              <View style={styles.redeemRow}>
                <TextInput
                  style={styles.redeemInput}
                  placeholder="Enter 6-digit code"
                  placeholderTextColor="#9CA3AF"
                  value={redeemInput}
                  onChangeText={(text) => { setRedeemInput(text.toUpperCase()); setRedeemStatus('idle'); }}
                  autoCapitalize="characters"
                  maxLength={6}
                />
                <TouchableOpacity
                  style={[styles.redeemButton, !redeemInput.trim() && styles.redeemButtonDisabled]}
                  onPress={handleRedeemCode}
                  disabled={!redeemInput.trim()}
                >
                  <Text style={styles.redeemButtonText}>Unlock</Text>
                </TouchableOpacity>
              </View>
              {redeemStatus === 'error' && (
                <Text style={styles.redeemError}>Invalid code. Please check and try again.</Text>
              )}
            </View>
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
  settingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  settingHeaderText: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: '#2D1B00',
  },
  dietGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  dietOption: {
    width: '47%',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  dietOptionSelected: {
    backgroundColor: '#FFF8F0',
    borderColor: '#FF6B35',
  },

  dietLabel: {
    fontSize: 15,
    fontWeight: '600' as const,
    color: '#6B7280',
  },
  dietLabelSelected: {
    color: '#FF6B35',
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
  codeModalContent: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 12,
    paddingBottom: 40,
    paddingHorizontal: 24,
    maxHeight: '85%',
  },
  codeModalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  codeModalTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.text,
  },
  codeSection: {
    marginBottom: 24,
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 20,
  },
  codeSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  codeSectionTitle: {
    fontSize: 17,
    fontWeight: '600' as const,
    color: colors.text,
  },
  codeSectionDesc: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 16,
  },
  codeDisplay: {
    backgroundColor: colors.surfaceAlt,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.brand,
    borderStyle: 'dashed',
    marginBottom: 16,
  },
  codeText: {
    fontSize: 32,
    fontWeight: '800' as const,
    color: colors.brand,
    letterSpacing: 6,
  },
  shareCodeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.brand,
    paddingVertical: 14,
    borderRadius: 12,
  },
  shareCodeButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600' as const,
  },
  redeemRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  redeemInput: {
    flex: 1,
    backgroundColor: colors.surfaceAlt,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 18,
    fontWeight: '600' as const,
    color: colors.text,
    letterSpacing: 4,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  redeemButton: {
    backgroundColor: colors.brand,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  redeemButtonDisabled: {
    opacity: 0.5,
  },
  redeemButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600' as const,
  },
  redeemError: {
    color: '#EF4444',
    fontSize: 13,
    marginTop: 8,
    textAlign: 'center',
  },
});
