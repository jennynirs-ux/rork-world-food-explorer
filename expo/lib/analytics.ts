import AsyncStorage from '@react-native-async-storage/async-storage';

const ANALYTICS_KEY = '@world_cooking_analytics';

export type AnalyticsEvent = {
  event: string;
  properties?: Record<string, string | number | boolean>;
  timestamp: string;
};

type AnalyticsStore = {
  events: AnalyticsEvent[];
  sessionStart?: string;
  totalSessions: number;
};

let cache: AnalyticsStore | null = null;

async function getStore(): Promise<AnalyticsStore> {
  if (cache) return cache;
  try {
    const raw = await AsyncStorage.getItem(ANALYTICS_KEY);
    cache = raw ? JSON.parse(raw) : { events: [], totalSessions: 0 };
  } catch {
    cache = { events: [], totalSessions: 0 };
  }
  return cache!;
}

async function save(store: AnalyticsStore): Promise<void> {
  cache = store;
  // Keep only last 500 events to avoid storage bloat
  if (store.events.length > 500) {
    store.events = store.events.slice(-500);
  }
  await AsyncStorage.setItem(ANALYTICS_KEY, JSON.stringify(store));
}

/**
 * Track an analytics event.
 */
export async function trackEvent(
  event: string,
  properties?: Record<string, string | number | boolean>,
): Promise<void> {
  const store = await getStore();
  store.events.push({
    event,
    properties,
    timestamp: new Date().toISOString(),
  });
  await save(store);
}

/**
 * Track session start.
 */
export async function trackSessionStart(): Promise<void> {
  const store = await getStore();
  store.sessionStart = new Date().toISOString();
  store.totalSessions += 1;
  await save(store);
  await trackEvent('session_start', { sessionNumber: store.totalSessions });
}

/**
 * Get analytics summary for debugging/display.
 */
export async function getAnalyticsSummary(): Promise<{
  totalSessions: number;
  totalEvents: number;
  topEvents: { event: string; count: number }[];
  lastActive: string | null;
}> {
  const store = await getStore();

  const eventCounts = new Map<string, number>();
  for (const e of store.events) {
    eventCounts.set(e.event, (eventCounts.get(e.event) || 0) + 1);
  }

  const topEvents = Array.from(eventCounts.entries())
    .map(([event, count]) => ({ event, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  const lastEvent = store.events[store.events.length - 1];

  return {
    totalSessions: store.totalSessions,
    totalEvents: store.events.length,
    topEvents,
    lastActive: lastEvent?.timestamp || null,
  };
}

// Common event names
export const EVENTS = {
  COUNTRY_VIEWED: 'country_viewed',
  RECIPE_COOKED: 'recipe_cooked',
  RECIPE_SHARED: 'recipe_shared',
  RECIPE_FAVORITED: 'recipe_favorited',
  QUIZ_COMPLETED: 'quiz_completed',
  SHOPPING_LIST_ADDED: 'shopping_list_added',
  MEAL_PLANNED: 'meal_planned',
  INGREDIENT_MATCH_SEARCHED: 'ingredient_match_searched',
  COLLECTION_VIEWED: 'collection_viewed',
  PHOTO_UPLOADED: 'photo_uploaded',
  RECIPE_SUBMITTED: 'recipe_submitted',
} as const;
