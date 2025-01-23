import { Dispatch, SetStateAction } from 'react';

import { ArtWork } from 'types';

export interface InfoCardProps {
  artWork: ArtWork;
  showImg?: boolean;
  setArtWork?: Dispatch<SetStateAction<ArtWork[]>>;
}
