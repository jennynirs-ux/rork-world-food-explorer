import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NOTIF_KEY = '@world_cooking_notifications';

interface NotifState {
  enabled: boolean;
  streakReminderScheduled: boolean;
  weeklyChallenge: boolean;
}

const DEFAULT_STATE: NotifState = {
  enabled: false,
  streakReminderScheduled: false,
  weeklyChallenge: false,
};

// ── Configure notification handler ──────────────────────────────
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

// ── Permission ──────────────────────────────────────────────────
export async function requestNotificationPermission(): Promise<boolean> {
  if (Platform.OS === 'web') return false;

  const { status: existing } = await Notifications.getPermissionsAsync();
  if (existing === 'granted') return true;

  const { status } = await Notifications.requestPermissionsAsync();
  return status === 'granted';
}

// ── State persistence ───────────────────────────────────────────
async function getState(): Promise<NotifState> {
  try {
    const raw = await AsyncStorage.getItem(NOTIF_KEY);
    return raw ? JSON.parse(raw) : { ...DEFAULT_STATE };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

async function setState(state: NotifState): Promise<void> {
  await AsyncStorage.setItem(NOTIF_KEY, JSON.stringify(state));
}

// ── Streak reminder (daily at 19:00 local) ──────────────────────
export async function scheduleStreakReminder(): Promise<void> {
  const granted = await requestNotificationPermission();
  if (!granted) return;

  const state = await getState();
  if (state.streakReminderScheduled) return;

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Don't break your streak! 🔥",
      body: 'Open World Food Journey to keep your cooking streak alive.',
      data: { type: 'streak_reminder' },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour: 19,
      minute: 0,
    },
  });

  state.streakReminderScheduled = true;
  state.enabled = true;
  await setState(state);
}

// ── Weekly cooking challenge (Mondays at 10:00) ─────────────────
const CHALLENGE_MESSAGES = [
  { title: 'Weekly Challenge 🌍', body: 'Try cooking an Asian dish this week!' },
  { title: 'Weekly Challenge 🌍', body: 'Explore a European recipe you haven\'t tried!' },
  { title: 'Weekly Challenge 🌍', body: 'Cook something from Africa this week!' },
  { title: 'Weekly Challenge 🌍', body: 'Try a dish from the Americas!' },
  { title: 'Weekly Challenge 🌍', body: 'Discover Oceanian cuisine this week!' },
  { title: 'New Recipe Awaits 🍳', body: 'Your next culinary adventure is waiting!' },
  { title: 'Time to Cook! 👨‍🍳', body: 'Pick a random country and try something new!' },
];

export async function scheduleWeeklyChallenge(): Promise<void> {
  const granted = await requestNotificationPermission();
  if (!granted) return;

  const state = await getState();
  if (state.weeklyChallenge) return;

  // Pick a random challenge message
  const msg = CHALLENGE_MESSAGES[Math.floor(Math.random() * CHALLENGE_MESSAGES.length)];

  await Notifications.scheduleNotificationAsync({
    content: {
      title: msg.title,
      body: msg.body,
      data: { type: 'weekly_challenge' },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.WEEKLY,
      weekday: 2, // Monday
      hour: 10,
      minute: 0,
    },
  });

  state.weeklyChallenge = true;
  state.enabled = true;
  await setState(state);
}

// ── Cancel all scheduled notifications ──────────────────────────
export async function cancelAllNotifications(): Promise<void> {
  await Notifications.cancelAllScheduledNotificationsAsync();
  await setState({ ...DEFAULT_STATE });
}

// ── Initialize (call once on app startup after onboarding) ──────
export async function initializeNotifications(): Promise<void> {
  const state = await getState();
  if (!state.enabled) return; // User hasn't opted in yet

  // Re-schedule if needed (app update might clear them)
  if (!state.streakReminderScheduled) await scheduleStreakReminder();
  if (!state.weeklyChallenge) await scheduleWeeklyChallenge();
}

// ── Check if notifications are enabled ──────────────────────────
export async function areNotificationsEnabled(): Promise<boolean> {
  const state = await getState();
  return state.enabled;
}

// ── Enable notifications (first-time opt-in) ────────────────────
export async function enableNotifications(): Promise<boolean> {
  const granted = await requestNotificationPermission();
  if (!granted) return false;

  await scheduleStreakReminder();
  await scheduleWeeklyChallenge();
  return true;
}

// ── Disable notifications ───────────────────────────────────────
export async function disableNotifications(): Promise<void> {
  await cancelAllNotifications();
}
