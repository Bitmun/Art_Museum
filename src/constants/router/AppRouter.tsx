import { ROUTES } from './routes';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  ROUTES.map((route) => ({
    path: route.path,
    element: route.element,
  })),
);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
