import { InfoCardContainer, InfoCardTextContainer } from './styled';
import { InfoCardProps } from './type';

import { FavoriteButton } from 'components/FavoriteButton';
import { SubText } from 'styles';

export const InfoCard = ({ artWork, showImg = false }: InfoCardProps) => {
  const { title, artist_title, is_public_domain, id } = artWork;
  const imgSrc = `https://placehold.co/80x80`;
  return (
    <InfoCardContainer>
      {showImg && <img src={imgSrc} alt={title} />}
      <InfoCardTextContainer>
        <p>{title}</p>
        <SubText>{artist_title || 'Unknown'}</SubText>
        <p>{is_public_domain ? 'Public' : 'Private'}</p>
      </InfoCardTextContainer>
      <FavoriteButton artId={id} />
    </InfoCardContainer>
  );
};
