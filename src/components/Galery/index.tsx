import { useState } from 'react';

import { GaleryUnit } from './GaleryUnit';
import { PaginationRow } from './PaginationRow';
import { SortField } from './SortField';
import { GaleryContainer, UnitsRow } from './styled';

import { SortFields } from 'constants/sorting';
import { usePaginatedArtworks } from 'hooks/artWorkHooks';
import { useSearchContext } from 'hooks/useSearch';
import { artSort } from 'utils/sorts';

export const Galery = () => {
  const { query } = useSearchContext();
  const [currentPage, setCurrentPage] = useState(1);
  const { response, isLoading, error } = usePaginatedArtworks(currentPage, 3, query);
  const [currentSort, setCurrentSort] = useState<SortFields>(SortFields.TITLE);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!response) {
    return <div>No response</div>;
  }

  if (!response.pagination) {
    return <div>No pagination</div>;
  }

  const { current_page, total_pages } = response.pagination;
  const { data } = response;

  artSort(data, currentSort);

  return (
    <GaleryContainer>
      <UnitsRow>
        {data.map((artwork) => (
          <GaleryUnit key={artwork.id} artWork={artwork} />
        ))}
      </UnitsRow>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <SortField currentSort={currentSort} setCurrentSort={setCurrentSort} />
        <PaginationRow
          currentPage={current_page}
          totalPages={total_pages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </GaleryContainer>
  );
};
