import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100%;
  height: 127px;
  background-color: #000;
  z-index: 1000;
  color: #fff;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const MuseumLogo = styled.img`
  max-width: 100%;
`;

export const IconTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
