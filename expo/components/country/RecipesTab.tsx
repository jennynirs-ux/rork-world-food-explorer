import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
  Clock,
  ChefHat,
  Users,
  Plus,
  Check,
  Wine,
  Glasses,
  Music,
  Sparkles,
  MessageCircle,
  Heart,
  Share2,
} from 'lucide-react-native';
import { FoodImage } from '@/components/FoodImage';
import NutritionCard from '@/components/NutritionCard';
import DifficultyBadge from '@/components/DifficultyBadge';
import IngredientSubstitutions from '@/components/IngredientSubstitutions';
import CookedPhotoGallery from '@/components/CookedPhotoGallery';
import { estimateNutrition } from '@/lib/nutrition';
import { enrichWithSubstitutions } from '@/lib/substitutions';
import { useTranslation } from '@/lib/i18n';
import colors from '@/constants/colors';
import type { Country, CountryProgress } from '@/types';
import type { TranslatedCountry } from '@/lib/use-translated-country';

type RecipesTabProps = {
  country: TranslatedCountry;
  countryData: Country | undefined;
  progress: CountryProgress;
  lang: string;
  recipeServings: number;
  setRecipeServings: (n: number) => void;
  servingsMultiplier: number;
  showMainDishRating: boolean;
  setShowMainDishRating: (v: boolean) => void;
  showDessertRating: boolean;
  setShowDessertRating: (v: boolean) => void;
  onMarkDishCooked: (isDessert: boolean) => void;
  onAddToShoppingList: (isDessert: boolean) => void;
  onToggleFavorite: (isDessert: boolean) => void;
  onRateRecipe: (isDessert: boolean, rating: number) => void;
  onShareRecipe: (isDessert: boolean) => void;
  onShareCookedPhoto: (recipeName: string, photoUri?: string) => void;
  onStartCookingMode: (steps: string[], name: string, isDessert: boolean) => void;
  isRecipeFavorite: (recipeId: string) => boolean;
};

