import { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

function SkeletonBox({ width, height, borderRadius = 8 }: { width: number | string; height: number; borderRadius?: number }) {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, { toValue: 0.7, duration: 800, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 0.3, duration: 800, useNativeDriver: true }),
      ])
    );
    animation.start();
    return () => animation.stop();
  }, [opacity]);

  return (
    <Animated.View
      style={[
        styles.skeleton,
        { width: width as any, height, borderRadius, opacity },
      ]}
    />
  );
}

export function CountryCardSkeleton() {
  return (
    <View style={styles.card}>
      <SkeletonBox width={48} height={48} borderRadius={24} />
      <View style={styles.cardContent}>
        <SkeletonBox width={140} height={16} />
        <SkeletonBox width={80} height={12} />
        <SkeletonBox width="100%" height={6} borderRadius={3} />
      </View>
    </View>
  );
}

export function CountryListSkeleton({ count = 6 }: { count?: number }) {
  return (
    <View style={styles.list}>
      {Array.from({ length: count }).map((_, i) => (
        <CountryCardSkeleton key={i} />
      ))}
    </View>
  );
}

export function CountryDetailSkeleton() {
  return (
    <View style={styles.detail}>
      <SkeletonBox width="100%" height={200} borderRadius={0} />
      <View style={styles.detailContent}>
        <SkeletonBox width={200} height={24} />
        <SkeletonBox width={120} height={14} />
        <SkeletonBox width="100%" height={80} borderRadius={12} />
        <SkeletonBox width="100%" height={80} borderRadius={12} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: '#E5E7EB',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    marginHorizontal: 16,
    gap: 12,
  },
  cardContent: {
    flex: 1,
    gap: 8,
  },
  list: {
    paddingTop: 12,
  },
  detail: {
    flex: 1,
  },
  detailContent: {
    padding: 16,
    gap: 12,
  },
});
