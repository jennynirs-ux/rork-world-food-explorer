import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView, NativeModules, Animated } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { ChefHat, Globe, Award, Check } from 'lucide-react-native';
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
  const { completeOnboarding } = useApp();
  const { t } = useTranslation();

  // Animated dot widths for pagination
  const dotWidths = useRef([0, 1, 2, 3, 4].map(i => new Animated.Value(i === 0 ? 24 : 8))).current;

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
      const deviceLocale =
        Platform.OS === 'ios'
          ? NativeModules.SettingsManager?.settings?.AppleLocale ||
            NativeModules.SettingsManager?.settings?.AppleLanguages?.[0] ||
            'en'
          : NativeModules.I18nManager?.localeIdentifier || 'en';
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
    if (step < 4) {
      setStep(step + 1);
    } else if (step === 4 && name.trim()) {
      completeOnboarding(name.trim(), language);
      router.replace('/(tabs)');
    }
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
            <View style={styles.iconContainer}>
              <ChefHat size={80} color="#FF6B35" strokeWidth={1.5} />
            </View>
            <Text style={styles.title}>{t.onboarding.cookLearn}</Text>
            <Text style={styles.subtitle}>
              {t.onboarding.cookLearnDesc}
            </Text>
          </View>
        );
      case 3:
        return (
          <View style={styles.stepContainer}>
            <View style={styles.iconContainer}>
              <Award size={80} color="#F7931E" strokeWidth={1.5} />
            </View>
            <Text style={styles.title}>{t.onboarding.collectProgress}</Text>
            <Text style={styles.subtitle}>
              {t.onboarding.collectProgressDesc}
            </Text>
          </View>
        );
      case 4:
        return (
          <View style={styles.stepContainer}>
            <View style={styles.iconContainer}>
              <Globe size={80} color="#00B4D8" strokeWidth={1.5} />
            </View>
            <Text style={styles.title}>{t.onboarding.whatCallYou}</Text>
            <TextInput
              style={styles.input}
              placeholder={t.onboarding.yourName}
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
              {[0, 1, 2, 3, 4].map((i) => (
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
                step === 4 && !name.trim() && styles.buttonDisabled
              ]}
              onPress={handleContinue}
              disabled={step === 4 && !name.trim()}
            >
              <Text style={styles.buttonText}>
                {step === 4 ? t.onboarding.letsStart : t.onboarding.continue}
              </Text>
            </TouchableOpacity>

            {step < 4 && step !== 1 && (
              <TouchableOpacity
                style={styles.skipButton}
                onPress={() => setStep(step < 1 ? 1 : 4)}
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
