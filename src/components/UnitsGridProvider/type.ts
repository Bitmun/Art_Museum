import { ArtHook } from 'hooks/type';
import { ArtWork } from 'types';

export interface UnitsProviderProps {
  artHook: () => ArtHook<ArtWork>;
}
