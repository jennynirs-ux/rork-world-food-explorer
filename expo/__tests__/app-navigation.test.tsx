import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import type { RecipeMatch } from '@/lib/ingredient-match';
import RootLayout from '@/app/_layout';
import TabLayout from '@/app/(tabs)/_layout';
import CollectionsScreen from '@/app/collections';
import IngredientMatchScreen from '@/app/ingredient-match';
import SubmitRecipeScreen from '@/app/submit-recipe';

// Shared router so tests can inspect calls made by the screens.
const mockRouter = {
  push: jest.fn(),
  replace: jest.fn(),
  back: jest.fn(),
  canGoBack: jest.fn(() => true),
};
const mockStackScreens: { name: string; options?: { headerShown?: boolean } }[] = [];
let mockTabsProps: { screenOptions?: { tabBarStyle?: Record<string, unknown> } } | null = null;
let mockInsets = { top: 0, right: 0, bottom: 0, left: 0 };
let mockMatches: RecipeMatch[] = [];

jest.mock('expo-router', () => {
  function Stack({ children }: { children?: React.ReactNode }) {
    return children ?? null;
  }
  function StackScreen(props: { name: string }) {
    mockStackScreens.push(props);
    return null;
  }
  Stack.Screen = StackScreen;
  function Tabs(props: typeof mockTabsProps) {
    mockTabsProps = props;
    return null;
  }
  function TabsScreen() {
    return null;
  }
  Tabs.Screen = TabsScreen;
  return {
    useRouter: () => mockRouter,
    useSegments: () => [],
    useLocalSearchParams: () => ({}),
    Stack,
    Tabs,
    Link: ({ children }: { children?: React.ReactNode }) => children,
  };
});

jest.mock('react-native-safe-area-context', () => {
  const mock = jest.requireActual('react-native-safe-area-context/jest/mock').default;
  return { ...mock, useSafeAreaInsets: () => mockInsets };
});

jest.mock('react-native-gesture-handler', () => ({
  GestureHandlerRootView: jest.requireActual('react-native').View,
}));

jest.mock('@/contexts/AppContext', () => ({
  AppProvider: ({ children }: { children?: React.ReactNode }) => children,
  useApp: () => ({
    countries: [],
    isLoading: false,
    userProfile: { language: 'en', completedOnboarding: true, purchasedProducts: [], name: '' },
  }),
}));

jest.mock('@/lib/ingredient-match', () => ({
  ...jest.requireActual('@/lib/ingredient-match'),
  findMatchingRecipes: () => mockMatches,
}));

const match = (countryId: string, isDessert: boolean): RecipeMatch => ({
  countryId,
  countryName: countryId,
  countryFlag: '🏳️',
  recipe: {
    id: `${countryId}-${isDessert ? 'dessert' : 'main'}`,
    name: { en: `${countryId} ${isDessert ? 'dessert' : 'main'}` },
    description: '',
    cookingTime: 30,
    servings: 4,
    dietType: 'meat',
    ingredients: [],
    steps: [],
  },
  isDessert,
  matchedIngredients: ['rice'],
  totalIngredients: 2,
  matchPercent: 50,
});

beforeEach(() => {
  jest.clearAllMocks();
  mockRouter.canGoBack.mockReturnValue(true);
  mockStackScreens.length = 0;
  mockTabsProps = null;
  mockInsets = { top: 0, right: 0, bottom: 0, left: 0 };
  mockMatches = [];
});

describe('What can I cook?', () => {
  function searchAndOpen(result: string) {
    const screen = render(<IngredientMatchScreen />);
    const input = screen.getByPlaceholderText(/.+/);
    fireEvent.changeText(input, 'rice');
    fireEvent(input, 'submitEditing');
    fireEvent.press(screen.getByText(result));
  }

  it('opens the country screen in the root stack on the recipes tab', () => {
    mockMatches = [match('italy', false)];
    searchAndOpen('italy main');
    expect(mockRouter.push).toHaveBeenCalledWith({
      pathname: '/country/[id]',
      params: { id: 'italy', tab: 'recipes', recipe: 'main' },
    });
  });

  it('asks the country screen to expand the dessert for a dessert match', () => {
    mockMatches = [match('france', true)];
    searchAndOpen('france dessert');
    expect(mockRouter.push).toHaveBeenCalledWith({
      pathname: '/country/[id]',
      params: { id: 'france', tab: 'recipes', recipe: 'dessert' },
    });
  });
});

describe.each([
  ['collections', CollectionsScreen],
  ['ingredient-match', IngredientMatchScreen],
  ['submit-recipe', SubmitRecipeScreen],
])('%s back button', (_name, Screen) => {
  it('goes back when there is a screen underneath', () => {
    const screen = render(<Screen />);
    fireEvent.press(screen.getByLabelText('Back'));
    expect(mockRouter.back).toHaveBeenCalled();
    expect(mockRouter.replace).not.toHaveBeenCalled();
  });

  it('falls back to Explore after a cold-start deep link', () => {
    mockRouter.canGoBack.mockReturnValue(false);
    const screen = render(<Screen />);
    fireEvent.press(screen.getByLabelText('Back'));
    expect(mockRouter.back).not.toHaveBeenCalled();
    expect(mockRouter.replace).toHaveBeenCalledWith('/(tabs)');
  });
});

describe('root stack', () => {
  it('hides the native header on screens that draw their own', () => {
    render(<RootLayout />);
    for (const name of ['collections', 'ingredient-match', 'submit-recipe', 'country/[id]', 'shopping-list']) {
      const entry = mockStackScreens.find(s => s.name === name);
      expect(entry?.options?.headerShown).toBe(false);
    }
  });
});

describe('tab bar', () => {
  function tabBarStyle(bottomInset: number) {
    mockInsets = { top: 0, right: 0, bottom: bottomInset, left: 0 };
    render(<TabLayout />);
    return mockTabsProps?.screenOptions?.tabBarStyle;
  }

  it('keeps the labels above Android 3-button navigation', () => {
    expect(tabBarStyle(48)).toMatchObject({ height: 112, paddingBottom: 48 });
  });

  it('pads above the iPhone home indicator', () => {
    expect(tabBarStyle(34)).toMatchObject({ height: 98, paddingBottom: 34 });
  });

  it('keeps a minimum bottom padding without an inset', () => {
    expect(tabBarStyle(0)).toMatchObject({ height: 72, paddingBottom: 8 });
  });
});
