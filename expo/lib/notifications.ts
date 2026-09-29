import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NOTIF_KEY = '@world_cooking_notifications';

/** Identifiers of the notifications this module schedules. */
const STREAK_REMINDER_ID = 'streak-reminder';
const WEEKLY_CHALLENGE_PREFIX = 'weekly-challenge-';
const TYPE_STREAK = 'streak_reminder';
const TYPE_WEEKLY = 'weekly_challenge';

const STREAK_REMINDER_HOUR = 19;
const WEEKLY_CHALLENGE_HOUR = 10;
/** How many upcoming weekly challenges to keep scheduled (topped up on every app start). */
const WEEKLY_CHALLENGES_AHEAD = 4;

export type StreakInfo = {
  /** The stored streak count (UserProfile.currentStreak). */
  currentStreak?: number;
  /** ISO timestamp of the last cooking activity (UserProfile.lastActiveDate). */
  lastActiveDate?: string;
};

interface NotifState {
  /** The user opted in to reminders. */
  enabled: boolean;
  /** Last streak info we were given, so startup can reschedule without the profile. */
  streak?: StreakInfo;
}

const DEFAULT_STATE: NotifState = { enabled: false };

/**
 * Run schedule changes one at a time. Startup sync and streak refreshes can
 * fire together; each step re-reads the saved state inside the queue.
 */
let queue: Promise<unknown> = Promise.resolve();
function serialized<T>(task: () => Promise<T>): Promise<T> {
  const run = queue.then(task, task);
  queue = run.catch(() => undefined);
  return run;
}

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
async function ensureAndroidChannel(): Promise<void> {
  if (Platform.OS !== 'android') return;
  try {
    // Android 13+ only shows the permission prompt once a channel exists.
    await Notifications.setNotificationChannelAsync('default', {
      name: 'Reminders',
      importance: Notifications.AndroidImportance.DEFAULT,
    });
  } catch {
    /* non-fatal */
  }
}

export async function requestNotificationPermission(): Promise<boolean> {
  if (Platform.OS === 'web') return false;

  await ensureAndroidChannel();
  const { status: existing } = await Notifications.getPermissionsAsync();
  if (existing === 'granted') return true;

  const { status } = await Notifications.requestPermissionsAsync();
  return status === 'granted';
}

/** Permission check that never shows a prompt (for background refreshes). */
async function hasNotificationPermission(): Promise<boolean> {
  if (Platform.OS === 'web') return false;
  try {
    const { status } = await Notifications.getPermissionsAsync();
    return status === 'granted';
  } catch {
    return false;
  }
}

