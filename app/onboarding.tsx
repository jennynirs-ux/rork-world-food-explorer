import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useApp } from '@/contexts/AppContext';
import { ChefHat, Globe, Award } from 'lucide-react-native';

export default function OnboardingScreen() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const router = useRouter();
  const { completeOnboarding } = useApp();

  const handleContinue = () => {
    if (step < 3) {
      setStep(step + 1);
    } else if (step === 3 && name.trim()) {
      completeOnboarding(name.trim());
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
            <Text style={styles.title}>Travel the World</Text>
            <Text style={styles.subtitle}>
              Explore cultures and cuisines from every corner of the globe, one delicious dish at a time.
            </Text>
          </View>
        );
      case 1:
        return (
          <View style={styles.stepContainer}>
            <View style={styles.iconContainer}>
              <ChefHat size={80} color="#FF6B35" strokeWidth={1.5} />
            </View>
            <Text style={styles.title}>Cook & Learn</Text>
            <Text style={styles.subtitle}>
              Follow authentic recipes, discover food traditions, and bring the world to your kitchen.
            </Text>
          </View>
        );
      case 2:
        return (
          <View style={styles.stepContainer}>
            <View style={styles.iconContainer}>
              <Award size={80} color="#F7931E" strokeWidth={1.5} />
            </View>
            <Text style={styles.title}>Collect & Progress</Text>
            <Text style={styles.subtitle}>
              Complete quizzes, earn points, unlock badges, and fill your world map with completed countries.
            </Text>
          </View>
        );
      case 3:
        return (
          <View style={styles.stepContainer}>
            <View style={styles.iconContainer}>
              <Globe size={80} color="#00B4D8" strokeWidth={1.5} />
            </View>
            <Text style={styles.title}>What should we call you?</Text>
            <TextInput
              style={styles.input}
              placeholder="Your name"
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
                <View
                  key={i}
                  style={[
                    styles.dot,
                    i === step && styles.dotActive,
                  ]}
                />
              ))}
            </View>

            <TouchableOpacity
              style={[
                styles.button,
                step === 3 && !name.trim() && styles.buttonDisabled
              ]}
              onPress={handleContinue}
              disabled={step === 3 && !name.trim()}
            >
              <Text style={styles.buttonText}>
                {step === 3 ? "Let's Start!" : 'Continue'}
              </Text>
            </TouchableOpacity>

            {step < 3 && (
              <TouchableOpacity
                style={styles.skipButton}
                onPress={() => setStep(3)}
              >
                <Text style={styles.skipText}>Skip</Text>
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
    backgroundColor: '#FFF8F0',
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
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D4A574',
  },
  dotActive: {
    backgroundColor: '#FF6B35',
    width: 24,
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
});
