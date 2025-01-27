import styled from 'styled-components';

export const PaginationContainer = styled.div`
  button {
    padding: 7px 12px;
    font-size: 1rem;

    &:disabled {
      cursor: default;
    }
  }
`;

export const PagButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  outline: none;

  &:hover&:not(:disabled) {
    border-radius: 4px;
    background-color: #fad9a8;
  }
`;

export const SelectedPagButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: var(--subTextSecondary-color);
  color: white;
`;
