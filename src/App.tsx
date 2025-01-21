import { Header } from 'components/Header';
import { AppRouter } from 'constants/router/Approuter';

export const App = () => {
  return (
    <div>
      <Header />
      <AppRouter />
    </div>
  );
};
