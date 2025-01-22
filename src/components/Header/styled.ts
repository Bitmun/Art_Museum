import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0;
  height: 127px;
  background-color: #000;
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

export const Logo = styled.img`
  max-width: 100%;
`;
