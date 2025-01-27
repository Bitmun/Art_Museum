import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0;
  height: 127px;
  background-color: #000;
  color: white;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;

  @media (max-width: 1300px) {
    width: 90%;
  }
`;

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoContainer = styled.button`
  max-width: 100%;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  max-width: 100%;
`;
