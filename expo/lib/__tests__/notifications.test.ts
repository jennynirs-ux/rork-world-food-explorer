import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import {
  getStreakReminderDate,
  getUpcomingWeeklyChallenges,
  initializeNotifications,
  refreshStreakReminder,
  enableNotifications,
  disableNotifications,
  areNotificationsEnabled,
} from '../notifications';

type Scheduled = { identifier: string; content: { data?: Record<string, unknown> }; trigger: unknown };

let mockScheduled: Scheduled[] = [];

jest.mock('expo-notifications', () => ({
  setNotificationHandler: jest.fn(),
  setNotificationChannelAsync: jest.fn().mockResolvedValue(null),
  AndroidImportance: { DEFAULT: 3 },
  getPermissionsAsync: jest.fn().mockResolvedValue({ status: 'granted' }),
  requestPermissionsAsync: jest.fn().mockResolvedValue({ status: 'granted' }),
  getAllScheduledNotificationsAsync: jest.fn(async () => [...mockScheduled]),
  scheduleNotificationAsync: jest.fn(async (req: { identifier?: string; content: { data?: Record<string, unknown> }; trigger: unknown }) => {
    const identifier = req.identifier ?? `os-${Math.random()}`;
    mockScheduled = mockScheduled.filter(n => n.identifier !== identifier);
    mockScheduled.push({ identifier, content: req.content, trigger: req.trigger });
    return identifier;
  }),
  cancelScheduledNotificationAsync: jest.fn(async (id: string) => {
    mockScheduled = mockScheduled.filter(n => n.identifier !== id);
  }),
  cancelAllScheduledNotificationsAsync: jest.fn(async () => {
    mockScheduled = [];
  }),
  SchedulableTriggerInputTypes: { DAILY: 'daily', WEEKLY: 'weekly', DATE: 'date' },
}));

const NOTIF_KEY = '@world_cooking_notifications';
const local = (y: number, m: number, d: number, h = 0, min = 0) => new Date(y, m - 1, d, h, min);

const streakReminders = () => mockScheduled.filter(n => n.content.data?.type === 'streak_reminder');
const weeklyChallenges = () => mockScheduled.filter(n => n.content.data?.type === 'weekly_challenge');

describe('getStreakReminderDate', () => {
  const now = local(2026, 3, 10, 12); // Tuesday noon

  it('is null without a streak', () => {
    expect(getStreakReminderDate({}, now)).toBeNull();
    expect(getStreakReminderDate({ currentStreak: 0, lastActiveDate: local(2026, 3, 9, 18).toISOString() }, now)).toBeNull();
  });

  it('reminds today at 19:00 when the user was last active yesterday', () => {
    const date = getStreakReminderDate({ currentStreak: 4, lastActiveDate: local(2026, 3, 9, 23, 30).toISOString() }, now);
    expect(date).toEqual(local(2026, 3, 10, 19));
  });

  it('does not remind after 19:00 has passed', () => {
    const evening = local(2026, 3, 10, 20);
    expect(getStreakReminderDate({ currentStreak: 4, lastActiveDate: local(2026, 3, 9, 12).toISOString() }, evening)).toBeNull();
  });

  it('waits until tomorrow when the user already cooked today', () => {
    const date = getStreakReminderDate({ currentStreak: 5, lastActiveDate: local(2026, 3, 10, 0, 15).toISOString() }, now);
    expect(date).toEqual(local(2026, 3, 11, 19));
  });

  it('is null when the streak is already broken', () => {
    expect(getStreakReminderDate({ currentStreak: 9, lastActiveDate: local(2026, 3, 8, 12).toISOString() }, now)).toBeNull();
  });
});

describe('getUpcomingWeeklyChallenges', () => {
  it('schedules separate Mondays at 10:00 with rotating messages', () => {
    const list = getUpcomingWeeklyChallenges(local(2026, 3, 10, 12), 4);
    expect(list).toHaveLength(4);
    expect(list[0].date).toEqual(local(2026, 3, 16, 10));
    for (let i = 0; i < list.length; i++) {
      expect(list[i].date.getDay()).toBe(1);
      expect(list[i].date.getHours()).toBe(10);
      if (i > 0) expect(list[i].body).not.toBe(list[i - 1].body);
    }
    expect(new Set(list.map(c => c.identifier)).size).toBe(4);
  });

  it('keeps the same message for a week when re-planned on another day', () => {
    const fromTuesday = getUpcomingWeeklyChallenges(local(2026, 3, 10, 12), 2);
    const fromSunday = getUpcomingWeeklyChallenges(local(2026, 3, 15, 22), 2);
    expect(fromSunday).toEqual(fromTuesday);
  });

  it('uses today when it is Monday before 10:00', () => {
    expect(getUpcomingWeeklyChallenges(local(2026, 3, 16, 9), 1)[0].date).toEqual(local(2026, 3, 16, 10));
    expect(getUpcomingWeeklyChallenges(local(2026, 3, 16, 11), 1)[0].date).toEqual(local(2026, 3, 23, 10));
  });
});

