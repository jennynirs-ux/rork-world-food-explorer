import { useState, useRef, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions,
  Animated,
  Vibration,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Timer,
  Pause,
  Play,
  Check,
  ChefHat,
} from 'lucide-react-native';
import { useKeepAwake } from 'expo-keep-awake';
import { hapticLight, hapticMedium, hapticSuccess } from '@/lib/haptics';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface CookingModeProps {
  visible: boolean;
  onClose: () => void;
  steps: string[];
  recipeName: string;
  onComplete: () => void;
}

export default function CookingMode({
  visible,
  onClose,
  steps,
  recipeName,
  onComplete,
}: CookingModeProps) {
  useKeepAwake();

  const [currentStep, setCurrentStep] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerTarget, setTimerTarget] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Reset state when modal opens
  useEffect(() => {
    if (visible) {
      setCurrentStep(0);
      setTimerSeconds(0);
      setTimerRunning(false);
      setTimerTarget(0);
      setCompletedSteps(new Set());
    }
  }, [visible]);

  // Timer logic
  useEffect(() => {
    if (timerRunning && timerSeconds > 0) {
      intervalRef.current = setInterval(() => {
        setTimerSeconds(prev => {
          if (prev <= 1) {
            setTimerRunning(false);
            Vibration.vibrate([0, 500, 200, 500, 200, 500]);
            hapticSuccess();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [timerRunning, timerSeconds]);

  const animateTransition = useCallback((direction: 'next' | 'prev') => {
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 0, duration: 120, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 1, duration: 120, useNativeDriver: true }),
    ]).start();
  }, [fadeAnim]);

  const goNext = useCallback(() => {
    if (currentStep < steps.length - 1) {
      hapticLight();
      animateTransition('next');
      setTimeout(() => setCurrentStep(prev => prev + 1), 120);
    }
  }, [currentStep, steps.length, animateTransition]);

  const goPrev = useCallback(() => {
    if (currentStep > 0) {
      hapticLight();
      animateTransition('prev');
      setTimeout(() => setCurrentStep(prev => prev - 1), 120);
    }
  }, [currentStep, animateTransition]);

  const toggleStepComplete = useCallback(() => {
    hapticMedium();
    setCompletedSteps(prev => {
      const next = new Set(prev);
      if (next.has(currentStep)) {
        next.delete(currentStep);
      } else {
        next.add(currentStep);
      }
      return next;
    });
  }, [currentStep]);

  const startTimer = useCallback((minutes: number) => {
    hapticLight();
    const secs = minutes * 60;
    setTimerTarget(secs);
    setTimerSeconds(secs);
    setTimerRunning(true);
  }, []);

  const toggleTimer = useCallback(() => {
    hapticLight();
    setTimerRunning(prev => !prev);
  }, []);

  const resetTimer = useCallback(() => {
    hapticLight();
    setTimerRunning(false);
    setTimerSeconds(0);
    setTimerTarget(0);
  }, []);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const allDone = completedSteps.size === steps.length;

  const handleFinish = useCallback(() => {
    hapticSuccess();
    onComplete();
    onClose();
  }, [onComplete, onClose]);

  // Extract minutes from step text (e.g., "simmer for 15 minutes")
  const extractMinutes = (text: string): number | null => {
    const match = text.match(/(\d+)\s*(?:minute|min|minut)/i);
    return match ? parseInt(match[1], 10) : null;
  };

  const stepMinutes = extractMinutes(steps[currentStep] || '');

  if (!visible) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="fullScreen"
      statusBarTranslucent
    >
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <X size={24} color="#FFF" />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.recipeTitleSmall} numberOfLines={1}>{recipeName}</Text>
            <Text style={styles.stepCounter}>
              Step {currentStep + 1} of {steps.length}
            </Text>
          </View>
          <View style={styles.closeButton} />
        </View>

        {/* Progress bar */}
        <View style={styles.progressBar}>
          {steps.map((_, i) => (
            <View
              key={i}
              style={[
                styles.progressDot,
                i === currentStep && styles.progressDotActive,
                completedSteps.has(i) && styles.progressDotDone,
              ]}
            />
          ))}
        </View>

        {/* Step content */}
        <Animated.View style={[styles.stepContainer, { opacity: fadeAnim }]}>
          <Text style={styles.stepNumber}>Step {currentStep + 1}</Text>
          <Text style={styles.stepText}>{steps[currentStep]}</Text>

          {/* Quick timer suggestion */}
          {stepMinutes && timerSeconds === 0 && (
            <TouchableOpacity
              style={styles.timerSuggestion}
              onPress={() => startTimer(stepMinutes)}
            >
              <Timer size={20} color="#FF6B35" />
              <Text style={styles.timerSuggestionText}>
                Start {stepMinutes} min timer
              </Text>
            </TouchableOpacity>
          )}

          {/* Mark step complete */}
          <TouchableOpacity
            style={[
              styles.completeStepButton,
              completedSteps.has(currentStep) && styles.completeStepButtonDone,
            ]}
            onPress={toggleStepComplete}
          >
            <Check size={22} color={completedSteps.has(currentStep) ? '#FFF' : '#10B981'} />
            <Text
              style={[
                styles.completeStepText,
                completedSteps.has(currentStep) && styles.completeStepTextDone,
              ]}
            >
              {completedSteps.has(currentStep) ? 'Done' : 'Mark done'}
            </Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Timer display */}
        {timerTarget > 0 && (
          <View style={styles.timerContainer}>
            <Text style={[styles.timerDisplay, timerSeconds === 0 && styles.timerDone]}>
              {timerSeconds === 0 ? "Time's up!" : formatTime(timerSeconds)}
            </Text>
            <View style={styles.timerControls}>
              {timerSeconds > 0 ? (
                <TouchableOpacity onPress={toggleTimer} style={styles.timerButton}>
                  {timerRunning ? (
                    <Pause size={24} color="#FFF" />
                  ) : (
                    <Play size={24} color="#FFF" />
                  )}
                </TouchableOpacity>
              ) : null}
              <TouchableOpacity onPress={resetTimer} style={styles.timerButtonSmall}>
                <X size={18} color="#9CA3AF" />
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Quick timer presets */}
        {timerTarget === 0 && (
          <View style={styles.timerPresets}>
            <Text style={styles.timerPresetsLabel}>Quick timer:</Text>
            {[1, 3, 5, 10, 15, 20].map(m => (
              <TouchableOpacity
                key={m}
                style={styles.presetButton}
                onPress={() => startTimer(m)}
              >
                <Text style={styles.presetButtonText}>{m}m</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Navigation */}
        <View style={styles.navigation}>
          <TouchableOpacity
            style={[styles.navButton, currentStep === 0 && styles.navButtonDisabled]}
            onPress={goPrev}
            disabled={currentStep === 0}
          >
            <ChevronLeft size={32} color={currentStep === 0 ? '#4B5563' : '#FFF'} />
            <Text style={[styles.navText, currentStep === 0 && styles.navTextDisabled]}>
              Previous
            </Text>
          </TouchableOpacity>

          {currentStep === steps.length - 1 ? (
            <TouchableOpacity
              style={[styles.navButton, styles.finishButton]}
              onPress={handleFinish}
            >
              <ChefHat size={28} color="#FFF" />
              <Text style={styles.finishText}>
                {allDone ? 'All Done!' : 'Finish'}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.navButton} onPress={goNext}>
              <Text style={styles.navText}>Next</Text>
              <ChevronRight size={32} color="#FFF" />
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2937',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  closeButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  recipeTitleSmall: {
    color: '#D1D5DB',
    fontSize: 14,
    fontWeight: '500',
  },
  stepCounter: {
    color: '#9CA3AF',
    fontSize: 12,
    marginTop: 2,
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  progressDot: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#374151',
    maxWidth: 40,
  },
  progressDotActive: {
    backgroundColor: '#FF6B35',
  },
  progressDotDone: {
    backgroundColor: '#10B981',
  },
  stepContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  stepNumber: {
    color: '#FF6B35',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 16,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  stepText: {
    color: '#F9FAFB',
    fontSize: 26,
    fontWeight: '400',
    lineHeight: 38,
  },
  timerSuggestion: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 24,
    backgroundColor: '#374151',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  timerSuggestionText: {
    color: '#FF6B35',
    fontSize: 15,
    fontWeight: '600',
  },
  completeStepButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 24,
    borderWidth: 2,
    borderColor: '#10B981',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  completeStepButtonDone: {
    backgroundColor: '#10B981',
    borderColor: '#10B981',
  },
  completeStepText: {
    color: '#10B981',
    fontSize: 16,
    fontWeight: '600',
  },
  completeStepTextDone: {
    color: '#FFF',
  },
  timerContainer: {
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#111827',
    marginHorizontal: 24,
    borderRadius: 16,
    marginBottom: 8,
  },
  timerDisplay: {
    color: '#F9FAFB',
    fontSize: 48,
    fontWeight: '300',
    fontVariant: ['tabular-nums'],
  },
  timerDone: {
    color: '#10B981',
    fontSize: 28,
    fontWeight: '600',
  },
  timerControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginTop: 12,
  },
  timerButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#FF6B35',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerButtonSmall: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#374151',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerPresets: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  timerPresetsLabel: {
    color: '#6B7280',
    fontSize: 13,
    marginRight: 4,
  },
  presetButton: {
    backgroundColor: '#374151',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  presetButtonText: {
    color: '#D1D5DB',
    fontSize: 14,
    fontWeight: '600',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  navButtonDisabled: {
    opacity: 0.3,
  },
  navText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  navTextDisabled: {
    color: '#4B5563',
  },
  finishButton: {
    backgroundColor: '#10B981',
    borderRadius: 16,
    paddingHorizontal: 28,
  },
  finishText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
  },
});
