import { FAVORITES_NAV_LINKS, HOME_NAV_LINKS } from 'constants/header';
import { useLocation } from 'react-router-dom';

export const useNavigationLinks = () => {
  const location = useLocation();

  let navLinks = FAVORITES_NAV_LINKS;

  if (location.pathname === '/') {
    navLinks = HOME_NAV_LINKS;
  }

  return { navLinks };
};
