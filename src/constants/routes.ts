import { createElement } from 'react';

import { Details } from 'pages/Details';
import { Favorites } from 'pages/Favorites';
import { Home } from 'pages/Home';

export const ROUTES = [
  {
    path: '/',
    element: createElement(Home),
  },
  {
    path: '/favorites',
    element: createElement(Favorites),
  },
  {
    path: '/artwork/:id',
    element: createElement(Details),
  },
];
