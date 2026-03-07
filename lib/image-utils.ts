import { Image } from 'expo-image';
import { Country } from '@/types';

type OptimizeOptions = {
  width?: number;
  quality?: number;
  format?: string;
  fit?: string;
};

const PLACEHOLDER_DOMAINS = [
  'placeholder.com',
  'placeimg.com',
  'placekitten.com',
  'placehold.it',
  'placehold.co',
  'via.placeholder.com',
  'dummyimage.com',
  'fakeimg.pl',
  'loremflickr.com',
  'picsum.photos',
];

export function isUnsplashUrl(url: string): boolean {
  return url.includes('images.unsplash.com');
}

export function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

export function isLikelyValidImageUrl(url: string): boolean {
  if (!url || url.trim().length === 0) return false;
  if (!isValidUrl(url)) return false;

  try {
    const parsed = new URL(url);
    const hostname = parsed.hostname.toLowerCase();

    for (const domain of PLACEHOLDER_DOMAINS) {
      if (hostname === domain || hostname.endsWith('.' + domain)) {
        return false;
      }
    }

    if (isUnsplashUrl(url)) {
      const pathParts = parsed.pathname.split('/').filter(Boolean);
      const photoIdIndex = pathParts.indexOf('photo') !== -1
        ? pathParts.indexOf('photo') + 1
        : pathParts.length - 1;
      const photoId = pathParts[photoIdIndex];
      if (photoId && photoId.length < 8) {
        return false;
      }
    }

    return true;
  } catch {
    return false;
  }
}

export function optimizeUnsplashUrl(url: string, options?: OptimizeOptions): string {
  if (!isUnsplashUrl(url)) return url;

  const width = options?.width ?? 800;
  const quality = options?.quality ?? 80;
  const format = options?.format ?? 'auto';
  const fit = options?.fit ?? 'crop';

  try {
    const parsed = new URL(url);
    parsed.searchParams.set('w', String(width));
    parsed.searchParams.set('q', String(quality));
    parsed.searchParams.set('fm', format);
    parsed.searchParams.set('fit', fit);
    return parsed.toString();
  } catch {
    return url;
  }
}

export function extractCountryImageUrls(country: Country): { field: string; url: string }[] {
  const results: { field: string; url: string }[] = [];

  if (country.landscapeImage) {
    results.push({ field: 'landscapeImage', url: country.landscapeImage });
  }

  if (country.mainDish?.imageUrl) {
    results.push({ field: 'mainDish.imageUrl', url: country.mainDish.imageUrl });
  }

  if (country.dessert?.imageUrl) {
    results.push({ field: 'dessert.imageUrl', url: country.dessert.imageUrl });
  }

  if (country.mustVisit) {
    country.mustVisit.forEach((place, index) => {
      if (place.imageUrl) {
        results.push({ field: `mustVisit[${index}].imageUrl`, url: place.imageUrl });
      }
    });
  }

  return results;
}

export async function preloadImages(urls: string[]): Promise<PromiseSettledResult<boolean>[]> {
  const tasks = urls.map((url) => {
    return Image.prefetch(url);
  });

  return Promise.allSettled(tasks);
}
