import styled from 'styled-components';

export const LinkButton = styled.button``;

export const IconTextContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font: inherit;

  &:hover {
    text-decoration: underline;
  }
`;
