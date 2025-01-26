import { useState } from 'react';

export const useBurger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeBurgerMenu = () => {
    setIsOpen(false);
  };

  return { isOpen, toggleBurgerMenu, closeBurgerMenu };
};
