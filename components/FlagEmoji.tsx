import { Text, Image, Platform } from 'react-native';

interface FlagEmojiProps {
  flag: string;
  size?: number;
}

/**
 * Renders an emoji flag that works on all platforms.
 *
 * Country-flag emojis (regional indicator pairs like 🇸🇪) do not render on
 * Windows/Linux browsers — they appear as two-letter codes or blank boxes.
 * On web we fall back to Twemoji CDN images so flags always display correctly.
 */
export default function FlagEmoji({ flag, size = 40 }: FlagEmojiProps) {
  if (Platform.OS === 'web') {
    // Convert emoji flag to Twemoji CDN URL
    const codePoints = Array.from(flag)
      .map(c => c.codePointAt(0)?.toString(16))
      .filter(Boolean)
      .join('-');

    return (
      <Image
        source={{ uri: `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/${codePoints}.png` }}
        style={{ width: size, height: size }}
        accessibilityLabel={flag}
      />
    );
  }

  return (
    <Text style={{ fontSize: size * 0.85, lineHeight: size * 1.1 }}>{flag}</Text>
  );
}
