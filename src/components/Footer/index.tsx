import { BottomBar, FooterContainer, Logo } from './styled';

import modsenLogo from 'assets/images/modsen-logo.svg';
import museumLogo from 'assets/images/museum-logo2.svg';
export const Footer = () => {
  return (
    <FooterContainer>
      <BottomBar>
        <Logo src={museumLogo} alt="Museum logo" />
        <Logo src={modsenLogo} alt="Modsen logo" />
      </BottomBar>
    </FooterContainer>
  );
};
