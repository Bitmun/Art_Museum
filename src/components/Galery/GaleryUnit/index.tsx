import { InfoCardWrapper, UnitContainer } from './styled';
import { GaleryUnitProps } from './type';

import notFoundImg from 'assets/images/notFoundImg.svg';
import { InfoCard } from 'components/InfoCard';
import { useArtworkImgSrc } from 'hooks/useArtWorkImgSrc';
import { useNavigate } from 'react-router-dom';

export const GaleryUnit = ({ artWork }: GaleryUnitProps) => {
  const { id, image_id } = artWork;
  const { imgSrc } = useArtworkImgSrc(image_id);
  const navigate = useNavigate();
  return (
    <UnitContainer
      onClick={() => {
        navigate(`/artwork/${id}`);
      }}
    >
      <img
        src={imgSrc}
        alt={imgSrc}
        style={{ width: '100%', height: '100%' }}
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
