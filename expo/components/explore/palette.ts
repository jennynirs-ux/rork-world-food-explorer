import colors from '@/constants/colors';

/** Progress status of a country as shown on the Explore globe and filters. */
export type CountryStatus = 'to do' | 'cooking' | 'done' | 'locked';

/**
 * Land / pin colour per status. Accessible countries use the same colours as
 * the Explore filter chips; locked ones are a desaturated sand so the
 * countries you can cook right now stand out.
 */
export const STATUS_COLORS: Record<CountryStatus, string> = {
  'to do': colors.brand,
  cooking: colors.warningYellow,
  done: colors.successGreen,
  locked: '#E2D9CB',
};

/** Warm "vintage globe" palette that sits on the app's sand background. */
export const GLOBE_COLORS = {
  oceanCenter: '#CDEAF1',
  oceanEdge: '#7FB2D6',
  oceanStroke: '#A9CFE4',
  glow: '#FFC996',
  /** Land without a country in the app (Antarctica, territories). */
  landOther: '#D8CDBB',
  landStroke: '#FFFFFF',
  limbShade: '#5B3A1E',
  pinBackground: 'rgba(255, 255, 255, 0.96)',
} as const;
