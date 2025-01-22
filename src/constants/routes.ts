import { createElement } from 'react';

import { Details } from 'pages/Details';
import { Favourites } from 'pages/Favourites';
import { Home } from 'pages/Home';

export const ROUTES = [
  {
    path: '/',
    element: createElement(Home),
  },
  {
    path: '/favourites',
    element: createElement(Favourites),
  },
  {
    path: '/artwork/:id',
    element: createElement(Details),
  },
];
