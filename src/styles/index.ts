import { styled } from 'styled-components';

export const SubText = styled.p`
  font-size: 16px;
  color: var(--subTextSecondary-color);
  weight: 400;
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 100%;
  padding-top: 3%;
  padding-bottom: 4%;
  background-color: var(--mainBackGround-color);
`;

export const SupportText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 16px;
    color: var(--subTextSecondary-color);
    weight: 400;
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
    font-size: 2rem;
    font-weight: 400;
  }
`;

export const SecondaryColorText = styled.span`
  color: var(--secondary-color);
`;
