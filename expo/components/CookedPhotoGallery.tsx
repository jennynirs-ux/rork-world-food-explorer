import { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Camera, ImagePlus, X, Trash2, Share2 } from 'lucide-react-native';
import {
  CookedPhoto,
  getPhotosForRecipe,
  deletePhoto,
  promptPhotoSource,
} from '@/lib/cooked-photos';
import { hapticLight, hapticMedium } from '@/lib/haptics';
import colors from '@/constants/colors';
import { useTranslation } from '@/lib/i18n';
import { useApp } from '@/contexts/AppContext';
import { useStrings } from '@/lib/strings';
import { shareStrings } from '@/lib/strings/share';
import { translateContent } from '@/lib/translate-content';
import { shareCookedIt } from '@/lib/share';
import { useShareCard } from '@/components/share/ShareCard';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const THUMB_SIZE = (SCREEN_WIDTH - 40 - 24) / 3; // 3 columns, 20px padding each side, 12px gaps

interface CookedPhotoGalleryProps {
  countryId: string;
  recipeId: string;
  isDessert: boolean;
  isCooked: boolean;
  /**
   * Optional text-share fallback. Photos are shared as a "cooked" story card;
   * this is only called on web or if the image card can't be created
   * (default: shareCookedIt from lib/share).
   */
  onSharePhoto?: (photoUri: string) => void;
}

export default function CookedPhotoGallery({
  countryId,
  recipeId,
  isDessert,
  isCooked,
  onSharePhoto,
}: CookedPhotoGalleryProps) {
  const { t, language } = useTranslation();
  const s = useStrings(shareStrings);
  const { countries } = useApp();
  const { shareCard, shareCardHost, isSharing } = useShareCard();
  const [photos, setPhotos] = useState<CookedPhoto[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<CookedPhoto | null>(null);

  const loadPhotos = useCallback(async () => {
    const loaded = await getPhotosForRecipe(countryId, recipeId);
    setPhotos(loaded);
  }, [countryId, recipeId]);

  useEffect(() => {
    void loadPhotos();
  }, [loadPhotos]);

  const handleAddPhoto = useCallback(() => {
    hapticLight();
    promptPhotoSource(countryId, recipeId, isDessert, (photo) => {
      setPhotos(prev => [photo, ...prev]);
    });
  }, [countryId, recipeId, isDessert]);

  const handleDeletePhoto = useCallback(
    (photo: CookedPhoto) => {
      Alert.alert(t.ui.deletePhotoTitle, t.ui.deletePhotoMessage, [
        { text: t.ui.cancel, style: 'cancel' },
        {
          text: t.ui.delete,
          style: 'destructive',
          onPress: async () => {
            hapticMedium();
            await deletePhoto(countryId, recipeId, photo.id);
            setPhotos(prev => prev.filter(p => p.id !== photo.id));
            setSelectedPhoto(null);
          },
        },
      ]);
    },
    [countryId, recipeId, t],
  );

  const handleSharePhoto = useCallback(
    (photo: CookedPhoto) => {
      hapticLight();
      const country = countries.find(c => c.id === countryId);
      const recipe = isDessert ? country?.dessert : country?.mainDish;
      const dishName = translateContent(recipe?.name, language);

      const textFallback = async () => {
        if (onSharePhoto) onSharePhoto(photo.uri);
        else if (country) await shareCookedIt(country, dishName, photo.uri, language);
      };

      if (!country) {
        void textFallback();
        return;
      }

      void shareCard(
        {
          variant: 'cooked',
          dishName,
          countryName: translateContent(country.name, language),
          flag: country.flag,
          imageUri: photo.uri,
        },
        textFallback,
      );
    },
    [countries, countryId, isDessert, language, onSharePhoto, shareCard],
  );

  const formatDate = (timestamp: string) => {
    const d = new Date(timestamp);
    return d.toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  if (!isCooked && photos.length === 0) return null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Camera size={18} color={colors.terracotta} />
        <Text style={styles.title}>{t.ui.myCookingPhotos}</Text>
        <Text style={styles.count}>{photos.length}</Text>
      </View>

      {photos.length > 0 && (
        <View style={styles.grid}>
          {photos.map(photo => (
            <TouchableOpacity
              key={photo.id}
              style={styles.thumb}
              onPress={() => {
                hapticLight();
                setSelectedPhoto(photo);
              }}
              activeOpacity={0.8}
            >
              <Image source={{ uri: photo.uri }} style={styles.thumbImage} />
            </TouchableOpacity>
          ))}
        </View>
      )}

      {isCooked && (
        <TouchableOpacity style={styles.addButton} onPress={handleAddPhoto}>
          <ImagePlus size={18} color={colors.terracotta} />
          <Text style={styles.addButtonText}>
            {photos.length === 0 ? t.ui.addFirstPhoto : t.ui.addPhoto}
          </Text>
        </TouchableOpacity>
      )}

      {/* Full-screen photo viewer */}
      <Modal
        visible={!!selectedPhoto}
        animationType="fade"
        transparent
        statusBarTranslucent
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => setSelectedPhoto(null)}
              accessibilityRole="button"
              accessibilityLabel={t.common.close}
            >
              <X size={24} color="#FFF" />
            </TouchableOpacity>
            <Text style={styles.modalDate}>
              {selectedPhoto ? formatDate(selectedPhoto.timestamp) : ''}
            </Text>
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.modalAction}
                onPress={() => selectedPhoto && handleSharePhoto(selectedPhoto)}
                disabled={isSharing}
                accessibilityRole="button"
                accessibilityLabel={s.sharePhoto}
                accessibilityState={{ busy: isSharing }}
              >
                {isSharing ? (
                  <ActivityIndicator size="small" color="#60A5FA" />
                ) : (
                  <Share2 size={22} color="#60A5FA" />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalAction}
                onPress={() => selectedPhoto && handleDeletePhoto(selectedPhoto)}
                accessibilityRole="button"
                accessibilityLabel={t.ui.delete}
              >
                <Trash2 size={22} color="#EF4444" />
              </TouchableOpacity>
            </View>
          </View>
          {selectedPhoto && (
            <Image
              source={{ uri: selectedPhoto.uri }}
              style={styles.fullImage}
              resizeMode="contain"
            />
          )}
          {/* Off-screen share card lives inside the modal so it is captured from the visible window. */}
          {shareCardHost}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: colors.text,
    flex: 1,
  },
  count: {
    fontSize: 14,
    color: colors.textTertiary,
    backgroundColor: colors.background,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  thumb: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: colors.border,
  },
  thumbImage: {
    width: '100%',
    height: '100%',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    borderWidth: 1.5,
    borderColor: colors.terracotta,
    borderRadius: 12,
    borderStyle: 'dashed',
  },
  addButtonText: {
    fontSize: 15,
    fontWeight: '600' as const,
    color: colors.terracotta,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    justifyContent: 'center',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
  },
  modalClose: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalDate: {
    color: '#D1D5DB',
    fontSize: 14,
    fontWeight: '500' as const,
  },
  modalActions: {
    flexDirection: 'row',
    gap: 4,
  },
  modalAction: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullImage: {
    flex: 1,
    width: SCREEN_WIDTH,
  },
});
