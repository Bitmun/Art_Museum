import { PagButton, PaginationContainer, SelectedPagButton } from './styled';
import { PaginationRowProps } from './type';

export const PaginationRow = ({
  setCurrentPage,
  currentPage,
  totalPages,
}: PaginationRowProps) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const pageNumbers = [];
  const maxPagesToShow = 4;
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      <PagButton onClick={handlePreviousPage} disabled={currentPage === 1}>
        &lt;
      </PagButton>
      {pageNumbers.map((page) =>
        page === currentPage ? (
          <SelectedPagButton key={page} disabled>
            {page}
          </SelectedPagButton>
        ) : (
          <PagButton key={page} onClick={() => handlePageClick(page)}>
            {page}
          </PagButton>
        ),
      )}
      <PagButton onClick={handleNextPage} disabled={currentPage === totalPages}>
        &gt;
      </PagButton>
    </PaginationContainer>
  );
};
