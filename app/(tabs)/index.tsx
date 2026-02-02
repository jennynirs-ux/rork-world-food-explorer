import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useApp } from '@/contexts/AppContext';
import Paywall from '@/components/Paywall';
import { Globe2, List, Shuffle, Search, Circle, UtensilsCrossed, CheckCircle2, Heart, Lock } from 'lucide-react-native';
import Globe3D from '@/components/Globe3D';
import { useState } from 'react';
import { isCountryAccessible } from '@/lib/access-control';

export default function ExploreScreen() {
  const { countryProgress, countries, userProfile, simulatePurchase } = useApp();
  const purchasedProducts = userProfile.purchasedProducts || [];
  const router = useRouter();
  const [viewMode, setViewMode] = useState<'map' | 'list' | 'favorites'>('map');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [showPaywall, setShowPaywall] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const getCountryStatus = (countryId: string) => {
    const progress = countryProgress[countryId];
    if (!progress || !progress.visited) return 'to do';
    if (progress.fullyCompleted) return 'done';
    return 'cooking';
  };

  const getCountryColor = (countryId: string) => {
    const progress = countryProgress[countryId];
    if (!progress || !progress.visited) return '#D1D5DB';
    if (progress.fullyCompleted) return '#10B981';
    if (progress.mainDishCooked) return '#F59E0B';
    return '#F59E0B';
  };

  const countryPins = countries
    .filter(country => country.coordinates && country.coordinates.x != null && country.coordinates.y != null)
    .map(country => {
      const lng = (country.coordinates!.x / 800) * 360 - 180;
      const lat = 90 - (country.coordinates!.y / 450) * 180;
      
      return {
        id: country.id,
        name: country.name,
        flag: country.flag,
        code: country.code,
        lat,
        lng,
        color: getCountryColor(country.id),
        status: getCountryStatus(country.id),
      };
    });

  const handleCountryPress = (countryId: string) => {
    console.log('Country pressed:', countryId);
    const country = countries.find(c => c.id === countryId);
    if (!country) return;
    
    const isAccessible = isCountryAccessible(country, purchasedProducts);
    if (!isAccessible) {
      setSelectedCountry(countryId);
      setShowPaywall(true);
      return;
    }
    
    router.push({ pathname: '/(tabs)/country/[id]', params: { id: countryId } });
  };

  const handleRandomCountry = () => {
    const accessibleCountries = countries.filter(c => isCountryAccessible(c, purchasedProducts));
    if (accessibleCountries.length === 0) {
      setShowPaywall(true);
      return;
    }
    const randomIndex = Math.floor(Math.random() * accessibleCountries.length);
    const randomCountry = accessibleCountries[randomIndex];
    router.push({ pathname: '/(tabs)/country/[id]', params: { id: randomCountry.id } });
  };

  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;
    
    if (!filterStatus) return true;
    if (filterStatus === 'favorites') {
      return (userProfile.favoriteCountries || []).includes(country.id);
    }
    const status = getCountryStatus(country.id);
    return status === filterStatus;
  }).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore</Text>
        <View style={styles.viewToggle}>
          <TouchableOpacity
            style={[styles.toggleButton, viewMode === 'map' && styles.toggleButtonActive]}
            onPress={() => setViewMode('map')}
          >
            <Globe2 size={20} color={viewMode === 'map' ? '#FFF' : '#6B7280'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, viewMode === 'list' && styles.toggleButtonActive]}
            onPress={() => setViewMode('list')}
          >
            <List size={20} color={viewMode === 'list' ? '#FFF' : '#6B7280'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, viewMode === 'favorites' && styles.toggleButtonActive]}
            onPress={() => setViewMode('favorites')}
          >
            <Heart size={20} color={viewMode === 'favorites' ? '#FFF' : '#6B7280'} fill={viewMode === 'favorites' ? '#FFF' : 'transparent'} />
          </TouchableOpacity>
        </View>
      </View>

      {viewMode === 'favorites' ? (
        <View style={styles.listContainer}>
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <Search size={20} color="#9CA3AF" />
              <TextInput
                style={styles.searchInput}
                placeholder="Search favorites..."
                placeholderTextColor="#9CA3AF"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>
          </View>
          
          <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
            {filteredCountries.filter(country => (userProfile.favoriteCountries || []).includes(country.id)).map(country => {
              const progress = countryProgress[country.id];
              const completionPercentage = !progress ? 0 : progress.fullyCompleted ? 100 : 
                (progress.mainDishCooked ? 50 : 0) + (progress.quizCompleted ? 50 : 0);

              const isAccessible = isCountryAccessible(country, purchasedProducts);

              return (
                <View key={country.id} style={styles.countryCard}>
                  <TouchableOpacity
                    style={styles.flagButton}
                    onPress={() => handleCountryPress(country.id)}
                  >
                    <Text style={[styles.flag, !isAccessible && styles.flagLocked]}>{country.flag}</Text>
                    {!isAccessible && (
                      <View style={styles.lockBadge}>
                        <Lock size={12} color="#FFF" />
                      </View>
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.countryInfo}
                    onPress={() => handleCountryPress(country.id)}
                  >
                    <View style={styles.countryNameRow}>
                      <Text style={styles.countryName}>{country.name}</Text>
                      {!isAccessible && (
                        <View style={styles.lockIcon}>
                          <Lock size={16} color="#9CA3AF" />
                        </View>
                      )}
                    </View>
                    <Text style={styles.continent}>{country.continent}</Text>
                    {isAccessible && (
                      <View style={styles.progressContainer}>
                        <View style={styles.progressBar}>
                          <View style={[styles.progressFill, { width: `${completionPercentage}%` }]} />
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
              );
            })}
            {filteredCountries.filter(country => (userProfile.favoriteCountries || []).includes(country.id)).length === 0 && (
              <View style={styles.emptyFavorites}>
                <Heart size={64} color="#D1D5DB" />
                <Text style={styles.emptyTitle}>No favorites yet</Text>
                <Text style={styles.emptyText}>Tap the heart on country pages to add them to your favorites</Text>
              </View>
            )}
            <View style={{ height: 20 }} />
          </ScrollView>
        </View>
      ) : viewMode === 'map' ? (
        <View style={styles.mapViewContainer}>
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <View style={styles.section}>
              <View style={styles.globeWrapper}>
                <Globe3D pins={countryPins} onCountryPress={handleCountryPress} filterStatus={filterStatus} />
              </View>
              
              <TouchableOpacity style={styles.randomButton} onPress={handleRandomCountry}>
                <Shuffle size={20} color="#FFF" />
                <Text style={styles.randomButtonText}>Pick Random Country</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.countryListSection}>
              <Text style={styles.sectionTitle}>
                {filterStatus ? `${filterStatus.charAt(0).toUpperCase() + filterStatus.slice(1)} Countries` : 'All Countries'} ({filteredCountries.length})
              </Text>
              <View style={styles.countryGrid}>
                {filteredCountries.map(country => {
                  const status = getCountryStatus(country.id);
                  const statusColor = status === 'done' ? '#10B981' : status === 'cooking' ? '#F59E0B' : '#D1D5DB';
                  const isAccessible = isCountryAccessible(country, purchasedProducts);
                  
                  return (
                    <TouchableOpacity
                      key={country.id}
                      style={styles.countryChip}
                      onPress={() => handleCountryPress(country.id)}
                    >
                      {isAccessible ? (
                        <View style={[styles.statusDot, { backgroundColor: statusColor }]} />
                      ) : (
                        <Lock size={10} color="#9CA3AF" />
                      )}
                      <Text style={[styles.countryChipFlag, !isAccessible && styles.flagLocked]}>{country.flag}</Text>
                      <Text style={styles.countryChipName} numberOfLines={1}>{country.name}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            <View style={{ height: 20 }} />
          </ScrollView>

          <View style={styles.filterContainer}>
            <TouchableOpacity 
              style={[styles.filterButton, filterStatus === null && styles.filterButtonActive]}
              onPress={() => setFilterStatus(null)}
            >
              <Circle size={10} color={filterStatus === null ? '#FFF' : '#D1D5DB'} fill={filterStatus === null ? '#FFF' : '#D1D5DB'} />
              <Text style={[styles.filterText, filterStatus === null && styles.filterTextActive]}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.filterButton, filterStatus === 'to do' && styles.filterButtonActive]}
              onPress={() => setFilterStatus('to do')}
            >
              <Circle size={10} color={filterStatus === 'to do' ? '#FFF' : '#D1D5DB'} fill={filterStatus === 'to do' ? '#FFF' : '#D1D5DB'} />
              <Text style={[styles.filterText, filterStatus === 'to do' && styles.filterTextActive]}>To Do</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.filterButton, filterStatus === 'cooking' && styles.filterButtonActive]}
              onPress={() => setFilterStatus('cooking')}
            >
              <UtensilsCrossed size={14} color={filterStatus === 'cooking' ? '#FFF' : '#F59E0B'} />
              <Text style={[styles.filterText, filterStatus === 'cooking' && styles.filterTextActive]}>Cooking</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.filterButton, filterStatus === 'done' && styles.filterButtonActive]}
              onPress={() => setFilterStatus('done')}
            >
              <CheckCircle2 size={14} color={filterStatus === 'done' ? '#FFF' : '#10B981'} />
              <Text style={[styles.filterText, filterStatus === 'done' && styles.filterTextActive]}>Done</Text>
            </TouchableOpacity>

          </View>
        </View>
      ) : (
        <View style={styles.listContainer}>
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <Search size={20} color="#9CA3AF" />
              <TextInput
                style={styles.searchInput}
                placeholder="Search countries..."
                placeholderTextColor="#9CA3AF"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>
          </View>
          
          <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
            {filteredCountries.map(country => {
              const progress = countryProgress[country.id];
              const completionPercentage = !progress ? 0 : progress.fullyCompleted ? 100 : 
                (progress.mainDishCooked ? 50 : 0) + (progress.quizCompleted ? 50 : 0);

              const isAccessible = isCountryAccessible(country, purchasedProducts);

              return (
                <View key={country.id} style={styles.countryCard}>
                  <TouchableOpacity
                    style={styles.flagButton}
                    onPress={() => handleCountryPress(country.id)}
                  >
                    <Text style={[styles.flag, !isAccessible && styles.flagLocked]}>{country.flag}</Text>
                    {!isAccessible && (
                      <View style={styles.lockBadge}>
                        <Lock size={12} color="#FFF" />
                      </View>
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.countryInfo}
                    onPress={() => handleCountryPress(country.id)}
                  >
                    <View style={styles.countryNameRow}>
                      <Text style={styles.countryName}>{country.name}</Text>
                      {!isAccessible && (
                        <View style={styles.lockIcon}>
                          <Lock size={16} color="#9CA3AF" />
                        </View>
                      )}
                    </View>
                    <Text style={styles.continent}>{country.continent}</Text>
                    {isAccessible && (
                      <View style={styles.progressContainer}>
                        <View style={styles.progressBar}>
                          <View style={[styles.progressFill, { width: `${completionPercentage}%` }]} />
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
              );
            })}
            <View style={{ height: 20 }} />
          </ScrollView>
        </View>
      )}
      
      <Paywall
        visible={showPaywall}
        onClose={() => {
          setShowPaywall(false);
          setSelectedCountry(null);
        }}
        country={selectedCountry ? countries.find(c => c.id === selectedCountry) : undefined}
        countries={countries}
        onPurchase={(productId) => {
          simulatePurchase(productId);
          setShowPaywall(false);
          setSelectedCountry(null);
        }}
        purchasedProducts={purchasedProducts}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '700' as const,
    color: '#2D1B00',
  },
  viewToggle: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 4,
    gap: 4,
  },
  toggleButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  toggleButtonActive: {
    backgroundColor: '#FF6B35',
  },
  mapViewContainer: {
    flex: 1,
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  globeWrapper: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    overflow: 'hidden',
    paddingVertical: 20,
  },
  randomButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6B35',
    paddingVertical: 16,
    borderRadius: 16,
    marginTop: 16,
    gap: 8,
    shadowColor: '#FF6B35',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  randomButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600' as const,
  },
  filterContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
  },
  filterButtonActive: {
    backgroundColor: '#6B7280',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: '#6B7280',
  },
  filterTextActive: {
    color: '#FFF',
  },
  listContainer: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#2D1B00',
  },
  list: {
    flex: 1,
    paddingHorizontal: 16,
  },
  countryCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    gap: 16,
  },
  flagButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flag: {
    fontSize: 40,
  },
  countryInfo: {
    flex: 1,
    gap: 4,
  },
  countryName: {
    fontSize: 18,
    fontWeight: '600' as const,
    color: '#2D1B00',
  },
  continent: {
    fontSize: 14,
    color: '#6B7280',
  },
  progressContainer: {
    marginTop: 4,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#E8D5C4',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#10B981',
    borderRadius: 3,
  },
  countryListSection: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: '#2D1B00',
    marginBottom: 16,
  },
  countryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  countryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    gap: 8,
    minWidth: '47%',
    maxWidth: '47%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  countryChipFlag: {
    fontSize: 20,
  },
  countryChipName: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600' as const,
    color: '#2D1B00',
  },
  emptyFavorites: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingTop: 80,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: '#2D1B00',
    marginTop: 24,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  countryNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  lockIcon: {
    opacity: 0.6,
  },
  lockBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    backgroundColor: '#FF6B35',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  flagLocked: {
    opacity: 0.5,
  },
})