describe('scheduling', () => {
  beforeEach(async () => {
    mockScheduled = [];
    jest.clearAllMocks();
    await AsyncStorage.clear();
    jest.useFakeTimers({ now: local(2026, 3, 10, 12), doNotFake: ['nextTick', 'setImmediate', 'queueMicrotask'] });
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('startup replaces the old repeating reminders with what the OS should have', async () => {
    await AsyncStorage.setItem(NOTIF_KEY, JSON.stringify({
      enabled: true,
      // flags from the old version claim everything is mockScheduled…
      streakReminderScheduled: true,
      weeklyChallenge: true,
      streak: { currentStreak: 3, lastActiveDate: local(2026, 3, 9, 18).toISOString() },
    }));
    // …while the OS still has the old daily/weekly repeating triggers.
    mockScheduled = [
      { identifier: 'old-daily', content: { data: { type: 'streak_reminder' } }, trigger: { type: 'daily', hour: 19 } },
      { identifier: 'old-weekly', content: { data: { type: 'weekly_challenge' } }, trigger: { type: 'weekly' } },
    ];

    await initializeNotifications();

    expect(mockScheduled.find(n => n.identifier === 'old-daily')).toBeUndefined();
    expect(mockScheduled.find(n => n.identifier === 'old-weekly')).toBeUndefined();
    expect(weeklyChallenges()).toHaveLength(4);
    expect(streakReminders()).toHaveLength(1);
    expect(streakReminders()[0].trigger).toEqual({ type: 'date', date: local(2026, 3, 10, 19) });
  });

  it('startup re-creates reminders the OS lost, and does not duplicate existing ones', async () => {
    await AsyncStorage.setItem(NOTIF_KEY, JSON.stringify({ enabled: true }));
    await initializeNotifications();
    expect(weeklyChallenges()).toHaveLength(4);

    (Notifications.scheduleNotificationAsync as jest.Mock).mockClear();
    await initializeNotifications();
    expect(Notifications.scheduleNotificationAsync).not.toHaveBeenCalled();
    expect(weeklyChallenges()).toHaveLength(4);
  });

  it('does nothing at startup when the user has not opted in', async () => {
    await initializeNotifications();
    expect(mockScheduled).toHaveLength(0);
    expect(Notifications.requestPermissionsAsync).not.toHaveBeenCalled();
  });

  it('refreshStreakReminder follows the streak', async () => {
    await enableNotifications();
    expect(await areNotificationsEnabled()).toBe(true);
    expect(streakReminders()).toHaveLength(0); // no streak known yet

    await refreshStreakReminder({ currentStreak: 2, lastActiveDate: local(2026, 3, 9, 8).toISOString() });
    expect(streakReminders()).toHaveLength(1);
    expect(streakReminders()[0].trigger).toEqual({ type: 'date', date: local(2026, 3, 10, 19) });

    // Cooked today: tomorrow's reminder replaces today's.
    await refreshStreakReminder({ currentStreak: 3, lastActiveDate: local(2026, 3, 10, 11).toISOString() });
    expect(streakReminders()).toHaveLength(1);
    expect(streakReminders()[0].trigger).toEqual({ type: 'date', date: local(2026, 3, 11, 19) });

    // No streak: no reminder.
    await refreshStreakReminder({ currentStreak: 0 });
    expect(streakReminders()).toHaveLength(0);
  });

  it('remembers the streak while disabled and uses it when enabled', async () => {
    await refreshStreakReminder({ currentStreak: 2, lastActiveDate: local(2026, 3, 9, 8).toISOString() });
    expect(mockScheduled).toHaveLength(0);

    await enableNotifications();
    expect(streakReminders()).toHaveLength(1);

    await disableNotifications();
    expect(mockScheduled).toHaveLength(0);
    expect(await areNotificationsEnabled()).toBe(false);
  });
});
