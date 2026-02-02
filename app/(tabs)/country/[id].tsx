import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Alert
} from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState, useEffect, useMemo } from 'react';
import { useApp } from '@/contexts/AppContext';
import colors from '@/constants/colors';
import { 
  Compass, 
  ChefHat, 
  Clock, 
  Users, 
  Plus, 
  Check,
  Music,
  Sparkles,
  MessageCircle,
  Wine,
  Glasses,
  Info,
  Utensils,
  HelpCircle,
  MapPin,
  Building2,
  DollarSign,
  Languages,
  Landmark,
  Heart,
  SkipForward,
  SkipBack,
  Lightbulb,
  Globe,
  Maximize
} from 'lucide-react-native';

export default function CountryDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { 
    countries,
    countryProgress, 
    updateCountryProgress, 
    addToShoppingList,
    addFavoriteRecipe,
    removeFavoriteRecipe,
    isRecipeFavorite,
    toggleFavoriteCountry,
    isFavoriteCountry,
    updateRecipeRating
  } = useApp();
  
  const [activeTab, setActiveTab] = useState<'about' | 'recipes' | 'quiz'>('about');
  const [recipeServings, setRecipeServings] = useState(4);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [showMainDishRating, setShowMainDishRating] = useState(false);
  const [showDessertRating, setShowDessertRating] = useState(false);

  const country = countries.find(c => c.id === id);
  const currentCountryIndex = countries.findIndex(c => c.id === id);

  const progress = useMemo(() => {
    if (!country) return null;
    return countryProgress[country.id] || {
      visited: false,
      mainDishCooked: false,
      dessertCooked: false,
      quizCompleted: false,
      fullyCompleted: false,
    };
  }, [country, countryProgress]);

  useEffect(() => {
    if (country && progress && !progress.visited) {
      updateCountryProgress(country.id, { visited: true, visitedDate: new Date().toISOString() }, 0);
    }
  }, [country?.id, progress?.visited, updateCountryProgress]);

  if (!country || !progress) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Country not found</Text>
      </SafeAreaView>
    );
  }

  const handleMarkDishCooked = (isDessert: boolean) => {
    const field = isDessert ? 'dessertCooked' : 'mainDishCooked';
    const points = isDessert ? 15 : 30;
    
    updateCountryProgress(country.id, { [field]: true }, points);
    
    Alert.alert(
      'Great Job!',
      `You earned ${points} points for cooking ${isDessert ? country.dessert?.name : country.mainDish.name}!`
    );
  };

  const handleAddToShoppingList = (isDessert: boolean) => {
    const recipe = isDessert ? country.dessert : country.mainDish;
    if (!recipe) return;

    const scaledIngredients = recipe.ingredients.map(ing => ({
      ...ing,
      amount: (ing.amount / recipe.servings) * recipeServings,
    }));

    addToShoppingList(scaledIngredients, country.id, country.name);
    Alert.alert('Added', 'Ingredients added to your shopping list!');
  };

  const handleToggleFavorite = (isDessert: boolean) => {
    const recipe = isDessert ? country.dessert : country.mainDish;
    if (!recipe) return;

    const isFavorite = isRecipeFavorite(recipe.id);
    
    if (isFavorite) {
      removeFavoriteRecipe(recipe.id);
      Alert.alert('Removed', 'Recipe removed from favorites');
    } else {
      addFavoriteRecipe(
        recipe.id,
        recipe.name,
        country.id,
        country.name,
        country.flag,
        isDessert
      );
      Alert.alert('Added', 'Recipe added to favorites!');
    }
  };

  const handleToggleFavoriteCountry = () => {
    toggleFavoriteCountry(country.id);
    const isFavorite = isFavoriteCountry(country.id);
    Alert.alert(
      isFavorite ? 'Removed from favorites' : 'Added to favorites',
      isFavorite ? 'Country removed from your favorites' : 'Country added to your favorites!'
    );
  };

  const handleRateRecipe = (isDessert: boolean, rating: number) => {
    updateRecipeRating(country.id, isDessert, rating);
    if (isDessert) {
      setShowDessertRating(false);
    } else {
      setShowMainDishRating(false);
    }
    Alert.alert('Rating saved', `You rated this ${rating} stars!`);
  };

  const handleNextCountry = () => {
    if (currentCountryIndex === -1) return;
    
    const nextIndex = (currentCountryIndex + 1) % countries.length;
    const nextCountry = countries[nextIndex];
    
    router.replace(`/country/${nextCountry.id}`);
  };

  const handlePreviousCountry = () => {
    if (currentCountryIndex === -1) return;
    
    const prevIndex = currentCountryIndex === 0 ? countries.length - 1 : currentCountryIndex - 1;
    const prevCountry = countries[prevIndex];
    
    router.replace(`/country/${prevCountry.id}`);
  };

  const handleSubmitQuiz = () => {
    if (quizAnswers.length !== country.quiz.length) {
      Alert.alert('Incomplete', 'Please answer all questions');
      return;
    }

    const correctCount = country.quiz.filter(
      (q, idx) => q.correctAnswer === quizAnswers[idx]
    ).length;

    const score = correctCount;
    const points = 20;

    updateCountryProgress(
      country.id,
      { quizCompleted: true, quizScore: score },
      points
    );

    setTimeout(() => {
      Alert.alert(
        'Quiz Complete!',
        `You got ${correctCount} out of ${country.quiz.length} correct!\nYou earned ${points} points.`
      );
    }, 500);
  };

  const servingsMultiplier = recipeServings / country.mainDish.servings;



  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.bannerContainer}>
          {country.landscapeImage && (
            <Image
              key={country.id}
              source={{ uri: country.landscapeImage }}
              style={styles.bannerImage}
              contentFit="cover"
            />
          )}
          <View style={styles.bannerOverlay} />
          
          <View style={styles.headerButtons}>
            <View style={styles.leftButtons}>
              <TouchableOpacity 
                onPress={() => router.back()} 
                style={styles.backButton}
              >
                <Compass size={24} color="#FFF" />
              </TouchableOpacity>
              
              <TouchableOpacity 
                onPress={handleToggleFavoriteCountry} 
                style={styles.favoriteCountryButton}
              >
                <Heart 
                  size={24} 
                  color="#FFF"
                  fill={isFavoriteCountry(country.id) ? '#FF6B35' : 'transparent'}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.navigationButtons}>
              <TouchableOpacity 
                onPress={handlePreviousCountry} 
                style={styles.navButton}
              >
                <SkipBack size={24} color="#FFF" />
              </TouchableOpacity>
              
              <TouchableOpacity 
                onPress={handleNextCountry} 
                style={styles.navButton}
              >
                <SkipForward size={24} color="#FFF" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.bannerInfo}>
            <Text style={styles.bannerFlag}>{country.flag}</Text>
            <Text style={styles.bannerCountryName}>{country.name}</Text>
          </View>
        </View>

        <View style={styles.tabsContainer}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'about' && styles.tabActive]}
            onPress={() => setActiveTab('about')}
          >
            <Info size={20} color={activeTab === 'about' ? colors.terracotta : colors.textTertiary} />
            <Text style={[styles.tabText, activeTab === 'about' && styles.tabTextActive]}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'recipes' && styles.tabActive]}
            onPress={() => setActiveTab('recipes')}
          >
            <Utensils size={20} color={activeTab === 'recipes' ? colors.terracotta : colors.textTertiary} />
            <Text style={[styles.tabText, activeTab === 'recipes' && styles.tabTextActive]}>Recipes</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'quiz' && styles.tabActive]}
            onPress={() => setActiveTab('quiz')}
          >
            <HelpCircle size={20} color={activeTab === 'quiz' ? colors.terracotta : colors.textTertiary} />
            <Text style={[styles.tabText, activeTab === 'quiz' && styles.tabTextActive]}>Quiz</Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'about' && (
          <View style={styles.tabContent}>
            <View style={styles.section}>
              <Text style={styles.sectionTitleLarge}>Introduction</Text>
              <Text style={styles.description}>{country.description}</Text>
            </View>

            {country.quickFacts && country.quickFacts.length > 0 && (
              <View style={styles.section}>
                <View style={styles.quickFactsGrid}>
                  {country.quickFacts.map((fact, idx) => {
                    let IconComponent = Globe;
                    let iconColor = '#3B82F6';
                    
                    if (fact.label === 'Capital') {
                      IconComponent = Building2;
                      iconColor = '#EF4444';
                    } else if (fact.label === 'Population') {
                      IconComponent = Users;
                      iconColor = '#8B5CF6';
                    } else if (fact.label === 'Official Language') {
                      IconComponent = Languages;
                      iconColor = '#10B981';
                    } else if (fact.label === 'Currency') {
                      IconComponent = DollarSign;
                      iconColor = '#F59E0B';
                    } else if (fact.label === 'Area') {
                      IconComponent = Maximize;
                      iconColor = '#06B6D4';
                    }
                    
                    const isFullWidth = fact.label === 'Area';
                    
                    return (
                      <View 
                        key={idx} 
                        style={[
                          styles.quickFactCard,
                          isFullWidth && styles.quickFactCardFullWidth
                        ]}
                      >
                        <IconComponent size={24} color={iconColor} style={styles.quickFactIcon} />
                        <Text style={styles.quickFactLabel}>{fact.label}</Text>
                        <Text style={styles.quickFactValue}>{fact.value}</Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            )}

            <View style={styles.section}>
              <View style={styles.funFactsCard}>
                <View style={styles.funFactsHeader}>
                  <Check size={24} color={colors.text} />
                  <Text style={styles.funFactsTitle}>Fun Facts</Text>
                </View>
                {country.facts.slice(0, 3).map((fact, idx) => (
                  <Text key={idx} style={styles.funFactText}>• {fact}</Text>
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.historyCard}>
                <View style={styles.historySectionHeader}>
                  <Landmark size={24} color={colors.terracotta} />
                  <Text style={styles.historyTitle}>Historical Highlights</Text>
                </View>
                <View style={styles.historyTimelineContainer}>
                  {(country.history || []).map((event, idx) => (
                    <View key={idx} style={styles.historyTimelineItem}>
                      <View style={styles.timelineDot} />
                      <View style={styles.timelineContent}>
                        <Text style={styles.timelineYear}>{event.year}</Text>
                        <Text style={styles.timelineTitle}>{event.title}</Text>
                        <Text style={styles.timelineDescription}>{event.description}</Text>
                      </View>
                    </View>
                  ))}
                  {(!country.history || country.history.length === 0) && (
                    <View style={styles.historyContent}>
                      <Text style={styles.historyText}>
                        {country.id === 'italy' && 'Italy has a rich history spanning over 3,000 years. From the Roman Empire that ruled much of Europe, to the Renaissance that revolutionized art and science, Italy has been at the center of Western civilization. The country was unified in 1861 after centuries of division into city-states and kingdoms.'}
                        {country.id === 'japan' && 'Japan has a recorded history dating back to 660 BC. The country was ruled by emperors and shoguns for centuries, remaining isolated from the world until 1854. After World War II, Japan rebuilt itself into one of the world\'s leading economies while preserving its ancient traditions and culture.'}
                        {country.id === 'mexico' && 'Mexico was home to advanced civilizations like the Maya and Aztec before Spanish conquest in 1521. After 300 years of colonial rule, Mexico gained independence in 1821. The Mexican Revolution (1910-1920) shaped modern Mexico, establishing it as a democratic republic with a rich blend of indigenous and Spanish heritage.'}
                        {country.id === 'morocco' && 'Morocco has been inhabited since Paleolithic times. It became a powerful Islamic empire in the 8th century and has maintained its independence through most of its history. Morocco was a French protectorate from 1912-1956, after which it regained independence under King Mohammed V.'}
                        {country.id === 'sweden' && 'Sweden emerged as a unified kingdom in the 10th century. It was a major European power during the 17th century Swedish Empire. Sweden has not been at war since 1814, making it one of the world\'s longest-standing peaceful nations. It joined the EU in 1995 but kept its currency, the Krona.'}
                        {country.id === 'france' && 'France has been a major European power since medieval times. The French Revolution (1789) transformed it from an absolute monarchy to a republic and spread democratic ideals across Europe. France played a central role in both World Wars and became a founding member of the European Union.'}
                        {!['italy', 'japan', 'mexico', 'morocco', 'sweden', 'france'].includes(country.id) && `${country.name} has a rich and fascinating history that has shaped its culture and traditions over centuries.`}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.innovationsCard}>
                <View style={styles.innovationsSectionHeader}>
                  <Lightbulb size={24} color={colors.orange} />
                  <Text style={styles.innovationsTitle}>Innovations</Text>
                </View>
                <View style={styles.innovationsContainer}>
                  {(country.innovations || []).map((innovation, idx) => (
                    <View key={idx} style={styles.innovationItem}>
                      <View style={styles.innovationHeader}>
                        <Text style={styles.innovationName}>{innovation.name}</Text>
                        <Text style={styles.innovationYear}>{innovation.year}</Text>
                      </View>
                      <Text style={styles.innovationDescription}>{innovation.description}</Text>
                    </View>
                  ))}
                  {(!country.innovations || country.innovations.length === 0) && (
                    <Text style={styles.innovationPlaceholder}>
                      Innovation details coming soon for {country.name}!
                    </Text>
                  )}
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.foodCultureCard}>
                <View style={styles.foodCultureHeader}>
                  <ChefHat size={24} color={colors.text} />
                  <Text style={styles.foodCultureTitle}>Food Culture</Text>
                </View>
                <View style={styles.foodCultureContent}>
                  <Text style={styles.foodCultureText}>{country.foodCulture}</Text>
                </View>
              </View>
            </View>

            {country.mustVisit && country.mustVisit.length > 0 && (
              <View style={styles.section}>
                <View style={styles.mustVisitCard}>
                  <View style={styles.mustVisitHeader}>
                    <MapPin size={24} color="#D95757" />
                    <Text style={styles.mustVisitTitle}>Must Visit</Text>
                  </View>
                  <View style={styles.mustVisitList}>
                    {country.mustVisit.map((place, idx) => (
                      <View key={idx} style={styles.mustVisitItem}>
                        <View style={styles.mustVisitIconWrapper}>
                          <MapPin size={18} color="#D95757" />
                        </View>
                        <View style={styles.mustVisitContent}>
                          <Text style={styles.mustVisitName}>{place.name}</Text>
                          <Text style={styles.mustVisitDescription}>{place.description}</Text>
                        </View>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            )}

            {country.travelEssentials && country.travelEssentials.length > 0 && (
              <View style={styles.section}>
                <View style={styles.travelEssentialsCard}>
                  <View style={styles.travelEssentialsHeader}>
                    <Sparkles size={24} color={colors.text} />
                    <Text style={styles.travelEssentialsTitle}>Travel Essentials</Text>
                  </View>
                  <View style={styles.travelEssentialsList}>
                    {country.travelEssentials.map((essential, idx) => (
                      <View key={idx} style={styles.travelEssentialItem}>
                        <View style={styles.travelEssentialBullet}>
                          <Sparkles size={14} color={colors.terracotta} />
                        </View>
                        <View style={styles.travelEssentialContent}>
                          <Text style={styles.travelEssentialItemText}>{essential.item}</Text>
                          <Text style={styles.travelEssentialDescription}>{essential.description}</Text>
                        </View>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            )}
          </View>
        )}

        {activeTab === 'recipes' && (
          <View style={styles.tabContent}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Main Dish</Text>
              <View style={styles.recipeCard}>
                {country.mainDish.imageUrl && (
                  <Image
                    source={{ uri: country.mainDish.imageUrl }}
                    style={styles.dishImage}
                    contentFit="cover"
                  />
                )}
                <Text style={styles.recipeName}>{country.mainDish.name}</Text>
                <Text style={styles.recipeDescription}>{country.mainDish.description}</Text>
                
                <View style={styles.recipeInfo}>
                  <View style={styles.recipeInfoItem}>
                    <Clock size={16} color="#6B7280" />
                    <Text style={styles.recipeInfoText}>{country.mainDish.cookingTime} min</Text>
                  </View>
                  <View style={styles.recipeInfoItem}>
                    <ChefHat size={16} color="#6B7280" />
                    <Text style={styles.recipeInfoText}>{country.mainDish.dietType}</Text>
                  </View>
                </View>

                <View style={styles.servingsSelector}>
                  <Users size={16} color="#6B7280" />
                  <Text style={styles.servingsLabel}>Servings:</Text>
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

                <Text style={styles.subheading}>Ingredients</Text>
                {country.mainDish.ingredients.map((ing, idx) => (
                  <Text key={idx} style={styles.ingredientText}>
                    • {(ing.amount * servingsMultiplier).toFixed(1)} {ing.unit} {ing.name}
                  </Text>
                ))}

                <Text style={styles.subheading}>Instructions</Text>
                {country.mainDish.steps.map((step, idx) => (
                  <Text key={idx} style={styles.stepText}>
                    {idx + 1}. {step}
                  </Text>
                ))}

                <View style={styles.recipeActions}>
                  <TouchableOpacity 
                    style={[styles.actionButton, progress.mainDishCooked && styles.actionButtonDone]}
                    onPress={() => !progress.mainDishCooked && handleMarkDishCooked(false)}
                    disabled={progress.mainDishCooked}
                  >
                    {progress.mainDishCooked ? (
                      <>
                        <Check size={20} color="#10B981" />
                        <Text style={styles.actionButtonTextDone}>Cooked!</Text>
                      </>
                    ) : (
                      <>
                        <ChefHat size={20} color="#FFF" />
                        <Text style={styles.actionButtonText}>Mark as Cooked</Text>
                      </>
                    )}
                  </TouchableOpacity>
                  
                  <TouchableOpacity 
                    style={styles.actionButtonSecondary}
                    onPress={() => handleAddToShoppingList(false)}
                  >
                    <Plus size={20} color="#FF6B35" />
                    <Text style={styles.actionButtonSecondaryText}>Add to List</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity 
                  style={[
                    styles.favoriteButton,
                    isRecipeFavorite(country.mainDish.id) && styles.favoriteButtonActive
                  ]}
                  onPress={() => handleToggleFavorite(false)}
                >
                  <Heart 
                    size={20} 
                    color={isRecipeFavorite(country.mainDish.id) ? "#FF6B35" : "#9CA3AF"}
                    fill={isRecipeFavorite(country.mainDish.id) ? "#FF6B35" : "transparent"}
                  />
                  <Text style={[
                    styles.favoriteButtonText,
                    isRecipeFavorite(country.mainDish.id) && styles.favoriteButtonTextActive
                  ]}>
                    {isRecipeFavorite(country.mainDish.id) ? 'Saved' : 'Save Recipe'}
                  </Text>
                </TouchableOpacity>

                {progress.mainDishCooked && (
                  <View style={styles.ratingSection}>
                    {!showMainDishRating && progress.mainDishRating ? (
                      <TouchableOpacity 
                        style={styles.ratingDisplay}
                        onPress={() => setShowMainDishRating(true)}
                      >
                        <Text style={styles.ratingLabel}>Your Rating:</Text>
                        <View style={styles.starsRow}>
                          {[1, 2, 3, 4, 5].map(star => (
                            <Text key={star} style={styles.starText}>
                              {star <= (progress.mainDishRating || 0) ? '⭐' : '☆'}
                            </Text>
                          ))}
                        </View>
                      </TouchableOpacity>
                    ) : (
                      <View style={styles.ratingContainer}>
                        <Text style={styles.ratingTitle}>
                          {progress.mainDishRating ? 'Update Rating' : 'Rate this recipe'}
                        </Text>
                        <View style={styles.starsRow}>
                          {[1, 2, 3, 4, 5].map(star => (
                            <TouchableOpacity
                              key={star}
                              onPress={() => handleRateRecipe(false, star)}
                              style={styles.starButton}
                            >
                              <Text style={styles.starTextLarge}>
                                {star <= (progress.mainDishRating || 0) ? '⭐' : '☆'}
                              </Text>
                            </TouchableOpacity>
                          ))}
                        </View>
                      </View>
                    )}
                  </View>
                )}
              </View>
            </View>

            {country.dessert && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Dessert</Text>
                <View style={styles.recipeCard}>
                  {country.dessert.imageUrl && (
                    <Image
                      source={{ uri: country.dessert.imageUrl }}
                      style={styles.dishImage}
                      contentFit="cover"
                    />
                  )}
                  <Text style={styles.recipeName}>{country.dessert.name}</Text>
                  <Text style={styles.recipeDescription}>{country.dessert.description}</Text>
                  
                  <View style={styles.recipeInfo}>
                    <View style={styles.recipeInfoItem}>
                      <Clock size={16} color="#6B7280" />
                      <Text style={styles.recipeInfoText}>{country.dessert.cookingTime} min</Text>
                    </View>
                  </View>

                  <Text style={styles.subheading}>Ingredients</Text>
                  {country.dessert.ingredients.map((ing, idx) => (
                    <Text key={idx} style={styles.ingredientText}>
                      • {(ing.amount * servingsMultiplier).toFixed(1)} {ing.unit} {ing.name}
                    </Text>
                  ))}

                  <Text style={styles.subheading}>Instructions</Text>
                  {country.dessert.steps.map((step, idx) => (
                    <Text key={idx} style={styles.stepText}>
                      {idx + 1}. {step}
                    </Text>
                  ))}

                  <View style={styles.recipeActions}>
                    <TouchableOpacity 
                      style={[styles.actionButton, progress.dessertCooked && styles.actionButtonDone]}
                      onPress={() => !progress.dessertCooked && handleMarkDishCooked(true)}
                      disabled={progress.dessertCooked}
                    >
                      {progress.dessertCooked ? (
                        <>
                          <Check size={20} color="#10B981" />
                          <Text style={styles.actionButtonTextDone}>Cooked!</Text>
                        </>
                      ) : (
                        <>
                          <ChefHat size={20} color="#FFF" />
                          <Text style={styles.actionButtonText}>Mark as Cooked</Text>
                        </>
                      )}
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                      style={styles.actionButtonSecondary}
                      onPress={() => handleAddToShoppingList(true)}
                    >
                      <Plus size={20} color="#FF6B35" />
                      <Text style={styles.actionButtonSecondaryText}>Add to List</Text>
                    </TouchableOpacity>
                  </View>

                  {country.dessert && (
                    <TouchableOpacity 
                      style={[
                        styles.favoriteButton,
                        isRecipeFavorite(country.dessert.id) && styles.favoriteButtonActive
                      ]}
                      onPress={() => handleToggleFavorite(true)}
                    >
                      <Heart 
                        size={20} 
                        color={isRecipeFavorite(country.dessert.id) ? "#FF6B35" : "#9CA3AF"}
                        fill={isRecipeFavorite(country.dessert.id) ? "#FF6B35" : "transparent"}
                      />
                      <Text style={[
                        styles.favoriteButtonText,
                        isRecipeFavorite(country.dessert.id) && styles.favoriteButtonTextActive
                      ]}>
                        {isRecipeFavorite(country.dessert.id) ? 'Saved' : 'Save Recipe'}
                      </Text>
                    </TouchableOpacity>
                  )}

                  {progress.dessertCooked && country.dessert && (
                    <View style={styles.ratingSection}>
                      {!showDessertRating && progress.dessertRating ? (
                        <TouchableOpacity 
                          style={styles.ratingDisplay}
                          onPress={() => setShowDessertRating(true)}
                        >
                          <Text style={styles.ratingLabel}>Your Rating:</Text>
                          <View style={styles.starsRow}>
                            {[1, 2, 3, 4, 5].map(star => (
                              <Text key={star} style={styles.starText}>
                                {star <= (progress.dessertRating || 0) ? '⭐' : '☆'}
                              </Text>
                            ))}
                          </View>
                        </TouchableOpacity>
                      ) : (
                        <View style={styles.ratingContainer}>
                          <Text style={styles.ratingTitle}>
                            {progress.dessertRating ? 'Update Rating' : 'Rate this recipe'}
                          </Text>
                          <View style={styles.starsRow}>
                            {[1, 2, 3, 4, 5].map(star => (
                              <TouchableOpacity
                                key={star}
                                onPress={() => handleRateRecipe(true, star)}
                                style={styles.starButton}
                              >
                                <Text style={styles.starTextLarge}>
                                  {star <= (progress.dessertRating || 0) ? '⭐' : '☆'}
                                </Text>
                              </TouchableOpacity>
                            ))}
                          </View>
                        </View>
                      )}
                    </View>
                  )}
                </View>
              </View>
            )}

            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Wine size={20} color={colors.terracotta} />
                <Text style={styles.sectionTitle}>Drinks & Music</Text>
              </View>
              <View style={styles.fullWidthCard}>
                <View style={styles.drinkSection}>
                  <Wine size={18} color={colors.earthBrown} />
                  <Text style={styles.infoLabel}>Alcoholic</Text>
                </View>
                <Text style={styles.infoText}>{country.drinks.alcoholic}</Text>
                <View style={styles.drinkSection}>
                  <Glasses size={18} color={colors.earthBrown} />
                  <Text style={styles.infoLabel}>Non-Alcoholic</Text>
                </View>
                <Text style={styles.infoText}>{country.drinks.nonAlcoholic}</Text>
                <View style={styles.drinkSection}>
                  <Music size={18} color={colors.earthBrown} />
                  <Text style={styles.infoLabel}>Music Suggestions</Text>
                </View>
                {country.music.map((song, idx) => (
                  <Text key={idx} style={styles.musicText}>• {song}</Text>
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Sparkles size={20} color={colors.terracotta} />
                <Text style={styles.sectionTitle}>Decoration Ideas</Text>
              </View>
              <View style={styles.fullWidthCard}>
                {country.decorationIdeas.map((idea, idx) => (
                  <Text key={idx} style={styles.ideaText}>• {idea}</Text>
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <MessageCircle size={20} color={colors.terracotta} />
                <Text style={styles.sectionTitle}>Conversation Starters</Text>
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
        )}

        {activeTab === 'quiz' && (
          <View style={styles.tabContent}>
            <View style={styles.section}>
              {progress.quizCompleted && (
                <View style={styles.quizCompleted}>
                  <Check size={40} color="#10B981" />
                  <Text style={styles.quizCompletedText}>Quiz Completed!</Text>
                  <Text style={styles.quizScoreText}>
                    Score: {progress.quizScore} / {country.quiz.length}
                  </Text>
                </View>
              )}

              <View style={styles.quizContainer}>
                {country.quiz.map((question, qIdx) => (
                  <View key={question.id} style={styles.questionCard}>
                    <Text style={styles.questionText}>
                      {qIdx + 1}. {question.question}
                    </Text>
                    {question.options.map((option, oIdx) => {
                      const isSelected = quizAnswers[qIdx] === oIdx;
                      const isCorrect = question.correctAnswer === oIdx;
                      const showResult = progress.quizCompleted;

                      return (
                        <TouchableOpacity
                          key={oIdx}
                          style={[
                            styles.optionButton,
                            isSelected && styles.optionButtonSelected,
                            showResult && isCorrect && styles.optionButtonCorrect,
                            showResult && isSelected && !isCorrect && styles.optionButtonWrong,
                          ]}
                          onPress={() => {
                            if (!progress.quizCompleted) {
                              const newAnswers = [...quizAnswers];
                              newAnswers[qIdx] = oIdx;
                              setQuizAnswers(newAnswers);
                            }
                          }}
                          disabled={progress.quizCompleted}
                        >
                          <Text
                            style={[
                              styles.optionText,
                              isSelected && styles.optionTextSelected,
                              showResult && isCorrect && styles.optionTextCorrect,
                            ]}
                          >
                            {option}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                ))}

                {!progress.quizCompleted && (
                  <TouchableOpacity 
                    style={styles.submitQuizButton}
                    onPress={handleSubmitQuiz}
                  >
                    <Text style={styles.submitQuizButtonText}>Submit Quiz</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        )}

        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  bannerContainer: {
    height: 240,
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  headerButtons: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteCountryButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  navButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerInfo: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  bannerFlag: {
    fontSize: 48,
  },
  bannerCountryName: {
    fontSize: 36,
    fontWeight: '700' as const,
    color: '#FFF',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 16,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  tabActive: {
    borderBottomColor: colors.terracotta,
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500' as const,
    color: colors.textTertiary,
  },
  tabTextActive: {
    color: colors.terracotta,
    fontWeight: '600' as const,
  },
  tabContent: {
    flex: 1,
  },
  scrollView: {
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
  sectionTitleLarge: {
    fontSize: 24,
    fontWeight: '700' as const,
    color: colors.text,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  infoCardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  infoCard: {
    width: '48%',
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
  },
  fullWidthCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 20,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
  },
  infoCardWide: {
    width: '100%',
  },
  infoCardLabel: {
    fontSize: 11,
    fontWeight: '600' as const,
    color: colors.textLabel,
    marginTop: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  infoCardValue: {
    fontSize: 18,
    fontWeight: '600' as const,
    color: colors.text,
    marginTop: 6,
    textAlign: 'center',
  },
  funFactsCard: {
    backgroundColor: '#E8F4E5',
    borderRadius: 20,
    padding: 24,
  },
  funFactsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  funFactsTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.text,
  },
  funFactText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 24,
    marginBottom: 8,
  },
  historyCard: {
    backgroundColor: '#F5E6D3',
    borderRadius: 20,
    padding: 24,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
  },
  historySectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.text,
  },
  historyContent: {
    borderLeftWidth: 4,
    borderLeftColor: '#6B7280',
    paddingLeft: 16,
  },
  historyText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  historyTimelineContainer: {
    gap: 24,
  },
  historyTimelineItem: {
    flexDirection: 'row',
    gap: 16,
  },
  timelineDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.terracotta,
    marginTop: 4,
    borderWidth: 3,
    borderColor: colors.sand,
  },
  timelineContent: {
    flex: 1,
    paddingBottom: 8,
  },
  timelineYear: {
    fontSize: 14,
    fontWeight: '700' as const,
    color: colors.terracotta,
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  timelineTitle: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: colors.text,
    marginBottom: 6,
  },
  timelineDescription: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  foodCultureCard: {
    backgroundColor: '#F9E5DD',
    borderRadius: 20,
    padding: 24,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
  },
  foodCultureHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  foodCultureTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.text,
  },
  foodCultureContent: {
    borderLeftWidth: 4,
    borderLeftColor: '#F39C6B',
    paddingLeft: 16,
  },
  foodCultureText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 24,
    fontStyle: 'italic',
  },
  mustVisitCard: {
    backgroundColor: '#E8F0F2',
    borderRadius: 20,
    padding: 24,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
  },
  mustVisitHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  mustVisitTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.text,
  },
  mustVisitList: {
    gap: 16,
  },
  mustVisitItem: {
    flexDirection: 'row',
    gap: 12,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  mustVisitIconWrapper: {
    marginTop: 2,
  },
  mustVisitContent: {
    flex: 1,
  },
  mustVisitName: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: colors.text,
    marginBottom: 4,
  },
  mustVisitDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  travelEssentialsCard: {
    backgroundColor: '#EDE7DD',
    borderRadius: 20,
    padding: 24,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
  },
  travelEssentialsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  travelEssentialsTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.text,
  },
  travelEssentialsList: {
    gap: 16,
  },
  travelEssentialItem: {
    flexDirection: 'row',
    gap: 12,
    paddingBottom: 12,
  },
  travelEssentialBullet: {
    marginTop: 2,
  },
  travelEssentialContent: {
    flex: 1,
  },
  travelEssentialItemText: {
    fontSize: 15,
    fontWeight: '600' as const,
    color: colors.text,
    marginBottom: 4,
  },
  travelEssentialDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  recipeCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 20,
    overflow: 'hidden',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
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
  quizCompleted: {
    backgroundColor: '#D1FAE5',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    marginBottom: 24,
  },
  quizCompletedText: {
    fontSize: 24,
    fontWeight: '700' as const,
    color: colors.success,
    marginTop: 16,
  },
  quizScoreText: {
    fontSize: 18,
    color: colors.success,
    marginTop: 8,
  },
  quizContainer: {
    gap: 16,
  },
  questionCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
  },
  questionText: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: colors.text,
    marginBottom: 12,
  },
  optionButton: {
    backgroundColor: colors.surfaceAlt,
    padding: 14,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: colors.sand,
  },
  optionButtonSelected: {
    borderColor: colors.primary,
    backgroundColor: '#EFF6FF',
  },
  optionButtonCorrect: {
    borderColor: colors.success,
    backgroundColor: '#D1FAE5',
  },
  optionButtonWrong: {
    borderColor: '#EF4444',
    backgroundColor: '#FEE2E2',
  },
  optionText: {
    fontSize: 15,
    color: '#4B5563',
  },
  optionTextSelected: {
    color: colors.primary,
    fontWeight: '600' as const,
  },
  optionTextCorrect: {
    color: colors.success,
    fontWeight: '600' as const,
  },
  submitQuizButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  submitQuizButtonText: {
    color: '#FFF',
    fontSize: 18,
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
  innovationsCard: {
    backgroundColor: '#FFF4E6',
    borderRadius: 20,
    padding: 24,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
  },
  innovationsSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  innovationsTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.text,
  },
  innovationsContainer: {
    gap: 20,
  },
  innovationItem: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  innovationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  innovationName: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: colors.text,
    flex: 1,
  },
  innovationYear: {
    fontSize: 14,
    fontWeight: '700' as const,
    color: colors.orange,
    marginLeft: 12,
  },
  innovationDescription: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  innovationPlaceholder: {
    fontSize: 15,
    color: colors.textTertiary,
    lineHeight: 22,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingVertical: 12,
  },
  quickFactsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  quickFactCard: {
    width: '48%',
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
  },
  quickFactIcon: {
    marginBottom: 8,
  },
  quickFactLabel: {
    fontSize: 12,
    fontWeight: '600' as const,
    color: colors.textTertiary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    textAlign: 'center',
    marginBottom: 6,
  },
  quickFactValue: {
    fontSize: 16,
    fontWeight: '700' as const,
    color: colors.text,
    textAlign: 'center',
  },
  quickFactCardFullWidth: {
    width: '100%',
  },
  lockedOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  lockIconLarge: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: colors.sand,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  lockedTitle: {
    fontSize: 28,
    fontWeight: '700' as const,
    color: '#FFF',
    marginBottom: 12,
    textAlign: 'center',
  },
  lockedDescription: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  unlockButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: colors.terracotta,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 16,
    shadowColor: colors.terracotta,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 4,
  },
  unlockButtonText: {
    fontSize: 18,
    fontWeight: '600' as const,
    color: '#FFF',
  },
});
