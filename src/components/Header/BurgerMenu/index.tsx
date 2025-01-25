import { NavLinks } from '../NavLinks';

import {
  BurgerNavContainer,
  BurgerTopContainer,
  ClosedBurger,
  OpenedBurger,
} from './styled';
import { BurgerMenuProps } from './type';

import cloceIcon from 'assets/images/close-icon.svg';

export const BurgerMenu = ({ isOpen, toggleBurgerMenu }: BurgerMenuProps) => {
  const BurgerContainer = isOpen ? OpenedBurger : ClosedBurger;

  return (
    <BurgerContainer>
      <BurgerTopContainer>
        <button onClick={toggleBurgerMenu}>
          <img src={cloceIcon} alt="logo" />
        </button>
      </BurgerTopContainer>
      <BurgerNavContainer>
        <NavLinks callBack={toggleBurgerMenu} />
      </BurgerNavContainer>
    </BurgerContainer>
  );
};
