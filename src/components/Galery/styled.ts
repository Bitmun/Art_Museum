import styled from 'styled-components';

export const GaleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

export const UnitsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;

  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const GalerySettingsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NoQueryRes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
