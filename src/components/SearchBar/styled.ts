import styled from 'styled-components';

export const SearchInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
`;

export const SearchBarContainer = styled.form`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 60%;
  padding: 16px;
  gap: 5px;
  background-color: #3939390d;
  border-radius: 16px;
`;

export const SearchIcon = styled.img``;

export const ErrorMessageContainer = styled.div`
  position: absolute;
  top: 100%;
  color: red;
`;
