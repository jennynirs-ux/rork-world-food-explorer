import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { Trophy, Flame, Award as AwardIcon, Globe } from 'lucide-react-native';

export default function ProgressScreen() {
  const { stats, badges, userProfile } = useApp();
  const { t } = useTranslation();

  const earnedBadges = badges.filter(b => b.earned);
  const unearnedBadges = badges.filter(b => !b.earned);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>{t.progress.title}</Text>
          <View style={styles.pointsContainer}>
            <Text style={styles.pointsValue}>{userProfile.totalPoints}</Text>
            <Text style={styles.pointsLabel}>{t.progress.totalPoints}</Text>
          </View>
        </View>

        <View style={styles.streakSection}>
          <View style={styles.streakCard}>
            <View style={styles.streakIcon}>
              <Flame size={32} color="#FF6B35" strokeWidth={2} />
            </View>
            <View style={styles.streakInfo}>
              <Text style={styles.streakValue}>{userProfile.currentStreak || 0}</Text>
              <Text style={styles.streakLabel}>{t.progress.dayStreak}</Text>
            </View>
          </View>
          <View style={styles.streakCard}>
            <View style={styles.streakIcon}>
              <AwardIcon size={32} color="#F7931E" strokeWidth={2} />
            </View>
            <View style={styles.streakInfo}>
              <Text style={styles.streakValue}>{userProfile.longestStreak || 0}</Text>
              <Text style={styles.streakLabel}>{t.progress.longestStreak}</Text>
            </View>
          </View>
        </View>

        {stats.visitedCountries === 0 && (
          <View style={styles.emptyState}>
            <Globe size={60} color="#D1D5DB" />
            <Text style={styles.emptyText}>
              {t.progress.noCountriesYet || 'Start exploring countries on the map to track your progress here!'}
            </Text>
          </View>
        )}

        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{stats.completedCountries}</Text>
            <Text style={styles.statLabel}>{t.progress.completed}</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{stats.inProgressCountries}</Text>
            <Text style={styles.statLabel}>{t.progress.inProgress}</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{stats.cookedDishes}</Text>
            <Text style={styles.statLabel}>{t.progress.dishesCooked}</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{stats.completedQuizzes}</Text>
            <Text style={styles.statLabel}>{t.progress.quizzesDone}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.progress.earnedBadges} ({earnedBadges.length})</Text>
          {earnedBadges.length === 0 ? (
            <View style={styles.emptyState}>
              <Trophy size={60} color="#D1D5DB" />
              <Text style={styles.emptyText}>{t.progress.startEarning}</Text>
            </View>
          ) : (
            <View style={styles.badgesGrid}>
              {earnedBadges.map(badge => {
                const Icon = badge.icon;
                return (
                  <View key={badge.id} style={styles.badgeCard}>
                    <View style={styles.badgeIconContainer}>
                      <Icon size={32} color="#FF6B35" strokeWidth={2} />
                    </View>
                    <View style={styles.badgeTextContainer}>
                      <Text style={styles.badgeName}>{badge.name}</Text>
                      <Text style={styles.badgeDescription}>{badge.description}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
          )}
        </View>

        {unearnedBadges.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t.progress.lockedBadges}</Text>
            <View style={styles.badgesGrid}>
              {unearnedBadges.map(badge => {
                const Icon = badge.icon;
                return (
                  <View key={badge.id} style={[styles.badgeCard, styles.badgeCardLocked]}>
                    <View style={styles.badgeIconContainer}>
                      <Icon size={32} color="#9CA3AF" strokeWidth={2} />
                    </View>
                    <View style={styles.badgeTextContainer}>
                      <Text style={styles.badgeNameLocked}>{badge.name}</Text>
                      <Text style={styles.badgeDescriptionLocked}>{badge.description}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        )}

        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '700' as const,
    color: '#2D1B00',
    marginBottom: 16,
  },
  pointsContainer: {
    backgroundColor: '#FF6B35',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  pointsValue: {
    fontSize: 48,
    fontWeight: '700' as const,
    color: '#FFF',
  },
  pointsLabel: {
    fontSize: 16,
    color: '#FFF',
    opacity: 0.9,
    marginTop: 4,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 32,
    fontWeight: '700' as const,
    color: '#2D1B00',
  },
  statLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: '#2D1B00',
    marginBottom: 12,
  },
  badgesGrid: {
    gap: 12,
  },
  badgeCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  badgeIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FFF8F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeTextContainer: {
    flex: 1,
  },
  badgeCardLocked: {
    opacity: 0.5,
  },

  badgeName: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: '#2D1B00',
    flex: 1,
  },
  badgeNameLocked: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: '#6B7280',
    flex: 1,
  },
  badgeDescription: {
    fontSize: 14,
    color: '#6B7280',
    flex: 1,
  },
  badgeDescriptionLocked: {
    fontSize: 14,
    color: '#9CA3AF',
    flex: 1,
  },
  emptyState: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 40,
    alignItems: 'center',
  },

  emptyText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  streakSection: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  streakCard: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    gap: 12,
  },
  streakIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFF8F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  streakInfo: {
    flex: 1,
  },
  streakValue: {
    fontSize: 28,
    fontWeight: '700' as const,
    color: '#2D1B00',
  },
  streakLabel: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },
});
