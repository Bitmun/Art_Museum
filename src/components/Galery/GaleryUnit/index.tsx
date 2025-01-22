import { InfoCardWrapper, UnitContainer } from './styled';
import { GaleryUnitProps } from './type';

import { InfoCard } from 'components/InfoCard';

export const GaleryUnit = ({ artWork }: GaleryUnitProps) => {
  const imgSrc = `https://placehold.co/387x444`;
  return (
    <UnitContainer>
      <img src={imgSrc} alt={imgSrc} />
      <InfoCardWrapper>
        <InfoCard artWork={artWork} />
      </InfoCardWrapper>
    </UnitContainer>
  );
};
