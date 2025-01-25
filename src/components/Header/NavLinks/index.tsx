import { IconTextContainer } from './styled';
import { NavLinksProps } from './type';

import { useNavigationLinks } from 'hooks/useNavigationLinks';
import { Link } from 'react-router-dom';

export const NavLinks = ({ callBack }: NavLinksProps) => {
  const { navLinks } = useNavigationLinks();

  return (
    <>
      {navLinks.map((link) => {
        const { imgSrc, text, path } = link;
        return (
          <Link key={path} to={path}>
            <IconTextContainer onClick={callBack && callBack}>
              <img src={imgSrc} alt={text} />
              {text}
            </IconTextContainer>
          </Link>
        );
      })}
    </>
  );
};
