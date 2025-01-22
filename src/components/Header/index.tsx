import { NavBar } from './NavBar';
import { HeaderContainer, Logo, TopBar } from './styled';

import museumLogo from 'assets/images/museum-logo.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <TopBar>
        <Logo src={museumLogo} alt="Museum logo" />
        <NavBar />
      </TopBar>
    </HeaderContainer>
  );
};
