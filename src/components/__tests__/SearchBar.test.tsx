import React from 'react';

import { fireEvent, render, waitFor } from '@testing-library/react';

import { SearchBar } from 'components/SearchBar';
import { SearchContext, SearchContextProvider } from 'contexts/searchContext';
import { useSearchContext } from 'hooks/useSearch';

jest.mock('hooks/useSearch', () => ({
  useSearchContext: jest.fn(),
}));

describe('SearchBar', () => {
  it('updates search query on input change', async () => {
    const setQuery = jest.fn();
    (useSearchContext as jest.Mock).mockImplementation(() => ({ setQuery }));

    const { getByPlaceholderText } = render(<SearchBar />);

    const searchInput = getByPlaceholderText('Search art, artist, work...');
    fireEvent.change(searchInput, { target: { value: 'Test search query' } });

    await waitFor(
      () => {
        expect(setQuery).toHaveBeenCalledWith('Test search query');
      },
      { timeout: 1500 },
    );
  });
});

describe('SearchContextProvider', () => {
  it('provides search context value to children', () => {
    let valueFromContext;
    const TestComponent = () => {
      const contextValue = React.useContext(SearchContext);
      valueFromContext = contextValue;
      return null;
    };

    render(
      <SearchContextProvider>
        <TestComponent />
      </SearchContextProvider>,
    );

    expect(valueFromContext).toEqual({ query: '', setQuery: expect.any(Function) });
  });
});
