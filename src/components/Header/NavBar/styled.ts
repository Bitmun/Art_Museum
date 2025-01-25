import styled from 'styled-components';

export const IconTextContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;
