import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView, Animated } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useApp } from '@/contexts/AppContext';
import { translations, type LanguageCode } from '@/lib/i18n';
import { ChefHat, Globe, Award, Check } from 'lucide-react-native';
import { FoodImage } from '@/components/FoodImage';
import { DEFAULT_UNLOCKED_COUNTRIES } from '@/constants/monetization';
import { translateContent } from '@/lib/translate-content';
import { pickStrings } from '@/lib/strings';
import { onboardingStrings } from '@/lib/strings/onboarding';
import colors from '@/constants/colors';

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

export default function OnboardingScreen() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [language, setLanguage] = useState('en');
  const router = useRouter();
  const { completeOnboarding, countries } = useApp();
  const [firstCountryId, setFirstCountryId] = useState<string>('japan');
  const freeCountries = countries.filter(c => DEFAULT_UNLOCKED_COUNTRIES.includes(c.id));
  // Follow the language picked on this screen right away, not the (still
  // unset) profile language.
  const t = translations[language as LanguageCode] ?? translations.en;
  const s = pickStrings(onboardingStrings, language);
  const LAST_STEP = 3;

  // Animated dot widths for pagination
  const dotWidths = useRef([0, 1, 2, 3].map(i => new Animated.Value(i === 0 ? 24 : 8))).current;

  useEffect(() => {
    const animations = dotWidths.map((anim, i) =>
      Animated.spring(anim, {
        toValue: i === step ? 24 : 8,
        friction: 8,
        tension: 60,
        useNativeDriver: false,
      })
    );
    Animated.parallel(animations).start();
  }, [step, dotWidths]);

  // Pre-select language based on device locale
  useEffect(() => {
    try {
      const deviceLocale = Intl.DateTimeFormat().resolvedOptions().locale || 'en';
      const langCode = deviceLocale.split(/[-_]/)[0].toLowerCase();
      const match = LANGUAGES.find((l) => l.code === langCode);
      if (match) {
        setLanguage(match.code);
      }
    } catch {
      // Fallback: keep default 'en'
    }
  }, []);

  const handleContinue = () => {
    if (step < LAST_STEP) {
      setStep(step + 1);
      return;
    }
    completeOnboarding(name.trim(), language);
    // Land on Explore, then open the chosen country's recipes on top of it,
    // so the first thing a new user sees is a dish they can cook.
    router.replace('/(tabs)');
    setTimeout(() => {
      router.push({ pathname: '/country/[id]' as any, params: { id: firstCountryId, tab: 'recipes' } });
    }, 50);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <View style={styles.stepContainer}>
            <View style={styles.iconContainer}>
              <Globe size={100} color="#FF6B35" strokeWidth={1.5} />
            </View>
            <Text style={styles.title}>{t.onboarding.travelWorld}</Text>
            <Text style={styles.subtitle}>
              {t.onboarding.travelWorldDesc}
            </Text>
            <View style={styles.valueList}>
              <View style={styles.valueRow}>
                <ChefHat size={28} color="#FF6B35" strokeWidth={1.8} />
                <View style={styles.valueText}>
                  <Text style={styles.valueTitle}>{t.onboarding.cookLearn}</Text>
                  <Text style={styles.valueDesc}>{t.onboarding.cookLearnDesc}</Text>
                </View>
              </View>
              <View style={styles.valueRow}>
                <Award size={28} color="#F7931E" strokeWidth={1.8} />
                <View style={styles.valueText}>
                  <Text style={styles.valueTitle}>{t.onboarding.collectProgress}</Text>
                  <Text style={styles.valueDesc}>{t.onboarding.collectProgressDesc}</Text>
                </View>
              </View>
            </View>
          </View>
        );
      case 1:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.title}>{t.onboarding.chooseLanguage}</Text>
            <Text style={styles.subtitle}>{t.onboarding.selectLanguage}</Text>
            <ScrollView 
              style={styles.languageScroll}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.languageScrollContent}
            >
              {LANGUAGES.map((lang) => (
                <TouchableOpacity
                  key={lang.code}
                  style={[
                    styles.languageOption,
                    language === lang.code && styles.languageOptionSelected
                  ]}
                  onPress={() => setLanguage(lang.code)}
                >
                  <View style={styles.languageLeft}>
                    <Text style={styles.languageFlag}>{lang.flag}</Text>
                    <Text style={[
                      styles.languageName,
                      language === lang.code && styles.languageNameSelected
                    ]}>
                      {lang.name}
                    </Text>
                  </View>
                  {language === lang.code && (
                    <Check size={24} color="#FF6B35" strokeWidth={3} />
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        );
      case 2:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.title}>{s.pickFirstTitle}</Text>
            <Text style={styles.subtitle}>{s.pickFirstSubtitle}</Text>
            <ScrollView
              style={styles.languageScroll}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.languageScrollContent}
            >
              {freeCountries.map(country => {
                const selected = firstCountryId === country.id;
                const dishName = translateContent(country.mainDish.name, language);
                return (
                  <TouchableOpacity
                    key={country.id}
                    style={[styles.destinationCard, selected && styles.destinationCardSelected]}
                    onPress={() => setFirstCountryId(country.id)}
                    accessibilityRole="radio"
                    accessibilityState={{ selected }}
                    accessibilityLabel={`${translateContent(country.name, language)}, ${dishName}`}
                  >
                    <FoodImage
                      uri={country.mainDish.imageUrl}
                      alt={dishName}
                      type="food"
                      width={72}
                      height={72}
                      style={styles.destinationImage}
                    />
                    <View style={styles.destinationText}>
                      <Text style={styles.destinationCountry}>
                        {country.flag} {translateContent(country.name, language)}
                      </Text>
                      <Text style={styles.destinationDish} numberOfLines={1}>{dishName}</Text>
                    </View>
                    {selected ? (
                      <Check size={24} color="#FF6B35" strokeWidth={3} />
                    ) : (
                      <Text style={styles.freeTag}>{s.free}</Text>
                    )}
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        );
      case 3:
        return (
          <View style={styles.stepContainer}>
            <View style={styles.iconContainer}>
              <Globe size={80} color="#00B4D8" strokeWidth={1.5} />
            </View>
            <Text style={styles.title}>{t.onboarding.whatCallYou}</Text>
            <TextInput
              style={styles.input}
              placeholder={`${t.onboarding.yourName} (${s.optional.toLowerCase()})`}
              placeholderTextColor="#999"
              value={name}
              onChangeText={setName}
              autoFocus
              maxLength={30}
            />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <KeyboardAvoidingView 
        style={styles.keyboardAvoid}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.content}>
          {renderStep()}
          
          <View style={styles.footer}>
            <View style={styles.dotsContainer}>
              {[0, 1, 2, 3].map((i) => (
                <Animated.View
                  key={i}
                  style={[
                    styles.dot,
                    {
                      width: dotWidths[i],
                      backgroundColor: i === step ? '#FF6B35' : '#D4A574',
                    },
                  ]}
                />
              ))}
            </View>

            <TouchableOpacity
              style={[
                styles.button,
              ]}
              onPress={handleContinue}
            >
              <Text style={styles.buttonText}>
                {step === LAST_STEP ? t.onboarding.letsStart : t.onboarding.continue}
              </Text>
            </TouchableOpacity>

            {step < LAST_STEP && (
              <TouchableOpacity
                style={styles.skipButton}
                onPress={() => setStep(LAST_STEP)}
                accessibilityRole="button"
              >
                <Text style={styles.skipText}>{t.onboarding.skip}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboardAvoid: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  stepContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: '700' as const,
    color: '#2D1B00',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#6B4423',
    textAlign: 'center',
    lineHeight: 26,
  },
  input: {
    width: '100%',
    height: 56,
    backgroundColor: '#FFF',
    borderRadius: 16,
    paddingHorizontal: 20,
    fontSize: 18,
    color: '#2D1B00',
    marginTop: 24,
    borderWidth: 2,
    borderColor: '#E8D5C4',
  },
  footer: {
    alignItems: 'center',
    gap: 16,
  },
  dotsContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
  button: {
    width: '100%',
    height: 56,
    backgroundColor: '#FF6B35',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600' as const,
  },
  skipButton: {
    paddingVertical: 12,
  },
  skipText: {
    color: '#6B4423',
    fontSize: 16,
  },
  valueList: {
    marginTop: 32,
    gap: 20,
    alignSelf: 'stretch',
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 14,
  },
  valueText: {
    flex: 1,
  },
  valueTitle: {
    fontSize: 16,
    fontWeight: '700' as const,
    color: colors.text,
    marginBottom: 2,
  },
  valueDesc: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.textSecondary,
  },
  destinationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    padding: 10,
    marginBottom: 10,
    borderRadius: 16,
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  destinationCardSelected: {
    borderColor: '#FF6B35',
    backgroundColor: '#FFF8F0',
  },
  destinationImage: {
    width: 72,
    height: 72,
    borderRadius: 12,
    overflow: 'hidden',
  },
  destinationText: {
    flex: 1,
  },
  destinationCountry: {
    fontSize: 17,
    fontWeight: '700' as const,
    color: colors.text,
  },
  destinationDish: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },
  freeTag: {
    fontSize: 12,
    fontWeight: '700' as const,
    color: '#10B981',
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    overflow: 'hidden',
  },
  languageScroll: {
    width: '100%',
    marginTop: 24,
    maxHeight: 400,
  },
  languageScrollContent: {
    gap: 12,
    paddingBottom: 20,
  },
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E8D5C4',
  },
  languageOptionSelected: {
    borderColor: '#FF6B35',
    backgroundColor: '#FFF8F0',
  },
  languageLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  languageFlag: {
    fontSize: 28,
  },
  languageName: {
    fontSize: 18,
    fontWeight: '500' as const,
    color: '#2D1B00',
  },
  languageNameSelected: {
    color: '#FF6B35',
    fontWeight: '600' as const,
  },
});
