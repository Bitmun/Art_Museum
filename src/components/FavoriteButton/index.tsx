import {
  FavoriteButtonContainer,
  FavoriteButtonImage,
  NotFavoriteButtonContainer,
} from './styled';
import { FavoriteButtonProps } from './type';

import bookMark from 'assets/images/bookmark.svg';
import { useFavorites } from 'hooks/useFavorites';

export const FavoriteButton = ({ artId }: FavoriteButtonProps) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  const ButtonContainer = isFavorite(artId)
    ? FavoriteButtonContainer
    : NotFavoriteButtonContainer;

  const handleClick = (id: number) => {
    toggleFavorite(id);
  };

  console.log('rere');

  return (
    <ButtonContainer onClick={() => handleClick(artId)}>
      <FavoriteButtonImage src={bookMark} alt="bookMark" />
    </ButtonContainer>
  );
};
