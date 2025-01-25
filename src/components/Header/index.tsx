import { BurgerButton } from './BurgerButton';
import { BurgerMenu } from './BurgerMenu';
import { NavLinks } from './NavLinks';
import { HeaderContainer, Logo, NavigationContainer, TopBar } from './styled';

import museumLogo from 'assets/images/museum-logo.svg';
import { useBurger } from 'hooks/useBurger';

export const Header = () => {
  const { isOpen, toggleBurgerMenu } = useBurger();

  return (
    <HeaderContainer>
      <TopBar>
        <Logo src={museumLogo} alt="Museum logo" />
        <BurgerButton toggleBurgerMenu={toggleBurgerMenu} />
        <BurgerMenu isOpen={isOpen} toggleBurgerMenu={toggleBurgerMenu} />
        <NavigationContainer>
          <NavLinks />
        </NavigationContainer>
      </TopBar>
    </HeaderContainer>
  );
};
