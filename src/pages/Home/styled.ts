import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 4rem;
    width: 60%;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;

  @media (max-width: 1300px) {
    width: 90%;
  }
`;
