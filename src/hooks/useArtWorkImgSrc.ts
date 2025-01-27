import { artWorkImgSrcBuilder } from 'api/index';

export const useArtworkImgSrc = (id: number) => {
  const imgSrc = artWorkImgSrcBuilder(id);
  return { imgSrc };
};
