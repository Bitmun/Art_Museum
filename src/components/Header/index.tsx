import { HeaderContainer, IconTextContainer, MuseumLogo, TopBar } from './styled';

import bookmark from 'assets/images/bookmark.svg';
import museumLogo from 'assets/images/museum-logo.svg';
export const Header = () => {
  return (
    <HeaderContainer>
      <TopBar>
        <MuseumLogo src={museumLogo} alt="Museum logo" />
        <IconTextContainer>
          <img src={bookmark} alt="Bookmark icon" />
          Your favourites
        </IconTextContainer>
      </TopBar>
    </HeaderContainer>
  );
};
