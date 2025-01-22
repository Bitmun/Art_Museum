import { SearchBarContainer, SearchIcon, SearchInput } from './styled';

import searchLogo from 'assets/images/search.svg';

export const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchInput placeholder="Search art, artist, work..." />
      <SearchIcon src={searchLogo} alt="Search icon" />
    </SearchBarContainer>
  );
};
