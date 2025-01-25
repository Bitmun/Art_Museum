import styled from 'styled-components';

export const UnitContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: transform 0.3s ease-in-out;
  border: none;
  background-color: transparent;
  font: inherit;
  text-align: inherit;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

export const InfoCardWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  margin-top: -15%;
`;
