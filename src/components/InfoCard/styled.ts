import styled from 'styled-components';

export const InfoCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2% 4%;
  box-sizing: border-box;
  border: 1px solid #f0f1f1;
  background-color: #fff;
`;

export const InfoCardTextContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1.5fr 1fr;
  width: 70%;

  p {
    margin: 3%;
    overflow: hidden;
    white-space: nowrap; /* Prevents text from wrapping */
    text-overflow: ellipsis; /* Adds ellipsis (...) for overflowing text */
  }
`;
