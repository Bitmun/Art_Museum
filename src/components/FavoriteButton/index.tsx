import {
  FavoriteButtonContainer,
  FavoriteButtonImage,
  NotFavoriteButtonContainer,
} from './styled';
import { FavoriteButtonProps } from './type';

import bookMark from 'assets/images/bookmark.svg';
import { useArtWorksContext } from 'hooks/artWorkHooks';
import { useFavorites } from 'hooks/useFavorites';

export const FavoriteButton = ({ artId }: FavoriteButtonProps) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  let setArtWorks;
  try {
    setArtWorks = useArtWorksContext().setArtWorks;
  } catch (err: unknown) {
    console.log(err);
    setArtWorks = null;
  }

  const ButtonContainer = isFavorite(artId)
    ? FavoriteButtonContainer
    : NotFavoriteButtonContainer;

  const handleClick = (id: number) => {
    toggleFavorite(id);
    if (setArtWorks) {
      setArtWorks((prev) => {
        return prev.filter((art) => art.id !== id);
      });
    }
  };

  return (
    <ButtonContainer onClick={() => handleClick(artId)}>
      <FavoriteButtonImage src={bookMark} alt="bookMark" />
    </ButtonContainer>
  );
};
