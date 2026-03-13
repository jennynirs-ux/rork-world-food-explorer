import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AppProvider, useApp } from "@/contexts/AppContext";
import { trpc, trpcClient } from "@/lib/trpc";
import ErrorBoundary from "@/components/ErrorBoundary";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

function RootLayoutNav() {
  const { userProfile, isLoading } = useApp();
  const router = useRouter();
  const segments = useSegments();

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
  const [trpcClientState] = useState(() => trpcClient);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <trpc.Provider client={trpcClientState} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <AppProvider>
            <ErrorBoundary>
              <RootLayoutNav />
            </ErrorBoundary>
          </AppProvider>
        </GestureHandlerRootView>
      </QueryClientProvider>
    </trpc.Provider>
  );
}
