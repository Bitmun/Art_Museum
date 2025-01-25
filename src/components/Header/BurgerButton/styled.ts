import styled from 'styled-components';

export const BurgerButtonContainer = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 2rem;
    background: none;
    border: none;
    color: #fff;
  }
`;
