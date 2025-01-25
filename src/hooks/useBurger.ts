import { useEffect, useState } from 'react';

export const useBurger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const toggleBurgerMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeBurgerMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isOpen, toggleBurgerMenu, closeBurgerMenu, windowWidth };
};
