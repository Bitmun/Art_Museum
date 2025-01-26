import bookmark from 'assets/images/bookmark.svg';
import homeLogo from 'assets/images/home.svg';

export interface NavLinks {
  imgSrc: string;
  text: string;
  path: string;
}

export const FAVORITES_NAV_LINKS: NavLinks[] = [
  {
    imgSrc: homeLogo,
    text: 'Home',
    path: '/',
  },
  {
    imgSrc: bookmark,
    text: 'Favorite',
    path: '/favorites',
  },
];

export const HOME_NAV_LINKS: NavLinks[] = [
  {
    imgSrc: bookmark,
    text: 'Favorite',
    path: '/favorites',
  },
];
