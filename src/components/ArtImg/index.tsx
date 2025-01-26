import { useState } from 'react';

import { DefaultImg } from './styled';
import { ArtImgProps } from './type';

import notFoundImg from 'assets/images/notFoundImg.svg';

export const ArtImg = ({ title, imgSrc, CustomImg }: ArtImgProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const TagToDisplay = CustomImg ? CustomImg : DefaultImg;

  return (
    <>
      {!imageLoaded && <TagToDisplay src={notFoundImg} alt="Not found" />}
      <TagToDisplay
        src={imgSrc}
        alt={title}
        style={{ display: imageLoaded ? 'block' : 'none' }}
        onLoad={() => {
          setImageLoaded(true);
        }}
      />
    </>
  );
};
