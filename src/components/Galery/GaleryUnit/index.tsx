import { useState } from 'react';

import { InfoCardWrapper, UnitContainer, UnitImg } from './styled';
import { GaleryUnitProps } from './type';

import notFoundImg from 'assets/images/notFoundImg.svg';
import { InfoCard } from 'components/InfoCard';
import { useArtworkImgSrc } from 'hooks/useArtWorkImgSrc';
import { useNavigate } from 'react-router-dom';

export const GaleryUnit = ({ artWork }: GaleryUnitProps) => {
  const { id, image_id } = artWork;
  const { imgSrc } = useArtworkImgSrc(image_id);
  const navigate = useNavigate();

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <UnitContainer
      onClick={() => {
        navigate(`/artwork/${id}`);
      }}
    >
      {!imageLoaded && <UnitImg src={notFoundImg} alt={imgSrc} />}
      <UnitImg
        src={imgSrc}
        alt={imgSrc}
        style={{ display: imageLoaded ? 'block' : 'none' }}
        onLoad={() => {
          setImageLoaded(true);
        }}
      />
      <InfoCardWrapper>
        <InfoCard artWork={artWork} />
      </InfoCardWrapper>
    </UnitContainer>
  );
};
