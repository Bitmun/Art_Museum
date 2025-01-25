import { BurgerButtonContainer } from './styled';
import { BurgerButtonProps } from './type';

export const BurgerButton = ({ toggleBurgerMenu }: BurgerButtonProps) => {
  return <BurgerButtonContainer onClick={toggleBurgerMenu}>☰</BurgerButtonContainer>;
};
