import { useState } from 'react';

import { GaleryUnit } from './GaleryUnit';
import { PaginationRow } from './PaginationRow';
import { GaleryContainer, UnitsRow } from './styled';

import { usePaginatedArtworks } from 'hooks/artWorkHooks';
import { useSearchContext } from 'hooks/useSearch';

export const Galery = () => {
  const { query } = useSearchContext();
  const [currentPage, setCurrentPage] = useState(1);
  const { response, isLoading, error } = usePaginatedArtworks(currentPage, 3, query);

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

  return (
    <GaleryContainer>
      <UnitsRow>
        {data.map((artwork) => (
          <GaleryUnit key={artwork.id} artWork={artwork} />
        ))}
      </UnitsRow>
      <PaginationRow
        currentPage={current_page}
        totalPages={total_pages}
        setCurrentPage={setCurrentPage}
      />
    </GaleryContainer>
  );
};
