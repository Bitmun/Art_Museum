import { useFetch } from './useFetch';

import {
  fetchAllArtworks,
  fetchArtworkById,
  fetchPaginatedArtworks,
} from 'api/artworksService';
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
