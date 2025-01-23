import { IconTextContainer, NavigationContainer } from './styled';

import bookmark from 'assets/images/bookmark.svg';
import homeLogo from 'assets/images/home.svg';
import { Link, useLocation } from 'react-router-dom';

export const NavBar = () => {
  const location = useLocation();

  return (
    <NavigationContainer>
      {location.pathname !== '/' && (
        <Link to="/">
          <IconTextContainer>
            <img src={homeLogo} alt="Another icon" />
            Home
          </IconTextContainer>
        </Link>
      )}
      <Link to="/favorites">
        <IconTextContainer>
          <img src={bookmark} alt="Bookmark icon" />
          Your favourites
        </IconTextContainer>
      </Link>
    </NavigationContainer>
  );
};
