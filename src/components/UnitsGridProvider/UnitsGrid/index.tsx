import { UnitsGridContainer } from './styled';
import { UnitsGridProps } from './type';

import { InfoCard } from 'components/InfoCard';

export const UnitsGrid = ({ artWorks }: UnitsGridProps) => {
  return (
    <UnitsGridContainer>
      {artWorks.map((art) => (
        <InfoCard artWork={art} key={art.id} showImg />
      ))}
    </UnitsGridContainer>
  );
};
