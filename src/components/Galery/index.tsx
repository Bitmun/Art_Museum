import { useEffect, useState } from 'react';

import { GaleryUnit } from './GaleryUnit';
import { PaginationRow } from './PaginationRow';
import { SortField } from './SortField';
import { GaleryContainer, UnitsRow } from './styled';

import { Loader } from 'components/Loader';
import { SortFields } from 'constants/sorting';
import { usePaginatedArtworks } from 'hooks/artWorkHooks';
import { useSearchContext } from 'hooks/useSearch';
import { getLimit } from 'utils/handlers/limitHandle';
import { artSort } from 'utils/sorts';

export const Galery = () => {
  const { query } = useSearchContext();
  const [limit, setLimit] = useState(getLimit());
  const [currentPage, setCurrentPage] = useState(1);
  const { response, isLoading, error } = usePaginatedArtworks(currentPage, limit, query);
  const [currentSort, setCurrentSort] = useState<SortFields>(SortFields.TITLE);

  useEffect(() => {
    const handleResize = () => {
      setLimit(getLimit());
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    throw new Error('Galery fetching error');
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
