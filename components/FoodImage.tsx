import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, type ImageStyle, type StyleProp } from 'react-native';
import { Image } from 'expo-image';
import { optimizeUnsplashUrl } from '@/lib/image-utils';

type FoodImageType = 'landscape' | 'food' | 'landmark' | 'generic';

type FoodImageProps = {
  uri: string | null | undefined;
  alt: string;
  style?: StyleProp<ImageStyle>;
  type?: FoodImageType;
  contentFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  width?: number;
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
    console.log(`FoodImage: Failed to load image for "${alt}":`, uri);
    setHasError(true);
    setIsLoading(false);
  }, [alt, uri]);

  const handleLoadStart = useCallback(() => {
    setIsLoading(true);
  }, []);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const showFallback = !uri || uri.trim().length === 0 || hasError;

  if (showFallback) {
    return (
      <View style={[styles.fallbackContainer, style as any]}>
        <Text style={styles.fallbackIcon}>{FALLBACK_ICONS[type]}</Text>
        <Text style={styles.fallbackText}>Image unavailable</Text>
      </View>
    );
  }

  const optimizedUri = optimizeUnsplashUrl(uri, { width: width ?? 800 });

  return (
    <View style={[styles.imageWrapper, style as any]}>
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
        <View style={styles.loadingOverlay}>
          <Text style={styles.loadingText}>Loading...</Text>
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
    backgroundColor: 'rgba(26, 26, 46, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
  },
});

export const FoodImage = React.memo(FoodImageComponent);
export default FoodImage;
