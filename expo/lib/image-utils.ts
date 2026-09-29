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

export function isPexelsUrl(url: string): boolean {
  return url.includes('images.pexels.com');
}

type SizeOptions = {
  /** Target display width in points. */
  width?: number;
  /** Target display height in points. */
  height?: number;
  /** Crop to exactly width×height (matches `contentFit="cover"`). Only applies when both are known. */
  crop?: boolean;
  /** Device pixel ratio requested from the CDN. */
  dpr?: number;
};

type QueryParam = [key: string, value: string];

function parseQuery(query: string): QueryParam[] {
  if (!query) return [];
  return query
    .split('&')
    .filter(Boolean)
    .map((pair) => {
      const eq = pair.indexOf('=');
      return eq === -1 ? [pair, ''] : [pair.slice(0, eq), pair.slice(eq + 1)];
    });
}

function setQueryParam(params: QueryParam[], key: string, value: string | undefined): void {
  const index = params.findIndex(([k]) => k === key);
  if (value === undefined) {
    if (index !== -1) params.splice(index, 1);
  } else if (index !== -1) {
    params[index] = [key, value];
  } else {
    params.push([key, value]);
  }
}

/**
 * Pexels (imgix-backed) URLs look like
 * `https://images.pexels.com/photos/ID/pexels-photo-ID.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200`.
 * When the display size is known, rewrite `w`/`h` (and request `dpr=2`) so an
 * 80pt thumbnail doesn't download a 1200px image. If only one dimension is
 * known, the other is derived from the URL's original w/h ratio so the crop
 * framing is preserved. Without a known size, the URL is returned unchanged.
 */
export function optimizePexelsUrl(url: string, options?: SizeOptions): string {
  if (!isPexelsUrl(url)) return url;

  const targetWidth = options?.width && options.width > 0 ? Math.round(options.width) : undefined;
  const targetHeight = options?.height && options.height > 0 ? Math.round(options.height) : undefined;
  if (!targetWidth && !targetHeight) return url;

  const hashIndex = url.indexOf('#');
  const hash = hashIndex === -1 ? '' : url.slice(hashIndex);
  const withoutHash = hashIndex === -1 ? url : url.slice(0, hashIndex);
  const queryIndex = withoutHash.indexOf('?');
  const base = queryIndex === -1 ? withoutHash : withoutHash.slice(0, queryIndex);
  const params = parseQuery(queryIndex === -1 ? '' : withoutHash.slice(queryIndex + 1));

  const originalWidth = Number(params.find(([k]) => k === 'w')?.[1]);
  const originalHeight = Number(params.find(([k]) => k === 'h')?.[1]);
  const hasOriginalRatio = originalWidth > 0 && originalHeight > 0;

  let width = targetWidth;
  let height = targetHeight;
  if (width && !height && hasOriginalRatio) {
    height = Math.max(1, Math.round((width * originalHeight) / originalWidth));
  } else if (height && !width && hasOriginalRatio) {
    width = Math.max(1, Math.round((height * originalWidth) / originalHeight));
  }

  setQueryParam(params, 'w', width !== undefined ? String(width) : undefined);
  setQueryParam(params, 'h', height !== undefined ? String(height) : undefined);
  setQueryParam(params, 'dpr', String(options?.dpr ?? 2));
  if (options?.crop && targetWidth && targetHeight) {
    setQueryParam(params, 'fit', 'crop');
  }
  if (!params.some(([k]) => k === 'auto')) setQueryParam(params, 'auto', 'compress');

  const query = params.map(([k, v]) => `${k}=${v}`).join('&');
  return `${base}?${query}${hash}`;
}

/**
 * Returns a CDN-resized URL for known image hosts (Unsplash, Pexels).
 * Unsplash keeps its previous behaviour (800px default width); Pexels URLs
 * are only rewritten when a width and/or height is given.
 */
export function optimizeImageUrl(url: string, options?: SizeOptions): string {
  if (isUnsplashUrl(url)) return optimizeUnsplashUrl(url, { width: options?.width ?? 800 });
  if (isPexelsUrl(url)) return optimizePexelsUrl(url, options);
  return url;
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
