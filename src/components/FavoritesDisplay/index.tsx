import { FavoritesContainer, HeadTextContainer } from './styled';

import bookmark from 'assets/images/bookmark.svg';
import { SupportText } from 'components/SupportText';
import { UnitsGrid } from 'components/UnitsGridProvider/UnitsGrid';
import { useArtWorksContext } from 'hooks/artWorkHooks';

export const FavoritesDisplay = () => {
  const { artWorks } = useArtWorksContext();
  const noFavorites = !artWorks || artWorks.length === 0;
  return (
    <FavoritesContainer>
      <HeadTextContainer>
        <h1>
          Here are your
          <br />
          <img src={bookmark} alt="Bookmark icon" />
          <span style={{ color: '#F17900' }}>Favorites</span>
        </h1>
      </HeadTextContainer>
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
