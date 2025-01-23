import { fetchInstance } from 'api';

export const fetchAllArtworks = async () => {
  return await fetchInstance();
};

export const fetchArtworkById = async (id: number) => {
  return await fetchInstance(`/${id}`);
};

export const fetchPaginatedArtworks = async (page: number, limit: number) => {
  return await fetchInstance(`?page=${page}&limit=${limit}`);
};

export const fetchArtworksByIds = async (ids: number[]) => {
  const idsParam = ids.join(',');
  const endpoint = `/?ids=${idsParam}`;
  return await fetchInstance(endpoint);
};
