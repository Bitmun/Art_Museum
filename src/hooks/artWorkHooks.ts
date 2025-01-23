import { useContext } from 'react';

import { useFetch } from './useFetch';

import {
  fetchAllArtworks,
  fetchArtworkById,
  fetchArtworksByIds,
  fetchPaginatedArtworks,
} from 'api/artworksService';
import { ArtWorksContext } from 'contexts/favoritesContext';
import { ArtWork } from 'types';

const DEFAULT_LIMIT = 12;

export const useArtworks = () => {
  return useFetch<ArtWork[]>(fetchAllArtworks);
};

export const useArtworkById = (id: number) => {
  return useFetch<ArtWork>(() => fetchArtworkById(id), [id]);
};

export const usePaginatedArtworks = (page: number, limit: number = DEFAULT_LIMIT) => {
  return useFetch<ArtWork[]>(() => fetchPaginatedArtworks(page, limit), [page, limit]);
};

export const useArtworksById = (ids: number[]) => {
  if (ids.length === 0) {
    return { response: { data: [] }, isLoading: false, error: null };
  }
  const stableIds = JSON.stringify(ids);

  return useFetch<ArtWork[]>(() => fetchArtworksByIds(ids), [stableIds]);
};

export const useArtWorksContext = () => {
  const context = useContext(ArtWorksContext);
  if (!context) {
    throw new Error('useArtWorks must be used within an ArtWorksProvider');
  }
  return context;
};
