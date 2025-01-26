import styled from 'styled-components';

export const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 65%;

  @media (max-width: 1300px) {
    width: 90%;
  }
`;

export const HeadTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    padding: 0;
    margin: 0;
  }

  img {
    width: 2rem;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    margin: 0;
    margin-bottom: 3rem;
  }
`;
