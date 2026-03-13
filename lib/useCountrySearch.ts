import { useMemo, useState, useCallback, useRef } from 'react';
import { countries } from '@/data/countries';
import { Country } from '@/types';

// Pre-built search index for O(1) lookups by ID
const countryById = new Map<string, Country>(
  countries.map((c) => [c.id, c])
);

// Lightweight country summaries for globe pins and lists
// Avoids passing full country objects when only name/coords needed
export interface CountrySummary {
  id: string;
  name: string;
  flag: string;
  coordinates: { latitude: number; longitude: number };
  continent: string;
}

const countrySummaries: CountrySummary[] = countries.map((c) => ({
  id: c.id,
  name: typeof c.name === 'string' ? c.name : c.name.en,
  flag: c.flag,
  coordinates: c.coordinates,
  continent: c.continent,
}));

/**
 * Get a single country by ID — O(1) lookup instead of Array.find()
 */
export function getCountryById(id: string): Country | undefined {
  return countryById.get(id);
}

/**
 * Get lightweight summaries for list/globe rendering
 */
export function getCountrySummaries(): CountrySummary[] {
  return countrySummaries;
}

/**
 * Hook for paginated country browsing with search filtering.
 * Renders only a page of countries at a time to reduce memory.
 */
export function useCountrySearch(pageSize = 20) {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);

  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return countries;
    const q = searchQuery.toLowerCase().trim();
    return countries.filter((c) => {
      const name = typeof c.name === 'string' ? c.name : c.name.en;
      return (
        name.toLowerCase().includes(q) ||
        c.continent.toLowerCase().includes(q) ||
        c.id.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  const totalPages = Math.ceil(filtered.length / pageSize);

  const pageData = useMemo(
    () => filtered.slice(page * pageSize, (page + 1) * pageSize),
    [filtered, page, pageSize]
  );

  const nextPage = useCallback(() => {
    setPage((p) => Math.min(p + 1, totalPages - 1));
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setPage((p) => Math.max(p - 1, 0));
  }, []);

  const resetPage = useCallback(() => setPage(0), []);

  const search = useCallback((query: string) => {
    setSearchQuery(query);
    setPage(0);
  }, []);

  return {
    countries: pageData,
    allFiltered: filtered,
    totalCount: filtered.length,
    page,
    totalPages,
    hasNextPage: page < totalPages - 1,
    hasPrevPage: page > 0,
    searchQuery,
    search,
    nextPage,
    prevPage,
    resetPage,
  };
}

/**
 * Hook for filtering countries by continent.
 * Memoizes result to avoid recomputing on every render.
 */
export function useCountriesByContinent(continent: string | null) {
  return useMemo(() => {
    if (!continent) return countries;
    return countries.filter((c) => c.continent === continent);
  }, [continent]);
}
