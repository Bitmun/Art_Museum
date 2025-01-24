import { InfoCardWrapper, UnitContainer } from './styled';
import { GaleryUnitProps } from './type';

import notFoundImg from 'assets/images/notFoundImg.svg';
import { InfoCard } from 'components/InfoCard';
import { useArtworkImgSrc } from 'hooks/useArtWorkImgSrc';

export const GaleryUnit = ({ artWork }: GaleryUnitProps) => {
  const { image_id } = artWork;
  const { imgSrc } = useArtworkImgSrc(image_id);
  return (
    <UnitContainer>
      <img
        src={imgSrc}
        alt={imgSrc}
        style={{ width: '387px', height: '444px' }}
        onError={(e) => {
          (e.target as HTMLImageElement).src = notFoundImg;
        }}
      />
      <InfoCardWrapper>
        <InfoCard artWork={artWork} />
      </InfoCardWrapper>
    </UnitContainer>
  );
};
