import { InfoCardWrapper, UnitContainer, UnitImg } from './styled';
import { GaleryUnitProps } from './type';

import { ArtImg } from 'components/ArtImg';
import { InfoCard } from 'components/InfoCard';
import { useArtworkImgSrc } from 'hooks/useArtWorkImgSrc';
import { useNavigate } from 'react-router-dom';

export const GaleryUnit = ({ artWork }: GaleryUnitProps) => {
  const { id, image_id, title } = artWork;
  const { imgSrc } = useArtworkImgSrc(image_id);
  const navigate = useNavigate();

  return (
    <UnitContainer
      onClick={() => {
        navigate(`/artwork/${id}`);
      }}
    >
      <ArtImg title={title} imgSrc={imgSrc} CustomImg={UnitImg} />
      <InfoCardWrapper>
        <InfoCard artWork={artWork} />
      </InfoCardWrapper>
    </UnitContainer>
  );
};
