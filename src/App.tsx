import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { AppRouter } from 'constants/router/AppRouter';

export const App = () => {
  return (
    <div>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
};
