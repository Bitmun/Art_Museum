import { SearchBarContainer, SearchIcon, SearchInput } from './styled';

import searchLogo from 'assets/images/search.svg';
import { useSearchContext } from 'hooks/useSearch';
import { debounce } from 'utils/search';

export const SearchBar = () => {
  const { setQuery } = useSearchContext();

  const handleSearchChange = debounce((input: string) => {
    setQuery(input);
  }, 500);

  return (
    <SearchBarContainer>
      <SearchInput
        placeholder="Search art, artist, work..."
        onChange={(e) => handleSearchChange(e.target.value)}
      />
      <SearchIcon src={searchLogo} alt="Search icon" />
    </SearchBarContainer>
  );
};