export default function RecipesTab({
  country,
  countryData,
  progress,
  lang,
  recipeServings,
  setRecipeServings,
  servingsMultiplier,
  showMainDishRating,
  setShowMainDishRating,
  showDessertRating,
  setShowDessertRating,
  onMarkDishCooked,
  onAddToShoppingList,
  onToggleFavorite,
  onRateRecipe,
  onShareRecipe,
  onShareCookedPhoto,
  onStartCookingMode,
  isRecipeFavorite,
}: RecipesTabProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.tabContent}>
      {/* Main Dish */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t.country.mainDish}</Text>
        <View style={styles.recipeCard}>
          <FoodImage
            uri={country.mainDish.imageUrl}
            alt={String(country.mainDish.name)}
            style={styles.dishImage}
            type="food"
          />
          <Text style={styles.recipeName}>{country.mainDish.name}</Text>
          <Text style={styles.recipeDescription}>{country.mainDish.description}</Text>

          <View style={styles.recipeInfo}>
            <View style={styles.recipeInfoItem}>
              <Clock size={16} color="#6B7280" />
              <Text style={styles.recipeInfoText}>
                {country.mainDish.cookingTime} {t.common.minutes}
              </Text>
            </View>
            <View style={styles.recipeInfoItem}>
              <ChefHat size={16} color="#6B7280" />
              <Text style={styles.recipeInfoText}>{country.mainDish.dietType}</Text>
            </View>
            <DifficultyBadge difficulty={countryData?.mainDish?.difficulty} size="small" />
          </View>

          <View style={styles.servingsSelector}>
            <Users size={16} color="#6B7280" />
            <Text style={styles.servingsLabel}>{t.country.servings}:</Text>
            <TouchableOpacity
              style={styles.servingsButton}
              onPress={() => setRecipeServings(Math.max(1, recipeServings - 1))}
            >
              <Text style={styles.servingsButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.servingsValue}>{recipeServings}</Text>
            <TouchableOpacity
              style={styles.servingsButton}
              onPress={() => setRecipeServings(recipeServings + 1)}
            >
              <Text style={styles.servingsButtonText}>+</Text>
            </TouchableOpacity>
          </View>

          {countryData?.mainDish && (
            <NutritionCard
              nutrition={estimateNutrition(countryData.mainDish)}
              servingsMultiplier={servingsMultiplier}
            />
          )}

          <Text style={styles.subheading}>{t.country.ingredients}</Text>
          {country.mainDish.ingredients.map((ing, idx) => (
            <Text key={idx} style={styles.ingredientText}>
              {'\u2022'} {(ing.amount * servingsMultiplier).toFixed(1)} {ing.unit} {ing.name}
            </Text>
          ))}

          {countryData?.mainDish && (
            <IngredientSubstitutions
              ingredients={enrichWithSubstitutions(countryData.mainDish.ingredients)}
              lang={lang}
            />
          )}

          <View style={styles.instructionsHeader}>
            <Text style={[styles.subheading, { marginTop: 0, marginBottom: 0 }]}>
              {t.country.instructions}
            </Text>
            <TouchableOpacity
              style={styles.startCookingButton}
              onPress={() =>
                onStartCookingMode(
                  country.mainDish.steps.map((s) => String(s)),
                  String(country.mainDish.name),
                  false,
                )
              }
            >
              <ChefHat size={16} color="#FFF" />
              <Text style={styles.startCookingText}>Cook</Text>
            </TouchableOpacity>
          </View>
          {country.mainDish.steps.map((step, idx) => (
            <Text key={idx} style={styles.stepText}>
              {idx + 1}. {step}
            </Text>
          ))}

          <View style={styles.recipeActions}>
            <TouchableOpacity
              style={[styles.actionButton, progress.mainDishCooked && styles.actionButtonDone]}
              onPress={() => !progress.mainDishCooked && onMarkDishCooked(false)}
              disabled={progress.mainDishCooked}
            >
              {progress.mainDishCooked ? (
                <>
                  <Check size={20} color="#10B981" />
                  <Text style={styles.actionButtonTextDone}>{t.country.cooked}</Text>
                </>
              ) : (
                <>
                  <ChefHat size={20} color="#FFF" />
                  <Text style={styles.actionButtonText}>{t.country.markAsCooked}</Text>
                </>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionButtonSecondary}
              onPress={() => onAddToShoppingList(false)}
            >
              <Plus size={20} color="#FF6B35" />
              <Text style={styles.actionButtonSecondaryText}>{t.country.addToList}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[
              styles.favoriteButton,
              isRecipeFavorite(country.mainDish.id) && styles.favoriteButtonActive,
            ]}
            onPress={() => onToggleFavorite(false)}
          >
            <Heart
              size={20}
              color={isRecipeFavorite(country.mainDish.id) ? '#FF6B35' : '#9CA3AF'}
              fill={isRecipeFavorite(country.mainDish.id) ? '#FF6B35' : 'transparent'}
            />
            <Text
              style={[
                styles.favoriteButtonText,
                isRecipeFavorite(country.mainDish.id) && styles.favoriteButtonTextActive,
              ]}
            >
              {isRecipeFavorite(country.mainDish.id) ? t.country.saved : t.country.saveRecipe}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.shareButton} onPress={() => onShareRecipe(false)}>
            <Share2 size={18} color={colors.terracotta} />
            <Text style={styles.shareButtonText}>Share Recipe</Text>
          </TouchableOpacity>

          {progress.mainDishCooked && (
            <View style={styles.ratingSection}>
              {!showMainDishRating && progress.mainDishRating ? (
                <TouchableOpacity
                  style={styles.ratingDisplay}
                  onPress={() => setShowMainDishRating(true)}
                >
                  <Text style={styles.ratingLabel}>{t.country.yourRating}:</Text>
                  <View style={styles.starsRow}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Text key={star} style={styles.starText}>
                        {star <= (progress.mainDishRating || 0) ? '\u2B50' : '\u2606'}
                      </Text>
                    ))}
                  </View>
                </TouchableOpacity>
              ) : (
                <View style={styles.ratingContainer}>
                  <Text style={styles.ratingTitle}>
                    {progress.mainDishRating ? t.country.updateRating : t.country.rateRecipe}
                  </Text>
                  <View style={styles.starsRow}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <TouchableOpacity
                        key={star}
                        onPress={() => onRateRecipe(false, star)}
                        style={styles.starButton}
                      >
                        <Text style={styles.starTextLarge}>
                          {star <= (progress.mainDishRating || 0) ? '\u2B50' : '\u2606'}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              )}
            </View>
          )}

          <CookedPhotoGallery
            countryId={country.id}
            recipeId={country.mainDish.id}
            isDessert={false}
            isCooked={progress.mainDishCooked}
            onSharePhoto={(uri) => onShareCookedPhoto(String(country.mainDish.name), uri)}
          />
        </View>
      </View>

      {/* Dessert */}
      {country.dessert && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.country.dessert}</Text>
          <View style={styles.recipeCard}>
            <FoodImage
              uri={country.dessert?.imageUrl}
              alt={String(country.dessert.name)}
              style={styles.dishImage}
              type="food"
            />
            <Text style={styles.recipeName}>{country.dessert.name}</Text>
            <Text style={styles.recipeDescription}>{country.dessert.description}</Text>

            <View style={styles.recipeInfo}>
              <View style={styles.recipeInfoItem}>
                <Clock size={16} color="#6B7280" />
                <Text style={styles.recipeInfoText}>
                  {country.dessert.cookingTime} {t.common.minutes}
                </Text>
              </View>
              <DifficultyBadge difficulty={countryData?.dessert?.difficulty} size="small" />
            </View>

            {countryData?.dessert && (
              <NutritionCard
                nutrition={estimateNutrition(countryData.dessert)}
                servingsMultiplier={servingsMultiplier}
              />
            )}

            <Text style={styles.subheading}>{t.country.ingredients}</Text>
            {country.dessert.ingredients.map((ing, idx) => (
              <Text key={idx} style={styles.ingredientText}>
                {'\u2022'} {(ing.amount * servingsMultiplier).toFixed(1)} {ing.unit} {ing.name}
              </Text>
            ))}

            {countryData?.dessert && (
              <IngredientSubstitutions
                ingredients={enrichWithSubstitutions(countryData.dessert.ingredients)}
                lang={lang}
              />
            )}

            <View style={styles.instructionsHeader}>
              <Text style={styles.subheading}>{t.country.instructions}</Text>
              <TouchableOpacity
                style={styles.startCookingButton}
                onPress={() =>
                  onStartCookingMode(
                    country.dessert!.steps.map((s) => String(s)),
                    String(country.dessert!.name),
                    true,
                  )
                }
              >
                <ChefHat size={16} color="#FFF" />
                <Text style={styles.startCookingText}>Cook</Text>
              </TouchableOpacity>
            </View>
            {country.dessert.steps.map((step, idx) => (
              <Text key={idx} style={styles.stepText}>
                {idx + 1}. {step}
              </Text>
            ))}

            <View style={styles.recipeActions}>
              <TouchableOpacity
                style={[styles.actionButton, progress.dessertCooked && styles.actionButtonDone]}
                onPress={() => !progress.dessertCooked && onMarkDishCooked(true)}
                disabled={progress.dessertCooked}
              >
                {progress.dessertCooked ? (
                  <>
                    <Check size={20} color="#10B981" />
                    <Text style={styles.actionButtonTextDone}>{t.country.cooked}</Text>
                  </>
                ) : (
                  <>
                    <ChefHat size={20} color="#FFF" />
                    <Text style={styles.actionButtonText}>{t.country.markAsCooked}</Text>
                  </>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.actionButtonSecondary}
                onPress={() => onAddToShoppingList(true)}
              >
                <Plus size={20} color="#FF6B35" />
                <Text style={styles.actionButtonSecondaryText}>{t.country.addToList}</Text>
              </TouchableOpacity>
            </View>

            {country.dessert && (
              <TouchableOpacity
                style={[
                  styles.favoriteButton,
                  isRecipeFavorite(country.dessert.id) && styles.favoriteButtonActive,
                ]}
                onPress={() => onToggleFavorite(true)}
              >
                <Heart
                  size={20}
                  color={isRecipeFavorite(country.dessert.id) ? '#FF6B35' : '#9CA3AF'}
                  fill={isRecipeFavorite(country.dessert.id) ? '#FF6B35' : 'transparent'}
                />
                <Text
                  style={[
                    styles.favoriteButtonText,
                    isRecipeFavorite(country.dessert.id) && styles.favoriteButtonTextActive,
                  ]}
                >
                  {isRecipeFavorite(country.dessert.id) ? t.country.saved : t.country.saveRecipe}
                </Text>
              </TouchableOpacity>
            )}

            {country.dessert && (
              <TouchableOpacity style={styles.shareButton} onPress={() => onShareRecipe(true)}>
                <Share2 size={18} color={colors.terracotta} />
                <Text style={styles.shareButtonText}>Share Recipe</Text>
              </TouchableOpacity>
            )}

            {progress.dessertCooked && country.dessert && (
              <View style={styles.ratingSection}>
                {!showDessertRating && progress.dessertRating ? (
                  <TouchableOpacity
                    style={styles.ratingDisplay}
                    onPress={() => setShowDessertRating(true)}
                  >
                    <Text style={styles.ratingLabel}>{t.country.yourRating}:</Text>
                    <View style={styles.starsRow}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Text key={star} style={styles.starText}>
                          {star <= (progress.dessertRating || 0) ? '\u2B50' : '\u2606'}
                        </Text>
                      ))}
                    </View>
                  </TouchableOpacity>
                ) : (
                  <View style={styles.ratingContainer}>
                    <Text style={styles.ratingTitle}>
                      {progress.dessertRating ? t.country.updateRating : t.country.rateRecipe}
                    </Text>
                    <View style={styles.starsRow}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <TouchableOpacity
                          key={star}
                          onPress={() => onRateRecipe(true, star)}
                          style={styles.starButton}
                        >
                          <Text style={styles.starTextLarge}>
                            {star <= (progress.dessertRating || 0) ? '\u2B50' : '\u2606'}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </View>
                )}
              </View>
            )}

            {country.dessert && (
              <CookedPhotoGallery
                countryId={country.id}
                recipeId={country.dessert.id}
                isDessert={true}
                isCooked={progress.dessertCooked}
                onSharePhoto={(uri) => onShareCookedPhoto(String(country.dessert!.name), uri)}
              />
            )}
          </View>
        </View>
      )}

      {/* Drinks & Music */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Wine size={20} color={colors.terracotta} />
          <Text style={styles.sectionTitle}>{t.country.drinksMusic}</Text>
        </View>
        <View style={styles.fullWidthCard}>
          <View style={styles.drinkSection}>
            <Wine size={18} color={colors.earthBrown} />
            <Text style={styles.infoLabel}>{t.country.alcoholic}</Text>
          </View>
          <Text style={styles.infoText}>{country.drinks.alcoholic}</Text>
          <View style={styles.drinkSection}>
            <Glasses size={18} color={colors.earthBrown} />
            <Text style={styles.infoLabel}>{t.country.nonAlcoholic}</Text>
          </View>
          <Text style={styles.infoText}>{country.drinks.nonAlcoholic}</Text>
          <View style={styles.drinkSection}>
            <Music size={18} color={colors.earthBrown} />
            <Text style={styles.infoLabel}>{t.country.musicSuggestions}</Text>
          </View>
          {country.music.map((song, idx) => (
            <Text key={idx} style={styles.musicText}>
              {'\u2022'} {song}
            </Text>
          ))}
        </View>
      </View>

      {/* Decoration Ideas */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Sparkles size={20} color={colors.terracotta} />
          <Text style={styles.sectionTitle}>{t.country.decorationIdeas}</Text>
        </View>
        <View style={styles.fullWidthCard}>
          {country.decorationIdeas.map((idea, idx) => (
            <Text key={idx} style={styles.ideaText}>
              {'\u2022'} {idea}
            </Text>
          ))}
        </View>
      </View>

      {/* Conversation Starters */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <MessageCircle size={20} color={colors.terracotta} />
          <Text style={styles.sectionTitle}>{t.country.conversationStarters}</Text>
        </View>
        <View style={styles.fullWidthCard}>
          {country.conversationStarters.map((q, idx) => (
            <View key={idx} style={styles.conversationItem}>
              <MessageCircle size={16} color={colors.textTertiary} />
              <Text style={styles.conversationText}>{q}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700' as const,
    color: colors.text,
    marginBottom: 16,
  },
  recipeCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 20,
    overflow: 'hidden',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
    elevation: 2,
  },
  dishImage: {
    height: 180,
    borderRadius: 12,
    marginBottom: 16,
    marginHorizontal: -20,
    marginTop: -20,
  },
  recipeName: {
    fontSize: 22,
    fontWeight: '700' as const,
    color: colors.text,
    marginBottom: 8,
  },
  recipeDescription: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 22,
    marginBottom: 16,
  },
  recipeInfo: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  recipeInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  recipeInfoText: {
    fontSize: 14,
    color: '#6B7280',
  },
  servingsSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
    padding: 12,
    backgroundColor: colors.surfaceAlt,
    borderRadius: 12,
  },
  servingsLabel: {
    fontSize: 16,
    color: '#6B7280',
  },
  servingsButton: {
    width: 32,
    height: 32,
    backgroundColor: colors.terracotta,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  servingsButtonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700' as const,
  },
  servingsValue: {
    fontSize: 18,
    fontWeight: '600' as const,
    color: colors.text,
    minWidth: 30,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 18,
    fontWeight: '600' as const,
    color: colors.text,
    marginTop: 16,
    marginBottom: 12,
  },
  instructionsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 12,
  },
  startCookingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#FF6B35',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  startCookingText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
  ingredientText: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 24,
    marginBottom: 6,
  },
  stepText: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 24,
    marginBottom: 12,
  },
  recipeActions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.terracotta,
    paddingVertical: 14,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  actionButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600' as const,
  },
  actionButtonDone: {
    backgroundColor: '#D1FAE5',
  },
  actionButtonTextDone: {
    color: colors.success,
    fontSize: 16,
    fontWeight: '600' as const,
  },
  actionButtonSecondary: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.surfaceAlt,
    paddingVertical: 14,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    borderWidth: 2,
    borderColor: colors.terracotta,
  },
  actionButtonSecondaryText: {
    color: colors.terracotta,
    fontSize: 16,
    fontWeight: '600' as const,
  },
  favoriteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 12,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    backgroundColor: colors.surface,
  },
  favoriteButtonActive: {
    borderColor: '#FF6B35',
    backgroundColor: '#FFF5F2',
  },
  favoriteButtonText: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: '#9CA3AF',
  },
  favoriteButtonTextActive: {
    color: '#FF6B35',
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 10,
    marginTop: 8,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  shareButtonText: {
    fontSize: 15,
    fontWeight: '500' as const,
    color: colors.terracotta,
  },
  ratingSection: {
    marginTop: 16,
    padding: 16,
    backgroundColor: colors.surfaceAlt,
    borderRadius: 12,
  },
  ratingContainer: {
    alignItems: 'center',
  },
  ratingTitle: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: colors.text,
    marginBottom: 12,
  },
  ratingDisplay: {
    alignItems: 'center',
  },
  ratingLabel: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  starsRow: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
  },
  starButton: {
    padding: 4,
  },
  starText: {
    fontSize: 24,
  },
  starTextLarge: {
    fontSize: 32,
  },
  fullWidthCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 20,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
    elevation: 2,
  },
  drinkSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 12,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: colors.text,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22,
    marginBottom: 8,
  },
  musicText: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22,
    marginBottom: 4,
  },
  ideaText: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 24,
    marginBottom: 8,
  },
  conversationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 12,
  },
  conversationText: {
    flex: 1,
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 24,
  },
});
