import { useState } from 'react';

import { InfoCardContainer, InfoCardImg, InfoCardTextContainer } from './styled';
import { InfoCardProps } from './type';

import notFoundImg from 'assets/images/notFoundImg.svg';
import { FavoriteButton } from 'components/FavoriteButton';
import { useArtworkImgSrc } from 'hooks/useArtWorkImgSrc';
import { useNavigate } from 'react-router-dom';
import { SubText } from 'styles';

export const InfoCard = ({ artWork, showImg = false }: InfoCardProps) => {
  const { id, title, artist_title, is_public_domain, image_id } = artWork;
  const { imgSrc } = useArtworkImgSrc(image_id);
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <InfoCardContainer onClick={() => navigate(`/artwork/${id}`)}>
      {showImg && (
        <>
          {!imageLoaded && <InfoCardImg src={notFoundImg} alt="Not found image" />}
          <InfoCardImg
            src={imgSrc}
            alt={title}
            style={{ display: imageLoaded ? 'block' : 'none' }}
            onLoad={() => {
              setImageLoaded(true);
            }}
          />
        </>
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
