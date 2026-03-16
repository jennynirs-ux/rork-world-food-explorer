import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, type ViewStyle, type StyleProp } from 'react-native';
import { Image } from 'expo-image';
import { optimizeUnsplashUrl } from '@/lib/image-utils';

type FoodImageType = 'landscape' | 'food' | 'landmark' | 'generic';

type FoodImageProps = {
  uri: string | null | undefined;
  alt: string;
  style?: StyleProp<ViewStyle>;
  type?: FoodImageType;
  contentFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  width?: number;
};

const PLACEHOLDER_COLORS: Record<FoodImageType, string> = {
  landscape: '#4a7c59',
  food: '#c17f59',
  landmark: '#7a8b99',
  generic: '#8b8b8b',
};

const FALLBACK_ICONS: Record<FoodImageType, string> = {
  landscape: '🏔️',
  food: '🍽️',
  landmark: '🏛️',
  generic: '📷',
};

function FoodImageComponent({ uri, alt, style, type = 'generic', contentFit = 'cover', width }: FoodImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoading(false);
  }, []);

  const handleLoadStart = useCallback(() => {
    setIsLoading(true);
  }, []);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const showFallback = !uri || uri.trim().length === 0 || hasError;

  if (showFallback) {
    return (
      <View style={[styles.fallbackContainer, style]}>
        <Text style={styles.fallbackIcon}>{FALLBACK_ICONS[type]}</Text>
        <Text style={styles.fallbackText}>Image unavailable</Text>
      </View>
    );
  }

  const optimizedUri = optimizeUnsplashUrl(uri, { width: width ?? 800 });

  return (
    <View style={[styles.imageWrapper, style]}>
      <Image
        source={{ uri: optimizedUri }}
        style={StyleSheet.absoluteFill}
        contentFit={contentFit}
        accessibilityLabel={alt}
        cachePolicy="memory-disk"
        transition={300}
        recyclingKey={uri}
        onLoadStart={handleLoadStart}
        onLoad={handleLoad}
        onError={handleError}
      />
      {isLoading && (
        <View style={[styles.loadingOverlay, { backgroundColor: PLACEHOLDER_COLORS[type], opacity: 0.7 }]}>
          <ActivityIndicator size="small" color="rgba(255,255,255,0.8)" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    overflow: 'hidden',
    backgroundColor: '#1a1a2e',
  },
  fallbackContainer: {
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fallbackIcon: {
    fontSize: 32,
    marginBottom: 6,
  },
  fallbackText: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 12,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const FoodImage = React.memo(FoodImageComponent);
export default FoodImage;
