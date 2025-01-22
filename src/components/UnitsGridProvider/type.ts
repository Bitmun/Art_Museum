import { ArtHook } from 'hooks/type';
import { Artwork } from 'types';

export interface UnitsProviderProps {
  artHook: () => ArtHook<Artwork>;
}
