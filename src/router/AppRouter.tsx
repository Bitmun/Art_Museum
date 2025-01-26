import { ROUTES } from '../constants/routes';

import { ErrorBoundary } from 'components/ErrorBoundary';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

const Layout = () => (
  <>
    <Header />
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: ROUTES,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
