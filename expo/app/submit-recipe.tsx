import { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ArrowLeft, Plus, Trash2, Send } from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useApp } from '@/contexts/AppContext';
import { hapticLight, hapticSuccess } from '@/lib/haptics';
import colors from '@/constants/colors';

type IngredientEntry = { name: string; amount: string; unit: string };

const STORAGE_KEY = '@world_cooking_community_recipes';
const DRAFT_KEY = '@world_cooking_recipe_draft';

export default function SubmitRecipeScreen() {
  const router = useRouter();
  const { userProfile } = useApp();

  const [recipeName, setRecipeName] = useState('');
  const [countryOrigin, setCountryOrigin] = useState('');
  const [description, setDescription] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [servings, setServings] = useState('4');
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [ingredients, setIngredients] = useState<IngredientEntry[]>([
    { name: '', amount: '', unit: 'g' },
  ]);
  const [steps, setSteps] = useState<string[]>(['']);
  const [submitting, setSubmitting] = useState(false);
  const [draftRestored, setDraftRestored] = useState(false);
  const draftLoaded = useRef(false);

  // Restore draft on mount
  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(DRAFT_KEY);
        if (raw) {
          const draft = JSON.parse(raw);
          if (draft.recipeName) setRecipeName(draft.recipeName);
          if (draft.countryOrigin) setCountryOrigin(draft.countryOrigin);
          if (draft.description) setDescription(draft.description);
          if (draft.cookingTime) setCookingTime(draft.cookingTime);
          if (draft.servings) setServings(draft.servings);
          if (draft.difficulty) setDifficulty(draft.difficulty);
          if (draft.ingredients?.length) setIngredients(draft.ingredients);
          if (draft.steps?.length) setSteps(draft.steps);
          setDraftRestored(true);
          setTimeout(() => setDraftRestored(false), 3000);
        }
      } catch {
        // ignore
      } finally {
        draftLoaded.current = true;
      }
    })();
  }, []);

  // Auto-save draft on changes
  useEffect(() => {
    if (!draftLoaded.current) return;
    const draft = { recipeName, countryOrigin, description, cookingTime, servings, difficulty, ingredients, steps };
    void AsyncStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
  }, [recipeName, countryOrigin, description, cookingTime, servings, difficulty, ingredients, steps]);

  const addIngredient = () => {
    hapticLight();
    setIngredients(prev => [...prev, { name: '', amount: '', unit: 'g' }]);
  };

  const removeIngredient = (idx: number) => {
    hapticLight();
    setIngredients(prev => prev.filter((_, i) => i !== idx));
  };

  const updateIngredient = (idx: number, field: keyof IngredientEntry, value: string) => {
    setIngredients(prev => prev.map((ing, i) => i === idx ? { ...ing, [field]: value } : ing));
  };

  const addStep = () => {
    hapticLight();
    setSteps(prev => [...prev, '']);
  };

  const removeStep = (idx: number) => {
    hapticLight();
    setSteps(prev => prev.filter((_, i) => i !== idx));
  };

  const updateStep = (idx: number, value: string) => {
    setSteps(prev => prev.map((s, i) => i === idx ? value : s));
  };

  const handleSubmit = async () => {
    // Validate
    if (!recipeName.trim()) {
      Alert.alert('Missing Info', 'Please enter a recipe name');
      return;
    }
    if (!countryOrigin.trim()) {
      Alert.alert('Missing Info', 'Please enter the country of origin');
      return;
    }
    if (ingredients.filter(i => i.name.trim()).length === 0) {
      Alert.alert('Missing Info', 'Please add at least one ingredient');
      return;
    }
    if (steps.filter(s => s.trim()).length === 0) {
      Alert.alert('Missing Info', 'Please add at least one step');
      return;
    }

    setSubmitting(true);

    try {
      const submission = {
        id: `community-${Date.now()}`,
        recipeName: recipeName.trim(),
        countryOrigin: countryOrigin.trim(),
        description: description.trim(),
        cookingTime: parseInt(cookingTime) || 30,
        servings: parseInt(servings) || 4,
        difficulty,
        ingredients: ingredients
          .filter(i => i.name.trim())
          .map(i => ({
            name: i.name.trim(),
            amount: parseFloat(i.amount) || 1,
            unit: i.unit.trim() || 'g',
          })),
        steps: steps.filter(s => s.trim()),
        submittedBy: userProfile.name || 'Anonymous',
        submittedDate: new Date().toISOString(),
        status: 'pending' as const,
      };

      // Save locally
      const existing = await AsyncStorage.getItem(STORAGE_KEY);
      const submissions = existing ? JSON.parse(existing) : [];
      submissions.push(submission);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));

      hapticSuccess();
      await AsyncStorage.removeItem(DRAFT_KEY);
      Alert.alert(
        'Recipe Submitted!',
        'Thank you for sharing your recipe. It will be reviewed by our team.',
        [{ text: 'OK', onPress: () => router.back() }],
      );
    } catch {
      Alert.alert('Error', 'Failed to submit recipe. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <ArrowLeft size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Submit a Recipe</Text>
      </View>

      {draftRestored && (
        <View style={styles.draftBanner}>
          <Text style={styles.draftBannerText}>Draft restored</Text>
        </View>
      )}

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Basic Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Basic Information</Text>

          <Text style={styles.label}>Recipe Name *</Text>
          <TextInput
            style={styles.textInput}
            placeholder="e.g. Grandma's Chicken Soup"
            placeholderTextColor={colors.textTertiary}
            value={recipeName}
            onChangeText={setRecipeName}
          />

          <Text style={styles.label}>Country of Origin *</Text>
          <TextInput
            style={styles.textInput}
            placeholder="e.g. Sweden"
            placeholderTextColor={colors.textTertiary}
            value={countryOrigin}
            onChangeText={setCountryOrigin}
          />

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.textInput, styles.textArea]}
            placeholder="Brief description of the dish..."
            placeholderTextColor={colors.textTertiary}
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={3}
          />

          <View style={styles.row}>
            <View style={styles.halfField}>
              <Text style={styles.label}>Cooking Time (min)</Text>
              <TextInput
                style={styles.textInput}
                placeholder="30"
                placeholderTextColor={colors.textTertiary}
                value={cookingTime}
                onChangeText={setCookingTime}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.halfField}>
              <Text style={styles.label}>Servings</Text>
              <TextInput
                style={styles.textInput}
                placeholder="4"
                placeholderTextColor={colors.textTertiary}
                value={servings}
                onChangeText={setServings}
                keyboardType="numeric"
              />
            </View>
          </View>

          <Text style={styles.label}>Difficulty</Text>
          <View style={styles.difficultyRow}>
            {(['easy', 'medium', 'hard'] as const).map(d => (
              <TouchableOpacity
                key={d}
                style={[styles.difficultyBtn, difficulty === d && styles.difficultyBtnActive]}
                onPress={() => {
                  hapticLight();
                  setDifficulty(d);
                }}
              >
                <Text
                  style={[
                    styles.difficultyText,
                    difficulty === d && styles.difficultyTextActive,
                  ]}
                >
                  {d.charAt(0).toUpperCase() + d.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Ingredients */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ingredients</Text>

          {ingredients.map((ing, idx) => (
            <View key={idx} style={styles.ingredientRow}>
              <TextInput
                style={[styles.textInput, styles.ingAmount]}
                placeholder="100"
                placeholderTextColor={colors.textTertiary}
                value={ing.amount}
                onChangeText={(v) => updateIngredient(idx, 'amount', v)}
                keyboardType="numeric"
              />
              <TextInput
                style={[styles.textInput, styles.ingUnit]}
                placeholder="g"
                placeholderTextColor={colors.textTertiary}
                value={ing.unit}
                onChangeText={(v) => updateIngredient(idx, 'unit', v)}
              />
              <TextInput
                style={[styles.textInput, styles.ingName]}
                placeholder="Ingredient name"
                placeholderTextColor={colors.textTertiary}
                value={ing.name}
                onChangeText={(v) => updateIngredient(idx, 'name', v)}
              />
              {ingredients.length > 1 && (
                <TouchableOpacity onPress={() => removeIngredient(idx)} style={styles.removeBtn}>
                  <Trash2 size={16} color={colors.error} />
                </TouchableOpacity>
              )}
            </View>
          ))}

          <TouchableOpacity style={styles.addBtn} onPress={addIngredient}>
            <Plus size={18} color={colors.terracotta} />
            <Text style={styles.addBtnText}>Add Ingredient</Text>
          </TouchableOpacity>
        </View>

        {/* Steps */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Instructions</Text>

          {steps.map((step, idx) => (
            <View key={idx} style={styles.stepRow}>
              <Text style={styles.stepNum}>{idx + 1}.</Text>
              <TextInput
                style={[styles.textInput, styles.stepInput]}
                placeholder={`Step ${idx + 1}...`}
                placeholderTextColor={colors.textTertiary}
                value={step}
                onChangeText={(v) => updateStep(idx, v)}
                multiline
              />
              {steps.length > 1 && (
                <TouchableOpacity onPress={() => removeStep(idx)} style={styles.removeBtn}>
                  <Trash2 size={16} color={colors.error} />
                </TouchableOpacity>
              )}
            </View>
          ))}

          <TouchableOpacity style={styles.addBtn} onPress={addStep}>
            <Plus size={18} color={colors.terracotta} />
            <Text style={styles.addBtnText}>Add Step</Text>
          </TouchableOpacity>
        </View>

        {/* Submit */}
        <View style={styles.section}>
          <TouchableOpacity
            style={[styles.submitBtn, submitting && styles.submitBtnDisabled]}
            onPress={handleSubmit}
            disabled={submitting}
          >
            <Send size={20} color="#FFF" />
            <Text style={styles.submitBtnText}>
              {submitting ? 'Submitting...' : 'Submit Recipe'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  backBtn: {
    padding: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: '700' as const,
    color: colors.text,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700' as const,
    color: colors.text,
    marginBottom: 12,
  },
  label: {
    fontSize: 13,
    fontWeight: '600' as const,
    color: colors.textSecondary,
    marginBottom: 6,
    marginTop: 12,
  },
  textInput: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.border,
  },
  textArea: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  halfField: {
    flex: 1,
  },
  difficultyRow: {
    flexDirection: 'row',
    gap: 8,
  },
  difficultyBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  difficultyBtnActive: {
    backgroundColor: colors.terracotta,
    borderColor: colors.terracotta,
  },
  difficultyText: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: colors.textSecondary,
  },
  difficultyTextActive: {
    color: '#FFF',
  },
  ingredientRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  ingAmount: {
    width: 60,
    textAlign: 'center',
  },
  ingUnit: {
    width: 50,
    textAlign: 'center',
  },
  ingName: {
    flex: 1,
  },
  removeBtn: {
    padding: 8,
  },
  addBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    borderStyle: 'dashed',
    backgroundColor: colors.surface,
    marginTop: 4,
  },
  addBtnText: {
    fontSize: 14,
    fontWeight: '500' as const,
    color: colors.terracotta,
  },
  stepRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  stepNum: {
    fontSize: 16,
    fontWeight: '700' as const,
    color: colors.textSecondary,
    paddingTop: 10,
    width: 24,
  },
  stepInput: {
    flex: 1,
    minHeight: 44,
  },
  submitBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: colors.terracotta,
    borderRadius: 12,
    paddingVertical: 16,
    marginTop: 8,
  },
  submitBtnDisabled: {
    opacity: 0.6,
  },
  submitBtnText: {
    fontSize: 17,
    fontWeight: '700' as const,
    color: '#FFF',
  },
  bottomPadding: {
    height: 40,
  },
  draftBanner: {
    backgroundColor: '#D1FAE5',
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  draftBannerText: {
    color: '#065F46',
    fontSize: 14,
    fontWeight: '500' as const,
  },
});
