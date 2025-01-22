import { Dispatch, SetStateAction } from 'react';

export interface PaginationRowProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}
