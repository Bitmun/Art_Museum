import styled from 'styled-components';

export const FavoriteButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 17px;
  border: none;
  border-radius: 35px;
  background: #fbd7b24d;

  &:hover {
    cursor: pointer;
  }
`;

export const NotFavoriteButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 17px;
  border: none;
  border-radius: 35px;
  background: #f9f9f9;

  &:hover {
    cursor: pointer;
  }
`;

export const FavoriteButtonImage = styled.img`
  width: 100%
  height: 100%;
  max-width: 30px;
  max-height: 30px;
`;
