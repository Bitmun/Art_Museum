import { yupResolver } from '@hookform/resolvers/yup';

import { SearchBarContainer, SearchIcon, SearchInput } from './styled';

import searchLogo from 'assets/images/search.svg';
import { useSearchContext } from 'hooks/useSearch';
import { Controller, useForm } from 'react-hook-form';
import { searchSchema } from 'utils/schemas/searchScema';
import { debounce, sanitizeInput } from 'utils/search';

export const SearchBar = () => {
  const { setQuery } = useSearchContext();

  const { control } = useForm({
    resolver: yupResolver(searchSchema),
    defaultValues: { query: '' },
  });

  const handleSearchChange = debounce((input: string) => {
    if (input.length === 0) {
      setQuery('');
    }
    if (input.length > 2) {
      setQuery(input.trim());
    }
  }, 500);

  return (
    <SearchBarContainer>
      <Controller
        name="query"
        control={control}
        render={({ field }) => (
          <SearchInput
            {...field}
            placeholder="Search art, artist, work..."
            onChange={(e) => {
              const sanitizedValue = sanitizeInput(e.target.value);
              field.onChange(sanitizedValue);
              handleSearchChange(sanitizedValue);
            }}
          />
        )}
      />
      <SearchIcon src={searchLogo} alt="Search icon" />
    </SearchBarContainer>
  );
};
