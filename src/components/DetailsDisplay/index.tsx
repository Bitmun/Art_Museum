import { OverwiewFieldsList } from './OverwiewFieldsList';
import {
  DetailsContainer,
  FavoriteBUttonWrapper,
  ImagePart,
  OverwiewContainer,
  TextPart,
} from './styled';
import { DetailsDisplayProps } from './type';

import { FavoriteButton } from 'components/FavoriteButton';
import { useArtworkImgSrc } from 'hooks/useArtWorkImgSrc';
import { SubText } from 'styles';

export const DetailsDisplay = ({ artWork }: DetailsDisplayProps) => {
  const { id, title, artist_title, image_id } = artWork;
  const { imgSrc } = useArtworkImgSrc(image_id);

  return (
    <DetailsContainer>
      <ImagePart>
        <img src={imgSrc} alt={title} />
        <FavoriteBUttonWrapper>
          <FavoriteButton artId={id} />
        </FavoriteBUttonWrapper>
      </ImagePart>
      <TextPart>
        <div>
          <h2>{title}</h2>
          <SubText>{artist_title}</SubText>
          <p>1535–45</p>
        </div>
        <OverwiewContainer>
          <h2>Overwiew</h2>
          <OverwiewFieldsList artWork={artWork} />
          <p>{artWork.is_public_domain ? 'Public' : 'Private'}</p>
        </OverwiewContainer>
      </TextPart>
    </DetailsContainer>
  );
};