// ── State persistence ───────────────────────────────────────────
async function getState(): Promise<NotifState> {
  try {
    const raw = await AsyncStorage.getItem(NOTIF_KEY);
    // Older versions stored extra "...Scheduled" flags; only `enabled` is kept.
    const parsed = raw ? JSON.parse(raw) : null;
    return parsed ? { enabled: !!parsed.enabled, streak: parsed.streak } : { ...DEFAULT_STATE };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

async function setState(state: NotifState): Promise<void> {
  try {
    await AsyncStorage.setItem(NOTIF_KEY, JSON.stringify(state));
  } catch {
    /* non-fatal */
  }
}

// ── Date helpers (all local time) ───────────────────────────────
function startOfLocalDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function addDays(date: Date, days: number): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
}

/** Whole local calendar days from `a` to `b` (DST-safe). */
function localDaysBetween(a: Date, b: Date): number {
  const da = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const db = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.round((db - da) / 86400000);
}

function atHour(day: Date, hour: number): Date {
  return new Date(day.getFullYear(), day.getMonth(), day.getDate(), hour, 0, 0, 0);
}

/**
 * When the "Don't break your streak" reminder should fire, or null for never.
 *
 * - No streak, or it is already broken (last activity before yesterday): none.
 * - Last activity yesterday: today at 19:00, if that is still ahead.
 * - Already active today: tomorrow at 19:00 (rescheduled when they cook tomorrow).
 */
export function getStreakReminderDate(info: StreakInfo, now: Date = new Date()): Date | null {
  const streak = info.currentStreak || 0;
  if (streak <= 0 || !info.lastActiveDate) return null;
  const last = new Date(info.lastActiveDate);
  if (Number.isNaN(last.getTime())) return null;

  const daysSinceActive = localDaysBetween(last, now);
  if (daysSinceActive <= 0) {
    return atHour(addDays(startOfLocalDay(now), 1), STREAK_REMINDER_HOUR);
  }
  if (daysSinceActive === 1) {
    const today = atHour(now, STREAK_REMINDER_HOUR);
    return today.getTime() > now.getTime() ? today : null;
  }
  return null;
}

// ── Streak reminder ─────────────────────────────────────────────
async function cancelStreakReminders(): Promise<void> {
  try {
    const scheduled = await Notifications.getAllScheduledNotificationsAsync();
    const ours = scheduled.filter(n =>
      n.identifier === STREAK_REMINDER_ID || n.content?.data?.type === TYPE_STREAK,
    );
    await Promise.all(ours.map(n => Notifications.cancelScheduledNotificationAsync(n.identifier)));
  } catch {
    await Notifications.cancelScheduledNotificationAsync(STREAK_REMINDER_ID).catch(() => {});
  }
}

async function scheduleStreakReminderFor(info: StreakInfo | undefined): Promise<void> {
  // Replaces the old repeating daily reminder as well as any earlier one-off.
  await cancelStreakReminders();
  const date = info ? getStreakReminderDate(info) : null;
  if (!date) return;

  await Notifications.scheduleNotificationAsync({
    identifier: STREAK_REMINDER_ID,
    content: {
      title: "Don't break your streak! 🔥",
      body: 'Cook something today to keep your cooking streak alive.',
      data: { type: TYPE_STREAK },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DATE,
      date,
    },
  });
}

/**
 * Re-plan the streak reminder from the user's current streak. Call on app
 * start once the profile is loaded, and whenever `currentStreak` or
 * `lastActiveDate` changes (i.e. after the user cooks something).
 * Safe to call when notifications are off: it only remembers the info.
 */
export function refreshStreakReminder(info: StreakInfo): Promise<void> {
  if (Platform.OS === 'web') return Promise.resolve();
  return serialized(async () => {
    const state = await getState();
    state.streak = { currentStreak: info.currentStreak, lastActiveDate: info.lastActiveDate };
    await setState(state);

    if (!state.enabled || !(await hasNotificationPermission())) return;
    try {
      await scheduleStreakReminderFor(state.streak);
    } catch (error) {
      if (__DEV__) console.warn('Could not schedule streak reminder:', error);
    }
  });
}

/** @deprecated Use refreshStreakReminder with the user's streak. */
export async function scheduleStreakReminder(info?: StreakInfo): Promise<void> {
  const granted = await requestNotificationPermission();
  if (!granted) return;
  await serialized(async () => {
    const state = await getState();
    if (info) state.streak = info;
    state.enabled = true;
    await setState(state);
    await scheduleStreakReminderFor(state.streak);
  });
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

function localDateKey(date: Date): string {
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${m}-${d}`;
}

/**
 * The next `count` Monday 10:00 slots after `now`, each with its own message.
 * Messages rotate by week number, so consecutive weeks always differ and
 * rescheduling on every app start keeps the same message for a given week.
 */
export function getUpcomingWeeklyChallenges(
  now: Date = new Date(),
  count = WEEKLY_CHALLENGES_AHEAD,
): { identifier: string; date: Date; title: string; body: string }[] {
  const today = startOfLocalDay(now);
  const daysUntilMonday = (8 - today.getDay()) % 7;
  let monday = atHour(addDays(today, daysUntilMonday), WEEKLY_CHALLENGE_HOUR);
  if (monday.getTime() <= now.getTime()) monday = atHour(addDays(today, daysUntilMonday + 7), WEEKLY_CHALLENGE_HOUR);

  const result = [];
  for (let i = 0; i < count; i++) {
    const date = atHour(addDays(monday, i * 7), WEEKLY_CHALLENGE_HOUR);
    // Weeks since a fixed Monday (1970-01-05), in local calendar days.
    const week = Math.floor(localDaysBetween(new Date(1970, 0, 5), date) / 7);
    const msg = CHALLENGE_MESSAGES[((week % CHALLENGE_MESSAGES.length) + CHALLENGE_MESSAGES.length) % CHALLENGE_MESSAGES.length];
    result.push({ identifier: `${WEEKLY_CHALLENGE_PREFIX}${localDateKey(date)}`, date, ...msg });
  }
  return result;
}

/** Make sure the next few weekly challenges are scheduled, based on what the OS has. */
async function syncWeeklyChallenges(
  scheduled: Notifications.NotificationRequest[],
): Promise<void> {
  const upcoming = getUpcomingWeeklyChallenges();
  const wanted = new Set(upcoming.map(c => c.identifier));

  // Drop the old repeating weekly trigger (same message forever) and stale entries.
  const stale = scheduled.filter(n =>
    (n.identifier.startsWith(WEEKLY_CHALLENGE_PREFIX) || n.content?.data?.type === TYPE_WEEKLY) &&
    !wanted.has(n.identifier),
  );
  await Promise.all(stale.map(n => Notifications.cancelScheduledNotificationAsync(n.identifier)));

  const have = new Set(scheduled.map(n => n.identifier));
  for (const challenge of upcoming) {
    if (have.has(challenge.identifier)) continue;
    await Notifications.scheduleNotificationAsync({
      identifier: challenge.identifier,
      content: {
        title: challenge.title,
        body: challenge.body,
        data: { type: TYPE_WEEKLY },
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DATE,
        date: challenge.date,
      },
    });
  }
}

/** @deprecated Scheduling happens in enableNotifications/initializeNotifications. */
export async function scheduleWeeklyChallenge(): Promise<void> {
  const granted = await requestNotificationPermission();
  if (!granted) return;
  await serialized(async () =>
    syncWeeklyChallenges(await Notifications.getAllScheduledNotificationsAsync()));
}

// ── Cancel all scheduled notifications ──────────────────────────
export function cancelAllNotifications(): Promise<void> {
  return serialized(async () => {
    if (Platform.OS !== 'web') {
      await Notifications.cancelAllScheduledNotificationsAsync();
    }
    const state = await getState();
    await setState({ ...state, enabled: false });
  });
}

/**
 * Bring the OS schedule in line with the user's choice. Checks what is
 * actually scheduled rather than trusting saved flags, so reminders lost to a
 * reinstall, restore or OS cleanup come back, and old repeating ones go away.
 */
async function syncSchedule(state: NotifState): Promise<void> {
  const scheduled = await Notifications.getAllScheduledNotificationsAsync();
  await syncWeeklyChallenges(scheduled);
  await scheduleStreakReminderFor(state.streak);
}

// ── Initialize (call once on app startup) ───────────────────────
export function initializeNotifications(): Promise<void> {
  if (Platform.OS === 'web') return Promise.resolve();
  return serialized(async () => {
    try {
      const state = await getState();
      if (!state.enabled) return; // User hasn't opted in
      // Don't prompt at startup; if permission was revoked in Settings, nothing can fire anyway.
      if (!(await hasNotificationPermission())) return;
      await syncSchedule(state);
    } catch (error) {
      if (__DEV__) console.warn('Could not initialize notifications:', error);
    }
  });
}

// ── Check if notifications are enabled ──────────────────────────
export async function areNotificationsEnabled(): Promise<boolean> {
  const state = await getState();
  return state.enabled;
}

// ── Enable notifications (first-time opt-in) ────────────────────
export async function enableNotifications(streak?: StreakInfo): Promise<boolean> {
  const granted = await requestNotificationPermission();
  if (!granted) return false;

  await serialized(async () => {
    const state = await getState();
    state.enabled = true;
    if (streak) state.streak = streak;
    await setState(state);
    try {
      await syncSchedule(state);
    } catch (error) {
      if (__DEV__) console.warn('Could not schedule notifications:', error);
    }
  });
  return true;
}

// ── Disable notifications ───────────────────────────────────────
export async function disableNotifications(): Promise<void> {
  await cancelAllNotifications();
}
