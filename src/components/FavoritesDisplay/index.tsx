import { FavoritesContainer, MainTextContainer } from './styled';
import { FavoritesDisplayProps } from './type';

import bookmark from 'assets/images/bookmark.svg';
import { SupportText } from 'components/SupportText';
import { UnitsGrid } from 'components/UnitsGridProvider/UnitsGrid';

export const FavoritesDisplay = ({ favorites }: FavoritesDisplayProps) => {
  const noFavorites = !favorites || favorites.length === 0;
  return (
    <FavoritesContainer>
      <MainTextContainer>
        <h1>Here are your</h1>
        <div>
          <img src={bookmark} alt="Bookmark icon" />
          <h1 style={{ color: '#F17900' }}>Favorites</h1>
        </div>
      </MainTextContainer>
      {noFavorites ? (
        <h2>No favorites yet...</h2>
      ) : (
        <>
          <SupportText mainText="Your favorites list" subText="Saved by you" />
          <UnitsGrid artWorks={favorites} />
        </>
      )}
    </FavoritesContainer>
  );
};
