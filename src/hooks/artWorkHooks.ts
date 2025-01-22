import { useFetch } from './useFetch';

import {
  fetchAllArtworks,
  fetchArtworkById,
  fetchPaginatedArtworks,
} from 'api/artworksService';
import { Artwork } from 'types';

const DEFAULT_LIMIT = 12;

export const useArtworks = () => {
  return useFetch<Artwork[]>(fetchAllArtworks);
};

export const useArtworkById = (id: number) => {
  return useFetch<Artwork>(() => fetchArtworkById(id), [id]);
};

export const usePaginatedArtworks = (page: number, limit: number = DEFAULT_LIMIT) => {
  return useFetch<Artwork[]>(() => fetchPaginatedArtworks(page, limit), [page, limit]);
};
