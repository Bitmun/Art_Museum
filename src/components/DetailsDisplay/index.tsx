import { OverwiewFieldsList } from './OverwiewFieldsList';
import {
  DetailsContainer,
  FavoriteButtonWrapper,
  ImagePart,
  OverwiewContainer,
  TextPart,
} from './styled';
import { DetailsDisplayProps } from './type';

import { ArtImg } from 'components/ArtImg';
import { FavoriteButton } from 'components/FavoriteButton';
import { useArtworkImgSrc } from 'hooks/useArtWorkImgSrc';
import { SubText } from 'styles';

export const DetailsDisplay = ({ artWork }: DetailsDisplayProps) => {
  const { id, title, artist_title, image_id } = artWork;
  const { imgSrc } = useArtworkImgSrc(image_id);

  return (
    <DetailsContainer>
      <ImagePart>
        <ArtImg imgSrc={imgSrc} title={title} />
        <FavoriteButtonWrapper>
          <FavoriteButton artId={id} />
        </FavoriteButtonWrapper>
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
