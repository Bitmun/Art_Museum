import { BurgerButton } from './BurgerButton';
import { BurgerMenu } from './BurgerMenu';
import { NavLinks } from './NavLinks';
import {
  HeaderContainer,
  LogoContainer,
  LogoImg,
  NavigationContainer,
  TopBar,
} from './styled';

import museumLogo from 'assets/images/museum-logo.svg';
import { useBurger } from 'hooks/useBurger';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const { isOpen, toggleBurgerMenu } = useBurger();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <HeaderContainer>
      <TopBar>
        <LogoContainer onClick={handleLogoClick}>
          <LogoImg src={museumLogo} alt="Museum logo" />
        </LogoContainer>
        <BurgerButton toggleBurgerMenu={toggleBurgerMenu} />
        <BurgerMenu isOpen={isOpen} toggleBurgerMenu={toggleBurgerMenu} />
        <NavigationContainer>
          <NavLinks />
        </NavigationContainer>
      </TopBar>
    </HeaderContainer>
  );
};
