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
  transition: transform 0.3s ease-in-out;
  font: inherit;
  text-align: inherit;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

export const InfoCardTextContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1.5fr 1fr;
  width: 70%;

  p {
    margin: 3%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const InfoCardImg = styled.img`
  width: 80px;
  height: 80px;
`;
