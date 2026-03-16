import * as StoreReview from 'expo-store-review';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RATING_KEY = '@world_cooking_rating_state';

interface RatingState {
  hasRated: boolean;
  lastPromptDate: string | null;
  actionCount: number;
}

const DEFAULT_STATE: RatingState = {
  hasRated: false,
  lastPromptDate: null,
  actionCount: 0,
};

/** Minimum meaningful actions before prompting (country completions, quizzes, etc.) */
const ACTION_THRESHOLD = 5;
/** Minimum days between prompts if user hasn't rated */
const MIN_DAYS_BETWEEN_PROMPTS = 30;

async function getState(): Promise<RatingState> {
  try {
    const raw = await AsyncStorage.getItem(RATING_KEY);
    return raw ? JSON.parse(raw) : { ...DEFAULT_STATE };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

async function setState(state: RatingState): Promise<void> {
  await AsyncStorage.setItem(RATING_KEY, JSON.stringify(state));
}

/**
 * Call after a meaningful positive action (country completed, quiz aced, etc.).
 * Automatically decides whether to show the native rating dialog.
 */
export async function trackPositiveAction(): Promise<void> {
  const state = await getState();

  if (state.hasRated) return;

  state.actionCount += 1;

  if (state.actionCount < ACTION_THRESHOLD) {
    await setState(state);
    return;
  }

  // Check cooldown
  if (state.lastPromptDate) {
    const daysSince = (Date.now() - new Date(state.lastPromptDate).getTime()) / (1000 * 60 * 60 * 24);
    if (daysSince < MIN_DAYS_BETWEEN_PROMPTS) {
      await setState(state);
      return;
    }
  }

  // Check availability and prompt
  const available = await StoreReview.isAvailableAsync();
  if (!available) {
    await setState(state);
    return;
  }

  try {
    await StoreReview.requestReview();
    // Assume user has seen it — mark as rated to avoid nagging.
    // The OS controls whether the dialog actually shows (limited to ~3 times/year).
    state.hasRated = true;
    state.lastPromptDate = new Date().toISOString();
  } catch {
    state.lastPromptDate = new Date().toISOString();
  }

  await setState(state);
}
