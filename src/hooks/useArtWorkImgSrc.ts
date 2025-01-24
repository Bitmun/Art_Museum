import { artWorkImgSrcBuilder } from 'api';

export const useArtworkImgSrc = (id: number) => {
  const imgSrc = artWorkImgSrcBuilder(id);
  return { imgSrc };
};
