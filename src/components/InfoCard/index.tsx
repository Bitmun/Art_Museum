import { InfoCardContainer, InfoCardTextContainer } from './styled';
import { InfoCardProps } from './type';

import notFoundImg from 'assets/images/notFoundImg.svg';
import { FavoriteButton } from 'components/FavoriteButton';
import { useArtworkImgSrc } from 'hooks/useArtWorkImgSrc';
import { SubText } from 'styles';

export const InfoCard = ({ artWork, showImg = false }: InfoCardProps) => {
  const { id, title, artist_title, is_public_domain, image_id } = artWork;
  const { imgSrc } = useArtworkImgSrc(image_id);

  return (
    <InfoCardContainer>
      {showImg && (
        <img
          style={{ width: '80px', height: '80px' }}
          src={imgSrc}
          alt={title}
          onError={(e) => {
            (e.target as HTMLImageElement).src = notFoundImg;
          }}
        />
      )}
      <InfoCardTextContainer>
        <p>{title}</p>
        <SubText>{artist_title || 'Unknown'}</SubText>
        <p>{is_public_domain ? 'Public' : 'Private'}</p>
      </InfoCardTextContainer>
      <FavoriteButton artId={id} />
    </InfoCardContainer>
  );
};
