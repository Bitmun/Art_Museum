import { InfoCardContainer, InfoCardTextContainer } from './styled';
import { InfoCardProps } from './type';

import bookmark from 'assets/images/bookmark.svg';
import { SubText } from 'styles';

export const InfoCard = ({ artWork, showImg = false }: InfoCardProps) => {
  const { title, artist_title, is_public_domain } = artWork;
  const imgSrc = `https://placehold.co/80x80`;
  return (
    <InfoCardContainer>
      {showImg && <img src={imgSrc} alt={title} />}
      <InfoCardTextContainer>
        <p>{title}</p>
        <SubText>{artist_title || 'Unknown'}</SubText>
        <p>{is_public_domain ? 'Public' : 'Private'}</p>
      </InfoCardTextContainer>
      <img src={bookmark} alt="Book mark logo" />
    </InfoCardContainer>
  );
};
