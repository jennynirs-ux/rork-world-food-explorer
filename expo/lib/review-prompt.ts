/**
 * Review gate-prompt system.
 *
 * Strategy:
 *  1. Show an in-app "Are you enjoying the app?" gate first.
 *  2. If YES  → call requestReview() (Apple's native prompt — max 3×/year enforced by OS).
 *  3. If NO   → do nothing (no public review damage).
 *
 * Triggers (call maybeAskForReview from these moments):
 *  - After cooking the 3rd recipe
 *  - After completing the 1st quiz
 *  - After earning the 3rd badge
 *
 * Throttling:
 *  - Never show within 30 days of the last prompt.
 *  - Never show more than 3 times total (mirrors Apple's OS cap).
 *  - Never show on web.
 */

import { Alert, Platform } from 'react-native';
import * as StoreReview from 'expo-store-review';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'review_prompt_meta';
const MAX_PROMPTS = 3;
const MIN_DAYS_BETWEEN = 30;
const MS_PER_DAY = 24 * 60 * 60 * 1000;

interface ReviewMeta {
  promptCount: number;
  lastPromptAt: number | null; // timestamp ms
}

async function getMeta(): Promise<ReviewMeta> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as ReviewMeta;
  } catch { /* ignore */ }
  return { promptCount: 0, lastPromptAt: null };
}

async function saveMeta(meta: ReviewMeta): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(meta));
  } catch { /* ignore */ }
}

/**
 * Call this at a positive moment (recipe cooked, quiz done, badge earned).
 * It decides whether to show the gate prompt based on throttle rules.
 */
export async function maybeAskForReview(
  enjoyingMessage: string = 'Are you enjoying World Food Journey?',
  yesLabel: string = 'Yes, I love it! ❤️',
  noLabel: string = 'Not really'
): Promise<void> {
  if (Platform.OS === 'web') return;

  const isAvailable = await StoreReview.isAvailableAsync();
  if (!isAvailable) return;

  const meta = await getMeta();

  // Throttle: max 3 prompts total
  if (meta.promptCount >= MAX_PROMPTS) return;

  // Throttle: min 30 days between prompts
  if (meta.lastPromptAt !== null) {
    const daysSinceLast = (Date.now() - meta.lastPromptAt) / MS_PER_DAY;
    if (daysSinceLast < MIN_DAYS_BETWEEN) return;
  }

  // Show the gate dialog
  Alert.alert(
    enjoyingMessage,
    undefined,
    [
      {
        text: yesLabel,
        onPress: async () => {
          // Record prompt usage before calling requestReview
          await saveMeta({
            promptCount: meta.promptCount + 1,
            lastPromptAt: Date.now(),
          });
          await StoreReview.requestReview();
        },
      },
      {
        text: noLabel,
        style: 'cancel',
        // No action — unhappy users are silently routed away from the store
        onPress: async () => {
          // Still record so we don't re-ask immediately
          await saveMeta({
            promptCount: meta.promptCount + 1,
            lastPromptAt: Date.now(),
          });
        },
      },
    ]
  );
}
