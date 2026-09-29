import { useEffect, useRef } from 'react';
import { Animated, Platform, StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
  message: string;
  actionLabel: string;
  onAction: () => void;
  /** Called when the toast times out. */
  onHide: () => void;
  durationMs?: number;
};

const useNativeDriver = Platform.OS !== 'web';

/**
 * Snackbar with a single action. Mount it with a fresh `key` per event to
 * restart the timer.
 */
export default function UndoToast({ message, actionLabel, onAction, onHide, durationMs = 5000 }: Props) {
  const anim = useRef(new Animated.Value(0)).current;
  const onHideRef = useRef(onHide);
  useEffect(() => {
    onHideRef.current = onHide;
  }, [onHide]);

  useEffect(() => {
    Animated.timing(anim, { toValue: 1, duration: 180, useNativeDriver }).start();
    const timer = setTimeout(() => {
      Animated.timing(anim, { toValue: 0, duration: 160, useNativeDriver }).start(() => onHideRef.current());
    }, durationMs);
    return () => clearTimeout(timer);
  }, [anim, durationMs]);

  return (
    <Animated.View
      style={[
        styles.toast,
        {
          opacity: anim,
          transform: [{ translateY: anim.interpolate({ inputRange: [0, 1], outputRange: [24, 0] }) }],
        },
      ]}
      accessibilityLiveRegion="polite"
      accessibilityRole="alert"
    >
      <Text style={styles.message} numberOfLines={2}>{message}</Text>
      <TouchableOpacity onPress={onAction} hitSlop={8} accessibilityRole="button" accessibilityLabel={actionLabel}>
        <Text style={styles.action}>{actionLabel}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: '#2D1B00',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  message: {
    flex: 1,
    color: '#FFF',
    fontSize: 14,
  },
  action: {
    color: '#FFB08A',
    fontSize: 14,
    fontWeight: '700' as const,
  },
});
