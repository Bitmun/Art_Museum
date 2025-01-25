import styled from 'styled-components';

export const ClosedBurger = styled.div`
  display: none;
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;
`;

export const OpenedBurger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    transform: translateY(0);
  }
`;

export const BurgerTopContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;

  button {
    background: none;
    border: none;
  }
`;

export const BurgerNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 2rem;
`;
