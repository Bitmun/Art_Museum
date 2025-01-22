import { HomeContainer, SearchContainer } from './styled';

import { Galery } from 'components/Galery';
import { SearchBar } from 'components/SearchBar';
import { SupportText } from 'components/SupportText';
import { UnitsProvider } from 'components/UnitsGridProvider';
import { usePaginatedArtworks } from 'hooks/artWorkHooks';
import { MainContainer } from 'styles';

export const Home = () => {
  return (
    <MainContainer>
      <HomeContainer>
        <SearchContainer>
          <h1>
            Let&#39;s Find Some <span style={{ color: '#F17900' }}>Art</span> Here!
          </h1>
          <SearchBar />
        </SearchContainer>
        <SupportText mainText="Our special gallery" subText="Topics for you" />
        <Galery />
        <SupportText mainText="Other works for you" subText="Here some more" />
        <UnitsProvider artHook={() => usePaginatedArtworks(1)} />
      </HomeContainer>
    </MainContainer>
  );
};
