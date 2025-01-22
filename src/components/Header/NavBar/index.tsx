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
      <Link to="/favourites">
        <IconTextContainer>
          <img src={bookmark} alt="Bookmark icon" />
          Your favourites
        </IconTextContainer>
      </Link>
    </NavigationContainer>
  );
};

// import React from 'react';

// import { HeaderContainer, Logo, TopBar } from './styled';

// import museumLogo from 'assets/images/museum-logo.svg';

// export const Header = () => {

//   return (
//     <HeaderContainer>
//       <TopBar>
//         <Logo src={museumLogo} alt="Museum logo" />

//         {location.pathname !== '/' && (
//           <IconTextContainer>
//             <img src={homeLogo} alt="Another icon" />
//             Home
//           </IconTextContainer>
//         )}
//       </TopBar>
//     </HeaderContainer>
//   );
// };