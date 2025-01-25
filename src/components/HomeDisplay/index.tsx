import { ErrorBoundary } from 'components/ErrorBoundary';
import { Galery } from 'components/Galery';
import { SearchBar } from 'components/SearchBar';
import { SupportText } from 'components/SupportText';
import { UnitsGridProvider } from 'components/UnitsGridProvider';
import { SearchContextProvider } from 'contexts/searchContext';
import { usePaginatedArtworks } from 'hooks/artWorkHooks';
import { HomeContainer, SearchContainer } from 'pages/Home/styled';

export const HomeDisplay = () => {
  return (
    <SearchContextProvider>
      <HomeContainer>
        <SearchContainer>
          <h1>
            Let&#39;s Find Some <span style={{ color: '#F17900' }}>Art</span> Here!
          </h1>
          <SearchBar />
        </SearchContainer>
        <ErrorBoundary>
          <SupportText mainText="Our special gallery" subText="Topics for you" />
          <Galery />
        </ErrorBoundary>
        <SupportText mainText="Other works for you" subText="Here some more" />
        <ErrorBoundary>
          <UnitsGridProvider artHook={() => usePaginatedArtworks(1)} />
        </ErrorBoundary>
      </HomeContainer>
    </SearchContextProvider>
  );
};
