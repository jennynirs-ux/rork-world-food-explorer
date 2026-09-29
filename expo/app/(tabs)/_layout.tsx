import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";
import { Compass, Award, BookOpen, User, CalendarDays } from "lucide-react-native";
import { useTranslation } from '@/lib/i18n';
import { useStrings } from '@/lib/strings';
import { cookbookStrings } from '@/lib/strings/cookbook';

export default function TabLayout() {
  const { t } = useTranslation();
  const cookbook = useStrings(cookbookStrings);
  return (
    <Tabs
      backBehavior="history"
      screenOptions={{
        tabBarActiveTintColor: '#FF6B35',
        tabBarInactiveTintColor: '#9CA3AF',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFF',
          borderTopColor: '#E5E7EB',
          borderTopWidth: 1,
          height: 88,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600' as const,
          marginTop: 2,
        },
      }}
    >
      {/* Left side */}
      <Tabs.Screen
        name="meal-plan"
        options={{
          title: t.ui.tabPlan,
          tabBarIcon: ({ color, size }) => <CalendarDays color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="cookbook"
        options={{
          title: cookbook.tabTitle,
          tabBarIcon: ({ color, size }) => <BookOpen color={color} size={size} />,
        }}
      />

      {/* Center — Explore (bigger icon) */}
      <Tabs.Screen
        name="index"
        options={{
          title: t.ui.tabExplore,
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.exploreIcon, focused && styles.exploreIconActive]}>
              <Compass color={focused ? '#FFF' : color} size={28} />
            </View>
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '700' as const,
            marginTop: 4,
          },
        }}
      />

      {/* Right side */}
      <Tabs.Screen
        name="progress"
        options={{
          title: t.ui.tabProgress,
          tabBarIcon: ({ color, size }) => <Award color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: t.ui.tabProfile,
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />

    </Tabs>
  );
}

const styles = StyleSheet.create({
  exploreIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FFF3ED',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -22,
    marginBottom: 0,
    borderWidth: 3,
    borderColor: '#FFE0D0',
  },
  exploreIconActive: {
    backgroundColor: '#FF6B35',
    borderColor: '#FF6B35',
    shadowColor: '#FF6B35',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
});
