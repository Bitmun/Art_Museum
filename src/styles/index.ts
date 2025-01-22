import { styled } from 'styled-components';

export const SubText = styled.p`
  font-size: 16px;
  color: #e0a449;
  weight: 400;
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 4%;
  background-color: #fafafa;
`;

export const SupportText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 16px;
    color: #e0a449;
    weight: 400;
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
    font-size: 2rem;
    font-weight: 400;
  }
`;
