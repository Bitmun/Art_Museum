import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

import { FastOmit } from 'styled-components';
import { IStyledComponentBase } from 'styled-components/dist/types';

export interface ArtImgProps {
  imgSrc: string;
  title: string;
  CustomImg?: IStyledComponentBase<
    'web',
    FastOmit<
      DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
      never
    >
  > &
    string;
}
