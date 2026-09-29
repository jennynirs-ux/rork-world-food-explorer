import { Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AppProvider, useApp } from "@/contexts/AppContext";
import ErrorBoundary from "@/components/ErrorBoundary";

SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
  const { userProfile, isLoading } = useApp();
  const router = useRouter();
  const segments = useSegments();

  // Keep the splash up until the saved profile is loaded, so returning users
  // never see onboarding flash and new users never see Explore flash.
  useEffect(() => {
    if (!isLoading) void SplashScreen.hideAsync();
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) return;
    const inOnboarding = (segments as string[]).includes('onboarding');
    if (!userProfile.completedOnboarding && !inOnboarding) {
      router.replace('/onboarding' as any);
    } else if (userProfile.completedOnboarding && inOnboarding) {
      router.replace('/(tabs)' as any);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile.completedOnboarding, isLoading, segments]);

  return (
    <Stack screenOptions={{ headerBackTitle: "Back" }}>
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="country/[id]" options={{ headerShown: false }} />
      <Stack.Screen
        name="shopping-list"
        options={{
          headerShown: false,
          presentation: 'card'
        }}
      />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppProvider>
        <ErrorBoundary>
          <RootLayoutNav />
        </ErrorBoundary>
      </AppProvider>
    </GestureHandlerRootView>
  );
}
