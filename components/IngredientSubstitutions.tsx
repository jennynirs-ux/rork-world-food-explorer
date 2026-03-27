import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ArrowLeftRight, ChevronDown, ChevronUp } from 'lucide-react-native';
import { RecipeIngredient } from '@/types';
import { translateContent } from '@/lib/translate-content';
import colors from '@/constants/colors';

interface IngredientSubstitutionsProps {
  ingredients: RecipeIngredient[];
  lang?: string;
}

export default function IngredientSubstitutions({ ingredients, lang = 'en' }: IngredientSubstitutionsProps) {
  const [expanded, setExpanded] = useState(false);

  // Filter to only ingredients that have substitutions
  const withSubs = (ingredients || []).filter(
    (ing) => ing.substitutions && ing.substitutions.length > 0,
  );

  if (withSubs.length === 0) return null;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => setExpanded(!expanded)}
        activeOpacity={0.7}
      >
        <ArrowLeftRight size={16} color={colors.sage} />
        <Text style={styles.title}>Ingredient Substitutions</Text>
        <Text style={styles.count}>{withSubs.length}</Text>
        {expanded ? (
          <ChevronUp size={18} color={colors.textTertiary} />
        ) : (
          <ChevronDown size={18} color={colors.textTertiary} />
        )}
      </TouchableOpacity>

      {expanded && (
        <View style={styles.list}>
          {withSubs.map((ing, idx) => (
            <View key={idx} style={styles.item}>
              <Text style={styles.originalName}>
                {translateContent(ing.name, lang)}
              </Text>
              {ing.substitutions?.map((sub, sIdx) => (
                <View key={sIdx} style={styles.subRow}>
                  <Text style={styles.arrow}>→</Text>
                  <View style={styles.subInfo}>
                    <Text style={styles.subName}>
                      {translateContent(sub.name, lang)}
                      {sub.ratio !== 1 && (
                        <Text style={styles.ratio}> ({sub.ratio}x amount)</Text>
                      )}
                    </Text>
                    {sub.note && (
                      <Text style={styles.subNote}>{translateContent(sub.note, lang)}</Text>
                    )}
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    borderRadius: 12,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    padding: 14,
  },
  title: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600' as const,
    color: colors.text,
  },
  count: {
    fontSize: 12,
    color: colors.textTertiary,
    backgroundColor: colors.background,
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 8,
    overflow: 'hidden',
  },
  list: {
    paddingHorizontal: 14,
    paddingBottom: 14,
    gap: 12,
  },
  item: {
    gap: 4,
  },
  originalName: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: colors.text,
  },
  subRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
    paddingLeft: 8,
    marginTop: 2,
  },
  arrow: {
    fontSize: 14,
    color: colors.sage,
    marginTop: 1,
  },
  subInfo: {
    flex: 1,
  },
  subName: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  ratio: {
    fontSize: 12,
    color: colors.textTertiary,
  },
  subNote: {
    fontSize: 12,
    color: colors.textTertiary,
    fontStyle: 'italic',
    marginTop: 1,
  },
});
