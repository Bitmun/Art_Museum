import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100%;
  height: 127px;
  background-color: #fff;
  color: #fff;
`;

export const BottomBar = styled.div`
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
