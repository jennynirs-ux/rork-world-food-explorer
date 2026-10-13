import { useEffect } from 'react';
import { act, render, waitFor } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppProvider, useApp } from '@/contexts/AppContext';

// The package ships ESM only; this is the same implementation in CommonJS.
jest.mock('@nkzw/create-context-hook', () => {
  const React = jest.requireActual('react');
  return {
    __esModule: true,
    default: (init: () => unknown) => {
      const Context = React.createContext(undefined);
      return [
        ({ children }: { children: unknown }) =>
          React.createElement(Context.Provider, { value: init() }, children),
        () => React.useContext(Context),
      ];
    },
  };
});

jest.mock('@/lib/purchases', () => ({
  configurePurchases: jest.fn().mockResolvedValue(undefined),
  ensureAnonymousUser: jest.fn().mockResolvedValue(true),
  getCustomerInfo: jest.fn().mockResolvedValue(null),
  addOwnedProductsListener: jest.fn(() => () => {}),
}));
jest.mock('@/lib/notifications', () => ({
  initializeNotifications: jest.fn().mockResolvedValue(undefined),
  refreshStreakReminder: jest.fn().mockResolvedValue(undefined),
}));
jest.mock('@/lib/legacy-code-unlock', () => ({
  hasActiveLegacyCodeUnlock: jest.fn().mockResolvedValue(false),
}));
jest.mock('@/lib/cache', () => ({ cache: { remove: jest.fn().mockResolvedValue(undefined) } }));
jest.mock('@/lib/rating', () => ({ trackPositiveAction: jest.fn().mockResolvedValue(undefined) }));

const PROGRESS_KEY = '@world_cooking_country_progress';
const PROFILE_KEY = '@world_cooking_user_profile';
const APP_DATA_KEYS = [
  PROFILE_KEY,
  PROGRESS_KEY,
  '@world_cooking_shopping_list',
  '@world_cooking_badges',
  '@world_cooking_favorite_recipes',
  '@world_cooking_meal_plans',
];

const savedProgress = {
  italy: { visited: true, mainDishCooked: true, dessertCooked: true, quizCompleted: true, fullyCompleted: true },
  japan: { visited: true, mainDishCooked: true, dessertCooked: false, quizCompleted: false, fullyCompleted: false },
};
const savedProfile = {
  name: 'Jenny',
  totalPoints: 500,
  createdDate: '2026-01-01T00:00:00.000Z',
  completedOnboarding: true,
  purchasedProducts: [],
  language: 'sv',
};

type App = ReturnType<typeof useApp>;
let app: App;
function Probe() {
  app = useApp();
  return null;
}

/** Runs a mutator from a mount effect — like the country screen on a cold-start deep link, before AppProvider has loaded. */
function OnMount({ run }: { run: (a: App) => void }) {
  const current = useApp();
  useEffect(() => {
    run(current);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- mount only
  }, []);
  return null;
}

function renderApp(run: (a: App) => void) {
  return render(
    <AppProvider>
      <OnMount run={run} />
      <Probe />
    </AppProvider>,
  );
}

async function stored(key: string) {
  const raw = await AsyncStorage.getItem(key);
  return raw ? JSON.parse(raw) : null;
}

function setItemCallsFor(keys: string[]) {
  return (AsyncStorage.setItem as jest.Mock).mock.calls.filter(([key]) => keys.includes(key));
}

beforeEach(async () => {
  await AsyncStorage.clear();
  await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify(savedProgress));
  await AsyncStorage.setItem(PROFILE_KEY, JSON.stringify(savedProfile));
  jest.clearAllMocks();
});

describe('AppContext before saved data has loaded', () => {
  it('keeps saved country progress when a visit is recorded during load', async () => {
    renderApp(a => void a.updateCountryProgress('sweden', { visited: true }, 0));
    await waitFor(() => expect(app.isLoading).toBe(false));

    expect(Object.keys(app.countryProgress).sort()).toEqual(['italy', 'japan', 'sweden']);
    expect(app.countryProgress.italy.fullyCompleted).toBe(true);
    expect(app.countryProgress.sweden.visited).toBe(true);

    const onDisk = await stored(PROGRESS_KEY);
    expect(Object.keys(onDisk).sort()).toEqual(['italy', 'japan', 'sweden']);
    expect(onDisk.japan.mainDishCooked).toBe(true);
    expect(app.userProfile.totalPoints).toBe(500);
  });

  it('applies profile changes made during load on top of the saved profile', async () => {
    renderApp(a => void a.toggleFavoriteCountry('japan'));
    await waitFor(() => expect(app.isLoading).toBe(false));

    expect(app.userProfile.name).toBe('Jenny');
    expect(app.userProfile.completedOnboarding).toBe(true);
    expect(app.userProfile.favoriteCountries).toEqual(['japan']);

    const onDisk = await stored(PROFILE_KEY);
    expect(onDisk.name).toBe('Jenny');
    expect(onDisk.totalPoints).toBe(500);
    expect(onDisk.favoriteCountries).toEqual(['japan']);
  });

  it('queues every kind of write until the saved data is in', async () => {
    renderApp(a => {
      void a.addToShoppingList([{ name: 'Rice', amount: 1, unit: 'kg' }], 'japan', 'Japan');
      void a.addFavoriteRecipe('jp-main', 'Ramen', 'japan', 'Japan', '🇯🇵', false);
      a.addMealPlan({ id: 'p1', date: '2026-10-12', mealType: 'dinner', countryId: 'japan', recipeId: 'jp-main' });
      a.awardBadge('first-dish');
      // Nothing may hit storage while the saved data is still being read.
      expect(setItemCallsFor(APP_DATA_KEYS)).toHaveLength(0);
    });
    await waitFor(() => expect(app.isLoading).toBe(false));

    expect(app.shoppingList.map(i => i.name)).toEqual(['Rice']);
    expect(app.favoriteRecipes.map(f => f.recipeId)).toEqual(['jp-main']);
    expect(app.mealPlans.map(p => p.id)).toEqual(['p1']);
    expect(app.badges.find(b => b.id === 'first-dish')?.earned).toBe(true);
    expect((await stored(PROGRESS_KEY)).italy.fullyCompleted).toBe(true);
  });

  it('never writes defaults over saved data when loading fails', async () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    (AsyncStorage.getItem as jest.Mock).mockImplementationOnce(() => Promise.reject(new Error('disk')));

    renderApp(a => void a.updateCountryProgress('sweden', { visited: true }, 10));
    await waitFor(() => expect(app.isLoading).toBe(false));

    // The change still shows in memory for this session...
    expect(app.countryProgress.sweden.visited).toBe(true);
    await act(async () => {
      await app.completeOnboarding('Someone else');
    });
    expect(app.userProfile.name).toBe('Someone else');

    // ...but the saved data is left untouched.
    expect(setItemCallsFor(APP_DATA_KEYS)).toHaveLength(0);
    expect(await stored(PROGRESS_KEY)).toEqual(savedProgress);
    expect(await stored(PROFILE_KEY)).toEqual(savedProfile);
    consoleError.mockRestore();
  });

  it('writes normally once loaded', async () => {
    renderApp(() => {});
    await waitFor(() => expect(app.isLoading).toBe(false));

    await act(async () => {
      await app.updateCountryProgress('mexico', { visited: true }, 0);
    });

    const onDisk = await stored(PROGRESS_KEY);
    expect(Object.keys(onDisk).sort()).toEqual(['italy', 'japan', 'mexico']);
  });
});
