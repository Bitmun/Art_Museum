import { InfoCardContainer, InfoCardImg, InfoCardTextContainer } from './styled';
import { InfoCardProps } from './type';

import { ArtImg } from 'components/ArtImg';
import { FavoriteButton } from 'components/FavoriteButton';
import { useArtworkImgSrc } from 'hooks/useArtWorkImgSrc';
import { useNavigate } from 'react-router-dom';
import { SubText } from 'styles';

export const InfoCard = ({ artWork, showImg = false }: InfoCardProps) => {
  const { id, title, artist_title, is_public_domain, image_id } = artWork;
  const { imgSrc } = useArtworkImgSrc(image_id);
  const navigate = useNavigate();

  return (
    <InfoCardContainer onClick={() => navigate(`/artwork/${id}`)}>
      {showImg && <ArtImg imgSrc={imgSrc} title={title} CustomImg={InfoCardImg} />}
      <InfoCardTextContainer>
        <p>{title}</p>
        <SubText>{artist_title || 'Unknown'}</SubText>
        <p>{is_public_domain ? 'Public' : 'Private'}</p>
      </InfoCardTextContainer>
      <FavoriteButton artId={id} />
    </InfoCardContainer>
  );
};
