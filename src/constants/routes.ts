import { createElement } from 'react';

import { withErrorBoundary } from 'components/withErrorBoundary';
import { Details } from 'pages/Details';
import { Favorites } from 'pages/Favorites';
import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';

export const ROUTES = [
  {
    path: '/',
    element: createElement(withErrorBoundary(Home)),
  },
  {
    path: '/favorites',
    element: createElement(withErrorBoundary(Favorites)),
  },
  {
    path: '/artwork/:id',
    element: createElement(withErrorBoundary(Details)),
  },
  {
    path: '*',
    element: createElement(withErrorBoundary(NotFound)),
  },
];
