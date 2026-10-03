import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/lib/i18n';
import { useStrings } from '@/lib/strings';
import { shareStrings } from '@/lib/strings/share';
import { Trophy, Flame, Award as AwardIcon, Globe, Share2, ChefHat } from 'lucide-react-native';
import {
  countCookedCountries,
  localizeBadge,
  selectPassportFlags,
  shareBadge,
  shareProgress,
} from '@/lib/share';
import { PASSPORT_MAX_FLAGS, useShareCard } from '@/components/share/ShareCard';
import { hapticLight } from '@/lib/haptics';
import colors from '@/constants/colors';
import type { Badge } from '@/types';

const SKILL_RANK_KEYS = {
  beginner: 'rankBeginner',
  intermediate: 'rankIntermediate',
  advanced: 'rankAdvanced',
} as const;

export default function ProgressScreen() {
  const router = useRouter();
  const { stats, badges, userProfile, countries, countryProgress } = useApp();
  const { t, language } = useTranslation();
  const s = useStrings(shareStrings);
  const { shareCard, shareCardHost, isSharing } = useShareCard();

  const earnedBadges = badges.filter(b => b.earned);
  const unearnedBadges = badges.filter(b => !b.earned);

  const handleShare = () => {
    hapticLight();
    const { flags, more } = selectPassportFlags(countries, countryProgress, PASSPORT_MAX_FLAGS);
    void shareCard(
      {
        variant: 'progress',
        cookedCountries: countCookedCountries(countryProgress),
        visitedCountries: stats.visitedCountries,
        completedCountries: stats.completedCountries,
        totalCountries: stats.totalCountries,
        dishesCooked: stats.cookedDishes,
        streak: stats.currentStreak,
        flags,
        moreFlags: more,
      },
      () => shareProgress({
        visitedCountries: stats.visitedCountries,
        totalCountries: stats.totalCountries,
        dishesCooked: stats.cookedDishes,
        quizzesDone: stats.completedQuizzes,
        totalPoints: userProfile.totalPoints,
        dayStreak: stats.currentStreak,
      }, language),
    );
  };

  const handleShareBadge = (badge: Badge) => {
    hapticLight();
    const text = localizeBadge(t.badges, badge);
    void shareCard(
      {
        variant: 'badge',
        name: text.name,
        description: text.description,
        icon: badge.icon,
        earnedDate: badge.earnedDate,
      },
      () => shareBadge(text, language),
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>{t.progress.title}</Text>
            <TouchableOpacity
              style={styles.shareHeaderButton}
              onPress={handleShare}
              disabled={isSharing}
              accessibilityLabel={s.shareProgress}
              accessibilityRole="button"
              accessibilityState={{ busy: isSharing }}
            >
              {isSharing ? (
                <ActivityIndicator size="small" color="#FF6B35" />
              ) : (
                <Share2 size={20} color="#FF6B35" />
              )}
            </TouchableOpacity>
          </View>
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
              <Text style={styles.streakValue}>{stats.currentStreak}</Text>
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

        {userProfile.skillLevel && (
          <View style={styles.skillSection}>
            <View style={styles.skillCard}>
              <ChefHat size={24} color="#FF6B35" />
              <View style={styles.skillInfo}>
                <Text style={styles.skillLevel}>
                  {t.progress[SKILL_RANK_KEYS[userProfile.skillLevel]]}
                </Text>
                <Text style={styles.skillDetails}>
                  {(userProfile.recipesCompletedByDifficulty?.easy || 0) +
                    (userProfile.recipesCompletedByDifficulty?.medium || 0) +
                    (userProfile.recipesCompletedByDifficulty?.hard || 0)}{' '}
                  {t.progress.recipesCooked}
                </Text>
              </View>
            </View>
          </View>
        )}

        {stats.visitedCountries === 0 ? (
          <View style={styles.emptyState}>
            <Globe size={60} color="#D1D5DB" />
            <Text style={styles.emptyText}>
              {t.progress.noCountriesYet || 'Start exploring countries on the map to track your progress here!'}
            </Text>
            <TouchableOpacity
              style={styles.exploreCtaButton}
              onPress={() => router.push('/(tabs)')}
              accessibilityLabel={t.progress.exploreCta}
              accessibilityRole="button"
            >
              <Text style={styles.exploreCtaText}>{t.progress.exploreCta}</Text>
            </TouchableOpacity>
          </View>
        ) : (
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
        )}

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
                const Icon = badge.icon || AwardIcon;
                const text = localizeBadge(t.badges, badge);
                return (
                  <TouchableOpacity
                    key={badge.id}
                    style={styles.badgeCard}
                    onPress={() => handleShareBadge(badge)}
                    disabled={isSharing}
                    activeOpacity={0.75}
                    accessibilityRole="button"
                    accessibilityLabel={`${text.name}, ${text.description}`}
                    accessibilityHint={s.shareBadge}
                  >
                    <View style={styles.badgeIconContainer}>
                      <Icon size={32} color="#FF6B35" strokeWidth={2} />
                    </View>
                    <View style={styles.badgeTextContainer}>
                      <Text style={styles.badgeName}>{text.name}</Text>
                      <Text style={styles.badgeDescription}>{text.description}</Text>
                    </View>
                    <Share2 size={18} color="#FF6B35" />
                  </TouchableOpacity>
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
                const Icon = badge.icon || AwardIcon;
                const text = localizeBadge(t.badges, badge);
                return (
                  <View
                    key={badge.id}
                    style={[styles.badgeCard, styles.badgeCardLocked]}
                    accessibilityLabel={`${t.progress.lockedBadges}: ${text.name}, ${text.description}`}
                  >
                    <View style={styles.badgeIconContainer}>
                      <Icon size={32} color="#9CA3AF" strokeWidth={2} />
                    </View>
                    <View style={styles.badgeTextContainer}>
                      <Text style={styles.badgeNameLocked}>{text.name}</Text>
                      <Text style={styles.badgeDescriptionLocked}>{text.description}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        )}

        <View style={{ height: 20 }} />
      </ScrollView>
      {shareCardHost}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '700' as const,
    color: '#2D1B00',
  },
  shareHeaderButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#FF6B35',
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
    marginHorizontal: 16,
    marginBottom: 24,
  },
  emptyText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 16,
  },
  exploreCtaButton: {
    backgroundColor: '#FF6B35',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 8,
  },
  exploreCtaText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600' as const,
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
  skillSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  skillCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    gap: 12,
  },
  skillInfo: {
    flex: 1,
  },
  skillLevel: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: '#2D1B00',
  },
  skillDetails: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },
});
