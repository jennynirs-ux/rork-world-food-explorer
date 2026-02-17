import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { User, Award, Trash2, ShoppingCart, ChevronRight, Utensils, Ruler, Info, Beef, Fish, Salad, Sprout, Languages } from 'lucide-react-native';
import { DietType } from '@/types';

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
  const { userProfile, stats, resetProgress, shoppingList, updateUserProfile } = useApp();
  const { t } = useTranslation();

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
                onPress={() => {
                  Alert.alert(
                    t.profile.selectLanguage,
                    '',
                    [
                      ...LANGUAGES.map(lang => ({
                        text: `${lang.flag} ${lang.name}`,
                        onPress: () => handleLanguageChange(lang.code),
                      })),
                      { text: t.profile.cancel, style: 'cancel' },
                    ]
                  );
                }}
                style={styles.changeButton}
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
            onPress={() => router.push('/shopping-list')}
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
          <TouchableOpacity style={styles.dangerButton} onPress={handleReset}>
            <Trash2 size={20} color="#EF4444" />
            <Text style={styles.dangerButtonText}>{t.profile.resetProgress}</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
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
});
