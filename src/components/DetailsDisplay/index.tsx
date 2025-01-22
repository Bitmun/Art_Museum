import { OverwiewFieldsList } from './OverwiewFieldsList';
import { DetailsContainer, ImagePart, TextPart } from './styled';
import { DetailsDisplayProps } from './type';

import { SubText } from 'styles';

export const DetailsDisplay = ({ artWork }: DetailsDisplayProps) => {
  const { title, artist_title } = artWork;
  const imgSrc = `https://placehold.co/497x570`;
  return (
    <DetailsContainer>
      <ImagePart>
        <img src={imgSrc} alt={title} />
      </ImagePart>
      <TextPart>
        <div>
          <h2>{title}</h2>
          <SubText>{artist_title}</SubText>
          <p>1535–45</p>
        </div>
        <div>
          <h2>Overwiew</h2>
          <OverwiewFieldsList artWork={artWork} />
          <p>{artWork.is_public_domain ? 'Public' : 'Private'}</p>
        </div>
      </TextPart>
    </DetailsContainer>
  );
};
