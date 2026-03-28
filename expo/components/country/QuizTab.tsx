import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Check } from 'lucide-react-native';
import { useTranslation } from '@/lib/i18n';
import colors from '@/constants/colors';
import type { CountryProgress } from '@/types';
import type { TranslatedCountry } from '@/lib/use-translated-country';

type QuizTabProps = {
  country: TranslatedCountry;
  progress: CountryProgress;
  quizAnswers: number[];
  setQuizAnswers: (answers: number[]) => void;
  onSubmitQuiz: () => void;
};

export default function QuizTab({
  country,
  progress,
  quizAnswers,
  setQuizAnswers,
  onSubmitQuiz,
}: QuizTabProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.tabContent}>
      <View style={styles.section}>
        {progress.quizCompleted && (
          <View style={styles.quizCompleted}>
            <Check size={40} color="#10B981" />
            <Text style={styles.quizCompletedText}>{t.country.quizCompleted}</Text>
            <Text style={styles.quizScoreText}>
              {t.country.score}: {progress.quizScore} / {country.quiz.length}
            </Text>
          </View>
        )}

        <View style={styles.quizContainer}>
          {country.quiz.map((question, qIdx) => (
            <View key={question.id} style={styles.questionCard}>
              <Text style={styles.questionText}>
                {qIdx + 1}. {question.question}
              </Text>
              {question.options.map((option, oIdx) => {
                const isSelected = quizAnswers[qIdx] === oIdx;
                const isCorrect = question.correctAnswer === oIdx;
                const showResult = progress.quizCompleted;

                return (
                  <TouchableOpacity
                    key={oIdx}
                    style={[
                      styles.optionButton,
                      isSelected && styles.optionButtonSelected,
                      showResult && isCorrect && styles.optionButtonCorrect,
                      showResult && isSelected && !isCorrect && styles.optionButtonWrong,
                    ]}
                    onPress={() => {
                      if (!progress.quizCompleted) {
                        const newAnswers = [...quizAnswers];
                        newAnswers[qIdx] = oIdx;
                        setQuizAnswers(newAnswers);
                      }
                    }}
                    disabled={progress.quizCompleted}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        isSelected && styles.optionTextSelected,
                        showResult && isCorrect && styles.optionTextCorrect,
                      ]}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}

          {!progress.quizCompleted && (
            <TouchableOpacity
              style={styles.submitQuizButton}
              onPress={onSubmitQuiz}
            >
              <Text style={styles.submitQuizButtonText}>{t.country.submitQuiz}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  quizCompleted: {
    backgroundColor: '#D1FAE5',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    marginBottom: 24,
  },
  quizCompletedText: {
    fontSize: 24,
    fontWeight: '700' as const,
    color: colors.success,
    marginTop: 16,
  },
  quizScoreText: {
    fontSize: 18,
    color: colors.success,
    marginTop: 8,
  },
  quizContainer: {
    gap: 16,
  },
  questionCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
  },
  questionText: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: colors.text,
    marginBottom: 12,
  },
  optionButton: {
    backgroundColor: colors.surfaceAlt,
    padding: 14,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: colors.sand,
  },
  optionButtonSelected: {
    borderColor: colors.primary,
    backgroundColor: '#EFF6FF',
  },
  optionButtonCorrect: {
    borderColor: colors.success,
    backgroundColor: '#D1FAE5',
  },
  optionButtonWrong: {
    borderColor: '#EF4444',
    backgroundColor: '#FEE2E2',
  },
  optionText: {
    fontSize: 15,
    color: '#4B5563',
  },
  optionTextSelected: {
    color: colors.primary,
    fontWeight: '600' as const,
  },
  optionTextCorrect: {
    color: colors.success,
    fontWeight: '600' as const,
  },
  submitQuizButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  submitQuizButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600' as const,
  },
});
