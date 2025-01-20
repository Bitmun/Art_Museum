import { Artwork } from './type';
import { useFetch } from './useFetch';

import {
  fetchAllArtworks,
  fetchArtworkById,
  fetchPaginatedArtworks,
} from 'api/artworksService';

export const useArtworks = () => {
  return useFetch<Artwork[]>(fetchAllArtworks);
};

export const useArtworkById = (id: number) => {
  return useFetch<Artwork>(() => fetchArtworkById(id), [id]);
};

export const usePaginatedArtworks = (page: number, limit: number = 3) => {
  return useFetch<Artwork[]>(() => fetchPaginatedArtworks(page, limit), [page, limit]);
};
