import { FavoritesContainer, MainTextContainer } from './styled';

import bookmark from 'assets/images/bookmark.svg';
import { SupportText } from 'components/SupportText';
import { UnitsGrid } from 'components/UnitsGridProvider/UnitsGrid';
import { useArtWorksContext } from 'hooks/artWorkHooks';

export const FavoritesDisplay = () => {
  const { artWorks } = useArtWorksContext();
  const noFavorites = !artWorks || artWorks.length === 0;
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
          <UnitsGrid artWorks={artWorks} />
        </>
      )}
    </FavoritesContainer>
  );
};
